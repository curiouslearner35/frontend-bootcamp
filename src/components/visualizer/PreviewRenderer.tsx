import React, { useMemo } from 'react';
import { CodeVisualizerConfig, VisualizerTheme, VisualizerFont } from '../../types/visualizer';
import { VISUALIZER_THEMES } from '../../config/visualizerThemes';
import { VISUALIZER_FONTS } from '../../config/visualizerFonts';
import { tokenizeCode } from '../../utils/simpleSyntaxHighlighter';

interface PreviewRendererProps {
  config: CodeVisualizerConfig;
  previewRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
}

export const PreviewRenderer: React.FC<PreviewRendererProps> = ({ config, previewRef, className = '' }) => {
  const theme: VisualizerTheme = VISUALIZER_THEMES[config.theme] || VISUALIZER_THEMES.onedark;
  const font: VisualizerFont = VISUALIZER_FONTS[config.font] || VISUALIZER_FONTS['fira-code'];

  const lines = useMemo(() => {
    return (config.code || '').split('\n');
  }, [config.code]);

  return (
    <div
      ref={previewRef}
      className={`relative select-none overflow-hidden rounded-2xl transition-all duration-300 ${className}`}
      style={{
        background: theme.background,
        padding: `${config.padding}px`,
      }}
    >
      <div
        className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-200"
        style={{
          backgroundColor: theme.surface,
          border: `1px solid ${theme.border}`,
          boxShadow: theme.isDark
            ? '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.4)'
            : '0 20px 50px rgba(0, 0, 0, 0.15), 0 0 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Window Chrome Header */}
        {config.windowStyle !== 'none' && (
          <div
            className="flex items-center justify-between border-b px-4 py-3"
            style={{
              borderColor: theme.border,
              backgroundColor: theme.isDark ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.4)',
            }}
          >
            {config.windowStyle === 'mac' && (
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 rounded-full bg-red-500 shadow-inner inline-block" />
                <span className="h-3 w-3 rounded-full bg-yellow-500 shadow-inner inline-block" />
                <span className="h-3 w-3 rounded-full bg-green-500 shadow-inner inline-block" />
              </div>
            )}

            {config.windowStyle === 'windows' && (
              <div className="flex items-center space-x-3 text-xs font-mono" style={{ color: theme.syntax.comment }}>
                <span className="font-semibold">{config.language.toUpperCase()}</span>
              </div>
            )}

            {config.title && (
              <div className="text-xs font-semibold tracking-wide opacity-80" style={{ color: theme.foreground }}>
                {config.title}
              </div>
            )}

            {config.windowStyle === 'windows' && (
              <div className="flex items-center space-x-2 text-xs" style={{ color: theme.foreground }}>
                <span className="opacity-60">─</span>
                <span className="opacity-60">▢</span>
                <span className="opacity-60">✕</span>
              </div>
            )}

            {config.windowStyle === 'mac' && (
              <div className="text-xs font-mono opacity-60" style={{ color: theme.syntax.comment }}>
                {config.language}
              </div>
            )}
          </div>
        )}

        {/* Code Content Container */}
        <div
          className="overflow-x-auto p-5 font-mono leading-relaxed"
          style={{
            fontFamily: font.fontFamily,
            fontSize: `${config.fontSize}px`,
            color: theme.foreground,
          }}
        >
          {lines.map((line, lineIdx) => {
            const tokens = tokenizeCode(line);
            return (
              <div key={lineIdx} className="flex min-w-max items-start py-0.5">
                <span
                  className="mr-4 w-6 select-none text-right text-xs opacity-40 font-mono"
                  style={{ color: theme.syntax.comment }}
                >
                  {lineIdx + 1}
                </span>
                <div className="whitespace-pre">
                  {tokens.map((tok, tokIdx) => {
                    let tokenColor = theme.foreground;
                    if (tok.type === 'keyword') tokenColor = theme.syntax.keyword;
                    else if (tok.type === 'string') tokenColor = theme.syntax.string;
                    else if (tok.type === 'comment') tokenColor = theme.syntax.comment;
                    else if (tok.type === 'number') tokenColor = theme.syntax.number;
                    else if (tok.type === 'function') tokenColor = theme.syntax.function;
                    else if (tok.type === 'operator') tokenColor = theme.syntax.operator;

                    return (
                      <span key={tokIdx} style={{ color: tokenColor }}>
                        {tok.value}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
