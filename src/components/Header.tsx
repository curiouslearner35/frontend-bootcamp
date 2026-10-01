import React, { useState, useEffect } from 'react';
import { Sun, Moon, Terminal, CalendarDays, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { Language, ThemeMode, UserProfile } from '../types';
import { StreakState } from '../types/economy';
import { t } from '../i18n/translations';
import { gemEconomy } from '../services/gemEconomy';
import { progressionEngine } from '../services/progressionEngine';
import { dailyGoalsEngine, StreakSubmitResult } from '../services/dailyGoalsEngine';
import { StreakCheckInModal } from './StreakCheckInModal';

interface HeaderProps {
  language: Language;
  theme: ThemeMode;
  user: UserProfile | null;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
  isOnline: boolean;
  pendingSyncCount: number;
  onStartSession?: () => void;
  onOpenGemsLedger?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  theme,
  user,
  onToggleLanguage,
  onToggleTheme,
  isOnline,
  pendingSyncCount,
  onStartSession,
  onOpenGemsLedger
}) => {
  const [timeString, setTimeString] = useState<string>('');
  const [gemsBalance, setGemsBalance] = useState<number>(() => {
    return user ? gemEconomy.getWallet(user.id).balance : 0;
  });
  const [currentLevel, setCurrentLevel] = useState<number>(() => {
    return user ? progressionEngine.getXPProfile(user.id, user.xp || 0).currentLevel : 1;
  });
  const [streakState, setStreakState] = useState<StreakState>(() => {
    return dailyGoalsEngine.getStreakState(user?.id || 'guest');
  });
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setGemsBalance(gemEconomy.getWallet(user.id).balance);
      setCurrentLevel(progressionEngine.getXPProfile(user.id, user.xp || 0).currentLevel);
      setStreakState(dailyGoalsEngine.getStreakState(user.id));

      const unsubWallet = gemEconomy.subscribe((wallet) => {
        if (wallet.studentId === user.id) {
          setGemsBalance(wallet.balance);
        }
      });

      const unsubXP = progressionEngine.subscribeXP((xp) => {
        if (xp.studentId === user.id) {
          setCurrentLevel(xp.currentLevel);
        }
      });

      const unsubStreak = dailyGoalsEngine.subscribeStreak((streak) => {
        if (streak.studentId === user.id) {
          setStreakState(streak);
        }
      });

      return () => {
        unsubWallet();
        unsubXP();
        unsubStreak();
      };
    } else {
      setStreakState(dailyGoalsEngine.getStreakState('guest'));
    }
  }, [user?.id, user?.xp, user?.streakDays]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleStreakSubmitted = (result: StreakSubmitResult) => {
    setStreakState(result.state);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--bg-card)]/90 backdrop-blur-md transition-colors px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[var(--primary)] to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 shrink-0">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-[var(--text)] block leading-none">
                {t.appName[language]}
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span
                  className={`h-2 w-2 rounded-full ${
                    isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                  }`}
                />
                <span className="text-[10px] font-semibold text-[var(--text-muted)] tracking-wide uppercase">
                  {isOnline ? t.online[language] : t.offline[language]}
                  {pendingSyncCount > 0 && ` (${pendingSyncCount} ${t.syncing[language]})`}
                </span>
              </div>
            </div>
          </div>

          {/* Gamified Economy Indicators (Gems, Level, Streak Counter) */}
          {user && (
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Daily Streak Counter Button */}
              <button
                onClick={() => setIsStreakModalOpen(true)}
                title={
                  streakState.hasSubmittedStreakToday
                    ? `Day ${streakState.currentStreak} Streak Tracked Today!`
                    : 'Submit Day Streak Counter (+1 Gem, +20 XP)!'
                }
                className={`px-2.5 py-1 rounded-xl border font-mono font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer ${
                  streakState.hasSubmittedStreakToday
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20'
                    : 'bg-amber-500/15 border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-500/25 ring-1 ring-amber-500/40 animate-pulse'
                }`}
              >
                <Flame
                  className={`h-3.5 w-3.5 ${
                    streakState.hasSubmittedStreakToday
                      ? 'fill-amber-500 text-amber-500'
                      : 'fill-amber-500 text-amber-500 animate-bounce'
                  }`}
                />
                <span>{streakState.currentStreak}d</span>
                {!streakState.hasSubmittedStreakToday && (
                  <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-md bg-amber-500 text-white text-[9px] font-black uppercase">
                    Submit
                  </span>
                )}
              </button>

              {/* Gems Currency Pill */}
              <button
                onClick={onOpenGemsLedger}
                title="Gems Learning Currency — Click to view ledger"
                className="px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs flex items-center gap-1.5 shadow-xs hover:bg-emerald-500/20 transition-all cursor-pointer"
              >
                <span>💎</span>
                <span>{gemsBalance}</span>
              </button>

              {/* Level / Progression Pill */}
              <div
                title={`Level ${currentLevel} Scholar`}
                className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono font-bold text-xs"
              >
                <Sparkles className="h-3 w-3 text-amber-400" />
                <span>Lv.{currentLevel}</span>
              </div>
            </div>
          )}

          {/* Header Right Tools: Clock, Language Switcher, Theme Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Live Digital Clock */}
            <div className="hidden md:flex items-center px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] font-mono text-xs font-semibold text-[var(--text)]">
              {timeString || '00:00:00'}
            </div>

            {/* Language Toggle Button (EN / বাং) */}
            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] hover:bg-[var(--border)] transition-colors text-xs font-bold text-[var(--text)]"
              title="Switch Language"
            >
              <span className={language === 'en' ? 'text-[var(--primary)] font-extrabold' : 'text-[var(--text-muted)]'}>
                EN
              </span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className={language === 'bn' ? 'text-[var(--primary)] font-extrabold' : 'text-[var(--text-muted)]'}>
                বাং
              </span>
            </button>

            {/* Start Learning Session Trigger */}
            {onStartSession && (
              <button
                onClick={onStartSession}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                title="Session Planner — Schedule study phases"
                aria-label="Start Session Planner"
              >
                <CalendarDays className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Session Planner</span>
              </button>
            )}

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] hover:bg-[var(--border)] transition-colors text-[var(--text)]"
              title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>
          </div>
        </div>
      </header>

      {/* Streak Check-in Modal */}
      <StreakCheckInModal
        isOpen={isStreakModalOpen}
        onClose={() => setIsStreakModalOpen(false)}
        user={user}
        language={language}
        onStreakSubmitted={handleStreakSubmitted}
      />
    </>
  );
};
