# Change Control & Patch Discipline — Curious Learners

## 1. Minimal Patch Discipline

1. **Targeted Edits**: Modify only the specific files directly related to the user's explicit request.
2. **Preserve Surrounding Code**: Do NOT rewrite untouched functions, refactor unrelated components, or reformat entire files.
3. **No Unsolicited Dependencies**: Do NOT install new npm packages unless strictly required by the prompt.
4. **No Destructive Operations**: Never drop database tables, delete user storage keys, or alter existing core APIs without explicit instructions.

---

## 2. Pre-Modification Protocol

Before editing any code, every AI agent MUST follow this protocol:

```
1. INSPECT   → View the target file using `view_file` to confirm exact current state.
2. MAP       → Trace imports and component dependencies to avoid breaking changes.
3. IDENTIFY  → Pinpoint the exact line block requiring modification.
4. PATCH     → Apply minimal drop-in replacement using `edit_file`.
```

---

## 3. Post-Modification Protocol

After editing code, every AI agent MUST follow this protocol:

```
1. LINT      → Run `npm run lint` (`tsc --noEmit`).
2. BUILD     → Run `npm run build`.
3. DIFF      → Run `git diff --check` to verify no stray whitespace errors.
4. REPORT    → Report status concisely to the user.
```

---

## 4. Scope Restriction Rules

When responding to repository governance, documentation, or intelligence requests (such as generating `.AGENTS/*`), changes MUST be strictly isolated to `.AGENTS/*`.

Run `git status --short` prior to completing your turn to verify that NO files outside the target scope were modified unexpectedly.
