import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  CodeVisualizerConfig,
  VisualizerThemeId,
  VisualizerFontId,
  WindowStyle,
  VisualizerLanguage,
  ExportFormat,
} from '../../types/visualizer';
import { VISUALIZER_THEMES } from '../../config/visualizerThemes';
import { VISUALIZER_FONTS } from '../../config/visualizerFonts';
import { VISUALIZER_TEMPLATES } from '../../config/visualizerTemplates';
import { DEFAULT_VISUALIZER_CONFIG, loadVisualizerPreferences, saveVisualizerPreferences } from '../../utils/visualizerDefaults';
import { exportVisualizer } from '../../services/visualizerExport';
import { editorCanvasStorage } from '../../services/editorCanvasStorage';
import { PreviewRenderer } from './PreviewRenderer';
import { EditorCanvasOnboardingModal } from './EditorCanvasOnboardingModal';
import {
  X,
  Download,
  Palette,
  Type,
  Code2,
  Sparkles,
  FileCode,
  Check,
  AlertCircle,
  Copy,
  Layout,
  HelpCircle,
} from 'lucide-react';

interface CodeVisualizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCode?: string;
  initialLanguage?: VisualizerLanguage;
  initialTitle?: string;
  studentId?: string;
}

export const CodeVisualizerModal: React.FC<CodeVisualizerModalProps> = ({
  isOpen,
  onClose,
  initialCode,
  initialLanguage,
  initialTitle,
  studentId,
}) => {
  const [config, setConfig] = useState<CodeVisualizerConfig>(() => {
    const savedCanvas = editorCanvasStorage.getState(studentId);
    const prefs = loadVisualizerPreferences();

    if (savedCanvas && !initialCode) {
      return {
        ...DEFAULT_VISUALIZER_CONFIG,
        ...prefs,
        code: savedCanvas.code || DEFAULT_VISUALIZER_CONFIG.code,
        language: savedCanvas.language || (prefs.language as VisualizerLanguage) || DEFAULT_VISUALIZER_CONFIG.language,
        theme: savedCanvas.theme || prefs.theme || DEFAULT_VISUALIZER_CONFIG.theme,
        font: savedCanvas.font || prefs.font || DEFAULT_VISUALIZER_CONFIG.font,
        fontSize: savedCanvas.fontSize || prefs.fontSize || DEFAULT_VISUALIZER_CONFIG.fontSize,
        padding: savedCanvas.padding || prefs.padding || DEFAULT_VISUALIZER_CONFIG.padding,
        windowStyle: savedCanvas.windowStyle || prefs.windowStyle || DEFAULT_VISUALIZER_CONFIG.windowStyle,
        templateId: savedCanvas.selectedTemplate,
        title: initialTitle ?? DEFAULT_VISUALIZER_CONFIG.title
      };
    }

    return {
      ...DEFAULT_VISUALIZER_CONFIG,
      ...prefs,
      code: initialCode ?? DEFAULT_VISUALIZER_CONFIG.code,
      language: initialLanguage ?? (prefs.language as VisualizerLanguage) ?? DEFAULT_VISUALIZER_CONFIG.language,
      title: initialTitle ?? DEFAULT_VISUALIZER_CONFIG.title,
    };
  });

  const [activeTab, setActiveTab] = useState<'customize' | 'editor' | 'templates'>('customize');
  const [isExporting, setIsExporting] = useState(false);
  const [exportMessage, setExportMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(false);

  const previewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (!editorCanvasStorage.getOnboardingCompleted()) {
        setIsOnboardingOpen(true);
      }

      if (initialCode) {
        setConfig((prev) => ({
          ...prev,
          code: initialCode,
          language: initialLanguage || prev.language,
          title: initialTitle || prev.title,
        }));
      }

      // Background Redis server cache sync & reconciliation
      editorCanvasStorage.syncWithServer(studentId).then(({ reconciled, state }) => {
        if (reconciled && state && !initialCode) {
          setConfig((prev) => ({
            ...prev,
            code: state.code || prev.code,
            language: state.language || prev.language,
            theme: state.theme || prev.theme,
            font: state.font || prev.font,
            fontSize: state.fontSize || prev.fontSize,
            padding: state.padding || prev.padding,
            windowStyle: state.windowStyle || prev.windowStyle,
            templateId: state.selectedTemplate || prev.templateId,
          }));
        }
      });
    }
  }, [isOpen, initialCode, initialLanguage, initialTitle, studentId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const updateConfig = useCallback((patch: Partial<CodeVisualizerConfig>) => {
    setConfig((prev) => {
      const next = { ...prev, ...patch };
      saveVisualizerPreferences(next);

      editorCanvasStorage.updateState(
        {
          code: next.code,
          language: next.language,
          theme: next.theme,
          font: next.font,
          fontSize: next.fontSize,
          padding: next.padding,
          windowStyle: next.windowStyle,
          selectedTemplate: next.templateId
        },
        studentId
      );

      return next;
    });
  }, [studentId]);

  const handleApplyTemplate = (templateId: string) => {
    const tmpl = VISUALIZER_TEMPLATES.find((t) => t.id === templateId);
    if (tmpl) {
      updateConfig({
        ...tmpl.defaultConfig,
        code: tmpl.sampleCode,
        templateId: tmpl.id,
        title: tmpl.name,
      });
      setActiveTab('customize');
    }
  };

  const handleExport = async (format: ExportFormat) => {
    setIsExporting(true);
    setExportMessage(null);

    const res = await exportVisualizer(format, config, previewRef.current);

    setIsExporting(false);
    if (res.success) {
      setExportMessage({ type: 'success', text: `Exported ${res.filename} successfully!` });
    } else {
      setExportMessage({ type: 'error', text: res.error || 'Export failed. Please try again.' });
    }

    setTimeout(() => setExportMessage(null), 4000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(config.code || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-md animate-fadeIn">
      <div className="relative flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 shadow-2xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-5 py-3.5">
          <div className="flex items-center space-x-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white tracking-wide">React Carbon-Style Code Visualizer</h2>
              <p className="text-xs text-slate-400">Design, customize, & export stunning code visual cards</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Quick Export Dropdown */}
            <div className="relative group">
              <button
                disabled={isExporting}
                className="flex items-center space-x-2 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
              >
                <Download className="h-4 w-4" />
                <span>{isExporting ? 'Exporting...' : 'Export Card'}</span>
              </button>

              <div className="absolute right-0 top-full mt-2 hidden group-hover:flex group-focus-within:flex flex-col rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-2xl z-20 min-w-44">
                <button
                  onClick={() => handleExport('png')}
                  className="flex items-center space-x-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <FileCode className="h-4 w-4 text-cyan-400" />
                  <span>PNG Image (.png)</span>
                </button>
                <button
                  onClick={() => handleExport('svg')}
                  className="flex items-center space-x-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <Code2 className="h-4 w-4 text-purple-400" />
                  <span>Vector SVG (.svg)</span>
                </button>
                <button
                  onClick={() => handleExport('pdf')}
                  className="flex items-center space-x-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <FileCode className="h-4 w-4 text-red-400" />
                  <span>PDF Document (.pdf)</span>
                </button>
                <button
                  onClick={() => handleExport('html')}
                  className="flex items-center space-x-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <Layout className="h-4 w-4 text-orange-400" />
                  <span>Standalone HTML (.html)</span>
                </button>
                <button
                  onClick={() => handleExport('markdown')}
                  className="flex items-center space-x-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <FileCode className="h-4 w-4 text-emerald-400" />
                  <span>Fenced Markdown (.md)</span>
                </button>
                <button
                  onClick={() => handleExport('json')}
                  className="flex items-center space-x-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <FileCode className="h-4 w-4 text-yellow-400" />
                  <span>JSON Config (.json)</span>
                </button>
                <button
                  onClick={() => handleExport('txt')}
                  className="flex items-center space-x-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <FileCode className="h-4 w-4 text-slate-400" />
                  <span>Raw Text (.txt)</span>
                </button>
              </div>
            </div>

            {/* Help / How it works Button */}
            <button
              onClick={() => setIsOnboardingOpen(true)}
              className="flex items-center space-x-1.5 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs font-semibold text-slate-300 hover:border-indigo-500/40 hover:text-white transition-all cursor-pointer"
              title="How Editor Canvas Works"
            >
              <HelpCircle className="h-4 w-4 text-indigo-400" />
              <span className="hidden sm:inline">How it works</span>
            </button>

            <button
              onClick={onClose}
              className="rounded-xl p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
              aria-label="Close visualizer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Status Toast Notification */}
        {exportMessage && (
          <div
            className={`flex items-center justify-between px-4 py-2 text-xs font-medium ${
              exportMessage.type === 'success' ? 'bg-emerald-950 text-emerald-300 border-b border-emerald-800' : 'bg-red-950 text-red-300 border-b border-red-800'
            }`}
          >
            <div className="flex items-center space-x-2">
              {exportMessage.type === 'success' ? <Check className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
              <span>{exportMessage.text}</span>
            </div>
            <button onClick={() => setExportMessage(null)}>
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Body Layout */}
        <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
          {/* Controls Panel */}
          <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-950/60 p-4 overflow-y-auto space-y-5">
            {/* Nav Tabs */}
            <div className="flex rounded-xl bg-slate-900 p-1 border border-slate-800">
              <button
                onClick={() => setActiveTab('customize')}
                className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-all ${
                  activeTab === 'customize' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Customize
              </button>
              <button
                onClick={() => setActiveTab('editor')}
                className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-all ${
                  activeTab === 'editor' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Code Snippet
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-all ${
                  activeTab === 'templates' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Templates
              </button>
            </div>

            {/* Customize Tab */}
            {activeTab === 'customize' && (
              <div className="space-y-4">
                {/* Theme Selector */}
                <div>
                  <label className="flex items-center space-x-1.5 text-xs font-semibold text-slate-300 mb-2">
                    <Palette className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Theme Preset (8 Themes)</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.values(VISUALIZER_THEMES).map((thm) => (
                      <button
                        key={thm.id}
                        onClick={() => updateConfig({ theme: thm.id })}
                        className={`flex items-center space-x-2 rounded-xl border p-2 text-xs font-medium transition-all ${
                          config.theme === thm.id
                            ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200 shadow-md'
                            : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        <span
                          className="h-3 w-3 rounded-full border border-white/20 inline-block"
                          style={{ background: thm.background }}
                        />
                        <span className="truncate">{thm.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Selector */}
                <div>
                  <label className="flex items-center space-x-1.5 text-xs font-semibold text-slate-300 mb-2">
                    <Type className="h-3.5 w-3.5 text-purple-400" />
                    <span>Monospace Font (6 Fonts)</span>
                  </label>
                  <select
                    value={config.font}
                    onChange={(e) => updateConfig({ font: e.target.value as VisualizerFontId })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none"
                  >
                    {Object.values(VISUALIZER_FONTS).map((fnt) => (
                      <option key={fnt.id} value={fnt.id}>
                        {fnt.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Window Style */}
                <div>
                  <label className="flex items-center space-x-1.5 text-xs font-semibold text-slate-300 mb-2">
                    <Layout className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Window Chrome</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['mac', 'windows', 'none'] as WindowStyle[]).map((st) => (
                      <button
                        key={st}
                        onClick={() => updateConfig({ windowStyle: st })}
                        className={`rounded-xl border py-1.5 text-xs font-medium uppercase tracking-wider transition-all ${
                          config.windowStyle === st
                            ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200'
                            : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Size & Padding */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Font Size: <span className="text-cyan-400">{config.fontSize}px</span>
                    </label>
                    <input
                      type="range"
                      min={12}
                      max={24}
                      value={config.fontSize}
                      onChange={(e) => updateConfig({ fontSize: Number(e.target.value) })}
                      className="w-full accent-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Padding: <span className="text-cyan-400">{config.padding}px</span>
                    </label>
                    <input
                      type="range"
                      min={16}
                      max={64}
                      step={4}
                      value={config.padding}
                      onChange={(e) => updateConfig({ padding: Number(e.target.value) })}
                      className="w-full accent-cyan-500"
                    />
                  </div>
                </div>

                {/* Language Selector */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Syntax Language</label>
                  <select
                    value={config.language}
                    onChange={(e) => updateConfig({ language: e.target.value as VisualizerLanguage })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none"
                  >
                    {['typescript', 'javascript', 'html', 'css', 'python', 'json', 'markdown', 'bash', 'sql'].map((lang) => (
                      <option key={lang} value={lang}>
                        {lang.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Editor Tab */}
            {activeTab === 'editor' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-300">Code Snippet Input</label>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center space-x-1 text-xs text-cyan-400 hover:text-cyan-300"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
                <textarea
                  value={config.code}
                  onChange={(e) => updateConfig({ code: e.target.value })}
                  placeholder="Paste or type your code snippet here..."
                  rows={14}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 font-mono text-xs text-slate-200 focus:border-cyan-500 focus:outline-none resize-none leading-relaxed"
                />
              </div>
            )}

            {/* Templates Tab */}
            {activeTab === 'templates' && (
              <div className="space-y-2.5">
                <label className="text-xs font-semibold text-slate-300 block">10 Data-Driven Templates</label>
                {VISUALIZER_TEMPLATES.map((tmpl) => (
                  <button
                    key={tmpl.id}
                    onClick={() => handleApplyTemplate(tmpl.id)}
                    className={`w-full text-left rounded-xl border p-3 transition-all ${
                      config.templateId === tmpl.id
                        ? 'border-cyan-500 bg-cyan-950/30 text-white'
                        : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="text-xs font-bold text-cyan-400">{tmpl.name}</div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">{tmpl.description}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Live Preview Area */}
          <div className="flex-1 overflow-auto bg-slate-950 p-6 flex flex-col items-center justify-center min-h-[350px]">
            {!config.code.trim() ? (
              <div className="flex flex-col items-center justify-center p-8 text-center text-slate-500">
                <AlertCircle className="h-12 w-12 text-slate-600 mb-3" />
                <h3 className="text-sm font-semibold text-slate-300">No code selected yet</h3>
                <p className="text-xs max-w-sm mt-1 text-slate-400">
                  Choose code from your Practice Sandbox or paste a snippet in the Code Snippet tab to begin customizing.
                </p>
              </div>
            ) : (
              <div className="w-full max-w-3xl">
                <PreviewRenderer config={config} previewRef={previewRef} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* First-Use Onboarding Guide Modal */}
      <EditorCanvasOnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => {
          editorCanvasStorage.setOnboardingCompleted();
          setIsOnboardingOpen(false);
        }}
      />
    </div>
  );
};
