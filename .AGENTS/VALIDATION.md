# Validation Commands Contract — Curious Learners

This file defines the mandatory validation commands supported by this repository and the explicit verification status requirements for AI agents.

## 1. Supported Repository Verification Commands

| Command | Purpose | Expected Result |
| :--- | :--- | :--- |
| `npm run lint` | TypeScript static type checking (`tsc --noEmit`) | `Exit Code 0` (0 type errors) |
| `npm run build` | Vite client build + esbuild server compilation | `Exit Code 0` (Generates `dist/index.html` & `dist/server.cjs`) |
| `git diff --check` | Checks for whitespace errors, trailing spaces, or conflict markers | `Exit Code 0` (Clean diff output) |

---

## 2. Explicit Verification Status Reporting Standard

When reporting completed work, AI agents MUST present verification outcomes using strictly one of these four explicit statuses:

- `PASS`: The command was executed and completed with exit code 0.
- `FAIL`: The command was executed and returned one or more errors.
- `NOT VERIFIED`: The check could not be executed due to environmental constraints.
- `NOT APPLICABLE`: The check does not apply to the specific modification scope.

### Rule: No Manufactured Results
An agent must NEVER report `PASS` for a command that was not actually executed and confirmed!
