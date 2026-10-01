# Gem Economy & Progression Engine

## Overview

Curious Learners Academy features an engaging gamification system driven by **Gem Tokens (💎)**, **Daily Streaks (🔥)**, **XP Leveling (⚡)**, and **Milestone Badges (🏅)**.

---

## 💎 Gem Economy Mechanics (`src/services/gemEconomy.ts` & `src/config/rewards.ts`)

Gems are the in-app currency used to unlock premium course chapters, purchase custom playground themes, unlock root control features, and claim special certificates.

### Gem Sources & Rewards

| Action | Reward Amount | Frequency / Limit |
| :--- | :--- | :--- |
| **Welcome Registration Bonus** | +100 Gems | One-time upon account creation |
| **Daily Streak Check-in** | +20 to +100 Gems | Daily (Scales with consecutive streak multiplier) |
| **Lesson Completion** | +50 Gems | Per lesson passed |
| **Quiz Perfect Score** | +30 Bonus Gems | Per perfect quiz attempt |
| **Terminal Challenge Solve** | +40 Gems | Per challenge completed |
| **Forum Post / Helpful Reply** | +10 Gems | Community contribution reward |

### Gem Sinks & Expenditures

| Item / Power-Up | Gem Cost | Benefit |
| :--- | :--- | :--- |
| **Advanced Chapter Unlock** | 150 Gems | Immediate access to locked advanced curriculum |
| **Playground Theme Pack** | 80 Gems | Unlocks custom synthwave/cyberpunk code editor themes |
| **Streak Freeze Power-Up** | 50 Gems | Protects streak if inactive for 1 calendar day |
| **Verified Certificate Minting**| 200 Gems | Generates shareable cryptographic verified certificate |

---

## 🔥 Daily Streak Engine (`src/services/dailyGoalsEngine.ts`)

- **Streak Counter**: Tracks consecutive calendar days with at least 1 completed learning activity.
- **Streak Calculation**: Compares current date with `lastCheckInDate` ISO string.
  - If activity occurs today: streak maintained.
  - If activity occurred yesterday: streak increments by +1.
  - If gap > 1 day without streak freeze: streak resets to 1.
- **Milestone Rewards**: Reaching 7-day, 30-day, or 100-day streak unlocks special badges and large gem bonuses (+500 Gems).

---

## ⚡ XP Leveling & Leaderboards (`src/services/leaderboardService.ts`)

- **XP Formula**: `Level = Math.floor(Math.sqrt(totalXP / 100)) + 1`
- **Global Leaderboard**: Competes learners based on total XP gained, chapters completed, and streak duration.
- **Real-Time Sync**: Leaderboard updates local rankings and syncs top profiles to Firestore when authenticated.
