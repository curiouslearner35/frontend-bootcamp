import { CodeVisualizerConfig, VisualizerThemeId, VisualizerFontId, WindowStyle, VisualizerLanguage } from '../types/visualizer';
import { VISUALIZER_THEMES } from '../config/visualizerThemes';
import { VISUALIZER_FONTS } from '../config/visualizerFonts';

const STORAGE_KEY = 'curious_visualizer_prefs_v1';

export const DEFAULT_VISUALIZER_CONFIG: CodeVisualizerConfig = {
  code: `// Select a snippet from Practice Sandbox or choose a template!
function greetLearner(name: string) {
  console.log(\`Hello \${name}, welcome to Code Visualizer!\`);
}

greetLearner("Curious Student");`,
  language: 'typescript',
  theme: 'onedark',
  font: 'fira-code',
  fontSize: 14,
  padding: 32,
  windowStyle: 'mac',
  title: 'Code Visualizer',
};

export function loadVisualizerPreferences(): Partial<CodeVisualizerConfig> {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return {};
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return {
      theme: parsed.theme && VISUALIZER_THEMES[parsed.theme as VisualizerThemeId] ? (parsed.theme as VisualizerThemeId) : undefined,
      font: parsed.font && VISUALIZER_FONTS[parsed.font as VisualizerFontId] ? (parsed.font as VisualizerFontId) : undefined,
      fontSize: typeof parsed.fontSize === 'number' ? Math.min(24, Math.max(12, parsed.fontSize)) : undefined,
      padding: typeof parsed.padding === 'number' ? Math.min(64, Math.max(16, parsed.padding)) : undefined,
      windowStyle: ['mac', 'windows', 'none'].includes(parsed.windowStyle) ? (parsed.windowStyle as WindowStyle) : undefined,
      language: parsed.language as VisualizerLanguage | undefined,
    };
  } catch {
    return {};
  }
}

export function saveVisualizerPreferences(config: CodeVisualizerConfig): void {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;
    const prefs = {
      theme: config.theme,
      font: config.font,
      fontSize: config.fontSize,
      padding: config.padding,
      windowStyle: config.windowStyle,
      language: config.language,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // ignore
  }
}

export function sanitizeCodeForXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function generateSafeFilename(title?: string, extension = 'png'): string {
  const cleanTitle = (title || 'code-snippet')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const timestamp = new Date().toISOString().slice(0, 10);
  return `${cleanTitle || 'code-snippet'}-${timestamp}.${extension}`;
}
