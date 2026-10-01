import { EditorCanvasState, EditorCanvasSummary } from '../types/editorCanvas';
import { VISUALIZER_THEMES } from '../config/visualizerThemes';

const BASE_KEY = 'curious-learners:editor-canvas:v1';
const ONBOARDING_KEY = 'curious-learners:editor-canvas:onboarding:v1';

function getStorageKey(studentId?: string): string {
  const id = studentId || 'guest';
  return `${BASE_KEY}:${id}`;
}

export const DEFAULT_CANVAS_CODE = `// Curious Learners — Code Visualizer
function calculateProgress(completed, total) {
  const percent = Math.round((completed / total) * 100);
  console.log(\`Curriculum Progress: \${percent}%\`);
  return { completed, total, percent };
}

calculateProgress(42, 191);`;

export function createDefaultCanvasState(studentId?: string): EditorCanvasState {
  const now = new Date().toISOString();
  return {
    version: 1,
    studentId: studentId || 'guest',
    code: DEFAULT_CANVAS_CODE,
    language: 'javascript',
    theme: 'onedark',
    font: 'fira-code',
    fontSize: 14,
    padding: 32,
    windowStyle: 'mac',
    createdAt: now,
    updatedAt: now,
    lastOpenedAt: now,
    dirty: false,
    revision: 1
  };
}

let pendingSaveState: EditorCanvasState | null = null;
let saveDebounceTimer: ReturnType<typeof setTimeout> | null = null;

export const editorCanvasStorage = {
  getState(studentId?: string): EditorCanvasState | null {
    try {
      const key = getStorageKey(studentId);
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const parsed: EditorCanvasState = JSON.parse(raw);
      return parsed;
    } catch (err) {
      console.error('[EditorCanvasStorage] Error reading state:', err);
      return null;
    }
  },

  getSummary(studentId?: string): EditorCanvasSummary {
    const state = this.getState(studentId);
    if (!state || !state.code || !state.code.trim()) {
      return { hasState: false };
    }

    const themeObj = VISUALIZER_THEMES[state.theme];
    const themeName = themeObj ? themeObj.name : state.theme;

    return {
      hasState: true,
      updatedAt: state.updatedAt,
      language: state.language ? state.language.toUpperCase() : 'CODE',
      theme: themeName,
      template: state.selectedTemplate,
      sourceType: state.source?.type,
      revision: state.revision,
      isRecovered: state.dirty || (Date.now() - new Date(state.updatedAt).getTime() < 1000 * 60 * 60 * 24)
    };
  },

  setState(state: EditorCanvasState): void {
    try {
      const key = getStorageKey(state.studentId);
      localStorage.setItem(key, JSON.stringify(state));
    } catch (err) {
      console.error('[EditorCanvasStorage] Error writing state:', err);
    }
  },

  updateState(partial: Partial<EditorCanvasState>, studentId?: string): EditorCanvasState {
    const current = this.getState(studentId) || createDefaultCanvasState(studentId);
    const now = new Date().toISOString();
    
    const updated: EditorCanvasState = {
      ...current,
      ...partial,
      updatedAt: now,
      dirty: true,
      revision: (current.revision || 0) + 1
    };

    // Fast local write immediately
    this.setState(updated);

    // Debounced background sync to Redis / backend server
    this.queueServerSync(updated);

    return updated;
  },

  clearState(studentId?: string): void {
    try {
      const key = getStorageKey(studentId);
      localStorage.removeItem(key);
    } catch (err) {
      console.error('[EditorCanvasStorage] Error clearing state:', err);
    }
  },

  hasRecoverableState(studentId?: string): boolean {
    const state = this.getState(studentId);
    return Boolean(state && state.code && state.code.trim().length > 0);
  },

  getOnboardingCompleted(): boolean {
    try {
      const raw = localStorage.getItem(ONBOARDING_KEY);
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      return Boolean(parsed?.completed);
    } catch {
      return false;
    }
  },

  setOnboardingCompleted(): void {
    try {
      const payload = {
        version: 1,
        completed: true,
        completedAt: new Date().toISOString()
      };
      localStorage.setItem(ONBOARDING_KEY, JSON.stringify(payload));
    } catch (err) {
      console.error('[EditorCanvasStorage] Error setting onboarding status:', err);
    }
  },

  resetOnboarding(): void {
    try {
      localStorage.removeItem(ONBOARDING_KEY);
    } catch {
      // Ignore
    }
  },

  queueServerSync(state: EditorCanvasState): void {
    pendingSaveState = state;
    if (saveDebounceTimer) clearTimeout(saveDebounceTimer);
    saveDebounceTimer = setTimeout(() => {
      this.flushServerSync();
    }, 1200);
  },

  async flushServerSync(): Promise<void> {
    if (!pendingSaveState) return;
    const target = pendingSaveState;
    pendingSaveState = null;

    try {
      const response = await fetch('/api/editor-canvas/state', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: target.studentId || 'guest',
          state: target
        })
      });

      if (response.ok) {
        // Clear dirty bit once synced
        const syncedState = { ...target, dirty: false };
        this.setState(syncedState);
      }
    } catch (err) {
      console.warn('[EditorCanvasStorage] Server sync offline/deferred:', err);
    }
  },

  async syncWithServer(studentId?: string): Promise<{ reconciled: boolean; state: EditorCanvasState | null }> {
    const local = this.getState(studentId);
    const targetStudentId = studentId || local?.studentId || 'guest';

    try {
      const response = await fetch(`/api/editor-canvas/state?studentId=${encodeURIComponent(targetStudentId)}`);
      if (!response.ok) {
        return { reconciled: false, state: local };
      }

      const resData = await response.json();
      const serverState: EditorCanvasState | null = resData.state || null;

      if (!serverState) {
        if (local) {
          // Push local state to server
          await this.flushServerSync();
        }
        return { reconciled: false, state: local };
      }

      if (!local) {
        // Redis state exists, save locally
        this.setState(serverState);
        return { reconciled: true, state: serverState };
      }

      // Reconciliation Strategy: Highest revision wins; if revisions tied, newest updatedAt wins
      const localTime = new Date(local.updatedAt || 0).getTime();
      const serverTime = new Date(serverState.updatedAt || 0).getTime();
      const localRev = local.revision || 0;
      const serverRev = serverState.revision || 0;

      if (serverRev > localRev || (serverRev === localRev && serverTime > localTime)) {
        // Server state is newer
        this.setState(serverState);
        return { reconciled: true, state: serverState };
      } else if (localRev > serverRev || (localRev === serverRev && localTime > serverTime)) {
        // Local state is newer, push to server
        this.setState(local);
        this.queueServerSync(local);
        return { reconciled: false, state: local };
      }

      return { reconciled: false, state: local };
    } catch (err) {
      console.warn('[EditorCanvasStorage] Network offline, using local state:', err);
      return { reconciled: false, state: local };
    }
  }
};

// Lifecycle listener to flush pending saves on pagehide/visibilitychange
if (typeof window !== 'undefined') {
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      editorCanvasStorage.flushServerSync();
    }
  });

  window.addEventListener('pagehide', () => {
    editorCanvasStorage.flushServerSync();
  });
}
