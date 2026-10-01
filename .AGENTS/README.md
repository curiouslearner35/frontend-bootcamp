# Curious Learners — AI Agent Governance & Context System (.AGENTS)

Welcome to the canonical AI Agent Governance and Repository Context System for **Curious Learners** (Codazi BootCamp).

This `.AGENTS/` directory serves as the immutable knowledge base, architecture map, operational rules, and change control framework for all AI agents working on this repository.

---

## 🏛️ Governance Index

| Document | Purpose | Authority Level |
| :--- | :--- | :--- |
| [`PROJECT_CONTEXT.md`](./PROJECT_CONTEXT.md) | Project identity, tech stack, business domain, verified state | Canonical Context |
| [`ARCHITECTURE.md`](./ARCHITECTURE.md) | Full-stack architecture, execution engines, boundaries | Canonical Architecture |
| [`DIRECTORY_MAP.md`](./DIRECTORY_MAP.md) | Map of all directories, components, pages, services | Structural Map |
| [`FEATURES.md`](./FEATURES.md) | Comprehensive breakdown of application features | Functional Spec |
| [`DATA_FLOW.md`](./DATA_FLOW.md) | State management, LocalStorage keys, server cache, sync queues | Data Governance |
| [`ROUTES.md`](./ROUTES.md) | Client SPA route map and tab navigation contracts | Route Spec |
| [`API_MAP.md`](./API_MAP.md) | Express server API endpoints, request/response formats | API Contract |
| [`AUTH_AND_ACCESS.md`](./AUTH_AND_ACCESS.md) | Matrix of public, student auth, Gems, and Root Control access | Security Matrix |
| [`UI_RULES.md`](./UI_RULES.md) | Design rules, dark theme discipline, responsive viewports | Design Constitution |
| [`DOMAIN_RULES.md`](./DOMAIN_RULES.md) | Domain contracts: Git-First philosophy, Homework contract, Terminal rules | Domain Constitution |
| [`DEVELOPMENT_RULES.md`](./DEVELOPMENT_RULES.md) | Code conventions, TypeScript standards, anti-patterns | Engineering Standards |
| [`TESTING.md`](./TESTING.md) | Testing strategy, verification scripts, automated checks | Quality Assurance |
| [`VALIDATION.md`](./VALIDATION.md) | Verification commands (`npm run build`, `npm run lint`, `git diff`) | Verification Contract |
| [`CHANGE_CONTROL.md`](./CHANGE_CONTROL.md) | Rules for modifying code, minimal patch discipline, regression prevention | Change Control |
| [`AGENT_WORKFLOW.md`](./AGENT_WORKFLOW.md) | Step-by-step lifecycle for AI agents operating on this repo | Workflow Standard |
| [`CONTEXT_BASELINE_MANIFEST.json`](./CONTEXT_BASELINE_MANIFEST.json) | Machine-readable baseline, commit hash, verification state | System Baseline |

---

## ⚡ Non-Negotiable Core Rules for AI Agents

1. **Repository Evidence First**: Never guess file paths, export signatures, or system behaviors. Read actual source files.
2. **Minimal Patch Discipline**: Make the smallest safe edit necessary to solve a problem. Do not perform speculative rewrites or restructure working code.
3. **No Fake Pass**: Never manufacture fake completion states, mock validation passes, or unverified success claims.
4. **Homework = Verification Contract**: Practice Sandbox verification must validate actual code and execution output against specific homework requirements.
5. **Tab Navigation ≠ Terminal Interaction**: Switching tabs to the Terminal must ONLY switch active tab view; it must never auto-focus input, execute commands, or trigger false activity events.
6. **Dynamic TUI Clock**: Terminal time must always be driven by real browser/runtime current time (`new Date()`) with proper timer cleanup on unmount.
7. **Strict Build & Lint Verification**: Before finishing any task, run `npm run lint`, `npm run build`, and `git diff --check` to ensure 100% build health.
