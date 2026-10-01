import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Lesson, Week, Language, UserProfile } from '../types';
import { homeworkService, HomeworkCertificate } from '../services/homeworkService';
import { workspaceManager } from '../services/workspaceManager';
import { getGitHubConnectionStatus, startGitHubAuth } from '../services/githubService';
import {
  HomeworkSubmission,
  AttachedFileMeta,
  JournalReflectionData,
  DeploymentState,
  resolveGradeFromMarks,
  GithubConnectionStatus
} from '../types/gitWorkspace';
import { CertificateModal } from './CertificateModal';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Code2,
  Copy,
  ExternalLink,
  FileCode,
  FileText,
  GitBranch,
  Github,
  Globe,
  Lock,
  Plus,
  RefreshCw,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal as TerminalIcon,
  Trash2,
  TrendingUp,
  Upload,
  UserCheck,
  Zap,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  FolderGit2
} from 'lucide-react';

interface MentorDashboardProps {
  lesson: Lesson;
  week: Week;
  user: UserProfile | null;
  language: Language;
  isSectionProgressPassed: boolean;
  isTheoryDone?: boolean;
  isSandboxDone?: boolean;
  isTerminalDone?: boolean;
  onOpenAuth?: () => void;
}

export const MentorDashboard: React.FC<MentorDashboardProps> = ({
  lesson,
  week,
  user,
  language,
  isSectionProgressPassed,
  isTheoryDone = false,
  isSandboxDone = false,
  isTerminalDone = false,
  onOpenAuth
}) => {
  // 1. Resolve Workspace, Fork & Lesson Branch
  const workspaceData = useMemo(() => {
    if (!user) return null;
    const ws = workspaceManager.getOrCreateStudentWorkspace(user);
    const { branchMeta } = workspaceManager.getOrCreateLessonBranch(user, week, lesson);
    return { workspace: ws, branchMeta };
  }, [user, week, lesson]);

  const [submission, setSubmission] = useState<HomeworkSubmission | null>(null);
  const [certificate, setCertificate] = useState<HomeworkCertificate | null>(null);

  // Form Fields
  const [codeSolution, setCodeSolution] = useState('');
  const [attachedFiles, setAttachedFiles] = useState<AttachedFileMeta[]>([]);
  const [notes, setNotes] = useState('');
  const [liveDemoUrl, setLiveDemoUrl] = useState('');
  const [deploymentState, setDeploymentState] = useState<DeploymentState>('READY');
  const [isDeploying, setIsDeploying] = useState(false);

  // 100DaysOfCode Structured Journal Fields
  const [todayProgress, setTodayProgress] = useState('');
  const [practice, setPractice] = useState('');
  const [challenges, setChallenges] = useState('');
  const [breakthrough, setBreakthrough] = useState('');
  const [keyTakeaways, setKeyTakeaways] = useState('');
  const [resourcesText, setResourcesText] = useState('');
  const [nextStep, setNextStep] = useState('');

  // Autosave UI status
  const [autosaveStatus, setAutosaveStatus] = useState<'idle' | 'saving' | 'saved_local' | 'synced'>('idle');
  const autosaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Submission UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [githubStatus, setGithubStatus] = useState<GithubConnectionStatus>('CONNECTED');

  // Check GitHub Connection Status on Mount
  useEffect(() => {
    getGitHubConnectionStatus().then((res) => {
      setGithubStatus(res.status);
    });
  }, []);

  const handleConnectGitHub = async () => {
    const res = await startGitHubAuth(window.location.pathname);
    if (res.authorizationUrl) {
      window.location.href = res.authorizationUrl;
    } else if (res.error) {
      setErrorMessage(res.error);
    }
  };

  // Progressive Disclosure Expandables
  const [showJournalPreview, setShowJournalPreview] = useState(false);
  const [showLogMdPreview, setShowLogMdPreview] = useState(false);
  const [showAuditLogs, setShowAuditLogs] = useState(false);

  // Teacher / Instructor Review Suite State
  const [isInstructorSuiteOpen, setIsInstructorSuiteOpen] = useState(false);
  const [reviewAction, setReviewAction] = useState<'APPROVE' | 'REVISE' | 'REJECT'>('APPROVE');
  const [mentorMarks, setMentorMarks] = useState<number>(92);
  const [mentorFeedback, setMentorFeedback] = useState(
    'Outstanding work! The solution code is modular, properly structured with clean commit logs on GitHub Pages, and meets all curriculum requirements.'
  );
  const [mentorName, setMentorName] = useState('Senior Academy Instructor');

  // Copy feedback state
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Read initial submission & state from storage
  useEffect(() => {
    if (!user) return;
    const existing = homeworkService.getSubmission(lesson.id, user.id);
    if (existing) {
      setSubmission(existing);
      setCodeSolution(existing.codeSolution || '');
      setAttachedFiles(existing.attachedFiles || []);
      setNotes(existing.notes || '');
      setLiveDemoUrl(existing.liveDemoUrl || '');
      setDeploymentState(existing.deploymentState || 'READY');

      if (existing.journal) {
        setTodayProgress(existing.journal.todayProgress || '');
        setPractice(existing.journal.practice || '');
        setChallenges(existing.journal.challenges || '');
        setBreakthrough(existing.journal.breakthrough || '');
        setKeyTakeaways(existing.journal.keyTakeaways || '');
        setResourcesText(existing.journal.resources?.join(', ') || '');
        setNextStep(existing.journal.nextStep || '');
      }

      if (existing.certificateId) {
        const cert = homeworkService.getCertificateById(existing.certificateId);
        setCertificate(cert);
      }
    } else if (workspaceData) {
      const defaultDemo = `https://${workspaceData.workspace.studentSlug}.github.io/frontend-bootcamp/${workspaceData.branchMeta.branchName}/`;
      setLiveDemoUrl(defaultDemo);
    }
  }, [lesson.id, user?.id, workspaceData]);

  // Debounced Autosave Trigger
  const triggerDebouncedAutosave = () => {
    if (!user) return;
    setAutosaveStatus('saving');

    if (autosaveTimeoutRef.current) {
      clearTimeout(autosaveTimeoutRef.current);
    }

    autosaveTimeoutRef.current = setTimeout(() => {
      const journalData: JournalReflectionData = {
        todayProgress,
        practice,
        challenges,
        breakthrough,
        keyTakeaways,
        resources: resourcesText.split(',').map((s) => s.trim()).filter(Boolean),
        nextStep
      };

      const { draft, status } = homeworkService.autosaveDraft({
        user,
        lesson,
        week,
        codeSolution,
        attachedFiles,
        notes,
        journal: journalData,
        liveDemoUrl,
        deploymentState,
        isTheoryDone,
        isSandboxDone,
        isTerminalDone,
        gitCommits: workspaceData?.branchMeta.commitsCount || 1,
        activeSeconds: 960
      });

      setSubmission(draft);
      setAutosaveStatus(status);
    }, 750);
  };

  // Handle File Uploads
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      const newAttached: AttachedFileMeta[] = [...attachedFiles];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const processed = await homeworkService.processUploadedFile(file);
        // Avoid duplicate file names
        const existingIdx = newAttached.findIndex((f) => f.fileName === processed.fileName);
        if (existingIdx >= 0) {
          newAttached[existingIdx] = processed;
        } else {
          newAttached.push(processed);
        }
      }
      setAttachedFiles(newAttached);
      triggerDebouncedAutosave();
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to upload file');
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveFile = (fileId: string) => {
    const filtered = attachedFiles.filter((f) => f.id !== fileId);
    setAttachedFiles(filtered);
    triggerDebouncedAutosave();
  };

  // Handle Deploy to GitHub Pages
  const handleDeployToGitHubPages = async () => {
    if (!user) {
      onOpenAuth?.();
      return;
    }

    setIsDeploying(true);
    setDeploymentState('DEPLOY_REQUESTED');

    try {
      const deployMeta = await workspaceManager.triggerGitHubPagesDeployment(user, lesson, week);
      setLiveDemoUrl(deployMeta.publishedUrl);

      setTimeout(() => {
        setDeploymentState('BUILDING');
      }, 700);

      setTimeout(() => {
        setDeploymentState('DEPLOYED');
        setIsDeploying(false);
      }, 2300);
    } catch {
      setDeploymentState('FAILED');
      setIsDeploying(false);
    }
  };

  // Submit Homework for Review
  const handleSubmitHomework = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      onOpenAuth?.();
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const journalData: JournalReflectionData = {
      todayProgress,
      practice,
      challenges,
      breakthrough,
      keyTakeaways,
      resources: resourcesText.split(',').map((s) => s.trim()).filter(Boolean),
      nextStep
    };

    const result = await homeworkService.submitHomework({
      user,
      lesson,
      week,
      codeSolution,
      attachedFiles,
      notes,
      journal: journalData,
      liveDemoUrl,
      isTheoryDone,
      isSandboxDone,
      isTerminalDone,
      gitCommits: workspaceData?.branchMeta.commitsCount || 1,
      activeSeconds: 1260
    });

    setIsSubmitting(false);

    if (result.error) {
      setErrorMessage(result.error);
    } else {
      setSubmission(result.submission);
    }
  };

  // Teacher / Mentor Evaluates Homework
  const handleTeacherReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!submission) return;

    try {
      const { submission: updated, certificate: newCert } = await homeworkService.reviewHomework({
        submissionId: submission.id,
        action: reviewAction,
        marks: mentorMarks,
        feedback: mentorFeedback,
        mentorName,
        labels: ['curious-bootcamp', `lesson-${lesson.order}`]
      });

      setSubmission(updated);
      if (newCert) {
        setCertificate(newCert);
      }
      setIsInstructorSuiteOpen(false);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Failed to submit review');
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const currentMarks = submission?.marks || 0;
  const isApproved = submission?.state === 'APPROVED';
  const isUnderReview = submission?.state === 'SUBMITTED' || submission?.state === 'UNDER_REVIEW';
  const isRevisionNeeded = submission?.state === 'REVISION_REQUIRED';
  const eligibilityPercent = Math.min(100, Math.round((currentMarks / 100) * 100));

  // Generated Markdown Journal
  const generatedJournal = useMemo(() => {
    if (!user) return '';
    return workspaceManager.generateLessonJournal({
      user,
      lesson,
      week,
      reflection: {
        todayProgress,
        practice,
        challenges,
        breakthrough,
        keyTakeaways,
        resources: resourcesText.split(',').map((s) => s.trim()).filter(Boolean),
        nextStep
      },
      commitSha: submission?.latestCommitSha || workspaceData?.branchMeta.latestCommitSha,
      liveDemoUrl,
      learningTime: { theoryMinutes: 15, practiceMinutes: 20, terminalMinutes: 10, totalMinutes: 45 }
    });
  }, [user, lesson, week, todayProgress, practice, challenges, breakthrough, keyTakeaways, resourcesText, nextStep, submission?.latestCommitSha, workspaceData, liveDemoUrl]);

  return (
    <section className="p-5 sm:p-7 rounded-3xl bg-[var(--bg-card)] border border-[var(--border)] space-y-6 shadow-sm animate-scale-in text-[var(--text)]">
      {/* 1. Header Bar with Real-Time Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-amber-500/20 via-indigo-500/20 to-emerald-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
            <Award className="h-6 w-6 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm sm:text-base font-extrabold font-mono text-[var(--text)] tracking-tight">
                {language === 'bn' ? 'মেন্টর ড্যাশবোর্ড ও হোমওয়ার্ক সাবমিশন' : 'Mentor Review Dashboard & Homework'}
              </h3>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                GitHub Fork v2
              </span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)] font-medium">
              {language === 'bn'
                ? 'একক কারিকুলাম রিপোজিটরি, ফাইল আপলোড, ১০০-ডেইজ জার্নাল ও মার্কস ভিত্তিক সার্টিফিকেট'
                : 'Single curriculum fork, multi-file uploads, 100DaysOfCode journal & GitHub Pages'}
            </p>
          </div>
        </div>

        {/* Dynamic Status Badge */}
        <div>
          {!isSectionProgressPassed ? (
            <span className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 font-mono text-xs font-bold flex items-center gap-1.5 shadow-2xs">
              <Lock className="h-3.5 w-3.5" />
              <span>{language === 'bn' ? 'ড্যাশবোর্ড লকড' : 'Dashboard Locked'}</span>
            </span>
          ) : isApproved ? (
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-bold flex items-center gap-1.5 shadow-2xs animate-fade-in">
              <Award className="h-4 w-4 text-amber-400" />
              <span>
                {language === 'bn' ? `অনুমোদিত ও সার্টিফাইড (${currentMarks}/১০০)` : `Approved & Certified (${currentMarks}/100 Marks)`}
              </span>
            </span>
          ) : isRevisionNeeded ? (
            <span className="px-3.5 py-1.5 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/30 font-mono text-xs font-bold flex items-center gap-1.5 shadow-2xs">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>{language === 'bn' ? 'সংশোধন প্রয়োজন' : 'Revision Required'}</span>
            </span>
          ) : isUnderReview ? (
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 font-mono text-xs font-bold flex items-center gap-1.5 shadow-2xs animate-pulse">
              <Clock className="h-3.5 w-3.5" />
              <span>{language === 'bn' ? 'মেন্টর মূল্যায়নাধীন' : 'Under Mentor Evaluation'}</span>
            </span>
          ) : (
            <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 font-mono text-xs font-bold flex items-center gap-1.5 shadow-2xs">
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              <span>{language === 'bn' ? 'জমা দেওয়ার জন্য প্রস্তুত' : 'Ready to Submit'}</span>
            </span>
          )}
        </div>
      </div>

      {/* GitHub Not Connected Banner */}
      {githubStatus === 'GITHUB_NOT_CONNECTED' && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <Github className="h-5 w-5 text-amber-400 shrink-0" />
            <div>
              <span className="font-bold text-amber-300 block">
                {language === 'bn' ? 'গিটহাব একাউন্ট কানেক্ট করুন' : 'Connect Your GitHub Account'}
              </span>
              <span className="text-slate-300 text-[11px] font-sans">
                {language === 'bn'
                  ? 'কারিকুলাম রিপোজিটরি ফর্ক এবং হোমওয়ার্ক সাবমিশনের জন্য গিটহাব অথরাইজেশন প্রয়োজন।'
                  : 'Connect GitHub to sync your starter fork, create lesson branches, and submit homework for mentor review.'}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleConnectGitHub}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-xs"
          >
            <Github className="h-3.5 w-3.5" />
            <span>{language === 'bn' ? 'গিটহাব কানেক্ট করুন' : 'Connect GitHub'}</span>
          </button>
        </div>
      )}

      {/* 2. Locked Screen if sections not passed */}
      {!isSectionProgressPassed ? (
        <div className="p-6 rounded-2xl bg-[var(--bg-elevated)] border border-amber-500/20 text-center space-y-3 font-mono">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <Lock className="h-6 w-6" />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h4 className="font-bold text-xs text-[var(--text)]">
              {language === 'bn' ? 'হোমওয়ার্ক সাবমিশন আনলক করতে সেকশন সম্পন্ন করুন' : 'Complete Lesson Sections to Unlock Submission'}
            </h4>
            <p className="text-[11px] text-[var(--text-muted)] leading-relaxed font-sans">
              {language === 'bn'
                ? 'থিওরি পড়া, স্যান্ডবক্স প্র্যাকটিস এবং গিট টার্মিনাল টাস্ক সম্পন্ন করলেই আপনার কোড ও জার্নাল মেন্টরের কাছে জমা দেওয়া যাবে।'
                : 'Complete Lesson Theory, Practice Sandbox, and Git Terminal tasks above to unlock homework submission, code upload, and mentor grading.'}
            </p>
          </div>
        </div>
      ) : (
        /* 3. Unlocked Workspace & Submission Flow */
        <div className="space-y-6">
          {/* A. Certificate Eligibility Progress Gauge */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-3 font-mono shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-indigo-400" />
                <span className="font-bold text-xs text-[var(--text)]">
                  {language === 'bn' ? 'সার্টিফিকেট যোগ্যতা প্রগ্রেস (মার্কস স্কেল)' : 'Certificate Eligibility & Marks Progress'}
                </span>
              </div>

              <div className="text-xs font-bold text-indigo-400">
                {isApproved ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> 100% Eligible · {submission?.grade} Grade
                  </span>
                ) : (
                  <span>{currentMarks} / 100 Marks</span>
                )}
              </div>
            </div>

            {/* Visual Gauge */}
            <div className="relative pt-1">
              <div className="w-full h-3 rounded-full bg-[var(--bg-card)] border border-[var(--border)] overflow-hidden">
                <div
                  className={`h-full transition-all duration-700 ease-out shadow-xs ${
                    currentMarks >= 60
                      ? 'bg-gradient-to-r from-indigo-500 via-emerald-400 to-amber-400'
                      : 'bg-indigo-500/60'
                  }`}
                  style={{ width: `${submission ? Math.max(12, eligibilityPercent) : 8}%` }}
                />
              </div>

              {/* Threshold Labels */}
              <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)] pt-1.5 font-sans">
                <span>0 Marks (Draft)</span>
                <span className={currentMarks >= 60 ? 'text-emerald-400 font-bold font-mono' : 'text-amber-400 font-bold font-mono'}>
                  60 Marks (Passing Certificate)
                </span>
                <span className="text-indigo-400 font-bold font-mono">90+ Marks (Grade A+)</span>
              </div>
            </div>

            {/* Certificate Action if Issued */}
            {isApproved && certificate && (
              <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[var(--border)]">
                <div className="flex items-center gap-2 text-xs">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="text-[var(--text)] font-semibold">
                    {language === 'bn'
                      ? `অফিসিয়াল সার্টিফাইড সনদ ইস্যু হয়েছে (${certificate.grade} গ্রেড)`
                      : `Official Verified Certificate Issued (${certificate.grade} Grade)`}
                  </span>
                </div>

                <button
                  onClick={() => setShowCertificateModal(true)}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  <Award className="h-4 w-4" />
                  <span>{language === 'bn' ? 'সার্টিফিকেট দেখুন / প্রিন্ট' : 'View Verified Certificate'}</span>
                </button>
              </div>
            )}
          </div>

          {/* B. Prerequisites & Branch Context */}
          <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2.5 font-mono text-xs">
            <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
              {language === 'bn' ? 'যাচাইকৃত কারিকুলাম ও ব্রাঞ্চ কনটেক্সট' : 'Verified Prerequisites & GitHub Fork Context'}
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
              <div className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center gap-1.5">
                <CheckCircle2 className={`h-3.5 w-3.5 ${isTheoryDone ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span className={isTheoryDone ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
                  {isTheoryDone ? 'Theory Read' : 'Theory Pending'}
                </span>
              </div>

              <div className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center gap-1.5">
                <CheckCircle2 className={`h-3.5 w-3.5 ${isSandboxDone ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span className={isSandboxDone ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
                  {isSandboxDone ? 'Practice Done' : 'Practice Pending'}
                </span>
              </div>

              <div className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center gap-1.5">
                <CheckCircle2 className={`h-3.5 w-3.5 ${isTerminalDone ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span className={isTerminalDone ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
                  {isTerminalDone ? 'Terminal Done' : 'Terminal Pending'}
                </span>
              </div>

              <div className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center gap-1.5">
                <GitBranch className="h-3.5 w-3.5 text-indigo-400" />
                <span className="text-indigo-400 font-semibold truncate">
                  {workspaceData?.branchMeta.branchName || 'Branch Ready'}
                </span>
              </div>
            </div>
          </div>

          {/* C. Primary Homework Submission Form */}
          <form onSubmit={handleSubmitHomework} className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-[var(--text)] font-mono flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-indigo-400" />
                <span>{language === 'bn' ? 'হোমওয়ার্ক সাবমিশন ও জার্নাল এডিটর' : 'Homework & 100DaysOfCode Editor'}</span>
              </span>

              {/* Autosave and Sync Status Indicator */}
              <div className="flex items-center gap-2 text-[11px] font-mono">
                {autosaveStatus === 'saving' && (
                  <span className="text-amber-400 flex items-center gap-1">
                    <RefreshCw className="h-3 w-3 animate-spin" /> Saving...
                  </span>
                )}
                {autosaveStatus === 'saved_local' && (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Saved locally ✓
                  </span>
                )}
                {autosaveStatus === 'synced' && (
                  <span className="text-indigo-400 flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Synced ✓
                  </span>
                )}
                {autosaveStatus === 'idle' && submission && (
                  <span className="text-[var(--text-muted)] flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Autosave active
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 1. GitHub Repository URL (Read-Only Auto-Detected) */}
              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-[var(--text)] flex items-center gap-1.5">
                    <Github className="h-3.5 w-3.5 text-slate-400" />
                    <span>{language === 'bn' ? 'গিটহাব কারিকুলাম ফর্ক' : 'GitHub Curriculum Fork'}</span>
                  </label>
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Fork Auto-Detected
                  </span>
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    readOnly
                    value={workspaceData?.workspace.fork.repositoryUrl || 'https://github.com/student/frontend-bootcamp'}
                    className="w-full pl-3.5 pr-20 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs text-[var(--text)] outline-none font-mono cursor-default text-indigo-400 font-semibold"
                  />
                  <div className="absolute right-2 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          workspaceData?.workspace.fork.repositoryUrl || 'https://github.com/student/frontend-bootcamp',
                          'repo'
                        )
                      }
                      title="Copy Repository URL"
                      className="p-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--border)] text-slate-400 hover:text-[var(--text)] transition-colors cursor-pointer"
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                    <a
                      href={workspaceData?.workspace.fork.htmlUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open GitHub"
                      className="p-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--border)] text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
                <p className="text-[10px] text-[var(--text-muted)] font-sans">
                  Forked from <code className="text-indigo-400">curious-learners/frontend-bootcamp</code>.
                </p>
              </div>

              {/* 2. Live Demo URL with GitHub Pages Deployment Button */}
              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-[var(--text)] flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{language === 'bn' ? 'লাইভ ডেমো (GitHub Pages)' : 'Live Demo (GitHub Pages)'}</span>
                  </label>

                  {/* Deploy Button */}
                  <button
                    type="button"
                    onClick={handleDeployToGitHubPages}
                    disabled={isDeploying}
                    className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[10px] flex items-center gap-1 shadow-xs transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isDeploying ? <RefreshCw className="h-3 w-3 animate-spin" /> : <RocketIcon className="h-3 w-3" />}
                    <span>{deploymentState === 'DEPLOYED' ? 'Redeploy Pages' : 'Deploy Pages'}</span>
                  </button>
                </div>

                <div className="relative flex items-center">
                  <input
                    type="url"
                    placeholder="https://student.github.io/frontend-bootcamp/week-01/lesson-01-01/"
                    value={liveDemoUrl}
                    onChange={(e) => {
                      setLiveDemoUrl(e.target.value);
                      triggerDebouncedAutosave();
                    }}
                    className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs text-[var(--text)] focus:border-indigo-500 outline-none font-mono"
                  />
                  {liveDemoUrl && (
                    <a
                      href={liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Demo"
                      className="absolute right-2 p-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--border)] text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between text-[10px] font-sans">
                  <span className="text-[var(--text-muted)]">
                    Target branch: <code className="text-indigo-400 font-mono">{workspaceData?.branchMeta.branchName}</code>
                  </span>
                  <span
                    className={
                      deploymentState === 'DEPLOYED'
                        ? 'text-emerald-400 font-bold flex items-center gap-1'
                        : deploymentState === 'BUILDING'
                        ? 'text-amber-400 font-bold flex items-center gap-1 animate-pulse'
                        : 'text-slate-400'
                    }
                  >
                    {deploymentState === 'DEPLOYED' ? '● Published ✓' : deploymentState === 'BUILDING' ? 'Building…' : 'Ready'}
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Code Solution & Multi-File Upload Section */}
            <div className="space-y-3 font-mono text-xs p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]">
              <div className="flex items-center justify-between">
                <label className="font-bold text-[var(--text)] flex items-center gap-1.5">
                  <FileCode className="h-4 w-4 text-amber-400" />
                  <span>{language === 'bn' ? 'কোড সলিউশন ও ফাইল আপলোড' : 'Code Solution & Implementation Files'}</span>
                </label>

                {/* Upload Button */}
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".js,.jsx,.ts,.tsx,.html,.css,.json,.md,.py,.txt"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-amber-500/50 text-[var(--text)] text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Upload className="h-3.5 w-3.5 text-amber-400" />
                    <span>Upload Code Files</span>
                  </button>
                </div>
              </div>

              {/* Uploaded Files Preview List */}
              {attachedFiles.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {attachedFiles.map((file) => (
                    <div
                      key={file.id}
                      className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <FileText className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                        <span className="truncate font-semibold text-slate-200">{file.fileName}</span>
                        <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                          {Math.round(file.size / 1024) || 1} KB
                        </span>
                        <span className="text-[10px] text-amber-400 uppercase bg-amber-500/10 px-1.5 py-0.5 rounded">
                          {file.language}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveFile(file.id)}
                        className="p-1 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Text Code Solution Editor */}
              <div className="space-y-1">
                <textarea
                  rows={3}
                  placeholder="Paste your code snippet or implementation logic here..."
                  value={codeSolution}
                  onChange={(e) => {
                    setCodeSolution(e.target.value);
                    triggerDebouncedAutosave();
                  }}
                  className="w-full p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text)] focus:border-indigo-500 outline-none font-mono leading-relaxed"
                />
              </div>
            </div>

            {/* 4. 100DaysOfCode Structured Journal Reflection Editor */}
            <div className="space-y-3 font-mono text-xs p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5">
                <label className="font-bold text-[var(--text)] flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-indigo-400" />
                  <span>{language === 'bn' ? '১০০-ডেইজ শিখন জার্নাল ও রিফ্লেকশন' : 'Learning Notes & Journal Reflection (100DaysOfCode)'}</span>
                </label>

                {/* Autosave Status Indicator */}
                <span className="text-[10px] text-[var(--text-muted)] font-mono flex items-center gap-1">
                  {autosaveStatus === 'saving' ? (
                    <span className="text-amber-400 flex items-center gap-1">
                      <RefreshCw className="h-3 w-3 animate-spin" /> Saving...
                    </span>
                  ) : autosaveStatus === 'saved_local' || autosaveStatus === 'synced' ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Saved locally ✓
                    </span>
                  ) : null}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Today's Progress */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-300 block">Today's Progress:</span>
                  <textarea
                    rows={2}
                    placeholder="What I learned and implemented today..."
                    value={todayProgress}
                    onChange={(e) => {
                      setTodayProgress(e.target.value);
                      triggerDebouncedAutosave();
                    }}
                    className="w-full p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text)] focus:border-indigo-500 outline-none font-mono"
                  />
                </div>

                {/* Practice */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-300 block">Practice Summary:</span>
                  <textarea
                    rows={2}
                    placeholder="What I practiced in Sandbox / Git Terminal..."
                    value={practice}
                    onChange={(e) => {
                      setPractice(e.target.value);
                      triggerDebouncedAutosave();
                    }}
                    className="w-full p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text)] focus:border-indigo-500 outline-none font-mono"
                  />
                </div>

                {/* Challenges */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-300 block">Challenges Faced:</span>
                  <textarea
                    rows={2}
                    placeholder="What was difficult or tricky..."
                    value={challenges}
                    onChange={(e) => {
                      setChallenges(e.target.value);
                      triggerDebouncedAutosave();
                    }}
                    className="w-full p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text)] focus:border-indigo-500 outline-none font-mono"
                  />
                </div>

                {/* Solution / Breakthrough */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-300 block">Solution / Breakthrough:</span>
                  <textarea
                    rows={2}
                    placeholder="How I solved the problem..."
                    value={breakthrough}
                    onChange={(e) => {
                      setBreakthrough(e.target.value);
                      triggerDebouncedAutosave();
                    }}
                    className="w-full p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text)] focus:border-indigo-500 outline-none font-mono"
                  />
                </div>

                {/* Key Takeaways */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-300 block">Key Takeaways:</span>
                  <textarea
                    rows={2}
                    placeholder="What I understand deeply now..."
                    value={keyTakeaways}
                    onChange={(e) => {
                      setKeyTakeaways(e.target.value);
                      triggerDebouncedAutosave();
                    }}
                    className="w-full p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text)] focus:border-indigo-500 outline-none font-mono"
                  />
                </div>

                {/* Next Step */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-300 block">Next Step:</span>
                  <textarea
                    rows={2}
                    placeholder="What I will build or learn next..."
                    value={nextStep}
                    onChange={(e) => {
                      setNextStep(e.target.value);
                      triggerDebouncedAutosave();
                    }}
                    className="w-full p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text)] focus:border-indigo-500 outline-none font-mono"
                  />
                </div>
              </div>

              {/* Resources */}
              <div className="space-y-1 pt-1">
                <span className="text-[11px] font-bold text-slate-300 block">Documentation & Resources (comma-separated):</span>
                <input
                  type="text"
                  placeholder="https://developer.mozilla.org/, https://react.dev/"
                  value={resourcesText}
                  onChange={(e) => {
                    setResourcesText(e.target.value);
                    triggerDebouncedAutosave();
                  }}
                  className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text)] focus:border-indigo-500 outline-none font-mono"
                />
              </div>
            </div>

            {/* Error Message Display */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submission Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                <span>
                  {isSubmitting
                    ? (language === 'bn' ? 'জমা দেওয়া হচ্ছে...' : 'Submitting Solution...')
                    : submission?.state === 'SUBMITTED' || submission?.state === 'UNDER_REVIEW'
                    ? (language === 'bn' ? 'হোমওয়ার্ক আপডেট করুন' : 'Update Submitted Homework')
                    : (language === 'bn' ? 'মেন্টরের কাছে হোমওয়ার্ক জমা দিন' : 'Submit Homework for Review')}
                </span>
              </button>

              {/* Teacher Evaluation Suite Trigger */}
              <button
                type="button"
                onClick={() => setIsInstructorSuiteOpen(!isInstructorSuiteOpen)}
                className="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
              >
                <UserCheck className="h-4 w-4" />
                <span>{language === 'bn' ? 'টিচার / মেন্টর রিভিউ প্যানেল' : 'Teacher / Mentor Suite'}</span>
              </button>
            </div>
          </form>

          {/* D. Teacher Evaluation Panel (Instructor Suite) */}
          {isInstructorSuiteOpen && (
            <div className="p-5 rounded-2xl bg-indigo-950/40 border-2 border-indigo-500/40 space-y-4 animate-slide-up font-mono">
              <div className="flex items-center justify-between border-b border-indigo-500/30 pb-2.5">
                <div className="flex items-center gap-2 text-indigo-300">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="font-bold text-xs">TEACHER & MENTOR EVALUATION SUITE</span>
                </div>
                <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 font-bold">
                  Academic Authority
                </span>
              </div>

              {/* GitHub Issue Link if Created */}
              {submission?.gitHubIssue && (
                <div className="p-3 rounded-xl bg-slate-900 border border-indigo-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-slate-300" />
                    <span className="text-slate-200 font-semibold">{submission.gitHubIssue.title}</span>
                  </div>
                  <a
                    href={submission.gitHubIssue.issueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    <span>Issue #{submission.gitHubIssue.issueNumber}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}

              <form onSubmit={handleTeacherReview} className="space-y-3.5">
                {/* Action Buttons */}
                <div className="space-y-1">
                  <label className="text-[11px] text-slate-300 font-bold block">
                    Review Decision Action:
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setReviewAction('APPROVE')}
                      className={`p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                        reviewAction === 'APPROVE'
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-xs'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      ✓ Approve
                    </button>
                    <button
                      type="button"
                      onClick={() => setReviewAction('REVISE')}
                      className={`p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                        reviewAction === 'REVISE'
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-xs'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      ↻ Request Revision
                    </button>
                    <button
                      type="button"
                      onClick={() => setReviewAction('REJECT')}
                      className={`p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                        reviewAction === 'REJECT'
                          ? 'bg-rose-500/20 border-rose-500 text-rose-300 shadow-xs'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      ✕ Reject
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Marks */}
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-300 font-bold block">
                      Assign Marks (0 - 100):
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={mentorMarks}
                      onChange={(e) => setMentorMarks(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-indigo-500/40 text-xs text-emerald-400 font-bold focus:border-emerald-400 outline-none"
                    />
                  </div>

                  {/* Instructor Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-300 font-bold block">
                      Teacher / Mentor Name:
                    </label>
                    <input
                      type="text"
                      value={mentorName}
                      onChange={(e) => setMentorName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-indigo-500/40 text-xs text-slate-200 focus:border-indigo-400 outline-none"
                    />
                  </div>
                </div>

                {/* Feedback */}
                <div className="space-y-1">
                  <label className="text-[11px] text-slate-300 font-bold block">
                    Teacher Feedback & Academic Notes:
                  </label>
                  <textarea
                    rows={2}
                    value={mentorFeedback}
                    onChange={(e) => setMentorFeedback(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-indigo-500/40 text-xs text-slate-200 focus:border-indigo-400 outline-none leading-relaxed"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <p className="text-[10px] text-slate-400 font-sans">
                    * Assigning &ge;60 marks and clicking Approve will generate an official verified certificate.
                  </p>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
                  >
                    <Award className="h-4 w-4" />
                    <span>Save Evaluation & Issue Certificate</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* E. Expandable Progressive Disclosure (Lesson Journal, LOG.md, Audit Trail) */}
          <div className="space-y-3 pt-2 border-t border-[var(--border)] font-mono text-xs">
            {/* 1. Lesson Journal Preview */}
            <div className="border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--bg-elevated)]">
              <button
                type="button"
                onClick={() => setShowJournalPreview(!showJournalPreview)}
                className="w-full p-3.5 flex items-center justify-between text-left hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-indigo-400" />
                  <span className="font-bold text-[var(--text)]">
                    {language === 'bn' ? 'স্বয়ংক্রিয় লেসন জার্নাল প্রিভিউ' : '100DaysOfCode Lesson Journal'}
                  </span>
                  <code className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md">
                    {workspaceData?.branchMeta.journalPath || 'docs/curriculum/journal.md'}
                  </code>
                </div>
                {showJournalPreview ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {showJournalPreview && (
                <div className="p-4 border-t border-[var(--border)] bg-slate-950 text-slate-200">
                  <pre className="text-[11px] font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                    {generatedJournal}
                  </pre>
                </div>
              )}
            </div>

            {/* 2. Cumulative LOG.md Preview */}
            <div className="border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--bg-elevated)]">
              <button
                type="button"
                onClick={() => setShowLogMdPreview(!showLogMdPreview)}
                className="w-full p-3.5 flex items-center justify-between text-left hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FolderGit2 className="h-4 w-4 text-amber-400" />
                  <span className="font-bold text-[var(--text)]">
                    {language === 'bn' ? 'কিউমুলেটিভ LOG.md লার্নিং হিস্ট্রি' : 'Cumulative LOG.md History'}
                  </span>
                  <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md">
                    {user ? workspaceManager.getCumulativeLogEntries(user.id).length : 0} Entries
                  </span>
                </div>
                {showLogMdPreview ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {showLogMdPreview && (
                <div className="p-4 border-t border-[var(--border)] bg-slate-950 text-slate-200 space-y-3 max-h-60 overflow-y-auto">
                  {user && workspaceManager.getCumulativeLogEntries(user.id).length > 0 ? (
                    workspaceManager.getCumulativeLogEntries(user.id).map((entry, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-amber-300 font-bold">
                          <span>Week {entry.weekOrder} — Lesson {entry.lessonOrder}: {entry.lessonTitle}</span>
                          <span className="text-slate-400 font-normal">{new Date(entry.timestamp).toLocaleDateString()}</span>
                        </div>
                        <p className="text-[11px] text-slate-300 font-sans">{entry.reflection.todayProgress}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-[11px] text-slate-400 italic">No entries in LOG.md yet. Complete and submit your homework to generate entries.</p>
                  )}
                </div>
              )}
            </div>

            {/* 3. Audit Trail & Git Commit Logs */}
            <div className="border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--bg-elevated)]">
              <button
                type="button"
                onClick={() => setShowAuditLogs(!showAuditLogs)}
                className="w-full p-3.5 flex items-center justify-between text-left hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span className="font-bold text-[var(--text)]">
                    {language === 'bn' ? 'অডিট ট্রেইল ও গিট ইভেন্ট হিস্ট্রি' : 'Workspace Audit Trail & Git Log'}
                  </span>
                </div>
                {showAuditLogs ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {showAuditLogs && (
                <div className="p-4 border-t border-[var(--border)] space-y-2 bg-[var(--bg-card)] max-h-60 overflow-y-auto">
                  {workspaceManager.getAuditLogs().slice(0, 15).map((log) => (
                    <div
                      key={log.id}
                      className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[11px] space-y-0.5"
                    >
                      <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                        <span className="font-bold text-indigo-400">{log.action}</span>
                        <span>{new Date(log.timestamp).toLocaleTimeString()}</span>
                      </div>
                      <p className="text-[var(--text)] font-sans">{log.details}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Official Certificate Modal */}
      {showCertificateModal && certificate && (
        <CertificateModal
          certificate={certificate}
          language={language}
          onClose={() => setShowCertificateModal(false)}
        />
      )}
    </section>
  );
};

const RocketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 9v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);
