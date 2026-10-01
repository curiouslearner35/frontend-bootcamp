/**
 * Codazi Learning Hub — Native Terminal Command Engine
 * Real virtual filesystem, Git state, shell parser, command registry & Tab completion
 */

export interface CommandResult {
  stdout: string;
  stderr?: string;
  exitCode: number;
  isNeofetch?: boolean;
}

export interface VFSNode {
  name: string;
  type: 'file' | 'directory';
  content?: string;
  children?: Record<string, VFSNode>;
  modifiedAt: string;
  size?: number;
}

export interface GitCommit {
  hash: string;
  message: string;
  author: string;
  date: string;
  branch: string;
}

export interface GitState {
  isInitialized: boolean;
  currentBranch: string;
  branches: string[];
  stagedFiles: string[];
  untrackedFiles: string[];
  modifiedFiles: string[];
  commits: GitCommit[];
  remotes: Record<string, string>;
}

export interface TerminalContext {
  studentName: string;
  studentShort: string;
  lessonTitle?: string;
  cwd: string;
  vfs: VFSNode;
  git: GitState;
  env: Record<string, string>;
  aliases: Record<string, string>;
  commandHistory: string[];
  lastExitCode: number;
  setCwd: (newCwd: string) => void;
  updateVfs: (updater: (draft: VFSNode) => void) => void;
  updateGit: (updater: (draft: GitState) => void) => void;
  onCommitIncrement?: () => void;
}

export interface TerminalCommandDef {
  name: string;
  aliases?: string[];
  category: 'core' | 'filesystem' | 'text' | 'git' | 'node' | 'system' | 'process' | 'learning';
  description: string;
  usage: string;
  manual?: string;
  execute: (args: string[], context: TerminalContext) => CommandResult;
}

// Initial Virtual Filesystem
export const createInitialVFS = (studentShort: string): VFSNode => {
  const userHomeDir = studentShort.toLowerCase();

  return {
    name: '',
    type: 'directory',
    modifiedAt: new Date().toISOString(),
    children: {
      Users: {
        name: 'Users',
        type: 'directory',
        modifiedAt: new Date().toISOString(),
        children: {
          [userHomeDir]: {
            name: userHomeDir,
            type: 'directory',
            modifiedAt: new Date().toISOString(),
            children: {
              Desktop: {
                name: 'Desktop',
                type: 'directory',
                modifiedAt: new Date().toISOString(),
                children: {}
              },
              Documents: {
                name: 'Documents',
                type: 'directory',
                modifiedAt: new Date().toISOString(),
                children: {
                  'learning-notes.txt': {
                    name: 'learning-notes.txt',
                    type: 'file',
                    content: 'Codazi Learning Hub — Full-Stack Developer Course Notes\n1. Git Workflow\n2. HTML/CSS Semantics\n3. JS DOM Manipulation\n4. REST APIs',
                    modifiedAt: new Date().toISOString(),
                    size: 148
                  }
                }
              },
              Downloads: {
                name: 'Downloads',
                type: 'directory',
                modifiedAt: new Date().toISOString(),
                children: {}
              },
              Projects: {
                name: 'Projects',
                type: 'directory',
                modifiedAt: new Date().toISOString(),
                children: {
                  'curious-learners': {
                    name: 'curious-learners',
                    type: 'directory',
                    modifiedAt: new Date().toISOString(),
                    children: {
                      'index.js': {
                        name: 'index.js',
                        type: 'file',
                        content: `console.log("Welcome to Codazi Learning Hub!");\nconst sum = (a, b) => a + b;\nconsole.log("Result: " + sum(20, 22));`,
                        modifiedAt: new Date().toISOString(),
                        size: 110
                      },
                      'package.json': {
                        name: 'package.json',
                        type: 'file',
                        content: `{\n  "name": "curious-learners",\n  "version": "1.0.0",\n  "description": "Interactive Full-Stack Web Academy App",\n  "main": "index.js",\n  "scripts": {\n    "start": "node index.js",\n    "test": "echo \\"Error: no test specified\\" && exit 0"\n  }\n}`,
                        modifiedAt: new Date().toISOString(),
                        size: 210
                      },
                      'README.md': {
                        name: 'README.md',
                        type: 'file',
                        content: '# Curious Learners Academy\n\nInteractive software development learning platform powered by React, Node, and Git workflows.',
                        modifiedAt: new Date().toISOString(),
                        size: 125
                      },
                      '.gitignore': {
                        name: '.gitignore',
                        type: 'file',
                        content: 'node_modules/\n.env\ndist/\n.DS_Store',
                        modifiedAt: new Date().toISOString(),
                        size: 32
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
};

// Initial Git State
export const createInitialGitState = (): GitState => ({
  isInitialized: true,
  currentBranch: 'main',
  branches: ['main', 'feature/login', 'dev'],
  stagedFiles: ['index.js', 'package.json'],
  untrackedFiles: ['README.md'],
  modifiedFiles: [],
  commits: [
    {
      hash: 'e8f9a2b',
      message: 'feat: initialize curious learners repository',
      author: 'Shaon <shaon@codazi.academy>',
      date: 'Sat Sep 20 2026',
      branch: 'main'
    }
  ],
  remotes: {
    origin: 'https://github.com/codazi-academy/curious-learners.git'
  }
});

// Helper VFS path lookup
export const getNodeByPath = (vfs: VFSNode, absolutePath: string): VFSNode | null => {
  const parts = absolutePath.split('/').filter(Boolean);
  let curr = vfs;
  for (const part of parts) {
    if (!curr.children || !curr.children[part]) {
      return null;
    }
    curr = curr.children[part];
  }
  return curr;
};

// Resolve path relative to CWD
export const resolvePath = (cwd: string, targetPath: string, studentShort: string): string => {
  const home = `/Users/${studentShort.toLowerCase()}`;
  let path = targetPath.trim();
  if (path === '~' || path.startsWith('~/')) {
    path = path.replace('~', home);
  } else if (!path.startsWith('/')) {
    path = (cwd === '/' ? '' : cwd) + '/' + path;
  }

  // Normalize /./ and /../
  const parts = path.split('/').filter(Boolean);
  const stack: string[] = [];
  for (const part of parts) {
    if (part === '.') continue;
    if (part === '..') {
      if (stack.length > 0) stack.pop();
    } else {
      stack.push(part);
    }
  }

  return '/' + stack.join('/');
};

// Command Parser supporting quotes and redirection
export const parseCommandLine = (line: string): { command: string; args: string[]; redirectFile?: string; appendRedirect?: boolean } => {
  let appendRedirect = false;
  let redirectFile: string | undefined;

  // Check for > or >>
  if (line.includes('>>')) {
    const parts = line.split('>>');
    line = parts[0];
    redirectFile = parts[1]?.trim();
    appendRedirect = true;
  } else if (line.includes('>')) {
    const parts = line.split('>');
    line = parts[0];
    redirectFile = parts[1]?.trim();
  }

  const rawTokens: string[] = [];
  let currentToken = '';
  let inDouble = false;
  let inSingle = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"' && !inSingle) {
      inDouble = !inDouble;
    } else if (char === "'" && !inDouble) {
      inSingle = !inSingle;
    } else if (char === ' ' && !inDouble && !inSingle) {
      if (currentToken.length > 0) {
        rawTokens.push(currentToken);
        currentToken = '';
      }
    } else {
      currentToken += char;
    }
  }
  if (currentToken.length > 0) {
    rawTokens.push(currentToken);
  }

  const command = rawTokens[0] || '';
  const args = rawTokens.slice(1);

  return { command, args, redirectFile, appendRedirect };
};

// Command Registry
export const COMMAND_REGISTRY: Record<string, TerminalCommandDef> = {
  // --- CORE SHELL COMMANDS ---
  help: {
    name: 'help',
    category: 'core',
    description: 'Display available terminal commands grouped by category',
    usage: 'help [category]',
    execute: (args) => {
      const targetCat = args[0]?.toLowerCase();
      if (targetCat) {
        const matches = Object.values(COMMAND_REGISTRY).filter(c => c.category === targetCat);
        if (matches.length === 0) {
          return { stdout: `Unknown category '${targetCat}'. Valid categories: core, filesystem, text, git, node, system, process`, exitCode: 1 };
        }
        const list = matches.map(m => `  ${m.name.padEnd(16)} : ${m.description}`).join('\n');
        return { stdout: `Category [${targetCat}]:\n${list}`, exitCode: 0 };
      }

      return {
        stdout: `Codazi/Academy Terminal (Oh-My-Posh Powerline)

Core Commands:
  help            : Show commands registry
  man <cmd>       : View command manual
  neofetch        : Display system banner & profile
  clear           : Wipe output buffer
  history         : View command history
  pwd             : Print working directory
  cd <dir>        : Change directory (~ supported)
  echo <text>     : Print text or environment variables

Filesystem:
  ls [-la]        : List directory contents
  tree            : Render directory tree view
  touch <file>    : Create empty file
  mkdir <dir>     : Create directory
  rm [-rf] <file> : Remove file/directory
  cp <src> <dst>  : Copy file
  mv <src> <dst>  : Move/rename file
  cat <file>      : Display file contents
  grep <str> <f>  : Search text pattern in files

Git Engine:
  git status      : Show working tree status
  git init        : Initialize git repository
  git add <file>  : Stage file changes
  git commit -m   : Create commit record
  git branch      : List or create branches
  git checkout -b : Switch/create branch
  git log         : Display commit history log
  git diff        : Show file modifications

Runtime / System:
  node <file.js>  : Run JavaScript script
  npm run / start : Run package scripts
  uname -a        : System architecture
  whoami          : Current authenticated student
  date / uptime   : System clocks and uptime

Type 'man <command>' for detailed usage.`,
        exitCode: 0
      };
    }
  },

  man: {
    name: 'man',
    category: 'core',
    description: 'Display manual page for a specified command',
    usage: 'man <command>',
    execute: (args) => {
      if (!args[0]) {
        return { stdout: 'What manual page do you want? Example: man git', exitCode: 1 };
      }
      const cmdDef = COMMAND_REGISTRY[args[0].toLowerCase()];
      if (!cmdDef) {
        return { stdout: `No manual entry for ${args[0]}`, exitCode: 1 };
      }
      return {
        stdout: `MANUAL: ${cmdDef.name.toUpperCase()}\n\nNAME\n   ${cmdDef.name} - ${cmdDef.description}\n\nSYNOPSIS\n   ${cmdDef.usage}\n\nCATEGORY\n   ${cmdDef.category}\n\nDESCRIPTION\n   ${cmdDef.manual || cmdDef.description}`,
        exitCode: 0
      };
    }
  },

  neofetch: {
    name: 'neofetch',
    category: 'learning',
    description: 'Render Apple system profile, OS specs, and student identity',
    usage: 'neofetch',
    execute: (_, ctx) => {
      return {
        stdout: `          .c.         ${ctx.studentShort}@Codazi-MacBook-Pro.local
        ,xNMM.        --------------------------------
      .OMMMMMo        OS: macOS 12.6.6 21G646 x86_64
      OMMMMo,         Host: MacBookPro12,1 (Codazi Hub)
   .;loddo:'.looll.   Kernel: 21.6.0
 cKMMMMMMMMMMMMMMMM0:  Uptime: 1 day, 18 mins
.KMMMMMMMMMMMMMMMMMWd. Packages: 2 (brew)
XMMMMMMMMMMMMMMMMMMMX. Shell: zsh 5.9 (oh-my-posh 21.27.0)
;MMMMMMMMMMMMMMMMMMMM: Resolution: 1920x1080
:MMMMMMMMMMMMMMMMMMMM: DE: Modern Dark Desktop
.MMMMMMMMMMMMMMMMMMMM: WM: Powerline Window Manager
 kMMMMMMMMMMMMMMMMMWd Terminal: macOS_Terminal_OhMyPosh
 .XMMMMMMMMMMMMMMMMMk. Terminal Font: JetBrains Mono / Powerline
  .XMMMMMMMMMMMMMMMK.  CPU: Intel i7-5557U (4) @ 3.10GHz
    kMMMMMMWXXWMMMMd   GPU: Intel Iris Graphics 6100
     ;KMMMMMMMMMMMk.   Memory: 10575MiB / 16384MiB
       .cooc,,.,coo:.

 ███ ███ ███ ███ ███ ███ ███ ███`,
        exitCode: 0,
        isNeofetch: true
      };
    }
  },

  pwd: {
    name: 'pwd',
    category: 'core',
    description: 'Print working directory path',
    usage: 'pwd',
    execute: (_, ctx) => {
      return { stdout: ctx.cwd, exitCode: 0 };
    }
  },

  whoami: {
    name: 'whoami',
    category: 'system',
    description: 'Print current student username',
    usage: 'whoami',
    execute: (_, ctx) => {
      return { stdout: ctx.studentShort.toLowerCase(), exitCode: 0 };
    }
  },

  echo: {
    name: 'echo',
    category: 'core',
    description: 'Print line of text or environment variables',
    usage: 'echo [text...]',
    execute: (args, ctx) => {
      let text = args.join(' ');
      // Handle environment variables e.g. $USER, $HOME, $?
      text = text.replace(/\$USER/g, ctx.studentShort.toLowerCase());
      text = text.replace(/\$HOME/g, `/Users/${ctx.studentShort.toLowerCase()}`);
      text = text.replace(/\$\?/g, String(ctx.lastExitCode));
      text = text.replace(/\$SHELL/g, '/bin/zsh');
      return { stdout: text, exitCode: 0 };
    }
  },

  date: {
    name: 'date',
    category: 'system',
    description: 'Display current date and time',
    usage: 'date',
    execute: () => {
      return { stdout: new Date().toString(), exitCode: 0 };
    }
  },

  uname: {
    name: 'uname',
    category: 'system',
    description: 'Print system information',
    usage: 'uname [-a]',
    execute: (args) => {
      if (args.includes('-a')) {
        return { stdout: 'Darwin Codazi-MacBook-Pro.local 21.6.0 Darwin Kernel Version 21.6.0 x86_64', exitCode: 0 };
      }
      return { stdout: 'Darwin', exitCode: 0 };
    }
  },

  hostname: {
    name: 'hostname',
    category: 'system',
    description: 'Print system host name',
    usage: 'hostname',
    execute: () => {
      return { stdout: 'Codazi-MacBook-Pro.local', exitCode: 0 };
    }
  },

  uptime: {
    name: 'uptime',
    category: 'system',
    description: 'Display uptime duration',
    usage: 'uptime',
    execute: () => {
      return { stdout: '14:20  up 1 day, 18 mins, 2 users, load averages: 1.84 1.72 1.68', exitCode: 0 };
    }
  },

  history: {
    name: 'history',
    category: 'core',
    description: 'Display terminal command execution history',
    usage: 'history',
    execute: (_, ctx) => {
      const list = ctx.commandHistory
        .slice()
        .reverse()
        .map((cmd, idx) => ` ${String(idx + 1).padStart(4)}  ${cmd}`)
        .join('\n');
      return { stdout: list || 'No history recorded yet.', exitCode: 0 };
    }
  },

  // --- FILESYSTEM COMMANDS ---
  cd: {
    name: 'cd',
    category: 'filesystem',
    description: 'Change working directory',
    usage: 'cd [path]',
    execute: (args, ctx) => {
      const target = args[0] || '~';
      const resolved = resolvePath(ctx.cwd, target, ctx.studentShort);
      const node = getNodeByPath(ctx.vfs, resolved);

      if (!node) {
        return { stdout: `cd: no such file or directory: ${target}`, exitCode: 1 };
      }
      if (node.type !== 'directory') {
        return { stdout: `cd: not a directory: ${target}`, exitCode: 1 };
      }

      ctx.setCwd(resolved);
      return { stdout: '', exitCode: 0 };
    }
  },

  ls: {
    name: 'ls',
    category: 'filesystem',
    description: 'List directory contents',
    usage: 'ls [-la]',
    execute: (args, ctx) => {
      const showHidden = args.some(a => a.includes('a'));
      const showLong = args.some(a => a.includes('l'));

      let targetPath = args.find(a => !a.startsWith('-')) || '.';
      const resolved = resolvePath(ctx.cwd, targetPath, ctx.studentShort);
      const node = getNodeByPath(ctx.vfs, resolved);

      if (!node) {
        return { stdout: `ls: ${targetPath}: No such file or directory`, exitCode: 1 };
      }

      if (node.type === 'file') {
        return { stdout: node.name, exitCode: 0 };
      }

      const children = node.children || {};
      let entries = Object.values(children);

      if (!showHidden) {
        entries = entries.filter(e => !e.name.startsWith('.'));
      }

      if (showLong) {
        const rows = entries.map(e => {
          const mode = e.type === 'directory' ? 'drwxr-xr-x' : '-rw-r--r--';
          const size = String(e.size || 4096).padStart(6);
          const name = e.type === 'directory' ? `${e.name}/` : e.name;
          return `${mode}  1  ${ctx.studentShort.toLowerCase()}  staff  ${size}  Sep 20  ${name}`;
        });
        return { stdout: rows.join('\n'), exitCode: 0 };
      }

      const formatted = entries.map(e => (e.type === 'directory' ? `${e.name}/` : e.name)).join('  ');
      return { stdout: formatted || '', exitCode: 0 };
    }
  },

  tree: {
    name: 'tree',
    category: 'filesystem',
    description: 'Render directory tree visual hierarchy',
    usage: 'tree [path]',
    execute: (args, ctx) => {
      const targetPath = args[0] || '.';
      const resolved = resolvePath(ctx.cwd, targetPath, ctx.studentShort);
      const node = getNodeByPath(ctx.vfs, resolved);

      if (!node || node.type !== 'directory') {
        return { stdout: `tree: ${targetPath}: No such directory`, exitCode: 1 };
      }

      const lines: string[] = [node.name || '.'];
      const render = (curr: VFSNode, prefix = '') => {
        const children = Object.values(curr.children || {}).filter(c => !c.name.startsWith('.'));
        children.forEach((child, idx) => {
          const isLast = idx === children.length - 1;
          const connector = isLast ? '└── ' : '├── ';
          lines.push(`${prefix}${connector}${child.name}${child.type === 'directory' ? '/' : ''}`);
          if (child.type === 'directory') {
            render(child, prefix + (isLast ? '    ' : '│   '));
          }
        });
      };
      render(node);
      return { stdout: lines.join('\n'), exitCode: 0 };
    }
  },

  cat: {
    name: 'cat',
    category: 'text',
    description: 'Concatenate and display file content',
    usage: 'cat <filename>',
    execute: (args, ctx) => {
      if (!args[0]) {
        return { stdout: 'cat: missing filename argument', exitCode: 1 };
      }
      const resolved = resolvePath(ctx.cwd, args[0], ctx.studentShort);
      const node = getNodeByPath(ctx.vfs, resolved);

      if (!node) {
        return { stdout: `cat: ${args[0]}: No such file or directory`, exitCode: 1 };
      }
      if (node.type === 'directory') {
        return { stdout: `cat: ${args[0]}: Is a directory`, exitCode: 1 };
      }

      return { stdout: node.content || '', exitCode: 0 };
    }
  },

  touch: {
    name: 'touch',
    category: 'filesystem',
    description: 'Create empty file or update timestamp',
    usage: 'touch <filename>',
    execute: (args, ctx) => {
      if (!args[0]) return { stdout: 'touch: missing file operand', exitCode: 1 };
      const fileName = args[0];
      const resolved = resolvePath(ctx.cwd, fileName, ctx.studentShort);
      const parentPath = resolved.substring(0, resolved.lastIndexOf('/')) || '/';
      const leafName = resolved.substring(resolved.lastIndexOf('/') + 1);

      const parentNode = getNodeByPath(ctx.vfs, parentPath);
      if (!parentNode || parentNode.type !== 'directory') {
        return { stdout: `touch: cannot touch '${fileName}': No such file or directory`, exitCode: 1 };
      }

      ctx.updateVfs((draft) => {
        const p = getNodeByPath(draft, parentPath);
        if (p && p.children) {
          p.children[leafName] = {
            name: leafName,
            type: 'file',
            content: '',
            modifiedAt: new Date().toISOString(),
            size: 0
          };
        }
      });

      return { stdout: '', exitCode: 0 };
    }
  },

  mkdir: {
    name: 'mkdir',
    category: 'filesystem',
    description: 'Create directory',
    usage: 'mkdir <dirname>',
    execute: (args, ctx) => {
      if (!args[0]) return { stdout: 'mkdir: missing operand', exitCode: 1 };
      const dirName = args[0].replace(/^-p\s*/, '');
      const resolved = resolvePath(ctx.cwd, dirName, ctx.studentShort);
      const parentPath = resolved.substring(0, resolved.lastIndexOf('/')) || '/';
      const leafName = resolved.substring(resolved.lastIndexOf('/') + 1);

      const parentNode = getNodeByPath(ctx.vfs, parentPath);
      if (!parentNode || parentNode.type !== 'directory') {
        return { stdout: `mkdir: cannot create directory '${dirName}': No such file or directory`, exitCode: 1 };
      }

      ctx.updateVfs((draft) => {
        const p = getNodeByPath(draft, parentPath);
        if (p && p.children) {
          p.children[leafName] = {
            name: leafName,
            type: 'directory',
            modifiedAt: new Date().toISOString(),
            children: {}
          };
        }
      });

      return { stdout: '', exitCode: 0 };
    }
  },

  rm: {
    name: 'rm',
    category: 'filesystem',
    description: 'Remove file or directory',
    usage: 'rm [-rf] <path>',
    execute: (args, ctx) => {
      const isRecursive = args.some(a => a.includes('r') || a.includes('f'));
      const targetName = args.find(a => !a.startsWith('-'));
      if (!targetName) return { stdout: 'rm: missing operand', exitCode: 1 };

      const resolved = resolvePath(ctx.cwd, targetName, ctx.studentShort);
      const parentPath = resolved.substring(0, resolved.lastIndexOf('/')) || '/';
      const leafName = resolved.substring(resolved.lastIndexOf('/') + 1);

      const node = getNodeByPath(ctx.vfs, resolved);
      if (!node) return { stdout: `rm: ${targetName}: No such file or directory`, exitCode: 1 };

      if (node.type === 'directory' && !isRecursive) {
        return { stdout: `rm: ${targetName}: is a directory (use -r)`, exitCode: 1 };
      }

      ctx.updateVfs((draft) => {
        const p = getNodeByPath(draft, parentPath);
        if (p && p.children) {
          delete p.children[leafName];
        }
      });

      return { stdout: '', exitCode: 0 };
    }
  },

  grep: {
    name: 'grep',
    category: 'text',
    description: 'Search pattern in file',
    usage: 'grep [-in] "pattern" <filename>',
    execute: (args, ctx) => {
      const caseInsensitive = args.includes('-i');
      const pattern = args.find(a => !a.startsWith('-')) || '';
      const fileArg = args.filter(a => !a.startsWith('-'))[1];

      if (!fileArg) return { stdout: 'grep: missing target file argument', exitCode: 1 };

      const resolved = resolvePath(ctx.cwd, fileArg, ctx.studentShort);
      const node = getNodeByPath(ctx.vfs, resolved);
      if (!node || node.type !== 'file') {
        return { stdout: `grep: ${fileArg}: No such file`, exitCode: 1 };
      }

      const lines = (node.content || '').split('\n');
      const matches = lines.filter(l => {
        if (caseInsensitive) return l.toLowerCase().includes(pattern.toLowerCase());
        return l.includes(pattern);
      });

      return { stdout: matches.join('\n'), exitCode: 0 };
    }
  },

  // --- GIT COMMAND ENGINE ---
  git: {
    name: 'git',
    category: 'git',
    description: 'Git Distributed Version Control Engine',
    usage: 'git <subcommand> [options]',
    execute: (args, ctx) => {
      const sub = args[0]?.toLowerCase();

      if (!sub || sub === '--version') {
        return { stdout: 'git version 2.39.2 (Apple Git-143) [Codazi Virtual Repo Engine]', exitCode: 0 };
      }

      if (sub === 'init') {
        ctx.updateGit(g => {
          g.isInitialized = true;
          g.currentBranch = 'main';
        });
        return { stdout: `Initialized empty Git repository in ${ctx.cwd}/.git/`, exitCode: 0 };
      }

      if (!ctx.git.isInitialized) {
        return { stdout: 'fatal: not a git repository (or any of the parent directories): .git', exitCode: 128 };
      }

      if (sub === 'status') {
        const branchHeader = `On branch ${ctx.git.currentBranch}\n`;
        let body = '';

        if (ctx.git.stagedFiles.length > 0) {
          body += `Changes to be committed:\n  (use "git restore --staged <file>..." to unstage)\n` +
            ctx.git.stagedFiles.map(f => `\tmodified:   ${f}`).join('\n') + '\n\n';
        }

        if (ctx.git.untrackedFiles.length > 0) {
          body += `Untracked files:\n  (use "git add <file>..." to include in what will be committed)\n` +
            ctx.git.untrackedFiles.map(f => `\t${f}`).join('\n') + '\n\nnothing added to commit but untracked files present';
        } else if (ctx.git.stagedFiles.length === 0) {
          body += 'nothing to commit, working tree clean';
        }

        return { stdout: branchHeader + body, exitCode: 0 };
      }

      if (sub === 'add') {
        const fileTarget = args[1];
        if (!fileTarget) return { stdout: 'Nothing specified, nothing added.', exitCode: 0 };

        ctx.updateGit(g => {
          if (fileTarget === '.' || fileTarget === '-A') {
            g.stagedFiles = Array.from(new Set([...g.stagedFiles, ...g.untrackedFiles, 'index.js', 'package.json']));
            g.untrackedFiles = [];
          } else {
            g.stagedFiles = Array.from(new Set([...g.stagedFiles, fileTarget]));
            g.untrackedFiles = g.untrackedFiles.filter(f => f !== fileTarget);
          }
        });
        return { stdout: '', exitCode: 0 };
      }

      if (sub === 'commit') {
        const msgIdx = args.indexOf('-m');
        const msg = msgIdx !== -1 && args[msgIdx + 1] ? args[msgIdx + 1] : 'update project repository';

        if (ctx.git.stagedFiles.length === 0) {
          return { stdout: 'On branch main\nnothing to commit, working tree clean', exitCode: 0 };
        }

        const newHash = Math.random().toString(36).substring(2, 9);
        ctx.updateGit(g => {
          g.commits.unshift({
            hash: newHash,
            message: msg,
            author: `${ctx.studentShort} <${ctx.studentShort.toLowerCase()}@codazi.academy>`,
            date: new Date().toDateString(),
            branch: g.currentBranch
          });
          g.stagedFiles = [];
        });

        if (ctx.onCommitIncrement) {
          ctx.onCommitIncrement();
        }

        return { stdout: `[${ctx.git.currentBranch} ${newHash}] ${msg}\n ${ctx.git.stagedFiles.length || 2} files changed, 24 insertions(+)`, exitCode: 0 };
      }

      if (sub === 'log') {
        const logs = ctx.git.commits.map(c =>
          `commit ${c.hash} (HEAD -> ${c.branch})\nAuthor: ${c.author}\nDate:   ${c.date}\n\n    ${c.message}\n`
        ).join('\n');
        return { stdout: logs || 'No commits yet.', exitCode: 0 };
      }

      if (sub === 'branch') {
        const newBranchName = args[1];
        if (newBranchName) {
          ctx.updateGit(g => {
            if (!g.branches.includes(newBranchName)) {
              g.branches.push(newBranchName);
            }
          });
          return { stdout: '', exitCode: 0 };
        }
        const branchList = ctx.git.branches.map(b => (b === ctx.git.currentBranch ? `* ${b}` : `  ${b}`)).join('\n');
        return { stdout: branchList, exitCode: 0 };
      }

      if (sub === 'checkout' || sub === 'switch') {
        let branchName = args[1];
        if (args[1] === '-b' && args[2]) {
          branchName = args[2];
          ctx.updateGit(g => {
            if (!g.branches.includes(branchName)) {
              g.branches.push(branchName);
            }
            g.currentBranch = branchName;
          });
          return { stdout: `Switched to a new branch '${branchName}'`, exitCode: 0 };
        }

        if (branchName && ctx.git.branches.includes(branchName)) {
          ctx.updateGit(g => { g.currentBranch = branchName; });
          return { stdout: `Switched to branch '${branchName}'`, exitCode: 0 };
        }

        return { stdout: `error: pathspec '${branchName || ''}' did not match any file(s) known to git`, exitCode: 1 };
      }

      if (sub === 'remote') {
        if (args[1] === '-v') {
          return {
            stdout: `origin\t${ctx.git.remotes.origin} (fetch)\norigin\t${ctx.git.remotes.origin} (push)`,
            exitCode: 0
          };
        }
        return { stdout: 'origin', exitCode: 0 };
      }

      return { stdout: `git: '${sub}' is not a valid git command. Try 'git --help'.`, exitCode: 1 };
    }
  },

  // --- RUNTIME & JAVASCRIPT COMMANDS ---
  node: {
    name: 'node',
    category: 'node',
    description: 'Execute Node.js JavaScript code or script file',
    usage: 'node [filename.js]',
    execute: (args, ctx) => {
      const file = args[0];
      if (!file) {
        return { stdout: 'Welcome to Node.js v18.16.0.\nType ".help" for more information.', exitCode: 0 };
      }
      const resolved = resolvePath(ctx.cwd, file, ctx.studentShort);
      const node = getNodeByPath(ctx.vfs, resolved);

      if (!node || node.type !== 'file') {
        return { stdout: `node: internal/modules/cjs/loader: No such file: ${file}`, exitCode: 1 };
      }

      return {
        stdout: `[Node.js Runtime Execution Engine]\nFile: ${file}\nOutput:\nWelcome to Codazi Learning Hub!\nResult: 42`,
        exitCode: 0
      };
    }
  },

  npm: {
    name: 'npm',
    category: 'node',
    description: 'Node Package Manager CLI',
    usage: 'npm <subcommand>',
    execute: (args) => {
      const sub = args[0];
      if (!sub || sub === '-v' || sub === '--version') return { stdout: '9.6.7', exitCode: 0 };
      if (sub === 'run' || sub === 'start') {
        return { stdout: '> curious-learners@1.0.0 start\n> node index.js\n\n[Node.js Runtime Execution Engine]\nResult: 42', exitCode: 0 };
      }
      if (sub === 'test') {
        return { stdout: '> curious-learners@1.0.0 test\n> echo "Error: no test specified" && exit 0\nError: no test specified', exitCode: 0 };
      }
      if (sub === 'install' || sub === 'i') {
        return { stdout: 'added 42 packages, and audited 43 packages in 1s\n\n1 package is looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities', exitCode: 0 };
      }
      return { stdout: `npm v9.6.7: command '${sub}' executed successfully`, exitCode: 0 };
    }
  },

  pnpm: {
    name: 'pnpm',
    category: 'node',
    description: 'Fast, disk space efficient package manager',
    usage: 'pnpm -v',
    execute: () => ({ stdout: '8.6.0', exitCode: 0 })
  },

  yarn: {
    name: 'yarn',
    category: 'node',
    description: 'Yarn package manager',
    usage: 'yarn -v',
    execute: () => ({ stdout: '1.22.19', exitCode: 0 })
  },

  bun: {
    name: 'bun',
    category: 'node',
    description: 'Bun fast all-in-one JavaScript runtime',
    usage: 'bun -v',
    execute: () => ({ stdout: '1.0.12', exitCode: 0 })
  },

  python: {
    name: 'python',
    category: 'learning',
    description: 'Python 3 Interpreter',
    usage: 'python --version',
    execute: () => ({ stdout: 'Python 3.11.4 [Codazi Sandbox Runtime]', exitCode: 0 })
  },

  python3: {
    name: 'python3',
    category: 'learning',
    description: 'Python 3 Interpreter',
    usage: 'python3 --version',
    execute: () => ({ stdout: 'Python 3.11.4 [Codazi Sandbox Runtime]', exitCode: 0 })
  }
};

// Auto-completion helper (Tab Key)
export const getTabCompletions = (line: string, ctx: TerminalContext): { line: string; options: string[] } => {
  const tokens = line.trimStart().split(' ');
  const lastToken = tokens[tokens.length - 1] || '';

  // 1. If only 1 token, match command names
  if (tokens.length === 1) {
    const cmdNames = Object.keys(COMMAND_REGISTRY);
    const matches = cmdNames.filter(c => c.startsWith(lastToken));
    if (matches.length === 1) {
      return { line: matches[0] + ' ', options: [] };
    }
    return { line, options: matches };
  }

  // 2. If git command, match subcommands or branches
  if (tokens[0] === 'git') {
    const gitSubs = ['status', 'init', 'add', 'commit', 'branch', 'checkout', 'switch', 'log', 'diff', 'remote'];
    if (tokens.length === 2) {
      const matches = gitSubs.filter(s => s.startsWith(lastToken));
      if (matches.length === 1) {
        return { line: `git ${matches[0]} `, options: [] };
      }
      return { line, options: matches };
    }
  }

  // 3. Otherwise match files/directories in CWD
  const node = getNodeByPath(ctx.vfs, ctx.cwd);
  if (node && node.type === 'directory' && node.children) {
    const entries = Object.keys(node.children);
    const matches = entries.filter(e => e.startsWith(lastToken));
    if (matches.length === 1) {
      tokens[tokens.length - 1] = matches[0];
      return { line: tokens.join(' ') + (node.children[matches[0]].type === 'directory' ? '/' : ' '), options: [] };
    }
    return { line, options: matches };
  }

  return { line, options: [] };
};
