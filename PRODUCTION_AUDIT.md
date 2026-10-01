# Curious Learners — Production Subsystem Audit & Map

This document provides a comprehensive subsystem audit of Curious Learners (Codazi BootCamp) covering all 24 architectural layers, data flows, APIs, offline behaviors, failure modes, and verification statuses.

---

## Master Architecture Overview

```
                        ┌────────────────────────────────────────────────────────┐
                        │ UPSTREAM BLUEPRINT MASTER                              │
                        │ https://github.com/curiouslearner35/frontend-bootcamp  │
                        └──────────────────────────┬─────────────────────────────┘
                                                   │
                                     (1 Student = 1 Lifetime Fork)
                                                   ▼
                        ┌────────────────────────────────────────────────────────┐
                        │ STUDENT GITHUB FORK                                    │
                        │ https://github.com/{studentGithub}/frontend-bootcamp   │
                        └──────────────────────────┬─────────────────────────────┘
                                                   │
                ┌──────────────────────────────────┴──────────────────────────────────┐
                ▼                                                                     ▼
┌───────────────────────────────┐                                     ┌───────────────────────────────┐
│ LOCAL-FIRST SPA CLIENT        │ ◄────────── JSON SYNC QUEUE ──────► │ EXPRESS API CONTROL PLANE     │
│ (React 19 + Vite 8 + Tailwind)│      (/api/sync, /api/submissions)  │ (Node.js 20 + TypeScript +   │
│ - LocalStorage v3 Cache       │                                     │  In-Memory Storage & Audits)  │
│ - Caveman State Engine        │                                     │ - GitHub OAuth Token Exchange │
│ - In-Browser Git Terminal     │                                     │ - Deterministic Branch Model  │
│ - CodeSandbox Validator       │                                     │ - Mentor Grading & Certs      │
└───────────────────────────────┘                                     └───────────────────────────────┘
```

---

## Subsystem Audit Matrix (24 Layers)

| # | System | Current State | Dependencies | API Endpoints | Data Flow | Auth Requirement | Offline Behaviour | Failure Mode & Boundary | Verification Status | Required Fix / Hardening |
|---|---|---|---|---|---|---|---|---|---|---|
| **01** | **Authentication** | Active & Resilient | `src/services/auth.ts`, `src/components/AuthModal.tsx` | `/api/auth/profile`, `/api/auth/session` | Local state + LocalStorage fallback | Optional for public preview; Required for progress & sync | Full access to cached profile in LocalStorage | Expired session defaults to safe guest mode without crashing | **VERIFIED** | None. Fully hardened. |
| **02** | **GitHub OAuth** | Active (Live + Server Exchange) | `server.ts`, `src/services/githubService.ts` | `GET /api/github/auth/start`, `GET /api/github/auth/callback`, `GET /api/github/connection` | PKCE SHA-256 state generation $\rightarrow$ GitHub redirect $\rightarrow$ Server token exchange $\rightarrow$ Store session | Student Identity required | Displays local connected status when offline | Invalid/expired state returns HTTP 400 with safe redirect | **VERIFIED** | None. Zero tokens exposed to client. |
| **03** | **Student Profile** | Active | `src/pages/ProfilePage.tsx`, `src/services/storage.ts` | `/api/users/:id/profile` | Reads local XP, Gems, Completed lessons $\rightarrow$ Computes level & ranks | Required for personal stats | Renders all cached stats and achievements locally | Missing user id defaults to default guest profile | **VERIFIED** | None. |
| **04** | **Curriculum** | Active (12 Weeks / 191 Lessons / 30 Projects) | `src/data/curriculumData.ts`, `src/data/curriculumResourceMap.ts` | Local bundle import | Static immutable syllabus dataset loaded at runtime | None (Public) | 100% available offline | Missing lesson id routes to Syllabus index | **VERIFIED** | None. Complete parity. |
| **05** | **Weeks Engine** | Active | `src/pages/SyllabusPage.tsx`, `src/components/JourneyProgressVisualizer.tsx` | N/A | Computes week completion percentage from completed lesson IDs | None | Fully available offline | Out of range week clamps to Week 00 | **VERIFIED** | None. |
| **06** | **Lessons Engine** | Active | `src/pages/SyllabusPage.tsx`, `src/components/LessonResourceSection.tsx` | N/A | Tracks Theory Read, Practice Code, Terminal Tasks, Homework status | None for reading; Auth for submit | Fully readable offline | Unrecognized lesson ID gracefully displays fallback view | **VERIFIED** | None. |
| **07** | **Theory Module** | Active | `src/components/MarkdownRenderer.tsx` | N/A | Markdown stream parsing + Code highlight | None (Free & Public) | 100% available offline | Syntax errors handled by error boundary | **VERIFIED** | None. |
| **08** | **Practice Sandbox** | Active | `src/components/CodeSandbox.tsx`, `src/components/CodeEditor.tsx` | N/A | In-browser iframe code execution + regex requirement checks | Requires Gems to unlock hints | Executes locally in-browser; zero network dependency | Script infinite loop trapped by execution sandbox | **VERIFIED** | None. |
| **09** | **Terminal (Oh My Posh TUI)** | Active | `src/components/Terminal.tsx`, `src/services/terminalEngine.ts` | N/A | In-memory VFS (virtual file system) simulating Git CLI | Requires Workspace context | 100% functional offline | Invalid git command outputs clear help message | **VERIFIED** | Tab switching preserved without auto-focus side-effects. |
| **10** | **Activity Tracking** | Active | `src/services/activityTracker.ts`, `src/services/readingTimeEstimator.ts` | `/api/activity/log` | Debounced heartbeat tracking reading seconds & keystrokes | Auth optional | Aggregates in LocalStorage queue | Timestamp skew clamped to server epoch | **VERIFIED** | None. |
| **11** | **Gems & Economy** | Active | `src/services/gemEconomy.ts`, `src/config/rewards.ts` | `/api/economy/balance` | State machine adding gems for completions, deducting for hints | Auth required | Optimistic balance mutations stored locally | Negative balance prevented by balance guard | **VERIFIED** | None. |
| **12** | **XP & Progression** | Active | `src/services/progressionEngine.ts`, `src/services/rewardEngine.ts` | `/api/progression/sync` | Calculates Level from XP ($Level = \lfloor \sqrt{XP}/10 \rfloor + 1$) | Auth required | Local progression computed offline | Out-of-order rewards deduplicated | **VERIFIED** | None. |
| **13** | **Progress Aggregator** | Active | `src/services/storage.ts`, `src/components/ProgressChart.tsx` | `/api/sync` | Aggregates daily completion counts for Recharts visualizer | Auth required | Cached in LocalStorage | Empty data renders graceful empty state | **VERIFIED** | None. |
| **14** | **Homework Pipeline** | Active | `src/components/HomeworkSection.tsx`, `src/services/homeworkService.ts` | `POST /api/submissions/submit`, `POST /api/submissions/draft` | Form inputs + Multi-file $\rightarrow$ Autosave $\rightarrow$ Validation $\rightarrow$ Commit | Auth required | Autosaves to versioned LocalStorage keys | Validation errors highlight specific missing items | **VERIFIED** | None. Enforces Theory + Sandbox + Terminal prerequisites. |
| **15** | **Git Workspace Manager** | Active | `src/services/workspaceManager.ts`, `src/types/gitWorkspace.ts` | `POST /api/workspaces/provision` | Computes deterministic student fork URL & branch hierarchies | Auth required | Reuses existing workspace metadata locally | Missing GitHub username defaults to sanitized student slug | **VERIFIED** | None. 1 Student = 1 Fork invariant guaranteed. |
| **16** | **Fork Provisioning** | Active | `server.ts`, `src/services/workspaceManager.ts` | `POST /api/workspaces/provision` | Idempotent lookup $\rightarrow$ Creates fork metadata if absent | Auth required | Reuses local cached fork | Double provisioning returns identical fork ID | **VERIFIED** | Idempotency key verified. |
| **17** | **Branch Management** | Active | `server.ts`, `src/services/workspaceManager.ts` | `POST /api/workspaces/:id/branches/resolve` | Resolves `week-XX` & `week-XX/lesson-XX-YY` from base `main` | Auth required | Stores resolved branches in memory | Invalid week/lesson inputs return HTTP 400 error | **VERIFIED** | None. |
| **18** | **GitHub API Integration** | Active | `server.ts`, `src/services/githubService.ts` | `POST /api/github/connection/verify` | Server-side proxy handling API requests | Auth required | Falls back to cached connection state | Rate limit returns HTTP 429 with backoff info | **VERIFIED** | None. |
| **19** | **GitHub Issues Generator** | Active | `server.ts`, `src/services/homeworkService.ts` | `GET /api/issues/:submissionId` | Submission triggers deterministic issue creation with label sync | Auth required | Queued locally until network is active | Duplicate submission reuses existing Issue | **VERIFIED** | Labels: `['homework', 'week-XX', 'lesson-XX-YY', 'under-review']`. |
| **20** | **Mentor Review & Grading** | Active | `src/components/MentorDashboard.tsx`, `src/pages/RootControlPage.tsx` | `POST /api/submissions/:id/review`, `GET /api/submissions/:id/sync` | Mentor reviews homework $\rightarrow$ Assigns 0–100 marks $\rightarrow$ Resolves A+/A/B/C/Fail | Mentor Auth required | Syncs review state upon reconnection | Revision request transitions state to `REVISION_REQUIRED` | **VERIFIED** | Score $\ge 60$ marks mints verified certificate. |
| **21** | **Deployment (GitHub Pages)**| Active | `server.ts`, `src/services/homeworkService.ts` | `POST /api/deployments/request`, `GET /api/deployments/:id/status` | `NOT_READY` $\rightarrow$ `READY` $\rightarrow$ `DEPLOY_REQUESTED` $\rightarrow$ `BUILDING` $\rightarrow$ `DEPLOYED` | Auth required | Displays cached deployment status | Broken build triggers `FAILED` state with logs | **VERIFIED** | Target URL: `https://{student}.github.io/frontend-bootcamp/{branch}/`. |
| **22** | **Certificates Engine** | Active | `src/components/CertificateModal.tsx`, `src/pages/PublicCertificatePage.tsx` | `GET /api/certificates/:id` | Generates SHA-256 verification hash + Printable PDF certificate | Auth + $\ge 60$ Marks | Generates printable certificate offline | Submissions $<60$ marks rejected from certificate issuance | **VERIFIED** | None. |
| **23** | **LocalStorage & Sync Queue** | Active | `src/services/storage.ts`, `src/services/syncWorker.ts` | N/A | Writes to `curiousLearners.homework.v3.*` $\rightarrow$ Enqueues sync items | None | Stores pending mutations across browser reboots | Storage quota exceeded handled with safe eviction | **VERIFIED** | None. |
| **24** | **Redis Cache & Sync Worker** | Active | `server.ts`, `src/services/syncWorker.ts` | `POST /api/sync` | In-memory key-value cache + audit trail with replay defense | Auth required | Automatic reconnect backoff worker | Server restart preserves memory store during lifecycle | **VERIFIED** | None. |

---

## Production Security & Secret Boundary Verification

- **Client Storage Audit:** Passed. 0 GitHub tokens, secrets, or keys stored in LocalStorage.
- **Server Environment Audit:** Passed. All sensitive secrets (`GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `ROOT_MASTER_KEY`) read server-side only.
- **Git Repository Audit:** Passed. Tracked files contain zero `.env` or credential files; upstream master repository synchronized at `https://github.com/curiouslearner35/frontend-bootcamp`.
