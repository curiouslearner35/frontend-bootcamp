# Functional Feature Map — Curious Learners

## 1. Interactive 12-Week Curriculum (`SyllabusPage.tsx`)

- **197 Lessons Across 12 Weeks**:
  - Week 00: Git & Version Control Setup (CLI focus)
  - Week 01: Git Fundamentals & Staging
  - Week 02: HTML5 Semantic Structure
  - Week 03: CSS3 Flexbox & Responsive Layouts
  - Week 04: CSS Grid & Modern Design Systems
  - Week 05: Modern JavaScript Fundamentals
  - Week 06: DOM Manipulation & Event Handling
  - Week 07: Asynchronous JS, Promises & Fetch API
  - Week 08: React Fundamentals & Component Architecture
  - Week 09: React State Management & Hooks
  - Week 10: Full-Stack Express Server & REST APIs
  - Week 11: Production Deployment & Capstone Integration
- **Bilingual Support**: Instant toggle between English (`en`) and Bengali (`bn`).
- **3-Section Tab Navigation**:
  - **Lesson Theory**: Free markdown lesson text with code snippets.
  - **Practice Sandbox**: Interactive code playground with live homework verification.
  - **Terminal**: In-browser shell simulator with Git VFS.

---

## 2. Practice Sandbox & Automated Verification (`CodeSandbox.tsx`)

- **CodePen-Style Playground**:
  - Independent HTML, CSS, and JS editor tabs.
  - Live preview iFrame with custom `console.log` capture.
  - Export capabilities to Carbon code cards, HTML files, or PDF.
  - Customizable themes (VS Code Dark, One Dark, Monokai, Dracula).
- **Task / Homework Section**:
  - Generated automatically for each lesson by `taskGenerator.ts`.
  - Displays Objective, Requirements checklist, Instructions, Expected Result, and Practiced Skills.
  - **Real-Time Validator**: Evaluates code and console logs against required DOM elements, CSS rules, JS statements, and expected outputs.
  - Individual `PASS` (✓) / `FAIL` (✕) indicators for each requirement with actionable fix suggestions (`💡 Fix: ...`).
  - Completion is strictly gated on passing all requirements (`allRequirementsMet`).

---

## 3. Interactive Terminal Emulator (`Terminal.tsx`)

- **Fish Shell / Oh My Posh Powerline**:
  - Renders user/host segment, current directory path, Git branch, execution latency, and dynamic TUI system clock.
- **Virtual Filesystem (VFS) & Git Engine (`terminalEngine.ts`)**:
  - Supports standard CLI commands: `ls`, `cd`, `pwd`, `cat`, `mkdir`, `touch`, `rm`, `clear`, `echo`, `date`.
  - Supports Git commands: `git init`, `git status`, `git add`, `git commit`, `git log`, `git branch`, `git checkout`.
- **Dynamic System Clock (`<LiveTerminalClock />`)**:
  - Driven by real current time (`new Date().toLocaleTimeString(...)`) updated every second.
  - Proper timer cleanup on unmount prevents memory leaks.
- **Intentional Interaction Discipline**:
  - Switching tabs to Terminal switches active view state ONLY.
  - Input focus occurs strictly when the student clicks/taps inside the terminal.

---

## 4. Gem Economy & Access Control (`gemEconomy.ts` & `rewards.ts`)

- **Gems Wallet System**:
  - 1 Gem required to unlock Practice Sandbox + Terminal for a lesson.
  - Permanent unlock recorded in LocalStorage.
- **Gem Earn Channels**:
  - Daily login streak bonus (+2 to +10 Gems).
  - Completing theory lessons (+1 Gem).
  - Completing homework assignments (+3 Gems).
  - Completing capstone projects (+10 Gems).

---

## 5. Activity Tracking & WakaTime-Style Analytics (`activityTracker.ts`)

- Records student active coding time across `THEORY_READING`, `SANDBOX_CODING`, `TERMINAL_COMMAND`, and `PROJECT_BUILDING`.
- Deduplicates event IDs before sending to server (`POST /api/activity/events`).
- Offline event buffer synced via background worker (`syncWorker.ts`).

---

## 6. Instructor Root Control Plane (`RootControlPage.tsx`)

- Protected by Master Key authentication (`POST /api/root/auth`).
- Master key rate-limiting & 15-minute brute-force IP lockout.
- Features:
  - Audit trail viewer (`GET /api/root/audit`).
  - Student 360 profile inspection and Gem balance adjustment.
  - Verifiable digital certificate issuance (`POST /api/root/certificates/issue`) and revocation.
