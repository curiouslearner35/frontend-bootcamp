import {
  StudentProfileControl,
  HomeworkSubmission,
  ProjectSubmission,
  CertificateRecord,
  Announcement,
  RootAuditEvent
} from '../types/rootControl';

export const INITIAL_ROOT_METRICS = {
  totalStudents: 1248,
  activeStudents: 842,
  atRiskStudents: 73,
  homeworkToReview: 126,
  projectsToReview: 41,
  completedStudents: 287,
  certificatesIssued: 241
};

export const INITIAL_STUDENTS_LIST: StudentProfileControl[] = [
  {
    identity: {
      id: 'std-shaon-01',
      name: 'Shaon Majumder',
      email: 'shaon@codazi.dev',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
      githubUsername: 'shaon-dev',
      createdAt: '2026-07-15T08:00:00Z',
      lastActive: '2 hours ago',
      authMethod: 'github'
    },
    learning: {
      currentWeek: 3,
      currentLessonId: 'w3-l4',
      currentLessonTitle: 'Mobile-First Responsive Navbar',
      lessonsCompletedCount: 34,
      totalLessons: 180,
      overallProgressPct: 19,
      streakDays: 4,
      totalStudyHours: 42.5,
      lastLearningActivity: 'Submitted Week 3 Homework 2h ago'
    },
    assessment: {
      homeworkSubmittedCount: 5,
      homeworkApprovedCount: 3,
      homeworkRevisionCount: 2,
      projectsCompletedCount: 2,
      averageQuizScorePct: 84
    },
    status: 'AT_RISK',
    atRiskReasons: ['Stuck on Week 3 media queries for 8 days', 'Multiple revisions on CSS Flexbox'],
    adminNotes: [
      {
        id: 'note-sh-1',
        author: 'Instructor Rahat',
        createdAt: '2026-09-19T10:00:00Z',
        content: 'Needs assistance with CSS media queries and flex wrap alignment.',
        type: 'intervention'
      }
    ],
    cohort: 'Cohort 2026-A'
  },
  {
    identity: {
      id: 'std-alex-02',
      name: 'Alex Rivera',
      email: 'alex.rivera@codazi.dev',
      avatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80',
      githubUsername: 'arivera-codes',
      createdAt: '2026-06-01T08:00:00Z',
      lastActive: '1 day ago',
      authMethod: 'github'
    },
    learning: {
      currentWeek: 12,
      currentLessonId: 'w12-l8',
      currentLessonTitle: 'Portfolio Deployment & Production Audit',
      lessonsCompletedCount: 180,
      totalLessons: 180,
      overallProgressPct: 100,
      streakDays: 45,
      totalStudyHours: 215.0,
      lastLearningActivity: 'Graduated BootCamp successfully'
    },
    assessment: {
      homeworkSubmittedCount: 24,
      homeworkApprovedCount: 24,
      homeworkRevisionCount: 1,
      projectsCompletedCount: 31,
      averageQuizScorePct: 98
    },
    status: 'CERTIFICATE_ISSUED',
    certificateId: 'CZ-2026-000241',
    adminNotes: [
      {
        id: 'note-al-1',
        author: 'Academic Board',
        createdAt: '2026-09-18T14:30:00Z',
        content: 'Exceptional final capstone project. Portfolio reviewed and verified.',
        type: 'praise'
      }
    ],
    cohort: 'Cohort 2026-A'
  },
  {
    identity: {
      id: 'std-devon-03',
      name: 'Devon Vance',
      email: 'devon@codazi.dev',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      githubUsername: 'devonvance-lab',
      createdAt: '2026-06-01T08:00:00Z',
      lastActive: '3 days ago',
      authMethod: 'github'
    },
    learning: {
      currentWeek: 12,
      currentLessonId: 'w12-l8',
      currentLessonTitle: 'Portfolio Deployment & Production Audit',
      lessonsCompletedCount: 180,
      totalLessons: 180,
      overallProgressPct: 100,
      streakDays: 32,
      totalStudyHours: 198.5,
      lastLearningActivity: 'Graduated BootCamp'
    },
    assessment: {
      homeworkSubmittedCount: 24,
      homeworkApprovedCount: 23,
      homeworkRevisionCount: 2,
      projectsCompletedCount: 30,
      averageQuizScorePct: 96
    },
    status: 'CERTIFICATE_ISSUED',
    certificateId: 'CZ-2026-000198',
    adminNotes: [],
    cohort: 'Cohort 2026-A'
  },
  {
    identity: {
      id: 'std-maria-04',
      name: 'Maria Chen',
      email: 'maria.chen@codazi.dev',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
      githubUsername: 'mariachen-ui',
      createdAt: '2026-07-20T09:00:00Z',
      lastActive: '5 hours ago',
      authMethod: 'email'
    },
    learning: {
      currentWeek: 4,
      currentLessonId: 'w4-l2',
      currentLessonTitle: 'CSS Grid Complex Layouts & BEM',
      lessonsCompletedCount: 52,
      totalLessons: 180,
      overallProgressPct: 29,
      streakDays: 12,
      totalStudyHours: 64.0,
      lastLearningActivity: 'Submitted Week 4 Homework 5h ago'
    },
    assessment: {
      homeworkSubmittedCount: 7,
      homeworkApprovedCount: 6,
      homeworkRevisionCount: 1,
      projectsCompletedCount: 5,
      averageQuizScorePct: 91
    },
    status: 'ACTIVE',
    adminNotes: [],
    cohort: 'Cohort 2026-A'
  },
  {
    identity: {
      id: 'std-marcus-05',
      name: 'Marcus Brody',
      email: 'marcus.brody@codazi.dev',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
      githubUsername: 'mbrody-dev',
      createdAt: '2026-07-01T10:00:00Z',
      lastActive: '8 days ago',
      authMethod: 'github'
    },
    learning: {
      currentWeek: 4,
      currentLessonId: 'w4-l1',
      currentLessonTitle: 'Advanced CSS Selectors & Cascade',
      lessonsCompletedCount: 46,
      totalLessons: 180,
      overallProgressPct: 25,
      streakDays: 0,
      totalStudyHours: 49.0,
      lastLearningActivity: 'Completed lesson 8 days ago'
    },
    assessment: {
      homeworkSubmittedCount: 4,
      homeworkApprovedCount: 4,
      homeworkRevisionCount: 0,
      projectsCompletedCount: 4,
      averageQuizScorePct: 80
    },
    status: 'AT_RISK',
    atRiskReasons: ['No activity for 8+ consecutive days', 'Week 4 homework overdue'],
    adminNotes: [
      {
        id: 'note-mb-1',
        author: 'System Sentinel',
        createdAt: '2026-09-20T00:00:00Z',
        content: 'Flagged as AT_RISK: Learner inactive for 8 days.',
        type: 'intervention'
      }
    ],
    cohort: 'Cohort 2026-A'
  },
  {
    identity: {
      id: 'std-fatima-06',
      name: 'Fatima Al-Mansoor',
      email: 'fatima.m@codazi.dev',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      githubUsername: 'fatimacodes',
      createdAt: '2026-06-25T11:00:00Z',
      lastActive: '1 hour ago',
      authMethod: 'github'
    },
    learning: {
      currentWeek: 8,
      currentLessonId: 'w8-l5',
      currentLessonTitle: 'React Hooks, useEffect & Custom Lifecycle',
      lessonsCompletedCount: 118,
      totalLessons: 180,
      overallProgressPct: 65,
      streakDays: 21,
      totalStudyHours: 135.0,
      lastLearningActivity: 'Working on React Weather Dashboard'
    },
    assessment: {
      homeworkSubmittedCount: 16,
      homeworkApprovedCount: 16,
      homeworkRevisionCount: 0,
      projectsCompletedCount: 18,
      averageQuizScorePct: 95
    },
    status: 'ACTIVE',
    adminNotes: [],
    cohort: 'Cohort 2026-A'
  },
  {
    identity: {
      id: 'std-liam-07',
      name: "Liam O'Connor",
      email: 'liam.oc@codazi.dev',
      avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80',
      githubUsername: 'liam-front',
      createdAt: '2026-06-05T08:00:00Z',
      lastActive: '30 mins ago',
      authMethod: 'github'
    },
    learning: {
      currentWeek: 12,
      currentLessonId: 'w12-l6',
      currentLessonTitle: 'Final Capstone Verification',
      lessonsCompletedCount: 178,
      totalLessons: 180,
      overallProgressPct: 99,
      streakDays: 18,
      totalStudyHours: 204.0,
      lastLearningActivity: 'Finished capstone README documentation'
    },
    assessment: {
      homeworkSubmittedCount: 24,
      homeworkApprovedCount: 24,
      homeworkRevisionCount: 2,
      projectsCompletedCount: 31,
      averageQuizScorePct: 94
    },
    status: 'CERTIFICATE_ELIGIBLE',
    adminNotes: [
      {
        id: 'note-liam-1',
        author: 'Instructor Tariq',
        createdAt: '2026-09-21T01:00:00Z',
        content: 'Satisfied all 12-week requirements. Ready for certificate issuance.',
        type: 'academic'
      }
    ],
    cohort: 'Cohort 2026-A'
  },
  {
    identity: {
      id: 'std-david-08',
      name: 'David Kim',
      email: 'david.kim@codazi.dev',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80',
      githubUsername: 'dkim-web',
      createdAt: '2026-08-01T09:00:00Z',
      lastActive: '6 hours ago',
      authMethod: 'google'
    },
    learning: {
      currentWeek: 2,
      currentLessonId: 'w2-l3',
      currentLessonTitle: 'CSS Box Model, Margins, Borders & Padding',
      lessonsCompletedCount: 22,
      totalLessons: 180,
      overallProgressPct: 12,
      streakDays: 7,
      totalStudyHours: 28.0,
      lastLearningActivity: 'Completed box model sandbox challenge'
    },
    assessment: {
      homeworkSubmittedCount: 3,
      homeworkApprovedCount: 3,
      homeworkRevisionCount: 0,
      projectsCompletedCount: 2,
      averageQuizScorePct: 88
    },
    status: 'ACTIVE',
    adminNotes: [],
    cohort: 'Cohort 2026-B'
  },
  {
    identity: {
      id: 'std-aisha-09',
      name: 'Aisha Patel',
      email: 'aisha.patel@codazi.dev',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
      githubUsername: 'aishapatel-dev',
      createdAt: '2026-06-15T08:00:00Z',
      lastActive: '4 hours ago',
      authMethod: 'email'
    },
    learning: {
      currentWeek: 10,
      currentLessonId: 'w10-l4',
      currentLessonTitle: 'Redux Toolkit Asynchronous Thunks & Slices',
      lessonsCompletedCount: 146,
      totalLessons: 180,
      overallProgressPct: 81,
      streakDays: 14,
      totalStudyHours: 168.0,
      lastLearningActivity: 'Debugging Redux async thunk action'
    },
    assessment: {
      homeworkSubmittedCount: 20,
      homeworkApprovedCount: 19,
      homeworkRevisionCount: 1,
      projectsCompletedCount: 24,
      averageQuizScorePct: 92
    },
    status: 'ACTIVE',
    adminNotes: [],
    cohort: 'Cohort 2026-A'
  }
];

export const INITIAL_HOMEWORK_QUEUE: HomeworkSubmission[] = [
  {
    id: 'hw-sub-101',
    studentId: 'std-shaon-01',
    studentName: 'Shaon Majumder',
    weekNumber: 3,
    weekTitle: 'Responsive Design & Mobile-First Layouts',
    lessonId: 'w3-l4',
    lessonTitle: 'Mobile-First Responsive Navbar',
    submittedAt: '2026-09-21T01:15:00Z',
    status: 'PENDING_REVIEW',
    round: 2,
    codeSnippet: `<nav class="navbar">\n  <div class="brand">Codazi</div>\n  <button class="hamburger" id="navToggle" aria-expanded="false">\n    <span class="bar"></span>\n  </button>\n  <ul class="nav-links" id="navMenu">\n    <li><a href="#home">Home</a></li>\n    <li><a href="#syllabus">Syllabus</a></li>\n    <li><a href="#projects">Projects</a></li>\n  </ul>\n</nav>`,
    repoUrl: 'https://github.com/shaon-dev/responsive-navbar',
    studentNotes: 'Fixed the media query breakpoint to 768px and added ARIA expanded states as requested in revision 1.',
    rubric: {
      correctness: 4,
      codeQuality: 4,
      understanding: 4,
      accessibility: 4,
      bestPractice: 4
    },
    revisionHistory: [
      {
        round: 1,
        submittedAt: '2026-09-19T14:00:00Z',
        status: 'REVISION_REQUESTED',
        feedback: 'Navigation bar was overflowing horizontally on iPhone 12 (390px). Please use max-width and fix z-index.',
        reviewedBy: 'Instructor Rahat'
      }
    ]
  },
  {
    id: 'hw-sub-102',
    studentId: 'std-maria-04',
    studentName: 'Maria Chen',
    weekNumber: 4,
    weekTitle: 'CSS Advanced & Preprocessing',
    lessonId: 'w4-l2',
    lessonTitle: 'CSS Grid Complex Layouts & BEM',
    submittedAt: '2026-09-20T22:30:00Z',
    status: 'PENDING_REVIEW',
    round: 1,
    codeSnippet: `.bento-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  padding: 1rem;\n}\n.bento-card--featured {\n  grid-column: span 2;\n}`,
    repoUrl: 'https://github.com/mariachen-ui/css-bento-grid',
    studentNotes: 'Implemented responsive bento grid using auto-fit and minmax formulas. Clean BEM naming.',
    rubric: {
      correctness: 5,
      codeQuality: 5,
      understanding: 5,
      accessibility: 4,
      bestPractice: 5
    }
  },
  {
    id: 'hw-sub-103',
    studentId: 'std-marcus-05',
    studentName: 'Marcus Brody',
    weekNumber: 4,
    weekTitle: 'CSS Advanced & Preprocessing',
    lessonId: 'w4-l1',
    lessonTitle: 'Advanced CSS Selectors & Cascade',
    submittedAt: '2026-09-13T10:00:00Z',
    status: 'REVISION_REQUESTED',
    round: 2,
    codeSnippet: `/* Overly specific selector chain */\nbody div.container > div#main .content-area div p.highlight:nth-of-type(2n) {\n  color: #ff0055 !important;\n}`,
    repoUrl: 'https://github.com/mbrody-dev/css-cascade-exercise',
    studentNotes: 'Attempted to override specificity using !important.',
    feedbackText: 'Avoid using !important to resolve cascade conflicts. Refactor specificity to max 2 classes.',
    requiredChanges: 'Remove !important and use class selector architecture.',
    reviewedBy: 'Instructor Tariq',
    reviewedAt: '2026-09-14T09:00:00Z'
  },
  {
    id: 'hw-sub-104',
    studentId: 'std-fatima-06',
    studentName: 'Fatima Al-Mansoor',
    weekNumber: 8,
    weekTitle: 'React.js Fundamentals & Component Architecture',
    lessonId: 'w8-l5',
    lessonTitle: 'React Hooks, useEffect & Custom Lifecycle',
    submittedAt: '2026-09-21T02:00:00Z',
    status: 'PENDING_REVIEW',
    round: 1,
    codeSnippet: `function useDebounce<T>(value: T, delay: number): T {\n  const [debounced, setDebounced] = useState(value);\n  useEffect(() => {\n    const timer = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n  return debounced;\n}`,
    repoUrl: 'https://github.com/fatimacodes/react-custom-hooks',
    studentNotes: 'Custom useDebounce and useLocalStorage hooks with complete TypeScript generics and clean cleanup functions.',
    rubric: {
      correctness: 5,
      codeQuality: 5,
      understanding: 5,
      accessibility: 5,
      bestPractice: 5
    }
  }
];

export const INITIAL_PROJECT_REVIEWS: ProjectSubmission[] = [
  {
    id: 'proj-sub-201',
    studentId: 'std-liam-07',
    studentName: "Liam O'Connor",
    projectNumber: 31,
    projectTitle: 'E-Commerce Full-Stack Storefront & Stripe Payment',
    difficulty: 'Mastery',
    stack: 'React + Node + Express + Firebase + Stripe API',
    submittedAt: '2026-09-20T19:00:00Z',
    status: 'PENDING_REVIEW',
    repoUrl: 'https://github.com/liam-front/codazi-ecommerce-capstone',
    liveDemoUrl: 'https://liam-store-capstone.web.app',
    documentationScore: 95,
    codeQualityScore: 92,
    responsiveScore: 98,
    gitUsageScore: 96,
    reviewerNotes: 'Capstone submission meets all 15 core criteria. Ready for graduation verification.'
  },
  {
    id: 'proj-sub-202',
    studentId: 'std-fatima-06',
    studentName: 'Fatima Al-Mansoor',
    projectNumber: 18,
    projectTitle: 'Real-Time Crypto & Currency Tracker',
    difficulty: 'Intermediate',
    stack: 'React + WebSocket + Chart.js + REST API',
    submittedAt: '2026-09-20T11:00:00Z',
    status: 'PENDING_REVIEW',
    repoUrl: 'https://github.com/fatimacodes/crypto-tracker-p18',
    liveDemoUrl: 'https://fatima-crypto.vercel.app',
    documentationScore: 90,
    codeQualityScore: 92,
    responsiveScore: 94,
    gitUsageScore: 95
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'anc-01',
    title: 'Live Workshop: React 19 Concurrent Features & Server Actions',
    content: 'Join Senior Instructor Tariq this Thursday at 8 PM UTC for a deep dive into React 19 transition APIs.',
    target: 'ALL',
    publishedAt: '2026-09-20T10:00:00Z',
    author: 'Tariq Hassan (Head of Curriculum)',
    priority: 'NORMAL'
  },
  {
    id: 'anc-02',
    title: 'Week 4 CSS Grid Submission Deadline Reminder',
    content: 'Learners in Week 4: Ensure your Bento Grid projects pass 320px mobile viewport tests before submitting.',
    target: 'WEEK',
    targetValue: 'Week 4',
    publishedAt: '2026-09-19T14:00:00Z',
    author: 'Instructor Rahat',
    priority: 'URGENT'
  }
];

export const INITIAL_CERTIFICATES: CertificateRecord[] = [
  {
    id: 'CZ-2026-000241',
    studentId: 'std-alex-02',
    studentName: 'Alex Rivera',
    studentEmail: 'alex.rivera@codazi.dev',
    program: 'Frontend Development BootCamp (12 Weeks)',
    completionDate: 'September 2026',
    issuedAt: '2026-09-18T14:30:00.000Z',
    status: 'VALID',
    curriculumStats: '180 Lessons Completed · 31 Projects Verified · 100% Score',
    issuer: 'Codazi BootCamp Academic Board',
    signatureHash: 'e7a8f9c1b3d54620aa11bc5982e04f0394721d'
  },
  {
    id: 'CZ-2026-000198',
    studentId: 'std-devon-03',
    studentName: 'Devon Vance',
    studentEmail: 'devon@codazi.dev',
    program: 'Frontend Development BootCamp (12 Weeks)',
    completionDate: 'August 2026',
    issuedAt: '2026-08-30T10:00:00.000Z',
    status: 'VALID',
    curriculumStats: '180 Lessons Completed · 30 Projects Verified · 98% Score',
    issuer: 'Codazi BootCamp Academic Board',
    signatureHash: '4f29a071ce99824e81a7b8e19c00bdf192834a'
  }
];
