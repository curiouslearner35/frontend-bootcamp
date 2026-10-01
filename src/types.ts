/**
 * Curious Learners Types & Data Models
 */

export type Language = 'en' | 'bn';
export type ThemeMode = 'light' | 'dark';

export type UserRole = 'student' | 'teacher' | 'guest';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: 'google' | 'github' | 'guest';
  username: string;
  role: UserRole;
  bio: string;
  joinedDate: string;
  streakDays: number;
  completedLessonIds: string[];
  verifiedProjectIds: string[];
  submittedVerificationIds: string[];
  skills: string[];
  gitCommitsCount: number;
  totalStudyMinutes: number;
  track?: string;
  xp?: number;
  gems?: number;
  points?: number;
  level?: number;
}

export interface TerminalTask {
  id: string;
  instruction: { en: string; bn: string };
  expectedCommandPattern: string; // RegExp pattern or exact string
  successMessage: { en: string; bn: string };
}

export interface SandboxTaskRequirement {
  id: string;
  text: { en: string; bn: string };
  checkType?: 'html_contains' | 'css_contains' | 'js_contains' | 'console_log' | 'expected_output';
  checkValue?: string;
}

export interface SandboxTask {
  title?: { en: string; bn: string };
  objective: { en: string; bn: string };
  instructions: { en: string[]; bn: string[] };
  requirements: SandboxTaskRequirement[];
  expectedResult: { en: string; bn: string };
  skills: { en: string[]; bn: string[] };
}

export interface Lesson {
  id: string;
  weekId: string;
  order: number;
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  durationMinutes: number;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'git' | 'html' | 'css' | 'javascript' | 'react' | 'fullstack';
  objectives?: { en: string[]; bn: string[] };
  concepts?: { en: string[]; bn: string[] };
  resources?: { en: string[]; bn: string[] };
  contentMarkdown: { en: string; bn: string };
  practiceCode: string;
  expectedOutput: string;
  terminalTasks: TerminalTask[];
  task?: SandboxTask;
  prerequisiteLessonIds?: string[];
}

export interface CurriculumResource {
  id: string;
  lessonId: string;
  weekId: string;
  type: 'official_doc' | 'video' | 'article' | 'github_example' | 'interactive_challenge' | 'reference';
  title: { en: string; bn: string };
  provider: string;
  url: string;
  description: { en: string; bn: string };
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  relevance: { en: string; bn: string };
  projectAlignment?: { en: string; bn: string };
  verifiedAt: string;
  language: 'en' | 'bn' | 'both';
}

export interface Week {
  id: string;
  order: number;
  title: { en: string; bn: string };
  subtitle: { en: string; bn: string };
  description: { en: string; bn: string };
  isGitWeek: boolean;
  lessons: Lesson[];
}

export interface ProjectPrerequisite {
  requiredLessonIds: string[];
  requiresTeacherVerification: boolean;
}

export interface Project {
  id: string;
  projectNumber?: string;
  stack?: string;
  title: { en: string; bn: string };
  tagline: { en: string; bn: string };
  description: { en: string; bn: string };
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  category: string;
  prerequisites: ProjectPrerequisite;
  starterRepositoryUrl: string;
  submissionInstructions: { en: string; bn: string };
  tasks: string[];
}

export interface ForumPost {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  authorProvider: 'google' | 'github';
  title: string;
  content: string;
  category: 'git' | 'general' | 'help' | 'projects';
  createdAt: string;
  likesCount: number;
  likedBy: string[];
  commentsCount: number;
  comments: ForumComment[];
}

export interface ForumComment {
  id: string;
  postId: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
}

export interface SyncMutation {
  id: string;
  type: 'COMPLETE_LESSON' | 'SUBMIT_TEACHER_VERIFICATION' | 'CREATE_FORUM_POST' | 'CREATE_FORUM_COMMENT' | 'UPDATE_PROFILE' | 'LIKE_POST';
  payload: any;
  timestamp: number;
  status: 'pending' | 'syncing' | 'failed' | 'synced';
  retryCount: number;
}

export interface AppState {
  user: UserProfile | null;
  language: Language;
  theme: ThemeMode;
  activeTab: 'home' | 'syllabus' | 'projects' | 'forum' | 'profile';
  selectedWeekId: string | null;
  selectedLessonId: string | null;
  selectedProjectId: string | null;
  selectedPostId: string | null;
  syncQueue: SyncMutation[];
  isOnline: boolean;
  onboardingCompleted: boolean;
  pwaPromptDismissed: boolean;
}
