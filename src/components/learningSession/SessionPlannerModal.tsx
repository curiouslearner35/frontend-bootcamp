import React, { useState, useMemo } from 'react';
import {
  X,
  Plus,
  Trash2,
  Clock,
  CalendarDays,
  Play,
  Bookmark,
  ChevronUp,
  ChevronDown,
  Sparkles,
  BookOpen,
  Code2,
  Terminal,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import {
  LearningPhaseTemplate,
  PhaseType,
  SessionContext,
  LearningTemplate
} from '../../types/learningSession';
import { sessionManager } from '../../services/sessionManager';
import { Language } from '../../types';

interface SessionPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentId?: string;
  context?: SessionContext;
  initialContext?: SessionContext;
  language?: Language;
}

const PHASE_TYPE_ICONS: Record<PhaseType, React.ElementType> = {
  read: BookOpen,
  practice: Terminal,
  recap: FileCheck,
  code: Code2,
  quiz: HelpCircle,
  custom: Sparkles
};

export const SessionPlannerModal: React.FC<SessionPlannerModalProps> = ({
  isOpen,
  onClose,
  studentId = 'student',
  context,
  initialContext,
  language = 'en'
}) => {
  const activeContext = initialContext || context;

  // Title for session
  const [sessionTitle, setSessionTitle] = useState(() => {
    if (activeContext?.resourceTitle) {
      return `Study: ${activeContext.resourceTitle}`;
    }
    if (activeContext?.topic) {
      return `Study: ${activeContext.topic}`;
    }
    return 'Learning Sprint';
  });

  // Default initial phases: Read 10m, Practice 10m, Recap 10m
  const [phases, setPhases] = useState<LearningPhaseTemplate[]>([
    { name: activeContext?.resourceTitle ? `Read: ${activeContext.resourceTitle}` : activeContext?.topic ? `Read: ${activeContext.topic}` : 'Read & Understand', plannedMinutes: 10, type: 'read' },
    { name: 'Interactive Practice', plannedMinutes: 10, type: 'practice' },
    { name: 'Recap & Review', plannedMinutes: 10, type: 'recap' }
  ]);

  // Template saving & loading state
  const [templates, setTemplates] = useState<LearningTemplate[]>(() => sessionManager.getTemplates());
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('');
  const [isSavingTemplate, setIsSavingTemplate] = useState<boolean>(false);
  const [newTemplateName, setNewTemplateName] = useState<string>('');

  // Total planned minutes calculated dynamically
  const totalPlannedMinutes = useMemo(() => {
    return phases.reduce((acc, p) => acc + (p.plannedMinutes || 0), 0);
  }, [phases]);

  if (!isOpen) return null;

  const handleAddPhase = () => {
    const newPhase: LearningPhaseTemplate = {
      name: `Practice Block ${phases.length + 1}`,
      plannedMinutes: 10,
      type: 'practice'
    };
    setPhases([...phases, newPhase]);
  };

  const handleRemovePhase = (index: number) => {
    if (phases.length <= 1) return; // keep at least 1 phase
    setPhases(phases.filter((_, idx) => idx !== index));
  };

  const handleUpdatePhaseName = (index: number, name: string) => {
    const updated = [...phases];
    updated[index].name = name;
    setPhases(updated);
  };

  const handleUpdatePhaseMinutes = (index: number, delta: number) => {
    const updated = [...phases];
    const nextVal = Math.max(1, Math.min(120, (updated[index].plannedMinutes || 5) + delta));
    updated[index].plannedMinutes = nextVal;
    setPhases(updated);
  };

  const handleSetPhaseMinutes = (index: number, minutes: number) => {
    const updated = [...phases];
    updated[index].plannedMinutes = Math.max(1, Math.min(120, minutes));
    setPhases(updated);
  };

  const handleUpdatePhaseType = (index: number, type: PhaseType) => {
    const updated = [...phases];
    updated[index].type = type;
    setPhases(updated);
  };

  const handleMovePhase = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= phases.length) return;
    const updated = [...phases];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    setPhases(updated);
  };

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplateId(templateId);
    const found = templates.find((t) => t.id === templateId);
    if (found) {
      setSessionTitle(found.name);
      setPhases(found.phases.map((p) => ({ ...p })));
    }
  };

  const handleSaveAsTemplate = () => {
    if (!newTemplateName.trim()) return;
    const saved = sessionManager.saveCustomTemplate(newTemplateName, phases);
    setTemplates(sessionManager.getTemplates());
    setSelectedTemplateId(saved.id);
    setIsSavingTemplate(false);
    setNewTemplateName('');
  };

  const handleStartSession = () => {
    if (phases.length === 0) return;
    sessionManager.startSession(sessionTitle, phases, studentId, activeContext);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-2xl p-5 sm:p-6 text-[var(--text)] relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
          <div>
            <div className="flex items-center gap-2 text-indigo-500 font-bold text-xs uppercase tracking-wider">
              <CalendarDays className="h-4 w-4" />
              <span>Session Planner</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-[var(--text)] tracking-tight mt-0.5">
              Plan Your Learning Session
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-pointer"
            aria-label="Close Planner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Learning Context Indicator if opened from a lesson or surface */}
        {context?.resourceTitle && (
          <div className="mt-4 p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center gap-2 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
            <span className="text-[var(--text-muted)]">Context:</span>
            <span className="font-bold text-indigo-400 truncate">{context.resourceTitle}</span>
          </div>
        )}

        {/* Session Title Input */}
        <div className="mt-4">
          <label className="block text-xs font-bold text-[var(--text-muted)] mb-1">
            Session Title
          </label>
          <input
            type="text"
            value={sessionTitle}
            onChange={(e) => setSessionTitle(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-sm font-semibold text-[var(--text)] focus:outline-hidden focus:border-[var(--primary)]"
            placeholder="e.g. Git Mastery Sprint"
          />
        </div>

        {/* Templates Selector */}
        <div className="mt-3.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-[var(--text-muted)]">Templates</span>
            <button
              type="button"
              onClick={() => setIsSavingTemplate(!isSavingTemplate)}
              className="text-xs text-[var(--primary)] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Bookmark className="h-3 w-3" />
              <span>Save Plan</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {templates.map((tpl) => (
              <button
                key={tpl.id}
                type="button"
                onClick={() => handleSelectTemplate(tpl.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedTemplateId === tpl.id
                    ? 'bg-[var(--primary)] text-white shadow-xs'
                    : 'bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                {tpl.name}
              </button>
            ))}
          </div>

          {/* Save Template Form */}
          {isSavingTemplate && (
            <div className="mt-2.5 p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center gap-2">
              <input
                type="text"
                value={newTemplateName}
                onChange={(e) => setNewTemplateName(e.target.value)}
                placeholder="Template name (e.g. My 20m Drill)"
                className="flex-1 px-2.5 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text)]"
              />
              <button
                type="button"
                onClick={handleSaveAsTemplate}
                className="px-3 py-1.5 rounded-lg bg-[var(--primary)] text-white text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Save
              </button>
            </div>
          )}
        </div>

        {/* Phases List */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[var(--text-muted)]">Session Phases</span>
            <span className="text-xs font-mono font-bold text-indigo-400">
              Total: {totalPlannedMinutes} min
            </span>
          </div>

          <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
            {phases.map((phase, idx) => {
              const IconComp = PHASE_TYPE_ICONS[phase.type] || Sparkles;
              return (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                >
                  {/* Left: Reorder, Icon, and Phase Name */}
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    {/* Move Up/Down Controls */}
                    <div className="flex flex-col gap-0.5">
                      <button
                        type="button"
                        onClick={() => handleMovePhase(idx, 'up')}
                        disabled={idx === 0}
                        className="p-0.5 rounded text-[var(--text-muted)] hover:text-[var(--text)] disabled:opacity-20 cursor-pointer"
                        title="Move Up"
                      >
                        <ChevronUp className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMovePhase(idx, 'down')}
                        disabled={idx === phases.length - 1}
                        className="p-0.5 rounded text-[var(--text-muted)] hover:text-[var(--text)] disabled:opacity-20 cursor-pointer"
                        title="Move Down"
                      >
                        <ChevronDown className="h-3 w-3" />
                      </button>
                    </div>

                    <div className="p-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-indigo-400 shrink-0">
                      <IconComp className="h-4 w-4" />
                    </div>

                    <input
                      type="text"
                      value={phase.name}
                      onChange={(e) => handleUpdatePhaseName(idx, e.target.value)}
                      className="flex-1 min-w-0 px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-xs font-bold text-[var(--text)] focus:outline-hidden"
                      placeholder={`Phase ${idx + 1}`}
                    />
                  </div>

                  {/* Right: Duration Adjustment & Delete */}
                  <div className="flex items-center justify-between sm:justify-end gap-2 pl-6 sm:pl-0">
                    <div className="flex items-center gap-1 bg-[var(--bg-card)] border border-[var(--border)] p-1 rounded-xl text-xs font-mono">
                      <button
                        type="button"
                        onClick={() => handleUpdatePhaseMinutes(idx, -1)}
                        className="h-6 w-6 rounded-md hover:bg-[var(--bg-elevated)] font-bold text-[var(--text)] flex items-center justify-center cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-bold text-[var(--text)]">
                        {phase.plannedMinutes}m
                      </span>
                      <button
                        type="button"
                        onClick={() => handleUpdatePhaseMinutes(idx, 1)}
                        className="h-6 w-6 rounded-md hover:bg-[var(--bg-elevated)] font-bold text-[var(--text)] flex items-center justify-center cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Quick Presets */}
                    <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono">
                      {[5, 10, 15].map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => handleSetPhaseMinutes(idx, m)}
                          className={`px-1.5 py-0.5 rounded border ${
                            phase.plannedMinutes === m
                              ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400 font-bold'
                              : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
                          }`}
                        >
                          {m}m
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemovePhase(idx)}
                      disabled={phases.length <= 1}
                      className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-500/10 disabled:opacity-30 cursor-pointer"
                      title="Remove Phase"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add Phase Button */}
          <button
            type="button"
            onClick={handleAddPhase}
            className="mt-2.5 w-full py-2 rounded-xl border border-dashed border-[var(--border)] hover:border-indigo-500/50 text-xs font-bold text-[var(--text-muted)] hover:text-indigo-400 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add Phase</span>
          </button>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between gap-3">
          <div className="text-xs text-[var(--text-muted)]">
            <span className="font-bold text-[var(--text)]">{phases.length}</span> phases ·{' '}
            <span className="font-bold text-[var(--text)]">{totalPlannedMinutes}</span> min total
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-[var(--border)] text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleStartSession}
              className="px-5 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-extrabold flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>Start Session</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
