# Curious Learners — Full-Stack Developer Learning Platform & GitHub Curriculum Workspace

**Official Starter / Master Repository:**  
[`https://github.com/curiouslearner35/frontend-bootcamp`](https://github.com/curiouslearner35/frontend-bootcamp)

---

## 🚀 Overview

Curious Learners is an offline-first, local-first web application designed to teach modern full-stack web development with a foundational **"Learn Git Before Learning Code"** methodology.

The platform provides a complete 12-week curriculum (191+ lessons, 30+ verified projects) with an embedded terminal sandbox, live code editor, 100DaysOfCode learning journal, and a Git-backed workspace engine where each authenticated student provisions their own persistent GitHub repository fork.

```
CURRICULUM UPSTREAM STARTER
https://github.com/curiouslearner35/frontend-bootcamp
         │ (1 Student = 1 Lifetime Fork)
         ▼
STUDENT GITHUB WORKSPACE
https://github.com/{studentGithubUsername}/frontend-bootcamp
         │
         ├── main
         ├── week-00 ──► week-00/lesson-00-01
         ├── week-01 ──► week-01/lesson-01-01
         │           ──► week-01/lesson-01-02
         │           ──► week-01/lesson-01-03
         └── ...
```

---

## 🌟 Core Architecture & Capabilities

### 1. Curriculum & Learning Engine
- **12-Week Syllabus (191 Lessons & 30 Projects)**: Complete path covering HTML5, CSS3, Responsive Design, JavaScript, DOM, ES6+, React Core, Advanced React, Redux/Testing, Node/Express Backend, Full-Stack Architecture, and Portfolio Capstones.
- **Visual Lesson Detail Engine**: Detailed breakdown with Duration, Module badges, `🎯 OBJECTIVES`, `🧠 CORE CONCEPTS`, `🛠 PRACTICE TASK`, and `📚 RESOURCES`.
- **Interactive Terminal & Sandbox**: In-browser Apple-native terminal CLI and live JavaScript/React code sandbox.
- **Activity & Progression Tracking**: WakaTime-style learning tracker, daily goals, XP, streaks, and gem economy.

### 2. GitHub Curriculum Workspace v3
- **Immutable Upstream Blueprint**: `https://github.com/curiouslearner35/frontend-bootcamp` acts as the starter repository.
- **Deterministic 1 Student = 1 Fork Invariant**: Scoped per student across all 12 weeks.
- **Deterministic Branch Hierarchy**:
  - Week Branch: `week-XX`
  - Lesson Sub-Branch: `week-XX/lesson-XX-YY`
- **100DaysOfCode Journal**: Cumulative `LOG.md` and lesson journals at `docs/curriculum/week-XX/lesson-XX-YY.md`.
- **Atomic Submissions**: Multi-file code attachments, deterministic commit SHAs, GitHub Issues, and mentor notifications.
- **GitHub Pages Deployments**: Automated deployment tracking (`NOT_READY` $\rightarrow$ `READY` $\rightarrow$ `DEPLOY_REQUESTED` $\rightarrow$ `BUILDING` $\rightarrow$ `DEPLOYED`).

### 3. Mentor Review & Verifiable Credentials
- **Instructor Command Center (`/root`) & Mentor Dashboard**: Review submitted homework, assign marks (0–100 scale), apply letter grades (`A+`, `A`, `B`, `C`, `Fail`), and provide revision feedback.
- **Verifiable Graduation Certificates**: Automated minting for scores $\ge 60$ marks with cryptographic verification hashes and printable PDF preview (`/api/certificates/:id`).

---

## 🛠 Local Setup & Development

### Prerequisites
- Node.js (v20+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/curiouslearner35/frontend-bootcamp.git
cd frontend-bootcamp

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
```

### Environment Variables
Configure `.env` as required (placeholders in `.env.example`):
- `GEMINI_API_KEY`: Server-side Gemini API access.
- `APP_URL`: Host application URL for OAuth redirects.
- `ROOT_MASTER_KEY`: Instructor dashboard access key.
- `GITHUB_CLIENT_ID` & `GITHUB_CLIENT_SECRET`: GitHub OAuth App credentials.
- `GITHUB_CALLBACK_URL`: Server-side OAuth callback endpoint.

### Scripts
```bash
# Start full-stack development server (Express backend + Vite middleware on Port 3000)
npm run dev

# Run TypeScript typechecks
npm run lint

# Run E2E verification test suite (27 test cases)
npm test

# Production build (Vite SPA + Node.js bundle)
npm run build

# Start production server
npm start
```

---

## 🔒 Security Principles

- **Zero Client Token Storage**: No GitHub access tokens, App private keys, or OAuth secrets are stored in client `LocalStorage` or exposed to the browser.
- **Server-Side API Proxy**: All mutations and external GitHub API interactions execute server-side.
- **Path Traversal Defense**: All file uploads strictly validated against directory traversal (`../` prohibited).
- **Idempotency**: All mutation endpoints use deterministic idempotency keys to prevent duplicate commits or issue generation.

---

## 📄 License
MIT License. Curious Learners Academy.
