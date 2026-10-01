/**
 * WakaTime-Style Learning Activity Tracking Engine
 * Codazi Learning Hub
 *
 * Collects real student interactions, tracks active time vs idle time,
 * handles visibility changes, deduplicates events, and generates
 * deterministic daily/weekly analytics for Recharts visualizations.
 *
 * NO MOCK DATA. NO FAKE PASS.
 */

export type ActivitySurface =
  | 'LESSON'
  | 'PRACTICE'
  | 'CODE_PLAYGROUND'
  | 'TERMINAL'
  | 'PROJECT'
  | 'HOMEWORK'
  | 'FORUM'
  | 'GITHUB'
  | 'OTHER';

export type ActivityEventType =
  | 'SESSION_START'
  | 'SESSION_HEARTBEAT'
  | 'SESSION_IDLE'
  | 'SESSION_RESUME'
  | 'SESSION_END'
  | 'LESSON_START'
  | 'LESSON_PROGRESS'
  | 'LESSON_COMPLETE'
  | 'CODE_EDIT'
  | 'CODE_RUN'
  | 'TERMINAL_COMMAND'
  | 'PROJECT_OPEN'
  | 'PROJECT_SUBMIT'
  | 'FORUM_VIEW'
  | 'FORUM_INTERACTION'
  | 'GITHUB_SYNC';

export interface ActivityEvent {
  id: string; // Unique deduplication ID
  studentId: string;
  timestamp: number;
  type: ActivityEventType;
  surface: ActivitySurface;
  resourceId?: string;
  sessionId: string;
  metadata?: Record<string, any>;
}

export interface StudySession {
  id: string;
  studentId: string;
  startedAt: number;
  lastActivityAt: number;
  endedAt?: number;
  activeSeconds: number;
  idleSeconds: number;
  surface: ActivitySurface;
  resourceId?: string;
  eventCount: number;
  status: 'active' | 'idle' | 'ended';
}

export interface DailyActivity {
  date: string; // YYYY-MM-DD
  activeMinutes: number;
  sessionCount: number;
  lessonMinutes: number;
  practiceMinutes: number;
  playgroundMinutes: number;
  terminalMinutes: number;
  projectMinutes: number;
  homeworkMinutes: number;
  forumMinutes: number;
  commits: number;
}

export interface SurfaceBreakdownItem {
  surface: ActivitySurface;
  label: string;
  minutes: number;
  percentage: number;
  color: string;
}

export interface PeriodActivityDay {
  date: string; // YYYY-MM-DD
  displayDate: string; // "Sep 22"
  weekday: string; // "Mon"
  activeMinutes: number;
  sessionCount: number;
  lessonMinutes: number;
  terminalMinutes: number;
  codingMinutes: number;
  projectMinutes: number;
  forumMinutes: number;
  commits: number;
  level: 0 | 1 | 2 | 3;
}

export interface PeriodActivitySummary {
  periodDays: number; // 30 or 98
  totalActiveMinutes: number;
  totalActiveHours: string;
  activeDaysCount: number;
  consistencyRate: number;
  totalSessions: number;
  totalCommits: number;
  surfaceBreakdown: SurfaceBreakdownItem[];
  days: PeriodActivityDay[];
  recentSessions: StudySession[];
}

export interface DailyTrendItem {
  date: string;
  label: string;
  activeMinutes: number;
  lessonMinutes: number;
  codingMinutes: number;
  terminalMinutes: number;
  projectMinutes: number;
  sessions: number;
}

export interface WakaSummaryStats {
  todayActiveMinutes: number;
  thisWeekActiveMinutes: number;
  thisMonthActiveMinutes: number;
  currentStreak: number;
  totalSessions: number;
  surfaceBreakdown: SurfaceBreakdownItem[];
  dailyTrend: DailyTrendItem[];
  recentSessions: StudySession[];
  mostActivePeriod: string;
}

// Configuration Constants
export const TRACKER_CONFIG = {
  IDLE_THRESHOLD_MS: 60 * 1000, // 60s idle threshold (stops counting active time)
  HEARTBEAT_INTERVAL_MS: 15 * 1000, // 15s heartbeat while active
  SYNC_THROTTLE_MS: 30 * 1000, // 30s batch sync
  MIN_STREAK_MINUTES: 2, // minimum 2 active minutes to count towards daily streak
  MAX_STORED_SESSIONS: 40,
  MAX_EVENT_BUFFER: 60,
  STORAGE_KEYS: {
    SESSIONS: 'codazi:waka_sessions_',
    DAILY: 'codazi:waka_daily_',
    BUFFER: 'codazi:waka_buffer_',
    PROCESSED_EVENTS: 'codazi:waka_processed_events_'
  }
};

export const SURFACE_COLORS: Record<ActivitySurface, { label: string; color: string }> = {
  LESSON: { label: 'Interactive Lessons', color: '#6366f1' }, // Indigo
  PRACTICE: { label: 'Practice Drills', color: '#8b5cf6' }, // Purple
  CODE_PLAYGROUND: { label: 'Code Playground', color: '#3b82f6' }, // Blue
  TERMINAL: { label: 'Git & Terminal', color: '#10b981' }, // Emerald
  PROJECT: { label: 'Portfolio Projects', color: '#f59e0b' }, // Amber
  HOMEWORK: { label: 'Assignments', color: '#ec4899' }, // Pink
  FORUM: { label: 'Community Forum', color: '#06b6d4' }, // Cyan
  GITHUB: { label: 'GitHub Sync', color: '#64748b' }, // Slate
  OTHER: { label: 'Other Activity', color: '#94a3b8' }
};

// Singleton Engine State
class WakaActivityEngine {
  private activeStudentId: string | null = null;
  private currentSession: StudySession | null = null;
  private currentSurface: ActivitySurface = 'LESSON';
  private currentResourceId: string | undefined = undefined;

  private lastInteractionTime: number = Date.now();
  private lastHeartbeatTime: number = Date.now();
  private isIdle: boolean = false;
  private isTabVisible: boolean = typeof document !== 'undefined' ? document.visibilityState === 'visible' : true;

  private currentCustomSessionId: string | null = null;
  private currentCustomPhaseId: string | null = null;

  private heartbeatTimer: any = null;
  private syncTimer: any = null;

  private listeners: Set<(stats: WakaSummaryStats) => void> = new Set();
  private activeDeltaListeners: Set<(deltaSeconds: number, isIdle: boolean) => void> = new Set();
  private processedEventIds: Set<string> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      this.initEventListeners();
    }
  }

  private initEventListeners() {
    // Tab visibility handling
    document.addEventListener('visibilitychange', () => {
      this.isTabVisible = document.visibilityState === 'visible';
      if (!this.isTabVisible) {
        this.markIdle('tab_hidden');
      } else {
        this.lastInteractionTime = Date.now();
      }
    });

    // Window beforeunload handling - clean close current session
    window.addEventListener('beforeunload', () => {
      this.flushCurrentSession();
    });

    // Throttled global user interaction listeners
    let interactionThrottle = 0;
    const handleUserInteraction = () => {
      const now = Date.now();
      if (now - interactionThrottle < 2000) return; // throttle DOM event listeners
      interactionThrottle = now;

      if (!this.activeStudentId || !this.isTabVisible) return;

      if (this.isIdle) {
        this.resumeFromIdle();
      } else {
        this.lastInteractionTime = now;
      }
    };

    window.addEventListener('keydown', handleUserInteraction, { passive: true });
    window.addEventListener('click', handleUserInteraction, { passive: true });
    window.addEventListener('scroll', handleUserInteraction, { passive: true });
  }

  /**
   * Set active authenticated student identity
   */
  public setStudent(studentId: string | null) {
    if (this.activeStudentId === studentId) return;

    // Flush previous session if student changes
    if (this.activeStudentId && this.currentSession) {
      this.flushCurrentSession();
    }

    this.activeStudentId = studentId;
    this.currentSession = null;
    this.isIdle = false;

    if (studentId) {
      this.loadProcessedEventIds(studentId);
      this.startHeartbeatLoop();
      this.startSyncLoop();
      this.notifySubscribers();
    } else {
      this.stopLoops();
      this.notifySubscribers();
    }
  }

  /**
   * Associate active learning session & phase context with tracking engine
   */
  public setCustomSessionContext(sessionId: string | null, phaseId: string | null) {
    this.currentCustomSessionId = sessionId;
    this.currentCustomPhaseId = phaseId;
  }

  /**
   * Subscribe to real-time active/idle seconds accrued by the activity engine
   */
  public subscribeActiveDelta(callback: (deltaSeconds: number, isIdle: boolean) => void): () => void {
    this.activeDeltaListeners.add(callback);
    return () => {
      this.activeDeltaListeners.delete(callback);
    };
  }

  private notifyActiveDelta(deltaSeconds: number, isIdle: boolean) {
    if (deltaSeconds <= 0) return;
    this.activeDeltaListeners.forEach((listener) => {
      try {
        listener(deltaSeconds, isIdle);
      } catch (err) {
        console.error('Active delta listener error:', err);
      }
    });
  }

  public isUserCurrentlyIdle(): boolean {
    return this.isIdle || (Date.now() - this.lastInteractionTime > TRACKER_CONFIG.IDLE_THRESHOLD_MS);
  }

  public isDocumentVisible(): boolean {
    return this.isTabVisible;
  }

  public getActiveStudentId(): string | null {
    return this.activeStudentId;
  }

  /**
   * Update active learning surface / resource context (e.g. entered Terminal, opened Lesson)
   */
  public setContext(surface: ActivitySurface, resourceId?: string) {
    if (this.currentSurface === surface && this.currentResourceId === resourceId) return;

    if (this.currentSession && this.currentSession.status === 'active') {
      // Transition session to new surface if active time is significant (> 10s)
      if (this.currentSession.activeSeconds > 10) {
        this.flushCurrentSession();
      } else {
        this.currentSession.surface = surface;
        this.currentSession.resourceId = resourceId;
      }
    }

    this.currentSurface = surface;
    this.currentResourceId = resourceId;
  }

  /**
   * Record a meaningful interaction event (keystroke in code editor, terminal command, lesson action)
   */
  public recordActivity(
    surface: ActivitySurface,
    type: ActivityEventType,
    resourceId?: string,
    metadata?: Record<string, any>
  ) {
    if (!this.activeStudentId || !this.isTabVisible) return;

    const now = Date.now();

    // Ensure session exists
    if (!this.currentSession || this.currentSession.status === 'ended') {
      this.startNewSession(surface, resourceId, now);
    }

    // Check if resuming from idle
    if (this.isIdle || now - this.lastInteractionTime > TRACKER_CONFIG.IDLE_THRESHOLD_MS) {
      this.resumeFromIdle();
    }

    // Calculate incremental active time since last interaction (bounded to idle threshold)
    const elapsedSeconds = Math.min((now - this.lastInteractionTime) / 1000, TRACKER_CONFIG.IDLE_THRESHOLD_MS / 1000);
    if (elapsedSeconds > 0 && elapsedSeconds < 60) {
      const deltaSec = Math.round(elapsedSeconds);
      this.currentSession!.activeSeconds += deltaSec;
      this.currentSession!.lastActivityAt = now;
      this.accumulateDailyActiveTime(this.activeStudentId, surface, deltaSec);
      this.notifyActiveDelta(deltaSec, false);
    }

    this.lastInteractionTime = now;
    this.currentSession!.eventCount += 1;

    // Create unique event with idempotency ID
    const eventId = `act_${now}_${Math.random().toString(36).substring(2, 7)}`;
    const event: ActivityEvent = {
      id: eventId,
      studentId: this.activeStudentId,
      timestamp: now,
      type,
      surface,
      resourceId: resourceId || this.currentResourceId,
      sessionId: this.currentSession!.id,
      metadata: {
        ...(metadata ? this.sanitizeMetadata(metadata) : {}),
        customSessionId: this.currentCustomSessionId || undefined,
        customPhaseId: this.currentCustomPhaseId || undefined
      }
    };

    this.bufferEvent(event);
    this.persistCurrentSession();
    this.notifySubscribers();
  }

  /**
   * Start a new study session
   */
  private startNewSession(surface: ActivitySurface, resourceId?: string, now = Date.now()) {
    const sessionId = `sess_${now}_${Math.random().toString(36).substring(2, 6)}`;
    this.currentSession = {
      id: sessionId,
      studentId: this.activeStudentId!,
      startedAt: now,
      lastActivityAt: now,
      activeSeconds: 1, // initialize with 1 second on start
      idleSeconds: 0,
      surface,
      resourceId: resourceId || this.currentResourceId,
      eventCount: 1,
      status: 'active'
    };

    this.lastInteractionTime = now;
    this.lastHeartbeatTime = now;
    this.isIdle = false;

    this.accumulateDailyActiveTime(this.activeStudentId!, surface, 1);
    this.persistCurrentSession();
  }

  /**
   * Transition active session to idle
   */
  private markIdle(reason: string) {
    if (this.isIdle || !this.currentSession) return;
    this.isIdle = true;
    this.currentSession.status = 'idle';
    this.persistCurrentSession();
    this.notifySubscribers();
  }

  /**
   * Resume active session from idle
   */
  private resumeFromIdle() {
    const now = Date.now();
    this.isIdle = false;
    this.lastInteractionTime = now;
    this.lastHeartbeatTime = now;

    if (this.currentSession) {
      this.currentSession.status = 'active';
      this.currentSession.lastActivityAt = now;
      this.persistCurrentSession();
      this.notifySubscribers();
    } else if (this.activeStudentId) {
      this.startNewSession(this.currentSurface, this.currentResourceId, now);
    }
  }

  /**
   * Active heartbeat loop (every 15s)
   */
  private startHeartbeatLoop() {
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);

    this.heartbeatTimer = setInterval(() => {
      const now = Date.now();

      if (!this.activeStudentId || !this.isTabVisible) return;

      // Check if user has gone idle (no interaction within IDLE_THRESHOLD_MS)
      if (now - this.lastInteractionTime > TRACKER_CONFIG.IDLE_THRESHOLD_MS) {
        if (!this.isIdle) {
          this.markIdle('idle_threshold_exceeded');
        }
        const idleDelta = Math.min(Math.round((now - this.lastHeartbeatTime) / 1000), 20);
        this.notifyActiveDelta(idleDelta > 0 ? idleDelta : 15, true);
        this.lastHeartbeatTime = now;
        return;
      }

      // If active and user interacted recently, credit incremental active seconds
      if (this.currentSession && this.currentSession.status === 'active' && !this.isIdle) {
        const deltaSeconds = Math.min(Math.round((now - this.lastHeartbeatTime) / 1000), 20);
        if (deltaSeconds > 0) {
          this.currentSession.activeSeconds += deltaSeconds;
          this.currentSession.lastActivityAt = now;
          this.accumulateDailyActiveTime(this.activeStudentId, this.currentSession.surface, deltaSeconds);
          this.persistCurrentSession();
          this.notifySubscribers();
          this.notifyActiveDelta(deltaSeconds, false);
        }
      }

      this.lastHeartbeatTime = now;
    }, TRACKER_CONFIG.HEARTBEAT_INTERVAL_MS);
  }

  private stopLoops() {
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);
    if (this.syncTimer) clearInterval(this.syncTimer);
    this.heartbeatTimer = null;
    this.syncTimer = null;
  }

  /**
   * Batch sync events to server loop
   */
  private startSyncLoop() {
    if (this.syncTimer) clearInterval(this.syncTimer);
    this.syncTimer = setInterval(() => {
      this.flushEventBufferToServer();
    }, TRACKER_CONFIG.SYNC_THROTTLE_MS);
  }

  /**
   * End and archive current session
   */
  private flushCurrentSession() {
    if (!this.currentSession || !this.activeStudentId) return;

    this.currentSession.endedAt = Date.now();
    this.currentSession.status = 'ended';

    // Only archive sessions that accumulated at least 5 active seconds
    if (this.currentSession.activeSeconds >= 5) {
      const key = `${TRACKER_CONFIG.STORAGE_KEYS.SESSIONS}${this.activeStudentId}`;
      const sessions = this.getStoredSessions(this.activeStudentId).filter((s) => s.id !== this.currentSession!.id);
      sessions.unshift(this.currentSession);
      const bounded = sessions.slice(0, TRACKER_CONFIG.MAX_STORED_SESSIONS);
      try {
        localStorage.setItem(key, JSON.stringify(bounded));
      } catch {}
    }

    this.currentSession = null;
  }

  /**
   * Persist current active session into local session cache
   */
  private persistCurrentSession() {
    if (!this.currentSession || !this.activeStudentId) return;

    const key = `${TRACKER_CONFIG.STORAGE_KEYS.SESSIONS}${this.activeStudentId}`;
    const sessions = this.getStoredSessions(this.activeStudentId).filter((s) => s.id !== this.currentSession!.id);
    sessions.unshift({ ...this.currentSession });
    const bounded = sessions.slice(0, TRACKER_CONFIG.MAX_STORED_SESSIONS);
    try {
      localStorage.setItem(key, JSON.stringify(bounded));
    } catch {}
  }

  /**
   * Accumulate active seconds into daily statistics
   */
  private accumulateDailyActiveTime(studentId: string, surface: ActivitySurface, seconds: number) {
    if (seconds <= 0) return;

    const today = new Date().toISOString().slice(0, 10);
    const dailyMap = this.getDailyRecords(studentId);
    const existing = dailyMap[today] || {
      date: today,
      activeMinutes: 0,
      sessionCount: 1,
      lessonMinutes: 0,
      practiceMinutes: 0,
      playgroundMinutes: 0,
      terminalMinutes: 0,
      projectMinutes: 0,
      homeworkMinutes: 0,
      forumMinutes: 0,
      commits: 0
    };

    const addedMinutes = seconds / 60;
    existing.activeMinutes = Number((existing.activeMinutes + addedMinutes).toFixed(2));

    switch (surface) {
      case 'LESSON':
        existing.lessonMinutes = Number((existing.lessonMinutes + addedMinutes).toFixed(2));
        break;
      case 'PRACTICE':
        existing.practiceMinutes = Number((existing.practiceMinutes + addedMinutes).toFixed(2));
        break;
      case 'CODE_PLAYGROUND':
        existing.playgroundMinutes = Number((existing.playgroundMinutes + addedMinutes).toFixed(2));
        break;
      case 'TERMINAL':
        existing.terminalMinutes = Number((existing.terminalMinutes + addedMinutes).toFixed(2));
        break;
      case 'PROJECT':
        existing.projectMinutes = Number((existing.projectMinutes + addedMinutes).toFixed(2));
        break;
      case 'HOMEWORK':
        existing.homeworkMinutes = Number((existing.homeworkMinutes + addedMinutes).toFixed(2));
        break;
      case 'FORUM':
        existing.forumMinutes = Number((existing.forumMinutes + addedMinutes).toFixed(2));
        break;
      default:
        break;
    }

    dailyMap[today] = existing;
    try {
      localStorage.setItem(`${TRACKER_CONFIG.STORAGE_KEYS.DAILY}${studentId}`, JSON.stringify(dailyMap));
    } catch {}
  }

  /**
   * Buffer an event locally for background network sync
   */
  private bufferEvent(event: ActivityEvent) {
    if (this.processedEventIds.has(event.id)) return;
    this.processedEventIds.add(event.id);

    const bufferKey = `${TRACKER_CONFIG.STORAGE_KEYS.BUFFER}${event.studentId}`;
    try {
      const raw = localStorage.getItem(bufferKey);
      const buffer: ActivityEvent[] = raw ? JSON.parse(raw) : [];
      buffer.push(event);
      const bounded = buffer.slice(-TRACKER_CONFIG.MAX_EVENT_BUFFER);
      localStorage.setItem(bufferKey, JSON.stringify(bounded));
    } catch {}
  }

  /**
   * Send buffered events to the backend server with deduplication
   */
  public async flushEventBufferToServer(): Promise<void> {
    if (!this.activeStudentId || typeof window === 'undefined') return;

    const bufferKey = `${TRACKER_CONFIG.STORAGE_KEYS.BUFFER}${this.activeStudentId}`;
    let buffer: ActivityEvent[] = [];
    try {
      const raw = localStorage.getItem(bufferKey);
      if (raw) buffer = JSON.parse(raw);
    } catch {
      return;
    }

    if (buffer.length === 0) return;

    try {
      const response = await fetch('/api/activity/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: this.activeStudentId,
          events: buffer
        })
      });

      if (response.ok) {
        // Clear successfully synced buffer
        localStorage.removeItem(bufferKey);
      }
    } catch {
      // Offline fallback: keep events in buffer for next retry
    }
  }

  /**
   * Data minimization filter (strips private tokens, full code contents)
   */
  private sanitizeMetadata(metadata: Record<string, any>): Record<string, any> {
    const sanitized: Record<string, any> = {};
    const safeKeys = [
      'commandName',
      'lessonCategory',
      'durationMinutes',
      'language',
      'taskCount',
      'codeLang',
      'charDelta',
      'postId',
      'projectId'
    ];

    for (const key of safeKeys) {
      if (metadata[key] !== undefined) {
        sanitized[key] = metadata[key];
      }
    }
    return sanitized;
  }

  private loadProcessedEventIds(studentId: string) {
    try {
      const raw = localStorage.getItem(`${TRACKER_CONFIG.STORAGE_KEYS.PROCESSED_EVENTS}${studentId}`);
      if (raw) {
        const arr = JSON.parse(raw);
        this.processedEventIds = new Set(arr.slice(-200));
      }
    } catch {}
  }

  public getStoredSessions(studentId: string): StudySession[] {
    try {
      const raw = localStorage.getItem(`${TRACKER_CONFIG.STORAGE_KEYS.SESSIONS}${studentId}`);
      if (!raw) return [];
      const parsed: StudySession[] = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];

      // Ensure deduplication by session ID
      const seen = new Set<string>();
      const deduped: StudySession[] = [];
      for (const item of parsed) {
        if (item && item.id && !seen.has(item.id)) {
          seen.add(item.id);
          deduped.push(item);
        }
      }
      return deduped;
    } catch {
      return [];
    }
  }

  public getDailyRecords(studentId: string): Record<string, DailyActivity> {
    try {
      const raw = localStorage.getItem(`${TRACKER_CONFIG.STORAGE_KEYS.DAILY}${studentId}`);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  /**
   * Calculate student learning streak based on genuine active days
   */
  public calculateStreak(dailyMap: Record<string, DailyActivity>): number {
    let streak = 0;
    const now = new Date();

    // Check consecutive days backward starting today or yesterday
    for (let i = 0; i < 60; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const record = dailyMap[dateStr];

      if (record && record.activeMinutes >= TRACKER_CONFIG.MIN_STREAK_MINUTES) {
        streak++;
      } else if (i === 0) {
        // If today has not yet hit threshold, check if yesterday was active
        continue;
      } else {
        break;
      }
    }

    return streak;
  }

  /**
   * Compute normalized summary statistics for Home Page Recharts
   */
  public getSummaryStats(studentId: string): WakaSummaryStats {
    const dailyMap = this.getDailyRecords(studentId);
    const sessions = this.getStoredSessions(studentId);

    const todayStr = new Date().toISOString().slice(0, 10);
    const todayRecord = dailyMap[todayStr];
    const todayActiveMinutes = todayRecord ? Math.round(todayRecord.activeMinutes) : 0;

    // Past 7 days trend
    const dailyTrend: DailyTrendItem[] = [];
    let weekMinutes = 0;
    const now = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const dayLabel = d.toLocaleDateString('en-US', { weekday: 'short' });
      const rec = dailyMap[dateStr];

      const activeMinutes = rec ? Math.round(rec.activeMinutes) : 0;
      const lessonMinutes = rec ? Math.round(rec.lessonMinutes) : 0;
      const codingMinutes = rec ? Math.round(rec.playgroundMinutes + rec.practiceMinutes) : 0;
      const terminalMinutes = rec ? Math.round(rec.terminalMinutes) : 0;
      const projectMinutes = rec ? Math.round(rec.projectMinutes) : 0;
      const sessionCount = rec ? rec.sessionCount : 0;

      weekMinutes += activeMinutes;

      dailyTrend.push({
        date: dateStr,
        label: dayLabel,
        activeMinutes,
        lessonMinutes,
        codingMinutes,
        terminalMinutes,
        projectMinutes,
        sessions: sessionCount
      });
    }

    // Month Active Minutes (past 30 days)
    let monthMinutes = 0;
    for (let i = 0; i < 30; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const rec = dailyMap[dateStr];
      if (rec) monthMinutes += rec.activeMinutes;
    }

    // Surface Breakdown Calculation
    let totalSurfaceMinutes = 0;
    const surfaceTotals: Record<ActivitySurface, number> = {
      LESSON: 0,
      PRACTICE: 0,
      CODE_PLAYGROUND: 0,
      TERMINAL: 0,
      PROJECT: 0,
      HOMEWORK: 0,
      FORUM: 0,
      GITHUB: 0,
      OTHER: 0
    };

    Object.values(dailyMap).forEach((rec) => {
      surfaceTotals.LESSON += rec.lessonMinutes || 0;
      surfaceTotals.PRACTICE += rec.practiceMinutes || 0;
      surfaceTotals.CODE_PLAYGROUND += rec.playgroundMinutes || 0;
      surfaceTotals.TERMINAL += rec.terminalMinutes || 0;
      surfaceTotals.PROJECT += rec.projectMinutes || 0;
      surfaceTotals.HOMEWORK += rec.homeworkMinutes || 0;
      surfaceTotals.FORUM += rec.forumMinutes || 0;
    });

    totalSurfaceMinutes = Object.values(surfaceTotals).reduce((a, b) => a + b, 0);

    const surfaceBreakdown: SurfaceBreakdownItem[] = (
      Object.entries(surfaceTotals) as [ActivitySurface, number][]
    )
      .filter(([_, minutes]) => minutes > 0)
      .map(([surf, minutes]) => {
        const meta = SURFACE_COLORS[surf] || SURFACE_COLORS.OTHER;
        const roundedMins = Math.round(minutes);
        const percentage = totalSurfaceMinutes > 0 ? Math.round((minutes / totalSurfaceMinutes) * 100) : 0;
        return {
          surface: surf,
          label: meta.label,
          minutes: roundedMins,
          percentage,
          color: meta.color
        };
      })
      .sort((a, b) => b.minutes - a.minutes);

    const streak = this.calculateStreak(dailyMap);

    return {
      todayActiveMinutes,
      thisWeekActiveMinutes: Math.round(weekMinutes),
      thisMonthActiveMinutes: Math.round(monthMinutes),
      currentStreak: streak,
      totalSessions: sessions.length,
      surfaceBreakdown,
      dailyTrend,
      recentSessions: sessions.slice(0, 5),
      mostActivePeriod: this.determineMostActivePeriod(sessions)
    };
  }

  public determineMostActivePeriod(sessions: StudySession[]): string {
    if (sessions.length === 0) return 'None';

    const hourBuckets = { Morning: 0, Afternoon: 0, Evening: 0, Night: 0 };
    for (const s of sessions) {
      const hour = new Date(s.startedAt).getHours();
      if (hour >= 5 && hour < 12) hourBuckets.Morning += s.activeSeconds;
      else if (hour >= 12 && hour < 17) hourBuckets.Afternoon += s.activeSeconds;
      else if (hour >= 17 && hour < 22) hourBuckets.Evening += s.activeSeconds;
      else hourBuckets.Night += s.activeSeconds;
    }

    let topPeriod = 'Afternoon';
    let maxSecs = -1;
    for (const [period, secs] of Object.entries(hourBuckets)) {
      if (secs > maxSecs) {
        maxSecs = secs;
        topPeriod = period;
      }
    }
    return topPeriod;
  }

  /**
   * Fetch organized real activity dataset for a specified historical window (e.g. 30 or 98 days)
   * 100% Real Tracked Data. Zero Mock Data.
   */
  public getPeriodActivityData(studentId: string, daysCount: number = 30): PeriodActivitySummary {
    const dailyMap = this.getDailyRecords(studentId);
    const sessions = this.getStoredSessions(studentId);
    const now = new Date();

    const days: PeriodActivityDay[] = [];
    let totalMinutes = 0;
    let activeDaysCount = 0;
    let totalCommits = 0;
    let totalPeriodSessions = 0;

    const surfaceTotals: Record<ActivitySurface, number> = {
      LESSON: 0,
      PRACTICE: 0,
      CODE_PLAYGROUND: 0,
      TERMINAL: 0,
      PROJECT: 0,
      HOMEWORK: 0,
      FORUM: 0,
      GITHUB: 0,
      OTHER: 0
    };

    // Calculate start timestamp for sessions filter
    const periodStartTimestamp = new Date(now).getTime() - (daysCount * 86400000);

    for (let i = daysCount - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const displayDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const weekday = d.toLocaleDateString('en-US', { weekday: 'short' });
      const rec = dailyMap[dateStr];

      const activeMinutes = rec ? Math.round(rec.activeMinutes) : 0;
      const sessionCount = rec ? rec.sessionCount : 0;
      const lessonMinutes = rec ? Math.round(rec.lessonMinutes) : 0;
      const terminalMinutes = rec ? Math.round(rec.terminalMinutes) : 0;
      const codingMinutes = rec ? Math.round((rec.playgroundMinutes || 0) + (rec.practiceMinutes || 0)) : 0;
      const projectMinutes = rec ? Math.round(rec.projectMinutes || 0) : 0;
      const forumMinutes = rec ? Math.round(rec.forumMinutes || 0) : 0;
      const commits = rec ? rec.commits || 0 : 0;

      if (rec) {
        surfaceTotals.LESSON += rec.lessonMinutes || 0;
        surfaceTotals.PRACTICE += rec.practiceMinutes || 0;
        surfaceTotals.CODE_PLAYGROUND += rec.playgroundMinutes || 0;
        surfaceTotals.TERMINAL += rec.terminalMinutes || 0;
        surfaceTotals.PROJECT += rec.projectMinutes || 0;
        surfaceTotals.HOMEWORK += rec.homeworkMinutes || 0;
        surfaceTotals.FORUM += rec.forumMinutes || 0;
      }

      totalMinutes += activeMinutes;
      if (activeMinutes > 0 || sessionCount > 0 || commits > 0) activeDaysCount++;
      totalCommits += commits;
      totalPeriodSessions += sessionCount;

      let level: 0 | 1 | 2 | 3 = 0;
      if (activeMinutes >= 45 || sessionCount >= 4) {
        level = 3;
      } else if (activeMinutes >= 20 || sessionCount >= 2) {
        level = 2;
      } else if (activeMinutes > 0 || sessionCount > 0 || commits > 0) {
        level = 1;
      }

      days.push({
        date: dateStr,
        displayDate,
        weekday,
        activeMinutes,
        sessionCount,
        lessonMinutes,
        terminalMinutes,
        codingMinutes,
        projectMinutes,
        forumMinutes,
        commits,
        level
      });
    }

    const totalSurfaceMinutes = Object.values(surfaceTotals).reduce((a, b) => a + b, 0);
    const surfaceBreakdown: SurfaceBreakdownItem[] = (
      Object.entries(surfaceTotals) as [ActivitySurface, number][]
    )
      .filter(([_, minutes]) => minutes > 0)
      .map(([surf, minutes]) => {
        const meta = SURFACE_COLORS[surf] || SURFACE_COLORS.OTHER;
        const roundedMins = Math.round(minutes);
        const percentage = totalSurfaceMinutes > 0 ? Math.round((minutes / totalSurfaceMinutes) * 100) : 0;
        return {
          surface: surf,
          label: meta.label,
          minutes: roundedMins,
          percentage,
          color: meta.color
        };
      })
      .sort((a, b) => b.minutes - a.minutes);

    const periodSessions = sessions.filter((s) => s.startedAt >= periodStartTimestamp);

    return {
      periodDays: daysCount,
      totalActiveMinutes: totalMinutes,
      totalActiveHours: (totalMinutes / 60).toFixed(1),
      activeDaysCount,
      consistencyRate: daysCount > 0 ? Math.round((activeDaysCount / daysCount) * 100) : 0,
      totalSessions: totalPeriodSessions || periodSessions.length,
      totalCommits,
      surfaceBreakdown,
      days,
      recentSessions: periodSessions.slice(0, 10)
    };
  }

  // Reactive subscription system
  public subscribe(callback: (stats: WakaSummaryStats) => void): () => void {
    this.listeners.add(callback);
    if (this.activeStudentId) {
      callback(this.getSummaryStats(this.activeStudentId));
    }
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notifySubscribers() {
    if (!this.activeStudentId || this.listeners.size === 0) return;
    const stats = this.getSummaryStats(this.activeStudentId);
    this.listeners.forEach((cb) => {
      try {
        cb(stats);
      } catch {}
    });
  }
}

// Global Singleton Export
export const activityTracker = new WakaActivityEngine();
