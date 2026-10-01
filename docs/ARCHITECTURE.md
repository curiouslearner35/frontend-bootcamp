# System Architecture

## Overview

Curious Learners Academy is architected as a high-performance, responsive Single-Page Application (SPA) with a lightweight server runtime for custom API extensions and static delivery. It utilizes modern web technologies to deliver instantaneous feedback during code execution, terminal simulations, and gamified learning activities.

---

## 🏗 High-Level Component Topology

```
+-----------------------------------------------------------------------+
|                          BROWSER / CLIENT                             |
|                                                                       |
|  +--------------------+   +---------------------+   +--------------+  |
|  | React 18 SPA (Vite)| < |  Progression Engine | < | Sound Alarm  |  |
|  +--------------------+   +---------------------+   +--------------+  |
|            |                         |                     |          |
|            v                         v                     v          |
|  +--------------------+   +---------------------+   +--------------+  |
|  |  Firebase Web SDK  |   |  Local Storage Sync |   | Web Audio API|  |
|  +--------------------+   +---------------------+   +--------------+  |
+------------|-------------------------|--------------------------------+
             |                         |
             v                         v
+------------------------+  +---------------------+
|  Firebase Firestore &  |  | Express Node Server |
|      Firebase Auth     |  |     (server.ts)     |
+------------------------+  +---------------------+
```

---

## 📁 Key Architectural Layers

### 1. Presentation Layer (`src/pages/` & `src/components/`)
- **Vite SPA**: Super-fast HMR and bundle compilation.
- **Tailwind CSS**: Utility-first styling with responsive, dark-mode support.
- **Lucide React**: Clean vector iconography across all navigation and interactive components.
- **Audio & Visual Feedback**: Web Audio API synthesized sound effects (`soundAlarm.ts`) and `canvas-confetti` celebrations upon milestone completions.

### 2. State & Progression Layer (`src/services/`)
- **Dual-Storage Strategy**: Local Storage provides instant latency-free state reads and offline resilience, while Firestore automatically mirrors user state when authenticated.
- **Progression Engine (`progressionEngine.ts`)**: Calculates XP, levels, daily streaks, gem balances, unlocked chapters, and achievements.
- **Sync Worker (`syncWorker.ts`)**: Handles background synchronization between client state and cloud database.

### 3. Backend & API Layer (`server.ts`)
- **Express Runtime**: Provides API endpoints for server-side logic and static file serving.
- **Vite Middleware**: Mounts Vite in development mode for seamless development without separate frontend/backend ports.
- **Netlify Configuration**: Configured via `netlify.toml` for edge deployments.

### 4. Database & Auth Layer (`src/services/firebase.ts`)
- **Firebase Auth**: Supports Google Popup Auth (`signInWithPopup`).
- **Firestore Database**: Stores `/users/{userId}`, `/activity_events/{eventId}`, and `/homework_submissions/{submissionId}`.
- **Security Rules**: Expressive, strict security rules (`firestore.rules`) enforcing owner-only mutations and valid document schemas.

---

## ⚡ Performance Optimizations

1. **Lazy Loading & Dynamic Imports**: React components and heavy pages are split into modular chunks.
2. **Audio Pre-Synthesis**: Sound effects use the native Web Audio API oscillators directly without needing external audio file downloads.
3. **Local First Execution**: All game economy and code sandbox executions happen locally in the browser for instant user feedback.
