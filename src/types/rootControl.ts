export type StudentBootCampState =
  | 'ENROLLED'
  | 'ACTIVE'
  | 'PAUSED'
  | 'AT_RISK'
  | 'COMPLETED'
  | 'CERTIFICATE_ELIGIBLE'
  | 'CERTIFICATE_ISSUED';

export interface StudentIdentity {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  githubUsername: string;
  createdAt: string;
  lastActive: string;
  authMethod: 'email' | 'github' | 'google';
}

export interface StudentLearningMetrics {
  currentWeek: number;
  currentLessonId: string;
  currentLessonTitle: string;
  lessonsCompletedCount: number;
  totalLessons: number;
  overallProgressPct: number;
  streakDays: number;
  totalStudyHours: number;
  lastLearningActivity: string;
}

export interface StudentAssessmentMetrics {
  homeworkSubmittedCount: number;
  homeworkApprovedCount: number;
  homeworkRevisionCount: number;
  projectsCompletedCount: number;
  averageQuizScorePct: number;
}

export interface StudentProfileControl {
  identity: StudentIdentity;
  learning: StudentLearningMetrics;
  assessment: StudentAssessmentMetrics;
  status: StudentBootCampState;
  atRiskReasons?: string[];
  adminNotes: AdminNote[];
  certificateId?: string;
  cohort: string;
}

export interface AdminNote {
  id: string;
  author: string;
  createdAt: string;
  content: string;
  type: 'general' | 'intervention' | 'academic' | 'praise';
}

export interface ReviewRubric {
  correctness: number; // 1-5
  codeQuality: number; // 1-5
  understanding: number; // 1-5
  accessibility: number; // 1-5
  bestPractice: number; // 1-5
}

export interface HomeworkSubmission {
  id: string;
  studentId: string;
  studentName: string;
  weekNumber: number;
  weekTitle: string;
  lessonId: string;
  lessonTitle: string;
  submittedAt: string;
  status: 'PENDING_REVIEW' | 'REVISION_REQUESTED' | 'APPROVED' | 'REJECTED';
  round: number;
  codeSnippet?: string;
  repoUrl?: string;
  studentNotes?: string;
  rubric?: ReviewRubric;
  feedbackText?: string;
  requiredChanges?: string;
  reviewedBy?: string;
  reviewedAt?: string;
  revisionHistory?: {
    round: number;
    submittedAt: string;
    status: string;
    feedback?: string;
    reviewedBy?: string;
  }[];
}

export interface ProjectSubmission {
  id: string;
  studentId: string;
  studentName: string;
  projectNumber: number;
  projectTitle: string;
  difficulty: string;
  stack: string;
  submittedAt: string;
  status: 'PENDING_REVIEW' | 'APPROVED' | 'REVISION_REQUESTED';
  repoUrl: string;
  liveDemoUrl: string;
  documentationScore: number; // 1-100
  codeQualityScore: number; // 1-100
  responsiveScore: number; // 1-100
  gitUsageScore: number; // 1-100
  reviewerNotes?: string;
  reviewedAt?: string;
}

export interface CertificateRecord {
  id: string; // e.g. CZ-2026-000241
  studentId: string;
  studentName: string;
  studentEmail: string;
  program: string;
  completionDate: string;
  issuedAt: string;
  status: 'VALID' | 'REVOKED';
  curriculumStats: string;
  issuer: string;
  signatureHash: string;
  revokedAt?: string;
  revocationReason?: string;
}

export interface RootAuditEvent {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  target: string;
  details: string;
  ip: string;
  status: 'SUCCESS' | 'WARNING' | 'FAILED';
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  target: 'ALL' | 'WEEK' | 'COHORT';
  targetValue?: string;
  publishedAt: string;
  author: string;
  priority: 'NORMAL' | 'URGENT';
}
