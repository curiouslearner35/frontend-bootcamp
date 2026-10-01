import React, { useEffect } from 'react';
import { X, Code2, Palette, Eye, Download, Sparkles, CheckCircle2 } from 'lucide-react';

interface EditorCanvasOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditorCanvasOnboardingModal: React.FC<EditorCanvasOnboardingModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 shadow-2xl text-slate-100 space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        {/* Top Header & Close Button */}
        <div className="flex items-start justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0 shadow-inner">
              <Sparkles className="h-6 w-6 text-amber-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-extrabold flex items-center gap-1">
                <span>First-Use Guide</span>
              </span>
              <h2 id="onboarding-title" className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Welcome to Editor Canvas
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer shrink-0"
            aria-label="Close onboarding popup"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
          Turn your code into beautiful, shareable visuals.
        </p>

        {/* 4 Workflow Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Step 1: Choose Your Code */}
          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs">
              <div className="h-7 w-7 rounded-xl bg-indigo-500/15 flex items-center justify-center shrink-0">
                <Code2 className="h-3.5 w-3.5" />
              </div>
              <span>🧩 Choose Your Code</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
              Start with code from your Practice Sandbox, lesson, homework, or paste your own snippet.
            </p>
          </div>

          {/* Step 2: Customize */}
          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
              <div className="h-7 w-7 rounded-xl bg-cyan-500/15 flex items-center justify-center shrink-0">
                <Palette className="h-3.5 w-3.5" />
              </div>
              <span>🎨 Customize</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
              Change the theme, font, size, spacing, window style, and template.
            </p>
          </div>

          {/* Step 3: Preview */}
          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-1.5">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
              <div className="h-7 w-7 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
                <Eye className="h-3.5 w-3.5" />
              </div>
              <span>👀 Preview</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
              See exactly how your code will look before exporting.
            </p>
          </div>

          {/* Step 4: Export */}
          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
              <div className="h-7 w-7 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
                <Download className="h-3.5 w-3.5" />
              </div>
              <span>📤 Export</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
              Save your canvas as PNG, SVG, PDF, Markdown, JSON, TXT, or HTML.
            </p>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-extrabold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-indigo-400/30"
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>Got it — Let's Go</span>
          </button>
        </div>
      </div>
    </div>
  );
};
