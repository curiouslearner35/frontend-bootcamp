import React, { useState, useEffect } from 'react';
import {
  X,
  Flame,
  Sparkles,
  Trophy,
  CheckCircle2,
  Calendar,
  Gift,
  Zap,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { StreakState } from '../types/economy';
import { dailyGoalsEngine, StreakSubmitResult } from '../services/dailyGoalsEngine';

interface StreakCheckInModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile | null;
  language: Language;
  onOpenAuth?: () => void;
  onStreakSubmitted?: (result: StreakSubmitResult) => void;
}

export const StreakCheckInModal: React.FC<StreakCheckInModalProps> = ({
  isOpen,
  onClose,
  user,
  language,
  onOpenAuth,
  onStreakSubmitted
}) => {
  const studentId = user?.id || 'guest';
  const [streakState, setStreakState] = useState<StreakState>(() =>
    dailyGoalsEngine.getStreakState(studentId)
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<StreakSubmitResult | null>(null);

  useEffect(() => {
    if (isOpen) {
      setStreakState(dailyGoalsEngine.getStreakState(studentId));
      setFeedback(null);
    }
  }, [isOpen, studentId]);

  if (!isOpen) return null;

  const handleSubmitStreak = () => {
    if (!user && onOpenAuth) {
      onOpenAuth();
      return;
    }

    setIsSubmitting(true);
    try {
      const result = dailyGoalsEngine.submitDailyStreak(studentId);
      setFeedback(result);
      setStreakState(result.state);
      if (result.success && onStreakSubmitted) {
        onStreakSubmitted(result);
      }
    } catch (err) {
      console.error('Streak submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const milestones = [
    { day: 3, gems: 5, xp: 30, points: 25, label: '3-Day Quick Starter' },
    { day: 7, gems: 15, xp: 100, points: 75, label: '7-Day Habit Builder' },
    { day: 14, gems: 30, xp: 200, points: 150, label: '14-Day Consistent Learner' },
    { day: 30, gems: 60, xp: 500, points: 350, label: '30-Day Terminal Warrior' },
    { day: 60, gems: 100, xp: 1000, points: 800, label: '60-Day Full-Stack Master' },
    { day: 98, gems: 200, xp: 2500, points: 2000, label: '98-Day Academy Legend' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-2xl space-y-5 text-[var(--text)] transition-colors">
        {/* Subtle ambient lighting */}
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header Hero */}
        <div className="text-center space-y-2 pt-1">
          <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20">
            <Flame className="h-7 w-7 fill-white" />
          </div>
          <h2 className="text-xl font-black tracking-tight text-[var(--text)]">
            {language === 'bn' ? 'দৈনিক স্ট্রিক ট্র্যাকার' : 'Daily Streak Counter'}
          </h2>
          <p className="text-xs text-[var(--text-muted)] max-w-xs mx-auto leading-relaxed">
            {language === 'bn'
              ? 'প্রতিদিন অ্যাপে প্রবেশ করে স্ট্রিক জমা দিন এবং ধারাবাহিকভাবে জেম ও এক্সপি অর্জন করুন!'
              : 'Submit your streak counter every day upon opening the app to keep your streak alive and unlock bonus rewards!'}
          </p>
        </div>

        {/* Current Stats Box */}
        <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]">
          <div className="text-center p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
            <div className="text-2xl font-black text-amber-500 font-mono">
              {streakState.currentStreak} 🔥
            </div>
            <div className="text-[11px] font-mono text-[var(--text-muted)]">Current Day Streak</div>
          </div>
          <div className="text-center p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
            <div className="text-2xl font-black text-[var(--primary)] font-mono">
              {streakState.longestStreak} ⚡
            </div>
            <div className="text-[11px] font-mono text-[var(--text-muted)]">Longest Record</div>
          </div>
        </div>

        {/* Feedback Message */}
        {feedback && (
          <div
            className={`p-3 rounded-2xl border text-xs font-mono animate-fade-in ${
              feedback.success
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-300'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-300'
            }`}
          >
            <div className="font-bold flex items-center gap-1.5">
              {feedback.success ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <ShieldCheck className="h-4 w-4 text-amber-500" />}
              <span>{feedback.message}</span>
            </div>
            {feedback.success && (
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">
                +{feedback.gemsAwarded} 💎 Gems · +{feedback.xpAwarded} XP · +{feedback.pointsAwarded} Performance Points Added
              </div>
            )}
          </div>
        )}

        {/* Submit Streak Button */}
        <div>
          {!streakState.hasSubmittedStreakToday ? (
            <button
              onClick={handleSubmitStreak}
              disabled={isSubmitting}
              className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:via-orange-400 hover:to-amber-500 text-white font-mono font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 cursor-pointer"
            >
              <Flame className="h-4 w-4 fill-white" />
              <span>
                {isSubmitting
                  ? 'Submitting Streak Counter...'
                  : language === 'bn'
                  ? '🔥 আজকের ডে স্ট্রিক সাবমিট করুন (+১ জেম, +২০ এক্সপি)'
                  : '🔥 Submit Day Streak Counter (+1 Gem, +20 XP)'}
              </span>
            </button>
          ) : (
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span className="font-bold">
                Today's Day {streakState.currentStreak} Streak Successfully Tracked!
              </span>
            </div>
          )}
        </div>

        {/* Streak Milestone Rewards Roadmap */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5 font-bold">
              <Trophy className="h-3.5 w-3.5 text-amber-500" />
              <span>Streak Milestone Rewards</span>
            </span>
          </div>

          <div className="max-h-44 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
            {milestones.map((m) => {
              const isClaimed = streakState.currentStreak >= m.day;
              return (
                <div
                  key={m.day}
                  className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono transition-colors ${
                    isClaimed
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400 font-bold'
                      : 'bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-muted)]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-5 w-5 rounded-md flex items-center justify-center font-bold text-[10px] ${
                        isClaimed
                          ? 'bg-amber-500 text-white'
                          : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)]'
                      }`}
                    >
                      {m.day}d
                    </span>
                    <span className="text-[11px] text-[var(--text)] font-semibold">{m.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">+{m.gems}💎</span>
                    <span className="text-indigo-500 font-bold">+{m.xp}XP</span>
                    {isClaimed && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
