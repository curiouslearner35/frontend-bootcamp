import React, { useState, useMemo, useEffect } from 'react';
import { UserProfile, Language } from '../types';
import {
  User,
  Shield,
  Flame,
  CheckCircle,
  GitBranch,
  Edit3,
  Save,
  LogOut,
  Sparkles,
  Award,
  Flag,
  Lightbulb,
  Code2,
  Rocket,
  Trophy,
  X,
  Calendar,
  Clock,
  Activity,
  Terminal,
  Layers,
  FolderGit2,
  Coins,
  History,
  Lock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { profileStorage } from '../services/storage';
import { activityTracker, PeriodActivityDay, PeriodActivitySummary, StudySession } from '../services/activityTracker';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { t } from '../i18n/translations';
import { gemEconomy } from '../services/gemEconomy';
import { progressionEngine } from '../services/progressionEngine';
import { GemWallet, XPProfile, PointProfile } from '../types/economy';
import { GitHubProfileSync } from '../components/GitHubProfileSync';
import { ProgressChart } from '../components/ProgressChart';

interface ProfilePageProps {
  user: UserProfile | null;
  language: Language;
  onUpdateUser: (updated: Partial<UserProfile>) => void;
  onOpenAuth: () => void;
  onSignOut: () => void;
  onNavigateToSyllabus?: () => void;
  onStartSession?: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  user,
  language,
  onUpdateUser,
  onOpenAuth,
  onSignOut,
  onNavigateToSyllabus,
  onStartSession
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [nameInput, setNameInput] = useState(user?.name || '');
  const [usernameInput, setUsernameInput] = useState(user?.username || '');
  const [trackInput, setTrackInput] = useState(user?.track || 'Frontend Track');
  const [bioInput, setBioInput] = useState(user?.bio || '');
  
  // Activity view range: 30 or 98 days (defaulting to 30 days)
  const [activityRange, setActivityRange] = useState<'30' | '98'>('30');
  const [hoveredDay, setHoveredDay] = useState<PeriodActivityDay | null>(null);
  const [selectedDay, setSelectedDay] = useState<PeriodActivityDay | null>(null);

  // Gem Wallet & Economy State
  const [wallet, setWallet] = useState<GemWallet>(() => {
    return gemEconomy.getWallet(user?.id || 'guest');
  });
  const [xpProfile, setXpProfile] = useState<XPProfile>(() => {
    return progressionEngine.getXPProfile(user?.id || 'guest', user?.xp || 3660);
  });
  const [pointProfile, setPointProfile] = useState<PointProfile>(() => {
    return progressionEngine.getPointProfile(user?.id || 'guest', user?.points || 150);
  });

  useEffect(() => {
    if (user) {
      setWallet(gemEconomy.getWallet(user.id));
      setXpProfile(progressionEngine.getXPProfile(user.id, user.xp || 3660));
      setPointProfile(progressionEngine.getPointProfile(user.id, user.points || 150));

      const unsubW = gemEconomy.subscribe((w) => {
        if (w.studentId === user.id) setWallet(w);
      });
      const unsubX = progressionEngine.subscribeXP((x) => {
        if (x.studentId === user.id) setXpProfile(x);
      });
      const unsubP = progressionEngine.subscribePoints((p) => {
        if (p.studentId === user.id) setPointProfile(p);
      });

      return () => {
        unsubW();
        unsubX();
        unsubP();
      };
    }
  }, [user?.id, user?.xp]);

  // Unauthenticated view
  if (!user) {
    return (
      <div className="py-12 text-center space-y-4 animate-fade-in max-w-lg mx-auto">
        <div className="mx-auto h-16 w-16 rounded-3xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shadow-md border border-indigo-500/20">
          <Shield className="h-8 w-8" />
        </div>

        <h2 className="text-xl font-bold text-[var(--text)] font-mono">
          Profile Access Restricted
        </h2>

        <p className="text-xs text-[var(--text-muted)] max-w-xs mx-auto leading-relaxed font-sans">
          Sign in with Google or GitHub to view your learner profile, track verified terminal skills, and sync project progress.
        </p>

        <button
          onClick={onOpenAuth}
          className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-mono font-bold text-xs shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <User className="h-4 w-4" />
          <span>Sign In with Google or GitHub</span>
        </button>
      </div>
    );
  }

  // Real genuine statistics from user profile & activity tracker (Zero mock fallback)
  const lessonCount = user.completedLessonIds.length;
  const projectCount = user.verifiedProjectIds.length;
  const studyHours = (user.totalStudyMinutes / 60).toFixed(1);
  const userTrack = user.track || 'Frontend Track';

  // Save profile edits
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updates = {
      name: nameInput,
      username: usernameInput,
      track: trackInput,
      bio: bioInput
    };
    profileStorage.updateProfile(updates);
    onUpdateUser(updates);
    setIsEditModalOpen(false);
  };

  // Real Organised Activity Data for selected period (30 or 98 days)
  const periodData: PeriodActivitySummary = useMemo(() => {
    const days = activityRange === '30' ? 30 : 98;
    return activityTracker.getPeriodActivityData(user.id, days);
  }, [user.id, activityRange, user.totalStudyMinutes, user.gitCommitsCount]);

  // Real Stack Mastery derived from completed lessons categorized in curriculum
  const stackMastery = useMemo(() => {
    const categories: Record<string, { label: string; total: number; done: number }> = {
      git: { label: 'Git & Terminal', total: 0, done: 0 },
      html: { label: 'HTML5', total: 0, done: 0 },
      css: { label: 'CSS3 / Tailwind', total: 0, done: 0 },
      javascript: { label: 'JavaScript ES6+', total: 0, done: 0 },
      react: { label: 'React.js', total: 0, done: 0 },
      node: { label: 'Full-Stack & APIs', total: 0, done: 0 }
    };

    for (const week of CURRICULUM_DATA) {
      for (const lesson of week.lessons) {
        const cat = (lesson.category || (week.isGitWeek ? 'git' : 'javascript')).toLowerCase();
        if (categories[cat]) {
          categories[cat].total++;
          if (user.completedLessonIds.includes(lesson.id)) {
            categories[cat].done++;
          }
        } else if (cat.includes('react')) {
          categories.react.total++;
          if (user.completedLessonIds.includes(lesson.id)) categories.react.done++;
        } else if (cat.includes('css') || cat.includes('style')) {
          categories.css.total++;
          if (user.completedLessonIds.includes(lesson.id)) categories.css.done++;
        } else if (cat.includes('node') || cat.includes('api') || cat.includes('server')) {
          categories.node.total++;
          if (user.completedLessonIds.includes(lesson.id)) categories.node.done++;
        } else {
          categories.git.total++;
          if (user.completedLessonIds.includes(lesson.id)) categories.git.done++;
        }
      }
    }

    return Object.entries(categories).map(([_, data]) => ({
      name: data.label,
      total: data.total,
      done: data.done,
      percent: data.total > 0 ? Math.round((data.done / data.total) * 100) : 0
    }));
  }, [user.completedLessonIds]);

  // Real achievements based on actual criteria
  const achievements = useMemo(() => {
    return [
      {
        id: 'ach_first_lesson',
        title: 'First Step in Git',
        subtitle: 'Complete your first Git terminal lesson',
        unlocked: lessonCount >= 1,
        icon: Terminal,
        iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
      },
      {
        id: 'ach_streak_3',
        title: '3-Day Momentum',
        subtitle: 'Maintain active study for 3 consecutive days',
        unlocked: user.streakDays >= 3,
        icon: Flame,
        iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
      },
      {
        id: 'ach_10_commits',
        title: 'Git Craftsman',
        subtitle: 'Execute 10+ verified terminal Git drills',
        unlocked: user.gitCommitsCount >= 10,
        icon: GitBranch,
        iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
      },
      {
        id: 'ach_first_project',
        title: 'Verified Builder',
        subtitle: 'Pass teacher code verification on a portfolio project',
        unlocked: projectCount >= 1,
        icon: Trophy,
        iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
      }
    ];
  }, [lessonCount, user.streakDays, user.gitCommitsCount, projectCount]);

  const activeInspectDay = selectedDay || hoveredDay;

  return (
    <div className="space-y-6 pb-20 animate-fade-in text-[var(--text)]">
      {/* 1. Profile Top Card */}
      <div className="rounded-3xl border border-slate-800/80 bg-[#121622] p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                  className="h-16 w-16 rounded-2xl object-cover border-2 border-slate-700 shadow-md"
                />
              ) : (
                <div className="h-16 w-16 rounded-2xl bg-[#1a2030] border-2 border-slate-700 text-amber-400 font-mono font-bold text-xl flex items-center justify-center">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-[#121622]" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl font-bold font-mono text-slate-100 tracking-tight">
                  {user.name}
                </h1>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-950/70 border border-indigo-500/40 text-indigo-300 font-semibold">
                  {userTrack}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 flex-wrap">
                <span>@{user.username || 'student'}</span>
                <span>•</span>
                <span className="capitalize">{user.provider} Auth</span>
                <span>•</span>
                <span>Joined {user.joinedDate}</span>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                <div className="px-2.5 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold flex items-center gap-1">
                  <span>💎 {wallet.balance} Gems</span>
                </div>
                <div className="px-2.5 py-0.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-cyan-400 font-mono text-xs font-bold flex items-center gap-1">
                  <span>Lv.{xpProfile.currentLevel} ({xpProfile.totalXP} XP)</span>
                </div>
                <div className="px-2.5 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold flex items-center gap-1">
                  <Flame className="h-3 w-3" />
                  <span>{user.streakDays}d Streak</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setNameInput(user.name);
                setUsernameInput(user.username || user.name);
                setTrackInput(userTrack);
                setBioInput(user.bio || '');
                setIsEditModalOpen(true);
              }}
              className="px-3.5 py-2 rounded-xl border border-slate-700/80 bg-[#1c2235] hover:bg-slate-800 transition-colors text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Edit3 className="h-3.5 w-3.5 text-amber-400" />
              <span>{t.editProfile[language]}</span>
            </button>

            <button
              onClick={onSignOut}
              className="px-3 py-2 rounded-xl border border-rose-900/40 bg-rose-950/30 text-rose-400 text-xs font-mono font-bold hover:bg-rose-900/40 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>{t.signOut[language]}</span>
            </button>
          </div>
        </div>

        {/* Bio */}
        {user.bio && (
          <div className="pt-3 border-t border-slate-800/80">
            <p className="text-xs text-slate-400 leading-relaxed font-sans">{user.bio}</p>
          </div>
        )}
      </div>

      {/* 2. 4 Core Stat Metric Cards Grid (Real Verified Numbers) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-2xl border border-slate-800/80 bg-[#121622] p-4 text-center space-y-1 shadow-md">
          <p className="text-2xl sm:text-3xl font-black font-mono text-cyan-400 tracking-tight">
            {lessonCount}
          </p>
          <p className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase">
            LESSONS
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-[#121622] p-4 text-center space-y-1 shadow-md">
          <p className="text-2xl sm:text-3xl font-black font-mono text-cyan-400 tracking-tight">
            {projectCount}
          </p>
          <p className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase">
            PROJECTS
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-[#121622] p-4 text-center space-y-1 shadow-md">
          <p className="text-2xl sm:text-3xl font-black font-mono text-cyan-400 tracking-tight">
            {studyHours}
          </p>
          <p className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase">
            HOURS
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-[#121622] p-4 text-center space-y-1 shadow-md">
          <p className="text-2xl sm:text-3xl font-black font-mono text-cyan-400 tracking-tight">
            {pointProfile.totalPoints}
          </p>
          <p className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase">
            POINTS
          </p>
        </div>
      </div>

      {/* GITHUB PROGRESS TRACKER Section */}
      <GitHubProfileSync
        user={user}
        language={language}
        onOpenAuth={onOpenAuth}
        onProfileSynced={(githubProfile) => {
          if (user && onUpdateUser) {
            onUpdateUser({
              username: githubProfile.username,
              avatar: githubProfile.avatarUrl || user.avatar,
              bio: githubProfile.bio || user.bio
            });
          }
        }}
      />

      {/* Learning Activity & Commit Matrix (ProgressChart: Learning Activity, Activity Surface Breakdown, Git Activity, Planned vs Actual Learning Sessions, Recent Learning Sessions) */}
      <ProgressChart
        user={user}
        language={language}
        onNavigateToSyllabus={onNavigateToSyllabus}
        onOpenAuth={onOpenAuth}
        onStartSession={onStartSession}
      />

      {/* 3. Gem Ledger & Economy Audit History Card (Loop 2) */}
      <div className="rounded-3xl border border-slate-800/80 bg-[#121622] p-5 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <Coins className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-sm text-slate-100 flex items-center gap-2">
                <span>GEMS LEDGER & TRANSACTION AUDIT</span>
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Immutable ledger with idempotent transaction logging
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-400">Total Earned: </span>
              <span className="text-emerald-400 font-bold">+{wallet.totalEarned} 💎</span>
            </div>
            <div>
              <span className="text-slate-400">Spent: </span>
              <span className="text-rose-400 font-bold">-{wallet.totalSpent} 💎</span>
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
          {wallet.transactions.length === 0 ? (
            <div className="p-4 text-center text-xs font-mono text-slate-500">
              No transactions recorded yet.
            </div>
          ) : (
            wallet.transactions.map((tx) => {
              const isCredit = tx.amount > 0;
              return (
                <div
                  key={tx.transactionId}
                  className="p-3 rounded-2xl bg-[#161b2a] border border-slate-800/80 flex items-center justify-between text-xs font-mono"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`h-7 w-7 rounded-xl flex items-center justify-center shrink-0 ${
                      isCredit ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      {isCredit ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-200">
                          {tx.type.replace(/_/g, ' ')}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          ({tx.referenceId})
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400">
                        {new Date(tx.createdAt).toLocaleString()} · Balance: {tx.balanceAfter} 💎
                      </p>
                    </div>
                  </div>

                  <span className={`font-bold font-mono ${isCredit ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isCredit ? `+${tx.amount}` : tx.amount} 💎
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Purchase Boundary Warning (Loop 16) */}
        <div className="p-3 rounded-2xl bg-[#0e121b] border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-2.5">
          <Lock className="h-4 w-4 text-cyan-400 shrink-0" />
          <span>
            <strong>Shop / Gem Top-Up:</strong> Real currency purchase tiers are disabled in this learning environment. Earn Gems by completing daily active goals, terminal drills, and course chapters!
          </span>
        </div>
      </div>

      {/* 4. Real Organized Activity Section: 30 DAYS / 98 DAYS */}
      <div className="space-y-3">
        {/* Section Header with Range Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
            <span className="text-cyan-400 font-extrabold">—</span>
            <span>ACTIVITY (LAST {activityRange} DAYS)</span>
          </h3>

          {/* 30 Days vs 98 Days Toggle Switch */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0e121b] border border-slate-800 w-fit">
            <button
              onClick={() => {
                setActivityRange('30');
                setSelectedDay(null);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activityRange === '30'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              LAST 30 DAYS
            </button>
            <button
              onClick={() => {
                setActivityRange('98');
                setSelectedDay(null);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activityRange === '98'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              LAST 98 DAYS
            </button>
          </div>
        </div>

        {/* Real Activity Dashboard Container */}
        <div className="rounded-3xl border border-slate-800/80 bg-[#121622] p-5 shadow-xl space-y-5">
          {/* Top Period Statistics Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-2xl bg-[#161b2a] border border-slate-800/60">
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase">Period Active Time</p>
              <p className="text-base sm:text-lg font-mono font-bold text-cyan-400">
                {periodData.totalActiveMinutes >= 60 ? `${periodData.totalActiveHours} hrs` : `${periodData.totalActiveMinutes} mins`}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase">Active Days</p>
              <p className="text-base sm:text-lg font-mono font-bold text-emerald-400">
                {periodData.activeDaysCount} / {periodData.periodDays} <span className="text-[11px] text-slate-400 font-normal">({periodData.consistencyRate}%)</span>
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase">Study Sessions</p>
              <p className="text-base sm:text-lg font-mono font-bold text-indigo-300">
                {periodData.totalSessions} logged
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase">Git Commits</p>
              <p className="text-base sm:text-lg font-mono font-bold text-amber-400">
                {periodData.totalCommits || user.gitCommitsCount} commits
              </p>
            </div>
          </div>

          {/* Tooltip Header / Selected Day Status */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-cyan-400" />
              <span>
                {activeInspectDay ? (
                  <span className="font-semibold text-cyan-300">
                    {activeInspectDay.displayDate} ({activeInspectDay.weekday}): {activeInspectDay.activeMinutes}m active · {activeInspectDay.sessionCount} sessions · {activeInspectDay.commits} commits
                  </span>
                ) : (
                  <span>Hover or click squares to inspect real daily activity</span>
                )}
              </span>
            </div>
            <span className="text-[11px] text-slate-500 hidden sm:inline font-mono">
              {activityRange === '30' ? '30 Days Window' : '98 Days Window'}
            </span>
          </div>

          {/* Activity Heatmap Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="grid grid-rows-7 grid-flow-col gap-1.5 w-fit">
              {periodData.days.map((day, idx) => {
                let bgClass = 'bg-[#181d2c] border-slate-800/80 hover:border-slate-600';
                if (day.level === 1) bgClass = 'bg-blue-900/60 border-blue-700/60 hover:border-blue-400';
                if (day.level === 2) bgClass = 'bg-blue-600 border-blue-500/70 hover:border-blue-300';
                if (day.level === 3) bgClass = 'bg-cyan-400 border-cyan-300 shadow-sm shadow-cyan-500/30 hover:border-white';

                const isSelected = selectedDay?.date === day.date;

                return (
                  <div
                    key={day.date + idx}
                    onClick={() => setSelectedDay(selectedDay?.date === day.date ? null : day)}
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    title={`${day.displayDate}: ${day.activeMinutes} min active, ${day.sessionCount} sessions`}
                    className={`h-5 w-5 rounded-md border ${bgClass} transition-all hover:scale-125 cursor-pointer ${
                      isSelected ? 'ring-2 ring-amber-400 ring-offset-1 ring-offset-[#121622] scale-110' : ''
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Real Stack Mastery Section */}
      <div className="space-y-3">
        <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <span className="text-cyan-400 font-extrabold">—</span>
          <span>STACK MASTERY</span>
        </h3>

        <div className="rounded-3xl border border-slate-800/80 bg-[#121622] p-5 shadow-md space-y-4">
          {stackMastery.map((tech) => (
            <div key={tech.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-200 font-semibold">{tech.name}</span>
                <span className="text-slate-400">
                  {tech.done}/{tech.total} ({tech.percent}%)
                </span>
              </div>

              <div className="h-2.5 w-full rounded-full bg-[#181e30] overflow-hidden p-0.5 border border-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 transition-all duration-1000 shadow-sm"
                  style={{ width: `${tech.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Real Achievements List Section */}
      <div className="space-y-3">
        <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <span className="text-cyan-400 font-extrabold">—</span>
          <span>ACHIEVEMENTS</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {achievements.map((ach) => {
            const Icon = ach.icon;
            return (
              <div
                key={ach.id}
                className={`rounded-2xl border p-4 flex items-center gap-4 transition-all shadow-md ${
                  ach.unlocked
                    ? 'border-slate-800 bg-[#121622] text-slate-100'
                    : 'border-slate-900 bg-[#0d101a] opacity-50'
                }`}
              >
                <div
                  className={`h-11 w-11 rounded-2xl border flex items-center justify-center shrink-0 ${ach.iconBg}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="font-mono font-bold text-sm text-slate-100 tracking-tight">
                      {ach.title}
                    </h4>
                    {ach.unlocked && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/40 text-emerald-400">
                        Unlocked
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 font-sans">
                    {ach.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Profile Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-[#121622] p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-mono font-bold text-base text-slate-100 flex items-center gap-2">
                <Edit3 className="h-4 w-4 text-amber-400" />
                <span>Edit Profile</span>
              </h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-[#181d2e] text-xs font-mono text-slate-100 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-[#181d2e] text-xs font-mono text-slate-100 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 mb-1">
                  Track
                </label>
                <input
                  type="text"
                  value={trackInput}
                  onChange={(e) => setTrackInput(e.target.value)}
                  placeholder="e.g. Frontend Track, Full-Stack Track"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-[#181d2e] text-xs font-mono text-slate-100 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 mb-1">
                  Bio
                </label>
                <textarea
                  rows={3}
                  value={bioInput}
                  onChange={(e) => setBioInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-[#181d2e] text-xs font-sans text-slate-100 focus:outline-none focus:border-amber-400 resize-none"
                  placeholder="Tell others about your coding journey..."
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-700 text-xs font-mono font-bold text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-mono font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Save className="h-3.5 w-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
