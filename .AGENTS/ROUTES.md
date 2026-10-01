# SPA Route & Navigation Map — Curious Learners

## 1. Client SPA Routes (`App.tsx`)

| Path | Component | Purpose | Auth Requirement |
| :--- | :--- | :--- | :--- |
| `/` | `HomePage` | Hero section, platform stats, curriculum teaser | Public |
| `/syllabus` | `SyllabusPage` | 12-week interactive curriculum, theory, sandbox, terminal | Public (Theory) / Auth + Gems (Sandbox & Terminal) |
| `/projects` | `ProjectsPage` | 31 real-world capstone projects gallery | Public |
| `/forum` | `ForumPage` | Student Q&A discussion forum and code support | Public view / Auth to post |
| `/profile` | `ProfilePage` | Student profile, streak tracker, badge gallery, wallet | Auth required |
| `/cert/:id` | `PublicCertificatePage` | Verifiable public graduation certificate viewer | Public |
| `/root` | `RootControlPage` | Instructor control plane dashboard | Master Key Auth required |
| `/promo` | `PromotionalPage` | Marketing and enrollment landing page | Public |

---

## 2. Syllabus Lesson Tab Navigation Contract (`SyllabusPage.tsx`)

Inside `/syllabus`, when a lesson is selected, 3 tabs are available:

1. **Lesson Theory Tab** (`activeLessonTab === 'lesson'`):
   - Displays bilingual Markdown lesson content.
   - Completely free and public.
   - Action: "Mark as Read".

2. **Practice Sandbox Tab** (`activeLessonTab === 'sandbox'`):
   - Displays CodeSandbox playground with task/homework verification.
   - Requires login and **1 Gem** unlock cost.
   - Tab click handler: checks `accessPolicy.canAccessPractice(user, lessonId)` before displaying editor.

3. **Terminal Tab** (`activeLessonTab === 'terminal'`):
   - Displays Fish Shell / Oh My Posh terminal emulator.
   - Requires login and **1 Gem** unlock cost (shared with Practice Sandbox).
   - **Tab Navigation Discipline**:
     - `onClick={() => setActiveLessonTab('terminal')}` switches tab view ONLY.
     - Strictly forbids auto-focusing terminal input, executing commands, popping soft keyboards, or logging false activity.
