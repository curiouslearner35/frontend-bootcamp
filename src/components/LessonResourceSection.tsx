import React, { useState, useMemo } from 'react';
import { Lesson, Language, CurriculumResource } from '../types';
import { getResourcesForLesson, getResourcesForWeek } from '../data/curriculumResourceMap';
import {
  BookOpen,
  ExternalLink,
  Code2,
  Terminal,
  FolderGit2,
  Sparkles,
  Video,
  FileText,
  Github,
  Trophy,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Wifi,
  Compass,
  ArrowRight
} from 'lucide-react';
import { t } from '../i18n/translations';

interface LessonResourceSectionProps {
  lesson: Lesson;
  language: Language;
  onOpenPractice?: () => void;
  onOpenTerminal?: () => void;
  initiallyExpanded?: boolean;
}

export const LessonResourceSection: React.FC<LessonResourceSectionProps> = ({
  lesson,
  language,
  onOpenPractice,
  onOpenTerminal,
  initiallyExpanded = false
}) => {
  // Fetch mapped resources for this specific lesson or fallback to week module
  const mappedResources = useMemo(() => {
    const specific = getResourcesForLesson(lesson.id);
    if (specific.length > 0) return specific;
    return getResourcesForWeek(lesson.weekId);
  }, [lesson.id, lesson.weekId]);

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(initiallyExpanded);

  // Identify recommended resource (first official_doc or first item)
  const primaryResource = useMemo(() => {
    if (mappedResources.length === 0) return null;
    return mappedResources.find((r) => r.type === 'official_doc') || mappedResources[0];
  }, [mappedResources]);

  // Remaining resources for progressive disclosure
  const secondaryResources = useMemo(() => {
    if (!primaryResource) return [];
    return mappedResources.filter((r) => r.id !== primaryResource.id);
  }, [mappedResources, primaryResource]);

  const filteredSecondaryResources = useMemo(() => {
    if (activeFilter === 'all') return secondaryResources;
    return secondaryResources.filter((r) => r.type === activeFilter);
  }, [secondaryResources, activeFilter]);

  if (mappedResources.length === 0) return null;

  const getTypeIcon = (type: CurriculumResource['type']) => {
    switch (type) {
      case 'official_doc':
        return <BookOpen className="h-4 w-4 text-emerald-400" aria-hidden="true" />;
      case 'video':
        return <Video className="h-4 w-4 text-rose-400" aria-hidden="true" />;
      case 'article':
        return <FileText className="h-4 w-4 text-indigo-400" aria-hidden="true" />;
      case 'github_example':
        return <Github className="h-4 w-4 text-slate-300" aria-hidden="true" />;
      case 'interactive_challenge':
        return <Trophy className="h-4 w-4 text-amber-400" aria-hidden="true" />;
      default:
        return <Sparkles className="h-4 w-4 text-cyan-400" aria-hidden="true" />;
    }
  };

  const getTypeBadge = (type: CurriculumResource['type']) => {
    switch (type) {
      case 'official_doc':
        return { label: language === 'bn' ? 'অফিশিয়াল ডক' : 'Official Doc', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' };
      case 'video':
        return { label: language === 'bn' ? 'ভিডিও গাইড' : 'Video Tutorial', color: 'bg-rose-500/10 text-rose-400 border-rose-500/30' };
      case 'article':
        return { label: language === 'bn' ? 'প্রবন্ধ ও টিউটোরিয়াল' : 'Guide & Article', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30' };
      case 'github_example':
        return { label: language === 'bn' ? 'গিটহাব কোড' : 'GitHub Lab', color: 'bg-slate-800 text-slate-300 border-slate-700' };
      case 'interactive_challenge':
        return { label: language === 'bn' ? 'কোডিং চ্যালেঞ্জ' : 'Challenge', color: 'bg-amber-500/10 text-amber-400 border-amber-500/30' };
      default:
        return { label: language === 'bn' ? 'রেফারেন্স' : 'Reference', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' };
    }
  };

  return (
    <section
      aria-label="Verified Learning Resources"
      className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-4 sm:p-6 space-y-5 shadow-sm my-6"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-[10px] uppercase font-bold tracking-wider">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span>Curriculum Resource Intelligence</span>
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-[var(--text)] tracking-tight flex items-center gap-2">
            <span>{language === 'bn' ? 'যাচাইকৃত লার্নিং রিসোর্স' : 'Verified Learning Resources'}</span>
            <span className="px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 font-mono text-[11px]">
              {mappedResources.length}
            </span>
          </h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            {language === 'bn'
              ? 'এই লেসনের জন্য বিশেষভাবে যাচাইকৃত অফিশিয়াল ডকস, টিউটোরিয়াল এবং কোডিং প্র্যাকটিস।'
              : 'Verified documentation, guides, and practical references mapped directly to this lesson.'}
          </p>
        </div>

        {/* Offline Notice */}
        <div className="px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-1.5 shrink-0 self-start sm:self-center">
          <Wifi className="h-3 w-3 text-emerald-400" />
          <span>Requires Internet</span>
        </div>
      </div>

      {/* Primary Recommended Resource (Hero Card) */}
      {primaryResource && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-950/30 via-[var(--bg-elevated)] to-[var(--bg-card)] border-2 border-indigo-500/40 space-y-3.5 shadow-md card-hover animate-scale-in">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 font-mono text-[10px] font-bold flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-amber-400" />
                <span>{language === 'bn' ? 'সুপারিশকৃত মূল রিসোর্স' : 'PRIMARY RECOMMENDED'}</span>
              </span>
              <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold flex items-center gap-1.5 ${getTypeBadge(primaryResource.type).color}`}>
                {getTypeIcon(primaryResource.type)}
                <span>{getTypeBadge(primaryResource.type).label}</span>
              </span>
            </div>

            <span className="text-[10px] font-mono text-slate-400">
              Provider: <strong className="text-[var(--text)]">{primaryResource.provider}</strong>
            </span>
          </div>

          <div className="space-y-1">
            <h4 className="font-extrabold text-sm sm:text-base text-[var(--text)] leading-snug">
              {primaryResource.title[language] || primaryResource.title.en}
            </h4>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {primaryResource.description[language] || primaryResource.description.en}
            </p>
          </div>

          {/* Context Connections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs pt-1">
            <div className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] space-y-1">
              <span className="text-[10px] uppercase font-bold text-indigo-400 block">
                {language === 'bn' ? 'কেন এই রিসোর্স?' : 'What You Learn'}
              </span>
              <p className="text-[11px] text-[var(--text)] leading-relaxed">
                {primaryResource.relevance[language] || primaryResource.relevance.en}
              </p>
            </div>

            {primaryResource.projectAlignment && (
              <div className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 block">
                  {language === 'bn' ? 'প্রজেক্ট যোগসূত্র' : 'Project Connection'}
                </span>
                <p className="text-[11px] text-[var(--text)] leading-relaxed">
                  {primaryResource.projectAlignment[language] || primaryResource.projectAlignment.en}
                </p>
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-[var(--border)]">
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span>Level:</span>
              <span className="font-bold text-indigo-400">{primaryResource.difficulty}</span>
            </div>

            <a
              href={primaryResource.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open primary resource: ${primaryResource.title[language] || primaryResource.title.en}`}
              className="min-h-[44px] px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-mono font-bold text-xs transition-all flex items-center gap-2 cursor-pointer border border-indigo-400/40 shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
            >
              <span>{language === 'bn' ? 'অফিশিয়াল রিসোর্স খুলুন' : 'Open Resource'}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}

      {/* Progressive Disclosure Controls for Additional Resources */}
      {secondaryResources.length > 0 && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between gap-2 border-t border-[var(--border)] pt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              aria-controls="additional-resources-section"
              className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--border)] text-[var(--text)] font-mono font-bold text-xs transition-all flex items-center gap-2 cursor-pointer border border-[var(--border)] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              <span>
                {showAll
                  ? (language === 'bn' ? 'বাড়তি রিসোর্স সংকুচিত করুন' : 'Hide Additional Resources')
                  : (language === 'bn'
                      ? `আরও ${secondaryResources.length} টি রিসোর্স দেখুন`
                      : `Show More Resources (${secondaryResources.length})`)}
              </span>
              {showAll ? <ChevronUp className="h-4 w-4 text-indigo-400" /> : <ChevronDown className="h-4 w-4 text-indigo-400" />}
            </button>

            <span className="text-[11px] font-mono text-[var(--text-muted)] hidden sm:inline">
              {showAll ? 'Progressive disclosure expanded' : 'Click to expand all verified materials'}
            </span>
          </div>

          {/* Collapsible Section for Secondary Resources */}
          {showAll && (
            <div id="additional-resources-section" className="space-y-4 animate-fade-in">
              {/* Type Filter Bar */}
              {secondaryResources.length > 1 && (
                <div
                  role="tablist"
                  aria-label="Resource type filter"
                  className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono scrollbar-none"
                >
                  <button
                    role="tab"
                    aria-selected={activeFilter === 'all'}
                    onClick={() => setActiveFilter('all')}
                    className={`min-h-[38px] px-3.5 py-1.5 rounded-xl border transition-all shrink-0 cursor-pointer font-bold ${
                      activeFilter === 'all'
                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-xs'
                        : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--border)] hover:text-[var(--text)]'
                    }`}
                  >
                    All ({secondaryResources.length})
                  </button>
                  {Array.from(new Set(secondaryResources.map((r) => r.type))).map((type) => {
                    const badge = getTypeBadge(type);
                    return (
                      <button
                        key={type}
                        role="tab"
                        aria-selected={activeFilter === type}
                        onClick={() => setActiveFilter(type)}
                        className={`min-h-[38px] px-3.5 py-1.5 rounded-xl border transition-all shrink-0 cursor-pointer capitalize font-semibold ${
                          activeFilter === type
                            ? 'bg-indigo-600 text-white border-indigo-500 shadow-xs'
                            : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--border)] hover:text-[var(--text)]'
                        }`}
                      >
                        {badge.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Grid of Secondary Cards */}
              <div className="grid grid-cols-1 gap-3.5">
                {filteredSecondaryResources.map((res) => {
                  const badge = getTypeBadge(res.type);

                  return (
                    <article
                      key={res.id}
                      className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-indigo-500/40 transition-all space-y-3 shadow-xs card-hover"
                    >
                      {/* Card Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold flex items-center gap-1.5 ${badge.color}`}>
                            {getTypeIcon(res.type)}
                            <span>{badge.label}</span>
                          </span>
                          <span className="text-xs font-mono font-semibold text-[var(--text-muted)]">
                            {res.provider}
                          </span>
                        </div>

                        <span className="text-[10px] font-mono text-slate-500">
                          Verified: {res.verifiedAt}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-sm sm:text-base text-[var(--text)] leading-snug">
                          {res.title[language] || res.title.en}
                        </h4>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                          {res.description[language] || res.description.en}
                        </p>
                      </div>

                      {/* Why & Lesson Connection Breakdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs">
                        <div className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] space-y-1">
                          <span className="text-[10px] uppercase font-bold text-indigo-400 block">
                            {language === 'bn' ? 'কেন এই রিসোর্স?' : 'Why This Resource'}
                          </span>
                          <p className="text-[11px] text-[var(--text)] leading-relaxed">
                            {res.relevance[language] || res.relevance.en}
                          </p>
                        </div>

                        {res.projectAlignment && (
                          <div className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] space-y-1">
                            <span className="text-[10px] uppercase font-bold text-amber-400 block">
                              {language === 'bn' ? 'প্রজেক্ট সংযোগ' : 'Project Connection'}
                            </span>
                            <p className="text-[11px] text-[var(--text)] leading-relaxed">
                              {res.projectAlignment[language] || res.projectAlignment.en}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="pt-2 flex items-center justify-between gap-3 border-t border-[var(--border)]">
                        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                          <span>Difficulty:</span>
                          <span className="font-bold text-indigo-400">{res.difficulty}</span>
                        </div>

                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open resource: ${res.title[language] || res.title.en}`}
                          className="min-h-[44px] px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-mono font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer border border-indigo-400/30 shadow-xs focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                        >
                          <span>{language === 'bn' ? 'রিসোর্স খুলুন' : 'Open Resource'}</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Learning Flow Loop Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-indigo-950/60 to-slate-900 border border-indigo-500/30 text-white space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold">
          <span className="text-indigo-300 flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Complete Curriculum Learning Loop</span>
          </span>
          <span className="text-slate-400 text-[11px]">Theory → Resource → Practice → Project</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono font-bold">
          <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
            01. Theory Read
          </div>
          <div className="p-2 rounded-xl bg-indigo-900/50 border border-indigo-700/50 text-indigo-300">
            02. Resource Examined
          </div>
          {onOpenPractice && (
            <button
              onClick={onOpenPractice}
              className="min-h-[40px] p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 cursor-pointer transition-all flex items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>03. Practice Sandbox</span>
            </button>
          )}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="min-h-[40px] p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 cursor-pointer transition-all flex items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>04. Terminal Mission</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
