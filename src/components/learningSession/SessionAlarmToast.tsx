import React, { useEffect, useState } from 'react';
import { Bell, CheckCircle2, Trophy, X, ArrowRight } from 'lucide-react';
import { PhaseTransitionNotification, sessionManager } from '../../services/sessionManager';

export const SessionAlarmToast: React.FC = () => {
  const [currentNotif, setCurrentNotif] = useState<PhaseTransitionNotification | null>(null);

  useEffect(() => {
    const unsubscribe = sessionManager.subscribeNotification((notif) => {
      setCurrentNotif(notif);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!currentNotif) return;
    const timer = setTimeout(() => {
      setCurrentNotif(null);
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentNotif]);

  if (!currentNotif) return null;

  return (
    <div
      id="session-alarm-in-app-toast"
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md animate-bounce-in"
      role="alert"
    >
      <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/95 text-white p-4 shadow-2xl backdrop-blur-md flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            {currentNotif.isSessionComplete ? (
              <Trophy className="h-5 w-5" />
            ) : (
              <CheckCircle2 className="h-5 w-5 animate-pulse" />
            )}
          </div>

          <div className="min-w-0">
            <h4 className="font-extrabold text-sm text-white tracking-tight truncate">
              {currentNotif.isSessionComplete
                ? '🎉 Learning Session Complete!'
                : `${currentNotif.completedPhaseName} Complete`}
            </h4>
            <p className="text-xs text-slate-300 mt-0.5 truncate flex items-center gap-1.5">
              {currentNotif.isSessionComplete ? (
                <span>All phases finished. Session analytics recorded.</span>
              ) : (
                <>
                  <span className="text-slate-400">Next:</span>
                  <span className="font-bold text-emerald-400">{currentNotif.nextPhaseName}</span>
                </>
              )}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setCurrentNotif(null)}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Dismiss Notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
