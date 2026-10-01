# AI Agent Lifecycle & Standard Operating Workflow — Curious Learners

This document defines the mandatory 11-step lifecycle workflow for any AI agent operating on this repository.

```
  +------------------+
  |    1. RECON      |  Inspect directory structure, package.json, and existing governance
  +--------+---------+
           |
           v
  +------------------+
  |  2. UNDERSTAND   |  Analyze user prompt, identify constraints, and perform Skill Check
  +--------+---------+
           |
           v
  +------------------+
  |     3. MAP       |  Trace target files, exports, component hierarchy, and data flows
  +--------+---------+
           |
           v
  +------------------+
  |    4. PLAN       |  Draft a minimal 1 to 3 step execution plan
  +--------+---------+
           |
           v
  +------------------+
  |  5. IMPLEMENT    |  Execute minimal code modifications using edit_file / create_file
  +--------+---------+
           |
           v
  +------------------+
  |    6. TEST       |  Run npm run lint and test scripts
  +--------+---------+
           |
           v
  +------------------+
  |   7. OBSERVE     |  Analyze build outputs, error logs, and console messages
  +--------+---------+
           |
           v
  +------------------+
  |    8. FIX        |  Address any compilation, lint, or runtime issues found
  +--------+---------+
           |
           v
  +------------------+
  |   9. RETEST      |  Re-run npm run build to verify zero build errors
  +--------+---------+
           |
           v
  +------------------+
  |   10. VERIFY     |  Run git diff --check & git status to confirm clean diff
  +--------+---------+
           |
           v
  +------------------+
  |   11. REPORT     |  Provide concise final summary with explicit verification statuses
  +------------------+
```

---

## Detailed Phase Instructions

### Phase 1: Recon & Skill Check
- List available skills and mark relevant ones.
- Read existing `.AGENTS/*` governance files to establish current system baseline.

### Phase 2: Inspection
- Use `view_file` or `list_dir` to read source files before editing.
- Never guess line numbers, function names, or prop interfaces.

### Phase 3: Minimal Implementation
- Apply minimal contiguous replacement edits using `edit_file`.
- Do not create empty placeholders with intent to edit later.

### Phase 4: Verification & Reporting
- Execute `npm run lint` and `npm run build`.
- Report actual statuses (`PASS` / `FAIL`). Never claim unverified pass.
