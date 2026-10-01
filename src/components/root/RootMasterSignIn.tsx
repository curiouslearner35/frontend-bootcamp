import React, { useState } from 'react';
import { ShieldCheck, Lock, AlertCircle, KeyRound, Terminal, ArrowRight } from 'lucide-react';

interface RootMasterSignInProps {
  onAuthenticated: (token: string, expiresAt: number) => void;
  onNavigateHome: () => void;
}

export const RootMasterSignIn: React.FC<RootMasterSignInProps> = ({ onAuthenticated, onNavigateHome }) => {
  const [masterKey, setMasterKey] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!masterKey.trim()) {
      setErrorMsg('Please enter the Master Key.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      // Authenticate directly via server-side verification endpoint
      const res = await fetch('/api/root/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ masterKey: masterKey.trim() })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        onAuthenticated(data.token, data.expiresAt);
      } else {
        setErrorMsg(data.error || 'Authentication failed.');
        if (typeof data.remainingAttempts === 'number') {
          setRemainingAttempts(data.remainingAttempts);
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Unable to connect to Control Plane auth server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white font-sans">
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onNavigateHome}>
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-mono font-black text-white text-sm">
              C
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-white">Codazi Academy</span>
              <p className="text-[10px] text-slate-400 font-mono">Control Plane Gateway</p>
            </div>
          </div>

          <button
            onClick={onNavigateHome}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            ← Public Academy
          </button>
        </div>
      </header>

      {/* Main Sign In Form */}
      <main className="max-w-md mx-auto w-full px-4 py-12 flex-1 flex flex-col justify-center">
        <div className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto shadow-inner">
              <KeyRound className="h-6 w-6" />
            </div>
            <div className="space-y-0.5">
              <div className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                <Lock className="h-3 w-3" />
                <span>Protected Control Plane</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight pt-1">
                CODAZI ROOT CONTROL
              </h1>
              <p className="text-xs text-slate-400 font-sans">
                Instructor & Academic Command Center
              </p>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs flex items-start gap-2.5">
              <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold">{errorMsg}</p>
                {remainingAttempts !== null && remainingAttempts > 0 && (
                  <p className="text-[11px] text-red-300 font-mono">
                    Remaining attempts before temporary lockout: {remainingAttempts}
                  </p>
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-slate-300 flex items-center justify-between">
                <span>Master Key</span>
                <span className="text-[10px] text-slate-500 font-normal">Server-Verified</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={masterKey}
                  onChange={(e) => setMasterKey(e.target.value)}
                  placeholder="•••••••••••••••••••"
                  autoFocus
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-lg active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Verifying Master Session...</span>
                </>
              ) : (
                <>
                  <span>ENTER ROOT</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Architecture Security Notice */}
          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1.5">
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px]">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Zero Client Secrets Architecture</span>
            </div>
            <p className="text-[10px] leading-relaxed text-slate-400">
              Master credentials are authenticated server-side with cryptographic rate-limiting and audit logging.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-4 text-center text-xs font-mono text-slate-400">
        CODAZI BOOTCAMP CONTROL PLANE · SECURE ROOT SESSION
      </footer>
    </div>
  );
};
