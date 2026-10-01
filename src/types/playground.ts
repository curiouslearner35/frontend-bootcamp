export type PlaygroundTheme =
  | 'one-dark'
  | 'dracula'
  | 'monokai'
  | 'github-light'
  | 'nord'
  | 'dark'
  | 'light'
  | 'high-contrast';

export type PlaygroundLayout = 'split' | 'tabbed';

export interface PlaygroundSettings {
  theme: PlaygroundTheme;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  tabSize: number;
  wordWrap: boolean;
  lineNumbers: boolean;
  autoRun: boolean;
  layout: PlaygroundLayout;
}

export interface ConsoleLogItem {
  id: string;
  level: 'log' | 'info' | 'warn' | 'error';
  args: string[];
  timestamp: string;
}

export interface PlaygroundState {
  html: string;
  css: string;
  js: string;
}

export type ExportFormat = 'png' | 'jpeg' | 'html' | 'md' | 'pdf';
export type ExportTargetMode = 'code' | 'code-and-preview';
export type ExportBackground = 'gradient' | 'dark' | 'light' | 'transparent';
export type ExportPadding = 'small' | 'medium' | 'large';

export interface ExportSettings {
  format: ExportFormat;
  targetMode: ExportTargetMode;
  theme: PlaygroundTheme;
  background: ExportBackground;
  padding: ExportPadding;
  lineNumbers: boolean;
  windowChrome: boolean;
  title: string;
}
