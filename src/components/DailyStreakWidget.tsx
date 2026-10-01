import React, { useState, useEffect, useMemo } from 'react';
import {
  Flame,
  Sparkles,
  CheckCircle2,
  Trophy,
  Calendar,
  Zap,
  ShieldCheck,
  ChevronRight,
  Gift,
  ArrowRight
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { StreakState } from '../types/economy';
import { dailyGoalsEngine, StreakSubmitResult } from '../services/dailyGoalsEngine';

interface DailyStreakWidgetProps {
  user: UserProfile | null;
  language: Language;
  onOpenAuth?: () => void;
  onStreakSubmitted?: (result: StreakSubmitResult) => void;
  onViewRoadmap?: () => void;
}

export const DailyStreakWidget: React.FC<DailyStreakWidgetProps> = ({
  user,
  language,
  onOpenAuth,
  onStreakSubmitted,
  onViewRoadmap
}) => {
  const studentId = user?.id || 'guest';
  const [streakState, setStreakState] = useState<StreakState>(() =>
    dailyGoalsEngine.getStreakState(studentId)
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<StreakSubmitResult | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    setStreakState(dailyGoalsEngine.getStreakState(studentId));

    const unsubscribe = dailyGoalsEngine.subscribeStreak((newState) => {
      if (newState.studentId === studentId) {
        setStreakState(newState);
      }
    });

    const handleCustomEvent = (e: any) => {
      if (e.detail && (e.detail.studentId === studentId || studentId === 'guest')) {
        setStreakState(e.detail);
      }
    };

    window.addEventListener('curious_streak_updated', handleCustomEvent);

    return () => {
      unsubscribe();
      window.removeEventListener('curious_streak_updated', handleCustomEvent);
    };
  }, [studentId]);

  const handleSubmitStreak = () => {
    if (!user && onOpenAuth) {
      onOpenAuth();
      return;
    }

    setIsSubmitting(true);
    try {
      const result = dailyGoalsEngine.submitDailyStreak(studentId);
      setSubmissionFeedback(result);
      if (result.success) {
        setShowCelebration(true);
        if (onStreakSubmitted) {
          onStreakSubmitted(result);
        }
        setTimeout(() => setShowCelebration(false), 5000);
      }
    } catch (err) {
      console.error('Streak submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Compute 7-day week schedule dots (Mon-Sun of current week)
  const currentWeekDays = useMemo(() => {
    const today = new Date();
    const currentDayOfWeek = today.getDay(); // 0 = Sun, 1 = Mon...
    // Normalize so Monday is index 0
    const distanceToMonday = (currentDayOfWeek + 6) % 7;
    const monday = new Date(today);
    monday.setDate(today.getDate() - distanceToMonday);

    const days = [];
    const dayNamesEn = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const dayNamesBn = ['সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি', 'রবি'];

    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const dStr = d.toISOString().slice(0, 10);
      const isToday = dStr === today.toISOString().slice(0, 10);
      const isPast = d < today && !isToday;
      const isCheckedIn =
        streakState.history?.includes(dStr) ||
        (isToday && streakState.hasSubmittedStreakToday);

      days.push({
        dateStr: dStr,
        dayName: language === 'bn' ? dayNamesBn[i] : dayNamesEn[i],
        dayNum: d.getDate(),
        isToday,
        isPast,
        isCheckedIn
      });
    }
    return days;
  }, [streakState, language]);

  // Next milestone calculation
  const nextMilestone = useMemo(() => {
    const milestones = [3, 7, 14, 30, 60, 98];
    const next = milestones.find((m) => m > streakState.currentStreak) || 98;
    const remaining = Math.max(0, next - streakState.currentStreak);
    return {
      target: next,
      remaining
    };
  }, [streakState.currentStreak]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 sm:p-6 shadow-sm transition-all space-y-5 text-[var(--text)]">
      {/* Subtle ambient gradient highlight */}
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

      {/* Top Header & Streak Highlights */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3.5">
          <div
            className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md transition-all ${
              streakState.hasSubmittedStreakToday
                ? 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-amber-500/20'
                : 'bg-amber-500/15 border border-amber-500/30 text-amber-500 animate-pulse'
            }`}
          >
            <Flame
              className={`h-6 w-6 ${
                streakState.hasSubmittedStreakToday
                  ? 'fill-white text-white'
                  : 'fill-amber-500 text-amber-500'
              }`}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                {language === 'bn' ? 'দৈনিক স্ট্রিক ট্র্যাকার' : 'Daily Streak Counter'}
              </span>
              {streakState.hasSubmittedStreakToday ? (
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  {language === 'bn' ? 'আজকের জমা সম্পন্ন' : 'Tracked Today'}
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-[10px] font-mono font-bold flex items-center gap-1">
                  <Zap className="h-3 w-3" />
                  {language === 'bn' ? 'জমা অপেক্ষমান' : 'Ready to Submit'}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[var(--text)] flex items-center gap-2 mt-0.5">
              <span>{streakState.currentStreak}</span>
              <span className="text-sm sm:text-base font-semibold text-[var(--text-muted)]">
                {language === 'bn' ? 'দিনের ধারাবাহিকতা' : 'Day Streak'}
              </span>
              {streakState.currentStreak >= 3 && <span>🔥</span>}
            </h2>
          </div>
        </div>

        {/* Milestone Indicator Card */}
        <div className="px-3.5 py-2 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-mono flex items-center justify-between sm:justify-start gap-2 self-stretch sm:self-auto">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-amber-500 shrink-0" />
            <div className="text-[11px]">
              <span className="text-[var(--text-muted)]">Next Milestone: </span>
              <span className="text-amber-500 font-bold">
                Day {nextMilestone.target} ({nextMilestone.remaining}d away)
              </span>
            </div>
          </div>
          {onViewRoadmap && (
            <button
              onClick={onViewRoadmap}
              className="text-[10px] font-bold text-[var(--primary)] hover:underline flex items-center gap-0.5 ml-1 cursor-pointer"
            >
              <span>Rewards</span>
              <ChevronRight className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* Celebration Feedback Alert */}
      {showCelebration && submissionFeedback && (
        <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 animate-fade-in flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
              🎉
            </div>
            <div>
              <p className="text-xs font-bold text-[var(--text)]">{submissionFeedback.message}</p>
              <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                +{submissionFeedback.gemsAwarded} 💎 Gem · +{submissionFeedback.xpAwarded} XP · +{submissionFeedback.pointsAwarded} Performance Points Added
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 7-Day Attendance Week Bar */}
      <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2.5">
        <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5 font-bold">
            <Calendar className="h-3.5 w-3.5 text-amber-500" />
            <span>This Week's Attendance</span>
          </span>
          <span className="font-semibold text-amber-500">
            Best Record: {streakState.longestStreak}d
          </span>
        </div>

        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {currentWeekDays.map((day) => (
            <div
              key={day.dateStr}
              className={`p-2 sm:p-2.5 rounded-xl text-center font-mono transition-all flex flex-col items-center justify-center gap-1 ${
                day.isCheckedIn
                  ? 'bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-400 font-bold shadow-xs'
                  : day.isToday
                  ? 'bg-[var(--bg-card)] border-2 border-dashed border-amber-500 text-[var(--text)] font-bold'
                  : 'bg-[var(--bg-card)]/50 border border-[var(--border)] text-[var(--text-muted)]'
              }`}
            >
              <span className="text-[10px] block leading-none">{day.dayName}</span>
              <div className="h-5 w-5 rounded-full flex items-center justify-center mt-0.5">
                {day.isCheckedIn ? (
                  <Flame className="h-4 w-4 text-amber-500 fill-amber-500" />
                ) : day.isToday ? (
                  <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--border)]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STREAK COUNTER SUBMIT BUTTON & STATUS BAR */}
      <div className="pt-1">
        {!streakState.hasSubmittedStreakToday ? (
          <button
            onClick={handleSubmitStreak}
            disabled={isSubmitting}
            className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:via-orange-400 hover:to-amber-500 text-white font-mono font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.005] active:scale-[0.995] cursor-pointer"
          >
            <Flame className="h-4 w-4 sm:h-5 sm:w-5 fill-white" />
            <span>
              {isSubmitting
                ? 'Submitting Day Streak...'
                : language === 'bn'
                ? '🔥 আজকের ডে স্ট্রিক সাবমিট করুন (+১ জেম, +২০ এক্সপি)'
                : '🔥 Submit Day Streak Counter (+1 Gem, +20 XP)'}
            </span>
            <Sparkles className="h-4 w-4 fill-white" />
          </button>
        ) : (
          <div className="w-full py-3 px-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
              <span className="font-bold">
                {language === 'bn'
                  ? `✅ আজকের ডে ${streakState.currentStreak} স্ট্রিক ট্র্যাক করা হয়েছে!`
                  : `✅ Today's Day ${streakState.currentStreak} Streak Successfully Tracked!`}
              </span>
            </div>
            <span className="text-[11px] text-[var(--text-muted)] font-normal">
              Return tomorrow to submit your next streak counter
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
