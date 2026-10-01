/**
 * Lesson Reading Time Estimation Engine & Actual Activity Calibration
 * Curious Learners Platform
 *
 * Implements a centralized, deterministic, language-aware content analysis engine.
 *
 * TRUTH RULE:
 * ESTIMATED READING TIME ≠ ACTUAL STUDENT READING TIME
 * ESTIMATED = Theory Content Structure Analysis (Prose, Code, Tables, Complexity, WPM)
 * ACTUAL = Verified Active Tracking via ActivityEngine (Heartbeats, Idle & Blur Detection)
 */

import { Lesson, Language } from '../types';
import { activityTracker } from './activityTracker';

/**
 * Documented, data-driven reading time configuration parameters.
 * Centralized constants — NO scattered magic numbers in UI components.
 */
export const READING_ESTIMATOR_CONFIG = {
  // Language-aware Reading Speeds (Words Per Minute)
  WPM: {
    en: { default: 220, min: 200, max: 250 },
    bn: { default: 175, min: 150, max: 200 }
  },

  // Structural Content Weight Multipliers
  WEIGHTS: {
    prose: 1.00,   // Standard prose reading speed
    code: 0.35,    // Code syntax scanning (weighted lower in word count, compensated by comprehension time)
    table: 0.60,   // Structured tabular data
    list: 0.75     // Bulleted/numbered list items
  },

  // Technical Complexity Multipliers
  COMPLEXITY_MULTIPLIERS: {
    simple: 1.00,      // Beginner introductory theory
    moderate: 1.10,    // Practical concepts
    technical: 1.20,   // Intermediate syntax & patterns
    advanced: 1.30     // Advanced architecture & deep dive
  },

  // Comprehension Time Additions (in minutes)
  COMPREHENSION_MINUTES: {
    perCodeBlock: 0.75,       // ~45s for mental code execution & syntax scanning
    perTable: 0.50,           // ~30s for inspecting data tables
    perDiagram: 0.30,         // ~18s for visual diagrams
    perInteractiveTask: 0.50  // ~30s for reading terminal/sandbox instructions
  },

  // Output Bounds
  MIN_ESTIMATED_MINUTES: 1,
  MAX_ESTIMATED_MINUTES: 60
};

export interface ContentStructureAnalysis {
  proseWords: number;
  codeWords: number;
  tableWords: number;
  listWords: number;
  codeBlockCount: number;
  tableCount: number;
  diagramCount: number;
  listItemCount: number;
  effectiveWords: number;
}

export interface ReadingTimeEstimate {
  estimatedMinutes: number;
  formattedEstimate: {
    en: string;
    bn: string;
  };
  details: {
    effectiveWords: number;
    proseWords: number;
    codeWords: number;
    tableWords: number;
    listWords: number;
    wpmUsed: number;
    complexityMultiplier: number;
    comprehensionMinutes: number;
  };
}

export interface ActualReadingTime {
  activeSeconds: number;
  activeMinutes: number;
  formattedActual: {
    en: string;
    bn: string;
  };
  hasReliableData: boolean;
}

/**
 * Convert Arabic digits to Bengali numerals
 */
export function toBengaliNumerals(num: number): string {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, (digit) => bnDigits[parseInt(digit, 10)]);
}

/**
 * Count words in a string, respecting English and Bengali word boundaries
 */
export function countWordsInText(text: string): number {
  if (!text || typeof text !== 'string') return 0;
  // Clean markdown syntax symbols
  const cleaned = text
    .replace(/[#*`_~>[\]()|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter((word) => word.length > 0).length;
}

/**
 * Parse Markdown content into structural components
 */
export function analyzeLessonContent(markdown: string): ContentStructureAnalysis {
  if (!markdown || typeof markdown !== 'string') {
    return {
      proseWords: 0,
      codeWords: 0,
      tableWords: 0,
      listWords: 0,
      codeBlockCount: 0,
      tableCount: 0,
      diagramCount: 0,
      listItemCount: 0,
      effectiveWords: 0
    };
  }

  let codeBlockCount = 0;
  let codeWords = 0;
  let tableCount = 0;
  let tableWords = 0;
  let listItemCount = 0;
  let listWords = 0;
  let diagramCount = 0;

  // 1. Extract and process Code Blocks (```...``` or ~~~...~~~)
  const codeBlockRegex = /```[\s\S]*?```|~~~[\s\S]*?~~~/g;
  const codeMatches = markdown.match(codeBlockRegex) || [];
  codeBlockCount = codeMatches.length;

  for (const block of codeMatches) {
    // Strip fence tags
    const codeContent = block.replace(/^(`{3}|~{3})[\w]*\n?|(`{3}|~{3})$/g, '');
    codeWords += countWordsInText(codeContent);
  }

  // Remove code blocks from main text for subsequent parsing
  const withoutCode = markdown.replace(codeBlockRegex, '');

  // 2. Extract and process Diagrams / Images (![...](...) or <img...)
  const diagramRegex = /!\[.*?\]\(.*?\)|<img[\s\S]*?>/g;
  const diagramMatches = withoutCode.match(diagramRegex) || [];
  diagramCount = diagramMatches.length;
  const withoutDiagrams = withoutCode.replace(diagramRegex, '');

  // 3. Process line by line for Tables and Lists vs Prose
  const lines = withoutDiagrams.split('\n');
  const proseLines: string[] = [];

  let inTable = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Table row detection
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (!inTable) {
        tableCount++;
        inTable = true;
      }
      // Skip separator line e.g. |---|---|
      if (!/^\|[\s-:]+\|$/.test(trimmed)) {
        tableWords += countWordsInText(trimmed);
      }
      continue;
    } else {
      inTable = false;
    }

    // List item detection
    if (/^([-*+]|\d+\.)\s+/.test(trimmed)) {
      listItemCount++;
      listWords += countWordsInText(trimmed);
      continue;
    }

    // Otherwise prose / heading line
    if (trimmed.length > 0) {
      proseLines.push(trimmed);
    }
  }

  const proseWords = countWordsInText(proseLines.join(' '));

  // Compute effective weighted word count
  const effectiveWords =
    proseWords * READING_ESTIMATOR_CONFIG.WEIGHTS.prose +
    codeWords * READING_ESTIMATOR_CONFIG.WEIGHTS.code +
    tableWords * READING_ESTIMATOR_CONFIG.WEIGHTS.table +
    listWords * READING_ESTIMATOR_CONFIG.WEIGHTS.list;

  return {
    proseWords,
    codeWords,
    tableWords,
    listWords,
    codeBlockCount,
    tableCount,
    diagramCount,
    listItemCount,
    effectiveWords: Math.round(effectiveWords)
  };
}

/**
 * Determine complexity multiplier based on lesson difficulty and category
 */
export function getComplexityMultiplier(lesson: Lesson): number {
  const diff = lesson.difficulty || 'Beginner';
  if (diff === 'Advanced' || lesson.category === 'fullstack' || lesson.category === 'react') {
    return READING_ESTIMATOR_CONFIG.COMPLEXITY_MULTIPLIERS.advanced;
  }
  if (diff === 'Intermediate' || lesson.category === 'javascript') {
    return READING_ESTIMATOR_CONFIG.COMPLEXITY_MULTIPLIERS.technical;
  }
  if (lesson.category === 'css' || lesson.category === 'html') {
    return READING_ESTIMATOR_CONFIG.COMPLEXITY_MULTIPLIERS.moderate;
  }
  return READING_ESTIMATOR_CONFIG.COMPLEXITY_MULTIPLIERS.simple;
}

/**
 * Centralized Deterministic Lesson Reading Time Estimator
 */
export function calculateLessonReadingTime(
  lesson: Lesson,
  language: Language = 'en'
): ReadingTimeEstimate {
  // Fallback markdown text if requested language is missing
  const markdown =
    lesson.contentMarkdown?.[language] ||
    lesson.contentMarkdown?.en ||
    '';

  const analysis = analyzeLessonContent(markdown);

  // Incorporate objectives & concepts text into prose if present
  let extraWords = 0;
  if (lesson.objectives?.[language]) {
    extraWords += countWordsInText(lesson.objectives[language].join(' '));
  }
  if (lesson.concepts?.[language]) {
    extraWords += countWordsInText(lesson.concepts[language].join(' '));
  }

  const totalEffectiveWords = analysis.effectiveWords + extraWords;

  // Language WPM
  const wpmUsed =
    READING_ESTIMATOR_CONFIG.WPM[language]?.default ||
    READING_ESTIMATOR_CONFIG.WPM.en.default;

  const baseMinutes = totalEffectiveWords / wpmUsed;
  const complexityMultiplier = getComplexityMultiplier(lesson);

  // Structural comprehension time additions
  const taskCount = (lesson.terminalTasks?.length || 0) + (lesson.task ? 1 : 0);
  const comprehensionMinutes =
    analysis.codeBlockCount * READING_ESTIMATOR_CONFIG.COMPREHENSION_MINUTES.perCodeBlock +
    analysis.tableCount * READING_ESTIMATOR_CONFIG.COMPREHENSION_MINUTES.perTable +
    analysis.diagramCount * READING_ESTIMATOR_CONFIG.COMPREHENSION_MINUTES.perDiagram +
    taskCount * READING_ESTIMATOR_CONFIG.COMPREHENSION_MINUTES.perInteractiveTask;

  const rawMinutes = baseMinutes * complexityMultiplier + comprehensionMinutes;

  // Clamped output
  const estimatedMinutes = Math.max(
    READING_ESTIMATOR_CONFIG.MIN_ESTIMATED_MINUTES,
    Math.min(
      READING_ESTIMATOR_CONFIG.MAX_ESTIMATED_MINUTES,
      Math.round(rawMinutes)
    )
  );

  const formattedEstimate = {
    en: `~${estimatedMinutes} min read`,
    bn: `~${toBengaliNumerals(estimatedMinutes)} মি. পড়া`
  };

  return {
    estimatedMinutes,
    formattedEstimate,
    details: {
      effectiveWords: totalEffectiveWords,
      proseWords: analysis.proseWords + extraWords,
      codeWords: analysis.codeWords,
      tableWords: analysis.tableWords,
      listWords: analysis.listWords,
      wpmUsed,
      complexityMultiplier,
      comprehensionMinutes: Number(comprehensionMinutes.toFixed(2))
    }
  };
}

/**
 * Retrieve verified active reading time spent on a lesson from existing ActivityEngine
 */
export function getActualLessonReadingTime(
  studentId: string | null | undefined,
  lessonId: string
): ActualReadingTime {
  if (!studentId) {
    return {
      activeSeconds: 0,
      activeMinutes: 0,
      formattedActual: { en: '0s', bn: '০ সে.' },
      hasReliableData: false
    };
  }

  const sessions = activityTracker.getStoredSessions(studentId);
  let totalActiveSeconds = 0;

  for (const s of sessions) {
    if (s.surface === 'LESSON' && s.resourceId === lessonId && typeof s.activeSeconds === 'number') {
      totalActiveSeconds += s.activeSeconds;
    }
  }

  const activeMinutes = Number((totalActiveSeconds / 60).toFixed(1));
  const mins = Math.floor(totalActiveSeconds / 60);
  const secs = totalActiveSeconds % 60;

  let enFormat = '';
  let bnFormat = '';

  if (mins > 0) {
    enFormat = `${mins}m ${secs}s`;
    bnFormat = `${toBengaliNumerals(mins)} মি. ${toBengaliNumerals(secs)} সে.`;
  } else {
    enFormat = `${secs}s`;
    bnFormat = `${toBengaliNumerals(secs)} সে.`;
  }

  return {
    activeSeconds: totalActiveSeconds,
    activeMinutes,
    formattedActual: {
      en: enFormat,
      bn: bnFormat
    },
    hasReliableData: totalActiveSeconds >= 10
  };
}
