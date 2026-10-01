import React, { useState, useEffect } from 'react';
import { Zap, X, CheckCircle2, Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

const STORAGE_KEY_DISMISSED = 'codazi_pwa_guide_dismissed';

export const PWAInstallGuide: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEY_DISMISSED) !== 'true';
  });
  const [installSuccess, setInstallSuccess] = useState<boolean>(false);

  useEffect(() => {
    // Check if running in standalone mode (already installed)
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      setIsOpen(false);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setInstallSuccess(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setIsInstalled(true);
        setInstallSuccess(true);
        setDeferredPrompt(null);
      }
    } else {
      alert('To install, follow the platform instructions shown below for your browser.');
    }
  };

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY_DISMISSED, 'true');
  };

  if (!isOpen || isInstalled) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl border border-indigo-500/30 bg-[#0e1324] p-5 sm:p-6 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold">
            <Zap className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            <span>OFFLINE-READY PWA</span>
          </div>

          <button
            onClick={handleDismiss}
            className="p-1.5 rounded-full border border-slate-700 bg-slate-800/80 text-slate-400 hover:text-white transition-colors"
            title="Close PWA Install Guide"
            aria-label="Close PWA Guide"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Subtitle & Main Title */}
        <div className="mb-5">
          <p className="text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-1">
            INSTALL GUIDE
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight">
            Add to Home Screen
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed mt-2">
            Get the full native app experience — works offline, loads instantly, no app store needed.
          </p>
        </div>

        {installSuccess ? (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 my-4">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="font-extrabold text-sm text-emerald-300 font-mono">
              PWA Installed Successfully!
            </h3>
            <p className="text-xs text-slate-300 font-mono">
              You can now open Codazi Learning Hub directly from your home screen or desktop launcher.
            </p>
            <button
              onClick={handleDismiss}
              className="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold font-mono"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* 3 Platform Cards */}
            <div className="space-y-3 mb-6">
              {/* 1. iOS Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl border border-slate-800 bg-[#14192b]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm select-none">📱</span>
                  <h4 className="font-mono font-bold text-xs sm:text-sm text-white">
                    iPhone / iPad (Safari)
                  </h4>
                </div>
                <p className="text-xs text-slate-300 font-mono pl-6 leading-normal">
                  Tap the <span className="font-bold text-white">Share</span> icon → &quot;Add to Home Screen&quot; → Add
                </p>
              </div>

              {/* 2. Android Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl border border-slate-800 bg-[#14192b]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm select-none">🤖</span>
                  <h4 className="font-mono font-bold text-xs sm:text-sm text-white">
                    Android (Chrome)
                  </h4>
                </div>
                <p className="text-xs text-slate-300 font-mono pl-6 leading-normal">
                  Tap the menu (<span className="font-bold text-white">⋮</span>) → &quot;Add to Home screen&quot; → Add
                </p>
              </div>

              {/* 3. Desktop Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl border border-slate-800 bg-[#14192b]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm select-none">💻</span>
                  <h4 className="font-mono font-bold text-xs sm:text-sm text-white">
                    Desktop (Chrome / Edge)
                  </h4>
                </div>
                <p className="text-xs text-slate-300 font-mono pl-6 leading-normal">
                  Click the install icon in the address bar or browser menu
                </p>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleInstallClick}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm font-mono tracking-wide transition-all shadow-lg shadow-indigo-600/30 active:scale-95 flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                <span>Install App</span>
              </button>

              <button
                onClick={handleDismiss}
                className="w-full py-3.5 px-4 rounded-2xl border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200 font-extrabold text-xs sm:text-sm font-mono tracking-wide transition-all active:scale-95 text-center"
              >
                Maybe Later
              </button>
            </div>
          </>
        )}

        {/* Footer Subtext */}
        <p className="text-[11px] font-mono text-slate-400 text-center mt-4">
          Works on all modern browsers · No sign-up required to install
        </p>
      </div>
    </div>
  );
};
