import React, { useState } from 'react';
import {
  X,
  User,
  BookOpen,
  FolderGit2,
  FileText,
  Award,
  Clock,
  Github,
  AlertTriangle,
  CheckCircle2,
  Send,
  Plus,
  Flame,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { StudentProfileControl, StudentBootCampState } from '../../types/rootControl';

interface Student360DrawerProps {
  student: StudentProfileControl | null;
  onClose: () => void;
  onUpdateStatus: (studentId: string, newStatus: StudentBootCampState) => void;
  onAddNote: (studentId: string, noteContent: string, type: 'general' | 'intervention' | 'academic' | 'praise') => void;
  onSendInterventionReminder: (studentId: string, message: string) => void;
  onViewCertificate?: (certId: string) => void;
}

export const Student360Drawer: React.FC<Student360DrawerProps> = ({
  student,
  onClose,
  onUpdateStatus,
  onAddNote,
  onSendInterventionReminder,
  onViewCertificate
}) => {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'learning' | 'homework' | 'projects' | 'github' | 'notes'
  >('overview');
  const [newNote, setNewNote] = useState('');
  const [noteType, setNoteType] = useState<'general' | 'intervention' | 'academic' | 'praise'>('intervention');
  const [reminderSent, setReminderSent] = useState(false);

  if (!student) return null;

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    onAddNote(student.identity.id, newNote.trim(), noteType);
    setNewNote('');
  };

  const handleTriggerReminder = () => {
    onSendInterventionReminder(
      student.identity.id,
      `Hello ${student.identity.name}, your instructor noticed you might need help with Week ${student.learning.currentWeek}. Let's get you back on track!`
    );
    setReminderSent(true);
    setTimeout(() => setReminderSent(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl bg-slate-900 border-l border-slate-800 text-slate-100 flex flex-col h-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950/60 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={student.identity.avatarUrl}
              alt=""
              className="h-12 w-12 rounded-2xl object-cover border border-slate-700"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white">{student.identity.name}</h2>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                    student.status === 'AT_RISK'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                      : student.status === 'CERTIFICATE_ISSUED'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : student.status === 'CERTIFICATE_ELIGIBLE'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  }`}
                >
                  {student.status}
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400">
                {student.identity.email} · {student.cohort}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 border-b border-slate-800 bg-slate-950/30 overflow-x-auto text-xs font-mono font-bold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('learning')}
            className={`py-3 px-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'learning'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Learning & Progress
          </button>
          <button
            onClick={() => setActiveTab('homework')}
            className={`py-3 px-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'homework'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Homework ({student.assessment.homeworkSubmittedCount})
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3 px-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'projects'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Projects ({student.assessment.projectsCompletedCount})
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`py-3 px-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'github'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            GitHub
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`py-3 px-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'notes'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Instructor Notes ({student.adminNotes.length})
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Action Intervention Bar */}
          <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-indigo-300 uppercase">Instructor Intervention</span>
              <p className="text-xs text-slate-300">Take immediate action to guide this learner's journey.</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleTriggerReminder}
                disabled={reminderSent}
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{reminderSent ? 'Reminder Dispatched!' : 'Send Reminder'}</span>
              </button>

              <select
                value={student.status}
                onChange={(e) => onUpdateStatus(student.identity.id, e.target.value as StudentBootCampState)}
                className="px-2.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-white focus:outline-none"
              >
                <option value="ACTIVE">ACTIVE</option>
                <option value="AT_RISK">AT_RISK</option>
                <option value="PAUSED">PAUSED</option>
                <option value="CERTIFICATE_ELIGIBLE">CERTIFICATE_ELIGIBLE</option>
                <option value="CERTIFICATE_ISSUED">CERTIFICATE_ISSUED</option>
              </select>
            </div>
          </div>

          {/* At-Risk Warning Box if flagged */}
          {student.atRiskReasons && student.atRiskReasons.length > 0 && (
            <div className="p-4 rounded-2xl bg-red-950/40 border border-red-500/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-300">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <span>AT-RISK ENGINE DETECTION</span>
              </div>
              <ul className="space-y-1 text-xs text-red-200">
                {student.atRiskReasons.map((reason, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Progress Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-0.5">
                  <p className="text-[10px] font-mono text-slate-400">Current Week</p>
                  <p className="text-xl font-bold font-mono text-indigo-400">Week {student.learning.currentWeek}</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-0.5">
                  <p className="text-[10px] font-mono text-slate-400">Progress</p>
                  <p className="text-xl font-bold font-mono text-cyan-400">{student.learning.overallProgressPct}%</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-0.5">
                  <p className="text-[10px] font-mono text-slate-400">Streak</p>
                  <p className="text-xl font-bold font-mono text-amber-400 flex items-center gap-1">
                    <Flame className="h-4 w-4 fill-amber-400" />
                    <span>{student.learning.streakDays}d</span>
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-0.5">
                  <p className="text-[10px] font-mono text-slate-400">Study Hours</p>
                  <p className="text-xl font-bold font-mono text-emerald-400">{student.learning.totalStudyHours}h</p>
                </div>
              </div>

              {/* Current Learning Focus */}
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700 space-y-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Current Learning Focus</h4>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-white">{student.learning.currentLessonTitle}</p>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{student.learning.lastLearningActivity}</p>
                  </div>
                  <span className="text-xs font-mono text-indigo-400 font-bold">
                    {student.learning.lessonsCompletedCount} / {student.learning.totalLessons} Lessons
                  </span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full transition-all"
                    style={{ width: `${student.learning.overallProgressPct}%` }}
                  />
                </div>
              </div>

              {/* Certificate status if issued */}
              {student.certificateId && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Award className="h-6 w-6 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-emerald-300">Graduation Certificate Issued</p>
                      <p className="text-xs font-mono text-slate-300">ID: {student.certificateId}</p>
                    </div>
                  </div>
                  {onViewCertificate && (
                    <button
                      onClick={() => onViewCertificate(student.certificateId!)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1"
                    >
                      <span>Verify Public</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'learning' && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">12-Week Journey Milestones</h4>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((wk) => {
                  const isDone = wk < student.learning.currentWeek;
                  const isCurrent = wk === student.learning.currentWeek;
                  return (
                    <div
                      key={wk}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isDone
                          ? 'bg-slate-800/30 border-slate-700 text-slate-300'
                          : isCurrent
                          ? 'bg-indigo-600/10 border-indigo-500/40 text-indigo-200'
                          : 'bg-slate-900 border-slate-800 text-slate-500'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 font-mono">
                        {isDone ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                        ) : isCurrent ? (
                          <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse shrink-0" />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-slate-600 shrink-0" />
                        )}
                        <span className="font-bold">Week {wk}</span>
                      </div>
                      <span className="text-[11px] font-mono">
                        {isDone ? 'Completed 100%' : isCurrent ? 'In Progress' : 'Locked'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'github' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700 space-y-3">
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-white" />
                  <span className="font-mono text-sm font-bold text-white">@{student.identity.githubUsername}</span>
                </div>
                <p className="text-xs text-slate-300">
                  Linked repository activity synced with automated branch commits and PR verification checks.
                </p>
                <a
                  href={`https://github.com/${student.identity.githubUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300"
                >
                  <span>View Public GitHub Profile</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4">
              <form onSubmit={handleCreateNote} className="space-y-2 p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">Add Instructor Note</span>
                  <select
                    value={noteType}
                    onChange={(e) => setNoteType(e.target.value as any)}
                    className="bg-slate-800 text-[11px] font-mono border border-slate-700 rounded-lg px-2 py-1 text-slate-300"
                  >
                    <option value="intervention">Intervention</option>
                    <option value="academic">Academic</option>
                    <option value="general">General</option>
                    <option value="praise">Praise</option>
                  </select>
                </div>
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Record observation, student discussion, or action plan..."
                  rows={2}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 font-sans focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Save Note</span>
                </button>
              </form>

              <div className="space-y-2">
                {student.adminNotes.length === 0 ? (
                  <p className="text-xs font-mono text-slate-400 text-center py-4">No notes recorded yet.</p>
                ) : (
                  student.adminNotes.map((note) => (
                    <div key={note.id} className="p-3 rounded-xl bg-slate-800/40 border border-slate-700 text-xs space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span className="font-bold text-indigo-300">{note.author}</span>
                        <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                      </div>
                      <p className="text-slate-200">{note.content}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
