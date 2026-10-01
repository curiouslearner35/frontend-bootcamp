# Data Flow & State Map — Curious Learners

## 1. State Ownership Matrix

| State Scope | Primary Storage | Source of Truth | Sync Strategy |
| :--- | :--- | :--- | :--- |
| **User Session & Auth** | LocalStorage | `curious_learners_user` | Synced on login/register/logout |
| **Gems Wallet & Unlocks** | LocalStorage | `curious_learners_wallet` & `curious_learners_unlocked_tools` | Instant local update + sync queue |
| **Lesson Progression** | LocalStorage | `curious_learners_completed_lessons` | Updated on lesson/homework complete |
| **Theory Progress** | LocalStorage | `curious_learners_completed_theory_lessons` | Updated on "Mark as Read" click |
| **Sandbox Code per Lesson** | LocalStorage | `codazi_playground_code_${lessonId}` | Saved on run / edit |
| **Sandbox Settings** | LocalStorage | `codazi_playground_settings` | Saved on settings modal save |
| **Activity Events Queue** | LocalStorage | `codazi_wakatime_activities` | Synced to `POST /api/activity/events` |
| **Offline Sync Mutations** | LocalStorage | `codazi_sync_queue` | Background worker (`syncWorker.ts`) |
| **Root Master Session** | Memory (`activeRootSessions`) | Express Server (`server.ts`) | 8-hour session token |
| **Server Audit Log** | Memory (`serverAuditLog`) | Express Server (`server.ts`) | Append-only in-memory array (max 500) |
| **Public Certificates** | Memory (`certificatesStore`) | Express Server (`server.ts`) | Verified registry |

---

## 2. Key LocalStorage Storage Keys

```typescript
// Authentication
'curious_learners_user'                    // Current logged-in user profile JSON

// Wallet & Unlocks
'curious_learners_wallet'                  // Wallet balance & transactions JSON
'curious_learners_unlocked_tools'          // Array of unlocked lesson IDs (e.g. ['w0-l1', 'w1-l2'])

// Curriculum Completion
'curious_learners_completed_lessons'       // Array of fully completed lesson IDs
'curious_learners_completed_theory_lessons'// Array of completed theory lesson IDs
'curious_learners_completed_sandbox_lessons'// Array of completed sandbox homework IDs
'curious_learners_completed_terminal_lessons'// Array of completed terminal lesson IDs

// Editor & Sandbox State
'codazi_playground_settings'              // CodeSandbox settings object
'codazi_playground_code_${lessonId}'       // Saved user code object { html, css, js }

// Activity & Sync Queues
'codazi_wakatime_activities'               // Pending activity event array
'codazi_sync_queue'                        // Pending backend mutation array
```

---

## 3. Data Synchronization Lifecycle

```
[User Action: Edit Code / Run Sandbox / Run Command]
                         ↓
            [Update Local State & Component]
                         ↓
           [Persist to LocalStorage Key]
                         ↓
   [Buffer Activity Event in codazi_wakatime_activities]
                         ↓
        [Background Sync Worker (syncWorker.ts)]
                         ↓
      [POST /api/activity/events to Express Server]
```
