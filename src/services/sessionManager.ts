/**
 * Learning Session & Phase Timer Manager
 * Codazi Learning Hub
 *
 * Manages custom planned learning sessions, timestamp-based phase timer,
 * Web Audio and in-app transition alarms, and connects directly to the
 * existing WakaTime activity engine for authentic active vs idle tracking.
 *
 * NO MOCK DATA. NO DRIFT.
 */

import {
  LearningSession,
  LearningPhase,
  SessionStatus,
  PhaseStatus,
  PhaseType,
  SessionSummary,
  PhaseSummaryItem,
  LearningTemplate,
  LearningPhaseTemplate,
  SessionContext,
  PlannedVsActualMetric
} from '../types/learningSession';
import { activityTracker, ActivitySurface } from './activityTracker';
import { soundAlarm } from './soundAlarm';

const STORAGE_KEYS = {
  ACTIVE_SESSION: 'codazi:custom_learning_session_active',
  SESSION_HISTORY: 'codazi:custom_session_history',
  TEMPLATES: 'codazi:learning_templates'
};

const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem(key);
      }
      if (typeof globalThis !== 'undefined' && (globalThis as any).localStorage) {
        return (globalThis as any).localStorage.getItem(key);
      }
    } catch {}
    return null;
  },
  setItem: (key: string, val: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, val);
      } else if (typeof globalThis !== 'undefined' && (globalThis as any).localStorage) {
        (globalThis as any).localStorage.setItem(key, val);
      }
    } catch {}
  },
  removeItem: (key: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      } else if (typeof globalThis !== 'undefined' && (globalThis as any).localStorage) {
        (globalThis as any).localStorage.removeItem(key);
      }
    } catch {}
  }
};

export const DEFAULT_TEMPLATES: LearningTemplate[] = [
  {
    id: 'tpl_30min_study',
    name: '30 Minute Study',
    description: 'Balanced reading, hands-on practice, and quick recap.',
    phases: [
      { name: 'Read & Understand', plannedMinutes: 10, type: 'read' },
      { name: 'Interactive Practice', plannedMinutes: 10, type: 'practice' },
      { name: 'Self Recap & Notes', plannedMinutes: 10, type: 'recap' }
    ]
  },
  {
    id: 'tpl_pomodoro_25',
    name: 'Pomodoro Sprint',
    description: 'Focused 25-minute deep learning block with 5-minute recap.',
    phases: [
      { name: 'Deep Focus Coding', plannedMinutes: 25, type: 'code' },
      { name: 'Review & Commit', plannedMinutes: 5, type: 'recap' }
    ]
  },
  {
    id: 'tpl_deep_dive_45',
    name: 'Full Academy Cycle',
    description: 'Comprehensive cycle covering theory, terminal, code, and review.',
    phases: [
      { name: 'Read Documentation', plannedMinutes: 10, type: 'read' },
      { name: 'Terminal Drills', plannedMinutes: 15, type: 'practice' },
      { name: 'Playground Build', plannedMinutes: 15, type: 'code' },
      { name: 'Knowledge Recap', plannedMinutes: 5, type: 'recap' }
    ]
  },
  {
    id: 'tpl_quick_sprint_15',
    name: 'Quick Concept Sprint',
    description: '15-minute quick blast on a single concept.',
    phases: [
      { name: 'Concept Overview', plannedMinutes: 5, type: 'read' },
      { name: 'Command Practice', plannedMinutes: 10, type: 'practice' }
    ]
  }
];

export interface PhaseTransitionNotification {
  id: string;
  completedPhaseName: string;
  nextPhaseName: string | null;
  isSessionComplete: boolean;
  timestamp: number;
}

class SessionManagerService {
  private activeSession: LearningSession | null = null;
  private timerInterval: any = null;
  private unsubscribeDelta: (() => void) | null = null;

  private sessionChangeListeners: Set<(session: LearningSession | null) => void> = new Set();
  private notificationListeners: Set<(notif: PhaseTransitionNotification) => void> = new Set();
  private summaryListeners: Set<(summary: SessionSummary) => void> = new Set();

  constructor() {
    this.rehydrateActiveSession();
    this.connectToActivityEngine();
  }

  /**
   * Connect to the existing Activity Engine
   * The session manager listens to authentic active seconds and idle seconds from activityTracker.
   */
  private connectToActivityEngine() {
    if (this.unsubscribeDelta) return;
    this.unsubscribeDelta = activityTracker.subscribeActiveDelta((deltaSeconds, isIdle) => {
      this.recordPhaseActiveDelta(deltaSeconds, isIdle);
    });
  }

  /**
   * Record real active or idle delta for the active session's current phase
   */
  public recordPhaseActiveDelta(deltaSeconds: number, isIdle: boolean = false) {
    if (!this.activeSession || this.activeSession.isPaused || this.activeSession.status !== 'ACTIVE') {
      return;
    }

    const currentPhase = this.getCurrentPhase();
    if (!currentPhase) return;

    if (!isIdle) {
      // Accumulate active seconds
      currentPhase.activeSeconds += deltaSeconds;
      this.activeSession.activeSeconds += deltaSeconds;
    } else {
      // Accumulate idle seconds
      currentPhase.idleSeconds += deltaSeconds;
      this.activeSession.idleSeconds += deltaSeconds;
    }

    this.persistActiveSession();
    this.notifySessionChange();
  }

  /**
   * Start a new planned learning session
   */
  public startSession(
    title: string,
    phases: LearningPhaseTemplate[],
    studentId: string,
    context?: SessionContext
  ): LearningSession {
    // If a session is already active, end it first cleanly
    if (this.activeSession && this.activeSession.status === 'ACTIVE') {
      this.endSession(true);
    }

    const now = Date.now();
    const sessionId = `lsess_${now}_${Math.random().toString(36).substring(2, 6)}`;

    const convertedPhases: LearningPhase[] = phases.map((p, idx) => ({
      phaseId: `phase_${idx}_${Math.random().toString(36).substring(2, 6)}`,
      name: p.name.trim() || `Phase ${idx + 1}`,
      type: p.type || 'practice',
      plannedSeconds: Math.max(1, p.plannedMinutes * 60),
      startedAt: idx === 0 ? now : undefined,
      activeSeconds: 0,
      idleSeconds: 0,
      status: idx === 0 ? 'ACTIVE' : 'PLANNED'
    }));

    const totalPlannedSeconds = convertedPhases.reduce((acc, p) => acc + p.plannedSeconds, 0);

    const newSession: LearningSession = {
      sessionId,
      studentId: studentId || 'student_guest',
      title: title.trim() || 'Custom Learning Session',
      startedAt: now,
      status: 'ACTIVE',
      plannedSeconds: totalPlannedSeconds,
      activeSeconds: 0,
      idleSeconds: 0,
      currentPhaseIndex: 0,
      phases: convertedPhases,
      context,
      phaseRunStartedAt: now,
      accumulatedPhaseSecondsBeforeRun: 0,
      isPaused: false
    };

    this.activeSession = newSession;

    // Associate with the existing Activity Engine
    activityTracker.setCustomSessionContext(sessionId, convertedPhases[0]?.phaseId || null);
    if (context?.surface) {
      activityTracker.setContext(context.surface, context.resourceId);
    }

    // Request browser notification permission non-intrusively
    this.requestNotificationPermission();

    this.persistActiveSession();
    this.startTimerLoop();
    this.notifySessionChange();

    return newSession;
  }

  /**
   * Main timestamp-based timer loop (ticks every 500ms for smooth UI display)
   */
  private startTimerLoop() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      if (!this.activeSession || this.activeSession.isPaused || this.activeSession.status !== 'ACTIVE') {
        return;
      }

      const currentPhase = this.getCurrentPhase();
      if (!currentPhase) return;

      const now = Date.now();
      const runElapsed = this.activeSession.phaseRunStartedAt ? Math.floor((now - this.activeSession.phaseRunStartedAt) / 1000) : 0;
      const totalPhaseElapsed = (this.activeSession.accumulatedPhaseSecondsBeforeRun || 0) + runElapsed;
      const remainingSeconds = Math.max(0, currentPhase.plannedSeconds - totalPhaseElapsed);

      // Check if phase timer has reached zero
      if (remainingSeconds <= 0) {
        this.transitionToNextPhase();
      } else {
        // UI tick update
        this.notifySessionChange();
      }
    }, 500);
  }

  /**
   * Transition to next phase or complete session when timer reaches zero
   */
  public transitionToNextPhase() {
    if (!this.activeSession) return;

    const currentIndex = this.activeSession.currentPhaseIndex;
    const currentPhase = this.activeSession.phases[currentIndex];
    const now = Date.now();

    if (currentPhase) {
      currentPhase.endedAt = now;
      currentPhase.status = 'COMPLETED';
    }

    const nextIndex = currentIndex + 1;
    const hasNextPhase = nextIndex < this.activeSession.phases.length;

    if (hasNextPhase) {
      // Transition to next phase
      const nextPhase = this.activeSession.phases[nextIndex];
      nextPhase.status = 'ACTIVE';
      nextPhase.startedAt = now;

      this.activeSession.currentPhaseIndex = nextIndex;
      this.activeSession.phaseRunStartedAt = now;
      this.activeSession.accumulatedPhaseSecondsBeforeRun = 0;
      this.activeSession.isPaused = false;

      // Update Activity Engine context
      activityTracker.setCustomSessionContext(this.activeSession.sessionId, nextPhase.phaseId);

      // Trigger phase transition alarms
      soundAlarm.playPhaseTransitionChime();
      this.showPhaseNotification({
        id: `notif_${now}`,
        completedPhaseName: currentPhase ? currentPhase.name : 'Phase',
        nextPhaseName: nextPhase.name,
        isSessionComplete: false,
        timestamp: now
      });

      this.persistActiveSession();
      this.notifySessionChange();
    } else {
      // Session fully complete!
      this.completeSession();
    }
  }

  /**
   * Skip current phase
   */
  public skipCurrentPhase() {
    if (!this.activeSession) return;

    const currentIndex = this.activeSession.currentPhaseIndex;
    const currentPhase = this.activeSession.phases[currentIndex];
    const now = Date.now();

    if (currentPhase) {
      currentPhase.endedAt = now;
      currentPhase.status = 'SKIPPED';
    }

    const nextIndex = currentIndex + 1;
    const hasNextPhase = nextIndex < this.activeSession.phases.length;

    if (hasNextPhase) {
      const nextPhase = this.activeSession.phases[nextIndex];
      nextPhase.status = 'ACTIVE';
      nextPhase.startedAt = now;

      this.activeSession.currentPhaseIndex = nextIndex;
      this.activeSession.phaseRunStartedAt = now;
      this.activeSession.accumulatedPhaseSecondsBeforeRun = 0;
      this.activeSession.isPaused = false;

      activityTracker.setCustomSessionContext(this.activeSession.sessionId, nextPhase.phaseId);
      soundAlarm.playPhaseTransitionChime();
      this.showPhaseNotification({
        id: `notif_${now}`,
        completedPhaseName: `${currentPhase?.name || 'Phase'} (Skipped)`,
        nextPhaseName: nextPhase.name,
        isSessionComplete: false,
        timestamp: now
      });

      this.persistActiveSession();
      this.notifySessionChange();
    } else {
      this.completeSession();
    }
  }

  /**
   * Pause planned timer progression
   */
  public pause() {
    if (!this.activeSession || this.activeSession.isPaused) return;

    const now = Date.now();
    const runElapsed = this.activeSession.phaseRunStartedAt ? Math.floor((now - this.activeSession.phaseRunStartedAt) / 1000) : 0;

    this.activeSession.accumulatedPhaseSecondsBeforeRun = (this.activeSession.accumulatedPhaseSecondsBeforeRun || 0) + runElapsed;
    this.activeSession.isPaused = true;
    this.activeSession.pausedAt = now;
    this.activeSession.status = 'PAUSED';

    const currentPhase = this.getCurrentPhase();
    if (currentPhase) {
      currentPhase.status = 'PAUSED';
    }

    this.persistActiveSession();
    this.notifySessionChange();
  }

  /**
   * Resume planned timer progression
   */
  public resume() {
    if (!this.activeSession || !this.activeSession.isPaused) return;

    const now = Date.now();
    this.activeSession.isPaused = false;
    this.activeSession.phaseRunStartedAt = now;
    this.activeSession.pausedAt = undefined;
    this.activeSession.status = 'ACTIVE';

    const currentPhase = this.getCurrentPhase();
    if (currentPhase) {
      currentPhase.status = 'ACTIVE';
    }

    this.persistActiveSession();
    this.notifySessionChange();
  }

  /**
   * End session early or on completion
   */
  public endSession(isEarly: boolean = false): SessionSummary | null {
    if (!this.activeSession) return null;

    const now = Date.now();
    const completedPhasesCount = this.activeSession.phases.filter((p) => p.status === 'COMPLETED').length;
    const isFullCompletion = !isEarly && completedPhasesCount === this.activeSession.phases.length;

    // Set statuses
    this.activeSession.status = isFullCompletion ? 'COMPLETED' : 'PARTIALLY_COMPLETED';
    this.activeSession.endedAt = now;

    // Unfinished phases marked appropriately
    this.activeSession.phases.forEach((p, idx) => {
      if (idx > this.activeSession!.currentPhaseIndex && p.status === 'PLANNED') {
        p.status = 'CANCELLED';
      } else if (idx === this.activeSession!.currentPhaseIndex && p.status === 'ACTIVE') {
        p.status = 'PARTIALLY_COMPLETED';
        p.endedAt = now;
      }
    });

    // Create authentic summary
    const summary: SessionSummary = {
      sessionId: this.activeSession.sessionId,
      title: this.activeSession.title,
      startedAt: this.activeSession.startedAt,
      endedAt: now,
      status: this.activeSession.status,
      plannedSeconds: this.activeSession.plannedSeconds,
      activeSeconds: this.activeSession.activeSeconds,
      idleSeconds: this.activeSession.idleSeconds,
      phasesCompleted: completedPhasesCount,
      totalPhases: this.activeSession.phases.length,
      phases: this.activeSession.phases.map((p) => ({
        phaseId: p.phaseId,
        name: p.name,
        type: p.type,
        plannedSeconds: p.plannedSeconds,
        activeSeconds: p.activeSeconds,
        idleSeconds: p.idleSeconds,
        status: p.status
      })),
      context: this.activeSession.context
    };

    // Archive summary to history
    this.saveSessionSummary(summary);

    // Stop timer and clear active session
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.activeSession = null;

    try {
      safeStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
    } catch {}

    activityTracker.setCustomSessionContext(null, null);
    this.notifySessionChange();
    this.notifySummaryListeners(summary);

    return summary;
  }

  /**
   * Complete session normally
   */
  private completeSession() {
    if (!this.activeSession) return;
    const now = Date.now();

    soundAlarm.playSessionCompleteChime();
    this.showPhaseNotification({
      id: `notif_${now}`,
      completedPhaseName: this.activeSession.phases[this.activeSession.phases.length - 1]?.name || 'Final Phase',
      nextPhaseName: null,
      isSessionComplete: true,
      timestamp: now
    });

    this.endSession(false);
  }

  /**
   * Calculate remaining seconds in current active phase
   */
  public getRemainingPhaseSeconds(): number {
    if (!this.activeSession) return 0;
    const phase = this.getCurrentPhase();
    if (!phase) return 0;

    if (this.activeSession.isPaused) {
      const elapsed = this.activeSession.accumulatedPhaseSecondsBeforeRun || 0;
      return Math.max(0, phase.plannedSeconds - elapsed);
    }

    const now = Date.now();
    const runElapsed = this.activeSession.phaseRunStartedAt ? Math.floor((now - this.activeSession.phaseRunStartedAt) / 1000) : 0;
    const totalElapsed = (this.activeSession.accumulatedPhaseSecondsBeforeRun || 0) + runElapsed;
    return Math.max(0, phase.plannedSeconds - totalElapsed);
  }

  /**
   * Get current phase progress ratio (0 to 1)
   */
  public getPhaseProgressRatio(): number {
    const phase = this.getCurrentPhase();
    if (!phase || phase.plannedSeconds <= 0) return 0;
    const remaining = this.getRemainingPhaseSeconds();
    return Math.min(1, Math.max(0, (phase.plannedSeconds - remaining) / phase.plannedSeconds));
  }

  public getActiveSession(): LearningSession | null {
    return this.activeSession;
  }

  public getCurrentPhase(): LearningPhase | null {
    if (!this.activeSession) return null;
    return this.activeSession.phases[this.activeSession.currentPhaseIndex] || null;
  }

  /**
   * Local-First Persistence: Save active session state to localStorage
   */
  private persistActiveSession() {
    if (!this.activeSession) return;
    try {
      safeStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(this.activeSession));
    } catch {}
  }

  /**
   * Rehydrate running session upon page reload
   */
  private rehydrateActiveSession() {
    try {
      const stored = safeStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION);
      if (!stored) return;

      const parsed: LearningSession = JSON.parse(stored);
      if (!parsed || parsed.status === 'COMPLETED' || parsed.status === 'CANCELLED') {
        safeStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
        return;
      }

      this.activeSession = parsed;

      // Re-establish context with Activity Engine
      const currentPhase = this.getCurrentPhase();
      activityTracker.setCustomSessionContext(parsed.sessionId, currentPhase?.phaseId || null);

      if (parsed.status === 'ACTIVE' && !parsed.isPaused) {
        this.startTimerLoop();
      }
    } catch {
      safeStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
    }
  }

  /**
   * Save completed session summary to local history
   */
  private saveSessionSummary(summary: SessionSummary) {
    try {
      const existing = this.getSessionHistory().filter((s) => s.sessionId !== summary.sessionId);
      existing.unshift(summary);
      const bounded = existing.slice(0, 30);
      safeStorage.setItem(STORAGE_KEYS.SESSION_HISTORY, JSON.stringify(bounded));
    } catch {}
  }

  public getSessionHistory(studentId?: string): SessionSummary[] {
    try {
      const raw = safeStorage.getItem(STORAGE_KEYS.SESSION_HISTORY);
      if (!raw) return [];
      const items: SessionSummary[] = JSON.parse(raw);
      if (!Array.isArray(items)) return [];

      const seen = new Set<string>();
      const deduped: SessionSummary[] = [];
      for (const item of items) {
        if (item && item.sessionId && !seen.has(item.sessionId)) {
          seen.add(item.sessionId);
          deduped.push(item);
        }
      }

      if (!studentId) return deduped;
      return deduped;
    } catch {
      return [];
    }
  }

  /**
   * Calculate Planned vs Actual metrics for Home Analytics
   */
  public getPlannedVsActualMetrics(studentId?: string): PlannedVsActualMetric[] {
    const history = this.getSessionHistory(studentId);
    if (!history || history.length === 0) return [];

    return history.slice(0, 7).reverse().map((s) => {
      const dateObj = new Date(s.startedAt);
      const dateStr = dateObj.toLocaleDateString(undefined, { weekday: 'short', month: 'numeric', day: 'numeric' });
      const plannedMin = Math.round(s.plannedSeconds / 60);
      const actualMin = Math.round(s.activeSeconds / 60);
      const idleMin = Math.round(s.idleSeconds / 60);
      const completionRate = s.totalPhases > 0 ? Math.round((s.phasesCompleted / s.totalPhases) * 100) : 0;

      return {
        date: dateStr,
        sessionTitle: s.title,
        plannedMinutes: plannedMin,
        actualMinutes: actualMin,
        idleMinutes: idleMin,
        completionRate,
        status: s.status
      };
    });
  }

  /**
   * Templates Management
   */
  public getTemplates(): LearningTemplate[] {
    try {
      const raw = safeStorage.getItem(STORAGE_KEYS.TEMPLATES);
      const customTemplates: LearningTemplate[] = raw ? JSON.parse(raw) : [];
      return [...DEFAULT_TEMPLATES, ...customTemplates];
    } catch {
      return DEFAULT_TEMPLATES;
    }
  }

  public saveCustomTemplate(name: string, phases: LearningPhaseTemplate[]): LearningTemplate {
    const newTemplate: LearningTemplate = {
      id: `tpl_custom_${Date.now()}`,
      name: name.trim() || 'My Learning Plan',
      phases,
      isCustom: true
    };

    try {
      const raw = safeStorage.getItem(STORAGE_KEYS.TEMPLATES);
      const existing: LearningTemplate[] = raw ? JSON.parse(raw) : [];
      existing.unshift(newTemplate);
      safeStorage.setItem(STORAGE_KEYS.TEMPLATES, JSON.stringify(existing.slice(0, 15)));
    } catch {}

    return newTemplate;
  }

  public deleteCustomTemplate(templateId: string): boolean {
    try {
      const raw = safeStorage.getItem(STORAGE_KEYS.TEMPLATES);
      if (!raw) return false;
      const existing: LearningTemplate[] = JSON.parse(raw);
      const filtered = existing.filter((t) => t.id !== templateId);
      safeStorage.setItem(STORAGE_KEYS.TEMPLATES, JSON.stringify(filtered));
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Browser Notifications
   */
  private requestNotificationPermission() {
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
      try {
        Notification.requestPermission().catch(() => {});
      } catch {}
    }
  }

  private showPhaseNotification(notif: PhaseTransitionNotification) {
    // 1. Notify in-app subscribers (Toast/Banner)
    this.notificationListeners.forEach((listener) => {
      try {
        listener(notif);
      } catch {}
    });

    // 2. Browser HTML5 notification (if permitted)
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      try {
        const title = notif.isSessionComplete
          ? '🎉 Learning Session Complete!'
          : `✅ ${notif.completedPhaseName} Complete`;
        const body = notif.isSessionComplete
          ? 'Awesome work! Your learning metrics have been saved.'
          : `Next up: ${notif.nextPhaseName}`;

        new Notification(title, {
          body,
          icon: '/favicon.ico',
          silent: true // Sound already played via Web Audio chime
        });
      } catch {}
    }
  }

  /**
   * Subscriptions
   */
  public subscribe(listener: (session: LearningSession | null) => void): () => void {
    this.sessionChangeListeners.add(listener);
    listener(this.activeSession);
    return () => {
      this.sessionChangeListeners.delete(listener);
    };
  }

  public subscribeNotification(listener: (notif: PhaseTransitionNotification) => void): () => void {
    this.notificationListeners.add(listener);
    return () => {
      this.notificationListeners.delete(listener);
    };
  }

  public subscribeSummary(listener: (summary: SessionSummary) => void): () => void {
    this.summaryListeners.add(listener);
    return () => {
      this.summaryListeners.delete(listener);
    };
  }

  private notifySessionChange() {
    this.sessionChangeListeners.forEach((listener) => {
      try {
        listener(this.activeSession);
      } catch {}
    });
  }

  private notifySummaryListeners(summary: SessionSummary) {
    this.summaryListeners.forEach((listener) => {
      try {
        listener(summary);
      } catch {}
    });
  }
}

export const sessionManager = new SessionManagerService();
