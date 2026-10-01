import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import {
  Activity,
  GitCommit,
  Clock,
  Award,
  GitBranch,
  RefreshCw,
  ExternalLink,
  BookOpen,
  AlertCircle,
  BarChart2,
  TrendingUp,
  LogIn,
  Flame,
  Terminal,
  Code2,
  Layers,
  Zap,
  CalendarDays,
  Target
} from 'lucide-react';
import { UserProfile, Language } from '../types';
import { t } from '../i18n/translations';
import {
  getSyncedGitHubProfile,
  fetchGitHubCommitActivity,
  GitHubSyncedProfile,
  GitHubCommitEvent
} from '../services/githubService';
import {
  normalizeStudyAnalytics,
  normalizeGitAnalytics,
  normalizeCategoryDistribution,
  getWakaAnalytics,
  NormalizedStudyPoint,
  NormalizedGitPoint,
  NormalizedCategoryDistribution
} from '../services/analyticsService';
import {
  activityTracker,
  WakaSummaryStats,
  SurfaceBreakdownItem,
  StudySession,
  SURFACE_COLORS
} from '../services/activityTracker';
import { sessionManager } from '../services/sessionManager';
import { PlannedVsActualMetric } from '../types/learningSession';

interface ProgressChartProps {
  user: UserProfile | null;
  language: Language;
  onNavigateToSyllabus?: () => void;
  onOpenAuth?: () => void;
  onStartSession?: () => void;
}

/**
 * Hook to detect prefers-reduced-motion for accessible animations
 */
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

/**
 * Format minutes into readable time: "45m" or "2h 15m"
 */
function formatDuration(minutes: number, language: Language = 'en'): string {
  const mUnit = t.minutesUnit ? t.minutesUnit[language] : 'm';
  const hUnit = t.hoursUnit ? t.hoursUnit[language] : 'h';

  if (minutes < 60) {
    return `${minutes}${mUnit}`;
  }
  const h = Math.floor(minutes / 60);
  const m = Math.round(minutes % 60);
  const hStr = `${h}${hUnit}`;
  return m > 0 ? `${hStr} ${m}${mUnit}` : hStr;
}

/**
 * Format relative timestamp: "Just now", "5m ago", "1h ago"
 */
function formatRelativeTime(timestamp: number): string {
  const diffSec = Math.max(0, Math.floor((Date.now() - timestamp) / 1000));
  if (diffSec < 60) return 'Just now';
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return `${diffHour}h ago`;
  const diffDays = Math.floor(diffHour / 24);
  return `${diffDays}d ago`;
}

export const ProgressChart: React.FC<ProgressChartProps> = ({
  user,
  language,
  onNavigateToSyllabus,
  onOpenAuth,
  onStartSession
}) => {
  const isLoggedIn = user !== null && user.provider !== 'guest';
  const prefersReducedMotion = usePrefersReducedMotion();

  // Chart view toggle for Study Minutes (Bar vs Line)
  const [studyChartType, setStudyChartType] = useState<'bar' | 'line'>('bar');

  // WakaTime real-time summary statistics state
  const [wakaStats, setWakaStats] = useState<WakaSummaryStats | null>(() =>
    user && user.provider !== 'guest' ? activityTracker.getSummaryStats(user.id) : null
  );

  // Planned vs Actual metrics state
  const [plannedMetrics, setPlannedMetrics] = useState<PlannedVsActualMetric[]>(() =>
    sessionManager.getPlannedVsActualMetrics(user?.id)
  );

  // Subscribe to real-time activity tracker updates
  useEffect(() => {
    if (!isLoggedIn || !user) {
      setWakaStats(null);
      setPlannedMetrics([]);
      return;
    }

    const unsubscribe = activityTracker.subscribe((stats) => {
      setWakaStats(stats);
    });

    const refreshPlanned = () => {
      setPlannedMetrics(sessionManager.getPlannedVsActualMetrics(user.id));
    };

    const unsubSession = sessionManager.subscribe(() => refreshPlanned());
    const unsubSummary = sessionManager.subscribeSummary(() => refreshPlanned());

    return () => {
      unsubscribe();
      unsubSession();
      unsubSummary();
    };
  }, [user?.id, isLoggedIn]);

  // GitHub commit events and sync state
  const [syncedProfile, setSyncedProfile] = useState<GitHubSyncedProfile | null>(() =>
    getSyncedGitHubProfile()
  );
  const [gitEvents, setGitEvents] = useState<GitHubCommitEvent[]>([]);
  const [gitSyncStatus, setGitSyncStatus] = useState<'idle' | 'syncing' | 'synced' | 'error'>('idle');
  const [gitErrorMessage, setGitErrorMessage] = useState<string | null>(null);

  // Sync GitHub commit history when student is logged in with GitHub or has a synced profile
  const syncGitCommits = useCallback(async (username: string) => {
    if (!username) return;
    setGitSyncStatus('syncing');
    setGitErrorMessage(null);

    try {
      const events = await fetchGitHubCommitActivity(username);
      setGitEvents(events);
      setGitSyncStatus('synced');
    } catch (err: any) {
      setGitSyncStatus('error');
      setGitErrorMessage(err?.message || t.gitHubSyncError[language] || "GitHub activity couldn't be updated.");
    }
  }, [language]);

  // Initial local-first load & background sync
  useEffect(() => {
    if (!isLoggedIn || !user) {
      setGitEvents([]);
      setGitSyncStatus('idle');
      return;
    }

    const currentProfile = getSyncedGitHubProfile();
    setSyncedProfile(currentProfile);

    const targetUsername = currentProfile?.username || (user.provider === 'github' ? user.username.replace('_dev', '') : null);

    if (targetUsername) {
      syncGitCommits(targetUsername);
    } else {
      setGitSyncStatus('idle');
    }
  }, [user, isLoggedIn, syncGitCommits]);

  // Normalized Study Analytics (Real Data)
  const studyAnalytics = useMemo(() => {
    return normalizeStudyAnalytics(user, language, 7);
  }, [user, language, wakaStats]);

  // Normalized Git Analytics (Real Data)
  const gitAnalytics = useMemo(() => {
    return normalizeGitAnalytics(syncedProfile, gitEvents, language, 7);
  }, [syncedProfile, gitEvents, language]);

  // Normalized Category Distribution (Real Data from completed lessons)
  const categoryAnalytics = useMemo(() => {
    return normalizeCategoryDistribution(user?.completedLessonIds || [], language);
  }, [user?.completedLessonIds, language]);

  // If user is guest/logged out: Render honest guest state boundary (no fake user stats)
  if (!isLoggedIn || !user) {
    return (
      <div
        id="home-analytics-guest-boundary"
        className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 sm:p-6 shadow-sm my-6 text-center space-y-3"
      >
        <div className="h-10 w-10 mx-auto rounded-2xl bg-indigo-500/10 text-[var(--primary)] flex items-center justify-center">
          <Activity className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-sm font-extrabold text-[var(--text)] tracking-tight">
            {t.learningActivity[language]}
          </h3>
          <p className="text-xs text-[var(--text-muted)] mt-1 max-w-md mx-auto">
            {language === 'bn'
              ? 'আপনার ব্যক্তিগত পড়ার সময়, গিট কমিট হিস্ট্রি এবং অ্যাক্টিভিটি ট্র্যাকিং দেখতে সাইন ইন করুন।'
              : 'Sign in to track your personal study minutes, active coding sessions, and Git activity in real time.'}
          </p>
        </div>
        {onOpenAuth && (
          <button
            id="home-analytics-guest-signin-btn"
            onClick={onOpenAuth}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            <LogIn className="h-3.5 w-3.5" />
            <span>{t.signInToSync[language]}</span>
          </button>
        )}
      </div>
    );
  }

  const { studyPoints, hasStudyActivity, totalRecordedMinutes } = studyAnalytics;
  const { gitPoints, isConnected: isGitConnected, hasGitActivity, totalCommits } = gitAnalytics;
  const { distribution, hasDistribution, totalCompleted } = categoryAnalytics;

  // Real tracked values
  const todayActiveMinutes = wakaStats ? wakaStats.todayActiveMinutes : 0;
  const currentStreak = wakaStats ? wakaStats.currentStreak : (user.streakDays || 0);
  const totalSessions = wakaStats ? wakaStats.totalSessions : 0;
  const surfaceBreakdown = wakaStats ? wakaStats.surfaceBreakdown : [];
  const hasSurfaceBreakdown = surfaceBreakdown.length > 0;
  const recentSessions = wakaStats ? wakaStats.recentSessions : [];

  // Coding & Terminal total minutes
  const codingAndTerminalMinutes = surfaceBreakdown
    .filter((s) => s.surface === 'CODE_PLAYGROUND' || s.surface === 'TERMINAL' || s.surface === 'PRACTICE')
    .reduce((acc, s) => acc + s.minutes, 0);

  const animationDuration = prefersReducedMotion ? 0 : 800;

  return (
    <section
      id="home-learning-analytics-section"
      aria-label="Student Learning Analytics"
      className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 sm:p-6 shadow-sm my-6 space-y-6"
    >
      {/* 1. Header & Live Tracking Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-[var(--primary)] animate-pulse" />
            <h3 className="font-extrabold text-sm sm:text-base text-[var(--text)] tracking-tight">
              {t.learningActivity[language]}
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-mono font-bold flex items-center gap-1 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>{t.liveTracking ? t.liveTracking[language] || 'Live' : 'Live'}</span>
            </span>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            {language === 'bn'
              ? 'ওয়াকাটাইম-মডেল অনুযায়ী সক্রিয় পড়ার সময় ও কোডিং ইন্টারঅ্যাকশন ট্র্যাকিং'
              : 'WakaTime-model active learning time & developer interactions'}
          </p>
        </div>

        {/* Global Peak Focus Window Indicator */}
        {wakaStats && wakaStats.mostActivePeriod !== 'None' && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-mono text-[var(--text-muted)]">
            <Zap className="h-3.5 w-3.5 text-amber-500" />
            <span>{t.peakFocusTime ? t.peakFocusTime[language] || 'Peak:' : 'Peak:'}</span>
            <span className="font-bold text-[var(--text)]">{wakaStats.mostActivePeriod}</span>
          </div>
        )}
      </div>

      {/* 2. Authentic KPI Metric Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Today's Active Time */}
        <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
            <span>{t.todayActiveTime ? t.todayActiveTime[language] || "Today's Active Time" : "Today's Active Time"}</span>
            <Clock className="h-4 w-4 text-cyan-500" />
          </div>
          <p className="text-lg sm:text-xl font-extrabold font-mono text-[var(--text)] mt-2">
            {formatDuration(todayActiveMinutes, language)}
          </p>
        </div>

        {/* Real Streak */}
        <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
            <span>{t.currentStreak ? t.currentStreak[language] || "Active Streak" : "Active Streak"}</span>
            <Flame className="h-4 w-4 text-orange-500" />
          </div>
          <p className="text-lg sm:text-xl font-extrabold font-mono text-[var(--text)] mt-2">
            {currentStreak} <span className="text-xs font-medium text-[var(--text-muted)]">{language === 'bn' ? 'দিন' : 'days'}</span>
          </p>
        </div>

        {/* Study Sessions Count */}
        <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
            <span>{t.studySessions ? t.studySessions[language] || "Study Sessions" : "Study Sessions"}</span>
            <Layers className="h-4 w-4 text-indigo-500" />
          </div>
          <p className="text-lg sm:text-xl font-extrabold font-mono text-[var(--text)] mt-2">
            {totalSessions}
          </p>
        </div>

        {/* Coding & Terminal Active Time */}
        <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
            <span>{t.codingAndTerminal ? t.codingAndTerminal[language] || "Coding & Terminal" : "Coding & Terminal"}</span>
            <Terminal className="h-4 w-4 text-emerald-500" />
          </div>
          <p className="text-lg sm:text-xl font-extrabold font-mono text-[var(--text)] mt-2">
            {formatDuration(codingAndTerminalMinutes, language)}
          </p>
        </div>
      </div>

      {/* 3. Visualizations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* A. STUDY MINUTES & CODING ACTIVITY (Recharts Bar/Line Chart) */}
        <div
          id="study-minutes-chart-card"
          className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col justify-between space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[var(--primary)]" />
              <h4 className="font-bold text-xs sm:text-sm text-[var(--text)] tracking-tight">
                {t.studyMinutes[language]}
              </h4>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">
                ({t.past7Days[language]})
              </span>
            </div>

            {hasStudyActivity && (
              <div className="flex items-center gap-1 bg-[var(--bg-card)] border border-[var(--border)] p-0.5 rounded-lg text-[10px]">
                <button
                  type="button"
                  onClick={() => setStudyChartType('bar')}
                  className={`px-2 py-1 rounded-md font-bold transition-all flex items-center gap-1 ${
                    studyChartType === 'bar'
                      ? 'bg-[var(--primary)] text-white shadow-xs'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                  aria-label="View as Bar Chart"
                >
                  <BarChart2 className="h-3 w-3" />
                  <span>Bar</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStudyChartType('line')}
                  className={`px-2 py-1 rounded-md font-bold transition-all flex items-center gap-1 ${
                    studyChartType === 'line'
                      ? 'bg-[var(--primary)] text-white shadow-xs'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                  aria-label="View as Line Chart"
                >
                  <TrendingUp className="h-3 w-3" />
                  <span>Line</span>
                </button>
              </div>
            )}
          </div>

          {/* Active Chart or Clean Empty State */}
          {hasStudyActivity ? (
            <div className="w-full h-56 pt-2">
              <ResponsiveContainer width="100%" height="100%">
                {studyChartType === 'bar' ? (
                  <BarChart data={studyPoints} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.6} vertical={false} />
                    <XAxis
                      dataKey="label"
                      stroke="var(--text-muted)"
                      fontSize={11}
                      tickLine={false}
                      axisLine={{ stroke: 'var(--border)' }}
                    />
                    <YAxis
                      stroke="var(--text-muted)"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(val) => `${val}m`}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload as NormalizedStudyPoint;
                          return (
                            <div className="p-2.5 rounded-xl bg-slate-900/95 border border-slate-700 text-white text-xs font-mono shadow-xl backdrop-blur-md">
                              <p className="font-bold text-slate-300">{data.label} ({data.date})</p>
                              <p className="text-indigo-400 font-extrabold mt-1">
                                {data.minutes} {language === 'bn' ? 'মিনিট' : 'minutes'} ({data.hours}h)
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar
                      dataKey="minutes"
                      fill="var(--primary)"
                      radius={[6, 6, 0, 0]}
                      isAnimationActive={!prefersReducedMotion}
                      animationDuration={animationDuration}
                      animationEasing="ease-out"
                    />
                  </BarChart>
                ) : (
                  <LineChart data={studyPoints} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.6} vertical={false} />
                    <XAxis
                      dataKey="label"
                      stroke="var(--text-muted)"
                      fontSize={11}
                      tickLine={false}
                      axisLine={{ stroke: 'var(--border)' }}
                    />
                    <YAxis
                      stroke="var(--text-muted)"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(val) => `${val}m`}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload as NormalizedStudyPoint;
                          return (
                            <div className="p-2.5 rounded-xl bg-slate-900/95 border border-slate-700 text-white text-xs font-mono shadow-xl backdrop-blur-md">
                              <p className="font-bold text-slate-300">{data.label} ({data.date})</p>
                              <p className="text-indigo-400 font-extrabold mt-1">
                                {data.minutes} {language === 'bn' ? 'মিনিট' : 'minutes'} ({data.hours}h)
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="minutes"
                      stroke="var(--primary)"
                      strokeWidth={3}
                      dot={{ r: 4, fill: 'var(--primary)', stroke: 'var(--bg-elevated)', strokeWidth: 2 }}
                      activeDot={{ r: 6 }}
                      isAnimationActive={!prefersReducedMotion}
                      animationDuration={animationDuration}
                      animationEasing="ease-out"
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="h-56 rounded-xl border border-dashed border-[var(--border)] text-center flex flex-col items-center justify-center p-4 space-y-2">
              <Clock className="h-8 w-8 text-[var(--text-muted)] opacity-50" />
              <div>
                <p className="text-xs font-bold text-[var(--text)]">
                  {t.noStudyActivity[language]}
                </p>
                <p className="text-[11px] text-[var(--text-muted)] mt-0.5 max-w-xs">
                  {language === 'bn'
                    ? 'কোডিং প্লেগ্রাউন্ড বা টার্মিনালে প্র্যাকটিস শুরু করলে স্বয়ংক্রিয়ভাবে সক্রিয় সময় যুক্ত হবে।'
                    : 'Start coding in the playground or practicing in the terminal to accumulate genuine active learning time.'}
                </p>
              </div>
              {onNavigateToSyllabus && (
                <button
                  type="button"
                  onClick={onNavigateToSyllabus}
                  className="mt-1 px-3 py-1.5 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  {t.startStudying[language]}
                </button>
              )}
            </div>
          )}
        </div>

        {/* B. GIT COMMIT HISTORY (Real GitHub events + academy commits) */}
        <div
          id="git-activity-chart-card"
          className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col justify-between space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GitCommit className="h-4 w-4 text-emerald-500" />
              <h4 className="font-bold text-xs sm:text-sm text-[var(--text)] tracking-tight">
                {t.gitActivity[language]}
              </h4>
            </div>

            <div className="flex items-center gap-2">
              {isGitConnected && (
                <span className="text-[10px] font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  @{syncedProfile?.username || user.username}
                </span>
              )}
              {isGitConnected && gitSyncStatus !== 'syncing' && (
                <button
                  type="button"
                  onClick={() => syncGitCommits(syncedProfile?.username || user.username)}
                  className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-card)] transition-colors"
                  title={t.retrySync[language]}
                  aria-label="Refresh Git Commits"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Syncing State */}
          {gitSyncStatus === 'syncing' && (
            <div className="h-56 rounded-xl border border-[var(--border)] text-center flex flex-col items-center justify-center p-4 space-y-2">
              <RefreshCw className="h-6 w-6 text-emerald-500 animate-spin" />
              <p className="text-xs font-medium text-[var(--text-muted)]">
                {t.syncingGitHub[language]}
              </p>
            </div>
          )}

          {/* Error State */}
          {gitSyncStatus === 'error' && (
            <div className="h-56 rounded-xl border border-rose-500/20 bg-rose-500/5 text-center flex flex-col items-center justify-center p-4 space-y-2">
              <AlertCircle className="h-6 w-6 text-rose-500" />
              <p className="text-xs font-bold text-[var(--text)]">
                {t.gitHubSyncError[language]}
              </p>
              <button
                type="button"
                onClick={() => syncGitCommits(syncedProfile?.username || user.username)}
                className="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 text-xs font-bold transition-all"
              >
                {t.retrySync[language]}
              </button>
            </div>
          )}

          {/* Connected with Real Commits */}
          {isGitConnected && gitSyncStatus !== 'syncing' && gitSyncStatus !== 'error' && hasGitActivity && (
            <div className="w-full h-56 pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={gitPoints} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.6} vertical={false} />
                  <XAxis
                    dataKey="label"
                    stroke="var(--text-muted)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: 'var(--border)' }}
                  />
                  <YAxis
                    stroke="var(--text-muted)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    allowDecimals={false}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload as NormalizedGitPoint;
                        return (
                          <div className="p-2.5 rounded-xl bg-slate-900/95 border border-slate-700 text-white text-xs font-mono shadow-xl backdrop-blur-md">
                            <p className="font-bold text-slate-300">{data.label} ({data.date})</p>
                            <p className="text-emerald-400 font-extrabold mt-1">
                              {data.commits} {t.gitCommits[language]}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar
                    dataKey="commits"
                    fill="#10b981"
                    radius={[6, 6, 0, 0]}
                    isAnimationActive={!prefersReducedMotion}
                    animationDuration={animationDuration}
                    animationEasing="ease-out"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Connected but Zero Commits */}
          {isGitConnected && gitSyncStatus !== 'syncing' && gitSyncStatus !== 'error' && !hasGitActivity && (
            <div className="h-56 rounded-xl border border-dashed border-[var(--border)] text-center flex flex-col items-center justify-center p-4 space-y-2">
              <div className="h-10 w-10 rounded-full bg-slate-500/10 text-slate-400 flex items-center justify-center">
                <GitCommit className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[var(--text)]">
                  {t.noGitCommits[language]}
                </p>
                <p className="text-[11px] text-[var(--text-muted)] mt-0.5 max-w-xs">
                  {language === 'bn'
                    ? 'গত ৭ দিনে কোনো গিট কমিট পাওয়া যায়নি। টার্মিনালে কোড প্র্যাকটিস করুন।'
                    : 'No Git push events recorded in the past 7 days. Practice Git commands in the terminal.'}
                </p>
              </div>
            </div>
          )}

          {/* Disconnected GitHub State */}
          {!isGitConnected && gitSyncStatus !== 'syncing' && (
            <div className="h-56 rounded-xl border border-dashed border-indigo-500/20 bg-indigo-500/5 text-center flex flex-col items-center justify-center p-4 space-y-3">
              <div className="h-10 w-10 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <GitBranch className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[var(--text)]">
                  {t.connectGitHubPrompt[language]}
                </p>
                <p className="text-[11px] text-[var(--text-muted)] mt-0.5 max-w-xs">
                  {language === 'bn'
                    ? 'আপনার গিটহাব অ্যাকাউন্ট সিঙ্ক করে রিয়েল কমিট গ্রাফ ও প্রজেক্ট অগ্রগতি দেখুন।'
                    : 'Sync your GitHub account to visualize your genuine commit frequency over time.'}
                </p>
              </div>
              {onOpenAuth && (
                <button
                  type="button"
                  onClick={onOpenAuth}
                  className="px-3 py-1.5 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  {t.connectGitHub[language]}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 4. ACTIVITY SURFACE BREAKDOWN (WakaTime Model: Lessons, Playground, Terminal, Projects, Forum) */}
      <div id="waka-surface-breakdown-section" className="pt-4 border-t border-[var(--border)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-[var(--primary)]" />
            <h4 className="font-bold text-xs sm:text-sm text-[var(--text)] tracking-tight">
              {t.activeSurfaceBreakdown ? t.activeSurfaceBreakdown[language] || 'Activity Surface Breakdown' : 'Activity Surface Breakdown'}
            </h4>
          </div>
          {hasSurfaceBreakdown && (
            <span className="text-xs font-mono text-[var(--text-muted)]">
              {surfaceBreakdown.length} active learning areas
            </span>
          )}
        </div>

        {hasSurfaceBreakdown ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Donut Chart */}
            <div className="w-full h-48 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const item = payload[0].payload as SurfaceBreakdownItem;
                        return (
                          <div className="p-2.5 rounded-xl bg-slate-900/95 border border-slate-700 text-white text-xs font-mono shadow-xl backdrop-blur-md">
                            <p className="font-bold" style={{ color: item.color }}>{item.label}</p>
                            <p className="text-slate-200 mt-1">
                              {formatDuration(item.minutes, language)} ({item.percentage}%)
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Pie
                    data={surfaceBreakdown}
                    dataKey="minutes"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius={48}
                    outerRadius={76}
                    paddingAngle={3}
                    isAnimationActive={!prefersReducedMotion}
                    animationDuration={animationDuration}
                    animationEasing="ease-out"
                  >
                    {surfaceBreakdown.map((entry) => (
                      <Cell key={`surf-cell-${entry.surface}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Accessible Surface Breakdown List */}
            <div className="space-y-2">
              {surfaceBreakdown.map((item) => (
                <div
                  key={item.surface}
                  className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-between text-xs font-mono"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full inline-block"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-bold text-[var(--text)]">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--text-muted)] font-semibold">
                      {formatDuration(item.minutes, language)}
                    </span>
                    <span className="px-1.5 py-0.5 rounded-md bg-[var(--bg-card)] border border-[var(--border)] text-[10px] font-bold text-[var(--text)]">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-6 px-4 rounded-xl border border-dashed border-[var(--border)] text-center flex flex-col items-center justify-center space-y-2">
            <Layers className="h-6 w-6 text-[var(--text-muted)] opacity-40" />
            <p className="text-xs font-bold text-[var(--text)]">
              {t.noActivitySessions ? t.noActivitySessions[language] || 'No active learning sessions recorded yet.' : 'No active learning sessions recorded yet.'}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] max-w-sm">
              {language === 'bn'
                ? 'সিলেবাস, কোড স্যান্ডবক্স বা টার্মিনালে কাজ শুরু করলে আপনার সারফেস বণ্টন দৃশ্যমান হবে।'
                : 'Interact with lessons, run commands in the terminal, or edit code to track time across learning surfaces.'}
            </p>
            {onNavigateToSyllabus && (
              <button
                type="button"
                onClick={onNavigateToSyllabus}
                className="mt-1 px-3 py-1.5 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                {t.startStudying[language]}
              </button>
            )}
          </div>
        )}
      </div>

      {/* 5. RECENT LEARNING SESSIONS (Actual sessions recorded by WakaTime engine) */}
      <div id="waka-recent-sessions-section" className="pt-4 border-t border-[var(--border)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[var(--primary)]" />
            <h4 className="font-bold text-xs sm:text-sm text-[var(--text)] tracking-tight">
              {t.recentActivity ? t.recentActivity[language] || 'Recent Learning Sessions' : 'Recent Learning Sessions'}
            </h4>
          </div>
          {recentSessions.length > 0 && (
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              Showing last {recentSessions.length} sessions
            </span>
          )}
        </div>

        {recentSessions.length > 0 ? (
          <div className="space-y-2">
            {recentSessions.map((session, idx) => {
              const meta = SURFACE_COLORS[session.surface] || SURFACE_COLORS.OTHER;
              const durationMins = Math.max(1, Math.round(session.activeSeconds / 60));
              return (
                <div
                  key={`${session.id || 'sess'}-${idx}`}
                  className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-2 w-2 rounded-full inline-block"
                      style={{ backgroundColor: meta.color }}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[var(--text)]">{meta.label}</span>
                        {session.status === 'active' && (
                          <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[9px] font-bold animate-pulse">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                        {formatRelativeTime(session.startedAt)} · {session.eventCount} interactions
                      </p>
                    </div>
                  </div>

                  <div className="text-right font-mono font-bold text-[var(--text)]">
                    {session.activeSeconds < 60 ? `${session.activeSeconds}s` : formatDuration(durationMins, language)}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-4 px-3 rounded-xl border border-dashed border-[var(--border)] text-center text-xs text-[var(--text-muted)]">
            {t.noActivitySessions ? t.noActivitySessions[language] || 'No sessions yet.' : 'No sessions yet.'}
          </div>
        )}
      </div>

      {/* 6. PLANNED VS ACTUAL LEARNING SESSIONS */}
      <div id="planned-vs-actual-sessions-section" className="pt-4 border-t border-[var(--border)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-indigo-400" />
            <h4 className="font-bold text-xs sm:text-sm text-[var(--text)] tracking-tight">
              Planned vs Actual Learning Sessions
            </h4>
          </div>
          {onStartSession && (
            <button
              type="button"
              onClick={onStartSession}
              className="self-start sm:self-auto px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <CalendarDays className="h-3.5 w-3.5" />
              <span>Session Planner</span>
            </button>
          )}
        </div>

        {plannedMetrics.length > 0 ? (
          <div className="space-y-4">
            {/* Recharts BarChart comparing Planned vs Actual Minutes */}
            <div className="h-56 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={plannedMetrics} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} vertical={false} />
                  <XAxis
                    dataKey="date"
                    stroke="var(--text-muted)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: 'var(--border)' }}
                  />
                  <YAxis
                    stroke="var(--text-muted)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: 'var(--border)' }}
                    unit="m"
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const item = payload[0].payload as PlannedVsActualMetric;
                        return (
                          <div className="p-3 rounded-2xl bg-slate-900/95 border border-slate-700 text-white text-xs font-mono shadow-xl backdrop-blur-md">
                            <p className="font-bold text-slate-100">{item.sessionTitle}</p>
                            <p className="text-slate-400 text-[10px] mt-0.5">{label}</p>
                            <div className="mt-2 space-y-1">
                              <p className="text-indigo-300">Planned: {item.plannedMinutes} min</p>
                              <p className="text-emerald-400">Actual Active: {item.actualMinutes} min</p>
                              <p className="text-amber-400">Idle: {item.idleMinutes} min</p>
                              <p className="text-slate-300">Completion: {item.completionRate}%</p>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar
                    dataKey="plannedMinutes"
                    name="Planned"
                    fill="#6366f1"
                    opacity={0.35}
                    radius={[4, 4, 0, 0]}
                    isAnimationActive={!prefersReducedMotion}
                    animationDuration={animationDuration}
                  />
                  <Bar
                    dataKey="actualMinutes"
                    name="Actual Active"
                    fill="#10b981"
                    radius={[4, 4, 0, 0]}
                    isAnimationActive={!prefersReducedMotion}
                    animationDuration={animationDuration}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Legend & Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-between">
                <span className="text-[var(--text-muted)]">Avg Completion</span>
                <span className="font-bold text-emerald-400">
                  {Math.round(
                    plannedMetrics.reduce((acc, m) => acc + m.completionRate, 0) / plannedMetrics.length
                  )}%
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-between">
                <span className="text-[var(--text-muted)]">Total Planned</span>
                <span className="font-bold text-indigo-400">
                  {plannedMetrics.reduce((acc, m) => acc + m.plannedMinutes, 0)} min
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-between">
                <span className="text-[var(--text-muted)]">Total Active</span>
                <span className="font-bold text-emerald-400">
                  {plannedMetrics.reduce((acc, m) => acc + m.actualMinutes, 0)} min
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-6 px-4 rounded-xl border border-dashed border-[var(--border)] text-center flex flex-col items-center justify-center space-y-2">
            <Target className="h-6 w-6 text-[var(--text-muted)] opacity-40" />
            <p className="text-xs font-bold text-[var(--text)]">No planned learning sessions yet</p>
            <p className="text-[11px] text-[var(--text-muted)] max-w-sm">
              Plan custom sessions with targeted phases (Read, Practice, Recap) and smart transition alarms to track planned vs real active focus time.
            </p>
            {onStartSession && (
              <button
                type="button"
                onClick={onStartSession}
                className="mt-1 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <CalendarDays className="h-3.5 w-3.5" />
                <span>Open Session Planner</span>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
