import React, { useState, useRef, useEffect } from 'react';
import {
  Folder,
  GitBranch,
  Zap,
  Clock,
  CheckCircle2,
  Sparkles,
  Terminal as TerminalIcon,
  Search,
  Minus,
  Square,
  X
} from 'lucide-react';
import { TerminalTask, Language, UserProfile } from '../types';
import { t } from '../i18n/translations';
import { getActiveUser } from '../services/auth';
import {
  createInitialVFS,
  createInitialGitState,
  parseCommandLine,
  COMMAND_REGISTRY,
  getTabCompletions,
  TerminalContext,
  VFSNode,
  GitState,
  getNodeByPath,
  resolvePath
} from '../services/terminalEngine';
import { activityTracker } from '../services/activityTracker';
import { workspaceManager } from '../services/workspaceManager';

interface TerminalProps {
  tasks: TerminalTask[];
  language: Language;
  user?: UserProfile | null;
  userName?: string;
  lessonTitle?: string;
  lessonId?: string;
  weekId?: string;
  weekOrder?: number;
  lessonOrder?: number;
  onTasksCompleted?: () => void;
  onCommitCountIncrement?: () => void;
}

interface CommandLog {
  id: string;
  folder: string;
  branch: string;
  isClean: boolean;
  command: string;
  output: string;
  isError?: boolean;
  isNeofetch?: boolean;
}

// Powerline Right-pointing Chevron Wedge
const PowerlineChevron: React.FC<{ fromColor: string; toColor?: string; height?: number; width?: number }> = ({
  fromColor,
  toColor = 'transparent',
  height = 24,
  width = 10
}) => (
  <span
    className="inline-block relative shrink-0 align-middle select-none overflow-hidden"
    style={{ backgroundColor: toColor, height: `${height}px`, width: `${width}px` }}
  >
    <svg
      viewBox="0 0 10 24"
      className="block w-full h-full"
      preserveAspectRatio="none"
    >
      <path d="M0 0 L10 12 L0 24 Z" fill={fromColor} />
    </svg>
  </span>
);

// Oh-My-Posh Powerline Prompt Bar: [ 📁 folder ]▶ [ 🐙 branch ≡ ]▶ [ ⚡ ]▶
export const OhMyPoshPrompt: React.FC<{
  folder: string;
  branch?: string;
  isClean?: boolean;
}> = ({ folder, branch = 'main', isClean = true }) => {
  return (
    <div className="inline-flex items-center select-none font-mono text-xs font-bold leading-none shrink-0 shadow-sm my-0.5">
      {/* Segment 1: Folder (Warm Amber / Orange) */}
      <span className="bg-[#ea8b2c] text-[#0f172a] px-2 py-1 flex items-center gap-1.5 rounded-l-sm h-6">
        <Folder className="h-3.5 w-3.5 fill-[#0f172a] text-[#0f172a] shrink-0" />
        <span className="tracking-tight">{folder}</span>
      </span>

      {/* Chevron 1 -> 2 */}
      <PowerlineChevron fromColor="#ea8b2c" toColor="#facc15" height={24} width={10} />

      {/* Segment 2: Git Branch (Bright Yellow / Gold) */}
      <span className="bg-[#facc15] text-[#0f172a] px-2 py-1 flex items-center gap-1 h-6">
        <GitBranch className="h-3.5 w-3.5 text-[#0f172a] stroke-[2.5] shrink-0" />
        <span className="tracking-tight">{branch}</span>
        <span className="text-[11px] font-black">{isClean ? '≡' : '*'}</span>
      </span>

      {/* Chevron 2 -> 3 */}
      <PowerlineChevron fromColor="#facc15" toColor="#0ea5e9" height={24} width={10} />

      {/* Segment 3: Lightning / Execution Status (Electric Cyan) */}
      <span className="bg-[#0ea5e9] text-white px-2 py-1 flex items-center justify-center h-6">
        <Zap className="h-3.5 w-3.5 fill-white text-white shrink-0" />
      </span>

      {/* Chevron 3 -> Terminal Background */}
      <PowerlineChevron fromColor="#0ea5e9" toColor="transparent" height={24} width={10} />
    </div>
  );
};

// Live Terminal System Clock Component (Updates dynamically every second)
const LiveTerminalClock: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>(() =>
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeStr(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="bg-[#00afaf] text-slate-950 px-2 py-1 flex items-center gap-1 font-bold h-5">
      <Clock className="h-3 w-3 shrink-0" />
      <span>{timeStr}</span>
    </span>
  );
};

// Oh My Posh Top Status Banner (Clean Shell Status)
const TerminalTopBanner: React.FC<{
  studentShort: string;
  projectDir: string;
  branch: string;
}> = ({ studentShort, projectDir, branch }) => {
  return (
    <div className="space-y-2 select-none text-[11px] font-mono leading-none pb-2.5 border-b border-[#22313b]">
      {/* Top Powerline Status Ribbon */}
      <div className="flex items-center flex-wrap gap-y-1">
        {/* Segment 1: User / Host (Teal) */}
        <span className="bg-[#008787] text-[#5eead4] px-2 py-1 rounded-l-sm flex items-center gap-1 font-bold h-5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
          <span>{studentShort}</span>
        </span>
        <PowerlineChevron fromColor="#008787" toColor="#d75f87" height={20} width={8} />

        {/* Segment 2: Directory Path (Magenta) */}
        <span className="bg-[#d75f87] text-white px-2 py-1 flex items-center gap-1 font-medium h-5">
          <Folder className="h-3 w-3 fill-white text-white shrink-0" />
          <span>➔ ~\{projectDir}</span>
        </span>
        <PowerlineChevron fromColor="#d75f87" toColor="#ff875f" height={20} width={8} />

        {/* Segment 3: Git Branch (Peach/Orange) */}
        <span className="bg-[#ff875f] text-slate-950 px-2 py-1 flex items-center gap-1 font-bold h-5">
          <span>➔ (</span>
          <GitBranch className="h-3 w-3 stroke-[2.5] shrink-0" />
          <span>{branch})</span>
        </span>
        <PowerlineChevron fromColor="#ff875f" toColor="#8787af" height={20} width={8} />

        {/* Segment 4: Execution Timing (Slate Purple) */}
        <span className="bg-[#8787af] text-white px-2 py-1 flex items-center gap-1 font-mono h-5">
          <span>0ms</span>
        </span>
        <PowerlineChevron fromColor="#8787af" toColor="#00afaf" height={20} width={8} />

        {/* Segment 5: Dynamic System Time (Light Cyan) */}
        <LiveTerminalClock />
        <PowerlineChevron fromColor="#00afaf" toColor="#005f5f" height={20} width={8} />

        {/* Segment 6: Endcap (Deep Teal) */}
        <span className="bg-[#005f5f] text-teal-200 px-2 py-1 font-bold h-5">
          ~
        </span>
        <PowerlineChevron fromColor="#005f5f" toColor="transparent" height={20} width={8} />
      </div>
    </div>
  );
};

export const Terminal: React.FC<TerminalProps> = ({
  tasks,
  language,
  user,
  userName,
  lessonTitle,
  lessonId,
  weekId,
  weekOrder,
  lessonOrder,
  onTasksCompleted,
  onCommitCountIncrement
}) => {
  // 1. Read existing Login/Auth state:
  const activeUser = user !== undefined ? user : getActiveUser();

  const getRealStudentName = (): string => {
    if (activeUser && (activeUser.name || activeUser.username || activeUser.email)) {
      return activeUser.name || activeUser.username || (activeUser.email ? activeUser.email.split('@')[0] : 'student');
    }
    if (userName && userName !== 'guest' && userName !== 'Shaon' && userName !== 'Samira' && userName !== 'curious') {
      return userName;
    }
    return 'guest';
  };

  const studentDisplayName = getRealStudentName();

  const getStudentShortName = (name: string): string => {
    if (!name || name === 'guest') return 'guest';
    const firstWord = name.split(' ')[0].replace(/[^a-zA-Z0-9_-]/g, '');
    return firstWord ? firstWord.toLowerCase() : 'guest';
  };

  const studentShort = getStudentShortName(studentDisplayName);
  const homePath = studentShort === 'guest' ? '/home/guest' : `/Users/${studentShort}`;
  const defaultCwd = `${homePath}/Projects/curious-learners`;

  // Window Controls State (macOS Minimize / Maximize)
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  // Compute workspace branch for this lesson
  const initialBranchInfo = React.useMemo(() => {
    if (activeUser && weekId && lessonId && weekOrder !== undefined && lessonOrder !== undefined) {
      const { workspace, branchMeta } = workspaceManager.getOrCreateLessonBranch(
        activeUser,
        { id: weekId, order: weekOrder, title: { en: `Week ${weekOrder}` } },
        { id: lessonId, order: lessonOrder, title: { en: lessonTitle || `Lesson ${lessonOrder}` } }
      );
      return {
        branch: branchMeta.branchName,
        baseBranch: branchMeta.baseBranch,
        repoUrl: workspace.fork.repositoryUrl
      };
    }
    return null;
  }, [activeUser, weekId, lessonId, weekOrder, lessonOrder, lessonTitle]);

  // Terminal State Engine
  const [cwd, setCwd] = useState<string>(defaultCwd);
  const [vfs, setVfs] = useState<VFSNode>(() => createInitialVFS(studentShort));
  const [git, setGit] = useState<GitState>(() => {
    const base = createInitialGitState();
    if (initialBranchInfo) {
      return {
        ...base,
        currentBranch: initialBranchInfo.branch,
        branches: Array.from(new Set(['main', initialBranchInfo.baseBranch, initialBranchInfo.branch, ...base.branches])),
        remotes: { origin: `${initialBranchInfo.repoUrl}.git` }
      };
    }
    return base;
  });
  const [lastExitCode, setLastExitCode] = useState<number>(0);
  const [aliases] = useState<Record<string, string>>({
    ll: 'ls -la',
    la: 'ls -a',
    cls: 'clear',
    '..': 'cd ..'
  });

  const getProjectDir = (currentCwd: string): string => {
    const parts = currentCwd.split('/').filter(Boolean);
    if (parts.length === 0) return 'curious-learners';
    const projectsIdx = parts.indexOf('Projects');
    if (projectsIdx !== -1 && projectsIdx < parts.length - 1) {
      return parts.slice(projectsIdx + 1).join('/');
    }
    return parts[parts.length - 1] || 'curious-learners';
  };

  const projectDir = getProjectDir(cwd);
  const isGitClean =
    git.stagedFiles.length === 0 &&
    git.modifiedFiles.length === 0 &&
    git.untrackedFiles.length === 0;

  const [inputCommand, setInputCommand] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const tempDraftRef = useRef<string>('');
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const [completionHints, setCompletionHints] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, inputCommand, completionHints]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Command Execution
  const executeCommand = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    setCompletionHints([]);
    setCommandHistory((prev) => {
      if (prev.length > 0 && prev[0] === trimmed) return prev;
      return [trimmed, ...prev];
    });
    setHistoryIndex(-1);
    tempDraftRef.current = '';

    if (trimmed === 'clear') {
      setHistory([]);
      setInputCommand('');
      setLastExitCode(0);
      return;
    }

    const parsed = parseCommandLine(trimmed);
    let cmdName = parsed.command.toLowerCase();

    if (aliases[cmdName]) {
      const expanded = parseCommandLine(`${aliases[cmdName]} ${parsed.args.join(' ')}`);
      cmdName = expanded.command.toLowerCase();
      parsed.args = expanded.args;
    }

    activityTracker.recordActivity('TERMINAL', 'TERMINAL_COMMAND', undefined, { commandName: cmdName });

    const context: TerminalContext = {
      studentName: studentDisplayName,
      studentShort,
      lessonTitle,
      cwd,
      vfs,
      git,
      env: { USER: studentShort, HOME: homePath, SHELL: '/bin/zsh' },
      aliases,
      commandHistory,
      lastExitCode,
      setCwd: (newPath) => setCwd(newPath),
      updateVfs: (updater) => {
        setVfs((prev) => {
          const draft = JSON.parse(JSON.stringify(prev));
          updater(draft);
          return draft;
        });
      },
      updateGit: (updater) => {
        setGit((prev) => {
          const draft = JSON.parse(JSON.stringify(prev));
          updater(draft);
          return draft;
        });
      },
      onCommitIncrement: onCommitCountIncrement
    };

    let outputText = '';
    let exitCode = 0;
    let isError = false;
    let isNeofetch = false;

    const cmdDef = COMMAND_REGISTRY[cmdName];
    if (cmdDef) {
      const result = cmdDef.execute(parsed.args, context);
      outputText = result.stdout;
      exitCode = result.exitCode;
      isNeofetch = !!result.isNeofetch;
      isError = exitCode !== 0;
    } else {
      outputText = `terminal: Unknown command: '${cmdName}'. Type 'help' for valid commands.`;
      exitCode = 127;
      isError = true;
    }

    // Output redirection (> or >>)
    if (parsed.redirectFile && exitCode === 0) {
      const resolvedTarget = resolvePath(cwd, parsed.redirectFile, studentShort);
      const parentPath = resolvedTarget.substring(0, resolvedTarget.lastIndexOf('/')) || '/';
      const leafName = resolvedTarget.substring(resolvedTarget.lastIndexOf('/') + 1);

      setVfs((prev) => {
        const draft = JSON.parse(JSON.stringify(prev));
        const parentNode = getNodeByPath(draft, parentPath);
        if (parentNode && parentNode.children) {
          const existing = parentNode.children[leafName];
          const newContent = parsed.appendRedirect && existing?.content
            ? existing.content + '\n' + outputText
            : outputText;

          parentNode.children[leafName] = {
            name: leafName,
            type: 'file',
            content: newContent,
            modifiedAt: new Date().toISOString(),
            size: newContent.length
          };
        }
        return draft;
      });

      outputText = '';
    }

    setLastExitCode(exitCode);

    const newLog: CommandLog = {
      id: `log-${Date.now()}`,
      folder: projectDir,
      branch: git.currentBranch || 'main',
      isClean: isGitClean,
      command: trimmed,
      output: outputText,
      isError,
      isNeofetch
    };

    setHistory((prev) => [...prev, newLog]);
    setInputCommand('');

    tasks.forEach((task) => {
      if (!completedTaskIds.includes(task.id)) {
        if (trimmed.toLowerCase().includes(task.expectedCommandPattern.toLowerCase())) {
          setCompletedTaskIds((prev) => (prev.includes(task.id) ? prev : [...prev, task.id]));
        }
      }
    });
  };

  // Task Completion Callback
  useEffect(() => {
    if (tasks.length > 0 && completedTaskIds.length === tasks.length && onTasksCompleted) {
      onTasksCompleted();
    }
  }, [completedTaskIds, tasks.length, onTasksCompleted]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputCommand);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const dummyCtx: TerminalContext = {
        studentName: studentDisplayName,
        studentShort,
        lessonTitle,
        cwd,
        vfs,
        git,
        env: {},
        aliases,
        commandHistory,
        lastExitCode,
        setCwd,
        updateVfs: () => {},
        updateGit: () => {}
      };
      const completion = getTabCompletions(inputCommand, dummyCtx);
      if (completion.line !== inputCommand) {
        setInputCommand(completion.line);
        setCompletionHints([]);
      } else if (completion.options.length > 0) {
        setCompletionHints(completion.options);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      if (historyIndex === -1) {
        // Save current uncommitted draft
        tempDraftRef.current = inputCommand;
        const nextIndex = 0;
        setHistoryIndex(nextIndex);
        setInputCommand(commandHistory[nextIndex]);
        setTimeout(() => {
          if (inputRef.current) {
            const len = commandHistory[nextIndex].length;
            inputRef.current.setSelectionRange(len, len);
          }
        }, 0);
      } else if (historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputCommand(commandHistory[nextIndex]);
        setTimeout(() => {
          if (inputRef.current) {
            const len = commandHistory[nextIndex].length;
            inputRef.current.setSelectionRange(len, len);
          }
        }, 0);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputCommand(commandHistory[nextIndex]);
        setTimeout(() => {
          if (inputRef.current) {
            const len = commandHistory[nextIndex].length;
            inputRef.current.setSelectionRange(len, len);
          }
        }, 0);
      } else if (historyIndex === 0) {
        // Restore uncommitted draft
        setHistoryIndex(-1);
        const draft = tempDraftRef.current || '';
        setInputCommand(draft);
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.setSelectionRange(draft.length, draft.length);
          }
        }, 0);
      }
    } else if (e.key === 'Escape') {
      if (historyIndex !== -1) {
        setHistoryIndex(-1);
        setInputCommand(tempDraftRef.current || '');
      }
    }
  };

  // Helper to format output with Fish-Shell syntax coloring (especially `ls`)
  const renderLogOutput = (log: CommandLog) => {
    if (log.isError) {
      return (
        <pre className="whitespace-pre-wrap font-mono text-xs text-rose-400 leading-relaxed break-all">
          {log.output}
        </pre>
      );
    }
    if (log.isNeofetch) {
      return (
        <pre className="whitespace-pre-wrap font-mono text-xs text-amber-300 leading-relaxed break-all">
          {log.output}
        </pre>
      );
    }

    // Format `ls` output with authentic multi-column syntax highlighting
    if (log.command.startsWith('ls') && !log.command.includes('-l')) {
      const lines = log.output.split('\n');
      return (
        <div className="space-y-1 my-1 font-mono text-xs leading-relaxed">
          {lines.map((line, li) => {
            const tokens = line.split(/\s+/).filter(Boolean);
            return (
              <div key={li} className="flex flex-wrap gap-x-6 gap-y-1">
                {tokens.map((token, ti) => {
                  const isDir = token.endsWith('/');
                  const isDoc =
                    token.toLowerCase().endsWith('.md') ||
                    (token === token.toUpperCase() && token.includes('_'));
                  const isCode =
                    token.endsWith('.js') ||
                    token.endsWith('.ts') ||
                    token.endsWith('.json');

                  return (
                    <span
                      key={ti}
                      className={
                        isDir
                          ? 'text-[#38bdf8] font-bold tracking-tight'
                          : isDoc
                          ? 'text-white font-medium'
                          : isCode
                          ? 'text-[#fde047]'
                          : 'text-[#cbd5e1]'
                      }
                    >
                      {token}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <pre className="whitespace-pre-wrap font-mono text-xs text-slate-300 leading-relaxed break-all">
        {log.output}
      </pre>
    );
  };

  return (
    <div className="space-y-2 my-4 max-w-full font-mono">
      <div
        onClick={focusInput}
        tabIndex={0}
        onKeyDown={(e) => {
          if (document.activeElement !== inputRef.current) {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              e.preventDefault();
              focusInput();
              handleKeyDown(e as unknown as React.KeyboardEvent<HTMLInputElement>);
            }
          }
        }}
        className="rounded-2xl overflow-hidden border border-[#26333d] bg-[#162026] text-slate-200 text-xs shadow-2xl transition-all select-text focus:outline-none"
      >
        {/* Terminal Header with macOS Window Controls at Beginning (macOS Default) */}
        <div className="bg-[#1a2329] px-4 py-2.5 flex items-center justify-between border-b border-[#26333d] select-none">
          {/* macOS-style Window Controls at the Beginning: Close (Red), Minimize (Yellow), Maximize (Green) */}
          <div className="flex items-center gap-2 group select-none">
            {/* Close (Red) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setHistory([]);
                focusInput();
              }}
              className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center cursor-pointer transition-all hover:brightness-110 active:scale-90 shadow-sm"
              title="Close / Clear Terminal Output"
              aria-label="Close"
            >
              <X className="h-2 w-2 text-[#4c0000] opacity-0 group-hover:opacity-100 transition-opacity stroke-[3]" />
            </button>

            {/* Minimize (Yellow) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized((prev) => !prev);
              }}
              className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123] flex items-center justify-center cursor-pointer transition-all hover:brightness-110 active:scale-90 shadow-sm"
              title="Minimize Window"
              aria-label="Minimize"
            >
              <Minus className="h-2 w-2 text-[#5c3e00] opacity-0 group-hover:opacity-100 transition-opacity stroke-[3]" />
            </button>

            {/* Maximize (Green) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMaximized((prev) => !prev);
              }}
              className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29] flex items-center justify-center cursor-pointer transition-all hover:brightness-110 active:scale-90 shadow-sm"
              title="Maximize Window"
              aria-label="Maximize"
            >
              <Square className="h-1.5 w-1.5 text-[#004d11] opacity-0 group-hover:opacity-100 transition-opacity stroke-[3]" />
            </button>
          </div>

          {/* Centered Window Title: ~/oh-my-posh */}
          <div className="flex items-center gap-2 text-slate-300 font-bold text-xs tracking-tight">
            <span className="text-slate-400 font-normal font-mono">~/{projectDir}</span>
          </div>

          {/* Right side search/menu button & online status */}
          <div className="flex items-center gap-2 text-slate-400">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                focusInput();
              }}
              className="h-6 w-6 rounded-md bg-[#24303a] hover:bg-[#2e3e4b] flex items-center justify-center cursor-pointer transition-colors"
              title="Focus Terminal"
            >
              <Search className="h-3.5 w-3.5 text-slate-300" />
            </button>
            <span className="h-2 w-2 rounded-full bg-emerald-400" title="Terminal Online" />
          </div>
        </div>

        {/* Terminal Body (collapsible when minimized) */}
        {!isMinimized && (
          <>
            {/* Terminal Task Instructions Checklist */}
            {tasks.length > 0 && (
              <div className="bg-[#131b20] border-b border-[#26333d] p-3 text-slate-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[11px] uppercase tracking-wider text-amber-400 flex items-center gap-1 font-mono">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                    {t.terminalTaskTitle[language]}
                  </span>
                  <span className="text-[10px] font-semibold text-cyan-400 font-mono">
                    {completedTaskIds.length}/{tasks.length} Completed
                  </span>
                </div>

                <div className="space-y-1.5 font-mono">
                  {tasks.map((task) => {
                    const isDone = completedTaskIds.includes(task.id);
                    return (
                      <div
                        key={task.id}
                        className={`flex items-start gap-2 text-[11px] p-2 rounded-lg transition-colors ${
                          isDone
                            ? 'bg-emerald-950/40 border border-emerald-800/40 text-emerald-200'
                            : 'bg-[#1a2329]/70 border border-[#26333d] text-slate-300'
                        }`}
                      >
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            isDone ? 'text-emerald-400 fill-emerald-950' : 'text-slate-600'
                          }`}
                        />
                        <div>
                          <p className="font-medium">{task.instruction[language]}</p>
                          {isDone && (
                            <p className="text-[10px] text-emerald-400 font-mono mt-0.5">
                              ✓ {task.successMessage[language]}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Terminal Output Viewport & Interactive Shell Area */}
            <div className={`p-4 sm:p-5 ${isMaximized ? 'max-h-[580px]' : 'max-h-[380px]'} overflow-y-auto space-y-3 leading-relaxed font-mono cursor-text selection:bg-cyan-500/30`}>
              {/* Clean Oh-My-Posh Powerline Banner */}
              <TerminalTopBanner
                studentShort={studentShort}
                projectDir={projectDir}
                branch={git.currentBranch || 'main'}
              />

          {/* Historical Commands with Oh-My-Posh Prompts */}
          {history.map((log) => (
            <div key={log.id} className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <OhMyPoshPrompt
                  folder={log.folder}
                  branch={log.branch}
                  isClean={log.isClean}
                />
                <span className="text-[#38bdf8] font-bold text-xs tracking-tight">
                  {log.command}
                </span>
              </div>
              {renderLogOutput(log)}
            </div>
          ))}

          {/* Tab Completion Candidates */}
          {completionHints.length > 0 && (
            <div className="text-[11px] text-cyan-300 font-mono flex flex-wrap gap-2.5 bg-[#1a2329] p-2 rounded-lg border border-[#26333d]">
              <span className="text-slate-400 font-bold select-none">Completions:</span>
              {completionHints.map((hint, i) => (
                <span
                  key={i}
                  className="hover:underline cursor-pointer bg-[#24303a] px-1.5 py-0.5 rounded text-cyan-200"
                  onClick={() => {
                    setInputCommand((prev) => prev.trim() + ' ' + hint);
                    setCompletionHints([]);
                  }}
                >
                  {hint}
                </span>
              ))}
            </div>
          )}

          {/* Active Inline Prompt Line with Direct Focusable Input */}
          <div
            onClick={focusInput}
            className="flex items-center gap-2 flex-wrap pt-1 font-mono cursor-text"
          >
            <OhMyPoshPrompt
              folder={projectDir}
              branch={git.currentBranch || 'main'}
              isClean={isGitClean}
            />
            <div className="flex-1 min-w-[140px] flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputCommand}
                onChange={(e) => {
                  setInputCommand(e.target.value);
                  if (historyIndex !== -1) {
                    setHistoryIndex(-1);
                  }
                }}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-white font-mono text-xs outline-none border-none p-0 focus:ring-0 focus:outline-none caret-[#38bdf8] tracking-normal"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                aria-label="Terminal command prompt"
              />
            </div>
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Terminal Bottom Bar with Keyboard Return / Enter Key UI */}
        <div className="border-t border-[#26333d] bg-[#1a2329] px-4 py-2.5 flex items-center justify-between gap-3 font-mono text-xs select-none">
          <div className="flex items-center gap-2 text-slate-400 overflow-x-auto text-[11px] py-0.5">
            <span className="text-cyan-400 font-bold hidden sm:inline">oh-my-posh v21.27</span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline text-[10px]">↑/↓ history</span>
            <span className="text-slate-300 font-medium truncate max-w-[180px] sm:max-w-[300px]">
              {inputCommand || (
                <span className="text-slate-500 italic">Type ls, git status, neofetch...</span>
              )}
            </span>
          </div>

          {/* Physical Keyboard Return Key Representation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              executeCommand(inputCommand);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#24303a] hover:bg-[#2f3f4c] active:bg-[#1c2730] border border-[#374857] text-slate-200 font-mono text-[11px] font-bold shadow-sm transition-all cursor-pointer shrink-0 hover:border-cyan-500/50 hover:text-cyan-300 active:scale-95"
            title="Execute Command (Enter Key)"
            aria-label="Execute command"
          >
            <span className="text-xs font-bold leading-none text-cyan-400">↵</span>
            <span className="text-[10px] uppercase tracking-wider">RETURN</span>
          </button>
        </div>
          </>
        )}
      </div>

      {/* Helper Footer Hint */}
      <p className="text-[11px] text-slate-400 font-mono px-1">
        Try: <span className="text-amber-400 font-semibold">ls</span> →{' '}
        <span className="text-cyan-400 font-semibold">pwd</span> →{' '}
        <span className="text-emerald-400 font-semibold">git status</span> →{' '}
        <span className="text-indigo-300 font-semibold">mkdir demo</span> →{' '}
        <span className="text-amber-300 font-semibold">neofetch</span>
      </p>
    </div>
  );
};
