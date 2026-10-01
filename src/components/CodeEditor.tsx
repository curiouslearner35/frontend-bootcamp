import React, { useRef, useEffect } from 'react';
import { PlaygroundSettings } from '../types/playground';
import { getThemeDef } from '../utils/playgroundThemes';

interface CodeEditorProps {
  value: string;
  onChange: (val: string) => void;
  language: 'html' | 'css' | 'javascript';
  settings: PlaygroundSettings;
  onRunCode?: () => void;
  placeholder?: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  value,
  onChange,
  language,
  settings,
  onRunCode,
  placeholder
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const gutterRef = useRef<HTMLDivElement>(null);

  const themeDef = getThemeDef(settings.theme);

  // Sync scroll position between textarea and line number gutter
  const handleScroll = () => {
    if (textareaRef.current && gutterRef.current) {
      gutterRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const lineCount = Math.max(1, value.split('\n').length);
  const lineNumbersArray = Array.from({ length: lineCount }, (_, i) => i + 1);

  // Handle key shortcuts like Tab indentation & Cmd+Enter execution
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      if (onRunCode) {
        onRunCode();
      }
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const indent = ' '.repeat(settings.tabSize || 2);

      if (e.shiftKey) {
        // Outdent line
        const currentLineStart = value.lastIndexOf('\n', start - 1) + 1;
        const lineText = value.substring(currentLineStart, start);
        if (lineText.startsWith(indent)) {
          const newValue = value.substring(0, currentLineStart) + value.substring(currentLineStart + indent.length);
          onChange(newValue);
          setTimeout(() => {
            textarea.selectionStart = Math.max(0, start - indent.length);
            textarea.selectionEnd = Math.max(0, end - indent.length);
          }, 0);
        }
      } else {
        // Indent spaces
        const newValue = value.substring(0, start) + indent + value.substring(end);
        onChange(newValue);
        setTimeout(() => {
          textarea.selectionStart = start + indent.length;
          textarea.selectionEnd = start + indent.length;
        }, 0);
      }
    }
  };

  const editorStyle: React.CSSProperties = {
    fontFamily: settings.fontFamily || 'SF Mono, Monaco, JetBrains Mono, monospace',
    fontSize: `${settings.fontSize || 14}px`,
    lineHeight: settings.lineHeight || 1.5,
    tabSize: settings.tabSize || 2,
    color: themeDef.text,
    backgroundColor: themeDef.bg
  };

  return (
    <div
      className="relative flex w-full h-full min-h-[220px] rounded-xl overflow-hidden font-mono border shadow-inner transition-colors"
      style={{
        backgroundColor: themeDef.bg,
        borderColor: themeDef.border
      }}
    >
      {/* Line Numbers Gutter */}
      {settings.lineNumbers && (
        <div
          ref={gutterRef}
          className="select-none py-3 px-2 text-right shrink-0 overflow-hidden font-mono text-[11px] leading-relaxed transition-colors border-r"
          style={{
            backgroundColor: themeDef.gutterBg,
            color: themeDef.gutterText,
            borderColor: themeDef.border,
            fontSize: `${settings.fontSize || 14}px`,
            lineHeight: settings.lineHeight || 1.5,
            minWidth: `${Math.max(2.5, String(lineCount).length * 0.9)}rem`
          }}
        >
          {lineNumbersArray.map((num) => (
            <div key={num} className="opacity-80">
              {num}
            </div>
          ))}
        </div>
      )}

      {/* Main Textarea */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        placeholder={placeholder || `Write ${language.toUpperCase()} code here...`}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        style={editorStyle}
        className={`w-full h-full p-3 border-0 focus:outline-none focus:ring-0 resize-none font-mono ${
          settings.wordWrap ? 'whitespace-pre-wrap word-break-all' : 'whitespace-pre overflow-x-auto'
        }`}
      />
    </div>
  );
};

