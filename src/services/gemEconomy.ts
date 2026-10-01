/**
 * Gem Ledger & Economy Service
 * Curious Learners / Codazi Learning Hub
 * 
 * Strict Single Source of Truth for Gem currency.
 * Fully idempotent transaction processing with audit history.
 * Zero UI-state source of truth.
 */

import {
  GemWallet,
  GemTransaction,
  GemTransactionType,
  ReferenceType
} from '../types/economy';
import { REWARD_CONFIG } from '../config/rewards';

const WALLET_KEY_PREFIX = 'curious_learners_wallet_';
const IDEMPOTENCY_KEY_PREFIX = 'curious_learners_idempotent_tx_';

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
  },
  removeItem: (key: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch {}
  }
};

class GemEconomyService {
  private listeners: Set<(wallet: GemWallet) => void> = new Set();

  private getStorageKey(studentId: string): string {
    return `${WALLET_KEY_PREFIX}${studentId || 'guest'}`;
  }

  private getIdempotencyKey(studentId: string, referenceType: string, referenceId: string, type: string): string {
    return `${IDEMPOTENCY_KEY_PREFIX}${studentId}_${referenceType}_${referenceId}_${type}`;
  }

  /**
   * Get student's current Gem Wallet
   */
  public getWallet(studentId: string): GemWallet {
    const raw = safeStorage.getItem(this.getStorageKey(studentId));
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed.balance === 'number') {
          return parsed;
        }
      } catch {}
    }

    // Default pristine wallet (Guests receive 10 exploration Gems)
    const isGuest = !studentId || studentId === 'guest';
    const initialBalance = isGuest ? 10 : 0;
    const initialEarned = isGuest ? 10 : 0;
    const initialTxs: GemTransaction[] = isGuest
      ? [
          {
            transactionId: `tx_guest_gift_${Date.now()}`,
            studentId: 'guest',
            type: 'WELCOME_BONUS',
            amount: 10,
            balanceAfter: 10,
            referenceType: 'system',
            referenceId: 'guest_exploration_gift',
            createdAt: Date.now(),
            metadata: { description: '10 Guest Exploration Gems Gift' }
          }
        ]
      : [];

    const initialWallet: GemWallet = {
      studentId: studentId || 'guest',
      balance: initialBalance,
      totalEarned: initialEarned,
      totalSpent: 0,
      transactions: initialTxs,
      updatedAt: Date.now()
    };
    this.saveWallet(initialWallet);
    return initialWallet;
  }

  private saveWallet(wallet: GemWallet): void {
    safeStorage.setItem(this.getStorageKey(wallet.studentId), JSON.stringify(wallet));
    this.notify(wallet);
  }

  /**
   * Check if a specific transaction was already processed (idempotency guard)
   */
  public hasTransaction(
    studentId: string,
    referenceType: ReferenceType,
    referenceId: string,
    type?: GemTransactionType
  ): boolean {
    const wallet = this.getWallet(studentId);
    return wallet.transactions.some(
      (tx) =>
        tx.referenceType === referenceType &&
        tx.referenceId === referenceId &&
        (!type || tx.type === type)
    );
  }

  /**
   * Check if student has sufficient gems
   */
  public canAfford(studentId: string, amount: number): boolean {
    const wallet = this.getWallet(studentId);
    return wallet.balance >= amount;
  }

  /**
   * Atomically and idempotently execute a gem transaction
   */
  public executeTransaction(
    studentId: string,
    params: {
      type: GemTransactionType;
      amount: number; // Positive for credit, negative for debit
      referenceType: ReferenceType;
      referenceId: string;
      metadata?: Record<string, any>;
      customTransactionId?: string;
    }
  ): { success: boolean; wallet: GemWallet; transaction?: GemTransaction; error?: string; alreadyExecuted?: boolean } {
    const sid = studentId || 'guest';
    const wallet = this.getWallet(sid);

    // Idempotency check: prevent duplicate reward or duplicate start cost
    const existing = wallet.transactions.find(
      (tx) =>
        tx.referenceType === params.referenceType &&
        tx.referenceId === params.referenceId &&
        tx.type === params.type
    );

    if (existing) {
      return {
        success: true,
        wallet,
        transaction: existing,
        alreadyExecuted: true
      };
    }

    // Debit affordability check
    if (params.amount < 0 && wallet.balance + params.amount < 0) {
      return {
        success: false,
        wallet,
        error: `Insufficient Gems. Required: ${Math.abs(params.amount)}, Available: ${wallet.balance}`
      };
    }

    const newBalance = wallet.balance + params.amount;
    const transaction: GemTransaction = {
      transactionId: params.customTransactionId || `gtx_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      studentId: sid,
      type: params.type,
      amount: params.amount,
      balanceAfter: newBalance,
      referenceType: params.referenceType,
      referenceId: params.referenceId,
      createdAt: Date.now(),
      metadata: params.metadata
    };

    const updatedWallet: GemWallet = {
      studentId: sid,
      balance: newBalance,
      totalEarned: params.amount > 0 ? wallet.totalEarned + params.amount : wallet.totalEarned,
      totalSpent: params.amount < 0 ? wallet.totalSpent + Math.abs(params.amount) : wallet.totalSpent,
      transactions: [transaction, ...wallet.transactions],
      updatedAt: Date.now()
    };

    this.saveWallet(updatedWallet);

    return {
      success: true,
      wallet: updatedWallet,
      transaction
    };
  }

  /**
   * Award Welcome Bonus (50 Gems) exactly once per student on first login
   */
  public awardWelcomeBonus(studentId: string): { awarded: boolean; wallet: GemWallet } {
    const sid = studentId || 'guest';
    if (this.hasTransaction(sid, 'system', 'welcome_bonus', 'WELCOME_BONUS')) {
      return { awarded: false, wallet: this.getWallet(sid) };
    }

    const res = this.executeTransaction(sid, {
      type: 'WELCOME_BONUS',
      amount: REWARD_CONFIG.welcomeBonusGems || 50,
      referenceType: 'system',
      referenceId: 'welcome_bonus',
      metadata: { reason: 'First Login / Onboarding Completion Welcome Gift' }
    });

    return { awarded: res.success, wallet: res.wallet };
  }

  /**
   * Deduct Lesson Start / Access cost (e.g. 1 Gem)
   * Idempotent per lesson: once paid for a lesson, re-opening does not charge again
   */
  public payLessonStartCost(
    studentId: string,
    lessonId: string,
    cost: number = REWARD_CONFIG.lessonStartCostGems || 1
  ): { success: boolean; wallet: GemWallet; error?: string; alreadyUnlocked?: boolean } {
    const sid = studentId || 'guest';

    if (this.hasTransaction(sid, 'lesson', lessonId, 'LESSON_START_COST')) {
      return {
        success: true,
        wallet: this.getWallet(sid),
        alreadyUnlocked: true
      };
    }

    const res = this.executeTransaction(sid, {
      type: 'LESSON_START_COST',
      amount: -Math.abs(cost),
      referenceType: 'lesson',
      referenceId: lessonId,
      metadata: { lessonId, cost }
    });

    return {
      success: res.success,
      wallet: res.wallet,
      error: res.error,
      alreadyUnlocked: false
    };
  }

  /**
   * Check if a lesson was already unlocked by the student
   */
  public isLessonUnlocked(studentId: string, lessonId: string): boolean {
    const sid = studentId || 'guest';
    if (!studentId || studentId === 'guest') return false;
    return this.hasTransaction(sid, 'lesson', lessonId, 'LESSON_START_COST');
  }

  /**
   * Deduct Project Start / Access cost (e.g. 2 Gems)
   * Idempotent per project: once paid for a project, re-opening does not charge again
   */
  public payProjectStartCost(
    studentId: string,
    projectId: string,
    cost: number = REWARD_CONFIG.projectStartCostGems || 2
  ): { success: boolean; wallet: GemWallet; error?: string; alreadyUnlocked?: boolean } {
    const sid = studentId || 'guest';

    if (this.hasTransaction(sid, 'project', projectId, 'PROJECT_START_COST')) {
      return {
        success: true,
        wallet: this.getWallet(sid),
        alreadyUnlocked: true
      };
    }

    const res = this.executeTransaction(sid, {
      type: 'PROJECT_START_COST',
      amount: -Math.abs(cost),
      referenceType: 'project',
      referenceId: projectId,
      metadata: { projectId, cost }
    });

    return {
      success: res.success,
      wallet: res.wallet,
      error: res.error,
      alreadyUnlocked: false
    };
  }

  /**
   * Check if a project was already unlocked by the student
   */
  public isProjectUnlocked(studentId: string, projectId: string): boolean {
    const sid = studentId || 'guest';
    if (!studentId || studentId === 'guest') return false;
    return this.hasTransaction(sid, 'project', projectId, 'PROJECT_START_COST');
  }

  /**
   * Deduct Practice Sandbox tool start cost (e.g. 2 Gems)
   * Idempotent per lesson: once paid for a lesson, re-opening does not charge again
   */
  public payPracticeSandboxCost(
    studentId: string,
    lessonId: string,
    cost: number = 2
  ): { success: boolean; wallet: GemWallet; error?: string; alreadyUnlocked?: boolean } {
    const sid = studentId || 'guest';

    if (this.hasTransaction(sid, 'lesson', `${lessonId}_practice`, 'PRACTICE_SANDBOX_START')) {
      return {
        success: true,
        wallet: this.getWallet(sid),
        alreadyUnlocked: true
      };
    }

    const res = this.executeTransaction(sid, {
      type: 'PRACTICE_SANDBOX_START',
      amount: -Math.abs(cost),
      referenceType: 'lesson',
      referenceId: `${lessonId}_practice`,
      metadata: { lessonId, tool: 'practice_sandbox', cost }
    });

    return {
      success: res.success,
      wallet: res.wallet,
      error: res.error,
      alreadyUnlocked: false
    };
  }

  /**
   * Check if Practice Sandbox is unlocked for a given lesson
   */
  public isPracticeSandboxUnlocked(studentId: string, lessonId: string): boolean {
    const sid = studentId || 'guest';
    if (!studentId || studentId === 'guest') return false;
    return this.hasTransaction(sid, 'lesson', `${lessonId}_practice`, 'PRACTICE_SANDBOX_START');
  }

  /**
   * Deduct Terminal tool start cost (e.g. 2 Gems)
   * Idempotent per lesson: once paid for a lesson, re-opening does not charge again
   */
  public payTerminalStartCost(
    studentId: string,
    lessonId: string,
    cost: number = 2
  ): { success: boolean; wallet: GemWallet; error?: string; alreadyUnlocked?: boolean } {
    const sid = studentId || 'guest';

    if (this.hasTransaction(sid, 'lesson', `${lessonId}_terminal`, 'TERMINAL_START')) {
      return {
        success: true,
        wallet: this.getWallet(sid),
        alreadyUnlocked: true
      };
    }

    const res = this.executeTransaction(sid, {
      type: 'TERMINAL_START',
      amount: -Math.abs(cost),
      referenceType: 'lesson',
      referenceId: `${lessonId}_terminal`,
      metadata: { lessonId, tool: 'terminal', cost }
    });

    return {
      success: res.success,
      wallet: res.wallet,
      error: res.error,
      alreadyUnlocked: false
    };
  }

  /**
   * Check if Terminal is unlocked for a given lesson
   */
  public isTerminalUnlocked(studentId: string, lessonId: string): boolean {
    const sid = studentId || 'guest';
    if (!studentId || studentId === 'guest') return false;
    return this.hasTransaction(sid, 'lesson', `${lessonId}_terminal`, 'TERMINAL_START');
  }

  public subscribe(callback: (wallet: GemWallet) => void): () => void {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  private notify(wallet: GemWallet): void {
    this.listeners.forEach((listener) => {
      try {
        listener(wallet);
      } catch (err) {
        console.error('Error notifying Gem wallet listener:', err);
      }
    });
  }
}

export const gemEconomy = new GemEconomyService();
