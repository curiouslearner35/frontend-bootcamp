import React from 'react';
import { X, Sliders, Moon, Sun, Monitor, Type, LayoutGrid, Check } from 'lucide-react';
import { PlaygroundSettings, PlaygroundTheme } from '../types/playground';

interface PlaygroundSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: PlaygroundSettings;
  onUpdateSettings: (updater: (prev: PlaygroundSettings) => PlaygroundSettings) => void;
}

const AVAILABLE_FONTS = [
  { id: 'SF Mono, Monaco, Menlo, monospace', label: 'SF Mono / Monaco' },
  { id: "'JetBrains Mono', monospace", label: 'JetBrains Mono' },
  { id: "'Fira Code', monospace", label: 'Fira Code' },
  { id: "'Source Code Pro', monospace", label: 'Source Code Pro' },
  { id: 'monospace', label: 'System Monospace' },
];

export const PlaygroundSettingsModal: React.FC<PlaygroundSettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-[#0f172a] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Sliders className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-white">Playground Settings</h2>
              <p className="text-[11px] text-slate-400">Configure editor, preview, and layout preferences</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-6 text-xs font-sans text-slate-200">
          {/* 1. Theme */}
          <div className="space-y-2">
            <label className="font-bold text-slate-300 uppercase text-[10px] tracking-wider flex items-center gap-1.5">
              <Moon className="h-3.5 w-3.5 text-indigo-400" />
              <span>Developer Theme (5 Popular Themes)</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'one-dark', label: 'One Dark', bg: '#282c34', accent: '#61afef' },
                { id: 'dracula', label: 'Dracula', bg: '#282a36', accent: '#bd93f9' },
                { id: 'monokai', label: 'Monokai', bg: '#272822', accent: '#a6e22e' },
                { id: 'github-light', label: 'GitHub Light', bg: '#ffffff', accent: '#032f62' },
                { id: 'nord', label: 'Nord', bg: '#2e3440', accent: '#88c0d0' },
                { id: 'dark', label: 'Default Dark', bg: '#0f172a', accent: '#38bdf8' },
                { id: 'light', label: 'Default Light', bg: '#f8fafc', accent: '#0284c7' },
                { id: 'high-contrast', label: 'High Contrast', bg: '#000000', accent: '#00ffff' },
              ].map((t) => {
                const isSelected = settings.theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() =>
                      onUpdateSettings((prev) => ({ ...prev, theme: t.id as PlaygroundTheme }))
                    }
                    className={`p-2.5 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-600/20 text-white ring-2 ring-indigo-500/40'
                        : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-bold text-xs">{t.label}</span>
                      <span
                        className="h-3 w-3 rounded-full border border-slate-700 inline-block"
                        style={{ backgroundColor: t.accent }}
                      />
                    </div>
                    <div
                      className="h-2 w-full rounded-full border border-slate-700/60"
                      style={{ backgroundColor: t.bg }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Font Family */}
          <div className="space-y-2">
            <label className="font-bold text-slate-300 uppercase text-[10px] tracking-wider flex items-center gap-1.5">
              <Type className="h-3.5 w-3.5 text-sky-400" />
              <span>Font Family</span>
            </label>
            <div className="space-y-1.5">
              {AVAILABLE_FONTS.map((font) => {
                const isSelected = settings.fontFamily === font.id;
                return (
                  <button
                    key={font.id}
                    onClick={() =>
                      onUpdateSettings((prev) => ({ ...prev, fontFamily: font.id }))
                    }
                    className={`w-full px-3.5 py-2 rounded-xl border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-600/20 text-white font-bold'
                        : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:bg-slate-800/80'
                    }`}
                    style={{ fontFamily: font.id }}
                  >
                    <span className="text-xs">{font.label}</span>
                    {isSelected && <Check className="h-4 w-4 text-indigo-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Font Size & Line Height */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-bold text-slate-300 uppercase text-[10px] tracking-wider">
                Font Size ({settings.fontSize}px)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {[12, 13, 14, 16, 18, 20].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => onUpdateSettings((prev) => ({ ...prev, fontSize: sz }))}
                    className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all ${
                      settings.fontSize === sz
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-bold text-slate-300 uppercase text-[10px] tracking-wider">
                Line Height ({settings.lineHeight})
              </label>
              <div className="flex flex-wrap gap-1.5">
                {[1.2, 1.4, 1.5, 1.8].map((lh) => (
                  <button
                    key={lh}
                    onClick={() => onUpdateSettings((prev) => ({ ...prev, lineHeight: lh }))}
                    className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all ${
                      settings.lineHeight === lh
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {lh}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Tab Size & Formatting Toggles */}
          <div className="space-y-3 pt-3 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-200 text-xs">Tab Indentation</p>
                <p className="text-[11px] text-slate-400">Number of spaces inserted per Tab</p>
              </div>
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                {[2, 4].map((ts) => (
                  <button
                    key={ts}
                    onClick={() => onUpdateSettings((prev) => ({ ...prev, tabSize: ts }))}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                      settings.tabSize === ts
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {ts} spaces
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-200 text-xs">Line Numbers</p>
                <p className="text-[11px] text-slate-400">Show line numbers gutter in code editor</p>
              </div>
              <button
                onClick={() =>
                  onUpdateSettings((prev) => ({ ...prev, lineNumbers: !prev.lineNumbers }))
                }
                className={`relative w-11 h-6 rounded-full transition-colors p-0.5 ${
                  settings.lineNumbers ? 'bg-indigo-600' : 'bg-slate-800'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.lineNumbers ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-200 text-xs">Word Wrap</p>
                <p className="text-[11px] text-slate-400">Wrap long code lines without horizontal scrolling</p>
              </div>
              <button
                onClick={() =>
                  onUpdateSettings((prev) => ({ ...prev, wordWrap: !prev.wordWrap }))
                }
                className={`relative w-11 h-6 rounded-full transition-colors p-0.5 ${
                  settings.wordWrap ? 'bg-indigo-600' : 'bg-slate-800'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.wordWrap ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-200 text-xs">Auto Run Code</p>
                <p className="text-[11px] text-slate-400">Automatically update preview 600ms after typing</p>
              </div>
              <button
                onClick={() =>
                  onUpdateSettings((prev) => ({ ...prev, autoRun: !prev.autoRun }))
                }
                className={`relative w-11 h-6 rounded-full transition-colors p-0.5 ${
                  settings.autoRun ? 'bg-indigo-600' : 'bg-slate-800'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.autoRun ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* 5. Layout Mode */}
          <div className="space-y-2 pt-3 border-t border-slate-800">
            <label className="font-bold text-slate-300 uppercase text-[10px] tracking-wider flex items-center gap-1.5">
              <LayoutGrid className="h-3.5 w-3.5 text-amber-400" />
              <span>Workspace Layout</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onUpdateSettings((prev) => ({ ...prev, layout: 'split' }))}
                className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                  settings.layout === 'split'
                    ? 'border-indigo-500 bg-indigo-600/20 text-white'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400'
                }`}
              >
                <span className="font-bold text-xs">Split View</span>
                <span className="text-[10px] opacity-70">Editor and Live Preview side-by-side</span>
              </button>

              <button
                onClick={() => onUpdateSettings((prev) => ({ ...prev, layout: 'tabbed' }))}
                className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                  settings.layout === 'tabbed'
                    ? 'border-indigo-500 bg-indigo-600/20 text-white'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400'
                }`}
              >
                <span className="font-bold text-xs">Tabbed Panels</span>
                <span className="text-[10px] opacity-70">Switch between Editor, Preview, & Console</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition-colors shadow-lg"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
