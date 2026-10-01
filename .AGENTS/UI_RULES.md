# UI & Design Constitution — Curious Learners

## 1. Visual Theme & Color Palette

Curious Learners follows a premium dark-mode developer aesthetic inspired by GitHub Dark, CodePen, and Oh My Posh themes.

- **Background Canvas**: `#0d1117` / `slate-950` / `slate-900`
- **Card Containers**: `bg-slate-900/80` with `border-slate-800`
- **Primary Accent (Indigo)**: `indigo-600` (`#4f46e5`), hover `indigo-500`
- **Amber Warning / Gems Accent**: `amber-500` (`#f59e0b`) & `amber-400`
- **Emerald Success Accent**: `emerald-500` (`#10b981`) & `emerald-400`
- **Teal / Terminal Accent**: `#00afaf`, `#008787`, `#5eead4`
- **Typography**: Clean sans-serif for UI (`font-sans`), monospace (`font-mono`) for code, terminal output, and status badges.

---

## 2. Zero-Pill & Compact Component Discipline

1. **Card Borders**: `border border-slate-800` or `border-[var(--border)]` with subtle rounded corners (`rounded-2xl` or `rounded-3xl`).
2. **Status Badges**: Small, high-contrast monospace badges (`text-[10px]` or `text-[11px]`, `px-2 py-0.5 rounded-full font-mono font-bold`).
3. **Buttons**: High-action buttons must feature crisp hover states, focus rings, and active press transforms (`active:scale-95`).
4. **Icons**: Lucide icons sized consistently (`h-4 w-4` or `h-3.5 w-3.5`) with appropriate shrink prevention (`shrink-0`).

---

## 3. Responsive Layout Guidelines

- Mobile First: Stack layouts vertically on mobile viewports (`grid-cols-1`).
- Desktop Expansion: Expand to multi-column grids or side-by-side panes on `md:` and `lg:` breakpoints (`md:grid-cols-2`, `lg:grid-cols-3`).
- Navigation: Header top bar on desktop + fixed bottom navigation bar (`BottomNav.tsx`) on mobile viewports.

---

## 4. Anti-AI Slop & UI Discipline

- **No System Noise**: Do NOT display raw debug logs, telemetry indicators, unstyled JSON, or generic placeholder text in the UI.
- **No Floating Windows / Alert Boxes**: Avoid browser native `alert()` or `prompt()`. Use clean inline banners or modal dialogs.
- **Dual Language Fidelity**: All UI copy must support both English (`en`) and Bengali (`bn`) seamlessly without broken text or layout overflow.
