import React from 'react';
import { Terminal, ShieldCheck, GitBranch, ArrowRight, X, Sparkles, Coins } from 'lucide-react';
import { Language } from '../types';
import { t } from '../i18n/translations';
import { gemEconomy } from '../services/gemEconomy';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartLearning: () => void;
  language: Language;
  studentId?: string;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  onStartLearning,
  language,
  studentId
}) => {
  if (!isOpen) return null;

  const handleClaimAndStart = () => {
    gemEconomy.awardWelcomeBonus(studentId || 'guest');
    onStartLearning();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-[var(--primary)] to-indigo-500 flex items-center justify-center text-white shadow-xl shadow-indigo-500/25 mb-4">
            <Terminal className="h-8 w-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold mb-2">
            <span>💎 +20 GEMS WELCOME BONUS</span>
          </div>

          <h2 className="text-xl font-extrabold text-[var(--text)] tracking-tight">
            {t.pwaInstallTitle[language]}
          </h2>

          <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed max-w-xs">
            {t.pwaInstallDesc[language]}
          </p>

          <div className="w-full my-5 space-y-2 text-left">
            <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-indigo-500/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                <GitBranch className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[var(--text)]">
                  {t.gitFirstPhilosophyBanner[language]}
                </h4>
                <p className="text-[11px] text-[var(--text-muted)]">
                  Week 1 starts with Git CLI before coding.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[var(--text)]">
                  Teacher Verified Projects
                </h4>
                <p className="text-[11px] text-[var(--text-muted)]">
                  Projects stay locked until prerequisites & mentor approval.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-2">
            <button
              onClick={handleClaimAndStart}
              className="w-full py-3.5 px-4 rounded-xl bg-[var(--primary)] text-white font-bold text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 cursor-pointer"
            >
              <span>Claim +20 💎 & Start Learning</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl border border-[var(--border)] text-[var(--text-muted)] font-semibold text-xs hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
            >
              {t.maybeLater[language]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
