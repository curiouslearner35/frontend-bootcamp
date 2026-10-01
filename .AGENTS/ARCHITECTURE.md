# System Architecture — Curious Learners

## 1. High-Level Architecture Overview

Curious Learners uses a hybrid full-stack architecture:
1. **React 19 SPA Client**: Handles stateful UI rendering, interactive curriculum tabs, real-time code execution inside sandboxed iFrames, terminal emulation, and LocalStorage persistence.
2. **Express 4 Server (`server.ts`)**: Serves Vite middleware in development, handles static assets in production, maintains an in-memory Redis TTL cache, manages Root Master session tokens, tracks audit logs, and ingests WakaTime-style activity events.

```
+-------------------------------------------------------------------------------+
|                             CLIENT (React 19 SPA)                             |
|                                                                               |
|  +--------------------+   +-----------------------+   +--------------------+  |
|  |    Syllabus &      |   |   Code Sandbox &      |   |    Terminal TUI    |  |
|  |   Lesson Theory    |   | Requirement Evaluator |   | (Oh My Posh Shell) |  |
|  +--------------------+   +-----------------------+   +--------------------+  |
|            |                          |                          |            |
|            +--------------------------+--------------------------+            |
|                                       |                                       |
|                    Local Storage & Progression Engines                        |
|                     (Gems, Streaks, Offline Sync Queue)                       |
+-------------------------------------------------------------------------------+
                                        | (HTTP REST / JSON)
                                        v
+-------------------------------------------------------------------------------+
|                            SERVER (Express 4 / Node)                          |
|                                                                               |
|  +--------------------+   +-----------------------+   +--------------------+  |
|  |  In-Memory Redis   |   |   Root Control Plane  |   | Activity Ingestion |  |
|  |     TTL Cache      |   |   & Session Store     |   |   & Audit Trail    |  |
|  +--------------------+   +-----------------------+   +--------------------+  |
+-------------------------------------------------------------------------------+
```

---

## 2. Learning Core Architecture

Every lesson follows a strict 3-tier sequence:

```
Lesson Title
    ↓
1. Lesson Theory (Public / Free)
    ↓
2. Practice Sandbox (Auth + 1 Gem) -> Evaluated by Homework Task Engine
    ↓
3. Interactive Terminal (Auth + 1 Gem) -> Fish Shell + Git VFS Engine
```

### A. Lesson Theory Engine (`src/pages/SyllabusPage.tsx`)
- Renders dual-language Markdown content (`en`/`bn`) with code snippets, key concepts, and copy buttons.
- Fully free and public; requires no login or Gems.
- Action button: "Mark as Read".

### B. Practice Sandbox Engine (`src/components/CodeSandbox.tsx`)
- CodePen-style live workspace with HTML, CSS, and JS editor tabs.
- Mounts an isolated `<iframe>` execution environment with custom `console.log` interceptors.
- **Task / Homework Layer**: Automatically generates structured `SandboxTask` from `src/services/taskGenerator.ts`.
- **Real-Time Evaluator**: Evaluates `codeState` (html/css/js) and `consoleLogs` against `SandboxTaskRequirement` rules (`html_contains`, `css_contains`, `js_contains`, `console_log`, `expected_output`).
- Renders requirement PASS (✓) / FAIL (✕) badges and actionable `💡 Fix: ...` recommendations.
- Lesson sandbox completion is ONLY granted when `allRequirementsMet === true`.

### C. Terminal TUI Engine (`src/components/Terminal.tsx`)
- Emulates a Fish Shell with Oh My Posh powerline prompt (`TerminalTopBanner`).
- Includes an in-memory Virtual Filesystem (VFS) and Git state engine (`src/services/terminalEngine.ts`).
- Features a dynamic system clock (`<LiveTerminalClock />`) updated every 1 second.
- Strict Focus Boundary: Switching tabs to Terminal switches active view state ONLY. Terminal input focus occurs ONLY on explicit user click/tap.

---

## 3. Access Control & Gem Economics Boundary

- **Syllabus & Lesson Theory**: 100% Public.
- **Practice Sandbox & Interactive Terminal**: Gated by Authentication + Gem Economy.
- Unlocking Practice/Terminal for a lesson costs **1 Gem** (`REWARD_CONFIG.sandboxStartCostGems = 1`). Unlocking once unlocks both tools for that lesson permanently.
- Gems are earned by completing daily streaks, completing lessons, logging in daily, and completing bonus tasks.

---

## 4. Root Control Plane (`src/pages/RootControlPage.tsx` & `/api/root/*`)

- Instructor management control plane.
- Authenticates using Master Key against `/api/root/auth` with rate-limiting & IP brute-force lockouts.
- Features real-time audit logging, student 360 profile inspection, certificate issuance (`/api/root/certificates/issue`), and revocation.
