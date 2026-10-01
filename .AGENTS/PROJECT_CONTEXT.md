# Project Context — Curious Learners

## 1. Project Identity

- **Project Name**: Curious Learners (Codazi BootCamp)
- **Official Starter Repository**: `https://github.com/curiouslearner35/frontend-bootcamp`
- **Application Purpose**: An interactive 12-week Full-Stack & Git-First Web Development Learning Platform featuring bilingual theory lessons, CodePen-style Code Sandbox with automated requirement validation, browser-based Terminal (Fish shell/Oh My Posh TUI simulator), Gem economic rewards, WakaTime-style activity tracking, and a Root Control plane for instructors.
- **Core Philosophy**: *"LEARN GIT BEFORE LEARNING CODE"* (Week 00 & Week 01 prioritize Git & Version Control before writing HTML/JS).

---

## 2. Technology Stack & Runtime

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | React 19 (`react` ^19.0.1, `react-dom` ^19.0.1) |
| **Build Tool & Bundler** | Vite 8 (`vite` ^8.3.0, `@vitejs/plugin-react` ^6.1.1) |
| **Styling Engine** | Tailwind CSS v4 (`@tailwindcss/vite` ^4.3.3, `@import "tailwindcss";` in `src/index.css`) |
| **Server Runtime** | Node.js + Express 4 (`express` ^4.21.2) via `tsx` runner |
| **Language** | TypeScript 7 (`typescript` ^7.0.2) |
| **UI Icons** | Lucide React (`lucide-react` ^0.546.0) |
| **Animations** | Motion (`motion` ^12.23.24) |
| **Charts** | Recharts (`recharts` ^3.10.1) |
| **Export/PDF** | `html2canvas` (^1.4.1) & `jspdf` (^4.2.1) |
| **AI Integration** | `@google/genai` (^2.4.0) |
| **Internationalization** | Built-in Dual Language Engine (English `en` & Bengali `bn`) in `src/i18n/translations.ts` |

---

## 3. Verified Development State

- **Current Git Commit**: `4f4de63559bd6f9df4f75c4c854352d706e58aba`
- **Port**: 3000 (`http://0.0.0.0:3000`)
- **Curriculum Scope**: 12 Weeks, 197 Lessons, 31 Capstone Projects.
- **Verification Engine**: Real-time Sandbox requirement validator + Fish Shell Terminal simulator.
- **Build Status**: 100% Passing (`npm run lint`, `npm run build`).

---

## 4. Evidence Classification

- **VERIFIED**: Technology stack in `package.json`, Express routes in `server.ts`, curriculum data in `src/data/curriculumData.ts`, rewards in `src/config/rewards.ts`, validation logic in `src/components/CodeSandbox.tsx`.
- **INFERRED**: Application is targeted at desktop/mobile web browsers and PWA environments.
- **UNKNOWN**: External database persistence connection parameters (production uses Express in-memory RedisCache and LocalStorage client sync).
