import { VisualizerFont, VisualizerFontId } from '../types/visualizer';

export const VISUALIZER_FONTS: Record<VisualizerFontId, VisualizerFont> = {
  'fira-code': {
    id: 'fira-code',
    name: 'Fira Code',
    fontFamily: '"Fira Code", "Fira Mono", "Courier New", monospace',
  },
  'jetbrains-mono': {
    id: 'jetbrains-mono',
    name: 'JetBrains Mono',
    fontFamily: '"JetBrains Mono", "Cascadia Code", "Consolas", monospace',
  },
  'cascadia-code': {
    id: 'cascadia-code',
    name: 'Cascadia Code',
    fontFamily: '"Cascadia Code", "Fira Code", "Segoe UI Mono", monospace',
  },
  'source-code-pro': {
    id: 'source-code-pro',
    name: 'Source Code Pro',
    fontFamily: '"Source Code Pro", "Liberation Mono", "Courier New", monospace',
  },
  consolas: {
    id: 'consolas',
    name: 'Consolas',
    fontFamily: 'Consolas, "Liberation Mono", "Courier New", monospace',
  },
  menlo: {
    id: 'menlo',
    name: 'Menlo',
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
  },
};
