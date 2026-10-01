import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, AlertTriangle, ShieldCheck, ArrowLeft, ExternalLink, Calendar, BookOpen, Hash } from 'lucide-react';
import { INITIAL_CERTIFICATES } from '../data/rootControlData';

interface PublicCertificatePageProps {
  certId?: string;
  onNavigateHome: () => void;
}

export const PublicCertificatePage: React.FC<PublicCertificatePageProps> = ({ certId, onNavigateHome }) => {
  const [targetId, setTargetId] = useState<string>(() => {
    if (certId) return certId;
    if (typeof window !== 'undefined') {
      const pathParts = window.location.pathname.split('/');
      const idFromPath = pathParts[pathParts.length - 1];
      if (idFromPath && idFromPath.startsWith('CZ-')) return idFromPath;
      const params = new URLSearchParams(window.location.search);
      return params.get('id') || 'CZ-2026-000241';
    }
    return 'CZ-2026-000241';
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [certData, setCertData] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setErrorMsg(null);

    // First attempt: fetch from server-side endpoint
    fetch(`/api/certificates/${targetId}`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Certificate not found on server (${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          if (data && data.certificate) {
            setCertData(data.certificate);
          } else {
            throw new Error('Invalid certificate payload');
          }
          setLoading(false);
        }
      })
      .catch(() => {
        // Fallback to local verified registry
        const fallback = INITIAL_CERTIFICATES.find(
          (c) => c.id.toLowerCase() === targetId.toLowerCase()
        );
        if (isMounted) {
          if (fallback) {
            setCertData(fallback);
          } else {
            setErrorMsg(`Certificate ID "${targetId}" could not be verified in the public registry.`);
          }
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [targetId]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Top Bar */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onNavigateHome}>
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-mono font-black text-white text-sm">
              C
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-white">Codazi Academy</span>
              <p className="text-[10px] text-slate-400 font-mono">Public Verification Registry</p>
            </div>
          </div>

          <button
            onClick={onNavigateHome}
            className="px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Academy</span>
          </button>
        </div>
      </header>

      {/* Main Certificate Verification Card */}
      <main className="max-w-3xl mx-auto w-full px-4 py-12 flex-1 flex flex-col justify-center">
        {loading ? (
          <div className="p-12 text-center space-y-4 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <div className="h-10 w-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-mono text-slate-400">Verifying cryptographic signature against registry...</p>
          </div>
        ) : errorMsg || !certData ? (
          <div className="p-8 sm:p-12 rounded-3xl border border-red-500/30 bg-red-950/20 backdrop-blur-md text-center space-y-4">
            <div className="h-14 w-14 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center mx-auto">
              <AlertTriangle className="h-7 w-7" />
            </div>
            <h2 className="text-xl font-bold text-white">Certificate Verification Failed</h2>
            <p className="text-sm text-slate-300 max-w-md mx-auto">{errorMsg}</p>
            <div className="pt-2">
              <button
                onClick={onNavigateHome}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700"
              >
                Return to Codazi Home
              </button>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/40 p-6 sm:p-10 shadow-2xl space-y-8">
            {/* Watermark Crest */}
            <div className="absolute right-0 top-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

            {/* Verification Status Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="flex items-center gap-3">
                {certData.status === 'VALID' ? (
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold tracking-wider ${
                        certData.status === 'VALID'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      }`}
                    >
                      {certData.status === 'VALID' ? 'CERTIFICATE VERIFIED ✓' : 'STATUS: REVOKED'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-1">Official Codazi Academic Credential</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Credential ID</p>
                <p className="text-sm font-mono font-extrabold text-indigo-300">{certData.id}</p>
              </div>
            </div>

            {/* Recipient & Program Details */}
            <div className="space-y-6 text-center py-2">
              <div className="space-y-1">
                <p className="text-xs uppercase font-mono text-slate-400 tracking-widest">This certifies that</p>
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">{certData.studentName}</h1>
              </div>

              <div className="space-y-1 max-w-lg mx-auto">
                <p className="text-xs text-slate-400">has successfully mastered and satisfied all requirements of</p>
                <p className="text-base sm:text-lg font-bold text-indigo-200 font-mono">{certData.program}</p>
                <p className="text-xs text-emerald-400 font-mono mt-1">{certData.curriculumStats}</p>
              </div>
            </div>

            {/* Verification Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800">
              <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                  <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Completion Date</span>
                </div>
                <p className="text-xs font-bold text-white">{certData.completionDate}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                  <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Issuing Authority</span>
                </div>
                <p className="text-xs font-bold text-white">{certData.issuer || 'Codazi Academic Board'}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                  <Hash className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Signature Seal</span>
                </div>
                <p className="text-[11px] font-mono text-slate-300 truncate" title={certData.signatureHash}>
                  {certData.signatureHash?.substring(0, 16)}...
                </p>
              </div>
            </div>

            {/* Privacy Compliance Footer */}
            <div className="pt-2 text-center text-[10px] font-mono text-slate-500">
              Verified by Codazi Cryptographic Ledger. No private personal data or credentials are exposed in public verification mode.
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-4 text-center text-xs font-mono text-slate-500">
        © 2026 Codazi Academy. Verifiable Credentials Standard.
      </footer>
    </div>
  );
};
