import React, { useState, useMemo } from 'react';
import { UserProfile, Language, Week } from '../types';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { t } from '../i18n/translations';
import { calculateLessonReadingTime } from '../services/readingTimeEstimator';
import {
  Compass,
  CheckCircle2,
  PlayCircle,
  Lock,
  ArrowRight,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Award,
  Layers,
  Clock
} from 'lucide-react';

interface JourneyProgressVisualizerProps {
  user: UserProfile | null;
  language: Language;
  onNavigateToSyllabus: () => void;
  onOpenAuth?: () => void;
}

export const JourneyProgressVisualizer: React.FC<JourneyProgressVisualizerProps> = ({
  user,
  language,
  onNavigateToSyllabus,
  onOpenAuth
}) => {
  const completedLessonIds = useMemo(() => user?.completedLessonIds || [], [user?.completedLessonIds]);

  // Compute metrics per week
  const weekStats = useMemo(() => {
    return CURRICULUM_DATA.map((week) => {
      const totalLessons = week.lessons.length;
      const completedInWeek = week.lessons.filter((lesson) =>
        completedLessonIds.includes(lesson.id)
      ).length;
      const percentage = totalLessons > 0 ? Math.round((completedInWeek / totalLessons) * 100) : 0;

      let status: 'completed' | 'in-progress' | 'upcoming' = 'upcoming';
      if (percentage === 100) {
        status = 'completed';
      } else if (completedInWeek > 0) {
        status = 'in-progress';
      }

      return {
        week,
        totalLessons,
        completedInWeek,
        percentage,
        status
      };
    });
  }, [completedLessonIds]);

  // Overall calculations
  const totalLessonsCount = useMemo(
    () => weekStats.reduce((acc, w) => acc + w.totalLessons, 0),
    [weekStats]
  );
  const totalCompletedCount = useMemo(
    () => weekStats.reduce((acc, w) => acc + w.completedInWeek, 0),
    [weekStats]
  );
  const overallPercentage = totalLessonsCount > 0 ? Math.round((totalCompletedCount / totalLessonsCount) * 100) : 0;

  // Active or selected week for detailed breakdown
  const activeWeekOrder = useMemo(() => {
    const inProgress = weekStats.find((w) => w.status === 'in-progress');
    if (inProgress) return inProgress.week.order;
    const upcoming = weekStats.find((w) => w.status === 'upcoming');
    if (upcoming) return upcoming.week.order;
    return 1;
  }, [weekStats]);

  const [selectedWeekOrder, setSelectedWeekOrder] = useState<number>(activeWeekOrder);

  const selectedWeekData = useMemo(() => {
    return weekStats.find((w) => w.week.order === selectedWeekOrder) || weekStats[0];
  }, [weekStats, selectedWeekOrder]);

  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 sm:p-6 shadow-sm space-y-6">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[var(--primary)] font-mono text-[10px] uppercase font-bold tracking-wider">
            <Compass className="h-3 w-3 text-indigo-400" />
            <span>Learning Journey Visualizer</span>
          </div>
          <h3 className="text-lg font-black text-[var(--text)] tracking-tight flex items-center gap-2">
            <span>Student Curriculum Progress</span>
          </h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Data-driven roadmap tracking completed lessons across all 12 modules.
          </p>
        </div>

        {/* Overall Completion Badge */}
        <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center gap-3 shrink-0 self-start sm:self-center">
          <div className="relative h-10 w-10 flex items-center justify-center font-mono font-extrabold text-xs text-indigo-400">
            <svg className="h-10 w-10 -rotate-90 transform" viewBox="0 0 36 36">
              <path
                className="text-[var(--border)]"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-indigo-500 transition-all duration-700"
                strokeDasharray={`${overallPercentage}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute">{overallPercentage}%</span>
          </div>

          <div>
            <div className="text-xs font-bold text-[var(--text)] font-mono">
              {totalCompletedCount} / {totalLessonsCount} Lessons
            </div>
            <div className="text-[10px] text-[var(--text-muted)] font-mono">
              {weekStats.filter((w) => w.status === 'completed').length} / 12 Modules Done
            </div>
          </div>
        </div>
      </div>

      {/* 12-Week Interactive Journey Node Track */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-[var(--text-muted)]">
          <span>Week 01 — Foundations</span>
          <span>Week 12 — Full-Stack Capstone</span>
        </div>

        {/* Horizontal Node Track */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 relative">
          {weekStats.map(({ week, percentage, status, completedInWeek, totalLessons }) => {
            const isSelected = week.order === selectedWeekOrder;

            return (
              <button
                key={week.id}
                onClick={() => setSelectedWeekOrder(week.order)}
                className={`p-2.5 rounded-2xl border transition-all duration-200 text-center flex flex-col items-center justify-between gap-1.5 cursor-pointer relative group card-hover interactive-tap ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-500/10 ring-2 ring-indigo-500/30 scale-[1.02]'
                    : status === 'completed'
                    ? 'border-emerald-500/40 bg-emerald-500/5 hover:border-emerald-500'
                    : status === 'in-progress'
                    ? 'border-indigo-500/40 bg-indigo-500/5 hover:border-indigo-500'
                    : 'border-[var(--border)] bg-[var(--bg-elevated)] hover:border-slate-600'
                }`}
                title={`Week ${week.order}: ${week.title[language]} (${completedInWeek}/${totalLessons} Done)`}
              >
                <div className="flex items-center justify-between w-full text-[10px] font-mono font-bold">
                  <span className={isSelected ? 'text-indigo-400' : 'text-[var(--text-muted)]'}>
                    W{week.order}
                  </span>
                  {status === 'completed' ? (
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  ) : status === 'in-progress' ? (
                    <PlayCircle className="h-3 w-3 text-indigo-400 animate-pulse" />
                  ) : (
                    <Lock className="h-3 w-3 text-slate-500" />
                  )}
                </div>

                {/* Progress Ring / Percentage Node */}
                <div className="text-xs font-mono font-extrabold text-[var(--text)]">
                  {percentage}%
                </div>

                {/* Progress Bar Micro Indicator */}
                <div className="h-1 w-full rounded-full bg-[var(--border)] overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      status === 'completed'
                        ? 'bg-emerald-400'
                        : status === 'in-progress'
                        ? 'bg-indigo-500'
                        : 'bg-slate-700'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Week Detailed Inspector */}
      {selectedWeekData && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-indigo-500/30 space-y-4 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-[10px] uppercase font-bold">
                  Week {selectedWeekData.week.order} Module
                </span>
                <span className={`px-2 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold ${
                  selectedWeekData.status === 'completed'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : selectedWeekData.status === 'in-progress'
                    ? 'bg-indigo-500/20 text-indigo-300'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  {selectedWeekData.status.toUpperCase()}
                </span>
              </div>
              <h4 className="text-base font-extrabold text-[var(--text)]">
                {selectedWeekData.week.title[language]}
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {selectedWeekData.week.description[language]}
              </p>
            </div>

            <button
              onClick={onNavigateToSyllabus}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs active:scale-95 transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-xs border border-indigo-400/30"
            >
              <span>Explore Module in Syllabus</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Lessons Completion Checklist for Selected Week */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] font-bold">
              <span>Module Lessons Breakdown</span>
              <span>{selectedWeekData.completedInWeek} / {selectedWeekData.totalLessons} Completed</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedWeekData.week.lessons.map((lesson) => {
                const isDone = completedLessonIds.includes(lesson.id);
                const estRead = calculateLessonReadingTime(lesson, language);

                return (
                  <div
                    key={lesson.id}
                    className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono transition-all ${
                      isDone
                        ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-300'
                        : 'border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)]'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {isDone ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border border-slate-600 shrink-0" />
                      )}
                      <span className={`truncate ${isDone ? 'font-bold text-[var(--text)]' : ''}`}>
                        {lesson.title[language]}
                      </span>
                    </div>

                    <span className="text-[10px] text-indigo-400 font-semibold shrink-0 ml-2">
                      {estRead.formattedEstimate[language]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
