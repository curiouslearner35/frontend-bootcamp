import React, { useState, useEffect, useMemo } from 'react';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { PROJECTS_DATA } from '../data/projectsData';
import { UserProfile, Language, ThemeMode } from '../types';
import { t } from '../i18n/translations';
import {
  Terminal,
  GitBranch,
  CheckCircle2,
  Sparkles,
  BookOpen,
  FolderGit2,
  Layers,
  Award,
  ArrowRight,
  Globe,
  ShieldCheck,
  Zap,
  ChevronDown,
  ChevronUp,
  Search,
  Clock,
  Users,
  Code,
  Laptop,
  Play,
  Star,
  ExternalLink,
  Flame,
  Sun,
  Moon
} from 'lucide-react';

interface PromotionalPageProps {
  user: UserProfile | null;
  language: Language;
  theme: ThemeMode;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
  onNavigateToApp: (tab?: 'home' | 'syllabus' | 'projects' | 'forum' | 'profile') => void;
  onOpenAuth: () => void;
}

export const PromotionalPage: React.FC<PromotionalPageProps> = ({
  user,
  language,
  theme,
  onToggleLanguage,
  onToggleTheme,
  onNavigateToApp,
  onOpenAuth
}) => {
  const [selectedWeekId, setSelectedWeekId] = useState<string>('week-0');
  const [projectCategoryFilter, setProjectCategoryFilter] = useState<string>('all');
  const [projectSearchQuery, setProjectSearchQuery] = useState<string>('');
  const [expandedWeekId, setExpandedWeekId] = useState<string | null>('week-0');

  // Inject SEO Metadata & Schema.org JSON-LD structured data on mount
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Codazi BootCamp – 12-Week Full-Stack Web Development Bootcamp';

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const originalMetaDesc = metaDescription?.getAttribute('content') || '';
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Master Web Development in 3 Months with Codazi BootCamp. 12 structured weeks, 180+ lessons, and 30+ real portfolio projects. Learn Git, JavaScript, React, Node, and PWA.'
    );

    // Schema.org JSON-LD
    const scriptId = 'json-ld-promotional-bootcamp';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      'name': 'Codazi 12-Week Full-Stack Web Development BootCamp',
      'description':
        'A comprehensive 12-week developer bootcamp with 180+ lessons and 30+ real-world projects covering Git, HTML5, CSS3, ES6+ JavaScript, React, Redux, Node.js, and Cloud Deployment.',
      'provider': {
        '@type': 'EducationalOrganization',
        'name': 'Codazi Academy',
        'sameAs': typeof window !== 'undefined' ? window.location.origin : 'https://codazi.academy'
      },
      'educationalCredentialAwarded': 'Certified Full-Stack Web Developer',
      'hasCourseInstance': {
        '@type': 'CourseInstance',
        'courseMode': 'Online',
        'duration': 'P12W'
      },
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock'
      }
    };

    scriptTag.text = JSON.stringify(jsonLdData);

    return () => {
      document.title = originalTitle;
      if (metaDescription) {
        metaDescription.setAttribute('content', originalMetaDesc);
      }
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Filtered projects derived from PROJECTS_DATA
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((proj) => {
      const matchSearch =
        proj.title[language].toLowerCase().includes(projectSearchQuery.toLowerCase()) ||
        proj.tagline[language].toLowerCase().includes(projectSearchQuery.toLowerCase()) ||
        (proj.stack && proj.stack.toLowerCase().includes(projectSearchQuery.toLowerCase())) ||
        proj.category.toLowerCase().includes(projectSearchQuery.toLowerCase());

      if (!matchSearch) return false;

      if (projectCategoryFilter === 'all') return true;
      if (projectCategoryFilter === 'html-css')
        return proj.category.toLowerCase().includes('html') || proj.category.toLowerCase().includes('css');
      if (projectCategoryFilter === 'javascript')
        return proj.category.toLowerCase().includes('javascript') || proj.category.toLowerCase().includes('dom') || proj.category.toLowerCase().includes('api');
      if (projectCategoryFilter === 'react')
        return proj.category.toLowerCase().includes('react') || proj.category.toLowerCase().includes('redux');
      if (projectCategoryFilter === 'fullstack')
        return proj.category.toLowerCase().includes('full-stack') || proj.category.toLowerCase().includes('ai') || proj.category.toLowerCase().includes('pwa');

      return true;
    });
  }, [projectCategoryFilter, projectSearchQuery, language]);

  // Derived stats from actual data
  const totalWeeks = CURRICULUM_DATA.length - 1; // 12 weeks (+ Week 0)
  const totalLessons = useMemo(() => {
    return CURRICULUM_DATA.reduce((acc, week) => acc + week.lessons.length, 0);
  }, []);
  const totalProjects = PROJECTS_DATA.length;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-200 pb-20">
      {/* Dedicated Promotional Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--bg-card)]/90 backdrop-blur-md px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigateToApp('home')}>
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 text-white flex items-center justify-center font-black font-mono shadow-md text-base">
              C
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm tracking-tight text-[var(--text)]">Codazi</span>
                <span className="px-1.5 py-0.5 rounded-md bg-indigo-500/10 text-[var(--primary)] text-[10px] font-mono font-bold border border-indigo-500/20">
                  BOOTCAMP
                </span>
              </div>
              <p className="text-[10px] text-[var(--text-muted)] font-mono leading-none">
                12-Week Full-Stack Academy
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-[var(--text-muted)]">
            <button
              onClick={() => scrollToSection('curriculum-journey')}
              className="hover:text-[var(--primary)] transition-colors"
            >
              Curriculum (12 Weeks)
            </button>
            <button
              onClick={() => scrollToSection('project-showcase')}
              className="hover:text-[var(--primary)] transition-colors"
            >
              Projects (30+)
            </button>
            <button
              onClick={() => scrollToSection('tech-stack')}
              className="hover:text-[var(--primary)] transition-colors"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection('learning-method')}
              className="hover:text-[var(--primary)] transition-colors"
            >
              Methodology
            </button>
            <button
              onClick={() => scrollToSection('career-outcomes')}
              className="hover:text-[var(--primary)] transition-colors"
            >
              Career Outcome
            </button>
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleLanguage}
              className="p-2 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] hover:bg-[var(--border)] text-[var(--text)] transition-colors flex items-center gap-1 text-xs font-bold font-mono"
              title="Toggle Language"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] hover:bg-[var(--border)] text-[var(--text)] transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>

            {user ? (
              <button
                onClick={() => onNavigateToApp('syllabus')}
                className="px-3.5 py-2 rounded-xl bg-[var(--primary)] text-white font-bold text-xs shadow-md hover:opacity-90 transition-opacity flex items-center gap-1.5"
              >
                <span>Go to Academy</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-3.5 py-2 rounded-xl bg-[var(--primary)] text-white font-bold text-xs shadow-md hover:opacity-90 transition-opacity"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 pt-6 space-y-16">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-mono font-bold tracking-wide">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>FULL-STACK FRONTEND DEVELOPER BOOTCAMP</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white leading-tight">
              Master Web Development in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-300 to-emerald-300">3 Months</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-sans">
              A battle-tested, terminal-first curriculum designed to take you from foundational HTML/CSS to advanced React, Redux, Node APIs, and Full-Stack Capstone projects.
            </p>

            {/* Verified Numbers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-2xl sm:text-3xl font-black font-mono text-cyan-300">{totalWeeks}</p>
                <p className="text-xs text-slate-300 font-semibold mt-0.5">Structured Weeks</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-2xl sm:text-3xl font-black font-mono text-indigo-300">{totalLessons}+</p>
                <p className="text-xs text-slate-300 font-semibold mt-0.5">Interactive Lessons</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-2xl sm:text-3xl font-black font-mono text-emerald-300">{totalProjects}+</p>
                <p className="text-xs text-slate-300 font-semibold mt-0.5">Portfolio Projects</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-2xl sm:text-3xl font-black font-mono text-amber-300">50+</p>
                <p className="text-xs text-slate-300 font-semibold mt-0.5">Active Learners</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => onNavigateToApp('syllabus')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-extrabold text-sm tracking-wide hover:brightness-110 transition-all shadow-lg flex items-center gap-2 active:scale-95"
              >
                <span>Start Learning Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => scrollToSection('curriculum-journey')}
                className="px-5 py-3.5 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm transition-all active:scale-95 flex items-center gap-2"
              >
                <BookOpen className="h-4 w-4" />
                <span>Explore 12-Week Curriculum</span>
              </button>

              <button
                onClick={() => scrollToSection('project-showcase')}
                className="px-5 py-3.5 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm transition-all active:scale-95 flex items-center gap-2"
              >
                <FolderGit2 className="h-4 w-4 text-emerald-400" />
                <span>View 30+ Projects</span>
              </button>
            </div>
          </div>
        </section>

        {/* WHY THIS BOOTCAMP / PROOF STATS */}
        <section className="space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-[var(--primary)] text-xs font-mono font-bold">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>THE CODAZI METHODOLOGY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] tracking-tight">
              Why Engineers Choose Codazi BootCamp
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Built on core software engineering principles: Git version control first, real repository clones, and teacher verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-sm space-y-3">
              <div className="h-10 w-10 rounded-2xl bg-indigo-500/10 text-[var(--primary)] flex items-center justify-center font-bold">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-sm text-[var(--text)]">1. Git-First Philosophy</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Learn Git CLI, branching strategies, commit trees, and GitHub workflows before writing application code.
              </p>
            </div>

            <div className="p-5 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-sm space-y-3">
              <div className="h-10 w-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                <FolderGit2 className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-sm text-[var(--text)]">2. 30+ Real Projects</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Build real-world web apps from starter repositories. Every project ships to a public GitHub repo.
              </p>
            </div>

            <div className="p-5 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-sm space-y-3">
              <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-sm text-[var(--text)]">3. Teacher Code Verification</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Advanced capstone locks require senior instructor review before unlocking your graduation badge.
              </p>
            </div>

            <div className="p-5 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-sm space-y-3">
              <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-sm text-[var(--text)]">4. Offline PWA Access</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Progressive Web App support lets you study lessons and practice terminal commands without internet.
              </p>
            </div>
          </div>
        </section>

        {/* LEARNING JOURNEY — 12-WEEK CURRICULUM */}
        <section id="curriculum-journey" className="space-y-6 pt-4 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-[var(--primary)] text-xs font-mono font-bold mb-2">
                <BookOpen className="h-3.5 w-3.5" />
                <span>12-WEEK STRUCTURED ROADMAP</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] tracking-tight">
                The 12-Week Curriculum Journey
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                Explore every week of training, core topics covered, and the corresponding portfolio project.
              </p>
            </div>

            <button
              onClick={() => onNavigateToApp('syllabus')}
              className="shrink-0 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] hover:border-[var(--primary)] text-[var(--text)] font-extrabold text-xs flex items-center gap-2 transition-all"
            >
              <span>Interactive Syllabus</span>
              <ArrowRight className="h-3.5 w-3.5 text-[var(--primary)]" />
            </button>
          </div>

          {/* Curriculum Accordion Grid */}
          <div className="space-y-3">
            {CURRICULUM_DATA.map((week) => {
              const isExpanded = expandedWeekId === week.id;
              const correspondingProject = PROJECTS_DATA.find((p) =>
                p.title.en.toLowerCase().includes(week.title.en.toLowerCase().replace(/week \d+:\s*/i, ''))
              ) || PROJECTS_DATA[week.order % PROJECTS_DATA.length];

              return (
                <div
                  key={week.id}
                  className={`rounded-2xl border transition-all ${
                    isExpanded
                      ? 'border-[var(--primary)] bg-[var(--bg-card)] shadow-md'
                      : 'border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border)]'
                  }`}
                >
                  <div
                    onClick={() => setExpandedWeekId(isExpanded ? null : week.id)}
                    className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div
                        className={`h-10 w-10 shrink-0 rounded-2xl flex items-center justify-center font-mono font-extrabold text-xs shadow-sm ${
                          week.isGitWeek
                            ? 'bg-amber-500 text-white'
                            : 'bg-indigo-500/10 text-[var(--primary)] border border-indigo-500/20'
                        }`}
                      >
                        W{week.order}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-extrabold text-sm sm:text-base text-[var(--text)]">
                            {week.title[language]}
                          </h3>
                          {week.isGitWeek && (
                            <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-500 text-[10px] font-mono font-bold uppercase border border-amber-500/20">
                              MANDATORY FOUNDATION
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5 font-mono">
                          {week.subtitle[language]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline-block text-xs font-mono text-[var(--text-muted)] font-bold">
                        {week.lessons.length} Lessons
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-[var(--primary)]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[var(--text-muted)]" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Week Details */}
                  {isExpanded && (
                    <div className="px-4 pb-5 sm:px-5 pt-2 border-t border-[var(--border)] space-y-4 animate-fade-in">
                      <p className="text-xs text-[var(--text)] leading-relaxed font-sans">
                        {week.description[language]}
                      </p>

                      {/* Lessons Preview Grid */}
                      <div>
                        <h4 className="text-xs font-bold text-[var(--text-muted)] font-mono uppercase mb-2">
                          Key Lessons in this Week:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {week.lessons.slice(0, 4).map((lesson) => (
                            <div
                              key={lesson.id}
                              className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-between gap-2"
                            >
                              <div className="flex items-center gap-2 overflow-hidden">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                                <span className="text-xs font-bold text-[var(--text)] truncate">
                                  {lesson.title[language]}
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-[var(--text-muted)] shrink-0">
                                {lesson.durationMinutes}m
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Associated Project Banner */}
                      {correspondingProject && (
                        <div className="p-3.5 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <div className="h-8 w-8 rounded-xl bg-indigo-500/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                              <FolderGit2 className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-[10px] font-mono font-bold text-[var(--primary)] uppercase">
                                WEEK PROJECT BUILD #{correspondingProject.projectNumber}
                              </p>
                              <p className="text-xs font-bold text-[var(--text)]">
                                {correspondingProject.title[language]}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => onNavigateToApp('projects')}
                            className="px-3 py-1.5 rounded-xl bg-[var(--primary)] text-white font-bold text-xs shadow-sm hover:opacity-90 transition-opacity"
                          >
                            View Project Spec
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 30+ PROJECTS SHOWCASE */}
        <section id="project-showcase" className="space-y-6 pt-4 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono font-bold mb-2">
                <FolderGit2 className="h-3.5 w-3.5" />
                <span>30+ PORTFOLIO PROJECTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] tracking-tight">
                Project-Based Learning Showcase
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                Every project is derived from the official Codazi project list—complete with starter repositories and verification requirements.
              </p>
            </div>

            <button
              onClick={() => onNavigateToApp('projects')}
              className="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-extrabold text-xs flex items-center gap-2 shadow-sm hover:bg-emerald-500 transition-all"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs font-mono font-bold">
              <button
                onClick={() => setProjectCategoryFilter('all')}
                className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
                  projectCategoryFilter === 'all'
                    ? 'bg-[var(--primary)] text-white shadow-sm'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                All ({PROJECTS_DATA.length})
              </button>
              <button
                onClick={() => setProjectCategoryFilter('html-css')}
                className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
                  projectCategoryFilter === 'html-css'
                    ? 'bg-[var(--primary)] text-white shadow-sm'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                HTML & CSS
              </button>
              <button
                onClick={() => setProjectCategoryFilter('javascript')}
                className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
                  projectCategoryFilter === 'javascript'
                    ? 'bg-[var(--primary)] text-white shadow-sm'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                JavaScript & APIs
              </button>
              <button
                onClick={() => setProjectCategoryFilter('react')}
                className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
                  projectCategoryFilter === 'react'
                    ? 'bg-[var(--primary)] text-white shadow-sm'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                React & Redux
              </button>
              <button
                onClick={() => setProjectCategoryFilter('fullstack')}
                className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
                  projectCategoryFilter === 'fullstack'
                    ? 'bg-[var(--primary)] text-white shadow-sm'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                Full-Stack & AI
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="Search project or stack..."
                value={projectSearchQuery}
                onChange={(e) => setProjectSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-xs text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] font-mono"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-sm hover:border-[var(--primary)] transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {/* Top Badges Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-xl bg-indigo-500/10 text-[var(--primary)] font-mono text-[11px] font-black border border-indigo-500/20">
                      PROJECT #{project.projectNumber || '01'}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-muted)] font-mono text-[10px] font-bold border border-[var(--border)]">
                        {project.difficulty}
                      </span>
                      <span className="px-2 py-0.5 rounded-lg bg-amber-500/10 text-amber-500 font-mono text-[10px] font-bold border border-amber-500/20">
                        {project.estimatedHours}h est.
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-extrabold text-base text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                      {project.title[language]}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-2 leading-relaxed">
                      {project.tagline[language]}
                    </p>
                  </div>

                  {/* Key Tasks Checklist */}
                  <div className="space-y-1.5 pt-1">
                    {project.tasks.slice(0, 2).map((task, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Row */}
                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wide">
                    {project.stack || 'WEB'}
                  </span>

                  <button
                    onClick={() => onNavigateToApp('projects')}
                    className="px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--primary)] hover:text-white text-[var(--text)] font-extrabold text-xs transition-all flex items-center gap-1"
                  >
                    <span>View Spec</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section id="tech-stack" className="space-y-6 pt-4 scroll-mt-20">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-mono font-bold">
              <Layers className="h-3.5 w-3.5" />
              <span>PRODUCTION TECH STACK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] tracking-tight">
              Technologies You Will Master
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              No obsolete tools. Master industry-standard frameworks, libraries, and cloud platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { name: 'HTML5 & Semantics', category: 'Core Web', icon: '🌐' },
              { name: 'CSS3 & Flexbox/Grid', category: 'Styling', icon: '🎨' },
              { name: 'SASS & Tailwind CSS', category: 'Styling', icon: '⚡' },
              { name: 'ES6+ JavaScript', category: 'Core Logic', icon: '📜' },
              { name: 'Fetch & REST APIs', category: 'Async Web', icon: '🔄' },
              { name: 'React 18 & Hooks', category: 'UI Framework', icon: '⚛️' },
              { name: 'Redux Toolkit', category: 'State Management', icon: '📦' },
              { name: 'Jest & RTL', category: 'Testing', icon: '🧪' },
              { name: 'Node.js & Express', category: 'Backend', icon: '🟢' },
              { name: 'Firebase & Firestore', category: 'Cloud Auth/DB', icon: '🔥' },
              { name: 'Gemini AI Integration', category: 'AI Studio', icon: '✨' },
              { name: 'Progressive Web Apps', category: 'PWA Offline', icon: '📱' },
              { name: 'Git & GitHub Workflows', category: 'DevOps', icon: '🐙' },
              { name: 'Vite & ESBuild', category: 'Bundling', icon: '⚡' },
              { name: 'Cloud Deployment', category: 'Hosting', icon: '☁️' }
            ].map((tech) => (
              <div
                key={tech.name}
                className="p-3.5 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--primary)] transition-all text-center space-y-1 shadow-sm"
              >
                <span className="text-2xl select-none">{tech.icon}</span>
                <h4 className="font-extrabold text-xs text-[var(--text)]">{tech.name}</h4>
                <p className="text-[10px] text-[var(--text-muted)] font-mono">{tech.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LEARNING METHODOLOGY */}
        <section id="learning-method" className="space-y-6 pt-4 scroll-mt-20">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono font-bold">
              <Terminal className="h-3.5 w-3.5" />
              <span>THE 6-STEP LEARNING LOOP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] tracking-tight">
              From Concept to Production Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { step: '01', title: 'Learn Concepts', desc: 'Structured Markdown documentation, architecture diagrams, and concept guides.', icon: BookOpen },
              { step: '02', title: 'Terminal Practice', desc: 'Embedded browser terminal with instant automated command validation.', icon: Terminal },
              { step: '03', title: 'Clone & Build', desc: 'Clone real starter repositories to your local environment or online IDE.', icon: Code },
              { step: '04', title: 'Run Unit Tests', desc: 'Verify your code against automated unit test suites and lint rules.', icon: CheckCircle2 },
              { step: '05', title: 'Deploy Live', desc: 'Ship your application to Cloud Run, Vercel, or GitHub Pages with custom domains.', icon: Globe },
              { step: '06', title: 'Teacher Verification', desc: 'Submit repository PRs for instructor code review and graduation badges.', icon: Award }
            ].map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.step} className="p-5 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-[var(--primary)]">STEP {item.step}</span>
                    <IconComp className="h-5 w-5 text-[var(--text-muted)]" />
                  </div>
                  <h3 className="font-extrabold text-sm text-[var(--text)]">{item.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CAREER & PORTFOLIO OUTCOME */}
        <section id="career-outcomes" className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8 space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono font-bold">
              <Award className="h-3.5 w-3.5" />
              <span>WEEK 12 CAREER GRADUATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] tracking-tight">
              Job-Ready Developer Portfolio Outcome
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Week 12 is dedicated to consolidating your 30 verified project builds into a job-ready developer portfolio and preparing for technical interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-1">
              <p className="font-mono text-xs font-bold text-[var(--primary)]">01. Portfolio Strategy</p>
              <h4 className="font-extrabold text-xs text-[var(--text)]">Live Custom Domain</h4>
              <p className="text-[11px] text-[var(--text-muted)]">Deploy capstone portfolio showcasing all 30 verified projects.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-1">
              <p className="font-mono text-xs font-bold text-[var(--primary)]">02. GitHub Profile</p>
              <h4 className="font-extrabold text-xs text-[var(--text)]">Green Contribution Graph</h4>
              <p className="text-[11px] text-[var(--text-muted)]">Active commit history & professional README documentation.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-1">
              <p className="font-mono text-xs font-bold text-[var(--primary)]">03. Interview Prep</p>
              <h4 className="font-extrabold text-xs text-[var(--text)]">Technical Q&A Practice</h4>
              <p className="text-[11px] text-[var(--text-muted)]">Core JavaScript, React hooks, and web performance concepts.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-1">
              <p className="font-mono text-xs font-bold text-[var(--primary)]">04. Graduation Badge</p>
              <h4 className="font-extrabold text-xs text-[var(--text)]">Teacher Verified Badge</h4>
              <p className="text-[11px] text-[var(--text-muted)]">Certified graduation badge verifying code review completions.</p>
            </div>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION BANNER */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-950 to-indigo-950 text-white p-8 sm:p-12 text-center space-y-6 shadow-2xl border border-indigo-500/30">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black font-mono tracking-tight text-white">
              Ready to Become a Full-Stack Developer?
            </h2>
            <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed font-sans">
              Join 50+ active learners building real skills with 12 structured weeks, 180+ lessons, and 30+ verified portfolio projects.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigateToApp('syllabus')}
              className="px-8 py-4 rounded-2xl bg-white text-indigo-950 font-black text-sm tracking-wide hover:bg-indigo-50 transition-all shadow-xl active:scale-95 flex items-center gap-2"
            >
              <span>Enroll Now — Start Learning Free</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => onNavigateToApp('projects')}
              className="px-6 py-4 rounded-2xl border border-indigo-400/40 bg-indigo-900/50 hover:bg-indigo-900 text-white font-extrabold text-sm transition-all active:scale-95 flex items-center gap-2"
            >
              <FolderGit2 className="h-4 w-4" />
              <span>Explore Projects</span>
            </button>
          </div>
        </section>
      </div>

      {/* Promotional Footer */}
      <footer className="mt-20 border-t border-[var(--border)] bg-[var(--bg-card)] py-10 px-4 text-xs text-[var(--text-muted)] font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <p className="font-bold text-[var(--text)] font-sans text-sm">Codazi BootCamp Academy</p>
            <p>12 Weeks · 180+ Lessons · 30+ Portfolio Projects</p>
            <p className="text-[10px]">© 2026 Codazi Academy. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4 font-bold">
            <button onClick={() => onNavigateToApp('home')} className="hover:text-[var(--primary)] transition-colors">
              Academy App
            </button>
            <button onClick={() => onNavigateToApp('syllabus')} className="hover:text-[var(--primary)] transition-colors">
              Syllabus
            </button>
            <button onClick={() => onNavigateToApp('projects')} className="hover:text-[var(--primary)] transition-colors">
              Projects
            </button>
            <button onClick={() => onNavigateToApp('forum')} className="hover:text-[var(--primary)] transition-colors">
              Forum
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
