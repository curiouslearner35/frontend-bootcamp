# Database & Firestore Security

## Overview

Curious Learners Academy uses Google Cloud Firestore as its primary cloud data store. The database is provisioned in the `asia-southeast1` region with database ID `ai-studio-curiouslearners-eb73f9d7-9cef-483e-ba9c-2f52f73ae630`.

Data access is governed by strict, declarative security rules (`firestore.rules`) enforcing multi-tenant isolation, user data ownership, and strict schema field validation.

---

## 🗄 Collections Schema (`firebase-blueprint.json`)

### 1. `/users/{userId}`
Represents a learner's account profile, inventory, and progression state.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `id` | String | User ID (matches `request.auth.uid`) |
| `displayName` | String | Learner handle / full name |
| `email` | String | Registered user email address |
| `photoURL` | String | Profile avatar URL |
| `gems` | Number | Earned gem currency balance |
| `streakDays` | Number | Consecutive daily activity check-ins |
| `xp` | Number | Total accumulated experience points |
| `role` | String | Access role (`student`, `teacher`, `admin`, `root`) |
| `completedLessonIds` | Array\<String\> | List of completed syllabus lessons |
| `unlockedChapterIds` | Array\<String\> | List of unlocked course chapters |
| `createdAt` | Timestamp | Account creation timestamp |
| `updatedAt` | Timestamp | Profile last update timestamp |

### 2. `/activity_events/{eventId}`
Tracks learning activities, quiz completions, and code submission events.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `id` | String | Unique event identifier |
| `userId` | String | Owner user ID |
| `type` | String | Event type (`LESSON_COMPLETE`, `GEM_PURCHASE`, `STREAK_CHECKIN`, `HOMEWORK_SUBMIT`) |
| `gemsEarned` | Number | Gem reward amount associated with event |
| `xpEarned` | Number | XP amount gained |
| `details` | Object | Additional event metadata |
| `timestamp` | Timestamp | Event record timestamp |

### 3. `/homework_submissions/{submissionId}`
Stores student homework code submissions and verification status.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `id` | String | Unique submission ID |
| `userId` | String | Author student UID |
| `lessonId` | String | Associated syllabus lesson |
| `code` | String | Submitted source code |
| `status` | String | Grading status (`PENDING`, `APPROVED`, `REJECTED`) |
| `feedback` | String | Optional teacher feedback notes |
| `submittedAt` | Timestamp | Submission time |

---

## 🔒 Security Rules & Permissions (`firestore.rules`)

Security rules enforce the **Master Gate (Default Deny)** security pattern:

1. **Owner Isolation**: Users can only read and write their own profile document (`request.auth.uid == userId`).
2. **Activity Logging**: Signed-in users can write activity events where `request.resource.data.userId == request.auth.uid`.
3. **Homework Verification**: Students can view and write their own submissions. Teachers/admins can evaluate pending submissions.
4. **Schema Enforcement**: Updates must satisfy required type constraints and prevent unauthorized key mutations.
