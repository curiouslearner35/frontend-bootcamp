# Directory Map — Curious Learners

```
curious-learners/
├── .AGENTS/                           # AI Agent Governance & Project Context Layer
│   ├── README.md                      # Governance Index
│   ├── PROJECT_CONTEXT.md             # Identity, tech stack, and state
│   ├── ARCHITECTURE.md                # Full-stack architecture & execution boundaries
│   ├── DIRECTORY_MAP.md               # This directory map
│   ├── FEATURES.md                    # Functional feature specifications
│   ├── DATA_FLOW.md                   # State, LocalStorage, and sync queue map
│   ├── ROUTES.md                      # SPA route & tab navigation contracts
│   ├── API_MAP.md                     # Express server API endpoints map
│   ├── AUTH_AND_ACCESS.md             # Security and access matrix
│   ├── UI_RULES.md                    # Visual design constitution & layout guidelines
│   ├── DOMAIN_RULES.md                # Git-first, Homework, and Terminal contracts
│   ├── DEVELOPMENT_RULES.md           # Coding & TypeScript conventions
│   ├── TESTING.md                     # QA and verification testing scripts
│   ├── VALIDATION.md                  # Verification commands contract
│   ├── CHANGE_CONTROL.md              # Patch discipline & regression prevention
│   ├── AGENT_WORKFLOW.md              # Lifecycle workflow for AI agents
│   └── CONTEXT_BASELINE_MANIFEST.json # Machine-readable system baseline
│
├── public/                            # Static public assets (icons, manifest)
├── scripts/                           # Build & maintenance helper scripts
├── src/                               # Application source code
│   ├── App.tsx                        # Root React component, top-level layout & page routing
│   ├── main.tsx                       # React DOM root mounting entry point
│   ├── index.css                      # Global Tailwind CSS imports & custom scrollbar styles
│   ├── types.ts                       # Core TypeScript interfaces (Lesson, User, Task, Gem)
│   │
│   ├── components/                    # Reusable React UI Components
│   │   ├── AuthModal.tsx              # Student login / register modal
│      ├── BottomNav.tsx               # Mobile view bottom navigation bar
│      ├── CodeEditor.tsx              # Prism/Monaco syntax highlighted code display
│      ├── CodeSandbox.tsx             # CodePen-style playground + Homework task evaluator
│      ├── CreateAccountBanner.tsx     # Guest prompt to create account
│      ├── DailyStreakWidget.tsx       # Daily streak tracker & claim widget
│      ├── GitHubProfileSync.tsx       # Sync user profile with GitHub API
│      ├── Header.tsx                  # Top navigation header with Gems counter & profile avatar
│      ├── MarkdownRenderer.tsx        # Styled markdown renderer for theory content
│      ├── OnboardingModal.tsx         # New student welcome & goal selection modal
│      ├── PlaygroundExportModal.tsx   # Export code/card to PNG/PDF/ZIP
│      ├── PlaygroundSettingsModal.tsx # Editor settings (auto-run, layout, font size)
│      ├── ProgressChart.tsx           # Recharts completion progress chart
│      ├── PWAInstallGuide.tsx         # PWA installation instructions drawer
│      ├── StreakCheckInModal.tsx      # Daily check-in modal
│      ├── TeacherVerificationModal.tsx# Teacher verification dialog
│      ├── Terminal.tsx                # Fish shell / Oh My Posh terminal simulator & clock
│      │
│      ├── learningSession/            # Time-blocked learning session components
│      │   ├── ActiveSessionWidget.tsx # Floating session timer widget
│      │   ├── SessionAlarmToast.tsx   # Alarm toast notification
│      │   ├── SessionPlannerModal.tsx # Plan learning time blocks
│      │   └── SessionSummaryModal.tsx # Post-session summary modal
│      │
│      └── root/                       # Root Control Plane components
│       ├── GlobalSearchModal.tsx     # Master search modal for instructors
│       ├── HomeworkReviewModal.tsx    # Review student homework submissions
│       ├── RootMasterSignIn.tsx       # Master key sign-in modal
│       └── Student360Drawer.tsx       # Detailed student profile inspector
│
│   ├── config/                        # Configuration constants
│   │   └── rewards.ts                 # Gem rewards config, costs, and unlock rules
│   │
│   ├── data/                          # Static & Seed Data
│   │   ├── curriculumData.ts          # 12-week curriculum data (197 lessons)
│   │   ├── forumData.ts               # Community forum posts and replies
│   │   ├── projectsData.ts            # 31 Capstone project specifications
│   │   └── rootControlData.ts         # Instructor control plane seed data
│   │
│   ├── i18n/                          # Internationalization
│   │   └── translations.ts            # English (`en`) and Bengali (`bn`) translation strings
│   │
│   ├── pages/                         # Top-Level Page Components
│   │   ├── ForumPage.tsx              # Community Q&A forum page
│   │   ├── HomePage.tsx               # Landing page with stats, hero, and syllabus link
│   │   ├── ProfilePage.tsx            # Student profile, badges, and gems history
│   │   ├── ProjectsPage.tsx           # Capstone project gallery
│   │   ├── PromotionalPage.tsx        # Marketing & enrollment page
│   │   ├── PublicCertificatePage.tsx  # Verifiable public certificate viewer (`/cert/:id`)
│   │   ├── RootControlPage.tsx        # Instructor control center (`/root`)
│   │   └── SyllabusPage.tsx           # Interactive 12-week syllabus with Theory/Sandbox/Terminal
│   │
│   ├── services/                      # Application Business Logic & Services
│   │   ├── accessPolicy.ts            # Public vs Auth + Gems access policy rules
│   │   ├── activityTracker.ts         # WakaTime-style activity tracking & event queue
│   │   ├── analyticsService.ts        # Event logging & analytics
│   │   ├── auth.ts                    # User session management & auth helpers
│   │   ├── chapterEngine.ts           # Week/Chapter progress calculation engine
│   │   ├── dailyGoalsEngine.ts        # Daily coding goal engine
│   │   ├── gemEconomy.ts              # Gem wallet transactions & unlock management
│   │   ├── githubService.ts           # GitHub API integration service
│   │   ├── leaderboardService.ts      # Student leaderboard ranking engine
│   │   ├── progressionEngine.ts       # Overall student curriculum progression
│   │   ├── rewardEngine.ts            # Achievement badge & streak reward engine
│   │   ├── sessionManager.ts          # Learning session timer & sound alarms
│   │   ├── soundAlarm.ts              # Audio notification player
│   │   ├── storage.ts                 # LocalStorage abstraction layer
│   │   ├── syncWorker.ts              # Background offline sync queue worker
│   │   ├── taskGenerator.ts           # Lesson theory to Homework task mapping generator
│   │   └── terminalEngine.ts          # Terminal VFS, command parser, and Git engine
│   │
│   ├── types/                         # Module-specific TypeScript Interfaces
│   │   ├── economy.ts                 # Gem wallet and transaction types
│   │   ├── learningSession.ts         # Session planning & timer types
│   │   ├── playground.ts              # CodeSandbox settings and state types
│   │   └── rootControl.ts             # Instructor control plane types
│   │
│   └── utils/                         # Helper Utilities
│       └── playgroundThemes.ts        # CodeSandbox syntax themes (VS Code, One Dark, Monokai)
│
├── package.json                       # Dependencies and npm scripts (`dev`, `build`, `lint`)
├── server.ts                          # Express 4 full-stack server & API routes
├── vite.config.ts                     # Vite build & plugin configuration
└── tsconfig.json                      # TypeScript compiler options
```
