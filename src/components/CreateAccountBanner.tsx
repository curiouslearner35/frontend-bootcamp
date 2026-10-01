import React from 'react';
import { UserProfile, Language } from '../types';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface CreateAccountBannerProps {
  user: UserProfile | null;
  language?: Language;
  onOpenAuth: () => void;
  onNavigateToSyllabus: () => void;
}

export const CreateAccountBanner: React.FC<CreateAccountBannerProps> = ({
  user,
  onOpenAuth,
  onNavigateToSyllabus
}) => {
  const isAuthenticated = user !== null && user.provider !== 'guest';

  return (
    <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-[#121629] via-[#161c33] to-[#111526] p-5 shadow-xl text-white">
      <div className="flex items-start gap-3.5 mb-4">
        <span className="text-2xl select-none leading-none pt-0.5" role="img" aria-label="apple">
          🍎
        </span>
        <div>
          <p className="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed font-semibold">
            Join <span className="text-indigo-400 font-bold">50+ learners</span> building real skills with structured projects, live feedback & a community.
          </p>
        </div>
      </div>

      {isAuthenticated ? (
        <button
          onClick={onNavigateToSyllabus}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-indigo-600/30 active:scale-[0.99] flex items-center justify-center gap-2"
        >
          <BookOpen className="h-4 w-4" />
          <span>Continue Learning →</span>
        </button>
      ) : (
        <button
          onClick={onOpenAuth}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-indigo-600/30 active:scale-[0.99] flex items-center justify-center gap-2"
        >
          <span>Create Free Account →</span>
        </button>
      )}
    </div>
  );
};
