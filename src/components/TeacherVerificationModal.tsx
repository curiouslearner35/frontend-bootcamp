import React, { useState } from 'react';
import { Project, Language } from '../types';
import { ShieldAlert, Send, X, Github, CheckCircle2 } from 'lucide-react';
import { t } from '../i18n/translations';

interface TeacherVerificationModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmitVerification: (projectId: string, repoUrl: string, notes: string) => void;
  language: Language;
}

export const TeacherVerificationModal: React.FC<TeacherVerificationModalProps> = ({
  project,
  isOpen,
  onClose,
  onSubmitVerification,
  language
}) => {
  const [repoUrl, setRepoUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !project) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!repoUrl.trim()) return;

    onSubmitVerification(project.id, repoUrl, notes);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRepoUrl('');
      setNotes('');
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <CheckCircle2 className="h-14 w-14 text-emerald-500 mb-3 animate-bounce" />
            <h3 className="text-lg font-bold text-[var(--text)]">
              {t.pendingVerification[language]}
            </h3>
            <p className="text-xs text-[var(--text-muted)] mt-1 max-w-xs">
              Your submission for "{project.title[language]}" has been queued and sent for teacher verification.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[var(--text)] leading-snug">
                  {t.submitForVerification[language]}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  {project.title[language]}
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs">
              Teachers inspect commit history, terminal task outputs, and git branch workflow before verifying completion.
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text)] mb-1 flex items-center gap-1.5">
                <Github className="h-3.5 w-3.5" />
                {t.repositoryUrl[language]}
              </label>
              <input
                type="url"
                required
                placeholder="https://github.com/username/project-repo"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                className="w-full p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text)] mb-1">
                {t.notesForTeacher[language]}
              </label>
              <textarea
                rows={3}
                placeholder="Notes about your implementation or questions..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[var(--primary)] text-white font-bold text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
            >
              <Send className="h-4 w-4" />
              {t.submitProjectBtn[language]}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
