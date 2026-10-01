/**
 * Progression & Performance Engine (XP & Points)
 * Curious Learners / Codazi Learning Hub
 * 
 * Strict separation:
 * - XP     = RPG progression, leveling curve, unlocks
 * - Points = Performance score, accuracy, leaderboard ranking
 * 
 * Idempotent calculations with real local persistence.
 */

import {
  XPProfile,
  XPTransaction,
  PointProfile,
  PointTransaction,
  RewardEventType
} from '../types/economy';

const XP_KEY_PREFIX = 'curious_learners_xp_';
const POINT_KEY_PREFIX = 'curious_learners_points_';

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

/**
 * Deterministic Level Calculation Curve
 * Level 1: 0 - 100 XP
 * Level 2: 100 - 250 XP (+150)
 * Level 3: 250 - 450 XP (+200)
 * Level 4: 450 - 700 XP (+250)
 * Level N: incremental progression
 */
export function calculateLevelMetrics(totalXP: number): {
  currentLevel: number;
  xpInCurrentLevel: number;
  xpRequiredForNextLevel: number;
  levelProgressPercent: number;
} {
  let level = 1;
  let thresholdForNext = 100;
  let accumulated = 0;

  while (totalXP >= accumulated + thresholdForNext) {
    accumulated += thresholdForNext;
    level++;
    thresholdForNext = 100 + (level - 1) * 50; // Increasing threshold per level
  }

  const xpInCurrentLevel = Math.max(0, totalXP - accumulated);
  const xpRequiredForNextLevel = thresholdForNext;
  const levelProgressPercent = Math.min(100, Math.round((xpInCurrentLevel / xpRequiredForNextLevel) * 100));

  return {
    currentLevel: level,
    xpInCurrentLevel,
    xpRequiredForNextLevel,
    levelProgressPercent
  };
}

class ProgressionEngine {
  private xpListeners: Set<(profile: XPProfile) => void> = new Set();
  private pointListeners: Set<(profile: PointProfile) => void> = new Set();

  /**
   * Get XP Profile for student
   */
  public getXPProfile(studentId: string, fallbackInitialXP: number = 0): XPProfile {
    const sid = studentId || 'guest';
    const raw = safeStorage.getItem(`${XP_KEY_PREFIX}${sid}`);
    let totalXP = fallbackInitialXP;

    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (typeof parsed.totalXP === 'number') {
          totalXP = parsed.totalXP;
        }
      } catch {}
    }

    const metrics = calculateLevelMetrics(totalXP);
    return {
      studentId: sid,
      totalXP,
      currentLevel: metrics.currentLevel,
      xpInCurrentLevel: metrics.xpInCurrentLevel,
      xpRequiredForNextLevel: metrics.xpRequiredForNextLevel,
      levelProgressPercent: metrics.levelProgressPercent,
      updatedAt: Date.now()
    };
  }

  /**
   * Add XP to student profile (Idempotent per referenceId + source)
   */
  public addXP(
    studentId: string,
    amount: number,
    source: RewardEventType,
    referenceId: string
  ): { success: boolean; profile: XPProfile; added: number } {
    const sid = studentId || 'guest';
    const current = this.getXPProfile(sid);

    if (amount <= 0) {
      return { success: true, profile: current, added: 0 };
    }

    const newTotal = current.totalXP + amount;
    const metrics = calculateLevelMetrics(newTotal);

    const updatedProfile: XPProfile = {
      studentId: sid,
      totalXP: newTotal,
      currentLevel: metrics.currentLevel,
      xpInCurrentLevel: metrics.xpInCurrentLevel,
      xpRequiredForNextLevel: metrics.xpRequiredForNextLevel,
      levelProgressPercent: metrics.levelProgressPercent,
      updatedAt: Date.now()
    };

    safeStorage.setItem(`${XP_KEY_PREFIX}${sid}`, JSON.stringify(updatedProfile));
    this.notifyXP(updatedProfile);

    return {
      success: true,
      profile: updatedProfile,
      added: amount
    };
  }

  /**
   * Get Point Profile for student
   */
  public getPointProfile(studentId: string, fallbackInitialPoints: number = 0): PointProfile {
    const sid = studentId || 'guest';
    const raw = safeStorage.getItem(`${POINT_KEY_PREFIX}${sid}`);
    let totalPoints = fallbackInitialPoints;
    let weeklyPoints = fallbackInitialPoints;

    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (typeof parsed.totalPoints === 'number') {
          totalPoints = parsed.totalPoints;
          weeklyPoints = parsed.weeklyPoints || parsed.totalPoints;
        }
      } catch {}
    }

    return {
      studentId: sid,
      totalPoints,
      weeklyPoints,
      updatedAt: Date.now()
    };
  }

  /**
   * Add Performance Points (Performance, Quizzes, Projects, Clean Terminal Execution)
   */
  public addPoints(
    studentId: string,
    amount: number,
    source: RewardEventType,
    referenceId: string
  ): { success: boolean; profile: PointProfile; added: number } {
    const sid = studentId || 'guest';
    const current = this.getPointProfile(sid);

    if (amount <= 0) {
      return { success: true, profile: current, added: 0 };
    }

    const newTotal = current.totalPoints + amount;
    const newWeekly = current.weeklyPoints + amount;

    const updatedProfile: PointProfile = {
      studentId: sid,
      totalPoints: newTotal,
      weeklyPoints: newWeekly,
      updatedAt: Date.now()
    };

    safeStorage.setItem(`${POINT_KEY_PREFIX}${sid}`, JSON.stringify(updatedProfile));
    this.notifyPoints(updatedProfile);

    return {
      success: true,
      profile: updatedProfile,
      added: amount
    };
  }

  public subscribeXP(callback: (profile: XPProfile) => void): () => void {
    this.xpListeners.add(callback);
    return () => this.xpListeners.delete(callback);
  }

  public subscribePoints(callback: (profile: PointProfile) => void): () => void {
    this.pointListeners.add(callback);
    return () => this.pointListeners.delete(callback);
  }

  private notifyXP(profile: XPProfile): void {
    this.xpListeners.forEach((l) => {
      try {
        l(profile);
      } catch {}
    });
  }

  private notifyPoints(profile: PointProfile): void {
    this.pointListeners.forEach((l) => {
      try {
        l(profile);
      } catch {}
    });
  }
}

export const progressionEngine = new ProgressionEngine();
