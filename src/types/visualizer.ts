export type VisualizerLanguage =
  | 'javascript'
  | 'typescript'
  | 'html'
  | 'css'
  | 'python'
  | 'json'
  | 'markdown'
  | 'bash'
  | 'sql';

export type VisualizerThemeId =
  | 'onedark'
  | 'dracula'
  | 'nord'
  | 'github-light'
  | 'github-dark'
  | 'monokai'
  | 'solarized-dark'
  | 'material';

export type VisualizerFontId =
  | 'fira-code'
  | 'jetbrains-mono'
  | 'cascadia-code'
  | 'source-code-pro'
  | 'consolas'
  | 'menlo';

export type WindowStyle = 'mac' | 'windows' | 'none';

export type ExportFormat = 'png' | 'svg' | 'pdf' | 'markdown' | 'json' | 'txt' | 'html';

export interface VisualizerTheme {
  id: VisualizerThemeId;
  name: string;
  isDark: boolean;
  background: string;
  surface: string;
  foreground: string;
  border: string;
  accent: string;
  syntax: {
    keyword: string;
    string: string;
    comment: string;
    number: string;
    function: string;
    operator: string;
    variable: string;
  };
}

export interface VisualizerFont {
  id: VisualizerFontId;
  name: string;
  fontFamily: string;
}

export interface CodeVisualizerConfig {
  code: string;
  language: VisualizerLanguage;
  theme: VisualizerThemeId;
  font: VisualizerFontId;
  fontSize: number;
  padding: number;
  windowStyle: WindowStyle;
  templateId?: string;
  title?: string;
}

export interface VisualizerExportPackage {
  version: '1.0.0';
  exportedAt: string;
  config: CodeVisualizerConfig;
  sourceMeta?: {
    lessonId?: string;
    lessonTitle?: string;
    author?: string;
  };
}

export interface VisualizerTemplate {
  id: string;
  category: string;
  name: string;
  description: string;
  defaultConfig: Partial<CodeVisualizerConfig>;
  sampleCode: string;
}
