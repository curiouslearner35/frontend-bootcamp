import React, { useMemo, useState, useEffect } from 'react';
import { UserProfile, Language } from '../types';
import {
  GitBranch,
  Flame,
  CheckCircle,
  CheckCircle2,
  Terminal,
  Clock,
  CalendarDays,
  FolderGit2,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Target,
  Trophy,
  Award,
  Zap,
  Play,
  ShieldCheck,
  BookOpen,
  Code2,
  Laptop,
  Wifi,
  WifiOff,
  Download,
  Search,
  ExternalLink,
  Github,
  Globe,
  Lock,
  Unlock,
  FileCode,
  UserCheck
} from 'lucide-react';
import { CreateAccountBanner } from '../components/CreateAccountBanner';
import { DailyStreakWidget } from '../components/DailyStreakWidget';
import { StreakCheckInModal } from '../components/StreakCheckInModal';
import { JourneyProgressVisualizer } from '../components/JourneyProgressVisualizer';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { PROJECTS_DATA } from '../data/projectsData';
import { INITIAL_CERTIFICATES } from '../data/rootControlData';
import { t } from '../i18n/translations';
import { dailyGoalsEngine } from '../services/dailyGoalsEngine';
import { progressionEngine } from '../services/progressionEngine';
import { gemEconomy } from '../services/gemEconomy';
import { leaderboardService } from '../services/leaderboardService';
import { editorCanvasStorage } from '../services/editorCanvasStorage';
import { workspaceManager } from '../services/workspaceManager';
import { DailyGoalState, XPProfile, LeaderboardEntry } from '../types/economy';

function formatTimeAgo(isoString?: string): string {
  if (!isoString) return 'recently';
  const diffMs = Date.now() - new Date(isoString).getTime();
  const diffMin = Math.floor(diffMs / (1000 * 60));
  if (diffMin < 1) return 'just now';
  if (diffMin < 60) return `${diffMin} min ago`;
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return `${diffHours} hr${diffHours > 1 ? 's' : ''} ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

function getGreeting(language: Language): string {
  const hour = new Date().getHours();
  if (hour < 12) {
    return language === 'bn' ? 'শুভ সকাল' : 'Good morning';
  } else if (hour < 18) {
    return language === 'bn' ? 'শুভ অপরাহ্ন' : 'Good afternoon';
  } else {
    return language === 'bn' ? 'শুভ সন্ধ্যা' : 'Good evening';
  }
}

export interface HomePageCachedData {
  dailyGoals?: DailyGoalState;
  xpProfile?: XPProfile;
  gemsBalance?: number;
  canvasSummary?: ReturnType<typeof editorCanvasStorage.getSummary>;
  leaderboard?: LeaderboardEntry[];
  lastSyncedAt?: string;
}

interface HomePageProps {
  user: UserProfile | null;
  language: Language;
  cachedData?: HomePageCachedData;
  onNavigateToSyllabus: () => void;
  onNavigateToProjects: () => void;
  onNavigateToForum: () => void;
  onOpenOnboarding: () => void;
  onOpenAuth: () => void;
  onOpenVisualizer?: () => void;
  onUpdateUser?: (updates: Partial<UserProfile>) => void;
  onStartSession?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  user,
  language,
  cachedData,
  onNavigateToSyllabus,
  onNavigateToProjects,
  onNavigateToForum,
  onOpenOnboarding,
  onOpenAuth,
  onOpenVisualizer,
  onUpdateUser,
  onStartSession
}) => {
  // Real catalog totals computed directly from source databases
  const totalWeeks = CURRICULUM_DATA.length;
  const totalLessons = useMemo(
    () => CURRICULUM_DATA.reduce((acc, week) => acc + week.lessons.length, 0),
    []
  );
  const totalProjects = PROJECTS_DATA.length;
  const week0 = CURRICULUM_DATA[0];
  const gitLessonsCount = week0?.lessons?.length || 6;

  // Real student stats (strictly derived from authenticated profile)
  const completedLessonsCount = user?.completedLessonIds?.length || 0;
  const verifiedProjectsCount = user?.verifiedProjectIds?.length || 0;
  const gitCommitsCount = user?.gitCommitsCount || 0;
  const streakDays = user?.streakDays || 0;
  const studyHours = user?.totalStudyMinutes
    ? (user.totalStudyMinutes / 60).toFixed(1)
    : '0.0';
  const completionPercentage = totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;

  // Certificate Verification ID Search Input State
  const [certSearchId, setCertSearchId] = useState<string>('');

  // Renders immediate content from LocalStorage / cachedData
  const [dailyGoals, setDailyGoals] = useState<DailyGoalState>(() => {
    if (cachedData?.dailyGoals) return cachedData.dailyGoals;
    return dailyGoalsEngine.getTodayGoals(user?.id || 'guest', completedLessonsCount > 0 ? 1 : 0);
  });

  const [xpProfile, setXpProfile] = useState<XPProfile>(() => {
    if (cachedData?.xpProfile) return cachedData.xpProfile;
    return progressionEngine.getXPProfile(user?.id || 'guest', user?.xp || 3660);
  });

  const [gemsBalance, setGemsBalance] = useState<number>(() => {
    if (typeof cachedData?.gemsBalance === 'number') return cachedData.gemsBalance;
    return user ? gemEconomy.getWallet(user.id).balance : 0;
  });

  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => {
    if (cachedData?.leaderboard) return cachedData.leaderboard;
    return leaderboardService.getLeaderboard(user);
  });

  const [canvasSummary, setCanvasSummary] = useState(() => {
    if (cachedData?.canvasSummary) return cachedData.canvasSummary;
    return editorCanvasStorage.getSummary(user?.id);
  });

  const [isSyncingBackground, setIsSyncingBackground] = useState<boolean>(false);
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);

  // Background Sync Strategy: Renders immediately from LocalStorage, then triggers background sync if navigator.onLine is true
  useEffect(() => {
    const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;

    if (isOnline) {
      setIsSyncingBackground(true);

      const syncTask = setTimeout(() => {
        if (user) {
          const freshGoals = dailyGoalsEngine.getTodayGoals(user.id, completedLessonsCount > 0 ? 1 : 0);
          const freshXP = progressionEngine.getXPProfile(user.id, user.xp || 3660);
          const freshGems = gemEconomy.getWallet(user.id).balance;
          const freshLeaderboard = leaderboardService.getLeaderboard(user);

          setDailyGoals(freshGoals);
          setXpProfile(freshXP);
          setGemsBalance(freshGems);
          setLeaderboard(freshLeaderboard);
        }

        editorCanvasStorage.syncWithServer(user?.id).then(({ state }) => {
          setCanvasSummary(editorCanvasStorage.getSummary(user?.id));
          setIsSyncingBackground(false);
        }).catch((err) => {
          console.warn('[HomePage] Background sync warning:', err);
          setIsSyncingBackground(false);
        });
      }, 250);

      return () => clearTimeout(syncTask);
    }
  }, [user?.id, user?.xp, completedLessonsCount]);

  useEffect(() => {
    if (user) {
      const unsubXP = progressionEngine.subscribeXP((profile) => {
        if (profile.studentId === user.id) setXpProfile(profile);
      });

      const unsubWallet = gemEconomy.subscribe((wallet) => {
        if (wallet.studentId === user.id) setGemsBalance(wallet.balance);
      });

      return () => {
        unsubXP();
        unsubWallet();
      };
    }
  }, [user?.id]);

  // Real next active lesson resolution (dynamic lookup in curriculum data)
  const nextLessonInfo = useMemo(() => {
    for (const week of CURRICULUM_DATA) {
      for (const lesson of week.lessons) {
        if (!user?.completedLessonIds?.includes(lesson.id)) {
          return {
            weekOrder: week.order,
            weekTitle: week.title[language],
            lessonId: lesson.id,
            lessonTitle: lesson.title[language],
            durationMinutes: lesson.durationMinutes,
            difficulty: lesson.difficulty || 'Beginner',
            category: lesson.category
          };
        }
      }
    }
    const defaultWeek = CURRICULUM_DATA[0];
    const defaultLesson = defaultWeek.lessons[0];
    return {
      weekOrder: defaultWeek.order,
      weekTitle: defaultWeek.title[language],
      lessonId: defaultLesson.id,
      lessonTitle: defaultLesson.title[language],
      durationMinutes: defaultLesson.durationMinutes,
      difficulty: defaultLesson.difficulty || 'Beginner',
      category: defaultLesson.category
    };
  }, [user?.completedLessonIds, language]);

  // Next recommended project resolution
  const nextProjectInfo = useMemo(() => {
    const uncompleted = PROJECTS_DATA.find((p) => !user?.verifiedProjectIds?.includes(p.id));
    return uncompleted || PROJECTS_DATA[0];
  }, [user?.verifiedProjectIds]);

  const handleVerifyCertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certSearchId.trim()) return;
    const cleanId = certSearchId.trim();
    window.location.href = `/certificate/${cleanId}`;
  };

  return (
    <div className="space-y-6 pb-20 animate-fade-in">
      {/* Dynamic Authentication State Dispatcher */}
      {user ? (
        /* =========================================================================
           LOGGED-IN EXPERIENCE: PERSONALIZED STUDENT DASHBOARD
           ========================================================================= */
        <div className="space-y-6">
          {/* Top Hero Identity & Gamification Bar */}
          <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-b from-[var(--bg-card)] via-[var(--bg-elevated)] to-[var(--bg-card)] p-5 sm:p-6 shadow-sm relative overflow-hidden space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="relative shrink-0">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      referrerPolicy="no-referrer"
                      className="h-12 w-12 rounded-2xl object-cover border-2 border-[var(--border)] shadow-xs"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-2xl bg-indigo-600/10 border-2 border-indigo-500/20 text-[var(--primary)] font-extrabold text-base flex items-center justify-center">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-[var(--bg-card)]" title="Active Student" />
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-xl font-extrabold text-[var(--text)] tracking-tight">
                      {getGreeting(language)}, {user.name}
                    </h1>
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[var(--primary)] text-[11px] font-bold">
                      {user.track || 'Full-Stack Track'}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5 font-mono">
                    @{user.username || 'student'} • {user.provider === 'github' ? 'GitHub' : 'Google'} Account • Joined {user.joinedDate}
                  </p>
                </div>
              </div>

              {/* Economy Header Badges */}
              <div className="flex items-center gap-2 self-start sm:self-center shrink-0 flex-wrap">
                <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 font-mono flex items-center gap-1.5 shadow-xs">
                  <span>💎</span>
                  <span>{gemsBalance} Gems</span>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-xs font-bold text-cyan-400 font-mono flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  <span>Lv.{xpProfile.currentLevel} ({xpProfile.totalXP} XP)</span>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-xs font-semibold text-amber-400 font-mono flex items-center gap-1.5 shadow-xs">
                  <Flame className="h-3.5 w-3.5 text-amber-400" />
                  <span>{streakDays} d</span>
                </div>
              </div>
            </div>

            {/* Level Progression Progress Bar */}
            <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--text)] font-bold flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-indigo-400" />
                  <span>Level {xpProfile.currentLevel} Progress</span>
                </span>
                <span className="text-[var(--text-muted)]">
                  {xpProfile.xpInCurrentLevel} / {xpProfile.xpRequiredForNextLevel} XP ({xpProfile.levelProgressPercent}%)
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-[var(--border)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-700"
                  style={{ width: `${xpProfile.levelProgressPercent}%` }}
                />
              </div>
            </div>

            {/* Prominent Continue Learning Banner */}
            <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/60 via-slate-900 to-indigo-950/40 p-4.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-indigo-400 font-mono">
                  <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                  <span>{t.upNext[language]}: Week {nextLessonInfo.weekOrder} • {nextLessonInfo.category.toUpperCase()}</span>
                </div>
                <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                  {nextLessonInfo.lessonTitle}
                </h2>
                <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
                  <span>⏱️ {nextLessonInfo.durationMinutes} mins</span>
                  <span>•</span>
                  <span>📊 {nextLessonInfo.difficulty}</span>
                  <span>•</span>
                  <span>📘 {nextLessonInfo.weekTitle}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {onStartSession && (
                  <button
                    onClick={onStartSession}
                    className="px-3.5 py-2.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-bold text-xs hover:bg-indigo-500/20 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span>Session Planner</span>
                  </button>
                )}
                <button
                  onClick={onNavigateToSyllabus}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs active:scale-95 transition-all flex items-center gap-2 shadow-md cursor-pointer border border-indigo-400/30"
                >
                  <span>{t.resumeLesson[language]}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Verified Student Progress Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-xs card-hover">
                <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-bold mb-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>{t.lessonsCompleted[language]}</span>
                </div>
                <p className="text-xl font-extrabold text-[var(--text)] tracking-tight">
                  {completedLessonsCount} <span className="text-xs font-normal text-[var(--text-muted)]">/ {totalLessons}</span>
                </p>
                <p className="text-[10px] text-[var(--text-muted)] mt-0.5 font-mono">{completionPercentage}% overall</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-xs card-hover">
                <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold mb-1">
                  <FolderGit2 className="h-4 w-4" />
                  <span>{t.verifiedProjects[language]}</span>
                </div>
                <p className="text-xl font-extrabold text-[var(--text)] tracking-tight">
                  {verifiedProjectsCount} <span className="text-xs font-normal text-[var(--text-muted)]">/ {totalProjects}</span>
                </p>
                <p className="text-[10px] text-[var(--text-muted)] mt-0.5 font-mono">Portfolio Locks</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-xs card-hover">
                <div className="flex items-center gap-1.5 text-indigo-500 text-xs font-bold mb-1">
                  <GitBranch className="h-4 w-4" />
                  <span>{t.gitCommits[language]}</span>
                </div>
                <p className="text-xl font-extrabold text-[var(--text)] tracking-tight">
                  {gitCommitsCount}
                </p>
                <p className="text-[10px] text-[var(--text-muted)] mt-0.5 font-mono">CLI Commits</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-xs card-hover">
                <div className="flex items-center gap-1.5 text-cyan-500 text-xs font-bold mb-1">
                  <Clock className="h-4 w-4" />
                  <span>{t.hoursLearned[language]}</span>
                </div>
                <p className="text-xl font-extrabold text-[var(--text)] tracking-tight">
                  {studyHours} <span className="text-xs font-normal text-[var(--text-muted)]">hrs</span>
                </p>
                <p className="text-[10px] text-[var(--text-muted)] mt-0.5 font-mono">Active Time</p>
              </div>
            </div>
          </div>

          {/* Interactive Curriculum Journey Progress Visualizer Component */}
          <JourneyProgressVisualizer
            user={user}
            language={language}
            onNavigateToSyllabus={onNavigateToSyllabus}
            onOpenAuth={onOpenAuth}
          />

          {/* Student Git Curriculum Workspace Card */}
          {(() => {
            const ws = workspaceManager.getOrCreateStudentWorkspace(user);
            const activeWeek = CURRICULUM_DATA[0];
            const activeLesson = activeWeek?.lessons[0];
            const branch = ws.lessonBranches[activeLesson?.id || '']?.branchName || 'week-00/lesson-00-01';
            const latestCommit = ws.lessonBranches[activeLesson?.id || '']?.latestCommitSha || 'sha-init';
            const demoUrl = `https://${ws.studentSlug}.github.io/frontend-bootcamp/${branch}/`;

            return (
              <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-r from-[var(--bg-card)] via-[var(--bg-elevated)] to-[var(--bg-card)] p-5 sm:p-6 shadow-sm space-y-4 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
                      <FolderGit2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-extrabold text-sm text-[var(--text)]">My Curriculum Repository</h3>
                        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-500/20">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Connected
                        </span>
                      </div>
                      <p className="text-[11px] text-[var(--text-muted)] font-sans">
                        Immutable starter fork tracking your full 100Days / BootCamp learning journey.
                      </p>
                    </div>
                  </div>

                  <div className="text-[11px] text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-xl border border-indigo-500/20 self-start sm:self-auto font-bold">
                    {ws.fork.repositoryName}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] space-y-0.5">
                    <span className="text-[10px] text-[var(--text-muted)] block">Repository URL</span>
                    <a
                      href={ws.fork.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-indigo-400 hover:underline flex items-center gap-1 truncate"
                    >
                      <Github className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{ws.fork.owner}/{ws.fork.repositoryName}</span>
                    </a>
                  </div>

                  <div className="p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] space-y-0.5">
                    <span className="text-[10px] text-[var(--text-muted)] block">Active Branch</span>
                    <span className="font-bold text-slate-200 flex items-center gap-1 truncate">
                      <GitBranch className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{branch}</span>
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] space-y-0.5">
                    <span className="text-[10px] text-[var(--text-muted)] block">Latest Commit</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-1 truncate">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{latestCommit}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 flex-wrap">
                  <a
                    href={ws.fork.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--border)] text-[var(--text)] font-bold text-xs flex items-center gap-1.5 transition-colors border border-[var(--border)]"
                  >
                    <span>Open GitHub</span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>

                  <a
                    href={`${ws.fork.repositoryUrl}/tree/${branch}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--border)] text-[var(--text)] font-bold text-xs flex items-center gap-1.5 transition-colors border border-[var(--border)]"
                  >
                    <span>Open Branch</span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>

                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--border)] text-cyan-400 font-bold text-xs flex items-center gap-1.5 transition-colors border border-[var(--border)]"
                  >
                    <Globe className="h-3 w-3" />
                    <span>Open Live Demo</span>
                  </a>

                  <button
                    type="button"
                    onClick={onNavigateToSyllabus}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors ml-auto cursor-pointer"
                  >
                    <span>View Journal in Syllabus</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            );
          })()}

          {/* Today's Focus & Daily Goals Widget */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Target className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-sm text-[var(--text)]">
                    Today's Active Focus & Goals
                  </h3>
                  <p className="text-[11px] text-[var(--text-muted)] font-mono">
                    Real activity tracking engine rewards
                  </p>
                </div>
              </div>

              {dailyGoals.allCompleted ? (
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs">
                  ✓ ALL COMPLETED (+5 💎)
                </span>
              ) : (
                <span className="text-xs font-mono text-cyan-400">
                  {dailyGoals.goals.filter((g) => g.completed).length}/{dailyGoals.goals.length} Completed
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              {dailyGoals.goals.map((goal) => (
                <div
                  key={goal.id}
                  className={`p-3.5 rounded-2xl border transition-all ${
                    goal.completed
                      ? 'border-emerald-500/40 bg-emerald-500/5'
                      : 'border-[var(--border)] bg-[var(--bg-elevated)]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="font-bold text-[var(--text)] truncate max-w-[140px]">
                      {goal.title[language]}
                    </span>
                    <span className={goal.completed ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                      {goal.current}/{goal.target}
                    </span>
                  </div>

                  <div className="h-1.5 w-full rounded-full bg-[var(--border)] overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        goal.completed ? 'bg-emerald-400' : 'bg-cyan-500'
                      }`}
                      style={{ width: `${Math.min(100, (goal.current / goal.target) * 100)}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)] mt-2">
                    <span>Reward</span>
                    <span className="text-amber-400 font-bold">+{goal.rewardGems} 💎 · +{goal.rewardXP} XP</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day Streak Matrix Widget */}
          <DailyStreakWidget
            user={user}
            language={language}
            onOpenAuth={onOpenAuth}
            onViewRoadmap={() => setIsStreakModalOpen(true)}
            onStreakSubmitted={(result) => {
              if (onUpdateUser && user) {
                onUpdateUser({
                  streakDays: result.newStreak,
                  points: (user.points || 0) + result.pointsAwarded,
                  xp: (user.xp || 0) + result.xpAwarded
                });
              }
            }}
          />

          {/* Quick Access Grid (Preserved & Enhanced Shortcuts) */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-sm text-[var(--text)] flex items-center gap-2">
              <Zap className="h-4 w-4 text-indigo-400" />
              <span>{t.quickActions[language]}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Interactive Terminal Shortcut */}
              <button
                onClick={onNavigateToSyllabus}
                className="p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-indigo-500 transition-all text-left flex items-center justify-between group shadow-xs cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[var(--text)] group-hover:text-indigo-400 transition-colors">
                      {t.terminal[language]} & Syllabus
                    </h4>
                    <p className="text-[11px] text-[var(--text-muted)]">Git & CLI Exercises</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-indigo-400 transition-colors" />
              </button>

              {/* Verified Projects Shortcut */}
              <button
                onClick={onNavigateToProjects}
                className="p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-amber-500 transition-all text-left flex items-center justify-between group shadow-xs cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                    <FolderGit2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[var(--text)] group-hover:text-amber-500 transition-colors">
                      {t.navProjects[language]}
                    </h4>
                    <p className="text-[11px] text-[var(--text-muted)]">30+ Verified Starters</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-amber-500 transition-colors" />
              </button>

              {/* Community Forum Shortcut */}
              <button
                onClick={onNavigateToForum}
                className="p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-emerald-500 transition-all text-left flex items-center justify-between group shadow-xs cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[var(--text)] group-hover:text-emerald-500 transition-colors">
                      {t.navForum[language]}
                    </h4>
                    <p className="text-[11px] text-[var(--text-muted)]">Q&A & Discussions</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-emerald-500 transition-colors" />
              </button>
            </div>
          </div>

          {/* Editor Canvas Quick Access Card */}
          <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-slate-950 via-indigo-950/50 to-slate-900 p-5 shadow-sm relative overflow-hidden group">
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-amber-400" />
                    <span>Code Visualizer</span>
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white tracking-tight">
                  Editor Canvas
                </h3>

                {!canvasSummary.hasState ? (
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Create beautiful code visuals, customize and export your work.
                  </p>
                ) : canvasSummary.isRecovered ? (
                  <div className="space-y-1">
                    <p className="text-xs text-amber-300 font-semibold flex items-center gap-1.5">
                      <span>Your previous work was restored.</span>
                    </p>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <span className="text-indigo-300 font-bold">{canvasSummary.language}</span>
                      <span>•</span>
                      <span>{canvasSummary.theme}</span>
                      {canvasSummary.updatedAt && (
                        <>
                          <span>•</span>
                          <span>Updated {formatTimeAgo(canvasSummary.updatedAt)}</span>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-xs text-slate-300 font-medium">
                      Continue your latest work
                    </p>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-300 font-semibold">
                      <span>{canvasSummary.language} • {canvasSummary.theme}</span>
                      {canvasSummary.updatedAt && (
                        <span className="text-slate-400 font-normal">
                          • Updated {formatTimeAgo(canvasSummary.updatedAt)}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={onOpenVisualizer}
                className="shrink-0 px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer border border-indigo-400/30"
              >
                <span>{!canvasSummary.hasState ? 'Open Editor Canvas' : 'Continue'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Next Recommended Project Card */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <FolderGit2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-sm text-[var(--text)]">
                    Next Recommended Project
                  </h3>
                  <p className="text-[11px] text-[var(--text-muted)] font-mono">
                    Sequenced from curriculum progress
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold">
                {nextProjectInfo.category || 'Portfolio'}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-lg">
                <h4 className="font-extrabold text-sm text-[var(--text)]">
                  {nextProjectInfo.title[language]}
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {nextProjectInfo.description[language]}
                </p>
                <div className="flex items-center gap-2 text-[11px] font-mono text-indigo-400 pt-1">
                  <span>Estimated Time: {nextProjectInfo.estimatedHours} hrs • {nextProjectInfo.difficulty}</span>
                </div>
              </div>

              <button
                onClick={onNavigateToProjects}
                className="shrink-0 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs hover:bg-amber-400 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>View Projects</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Performance Points Leaderboard Preview */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Trophy className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-sm text-[var(--text)]">
                    Student Leaderboard
                  </h3>
                  <p className="text-[11px] text-[var(--text-muted)] font-mono">
                    Ranked by verified homework accuracy & task execution
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {leaderboard.map((entry) => (
                <div
                  key={entry.studentId}
                  className={`p-3 rounded-2xl border flex items-center justify-between text-xs font-mono transition-all ${
                    entry.isCurrentUser
                      ? 'border-cyan-500/40 bg-cyan-500/5 ring-1 ring-cyan-500/20'
                      : 'border-[var(--border)] bg-[var(--bg-elevated)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-6 w-6 rounded-lg font-bold flex items-center justify-center text-xs ${
                      entry.rank === 1
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      #{entry.rank}
                    </div>
                    <div className="flex items-center gap-2">
                      {entry.avatar ? (
                        <img src={entry.avatar} alt={entry.name} className="h-6 w-6 rounded-full object-cover" />
                      ) : (
                        <div className="h-6 w-6 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-xs">
                          {entry.name.charAt(0)}
                        </div>
                      )}
                      <span className="font-bold text-[var(--text)]">
                        {entry.name} {entry.isCurrentUser && <span className="text-cyan-400 font-normal">(You)</span>}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-right">
                    <span className="text-amber-400 font-bold">
                      {entry.points} 🏆
                    </span>
                    <span className="text-slate-500 text-[10px]">
                      Lv.{entry.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* =========================================================================
           LOGGED-OUT EXPERIENCE: WORLD-CLASS FREE & OPEN-SOURCE PLATFORM HOME
           ========================================================================= */
        <div className="space-y-12">
          {/* SECTION 1 — HERO */}
          <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-slate-950 via-indigo-950/40 to-slate-900 p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-8">
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            <div className="max-w-2xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-extrabold tracking-wide uppercase font-mono">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>{t.freeMissionBadge[language]}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {t.heroTitle[language]}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                {t.heroSubtitle[language]}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenAuth}
                  className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm active:scale-95 transition-all shadow-lg flex items-center gap-2 cursor-pointer border border-indigo-400/30"
                >
                  <Play className="h-4 w-4 fill-current" />
                  <span>{t.startLearning[language]}</span>
                </button>

                <button
                  onClick={onNavigateToSyllabus}
                  className="px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-extrabold text-sm active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <BookOpen className="h-4 w-4 text-indigo-400" />
                  <span>{t.curriculumOverview[language]}</span>
                </button>
              </div>
            </div>

            {/* Grounded Academy Catalog Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-bold font-mono">
                  <CalendarDays className="h-4 w-4" />
                  <span>12 Weeks</span>
                </div>
                <p className="text-2xl font-black text-white tracking-tight">{totalWeeks} Modules</p>
                <p className="text-[11px] text-slate-400 font-mono">Week 0 to Full-Stack</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold font-mono">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>180+ Lessons</span>
                </div>
                <p className="text-2xl font-black text-white tracking-tight">{totalLessons} Interactive</p>
                <p className="text-[11px] text-slate-400 font-mono">CLI & Code Sandbox</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold font-mono">
                  <FolderGit2 className="h-4 w-4" />
                  <span>30+ Projects</span>
                </div>
                <p className="text-2xl font-black text-white tracking-tight">{totalProjects} Verified</p>
                <p className="text-[11px] text-slate-400 font-mono">Portfolio Starters</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-bold font-mono">
                  <Terminal className="h-4 w-4" />
                  <span>Git-First</span>
                </div>
                <p className="text-2xl font-black text-white tracking-tight">{gitLessonsCount} Lessons</p>
                <p className="text-[11px] text-slate-400 font-mono">Mandatory Week 0 Gate</p>
              </div>
            </div>
          </div>

          {/* SECTION 2 — FREE AND OPEN-SOURCE MISSION */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8 space-y-6">
            <div className="max-w-xl space-y-2">
              <span className="text-[11px] font-mono uppercase font-extrabold text-emerald-500 tracking-wider">
                Mission & Integrity
              </span>
              <h2 className="text-2xl font-black text-[var(--text)] tracking-tight">
                {t.freeMissionTitle[language]}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {t.freeMissionDesc[language]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
                <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                  🆓
                </div>
                <h3 className="text-sm font-bold text-[var(--text)]">100% Free Access</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  No hidden paywalls, no trial expirations, and no premium upsells.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
                <div className="h-9 w-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                  🔓
                </div>
                <h3 className="text-sm font-bold text-[var(--text)]">Open-Source Codebase</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Inspect the source code, contribute enhancements, or run locally.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
                <div className="h-9 w-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                  🎯
                </div>
                <h3 className="text-sm font-bold text-[var(--text)]">Self-Paced Execution</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Learn on your own schedule with persistent LocalStorage and server sync.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3 — LEARNING PHILOSOPHY */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8 space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-[11px] font-mono uppercase font-extrabold text-indigo-400 tracking-wider">
                Product Philosophy
              </span>
              <h2 className="text-2xl font-black text-[var(--text)] tracking-tight">
                {t.learningPhilosophyTitle[language]}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {t.learningPhilosophySubtitle[language]}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono font-bold text-[var(--text)] pt-2">
              {['Learn', 'Understand', 'Practice', 'Build', 'Reflect', 'Improve', 'Advance'].map((step, idx, arr) => (
                <React.Fragment key={step}>
                  <div className="px-3.5 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    {step}
                  </div>
                  {idx < arr.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* SECTION 4 — BEGINNER-TO-ADVANCED GUIDANCE */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8 space-y-6">
            <div className="max-w-xl space-y-2">
              <span className="text-[11px] font-mono uppercase font-extrabold text-amber-400 tracking-wider">
                Guided Learning Path
              </span>
              <h2 className="text-2xl font-black text-[var(--text)] tracking-tight">
                {t.guidanceTitle[language]}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {t.guidanceSubtitle[language]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { step: '01', title: 'Complete Beginner', desc: 'No prior coding required. Start with Git & CLI.' },
                { step: '02', title: 'Foundations & Practice', desc: 'Interactive lessons with real terminal validation.' },
                { step: '03', title: 'Full-Stack Projects', desc: 'Build 30+ portfolio apps using modern React & Node.' },
                { step: '04', title: 'Verified Graduation', desc: 'Earn cryptographic certificates upon completion.' }
              ].map((card) => (
                <div key={card.step} className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-1.5">
                  <span className="text-indigo-400 font-mono font-extrabold text-xs">{card.step}</span>
                  <h3 className="font-bold text-sm text-[var(--text)]">{card.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5 — WHAT YOU CAN LEARN (CURRICULUM OVERVIEW) */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <span className="text-[11px] font-mono uppercase font-extrabold text-indigo-400 tracking-wider">
                  Curriculum Overview
                </span>
                <h2 className="text-2xl font-black text-[var(--text)] tracking-tight">
                  {t.whatYouCanLearnTitle[language]}
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {t.whatYouCanLearnSubtitle[language]}
                </p>
              </div>

              <button
                onClick={onNavigateToSyllabus}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white font-extrabold text-xs hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{t.curriculumOverview[language]}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {CURRICULUM_DATA.map((week) => (
                <div
                  key={week.id}
                  className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2 hover:border-indigo-500/40 transition-all cursor-pointer"
                  onClick={onNavigateToSyllabus}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-indigo-400 font-bold">Week {week.order}</span>
                    <span className="text-[var(--text-muted)]">{week.lessons.length} Lessons</span>
                  </div>
                  <h3 className="font-bold text-sm text-[var(--text)] leading-snug">
                    {week.title[language]}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                    {week.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 6 — HOW LEARNING WORKS (PRODUCT FLOW) */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8 space-y-6">
            <div className="max-w-xl space-y-2">
              <span className="text-[11px] font-mono uppercase font-extrabold text-cyan-400 tracking-wider">
                Product Flow
              </span>
              <h2 className="text-2xl font-black text-[var(--text)] tracking-tight">
                {t.howLearningWorksTitle[language]}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {t.howLearningWorksSubtitle[language]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
                <div className="h-8 w-8 rounded-xl bg-indigo-500/10 text-indigo-400 font-bold text-xs flex items-center justify-center font-mono">
                  01
                </div>
                <h3 className="font-extrabold text-sm text-[var(--text)]">Read Theory & Concepts</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Understand core architecture principles, syntax, and Git version control workflows.
                </p>
              </div>

              <div className="p-4.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
                <div className="h-8 w-8 rounded-xl bg-cyan-500/10 text-cyan-400 font-bold text-xs flex items-center justify-center font-mono">
                  02
                </div>
                <h3 className="font-extrabold text-sm text-[var(--text)]">Practice & Validate</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Execute commands in Fish shell terminal and receive instant automated verification.
                </p>
              </div>

              <div className="p-4.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
                <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-400 font-bold text-xs flex items-center justify-center font-mono">
                  03
                </div>
                <h3 className="font-extrabold text-sm text-[var(--text)]">Build Portfolio Projects</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Complete 30+ real-world projects and earn verified completion recognition.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 7 — PRACTICE & BUILD (WORKSPACE TOOLS) */}
          <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 p-6 sm:p-8 space-y-6 text-white">
            <div className="max-w-xl space-y-2">
              <span className="text-[11px] font-mono uppercase font-extrabold text-indigo-400 tracking-wider">
                Integrated Environment
              </span>
              <h2 className="text-2xl font-black text-white tracking-tight">
                {t.practiceBuildTitle[language]}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.practiceBuildSubtitle[language]}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <Terminal className="h-5 w-5 text-indigo-400" />
                <h3 className="font-bold text-xs text-white">Fish Shell CLI</h3>
                <p className="text-[11px] text-slate-400">Interactive terminal with Oh My Posh prompt.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <Code2 className="h-5 w-5 text-cyan-400" />
                <h3 className="font-bold text-xs text-white">Code Sandbox</h3>
                <p className="text-[11px] text-slate-400">Live HTML/CSS/JS preview engine.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <FolderGit2 className="h-5 w-5 text-amber-400" />
                <h3 className="font-bold text-xs text-white">Homework Checks</h3>
                <p className="text-[11px] text-slate-400">Automated task validation & feedback.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <Sparkles className="h-5 w-5 text-emerald-400" />
                <h3 className="font-bold text-xs text-white">Editor Canvas</h3>
                <p className="text-[11px] text-slate-400">Carbon-style snippet visualizer & exporter.</p>
              </div>
            </div>
          </div>

          {/* SECTION 10 — PROJECT-BASED LEARNING (CURATED SHOWCASE) */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <span className="text-[11px] font-mono uppercase font-extrabold text-amber-400 tracking-wider">
                  Portfolio Projects
                </span>
                <h2 className="text-2xl font-black text-[var(--text)] tracking-tight">
                  {t.projectBasedTitle[language]}
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {t.projectBasedSubtitle[language]}
                </p>
              </div>

              <button
                onClick={onNavigateToProjects}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs hover:bg-amber-400 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{t.browseProjects[language]}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROJECTS_DATA.slice(0, 4).map((project) => (
                <div
                  key={project.id}
                  className="p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2 hover:border-amber-500/40 transition-all cursor-pointer"
                  onClick={onNavigateToProjects}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-bold">
                      {project.category}
                    </span>
                    <span className="text-[var(--text-muted)]">Project #{project.projectNumber} • {project.difficulty}</span>
                  </div>
                  <h3 className="font-extrabold text-base text-[var(--text)]">
                    {project.title[language]}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                    {project.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 11 — MENTOR SUPPORT AND STUDENT CARE */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8 space-y-6">
            <div className="max-w-xl space-y-2">
              <span className="text-[11px] font-mono uppercase font-extrabold text-indigo-400 tracking-wider">
                Support & Community
              </span>
              <h2 className="text-2xl font-black text-[var(--text)] tracking-tight">
                {t.mentorCareTitle[language]}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {t.mentorCareSubtitle[language]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
                <div className="h-8 w-8 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                  📝
                </div>
                <h3 className="font-bold text-sm text-[var(--text)]">Homework Verification</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Submit tasks for instructor review and detailed correction guidance.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
                <div className="h-8 w-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                  💬
                </div>
                <h3 className="font-bold text-sm text-[var(--text)]">Community Forum</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Ask questions, share code snippets, and collaborate with fellow learners.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
                <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  🧪
                </div>
                <h3 className="font-bold text-sm text-[var(--text)]">Automated Validation</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Get instant feedback from our browser validation suite.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 13 — CERTIFICATES & PUBLIC VERIFICATION */}
          <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 p-6 sm:p-8 space-y-6 text-white">
            <div className="max-w-xl space-y-2">
              <span className="text-[11px] font-mono uppercase font-extrabold text-amber-400 tracking-wider">
                Cryptographic Verification
              </span>
              <h2 className="text-2xl font-black text-white tracking-tight">
                {t.certificatesTitle[language]}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.certificatesSubtitle[language]}
              </p>
            </div>

            {/* Certificate ID Verification Search Box */}
            <form onSubmit={handleVerifyCertSubmit} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 max-w-lg">
              <label className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Verify Public Certificate</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={certSearchId}
                  onChange={(e) => setCertSearchId(e.target.value)}
                  placeholder={t.verifyCertificateInput[language]}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs cursor-pointer transition-all shrink-0"
                >
                  {t.verifyCertificateBtn[language]}
                </button>
              </div>
            </form>
          </div>

          {/* SECTION 15 — OFFLINE-FIRST EXPERIENCE */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8 space-y-6">
            <div className="max-w-xl space-y-2">
              <span className="text-[11px] font-mono uppercase font-extrabold text-cyan-400 tracking-wider">
                PWA & Local-First Architecture
              </span>
              <h2 className="text-2xl font-black text-[var(--text)] tracking-tight">
                {t.offlineTitle[language]}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {t.offlineSubtitle[language]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono">
                  <Wifi className="h-4 w-4" />
                  <span>🟢 Available Offline</span>
                </div>
                <p className="text-xs text-[var(--text)] leading-relaxed font-mono">
                  Lesson Reading • Terminal Practice • Code Sandbox • Local Progress • Editor Canvas
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
                  <WifiOff className="h-4 w-4" />
                  <span>⚡ Requires Connection</span>
                </div>
                <p className="text-xs text-[var(--text)] leading-relaxed font-mono">
                  Firebase Account Sync • Community Forum Posts • Certificate Verification
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 17 — FINAL CTA */}
          <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 p-8 sm:p-12 text-center text-white space-y-6 shadow-xl">
            <div className="max-w-xl mx-auto space-y-3">
              <h2 className="text-3xl font-black tracking-tight">
                {t.finalCtaTitle[language]}
              </h2>
              <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed font-medium">
                {t.finalCtaSubtitle[language]}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenAuth}
                className="px-6 py-3.5 rounded-2xl bg-white text-indigo-950 font-extrabold text-sm hover:bg-indigo-50 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                {t.startLearning[language]}
              </button>
              <button
                onClick={onNavigateToSyllabus}
                className="px-6 py-3.5 rounded-2xl bg-indigo-900/80 border border-indigo-700 text-white font-extrabold text-sm hover:bg-indigo-800 active:scale-95 transition-all cursor-pointer"
              >
                {t.curriculumOverview[language]}
              </button>
            </div>
          </div>

          {/* Create Account Banner */}
          <CreateAccountBanner
            user={user}
            language={language}
            onOpenAuth={onOpenAuth}
            onNavigateToSyllabus={onNavigateToSyllabus}
          />
        </div>
      )}

      {/* Streak Roadmap and Check-in Modal */}
      <StreakCheckInModal
        isOpen={isStreakModalOpen}
        onClose={() => setIsStreakModalOpen(false)}
        user={user}
        language={language}
        onOpenAuth={onOpenAuth}
        onStreakSubmitted={(result) => {
          if (onUpdateUser && user) {
            onUpdateUser({
              streakDays: result.newStreak,
              points: (user.points || 0) + result.pointsAwarded,
              xp: (user.xp || 0) + result.xpAwarded
            });
          }
        }}
      />
    </div>
  );
};
