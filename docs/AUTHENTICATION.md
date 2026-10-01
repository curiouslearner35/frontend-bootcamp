# Authentication & User Sessions

## Overview

Curious Learners Academy integrates **Firebase Authentication** with a Google OAuth Popup strategy, complemented by a transparent local-first session restoration mechanism to ensure uninterrupted learning even when offline or disconnected.

---

## 🔐 Authentication Architecture & Flow

```
+-------------------------------------------------------------------------+
|                              USER INTERFACE                             |
|                                                                         |
|  [Sign In with Google] Button in AuthModal.tsx                          |
+-----------------------------------|-------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                            FIREBASE SERVICE                             |
|                                                                         |
|  signInWithFirebaseGoogle() -> signInWithPopup(auth, googleProvider)   |
+-----------------------------------|-------------------------------------+
                                    |
               +--------------------+--------------------+
               | Success                                 | Failure / Offline
               v                                         v
+------------------------------+         +-------------------------------+
| Firestore User Document      |         | Fallback Local Profile        |
| doc(db, 'users', uid)        |         | localStorage.setItem(...)     |
| - Creates new doc if missing |         | - Guest or local credentials  |
| - Syncs gems, streaks, XP    |         +-------------------------------+
+------------------------------+
```

---

## 🗝 Key Auth Components

### 1. `src/services/firebase.ts`
- Initializes Firebase App using config loaded from `firebase-applet-config.json`.
- Exports `auth` instance (`getAuth`) and `db` Firestore instance (`getFirestore`).
- Configured with region `asia-southeast1` and database `ai-studio-curiouslearners-eb73f9d7-9cef-483e-ba9c-2f52f73ae630`.

### 2. `src/services/auth.ts`
- **`signInWithFirebaseGoogle()`**: Triggered by user interaction in `AuthModal.tsx`.
- **User Document Sync**: On sign-in, reads `/users/{uid}` from Firestore. If non-existent, creates a new user profile document containing:
  - `displayName`, `email`, `photoURL`, `bio`
  - Initial `streakDays: 1`, `lastCheckInDate`
  - Welcome bonus gems (e.g. `+100 Gems`) and initial XP
- **Session Auto-Restoration**: Listens to `onAuthStateChanged` to restore session upon page reload.

### 3. `src/components/AuthModal.tsx`
- Modal dialog providing multi-option login (Google OAuth via Firebase, Email/Pass state management, or Guest Continue).
- Automatically triggers sound effects and confetti celebrations on successful authentication.

---

## 🛡 Session Persistence & Offline Handling

1. **State Persistence**: Firebase Auth uses local persistence by default.
2. **Local Fallback Sync**: User profile metadata, current chapter progress, gem balances, and activity events are saved to `localStorage` immediately upon change.
3. **Re-synchronization**: When connectivity is re-established, local changes are merged with Firestore via `syncWorker.ts`.
