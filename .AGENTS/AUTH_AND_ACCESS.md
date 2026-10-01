# Access Control & Security Matrix — Curious Learners

## 1. Access Matrix

| Feature / Resource | Public Guest | Authenticated Student | Student + 1 Gem | Root Commander |
| :--- | :---: | :---: | :---: | :---: |
| **Landing & Stats (`/`)** | ✅ Allowed | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Syllabus Navigation (`/syllabus`)** | ✅ Allowed | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Lesson Theory Reading** | ✅ Allowed | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Practice Sandbox Playground** | ❌ Gated | 🔐 Unlocks with 1 Gem | ✅ Allowed | ✅ Allowed |
| **Interactive Terminal TUI** | ❌ Gated | 🔐 Unlocks with 1 Gem | ✅ Allowed | ✅ Allowed |
| **Project Gallery (`/projects`)** | ✅ Allowed | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Forum Viewing (`/forum`)** | ✅ Allowed | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Posting in Forum** | ❌ Gated | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Student Profile (`/profile`)** | ❌ Gated | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Public Certificate Verification** | ✅ Allowed | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Root Control Plane (`/root`)** | ❌ Blocked | ❌ Blocked | ❌ Blocked | 🗝️ Master Key Required |

---

## 2. Policy Enforcement Rules (`src/services/accessPolicy.ts`)

- **Theory Access Policy**:
  - `accessPolicy.canAccessTheory(user, lessonId)` -> Always returns `true`. Theory remains 100% free for all students and guests.
- **Practice & Terminal Access Policy**:
  - `accessPolicy.canAccessPractice(user, lessonId)` -> Returns `true` if `user` is logged in AND lesson is included in `unlockedTools` set.
  - If locked, student must click "Unlock Practice & Terminal (1 Gem)" which triggers `gemEconomy.unlockTool(user, lessonId)`.
  - Unlocking once grants permanent access to BOTH Practice Sandbox and Interactive Terminal for that lesson.
- **Root Control Master Key Policy**:
  - Requires Master Key matching `process.env.ROOT_MASTER_KEY` (or fallback `codazi-root-master-2026`).
  - Constant-time comparison using `crypto.timingSafeEqual` prevents timing attack vulnerabilities.
  - IP brute-force protection locks out client IP for 15 minutes after 5 consecutive failed attempts.
