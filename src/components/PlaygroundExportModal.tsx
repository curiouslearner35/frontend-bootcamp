import React from 'react';
import { PlaygroundState, PlaygroundSettings } from '../types/playground';
import { CodeVisualizerModal } from './visualizer/CodeVisualizerModal';

interface PlaygroundExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: PlaygroundState;
  settings: PlaygroundSettings;
  lessonId?: string;
  previewIframeRef?: React.RefObject<HTMLIFrameElement | null>;
}

export const PlaygroundExportModal: React.FC<PlaygroundExportModalProps> = ({
  isOpen,
  onClose,
  state,
}) => {
  const combinedCode = [
    state.html ? `<!-- HTML -->\n${state.html}\n` : '',
    state.css ? `/* CSS */\n${state.css}\n` : '',
    state.js ? `// JavaScript\n${state.js}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <CodeVisualizerModal
      isOpen={isOpen}
      onClose={onClose}
      initialCode={combinedCode || '// Write code in Practice Sandbox'}
      initialLanguage="javascript"
      initialTitle="Practice Sandbox Code"
    />
  );
};
