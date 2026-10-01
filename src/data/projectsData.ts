import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-01-portfolio-html',
    projectNumber: '01',
    stack: 'HTML',
    title: {
      en: '01. Portfolio Page (HTML)',
      bn: '০১. পোর্টফোলিও পেজ (এইচটিএমএল)'
    },
    tagline: {
      en: 'Build a personal developer portfolio structure using semantic HTML tags.',
      bn: 'সিমেন্টিক এইচটিএমএল ট্যাগ দিয়ে পার্সোনাল পোর্টফোলিও সাইটের স্ট্রাকচার তৈরি করুন।'
    },
    description: {
      en: 'Master foundational web layout by structuring headers, sections, project showcases, contact forms, and semantic metadata using clean HTML5 standards.',
      bn: 'এইচটিএমএল৫ এর স্ট্যান্ডার্ড নিয়ম মেনে হেডার, প্রজেক্ট শোকেস এবং কন্টাক্ট ফর্ম সহ পুরো পেজের স্ট্রাকচার তৈরি করুন।'
    },
    difficulty: 'Beginner',
    estimatedHours: 2,
    category: 'HTML & Semantics',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/portfolio-html-starter',
    submissionInstructions: {
      en: 'Push your HTML files to GitHub and verify semantic element structure.',
      bn: 'আপনার এইচটিএমএল কোড গিটহাবে পুশ করুন এবং ফাইল ভ্যালিডেশন চেক করুন।'
    },
    tasks: [
      'Create semantic layout with header, nav, section, article, and footer',
      'Add developer bio, skills checklist, and project grid items',
      'Integrate accessible contact form with inputs and submit button'
    ]
  },
  {
    id: 'project-02-landing-css',
    projectNumber: '02',
    stack: 'CSS',
    title: {
      en: '02. Landing Page (CSS)',
      bn: '০২. ল্যান্ডিং পেজ (সিএসএস)'
    },
    tagline: {
      en: 'Style an eye-catching product landing page with Flexbox & typography.',
      bn: 'ফ্লেক্সবক্স এবং টাইপোগ্রাফি ব্যবহার করে চমৎকার প্রোডাক্ট ল্যান্ডিং পেজ তৈরি করুন।'
    },
    description: {
      en: 'Transform raw HTML into a high-converting landing page using CSS custom properties, flexbox alignment, gradient backgrounds, and hover micro-interactions.',
      bn: 'সিএসএস ফ্লেক্সবক্স এবং কালার স্কিম ব্যবহার করে আকর্ষণীয় ডিজাইন তৈরি করুন।'
    },
    difficulty: 'Beginner',
    estimatedHours: 3,
    category: 'CSS Styling',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/landing-page-css-starter',
    submissionInstructions: {
      en: 'Ensure smooth hover states and flexbox responsiveness before submitting.',
      bn: 'হোভার এনিমেশন এবং ফ্লেক্সবক্স লেআউট ঠিকমত কাজ করছে কিনা নিশ্চিত করুন।'
    },
    tasks: [
      'Design modern hero header with call-to-action buttons',
      'Build flexbox 3-column feature grid with hover scale effects',
      'Implement dark mode palette using CSS variables'
    ]
  },
  {
    id: 'project-03-responsive-site',
    projectNumber: '03',
    stack: 'CSS',
    title: {
      en: '03. Responsive Site',
      bn: '০৩. রেসপন্সিভ ওয়েবসাইট'
    },
    tagline: {
      en: 'Create a fully responsive multi-device layout using CSS media queries.',
      bn: 'মিডিয়া কোয়েরি ব্যবহার করে মোবাইল এবং ডেক্সটপ রেসপন্সিভ সাইট বানান।'
    },
    description: {
      en: 'Ensure flawless viewing on mobile, tablet, and desktop viewports using mobile-first media queries and flexible relative units.',
      bn: 'মোবাইল-ফার্স্ট মিডিয়া কোয়েরি প্রয়োগ করে সাইটের রেসপন্সিভনেস নিশ্চিত করুন।'
    },
    difficulty: 'Beginner',
    estimatedHours: 3,
    category: 'CSS Layouts',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/responsive-site-starter',
    submissionInstructions: {
      en: 'Test across mobile (375px) and desktop (1280px) breakpoints.',
      bn: 'মোবাইল এবং ডেক্সটপ ব্রাউজার প্রিভিউ টেস্ট করে জমা দিন।'
    },
    tasks: [
      'Build responsive navigation bar with mobile burger menu toggle',
      'Apply mobile-first breakpoints using CSS @media rules',
      'Ensure fluid image scaling and readable typography font sizes'
    ]
  },
  {
    id: 'project-04-css-grid-dashboard',
    projectNumber: '04',
    stack: 'CSS',
    title: {
      en: '04. CSS Grid Dashboard',
      bn: '০৪. সিএসএস গ্রিড ড্যাশবোর্ড'
    },
    tagline: {
      en: 'Design a high-density analytics layout with CSS Grid placement.',
      bn: 'সিএসএস গ্রিড দিয়ে হাই-ডেনসিটি এনালিটিক্স ড্যাশবোর্ড তৈরি করুন।'
    },
    description: {
      en: 'Construct complex multi-widget dashboard layouts using grid-template-areas, auto-fit columns, and card containers.',
      bn: 'সিএসএস গ্রিড টেমপ্লেট এরিয়া দিয়ে একাধিক উইজেট ও চার্ট কন্টেইনার সাজান।'
    },
    difficulty: 'Beginner',
    estimatedHours: 4,
    category: 'CSS Grid',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/grid-dashboard-starter',
    submissionInstructions: {
      en: 'Verify grid gap rhythm and sidebar responsiveness.',
      bn: 'গ্রিড গ্যাপ এবং সাইডবার লেআউট চেক করে রিপোজিটরি সাবমিট করুন।'
    },
    tasks: [
      'Define multi-column dashboard grid layout with sidebar',
      'Style metric stats cards with percentage badge highlights',
      'Build responsive grid row spanning for wide chart areas'
    ]
  },
  {
    id: 'project-05-calculator-app',
    projectNumber: '05',
    stack: 'JS',
    title: {
      en: '05. Calculator App',
      bn: '০৫. ক্যালকুলেটর অ্যাপ'
    },
    tagline: {
      en: 'Build an interactive calculator with JS evaluation and keyboard bindings.',
      bn: 'জাভাস্ক্রিপ্ট ইভালুয়েশন এবং কিবোর্ড ইনপুট সহ ক্যালকুলেটর।'
    },
    description: {
      en: 'Write clean JavaScript logic to perform mathematical operations, clear history, handle edge cases (division by zero), and support keyboard events.',
      bn: 'জাভাস্ক্রিপ্ট ডোম এবং ইভেন্ট লিসেনার দিয়ে সঠিক ক্যালকুলেশন লজিক ইমপ্লিমেন্ট করুন।'
    },
    difficulty: 'Beginner',
    estimatedHours: 3,
    category: 'JavaScript Basics',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/calculator-js-starter',
    submissionInstructions: {
      en: 'Verify mathematical accuracy and decimal input edge cases.',
      bn: 'ক্যালকুলেটরের দশমিক ও এরর হ্যান্ডলিং চেক করুন।'
    },
    tasks: [
      'Build button grid UI for digits and math operators',
      'Implement state evaluation logic supporting chaining operators',
      'Add physical keyboard listener bindings for numbers and Enter'
    ]
  },
  {
    id: 'project-06-todo-app',
    projectNumber: '06',
    stack: 'JS',
    title: {
      en: '06. Todo App',
      bn: '০৬. টুডু অ্যাপ'
    },
    tagline: {
      en: 'Construct a task manager with LocalStorage persistence and filter tabs.',
      bn: 'লোকালস্টোরেজ এবং ফিল্টার ট্যাব সহ টাস্ক ম্যানেজার অ্যাপ।'
    },
    description: {
      en: 'Develop a core JavaScript application to create, edit, strike-through, delete, and filter tasks while persisting state in browser LocalStorage.',
      bn: 'লোকালস্টোরেজ সেভিং সহ নতুন টাস্ক যোগ, ডিলিট এবং ফিল্টারিং এর কাজ সম্পন্ন করুন।'
    },
    difficulty: 'Beginner',
    estimatedHours: 4,
    category: 'DOM & State',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/todo-js-starter',
    submissionInstructions: {
      en: 'Verify state persists after page reload.',
      bn: 'পেজ রিলোড করার পরেও ডাটা সেভ থাকে কিনা তা নিশ্চিত করুন।'
    },
    tasks: [
      'Create task item input form with validation',
      'Add filter tabs for All, Active, and Completed tasks',
      'Persist task items state array in LocalStorage'
    ]
  },
  {
    id: 'project-07-weather-app',
    projectNumber: '07',
    stack: 'JS+API',
    title: {
      en: '07. Weather App',
      bn: '০৭. ওয়েদার অ্যাপ'
    },
    tagline: {
      en: 'Fetch live forecast data with Fetch API and location search.',
      bn: 'ফ্যাচ এপিআই ব্যবহার করে লাইভ আবহাওয়ার পূর্বাভাস তথ্য প্রদর্শন করুন।'
    },
    description: {
      en: 'Integrate external REST Weather API to display real-time temperature, humidity, wind speed, dynamic weather icons, and async error state handling.',
      bn: 'ওপেনওয়েদার এপিআই কল করে তাপমাত্রা ও আবহাওয়ার লাইভ তথ্য রিড করুন।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 5,
    category: 'Fetch & APIs',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3'],
      requiresTeacherVerification: true
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/weather-api-starter',
    submissionInstructions: {
      en: 'Submit code demonstrating async/await fetch and loading/error UI.',
      bn: 'এসিঙ্ক ফ্যাচ এবং লোডিং স্টেট সহ কোড জমা দিন।'
    },
    tasks: [
      'Connect OpenWeatherMap / REST API with async/await',
      'Implement city search input with debounced request handling',
      'Render dynamic weather icon and temperature details'
    ]
  },
  {
    id: 'project-08-photo-gallery',
    projectNumber: '08',
    stack: 'JS',
    title: {
      en: '08. Photo Gallery',
      bn: '০৮. ফটো গ্যালারি'
    },
    tagline: {
      en: 'Create a dynamic grid gallery with lightbox modal viewer.',
      bn: 'লাইটবক্স মোডাল ও ফিল্টার সহ ডায়নামিক ফটো গ্যালারি।'
    },
    description: {
      en: 'Build an interactive image gallery featuring category filters, smooth lightbox image overlays, keyboard navigation, and lazy loading.',
      bn: 'ইমেজ গ্যালারিতে ক্যাটাগরি ফিল্টার এবং মোডাল পপআপ তৈরি করুন।'
    },
    difficulty: 'Beginner',
    estimatedHours: 3,
    category: 'DOM & UI',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/photo-gallery-starter',
    submissionInstructions: {
      en: 'Verify lightbox open/close keyboard controls.',
      bn: 'লাইটবক্স কিবোর্ড কন্ট্রোল ভ্যালিডেশন করুন।'
    },
    tasks: [
      'Build responsive grid gallery layout',
      'Implement lightbox modal popup view',
      'Add tag filtering buttons for image categories'
    ]
  },
  {
    id: 'project-09-quiz-app',
    projectNumber: '09',
    stack: 'JS',
    title: {
      en: '09. Interactive Quiz App',
      bn: '০৯. ইন্টারঅ্যাক্টিভ কুইজ অ্যাপ'
    },
    tagline: {
      en: 'Build a timed multiple-choice quiz with score tracking and feedback.',
      bn: 'টাইমার এবং স্কোর ট্র্যাকিং সহ একাধিক চয়েসের কুইজ অ্যাপ।'
    },
    description: {
      en: 'Create a quiz game engine with countdown timer, score evaluation, progress bar, and customizable question bank array.',
      bn: 'টাইমিং এবং ইনস্ট্যান্ট উত্তর ফিডব্যাক সহ কুইজ অ্যাপ রিড ও টেস্ট করুন।'
    },
    difficulty: 'Beginner',
    estimatedHours: 4,
    category: 'JavaScript Logic',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/quiz-js-starter',
    submissionInstructions: {
      en: 'Test timer expiration logic and final score calculations.',
      bn: 'কুইজ টাইম কাউন্টডাউন এবং চূড়ান্ত ফল পরীক্ষা করুন।'
    },
    tasks: [
      'Render dynamic question cards with option buttons',
      'Build countdown timer interval engine',
      'Calculate final percentage and summary report view'
    ]
  },
  {
    id: 'project-git-cli',
    projectNumber: '10',
    stack: 'NODE/GIT',
    title: {
      en: '10. Personal Git Workflow CLI Tool',
      bn: '১০. পার্সোনাল গিট ওয়ার্কফ্লো সিএলআই টুল'
    },
    tagline: {
      en: 'Build an interactive terminal helper for repository commits and branching.',
      bn: 'টার্মিনাল হেল্পার ও গিট ওয়ার্কফ্লো অটোমেশন টুল তৈরি করুন।'
    },
    description: {
      en: 'Apply your Week 1 Git knowledge to craft a Node.js CLI tool that automates branch creation, interactive commit staging, and remote push checks.',
      bn: 'উইক ১ এর গিট জ্ঞান ব্যবহার করে একটি নোড সিএলআই টুল লিখুন যা ব্রাঞ্চিং এবং অটোমেটেড সিঙ্ক ম্যানেজ করবে।'
    },
    difficulty: 'Beginner',
    estimatedHours: 4,
    category: 'Git & Command Line',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3'],
      requiresTeacherVerification: true
    },
    starterRepositoryUrl: 'https://github.com/curious-learners/git-workflow-cli-starter',
    submissionInstructions: {
      en: 'Submit your public GitHub repository URL containing your CLI code and commit history. Teacher review checks commit hygiene and terminal tasks.',
      bn: 'আপনার গিটহাব রিপোজিটরি ইউআরএল জমা দিন। শিক্ষক কমিট হিস্ট্রি এবং সিএলআই কোড পরীক্ষা করবেন।'
    },
    tasks: [
      'Initialize Git repository and setup package.json CLI entry',
      'Implement interactive terminal command parser for `git-auto commit`',
      'Add branch safety verification check before pushing to main',
      'Push code to public GitHub repository and submit for teacher review'
    ]
  },
  {
    id: 'project-11-recipe-finder',
    projectNumber: '11',
    stack: 'JS+API',
    title: {
      en: '11. Recipe Finder',
      bn: '১১. রেসিপি ফাইন্ডার'
    },
    tagline: {
      en: 'Search culinary recipes by ingredients using public REST APIs.',
      bn: 'পাবলিক এপিআই ব্যবহার করে রেসিপি অনুসন্ধান অ্যাপ তৈরি করুন।'
    },
    description: {
      en: 'Query public food database endpoints to search recipes by ingredient inputs, render preparation steps, and save favorite dishes to LocalStorage.',
      bn: 'রেসিপি সার্চ এবং পছন্দসই খাবার ফেভারিট লিস্টে যুক্ত করার ফিচার টিউটোরিয়াল।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 5,
    category: 'Fetch & APIs',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/recipe-finder-starter',
    submissionInstructions: {
      en: 'Ensure graceful error fallback when no recipes match query.',
      bn: 'সার্চ রেজাল্ট না থাকলে এরর মেসেজ হ্যান্ডলিং ভ্যালিডেশন করুন।'
    },
    tasks: [
      'Connect Spoonacular / MealDB public API endpoint',
      'Build ingredient tag multi-select input field',
      'Implement bookmarking favorited recipes to local state'
    ]
  },
  {
    id: 'project-12-expense-tracker',
    projectNumber: '12',
    stack: 'JS',
    title: {
      en: '12. Personal Expense Tracker',
      bn: '১২. পার্সোনাল এক্সপেন্স ট্র্যাকার'
    },
    tagline: {
      en: 'Track income, expenses, and current net balance with charts.',
      bn: 'আয় ও ব্যয়ের হিসাব এবং চার্ট ডাটা ট্র্যাকার অ্যাপ।'
    },
    description: {
      en: 'Calculate live financial metrics including income totals, expenses, monthly net balance, and transaction history breakdown.',
      bn: 'আপনার দৈনিক লেনদেনের হিসাব ট্র্যাকিং অ্যাপ তৈরি করুন।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 5,
    category: 'DOM & Storage',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/expense-tracker-starter',
    submissionInstructions: {
      en: 'Verify balance recalculation upon deleting entries.',
      bn: 'এন্ট্রি মোছার সাথে সাথে ব্যালেন্স আপডেট ভ্যালিডেশন করুন।'
    },
    tasks: [
      'Build transaction logging form (Amount, Category, Date)',
      'Calculate running total income, expense, and net balance',
      'Persist transaction history array in LocalStorage'
    ]
  },
  {
    id: 'project-13-markdown-editor',
    projectNumber: '13',
    stack: 'JS',
    title: {
      en: '13. Markdown Notes Editor',
      bn: '১৩. মার্কডাউন নোটস এডিটর'
    },
    tagline: {
      en: 'Live split-screen Markdown preview editor with export options.',
      bn: 'লাইভ স্প্লিট স্ক্রিন মার্কডাউন এডিটর ও ফাইল এক্সপোর্ট।'
    },
    description: {
      en: 'Construct a browser-based Markdown note-taking app featuring instant side-by-side preview, syntax highlighting, and text file download.',
      bn: 'ব্রাউজারে রিয়েল-টাইম মার্কডাউন প্রিভিউ ও ফাইল সেভ সুবিধা।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 4,
    category: 'DOM & Text Processing',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/markdown-editor-starter',
    submissionInstructions: {
      en: 'Test markdown parsing for headers, code blocks, and lists.',
      bn: 'মার্কডাউন হেডার ও কোড ব্লক পার্সিং পরীক্ষা করুন।'
    },
    tasks: [
      'Set up split pane textarea and HTML output container',
      'Parse Markdown syntax to safe HTML preview',
      'Add export button to download file as .md'
    ]
  },
  {
    id: 'project-14-ecommerce-catalog',
    projectNumber: '14',
    stack: 'JS',
    title: {
      en: '14. E-commerce Product Catalog',
      bn: '১৪. ই-কমার্স প্রোডাক্ট ক্যাটালগ'
    },
    tagline: {
      en: 'Filter, sort, and add products to a shopping cart drawer.',
      bn: 'প্রোডাক্ট ফিল্টারিং, সর্টিং এবং শপিং কার্ট অ্যাপ।'
    },
    description: {
      en: 'Build a store catalog interface complete with price range sliders, category checkboxes, sorting options, and shopping cart item counter.',
      bn: 'অনলাইন শপিং সাইটের মূল প্রোডাক্ট ফিল্টারিং সিস্টেম তৈরি করুন।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 6,
    category: 'DOM & Search/Filter',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/ecommerce-catalog-starter',
    submissionInstructions: {
      en: 'Verify cart total recalculates when item quantities change.',
      bn: 'কার্ট মোট হিসাব সঠিকভাবে আপডেট হয় কিনা নিশ্চিত করুন।'
    },
    tasks: [
      'Render dynamic product grid with badges and pricing',
      'Implement multi-attribute filtering (category, price range)',
      'Build slide-out shopping cart drawer with item quantity controls'
    ]
  },
  {
    id: 'project-15-movie-explorer',
    projectNumber: '15',
    stack: 'JS+API',
    title: {
      en: '15. Movie Database Explorer',
      bn: '১৫. মুভি ডাটাবেজ এক্সপ্লোরার'
    },
    tagline: {
      en: 'Search movies, cast, and ratings powered by TMDB REST API.',
      bn: 'টিএমডিবি এপিআই দিয়ে মুভি সার্চ ও রিভিউ অ্যাপ।'
    },
    description: {
      en: 'Search global movie database API, view cast lists, trailer links, genres, and bookmark movies to custom watchlist collections.',
      bn: 'বিশ্বখ্যাত সিনেমাগুলোর তথ্য সার্চ ও ওয়াচলিস্টে সেভ করুন।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 5,
    category: 'Fetch & APIs',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/movie-explorer-starter',
    submissionInstructions: {
      en: 'Verify poster image loading fallbacks.',
      bn: 'মুভি পোস্টার লোডিং ফলব্যাক চেক করুন।'
    },
    tasks: [
      'Connect TMDB REST API endpoint for movie query searches',
      'Render movie cards with star ratings and genre tags',
      'Build modal detailed view displaying cast and synopsis'
    ]
  },
  {
    id: 'project-dashboard-pwa',
    projectNumber: '16',
    stack: 'FULLSTACK',
    title: {
      en: '16. Offline-First Task Matrix & Sync Queue',
      bn: '১৬. অফলাইন-ফার্স্ট টাস্ক ম্যাট্রিক্স ও সিঙ্ক কিউ'
    },
    tagline: {
      en: 'Design a PWA task manager powered by LocalStorage, Redis, and state sync.',
      bn: 'লোকালস্টোরেজ, রেডিস এবং স্টেট ভিত্তিক PWA অ্যাপ।'
    },
    description: {
      en: 'Construct a responsive task matrix application using offline sync pattern. User mutations update local state instantly and sync in background worker queue.',
      bn: 'অফলাইন-ফার্স্ট অ্যাপ্লিকেশন বানান যা লোকাল আপডেট থেকে ব্যাকগ্রাউন্ড সিঙ্ক ম্যানেজ করবে।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 8,
    category: 'Full-Stack Web',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3', 'js-lesson-1', 'js-lesson-2'],
      requiresTeacherVerification: true
    },
    starterRepositoryUrl: 'https://github.com/curious-learners/offline-sync-matrix-starter',
    submissionInstructions: {
      en: 'Provide repository link and live URL. Teacher will verify background sync queue persistence during simulated offline mode.',
      bn: 'রিপোজিটরি লিংক এবং লাইভ ডেমো জমা দিন। শিক্ষক অফলাইন টেস্ট ভ্যালিডেশন করবেন।'
    },
    tasks: [
      'Set up LocalStorage cache layer and sync queue model',
      'Implement background retry worker with exponential backoff',
      'Connect Express REST API with server memory cache',
      'Pass offline-to-online sync integration tests'
    ]
  },
  {
    id: 'project-17-currency-converter',
    projectNumber: '17',
    stack: 'JS+API',
    title: {
      en: '17. Currency Converter App',
      bn: '১৭. কারেন্সি কনভার্টার অ্যাপ'
    },
    tagline: {
      en: 'Convert real-time global exchange rates with flag dropdowns.',
      bn: 'লাইভ বিনিময় হার পরিবর্তন ও কারেন্সি কনভার্টার অ্যাপ।'
    },
    description: {
      en: 'Fetch live foreign exchange rates API to calculate precise monetary conversion values across 150+ currencies with country flag selectors.',
      bn: 'আন্তর্জাতিক বিনিময় হারের লাইভ ডাটা দিয়ে কারেন্সি কনভার্টার বানান।'
    },
    difficulty: 'Beginner',
    estimatedHours: 3,
    category: 'Fetch & APIs',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/currency-converter-starter',
    submissionInstructions: {
      en: 'Verify instant rate calculations when changing currency options.',
      bn: 'কারেন্সি পরিবর্তনের সংগে সংগে রেজাল্ট হিসাব পরীক্ষা করুন।'
    },
    tasks: [
      'Fetch latest exchange rates from open exchange API',
      'Build swap currencies quick toggle button',
      'Render formatted monetary output with currency symbols'
    ]
  },
  {
    id: 'project-18-pomodoro-timer',
    projectNumber: '18',
    stack: 'JS',
    title: {
      en: '18. Pomodoro Focus Timer',
      bn: '১৮. পোমোডোরো ফোকাস টাইমার'
    },
    tagline: {
      en: 'Customizable work/break timer with sound chime notifications.',
      bn: 'কাস্টমাইজেবল কাজের সময় ট্র্যাকার এবং সাউন্ড টাইমার।'
    },
    description: {
      en: 'Implement standard Pomodoro technique timer (25m work / 5m break) complete with circular progress wheel, start/pause/reset buttons, and audio alerts.',
      bn: 'পড়াশোনা ও কাজের মনোযোগ বৃদ্ধিতে টাইমার এবং অডিও নোটিফিকেশন।'
    },
    difficulty: 'Beginner',
    estimatedHours: 4,
    category: 'Timers & Audio',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/pomodoro-timer-starter',
    submissionInstructions: {
      en: 'Verify timer transition from work mode to break mode.',
      bn: 'টাইমার ওয়ার্ক মোড থেকে ব্রেক মোড স্বয়ংক্রিয়ভাবে চেঞ্জ হয় কিনা দেখুন।'
    },
    tasks: [
      'Build circular SVG countdown progress bar',
      'Implement interval start, pause, and reset controls',
      'Trigger browser audio chime upon session completion'
    ]
  },
  {
    id: 'project-19-music-player',
    projectNumber: '19',
    stack: 'JS',
    title: {
      en: '19. Web Audio Music Player',
      bn: '১৯. ওয়েব অডিও মিউজিক প্লেয়ার'
    },
    tagline: {
      en: 'HTML5 audio player with playlist management and volume bar.',
      bn: 'প্লেলিস্ট এবং ভলিউম বার সহ এইচটিএমএল৫ অডিও প্লেয়ার।'
    },
    description: {
      en: 'Build a browser music player utilizing HTML5 Audio API for playlist track selection, scrubbable progress bar, volume slider, and track artwork display.',
      bn: 'ব্রাউজারেই গান শোনা ও প্লেলিস্ট সিলেক্ট করার প্লেয়ার অ্যাপ।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 5,
    category: 'HTML5 Audio & State',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/music-player-starter',
    submissionInstructions: {
      en: 'Test auto-advancing to next song when track finishes.',
      bn: 'গান শেষ হলে পরের গানে স্বয়ংক্রিয়ভাবে যাওয়ার টেস্ট সম্পন্ন করুন।'
    },
    tasks: [
      'Connect HTML5 Audio element with JS controls',
      'Build playlist track list with active playing indicator',
      'Implement draggable track progress scrubber slider'
    ]
  },
  {
    id: 'project-20-form-validation',
    projectNumber: '20',
    stack: 'JS',
    title: {
      en: '20. Custom Form Validation Engine',
      bn: '২০. কাস্টম ফর্ম ভ্যালিডেশন ইঞ্জিন'
    },
    tagline: {
      en: 'Real-time regular expression input validation and error prompts.',
      bn: 'ইনস্ট্যান্ট ইনপুট ভ্যালিডেশন এবং এরর প্রোম্পট ইঞ্জিন।'
    },
    description: {
      en: 'Build a reusable client-side form validator verifying emails, password strength rules, confirm password matching, and accessible ARIA alerts.',
      bn: 'পাসওয়ার্ড স্ট্রেংথ ও ইমেইল ভ্যালিডেশন সিস্টেম কাস্টম জাভাস্ক্রিপ্টে লিখুন।'
    },
    difficulty: 'Beginner',
    estimatedHours: 3,
    category: 'Form Handling',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/form-validation-starter',
    submissionInstructions: {
      en: 'Verify error states clear instantly upon valid input.',
      bn: 'সঠিক ইনপুট দেওয়ার সাথে সাথে এরর মেসেজ মুছে যায় কিনা টেস্ট করুন।'
    },
    tasks: [
      'Implement RegExp pattern checks for email and phone inputs',
      'Build password complexity meter with visual progress bar',
      'Add accessible error labels with live input feedback'
    ]
  },
  {
    id: 'project-fullstack-forum',
    projectNumber: '21',
    stack: 'FULLSTACK',
    title: {
      en: '21. Real-Time Developer Forum & Code Engine',
      bn: '২১. রিয়েল-টাইম ডেভেলপার ফোরাম ও কোড ইঞ্জিন'
    },
    tagline: {
      en: 'Build a full-stack community forum with guest authorization boundaries and code previews.',
      bn: 'গেস্ট বাউন্ডারি এবং রিয়েল টাইম ফিচার সহ ফোরাম অ্যাপ্লিকেশন।'
    },
    description: {
      en: 'Architect a full-stack learning forum where guests have read-only permissions while authenticated Google/GitHub users post and comment.',
      bn: 'এমন একটি ফোরাম ডেভেলপ করুন যেখানে গেস্টরা পড়তে পারবে এবং অথেনটিকেটেড ইউজাররা মন্তব্য ও টিউটোরিয়াল দিতে পারবে।'
    },
    difficulty: 'Advanced',
    estimatedHours: 12,
    category: 'Full-Stack Architecture',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3', 'js-lesson-1', 'js-lesson-2', 'api-lesson-1'],
      requiresTeacherVerification: true
    },
    starterRepositoryUrl: 'https://github.com/curious-learners/fullstack-forum-starter',
    submissionInstructions: {
      en: 'Submit deployed app URL and GitHub code repository for senior mentor code review.',
      bn: 'মেন্টরদের কোড রিভিউর জন্য ডিপ্লয়েড সাইট লিংক জমা দিন।'
    },
    tasks: [
      'Configure OAuth authentication guard middleware',
      'Implement REST API endpoints with server side cache',
      'Build responsive UI with EN/BN i18n support',
      'Complete final teacher code review check'
    ]
  },
  {
    id: 'project-22-github-analyzer',
    projectNumber: '22',
    stack: 'JS+API',
    title: {
      en: '22. GitHub Profile & Repo Analyzer',
      bn: '২২. গিটহাব প্রোফাইল ও রিপো এনালাইজার'
    },
    tagline: {
      en: 'Analyze public GitHub developer profile stats and top languages.',
      bn: 'গিটহাব পাবলিক এপিআই দিয়ে ইউজারের প্রোফাইল এনালাইসিস।'
    },
    description: {
      en: 'Fetch public GitHub REST API to compute developer statistics including total stars, repository languages breakdown, recent commit streaks, and follower graphs.',
      bn: 'গিটহাব প্রোফাইলের স্টার, প্রোগ্রামিং ল্যাঙ্গুয়েজ এবং কন্ট্রিবিউশন এনালাইজ করুন।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 5,
    category: 'Fetch & APIs',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/github-analyzer-starter',
    submissionInstructions: {
      en: 'Verify API rate-limit header error messages.',
      bn: 'গিটহাব এপিআই রেট লিমিট হ্যান্ডলিং রিভিও টেস্ট করুন।'
    },
    tasks: [
      'Connect GitHub REST API endpoints for user & repos',
      'Calculate top 5 programming languages by repo count',
      'Display follower counts, star totals, and bio stats'
    ]
  },
  {
    id: 'project-23-url-shortener',
    projectNumber: '23',
    stack: 'NODE+DB',
    title: {
      en: '23. URL Shortener Web App',
      bn: '২৩. ইউআরএল শর্টনার ওয়েব অ্যাপ'
    },
    tagline: {
      en: 'Create custom short links with click tracking and expiry.',
      bn: 'কাস্টম শর্ট লিংক তৈরি ও ক্লিক এনালিটিক্স ট্র্যাকার।'
    },
    description: {
      en: 'Build a Node/Express backend service generating unique short link hashes, redirecting users, and logging click analytics into database tables.',
      bn: 'নোড এক্সপ্রেস এবং ডাটাবেজ দিয়ে সংক্ষিপ্ত লিংক তৈরি ও ক্লিক ট্র্যাকার লিখুন।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 6,
    category: 'Node & Database',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3', 'js-lesson-1'],
      requiresTeacherVerification: true
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/url-shortener-starter',
    submissionInstructions: {
      en: 'Submit repository URL with database schema migration code.',
      bn: 'ডাটাবেজ স্কিমা সহ গিটহাব রিপোজিটরি লিংক জমা দিন।'
    },
    tasks: [
      'Generate unique 6-character short hash code',
      'Set up Express 302 redirect route endpoint',
      'Record timestamped click log counter in database'
    ]
  },
  {
    id: 'project-24-realtime-chat',
    projectNumber: '24',
    stack: 'NODE+WS',
    title: {
      en: '24. Realtime Chat Room App',
      bn: '২৪. রিয়েলটাইম চ্যাট রুম অ্যাপ'
    },
    tagline: {
      en: 'Multi-room instant messaging application using WebSockets.',
      bn: 'ওয়েবসকেট দিয়ে রিয়েলটাইম মেসেজিং ও চ্যাট রুম অ্যাপ।'
    },
    description: {
      en: 'Architect a real-time messaging application with WebSocket connection channels, user presence status indicators, and typing notification events.',
      bn: 'ওয়েবসকেট কানেকশন দিয়ে রিয়েলটাইম চ্যাট সার্ভিস ইমপ্লিমেন্ট করুন।'
    },
    difficulty: 'Advanced',
    estimatedHours: 8,
    category: 'WebSockets',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3', 'js-lesson-1', 'js-lesson-2'],
      requiresTeacherVerification: true
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/realtime-chat-starter',
    submissionInstructions: {
      en: 'Demonstrate active dual-client messaging in live test demo.',
      bn: 'দুইটি পৃথক ব্রাউজার উইন্ডোতে চ্যাট টেস্ট ভিডিও বা লিংক দিন।'
    },
    tasks: [
      'Establish WebSocket server event connection handlers',
      'Broadcast instant messages across room channels',
      'Render online user list and typing indicator state'
    ]
  },
  {
    id: 'project-25-markdown-cms-blog',
    projectNumber: '25',
    stack: 'FULLSTACK',
    title: {
      en: '25. Blog Platform with Markdown CMS',
      bn: '২৫. মার্কডাউন সিএমএস ব্লগ প্ল্যাটফর্ম'
    },
    tagline: {
      en: 'Developer blog with Markdown post publishing and tag filters.',
      bn: 'মার্কডাউন আর্টিকেল পাবলিশিং ও কাস্টম ব্লগ প্ল্যাটফর্ম।'
    },
    description: {
      en: 'Full-stack article publishing platform with front-matter Markdown parsing, reading time estimates, author profiles, and comment sections.',
      bn: 'আর্টিকেল প্রকাশনা, রিডিং টাইম এবং কমেন্ট সেকশন সহ পূর্ণাঙ্গ ব্লগ সাইট।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 7,
    category: 'Full-Stack Web',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3', 'js-lesson-1'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/markdown-blog-starter',
    submissionInstructions: {
      en: 'Verify post tag filtering and RSS feed generator.',
      bn: 'ব্লগ ট্যাগ ফিল্টারিং এবং আর্টিকেল রেন্ডারিং টেস্ট করুন।'
    },
    tasks: [
      'Parse Markdown post files with front-matter headers',
      'Render post details view with estimated reading time',
      'Build search input filter by blog post categories'
    ]
  },
  {
    id: 'project-26-crypto-tracker',
    projectNumber: '26',
    stack: 'REACT+API',
    title: {
      en: '26. Crypto Live Price Tracker',
      bn: '২৬. ক্রিপ্টো লাইভ প্রাইজ ট্র্যাকার'
    },
    tagline: {
      en: 'Real-time cryptocurrency price ticker with market charts.',
      bn: 'লাইভ মার্কেট চার্ট ও ক্রিপ্টো প্রাইজ ট্র্যাকিং।'
    },
    description: {
      en: 'Display live cryptocurrency prices, 24-hour market trend gains/losses, sparkline charts, and search input powered by CoinGecko API.',
      bn: 'কয়েনগেকো এপিআই থেকে ক্রিপ্টো মার্কেটের আপডেট ডাটা ও চার্ট দেখুন।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 6,
    category: 'React & Realtime',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3', 'js-lesson-1'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/crypto-tracker-starter',
    submissionInstructions: {
      en: 'Verify live price interval refresh logic.',
      bn: 'লাইভ দাম পরিবর্তনের আপডেট ইভেন্ট ভ্যালিডেশন করুন।'
    },
    tasks: [
      'Connect CoinGecko REST API endpoint for coin data',
      'Format positive/negative percentage price changes',
      'Build watchlist state saved to browser storage'
    ]
  },
  {
    id: 'project-27-coding-challenge-platform',
    projectNumber: '27',
    stack: 'FULLSTACK',
    title: {
      en: '27. Coding Challenge Platform',
      bn: '২৭. কোডিং চ্যালেঞ্জ প্ল্যাটফর্ম'
    },
    tagline: {
      en: 'Interactive coding exercise executor with test suite passes.',
      bn: 'কোডিং প্রবলেম সলভিং ও অটোমেটেড টেস্ট রানার সাইট।'
    },
    description: {
      en: 'Create a mini code-execution platform where users solve programming problems in the browser and pass unit tests.',
      bn: 'ব্রাউজারেই অ্যালগরিদম প্রবলেম সলভ এবং কোড রানার ফিচার অ্যাপ।'
    },
    difficulty: 'Advanced',
    estimatedHours: 10,
    category: 'Full-Stack Architecture',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3', 'js-lesson-1', 'js-lesson-2'],
      requiresTeacherVerification: true
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/coding-platform-starter',
    submissionInstructions: {
      en: 'Submit deployed app URL for teacher validation of code sandbox.',
      bn: 'শিক্ষক ভ্যালিডেশনের জন্য সান্দবক্স টেস্ট সাইট লিংক পাঠান।'
    },
    tasks: [
      'Build browser code editor with syntax highlight',
      'Evaluate student JS code output against test assertions',
      'Display pass/fail test result status badges'
    ]
  },
  {
    id: 'project-28-design-system-lib',
    projectNumber: '28',
    stack: 'REACT',
    title: {
      en: '28. Design System Component Library',
      bn: '২৮. ডিজাইন সিস্টেম কম্পোনেন্ট লাইব্রেরি'
    },
    tagline: {
      en: 'Reusable React UI components with interactive Storybook docs.',
      bn: 'পুনর্ব্যবহারযোগ্য রিঅ্যাক্ট ইউআই কম্পোনেন্ট এবং ডকুমেন্টেশন।'
    },
    description: {
      en: 'Design and package a pristine React UI component library featuring Buttons, Modals, Badges, Cards, Inputs, and theme tokens.',
      bn: 'কাস্টম রিঅ্যাক্ট ডিজাইন সিস্টেম এবং থিম টোকেন প্রজেক্ট তৈরি করুন।'
    },
    difficulty: 'Intermediate',
    estimatedHours: 6,
    category: 'React UI',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3'],
      requiresTeacherVerification: false
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/design-system-starter',
    submissionInstructions: {
      en: 'Ensure component props conform strictly to TypeScript interfaces.',
      bn: 'টাইপস্ক্রিপ্ট টাইপ এবং প্রপস ডকুমেন্টেশন ভ্যালিড করুন।'
    },
    tasks: [
      'Create accessible Button component with variant styles',
      'Build Modal dialog with keyboard ESC focus trap',
      'Implement theme provider context for Dark/Light mode'
    ]
  },
  {
    id: 'project-29-ai-prompt-studio',
    projectNumber: '29',
    stack: 'REACT+GEMINI',
    title: {
      en: '29. AI Prompt Assistant Studio',
      bn: '২৯. এআই প্রম্পট অ্যাসিস্ট্যান্ট স্টুডিও'
    },
    tagline: {
      en: 'Gemini API powered code helper and explanation studio.',
      bn: 'জেডমিনাই এপিআই দিয়ে কোড অ্যাসিস্ট্যান্ট এবং প্রম্পট ল্যাব।'
    },
    description: {
      en: 'Build a full studio application powered by Gemini AI API to review student code, suggest refactorings, and generate unit test boilerplate.',
      bn: 'জেডমিনাই এপিআই ব্যবহার করে কোড রিভিউ ও অটো টিউটরিয়াল স্টুডিও।'
    },
    difficulty: 'Advanced',
    estimatedHours: 9,
    category: 'AI Integration',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3', 'js-lesson-1', 'api-lesson-1'],
      requiresTeacherVerification: true
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/ai-prompt-studio-starter',
    submissionInstructions: {
      en: 'Submit public GitHub repo link with server-side proxy route logic.',
      bn: 'সার্ভার সাইড এপিআই কি প্রক্সি সহ গিটহাব লিংক সাবমিট করুন।'
    },
    tasks: [
      'Securely connect Gemini API in server proxy endpoint',
      'Stream real-time AI response chunks to UI',
      'Build code snippet copy & markdown render views'
    ]
  },
  {
    id: 'project-30-codazi-portfolio-showcase',
    projectNumber: '30',
    stack: 'FULLSTACK',
    title: {
      en: '30. Codazi Academy Portfolio Showcase',
      bn: '৩০. কোদাজি একাডেমি পোর্টফোলিও শোকেস'
    },
    tagline: {
      en: 'Capstone full-stack developer portfolio showcasing all verified projects.',
      bn: 'আপনার ভেরিফাইড প্রজেক্টগুলো নিয়ে ক্যাপস্টোন ফুলস্ট্যাক পোর্টফোলিও।'
    },
    description: {
      en: 'Final Capstone Project! Consolidate all 30 completed academy projects, terminal certifications, and teacher verification badges into an outstanding, job-ready full-stack developer portfolio site.',
      bn: 'চূড়ান্ত ক্যাপস্টোন প্রজেক্ট! অ্যাকাডেমির সকল প্রজেক্ট, সার্টিফিকেট ও ভেরিফিকেশন ব্যাজ দিয়ে আপনার নিজস্ব পোর্টফোলিও তৈরি করুন।'
    },
    difficulty: 'Advanced',
    estimatedHours: 15,
    category: 'Full-Stack Architecture',
    prerequisites: {
      requiredLessonIds: ['git-lesson-1', 'git-lesson-2', 'git-lesson-3', 'js-lesson-1', 'js-lesson-2', 'api-lesson-1'],
      requiresTeacherVerification: true
    },
    starterRepositoryUrl: 'https://github.com/codazi-academy/showcase-portfolio-capstone',
    submissionInstructions: {
      en: 'Submit deployed custom domain URL and complete GitHub repository for final graduation certification.',
      bn: 'চূড়ান্ত গ্র্যাজুয়েশন সার্টিফিকেট এবং কোড রিভিউর জন্য লাইভ সাইট ডোমেন লিংক পাঠান।'
    },
    tasks: [
      'Consolidate verified project cards with live demos and code links',
      'Display teacher verification badge credentials and Git commit log stats',
      'Deploy application to Cloud server or Vercel with custom domain',
      'Pass senior lead instructor final graduation review'
    ]
  }
];
