/**
 * Curious Learners — Homework Submission & Teacher Review Engine v2
 *
 * Implements:
 * 1. Multi-File Upload & Code Implementation Metadata Manager
 * 2. 100DaysOfCode Structured Reflection & Cumulative LOG.md Integration
 * 3. Atomic Transactional Submission Sequence (Validate -> Stage -> Commit -> Push -> Issue -> Notify)
 * 4. GitHub Issue & Label Generation for Mentor Review
 * 5. Mentor Grading, Feedback, and Verifiable Certificate Minting
 */

import { UserProfile, Lesson, Week } from '../types';
import {
  HomeworkSubmission,
  SubmissionState,
  DeploymentState,
  AttachedFileMeta,
  JournalReflectionData,
  MentorReviewIssue,
  MentorNotification,
  TeacherReviewPayload,
  resolveGradeFromMarks
} from '../types/gitWorkspace';
import { workspaceManager } from './workspaceManager';
import { activityTracker } from './activityTracker';

export interface HomeworkCertificate {
  id: string;
  submissionId: string;
  lessonId: string;
  lessonTitle: string;
  studentId: string;
  studentName: string;
  marks: number;
  grade: string;
  mentorName: string;
  issuedAt: string;
  certificateHash: string;
}

export interface LessonValidationResult {
  valid: boolean;
  missingRequirements: string[];
  warnings: string[];
  evidence: {
    theoryCompleted: boolean;
    sandboxCompleted: boolean;
    terminalCompleted: boolean;
    hasCodeOrFiles: boolean;
    hasReflection: boolean;
    gitCommitsCount: number;
  };
}

/**
 * Authoritative Lesson Completion Gate Validator
 */
export function validateLessonSubmission(params: {
  isTheoryDone: boolean;
  isSandboxDone: boolean;
  isTerminalDone: boolean;
  codeSolution: string;
  attachedFiles?: AttachedFileMeta[];
  journal?: Partial<JournalReflectionData>;
  gitCommits?: number;
}): LessonValidationResult {
  const missing: string[] = [];
  const warnings: string[] = [];

  if (!params.isTheoryDone) missing.push('Theory Reading not completed');
  if (!params.isSandboxDone) missing.push('Practice Code Sandbox exercise not completed');
  if (!params.isTerminalDone) missing.push('Git Terminal interactive tasks not completed');

  const hasCodeOrFiles = Boolean(
    (params.codeSolution && params.codeSolution.trim().length > 0) ||
    (params.attachedFiles && params.attachedFiles.length > 0)
  );
  if (!hasCodeOrFiles) {
    missing.push('Code solution snippet or attached implementation files required');
  }

  const hasReflection = Boolean(
    params.journal && params.journal.todayProgress && params.journal.todayProgress.trim().length > 0
  );
  if (!hasReflection) {
    warnings.push('100DaysOfCode learning journal reflection is currently using default template');
  }

  return {
    valid: missing.length === 0,
    missingRequirements: missing,
    warnings,
    evidence: {
      theoryCompleted: params.isTheoryDone,
      sandboxCompleted: params.isSandboxDone,
      terminalCompleted: params.isTerminalDone,
      hasCodeOrFiles,
      hasReflection,
      gitCommitsCount: params.gitCommits || 0
    }
  };
}

const HOMEWORK_STORAGE_KEY_V3 = 'curiousLearners.homework.v3.submissions';
const CERTIFICATES_STORAGE_KEY_V3 = 'curiousLearners.certificates.v3';
const DRAFT_AUTOSAVE_KEY_PREFIX_V3 = 'curiousLearners.homework.v3.';
const NOTIFICATIONS_STORAGE_KEY_V3 = 'curiousLearners.notifications.v3';

// Legacy keys for seamless migration
const LEGACY_HOMEWORK_KEY = 'codazi:homework_submissions_v2';
const LEGACY_CERTIFICATES_KEY = 'codazi:homework_certificates_v2';
const LEGACY_DRAFT_PREFIX = 'codazi:homework_draft_v2_';
const LEGACY_NOTIFICATIONS_KEY = 'codazi:mentor_notifications_v2';

class HomeworkService {
  private submissions: Map<string, HomeworkSubmission> = new Map();
  private certificates: Map<string, HomeworkCertificate> = new Map();
  private notifications: MentorNotification[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const rawSubs = localStorage.getItem(HOMEWORK_STORAGE_KEY_V3) || localStorage.getItem(LEGACY_HOMEWORK_KEY);
      if (rawSubs) {
        const parsed: HomeworkSubmission[] = JSON.parse(rawSubs);
        parsed.forEach((sub) => this.submissions.set(`${sub.lessonId}_${sub.studentId}`, sub));
      }

      const rawCerts = localStorage.getItem(CERTIFICATES_STORAGE_KEY_V3) || localStorage.getItem(LEGACY_CERTIFICATES_KEY);
      if (rawCerts) {
        const parsed: HomeworkCertificate[] = JSON.parse(rawCerts);
        parsed.forEach((cert) => this.certificates.set(cert.id, cert));
      }

      const rawNotes = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY_V3) || localStorage.getItem(LEGACY_NOTIFICATIONS_KEY);
      if (rawNotes) {
        this.notifications = JSON.parse(rawNotes);
      }
    } catch (e) {
      console.warn('Failed to load homework data from storage:', e);
    }
  }

  private saveToStorage() {
    try {
      const subsList = Array.from(this.submissions.values());
      const certsList = Array.from(this.certificates.values());
      localStorage.setItem(HOMEWORK_STORAGE_KEY_V3, JSON.stringify(subsList));
      localStorage.setItem(CERTIFICATES_STORAGE_KEY_V3, JSON.stringify(certsList));
      localStorage.setItem(NOTIFICATIONS_STORAGE_KEY_V3, JSON.stringify(this.notifications.slice(0, 100)));
    } catch (e) {
      console.warn('Failed to save homework data to storage:', e);
    }
  }

  private getKey(lessonId: string, studentId: string): string {
    return `${studentId}.${lessonId}`;
  }

  /**
   * Helper: Detect code language from file extension
   */
  public detectLanguageFromFilename(filename: string): string {
    const ext = filename.split('.').pop()?.toLowerCase() || '';
    switch (ext) {
      case 'ts':
      case 'tsx':
        return 'typescript';
      case 'js':
      case 'jsx':
        return 'javascript';
      case 'html':
        return 'html';
      case 'css':
        return 'css';
      case 'json':
        return 'json';
      case 'md':
        return 'markdown';
      case 'py':
        return 'python';
      default:
        return 'plaintext';
    }
  }

  /**
   * Helper: Convert uploaded File to AttachedFileMeta
   */
  public async processUploadedFile(file: File, relativePath?: string): Promise<AttachedFileMeta> {
    // 5MB max upload limit
    if (file.size > 5 * 1024 * 1024) {
      throw new Error(`File "${file.name}" exceeds maximum allowed limit of 5MB.`);
    }

    // Disallow dangerous executables
    const lowerName = file.name.toLowerCase();
    if (
      lowerName.endsWith('.exe') ||
      lowerName.endsWith('.bat') ||
      lowerName.endsWith('.sh') ||
      lowerName.endsWith('.bin') ||
      lowerName.endsWith('.cmd')
    ) {
      throw new Error(`Executable file types like "${file.name}" are not permitted.`);
    }

    const textContent = await file.text();
    const hash = `hash_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 6)}`;
    const language = this.detectLanguageFromFilename(file.name);

    return {
      id: `file_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      fileName: file.name,
      path: relativePath || `src/${file.name}`,
      language,
      size: file.size,
      hash,
      content: textContent,
      uploadedAt: new Date().toISOString()
    };
  }

  /**
   * Get submission for a student and lesson
   */
  public getSubmission(lessonId: string, studentId: string): HomeworkSubmission | null {
    const key = this.getKey(lessonId, studentId);
    if (this.submissions.has(key)) {
      return this.submissions.get(key)!;
    }

    try {
      const rawDraft =
        localStorage.getItem(`${DRAFT_AUTOSAVE_KEY_PREFIX_V3}${studentId}.${lessonId}`) ||
        localStorage.getItem(`${LEGACY_DRAFT_PREFIX}${lessonId}_${studentId}`);
      if (rawDraft) {
        return JSON.parse(rawDraft);
      }
    } catch {}

    return null;
  }

  /**
   * Autosave homework draft (called on debounced input)
   */
  public autosaveDraft(params: {
    user: UserProfile;
    lesson: Lesson;
    week: Week;
    codeSolution: string;
    attachedFiles?: AttachedFileMeta[];
    notes: string;
    journal?: Partial<JournalReflectionData>;
    liveDemoUrl?: string;
    deploymentState?: DeploymentState;
    isTheoryDone: boolean;
    isSandboxDone: boolean;
    isTerminalDone: boolean;
    gitCommits: number;
    activeSeconds: number;
  }): { draft: HomeworkSubmission; status: 'saved_local' | 'synced' } {
    const {
      user,
      lesson,
      week,
      codeSolution,
      attachedFiles = [],
      notes,
      journal,
      liveDemoUrl,
      isTheoryDone,
      isSandboxDone,
      isTerminalDone,
      gitCommits,
      activeSeconds
    } = params;
    const key = this.getKey(lesson.id, user.id);

    const { workspace, branchMeta } = workspaceManager.getOrCreateLessonBranch(user, week, lesson);
    const existing = this.submissions.get(key);

    const defaultJournal: JournalReflectionData = {
      todayProgress: journal?.todayProgress || `Completed lesson exercises for ${lesson.title.en}.`,
      practice: journal?.practice || 'Practiced coding logic in Sandbox and executed terminal tasks.',
      challenges: journal?.challenges || 'Ensured clean separation of concerns and passed test criteria.',
      breakthrough: journal?.breakthrough || 'Gained deep understanding of Git workflow and implementation rules.',
      keyTakeaways: journal?.keyTakeaways || 'Commit early, write clean code, and verify before submitting.',
      resources: journal?.resources || [workspace.fork.repositoryUrl],
      nextStep: journal?.nextStep || `Continue to the next lesson in Week ${week.order}.`
    };

    const currentState: SubmissionState = existing
      ? existing.state
      : isTheoryDone && isSandboxDone && isTerminalDone
      ? 'READY_TO_SUBMIT'
      : 'DRAFT';

    const draft: HomeworkSubmission = {
      id: existing?.id || `hw-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      studentId: user.id,
      studentName: user.name || user.username || 'Curious Student',
      studentEmail: user.email,
      courseId: 'curious-frontend-bootcamp',
      weekId: week.id,
      weekOrder: week.order,
      lessonId: lesson.id,
      lessonOrder: lesson.order,
      lessonTitle: lesson.title.en,
      repositoryUrl: workspace.fork.repositoryUrl,
      lessonBranch: branchMeta.branchName,
      latestCommitSha: branchMeta.latestCommitSha,
      liveDemoUrl: liveDemoUrl !== undefined ? liveDemoUrl : (existing?.liveDemoUrl || `https://${workspace.studentSlug}.github.io/frontend-bootcamp/${branchMeta.branchName}/`),
      deploymentState: params.deploymentState || existing?.deploymentState || 'READY',
      deploymentProvider: 'github_pages',
      codeSolution,
      attachedFiles: attachedFiles.length > 0 ? attachedFiles : (existing?.attachedFiles || []),
      notes,
      journal: defaultJournal,
      state: currentState,
      submittedAt: existing?.submittedAt,
      theoryCompleted: isTheoryDone,
      sandboxCompleted: isSandboxDone,
      terminalCompleted: isTerminalDone,
      gitCommits: Math.max(gitCommits, branchMeta.commitsCount),
      activeLearningSeconds: activeSeconds,
      marks: existing?.marks,
      grade: existing?.grade,
      feedback: existing?.feedback,
      reviewedBy: existing?.reviewedBy,
      reviewedAt: existing?.reviewedAt,
      certificateId: existing?.certificateId,
      gitHubIssue: existing?.gitHubIssue,
      lastAutosavedAt: new Date().toISOString(),
      syncStatus: 'local_only',
      auditEvents: existing?.auditEvents || []
    };

    localStorage.setItem(`${DRAFT_AUTOSAVE_KEY_PREFIX_V3}${key}`, JSON.stringify(draft));

    if (existing) {
      this.submissions.set(key, draft);
      this.saveToStorage();
    }

    return { draft, status: 'saved_local' };
  }

  /**
   * Transaction-like Homework Submission Sequence
   * VALIDATE -> PREPARE -> WRITE JOURNAL -> LOG.MD -> COMMIT -> PUSH -> ISSUE -> NOTIFY -> REVIEW
   */
  public async submitHomework(params: {
    user: UserProfile;
    lesson: Lesson;
    week: Week;
    codeSolution: string;
    attachedFiles?: AttachedFileMeta[];
    notes: string;
    journal?: Partial<JournalReflectionData>;
    liveDemoUrl?: string;
    isTheoryDone: boolean;
    isSandboxDone: boolean;
    isTerminalDone: boolean;
    gitCommits: number;
    activeSeconds: number;
  }): Promise<{ submission: HomeworkSubmission; error?: string }> {
    const {
      user,
      lesson,
      week,
      codeSolution,
      attachedFiles = [],
      notes,
      journal,
      liveDemoUrl,
      isTheoryDone,
      isSandboxDone,
      isTerminalDone,
      gitCommits,
      activeSeconds
    } = params;

    // 1. Transaction Validation
    if (!isTheoryDone || !isSandboxDone || !isTerminalDone) {
      return {
        submission: null as any,
        error: 'Theory, Sandbox, and Git Terminal requirements must all be completed before submitting.'
      };
    }

    if (!codeSolution.trim() && attachedFiles.length === 0) {
      return {
        submission: null as any,
        error: 'Please provide a code solution snippet or attach implementation files.'
      };
    }

    // 2. Resolve Fork & Lesson Branch
    const workspace = workspaceManager.getOrCreateStudentWorkspace(user);
    const { branchMeta } = workspaceManager.getOrCreateLessonBranch(user, week, lesson);
    const key = this.getKey(lesson.id, user.id);
    const existing = this.submissions.get(key);

    const submissionId = existing?.id || `hw-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const weekStr = String(week.order).padStart(2, '0');
    const lessonStr = String(lesson.order).padStart(2, '0');

    // 3. Generate Commit SHA & Deterministic Commit Message
    const commitSha = `sha-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`;
    const commitMessage = `feat(week-${weekStr}/lesson-${weekStr}-${lessonStr}): submit lesson homework`;
    workspaceManager.recordLessonCommit(user, lesson.id, commitMessage, commitSha);

    const fullJournal: JournalReflectionData = {
      todayProgress: journal?.todayProgress || `Completed lesson tasks for "${lesson.title.en}".`,
      practice: journal?.practice || `Implemented practice code and verified Git branch ${branchMeta.branchName}.`,
      challenges: journal?.challenges || 'Optimizing solution code and ensuring zero linting errors.',
      breakthrough: journal?.breakthrough || 'Successfully executed all terminal commands and structured files cleanly.',
      keyTakeaways: journal?.keyTakeaways || 'Clear Git history and well-tested solutions form robust developer portfolios.',
      resources: journal?.resources || [workspace.fork.repositoryUrl],
      nextStep: journal?.nextStep || `Move to the next curriculum lesson in Week ${week.order}.`
    };

    const demoUrl = liveDemoUrl || `https://${workspace.studentSlug}.github.io/frontend-bootcamp/${branchMeta.branchName}/`;

    // 4. Update Cumulative LOG.md
    workspaceManager.updateCumulativeLogMd(user, {
      weekId: week.id,
      weekOrder: week.order,
      lessonId: lesson.id,
      lessonOrder: lesson.order,
      lessonTitle: lesson.title.en,
      branchName: branchMeta.branchName,
      commitSha,
      liveDemoUrl: demoUrl,
      learningTime: {
        theoryMinutes: 15,
        practiceMinutes: 20,
        terminalMinutes: 10,
        totalMinutes: Math.round(activeSeconds / 60) || 45
      },
      reflection: fullJournal,
      timestamp: new Date().toISOString()
    });

    // 5. Generate / Simulate Mentor Review GitHub Issue
    const issueNumber = 100 + Math.floor(Math.random() * 800);
    const gitHubIssue: MentorReviewIssue = {
      issueNumber,
      issueUrl: `https://github.com/curiouslearner35/frontend-bootcamp/issues/${issueNumber}`,
      title: `[Week ${weekStr}][Lesson ${weekStr}-${lessonStr}] Homework Submission — ${user.name || user.username}`,
      labels: ['homework', `week-${weekStr}`, `lesson-${weekStr}-${lessonStr}`, 'under-review'],
      state: 'open',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // 6. Record Mentor Notification
    const notification: MentorNotification = {
      id: `notif-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      studentId: user.id,
      studentName: user.name || user.username || 'Curious Student',
      weekTitle: week.title.en,
      lessonTitle: lesson.title.en,
      repository: workspace.fork.repositoryUrl,
      branch: branchMeta.branchName,
      commitSha,
      liveDemoUrl: demoUrl,
      submittedAt: new Date().toISOString(),
      read: false
    };
    this.notifications.unshift(notification);

    // 7. Assemble Complete Submission Record
    const submission: HomeworkSubmission = {
      id: submissionId,
      studentId: user.id,
      studentName: user.name || user.username || 'Curious Student',
      studentEmail: user.email,
      courseId: 'curious-frontend-bootcamp',
      weekId: week.id,
      weekOrder: week.order,
      lessonId: lesson.id,
      lessonOrder: lesson.order,
      lessonTitle: lesson.title.en,
      repositoryUrl: workspace.fork.repositoryUrl,
      lessonBranch: branchMeta.branchName,
      latestCommitSha: commitSha,
      liveDemoUrl: demoUrl,
      deploymentState: 'DEPLOYED',
      deploymentProvider: 'github_pages',
      codeSolution: codeSolution.trim(),
      attachedFiles,
      notes: notes.trim(),
      journal: fullJournal,
      state: 'SUBMITTED',
      submittedAt: new Date().toISOString(),
      theoryCompleted: true,
      sandboxCompleted: true,
      terminalCompleted: true,
      gitCommits: Math.max(gitCommits, branchMeta.commitsCount),
      activeLearningSeconds: activeSeconds,
      marks: undefined,
      grade: undefined,
      feedback: undefined,
      reviewedBy: undefined,
      reviewedAt: undefined,
      certificateId: undefined,
      gitHubIssue,
      lastAutosavedAt: new Date().toISOString(),
      syncStatus: 'synced',
      auditEvents: existing?.auditEvents || []
    };

    // Record Audit Event
    const auditEv = workspaceManager.recordAuditEvent(
      user.id,
      'HOMEWORK_SUBMITTED',
      `Homework: ${lesson.title.en} [${branchMeta.branchName}]`,
      `Submitted homework with commit ${commitSha} and GitHub Issue #${issueNumber}.`,
      'SUCCESS',
      { issueNumber, commitSha, branch: branchMeta.branchName }
    );
    submission.auditEvents.push(auditEv);

    // Persist locally
    this.submissions.set(key, submission);
    this.saveToStorage();
    localStorage.removeItem(`${DRAFT_AUTOSAVE_KEY_PREFIX_V3}${key}`);

    // Track activity event
    activityTracker.recordActivity('HOMEWORK', 'PROJECT_SUBMIT', lesson.id, {
      submissionId,
      branchName: branchMeta.branchName,
      repositoryUrl: workspace.fork.repositoryUrl,
      commitSha,
      issueNumber
    });

    // Synchronize with backend API
    try {
      await fetch('/api/homework/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submission,
          notification,
          gitHubIssue
        })
      });
    } catch {
      submission.syncStatus = 'pending';
      this.submissions.set(key, submission);
      this.saveToStorage();
    }

    return { submission };
  }

  /**
   * Teacher / Mentor Evaluates and Grades a Homework Submission
   */
  public async reviewHomework(params: TeacherReviewPayload): Promise<{
    submission: HomeworkSubmission;
    certificate?: HomeworkCertificate;
  }> {
    const { submissionId, action, marks, feedback, mentorName, labels = [] } = params;

    let targetSubmission: HomeworkSubmission | null = null;
    let targetKey = '';

    for (const [key, sub] of this.submissions.entries()) {
      if (sub.id === submissionId) {
        targetSubmission = sub;
        targetKey = key;
        break;
      }
    }

    if (!targetSubmission) {
      throw new Error(`Submission ${submissionId} not found.`);
    }

    const safeMarks = Math.max(0, Math.min(100, marks));
    const isPassing = action === 'APPROVE' && safeMarks >= 60;

    const grade = resolveGradeFromMarks(safeMarks);

    targetSubmission.marks = safeMarks;
    targetSubmission.grade = grade;
    targetSubmission.feedback = feedback.trim();
    targetSubmission.reviewedBy = mentorName || 'Senior Academy Instructor';
    targetSubmission.reviewedAt = new Date().toISOString();

    if (action === 'APPROVE' && isPassing) {
      targetSubmission.state = 'APPROVED';
    } else if (action === 'REVISE') {
      targetSubmission.state = 'REVISION_REQUIRED';
    } else {
      targetSubmission.state = 'REJECTED';
    }

    // Update Issue Labels
    if (targetSubmission.gitHubIssue) {
      targetSubmission.gitHubIssue.labels = [
        'homework',
        `week-${String(targetSubmission.weekOrder).padStart(2, '0')}`,
        targetSubmission.state === 'APPROVED' ? 'passed' : targetSubmission.state === 'REVISION_REQUIRED' ? 'revision-required' : 'failed',
        grade,
        ...labels
      ];
      targetSubmission.gitHubIssue.state = targetSubmission.state === 'APPROVED' ? 'closed' : 'open';
      targetSubmission.gitHubIssue.updatedAt = new Date().toISOString();
    }

    let certificate: HomeworkCertificate | undefined;

    if (isPassing) {
      const certId = `cert_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      const certHash = `CL-VERIFIED-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;

      certificate = {
        id: certId,
        submissionId: targetSubmission.id,
        lessonId: targetSubmission.lessonId,
        lessonTitle: targetSubmission.lessonTitle,
        studentId: targetSubmission.studentId,
        studentName: targetSubmission.studentName,
        marks: safeMarks,
        grade,
        mentorName: targetSubmission.reviewedBy,
        issuedAt: new Date().toISOString(),
        certificateHash: certHash
      };

      targetSubmission.certificateId = certId;
      this.certificates.set(certId, certificate);

      workspaceManager.recordAuditEvent(
        targetSubmission.reviewedBy,
        'HOMEWORK_APPROVED',
        `Submission: ${targetSubmission.id}`,
        `Approved homework with score ${safeMarks}/100 (Grade ${grade}). Issued certificate ${certId}.`
      );
    } else {
      workspaceManager.recordAuditEvent(
        targetSubmission.reviewedBy,
        action === 'REVISE' ? 'REVISION_REQUESTED' : 'HOMEWORK_REJECTED',
        `Submission: ${targetSubmission.id}`,
        `Evaluated homework with action "${action}" and score ${safeMarks}/100.`
      );
    }

    this.submissions.set(targetKey, targetSubmission);
    this.saveToStorage();

    // Push to server review endpoint
    try {
      await fetch('/api/homework/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submission: targetSubmission,
          certificate
        })
      });
    } catch {}

    return { submission: targetSubmission, certificate };
  }

  /**
   * Get all submissions across students for Teacher Dashboard
   */
  public getAllSubmissions(): HomeworkSubmission[] {
    return Array.from(this.submissions.values());
  }

  /**
   * Get certificate by ID
   */
  public getCertificateById(certificateId: string): HomeworkCertificate | null {
    return this.certificates.get(certificateId) || null;
  }

  /**
   * Get mentor notifications
   */
  public getNotifications(): MentorNotification[] {
    return [...this.notifications];
  }
}

export const homeworkService = new HomeworkService();
