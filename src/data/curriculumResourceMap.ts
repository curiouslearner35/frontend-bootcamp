import { CurriculumResource } from '../types';

/**
 * Verified Curriculum Resource Intelligence Map
 * Centralized, data-oriented map of verified external learning resources
 * mapped directly to Curious Learners lessons across Weeks 0 to 12.
 */
export const VERIFIED_RESOURCE_MAP: CurriculumResource[] = [
  // ==========================================
  // WEEK 0: GIT BEFORE CODE
  // ==========================================
  {
    id: 'res-w0-l1-official',
    lessonId: 'w0-l1',
    weekId: 'week-0',
    type: 'official_doc',
    title: {
      en: 'Git SCM Official Documentation',
      bn: 'গিট অফিশিয়াল ডকুমেন্টেশন'
    },
    provider: 'Git SCM',
    url: 'https://git-scm.com/doc',
    description: {
      en: 'Official reference manual and cheat sheet for Git version control commands.',
      bn: 'গিট কমান্ডের ম্যানুয়াল এবং রেফারেন্স শট।'
    },
    difficulty: 'Beginner',
    relevance: {
      en: 'Teaches core VCS philosophy and CLI command structures.',
      bn: 'ভার্সন কন্ট্রোল সিস্টেমের মূল কনসেপ্ট শেখায়।'
    },
    projectAlignment: {
      en: 'Directly aligns with Portfolio HTML & Git initial repository initialization.',
      bn: 'পোর্টফোলিও প্রজেক্টের প্রথম গিট সিঙ্ক প্রসেসে সাহায্য করে।'
    },
    verifiedAt: '2026-09-29',
    language: 'both'
  },
  {
    id: 'res-w0-l1-book',
    lessonId: 'w0-l1',
    weekId: 'week-0',
    type: 'article',
    title: {
      en: 'Pro Git Book — Getting Started with Version Control',
      bn: 'প্রো গিট বই — ভার্সন কন্ট্রোল শুরু করুন'
    },
    provider: 'Git SCM / Scott Chacon',
    url: 'https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control',
    description: {
      en: 'In-depth explanation of local vs distributed version control systems and snapshot architecture.',
      bn: 'ডিস্ট্রিবিউটেড ভার্সন কন্ট্রোল এবং স্ন্যাপশট আর্কিটেকচারের বিস্তারিত আলোচনা।'
    },
    difficulty: 'Beginner',
    relevance: {
      en: 'Deepens understanding of why Git tracks file snapshots rather than diff deltas.',
      bn: 'গিট কেন ফাইল স্ন্যাপশট ট্র্যাক করে তা বুঝতে সাহায্য করে।'
    },
    verifiedAt: '2026-09-29',
    language: 'en'
  },
  {
    id: 'res-w0-l2-github-skills',
    lessonId: 'w0-l2',
    weekId: 'week-0',
    type: 'interactive_challenge',
    title: {
      en: 'GitHub Skills — Introduction to GitHub',
      bn: 'গিটহাব স্কিলস — গিটহাব পরিচিতি'
    },
    provider: 'GitHub',
    url: 'https://skills.github.com/',
    description: {
      en: 'Interactive GitHub repository workflow lab for creating branches, commits, and pull requests.',
      bn: 'ব্রাঞ্চ তৈরি, কমিট এবং পুল রিকুয়েস্ট টেস্ট করার সরাসরি ইন্টারেক্টিভ ল্যাব।'
    },
    difficulty: 'Beginner',
    relevance: {
      en: 'Hands-on practice with GitHub remote repository syncing.',
      bn: 'গিটহাব রিমোট রিপোজিটরি সিঙ্ক করার প্র্যাকটিক্যাল জ্ঞান।'
    },
    projectAlignment: {
      en: 'Prepares student for submitting project starter repos for teacher verification.',
      bn: 'টিচার ভেরিফিকেশনের জন্য প্রজেক্ট জমা দেওয়ার প্রস্তুতি নিশ্চিত করে।'
    },
    verifiedAt: '2026-09-29',
    language: 'en'
  },

  // ==========================================
  // WEEK 1: HTML5 MASTERY
  // ==========================================
  {
    id: 'res-w1-mdn-intro',
    lessonId: 'w1-l1',
    weekId: 'week-1',
    type: 'official_doc',
    title: {
      en: 'MDN Web Docs — Introduction to HTML',
      bn: 'এমডিএন ওয়েব ডকস — এইচটিএমএল পরিচিতি'
    },
    provider: 'Mozilla Developer Network',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML',
    description: {
      en: 'Comprehensive breakdown of HTML syntax, elements, attributes, and page structure.',
      bn: 'এইচটিএমএল সিনট্যাক্স, এলিমেন্ট, অ্যাট্রিবিউট এবং স্ট্রাকচারের বিস্তারিত গাইড।'
    },
    difficulty: 'Beginner',
    relevance: {
      en: 'Defines modern semantic HTML5 element usage.',
      bn: 'আধুনিক সিমেন্টিক এইচটিএমএল৫ এর সঠিক ব্যবহার শেখায়।'
    },
    projectAlignment: {
      en: 'Directly powers Project 01: Portfolio Page (HTML).',
      bn: 'প্রজেক্ট ০১: পোর্টফোলিও পেজ এইচটিএমএল গঠনে ব্যবহৃত হয়।'
    },
    verifiedAt: '2026-09-29',
    language: 'both'
  },
  {
    id: 'res-w1-mdn-forms',
    lessonId: 'w1-l3',
    weekId: 'week-1',
    type: 'official_doc',
    title: {
      en: 'MDN Web Docs — HTML Forms Guide',
      bn: 'এমডিএন ওয়েব ডকস — এইচটিএমএল ফর্ম গাইড'
    },
    provider: 'Mozilla Developer Network',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms',
    description: {
      en: 'Guide to form controls, inputs, validation attributes, accessibility, and form submissions.',
      bn: 'ফর্ম কন্ট্রোল, ইনপুট টাইপ, ভ্যালিডেশন এবং এক্সেসিবিলিটি গাইড।'
    },
    difficulty: 'Beginner',
    relevance: {
      en: 'Essential for structuring contact forms and input handlers.',
      bn: 'কন্টাক্ট ফর্ম এবং ইউজার ইনপুট তৈরির জন্য অপরিহার্য।'
    },
    verifiedAt: '2026-09-29',
    language: 'en'
  },

  // ==========================================
  // WEEK 2: CSS3 FOUNDATION
  // ==========================================
  {
    id: 'res-w2-flexbox-guide',
    lessonId: 'w2-l2',
    weekId: 'week-2',
    type: 'article',
    title: {
      en: 'CSS-Tricks — A Complete Guide to Flexbox',
      bn: 'সিএসএস-ট্রিকস — ফ্লেক্সবক্স কমপ্লিট গাইড'
    },
    provider: 'CSS-Tricks / DigitalOcean',
    url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    description: {
      en: 'Visual reference manual for all CSS Flexbox container and item properties.',
      bn: 'ফ্লেক্সবক্স কন্টেইনার ও আইটেমের সম্পূর্ণ ভিজ্যুয়াল রেফারেন্স।'
    },
    difficulty: 'Beginner',
    relevance: {
      en: 'Teaches flex-direction, justify-content, align-items, and flex-wrap alignment.',
      bn: 'ফ্লেক্সবক্স লেআউট সহজে সাজানোর সেরা ভিজ্যুয়াল গাইড।'
    },
    projectAlignment: {
      en: 'Powers Project 02: Responsive Landing Page (CSS Flexbox).',
      bn: 'প্রজেক্ট ০২: রেসপন্সিভ ল্যান্ডিং পেজে ব্যবহৃত হয়।'
    },
    verifiedAt: '2026-09-29',
    language: 'en'
  },
  {
    id: 'res-w2-flexbox-froggy',
    lessonId: 'w2-l2',
    weekId: 'week-2',
    type: 'interactive_challenge',
    title: {
      en: 'Flexbox Froggy — An Interactive CSS Game',
      bn: 'ফ্লেক্সবক্স ফ্রগি — ইন্টারেক্টিভ সিএসএস গেম'
    },
    provider: 'Codepip',
    url: 'https://flexboxfroggy.com/',
    description: {
      en: '24-level browser game for mastering Flexbox positioning syntax by writing CSS code.',
      bn: 'ফ্লেক্সবক্স লেআউট আয়ত্ত করার ২৪ লেভেলের একটি জনপ্রিয় গেম।'
    },
    difficulty: 'Beginner',
    relevance: {
      en: 'Fun, immediate feedback for CSS Flexbox alignment rules.',
      bn: 'সরাসরি প্র্যাকটিস করে ফ্লেক্সবক্স শেখার মাধ্যম।'
    },
    verifiedAt: '2026-09-29',
    language: 'both'
  },

  // ==========================================
  // WEEK 3: RESPONSIVE DESIGN & GRID
  // ==========================================
  {
    id: 'res-w3-webdev-responsive',
    lessonId: 'w3-l1',
    weekId: 'week-3',
    type: 'official_doc',
    title: {
      en: 'web.dev — Learn Responsive Design',
      bn: 'web.dev — লার্ন রেসপন্সিভ ডিজাইন'
    },
    provider: 'Google Chrome Team / web.dev',
    url: 'https://web.dev/learn/design/',
    description: {
      en: 'Modern guide to media queries, viewports, fluid typography, and mobile-first layouts.',
      bn: 'মিডিয়া কোয়েরি, ভিউপোর্ট এবং মোবাইল-ফার্স্ট ডিজাইনের অফিশিয়াল গাইড।'
    },
    difficulty: 'Intermediate',
    relevance: {
      en: 'Teaches mobile-first responsive architecture.',
      bn: 'মোবাইল-ফার্স্ট রেসপন্সিভ আর্কিটেকচার তৈরি শেখায়।'
    },
    verifiedAt: '2026-09-29',
    language: 'en'
  },
  {
    id: 'res-w3-cssgrid-guide',
    lessonId: 'w3-l3',
    weekId: 'week-3',
    type: 'article',
    title: {
      en: 'CSS-Tricks — A Complete Guide to Grid',
      bn: 'সিএসএস-ট্রিকস — সিএসএস গ্রিড কমপ্লিট গাইড'
    },
    provider: 'CSS-Tricks',
    url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
    description: {
      en: 'Definitive visual guide to CSS Grid layout properties, fr units, gap, and areas.',
      bn: 'সিএসএস গ্রিডের সম্পূর্ণ ভিজ্যুয়াল রেফারেন্স গাইড।'
    },
    difficulty: 'Intermediate',
    relevance: {
      en: 'Essential for 2D layout design in complex web applications.',
      bn: 'জটিল ২ডি ওয়েব অ্যাপ লেআউট তৈরির জন্য প্রয়োজন।'
    },
    verifiedAt: '2026-09-29',
    language: 'en'
  },

  // ==========================================
  // WEEK 5: JAVASCRIPT FUNDAMENTALS
  // ==========================================
  {
    id: 'res-w5-js-info-basics',
    lessonId: 'w5-l1',
    weekId: 'week-5',
    type: 'article',
    title: {
      en: 'JavaScript.info — The Modern JavaScript Tutorial',
      bn: 'JavaScript.info — দ্য মডার্ন জাভাস্ক্রিপ্ট টিউটোরিয়াল'
    },
    provider: 'JavaScript.info / Ilya Kantor',
    url: 'https://javascript.info/first-steps',
    description: {
      en: 'Detailed textbook covering JS syntax, variables, data types, functions, and memory concepts.',
      bn: 'জাভাস্ক্রিপ্ট ভেরিয়েবল, ডেটা টাইপ, ফাংশন ও মেমোরি কনসেপ্টের বিস্তারিত গাইড।'
    },
    difficulty: 'Beginner',
    relevance: {
      en: 'Gold-standard reference for fundamental JS logic.',
      bn: 'জাভাস্ক্রিপ্টের মূল লজিক শক্ত করার সেরা রেফারেন্স।'
    },
    verifiedAt: '2026-09-29',
    language: 'both'
  },

  // ==========================================
  // WEEK 6: DOM MANIPULATION & EVENTS
  // ==========================================
  {
    id: 'res-w6-mdn-dom',
    lessonId: 'w6-l1',
    weekId: 'week-6',
    type: 'official_doc',
    title: {
      en: 'MDN Web Docs — Introduction to the DOM',
      bn: 'এমডিএন ওয়েব ডকস — ডম (DOM) এর পরিচিতি'
    },
    provider: 'Mozilla Developer Network',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
    description: {
      en: 'Explains how HTML documents are represented as tree objects accessible by JavaScript.',
      bn: 'এইচটিএমএল ডকুমেন্ট কীভাবে অবজেক্ট ট্রি হিসেবে জাভাস্ক্রিপ্টে কাজ করে।'
    },
    difficulty: 'Intermediate',
    relevance: {
      en: 'Teaches document.querySelector, addEventListener, and dynamic rendering.',
      bn: 'ডম ম্যানিপুলেশন এবং ইভেন্ট লিসেনারের সঠিক ব্যবহার শেখায়।'
    },
    projectAlignment: {
      en: 'Powers Project 06: Dynamic Quiz & Assessment App.',
      bn: 'প্রজেক্ট ০৬: ডাইনামিক কুইজ অ্যাপ তৈরিতে সাহায্য করে।'
    },
    verifiedAt: '2026-09-29',
    language: 'both'
  },

  // ==========================================
  // WEEK 8: REACT FUNDAMENTALS
  // ==========================================
  {
    id: 'res-w8-react-learn',
    lessonId: 'w8-l1',
    weekId: 'week-8',
    type: 'official_doc',
    title: {
      en: 'React Official Documentation — Quick Start & Learn React',
      bn: 'রিঅ্যাক্ট অফিশিয়াল ডকস — কুইক স্টার্ট ও লার্ন রিঅ্যাক্ট'
    },
    provider: 'React Core Team / Meta',
    url: 'https://react.dev/learn',
    description: {
      en: 'Modern interactive documentation covering JSX, components, props, state, and rendering lifecycle.',
      bn: 'কম্পোনেন্ট, প্রপস, স্টেট ও রেন্ডারিং এর অফিশিয়াল টিউটোরিয়াল।'
    },
    difficulty: 'Intermediate',
    relevance: {
      en: 'Official reference for modern React function components and hooks.',
      bn: 'আধুনিক রিয়্যাক্ট কম্পোনেন্ট ও হুকস শেখার প্রাথমিক গাইড।'
    },
    projectAlignment: {
      en: 'Powers Project 08: React E-Commerce Product Showcase.',
      bn: 'প্রজেক্ট ০৮: রিয়্যাক্ট ই-কমার্স পোর্টফোলিও গঠনে ব্যবহৃত হয়।'
    },
    verifiedAt: '2026-09-29',
    language: 'both'
  },

  // ==========================================
  // WEEK 10: STATE MANAGEMENT & TESTING
  // ==========================================
  {
    id: 'res-w10-vitest-guide',
    lessonId: 'w10-l3',
    weekId: 'week-10',
    type: 'official_doc',
    title: {
      en: 'Vitest Official Documentation — Next Generation Testing',
      bn: 'ভাইটেস্ট অফিশিয়াল ডকস — নেক্সট জেনারেশন টেস্টিং'
    },
    provider: 'Vitest / Vite Team',
    url: 'https://vitest.dev/guide/',
    description: {
      en: 'Blazing fast unit testing framework integrated seamlessly with Vite and React.',
      bn: 'ভাইট এবং রিয়্যাক্ট অ্যাপের জন্য ফাস্ট ইউনিট টেস্টিং গাইড।'
    },
    difficulty: 'Advanced',
    relevance: {
      en: 'Teaches automated assertions, test runners, and mocking.',
      bn: 'অটোমেটেড টেস্ট রানার এবং ইউনিট টেস্টিং শেখায়।'
    },
    verifiedAt: '2026-09-29',
    language: 'en'
  },

  // ==========================================
  // WEEK 11: BACKEND BASICS & DEPLOYMENT
  // ==========================================
  {
    id: 'res-w11-express-getting-started',
    lessonId: 'w11-l1',
    weekId: 'week-11',
    type: 'official_doc',
    title: {
      en: 'Express.js Official Documentation — Getting Started',
      bn: 'এক্সপ্রেস.জেএস অফিশিয়াল ডকস — গেটিং স্টার্টেড'
    },
    provider: 'Express.js / OpenJS Foundation',
    url: 'https://expressjs.com/en/starter/installing.html',
    description: {
      en: 'Guide to initializing Node.js Express servers, routing, middleware, and RESTful APIs.',
      bn: 'নোড.জেএস এক্সপ্রেস সার্ভার, রাউটিং এবং রেস্ট এপিআই তৈরি গাইড।'
    },
    difficulty: 'Intermediate',
    relevance: {
      en: 'Teaches server routing and HTTP API response architecture.',
      bn: 'ব্যাকএন্ড এপিআই ও সার্ভার আর্কিটেকচার শেখায়।'
    },
    verifiedAt: '2026-09-29',
    language: 'both'
  }
];

/**
 * Helper function to retrieve verified resources for a specific lesson
 */
export function getResourcesForLesson(lessonId: string): CurriculumResource[] {
  return VERIFIED_RESOURCE_MAP.filter((res) => res.lessonId === lessonId);
}

/**
 * Helper function to retrieve verified resources for a specific week module
 */
export function getResourcesForWeek(weekId: string): CurriculumResource[] {
  return VERIFIED_RESOURCE_MAP.filter((res) => res.weekId === weekId);
}
