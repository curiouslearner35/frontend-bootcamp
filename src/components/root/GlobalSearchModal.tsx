import React, { useState, useEffect } from 'react';
import { Search, User, BookOpen, FolderGit2, Award, FileText, X, ArrowRight } from 'lucide-react';
import { StudentProfileControl, HomeworkSubmission, ProjectSubmission, CertificateRecord } from '../../types/rootControl';
import { CURRICULUM_DATA } from '../../data/curriculumData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  students: StudentProfileControl[];
  homeworkQueue: HomeworkSubmission[];
  projectReviews: ProjectSubmission[];
  certificates: CertificateRecord[];
  onSelectStudent: (student: StudentProfileControl) => void;
  onSelectHomework: (hw: HomeworkSubmission) => void;
  onSelectProject: (proj: ProjectSubmission) => void;
  onSelectCertificate: (cert: CertificateRecord) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  students,
  homeworkQueue,
  projectReviews,
  certificates,
  onSelectStudent,
  onSelectHomework,
  onSelectProject,
  onSelectCertificate
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        // Toggle or open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingStudents = q
    ? students.filter(
        (s) =>
          s.identity.name.toLowerCase().includes(q) ||
          s.identity.email.toLowerCase().includes(q) ||
          s.identity.githubUsername.toLowerCase().includes(q)
      )
    : [];

  const matchingHomework = q
    ? homeworkQueue.filter(
        (h) =>
          h.studentName.toLowerCase().includes(q) ||
          h.lessonTitle.toLowerCase().includes(q) ||
          h.weekTitle.toLowerCase().includes(q)
      )
    : [];

  const matchingProjects = q
    ? projectReviews.filter(
        (p) =>
          p.projectTitle.toLowerCase().includes(q) ||
          p.studentName.toLowerCase().includes(q) ||
          p.stack.toLowerCase().includes(q)
      )
    : [];

  const matchingCertificates = q
    ? certificates.filter(
        (c) =>
          c.id.toLowerCase().includes(q) ||
          c.studentName.toLowerCase().includes(q) ||
          c.program.toLowerCase().includes(q)
      )
    : [];

  const matchingLessons = q
    ? CURRICULUM_DATA.flatMap((w) => w.lessons).filter((l) =>
        l.title.en.toLowerCase().includes(q) || l.description.en.toLowerCase().includes(q)
      )
    : [];

  const totalMatches =
    matchingStudents.length +
    matchingHomework.length +
    matchingProjects.length +
    matchingCertificates.length +
    matchingLessons.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900 text-slate-100 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="h-5 w-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            placeholder="Type to search students, homework, projects, certificates, lessons..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none text-white placeholder-slate-500 text-sm font-mono focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 hover:text-white text-slate-400">
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded-lg border border-slate-700 text-[11px] font-mono text-slate-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1">
          {!q ? (
            <div className="p-8 text-center text-xs font-mono text-slate-400 space-y-2">
              <p>Quick search across the entire BootCamp ecosystem:</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-indigo-300">
                <span className="px-2 py-1 rounded-lg bg-slate-800 border border-slate-700">Student Names</span>
                <span className="px-2 py-1 rounded-lg bg-slate-800 border border-slate-700">GitHub Usernames</span>
                <span className="px-2 py-1 rounded-lg bg-slate-800 border border-slate-700">Certificate IDs (CZ-...)</span>
                <span className="px-2 py-1 rounded-lg bg-slate-800 border border-slate-700">Homework & Projects</span>
              </div>
            </div>
          ) : totalMatches === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-slate-400">
              No results found for "{query}".
            </div>
          ) : (
            <div className="space-y-4">
              {/* Students Results */}
              {matchingStudents.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-indigo-400" />
                    <span>Students ({matchingStudents.length})</span>
                  </p>
                  <div className="space-y-1">
                    {matchingStudents.map((s) => (
                      <div
                        key={s.identity.id}
                        onClick={() => {
                          onSelectStudent(s);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-indigo-600/20 border border-slate-700 hover:border-indigo-500/50 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={s.identity.avatarUrl}
                            alt=""
                            className="h-7 w-7 rounded-lg object-cover"
                          />
                          <div>
                            <p className="text-xs font-bold text-white">{s.identity.name}</p>
                            <p className="text-[10px] font-mono text-slate-400">
                              @{s.identity.githubUsername} · {s.identity.email}
                            </p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-slate-700 text-[10px] font-mono font-bold text-indigo-300">
                          {s.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Homework Queue Results */}
              {matchingHomework.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5 text-amber-400" />
                    <span>Homework Submissions ({matchingHomework.length})</span>
                  </p>
                  <div className="space-y-1">
                    {matchingHomework.map((h) => (
                      <div
                        key={h.id}
                        onClick={() => {
                          onSelectHomework(h);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-amber-600/20 border border-slate-700 hover:border-amber-500/50 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <p className="text-xs font-bold text-white">
                            Week {h.weekNumber}: {h.lessonTitle}
                          </p>
                          <p className="text-[10px] font-mono text-slate-400">Student: {h.studentName}</p>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 text-[10px] font-mono font-bold">
                          {h.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects Results */}
              {matchingProjects.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <FolderGit2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Project Reviews ({matchingProjects.length})</span>
                  </p>
                  <div className="space-y-1">
                    {matchingProjects.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onSelectProject(p);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-emerald-600/20 border border-slate-700 hover:border-emerald-500/50 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <p className="text-xs font-bold text-white">
                            #{p.projectNumber} {p.projectTitle}
                          </p>
                          <p className="text-[10px] font-mono text-slate-400">Student: {p.studentName}</p>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 text-[10px] font-mono font-bold">
                          {p.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certificates Results */}
              {matchingCertificates.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Certificates ({matchingCertificates.length})</span>
                  </p>
                  <div className="space-y-1">
                    {matchingCertificates.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => {
                          onSelectCertificate(c);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-cyan-600/20 border border-slate-700 hover:border-cyan-500/50 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <p className="text-xs font-bold font-mono text-cyan-300">{c.id}</p>
                          <p className="text-[10px] text-slate-400">Recipient: {c.studentName}</p>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-[10px] font-mono font-bold">
                          {c.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
