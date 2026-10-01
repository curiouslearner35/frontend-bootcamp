/**
 * Curious Learners / Codazi Learning Hub
 * Centralized Gamified Learning Economy Rewards Configuration
 * 
 * Defines Point, XP, and Gem economy values for all learning events.
 * Single source of truth for reward calibrations.
 */

import { RewardEventType, RewardRuleConfig } from '../types/economy';

export interface EventRewardItem {
  gems: number;
  xp: number;
  points: number;
  description: string;
}

export const REWARD_CONFIG: RewardRuleConfig = {
  // First login & onboarding: 50 Free Gems
  welcomeBonusGems: 50,

  // Interactive learning & content access fees
  practiceSandboxCostGems: 2,
  terminalStartCostGems: 2,
  lessonStartCostGems: 1,
  projectStartCostGems: 2,

  // Lesson completion rewards
  lessonCompleteRewardGems: 2,
  lessonCompleteRewardXP: 25,
  lessonCompleteRewardPoints: 20,

  // Perfect score / zero-error lesson bonuses
  perfectLessonBonusGems: 1,
  perfectLessonBonusXP: 10,

  // Chapter (Week) milestone completion
  chapterCompleteRewardGems: 10,
  chapterCompleteRewardXP: 100,
  chapterCompleteRewardPoints: 80,

  // Daily goal completion
  dailyGoalCompleteGems: 5,
  dailyGoalCompleteXP: 30,

  // Streak milestone bonuses (Day: Rewards)
  streakMilestoneRewards: {
    3: { gems: 5, xp: 30, points: 25 },
    7: { gems: 15, xp: 100, points: 75 },
    14: { gems: 30, xp: 200, points: 150 },
    30: { gems: 60, xp: 500, points: 350 },
    60: { gems: 100, xp: 1000, points: 800 },
    98: { gems: 200, xp: 2500, points: 2000 }
  },

  // Practical project verification completion
  projectCompleteRewardGems: 20,
  projectCompleteRewardXP: 200,
  projectCompleteRewardPoints: 150
};

export const DEFAULT_REWARD_RULES = REWARD_CONFIG;

/**
 * Structured lookup for event rewards
 */
export const EVENT_REWARDS: Record<RewardEventType, EventRewardItem> = {
  FIRST_LOGIN: {
    gems: REWARD_CONFIG.welcomeBonusGems,
    xp: 0,
    points: 0,
    description: 'First login & onboarding completion welcome bonus'
  },
  PRACTICE_SANDBOX_START: {
    gems: -REWARD_CONFIG.practiceSandboxCostGems,
    xp: 0,
    points: 0,
    description: 'Practice Sandbox interactive tool access fee'
  },
  TERMINAL_START: {
    gems: -REWARD_CONFIG.terminalStartCostGems,
    xp: 0,
    points: 0,
    description: 'Terminal CLI interactive drill tool access fee'
  },
  LESSON_START_COST: {
    gems: -REWARD_CONFIG.lessonStartCostGems,
    xp: 0,
    points: 0,
    description: 'Lesson access and start fee'
  },
  PROJECT_START_COST: {
    gems: -REWARD_CONFIG.projectStartCostGems,
    xp: 0,
    points: 0,
    description: 'Project access and start fee'
  },
  LESSON_COMPLETE: {
    gems: REWARD_CONFIG.lessonCompleteRewardGems,
    xp: REWARD_CONFIG.lessonCompleteRewardXP,
    points: REWARD_CONFIG.lessonCompleteRewardPoints,
    description: 'Completing an interactive lesson and terminal drill'
  },
  PERFECT_LESSON: {
    gems: REWARD_CONFIG.perfectLessonBonusGems,
    xp: REWARD_CONFIG.perfectLessonBonusXP,
    points: 10,
    description: 'Flawless execution of terminal drill tasks'
  },
  CHAPTER_COMPLETE: {
    gems: REWARD_CONFIG.chapterCompleteRewardGems,
    xp: REWARD_CONFIG.chapterCompleteRewardXP,
    points: REWARD_CONFIG.chapterCompleteRewardPoints,
    description: 'Completing all interactive lessons in a course chapter'
  },
  PERFECT_CHAPTER: {
    gems: 5,
    xp: 50,
    points: 40,
    description: 'Completing a chapter with zero terminal errors'
  },
  DAILY_GOAL_COMPLETE: {
    gems: REWARD_CONFIG.dailyGoalCompleteGems,
    xp: REWARD_CONFIG.dailyGoalCompleteXP,
    points: 20,
    description: 'Fulfilling all daily learning and active study targets'
  },
  DAILY_STREAK_SUBMIT: {
    gems: 1,
    xp: 20,
    points: 15,
    description: 'Daily streak check-in submission counter'
  },
  STREAK_MILESTONE: {
    gems: 15,
    xp: 100,
    points: 75,
    description: 'Reaching a multi-day study streak milestone'
  },
  PROJECT_COMPLETE: {
    gems: REWARD_CONFIG.projectCompleteRewardGems,
    xp: REWARD_CONFIG.projectCompleteRewardXP,
    points: REWARD_CONFIG.projectCompleteRewardPoints,
    description: 'Passing mentor code verification on a portfolio project'
  }
};

/**
 * Helper to get reward values for any learning event
 */
export function getRewardForEvent(
  eventType: RewardEventType,
  options?: { isPerfect?: boolean; milestoneDay?: number }
): { gems: number; xp: number; points: number } {
  if (eventType === 'STREAK_MILESTONE' && options?.milestoneDay) {
    const milestone = REWARD_CONFIG.streakMilestoneRewards[options.milestoneDay];
    if (milestone) {
      return { gems: milestone.gems, xp: milestone.xp, points: milestone.points };
    }
  }

  const base = EVENT_REWARDS[eventType] || { gems: 0, xp: 0, points: 0 };
  let gems = base.gems;
  let xp = base.xp;
  let points = base.points;

  if (eventType === 'LESSON_COMPLETE' && options?.isPerfect) {
    gems += REWARD_CONFIG.perfectLessonBonusGems;
    xp += REWARD_CONFIG.perfectLessonBonusXP;
  }

  return { gems, xp, points };
}
