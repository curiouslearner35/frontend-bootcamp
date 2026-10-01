# Architecture & System Design — Curious Learners GitHub Curriculum Workspace v3

## 1. System Overview

Curious Learners transforms from a static learning sandbox into a **Git-backed, offline-first, local-first developer learning workspace**. Every authenticated student provisions a single, lifelong GitHub repository fork representing their entire 12-week frontend bootcamp journey.

```
STUDENT (Authenticated Identity)
   │
   ▼
CURRICULUM GIT WORKSPACE
   │
   ├── Upstream Starter Blueprint: https://github.com/curiouslearner35/frontend-bootcamp
   │
   └── Student Fork: https://github.com/{studentGithubUsername}/frontend-bootcamp
          │
          ├── main
          │     ├── week-00
          │     │     ├── week-00/lesson-00-01
          │     │     └── week-00/lesson-00-02
          │     ├── week-01
          │     │     ├── week-01/lesson-01-01
          │     │     ├── week-01/lesson-01-02
          │     │     └── week-01/lesson-01-03
          │     └── ...
          │           └── week-12/lesson-12-05
          │
          ├── LOG.md (Cumulative 100DaysOfCode Learning Log)
          └── docs/curriculum/week-XX/lesson-XX-YY.md (Detailed Lesson Journals)
```

---

## 2. Separation of Concerns & Three-Source Model

| Layer | Repository / System | Responsibility |
|---|---|---|
| **Curriculum Source** | `curiouslearner35/frontend-bootcamp` | Immutable upstream blueprint; curriculum definitions, exercise prompts, test specs, and starter templates. Read-only for students. |
| **Student Source** | `{student}/frontend-bootcamp` | Student-owned work, solution files (`index.html`, `style.css`, `script.js`), commit history, learning reflections, and GitHub Pages deployments. |
| **Control Plane** | Curious Learners Full-Stack App | Authentication, student progress gating, offline queue sync, mentor reviews, marks grading, and verifiable certificate issuance. |

---

## 3. Branch Lifecycle & Idempotency

Branch naming is deterministic and canonical:
- **Week Branch:** `week-XX` (e.g., `week-01`, `week-02`) derived from `main`.
- **Lesson Sub-Branch:** `week-XX/lesson-XX-YY` (e.g., `week-01/lesson-01-03`) derived from `week-XX`.

Resolution is strictly **idempotent**:
```
Request Branch (weekId, lessonId)
       │
       ▼
Check Local Workspace & Remote Branch Registry
       │
       ├── Exists? ──► Reuse existing branch metadata (Status: READY)
       └── Missing? ─► Provision new branch from base week branch
```

---

## 4. Lesson Completion Gate & Validation

A lesson reaches `READY_TO_SUBMIT` only when all prerequisites are satisfied:
1. **Theory Completed:** Theory reading section marked read.
2. **Practice Completed:** Sandbox coding exercise completed.
3. **Terminal Completed:** Git interactive terminal commands verified.
4. **Implementation Attached:** Solution code snippet provided or files uploaded.

Enforced uniformly via `validateLessonSubmission(params)` in `src/services/homeworkService.ts`.

---

## 5. Homework Multi-File & Journal Persistence

- **Multi-File Support:** Drag-and-drop / file picker for `.html`, `.css`, `.js`, `.ts`, `.tsx`, `.json`, `.md`.
- **Path Traversal Security:** Rejects files with leading `/` or `../`.
- **Upload Size Limits:** 5MB max upload limit per file; executable extensions (`.exe`, `.bat`, `.sh`, `.bin`, `.cmd`) blocked.
- **Autosave Engine:** Debounced local autosave under versioned key `curiousLearners.homework.v3.{studentId}.{lessonId}`.

---

## 6. Atomic Submission Transaction Sequence

```
Student Clicks "Submit Homework"
       │
       ▼
1. validateLessonSubmission()
       │
       ▼
2. Resolve Fork & Lesson Branch (week-XX/lesson-XX-YY)
       │
       ▼
3. Generate Commit SHA & Commit Message:
   "feat(week-XX/lesson-XX-YY): submit lesson homework"
       │
       ▼
4. Update Cumulative LOG.md & Lesson Journal
       │
       ▼
5. Push to Student's Lesson Branch
       │
       ▼
6. Generate Deterministic GitHub Issue for Mentor Review:
   "[Week XX][Lesson XX-YY] Homework Submission — Student Name"
       │
       ▼
7. Record Mentor Notification & Server Audit Log
       │
       ▼
8. Transition State: SUBMITTED ──► Awaiting Mentor Review
```

---

## 7. GitHub Pages Deployment Machine

State transitions:
`NOT_READY` $\rightarrow$ `READY` $\rightarrow$ `DEPLOY_REQUESTED` $\rightarrow$ `BUILDING` $\rightarrow$ `DEPLOYED` (or `FAILED`).

URL structure:
`https://{studentSlug}.github.io/frontend-bootcamp/{branchName}/`

---

## 8. Mentor Evaluation & Verifiable Certificate Engine

- **Authoritative Grading Service (`resolveGradeFromMarks`):**
  - $95-100 \rightarrow \text{A+}$
  - $85-94 \rightarrow \text{A}$
  - $70-84 \rightarrow \text{B}$
  - $60-69 \rightarrow \text{C}$
  - $0-59 \rightarrow \text{Fail}$
- **Certificate Issuance Gate:** Passing score $\ge 60$ marks mints official credential with SHA-256 signature hash and printable PDF preview.
- **Revision Request Flow:** Returns feedback and resets submission state to `REVISION_REQUIRED` allowing students to update their draft without losing previous progress.

---

## 9. Security Boundaries

1. **Zero Secret Exposure:** No GitHub tokens, OAuth secrets, or private keys stored in client `LocalStorage` or transmitted to browser.
2. **Server-Side Proxy:** All GitHub API operations run through backend endpoints.
3. **Replay Defense:** OAuth state tokens are one-time use with SHA-256 hashing and 10-minute TTL.
4. **Idempotency-Key Support:** Headers prevent duplicate mutations during network retries.
