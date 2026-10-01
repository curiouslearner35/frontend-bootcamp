import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  SkipForward,
  Square,
  Clock,
  Layers,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Minimize2,
  Zap,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { LearningSession } from '../../types/learningSession';
import { sessionManager } from '../../services/sessionManager';

interface ActiveSessionWidgetProps {
  session?: LearningSession | null;
}

function formatTime(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(clamped / 60);
  const secs = clamped % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function formatDurationMinSec(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
}

export const ActiveSessionWidget: React.FC<ActiveSessionWidgetProps> = ({ session: propSession }) => {
  const [internalSession, setInternalSession] = useState<LearningSession | null>(() => sessionManager.getActiveSession());
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = sessionManager.subscribe((s) => {
      setInternalSession(s);
    });
    return () => unsubscribe();
  }, []);

  const session = propSession !== undefined ? propSession : internalSession;

  const [remainingSeconds, setRemainingSeconds] = useState<number>(() =>
    sessionManager.getRemainingPhaseSeconds()
  );
  const [progressRatio, setProgressRatio] = useState<number>(() =>
    sessionManager.getPhaseProgressRatio()
  );

  // Update countdown clock smoothly from session manager
  useEffect(() => {
    const updateTick = () => {
      setRemainingSeconds(sessionManager.getRemainingPhaseSeconds());
      setProgressRatio(sessionManager.getPhaseProgressRatio());
    };

    updateTick();
    const interval = setInterval(updateTick, 250);
    return () => clearInterval(interval);
  }, [session]);

  if (!session) return null;

  const currentPhase = sessionManager.getCurrentPhase();
  if (!currentPhase) return null;

  const currentPhaseIndex = session.currentPhaseIndex;
  const totalPhases = session.phases.length;

  const handlePauseResume = () => {
    if (session.isPaused) {
      sessionManager.resume();
    } else {
      sessionManager.pause();
    }
  };

  const handleSkip = () => {
    sessionManager.skipCurrentPhase();
  };

  const handleEnd = () => {
    sessionManager.endSession(true);
  };

  return (
    <div
      id="active-learning-session-bar"
      className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-xl transition-all duration-300 animate-slide-up"
    >
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)]/95 backdrop-blur-md shadow-2xl overflow-hidden text-[var(--text)]">
        {/* Progress Bar Line */}
        <div className="w-full h-1 bg-[var(--border)] relative overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              session.isPaused ? 'bg-amber-500' : 'bg-[var(--primary)]'
            }`}
            style={{ width: `${Math.round(progressRatio * 100)}%` }}
          />
        </div>

        {/* Main Control Bar */}
        <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3">
          {/* Left: Phase Title, Index & Status */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {/* Status Indicator Icon */}
            <div
              className={`h-9 w-9 rounded-2xl flex items-center justify-center shrink-0 border ${
                session.isPaused
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-500'
                  : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500'
              }`}
            >
              {session.isPaused ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Activity className="h-4 w-4 animate-pulse" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[var(--text-muted)]">
                <span>Phase {currentPhaseIndex + 1} of {totalPhases}</span>
                <span>•</span>
                <span className="truncate">{session.title}</span>
                {session.isPaused && (
                  <span className="px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-400 text-[9px] font-bold">
                    PAUSED
                  </span>
                )}
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-[var(--text)] truncate tracking-tight">
                {currentPhase.name}
              </h4>
            </div>
          </div>

          {/* Center / Right: Big Countdown Timer */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="text-right">
              <div className="font-mono text-base sm:text-xl font-extrabold text-[var(--text)] tracking-wider">
                {formatTime(remainingSeconds)}
              </div>
              <div className="text-[10px] font-mono text-[var(--text-muted)] hidden sm:block">
                Act: {formatDurationMinSec(currentPhase.activeSeconds)}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-1">
              {/* Pause / Resume Button */}
              <button
                type="button"
                onClick={handlePauseResume}
                className={`h-9 px-3 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs ${
                  session.isPaused
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    : 'bg-amber-500 hover:bg-amber-600 text-white'
                }`}
                title={session.isPaused ? 'Resume Phase' : 'Pause Phase'}
                aria-label={session.isPaused ? 'Resume Phase' : 'Pause Phase'}
              >
                {session.isPaused ? (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span className="hidden sm:inline">Resume</span>
                  </>
                ) : (
                  <>
                    <Pause className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                )}
              </button>

              {/* Skip Phase Button */}
              <button
                type="button"
                onClick={handleSkip}
                className="h-9 w-9 rounded-xl border border-[var(--border)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text)] flex items-center justify-center transition-colors cursor-pointer"
                title="Skip to next phase"
                aria-label="Skip to next phase"
              >
                <SkipForward className="h-4 w-4" />
              </button>

              {/* End Session Early Button */}
              <button
                type="button"
                onClick={handleEnd}
                className="h-9 w-9 rounded-xl border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 flex items-center justify-center transition-colors cursor-pointer"
                title="End session early"
                aria-label="End session early"
              >
                <Square className="h-3.5 w-3.5" />
              </button>

              {/* Expand Toggle */}
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-9 w-8 rounded-xl text-[var(--text-muted)] hover:text-[var(--text)] flex items-center justify-center cursor-pointer"
                title={isExpanded ? 'Collapse' : 'Expand Details'}
                aria-label={isExpanded ? 'Collapse' : 'Expand Details'}
              >
                {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Drawer: Full Phase Breakdown & Real-Time Stats */}
        {isExpanded && (
          <div className="px-4 pb-4 pt-2 border-t border-[var(--border)] space-y-3 bg-[var(--bg-elevated)]/50">
            {/* Real Activity Tracking Banner */}
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-card)] p-2.5 rounded-xl border border-[var(--border)]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-ping" />
                <span>Active Tracked:</span>
                <span className="font-bold text-emerald-400">
                  {formatDurationMinSec(session.activeSeconds)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>Idle:</span>
                <span className="font-bold text-amber-400">
                  {formatDurationMinSec(session.idleSeconds)}
                </span>
              </div>
            </div>

            {/* Phases List */}
            <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
              {session.phases.map((phase, idx) => {
                const isCurrent = idx === currentPhaseIndex;
                const isCompleted = phase.status === 'COMPLETED';
                const isSkipped = phase.status === 'SKIPPED';

                return (
                  <div
                    key={phase.phaseId}
                    className={`p-2 rounded-xl flex items-center justify-between text-xs font-mono border ${
                      isCurrent
                        ? 'bg-indigo-500/10 border-indigo-500/40 text-[var(--text)] font-bold'
                        : isCompleted
                        ? 'bg-emerald-500/5 border-emerald-500/20 text-[var(--text-muted)]'
                        : 'bg-[var(--bg-card)] border-[var(--border)] text-[var(--text-muted)] opacity-70'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {isCompleted ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      ) : (
                        <span className="h-3.5 w-3.5 rounded-full border border-current text-[10px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                      )}
                      <span className="truncate">{phase.name}</span>
                      {isSkipped && (
                        <span className="text-[9px] px-1 rounded bg-slate-500/20 text-slate-400">
                          SKIPPED
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span>{Math.round(phase.plannedSeconds / 60)}m</span>
                      {isCompleted && (
                        <span className="text-[10px] text-emerald-400">
                          (Act: {Math.round(phase.activeSeconds / 60)}m)
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
