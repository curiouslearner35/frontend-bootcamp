# Testing & Quality Assurance Strategy — Curious Learners

## 1. Automated Verification Checks

Every AI agent working on this repository must verify code changes using the supported project validation scripts:

```bash
# 1. TypeScript Static Type Check & Linting
npm run lint

# 2. Production Build Verification
npm run build

# 3. Git Diff Integrity Check
git diff --check
```

---

## 2. Dynamic Test Execution Patterns

Agents can run inline node/tsx test scripts using `npx tsx` to test complex service logic or curriculum verification contracts.

### Example: Verifying Task Generator & Sandbox Requirement Evaluator

```bash
npx tsx -e '
import { CURRICULUM_DATA } from "./src/data/curriculumData";
import { getLessonTask } from "./src/services/taskGenerator";

const lesson = CURRICULUM_DATA[0].lessons[0];
const task = getLessonTask(lesson);
console.log("Lesson:", lesson.title.en);
console.log("Requirements count:", task.requirements.length);
'
```

### Example: Verifying Express API Endpoints & Server Cache

```bash
npx tsx -e '
import http from "http";
http.get("http://localhost:3000/api/health", (res) => {
  let data = "";
  res.on("data", chunk => data += chunk);
  res.on("end", () => console.log("Health check response:", data));
});
'
```

---

## 3. Manual QA Flow Matrix

When making UI or component updates, verify:

1. **Syllabus Navigation**: Select week -> select lesson -> switch between Theory, Practice Sandbox, and Terminal tabs.
2. **Practice Sandbox Verification**: Type code in HTML/CSS/JS editor -> click "Run Code" -> verify requirement PASS/FAIL status indicators and fix hints.
3. **Terminal Focus & Clock**: Click Terminal tab -> verify input is NOT auto-focused -> click inside terminal -> verify cursor focus -> check live TUI clock updates every second.
4. **Bilingual Toggle**: Click English/Bengali language toggle in Header -> verify all UI strings update seamlessly.
