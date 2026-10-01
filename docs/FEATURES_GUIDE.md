# Interactive Features & Learning Modules

## Overview

Curious Learners Academy provides a rich ecosystem of interactive tools designed to bridge theoretical knowledge and hands-on technical skills.

---

## 🖥 Interactive Modules Overview

### 1. Terminal Simulator (`src/components/Terminal.tsx` & `src/services/terminalEngine.ts`)
- **Web-based CLI**: Simulates a Linux shell environment directly in the browser.
- **Commands**: Supports `ls`, `cd`, `cat`, `echo`, `mkdir`, `clear`, `help`, `gems`, `whoami`, `sudo`, `pwd`, and custom challenge evaluation.
- **Integrated Challenges**: Presents Linux shell challenges with automated input/output verification and gem rewards upon completion.

### 2. CodeSandbox Runner (`src/components/CodeSandbox.tsx` & `src/components/CodeEditor.tsx`)
- **Multi-language Support**: JavaScript, HTML/CSS, and Python code runners.
- **Console Interception**: Captures `console.log` and runtime errors to display structured output directly below the code editor.
- **Playground Themes**: Customizable editor themes (Cyberpunk, Dracula, Monokai, VS Dark) configurable via `src/utils/playgroundThemes.ts`.

### 3. Homework & Syllabus Portal (`src/pages/SyllabusPage.tsx`)
- **Structured Curriculum**: Organized by topics (Computer Science Fundamentals, Data Structures, Web Engineering, Linux Systems, Security).
- **Homework Submissions**: Allows code submission per exercise with submission tracking, automated tests, and teacher review workflow.

### 4. Public Certificates (`src/pages/PublicCertificatePage.tsx`)
- **Cryptographic Verification**: Generates unique certificate verification IDs (`CERT-XXXXXX`).
- **Shareable Page**: Public URL endpoint (`/certificate/:certId`) allowing learners to showcase verified credentials on LinkedIn or portfolios.
- **Print & PDF Support**: Styled CSS print view for exporting certificates as PDF files.

### 5. Root Control Panel (`src/pages/RootControlPage.tsx`)
- **Administrative Management**: Accessible to administrative/root accounts or unlocked via gem progression.
- **System Metrics**: Displays platform analytics, active learners, total homework queue, and database sync status.

### 6. Discussion Forum (`src/pages/ForumPage.tsx`)
- **Community Learning**: Peer-to-peer discussion forum (`src/data/forumData.ts`) for asking questions, sharing solutions, and earning community gems.

### 7. Progressive Web App (PWA) (`src/components/PWAInstallGuide.tsx`)
- **Offline Capabilities**: Registered service worker caching essential assets.
- **Install Prompts**: Custom `PWAInstallGuide` banner prompting mobile and desktop users to install the app natively.
