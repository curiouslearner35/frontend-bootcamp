/**
 * Curious Learners — GitHub Curriculum Workspace v2 Data Models
 *
 * Immutable Upstream Starter -> Student Fork -> Week Branch -> Lesson Branch
 * -> Practice -> File Uploads -> 100DaysOfCode Journal -> LOG.md -> Commit & Push
 * -> GitHub Pages Deployment -> Mentor Review & GitHub Issue -> Verified Certificate
 */

export const UPSTREAM_CURRICULUM_REPO = 'https://github.com/curiouslearner35/frontend-bootcamp';
export const UPSTREAM_REPO_NAME = 'frontend-bootcamp';
export const UPSTREAM_ORG = 'curiouslearner35';

export type ForkState =
  | 'NOT_CONNECTED'
  | 'FORK_REQUESTED'
  | 'FORK_PROVISIONING'
  | 'FORK_READY'
  | 'FORK_FAILED'
  | 'RETRY_AVAILABLE';

export type SubmissionState =
  | 'DRAFT'
  | 'READY_TO_SUBMIT'
  | 'SUBMITTING'
  | 'SUBMITTED'
  | 'UNDER_REVIEW'
  | 'APPROVED'
  | 'REJECTED'
  | 'REVISION_REQUIRED';

export type DeploymentState =
  | 'NOT_READY'
  | 'READY'
  | 'DEPLOY_REQUESTED'
  | 'BUILDING'
  | 'DEPLOYED'
  | 'FAILED';

export type DeploymentProvider = 'github_pages' | 'vercel' | 'netlify';

export interface AttachedFileMeta {
  id: string;
  fileName: string;
  path: string;
  language: string;
  size: number;
  hash: string;
  content: string; // Base64 or plain text content
  uploadedAt: string;
}

export interface CurriculumForkMeta {
  upstreamUrl: string;
  repositoryUrl: string;
  repositoryName: string;
  owner: string;
  defaultBranch: string;
  status: ForkState;
  provisionedAt?: string;
  lastCheckedAt?: string;
  errorMessage?: string;
  htmlUrl: string;
}

export interface LessonBranchMeta {
  studentId: string;
  courseId: string;
  weekId: string;
  lessonId: string;
  repository: string;
  branchName: string; // e.g. "week-01/lesson-01-03"
  baseBranch: string; // e.g. "week-01"
  createdAt: string;
  updatedAt: string;
  latestCommitSha: string;
  commitsCount: number;
  journalPath: string; // "docs/curriculum/week-01/lesson-01-03.md"
  status: 'active' | 'merged' | 'stale';
}

export interface GitHubPagesDeploymentMeta {
  id: string;
  studentId: string;
  courseId: string;
  weekId: string;
  lessonId: string;
  branch: string;
  commitSha: string;
  provider: DeploymentProvider;
  state: DeploymentState;
  publishedUrl: string;
  requestedAt?: string;
  deployedAt?: string;
  workflowRunId?: string;
  error?: string;
}

export interface JournalReflectionData {
  todayProgress: string;
  practice: string;
  challenges: string;
  breakthrough: string;
  keyTakeaways: string;
  resources: string[];
  nextStep: string;
}

export interface LearningLogEntry {
  weekId: string;
  weekOrder: number;
  lessonId: string;
  lessonOrder: number;
  lessonTitle: string;
  branchName: string;
  commitSha: string;
  liveDemoUrl: string;
  learningTime: {
    theoryMinutes: number;
    practiceMinutes: number;
    terminalMinutes: number;
    totalMinutes: number;
  };
  reflection: JournalReflectionData;
  timestamp: string;
}

export interface MentorReviewIssue {
  issueNumber: number;
  issueUrl: string;
  title: string;
  labels: string[];
  state: 'open' | 'closed';
  createdAt: string;
  updatedAt: string;
}

export interface MentorNotification {
  id: string;
  studentId: string;
  studentName: string;
  weekTitle: string;
  lessonTitle: string;
  repository: string;
  branch: string;
  commitSha: string;
  liveDemoUrl: string;
  submittedAt: string;
  read: boolean;
}

export interface WorkspaceAuditEvent {
  id: string;
  timestamp: string;
  actor: string;
  action:
    | 'FORK_CREATED'
    | 'FORK_PROVISIONING'
    | 'FORK_READY'
    | 'FORK_FAILED'
    | 'WEEK_BRANCH_CREATED'
    | 'LESSON_BRANCH_CREATED'
    | 'LESSON_STARTED'
    | 'THEORY_COMPLETED'
    | 'PRACTICE_COMPLETED'
    | 'TERMINAL_TASK_COMPLETED'
    | 'FILES_ATTACHED'
    | 'JOURNAL_UPDATED'
    | 'LOG_UPDATED'
    | 'COMMIT_CREATED'
    | 'PUSH_VERIFIED'
    | 'DEPLOYMENT_REQUESTED'
    | 'DEPLOYMENT_BUILDING'
    | 'DEPLOYMENT_SUCCEEDED'
    | 'DEPLOYMENT_FAILED'
    | 'HOMEWORK_DRAFT_SAVED'
    | 'HOMEWORK_SUBMITTED'
    | 'MENTOR_NOTIFIED'
    | 'ISSUE_CREATED'
    | 'REVIEW_STARTED'
    | 'REVIEW_UPDATED'
    | 'HOMEWORK_APPROVED'
    | 'REVISION_REQUESTED'
    | 'HOMEWORK_REJECTED';
  target: string;
  details: string;
  status: 'SUCCESS' | 'WARNING' | 'FAILED';
  metadata?: Record<string, any>;
}

export interface StudentWorkspace {
  studentId: string;
  studentName: string;
  studentSlug: string;
  fork: CurriculumForkMeta;
  weekBranches: Record<string, string>; // weekId -> "week-01"
  lessonBranches: Record<string, LessonBranchMeta>; // lessonId -> LessonBranchMeta
  deployments: Record<string, GitHubPagesDeploymentMeta>; // lessonId -> deployment
  activeLessonId?: string;
  createdAt: string;
  lastActiveAt: string;
  syncedWithServer: boolean;
}

export interface HomeworkSubmission {
  id: string;
  studentId: string;
  studentName: string;
  studentEmail?: string;
  courseId: string;
  weekId: string;
  weekOrder: number;
  lessonId: string;
  lessonOrder: number;
  lessonTitle: string;
  repositoryUrl: string;
  lessonBranch: string;
  latestCommitSha: string;
  liveDemoUrl: string;
  deploymentState: DeploymentState;
  deploymentProvider: DeploymentProvider;
  codeSolution: string;
  attachedFiles: AttachedFileMeta[];
  notes: string;
  journal: JournalReflectionData;
  state: SubmissionState;
  submittedAt?: string;
  theoryCompleted: boolean;
  sandboxCompleted: boolean;
  terminalCompleted: boolean;
  gitCommits: number;
  activeLearningSeconds: number;
  marks?: number; // 0 - 100
  grade?: 'A+' | 'A' | 'B' | 'C' | 'Fail';
  feedback?: string;
  reviewedBy?: string;
  reviewedAt?: string;
  certificateId?: string;
  gitHubIssue?: MentorReviewIssue;
  lastAutosavedAt?: string;
  syncStatus: 'synced' | 'pending' | 'local_only';
  auditEvents: WorkspaceAuditEvent[];
}

export interface TeacherReviewPayload {
  submissionId: string;
  action: 'APPROVE' | 'REVISE' | 'REJECT';
  marks: number;
  feedback: string;
  mentorName: string;
  labels?: string[];
}

export type GithubConnectionStatus =
  | 'GITHUB_NOT_CONNECTED'
  | 'CONNECTED'
  | 'AUTHORIZATION_EXPIRED'
  | 'AUTHORIZATION_REVOKED'
  | 'INSUFFICIENT_PERMISSIONS'
  | 'RATE_LIMITED';

export interface GithubConnection {
  status: GithubConnectionStatus;
  githubUsername?: string;
  githubUserId?: number;
  scopes?: string[];
  connectedAt?: string;
  lastVerifiedAt?: string;
}

export interface GradeConfiguration {
  label: 'A+' | 'A' | 'B' | 'C' | 'Fail';
  minimumMarks: number;
  maximumMarks: number;
  enabled: boolean;
}

export const GRADE_RULES: GradeConfiguration[] = [
  { label: 'A+', minimumMarks: 95, maximumMarks: 100, enabled: true },
  { label: 'A', minimumMarks: 85, maximumMarks: 94, enabled: true },
  { label: 'B', minimumMarks: 70, maximumMarks: 84, enabled: true },
  { label: 'C', minimumMarks: 60, maximumMarks: 69, enabled: true },
  { label: 'Fail', minimumMarks: 0, maximumMarks: 59, enabled: true }
];

export function resolveGradeFromMarks(marks: number): 'A+' | 'A' | 'B' | 'C' | 'Fail' {
  const safeMarks = Math.max(0, Math.min(100, marks));
  for (const rule of GRADE_RULES) {
    if (safeMarks >= rule.minimumMarks && safeMarks <= rule.maximumMarks) {
      return rule.label;
    }
  }
  return 'Fail';
}

