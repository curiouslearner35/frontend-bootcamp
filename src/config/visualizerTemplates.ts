import { VisualizerTemplate } from '../types/visualizer';

export const VISUALIZER_TEMPLATES: VisualizerTemplate[] = [
  {
    id: 'github-readme',
    category: 'GitHub Profile README',
    name: 'GitHub Profile README',
    description: 'Stylized GitHub profile overview badge and statistics snippet.',
    defaultConfig: {
      language: 'markdown',
      theme: 'onedark',
      font: 'fira-code',
      fontSize: 14,
      padding: 32,
      windowStyle: 'mac',
    },
    sampleCode: `# 🚀 Hi there, I'm a Curious Learner!

### 💻 Stack & Expertise
- **Languages**: TypeScript, JavaScript, Python, SQL, HTML/CSS
- **Frameworks**: React, Express, Vite, Tailwind CSS
- **Cloud & DB**: Firebase Firestore, Node.js, Linux CLI

\`\`\`json
{
  "status": "Building cool projects",
  "dailyStreak": "🔥 15 Days",
  "gemsEarned": 1250,
  "level": 8
}
\`\`\`
`,
  },
  {
    id: 'github-minimal',
    category: 'GitHub Profile Minimal',
    name: 'GitHub Profile Minimal',
    description: 'Clean, minimalist code card for GitHub README headers.',
    defaultConfig: {
      language: 'typescript',
      theme: 'github-dark',
      font: 'jetbrains-mono',
      fontSize: 14,
      padding: 24,
      windowStyle: 'mac',
    },
    sampleCode: `interface DeveloperProfile {
  name: string;
  role: string;
  location: string;
  passions: string[];
}

const me: DeveloperProfile = {
  name: "Curious Learner",
  role: "Software Engineer",
  location: "Global / Remote",
  passions: ["Distributed Systems", "Full-Stack React", "Cybersecurity"]
};

console.log(\`Ready to build with \${me.name}\`);
`,
  },
  {
    id: 'roadmap',
    category: 'Project Roadmap',
    name: 'Project Roadmap',
    description: 'Structured progress roadmap for software milestones.',
    defaultConfig: {
      language: 'markdown',
      theme: 'nord',
      font: 'cascadia-code',
      fontSize: 14,
      padding: 32,
      windowStyle: 'mac',
    },
    sampleCode: `# 🗺️ Q4 Software Development Roadmap

- [x] Phase 1: Core Architecture & React SPA
- [x] Phase 2: Firebase Firestore & Google Auth Integration
- [x] Phase 3: Gem Economy & Daily Streak Engine
- [ ] Phase 4: Real-time Collaborative Coding
- [ ] Phase 5: Multi-region Cloud Deployment
`,
  },
  {
    id: 'activity-card',
    category: 'Activity Card',
    name: 'Activity Card',
    description: 'Learning activity report and milestone tracker.',
    defaultConfig: {
      language: 'json',
      theme: 'dracula',
      font: 'fira-code',
      fontSize: 14,
      padding: 28,
      windowStyle: 'mac',
    },
    sampleCode: `{
  "activity": "Completed Lesson 04 - Async JavaScript",
  "timestamp": "2026-09-28T00:00:00Z",
  "xpGained": 250,
  "gemsEarned": 50,
  "streakMaintained": true,
  "verifiedBy": "Curious Learners Academy Engine"
}
`,
  },
  {
    id: 'certificate',
    category: 'Certificate',
    name: 'Verified Certificate Badge',
    description: 'Cryptographic completion certificate verification block.',
    defaultConfig: {
      language: 'json',
      theme: 'solarized-dark',
      font: 'source-code-pro',
      fontSize: 13,
      padding: 32,
      windowStyle: 'mac',
    },
    sampleCode: `{
  "certificateId": "CERT-890214-GEMS",
  "recipient": "Curious Learner",
  "course": "Computer Science & Full-Stack Mastery",
  "grade": "Pass with Distinction (100%)",
  "issuedDate": "2026-09-28",
  "verificationUrl": "https://academy.curiouslearners.dev/certificate/CERT-890214-GEMS"
}
`,
  },
  {
    id: 'homework',
    category: 'Homework',
    name: 'Homework Code Submission',
    description: 'Clean formatting for student exercise submissions.',
    defaultConfig: {
      language: 'javascript',
      theme: 'monokai',
      font: 'consolas',
      fontSize: 14,
      padding: 28,
      windowStyle: 'mac',
    },
    sampleCode: `// Homework Solution: Array Filter & Reduce
function calculateTotalGems(activities) {
  return activities
    .filter(act => act.type === 'LESSON_COMPLETE')
    .reduce((total, act) => total + act.gemsEarned, 0);
}

const userActivities = [
  { type: 'LESSON_COMPLETE', gemsEarned: 50 },
  { type: 'STREAK_CHECKIN', gemsEarned: 20 },
  { type: 'LESSON_COMPLETE', gemsEarned: 50 }
];

console.log("Total Gems:", calculateTotalGems(userActivities)); // Output: 100
`,
  },
  {
    id: 'schedule',
    category: 'Routine / Schedule',
    name: 'Daily Study Routine',
    description: 'Structured daily learning regimen.',
    defaultConfig: {
      language: 'markdown',
      theme: 'github-light',
      font: 'menlo',
      fontSize: 14,
      padding: 32,
      windowStyle: 'mac',
    },
    sampleCode: `# ⏰ Daily Engineering Study Routine

| Time | Focused Task | Duration |
| :--- | :--- | :--- |
| **08:00 AM** | Theory Review & Concepts | 30 Mins |
| **08:30 AM** | Practice Sandbox Lab | 45 Mins |
| **09:15 AM** | Terminal Challenge Solving | 30 Mins |
| **07:00 PM** | Forum & Peer Code Review | 25 Mins |
`,
  },
  {
    id: 'snippet-dark',
    category: 'Code Snippet Dark',
    name: 'Code Snippet Dark',
    description: 'High contrast dark theme snippet for presentations.',
    defaultConfig: {
      language: 'typescript',
      theme: 'material',
      font: 'fira-code',
      fontSize: 15,
      padding: 36,
      windowStyle: 'mac',
    },
    sampleCode: `async function fetchLearnerStats(userId: string): Promise<LearnerStats> {
  const userDoc = await getDoc(doc(db, 'users', userId));
  if (!userDoc.exists()) {
    throw new Error('User profile not found in Firestore');
  }
  return userDoc.data() as LearnerStats;
}
`,
  },
  {
    id: 'snippet-light',
    category: 'Code Snippet Light',
    name: 'Code Snippet Light',
    description: 'Clean light theme snippet ideal for technical documentation.',
    defaultConfig: {
      language: 'typescript',
      theme: 'github-light',
      font: 'jetbrains-mono',
      fontSize: 14,
      padding: 32,
      windowStyle: 'mac',
    },
    sampleCode: `export function computeXPLevel(totalXP: number): number {
  if (totalXP <= 0) return 1;
  return Math.floor(Math.sqrt(totalXP / 100)) + 1;
}
`,
  },
  {
    id: 'api-docs',
    category: 'API Documentation',
    name: 'API Endpoint Spec',
    description: 'REST API endpoint request/response documentation.',
    defaultConfig: {
      language: 'bash',
      theme: 'onedark',
      font: 'fira-code',
      fontSize: 13,
      padding: 28,
      windowStyle: 'windows',
    },
    sampleCode: `# POST /api/v1/user/sync
curl -X POST https://academy.curiouslearners.dev/api/v1/user/sync \\
  -H "Authorization: Bearer <FIREBASE_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "streakDays": 5,
    "lastCheckIn": "2026-09-28",
    "completedLessonIds": ["lesson-01", "lesson-02"]
  }'
`,
  },
];
