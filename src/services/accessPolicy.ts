/**
 * Centralized Access Policy Model
 * Curious Learners / Codazi Learning Hub
 * 
 * Defines and enforces the 3-tier access architecture:
 * 1. SYLLABUS: Public (Free, No Auth, No Gems)
 * 2. LESSON_THEORY: Public (Free, No Auth, No Gems)
 * 3. INTERACTIVE TOOLS (Practice Sandbox & Terminal): Protected (Requires Auth + Gems)
 */

import { UserProfile } from '../types';
import { gemEconomy } from './gemEconomy';
import { REWARD_CONFIG } from '../config/rewards';
import { GemWallet } from '../types/economy';

export type LearningFeature =
  | 'SYLLABUS'
  | 'LESSON'
  | 'LESSON_THEORY'
  | 'PRACTICE_SANDBOX'
  | 'TERMINAL'
  | 'PROJECT';

export interface AccessPolicyRule {
  public: boolean;
  requiresAuth: boolean;
  requiresGems: boolean;
  costGems: number;
}

export const ACCESS_POLICY: Record<LearningFeature, AccessPolicyRule> = {
  SYLLABUS: {
    public: true,
    requiresAuth: false,
    requiresGems: false,
    costGems: 0
  },
  LESSON: {
    public: false,
    requiresAuth: true,
    requiresGems: true,
    costGems: REWARD_CONFIG.lessonStartCostGems || 1
  },
  LESSON_THEORY: {
    public: true,
    requiresAuth: false,
    requiresGems: false,
    costGems: 0
  },
  PRACTICE_SANDBOX: {
    public: false,
    requiresAuth: true,
    requiresGems: true,
    costGems: REWARD_CONFIG.lessonStartCostGems || 1
  },
  TERMINAL: {
    public: false,
    requiresAuth: true,
    requiresGems: true,
    costGems: REWARD_CONFIG.lessonStartCostGems || 1
  },
  PROJECT: {
    public: false,
    requiresAuth: true,
    requiresGems: true,
    costGems: REWARD_CONFIG.projectStartCostGems || 2
  }
};

export type AccessDecisionReason =
  | 'PUBLIC'
  | 'ALREADY_UNLOCKED'
  | 'REQUIRES_AUTH'
  | 'INSUFFICIENT_GEMS'
  | 'READY_TO_UNLOCK';

export interface AccessCheckResult {
  allowed: boolean;
  reason: AccessDecisionReason;
  feature: LearningFeature;
  requiredGems: number;
  availableGems: number;
  costGems: number;
}

export class AccessPolicyService {
  /**
   * Evaluates access permissions for any learning layer
   */
  public evaluateAccess(
    feature: LearningFeature,
    user: UserProfile | null,
    targetId?: string
  ): AccessCheckResult {
    const rule = ACCESS_POLICY[feature];
    const studentId = user?.id || 'guest';
    const wallet = gemEconomy.getWallet(studentId);
    const availableGems = user ? wallet.balance : 0;
    const costGems = rule.costGems;

    // 1. Public features are always allowed
    if (rule.public) {
      return {
        allowed: true,
        reason: 'PUBLIC',
        feature,
        requiredGems: 0,
        availableGems,
        costGems: 0
      };
    }

    // 2. Requires authentication check
    if (rule.requiresAuth && !user) {
      return {
        allowed: false,
        reason: 'REQUIRES_AUTH',
        feature,
        requiredGems: costGems,
        availableGems: 0,
        costGems
      };
    }

    // 3. Check if already unlocked for this lesson / project / tool
    if (targetId) {
      const isAlreadyUnlocked = this.isFeatureUnlocked(studentId, feature, targetId, user);
      if (isAlreadyUnlocked) {
        return {
          allowed: true,
          reason: 'ALREADY_UNLOCKED',
          feature,
          requiredGems: 0,
          availableGems,
          costGems
        };
      }
    }

    // 4. Requires Gems check
    if (rule.requiresGems) {
      if (availableGems < costGems) {
        return {
          allowed: false,
          reason: 'INSUFFICIENT_GEMS',
          feature,
          requiredGems: costGems,
          availableGems,
          costGems
        };
      }

      return {
        allowed: false, // Needs confirmation / deduction step before entering
        reason: 'READY_TO_UNLOCK',
        feature,
        requiredGems: costGems,
        availableGems,
        costGems
      };
    }

    return {
      allowed: true,
      reason: 'PUBLIC',
      feature,
      requiredGems: 0,
      availableGems,
      costGems: 0
    };
  }

  /**
   * Check if a feature is unlocked for a given item
   */
  public isFeatureUnlocked(
    studentId: string,
    feature: LearningFeature,
    targetId: string,
    user?: UserProfile | null
  ): boolean {
    if (feature === 'SYLLABUS' || feature === 'LESSON_THEORY') return true;
    if (!studentId || studentId === 'guest') return false;

    if (feature === 'LESSON') {
      if (user?.completedLessonIds?.includes(targetId)) return true;
      return gemEconomy.isLessonUnlocked(studentId, targetId);
    }
    if (feature === 'PROJECT') {
      if (user?.verifiedProjectIds?.includes(targetId) || user?.submittedVerificationIds?.includes(targetId)) return true;
      return gemEconomy.isProjectUnlocked(studentId, targetId);
    }
    if (feature === 'PRACTICE_SANDBOX' || feature === 'TERMINAL') {
      if (user?.completedLessonIds?.includes(targetId) || gemEconomy.isLessonUnlocked(studentId, targetId)) return true;
      return feature === 'PRACTICE_SANDBOX'
        ? gemEconomy.isPracticeSandboxUnlocked(studentId, targetId)
        : gemEconomy.isTerminalUnlocked(studentId, targetId);
    }
    return true;
  }

  /**
   * Check if a protected interactive feature is unlocked for a given lesson
   */
  public isInteractiveFeatureUnlocked(
    studentId: string,
    feature: LearningFeature,
    lessonId: string
  ): boolean {
    return this.isFeatureUnlocked(studentId, feature, lessonId);
  }

  /**
   * Idempotently unlock interactive feature and deduct configured gems
   */
  public unlockFeature(
    studentId: string,
    feature: 'PRACTICE_SANDBOX' | 'TERMINAL' | 'LESSON' | 'LESSON_THEORY' | 'PROJECT',
    targetId: string
  ): { success: boolean; error?: string; wallet: GemWallet; alreadyUnlocked?: boolean } {
    const cost = ACCESS_POLICY[feature].costGems;

    if (feature === 'PRACTICE_SANDBOX') {
      return gemEconomy.payPracticeSandboxCost(studentId, targetId, cost);
    }
    if (feature === 'TERMINAL') {
      return gemEconomy.payTerminalStartCost(studentId, targetId, cost);
    }
    if (feature === 'LESSON' || feature === 'LESSON_THEORY') {
      return gemEconomy.payLessonStartCost(studentId, targetId, cost);
    }
    if (feature === 'PROJECT') {
      return gemEconomy.payProjectStartCost(studentId, targetId, cost);
    }
    return {
      success: true,
      wallet: gemEconomy.getWallet(studentId),
      alreadyUnlocked: true
    };
  }

  /**
   * Unlock Lesson (1 Gem)
   */
  public unlockLesson(
    studentId: string,
    lessonId: string
  ): { success: boolean; error?: string; wallet: GemWallet; alreadyUnlocked?: boolean } {
    return this.unlockFeature(studentId, 'LESSON', lessonId);
  }

  /**
   * Unlock Project (2 Gems)
   */
  public unlockProject(
    studentId: string,
    projectId: string
  ): { success: boolean; error?: string; wallet: GemWallet; alreadyUnlocked?: boolean } {
    return this.unlockFeature(studentId, 'PROJECT', projectId);
  }
}

export const accessPolicy = new AccessPolicyService();
