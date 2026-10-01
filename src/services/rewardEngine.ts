/**
 * Centralized Reward Engine
 * Curious Learners / Codazi Learning Hub
 * 
 * Resolves learning events into configured Gems, XP, and Performance Points.
 * Strict deduplication and idempotency.
 * NO reward values scattered in UI components.
 */

import {
  RewardEventType,
  RewardRuleConfig,
  RewardEventResult
} from '../types/economy';
import { gemEconomy } from './gemEconomy';
import { progressionEngine } from './progressionEngine';
import { REWARD_CONFIG, DEFAULT_REWARD_RULES } from '../config/rewards';

export { REWARD_CONFIG, DEFAULT_REWARD_RULES };

const PROCESSED_REWARDS_KEY_PREFIX = 'curious_learners_reward_events_';

const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem(key);
      }
    } catch {}
    return null;
  },
  setItem: (key: string, val: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, val);
      }
    } catch {}
  }
};

class RewardEngine {
  private config: RewardRuleConfig = DEFAULT_REWARD_RULES;
  private listeners: Set<(result: RewardEventResult) => void> = new Set();

  private getProcessedEvents(studentId: string): Set<string> {
    const raw = safeStorage.getItem(`${PROCESSED_REWARDS_KEY_PREFIX}${studentId || 'guest'}`);
    if (raw) {
      try {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) {
          return new Set(arr);
        }
      } catch {}
    }
    return new Set();
  }

  private markEventProcessed(studentId: string, eventKey: string): void {
    const events = this.getProcessedEvents(studentId);
    events.add(eventKey);
    safeStorage.setItem(
      `${PROCESSED_REWARDS_KEY_PREFIX}${studentId || 'guest'}`,
      JSON.stringify(Array.from(events))
    );
  }

  /**
   * Check if a specific reward event was already claimed
   */
  public isRewardClaimed(studentId: string, eventType: RewardEventType, referenceId: string): boolean {
    const eventKey = `${eventType}:${referenceId}`;
    return this.getProcessedEvents(studentId).has(eventKey);
  }

  /**
   * Process a Learning Event and atomically resolve rewards
   */
  public processRewardEvent(
    studentId: string,
    eventType: RewardEventType,
    referenceId: string,
    options?: {
      isPerfect?: boolean;
      milestoneDay?: number;
      customMetadata?: any;
    }
  ): RewardEventResult {
    const sid = studentId || 'guest';
    const eventKey = `${eventType}:${referenceId}`;

    const currentWallet = gemEconomy.getWallet(sid);
    const currentXP = progressionEngine.getXPProfile(sid);
    const currentPoints = progressionEngine.getPointProfile(sid);

    // Guard against duplicate claims
    if (this.isRewardClaimed(sid, eventType, referenceId)) {
      return {
        eventId: eventKey,
        success: true,
        alreadyClaimed: true,
        gemsAwarded: 0,
        xpAwarded: 0,
        pointsAwarded: 0,
        wallet: currentWallet,
        xpProfile: currentXP,
        pointProfile: currentPoints,
        message: 'Reward already claimed for this event.'
      };
    }

    let gemsAwarded = 0;
    let xpAwarded = 0;
    let pointsAwarded = 0;

    switch (eventType) {
      case 'FIRST_LOGIN': {
        gemsAwarded = this.config.welcomeBonusGems;
        break;
      }

      case 'LESSON_COMPLETE': {
        gemsAwarded = this.config.lessonCompleteRewardGems;
        xpAwarded = this.config.lessonCompleteRewardXP;
        pointsAwarded = this.config.lessonCompleteRewardPoints;

        if (options?.isPerfect) {
          gemsAwarded += this.config.perfectLessonBonusGems;
          xpAwarded += this.config.perfectLessonBonusXP;
        }
        break;
      }

      case 'CHAPTER_COMPLETE': {
        gemsAwarded = this.config.chapterCompleteRewardGems;
        xpAwarded = this.config.chapterCompleteRewardXP;
        pointsAwarded = this.config.chapterCompleteRewardPoints;
        break;
      }

      case 'DAILY_GOAL_COMPLETE': {
        gemsAwarded = this.config.dailyGoalCompleteGems;
        xpAwarded = this.config.dailyGoalCompleteXP;
        break;
      }

      case 'STREAK_MILESTONE': {
        const day = options?.milestoneDay || 3;
        const reward = this.config.streakMilestoneRewards[day] || { gems: 5, xp: 20, points: 15 };
        gemsAwarded = reward.gems;
        xpAwarded = reward.xp;
        pointsAwarded = reward.points;
        break;
      }

      case 'PROJECT_COMPLETE': {
        gemsAwarded = this.config.projectCompleteRewardGems;
        xpAwarded = this.config.projectCompleteRewardXP;
        pointsAwarded = this.config.projectCompleteRewardPoints;
        break;
      }

      default:
        break;
    }

    // Execute Gem credit if applicable
    let updatedWallet = currentWallet;
    if (gemsAwarded > 0) {
      const gemTxType =
        eventType === 'FIRST_LOGIN'
          ? 'WELCOME_BONUS'
          : eventType === 'LESSON_COMPLETE'
          ? 'LESSON_REWARD'
          : eventType === 'CHAPTER_COMPLETE'
          ? 'CHAPTER_REWARD'
          : eventType === 'DAILY_GOAL_COMPLETE'
          ? 'DAILY_GOAL_REWARD'
          : eventType === 'STREAK_MILESTONE'
          ? 'STREAK_REWARD'
          : 'ADJUSTMENT';

      const refType =
        eventType === 'FIRST_LOGIN'
          ? 'system'
          : eventType === 'LESSON_COMPLETE'
          ? 'lesson'
          : eventType === 'CHAPTER_COMPLETE'
          ? 'chapter'
          : eventType === 'DAILY_GOAL_COMPLETE'
          ? 'daily_goal'
          : eventType === 'STREAK_MILESTONE'
          ? 'streak'
          : 'system';

      const gemRes = gemEconomy.executeTransaction(sid, {
        type: gemTxType,
        amount: gemsAwarded,
        referenceType: refType,
        referenceId,
        metadata: { eventType, ...options?.customMetadata }
      });
      updatedWallet = gemRes.wallet;
    }

    // Execute XP progression
    let updatedXP = currentXP;
    if (xpAwarded > 0) {
      const xpRes = progressionEngine.addXP(sid, xpAwarded, eventType, referenceId);
      updatedXP = xpRes.profile;
    }

    // Execute Performance Points
    let updatedPoints = currentPoints;
    if (pointsAwarded > 0) {
      const pointRes = progressionEngine.addPoints(sid, pointsAwarded, eventType, referenceId);
      updatedPoints = pointRes.profile;
    }

    // Mark event as resolved to prevent duplicate executions
    this.markEventProcessed(sid, eventKey);

    const result: RewardEventResult = {
      eventId: eventKey,
      success: true,
      alreadyClaimed: false,
      gemsAwarded,
      xpAwarded,
      pointsAwarded,
      wallet: updatedWallet,
      xpProfile: updatedXP,
      pointProfile: updatedPoints,
      message: `Earned ${gemsAwarded > 0 ? `💎 +${gemsAwarded} ` : ''}${xpAwarded > 0 ? `⭐ +${xpAwarded} XP ` : ''}${pointsAwarded > 0 ? `🏆 +${pointsAwarded} Points` : ''}`
    };

    this.notify(result);
    return result;
  }

  public subscribe(callback: (result: RewardEventResult) => void): () => void {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  private notify(result: RewardEventResult): void {
    this.listeners.forEach((l) => {
      try {
        l(result);
      } catch {}
    });
  }
}

export const rewardEngine = new RewardEngine();
