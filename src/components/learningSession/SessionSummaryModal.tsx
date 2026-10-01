import React from 'react';
import {
  Trophy,
  Clock,
  Activity,
  Layers,
  CheckCircle2,
  X,
  ArrowRight,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import { SessionSummary } from '../../types/learningSession';

interface SessionSummaryModalProps {
  summary: SessionSummary | null;
  onClose: () => void;
  onNavigateToHome?: () => void;
}

function formatDurationMin(seconds: number): string {
  const m = Math.round(seconds / 60);
  if (m < 1 && seconds > 0) return `${seconds}s`;
  return `${m} min`;
}

export const SessionSummaryModal: React.FC<SessionSummaryModalProps> = ({
  summary,
  onClose,
  onNavigateToHome
}) => {
  if (!summary) return null;

  const isComplete = summary.status === 'COMPLETED';
  const plannedMin = Math.round(summary.plannedSeconds / 60);
  const activeMin = Math.round(summary.activeSeconds / 60);
  const idleMin = Math.round(summary.idleSeconds / 60);

  const completionPercent = summary.totalPhases > 0
    ? Math.round((summary.phasesCompleted / summary.totalPhases) * 100)
    : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-2xl p-5 sm:p-6 text-[var(--text)] relative my-auto space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/20">
              {isComplete ? <Trophy className="h-5 w-5" /> : <Layers className="h-5 w-5" />}
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-500 uppercase">
                <span>{isComplete ? 'Session Completed' : 'Session Ended'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[var(--text)] tracking-tight">
                {summary.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-pointer"
            aria-label="Close Summary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Big 4-Metric Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] text-center">
            <div className="text-[10px] text-[var(--text-muted)] font-mono font-bold">Planned</div>
            <div className="text-base sm:text-lg font-mono font-extrabold text-[var(--text)] mt-1">
              {plannedMin} <span className="text-[10px] font-normal">min</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] text-center">
            <div className="text-[10px] text-emerald-400 font-mono font-bold">Active</div>
            <div className="text-base sm:text-lg font-mono font-extrabold text-emerald-400 mt-1">
              {activeMin} <span className="text-[10px] font-normal">min</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] text-center">
            <div className="text-[10px] text-amber-400 font-mono font-bold">Idle</div>
            <div className="text-base sm:text-lg font-mono font-extrabold text-amber-400 mt-1">
              {idleMin} <span className="text-[10px] font-normal">min</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] text-center">
            <div className="text-[10px] text-indigo-400 font-mono font-bold">Completed</div>
            <div className="text-base sm:text-lg font-mono font-extrabold text-[var(--text)] mt-1">
              {summary.phasesCompleted}/{summary.totalPhases}
            </div>
          </div>
        </div>

        {/* Phase Breakdown List */}
        <div>
          <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2.5 flex items-center justify-between">
            <span>Phase Breakdown</span>
            <span className="font-mono text-[10px] text-emerald-400">{completionPercent}% done</span>
          </h4>

          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {summary.phases.map((phase) => {
              const pPlannedMin = Math.round(phase.plannedSeconds / 60);
              const pActiveMin = Math.round(phase.activeSeconds / 60);
              const isCompleted = phase.status === 'COMPLETED';
              const isSkipped = phase.status === 'SKIPPED';

              return (
                <div
                  key={phase.phaseId}
                  className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {isCompleted ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    ) : isSkipped ? (
                      <span className="h-4 w-4 rounded-full border border-slate-500 text-slate-500 text-[10px] flex items-center justify-center shrink-0">
                        -
                      </span>
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                    )}

                    <div className="min-w-0">
                      <p className="font-bold text-[var(--text)] truncate">{phase.name}</p>
                      <p className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                        Status: {phase.status.toLowerCase()}
                      </p>
                    </div>
                  </div>

                  <div className="text-right font-mono shrink-0 pl-2">
                    <span className="font-bold text-emerald-400">{pActiveMin}</span>
                    <span className="text-[var(--text-muted)]"> / {pPlannedMin} min</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between gap-3">
          {onNavigateToHome && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigateToHome();
              }}
              className="px-3.5 py-2 rounded-xl border border-[var(--border)] hover:bg-[var(--bg-elevated)] text-xs font-bold text-[var(--text)] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <TrendingUp className="h-3.5 w-3.5 text-indigo-400" />
              <span>View on Analytics</span>
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold transition-all shadow-xs cursor-pointer text-center"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
