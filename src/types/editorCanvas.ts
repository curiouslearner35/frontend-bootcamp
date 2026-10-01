import {
  VisualizerLanguage,
  VisualizerThemeId,
  VisualizerFontId,
  WindowStyle
} from './visualizer';

export interface EditorCanvasState {
  version: number;
  studentId?: string;
  code: string;
  language: VisualizerLanguage;
  theme: VisualizerThemeId;
  font: VisualizerFontId;
  fontSize: number;
  padding: number;
  windowStyle: WindowStyle;
  selectedTemplate?: string;
  source?: {
    type: 'sandbox' | 'lesson' | 'project' | 'custom';
    lessonId?: string;
    projectId?: string;
  };
  createdAt: string;
  updatedAt: string;
  lastOpenedAt?: string;
  dirty: boolean;
  revision: number;
}

export interface EditorCanvasSummary {
  hasState: boolean;
  updatedAt?: string;
  language?: string;
  theme?: string;
  template?: string;
  sourceType?: string;
  revision?: number;
  isRecovered?: boolean;
}
