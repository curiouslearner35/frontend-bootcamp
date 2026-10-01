# API & Client Services Reference

## Overview

Curious Learners Academy encapsulates core application logic into modular service singletons inside `src/services/`. This document outlines the service APIs and data contracts.

---

## 🛠 Client Services Catalog

```
src/services/
├── accessPolicy.ts        # Role-based access rules & feature permission checks
├── analyticsService.ts    # Learner progress & engagement metrics tracking
├── activityTracker.ts     # User action logging & event payload formatting
├── auth.ts                # Firebase Auth & Google Popup integration
├── chapterEngine.ts       # Course chapter unlocking logic & prerequisite verification
├── dailyGoalsEngine.ts    # Streak calculation & daily goal evaluation
├── firebase.ts            # Firebase app initialization & Firestore handle export
├── gemEconomy.ts          # Gem balance management, earning, and spending transactions
├── githubService.ts       # GitHub profile integration & repository sync
├── leaderboardService.ts  # Leaderboard rankings, sorting, & profile state aggregation
├── progressionEngine.ts   # Core XP engine, level computation, & milestone evaluation
├── rewardEngine.ts        # Badge evaluation & reward distribution triggers
├── sessionManager.ts      # Active session lifecycle & timeout tracking
├── soundAlarm.ts          # Web Audio API sound synthesizer (clicks, success, level-up)
├── storage.ts            # LocalStorage abstraction with typed fallback persistence
├── syncWorker.ts         # Background sync queue for Firestore persistence
├── taskGenerator.ts       # Dynamic problem statement & exercise generation
└── terminalEngine.ts      # Virtual shell parser, file system simulation, & command execution
```

---

## 📋 Core Service Interfaces

### 1. `soundAlarm.ts` (Web Audio Synthesizer)
Provides audio feedback without external asset dependencies:
- **`playSound('click')`**: Subtle 800Hz sine burst for button interactions.
- **`playSound('success')`**: Ascending major triad arpeggio (C5 -> E5 -> G5) for lesson completion.
- **`playSound('error')`**: Descending low frequency sawtooth wave for wrong answers.
- **`playSound('levelUp')`**: Multi-frequency fanfare chord for level milestones.

### 2. `terminalEngine.ts` (Virtual Shell)
- **`executeCommand(input: string, state: TerminalState): CommandResult`**
  - Parses shell input into command and flags.
  - Returns updated directory tree, printed stdout/stderr, and triggered gamification events.

### 3. `gemEconomy.ts` & `progressionEngine.ts`
- **`addGems(amount: number, reason: string): UserProfile`**
- **`spendGems(amount: number, item: string): boolean`**
- **`addXP(amount: number): { profile: UserProfile, leveledUp: boolean }`**

### 4. `syncWorker.ts`
- **`syncProfileToCloud(profile: UserProfile): Promise<void>`**
  - Flushes cached local updates to Firestore doc `/users/{userId}` using `setDoc` with `merge: true`.
  - Handles network failures gracefully with retries.
