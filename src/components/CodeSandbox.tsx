import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  Play,
  RotateCcw,
  Sliders,
  Trash2,
  CheckCircle2,
  Code2,
  Monitor,
  Terminal,
  FileCode,
  Palette,
  Sparkles,
  Layers,
  RefreshCw,
  Download,
  Target,
  ChevronDown,
  ChevronUp,
  CheckSquare,
  HelpCircle
} from 'lucide-react';
import { Language, Lesson, SandboxTask } from '../types';
import { t } from '../i18n/translations';
import { CodeEditor } from './CodeEditor';
import { PlaygroundSettingsModal } from './PlaygroundSettingsModal';
import { PlaygroundExportModal } from './PlaygroundExportModal';
import { PlaygroundSettings, ConsoleLogItem, PlaygroundState } from '../types/playground';
import { activityTracker } from '../services/activityTracker';
import { getLessonTask } from '../services/taskGenerator';
import { CURRICULUM_DATA } from '../data/curriculumData';

interface CodeSandboxProps {
  initialCode?: string;
  expectedOutput?: string;
  language?: Language;
  lessonId?: string;
  lesson?: Lesson;
  task?: SandboxTask;
  onSuccess?: () => void;
}

const DEFAULT_SETTINGS: PlaygroundSettings = {
  theme: 'dark',
  fontFamily: 'SF Mono, Monaco, Menlo, monospace',
  fontSize: 14,
  lineHeight: 1.5,
  tabSize: 2,
  wordWrap: true,
  lineNumbers: true,
  autoRun: true,
  layout: 'split',
};

const DEFAULT_STARTER: PlaygroundState = {
  html: `<div className="card">
  <h1>Hello Codazi Learning Hub</h1>
  <p>Interactive CodePen-style Playground</p>
  <button id="counter-btn">Clicks: <span id="count">0</span></button>
</div>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 24px;
  background: #0f172a;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.card {
  background: #1e293b;
  border: 1px solid #334155;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 360px;
  width: 100%;
}

h1 {
  color: #38bdf8;
  font-size: 20px;
  margin-top: 0;
}

p {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.5;
}

button {
  background: #6366f1;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 12px;
}

button:hover {
  background: #4f46e5;
  transform: translateY(-1px);
}`,
  js: `console.log("Codazi Code Playground Initialized!");

let count = 0;
const btn = document.getElementById("counter-btn");
const countSpan = document.getElementById("count");

if (btn && countSpan) {
  btn.addEventListener("click", () => {
    count++;
    countSpan.textContent = count;
    console.warn("Counter updated to:", count);
  });
}`
};

export const CodeSandbox: React.FC<CodeSandboxProps> = ({
  initialCode,
  expectedOutput,
  language = 'en',
  lessonId = 'global-playground',
  lesson,
  task,
  onSuccess
}) => {
  // Task Panel Expansion State
  const [isTaskExpanded, setIsTaskExpanded] = useState<boolean>(true);

  // Derive active Task based on props or lesson theory mapping
  const activeTask: SandboxTask = useMemo(() => {
    if (task) return task;
    if (lesson) return getLessonTask(lesson);
    const foundLesson = CURRICULUM_DATA.flatMap((w) => w.lessons).find((l) => l.id === lessonId);
    if (foundLesson) return getLessonTask(foundLesson);

    // Generic fallback task
    return getLessonTask({
      id: lessonId,
      weekId: 'w0',
      order: 1,
      title: { en: 'Practice Task', bn: 'অনুশীলনী টাস্ক' },
      description: { en: 'Hands-on practice task', bn: 'হাতে-কলমে অনুশীলনী টাস্ক' },
      durationMinutes: 10,
      category: 'javascript',
      contentMarkdown: { en: 'Practice task theory', bn: 'অনুশীলনী টাস্ক থিওরি' },
      practiceCode: initialCode || '',
      expectedOutput: expectedOutput || '',
      terminalTasks: []
    });
  }, [task, lesson, lessonId, initialCode, expectedOutput]);
  // Load initial settings from localStorage
  const [settings, setSettings] = useState<PlaygroundSettings>(() => {
    try {
      const saved = localStorage.getItem('codazi_playground_settings');
      return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
    } catch (e) {
      return DEFAULT_SETTINGS;
    }
  });

  // Save settings when changed
  useEffect(() => {
    try {
      localStorage.setItem('codazi_playground_settings', JSON.stringify(settings));
    } catch (e) {}
  }, [settings]);

  // Load code state from localStorage or initial props
  const [codeState, setCodeState] = useState<PlaygroundState>(() => {
    try {
      const savedCode = localStorage.getItem(`codazi_playground_code_${lessonId}`);
      if (savedCode) {
        return JSON.parse(savedCode);
      }
    } catch (e) {}

    if (initialCode) {
      if (initialCode.includes('<html') || initialCode.includes('<div') || initialCode.includes('<h1')) {
        return { ...DEFAULT_STARTER, html: initialCode };
      } else {
        return { ...DEFAULT_STARTER, js: initialCode };
      }
    }
    return DEFAULT_STARTER;
  });

  // Save code state when changed
  useEffect(() => {
    try {
      localStorage.setItem(`codazi_playground_code_${lessonId}`, JSON.stringify(codeState));
    } catch (e) {}
  }, [codeState, lessonId]);

  // Editor Tabs
  const [activeEditorTab, setActiveEditorTab] = useState<'html' | 'css' | 'js'>('html');
  const [activeMobileView, setActiveMobileView] = useState<'editor' | 'preview' | 'console'>('editor');

  // Console Logs Buffer
  const [consoleLogs, setConsoleLogs] = useState<ConsoleLogItem[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const autoRunTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to build and run the preview iframe document
  const runPlayground = useCallback(() => {
    activityTracker.recordActivity('CODE_PLAYGROUND', 'CODE_RUN', lessonId);
    setConsoleLogs([]); // Clear previous logs on explicit run
    const iframe = iframeRef.current;
    if (!iframe) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          ${codeState.css}
        </style>
        <script>
          (function() {
            const _send = (level, args) => {
              try {
                window.parent.postMessage({
                  type: 'CODASI_PLAYGROUND_CONSOLE',
                  level: level,
                  args: Array.from(args).map(a => {
                    if (typeof a === 'object') {
                      try { return JSON.stringify(a, null, 2); } catch(e) { return String(a); }
                    }
                    return String(a);
                  })
                }, '*');
              } catch(e) {}
            };

            const _log = console.log;
            const _warn = console.warn;
            const _error = console.error;

            console.log = function(...args) { _send('log', args); _log.apply(console, args); };
            console.warn = function(...args) { _send('warn', args); _warn.apply(console, args); };
            console.error = function(...args) { _send('error', args); _error.apply(console, args); };

            window.onerror = function(msg, url, line, col, error) {
              _send('error', ['Uncaught Error: ' + msg + ' (line ' + line + ')']);
              return false;
            };
          })();
        </script>
      </head>
      <body>
        ${codeState.html}
        <script>
          try {
            ${codeState.js}
          } catch(err) {
            console.error("Script Execution Error: " + err.message);
          }
        </script>
      </body>
      </html>
    `;

    iframe.srcdoc = htmlContent;
  }, [codeState]);

  // Listen for console messages from sandboxed iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'CODASI_PLAYGROUND_CONSOLE') {
        const { level, args } = event.data;
        const newItem: ConsoleLogItem = {
          id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          level: level || 'log',
          args: args || [],
          timestamp: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
        };
        setConsoleLogs((prev) => [...prev, newItem]);

        // Check for expected output matching lesson pass condition
        if (expectedOutput) {
          const joinedArgs = (args || []).join(' ');
          if (joinedArgs.includes(expectedOutput.trim())) {
            setIsSuccess(true);
            if (onSuccess) onSuccess();
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [expectedOutput, onSuccess]);

  // Auto-run debounce when code changes
  useEffect(() => {
    if (settings.autoRun) {
      if (autoRunTimerRef.current) clearTimeout(autoRunTimerRef.current);
      autoRunTimerRef.current = setTimeout(() => {
        runPlayground();
      }, 600);
    }
    return () => {
      if (autoRunTimerRef.current) clearTimeout(autoRunTimerRef.current);
    };
  }, [codeState, settings.autoRun, runPlayground]);

  // Run initial code once component mounts
  useEffect(() => {
    runPlayground();
  }, []);

  // Real-time evaluation of Task Requirements against live code and execution output
  const evaluatedRequirements = useMemo(() => {
    if (!activeTask || !activeTask.requirements) return [];

    const htmlCode = codeState.html || '';
    const cssCode = codeState.css || '';
    const jsCode = codeState.js || '';
    const consoleText = consoleLogs.map((l) => (l.args || []).join(' ')).join('\n');

    return activeTask.requirements.map((req) => {
      let met = false;
      let fixHint = '';

      if (req.checkType === 'html_contains' && req.checkValue) {
        met = htmlCode.toLowerCase().includes(req.checkValue.toLowerCase());
        if (!met) {
          fixHint = language === 'bn'
            ? `Fix: HTML এডিটরে '${req.checkValue}' এলিমেন্ট যোগ করুন`
            : `Fix: Include required '${req.checkValue}' tag or attribute in the HTML editor.`;
        }
      } else if (req.checkType === 'css_contains' && req.checkValue) {
        met = cssCode.toLowerCase().includes(req.checkValue.toLowerCase());
        if (!met) {
          fixHint = language === 'bn'
            ? `Fix: CSS এডিটরে '${req.checkValue}' রুল বা প্রপার্টি যোগ করুন`
            : `Fix: Add required '${req.checkValue}' declaration in the CSS editor.`;
        }
      } else if (req.checkType === 'js_contains' && req.checkValue) {
        met = jsCode.toLowerCase().includes(req.checkValue.toLowerCase());
        if (!met) {
          fixHint = language === 'bn'
            ? `Fix: JS এডিটরে '${req.checkValue}' স্টেটমেন্ট বা লজিক যোগ করুন`
            : `Fix: Add required '${req.checkValue}' logic or function in the JS editor.`;
        }
      } else if (req.checkType === 'console_log' && req.checkValue) {
        met = consoleText.toLowerCase().includes(req.checkValue.toLowerCase());
        if (!met) {
          fixHint = language === 'bn'
            ? `Fix: কনসোলে '${req.checkValue}' প্রিন্ট করার জন্য কোড চালান`
            : `Fix: Execute code that prints '${req.checkValue}' to the console.`;
        }
      } else if (req.checkType === 'expected_output' && req.checkValue) {
        met = (consoleText + ' ' + htmlCode + ' ' + jsCode).toLowerCase().includes(req.checkValue.toLowerCase());
        if (!met) {
          fixHint = language === 'bn'
            ? `Fix: আউটপুট বা রেন্ডারে '${req.checkValue}' প্রদর্শন করুন`
            : `Fix: Ensure rendered output or console contains '${req.checkValue}'.`;
        }
      } else {
        met = Boolean(htmlCode.trim() || cssCode.trim() || jsCode.trim());
        if (!met) {
          fixHint = language === 'bn' ? 'Fix: এডিটরে উপযুক্ত কোড লিখুন' : 'Fix: Enter your solution code in the editor.';
        }
      }
      return { ...req, met, fixHint };
    });
  }, [activeTask, codeState, consoleLogs, language]);

  const allRequirementsMet = useMemo(() => {
    if (!evaluatedRequirements || evaluatedRequirements.length === 0) return false;
    return evaluatedRequirements.every((r) => r.met);
  }, [evaluatedRequirements]);

  // Trigger success callback when task requirements are satisfied
  useEffect(() => {
    if (allRequirementsMet && !isSuccess) {
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    }
  }, [allRequirementsMet, isSuccess, onSuccess]);

  // Keyboard shortcut listener for Cmd/Ctrl + Enter
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        runPlayground();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [runPlayground]);

  const handleResetCode = () => {
    if (window.confirm('Reset code to default template? Unsaved changes will be lost.')) {
      setCodeState(DEFAULT_STARTER);
      setConsoleLogs([]);
      setIsSuccess(false);
      setTimeout(runPlayground, 50);
    }
  };

  const handleClearConsole = () => {
    setConsoleLogs([]);
  };

  return (
    <div className="w-full my-4 rounded-3xl border border-[var(--border)] bg-[#0d1117] text-slate-100 overflow-hidden shadow-2xl flex flex-col font-sans">
      {/* 1. Header Control Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 select-none">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
            <Code2 className="h-4 w-4" />
          </div>
          <div>
            <h2 className="font-extrabold text-xs text-white tracking-wide flex items-center gap-2">
              <span>Code Playground</span>
              {settings.autoRun && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold border border-emerald-500/30">
                  ● Auto-Run
                </span>
              )}
            </h2>
            <p className="text-[10px] text-slate-400">CodePen-Style Live Workspace</p>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleResetCode}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium transition-all"
            title="Reset code to default"
          >
            <RotateCcw className="h-3.5 w-3.5 text-slate-400" />
            <span>Reset</span>
          </button>

          <button
            onClick={() => setIsSettingsOpen(true)}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium transition-all"
            title="Configure editor & preview"
          >
            <Sliders className="h-3.5 w-3.5 text-indigo-400" />
            <span>Settings</span>
          </button>

          <button
            onClick={() => setIsExportOpen(true)}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-bold transition-all shadow-sm"
            title="Export / Download Carbon-style code card or document"
          >
            <Download className="h-3.5 w-3.5 text-amber-400" />
            <span>Export</span>
          </button>

          <button
            onClick={runPlayground}
            className="flex items-center gap-2 text-xs px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold transition-all shadow-lg shadow-indigo-600/30 active:scale-95"
            title="Execute Code (Cmd/Ctrl + Enter)"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            <span>Run Code</span>
            <span className="hidden sm:inline text-[10px] opacity-70 font-mono">⌘↵</span>
          </button>
        </div>
      </div>

      {/* 2. NEW SECTION: TASK / HOMEWORK */}
      {activeTask && (
        <div className="bg-slate-900/80 border-b border-slate-800/90 p-3 sm:p-4 font-sans transition-all">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Target className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono font-extrabold text-[11px] text-amber-400 uppercase tracking-wider">
                    {language === 'bn' ? 'টাস্ক / হোমওয়ার্ক' : 'TASK / HOMEWORK'}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold border ${
                    allRequirementsMet
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                      : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                  }`}>
                    {evaluatedRequirements.filter(r => r.met).length}/{evaluatedRequirements.length} {language === 'bn' ? 'শর্ত পূরণ' : 'Requirements Met'}
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-200 mt-0.5 truncate">
                  {activeTask.objective[language] || activeTask.objective.en}
                </p>
              </div>
            </div>

            {/* Expand / Collapse Toggle Button */}
            <button
              onClick={() => setIsTaskExpanded(!isTaskExpanded)}
              className="px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer shadow-xs"
              title={isTaskExpanded ? "Collapse Task details" : "Expand Task details"}
            >
              <span>{isTaskExpanded ? (language === 'bn' ? 'সংক্ষিপ্ত করুন' : 'Hide Details') : (language === 'bn' ? 'টাস্ক দেখুন' : 'View Task')}</span>
              {isTaskExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          </div>

          {/* Expanded Task Details Container */}
          {isTaskExpanded && (
            <div className="mt-3.5 pt-3.5 border-t border-slate-800/80 space-y-3.5 text-xs">
              {/* Objective Box */}
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                <span className="text-[10px] font-mono font-extrabold text-amber-400 uppercase tracking-wider block">
                  {language === 'bn' ? 'উদ্দেশ্য (Objective)' : 'Objective'}
                </span>
                <p className="text-slate-200 font-medium leading-relaxed">
                  {activeTask.objective[language] || activeTask.objective.en}
                </p>
              </div>

              {/* Requirements List & Individual Verification Checkpoints */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-extrabold text-slate-400 uppercase tracking-wider block">
                  {language === 'bn' ? 'প্রয়োজনীয় শর্তাবলী (Requirements)' : 'Requirements'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
                  {evaluatedRequirements.map((req) => (
                    <div
                      key={req.id}
                      className={`p-2.5 rounded-xl border flex items-start gap-2.5 transition-all ${
                        req.met
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                          : 'bg-rose-500/10 border-rose-500/25 text-rose-300'
                      }`}
                    >
                      <div className={`h-4 w-4 rounded-md flex items-center justify-center shrink-0 text-[10px] font-black mt-0.5 ${
                        req.met ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'
                      }`}>
                        {req.met ? '✓' : '✕'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="text-[11px] font-medium leading-tight text-slate-200">
                            {req.text[language] || req.text.en}
                          </span>
                          <span className={`text-[9px] font-mono font-black uppercase px-1.5 py-0.5 rounded shrink-0 ${
                            req.met ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                          }`}>
                            {req.met ? 'PASS' : 'FAIL'}
                          </span>
                        </div>
                        {!req.met && req.fixHint && (
                          <p className="text-[10px] font-mono text-rose-300/90 mt-1 font-semibold leading-tight">
                            💡 {req.fixHint}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actionable Homework Progress Summary Banner */}
              <div className={`p-3 rounded-2xl border flex items-center justify-between gap-3 ${
                allRequirementsMet
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  : 'bg-amber-950/40 border-amber-500/30 text-amber-200'
              }`}>
                <div className="flex items-center gap-2.5 min-w-0">
                  {allRequirementsMet ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                  ) : (
                    <HelpCircle className="h-5 w-5 text-amber-400 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs">
                      {allRequirementsMet
                        ? (language === 'bn' ? 'হোমওয়ার্ক সম্পন্ন হয়েছে! ✓' : 'Homework Progress: All Requirements Met! ✓')
                        : (language === 'bn'
                            ? `হোমওয়ার্ক প্রোগ্রেস: ${evaluatedRequirements.filter(r => r.met).length}/${evaluatedRequirements.length} শর্ত পূর্ণ`
                            : `Homework Progress: ${evaluatedRequirements.filter(r => r.met).length}/${evaluatedRequirements.length} requirements completed`)}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-tight truncate">
                      {allRequirementsMet
                        ? (language === 'bn' ? 'সকল শর্ত সফলভাবে বাস্তবায়িত হয়েছে। স্যান্ডবক্স অনুশীলন সম্পূর্ণ।' : 'All requirements passed. Practice sandbox completed successfully.')
                        : (evaluatedRequirements.find(r => !r.met)?.fixHint || (language === 'bn' ? 'হোমওয়ার্কের শর্তাবলী পূরণ করতে কোড পরিবর্তন করুন।' : 'Update code to satisfy remaining requirements.'))}
                    </p>
                  </div>
                </div>
                <button
                  onClick={runPlayground}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs shrink-0 shadow-md transition-all active:scale-95"
                >
                  {language === 'bn' ? 'পুনরায় যাচাই করুন' : 'Run Verification'}
                </button>
              </div>

              {/* Instructions & Expected Result Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Instructions */}
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="text-[10px] font-mono font-extrabold text-indigo-400 uppercase tracking-wider block">
                    {language === 'bn' ? 'ধাপসমূহ (Instructions)' : 'Instructions'}
                  </span>
                  <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px] leading-relaxed">
                    {(activeTask.instructions[language] || activeTask.instructions.en || []).map((inst, idx) => (
                      <li key={idx} className="marker:text-indigo-400 marker:font-bold">
                        {inst}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Expected Result & Skills */}
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                  <div>
                    <span className="text-[10px] font-mono font-extrabold text-cyan-400 uppercase tracking-wider block">
                      {language === 'bn' ? 'প্রত্যাশিত ফলাফল (Expected Result)' : 'Expected Result'}
                    </span>
                    <p className="text-slate-300 text-[11px] leading-relaxed mt-0.5">
                      {activeTask.expectedResult[language] || activeTask.expectedResult.en}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                      {language === 'bn' ? 'অনুশীলিত দক্ষতা (Skills Practiced)' : 'Skills Practiced'}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {(activeTask.skills[language] || activeTask.skills.en || []).map((skill, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[10px] font-mono font-bold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. Responsive Mobile Tab Selector (Visible on small screens or tabbed layout) */}
      <div className="bg-slate-950 px-3 py-2 border-b border-slate-800/80 flex items-center justify-between gap-2 overflow-x-auto">
        {/* Editor Tabs (HTML / CSS / JS) */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-2xl border border-slate-800">
          <button
            onClick={() => { setActiveEditorTab('html'); setActiveMobileView('editor'); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
              activeEditorTab === 'html' && activeMobileView === 'editor'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileCode className="h-3.5 w-3.5" />
            <span>HTML</span>
          </button>

          <button
            onClick={() => { setActiveEditorTab('css'); setActiveMobileView('editor'); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
              activeEditorTab === 'css' && activeMobileView === 'editor'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="h-3.5 w-3.5" />
            <span>CSS</span>
          </button>

          <button
            onClick={() => { setActiveEditorTab('js'); setActiveMobileView('editor'); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
              activeEditorTab === 'js' && activeMobileView === 'editor'
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>JS</span>
          </button>
        </div>

        {/* View Tabs (Mobile Switch: Editor vs Preview vs Console) */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveMobileView('preview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeMobileView === 'preview'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Live</span> Preview
          </button>

          <button
            onClick={() => setActiveMobileView('console')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeMobileView === 'console'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>Console</span>
            {consoleLogs.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-white/20 font-extrabold">
                {consoleLogs.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 3. Main Editor & Preview Workspace Container */}
      <div className="p-3 bg-[#0a0d12] flex-1">
        {/* Desktop Split View or Mobile Single Active Panel View */}
        <div className={`grid gap-4 min-h-[380px] ${
          settings.layout === 'split'
            ? 'lg:grid-cols-2 grid-cols-1'
            : 'grid-cols-1'
        }`}>
          {/* Left / Active Editor Panel */}
          {(settings.layout === 'split' || activeMobileView === 'editor') && (
            <div className="flex flex-col space-y-2 h-full min-h-[320px]">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="text-indigo-400">●</span>
                  {activeEditorTab.toUpperCase()} Editor
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  TabSize: {settings.tabSize}sp | Font: {settings.fontSize}px
                </span>
              </div>

              <div className="flex-1 h-full">
                {activeEditorTab === 'html' && (
                  <CodeEditor
                    value={codeState.html}
                    onChange={(val) => {
                      setCodeState((prev) => ({ ...prev, html: val }));
                      activityTracker.recordActivity('CODE_PLAYGROUND', 'CODE_EDIT', lessonId, { codeLang: 'html' });
                    }}
                    language="html"
                    settings={settings}
                    onRunCode={runPlayground}
                    placeholder="<!-- Write HTML code here -->"
                  />
                )}

                {activeEditorTab === 'css' && (
                  <CodeEditor
                    value={codeState.css}
                    onChange={(val) => {
                      setCodeState((prev) => ({ ...prev, css: val }));
                      activityTracker.recordActivity('CODE_PLAYGROUND', 'CODE_EDIT', lessonId, { codeLang: 'css' });
                    }}
                    language="css"
                    settings={settings}
                    onRunCode={runPlayground}
                    placeholder="/* Write CSS styles here */"
                  />
                )}

                {activeEditorTab === 'js' && (
                  <CodeEditor
                    value={codeState.js}
                    onChange={(val) => {
                      setCodeState((prev) => ({ ...prev, js: val }));
                      activityTracker.recordActivity('CODE_PLAYGROUND', 'CODE_EDIT', lessonId, { codeLang: 'js' });
                    }}
                    language="javascript"
                    settings={settings}
                    onRunCode={runPlayground}
                    placeholder="// Write JavaScript logic here"
                  />
                )}
              </div>
            </div>
          )}

          {/* Right / Preview & Console Panel */}
          {(settings.layout === 'split' || activeMobileView === 'preview' || activeMobileView === 'console') && (
            <div className="flex flex-col space-y-3 h-full min-h-[320px]">
              {/* Preview Window (Visible when layout is split or preview active) */}
              {(settings.layout === 'split' || activeMobileView === 'preview') && (
                <div className="flex-1 flex flex-col rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-inner min-h-[260px]">
                  {/* Preview Top Chrome Bar */}
                  <div className="bg-slate-900/90 px-3 py-2 border-b border-slate-800 flex items-center justify-between select-none">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 ml-2">Live Preview Sandbox</span>
                    </div>

                    <button
                      onClick={runPlayground}
                      className="text-slate-400 hover:text-white transition-colors"
                      title="Refresh Preview"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Sandboxed Rendered Frame */}
                  <div className="flex-1 bg-slate-900 relative">
                    <iframe
                      ref={iframeRef}
                      title="Codazi Sandbox Preview"
                      sandbox="allow-scripts"
                      className="w-full h-full min-h-[260px] border-0 bg-white"
                    />
                  </div>
                </div>
              )}

              {/* Console Logs Panel */}
              {(settings.layout === 'split' || activeMobileView === 'console') && (
                <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden flex flex-col max-h-[180px]">
                  <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
                      <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Execution Console</span>
                      {consoleLogs.length > 0 && (
                        <span className="text-[10px] text-emerald-400 font-extrabold">({consoleLogs.length})</span>
                      )}
                    </span>

                    <button
                      onClick={handleClearConsole}
                      className="text-[11px] text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="h-3 w-3" />
                      <span>Clear</span>
                    </button>
                  </div>

                  <div className="p-3 overflow-y-auto space-y-1.5 font-mono text-xs max-h-[140px] bg-slate-950">
                    {consoleLogs.length === 0 ? (
                      <p className="text-[11px] text-slate-600 italic">No console output yet. Write JavaScript or click Run Code.</p>
                    ) : (
                      consoleLogs.map((log) => {
                        let badgeColor = 'bg-sky-500/20 text-sky-300 border-sky-500/30';
                        if (log.level === 'warn') badgeColor = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
                        if (log.level === 'error') badgeColor = 'bg-rose-500/20 text-rose-300 border-rose-500/30';

                        return (
                          <div key={log.id} className="flex items-start gap-2 text-[11px] border-b border-slate-900/60 pb-1">
                            <span className="text-[10px] text-slate-500 shrink-0 select-none pt-0.5">{log.timestamp}</span>
                            <span className={`px-1.5 py-0.2 rounded text-[9px] uppercase font-bold border shrink-0 ${badgeColor}`}>
                              {log.level}
                            </span>
                            <pre className="text-slate-200 whitespace-pre-wrap font-mono flex-1">{log.args.join(' ')}</pre>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              )}

              {/* Lesson Verification Banner */}
              {isSuccess && (
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-xs text-emerald-400 font-bold animate-fade-in">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Practice Exercise Passed Successfully!</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 4. Settings Drawer Modal */}
      <PlaygroundSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdateSettings={setSettings}
      />

      {/* 5. Carbon-Style Export Modal */}
      <PlaygroundExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        state={codeState}
        settings={settings}
        lessonId={lessonId}
        previewIframeRef={iframeRef}
      />
    </div>
  );
};
