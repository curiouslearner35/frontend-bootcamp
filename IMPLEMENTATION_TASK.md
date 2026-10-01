# Implementation Tasks — Curious Learners GitHub Curriculum Workspace v3

## Phase Breakdown & Execution Matrix

- [x] **Phase 1 — Repository Connection & OAuth Start**
  - Implemented `GET /api/github/auth/start` with PKCE SHA-256 state hashing and `repo,user:email` scopes.
  - Implemented `GET /api/github/auth/callback` with one-time state consumption.
  - Implemented `GET /api/github/connection` and `POST /api/github/connection/verify`.

- [x] **Phase 2 — Student Fork Provisioning**
  - Bound upstream blueprint to `https://github.com/curiouslearner35/frontend-bootcamp`.
  - Implemented idempotent 1 Student = 1 Fork provisioner in `POST /api/workspaces/provision`.
  - Stored fork metadata without exposing credentials.

- [x] **Phase 3 — Branch Provisioning & Hierarchy**
  - Implemented deterministic week branches: `week-00` through `week-12`.
  - Implemented deterministic lesson branches: `week-XX/lesson-XX-YY`.
  - Verified race-condition safe branch resolution via `POST /api/workspaces/:id/branches/resolve`.

- [x] **Phase 4 — Lesson Workspace Binding**
  - Unified workspace resolution across `Terminal.tsx`, `MentorDashboard.tsx`, and `SyllabusPage.tsx`.
  - Guaranteed zero drift between components for active student, lesson, and branch.

- [x] **Phase 5 — Homework Multi-File System**
  - Enhanced drag & drop and multi-file picker for `.html`, `.css`, `.js`, `.ts`, `.tsx`, `.json`, `.md`.
  - Added path traversal protection (`../` rejection).
  - Enforced 5MB max upload limit and executable file rejection.

- [x] **Phase 6 — LOG.md & Cumulative 100DaysOfCode Engine**
  - Implemented cumulative learning log in `workspaceManager.updateCumulativeLogMd`.
  - Implemented detailed lesson journal at `docs/curriculum/week-XX/lesson-XX-YY.md`.

- [x] **Phase 7 — Submission Transaction Sequence**
  - Implemented atomic `submitHomework` sequence (Validate $\rightarrow$ Stage $\rightarrow$ Commit $\rightarrow$ Push $\rightarrow$ Issue $\rightarrow$ Notify).
  - Generated deterministic commit message: `feat(week-XX/lesson-XX-YY): submit lesson homework`.

- [x] **Phase 8 — GitHub Issue & Mentor Notification**
  - Created deterministic GitHub Issue metadata: `[Week XX][Lesson XX-YY] Homework Submission — Student Name`.
  - Added labels: `['homework', 'week-XX', 'lesson-XX-YY', 'under-review']`.
  - Generated real-time mentor notification payload.

- [x] **Phase 9 — GitHub Pages Deployment Lifecycle**
  - Implemented deployment state machine (`NOT_READY` $\rightarrow$ `READY` $\rightarrow$ `DEPLOY_REQUESTED` $\rightarrow$ `BUILDING` $\rightarrow$ `DEPLOYED`).
  - Added verified URL generation: `https://{student}.github.io/frontend-bootcamp/{branch}/`.

- [x] **Phase 10 — Mentor Review & Configurable Grading**
  - Created `resolveGradeFromMarks` in `src/types/gitWorkspace.ts`.
  - Supported actions: `APPROVE`, `REQUEST_REVISION`, `REJECT`.
  - Handled 0–100 marks scale mapped to A+, A, B, C, Fail.

- [x] **Phase 11 — Dashboard Synchronization**
  - Integrated real-time sync polling (`GET /api/submissions/:id/sync`).
  - Live feedback rendering and status updates on student dashboard.

- [x] **Phase 12 — Verifiable Certificate Minting**
  - Enforced passing threshold ($\ge 60$ marks).
  - Generated cryptographic verification hash and printable certificate (`CertificateModal.tsx`).
  - Added public certificate verification registry (`GET /api/certificates/:id`).

- [x] **Phase 13 — Offline / Retry Hardening**
  - Versioned storage keys: `curiousLearners.homework.v3.{studentId}.{lessonId}`.
  - Offline sync queue with debounced local autosave.

- [x] **Phase 14 — Security Audit & Invariant Enforcement**
  - Verified 0 tokens in LocalStorage.
  - Added `Idempotency-Key` deduplication on submission endpoints.
  - Enforced path traversal defenses.

- [x] **Phase 15 — Regression & E2E Testing**
  - Built automated E2E test runner (`scripts/e2e-audit-test.ts`).
  - Ran `npm test` (27/27 test cases passed).
  - Ran `npm run lint` and `npm run build` cleanly.
