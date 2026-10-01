/**
 * Daily Goals & Real Streak Engine
 * Curious Learners / Codazi Learning Hub
 * 
 * Sourcing learning time and activity EXCLUSIVELY from the existing Activity Tracker.
 * ZERO mock data. ZERO page-open counters. ZERO fake streaks.
 * 
 * Enhanced Day Streak Tracking Mechanism:
 * Students open the app and explicitly submit the Streak Counter Submit Button each day.
 */

import {
  DailyGoalState,
  DailyGoalItem,
  StreakState
} from '../types/economy';
import { activityTracker } from './activityTracker';
import { progressionEngine } from './progressionEngine';
import { rewardEngine } from './rewardEngine';
import { getActiveUser, updateActiveUserProfile, getSavedAccounts, saveAccountToHistory } from './auth';

const GOAL_STORAGE_KEY_PREFIX = 'curious_learners_daily_goals_';
const STREAK_STORAGE_KEY_PREFIX = 'curious_learners_streak_';

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

export interface StreakSubmitResult {
  success: boolean;
  alreadySubmitted: boolean;
  newStreak: number;
  gemsAwarded: number;
  xpAwarded: number;
  pointsAwarded: number;
  milestoneReached: number | null;
  milestoneBonus?: { gems: number; xp: number; points: number };
  state: StreakState;
  message: string;
}

class DailyGoalsEngine {
  private streakListeners: Set<(state: StreakState) => void> = new Set();

  private getTodayDateStr(): string {
    return new Date().toISOString().slice(0, 10);
  }

  private getYesterdayDateStr(): string {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().slice(0, 10);
  }

  /**
   * Subscribe to streak updates
   */
  public subscribeStreak(listener: (state: StreakState) => void): () => void {
    this.streakListeners.add(listener);
    return () => {
      this.streakListeners.delete(listener);
    };
  }

  private notifyStreakListeners(state: StreakState): void {
    this.streakListeners.forEach((fn) => {
      try {
        fn(state);
      } catch (err) {
        console.error('Error in streak listener:', err);
      }
    });

    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('curious_streak_updated', { detail: state })
      );
    }
  }

  /**
   * Get or evaluate today's Daily Goals for a student
   * Connects directly to Activity Engine for real active minutes
   */
  public getTodayGoals(studentId: string, completedLessonsToday: number = 0): DailyGoalState {
    const sid = studentId || 'guest';
    const todayStr = this.getTodayDateStr();
    const dailyRecords = activityTracker.getDailyRecords(sid);
    const todayRecord = dailyRecords[todayStr] || {
      date: todayStr,
      activeMinutes: 0,
      lessonMinutes: 0,
      practiceMinutes: 0,
      playgroundMinutes: 0,
      terminalMinutes: 0,
      projectMinutes: 0,
      homeworkMinutes: 0,
      forumMinutes: 0,
      sessionCount: 0,
      commits: 0
    };
    const activeStudyMins = Math.round(todayRecord.activeMinutes);
    const terminalCommits = todayRecord.commits || 0;

    const goals: DailyGoalItem[] = [
      {
        id: 'goal_active_time',
        metricType: 'STUDY_MINUTES',
        title: {
          en: '15 Mins Active Study',
          bn: '১৫ মিনিট সক্রিয় পড়াশোনা'
        },
        target: 15,
        current: activeStudyMins,
        completed: activeStudyMins >= 15,
        rewardGems: 2,
        rewardXP: 15
      },
      {
        id: 'goal_complete_lesson',
        metricType: 'LESSONS_COMPLETED',
        title: {
          en: 'Complete 1 Lesson / Drill',
          bn: '১টি পাঠ সম্পন্ন করুন'
        },
        target: 1,
        current: completedLessonsToday,
        completed: completedLessonsToday >= 1,
        rewardGems: 2,
        rewardXP: 15
      },
      {
        id: 'goal_terminal_drills',
        metricType: 'TERMINAL_COMMITS',
        title: {
          en: '3 Git Drills or Terminal Commands',
          bn: '৩টি গিট ড্রিল বা টার্মিনাল কমান্ড'
        },
        target: 3,
        current: terminalCommits,
        completed: terminalCommits >= 3,
        rewardGems: 1,
        rewardXP: 10
      }
    ];

    const allCompleted = goals.every((g) => g.completed);
    const claimKey = `${sid}_${todayStr}`;
    const rawSaved = safeStorage.getItem(`${GOAL_STORAGE_KEY_PREFIX}${claimKey}`);
    const rewardClaimed = rawSaved ? JSON.parse(rawSaved).rewardClaimed === true : false;

    const state: DailyGoalState = {
      studentId: sid,
      dateStr: todayStr,
      goals,
      allCompleted,
      rewardClaimed,
      updatedAt: Date.now()
    };

    // Auto-claim bonus if all completed and not claimed yet
    if (allCompleted && !rewardClaimed) {
      rewardEngine.processRewardEvent(sid, 'DAILY_GOAL_COMPLETE', `daily_goal_${todayStr}`);
      state.rewardClaimed = true;
      safeStorage.setItem(`${GOAL_STORAGE_KEY_PREFIX}${claimKey}`, JSON.stringify(state));
    }

    return state;
  }

  /**
   * Get current streak state for a student
   */
  public getStreakState(studentId: string): StreakState {
    const sid = studentId || 'guest';
    const todayStr = this.getTodayDateStr();
    const yesterdayStr = this.getYesterdayDateStr();
    const raw = safeStorage.getItem(`${STREAK_STORAGE_KEY_PREFIX}${sid}`);

    let currentStreak = 0;
    let longestStreak = 0;
    let lastStreakCheckInDate: string | null = null;
    let streakMilestonesClaimed: number[] = [];
    let history: string[] = [];

    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        currentStreak = typeof parsed.currentStreak === 'number' ? parsed.currentStreak : 0;
        longestStreak = typeof parsed.longestStreak === 'number' ? parsed.longestStreak : currentStreak;
        lastStreakCheckInDate = parsed.lastStreakCheckInDate || parsed.lastActiveDate || null;
        streakMilestonesClaimed = Array.isArray(parsed.streakMilestonesClaimed) ? parsed.streakMilestonesClaimed : [];
        history = Array.isArray(parsed.history) ? parsed.history : [];
      } catch {}
    } else {
      // Initialize with user profile streak if available
      const activeUser = getActiveUser();
      if (activeUser && activeUser.id === sid && activeUser.streakDays) {
        currentStreak = activeUser.streakDays;
        longestStreak = activeUser.streakDays;
      }
    }

    const hasSubmittedStreakToday = lastStreakCheckInDate === todayStr;

    // Evaluate if streak broke due to missed day (more than 1 calendar day gap)
    if (lastStreakCheckInDate && lastStreakCheckInDate !== todayStr && lastStreakCheckInDate !== yesterdayStr) {
      // Missed at least one whole day between last check-in and today
      const lastDate = new Date(lastStreakCheckInDate).getTime();
      const todayDate = new Date(todayStr).getTime();
      const diffDays = Math.round((todayDate - lastDate) / (1000 * 60 * 60 * 24));
      if (diffDays > 1) {
        currentStreak = 0; // Streak reset pending today's submission
      }
    }

    const dailyRecords = activityTracker.getDailyRecords(sid);
    const todayRec = dailyRecords[todayStr];
    const qualifyingMinutesToday = todayRec ? Math.round(todayRec.activeMinutes) : 0;
    const isQualifiedToday = hasSubmittedStreakToday || qualifyingMinutesToday >= 1;

    const state: StreakState = {
      studentId: sid,
      currentStreak,
      longestStreak: Math.max(longestStreak, currentStreak),
      lastStreakCheckInDate,
      hasSubmittedStreakToday,
      history,
      lastActiveDate: lastStreakCheckInDate,
      qualifyingMinutesToday,
      isQualifiedToday,
      streakMilestonesClaimed,
      updatedAt: Date.now()
    };

    return state;
  }

  /**
   * Submit Daily Streak Counter for today
   * Explicit student trigger when opening the app each new day!
   */
  public submitDailyStreak(studentId: string): StreakSubmitResult {
    const sid = studentId || 'guest';
    const todayStr = this.getTodayDateStr();
    const yesterdayStr = this.getYesterdayDateStr();
    const currentState = this.getStreakState(sid);

    // Guard: already submitted today
    if (currentState.hasSubmittedStreakToday) {
      return {
        success: false,
        alreadySubmitted: true,
        newStreak: currentState.currentStreak,
        gemsAwarded: 0,
        xpAwarded: 0,
        pointsAwarded: 0,
        milestoneReached: null,
        state: currentState,
        message: 'Day streak already submitted for today! Return tomorrow to keep the flame alive.'
      };
    }

    // Compute new streak count
    let nextStreak = 1;
    if (currentState.lastStreakCheckInDate === yesterdayStr) {
      // Consecutive day!
      nextStreak = currentState.currentStreak + 1;
    } else if (!currentState.lastStreakCheckInDate && currentState.currentStreak > 0) {
      // First time explicit checkin on existing account
      nextStreak = currentState.currentStreak + 1;
    } else {
      // Missed a day or first ever check-in
      nextStreak = 1;
    }

    const newLongest = Math.max(currentState.longestStreak, nextStreak);
    const updatedHistory = Array.from(new Set([...currentState.history, todayStr]));

    // 1. Process Daily Streak Submit Reward (+1 Gem, +20 XP, +15 Points)
    const checkinReward = rewardEngine.processRewardEvent(
      sid,
      'DAILY_STREAK_SUBMIT',
      `streak_submit_${todayStr}`,
      { customMetadata: { streakDay: nextStreak } }
    );

    // 2. Check and Award Streak Milestone Bonuses (3, 7, 14, 30, 60, 98 days)
    const claimedMilestones = [...currentState.streakMilestonesClaimed];
    let reachedMilestone: number | null = null;
    let milestoneBonus: { gems: number; xp: number; points: number } | undefined;

    const milestones = [3, 7, 14, 30, 60, 98];
    for (const m of milestones) {
      if (nextStreak >= m && !claimedMilestones.includes(m)) {
        reachedMilestone = m;
        claimedMilestones.push(m);
        const milestoneResult = rewardEngine.processRewardEvent(
          sid,
          'STREAK_MILESTONE',
          `streak_milestone_${m}_${sid}`,
          { milestoneDay: m }
        );
        milestoneBonus = {
          gems: milestoneResult.gemsAwarded,
          xp: milestoneResult.xpAwarded,
          points: milestoneResult.pointsAwarded
        };
      }
    }

    // 3. Record Activity
    activityTracker.recordActivity('OTHER', 'SESSION_HEARTBEAT', undefined, {
      streak: nextStreak,
      date: todayStr,
      action: 'streak_checkin'
    });

    // 4. Update and Persist State
    const newState: StreakState = {
      studentId: sid,
      currentStreak: nextStreak,
      longestStreak: newLongest,
      lastStreakCheckInDate: todayStr,
      hasSubmittedStreakToday: true,
      history: updatedHistory,
      lastActiveDate: todayStr,
      qualifyingMinutesToday: currentState.qualifyingMinutesToday + 1,
      isQualifiedToday: true,
      streakMilestonesClaimed: claimedMilestones,
      updatedAt: Date.now()
    };

    safeStorage.setItem(`${STREAK_STORAGE_KEY_PREFIX}${sid}`, JSON.stringify(newState));

    // 5. Update user profile streak in local auth
    const activeUser = getActiveUser();
    if (activeUser && activeUser.id === sid) {
      const updatedUser = updateActiveUserProfile(activeUser, {
        streakDays: nextStreak,
        points: (activeUser.points || 0) + checkinReward.pointsAwarded + (milestoneBonus?.points || 0),
        xp: (activeUser.xp || 0) + checkinReward.xpAwarded + (milestoneBonus?.xp || 0)
      });
      saveAccountToHistory(updatedUser);
    }

    // 6. Notify all reactive subscribers and components
    this.notifyStreakListeners(newState);

    const totalGems = checkinReward.gemsAwarded + (milestoneBonus?.gems || 0);
    const totalXP = checkinReward.xpAwarded + (milestoneBonus?.xp || 0);
    const totalPoints = checkinReward.pointsAwarded + (milestoneBonus?.points || 0);

    return {
      success: true,
      alreadySubmitted: false,
      newStreak: nextStreak,
      gemsAwarded: totalGems,
      xpAwarded: totalXP,
      pointsAwarded: totalPoints,
      milestoneReached: reachedMilestone,
      milestoneBonus,
      state: newState,
      message: reachedMilestone
        ? `🔥 Streak Milestone Reached: Day ${reachedMilestone}! Claimed +${totalGems} Gems & +${totalXP} XP!`
        : `🔥 Day ${nextStreak} Streak Submitted! Claimed +${totalGems} Gem & +${totalXP} XP!`
    };
  }
}

export const dailyGoalsEngine = new DailyGoalsEngine();
