import React, { useState, useMemo, useEffect } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { Project, Language, UserProfile } from '../types';
import { FolderGit2, Lock, Unlock, ShieldAlert, CheckCircle2, ArrowRight, ExternalLink, ArrowLeft, Clock, Search, Layers, Sparkles, User } from 'lucide-react';
import { TeacherVerificationModal } from '../components/TeacherVerificationModal';
import { t } from '../i18n/translations';
import { activityTracker } from '../services/activityTracker';
import { accessPolicy } from '../services/accessPolicy';
import { gemEconomy } from '../services/gemEconomy';
import { REWARD_CONFIG } from '../config/rewards';
import { GemWallet } from '../types/economy';

interface ProjectsPageProps {
  user: UserProfile | null;
  language: Language;
  onSubmitVerification: (projectId: string, repoUrl: string, notes: string) => void;
  onNavigateToSyllabus: () => void;
  onOpenAuth?: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  user,
  language,
  onSubmitVerification,
  onNavigateToSyllabus,
  onOpenAuth
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [verifyingProject, setVerifyingProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStackFilter, setActiveStackFilter] = useState<string>('ALL');
  const [unlockError, setUnlockError] = useState<string | null>(null);

  const [wallet, setWallet] = useState<GemWallet>(() =>
    gemEconomy.getWallet(user?.id || 'guest')
  );

  useEffect(() => {
    const unsub = gemEconomy.subscribe((w) => {
      if (w.studentId === (user?.id || 'guest')) {
        setWallet(w);
      }
    });
    setWallet(gemEconomy.getWallet(user?.id || 'guest'));
    return () => unsub();
  }, [user?.id]);

  const completedLessonIds = user ? user.completedLessonIds : ['git-lesson-1'];
  const verifiedProjectIds = user ? user.verifiedProjectIds : [];
  const submittedVerificationIds = user ? user.submittedVerificationIds : [];

  const checkPrerequisitesMet = (project: Project) => {
    return project.prerequisites.requiredLessonIds.every((id) =>
      completedLessonIds.includes(id)
    );
  };

  const isProjectVerified = (projectId: string) => verifiedProjectIds.includes(projectId);
  const isProjectSubmitted = (projectId: string) => submittedVerificationIds.includes(projectId);

  const isProjectUnlocked = (project: Project) => {
    if (isProjectVerified(project.id) || isProjectSubmitted(project.id)) return true;
    if (!user) return false;
    return gemEconomy.isProjectUnlocked(user.id, project.id);
  };

  const handleUnlockProject = (project: Project) => {
    if (!user) {
      onOpenAuth?.();
      return;
    }

    const res = accessPolicy.unlockProject(user.id, project.id);
    if (res.success) {
      setUnlockError(null);
      setWallet(res.wallet);
    } else {
      setUnlockError(
        res.error ||
          (language === 'bn'
            ? 'প্রজেক্ট আনলক করার জন্য পর্যাপ্ত জেমস নেই।'
            : 'Insufficient Gems to unlock project.')
      );
    }
  };

  useEffect(() => {
    if (selectedProject) {
      activityTracker.setContext('PROJECT', selectedProject.id);
      activityTracker.recordActivity('PROJECT', 'PROJECT_OPEN', selectedProject.id);
    } else {
      activityTracker.setContext('PROJECT');
    }
  }, [selectedProject?.id]);

  // Filter projects by search query and category/stack
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesSearch =
        project.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.stack && project.stack.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (project.projectNumber && project.projectNumber.includes(searchQuery));

      if (activeStackFilter === 'ALL') return matchesSearch;
      if (activeStackFilter === 'HTML') return matchesSearch && project.stack?.includes('HTML');
      if (activeStackFilter === 'CSS') return matchesSearch && project.stack?.includes('CSS');
      if (activeStackFilter === 'JS') return matchesSearch && (project.stack?.includes('JS') || project.stack === 'JS');
      if (activeStackFilter === 'API') return matchesSearch && (project.stack?.includes('API') || project.category.includes('API'));
      if (activeStackFilter === 'FULLSTACK') return matchesSearch && (project.stack?.includes('FULLSTACK') || project.stack?.includes('NODE'));

      return matchesSearch;
    });
  }, [searchQuery, activeStackFilter, language]);

  if (selectedProject) {
    const hasPrereqs = checkPrerequisitesMet(selectedProject);
    const isVerified = isProjectVerified(selectedProject.id);
    const isSubmitted = isProjectSubmitted(selectedProject.id);
    const isUnlocked = isProjectUnlocked(selectedProject);

    return (
      <div className="space-y-4 pb-20 animate-fade-in max-w-4xl mx-auto">
        <button
          onClick={() => {
            setSelectedProject(null);
            setUnlockError(null);
          }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-xs font-semibold text-[var(--text)] hover:bg-[var(--bg-elevated)] transition-colors shadow-sm cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{language === 'bn' ? 'প্রজেক্ট তালিকায় ফিরে যান' : 'Back to Projects'}</span>
        </button>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-xl space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono font-bold text-[11px] uppercase tracking-wider">
                {selectedProject.stack || selectedProject.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)] font-mono text-[10px] uppercase">
                {selectedProject.difficulty}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
              <Clock className="h-3.5 w-3.5 text-indigo-400" />
              <span>{language === 'bn' ? `আনুমানিক ${selectedProject.estimatedHours} ঘণ্টা` : `Est. ${selectedProject.estimatedHours} hours`}</span>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[var(--text)] tracking-tight font-mono">
              {selectedProject.title[language]}
            </h1>
            <p className="text-xs font-semibold text-amber-400 mt-1">
              {selectedProject.tagline[language]}
            </p>
          </div>

          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            {selectedProject.description[language]}
          </p>

          {/* Unlocking / Prerequisites Status Banner */}
          {!hasPrereqs ? (
            <div className="p-4 rounded-2xl border bg-amber-950/30 border-amber-800/40 text-amber-300 flex items-start gap-3.5">
              <Lock className="h-5 w-5 shrink-0 mt-0.5 text-amber-400" />
              <div className="text-xs font-mono">
                <h4 className="font-bold">{t.projectPrerequisites[language]}</h4>
                <p className="mt-1 opacity-90 leading-normal">
                  {language === 'bn'
                    ? 'এই প্রজেক্টটি শুরু করার আগে সিলেবাসের প্রয়োজনীয় লেসন সম্পন্ন করতে হবে।'
                    : 'You must complete required Git & HTML/CSS/JS lessons in the Syllabus before working on this project.'}
                </p>
              </div>
            </div>
          ) : !isUnlocked && !isVerified ? (
            /* Gem Unlock Requirement Gate (2 Gems) */
            <div className="rounded-2xl border border-cyan-500/30 bg-[#121622] p-6 text-center space-y-3 shadow-lg">
              <div className="mx-auto h-12 w-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                <Lock className="h-6 w-6" />
              </div>
              <div className="space-y-1 max-w-md mx-auto">
                <h4 className="font-mono font-bold text-sm text-slate-100">
                  {t.projectLocked[language]}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {!user
                    ? t.loginToUnlockProject[language] + ' ' + t.welcomeBonusNotice[language]
                    : wallet.balance >= (REWARD_CONFIG.projectStartCostGems || 2)
                    ? language === 'bn'
                      ? `২টি জেমস দিয়ে এই প্রজেক্টটি আনলক করুন। আপনার বর্তমান ব্যালেন্স: ${wallet.balance} 💎 জেমস।`
                      : `Unlock this project for 2 Gems. Your available balance is ${wallet.balance} 💎 Gems.`
                    : language === 'bn'
                      ? `আপনার অ্যাকাউন্টে পর্যাপ্ত জেমস নেই। প্রয়োজন: ২ 💎, বর্তমান ব্যালেন্স: ${wallet.balance} 💎 জেমস।`
                      : `Insufficient Gems. Required: 2 💎 Gems, available balance: ${wallet.balance} 💎 Gems.`}
                </p>
              </div>

              {unlockError && (
                <div className="max-w-md mx-auto p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                  {unlockError}
                </div>
              )}

              <div className="pt-2 flex justify-center">
                {!user ? (
                  onOpenAuth && (
                    <button
                      onClick={onOpenAuth}
                      className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                    >
                      <User className="h-4 w-4" />
                      <span>{language === 'bn' ? 'সাইন ইন করুন ও ৫০টি ফ্রি জেমস পান' : 'Sign In & Get 50 Free Gems'}</span>
                    </button>
                  )
                ) : wallet.balance >= (REWARD_CONFIG.projectStartCostGems || 2) ? (
                  <button
                    onClick={() => handleUnlockProject(selectedProject)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono font-bold text-xs shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Unlock className="h-4 w-4" />
                    <span>{t.unlockProject[language]}</span>
                  </button>
                ) : (
                  <button
                    onClick={onNavigateToSyllabus}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{language === 'bn' ? 'লেসন পড়ে জেমস অর্জন করুন' : 'Complete Lessons to Earn Gems'}</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div
              className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
                isVerified
                  ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-300'
                  : 'bg-indigo-950/30 border-indigo-800/40 text-indigo-300'
              }`}
            >
              {isVerified ? (
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-emerald-400" />
              ) : (
                <Unlock className="h-5 w-5 shrink-0 mt-0.5 text-indigo-400" />
              )}

              <div className="text-xs font-mono">
                <h4 className="font-bold">
                  {isVerified
                    ? t.verified[language]
                    : isSubmitted
                    ? t.pendingVerification[language]
                    : language === 'bn'
                    ? 'প্রজেক্ট আনলকড — বাস্তবায়নের জন্য প্রস্তুত'
                    : 'Project Unlocked — Ready for Implementation'}
                </h4>
                <p className="mt-1 opacity-90 leading-normal">
                  {isVerified
                    ? (language === 'bn' ? 'অভিনন্দন! এই প্রজেক্টটি শিক্ষক দ্বারা সফলভাবে যাচাইকৃত হয়েছে।' : 'Congratulations! This project is verified by your mentor.')
                    : (language === 'bn' ? 'প্রজেক্টের টাস্কগুলো সম্পন্ন করুন এবং শিক্ষকের অনুমোদনের জন্য আপনার গিটহাব রিপোজিটরি লিংক জমা দিন।' : 'Complete project tasks and submit your GitHub repo for mentor verification.')}
                </p>
              </div>
            </div>
          )}

          {/* Project Deliverable Checklist */}
          <div className="space-y-2.5 pt-2">
            <h3 className="font-bold text-xs text-[var(--text)] uppercase tracking-wider font-mono flex items-center gap-2">
              <Layers className="h-3.5 w-3.5 text-amber-400" />
              <span>{language === 'bn' ? 'প্রজেক্ট ডেলিভারেবল ও উদ্দেশ্যসমূহ' : 'Project Deliverable Objectives'}</span>
            </h3>
            <div className="space-y-2">
              {selectedProject.tasks.map((task, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs text-[var(--text)] font-mono flex items-center gap-3"
                >
                  <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center gap-3">
            <a
              href={selectedProject.starterRepositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] hover:bg-[var(--border)] transition-colors text-xs font-mono font-bold text-[var(--text)] flex items-center gap-2"
            >
              <span>{language === 'bn' ? 'স্টার্টার রিপোজিটরি' : 'Starter Repository'}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            {isUnlocked && !isVerified && (
              <button
                onClick={() => setVerifyingProject(selectedProject)}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-mono font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShieldAlert className="h-4 w-4" />
                <span>{t.submitForVerification[language]}</span>
              </button>
            )}

            {!hasPrereqs && (
              <button
                onClick={onNavigateToSyllabus}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs shadow-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>{language === 'bn' ? 'প্রয়োজনীয় লেসনে যান' : 'Go to Required Lessons'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <TeacherVerificationModal
          project={verifyingProject}
          isOpen={verifyingProject !== null}
          onClose={() => setVerifyingProject(null)}
          onSubmitVerification={onSubmitVerification}
          language={language}
        />
      </div>
    );
  }

  return (
    <div className="space-y-5 pb-20 animate-fade-in max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs uppercase tracking-widest">
          <span className="h-1.5 w-4 bg-amber-400 rounded-full inline-block" />
          <span>30+ PROJECTS</span>
        </div>

        <h1 className="text-2xl font-bold text-[var(--text)] tracking-tight">
          {language === 'bn' ? 'বাস্তবধর্মী সফটওয়্যার পোর্টফোলিও তৈরি করুন' : 'Build Real-World Software Portfolio'}
        </h1>

        <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-2xl font-sans">
          {language === 'bn'
            ? 'HTML/CSS লেআউট থেকে ফুল-স্ট্যাক এপিআই ইঞ্জিন পর্যন্ত ৩০টিরও বেশি হ্যান্ডস-অন কোডিং ল্যাব। প্রতি প্রজেক্টে ২ 💎 প্রয়োজন। সম্পন্ন করে শিক্ষক ভেরিফিকেশন গ্রহণ করুন।'
            : 'Master web development from HTML/CSS layouts to full-stack API engines with 30+ hands-on coding labs. 2 💎 Gems per project. Complete prerequisite lessons and unlock mentor verification.'}
        </p>

        {/* Search & Filter Controls */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'bn' ? '৩০+ প্রজেক্ট খুঁজুন (যেমন: Portfolio, 07)...' : 'Search 30+ projects (e.g. Portfolio, Weather, 07)...'}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-amber-400 transition-colors font-mono"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-[11px] font-mono">
            {['ALL', 'HTML', 'CSS', 'JS', 'API', 'FULLSTACK'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveStackFilter(filter)}
                className={`px-3 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeStackFilter === filter
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text)] border border-transparent'
                }`}
              >
                {filter === 'ALL' ? (language === 'bn' ? 'সব (৩০+)' : 'All (30+)') : filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Cards List */}
      <div className="grid grid-cols-1 gap-3">
        {filteredProjects.map((project) => {
          const hasPrereqs = checkPrerequisitesMet(project);
          const isVerified = isProjectVerified(project.id);
          const isSubmitted = isProjectSubmitted(project.id);
          const isUnlocked = isProjectUnlocked(project);

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="rounded-2xl border border-slate-800 bg-[#121721] p-4.5 hover:border-amber-500/60 transition-all cursor-pointer shadow-md group space-y-2.5"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-mono font-bold text-base text-slate-100 group-hover:text-amber-400 transition-colors tracking-tight flex items-center gap-2">
                  <span>{project.title[language]}</span>
                </h3>

                {/* Stack Badge Pill matching reference UI */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full bg-[#1e2536] border border-slate-700/60 text-indigo-300 font-mono text-[11px] font-semibold tracking-wide">
                    {project.stack || project.category}
                  </span>

                  <div className="shrink-0">
                    {isVerified ? (
                      <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400" title="Teacher Verified">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                    ) : isUnlocked ? (
                      <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400" title="Unlocked">
                        <Unlock className="h-4 w-4" />
                      </div>
                    ) : (
                      <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1 font-mono text-[10px] font-bold px-2" title="2 Gems Required">
                        <Lock className="h-3 w-3" />
                        <span>2 💎</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Stack Details text */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>
                  {language === 'bn' ? 'স্ট্যাক:' : 'Stack:'} <span className="text-slate-300 font-medium">{project.stack || project.category}</span>
                </span>

                <span className="text-[11px] text-amber-400/80 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  {language === 'bn' ? 'বিস্তারিত দেখুন' : 'View Specs'} <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          );
        })}

        {filteredProjects.length === 0 && (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 text-center space-y-2">
            <FolderGit2 className="h-8 w-8 text-[var(--text-muted)] mx-auto" />
            <p className="text-xs font-mono text-[var(--text-muted)]">
              {language === 'bn'
                ? `"${searchQuery}" এর সাথে মিলে এমন কোনো প্রজেক্ট পাওয়া যায়নি।`
                : `No projects found matching "${searchQuery}". Try selecting another filter tag.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
