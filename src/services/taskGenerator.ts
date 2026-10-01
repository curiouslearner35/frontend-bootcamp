import { Lesson, SandboxTask, SandboxTaskRequirement } from '../types';

/**
 * Task Generator Service
 * Converts Lesson Theory and Metadata into a structured Task / Homework
 * assignment with real validation checks for the Practice Sandbox.
 */

export function getLessonTask(lesson: Lesson): SandboxTask {
  // If task is explicitly defined on lesson, return it
  if (lesson.task) {
    return lesson.task;
  }

  const titleEn = lesson.title?.en || 'Practice Task';
  const titleBn = lesson.title?.bn || 'অনুশীলনী টাস্ক';
  const category = lesson.category;
  const practiceCode = lesson.practiceCode || '';
  const expectedOutput = lesson.expectedOutput || '';

  // Extract key concepts or fallback
  const conceptsEn = lesson.concepts?.en && lesson.concepts.en.length > 0
    ? lesson.concepts.en
    : [titleEn, `${category.toUpperCase()} Syntax`, 'Best Practices'];
  const conceptsBn = lesson.concepts?.bn && lesson.concepts.bn.length > 0
    ? lesson.concepts.bn
    : [titleBn, `${category.toUpperCase()} সিনট্যাক্স`, 'বেস্ট প্র্যাকটিস'];

  // Category-specific task generation
  if (category === 'html') {
    return generateHtmlTask(lesson, titleEn, titleBn, conceptsEn, conceptsBn, practiceCode, expectedOutput);
  } else if (category === 'css') {
    return generateCssTask(lesson, titleEn, titleBn, conceptsEn, conceptsBn, practiceCode, expectedOutput);
  } else if (category === 'javascript') {
    return generateJsTask(lesson, titleEn, titleBn, conceptsEn, conceptsBn, practiceCode, expectedOutput);
  } else if (category === 'react') {
    return generateReactTask(lesson, titleEn, titleBn, conceptsEn, conceptsBn, practiceCode, expectedOutput);
  } else if (category === 'git') {
    return generateGitTask(lesson, titleEn, titleBn, conceptsEn, conceptsBn, practiceCode, expectedOutput);
  } else {
    return generateFullstackTask(lesson, titleEn, titleBn, conceptsEn, conceptsBn, practiceCode, expectedOutput);
  }
}

function generateHtmlTask(
  lesson: Lesson,
  titleEn: string,
  titleBn: string,
  conceptsEn: string[],
  conceptsBn: string[],
  practiceCode: string,
  expectedOutput: string
): SandboxTask {
  const lowerTitle = titleEn.toLowerCase();

  let reqs: SandboxTaskRequirement[] = [];
  let objEn = `Build a semantic HTML structure for: "${titleEn}" using correct HTML5 tags.`;
  let objBn = `সঠিক HTML5 ট্যাগ ব্যবহার করে "${titleBn}"-এর জন্য একটি সেমান্টিক HTML স্ট্রাকচার তৈরি করুন।`;

  if (lowerTitle.includes('form')) {
    reqs = [
      {
        id: 'req-1',
        text: { en: 'Include a <form> element container', bn: 'একটি <form> এলিমেন্ট কন্টেইনার অন্তর্ভুক্ত করুন' },
        checkType: 'html_contains',
        checkValue: '<form'
      },
      {
        id: 'req-2',
        text: { en: 'Include proper <label> tags and <input> fields', bn: 'উপযুক্ত <label> ট্যাগ এবং <input> ফিল্ড অন্তর্ভুক্ত করুন' },
        checkType: 'html_contains',
        checkValue: '<input'
      },
      {
        id: 'req-3',
        text: { en: 'Add a submit <button> element', bn: 'একটি সাবমিট <button> এলিমেন্ট যোগ করুন' },
        checkType: 'html_contains',
        checkValue: '<button'
      }
    ];
  } else if (lowerTitle.includes('semantic') || lowerTitle.includes('header') || lowerTitle.includes('nav')) {
    reqs = [
      {
        id: 'req-1',
        text: { en: 'Use semantic elements like <header>, <nav>, or <section>', bn: '<header>, <nav>, বা <section>-এর মতো সেমান্টিক এলিমেন্ট ব্যবহার করুন' },
        checkType: 'html_contains',
        checkValue: '<header'
      },
      {
        id: 'req-2',
        text: { en: 'Use proper heading tags (h1-h6) for page hierarchy', bn: 'পেজ হায়ারার্কির জন্য সঠিক হেডিং ট্যাগ (h1-h6) ব্যবহার করুন' },
        checkType: 'html_contains',
        checkValue: '<h'
      },
      {
        id: 'req-3',
        text: { en: 'Wrap main body content in a <main> or <article> tag', bn: 'মূল বডি কন্টেন্টকে <main> বা <article> ট্যাগে রাখুন' },
        checkType: 'html_contains',
        checkValue: '<main'
      }
    ];
  } else if (lowerTitle.includes('link') || lowerTitle.includes('image') || lowerTitle.includes('media')) {
    reqs = [
      {
        id: 'req-1',
        text: { en: 'Include an <a> link or <img> image element', bn: 'একটি <a> লিংক বা <img> ইমেজ এলিমেন্ট যোগ করুন' },
        checkType: 'html_contains',
        checkValue: '<a'
      },
      {
        id: 'req-2',
        text: { en: 'Specify required attributes (href, src, alt)', bn: 'প্রয়োজনীয় অ্যাট্রিবিউট (href, src, alt) নির্দিষ্ট করুন' },
        checkType: 'html_contains',
        checkValue: 'href='
      }
    ];
  } else {
    reqs = [
      {
        id: 'req-1',
        text: { en: `Implement HTML markup demonstrating ${titleEn}`, bn: `${titleBn} প্রদর্শনকারী HTML মার্কআপ বাস্তবায়ন করুন` },
        checkType: 'html_contains',
        checkValue: '<'
      },
      {
        id: 'req-2',
        text: { en: 'Ensure tags are correctly structured and nested', bn: 'ট্যাগগুলো সঠিকভাবে স্ট্রাকচার্ড ও নেস্টেড রয়েছে তা নিশ্চিত করুন' },
        checkType: 'html_contains',
        checkValue: '>'
      }
    ];
  }

  if (expectedOutput) {
    reqs.push({
      id: 'req-expected',
      text: { en: `Verify live preview output matches: "${expectedOutput.slice(0, 35)}..."`, bn: `লাইভ প্রিভিউ বা কনসোল আউটপুট মিলিয়ে নিন: "${expectedOutput.slice(0, 35)}..."` },
      checkType: 'expected_output',
      checkValue: expectedOutput
    });
  }

  return {
    objective: { en: objEn, bn: objBn },
    requirements: reqs,
    instructions: {
      en: [
        `Open the HTML editor tab in the Practice Sandbox below.`,
        `Review the theory concepts: ${conceptsEn.slice(0, 3).join(', ')}.`,
        `Write clean, valid HTML code meeting all specified requirements.`,
        `Click "Run Code" to inspect the live render in the Preview window.`
      ],
      bn: [
        `নিচের প্র্যাকটিস স্যান্ডবক্সের HTML এডিটর ট্যাব খুলুন।`,
        `থিওরি কনসেপ্টগুলো পর্যালোচনা করুন: ${conceptsBn.slice(0, 3).join(', ')}।`,
        `সমস্ত প্রয়োজনীয়তা পূরণ করে পরিষ্কার, বৈধ HTML কোড লিখুন।`,
        `লাইভ প্রিভিউ উইন্ডোতে আউটপুট দেখতে "Run Code" এ ক্লিক করুন।`
      ]
    },
    expectedResult: {
      en: `A well-structured HTML document demonstrating ${titleEn} with valid syntax.`,
      bn: `${titleBn} প্রদর্শনকারী সঠিক সিনট্যাক্সসহ একটি সুগঠিত HTML ডকুমেন্ট।`
    },
    skills: {
      en: conceptsEn,
      bn: conceptsBn
    }
  };
}

function generateCssTask(
  lesson: Lesson,
  titleEn: string,
  titleBn: string,
  conceptsEn: string[],
  conceptsBn: string[],
  practiceCode: string,
  expectedOutput: string
): SandboxTask {
  const lowerTitle = titleEn.toLowerCase();

  let reqs: SandboxTaskRequirement[] = [];
  let objEn = `Apply CSS styling rules for "${titleEn}" to transform the layout and appearance.`;
  let objBn = `লেআউট ও অ্যাপিয়ারেন্স রূপান্তর করতে "${titleBn}"-এর জন্য CSS স্টাইলিং রুল প্রয়োগ করুন।`;

  if (lowerTitle.includes('flexbox') || lowerTitle.includes('flex')) {
    reqs = [
      {
        id: 'req-1',
        text: { en: 'Set layout container to display: flex', bn: 'লেআউট কন্টেইনারে display: flex সেট করুন' },
        checkType: 'css_contains',
        checkValue: 'display: flex'
      },
      {
        id: 'req-2',
        text: { en: 'Apply alignment properties (justify-content or align-items)', bn: 'অ্যালাইনমেন্ট প্রপার্টি (justify-content বা align-items) প্রয়োগ করুন' },
        checkType: 'css_contains',
        checkValue: 'justify-content'
      }
    ];
  } else if (lowerTitle.includes('grid')) {
    reqs = [
      {
        id: 'req-1',
        text: { en: 'Set container layout to display: grid', bn: 'কন্টেইনার লেআউটে display: grid সেট করুন' },
        checkType: 'css_contains',
        checkValue: 'display: grid'
      },
      {
        id: 'req-2',
        text: { en: 'Define column layouts using grid-template-columns', bn: 'grid-template-columns ব্যবহার করে কলাম লেআউট ডিফাইন করুন' },
        checkType: 'css_contains',
        checkValue: 'grid-template-columns'
      }
    ];
  } else if (lowerTitle.includes('position')) {
    reqs = [
      {
        id: 'req-1',
        text: { en: 'Apply position property (relative, absolute, fixed, or sticky)', bn: 'position প্রপার্টি (relative, absolute, fixed, বা sticky) প্রয়োগ করুন' },
        checkType: 'css_contains',
        checkValue: 'position:'
      }
    ];
  } else if (lowerTitle.includes('responsive') || lowerTitle.includes('media query')) {
    reqs = [
      {
        id: 'req-1',
        text: { en: 'Write responsive media query block (@media)', bn: 'রেসপন্সিভ মিডিয়া কোয়েরি ব্লক (@media) লিখুন' },
        checkType: 'css_contains',
        checkValue: '@media'
      }
    ];
  } else {
    reqs = [
      {
        id: 'req-1',
        text: { en: `Write custom CSS rules targeting elements for ${titleEn}`, bn: `${titleBn}-এর জন্য এলিমেন্ট টার্গেট করে কাস্টম CSS রুল লিখুন` },
        checkType: 'css_contains',
        checkValue: '{'
      }
    ];
  }

  if (expectedOutput) {
    reqs.push({
      id: 'req-expected',
      text: { en: `Verify preview output matches: "${expectedOutput.slice(0, 35)}..."`, bn: `প্রিভিউ আউটপুট মিলিয়ে নিন: "${expectedOutput.slice(0, 35)}..."` },
      checkType: 'expected_output',
      checkValue: expectedOutput
    });
  }

  return {
    objective: { en: objEn, bn: objBn },
    requirements: reqs,
    instructions: {
      en: [
        `Switch to the CSS tab in the Practice Sandbox below.`,
        `Review the theory concepts: ${conceptsEn.slice(0, 3).join(', ')}.`,
        `Apply styling declarations to format elements as required.`,
        `Observe live changes rendered in the Preview Sandbox.`
      ],
      bn: [
        `নিচের প্র্যাকটিস স্যান্ডবক্সের CSS ট্যাবে স্যুইচ করুন।`,
        `থিওরি কনসেপ্টগুলো পর্যালোচনা করুন: ${conceptsBn.slice(0, 3).join(', ')}।`,
        `প্রয়োজন অনুযায়ী এলিমেন্টগুলো ফর্ম্যাট করতে স্টাইলিং ডিক্লেয়ারেশন প্রয়োগ করুন।`,
        `প্রিভিউ স্যান্ডবক্সে লাইভ পরিবর্তন পর্যবেক্ষণ করুন।`
      ]
    },
    expectedResult: {
      en: `A styled visual layout formatted according to ${titleEn} principles.`,
      bn: `${titleBn} এর মূলনীতি অনুযায়ী ফর্ম্যাট করা একটি সুন্দর ভিজ্যুয়াল লেআউট।`
    },
    skills: {
      en: conceptsEn,
      bn: conceptsBn
    }
  };
}

function generateJsTask(
  lesson: Lesson,
  titleEn: string,
  titleBn: string,
  conceptsEn: string[],
  conceptsBn: string[],
  practiceCode: string,
  expectedOutput: string
): SandboxTask {
  const lowerTitle = titleEn.toLowerCase();

  let reqs: SandboxTaskRequirement[] = [];
  let objEn = `Write JavaScript code demonstrating core logic for: "${titleEn}".`;
  let objBn = `"${titleBn}"-এর মূল লজিক প্রদর্শন করে JavaScript কোড লিখুন।`;

  if (lowerTitle.includes('array') || lowerTitle.includes('map') || lowerTitle.includes('filter')) {
    reqs = [
      {
        id: 'req-1',
        text: { en: 'Manipulate or transform array data using methods (map, filter, or reduce)', bn: 'অ্যারে মেথড (map, filter, বা reduce) ব্যবহার করে ডেটা প্রসেস করুন' },
        checkType: 'js_contains',
        checkValue: '.'
      },
      {
        id: 'req-2',
        text: { en: 'Output the processed result using console.log()', bn: 'console.log() ব্যবহার করে প্রসেস করা ফলাফল আউটপুট দিন' },
        checkType: 'js_contains',
        checkValue: 'console.log'
      }
    ];
  } else if (lowerTitle.includes('dom') || lowerTitle.includes('element') || lowerTitle.includes('event')) {
    reqs = [
      {
        id: 'req-1',
        text: { en: 'Select or query DOM elements using querySelector or getElementById', bn: 'querySelector বা getElementById ব্যবহার করে DOM এলিমেন্ট সিলেক্ট করুন' },
        checkType: 'js_contains',
        checkValue: 'document.'
      },
      {
        id: 'req-2',
        text: { en: 'Attach event listener or update DOM content', bn: 'ইভেন্ট লিসেনার যুক্ত করুন বা DOM কন্টেন্ট আপডেট করুন' },
        checkType: 'js_contains',
        checkValue: 'addEventListener'
      }
    ];
  } else if (lowerTitle.includes('function') || lowerTitle.includes('arrow')) {
    reqs = [
      {
        id: 'req-1',
        text: { en: 'Declare a reusable function or arrow function syntax', bn: 'একটি রিইউজেবল ফাংশন বা অ্যারো ফাংশন ডিফাইন করুন' },
        checkType: 'js_contains',
        checkValue: 'function'
      },
      {
        id: 'req-2',
        text: { en: 'Invoke function and log output to execution console', bn: 'ফাংশন কল করুন এবং কনসোলে আউটপুট দেখুন' },
        checkType: 'js_contains',
        checkValue: 'console.log'
      }
    ];
  } else {
    reqs = [
      {
        id: 'req-1',
        text: { en: `Implement JavaScript logic covering ${titleEn}`, bn: `${titleBn} কভার করে JavaScript লজিক বাস্তবায়ন করুন` },
        checkType: 'js_contains',
        checkValue: 'console.log'
      }
    ];
  }

  if (expectedOutput) {
    reqs.push({
      id: 'req-expected',
      text: { en: `Verify console output matches expected value: "${expectedOutput.slice(0, 35)}..."`, bn: `কনসোল আউটপুট প্রত্যাশিত মান মিলিয়ে নিন: "${expectedOutput.slice(0, 35)}..."` },
      checkType: 'expected_output',
      checkValue: expectedOutput
    });
  }

  return {
    objective: { en: objEn, bn: objBn },
    requirements: reqs,
    instructions: {
      en: [
        `Select the JS editor tab in the Practice Sandbox below.`,
        `Review the theory concepts: ${conceptsEn.slice(0, 3).join(', ')}.`,
        `Write executable JavaScript statements fulfilling all requirements.`,
        `Click "Run Code" and inspect console output in the Execution Console panel.`
      ],
      bn: [
        `নিচের প্র্যাকটিস স্যান্ডবক্সের JS এডিটর ট্যাব সিলেক্ট করুন।`,
        `থিওরি কনসেপ্টগুলো পর্যালোচনা করুন: ${conceptsBn.slice(0, 3).join(', ')}।`,
        `সমস্ত প্রয়োজনীয়তা পূরণ করে এক্সিকিউটেবল JavaScript স্টেটমেন্ট লিখুন।`,
        `"Run Code" এ ক্লিক করুন এবং এক্সিকিউশন কনসোল প্যানেলে আউটপুট পরীক্ষা করুন।`
      ]
    },
    expectedResult: {
      en: `Correct execution output logged to the console demonstrating ${titleEn}.`,
      bn: `${titleBn} প্রদর্শনকারী সঠিক এক্সিকিউশন আউটপুট কনসোলে প্রিন্ট হবে।`
    },
    skills: {
      en: conceptsEn,
      bn: conceptsBn
    }
  };
}

function generateReactTask(
  lesson: Lesson,
  titleEn: string,
  titleBn: string,
  conceptsEn: string[],
  conceptsBn: string[],
  practiceCode: string,
  expectedOutput: string
): SandboxTask {
  const reqs: SandboxTaskRequirement[] = [
    {
      id: 'req-1',
      text: { en: `Implement React component structure or state hook for ${titleEn}`, bn: `${titleBn}-এর জন্য React কম্পোনেন্ট স্ট্রাকচার বা স্টেট হুক বাস্তবায়ন করুন` },
      checkType: 'js_contains',
      checkValue: 'function'
    },
    {
      id: 'req-2',
      text: { en: 'Return clean JSX element markup or state handlers', bn: 'পরিষ্কার JSX এলিমেন্ট মার্কআপ বা স্টেট হ্যান্ডলার রিটার্ন করুন' },
      checkType: 'js_contains',
      checkValue: 'return'
    }
  ];

  if (expectedOutput) {
    reqs.push({
      id: 'req-expected',
      text: { en: `Verify rendered component output matches: "${expectedOutput.slice(0, 35)}..."`, bn: `রেন্ডার করা কম্পোনেন্ট আউটপুট মিলিয়ে নিন: "${expectedOutput.slice(0, 35)}..."` },
      checkType: 'expected_output',
      checkValue: expectedOutput
    });
  }

  return {
    objective: {
      en: `Build a React component exercising concepts for: "${titleEn}".`,
      bn: `"${titleBn}"-এর কনসেপ্ট প্রয়োগ করে একটি React কম্পোনেন্ট তৈরি করুন।`
    },
    requirements: reqs,
    instructions: {
      en: [
        `Inspect the JS/JSX editor tab below.`,
        `Review the theory concepts: ${conceptsEn.slice(0, 3).join(', ')}.`,
        `Implement functional component components with JSX and state logic.`,
        `Click "Run Code" to view the interactive React preview.`
      ],
      bn: [
        `নিচের JS/JSX এডিটর ট্যাবটি পরীক্ষা করুন।`,
        `থিওরি কনসেপ্টগুলো পর্যালোচনা করুন: ${conceptsBn.slice(0, 3).join(', ')}।`,
        `JSX এবং স্টেট লজিকসহ ফাংশনাল কম্পোনেন্ট বাস্তবায়ন করুন।`,
        `ইন্টারেক্টিভ React প্রিভিউ দেখতে "Run Code" এ ক্লিক করুন।`
      ]
    },
    expectedResult: {
      en: `A reactive component UI rendered cleanly in the sandbox preview.`,
      bn: `স্যান্ডবক্স প্রিভিউতে সুন্দরভাবে রেন্ডার হওয়া একটি রিঅ্যাক্টিভ কম্পোনেন্ট UI।`
    },
    skills: {
      en: conceptsEn,
      bn: conceptsBn
    }
  };
}

function generateGitTask(
  lesson: Lesson,
  titleEn: string,
  titleBn: string,
  conceptsEn: string[],
  conceptsBn: string[],
  practiceCode: string,
  expectedOutput: string
): SandboxTask {
  const reqs: SandboxTaskRequirement[] = [
    {
      id: 'req-1',
      text: { en: `Run Git workflow commands / logs for ${titleEn}`, bn: `${titleBn}-এর জন্য Git ওয়ার্কফ্লো কমান্ড / লগ রান করুন` },
      checkType: 'js_contains',
      checkValue: 'console.log'
    }
  ];

  if (expectedOutput) {
    reqs.push({
      id: 'req-expected',
      text: { en: `Verify execution log matches: "${expectedOutput.slice(0, 35)}..."`, bn: `এক্সিকিউশন লগ মিলিয়ে নিন: "${expectedOutput.slice(0, 35)}..."` },
      checkType: 'expected_output',
      checkValue: expectedOutput
    });
  }

  return {
    objective: {
      en: `Simulate Git staging, committing, or remote workflow for: "${titleEn}".`,
      bn: `"${titleBn}"-এর জন্য Git স্টেজিং, কমিটিং বা রিমোট ওয়ার্কফ্লো সিমুলেট করুন।`
    },
    requirements: reqs,
    instructions: {
      en: [
        `Open the Practice Sandbox JS editor below.`,
        `Review theory concepts: ${conceptsEn.slice(0, 3).join(', ')}.`,
        `Execute the script simulating repository operations.`,
        `Verify output logs printed in the Execution Console.`
      ],
      bn: [
        `নিচের প্র্যাকটিস স্যান্ডবক্সের JS এডিটর খুলুন।`,
        `থিওরি কনসেপ্টগুলো পর্যালোচনা করুন: ${conceptsBn.slice(0, 3).join(', ')}।`,
        `রেপোজিটরি অপারেশন সিমুলেটকারী স্ক্রিপ্ট রান করুন।`,
        `এক্সিকিউশন কনসোলে প্রিন্ট হওয়া আউটপুট লগ ভেরিফাই করুন।`
      ]
    },
    expectedResult: {
      en: `Successful simulation logs reflecting correct Git repository workflow.`,
      bn: `সঠিক Git রেপোজিটরি ওয়ার্কফ্লো প্রতিফলিতকারী সফল সিমুলেশন লগ।`
    },
    skills: {
      en: conceptsEn,
      bn: conceptsBn
    }
  };
}

function generateFullstackTask(
  lesson: Lesson,
  titleEn: string,
  titleBn: string,
  conceptsEn: string[],
  conceptsBn: string[],
  practiceCode: string,
  expectedOutput: string
): SandboxTask {
  const reqs: SandboxTaskRequirement[] = [
    {
      id: 'req-1',
      text: { en: `Implement backend / API logic for ${titleEn}`, bn: `${titleBn}-এর জন্য ব্যাকএন্ড / API লজিক বাস্তবায়ন করুন` },
      checkType: 'js_contains',
      checkValue: 'console.log'
    }
  ];

  if (expectedOutput) {
    reqs.push({
      id: 'req-expected',
      text: { en: `Verify output log matches: "${expectedOutput.slice(0, 35)}..."`, bn: `আউটপুট লগ মিলিয়ে নিন: "${expectedOutput.slice(0, 35)}..."` },
      checkType: 'expected_output',
      checkValue: expectedOutput
    });
  }

  return {
    objective: {
      en: `Implement fullstack data flow or server handling for: "${titleEn}".`,
      bn: `"${titleBn}"-এর জন্য ফুলস্ট্যাক ডেটা ফ্লো বা সার্ভার হ্যান্ডলিং বাস্তবায়ন করুন।`
    },
    requirements: reqs,
    instructions: {
      en: [
        `Open the Practice Sandbox below.`,
        `Review theory concepts: ${conceptsEn.slice(0, 3).join(', ')}.`,
        `Write code handling server data or requests.`,
        `Run code and check output in console.`
      ],
      bn: [
        `নিচের প্র্যাকটিস স্যান্ডবক্স খুলুন।`,
        `থিওরি কনসেপ্টগুলো পর্যালোচনা করুন: ${conceptsBn.slice(0, 3).join(', ')}।`,
        `সার্ভার ডেটা বা রিকোয়েস্ট হ্যান্ডেল করে কোড লিখুন।`,
        `কোড রান করুন এবং কনসোলে আউটপুট চেক করুন।`
      ]
    },
    expectedResult: {
      en: `Fullstack execution output matching specified request/response handling.`,
      bn: `নির্দিষ্ট রিকোয়েস্ট/রেসপন্স হ্যান্ডলিং-এর সাথে মিলে যাওয়া ফুলস্ট্যাক এক্সিকিউশন আউটপুট।`
    },
    skills: {
      en: conceptsEn,
      bn: conceptsBn
    }
  };
}
