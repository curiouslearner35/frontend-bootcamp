/**
 * Learning Session & Phase Timer Data Models
 * Codazi Learning Hub
 *
 * Models for custom planned learning sessions, phased timer tracking,
 * idle/active time association, and session summaries.
 */

import { ActivitySurface } from '../services/activityTracker';

export type SessionStatus =
  | 'PLANNED'
  | 'ACTIVE'
  | 'PAUSED'
  | 'COMPLETED'
  | 'SKIPPED'
  | 'CANCELLED'
  | 'PARTIALLY_COMPLETED';

export type PhaseStatus =
  | 'PLANNED'
  | 'ACTIVE'
  | 'PAUSED'
  | 'COMPLETED'
  | 'SKIPPED'
  | 'CANCELLED'
  | 'PARTIALLY_COMPLETED';

export type PhaseType = 'read' | 'practice' | 'recap' | 'code' | 'quiz' | 'custom';

export interface LearningPhase {
  phaseId: string;
  name: string;
  type: PhaseType;
  plannedSeconds: number;
  startedAt?: number;
  endedAt?: number;
  activeSeconds: number;
  idleSeconds: number;
  status: PhaseStatus;
}

export interface SessionContext {
  surface?: ActivitySurface;
  resourceType?: 'lesson' | 'project' | 'terminal' | 'playground' | 'syllabus' | 'general';
  resourceId?: string;
  resourceTitle?: string;
  lessonId?: string;
  topic?: string;
  category?: string;
}

export interface LearningSession {
  sessionId: string;
  studentId: string;
  title: string;
  startedAt: number;
  endedAt?: number;
  status: SessionStatus;
  plannedSeconds: number;
  activeSeconds: number;
  idleSeconds: number;
  currentPhaseIndex: number;
  phases: LearningPhase[];
  context?: SessionContext;
  // Timestamp-based state tracking for pause/resume without drift
  phaseRunStartedAt?: number; // timestamp when current continuous run of active phase started
  accumulatedPhaseSecondsBeforeRun?: number; // elapsed planned seconds in current phase prior to latest resume
  isPaused: boolean;
  pausedAt?: number;
}

export interface LearningPhaseTemplate {
  name: string;
  plannedMinutes: number;
  type: PhaseType;
}

export interface LearningTemplate {
  id: string;
  name: string;
  description?: string;
  phases: LearningPhaseTemplate[];
  isCustom?: boolean;
}

export interface PhaseSummaryItem {
  phaseId: string;
  name: string;
  type: PhaseType;
  plannedSeconds: number;
  activeSeconds: number;
  idleSeconds: number;
  status: PhaseStatus;
}

export interface SessionSummary {
  sessionId: string;
  title: string;
  startedAt: number;
  endedAt: number;
  status: SessionStatus;
  plannedSeconds: number;
  activeSeconds: number;
  idleSeconds: number;
  phasesCompleted: number;
  totalPhases: number;
  phases: PhaseSummaryItem[];
  context?: SessionContext;
}

export interface PlannedVsActualMetric {
  date: string;
  sessionTitle: string;
  plannedMinutes: number;
  actualMinutes: number;
  idleMinutes: number;
  completionRate: number; // 0 to 100%
  status: SessionStatus;
}
