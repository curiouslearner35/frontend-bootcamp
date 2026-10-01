import React, { useState, useEffect } from 'react';
import { GitBranch, ExternalLink, RefreshCw, CheckCircle2, AlertCircle, UserCheck, Lock } from 'lucide-react';
import {
  GitHubSyncedProfile,
  fetchAndSyncGitHubProfile,
  getSyncedGitHubProfile
} from '../services/githubService';
import { UserProfile, Language } from '../types';

interface GitHubProfileSyncProps {
  user: UserProfile | null;
  language?: Language;
  onOpenAuth?: () => void;
  onProfileSynced?: (profile: GitHubSyncedProfile) => void;
}

export const GitHubProfileSync: React.FC<GitHubProfileSyncProps> = ({
  user,
  onOpenAuth,
  onProfileSynced
}) => {
  const isLoggedIn = user !== null && user.provider !== 'guest';

  const [usernameInput, setUsernameInput] = useState<string>(() => {
    const existing = getSyncedGitHubProfile();
    if (existing) return existing.username;
    if (user && user.provider === 'github') return user.username.replace('_dev', '');
    return '';
  });

  const [syncedProfile, setSyncedProfile] = useState<GitHubSyncedProfile | null>(() =>
    getSyncedGitHubProfile()
  );
  const [status, setStatus] = useState<'idle' | 'syncing' | 'synced' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Auto-sync on mount if user is logged in with GitHub and not yet synced
  useEffect(() => {
    if (isLoggedIn && user && user.provider === 'github' && !syncedProfile && user.username) {
      const cleanName = user.username.replace('_dev', '');
      handleSync(cleanName);
    }
  }, [user, isLoggedIn]);

  const handleSync = async (targetUsername?: string) => {
    if (!isLoggedIn) {
      if (onOpenAuth) onOpenAuth();
      return;
    }

    const query = targetUsername || usernameInput;
    if (!query.trim()) {
      setErrorMessage('Please enter a GitHub username.');
      setStatus('error');
      return;
    }

    setStatus('syncing');
    setErrorMessage(null);

    try {
      const result = await fetchAndSyncGitHubProfile(query);
      setSyncedProfile(result);
      setStatus('synced');
      if (onProfileSynced) {
        onProfileSynced(result);
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to sync GitHub profile.');
    }
  };

  // Locked State View for Guests / Logged Out users
  if (!isLoggedIn) {
    return (
      <div className="rounded-3xl border border-indigo-500/20 bg-[#0e1322] p-5 shadow-lg text-[var(--text)] transition-all relative overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GitBranch className="h-4 w-4 text-indigo-400" />
            <h3 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
              GITHUB PROGRESS TRACKER
            </h3>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-mono font-semibold">
            <Lock className="h-3 w-3" />
            <span>SIGN IN REQUIRED</span>
          </div>
        </div>

        {/* Locked Overlay Body */}
        <div className="p-6 rounded-2xl border border-dashed border-slate-700/80 bg-[#141929]/90 text-center flex flex-col items-center justify-center space-y-3">
          <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shadow-inner">
            <Lock className="h-6 w-6 text-amber-400" />
          </div>

          <div>
            <h4 className="font-mono font-bold text-sm text-white">
              GitHub Profile Sync is Locked
            </h4>
            <p className="text-xs text-slate-400 font-mono mt-1 max-w-sm leading-relaxed">
              Sign in with Google or GitHub to sync your live repositories, public activity, and developer stats.
            </p>
          </div>

          <button
            onClick={onOpenAuth}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-mono font-bold text-xs shadow-lg transition-all active:scale-95 flex items-center gap-2"
          >
            <span>Sign In to Unlock Sync</span>
          </button>
        </div>
      </div>
    );
  }

  // Unlocked State View
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[#0e1322] p-5 shadow-lg text-[var(--text)] transition-all">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <GitBranch className="h-4 w-4 text-indigo-400" />
          <h3 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
            GITHUB PROGRESS TRACKER
          </h3>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>PUBLIC API · LIVE DATA</span>
        </div>
      </div>

      {/* Input Sync Bar matching design */}
      <div className="relative flex items-center rounded-2xl border border-slate-700/80 bg-[#161c2e] p-1.5 shadow-inner">
        <span className="pl-3 pr-1 text-xs font-mono text-slate-400 select-none">
          github.com/
        </span>
        <input
          type="text"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSync()}
          placeholder="username"
          disabled={status === 'syncing'}
          className="w-full bg-transparent text-xs font-mono text-white placeholder-slate-500 focus:outline-none px-1"
        />
        <button
          onClick={() => handleSync()}
          disabled={status === 'syncing'}
          className="shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center gap-1.5"
        >
          {status === 'syncing' ? (
            <>
              <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              <span>Syncing...</span>
            </>
          ) : (
            <span>Sync</span>
          )}
        </button>
      </div>

      {/* Status / Output Display Area */}
      <div className="mt-3">
        {status === 'error' && errorMessage && (
          <div className="p-3.5 rounded-2xl border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-mono flex items-center gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
            <span>{errorMessage}</span>
          </div>
        )}

        {status === 'syncing' && (
          <div className="p-4 rounded-2xl border border-dashed border-indigo-500/30 bg-indigo-500/5 text-center text-xs font-mono text-indigo-300 flex items-center justify-center gap-2">
            <RefreshCw className="h-4 w-4 animate-spin text-indigo-400" />
            <span>Fetching real public profile from GitHub REST API...</span>
          </div>
        )}

        {status !== 'syncing' && !syncedProfile && status !== 'error' && (
          <div className="p-4 rounded-2xl border border-dashed border-slate-700/80 bg-[#141929] text-slate-400 text-xs font-mono text-center">
            Enter a GitHub username to load real repositories and activity.
          </div>
        )}

        {syncedProfile && status !== 'syncing' && (
          <div className="p-4 rounded-2xl border border-slate-700/80 bg-[#141929] space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={syncedProfile.avatarUrl}
                  alt={syncedProfile.username}
                  className="h-11 w-11 rounded-xl object-cover border border-slate-600 shadow-md"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-extrabold text-sm text-white">
                      {syncedProfile.name}
                    </h4>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <p className="text-xs font-mono text-slate-400">
                    @{syncedProfile.username}
                  </p>
                </div>
              </div>

              <a
                href={syncedProfile.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-indigo-300 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span>View GitHub Profile</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-2">
              {syncedProfile.bio}
            </p>

            <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-800/80">
              <div className="p-2 rounded-xl bg-slate-800/50 text-center">
                <span className="block text-xs text-slate-400 font-mono">Public Repos</span>
                <span className="text-sm font-extrabold text-white font-mono">
                  {syncedProfile.publicRepos}
                </span>
              </div>
              <div className="p-2 rounded-xl bg-slate-800/50 text-center">
                <span className="block text-xs text-slate-400 font-mono">Followers</span>
                <span className="text-sm font-extrabold text-white font-mono">
                  {syncedProfile.followers}
                </span>
              </div>
              <div className="p-2 rounded-xl bg-slate-800/50 text-center">
                <span className="block text-xs text-slate-400 font-mono">Following</span>
                <span className="text-sm font-extrabold text-white font-mono">
                  {syncedProfile.following}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <UserCheck className="h-3 w-3 text-emerald-400" />
                <span>Synced via GitHub Public API</span>
              </span>
              <span>Updated: {new Date(syncedProfile.syncedAt).toLocaleTimeString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
