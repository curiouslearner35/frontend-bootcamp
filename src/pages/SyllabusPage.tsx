import React, { useState, useEffect, useMemo } from 'react';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { Lesson, Week, Language, UserProfile } from '../types';
import { Terminal } from '../components/Terminal';
import { CodeSandbox } from '../components/CodeSandbox';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Lock,
  Sparkles,
  CalendarDays,
  Trophy,
  Coins,
  User,
  Key,
  Code2,
  Terminal as TerminalIcon,
  ArrowRight,
  Unlock,
  ExternalLink,
  FolderGit2,
  Clock
} from 'lucide-react';
import { t } from '../i18n/translations';
import { getResourcesForLesson, getResourcesForWeek } from '../data/curriculumResourceMap';
import { calculateLessonReadingTime, getActualLessonReadingTime } from '../services/readingTimeEstimator';
import { activityTracker } from '../services/activityTracker';
import { SessionContext } from '../types/learningSession';
import { gemEconomy } from '../services/gemEconomy';
import { rewardEngine } from '../services/rewardEngine';
import { chapterEngine } from '../services/chapterEngine';
import { accessPolicy } from '../services/accessPolicy';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { LessonResourceSection } from '../components/LessonResourceSection';
import { MentorDashboard } from '../components/MentorDashboard';
import { REWARD_CONFIG } from '../config/rewards';
import { RewardEventResult, ChapterStatus, GemWallet } from '../types/economy';

interface SyllabusPageProps {
  user: UserProfile | null;
  language: Language;
  onCompleteLesson: (lessonId: string) => void;
  onIncrementCommitCount: () => void;
  onStartSession?: (context?: SessionContext) => void;
  onOpenAuth?: () => void;
}

export const SyllabusPage: React.FC<SyllabusPageProps> = ({
  user,
  language,
  onCompleteLesson,
  onIncrementCommitCount,
  onStartSession,
  onOpenAuth
}) => {
  const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeLessonTab, setActiveLessonTab] = useState<'lesson' | 'resources' | 'sandbox' | 'terminal'>('lesson');

  // Interactive tool unlock error state
  const [unlockError, setUnlockError] = useState<string | null>(null);

  // Celebratory Reward Modal state
  const [rewardModalResult, setRewardModalResult] = useState<RewardEventResult | null>(null);

  // Real-time wallet tracking for instant interactive unlock feedback
  const [wallet, setWallet] = useState<GemWallet>(() =>
    gemEconomy.getWallet(user?.id || 'guest')
  );

  useEffect(() => {
    setWallet(gemEconomy.getWallet(user?.id || 'guest'));
    const unsubscribe = gemEconomy.subscribe((updatedWallet) => {
      if (updatedWallet.studentId === (user?.id || 'guest')) {
        setWallet(updatedWallet);
      }
    });
    return () => unsubscribe();
  }, [user?.id]);

  const completedLessonIds = useMemo(() => {
    return user?.completedLessonIds || [];
  }, [user?.completedLessonIds]);

  // Section completion states (Theory Read, Sandbox Completed, Terminal Completed)
  const [readTheoryIds, setReadTheoryIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('curious_learners_read_theory_lessons');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [completedSandboxIds, setCompletedSandboxIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('curious_learners_completed_sandbox_lessons');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [completedTerminalIds, setCompletedTerminalIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('curious_learners_completed_terminal_lessons');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const chapterStatesMap = useMemo(() => {
    const list = chapterEngine.getChapterStates(completedLessonIds);
    const map: Record<number, ChapterStatus> = {};
    for (const item of list) {
      map[item.order] = item.status;
    }
    return map;
  }, [completedLessonIds]);

  useEffect(() => {
    if (selectedLesson) {
      const surface =
        activeLessonTab === 'terminal'
          ? 'TERMINAL'
          : activeLessonTab === 'sandbox'
          ? 'CODE_PLAYGROUND'
          : 'LESSON';
      activityTracker.setContext(surface, selectedLesson.id);
      activityTracker.recordActivity(surface, 'LESSON_PROGRESS', selectedLesson.id, {
        lessonCategory: selectedLesson.category,
        durationMinutes: selectedLesson.durationMinutes
      });
    } else {
      activityTracker.setContext('LESSON');
    }
  }, [selectedLesson?.id, activeLessonTab]);

  /**
   * Lesson Selection: 100% PUBLIC.
   * Anyone can click any lesson and immediately read the Lesson Theory.
   * No gem deductions, no login barriers.
   */
  const handleLessonClick = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setActiveLessonTab('lesson');
    setUnlockError(null);
  };

  /**
   * Unlock Lesson (1 Gem)
   */
  const handleUnlockLesson = () => {
    if (!user) {
      onOpenAuth?.();
      return;
    }
    if (!selectedLesson) return;

    const res = accessPolicy.unlockLesson(user.id, selectedLesson.id);
    if (res.success) {
      setUnlockError(null);
      setWallet(res.wallet);
    } else {
      setUnlockError(res.error || (language === 'bn' ? 'লেসন আনলক করার জন্য পর্যাপ্ত জেমস নেই।' : 'Insufficient Gems to unlock Lesson.'));
    }
  };

  /**
   * Unlock Practice Sandbox tool for the current lesson (1 Gem unlocks Sandbox + Terminal)
   */
  const handleUnlockPracticeSandbox = () => {
    if (!user) {
      onOpenAuth?.();
      return;
    }
    if (!selectedLesson) return;

    const res = accessPolicy.unlockLesson(user.id, selectedLesson.id);
    if (res.success) {
      setUnlockError(null);
      setWallet(res.wallet);
    } else {
      setUnlockError(res.error || (language === 'bn' ? 'আনলক করার জন্য পর্যাপ্ত জেমস নেই।' : 'Insufficient Gems to unlock.'));
    }
  };

  /**
   * Unlock Interactive Terminal tool for the current lesson (1 Gem unlocks Sandbox + Terminal)
   */
  const handleUnlockTerminal = () => {
    if (!user) {
      onOpenAuth?.();
      return;
    }
    if (!selectedLesson) return;

    const res = accessPolicy.unlockLesson(user.id, selectedLesson.id);
    if (res.success) {
      setUnlockError(null);
      setWallet(res.wallet);
    } else {
      setUnlockError(res.error || (language === 'bn' ? 'আনলক করার জন্য পর্যাপ্ত জেমস নেই।' : 'Insufficient Gems to unlock.'));
    }
  };

  const handleFinishLesson = (lessonId: string) => {
    const sid = user?.id || 'guest';
    const isAlreadyDone = completedLessonIds.includes(lessonId);

    // Call parent handler to update profile & queue background sync
    onCompleteLesson(lessonId);

    if (!isAlreadyDone) {
      // Atomically process lesson completion reward (+2 Gems, +25 XP, +20 Points)
      const res = rewardEngine.processRewardEvent(sid, 'LESSON_COMPLETE', lessonId, {
        isPerfect: true
      });

      if (!res.alreadyClaimed) {
        setRewardModalResult(res);
      }

      // Check if this completes the chapter
      const newCompleted = [...completedLessonIds, lessonId];
      chapterEngine.checkAndRewardChapterCompletion(sid, newCompleted);
    }
  };

  const handleMarkTheoryAsRead = (lessonId: string) => {
    let nextRead = readTheoryIds;
    if (!readTheoryIds.includes(lessonId)) {
      nextRead = [...readTheoryIds, lessonId];
      setReadTheoryIds(nextRead);
      try {
        localStorage.setItem('curious_learners_read_theory_lessons', JSON.stringify(nextRead));
      } catch (e) {
        console.error('Failed to save read theory lessons:', e);
      }
    }

    const isSandboxDone = completedLessonIds.includes(lessonId) || completedSandboxIds.includes(lessonId);
    const isTerminalDone = completedLessonIds.includes(lessonId) || completedTerminalIds.includes(lessonId);

    // Reward is ONLY claimed if ALL 3 sections (Theory, Sandbox, Terminal) are completed!
    if (isSandboxDone && isTerminalDone && !completedLessonIds.includes(lessonId)) {
      handleFinishLesson(lessonId);
    }
  };

  const handleSandboxComplete = (lessonId: string) => {
    let nextSandbox = completedSandboxIds;
    if (!completedSandboxIds.includes(lessonId)) {
      nextSandbox = [...completedSandboxIds, lessonId];
      setCompletedSandboxIds(nextSandbox);
      try {
        localStorage.setItem('curious_learners_completed_sandbox_lessons', JSON.stringify(nextSandbox));
      } catch (e) {
        console.error('Failed to save completed sandbox lessons:', e);
      }
    }

    const isTheoryDone = completedLessonIds.includes(lessonId) || readTheoryIds.includes(lessonId);
    const isTerminalDone = completedLessonIds.includes(lessonId) || completedTerminalIds.includes(lessonId);

    if (isTheoryDone && isTerminalDone && !completedLessonIds.includes(lessonId)) {
      handleFinishLesson(lessonId);
    }
  };

  const handleTerminalComplete = (lessonId: string) => {
    let nextTerminal = completedTerminalIds;
    if (!completedTerminalIds.includes(lessonId)) {
      nextTerminal = [...completedTerminalIds, lessonId];
      setCompletedTerminalIds(nextTerminal);
      try {
        localStorage.setItem('curious_learners_completed_terminal_lessons', JSON.stringify(nextTerminal));
      } catch (e) {
        console.error('Failed to save completed terminal lessons:', e);
      }
    }

    const isTheoryDone = completedLessonIds.includes(lessonId) || readTheoryIds.includes(lessonId);
    const isSandboxDone = completedLessonIds.includes(lessonId) || completedSandboxIds.includes(lessonId);

    if (isTheoryDone && isSandboxDone && !completedLessonIds.includes(lessonId)) {
      handleFinishLesson(lessonId);
    }
  };

  const handleBack = () => {
    if (selectedLesson) {
      setSelectedLesson(null);
    } else if (selectedWeek) {
      setSelectedWeek(null);
    }
  };

  // Evaluate interactive access policies for the currently selected lesson
  const sandboxAccess = selectedLesson
    ? accessPolicy.evaluateAccess('PRACTICE_SANDBOX', user, selectedLesson.id)
    : null;
  const terminalAccess = selectedLesson
    ? accessPolicy.evaluateAccess('TERMINAL', user, selectedLesson.id)
    : null;

  const isSandboxUnlocked = sandboxAccess?.allowed || sandboxAccess?.reason === 'ALREADY_UNLOCKED';
  const isTerminalUnlocked = terminalAccess?.allowed || terminalAccess?.reason === 'ALREADY_UNLOCKED';

  // Detailed Lesson View
  if (selectedLesson) {
    const isCompleted = completedLessonIds.includes(selectedLesson.id);
    const isTheoryRead = isCompleted || readTheoryIds.includes(selectedLesson.id);
    const isSandboxDone = isCompleted || completedSandboxIds.includes(selectedLesson.id);
    const isTerminalDone = isCompleted || completedTerminalIds.includes(selectedLesson.id);

    const parentWeek = CURRICULUM_DATA.find((w) => w.id === selectedLesson.weekId);

    // Mapped verified learning resources
    const lessonResources = getResourcesForLesson(selectedLesson.id).length > 0
      ? getResourcesForLesson(selectedLesson.id)
      : getResourcesForWeek(selectedLesson.weekId);

    // Data-driven content reading-time estimate & actual tracked activity
    const readingTimeEstimate = calculateLessonReadingTime(selectedLesson, language);
    const actualReadingTime = getActualLessonReadingTime(user?.id, selectedLesson.id);

    // Evaluate Lesson Access (1 Gem)
    const lessonAccess = accessPolicy.evaluateAccess('LESSON', user, selectedLesson.id);
    const isLessonUnlocked =
      isCompleted ||
      lessonAccess.allowed ||
      lessonAccess.reason === 'ALREADY_UNLOCKED';

    return (
      <div className="space-y-4 pb-20 animate-fade-in text-[var(--text)]">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-xs font-medium text-[var(--text)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>← {t.week[language]} {parentWeek?.order ?? 0}</span>
          </button>

          {onStartSession && (
            <button
              onClick={() =>
                onStartSession({
                  lessonId: selectedLesson.id,
                  surface: 'LESSON',
                  topic: selectedLesson.title[language] || selectedLesson.title.en,
                  category: selectedLesson.category
                })
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              title="Plan structured phases (Read, Practice, Recap) for this lesson"
            >
              <CalendarDays className="h-3.5 w-3.5" />
              <span>{language === 'bn' ? 'স্টাডি সেশন প্ল্যানার' : 'Session Planner'}</span>
            </button>
          )}
        </div>

        {/* Guest Banner */}
        {!user && (
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-cyan-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-amber-400">
              <Sparkles className="h-4 w-4 shrink-0 text-amber-400" />
              <span>
                <strong>{t.welcomeBonusNotice[language]}</strong> {language === 'bn' ? '(প্রতি লেসনে ১ 💎, প্রজেক্টে ২ 💎)' : '(1 💎 per lesson, 2 💎 per project)'}
              </span>
            </div>
            {onOpenAuth && (
              <button
                onClick={onOpenAuth}
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 cursor-pointer shadow-sm"
              >
                {t.signInToSync[language]}
              </button>
            )}
          </div>
        )}

        {/* Title & Subtitle */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-[var(--text)] tracking-tight">
              {selectedLesson.title[language]}
            </h1>
            {isCompleted && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-[10px]">
                ✓ {language === 'bn' ? 'সম্পন্ন' : 'Completed'}
              </span>
            )}
          </div>
          <p className="text-xs text-[var(--text-muted)] font-medium">
            {language === 'bn' ? 'লেসন' : 'Lesson'} · {selectedLesson.difficulty ? selectedLesson.difficulty.toLowerCase() : 'theory'} · <span className="text-indigo-400 font-mono font-semibold">{readingTimeEstimate.formattedEstimate[language]}</span> · {language === 'bn' ? 'পুরস্কার:' : 'Reward:'} 💎 +{REWARD_CONFIG.lessonCompleteRewardGems} {t.gems[language]}, ⭐ +{REWARD_CONFIG.lessonCompleteRewardXP} {t.xp[language]}
          </p>
        </div>

        {/* 4 Tab Selector Buttons (Accessible & Mobile Responsive) */}
        <div
          role="tablist"
          aria-label="Lesson Navigation Tabs"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-xs"
        >
          <button
            role="tab"
            id="tab-lesson"
            aria-selected={activeLessonTab === 'lesson'}
            aria-controls="panel-lesson"
            onClick={() => setActiveLessonTab('lesson')}
            className={`min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeLessonTab === 'lesson'
                ? 'bg-[var(--bg-elevated)] text-amber-400 border border-amber-500/60 shadow-md font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text)] bg-transparent'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{t.lessonTheory[language]}</span>
            {isTheoryRead && <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />}
          </button>
          
          <button
            role="tab"
            id="tab-resources"
            aria-selected={activeLessonTab === 'resources'}
            aria-controls="panel-resources"
            onClick={() => setActiveLessonTab('resources')}
            className={`min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeLessonTab === 'resources'
                ? 'bg-[var(--bg-elevated)] text-indigo-400 border border-indigo-500/60 shadow-md font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text)] bg-transparent'
            }`}
          >
            <FolderGit2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{t.learningResources[language]}</span>
            {lessonResources.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-mono font-bold shrink-0">
                {lessonResources.length}
              </span>
            )}
          </button>
          
          <button
            role="tab"
            id="tab-sandbox"
            aria-selected={activeLessonTab === 'sandbox'}
            aria-controls="panel-sandbox"
            onClick={() => setActiveLessonTab('sandbox')}
            className={`min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeLessonTab === 'sandbox'
                ? 'bg-[var(--bg-elevated)] text-amber-400 border border-amber-500/60 shadow-md font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text)] bg-transparent'
            }`}
          >
            <Code2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{t.practiceSandbox[language]}</span>
            {isSandboxDone ? (
              <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
            ) : !isSandboxUnlocked && !isLessonUnlocked ? (
              <Lock className="h-3 w-3 text-amber-500/80 shrink-0" />
            ) : null}
          </button>
          
          <button
            role="tab"
            id="tab-terminal"
            aria-selected={activeLessonTab === 'terminal'}
            aria-controls="panel-terminal"
            onClick={() => setActiveLessonTab('terminal')}
            className={`min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeLessonTab === 'terminal'
                ? 'bg-[var(--bg-elevated)] text-amber-400 border border-amber-500/60 shadow-md font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text)] bg-transparent'
            }`}
          >
            <TerminalIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{t.terminal[language]}</span>
            {isTerminalDone ? (
              <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
            ) : !isTerminalUnlocked && !isLessonUnlocked ? (
              <Lock className="h-3 w-3 text-indigo-500/80 shrink-0" />
            ) : null}
          </button>
        </div>

        {/* Tab 1: Lesson Theory (100% PUBLIC & FREE) */}
        {activeLessonTab === 'lesson' && (
          <div className="space-y-4">
            {/* Reading Time Analysis & Actual Tracked Activity Card */}
            <div className="p-4 rounded-3xl bg-[var(--bg-card)] border border-[var(--border)] space-y-3 shadow-xs font-mono text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-indigo-400" />
                  <span className="font-extrabold text-[var(--text)]">
                    {language === 'bn' ? 'পড়ার সময় ও সক্রিয় ট্র্যাকিং' : 'Reading Time & Active Tracking'}
                  </span>
                </div>
                <span className="text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 self-start sm:self-auto">
                  {language === 'bn' ? 'আনুমানিক সময় ≠ আসল সময়' : 'Estimated Time ≠ Actual Time'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Estimated Reading Time */}
                <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                    <span>{language === 'bn' ? 'আনুমানিক পড়ার সময়' : 'Estimated Reading Time'}</span>
                    <span className="text-[10px] text-indigo-400 font-bold">Content Model</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-indigo-400">
                    {readingTimeEstimate.formattedEstimate[language]}
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)] leading-tight font-sans">
                    {language === 'bn'
                      ? `${readingTimeEstimate.details.effectiveWords} টি শব্দ (~${readingTimeEstimate.details.wpmUsed} WPM, কোড ও স্ট্রাকচার সহ)`
                      : `${readingTimeEstimate.details.effectiveWords} effective words (~${readingTimeEstimate.details.wpmUsed} WPM, weighted code & tables)`}
                  </p>
                </div>

                {/* Actual Active Reading Time */}
                <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                    <span>{language === 'bn' ? 'আপনার আসল সক্রিয় সময়' : 'Your Active Reading Time'}</span>
                    <span className="text-[10px] text-emerald-400 font-bold">ActivityEngine</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-emerald-400">
                    {actualReadingTime.hasReliableData
                      ? actualReadingTime.formattedActual[language]
                      : (language === 'bn' ? 'ট্র্যাকিং শুরু হচ্ছে...' : 'Tracking Active Reading...')}
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)] leading-tight font-sans">
                    {actualReadingTime.hasReliableData
                      ? (language === 'bn' ? 'আসল ইন্টারেকশন ট্র্যাকিং করা হয়েছে (আইডল বা ব্যাকগ্রাউন্ড বাদ দিয়ে)' : 'Genuine interaction recorded (excluding idle or hidden tab time)')
                      : (language === 'bn' ? 'পড়া শুরু করলে আসল সময় নিজে থেকেই রেকর্ড হবে' : 'Active reading time records automatically while reading')}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-sm space-y-4 text-[var(--text)]">
              {selectedLesson.objectives && (
                <div className="space-y-2">
                  <h3 className="font-bold text-xs text-[var(--text)] font-mono flex items-center gap-2 tracking-wider">
                    <span>🎯</span>
                    <span>OBJECTIVES</span>
                  </h3>
                  <ul className="space-y-1.5 pl-2 text-xs text-[var(--text-muted)] font-mono leading-relaxed">
                    {selectedLesson.objectives[language].map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--text-muted)]">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-2">
                <h3 className="font-bold text-xs text-[var(--text)] font-mono flex items-center gap-2 tracking-wider">
                  <span>📖</span>
                  <span>LESSON THEORY & TOPICS</span>
                </h3>
                <div className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] shadow-xs">
                  <MarkdownRenderer content={selectedLesson.contentMarkdown[language]} />
                </div>
              </div>

              {selectedLesson.resources && (selectedLesson.resources[language]?.length > 0 || selectedLesson.resources['en']?.length > 0) && (
                <div className="space-y-2 pt-3 border-t border-[var(--border)]">
                  <h3 className="font-bold text-xs text-[var(--text)] font-mono flex items-center gap-2 tracking-wider">
                    <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{language === 'bn' ? 'অফিসিয়াল লার্নিং রিসোর্স' : 'AUTHORITATIVE LEARNING RESOURCES'}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    {(selectedLesson.resources[language] || selectedLesson.resources['en'] || []).map((url, idx) => {
                      const cleanUrl = url.trim();
                      const domain = cleanUrl.replace(/^https?:\/\//, '').split('/')[0];
                      return (
                        <a
                          key={idx}
                          href={cleanUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-cyan-500/50 hover:text-cyan-400 text-[var(--text)] flex items-center justify-between transition-colors text-xs cursor-pointer group shadow-xs"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <ExternalLink className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                            <span className="truncate font-semibold">{domain} Documentation</span>
                          </div>
                          <ArrowRight className="h-3.5 w-3.5 text-cyan-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Mark as Read Action Button */}
              <div className="pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <button
                  onClick={() => handleMarkTheoryAsRead(selectedLesson.id)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 cursor-pointer ${
                    isTheoryRead
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-xs'
                      : 'bg-[var(--primary)] text-white shadow-md hover:opacity-90 active:scale-95'
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>
                    {isTheoryRead
                      ? (language === 'bn' ? '✓ পড়া শেষ' : '✓ Theory Read')
                      : (language === 'bn' ? 'পড়া শেষ চিহ্নিত করুন' : 'Mark as Read')}
                  </span>
                </button>

                {!isCompleted && isTheoryRead && (!isSandboxDone || !isTerminalDone) && (
                  <div className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-2 rounded-xl flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span>
                      {language === 'bn'
                        ? 'পড়া শেষ! জেমস পেতে স্যান্ডবক্স ও টার্মিনাল সম্পন্ন করুন।'
                        : 'Theory Read! Complete Sandbox & Terminal to claim reward.'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Verified Curriculum Resource Section */}
            <LessonResourceSection
              lesson={selectedLesson}
              language={language}
              onOpenPractice={() => setActiveLessonTab('sandbox')}
              onOpenTerminal={() => setActiveLessonTab('terminal')}
            />

            {/* Non-interrupting Interactive Learning Callout Cards at Bottom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Practice Sandbox Card */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-4 space-y-2.5 flex flex-col justify-between shadow-sm">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-[var(--text)]">
                      <Code2 className="h-4 w-4 text-amber-400" />
                      <span>Practice Sandbox</span>
                    </div>
                    {isSandboxUnlocked ? (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold">
                        Unlocked
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono text-[10px] font-bold flex items-center gap-1">
                        <Lock className="h-2.5 w-2.5" />
                        <span>Login + {sandboxAccess?.costGems ?? REWARD_CONFIG.practiceSandboxCostGems} 💎</span>
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed font-sans">
                    Hands-on code exercises with live validation and error checking.
                  </p>
                </div>
                <button
                  onClick={() => setActiveLessonTab('sandbox')}
                  className="w-full py-2 px-3 rounded-xl bg-[var(--bg-elevated)] hover:bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{isSandboxUnlocked ? 'Open Sandbox' : 'Practice Sandbox (Interactive)'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Terminal CLI Card */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-4 space-y-2.5 flex flex-col justify-between shadow-sm">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-[var(--text)]">
                      <TerminalIcon className="h-4 w-4 text-indigo-400" />
                      <span>Interactive Terminal</span>
                    </div>
                    {isTerminalUnlocked ? (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold">
                        Unlocked
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 font-mono text-[10px] font-bold flex items-center gap-1">
                        <Lock className="h-2.5 w-2.5" />
                        <span>Login + {terminalAccess?.costGems ?? REWARD_CONFIG.terminalStartCostGems} 💎</span>
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed font-sans">
                    Simulated Git command CLI to practice real workflow commits.
                  </p>
                </div>
                <button
                  onClick={() => setActiveLessonTab('terminal')}
                  className="w-full py-2 px-3 rounded-xl bg-[var(--bg-elevated)] hover:bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{isTerminalUnlocked ? 'Launch Terminal' : 'Open Terminal (Interactive)'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Verified Learning Resources Tab */}
        {activeLessonTab === 'resources' && (
          <div
            role="tabpanel"
            id="panel-resources"
            aria-labelledby="tab-resources"
            className="animate-fade-in"
          >
            <LessonResourceSection
              lesson={selectedLesson}
              language={language}
              onOpenPractice={() => setActiveLessonTab('sandbox')}
              onOpenTerminal={() => setActiveLessonTab('terminal')}
              initiallyExpanded={true}
            />
          </div>
        )}

        {/* Tab 2: Practice Sandbox (Requires Auth + Gems) */}
        {activeLessonTab === 'sandbox' && (
          <div>
            {sandboxAccess?.allowed ? (
              <CodeSandbox
                lessonId={selectedLesson.id}
                lesson={selectedLesson}
                initialCode={selectedLesson.practiceCode}
                expectedOutput={selectedLesson.expectedOutput}
                language={language}
                onSuccess={() => handleSandboxComplete(selectedLesson.id)}
              />
            ) : sandboxAccess?.reason === 'REQUIRES_AUTH' ? (
              /* Anonymous User Authentication Gate */
              <div className="rounded-3xl border border-amber-500/30 bg-[#121622] p-8 text-center space-y-4 shadow-xl">
                <div className="mx-auto h-16 w-16 rounded-3xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                  <Lock className="h-8 w-8" />
                </div>

                <div className="space-y-1.5 max-w-md mx-auto">
                  <h3 className="font-mono font-bold text-lg text-slate-100">
                    Practice Sandbox — Login Required
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    The interactive Code Sandbox requires an authenticated student session. Sign in with Google or GitHub to write live code, test your solutions, and earn XP & Gems.
                  </p>
                </div>

                {onOpenAuth && (
                  <button
                    onClick={onOpenAuth}
                    className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-mono font-bold text-xs shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <User className="h-4 w-4" />
                    <span>Sign In with Google or GitHub</span>
                  </button>
                )}
              </div>
            ) : sandboxAccess?.reason === 'INSUFFICIENT_GEMS' ? (
              /* Authenticated User with Insufficient Gems */
              <div className="rounded-3xl border border-rose-500/30 bg-[#121622] p-8 text-center space-y-4 shadow-xl">
                <div className="mx-auto h-16 w-16 rounded-3xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center">
                  <Coins className="h-8 w-8" />
                </div>

                <div className="space-y-1.5 max-w-md mx-auto">
                  <h3 className="font-mono font-bold text-lg text-slate-100">
                    Not Enough Gems
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Starting this interactive Practice Sandbox requires <strong className="text-cyan-400">{sandboxAccess.requiredGems} 💎 Gems</strong>. Your current balance is <strong className="text-rose-400">{wallet.balance} 💎 Gems</strong>.
                  </p>
                </div>

                <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#171c2b] border border-slate-800 text-left space-y-2 font-mono text-xs">
                  <p className="font-bold text-cyan-400 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>How to Earn More Gems:</span>
                  </p>
                  <ul className="space-y-1 text-slate-300 text-[11px]">
                    <li>• Complete your daily learning goals (+{REWARD_CONFIG.dailyGoalCompleteGems} 💎)</li>
                    <li>• Submit your daily streak check-in (+1 to +15 💎)</li>
                    <li>• Submit portfolio projects for mentor verification (+{REWARD_CONFIG.projectCompleteRewardGems} 💎)</li>
                    <li>• Complete chapter milestones (+{REWARD_CONFIG.chapterCompleteRewardGems} 💎)</li>
                  </ul>
                </div>
              </div>
            ) : (
              /* Authenticated User Ready to Unlock Practice Sandbox */
              <div className="rounded-3xl border border-cyan-500/30 bg-[#121622] p-8 text-center space-y-4 shadow-xl">
                <div className="mx-auto h-16 w-16 rounded-3xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                  <Code2 className="h-8 w-8" />
                </div>

                <div className="space-y-1.5 max-w-md mx-auto">
                  <h3 className="font-mono font-bold text-lg text-slate-100">
                    Start Interactive Practice Sandbox
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Unlock interactive sandbox for <strong className="text-cyan-400">{sandboxAccess?.costGems ?? REWARD_CONFIG.practiceSandboxCostGems} 💎 Gems</strong>. Your available balance is <strong className="text-emerald-400">{wallet.balance} 💎 Gems</strong>. Once unlocked for this lesson, it remains permanently accessible.
                  </p>
                </div>

                {unlockError && (
                  <div className="max-w-md mx-auto p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                    {unlockError}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    onClick={handleUnlockPracticeSandbox}
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-mono font-bold text-xs shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Unlock className="h-4 w-4" />
                    <span>Unlock Practice Sandbox (-{sandboxAccess?.costGems ?? REWARD_CONFIG.practiceSandboxCostGems} 💎)</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Terminal (Requires Auth + Gems) */}
        {activeLessonTab === 'terminal' && (
          <div>
            {terminalAccess?.allowed ? (
              <Terminal
                tasks={selectedLesson.terminalTasks}
                language={language}
                user={user}
                userName={user?.name || user?.username || user?.email?.split('@')[0] || 'student'}
                lessonTitle={selectedLesson.title.en}
                lessonId={selectedLesson.id}
                weekId={selectedLesson.weekId}
                weekOrder={selectedWeek?.order ?? 0}
                lessonOrder={selectedLesson.order}
                onTasksCompleted={() => handleTerminalComplete(selectedLesson.id)}
                onCommitCountIncrement={onIncrementCommitCount}
              />
            ) : terminalAccess?.reason === 'REQUIRES_AUTH' ? (
              /* Anonymous User Authentication Gate */
              <div className="rounded-3xl border border-indigo-500/30 bg-[#121622] p-8 text-center space-y-4 shadow-xl">
                <div className="mx-auto h-16 w-16 rounded-3xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
                  <Lock className="h-8 w-8" />
                </div>

                <div className="space-y-1.5 max-w-md mx-auto">
                  <h3 className="font-mono font-bold text-lg text-slate-100">
                    Interactive Terminal — Login Required
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    The hands-on Terminal CLI simulator requires an authenticated student session. Sign in to execute real Git commands, pass drill tests, and verify portfolio commits.
                  </p>
                </div>

                {onOpenAuth && (
                  <button
                    onClick={onOpenAuth}
                    className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Key className="h-4 w-4" />
                    <span>Sign In to Access Terminal</span>
                  </button>
                )}
              </div>
            ) : terminalAccess?.reason === 'INSUFFICIENT_GEMS' ? (
              /* Authenticated User with Insufficient Gems */
              <div className="rounded-3xl border border-rose-500/30 bg-[#121622] p-8 text-center space-y-4 shadow-xl">
                <div className="mx-auto h-16 w-16 rounded-3xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center">
                  <Coins className="h-8 w-8" />
                </div>

                <div className="space-y-1.5 max-w-md mx-auto">
                  <h3 className="font-mono font-bold text-lg text-slate-100">
                    Not Enough Gems
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Starting this interactive Terminal drill requires <strong className="text-cyan-400">{terminalAccess.requiredGems} 💎 Gems</strong>. Your current balance is <strong className="text-rose-400">{wallet.balance} 💎 Gems</strong>.
                  </p>
                </div>

                <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#171c2b] border border-slate-800 text-left space-y-2 font-mono text-xs">
                  <p className="font-bold text-cyan-400 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>How to Earn More Gems:</span>
                  </p>
                  <ul className="space-y-1 text-slate-300 text-[11px]">
                    <li>• Complete your daily learning goals (+{REWARD_CONFIG.dailyGoalCompleteGems} 💎)</li>
                    <li>• Submit your daily streak check-in (+1 to +15 💎)</li>
                    <li>• Submit portfolio projects for mentor verification (+{REWARD_CONFIG.projectCompleteRewardGems} 💎)</li>
                    <li>• Complete chapter milestones (+{REWARD_CONFIG.chapterCompleteRewardGems} 💎)</li>
                  </ul>
                </div>
              </div>
            ) : (
              /* Authenticated User Ready to Unlock Terminal */
              <div className="rounded-3xl border border-indigo-500/30 bg-[#121622] p-8 text-center space-y-4 shadow-xl">
                <div className="mx-auto h-16 w-16 rounded-3xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
                  <TerminalIcon className="h-8 w-8" />
                </div>

                <div className="space-y-1.5 max-w-md mx-auto">
                  <h3 className="font-mono font-bold text-lg text-slate-100">
                    Unlock Interactive Terminal
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Access the hands-on Git CLI terminal for <strong className="text-indigo-400">{terminalAccess?.costGems ?? REWARD_CONFIG.terminalStartCostGems} 💎 Gems</strong>. Available balance: <strong className="text-emerald-400">{wallet.balance} 💎 Gems</strong>.
                  </p>
                </div>

                {unlockError && (
                  <div className="max-w-md mx-auto p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                    {unlockError}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    onClick={handleUnlockTerminal}
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-mono font-bold text-xs shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Unlock className="h-4 w-4" />
                    <span>Unlock Terminal (-{terminalAccess?.costGems ?? REWARD_CONFIG.terminalStartCostGems} 💎)</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Lesson Progress & Reward Claim Banner with Animated Progress Bar */}
        <div className="pt-2 p-4 sm:p-5 rounded-3xl bg-[var(--bg-card)] border border-[var(--border)] space-y-4 shadow-sm animate-scale-in">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-amber-400" />
                <h4 className="text-xs font-bold font-mono text-[var(--text)] uppercase tracking-wider">
                  {language === 'bn' ? 'লেসন সেকশন অগ্রগতি' : 'Lesson Section Progress'}
                </h4>
              </div>
              <span className="text-[11px] font-mono font-bold text-[var(--text-muted)] bg-[var(--bg-elevated)] px-2.5 py-1 rounded-full border border-[var(--border)] shadow-2xs">
                {[isTheoryRead, isSandboxDone, isTerminalDone].filter(Boolean).length}/3 {language === 'bn' ? 'সম্পন্ন' : 'Sections Complete'}
              </span>
            </div>

            {/* Smooth Animated Width Progress Bar */}
            <div className="w-full h-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-emerald-400 to-amber-400 transition-all duration-500 ease-out shadow-xs"
                style={{
                  width: `${Math.round(([isTheoryRead, isSandboxDone, isTerminalDone].filter(Boolean).length / 3) * 100)}%`
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
            {/* 1. Theory */}
            <button
              onClick={() => setActiveLessonTab('lesson')}
              className={`p-3 rounded-2xl border flex items-center justify-between text-left transition-all duration-200 cursor-pointer card-hover interactive-tap ${
                isTheoryRead
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-2xs'
                  : 'bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:border-amber-500/40'
              }`}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 shrink-0 text-cyan-400" />
                <span className="font-semibold">{language === 'bn' ? '১. থিওরি' : '1. Lesson Theory'}</span>
              </div>
              <span className="font-bold text-[11px] shrink-0 flex items-center gap-1">
                {isTheoryRead ? <><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Read</> : 'Pending'}
              </span>
            </button>

            {/* 2. Sandbox */}
            <button
              onClick={() => setActiveLessonTab('sandbox')}
              className={`p-3 rounded-2xl border flex items-center justify-between text-left transition-all duration-200 cursor-pointer card-hover interactive-tap ${
                isSandboxDone
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-2xs'
                  : 'bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:border-amber-500/40'
              }`}
            >
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 shrink-0 text-amber-400" />
                <span className="font-semibold">{language === 'bn' ? '২. স্যান্ডবক্স' : '2. Practice Sandbox'}</span>
              </div>
              <span className="font-bold text-[11px] shrink-0 flex items-center gap-1">
                {isSandboxDone ? <><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Done</> : 'Pending'}
              </span>
            </button>

            {/* 3. Terminal */}
            <button
              onClick={() => setActiveLessonTab('terminal')}
              className={`p-3 rounded-2xl border flex items-center justify-between text-left transition-all duration-200 cursor-pointer card-hover interactive-tap ${
                isTerminalDone
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-2xs'
                  : 'bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:border-amber-500/40'
              }`}
            >
              <div className="flex items-center gap-2">
                <TerminalIcon className="h-4 w-4 shrink-0 text-indigo-400" />
                <span className="font-semibold">{language === 'bn' ? '৩. টার্মিনাল' : '3. Git Terminal'}</span>
              </div>
              <span className="font-bold text-[11px] shrink-0 flex items-center gap-1">
                {isTerminalDone ? <><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Done</> : 'Pending'}
              </span>
            </button>
          </div>

          {/* Action button: Claim Reward when all 3 sections complete */}
          {!isCompleted && isTheoryRead && isSandboxDone && isTerminalDone ? (
            <button
              onClick={() => handleFinishLesson(selectedLesson.id)}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-emerald-500 to-cyan-500 hover:from-amber-400 hover:to-cyan-400 text-slate-950 font-extrabold text-xs shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer animate-pulse-glow interactive-tap"
            >
              <Trophy className="h-4 w-4 fill-current text-slate-950" />
              <span>{t.claimReward[language]}</span>
            </button>
          ) : !isCompleted && isTheoryRead ? (
            <p className="text-[11px] text-[var(--text-muted)] font-mono text-center">
              💡 {language === 'bn' ? 'থিওরি পড়া শেষ। +২ 💎 জেমস এবং +২৫ XP পেতে স্যান্ডবক্স ও টার্মিনাল সেকশন সম্পন্ন করুন।' : 'Theory read! Complete Practice Sandbox & Terminal tasks to claim full lesson reward (+2 💎 Gems, +25 XP).'}
            </p>
          ) : isCompleted ? (
            <div className="text-center text-xs font-mono text-emerald-400 font-bold py-1 flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>{language === 'bn' ? 'সম্পূর্ণ লেসন সম্পন্ন ও পুরস্কার দাবি করা হয়েছে! (+২ 💎, +২৫ XP)' : 'Lesson Completed & Reward Claimed! (+2 💎 Gems, +25 XP)'}</span>
            </div>
          ) : null}
        </div>

        {/* Mentor Review Dashboard & Certificate Eligibility Section */}
        <MentorDashboard
          lesson={selectedLesson}
          week={selectedWeek!}
          user={user}
          language={language}
          isSectionProgressPassed={isCompleted || (isTheoryRead && isSandboxDone && isTerminalDone)}
          isTheoryDone={isTheoryRead}
          isSandboxDone={isSandboxDone}
          isTerminalDone={isTerminalDone}
          onOpenAuth={onOpenAuth}
        />
      </div>
    );
  }

  // Week View or Main Syllabus List (100% PUBLIC & FREE NAVIGATION)
  return (
    <div className="space-y-6 pb-20 animate-fade-in text-[var(--text)]">
      {/* Top Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-[var(--text)] tracking-tight flex items-center gap-2">
          <span>{t.navSyllabus[language]}</span>
          <span className="text-xs font-normal text-[var(--text-muted)] font-mono">
            ({CURRICULUM_DATA.length} {language === 'bn' ? 'সপ্তাহের কারিকুলাম' : 'Weeks Curriculum'})
          </span>
        </h1>
        <p className="text-xs text-[var(--text-muted)] font-medium">
          {language === 'bn'
            ? 'সম্পূর্ণ কারিকুলাম ব্রাউজ করুন। লেসন আনলক করতে ১ 💎 ও প্রজেক্টে ২ 💎 প্রয়োজন।'
            : 'Explore the full curriculum. 1 💎 Gem required per lesson, 2 💎 per project.'}
        </p>
      </div>

      {/* Guest Mode Exploration Notice */}
      {!user && (
        <div className="p-4 rounded-3xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-cyan-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Sparkles className="h-4 w-4" />
              <span>{t.welcomeBonusNotice[language]}</span>
            </div>
            <p className="text-slate-300 font-sans text-xs">
              {language === 'bn'
                ? 'সম্পূর্ণ সিলেবাস ব্রাউজ করুন। সাইন ইন করলে পাচ্ছেন ৫০টি ফ্রি ওয়েলকাম জেমস!'
                : 'Explore the entire syllabus and lessons. Sign in with Google / GitHub to claim 50 Free Welcome Gems!'}
            </p>
          </div>
          {onOpenAuth && (
            <button
              onClick={onOpenAuth}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 cursor-pointer shadow-sm"
            >
              {t.signInToSync[language]}
            </button>
          )}
        </div>
      )}

      {/* Selected Week View with Lesson List */}
      {selectedWeek ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedWeek(null)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-xs font-medium text-[var(--text)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{t.allWeeks[language]}</span>
            </button>
            <span className="text-xs font-mono text-cyan-400">
              {t.week[language]} {selectedWeek.order} • {selectedWeek.lessons.length} {language === 'bn' ? 'টি লেসন' : 'Lessons'}
            </span>
          </div>

          <div className="p-4 rounded-3xl bg-[var(--bg-card)] border border-[var(--border)] space-y-1.5">
            <h2 className="text-lg font-bold text-[var(--text)]">
              {selectedWeek.title[language]}
            </h2>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {selectedWeek.description[language]}
            </p>
          </div>

          {/* Lessons List in Week */}
          <div className="space-y-2.5">
            {selectedWeek.lessons.map((lesson, idx) => {
              const isDone = completedLessonIds.includes(lesson.id);
              const isUnlocked = isDone || (user ? gemEconomy.isLessonUnlocked(user.id, lesson.id) : false);

              return (
                <div
                  key={lesson.id}
                  onClick={() => handleLessonClick(lesson)}
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer group ${
                    isDone
                      ? 'border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50'
                      : 'border-[var(--border)] bg-[var(--bg-card)] hover:border-cyan-500/50 hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`h-9 w-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                        isDone
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : isUnlocked
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {isDone ? '✓' : idx + 1}
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[var(--text)] group-hover:text-cyan-400 transition-colors">
                        {lesson.title[language]}
                      </h3>
                      <p className="text-[11px] text-[var(--text-muted)] font-mono mt-0.5">
                        <span className="text-indigo-400 font-semibold">{calculateLessonReadingTime(lesson, language).formattedEstimate[language]}</span> · {lesson.difficulty || 'Beginner'} · {lesson.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isDone ? (
                      <span className="text-xs font-mono text-emerald-400 font-bold hidden sm:inline">
                        ✓ {language === 'bn' ? 'সম্পন্ন' : 'Completed'}
                      </span>
                    ) : isUnlocked ? (
                      <span className="text-xs font-mono text-cyan-400 font-bold hidden sm:inline">
                        {language === 'bn' ? 'আনলকড →' : 'Unlocked →'}
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-amber-400 font-bold flex items-center gap-1">
                        <Lock className="h-3 w-3" />
                        <span>1 💎</span>
                      </span>
                    )}
                    <ChevronRight className="h-4 w-4 text-[var(--text-muted)] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Full Curriculum Weeks List (100% Browsable) */
        <div className="space-y-3">
          {CURRICULUM_DATA.map((week) => {
            const state = chapterStatesMap[week.order] || 'AVAILABLE';
            const isCompleted = state === 'COMPLETED';

            const completedInWeek = week.lessons.filter((l) => completedLessonIds.includes(l.id)).length;
            const percent = week.lessons.length > 0 ? Math.round((completedInWeek / week.lessons.length) * 100) : 0;

            return (
              <div
                key={week.id}
                onClick={() => setSelectedWeek(week)}
                className="p-5 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-cyan-500/50 hover:bg-[var(--bg-elevated)] cursor-pointer shadow-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center text-sm font-mono font-bold shrink-0 ${
                        isCompleted
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                      }`}
                    >
                      {isCompleted ? '✓' : `W${week.order}`}
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-sm sm:text-base text-[var(--text)]">
                          {week.title[language]}
                        </h3>
                        {week.isGitWeek && (
                          <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 font-mono text-[10px] font-bold">
                            Rule 2 Mandatory
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[var(--text-muted)] line-clamp-1">
                        {week.description[language]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 font-mono text-xs">
                    <div className="text-right">
                      <span className={isCompleted ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                        {completedInWeek}/{week.lessons.length}
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        ({percent}%)
                      </span>
                    </div>

                    <ChevronRight className="h-5 w-5 text-[var(--text-muted)]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Celebratory Reward Notification Modal */}
      {rewardModalResult && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-sm rounded-3xl border border-emerald-500/40 bg-[#121622] p-6 shadow-2xl text-center space-y-4">
            <div className="mx-auto h-16 w-16 rounded-3xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Trophy className="h-8 w-8 text-amber-400 animate-bounce" />
            </div>

            <div className="space-y-1">
              <h3 className="font-mono font-black text-lg text-slate-100">
                Lesson Complete!
              </h3>
              <p className="text-xs text-slate-400">
                You've successfully completed this lesson and claimed your rewards.
              </p>
            </div>

            {/* Reward Badges Grid */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[#161b2a] border border-slate-800 font-mono">
              <div className="p-2 rounded-xl bg-[#1c2235]">
                <p className="text-xs text-slate-400">GEMS</p>
                <p className="text-sm font-bold text-emerald-400">+{rewardModalResult.gemsAwarded} 💎</p>
              </div>
              <div className="p-2 rounded-xl bg-[#1c2235]">
                <p className="text-xs text-slate-400">XP</p>
                <p className="text-sm font-bold text-cyan-400">+{rewardModalResult.xpAwarded} ⭐</p>
              </div>
              <div className="p-2 rounded-xl bg-[#1c2235]">
                <p className="text-xs text-slate-400">POINTS</p>
                <p className="text-sm font-bold text-amber-400">+{rewardModalResult.pointsAwarded} 🏆</p>
              </div>
            </div>

            <button
              onClick={() => setRewardModalResult(null)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-mono font-bold text-xs shadow-md cursor-pointer"
            >
              Continue Learning
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
