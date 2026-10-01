import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  Users,
  BookOpen,
  FolderGit2,
  FileCheck2,
  Award,
  Bell,
  BarChart3,
  Sliders,
  Search,
  LogOut,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Send,
  Plus,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Terminal,
  FileText,
  Flame,
  KeyRound
} from 'lucide-react';
import { RootMasterSignIn } from '../components/root/RootMasterSignIn';
import { Student360Drawer } from '../components/root/Student360Drawer';
import { HomeworkReviewModal } from '../components/root/HomeworkReviewModal';
import { GlobalSearchModal } from '../components/root/GlobalSearchModal';
import {
  StudentProfileControl,
  StudentBootCampState,
  HomeworkSubmission,
  ProjectSubmission,
  CertificateRecord,
  Announcement,
  RootAuditEvent,
  ReviewRubric
} from '../types/rootControl';
import {
  INITIAL_ROOT_METRICS,
  INITIAL_STUDENTS_LIST,
  INITIAL_HOMEWORK_QUEUE,
  INITIAL_PROJECT_REVIEWS,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_CERTIFICATES
} from '../data/rootControlData';
import { CURRICULUM_DATA } from '../data/curriculumData';

interface RootControlPageProps {
  onNavigateHome: () => void;
  onNavigateVerify: (certId: string) => void;
}

export const RootControlPage: React.FC<RootControlPageProps> = ({ onNavigateHome, onNavigateVerify }) => {
  // Master Authentication Session State
  const [authToken, setAuthToken] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('cz_root_session_token');
    }
    return null;
  });

  const [sessionExpiresAt, setSessionExpiresAt] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('cz_root_session_expiry');
      return stored ? parseInt(stored, 10) : 0;
    }
    return 0;
  });

  // Navigation tab state
  const [activeTab, setActiveTab] = useState<
    | 'dashboard'
    | 'students'
    | 'curriculum'
    | 'teaching'
    | 'homework'
    | 'projects'
    | 'interventions'
    | 'certificates'
    | 'announcements'
    | 'analytics'
    | 'audit'
    | 'settings'
  >('dashboard');

  // Application Data States
  const [students, setStudents] = useState<StudentProfileControl[]>(INITIAL_STUDENTS_LIST);
  const [homeworkQueue, setHomeworkQueue] = useState<HomeworkSubmission[]>(INITIAL_HOMEWORK_QUEUE);
  const [projectReviews, setProjectReviews] = useState<ProjectSubmission[]>(INITIAL_PROJECT_REVIEWS);
  const [certificates, setCertificates] = useState<CertificateRecord[]>(INITIAL_CERTIFICATES);
  const [announcements, setAnnouncements] = useState<Announcement[]>(INITIAL_ANNOUNCEMENTS);
  const [auditLogs, setAuditLogs] = useState<RootAuditEvent[]>([]);

  // Modals and Drawers
  const [selectedStudent, setSelectedStudent] = useState<StudentProfileControl | null>(null);
  const [reviewingHomework, setReviewingHomework] = useState<HomeworkSubmission | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Filters & Sub-states
  const [studentSearch, setStudentSearch] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedCurriculumWeek, setSelectedCurriculumWeek] = useState<number>(1);
  const [revocationTarget, setRevocationTarget] = useState<string | null>(null);
  const [revocationReason, setRevocationReason] = useState<string>('');

  // New announcement form state
  const [newAncTitle, setNewAncTitle] = useState('');
  const [newAncContent, setNewAncContent] = useState('');
  const [newAncTarget, setNewAncTarget] = useState<'ALL' | 'WEEK' | 'COHORT'>('ALL');
  const [newAncTargetValue, setNewAncTargetValue] = useState('');

  // Fetch initial audit logs from server
  useEffect(() => {
    if (authToken) {
      fetch('/api/root/audit')
        .then((res) => res.json())
        .then((data) => {
          if (data && data.logs) {
            setAuditLogs(data.logs);
          }
        })
        .catch(() => {});
    }
  }, [authToken]);

  // Global shortcut: ⌘K or Ctrl+K
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleAuthenticated = (token: string, expiresAt: number) => {
    setAuthToken(token);
    setSessionExpiresAt(expiresAt);
    sessionStorage.setItem('cz_root_session_token', token);
    sessionStorage.setItem('cz_root_session_expiry', expiresAt.toString());
  };

  const handleLogout = async () => {
    if (authToken) {
      try {
        await fetch('/api/root/logout', {
          method: 'POST',
          headers: { Authorization: `Bearer ${authToken}` }
        });
      } catch (e) {}
    }
    setAuthToken(null);
    sessionStorage.removeItem('cz_root_session_token');
    sessionStorage.removeItem('cz_root_session_expiry');
  };

  const recordAudit = async (action: string, target: string, details: string, status: 'SUCCESS' | 'WARNING' | 'FAILED' = 'SUCCESS') => {
    const newEvent: RootAuditEvent = {
      id: 'aud-' + Date.now(),
      timestamp: new Date().toISOString(),
      actor: 'ROOT_COMMANDER',
      action,
      target,
      details,
      ip: '127.0.0.1',
      status
    };

    setAuditLogs((prev) => [newEvent, ...prev]);

    try {
      await fetch('/api/root/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvent)
      });
    } catch (e) {}
  };

  // Student Actions
  const handleUpdateStudentStatus = (studentId: string, newStatus: StudentBootCampState) => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.identity.id === studentId) {
          return { ...s, status: newStatus };
        }
        return s;
      })
    );
    if (selectedStudent && selectedStudent.identity.id === studentId) {
      setSelectedStudent((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
    recordAudit('STUDENT_STATUS_UPDATE', `Student ID: ${studentId}`, `Changed status to ${newStatus}`);
  };

  const handleAddAdminNote = (
    studentId: string,
    content: string,
    type: 'general' | 'intervention' | 'academic' | 'praise'
  ) => {
    const note = {
      id: 'note-' + Date.now(),
      author: 'Instructor Command',
      createdAt: new Date().toISOString(),
      content,
      type
    };

    setStudents((prev) =>
      prev.map((s) => {
        if (s.identity.id === studentId) {
          return { ...s, adminNotes: [note, ...s.adminNotes] };
        }
        return s;
      })
    );

    if (selectedStudent && selectedStudent.identity.id === studentId) {
      setSelectedStudent((prev) =>
        prev ? { ...prev, adminNotes: [note, ...prev.adminNotes] } : null
      );
    }

    recordAudit('ADMIN_NOTE_ADDED', `Student ID: ${studentId}`, `Added ${type} note: "${content.substring(0, 40)}..."`);
  };

  const handleSendInterventionReminder = (studentId: string, message: string) => {
    recordAudit('STUDENT_INTERVENTION', `Student ID: ${studentId}`, `Dispatched in-app reminder: "${message}"`);
  };

  // Homework Review Actions
  const handleApproveHomework = (id: string, rubric: ReviewRubric, feedback: string) => {
    const hw = homeworkQueue.find((h) => h.id === id);
    if (!hw) return;

    setHomeworkQueue((prev) =>
      prev.map((h) => (h.id === id ? { ...h, status: 'APPROVED', rubric, feedbackText: feedback } : h))
    );

    // Update student's approved count
    setStudents((prev) =>
      prev.map((s) => {
        if (s.identity.id === hw.studentId) {
          return {
            ...s,
            assessment: {
              ...s.assessment,
              homeworkApprovedCount: s.assessment.homeworkApprovedCount + 1
            }
          };
        }
        return s;
      })
    );

    recordAudit('HOMEWORK_APPROVED', `Student: ${hw.studentName}`, `Approved Week ${hw.weekNumber} (${hw.lessonTitle})`);
    setReviewingHomework(null);
  };

  const handleRequestRevisionHomework = (
    id: string,
    rubric: ReviewRubric,
    feedback: string,
    requiredChanges: string
  ) => {
    const hw = homeworkQueue.find((h) => h.id === id);
    if (!hw) return;

    const updatedHistory = [
      ...(hw.revisionHistory || []),
      {
        round: hw.round,
        submittedAt: hw.submittedAt,
        status: 'REVISION_REQUESTED',
        feedback,
        reviewedBy: 'Instructor Command'
      }
    ];

    setHomeworkQueue((prev) =>
      prev.map((h) =>
        h.id === id
          ? {
              ...h,
              status: 'REVISION_REQUESTED',
              rubric,
              feedbackText: feedback,
              requiredChanges,
              round: h.round + 1,
              revisionHistory: updatedHistory
            }
          : h
      )
    );

    setStudents((prev) =>
      prev.map((s) => {
        if (s.identity.id === hw.studentId) {
          return {
            ...s,
            status: 'AT_RISK',
            atRiskReasons: Array.from(
              new Set([...(s.atRiskReasons || []), `Homework revision requested on Week ${hw.weekNumber}`])
            )
          };
        }
        return s;
      })
    );

    recordAudit(
      'HOMEWORK_REVISION_REQUESTED',
      `Student: ${hw.studentName}`,
      `Requested Round ${hw.round + 1} revision for Week ${hw.weekNumber}`
    );
    setReviewingHomework(null);
  };

  const handleRejectHomework = (id: string, feedback: string) => {
    const hw = homeworkQueue.find((h) => h.id === id);
    if (!hw) return;

    setHomeworkQueue((prev) =>
      prev.map((h) => (h.id === id ? { ...h, status: 'REJECTED', feedbackText: feedback } : h))
    );

    recordAudit('HOMEWORK_REJECTED', `Student: ${hw.studentName}`, `Rejected submission for Week ${hw.weekNumber}`);
    setReviewingHomework(null);
  };

  // Certificate Issuance Action
  const handleIssueCertificate = async (student: StudentProfileControl) => {
    try {
      const res = await fetch('/api/root/certificates/issue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: student.identity.name,
          studentEmail: student.identity.email,
          program: 'Frontend Development BootCamp (12 Weeks)',
          completionDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
          curriculumStats: `${student.learning.lessonsCompletedCount} Lessons Completed · ${student.assessment.projectsCompletedCount} Projects Verified`
        })
      });

      const data = await res.json();
      if (data && data.certificate) {
        setCertificates((prev) => [data.certificate, ...prev]);
        handleUpdateStudentStatus(student.identity.id, 'CERTIFICATE_ISSUED');
        setStudents((prev) =>
          prev.map((s) => (s.identity.id === student.identity.id ? { ...s, certificateId: data.certificate.id } : s))
        );
        recordAudit('CERTIFICATE_ISSUED', `Student: ${student.identity.name}`, `Minted certificate ${data.certificate.id}`);
      }
    } catch (err) {}
  };

  // Certificate Revocation Action
  const handleRevokeCertificate = async (certId: string, reason: string) => {
    try {
      const res = await fetch('/api/root/certificates/revoke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: certId, reason })
      });
      const data = await res.json();
      if (data && data.certificate) {
        setCertificates((prev) => prev.map((c) => (c.id === certId ? data.certificate : c)));
        recordAudit('CERTIFICATE_REVOKED', `Certificate: ${certId}`, `Revocation reason: ${reason}`, 'WARNING');
        setRevocationTarget(null);
        setRevocationReason('');
      }
    } catch (e) {}
  };

  // Publish Announcement
  const handlePublishAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAncTitle.trim() || !newAncContent.trim()) return;

    const newAnc: Announcement = {
      id: 'anc-' + Date.now(),
      title: newAncTitle.trim(),
      content: newAncContent.trim(),
      target: newAncTarget,
      targetValue: newAncTargetValue || undefined,
      publishedAt: new Date().toISOString(),
      author: 'Head Instructor',
      priority: 'NORMAL'
    };

    setAnnouncements((prev) => [newAnc, ...prev]);
    recordAudit('ANNOUNCEMENT_PUBLISHED', `Target: ${newAncTarget}`, `"${newAnc.title}"`);
    setNewAncTitle('');
    setNewAncContent('');
  };

  // Render Master Login if no active token
  if (!authToken) {
    return <RootMasterSignIn onAuthenticated={handleAuthenticated} onNavigateHome={onNavigateHome} />;
  }

  // Filtered Students list
  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.identity.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.identity.email.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.identity.githubUsername.toLowerCase().includes(studentSearch.toLowerCase());

    if (statusFilter === 'ALL') return matchesSearch;
    return matchesSearch && s.status === statusFilter;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white font-sans">
      {/* Top Command Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-mono font-black text-white text-base shadow-md">
              C
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-white font-mono">
                  CODAZI ROOT CONTROL
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  LIVE
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono">Instructor & Academic Command Center</p>
            </div>
          </div>

          {/* Quick Command Palette Trigger & Session Management */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-xs font-mono text-slate-300 transition-colors"
            >
              <Search className="h-3.5 w-3.5 text-indigo-400" />
              <span>Quick Search...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-900 text-[10px] text-slate-400 border border-slate-700">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onNavigateHome}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Academy View
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-xl border border-red-500/30 bg-red-950/20 hover:bg-red-900/40 text-xs font-mono text-red-300 flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Logout Root</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 flex flex-col md:flex-row gap-6">
        {/* Navigation Sidebar */}
        <aside className="w-full md:w-60 shrink-0 space-y-2">
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            {[
              { id: 'dashboard', label: 'Command Center', icon: BarChart3, count: null },
              { id: 'students', label: 'Students Directory', icon: Users, count: students.length },
              { id: 'curriculum', label: 'Curriculum Control', icon: BookOpen, count: '12 Wks' },
              { id: 'teaching', label: 'Teaching Center', icon: Sparkles, count: 'Cohorts' },
              {
                id: 'homework',
                label: 'Homework Review',
                icon: FileCheck2,
                count: homeworkQueue.filter((h) => h.status === 'PENDING_REVIEW').length,
                urgent: true
              },
              {
                id: 'projects',
                label: 'Project Reviews',
                icon: FolderGit2,
                count: projectReviews.filter((p) => p.status === 'PENDING_REVIEW').length
              },
              {
                id: 'interventions',
                label: 'At-Risk Engine',
                icon: AlertTriangle,
                count: students.filter((s) => s.status === 'AT_RISK').length,
                warning: true
              },
              { id: 'certificates', label: 'Certificates Engine', icon: Award, count: certificates.length },
              { id: 'announcements', label: 'Announcements', icon: Bell, count: announcements.length },
              { id: 'analytics', label: 'Cohort Analytics', icon: BarChart3, count: null },
              { id: 'audit', label: 'Security Audit Log', icon: Terminal, count: auditLogs.length },
              { id: 'settings', label: 'Platform Rules', icon: Sliders, count: null }
            ].map(({ id, label, icon: Icon, count, urgent, warning }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as any)}
                  className={`w-full px-3 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center justify-between transition-colors ${
                    active
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{label}</span>
                  </div>
                  {count !== null && (
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] ${
                        active
                          ? 'bg-indigo-700 text-indigo-100'
                          : urgent
                          ? 'bg-amber-500/20 text-amber-300 font-extrabold'
                          : warning
                          ? 'bg-red-500/20 text-red-300 font-extrabold'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Operational Info */}
          <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-[11px] font-mono text-slate-400 space-y-1">
            <p className="text-slate-300 font-bold">Authenticated Authority</p>
            <p className="text-emerald-400">Master Session: ACTIVE</p>
            <p className="text-slate-500 text-[10px]">Zero Client Secrets Enforced</p>
          </div>
        </aside>

        {/* Content View Area */}
        <main className="flex-1 min-w-0 space-y-6">
          {/* TAB 1: COMMAND CENTER DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Top Level Metric Grid (Matching Requested Numbers) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <p className="text-[10px] font-mono uppercase text-slate-400">Students</p>
                  <p className="text-xl font-black font-mono text-white">
                    {INITIAL_ROOT_METRICS.totalStudents.toLocaleString()}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <p className="text-[10px] font-mono uppercase text-slate-400">Active</p>
                  <p className="text-xl font-black font-mono text-emerald-400">
                    {INITIAL_ROOT_METRICS.activeStudents.toLocaleString()}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-red-500/30 bg-red-950/10 space-y-1">
                  <p className="text-[10px] font-mono uppercase text-red-400">At Risk</p>
                  <p className="text-xl font-black font-mono text-red-400">
                    {INITIAL_ROOT_METRICS.atRiskStudents.toLocaleString()}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-amber-500/30 bg-amber-950/10 space-y-1">
                  <p className="text-[10px] font-mono uppercase text-amber-400">HW to Review</p>
                  <p className="text-xl font-black font-mono text-amber-300">
                    {INITIAL_ROOT_METRICS.homeworkToReview}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <p className="text-[10px] font-mono uppercase text-slate-400">Projects to Review</p>
                  <p className="text-xl font-black font-mono text-cyan-400">
                    {INITIAL_ROOT_METRICS.projectsToReview}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <p className="text-[10px] font-mono uppercase text-slate-400">Completed</p>
                  <p className="text-xl font-black font-mono text-indigo-400">
                    {INITIAL_ROOT_METRICS.completedStudents}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-emerald-500/30 bg-emerald-950/10 space-y-1">
                  <p className="text-[10px] font-mono uppercase text-emerald-400">Certs Issued</p>
                  <p className="text-xl font-black font-mono text-emerald-300">
                    {INITIAL_ROOT_METRICS.certificatesIssued}
                  </p>
                </div>
              </div>

              {/* Actionable Widgets: Needs Attention & Homework Review Queue */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Students Needing Attention Widget */}
                <div className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-400" />
                      <h3 className="text-xs font-mono font-bold text-white uppercase">Students Needing Attention</h3>
                    </div>
                    <button
                      onClick={() => {
                        setStatusFilter('AT_RISK');
                        setActiveTab('students');
                      }}
                      className="text-xs font-mono text-indigo-400 hover:text-indigo-300"
                    >
                      View All At-Risk →
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {students
                      .filter((s) => s.status === 'AT_RISK')
                      .slice(0, 3)
                      .map((student) => (
                        <div
                          key={student.identity.id}
                          className="p-3 rounded-2xl bg-slate-800/40 border border-red-500/20 flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={student.identity.avatarUrl}
                              alt=""
                              className="h-9 w-9 rounded-xl object-cover"
                            />
                            <div>
                              <p className="text-xs font-bold text-white">{student.identity.name}</p>
                              <p className="text-[11px] text-red-300">
                                {student.atRiskReasons?.[0] || 'Inactivity detected'}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSelectedStudent(student)}
                              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-white border border-slate-700"
                            >
                              Inspect 360°
                            </button>
                            <button
                              onClick={() =>
                                handleSendInterventionReminder(
                                  student.identity.id,
                                  `Hi ${student.identity.name}, instructor assistance is available for your current lesson.`
                                )
                              }
                              className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-[11px] font-mono font-bold text-slate-950"
                            >
                              Intervene
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Urgent Homework Review Queue */}
                <div className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileCheck2 className="h-4 w-4 text-amber-400" />
                      <h3 className="text-xs font-mono font-bold text-white uppercase">Homework Review Queue</h3>
                    </div>
                    <button onClick={() => setActiveTab('homework')} className="text-xs font-mono text-indigo-400">
                      Open Queue →
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {homeworkQueue
                      .filter((h) => h.status === 'PENDING_REVIEW')
                      .slice(0, 3)
                      .map((hw) => (
                        <div
                          key={hw.id}
                          className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700 flex items-center justify-between gap-3"
                        >
                          <div>
                            <p className="text-xs font-bold text-white">
                              Week {hw.weekNumber}: {hw.lessonTitle}
                            </p>
                            <p className="text-[11px] font-mono text-slate-400">
                              Student: {hw.studentName} · Round {hw.round}
                            </p>
                          </div>

                          <button
                            onClick={() => setReviewingHomework(hw)}
                            className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-mono font-bold text-xs"
                          >
                            Review
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Completion Pipeline Overview */}
              <div className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
                <h3 className="text-xs font-mono font-bold text-slate-300 uppercase">
                  End-to-End BootCamp Pipeline Flow
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-xs font-mono">
                  {[
                    { stage: 'Enrollment', count: '1,248' },
                    { stage: 'Git Mastery', count: '1,120' },
                    { stage: 'HTML/CSS', count: '980' },
                    { stage: 'JavaScript', count: '840' },
                    { stage: 'React.js', count: '610' },
                    { stage: 'Full-Stack', count: '450' },
                    { stage: 'Capstone', count: '310' },
                    { stage: 'Graduated', count: '241' }
                  ].map(({ stage, count }, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700 space-y-0.5">
                      <p className="text-[10px] text-slate-400">{stage}</p>
                      <p className="text-sm font-bold text-indigo-300">{count}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STUDENTS DIRECTORY */}
          {activeTab === 'students' && (
            <div className="space-y-4">
              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search student name, email, GitHub..."
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 font-mono focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                  {['ALL', 'ACTIVE', 'AT_RISK', 'CERTIFICATE_ELIGIBLE', 'CERTIFICATE_ISSUED'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap ${
                        statusFilter === st
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Students Table */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="border-b border-slate-800 bg-slate-950/60 text-slate-400">
                    <tr>
                      <th className="p-3.5">Learner</th>
                      <th className="p-3.5">Curriculum Progress</th>
                      <th className="p-3.5">Assessments</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {filteredStudents.map((s) => (
                      <tr key={s.identity.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3.5">
                          <div className="flex items-center gap-3">
                            <img
                              src={s.identity.avatarUrl}
                              alt=""
                              className="h-8 w-8 rounded-xl object-cover"
                            />
                            <div>
                              <p className="font-bold text-white text-xs">{s.identity.name}</p>
                              <p className="text-[10px] text-slate-400">@{s.identity.githubUsername}</p>
                            </div>
                          </div>
                        </td>

                        <td className="p-3.5">
                          <p className="text-white font-bold">
                            Week {s.learning.currentWeek} ({s.learning.overallProgressPct}%)
                          </p>
                          <p className="text-[10px] text-slate-400 truncate max-w-xs">
                            {s.learning.currentLessonTitle}
                          </p>
                        </td>

                        <td className="p-3.5">
                          <span className="text-emerald-400">{s.assessment.homeworkApprovedCount} HW Approved</span>
                          <span className="text-slate-400"> · {s.assessment.projectsCompletedCount} Projects</span>
                        </td>

                        <td className="p-3.5">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              s.status === 'AT_RISK'
                                ? 'bg-red-500/20 text-red-300'
                                : s.status === 'CERTIFICATE_ISSUED'
                                ? 'bg-emerald-500/20 text-emerald-300'
                                : s.status === 'CERTIFICATE_ELIGIBLE'
                                ? 'bg-cyan-500/20 text-cyan-300'
                                : 'bg-indigo-500/20 text-indigo-300'
                            }`}
                          >
                            {s.status}
                          </span>
                        </td>

                        <td className="p-3.5 text-right">
                          <button
                            onClick={() => setSelectedStudent(s)}
                            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
                          >
                            Inspect 360°
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: CURRICULUM CONTROL */}
          {activeTab === 'curriculum' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-white">Curriculum Hierarchy Control</h2>
                  <p className="text-xs font-mono text-slate-400">
                    Inspect learning objectives, attached homework rubrics, and lessons across all 12 weeks.
                  </p>
                </div>
              </div>

              {/* Week selector pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {CURRICULUM_DATA.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setSelectedCurriculumWeek(w.order)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap ${
                      selectedCurriculumWeek === w.order
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Week {w.order}
                  </button>
                ))}
              </div>

              {/* Selected Week Lesson Details */}
              {(() => {
                const currentWeekData =
                  CURRICULUM_DATA.find((w) => w.order === selectedCurriculumWeek) || CURRICULUM_DATA[0];
                return (
                  <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase">
                        Active Curriculum Week {currentWeekData.order}
                      </span>
                      <h3 className="text-lg font-bold text-white">{currentWeekData.title.en}</h3>
                      <p className="text-xs text-slate-400 mt-1">{currentWeekData.description.en}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-mono font-bold text-slate-300 uppercase">
                        Lessons in this Module ({currentWeekData.lessons.length})
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentWeekData.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/80 space-y-1.5"
                          >
                            <div className="flex items-center justify-between text-xs font-mono">
                              <span className="font-bold text-indigo-300">{lesson.id}</span>
                              <span className="text-slate-400">{lesson.durationMinutes} mins</span>
                            </div>
                            <p className="text-xs font-bold text-white">{lesson.title.en}</p>
                            <p className="text-[11px] text-slate-400 line-clamp-2">{lesson.description.en}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* TAB 4: TEACHING CENTER */}
          {activeTab === 'teaching' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-base font-bold text-white">Instructor Teaching Center</h2>
                <p className="text-xs font-mono text-slate-400">
                  Cohort management, lecture prep notes, and proactive intervention guidelines.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <h3 className="text-xs font-mono font-bold text-indigo-400 uppercase">Active Cohorts</h3>
                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-between text-xs font-mono">
                      <div>
                        <p className="font-bold text-white">Cohort 2026-A (Senior Frontend)</p>
                        <p className="text-slate-400 text-[10px]">Current: Week 12 · 64 Students</p>
                      </div>
                      <span className="text-emerald-400 font-bold">98% Retention</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-between text-xs font-mono">
                      <div>
                        <p className="font-bold text-white">Cohort 2026-B (Foundations)</p>
                        <p className="text-slate-400 text-[10px]">Current: Week 3 · 128 Students</p>
                      </div>
                      <span className="text-cyan-400 font-bold">89% Retention</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <h3 className="text-xs font-mono font-bold text-amber-400 uppercase">Common Bottlenecks Detected</h3>
                  <div className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700">
                      <p className="text-amber-300 font-bold">Week 3 Media Query Breakpoints</p>
                      <p className="text-[11px] text-slate-400">
                        17 students have required revisions due to horizontal scroll on 320px screens.
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700">
                      <p className="text-amber-300 font-bold">Week 8 React useEffect Dependency Arrays</p>
                      <p className="text-[11px] text-slate-400">
                        Students frequently creating infinite loops when mutating state in effect callbacks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: HOMEWORK REVIEW QUEUE */}
          {activeTab === 'homework' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-white">Homework Review Center</h2>
                  <p className="text-xs font-mono text-slate-400">
                    Multi-round rubric assessment and feedback dispatch.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {homeworkQueue.map((hw) => (
                  <div
                    key={hw.id}
                    className="p-4 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                            hw.status === 'PENDING_REVIEW'
                              ? 'bg-amber-500/20 text-amber-300'
                              : hw.status === 'APPROVED'
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-red-500/20 text-red-300'
                          }`}
                        >
                          {hw.status}
                        </span>
                        <span className="text-xs font-mono text-slate-400">Round {hw.round}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white">
                        Week {hw.weekNumber}: {hw.lessonTitle}
                      </h3>
                      <p className="text-xs font-mono text-slate-400">
                        Student: <strong className="text-slate-200">{hw.studentName}</strong>
                      </p>
                    </div>

                    <button
                      onClick={() => setReviewingHomework(hw)}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs self-start sm:self-center"
                    >
                      {hw.status === 'PENDING_REVIEW' ? 'Review Submission' : 'Inspect Review'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: PROJECT REVIEWS */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div>
                <h2 className="text-base font-bold text-white">Project Review & Capstone Center</h2>
                <p className="text-xs font-mono text-slate-400">
                  Verify production deployments, Git commit hygiene, and responsive standards.
                </p>
              </div>

              <div className="space-y-3">
                {projectReviews.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300">
                          Project #{proj.projectNumber} · {proj.difficulty}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{proj.stack}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white">{proj.projectTitle}</h3>
                      <p className="text-xs font-mono text-slate-400">Student: {proj.studentName}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={proj.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a
                        href={proj.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: AT-RISK ENGINE */}
          {activeTab === 'interventions' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-base font-bold text-white">Student Intervention / At-Risk Engine</h2>
                <p className="text-xs font-mono text-slate-400">
                  Automated heuristics detect inactivity, repeated revision loops, and missed milestones.
                </p>
              </div>

              <div className="space-y-3">
                {students
                  .filter((s) => s.status === 'AT_RISK')
                  .map((student) => (
                    <div
                      key={student.identity.id}
                      className="p-4 rounded-3xl bg-slate-900/80 border border-red-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-500/20 text-red-300">
                            FLAGGED: AT_RISK
                          </span>
                          <span className="text-xs font-mono text-slate-400">{student.identity.name}</span>
                        </div>
                        <ul className="space-y-0.5 text-xs text-red-200">
                          {student.atRiskReasons?.map((r, i) => (
                            <li key={i}>• {r}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedStudent(student)}
                          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-white"
                        >
                          Open 360°
                        </button>
                        <button
                          onClick={() =>
                            handleSendInterventionReminder(
                              student.identity.id,
                              `Instructor alert: We are here to support you with your current module.`
                            )
                          }
                          className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-xs font-mono font-bold text-slate-950"
                        >
                          Send In-App Reminder
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 8: COMPLETION & CERTIFICATES ENGINE */}
          {activeTab === 'certificates' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-white">Completion & Certificate Engine</h2>
                  <p className="text-xs font-mono text-slate-400">
                    Rule-based eligibility verification, sequential minting, and public registry status.
                  </p>
                </div>
              </div>

              {/* Certificate Eligible Students Pending Minting */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold text-indigo-300 uppercase">
                  Graduation Ready Students ({students.filter((s) => s.status === 'CERTIFICATE_ELIGIBLE').length})
                </h3>

                {students
                  .filter((s) => s.status === 'CERTIFICATE_ELIGIBLE')
                  .map((student) => (
                    <div
                      key={student.identity.id}
                      className="p-4 rounded-3xl bg-slate-900/80 border border-cyan-500/30 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-xs font-bold text-white">{student.identity.name}</p>
                        <p className="text-[11px] font-mono text-cyan-300">
                          100% Curriculum Requirements Satisfied · Ready to Mint
                        </p>
                      </div>

                      <button
                        onClick={() => handleIssueCertificate(student)}
                        className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-bold text-xs flex items-center gap-1.5"
                      >
                        <Award className="h-4 w-4" />
                        <span>Issue Official Certificate</span>
                      </button>
                    </div>
                  ))}
              </div>

              {/* Minted Certificates List */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold text-slate-300 uppercase">
                  Minted Certificates Registry ({certificates.length})
                </h3>

                {certificates.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-extrabold text-indigo-300">{c.id}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                            c.status === 'VALID' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                          }`}
                        >
                          {c.status}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-white mt-1">{c.studentName}</p>
                      <p className="text-xs font-mono text-slate-400">{c.program} · Completed {c.completionDate}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onNavigateVerify(c.id)}
                        className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs flex items-center gap-1"
                      >
                        <span>Public Verification</span>
                        <ExternalLink className="h-3 w-3" />
                      </button>

                      {c.status === 'VALID' && (
                        <button
                          onClick={() => setRevocationTarget(c.id)}
                          className="px-3 py-1.5 rounded-xl border border-red-500/30 bg-red-950/20 hover:bg-red-900/40 text-red-300 font-mono text-xs"
                        >
                          Revoke
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Revocation Modal Dialog */}
              {revocationTarget && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
                  <div className="p-6 rounded-3xl bg-slate-900 border border-red-500/40 max-w-md w-full space-y-4">
                    <h3 className="text-base font-bold text-red-300">Revoke Credential {revocationTarget}</h3>
                    <p className="text-xs text-slate-300">
                      Revocation is an auditable action. Please specify the academic or disciplinary reason:
                    </p>
                    <textarea
                      value={revocationReason}
                      onChange={(e) => setRevocationReason(e.target.value)}
                      placeholder="Reason for revocation..."
                      rows={3}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setRevocationTarget(null)}
                        className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-mono"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleRevokeCertificate(revocationTarget, revocationReason)}
                        className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold"
                      >
                        Confirm Revocation
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 9: ANNOUNCEMENTS */}
          {activeTab === 'announcements' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-base font-bold text-white">Broadcast Announcements</h2>
                <p className="text-xs font-mono text-slate-400">Target messages across cohorts, weeks, or all learners.</p>
              </div>

              {/* Create Announcement Form */}
              <form onSubmit={handlePublishAnnouncement} className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-3">
                <h3 className="text-xs font-mono font-bold text-slate-300 uppercase">Compose Announcement</h3>
                <input
                  type="text"
                  placeholder="Announcement title..."
                  value={newAncTitle}
                  onChange={(e) => setNewAncTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-mono"
                />
                <textarea
                  placeholder="Content of announcement..."
                  value={newAncContent}
                  onChange={(e) => setNewAncContent(e.target.value)}
                  rows={2}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-sans"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <select
                      value={newAncTarget}
                      onChange={(e) => setNewAncTarget(e.target.value as any)}
                      className="p-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs font-mono text-slate-300"
                    >
                      <option value="ALL">All Students</option>
                      <option value="WEEK">Specific Week</option>
                      <option value="COHORT">Specific Cohort</option>
                    </select>
                    {newAncTarget !== 'ALL' && (
                      <input
                        type="text"
                        placeholder={newAncTarget === 'WEEK' ? 'e.g. Week 4' : 'e.g. Cohort 2026-A'}
                        value={newAncTargetValue}
                        onChange={(e) => setNewAncTargetValue(e.target.value)}
                        className="p-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs font-mono text-white"
                      />
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs"
                  >
                    Publish Broadcast
                  </button>
                </div>
              </form>

              {/* Published Announcements List */}
              <div className="space-y-3">
                {announcements.map((anc) => (
                  <div key={anc.id} className="p-4 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300">
                          {anc.target} {anc.targetValue ? `(${anc.targetValue})` : ''}
                        </span>
                        <h4 className="text-xs font-bold text-white">{anc.title}</h4>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {new Date(anc.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">{anc.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: COHORT ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-base font-bold text-white">Academic Cohort Analytics</h2>
                <p className="text-xs font-mono text-slate-400">Completion retention and review turnaround times.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Avg Review Turnaround</p>
                  <p className="text-2xl font-bold font-mono text-emerald-400">3.8 Hours</p>
                  <p className="text-[10px] text-slate-500 font-mono">Target: &lt; 12 Hours</p>
                </div>
                <div className="p-4 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Homework Approval Rate</p>
                  <p className="text-2xl font-bold font-mono text-cyan-400">92.4%</p>
                  <p className="text-[10px] text-slate-500 font-mono">First round pass: 64%</p>
                </div>
                <div className="p-4 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <p className="text-[10px] font-mono text-slate-400 uppercase">BootCamp Graduation Rate</p>
                  <p className="text-2xl font-bold font-mono text-indigo-400">88.7%</p>
                  <p className="text-[10px] text-slate-500 font-mono">Top percentile in modern bootcamps</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 11: SECURITY AUDIT LOG */}
          {activeTab === 'audit' && (
            <div className="space-y-4">
              <div>
                <h2 className="text-base font-bold text-white">Append-Only Security Audit Log</h2>
                <p className="text-xs font-mono text-slate-400">
                  Immutable record of master authentications, student interventions, and credential mints.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="border-b border-slate-800 bg-slate-950/60 text-slate-400">
                    <tr>
                      <th className="p-3">Timestamp</th>
                      <th className="p-3">Actor</th>
                      <th className="p-3">Action</th>
                      <th className="p-3">Target</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {auditLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-800/30">
                        <td className="p-3 text-slate-400 whitespace-nowrap">
                          {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                        </td>
                        <td className="p-3 font-bold text-slate-300">{log.actor}</td>
                        <td className="p-3 font-bold text-indigo-400">{log.action}</td>
                        <td className="p-3 text-slate-300 max-w-xs truncate">{log.target}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              log.status === 'SUCCESS'
                                ? 'bg-emerald-500/10 text-emerald-400'
                                : 'bg-amber-500/10 text-amber-400'
                            }`}
                          >
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 12: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
              <h2 className="text-base font-bold text-white">BootCamp Platform Rules</h2>
              <div className="space-y-3 text-xs font-mono text-slate-300">
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span>Minimum Homework Pass Rubric</span>
                  <span className="font-bold text-indigo-400">Score &gt;= 3.5 / 5.0</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span>Auto-Intervention Inactivity Trigger</span>
                  <span className="font-bold text-amber-400">7 Days</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span>Root Master Session Expiration</span>
                  <span className="font-bold text-emerald-400">8 Hours</span>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Student 360° Inspector Drawer */}
      <Student360Drawer
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
        onUpdateStatus={handleUpdateStudentStatus}
        onAddNote={handleAddAdminNote}
        onSendInterventionReminder={handleSendInterventionReminder}
        onViewCertificate={(certId) => onNavigateVerify(certId)}
      />

      {/* Homework Review Modal */}
      <HomeworkReviewModal
        submission={reviewingHomework}
        onClose={() => setReviewingHomework(null)}
        onApprove={handleApproveHomework}
        onRequestRevision={handleRequestRevisionHomework}
        onReject={handleRejectHomework}
      />

      {/* Global Command Search (⌘K / Ctrl+K) */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        students={students}
        homeworkQueue={homeworkQueue}
        projectReviews={projectReviews}
        certificates={certificates}
        onSelectStudent={(s) => setSelectedStudent(s)}
        onSelectHomework={(h) => setReviewingHomework(h)}
        onSelectProject={(p) => setActiveTab('projects')}
        onSelectCertificate={(c) => onNavigateVerify(c.id)}
      />
    </div>
  );
};
