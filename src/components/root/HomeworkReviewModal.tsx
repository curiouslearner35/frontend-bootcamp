import React, { useState } from 'react';
import { X, CheckCircle2, RefreshCw, XCircle, FileCode, Star, MessageSquare, ExternalLink, History } from 'lucide-react';
import { HomeworkSubmission, ReviewRubric } from '../../types/rootControl';

interface HomeworkReviewModalProps {
  submission: HomeworkSubmission | null;
  onClose: () => void;
  onApprove: (id: string, rubric: ReviewRubric, feedback: string) => void;
  onRequestRevision: (id: string, rubric: ReviewRubric, feedback: string, requiredChanges: string) => void;
  onReject: (id: string, feedback: string) => void;
}

export const HomeworkReviewModal: React.FC<HomeworkReviewModalProps> = ({
  submission,
  onClose,
  onApprove,
  onRequestRevision,
  onReject
}) => {
  if (!submission) return null;

  const [rubric, setRubric] = useState<ReviewRubric>(() => {
    return (
      submission.rubric || {
        correctness: 5,
        codeQuality: 4,
        understanding: 5,
        accessibility: 4,
        bestPractice: 4
      }
    );
  });

  const [feedback, setFeedback] = useState<string>(submission.feedbackText || '');
  const [requiredChanges, setRequiredChanges] = useState<string>(submission.requiredChanges || '');
  const [activeTab, setActiveTab] = useState<'code' | 'history'>('code');

  const handleScoreChange = (field: keyof ReviewRubric, value: number) => {
    setRubric((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in font-sans">
      <div
        className="w-full max-w-3xl rounded-3xl border border-slate-700 bg-slate-900 text-slate-100 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/80 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-amber-500/10 border border-amber-500/30 text-amber-300">
                Week {submission.weekNumber} · Round {submission.round}
              </span>
              <h3 className="text-base font-bold text-white">{submission.lessonTitle}</h3>
            </div>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Student: <strong className="text-slate-200">{submission.studentName}</strong> · Submitted{' '}
              {new Date(submission.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>

          <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation tabs */}
        <div className="flex items-center gap-4 px-6 border-b border-slate-800 bg-slate-950/40 text-xs font-mono font-bold">
          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'code' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-slate-400'
            }`}
          >
            <FileCode className="h-4 w-4" />
            <span>Submission & Review</span>
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`py-3 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'history' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-slate-400'
            }`}
          >
            <History className="h-4 w-4" />
            <span>Revision History ({submission.revisionHistory?.length || 0})</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'code' ? (
            <>
              {/* Student Notes & Repository */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 font-bold uppercase">Student Notes</span>
                  {submission.repoUrl && (
                    <a
                      href={submission.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                      <span>View GitHub Repo</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/80 text-xs text-slate-300">
                  {submission.studentNotes || 'No notes provided by learner.'}
                </div>
              </div>

              {/* Code Snippet Preview */}
              {submission.codeSnippet && (
                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase">Code Preview</span>
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                    <pre>{submission.codeSnippet}</pre>
                  </div>
                </div>
              )}

              {/* Review Rubric (1-5 Stars) */}
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/80 space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-300 uppercase">Assessment Rubric (1 - 5)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { key: 'correctness', label: 'Correctness & Logic' },
                    { key: 'codeQuality', label: 'Code Quality & Cleanliness' },
                    { key: 'understanding', label: 'Conceptual Understanding' },
                    { key: 'accessibility', label: 'Accessibility (a11y)' },
                    { key: 'bestPractice', label: 'Industry Best Practices' }
                  ].map(({ key, label }) => (
                    <div key={key} className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono">
                      <span className="text-slate-300">{label}</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleScoreChange(key as keyof ReviewRubric, star)}
                            className={`p-1 hover:scale-110 transition-transform ${
                              star <= (rubric[key as keyof ReviewRubric] || 0)
                                ? 'text-amber-400'
                                : 'text-slate-600'
                            }`}
                          >
                            <Star className="h-3.5 w-3.5 fill-current" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feedback Textarea */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Instructor Feedback</span>
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Provide encouraging, actionable guidance..."
                  rows={3}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 font-sans focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Required Changes (For revision) */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-1.5">
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Required Changes (If Requesting Revision)</span>
                </label>
                <textarea
                  value={requiredChanges}
                  onChange={(e) => setRequiredChanges(e.target.value)}
                  placeholder="List exact bullet points student must resolve for Round next..."
                  rows={2}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-amber-500/30 text-xs text-white placeholder-slate-500 font-sans focus:outline-none focus:border-amber-500"
                />
              </div>
            </>
          ) : (
            <div className="space-y-3">
              {submission.revisionHistory && submission.revisionHistory.length > 0 ? (
                submission.revisionHistory.map((rev, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700 text-xs space-y-1.5">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-amber-300">Round {rev.round}</span>
                      <span className="text-slate-400">{new Date(rev.submittedAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-slate-300">{rev.feedback}</p>
                    <p className="text-[10px] font-mono text-slate-500">Reviewed by {rev.reviewedBy}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs font-mono text-slate-400 text-center py-6">
                  This is the initial Round 1 submission. No previous revision history.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Action Controls Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onReject(submission.id, feedback)}
            className="px-3.5 py-2 rounded-xl bg-red-950/50 hover:bg-red-900 text-red-300 border border-red-500/30 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
          >
            <XCircle className="h-4 w-4" />
            <span>Reject</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onRequestRevision(submission.id, rubric, feedback, requiredChanges)}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Request Revision</span>
            </button>

            <button
              type="button"
              onClick={() => onApprove(submission.id, rubric, feedback)}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono flex items-center gap-1.5 transition-colors shadow-lg"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Approve Homework</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
