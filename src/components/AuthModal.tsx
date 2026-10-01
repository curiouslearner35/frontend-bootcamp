import React, { useState, useEffect } from 'react';
import { Github, X, Shield, CheckCircle2, User, Mail, ArrowRight, Loader2, KeyRound, Sparkles } from 'lucide-react';
import { Language, UserProfile } from '../types';
import { signInWithProvider, signInWithFirebaseGoogle, getSavedAccounts, SignInOptions } from '../services/auth';
import { t } from '../i18n/translations';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated: (user: UserProfile) => void;
  language: Language;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onAuthenticated,
  language
}) => {
  const [authMode, setAuthMode] = useState<'quick' | 'google-custom' | 'github-custom'>('quick');
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [githubUsernameInput, setGithubUsernameInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [savedAccounts, setSavedAccounts] = useState<UserProfile[]>([]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSavedAccounts(getSavedAccounts());
      setAuthMode('quick');
      setIsLoading(false);
      setStatusMessage(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const performSignIn = async (provider: 'google' | 'github', options?: SignInOptions) => {
    setIsLoading(true);
    setLoadingText(
      provider === 'google'
        ? language === 'bn' ? 'গুগল অ্যাকাউন্টের সাথে যুক্ত হচ্ছে...' : 'Connecting to Google Account...'
        : language === 'bn' ? 'গিটহাব প্রোফাইল সিঙ্ক হচ্ছে...' : 'Authorizing with GitHub...'
    );

    try {
      let user: UserProfile;
      if (provider === 'google' && !options) {
        user = await signInWithFirebaseGoogle();
      } else {
        user = signInWithProvider(provider, options);
      }
      setIsLoading(false);
      onAuthenticated(user);
      onClose();
    } catch (err: any) {
      console.error('Auth error:', err);
      setIsLoading(false);
      if (err?.code === 'auth/popup-closed-by-user') {
        setStatusMessage('Sign-in cancelled by user.');
      } else {
        setStatusMessage('Authentication encountered an issue. Please try again.');
      }
    }
  };

  const handleCustomGoogleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = emailInput.trim() || 'samira.rahaman@gmail.com';
    const cleanName = nameInput.trim() || (cleanEmail.includes('@') ? cleanEmail.split('@')[0] : 'Google Learner');
    performSignIn('google', {
      email: cleanEmail.includes('@') ? cleanEmail : `${cleanEmail}@gmail.com`,
      name: cleanName
    });
  };

  const handleCustomGithubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = githubUsernameInput.trim() || 'alexchen_dev';
    performSignIn('github', {
      username: cleanUser,
      name: `${cleanUser} (GitHub)`
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in font-sans">
      <div className="relative w-full max-w-md rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-7 shadow-2xl text-[var(--text)] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isLoading}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] transition-colors disabled:opacity-50 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-to-tr from-[var(--primary)] to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 mb-3">
            <Shield className="h-6 w-6" />
          </div>

          <h3 className="text-lg sm:text-xl font-black text-[var(--text)] tracking-tight">
            {t.loginTitle[language]}
          </h3>

          <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed max-w-xs mx-auto">
            {t.loginSubtitle[language]}
          </p>
        </div>

        {/* Loading Overlay */}
        {isLoading ? (
          <div className="py-10 flex flex-col items-center justify-center space-y-3 text-center animate-fade-in">
            <Loader2 className="h-8 w-8 animate-spin text-[var(--primary)]" />
            <p className="text-xs font-mono font-bold text-[var(--text)]">{loadingText}</p>
            <p className="text-[11px] text-[var(--text-muted)] font-mono">Securing cryptographic session token</p>
          </div>
        ) : (
          <>
            {/* Quick Mode */}
            {authMode === 'quick' && (
              <div className="space-y-4">
                {/* Saved Accounts List if any */}
                {savedAccounts.length > 0 && (
                  <div className="space-y-2 mb-3">
                    <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider text-left">
                      Recent Accounts
                    </p>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                      {savedAccounts.slice(0, 2).map((acc) => (
                        <button
                          key={acc.id}
                          onClick={() => performSignIn(acc.provider as 'google' | 'github', { email: acc.email, name: acc.name, username: acc.username, avatar: acc.avatar })}
                          className="w-full p-2.5 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] hover:border-[var(--primary)] transition-all flex items-center justify-between text-left group cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <img
                              src={acc.avatar}
                              alt={acc.name}
                              referrerPolicy="no-referrer"
                              className="h-8 w-8 rounded-full object-cover border border-[var(--border)] shrink-0"
                            />
                            <div className="truncate">
                              <p className="text-xs font-bold text-[var(--text)] truncate">{acc.name}</p>
                              <p className="text-[10px] text-[var(--text-muted)] font-mono truncate">{acc.email}</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] shrink-0">
                            {acc.provider === 'google' ? 'Google' : 'GitHub'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Primary Google 1-Click Sign-In Button */}
                <button
                  onClick={() => performSignIn('google')}
                  className="w-full py-3.5 px-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] hover:bg-[var(--border)] transition-all flex items-center justify-center gap-3 text-xs font-extrabold text-[var(--text)] shadow-xs hover:shadow-md active:scale-[0.99] cursor-pointer"
                >
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>{t.signInGoogle[language]}</span>
                </button>

                {/* GitHub 1-Click Sign-In Button */}
                <button
                  onClick={() => performSignIn('github')}
                  className="w-full py-3.5 px-4 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-3 text-xs font-extrabold shadow-md active:scale-[0.99] cursor-pointer"
                >
                  <Github className="h-4 w-4 shrink-0" />
                  <span>{t.signInGithub[language]}</span>
                </button>

                {/* Switch to Custom Google Account */}
                <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono">
                  <button
                    onClick={() => setAuthMode('google-custom')}
                    className="text-[var(--primary)] hover:underline flex items-center gap-1 cursor-pointer font-bold"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Use custom Google Email</span>
                  </button>
                  <button
                    onClick={() => setAuthMode('github-custom')}
                    className="text-[var(--text-muted)] hover:text-[var(--text)] hover:underline cursor-pointer"
                  >
                    Custom GitHub ID
                  </button>
                </div>
              </div>
            )}

            {/* Custom Google Account Entry Mode */}
            {authMode === 'google-custom' && (
              <form onSubmit={handleCustomGoogleSubmit} className="space-y-3.5 text-left animate-fade-in">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>Enter your Google account email to sign in</span>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[var(--text-muted)] font-semibold">
                    Google Email Address
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="your.email@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-mono text-[var(--text)] focus:outline-none focus:border-[var(--primary)]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[var(--text-muted)] font-semibold">
                    Full Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-mono text-[var(--text)] focus:outline-none focus:border-[var(--primary)]"
                  />
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setAuthMode('quick')}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-bold text-[var(--text)] hover:bg-[var(--border)] transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-extrabold shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Sign In with Google</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Custom GitHub ID Entry Mode */}
            {authMode === 'github-custom' && (
              <form onSubmit={handleCustomGithubSubmit} className="space-y-3.5 text-left animate-fade-in">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs flex items-center gap-2">
                  <Github className="h-4 w-4 shrink-0" />
                  <span>Enter your GitHub username to connect your public profile</span>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[var(--text-muted)] font-semibold">
                    GitHub Username
                  </label>
                  <div className="relative flex items-center">
                    <span className="pl-3 text-xs font-mono text-slate-400 select-none">@</span>
                    <input
                      type="text"
                      required
                      value={githubUsernameInput}
                      onChange={(e) => setGithubUsernameInput(e.target.value)}
                      placeholder="username"
                      className="w-full px-2 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-mono text-[var(--text)] focus:outline-none focus:border-[var(--primary)]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setAuthMode('quick')}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-bold text-[var(--text)] hover:bg-[var(--border)] transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white text-xs font-extrabold shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Connect GitHub</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}
          </>
        )}

        {statusMessage && (
          <p className="mt-3 text-xs text-rose-500 font-mono text-center">{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

