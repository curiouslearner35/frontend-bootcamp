/**
 * Curious Learners — Gamified Learning Economy Types & Data Contracts
 * 
 * Strict separation of concerns:
 * - 💎 Gems     = Learning currency (Ledger, Balance, Transactions, Idempotent)
 * - ⭐ XP       = Learner progression & Leveling
 * - 🏆 Points   = Performance & Leaderboards
 * - 📊 Activity = Real learning time (ActivityTracker is Single Source of Truth)
 * - ⏱️ Session  = Planned learning time (SessionManager is Single Source of Truth)
 */

export type GemTransactionType =
  | 'WELCOME_BONUS'
  | 'PROJECT_START_COST'
  | 'PRACTICE_SANDBOX_START'
  | 'TERMINAL_START'
  | 'LESSON_START_COST'
  | 'LESSON_REWARD'
  | 'CHAPTER_REWARD'
  | 'DAILY_GOAL_REWARD'
  | 'STREAK_REWARD'
  | 'PURCHASE'
  | 'ADJUSTMENT';

export type RewardEventType =
  | 'FIRST_LOGIN'
  | 'PROJECT_START_COST'
  | 'PRACTICE_SANDBOX_START'
  | 'TERMINAL_START'
  | 'LESSON_START_COST'
  | 'LESSON_COMPLETE'
  | 'PERFECT_LESSON'
  | 'CHAPTER_COMPLETE'
  | 'PERFECT_CHAPTER'
  | 'DAILY_GOAL_COMPLETE'
  | 'DAILY_STREAK_SUBMIT'
  | 'STREAK_MILESTONE'
  | 'PROJECT_COMPLETE';

export type ReferenceType =
  | 'system'
  | 'lesson'
  | 'chapter'
  | 'daily_goal'
  | 'streak'
  | 'project'
  | 'purchase';

export interface GemTransaction {
  transactionId: string;
  studentId: string;
  type: GemTransactionType;
  amount: number; // positive for earned, negative for spent
  balanceAfter: number;
  referenceType: ReferenceType;
  referenceId: string;
  createdAt: number; // epoch ms
  metadata?: Record<string, any>;
}

export interface GemWallet {
  studentId: string;
  balance: number;
  totalEarned: number;
  totalSpent: number;
  transactions: GemTransaction[];
  updatedAt: number;
}

export interface XPTransaction {
  transactionId: string;
  studentId: string;
  amount: number;
  balanceAfter: number;
  source: RewardEventType;
  referenceId: string;
  createdAt: number;
}

export interface XPProfile {
  studentId: string;
  totalXP: number;
  currentLevel: number;
  xpInCurrentLevel: number;
  xpRequiredForNextLevel: number;
  levelProgressPercent: number;
  updatedAt: number;
}

export interface PointTransaction {
  transactionId: string;
  studentId: string;
  amount: number;
  balanceAfter: number;
  source: RewardEventType;
  referenceId: string;
  createdAt: number;
}

export interface PointProfile {
  studentId: string;
  totalPoints: number;
  weeklyPoints: number;
  updatedAt: number;
}

export type GoalMetricType = 'STUDY_MINUTES' | 'LESSONS_COMPLETED' | 'TERMINAL_COMMITS' | 'XP_EARNED';

export interface DailyGoalItem {
  id: string;
  metricType: GoalMetricType;
  title: { en: string; bn: string };
  target: number;
  current: number;
  completed: boolean;
  rewardGems: number;
  rewardXP: number;
}

export interface DailyGoalState {
  studentId: string;
  dateStr: string; // YYYY-MM-DD
  goals: DailyGoalItem[];
  allCompleted: boolean;
  rewardClaimed: boolean;
  updatedAt: number;
}

export interface StreakState {
  studentId: string;
  currentStreak: number;
  longestStreak: number;
  lastStreakCheckInDate: string | null; // YYYY-MM-DD of last submitted streak
  hasSubmittedStreakToday: boolean;
  history: string[]; // YYYY-MM-DD dates of submitted streaks
  lastActiveDate: string | null; // YYYY-MM-DD
  qualifyingMinutesToday: number;
  isQualifiedToday: boolean;
  streakMilestonesClaimed: number[]; // [3, 7, 14, 30, 60, 98]
  updatedAt: number;
}

export type ChapterStatus = 'LOCKED' | 'AVAILABLE' | 'IN_PROGRESS' | 'COMPLETED';

export interface ChapterState {
  chapterId: string; // Week ID, e.g. "week-0"
  order: number;
  status: ChapterStatus;
  totalLessons: number;
  completedLessonsCount: number;
  completionPercentage: number;
  isRewardClaimed: boolean;
  unlockedAt?: number;
  completedAt?: number;
}

export interface RewardRuleConfig {
  welcomeBonusGems: number;
  practiceSandboxCostGems: number;
  terminalStartCostGems: number;
  lessonStartCostGems: number;
  projectStartCostGems: number;
  lessonCompleteRewardGems: number;
  lessonCompleteRewardXP: number;
  lessonCompleteRewardPoints: number;
  perfectLessonBonusGems: number;
  perfectLessonBonusXP: number;
  chapterCompleteRewardGems: number;
  chapterCompleteRewardXP: number;
  chapterCompleteRewardPoints: number;
  dailyGoalCompleteGems: number;
  dailyGoalCompleteXP: number;
  streakMilestoneRewards: Record<number, { gems: number; xp: number; points: number }>;
  projectCompleteRewardGems: number;
  projectCompleteRewardXP: number;
  projectCompleteRewardPoints: number;
}

export interface RewardEventResult {
  eventId: string;
  success: boolean;
  alreadyClaimed: boolean;
  gemsAwarded: number;
  xpAwarded: number;
  pointsAwarded: number;
  wallet: GemWallet;
  xpProfile: XPProfile;
  pointProfile: PointProfile;
  message?: string;
}

export interface LeaderboardEntry {
  rank: number;
  studentId: string;
  name: string;
  username: string;
  avatar: string;
  points: number;
  level: number;
  streakDays: number;
  isCurrentUser: boolean;
}
