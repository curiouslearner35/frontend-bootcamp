# Development Rules & Engineering Standards — Curious Learners

## 1. Code Quality & Standards

- **TypeScript Standard**: Strict TypeScript. Do NOT use `any` unless absolutely required for dynamic JSON payloads. Define explicit interfaces in `src/types.ts` or module-specific `src/types/*.ts`.
- **React Standards**:
  - React 19 functional components with hooks (`useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`).
  - Keep effects clean with explicit dependency arrays.
  - Always return cleanup functions in `useEffect` when setting up event listeners, timers (`setInterval`, `setTimeout`), or subscriptions.
- **Tailwind CSS Standards**:
  - Use Tailwind CSS v4 utility classes exclusively (`@import "tailwindcss";` in `src/index.css`).
  - Do NOT create separate `.css` modules or inline `style={{ ... }}` objects except for dynamic CSS variables or dynamic canvas calculations.
- **Import Ordering**:
  1. React core hooks & libraries (`react`, `react-dom`, `motion`, `lucide-react`, `recharts`).
  2. Types (`src/types.ts`).
  3. Services & utilities (`src/services/*`, `src/utils/*`).
  4. Components & sub-components.

---

## 2. Error Handling & Resilience

- **Fail Safe LocalStorage Operations**: Wrap all `localStorage.getItem` and `localStorage.setItem` calls inside try/catch blocks (`src/services/storage.ts`) to handle private browsing or storage quota errors gracefully.
- **Async API Error Handling**: Express handlers in `server.ts` must return standardized JSON error responses:
  `res.status(statusCode).json({ success: false, error: 'Clear human-readable message' })`
- **Component Error Boundaries**: Prevent blank screens by handling empty or undefined array lookups with fallbacks (e.g. `lesson?.title?.en || 'Untitled'`).

---

## 3. Performance & Memory Management

- **Timer Cleanup**: Always clear intervals (`clearInterval`) and timeouts (`clearTimeout`) on component unmount.
- **Memoization**: Wrap heavy computations (such as requirement evaluation across 197 lessons or VFS file trees) in `useMemo`.
- **Bounded In-Memory Stores**: In-memory server caches (such as `serverActivityEvents` and `serverAuditLog`) must enforce maximum size bounds to prevent Node process memory bloat.
