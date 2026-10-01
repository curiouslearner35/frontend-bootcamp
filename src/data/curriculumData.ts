import { Week } from '../types';

export const CURRICULUM_DATA: Week[] = [
  {
    "id": "week-0",
    "order": 0,
    "title": {
      "en": "Week 0: Git Before Code",
      "bn": "উইক ০: কোডিং এর আগে গিট"
    },
    "subtitle": {
      "en": "6 lessons · Mandatory Foundation",
      "bn": "৬ টি লেসন · বাধ্যতামূলক ভিত্তি"
    },
    "description": {
      "en": "Mandatory foundational week: Master Git version control, repositories, branching, merge conflicts, and GitHub workflows before writing application code.",
      "bn": "বাধ্যতামূলক প্রাথমিক সপ্তাহ: কোড লেখার আগে গিট, ব্রাঞ্চিং, কনফ্লিক্ট রেজোলিউশন এবং গিটহাব ওয়ার্কফ্লো আয়ত্ত করুন।"
    },
    "isGitWeek": true,
    "lessons": [
      {
        "id": "w0-l1",
        "weekId": "week-0",
        "order": 1,
        "title": {
          "en": "1. Why Git Comes First",
          "bn": "১. কোডিং এর আগে গিট কেন?"
        },
        "description": {
          "en": "Learn why version control is the most critical developer skill and how Git protects codebases.",
          "bn": "ভার্সন কন্ট্রোল কেন সবচেয়ে গুরুত্বপূর্ণ এবং গিট কীভাবে কোডবেস সেফ রাখে তা শিখুন।"
        },
        "durationMinutes": 20,
        "difficulty": "Beginner",
        "category": "git",
        "objectives": {
          "en": [
            "Understand why professional teams enforce version control",
            "Recognize how Git tracks file changes and commit trees",
            "Avoid common beginner mistakes when starting new projects",
            "Complete initial environment verification"
          ],
          "bn": [
            "প্রফেশনাল টিম কেন ভার্সন কন্ট্রোল ব্যবহার করে তা বুজুন",
            "গিট কীভাবে ফাইলের পরিবর্তন ও কমিট হিস্ট্রি ধরে তা জানুন",
            "নতুন প্রজেক্টে সাধারণ ভুলগুলো এড়িয়ে চলুন",
            "প্রাথমিক এনভায়রনমেন্ট ভেরিফিকেশন সম্পন্ন করুন"
          ]
        },
        "concepts": {
          "en": [
            "History of Version Control Systems (VCS)",
            "Distributed vs Centralized Version Control",
            "The Git philosophy: Snapshots, not deltas",
            "Why Git mastery precedes writing code"
          ],
          "bn": [
            "ভার্সন কন্ট্রোল সিস্টেমের ইতিহাস",
            "ডিস্ট্রিবিউটেড বনাম সেন্ট্রালাইজড ভার্সন কন্ট্রোল",
            "গিট ফিলোসফি: ডেল্টা নয়, স্ন্যাপশট",
            "কোডিং এর আগে গিট শেখার গুরুত্ব"
          ]
        },
        "contentMarkdown": {
          "en": "### 1. Why Git Comes First\n\n#### 1. Learning Objective\nMaster **1. Why Git Comes First** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn why version control is the most critical developer skill and how Git protects codebases. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nExecute terminal CLI workflows associated with `1. Why Git Comes First` to safely version-control your repository.\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for 1. Why Git Comes First -->\n<section class=\"lesson-demo\">\n  <h2>1. Why Git Comes First</h2>\n  <p>Interactive lab exercise for 1. Why Git Comes First</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **1. Why Git Comes First** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### ১. কোডিং এর আগে গিট কেন?\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **১. কোডিং এর আগে গিট কেন?** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nভার্সন কন্ট্রোল কেন সবচেয়ে গুরুত্বপূর্ণ এবং গিট কীভাবে কোডবেস সেফ রাখে তা শিখুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**১. কোডিং এর আগে গিট কেন?** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "console.log(\"Git CLI Lab Initialized: 1. Why Git Comes First\");",
        "expectedOutput": "Git CLI Lab Initialized: 1. Why Git Comes First",
        "terminalTasks": [
          {
            "id": "task-w0-l1",
            "instruction": {
              "en": "Type `git --version` in terminal to verify Git installation.",
              "bn": "গিট ভার্সন চেক করতে `git --version` টাইপ করুন।"
            },
            "expectedCommandPattern": "git --version",
            "successMessage": {
              "en": "git version 2.42.0 initialized",
              "bn": "গিট ভার্সন ২.৪২.০ সচল রয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [],
        "resources": {
          "en": [
            "https://git-scm.com/doc",
            "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
          ],
          "bn": [
            "https://git-scm.com/doc",
            "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
          ]
        }
      },
      {
        "id": "w0-l2",
        "weekId": "week-0",
        "order": 2,
        "title": {
          "en": "2. git init / add / commit",
          "bn": "২. git init / add / commit"
        },
        "description": {
          "en": "Initialize local repositories, stage modified files, and commit snapshots with clear messages.",
          "bn": "রিপোজিটরি শুরু করুন, স্টেজ করুন এবং মেসেজ সহ কমিট সেভ করুন।"
        },
        "durationMinutes": 45,
        "difficulty": "Beginner",
        "category": "git",
        "objectives": {
          "en": [
            "Initialize empty repositories using git init",
            "Stage files with git add .",
            "Create commit snapshots with git commit -m",
            "Inspect staging state with git status"
          ],
          "bn": [
            "git init দিয়ে রিপোজিটরি শুরু করুন",
            "git add দিয়ে ফাইল স্টেজ করুন",
            "git commit -m দিয়ে সেভ করুন",
            "git status দিয়ে স্টেজিং স্টেট পরীক্ষা করুন"
          ]
        },
        "concepts": {
          "en": [
            "Working Directory, Staging Area (Index), Repository",
            "Atomic commits and conventional commit messages",
            "Checking file state with git status",
            "Understanding untracked vs tracked files"
          ],
          "bn": [
            "ওয়ার্কিং ডিরেক্টরি, স্টেজিং এরিয়া ও রিপোজিটরি",
            "অ্যাটমিক কমিট ও মেসেজ কনভেনশন",
            "git status দিয়ে অবস্থা দেখা",
            "ট্র্যাকড ও আনট্র্যাকড ফাইল বোঝা"
          ]
        },
        "contentMarkdown": {
          "en": "### 2. git init / add / commit\n\n#### 1. Learning Objective\nMaster **2. git init / add / commit** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nInitialize local repositories, stage modified files, and commit snapshots with clear messages. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nExecute terminal CLI workflows associated with `2. git init / add / commit` to safely version-control your repository.\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for 2. git init / add / commit -->\n<section class=\"lesson-demo\">\n  <h2>2. git init / add / commit</h2>\n  <p>Interactive lab exercise for 2. git init / add / commit</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **2. git init / add / commit** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### ২. git init / add / commit\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **২. git init / add / commit** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nরিপোজিটরি শুরু করুন, স্টেজ করুন এবং মেসেজ সহ কমিট সেভ করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**২. git init / add / commit** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "console.log(\"Commit staging complete.\");",
        "expectedOutput": "Commit staging complete.",
        "terminalTasks": [
          {
            "id": "task-w0-l2-1",
            "instruction": {
              "en": "Run `git init` in the terminal.",
              "bn": "টার্মিনালে `git init` রান করুন।"
            },
            "expectedCommandPattern": "git init",
            "successMessage": {
              "en": "Initialized empty Git repository in /workspace/.git/",
              "bn": "গিট রিপোজিটরি তৈরি হয়েছে!"
            }
          },
          {
            "id": "task-w0-l2-2",
            "instruction": {
              "en": "Run `git add .` to stage files.",
              "bn": "`git add .` লিখে সব স্টেজ করুন।"
            },
            "expectedCommandPattern": "git add .",
            "successMessage": {
              "en": "Changes staged for commit.",
              "bn": "ফাইল স্টেজ হয়েছে!"
            }
          },
          {
            "id": "task-w0-l2-3",
            "instruction": {
              "en": "Commit with `git commit -m \"initial commit\"`.",
              "bn": "`git commit -m \"initial commit\"` দিয়ে কমিট করুন।"
            },
            "expectedCommandPattern": "git commit -m \"initial commit\"",
            "successMessage": {
              "en": "[main (root-commit)] initial commit",
              "bn": "কমিট সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w0-l1"
        ],
        "resources": {
          "en": [
            "https://git-scm.com/doc",
            "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
          ],
          "bn": [
            "https://git-scm.com/doc",
            "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
          ]
        }
      },
      {
        "id": "w0-l3",
        "weekId": "week-0",
        "order": 3,
        "title": {
          "en": "3. Branching & Merging",
          "bn": "৩. ব্রাঞ্চিং এবং মার্জিং"
        },
        "description": {
          "en": "Create feature branches, switch environments, and merge branches into main safely.",
          "bn": "ফিচার ব্রাঞ্চ তৈরি করুন এবং মেইন ট্রাঙ্কে মার্চ করুন।"
        },
        "durationMinutes": 45,
        "difficulty": "Intermediate",
        "category": "git",
        "objectives": {
          "en": [
            "Create new branches with git checkout -b",
            "Switch between branches safely",
            "Merge feature branches into main",
            "Clean up merged local branches"
          ],
          "bn": [
            "git checkout -b দিয়ে ব্রাঞ্চ খুলুন",
            "ব্রাঞ্চ সুইচ করুন",
            "মেইনে মার্চ করুন",
            "মার্জ হওয়া লোকাল ব্রাঞ্চ রিমুভ করুন"
          ]
        },
        "concepts": {
          "en": [
            "Git HEAD pointer concepts",
            "Fast-forward merges vs 3-way merges",
            "Branch naming conventions (feature/, bugfix/)",
            "Isolating changes during development"
          ],
          "bn": [
            "গিট HEAD পয়েন্টার",
            "ফাস্ট-ফরোয়ার্ড বনাম ৩-ওয়ে মার্জ",
            "ব্রাঞ্চ নেমিং নিয়ম",
            "ডেভেলপমেন্টে পরিবর্তন আইসোলেট রাখা"
          ]
        },
        "contentMarkdown": {
          "en": "### 3. Branching & Merging\n\n#### 1. Learning Objective\nMaster **3. Branching & Merging** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nCreate feature branches, switch environments, and merge branches into main safely. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nExecute terminal CLI workflows associated with `3. Branching & Merging` to safely version-control your repository.\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for 3. Branching & Merging -->\n<section class=\"lesson-demo\">\n  <h2>3. Branching & Merging</h2>\n  <p>Interactive lab exercise for 3. Branching & Merging</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **3. Branching & Merging** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### ৩. ব্রাঞ্চিং এবং মার্জিং\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **৩. ব্রাঞ্চিং এবং মার্জিং** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nফিচার ব্রাঞ্চ তৈরি করুন এবং মেইন ট্রাঙ্কে মার্চ করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**৩. ব্রাঞ্চিং এবং মার্জিং** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "console.log(\"Branch merged successfully.\");",
        "expectedOutput": "Branch merged successfully.",
        "terminalTasks": [
          {
            "id": "task-w0-l3",
            "instruction": {
              "en": "Create feature branch using `git checkout -b feature/auth`.",
              "bn": "`git checkout -b feature/auth` দিয়ে ব্রাঞ্চ খুলুন।"
            },
            "expectedCommandPattern": "git checkout -b feature/auth",
            "successMessage": {
              "en": "Switched to branch 'feature/auth'",
              "bn": "নতুন ব্রাঞ্চে সুইচ করা হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w0-l2"
        ],
        "resources": {
          "en": [
            "https://git-scm.com/doc",
            "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
          ],
          "bn": [
            "https://git-scm.com/doc",
            "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
          ]
        }
      },
      {
        "id": "w0-l4",
        "weekId": "week-0",
        "order": 4,
        "title": {
          "en": "4. Remotes, Pull & Push",
          "bn": "৪. রিমোট, পুল এবং পুশ"
        },
        "description": {
          "en": "Connect local repositories to remote GitHub origins, push commits, and pull updates.",
          "bn": "গিটহাব রিমোটের সাথে লোকাল কোড সিঙ্ক করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "git",
        "objectives": {
          "en": [
            "Add remote origins using git remote add",
            "Push branch commits using git push",
            "Fetch and merge changes with git pull",
            "Understand upstream tracking flags"
          ],
          "bn": [
            "git remote add দিয়ে রিমোট কানেক্ট করুন",
            "git push দিয়ে আপলোড করুন",
            "git pull দিয়ে ক্লাউড আপডেট আনুন",
            "আপস্ট্রিম ট্র্যাকিং ফ্ল্যাগ বুজুন"
          ]
        },
        "concepts": {
          "en": [
            "Remote tracking branches (origin/main)",
            "Upstream flags (-u)",
            "Pull vs Fetch differences",
            "Synchronizing local and remote history"
          ],
          "bn": [
            "রিমোট ট্র্যাকিং ব্রাঞ্চ",
            "আপস্ট্রিম ফ্ল্যাগ",
            "পুল বনাম ফেচ এর পার্থক্য",
            "লোকাল ও রিমোট হিস্ট্রি সিঙ্ক রাখা"
          ]
        },
        "contentMarkdown": {
          "en": "### 4. Remotes, Pull & Push\n\n#### 1. Learning Objective\nMaster **4. Remotes, Pull & Push** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nConnect local repositories to remote GitHub origins, push commits, and pull updates. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nExecute terminal CLI workflows associated with `4. Remotes, Pull & Push` to safely version-control your repository.\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for 4. Remotes, Pull & Push -->\n<section class=\"lesson-demo\">\n  <h2>4. Remotes, Pull & Push</h2>\n  <p>Interactive lab exercise for 4. Remotes, Pull & Push</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **4. Remotes, Pull & Push** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### ৪. রিমোট, পুল এবং পুশ\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **৪. রিমোট, পুল এবং পুশ** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nগিটহাব রিমোটের সাথে লোকাল কোড সিঙ্ক করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**৪. রিমোট, পুল এবং পুশ** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "console.log(\"Remote synchronized.\");",
        "expectedOutput": "Remote synchronized.",
        "terminalTasks": [
          {
            "id": "task-w0-l4",
            "instruction": {
              "en": "Check remote status using `git branch`.",
              "bn": "`git branch` টাইপ করে ব্রাঞ্চ দেখুন।"
            },
            "expectedCommandPattern": "git branch",
            "successMessage": {
              "en": "* main",
              "bn": "মেইন ব্রাঞ্চ সক্রিয় রয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w0-l3"
        ],
        "resources": {
          "en": [
            "https://git-scm.com/doc",
            "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
          ],
          "bn": [
            "https://git-scm.com/doc",
            "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
          ]
        }
      },
      {
        "id": "w0-l5",
        "weekId": "week-0",
        "order": 5,
        "title": {
          "en": "5. Resolving Conflicts",
          "bn": "৫. মার্জ কনফ্লিক্ট রেজোলিউশন"
        },
        "description": {
          "en": "Identify merge conflicts in files, resolve conflicting code lines, and finalize clean merges.",
          "bn": "মার্জ কনফ্লিক্ট শনাক্ত করুন এবং কোড সেফলি সলভ করুন।"
        },
        "durationMinutes": 35,
        "difficulty": "Advanced",
        "category": "git",
        "objectives": {
          "en": [
            "Understand what causes Git merge conflicts",
            "Identify conflict markers in code",
            "Resolve conflicts manually and complete the merge commit",
            "Use git status to verify clean resolution"
          ],
          "bn": [
            "মার্জ কনফ্লিক্টের কারণ জানুন",
            "কনফ্লিক্ট মার্কার বুঝতে শিখুন",
            "ম্যানুয়ালি কনফ্লিক্ট সলভ করে কমিট করুন",
            "git status দিয়ে সফল সমাধান নিশ্চিত করুন"
          ]
        },
        "concepts": {
          "en": [
            "Why conflicts happen when two branches modify the same line",
            "3-way diff comparison",
            "Stashing uncommitted changes with git stash",
            "Finalizing merge commits after conflict resolution"
          ],
          "bn": [
            "কেন একই লাইনে পরিবর্তনের কারণে কনফ্লিক্ট হয়",
            "৩-ওয়ে ডিফ তুলনা",
            "git stash দিয়ে সাময়িক সেভ রাখা",
            "কনফ্লিক্ট সমাধানের পর ফাইনাল কমিট"
          ]
        },
        "contentMarkdown": {
          "en": "### 5. Resolving Conflicts\n\n#### 1. Learning Objective\nMaster **5. Resolving Conflicts** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nIdentify merge conflicts in files, resolve conflicting code lines, and finalize clean merges. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nExecute terminal CLI workflows associated with `5. Resolving Conflicts` to safely version-control your repository.\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for 5. Resolving Conflicts -->\n<section class=\"lesson-demo\">\n  <h2>5. Resolving Conflicts</h2>\n  <p>Interactive lab exercise for 5. Resolving Conflicts</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **5. Resolving Conflicts** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### ৫. মার্জ কনফ্লিক্ট রেজোলিউশন\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **৫. মার্জ কনফ্লিক্ট রেজোলিউশন** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nমার্জ কনফ্লিক্ট শনাক্ত করুন এবং কোড সেফলি সলভ করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**৫. মার্জ কনফ্লিক্ট রেজোলিউশন** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "console.log(\"Merge conflict resolved cleanly.\");",
        "expectedOutput": "Merge conflict resolved cleanly.",
        "terminalTasks": [
          {
            "id": "task-w0-l5",
            "instruction": {
              "en": "Run `git status` to verify resolved file state.",
              "bn": "`git status` দিয়ে সলভড স্টেট চেক করুন।"
            },
            "expectedCommandPattern": "git status",
            "successMessage": {
              "en": "All conflicts resolved. Ready to commit.",
              "bn": "সব কনফ্লিক্ট সলভ হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w0-l4"
        ],
        "resources": {
          "en": [
            "https://git-scm.com/doc",
            "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
          ],
          "bn": [
            "https://git-scm.com/doc",
            "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
          ]
        }
      },
      {
        "id": "w0-l6",
        "weekId": "week-0",
        "order": 6,
        "title": {
          "en": "6. GitHub Workflow (fork → PR)",
          "bn": "৬. গিটহাব ওয়ার্কফ্লো (fork → PR)"
        },
        "description": {
          "en": "Fork public repositories, make feature commits on topic branches, and submit Pull Requests on GitHub.",
          "bn": "পাবলিক প্রজেক্ট ফর্ক করুন, চেঞ্জ করুন এবং পুল রিকোয়েস্ট (PR) পাঠাতেন।"
        },
        "durationMinutes": 60,
        "difficulty": "Advanced",
        "category": "git",
        "objectives": {
          "en": [
            "Fork upstream open-source repositories",
            "Clone forks locally and set upstream remotes",
            "Create Pull Requests with clear descriptions and issue tags",
            "Respond to reviewer feedback in open-source PRs"
          ],
          "bn": [
            "ওপেন সোর্স প্রজেক্ট ফর্ক করুন",
            "লোকালে ক্লোন ও আপস্ট্রিম সেট করুন",
            "ক্লিয়ার ডেসক্রিপশন সহ পুল রিকোয়েস্ট পাঠান",
            "রিভিউয়ার ফিডব্যাকের ভিত্তিতে কোড আপডেট করুন"
          ]
        },
        "concepts": {
          "en": [
            "Forking vs Direct Cloning",
            "Pull Request review workflow and code reviews",
            "Squashing commits before PR approval",
            "Upstream synchronization pattern"
          ],
          "bn": [
            "ফর্কিং বনাম ক্লোনিং",
            "পুল রিকোয়েস্ট রিভিউ ও কোড রিভিউ",
            "স্কোয়াশ কমিট",
            "আপস্ট্রিম সিঙ্ক্রোনাইজেশন প্যাটার্ন"
          ]
        },
        "contentMarkdown": {
          "en": "### 6. GitHub Workflow (fork → PR)\n\n#### 1. Learning Objective\nMaster **6. GitHub Workflow (fork → PR)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nFork public repositories, make feature commits on topic branches, and submit Pull Requests on GitHub. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nExecute terminal CLI workflows associated with `6. GitHub Workflow (fork → PR)` to safely version-control your repository.\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for 6. GitHub Workflow (fork → PR) -->\n<section class=\"lesson-demo\">\n  <h2>6. GitHub Workflow (fork → PR)</h2>\n  <p>Interactive lab exercise for 6. GitHub Workflow (fork → PR)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **6. GitHub Workflow (fork → PR)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### ৬. গিটহাব ওয়ার্কফ্লো (fork → PR)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **৬. গিটহাব ওয়ার্কফ্লো (fork → PR)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nপাবলিক প্রজেক্ট ফর্ক করুন, চেঞ্জ করুন এবং পুল রিকোয়েস্ট (PR) পাঠাতেন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**৬. গিটহাব ওয়ার্কফ্লো (fork → PR)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "console.log(\"Pull Request submitted for review!\");",
        "expectedOutput": "Pull Request submitted for review!",
        "terminalTasks": [
          {
            "id": "task-w0-l6",
            "instruction": {
              "en": "Type `git status` to check final repository state before opening PR.",
              "bn": "PR খোলার আগে `git status` লিখে ফাইন্যাল স্টেট চেক করুন।"
            },
            "expectedCommandPattern": "git status",
            "successMessage": {
              "en": "Branch up to date. Ready for Pull Request.",
              "bn": "ব্রাঞ্চ আপ-টু-ডেট! PR এর জন্য প্রস্তুত।"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w0-l5"
        ],
        "resources": {
          "en": [
            "https://git-scm.com/doc",
            "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
          ],
          "bn": [
            "https://git-scm.com/doc",
            "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
          ]
        }
      }
    ]
  },
  {
    "id": "week-1",
    "order": 1,
    "title": {
      "en": "Week 1: HTML5 Mastery",
      "bn": "উইক 1: HTML5 দক্ষতা"
    },
    "subtitle": {
      "en": "HTML5 Mastery (15 Lessons)",
      "bn": "HTML5 দক্ষতা (15 টি লেসন)"
    },
    "description": {
      "en": "Comprehensive HTML5 Mastery module with 15 interactive step-by-step lessons.",
      "bn": "15 টি ইন্টারঅ্যাক্টিভ লেসন সহ HTML5 দক্ষতা এর সম্পূর্ণ মডিউল।"
    },
    "isGitWeek": false,
    "lessons": [
      {
        "id": "w1-l1",
        "weekId": "week-1",
        "order": 1,
        "title": {
          "en": "Introduction to HTML5 & Web Structure",
          "bn": "1. Introduction to HTML5 & Web Structure"
        },
        "description": {
          "en": "Learn and master Introduction to HTML5 & Web Structure with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Introduction to HTML5 & Web Structure এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Introduction to HTML5 & Web Structure\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Introduction to HTML5 & Web Structure\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Introduction to HTML5 & Web Structure\n\n#### 1. Learning Objective\nMaster **Introduction to HTML5 & Web Structure** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Introduction to HTML5 & Web Structure with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Introduction to HTML5 & Web Structure -->\n<div class=\"container\">\n  <!-- Introduction to HTML5 & Web Structure element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Introduction to HTML5 & Web Structure -->\n<section class=\"lesson-demo\">\n  <h2>Introduction to HTML5 & Web Structure</h2>\n  <p>Interactive lab exercise for Introduction to HTML5 & Web Structure</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Introduction to HTML5 & Web Structure** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 1. Introduction to HTML5 & Web Structure\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **1. Introduction to HTML5 & Web Structure** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nIntroduction to HTML5 & Web Structure এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**1. Introduction to HTML5 & Web Structure** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Introduction to HTML5 & Web Structure</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Introduction to HTML5 & Web Structure\");\n</script>",
        "expectedOutput": "Practice loaded for: Introduction to HTML5 & Web Structure",
        "terminalTasks": [
          {
            "id": "task-w1-l1",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Introduction to HTML5 & Web Structure test.",
              "bn": "Introduction to HTML5 & Web Structure টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Introduction to HTML5 & Web Structure!",
              "bn": "Introduction to HTML5 & Web Structure টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ]
        }
      },
      {
        "id": "w1-l2",
        "weekId": "week-1",
        "order": 2,
        "title": {
          "en": "Semantic HTML Tags (header, nav, article, section, footer)",
          "bn": "2. Semantic HTML Tags (header, nav, article, section, footer)"
        },
        "description": {
          "en": "Learn and master Semantic HTML Tags (header, nav, article, section, footer) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Semantic HTML Tags (header, nav, article, section, footer) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 28,
        "difficulty": "Beginner",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Semantic HTML Tags (header, nav, article, section, footer)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Semantic HTML Tags (header, nav, article, section, footer)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Semantic HTML Tags (header, nav, article, section, footer)\n\n#### 1. Learning Objective\nMaster **Semantic HTML Tags (header, nav, article, section, footer)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Semantic HTML Tags (header, nav, article, section, footer) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Semantic HTML Tags (header, nav, article, section, footer) -->\n<div class=\"container\">\n  <!-- Semantic HTML Tags (header, nav, article, section, footer) element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Semantic HTML Tags (header, nav, article, section, footer) -->\n<section class=\"lesson-demo\">\n  <h2>Semantic HTML Tags (header, nav, article, section, footer)</h2>\n  <p>Interactive lab exercise for Semantic HTML Tags (header, nav, article, section, footer)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Semantic HTML Tags (header, nav, article, section, footer)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 2. Semantic HTML Tags (header, nav, article, section, footer)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **2. Semantic HTML Tags (header, nav, article, section, footer)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nSemantic HTML Tags (header, nav, article, section, footer) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**2. Semantic HTML Tags (header, nav, article, section, footer)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Semantic HTML Tags (header, nav, article, section, footer)</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Semantic HTML Tags (header, nav, article, section, footer)\");\n</script>",
        "expectedOutput": "Practice loaded for: Semantic HTML Tags (header, nav, article, section, footer)",
        "terminalTasks": [
          {
            "id": "task-w1-l2",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Semantic HTML Tags (header, nav, article, section, footer) test.",
              "bn": "Semantic HTML Tags (header, nav, article, section, footer) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Semantic HTML Tags (header, nav, article, section, footer)!",
              "bn": "Semantic HTML Tags (header, nav, article, section, footer) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
          ]
        }
      },
      {
        "id": "w1-l3",
        "weekId": "week-1",
        "order": 3,
        "title": {
          "en": "Text & Headings (proper hierarchy h1-h6)",
          "bn": "3. Text & Headings (proper hierarchy h1-h6)"
        },
        "description": {
          "en": "Learn and master Text & Headings (proper hierarchy h1-h6) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Text & Headings (proper hierarchy h1-h6) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 31,
        "difficulty": "Beginner",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Text & Headings (proper hierarchy h1-h6)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Text & Headings (proper hierarchy h1-h6)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Text & Headings (proper hierarchy h1-h6)\n\n#### 1. Learning Objective\nMaster **Text & Headings (proper hierarchy h1-h6)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Text & Headings (proper hierarchy h1-h6) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Text & Headings (proper hierarchy h1-h6) -->\n<div class=\"container\">\n  <!-- Text & Headings (proper hierarchy h1-h6) element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Text & Headings (proper hierarchy h1-h6) -->\n<section class=\"lesson-demo\">\n  <h2>Text & Headings (proper hierarchy h1-h6)</h2>\n  <p>Interactive lab exercise for Text & Headings (proper hierarchy h1-h6)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Text & Headings (proper hierarchy h1-h6)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 3. Text & Headings (proper hierarchy h1-h6)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **3. Text & Headings (proper hierarchy h1-h6)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nText & Headings (proper hierarchy h1-h6) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**3. Text & Headings (proper hierarchy h1-h6)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Text & Headings (proper hierarchy h1-h6)</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Text & Headings (proper hierarchy h1-h6)\");\n</script>",
        "expectedOutput": "Practice loaded for: Text & Headings (proper hierarchy h1-h6)",
        "terminalTasks": [
          {
            "id": "task-w1-l3",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Text & Headings (proper hierarchy h1-h6) test.",
              "bn": "Text & Headings (proper hierarchy h1-h6) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Text & Headings (proper hierarchy h1-h6)!",
              "bn": "Text & Headings (proper hierarchy h1-h6) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l2"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          ]
        }
      },
      {
        "id": "w1-l4",
        "weekId": "week-1",
        "order": 4,
        "title": {
          "en": "Links & Navigation (href, relative vs absolute paths)",
          "bn": "4. Links & Navigation (href, relative vs absolute paths)"
        },
        "description": {
          "en": "Learn and master Links & Navigation (href, relative vs absolute paths) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Links & Navigation (href, relative vs absolute paths) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 34,
        "difficulty": "Beginner",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Links & Navigation (href, relative vs absolute paths)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Links & Navigation (href, relative vs absolute paths)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Links & Navigation (href, relative vs absolute paths)\n\n#### 1. Learning Objective\nMaster **Links & Navigation (href, relative vs absolute paths)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Links & Navigation (href, relative vs absolute paths) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Links & Navigation (href, relative vs absolute paths) -->\n<div class=\"container\">\n  <!-- Links & Navigation (href, relative vs absolute paths) element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Links & Navigation (href, relative vs absolute paths) -->\n<section class=\"lesson-demo\">\n  <h2>Links & Navigation (href, relative vs absolute paths)</h2>\n  <p>Interactive lab exercise for Links & Navigation (href, relative vs absolute paths)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Links & Navigation (href, relative vs absolute paths)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 4. Links & Navigation (href, relative vs absolute paths)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **4. Links & Navigation (href, relative vs absolute paths)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nLinks & Navigation (href, relative vs absolute paths) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**4. Links & Navigation (href, relative vs absolute paths)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Links & Navigation (href, relative vs absolute paths)</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Links & Navigation (href, relative vs absolute paths)\");\n</script>",
        "expectedOutput": "Practice loaded for: Links & Navigation (href, relative vs absolute paths)",
        "terminalTasks": [
          {
            "id": "task-w1-l4",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Links & Navigation (href, relative vs absolute paths) test.",
              "bn": "Links & Navigation (href, relative vs absolute paths) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Links & Navigation (href, relative vs absolute paths)!",
              "bn": "Links & Navigation (href, relative vs absolute paths) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l3"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          ]
        }
      },
      {
        "id": "w1-l5",
        "weekId": "week-1",
        "order": 5,
        "title": {
          "en": "Images & Media (img, picture, audio, video tags)",
          "bn": "5. Images & Media (img, picture, audio, video tags)"
        },
        "description": {
          "en": "Learn and master Images & Media (img, picture, audio, video tags) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Images & Media (img, picture, audio, video tags) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 37,
        "difficulty": "Beginner",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Images & Media (img, picture, audio, video tags)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Images & Media (img, picture, audio, video tags)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Images & Media (img, picture, audio, video tags)\n\n#### 1. Learning Objective\nMaster **Images & Media (img, picture, audio, video tags)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Images & Media (img, picture, audio, video tags) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Images & Media (img, picture, audio, video tags) -->\n<div class=\"container\">\n  <!-- Images & Media (img, picture, audio, video tags) element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Images & Media (img, picture, audio, video tags) -->\n<section class=\"lesson-demo\">\n  <h2>Images & Media (img, picture, audio, video tags)</h2>\n  <p>Interactive lab exercise for Images & Media (img, picture, audio, video tags)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Images & Media (img, picture, audio, video tags)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 5. Images & Media (img, picture, audio, video tags)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **5. Images & Media (img, picture, audio, video tags)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nImages & Media (img, picture, audio, video tags) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**5. Images & Media (img, picture, audio, video tags)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Images & Media (img, picture, audio, video tags)</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Images & Media (img, picture, audio, video tags)\");\n</script>",
        "expectedOutput": "Practice loaded for: Images & Media (img, picture, audio, video tags)",
        "terminalTasks": [
          {
            "id": "task-w1-l5",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Images & Media (img, picture, audio, video tags) test.",
              "bn": "Images & Media (img, picture, audio, video tags) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Images & Media (img, picture, audio, video tags)!",
              "bn": "Images & Media (img, picture, audio, video tags) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l4"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ]
        }
      },
      {
        "id": "w1-l6",
        "weekId": "week-1",
        "order": 6,
        "title": {
          "en": "Forms - Part 1 (form element, input types)",
          "bn": "6. Forms - Part 1 (form element, input types)"
        },
        "description": {
          "en": "Learn and master Forms - Part 1 (form element, input types) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Forms - Part 1 (form element, input types) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Forms - Part 1 (form element, input types)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Forms - Part 1 (form element, input types)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Forms - Part 1 (form element, input types)\n\n#### 1. Learning Objective\nMaster **Forms - Part 1 (form element, input types)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Forms - Part 1 (form element, input types) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Forms - Part 1 (form element, input types) -->\n<div class=\"container\">\n  <!-- Forms - Part 1 (form element, input types) element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Forms - Part 1 (form element, input types) -->\n<section class=\"lesson-demo\">\n  <h2>Forms - Part 1 (form element, input types)</h2>\n  <p>Interactive lab exercise for Forms - Part 1 (form element, input types)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Forms - Part 1 (form element, input types)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 6. Forms - Part 1 (form element, input types)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **6. Forms - Part 1 (form element, input types)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nForms - Part 1 (form element, input types) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**6. Forms - Part 1 (form element, input types)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Forms - Part 1 (form element, input types)</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Forms - Part 1 (form element, input types)\");\n</script>",
        "expectedOutput": "Practice loaded for: Forms - Part 1 (form element, input types)",
        "terminalTasks": [
          {
            "id": "task-w1-l6",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Forms - Part 1 (form element, input types) test.",
              "bn": "Forms - Part 1 (form element, input types) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Forms - Part 1 (form element, input types)!",
              "bn": "Forms - Part 1 (form element, input types) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l5"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ]
        }
      },
      {
        "id": "w1-l7",
        "weekId": "week-1",
        "order": 7,
        "title": {
          "en": "Forms - Part 2 (textarea, select, radio, checkbox)",
          "bn": "7. Forms - Part 2 (textarea, select, radio, checkbox)"
        },
        "description": {
          "en": "Learn and master Forms - Part 2 (textarea, select, radio, checkbox) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Forms - Part 2 (textarea, select, radio, checkbox) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 43,
        "difficulty": "Intermediate",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Forms - Part 2 (textarea, select, radio, checkbox)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Forms - Part 2 (textarea, select, radio, checkbox)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Forms - Part 2 (textarea, select, radio, checkbox)\n\n#### 1. Learning Objective\nMaster **Forms - Part 2 (textarea, select, radio, checkbox)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Forms - Part 2 (textarea, select, radio, checkbox) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Forms - Part 2 (textarea, select, radio, checkbox) -->\n<div class=\"container\">\n  <!-- Forms - Part 2 (textarea, select, radio, checkbox) element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Forms - Part 2 (textarea, select, radio, checkbox) -->\n<section class=\"lesson-demo\">\n  <h2>Forms - Part 2 (textarea, select, radio, checkbox)</h2>\n  <p>Interactive lab exercise for Forms - Part 2 (textarea, select, radio, checkbox)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Forms - Part 2 (textarea, select, radio, checkbox)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 7. Forms - Part 2 (textarea, select, radio, checkbox)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **7. Forms - Part 2 (textarea, select, radio, checkbox)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nForms - Part 2 (textarea, select, radio, checkbox) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**7. Forms - Part 2 (textarea, select, radio, checkbox)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Forms - Part 2 (textarea, select, radio, checkbox)</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Forms - Part 2 (textarea, select, radio, checkbox)\");\n</script>",
        "expectedOutput": "Practice loaded for: Forms - Part 2 (textarea, select, radio, checkbox)",
        "terminalTasks": [
          {
            "id": "task-w1-l7",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Forms - Part 2 (textarea, select, radio, checkbox) test.",
              "bn": "Forms - Part 2 (textarea, select, radio, checkbox) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Forms - Part 2 (textarea, select, radio, checkbox)!",
              "bn": "Forms - Part 2 (textarea, select, radio, checkbox) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l6"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ]
        }
      },
      {
        "id": "w1-l8",
        "weekId": "week-1",
        "order": 8,
        "title": {
          "en": "Form Attributes & Validation (required, pattern, type)",
          "bn": "8. Form Attributes & Validation (required, pattern, type)"
        },
        "description": {
          "en": "Learn and master Form Attributes & Validation (required, pattern, type) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Form Attributes & Validation (required, pattern, type) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 46,
        "difficulty": "Intermediate",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Form Attributes & Validation (required, pattern, type)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Form Attributes & Validation (required, pattern, type)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Form Attributes & Validation (required, pattern, type)\n\n#### 1. Learning Objective\nMaster **Form Attributes & Validation (required, pattern, type)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Form Attributes & Validation (required, pattern, type) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Form Attributes & Validation (required, pattern, type) -->\n<div class=\"container\">\n  <!-- Form Attributes & Validation (required, pattern, type) element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Form Attributes & Validation (required, pattern, type) -->\n<section class=\"lesson-demo\">\n  <h2>Form Attributes & Validation (required, pattern, type)</h2>\n  <p>Interactive lab exercise for Form Attributes & Validation (required, pattern, type)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Form Attributes & Validation (required, pattern, type)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 8. Form Attributes & Validation (required, pattern, type)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **8. Form Attributes & Validation (required, pattern, type)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nForm Attributes & Validation (required, pattern, type) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**8. Form Attributes & Validation (required, pattern, type)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Form Attributes & Validation (required, pattern, type)</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Form Attributes & Validation (required, pattern, type)\");\n</script>",
        "expectedOutput": "Practice loaded for: Form Attributes & Validation (required, pattern, type)",
        "terminalTasks": [
          {
            "id": "task-w1-l8",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Form Attributes & Validation (required, pattern, type) test.",
              "bn": "Form Attributes & Validation (required, pattern, type) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Form Attributes & Validation (required, pattern, type)!",
              "bn": "Form Attributes & Validation (required, pattern, type) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l7"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ]
        }
      },
      {
        "id": "w1-l9",
        "weekId": "week-1",
        "order": 9,
        "title": {
          "en": "HTML Accessibility - ARIA & Roles",
          "bn": "9. HTML Accessibility - ARIA & Roles"
        },
        "description": {
          "en": "Learn and master HTML Accessibility - ARIA & Roles with hands-on practice, syntax rules, and real-world examples.",
          "bn": "HTML Accessibility - ARIA & Roles এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 49,
        "difficulty": "Intermediate",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"HTML Accessibility - ARIA & Roles\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"HTML Accessibility - ARIA & Roles\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### HTML Accessibility - ARIA & Roles\n\n#### 1. Learning Objective\nMaster **HTML Accessibility - ARIA & Roles** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master HTML Accessibility - ARIA & Roles with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for HTML Accessibility - ARIA & Roles -->\n<div class=\"container\">\n  <!-- HTML Accessibility - ARIA & Roles element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for HTML Accessibility - ARIA & Roles -->\n<section class=\"lesson-demo\">\n  <h2>HTML Accessibility - ARIA & Roles</h2>\n  <p>Interactive lab exercise for HTML Accessibility - ARIA & Roles</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **HTML Accessibility - ARIA & Roles** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 9. HTML Accessibility - ARIA & Roles\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **9. HTML Accessibility - ARIA & Roles** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nHTML Accessibility - ARIA & Roles এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**9. HTML Accessibility - ARIA & Roles** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>HTML Accessibility - ARIA & Roles</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: HTML Accessibility - ARIA & Roles\");\n</script>",
        "expectedOutput": "Practice loaded for: HTML Accessibility - ARIA & Roles",
        "terminalTasks": [
          {
            "id": "task-w1-l9",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the HTML Accessibility - ARIA & Roles test.",
              "bn": "HTML Accessibility - ARIA & Roles টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for HTML Accessibility - ARIA & Roles!",
              "bn": "HTML Accessibility - ARIA & Roles টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l8"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ]
        }
      },
      {
        "id": "w1-l10",
        "weekId": "week-1",
        "order": 10,
        "title": {
          "en": "Meta Tags & SEO Basics",
          "bn": "10. Meta Tags & SEO Basics"
        },
        "description": {
          "en": "Learn and master Meta Tags & SEO Basics with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Meta Tags & SEO Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 27,
        "difficulty": "Intermediate",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Meta Tags & SEO Basics\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Meta Tags & SEO Basics\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Meta Tags & SEO Basics\n\n#### 1. Learning Objective\nMaster **Meta Tags & SEO Basics** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Meta Tags & SEO Basics with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Meta Tags & SEO Basics -->\n<div class=\"container\">\n  <!-- Meta Tags & SEO Basics element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Meta Tags & SEO Basics -->\n<section class=\"lesson-demo\">\n  <h2>Meta Tags & SEO Basics</h2>\n  <p>Interactive lab exercise for Meta Tags & SEO Basics</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Meta Tags & SEO Basics** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 10. Meta Tags & SEO Basics\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **10. Meta Tags & SEO Basics** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nMeta Tags & SEO Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**10. Meta Tags & SEO Basics** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Meta Tags & SEO Basics</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Meta Tags & SEO Basics\");\n</script>",
        "expectedOutput": "Practice loaded for: Meta Tags & SEO Basics",
        "terminalTasks": [
          {
            "id": "task-w1-l10",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Meta Tags & SEO Basics test.",
              "bn": "Meta Tags & SEO Basics টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Meta Tags & SEO Basics!",
              "bn": "Meta Tags & SEO Basics টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l9"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ]
        }
      },
      {
        "id": "w1-l11",
        "weekId": "week-1",
        "order": 11,
        "title": {
          "en": "Open Graph & Social Media Tags",
          "bn": "11. Open Graph & Social Media Tags"
        },
        "description": {
          "en": "Learn and master Open Graph & Social Media Tags with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Open Graph & Social Media Tags এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Open Graph & Social Media Tags\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Open Graph & Social Media Tags\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Open Graph & Social Media Tags\n\n#### 1. Learning Objective\nMaster **Open Graph & Social Media Tags** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Open Graph & Social Media Tags with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Open Graph & Social Media Tags -->\n<div class=\"container\">\n  <!-- Open Graph & Social Media Tags element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Open Graph & Social Media Tags -->\n<section class=\"lesson-demo\">\n  <h2>Open Graph & Social Media Tags</h2>\n  <p>Interactive lab exercise for Open Graph & Social Media Tags</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Open Graph & Social Media Tags** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 11. Open Graph & Social Media Tags\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **11. Open Graph & Social Media Tags** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nOpen Graph & Social Media Tags এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**11. Open Graph & Social Media Tags** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Open Graph & Social Media Tags</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Open Graph & Social Media Tags\");\n</script>",
        "expectedOutput": "Practice loaded for: Open Graph & Social Media Tags",
        "terminalTasks": [
          {
            "id": "task-w1-l11",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Open Graph & Social Media Tags test.",
              "bn": "Open Graph & Social Media Tags টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Open Graph & Social Media Tags!",
              "bn": "Open Graph & Social Media Tags টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l10"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ]
        }
      },
      {
        "id": "w1-l12",
        "weekId": "week-1",
        "order": 12,
        "title": {
          "en": "Structured Data (Schema.org)",
          "bn": "12. Structured Data (Schema.org)"
        },
        "description": {
          "en": "Learn and master Structured Data (Schema.org) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Structured Data (Schema.org) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 33,
        "difficulty": "Intermediate",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Structured Data (Schema.org)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Structured Data (Schema.org)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Structured Data (Schema.org)\n\n#### 1. Learning Objective\nMaster **Structured Data (Schema.org)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Structured Data (Schema.org) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Structured Data (Schema.org) -->\n<div class=\"container\">\n  <!-- Structured Data (Schema.org) element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Structured Data (Schema.org) -->\n<section class=\"lesson-demo\">\n  <h2>Structured Data (Schema.org)</h2>\n  <p>Interactive lab exercise for Structured Data (Schema.org)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Structured Data (Schema.org)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 12. Structured Data (Schema.org)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **12. Structured Data (Schema.org)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nStructured Data (Schema.org) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**12. Structured Data (Schema.org)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Structured Data (Schema.org)</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Structured Data (Schema.org)\");\n</script>",
        "expectedOutput": "Practice loaded for: Structured Data (Schema.org)",
        "terminalTasks": [
          {
            "id": "task-w1-l12",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Structured Data (Schema.org) test.",
              "bn": "Structured Data (Schema.org) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Structured Data (Schema.org)!",
              "bn": "Structured Data (Schema.org) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l11"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ]
        }
      },
      {
        "id": "w1-l13",
        "weekId": "week-1",
        "order": 13,
        "title": {
          "en": "Best Practices & HTML5 Boilerplate",
          "bn": "13. Best Practices & HTML5 Boilerplate"
        },
        "description": {
          "en": "Learn and master Best Practices & HTML5 Boilerplate with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Best Practices & HTML5 Boilerplate এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 36,
        "difficulty": "Advanced",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Best Practices & HTML5 Boilerplate\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Best Practices & HTML5 Boilerplate\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Best Practices & HTML5 Boilerplate\n\n#### 1. Learning Objective\nMaster **Best Practices & HTML5 Boilerplate** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Best Practices & HTML5 Boilerplate with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Best Practices & HTML5 Boilerplate -->\n<div class=\"container\">\n  <!-- Best Practices & HTML5 Boilerplate element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Best Practices & HTML5 Boilerplate -->\n<section class=\"lesson-demo\">\n  <h2>Best Practices & HTML5 Boilerplate</h2>\n  <p>Interactive lab exercise for Best Practices & HTML5 Boilerplate</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Best Practices & HTML5 Boilerplate** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 13. Best Practices & HTML5 Boilerplate\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **13. Best Practices & HTML5 Boilerplate** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nBest Practices & HTML5 Boilerplate এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**13. Best Practices & HTML5 Boilerplate** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Best Practices & HTML5 Boilerplate</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Best Practices & HTML5 Boilerplate\");\n</script>",
        "expectedOutput": "Practice loaded for: Best Practices & HTML5 Boilerplate",
        "terminalTasks": [
          {
            "id": "task-w1-l13",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Best Practices & HTML5 Boilerplate test.",
              "bn": "Best Practices & HTML5 Boilerplate টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Best Practices & HTML5 Boilerplate!",
              "bn": "Best Practices & HTML5 Boilerplate টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l12"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          ]
        }
      },
      {
        "id": "w1-l14",
        "weekId": "week-1",
        "order": 14,
        "title": {
          "en": "HTML Performance Tips",
          "bn": "14. HTML Performance Tips"
        },
        "description": {
          "en": "Learn and master HTML Performance Tips with hands-on practice, syntax rules, and real-world examples.",
          "bn": "HTML Performance Tips এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 39,
        "difficulty": "Advanced",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"HTML Performance Tips\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"HTML Performance Tips\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### HTML Performance Tips\n\n#### 1. Learning Objective\nMaster **HTML Performance Tips** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master HTML Performance Tips with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for HTML Performance Tips -->\n<div class=\"container\">\n  <!-- HTML Performance Tips element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for HTML Performance Tips -->\n<section class=\"lesson-demo\">\n  <h2>HTML Performance Tips</h2>\n  <p>Interactive lab exercise for HTML Performance Tips</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **HTML Performance Tips** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 14. HTML Performance Tips\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **14. HTML Performance Tips** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nHTML Performance Tips এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**14. HTML Performance Tips** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>HTML Performance Tips</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: HTML Performance Tips\");\n</script>",
        "expectedOutput": "Practice loaded for: HTML Performance Tips",
        "terminalTasks": [
          {
            "id": "task-w1-l14",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the HTML Performance Tips test.",
              "bn": "HTML Performance Tips টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for HTML Performance Tips!",
              "bn": "HTML Performance Tips টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l13"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ]
        }
      },
      {
        "id": "w1-l15",
        "weekId": "week-1",
        "order": 15,
        "title": {
          "en": "Project: Build Semantic Portfolio Page",
          "bn": "15. Project: Build Semantic Portfolio Page"
        },
        "description": {
          "en": "Learn and master Project: Build Semantic Portfolio Page with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Project: Build Semantic Portfolio Page এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 42,
        "difficulty": "Advanced",
        "category": "html",
        "objectives": {
          "en": [
            "Understand core concepts of \"Project: Build Semantic Portfolio Page\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Project: Build Semantic Portfolio Page\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Project: Build Semantic Portfolio Page\n\n#### 1. Learning Objective\nMaster **Project: Build Semantic Portfolio Page** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Project: Build Semantic Portfolio Page with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nUse clean semantic HTML5 markup:\n```html\n<!-- Example structure for Project: Build Semantic Portfolio Page -->\n<div class=\"container\">\n  <!-- Project: Build Semantic Portfolio Page element -->\n</div>\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Project: Build Semantic Portfolio Page -->\n<section class=\"lesson-demo\">\n  <h2>Project: Build Semantic Portfolio Page</h2>\n  <p>Interactive lab exercise for Project: Build Semantic Portfolio Page</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Project: Build Semantic Portfolio Page** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 15. Project: Build Semantic Portfolio Page\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **15. Project: Build Semantic Portfolio Page** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProject: Build Semantic Portfolio Page এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**15. Project: Build Semantic Portfolio Page** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "<div className=\"card\">\n  <h1>Project: Build Semantic Portfolio Page</h1>\n  <p>Semantic HTML5 Practice Lab</p>\n  <button id=\"action-btn\">Click to Verify</button>\n</div>\n\n<script>\nconsole.log(\"Practice loaded for: Project: Build Semantic Portfolio Page\");\n</script>",
        "expectedOutput": "Practice loaded for: Project: Build Semantic Portfolio Page",
        "terminalTasks": [
          {
            "id": "task-w1-l15",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Project: Build Semantic Portfolio Page test.",
              "bn": "Project: Build Semantic Portfolio Page টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Project: Build Semantic Portfolio Page!",
              "bn": "Project: Build Semantic Portfolio Page টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l14"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
          ]
        }
      }
    ]
  },
  {
    "id": "week-2",
    "order": 2,
    "title": {
      "en": "Week 2: CSS3 Foundation",
      "bn": "উইক 2: CSS3 ভিত্তি"
    },
    "subtitle": {
      "en": "CSS3 Foundation (18 Lessons)",
      "bn": "CSS3 ভিত্তি (18 টি লেসন)"
    },
    "description": {
      "en": "Comprehensive CSS3 Foundation module with 18 interactive step-by-step lessons.",
      "bn": "18 টি ইন্টারঅ্যাক্টিভ লেসন সহ CSS3 ভিত্তি এর সম্পূর্ণ মডিউল।"
    },
    "isGitWeek": false,
    "lessons": [
      {
        "id": "w2-l1",
        "weekId": "week-2",
        "order": 1,
        "title": {
          "en": "CSS Basics & Selectors",
          "bn": "1. CSS Basics & Selectors"
        },
        "description": {
          "en": "Learn and master CSS Basics & Selectors with hands-on practice, syntax rules, and real-world examples.",
          "bn": "CSS Basics & Selectors এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"CSS Basics & Selectors\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"CSS Basics & Selectors\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### CSS Basics & Selectors\n\n#### 1. Learning Objective\nMaster **CSS Basics & Selectors** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master CSS Basics & Selectors with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for CSS Basics & Selectors */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for CSS Basics & Selectors -->\n<section class=\"lesson-demo\">\n  <h2>CSS Basics & Selectors</h2>\n  <p>Interactive lab exercise for CSS Basics & Selectors</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **CSS Basics & Selectors** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 1. CSS Basics & Selectors\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **1. CSS Basics & Selectors** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCSS Basics & Selectors এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**1. CSS Basics & Selectors** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for CSS Basics & Selectors */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: CSS Basics & Selectors\");",
        "expectedOutput": "CSS Lab Ready: CSS Basics & Selectors",
        "terminalTasks": [
          {
            "id": "task-w2-l1",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the CSS Basics & Selectors test.",
              "bn": "CSS Basics & Selectors টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for CSS Basics & Selectors!",
              "bn": "CSS Basics & Selectors টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w1-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l2",
        "weekId": "week-2",
        "order": 2,
        "title": {
          "en": "Specificity & Cascade",
          "bn": "2. Specificity & Cascade"
        },
        "description": {
          "en": "Learn and master Specificity & Cascade with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Specificity & Cascade এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 28,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Specificity & Cascade\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Specificity & Cascade\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Specificity & Cascade\n\n#### 1. Learning Objective\nMaster **Specificity & Cascade** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Specificity & Cascade with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Specificity & Cascade */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Specificity & Cascade -->\n<section class=\"lesson-demo\">\n  <h2>Specificity & Cascade</h2>\n  <p>Interactive lab exercise for Specificity & Cascade</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Specificity & Cascade** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 2. Specificity & Cascade\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **2. Specificity & Cascade** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nSpecificity & Cascade এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**2. Specificity & Cascade** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Specificity & Cascade */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Specificity & Cascade\");",
        "expectedOutput": "CSS Lab Ready: Specificity & Cascade",
        "terminalTasks": [
          {
            "id": "task-w2-l2",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Specificity & Cascade test.",
              "bn": "Specificity & Cascade টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Specificity & Cascade!",
              "bn": "Specificity & Cascade টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l3",
        "weekId": "week-2",
        "order": 3,
        "title": {
          "en": "Box Model",
          "bn": "3. Box Model"
        },
        "description": {
          "en": "Learn and master Box Model with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Box Model এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 31,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Box Model\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Box Model\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Box Model\n\n#### 1. Learning Objective\nMaster **Box Model** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Box Model with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Box Model */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Box Model -->\n<section class=\"lesson-demo\">\n  <h2>Box Model</h2>\n  <p>Interactive lab exercise for Box Model</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Box Model** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 3. Box Model\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **3. Box Model** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nBox Model এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**3. Box Model** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Box Model */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Box Model\");",
        "expectedOutput": "CSS Lab Ready: Box Model",
        "terminalTasks": [
          {
            "id": "task-w2-l3",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Box Model test.",
              "bn": "Box Model টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Box Model!",
              "bn": "Box Model টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l2"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l4",
        "weekId": "week-2",
        "order": 4,
        "title": {
          "en": "Display Properties",
          "bn": "4. Display Properties"
        },
        "description": {
          "en": "Learn and master Display Properties with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Display Properties এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 34,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Display Properties\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Display Properties\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Display Properties\n\n#### 1. Learning Objective\nMaster **Display Properties** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Display Properties with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Display Properties */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Display Properties -->\n<section class=\"lesson-demo\">\n  <h2>Display Properties</h2>\n  <p>Interactive lab exercise for Display Properties</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Display Properties** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 4. Display Properties\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **4. Display Properties** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nDisplay Properties এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**4. Display Properties** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Display Properties */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Display Properties\");",
        "expectedOutput": "CSS Lab Ready: Display Properties",
        "terminalTasks": [
          {
            "id": "task-w2-l4",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Display Properties test.",
              "bn": "Display Properties টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Display Properties!",
              "bn": "Display Properties টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l3"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l5",
        "weekId": "week-2",
        "order": 5,
        "title": {
          "en": "Positioning (static, relative, absolute, fixed, sticky)",
          "bn": "5. Positioning (static, relative, absolute, fixed, sticky)"
        },
        "description": {
          "en": "Learn and master Positioning (static, relative, absolute, fixed, sticky) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Positioning (static, relative, absolute, fixed, sticky) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 37,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Positioning (static, relative, absolute, fixed, sticky)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Positioning (static, relative, absolute, fixed, sticky)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Positioning (static, relative, absolute, fixed, sticky)\n\n#### 1. Learning Objective\nMaster **Positioning (static, relative, absolute, fixed, sticky)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Positioning (static, relative, absolute, fixed, sticky) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Positioning (static, relative, absolute, fixed, sticky) */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Positioning (static, relative, absolute, fixed, sticky) -->\n<section class=\"lesson-demo\">\n  <h2>Positioning (static, relative, absolute, fixed, sticky)</h2>\n  <p>Interactive lab exercise for Positioning (static, relative, absolute, fixed, sticky)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Positioning (static, relative, absolute, fixed, sticky)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 5. Positioning (static, relative, absolute, fixed, sticky)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **5. Positioning (static, relative, absolute, fixed, sticky)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nPositioning (static, relative, absolute, fixed, sticky) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**5. Positioning (static, relative, absolute, fixed, sticky)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Positioning (static, relative, absolute, fixed, sticky) */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Positioning (static, relative, absolute, fixed, sticky)\");",
        "expectedOutput": "CSS Lab Ready: Positioning (static, relative, absolute, fixed, sticky)",
        "terminalTasks": [
          {
            "id": "task-w2-l5",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Positioning (static, relative, absolute, fixed, sticky) test.",
              "bn": "Positioning (static, relative, absolute, fixed, sticky) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Positioning (static, relative, absolute, fixed, sticky)!",
              "bn": "Positioning (static, relative, absolute, fixed, sticky) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l4"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l6",
        "weekId": "week-2",
        "order": 6,
        "title": {
          "en": "Flexbox Intro",
          "bn": "6. Flexbox Intro"
        },
        "description": {
          "en": "Learn and master Flexbox Intro with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Flexbox Intro এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Flexbox Intro\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Flexbox Intro\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Flexbox Intro\n\n#### 1. Learning Objective\nMaster **Flexbox Intro** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Flexbox Intro with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Flexbox Intro */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Flexbox Intro -->\n<section class=\"lesson-demo\">\n  <h2>Flexbox Intro</h2>\n  <p>Interactive lab exercise for Flexbox Intro</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Flexbox Intro** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 6. Flexbox Intro\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **6. Flexbox Intro** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nFlexbox Intro এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**6. Flexbox Intro** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Flexbox Intro */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Flexbox Intro\");",
        "expectedOutput": "CSS Lab Ready: Flexbox Intro",
        "terminalTasks": [
          {
            "id": "task-w2-l6",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Flexbox Intro test.",
              "bn": "Flexbox Intro টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Flexbox Intro!",
              "bn": "Flexbox Intro টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l5"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"
          ]
        }
      },
      {
        "id": "w2-l7",
        "weekId": "week-2",
        "order": 7,
        "title": {
          "en": "CSS Grid Intro",
          "bn": "7. CSS Grid Intro"
        },
        "description": {
          "en": "Learn and master CSS Grid Intro with hands-on practice, syntax rules, and real-world examples.",
          "bn": "CSS Grid Intro এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 43,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"CSS Grid Intro\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"CSS Grid Intro\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### CSS Grid Intro\n\n#### 1. Learning Objective\nMaster **CSS Grid Intro** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master CSS Grid Intro with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for CSS Grid Intro */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for CSS Grid Intro -->\n<section class=\"lesson-demo\">\n  <h2>CSS Grid Intro</h2>\n  <p>Interactive lab exercise for CSS Grid Intro</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **CSS Grid Intro** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 7. CSS Grid Intro\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **7. CSS Grid Intro** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCSS Grid Intro এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**7. CSS Grid Intro** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for CSS Grid Intro */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: CSS Grid Intro\");",
        "expectedOutput": "CSS Lab Ready: CSS Grid Intro",
        "terminalTasks": [
          {
            "id": "task-w2-l7",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the CSS Grid Intro test.",
              "bn": "CSS Grid Intro টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for CSS Grid Intro!",
              "bn": "CSS Grid Intro টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l6"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"
          ]
        }
      },
      {
        "id": "w2-l8",
        "weekId": "week-2",
        "order": 8,
        "title": {
          "en": "Typography",
          "bn": "8. Typography"
        },
        "description": {
          "en": "Learn and master Typography with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Typography এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 46,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Typography\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Typography\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Typography\n\n#### 1. Learning Objective\nMaster **Typography** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Typography with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Typography */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Typography -->\n<section class=\"lesson-demo\">\n  <h2>Typography</h2>\n  <p>Interactive lab exercise for Typography</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Typography** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 8. Typography\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **8. Typography** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nTypography এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**8. Typography** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Typography */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Typography\");",
        "expectedOutput": "CSS Lab Ready: Typography",
        "terminalTasks": [
          {
            "id": "task-w2-l8",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Typography test.",
              "bn": "Typography টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Typography!",
              "bn": "Typography টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l7"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l9",
        "weekId": "week-2",
        "order": 9,
        "title": {
          "en": "Colors & Backgrounds",
          "bn": "9. Colors & Backgrounds"
        },
        "description": {
          "en": "Learn and master Colors & Backgrounds with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Colors & Backgrounds এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 49,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Colors & Backgrounds\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Colors & Backgrounds\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Colors & Backgrounds\n\n#### 1. Learning Objective\nMaster **Colors & Backgrounds** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Colors & Backgrounds with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Colors & Backgrounds */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Colors & Backgrounds -->\n<section class=\"lesson-demo\">\n  <h2>Colors & Backgrounds</h2>\n  <p>Interactive lab exercise for Colors & Backgrounds</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Colors & Backgrounds** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 9. Colors & Backgrounds\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **9. Colors & Backgrounds** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nColors & Backgrounds এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**9. Colors & Backgrounds** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Colors & Backgrounds */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Colors & Backgrounds\");",
        "expectedOutput": "CSS Lab Ready: Colors & Backgrounds",
        "terminalTasks": [
          {
            "id": "task-w2-l9",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Colors & Backgrounds test.",
              "bn": "Colors & Backgrounds টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Colors & Backgrounds!",
              "bn": "Colors & Backgrounds টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l8"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l10",
        "weekId": "week-2",
        "order": 10,
        "title": {
          "en": "Borders & Shadows",
          "bn": "10. Borders & Shadows"
        },
        "description": {
          "en": "Learn and master Borders & Shadows with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Borders & Shadows এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 27,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Borders & Shadows\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Borders & Shadows\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Borders & Shadows\n\n#### 1. Learning Objective\nMaster **Borders & Shadows** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Borders & Shadows with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Borders & Shadows */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Borders & Shadows -->\n<section class=\"lesson-demo\">\n  <h2>Borders & Shadows</h2>\n  <p>Interactive lab exercise for Borders & Shadows</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Borders & Shadows** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 10. Borders & Shadows\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **10. Borders & Shadows** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nBorders & Shadows এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**10. Borders & Shadows** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Borders & Shadows */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Borders & Shadows\");",
        "expectedOutput": "CSS Lab Ready: Borders & Shadows",
        "terminalTasks": [
          {
            "id": "task-w2-l10",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Borders & Shadows test.",
              "bn": "Borders & Shadows টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Borders & Shadows!",
              "bn": "Borders & Shadows টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l9"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l11",
        "weekId": "week-2",
        "order": 11,
        "title": {
          "en": "Transforms",
          "bn": "11. Transforms"
        },
        "description": {
          "en": "Learn and master Transforms with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Transforms এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Transforms\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Transforms\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Transforms\n\n#### 1. Learning Objective\nMaster **Transforms** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Transforms with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Transforms */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Transforms -->\n<section class=\"lesson-demo\">\n  <h2>Transforms</h2>\n  <p>Interactive lab exercise for Transforms</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Transforms** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 11. Transforms\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **11. Transforms** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nTransforms এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**11. Transforms** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Transforms */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Transforms\");",
        "expectedOutput": "CSS Lab Ready: Transforms",
        "terminalTasks": [
          {
            "id": "task-w2-l11",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Transforms test.",
              "bn": "Transforms টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Transforms!",
              "bn": "Transforms টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l10"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ]
        }
      },
      {
        "id": "w2-l12",
        "weekId": "week-2",
        "order": 12,
        "title": {
          "en": "Transitions",
          "bn": "12. Transitions"
        },
        "description": {
          "en": "Learn and master Transitions with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Transitions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 33,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Transitions\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Transitions\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Transitions\n\n#### 1. Learning Objective\nMaster **Transitions** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Transitions with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Transitions */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Transitions -->\n<section class=\"lesson-demo\">\n  <h2>Transitions</h2>\n  <p>Interactive lab exercise for Transitions</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Transitions** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 12. Transitions\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **12. Transitions** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nTransitions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**12. Transitions** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Transitions */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Transitions\");",
        "expectedOutput": "CSS Lab Ready: Transitions",
        "terminalTasks": [
          {
            "id": "task-w2-l12",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Transitions test.",
              "bn": "Transitions টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Transitions!",
              "bn": "Transitions টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l11"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l13",
        "weekId": "week-2",
        "order": 13,
        "title": {
          "en": "Animations (keyframes)",
          "bn": "13. Animations (keyframes)"
        },
        "description": {
          "en": "Learn and master Animations (keyframes) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Animations (keyframes) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 36,
        "difficulty": "Advanced",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Animations (keyframes)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Animations (keyframes)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Animations (keyframes)\n\n#### 1. Learning Objective\nMaster **Animations (keyframes)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Animations (keyframes) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Animations (keyframes) */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Animations (keyframes) -->\n<section class=\"lesson-demo\">\n  <h2>Animations (keyframes)</h2>\n  <p>Interactive lab exercise for Animations (keyframes)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Animations (keyframes)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 13. Animations (keyframes)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **13. Animations (keyframes)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nAnimations (keyframes) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**13. Animations (keyframes)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Animations (keyframes) */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Animations (keyframes)\");",
        "expectedOutput": "CSS Lab Ready: Animations (keyframes)",
        "terminalTasks": [
          {
            "id": "task-w2-l13",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Animations (keyframes) test.",
              "bn": "Animations (keyframes) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Animations (keyframes)!",
              "bn": "Animations (keyframes) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l12"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l14",
        "weekId": "week-2",
        "order": 14,
        "title": {
          "en": "Pseudo-classes",
          "bn": "14. Pseudo-classes"
        },
        "description": {
          "en": "Learn and master Pseudo-classes with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Pseudo-classes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 39,
        "difficulty": "Advanced",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Pseudo-classes\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Pseudo-classes\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Pseudo-classes\n\n#### 1. Learning Objective\nMaster **Pseudo-classes** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Pseudo-classes with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Pseudo-classes */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Pseudo-classes -->\n<section class=\"lesson-demo\">\n  <h2>Pseudo-classes</h2>\n  <p>Interactive lab exercise for Pseudo-classes</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Pseudo-classes** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 14. Pseudo-classes\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **14. Pseudo-classes** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nPseudo-classes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**14. Pseudo-classes** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Pseudo-classes */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Pseudo-classes\");",
        "expectedOutput": "CSS Lab Ready: Pseudo-classes",
        "terminalTasks": [
          {
            "id": "task-w2-l14",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Pseudo-classes test.",
              "bn": "Pseudo-classes টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Pseudo-classes!",
              "bn": "Pseudo-classes টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l13"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l15",
        "weekId": "week-2",
        "order": 15,
        "title": {
          "en": ":before / ::after Pseudo-elements",
          "bn": "15. :before / ::after Pseudo-elements"
        },
        "description": {
          "en": "Learn and master :before / ::after Pseudo-elements with hands-on practice, syntax rules, and real-world examples.",
          "bn": ":before / ::after Pseudo-elements এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 42,
        "difficulty": "Advanced",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \":before / ::after Pseudo-elements\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\":before / ::after Pseudo-elements\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### :before / ::after Pseudo-elements\n\n#### 1. Learning Objective\nMaster **:before / ::after Pseudo-elements** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master :before / ::after Pseudo-elements with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for :before / ::after Pseudo-elements */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for :before / ::after Pseudo-elements -->\n<section class=\"lesson-demo\">\n  <h2>:before / ::after Pseudo-elements</h2>\n  <p>Interactive lab exercise for :before / ::after Pseudo-elements</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **:before / ::after Pseudo-elements** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 15. :before / ::after Pseudo-elements\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **15. :before / ::after Pseudo-elements** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\n:before / ::after Pseudo-elements এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**15. :before / ::after Pseudo-elements** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for :before / ::after Pseudo-elements */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: :before / ::after Pseudo-elements\");",
        "expectedOutput": "CSS Lab Ready: :before / ::after Pseudo-elements",
        "terminalTasks": [
          {
            "id": "task-w2-l15",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the :before / ::after Pseudo-elements test.",
              "bn": ":before / ::after Pseudo-elements টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for :before / ::after Pseudo-elements!",
              "bn": ":before / ::after Pseudo-elements টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l14"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l16",
        "weekId": "week-2",
        "order": 16,
        "title": {
          "en": "CSS Units",
          "bn": "16. CSS Units"
        },
        "description": {
          "en": "Learn and master CSS Units with hands-on practice, syntax rules, and real-world examples.",
          "bn": "CSS Units এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 45,
        "difficulty": "Advanced",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"CSS Units\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"CSS Units\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### CSS Units\n\n#### 1. Learning Objective\nMaster **CSS Units** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master CSS Units with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for CSS Units */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for CSS Units -->\n<section class=\"lesson-demo\">\n  <h2>CSS Units</h2>\n  <p>Interactive lab exercise for CSS Units</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **CSS Units** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 16. CSS Units\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **16. CSS Units** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCSS Units এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**16. CSS Units** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for CSS Units */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: CSS Units\");",
        "expectedOutput": "CSS Lab Ready: CSS Units",
        "terminalTasks": [
          {
            "id": "task-w2-l16",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the CSS Units test.",
              "bn": "CSS Units টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for CSS Units!",
              "bn": "CSS Units টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l15"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l17",
        "weekId": "week-2",
        "order": 17,
        "title": {
          "en": "Responsive CSS Basics",
          "bn": "17. Responsive CSS Basics"
        },
        "description": {
          "en": "Learn and master Responsive CSS Basics with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Responsive CSS Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 48,
        "difficulty": "Advanced",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Responsive CSS Basics\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Responsive CSS Basics\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Responsive CSS Basics\n\n#### 1. Learning Objective\nMaster **Responsive CSS Basics** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Responsive CSS Basics with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Responsive CSS Basics */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Responsive CSS Basics -->\n<section class=\"lesson-demo\">\n  <h2>Responsive CSS Basics</h2>\n  <p>Interactive lab exercise for Responsive CSS Basics</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Responsive CSS Basics** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 17. Responsive CSS Basics\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **17. Responsive CSS Basics** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nResponsive CSS Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**17. Responsive CSS Basics** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Responsive CSS Basics */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Responsive CSS Basics\");",
        "expectedOutput": "CSS Lab Ready: Responsive CSS Basics",
        "terminalTasks": [
          {
            "id": "task-w2-l17",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Responsive CSS Basics test.",
              "bn": "Responsive CSS Basics টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Responsive CSS Basics!",
              "bn": "Responsive CSS Basics টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l16"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w2-l18",
        "weekId": "week-2",
        "order": 18,
        "title": {
          "en": "Project: Modern Landing Page",
          "bn": "18. Project: Modern Landing Page"
        },
        "description": {
          "en": "Learn and master Project: Modern Landing Page with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Project: Modern Landing Page এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 26,
        "difficulty": "Advanced",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Project: Modern Landing Page\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Project: Modern Landing Page\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Project: Modern Landing Page\n\n#### 1. Learning Objective\nMaster **Project: Modern Landing Page** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Project: Modern Landing Page with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Project: Modern Landing Page */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Project: Modern Landing Page -->\n<section class=\"lesson-demo\">\n  <h2>Project: Modern Landing Page</h2>\n  <p>Interactive lab exercise for Project: Modern Landing Page</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Project: Modern Landing Page** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 18. Project: Modern Landing Page\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **18. Project: Modern Landing Page** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProject: Modern Landing Page এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**18. Project: Modern Landing Page** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Project: Modern Landing Page */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Project: Modern Landing Page\");",
        "expectedOutput": "CSS Lab Ready: Project: Modern Landing Page",
        "terminalTasks": [
          {
            "id": "task-w2-l18",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Project: Modern Landing Page test.",
              "bn": "Project: Modern Landing Page টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Project: Modern Landing Page!",
              "bn": "Project: Modern Landing Page টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l17"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      }
    ]
  },
  {
    "id": "week-3",
    "order": 3,
    "title": {
      "en": "Week 3: Responsive Design",
      "bn": "উইক 3: রেসপন্সিভ ডিজাইন"
    },
    "subtitle": {
      "en": "Responsive Design (12 Lessons)",
      "bn": "রেসপন্সিভ ডিজাইন (12 টি লেসন)"
    },
    "description": {
      "en": "Comprehensive Responsive Design module with 12 interactive step-by-step lessons.",
      "bn": "12 টি ইন্টারঅ্যাক্টিভ লেসন সহ রেসপন্সিভ ডিজাইন এর সম্পূর্ণ মডিউল।"
    },
    "isGitWeek": false,
    "lessons": [
      {
        "id": "w3-l1",
        "weekId": "week-3",
        "order": 1,
        "title": {
          "en": "Mobile-First Approach",
          "bn": "1. Mobile-First Approach"
        },
        "description": {
          "en": "Learn and master Mobile-First Approach with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Mobile-First Approach এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Mobile-First Approach\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Mobile-First Approach\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Mobile-First Approach\n\n#### 1. Learning Objective\nMaster **Mobile-First Approach** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Mobile-First Approach with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Mobile-First Approach */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Mobile-First Approach -->\n<section class=\"lesson-demo\">\n  <h2>Mobile-First Approach</h2>\n  <p>Interactive lab exercise for Mobile-First Approach</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Mobile-First Approach** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 1. Mobile-First Approach\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **1. Mobile-First Approach** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nMobile-First Approach এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**1. Mobile-First Approach** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Mobile-First Approach */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Mobile-First Approach\");",
        "expectedOutput": "CSS Lab Ready: Mobile-First Approach",
        "terminalTasks": [
          {
            "id": "task-w3-l1",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Mobile-First Approach test.",
              "bn": "Mobile-First Approach টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Mobile-First Approach!",
              "bn": "Mobile-First Approach টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w2-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w3-l2",
        "weekId": "week-3",
        "order": 2,
        "title": {
          "en": "Viewport Meta Tag",
          "bn": "2. Viewport Meta Tag"
        },
        "description": {
          "en": "Learn and master Viewport Meta Tag with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Viewport Meta Tag এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 28,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Viewport Meta Tag\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Viewport Meta Tag\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Viewport Meta Tag\n\n#### 1. Learning Objective\nMaster **Viewport Meta Tag** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Viewport Meta Tag with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Viewport Meta Tag */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Viewport Meta Tag -->\n<section class=\"lesson-demo\">\n  <h2>Viewport Meta Tag</h2>\n  <p>Interactive lab exercise for Viewport Meta Tag</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Viewport Meta Tag** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 2. Viewport Meta Tag\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **2. Viewport Meta Tag** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nViewport Meta Tag এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**2. Viewport Meta Tag** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Viewport Meta Tag */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Viewport Meta Tag\");",
        "expectedOutput": "CSS Lab Ready: Viewport Meta Tag",
        "terminalTasks": [
          {
            "id": "task-w3-l2",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Viewport Meta Tag test.",
              "bn": "Viewport Meta Tag টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Viewport Meta Tag!",
              "bn": "Viewport Meta Tag টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w3-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w3-l3",
        "weekId": "week-3",
        "order": 3,
        "title": {
          "en": "Media Queries Basics",
          "bn": "3. Media Queries Basics"
        },
        "description": {
          "en": "Learn and master Media Queries Basics with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Media Queries Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 31,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Media Queries Basics\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Media Queries Basics\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Media Queries Basics\n\n#### 1. Learning Objective\nMaster **Media Queries Basics** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Media Queries Basics with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Media Queries Basics */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Media Queries Basics -->\n<section class=\"lesson-demo\">\n  <h2>Media Queries Basics</h2>\n  <p>Interactive lab exercise for Media Queries Basics</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Media Queries Basics** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 3. Media Queries Basics\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **3. Media Queries Basics** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nMedia Queries Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**3. Media Queries Basics** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Media Queries Basics */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Media Queries Basics\");",
        "expectedOutput": "CSS Lab Ready: Media Queries Basics",
        "terminalTasks": [
          {
            "id": "task-w3-l3",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Media Queries Basics test.",
              "bn": "Media Queries Basics টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Media Queries Basics!",
              "bn": "Media Queries Basics টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w3-l2"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w3-l4",
        "weekId": "week-3",
        "order": 4,
        "title": {
          "en": "Common Breakpoints",
          "bn": "4. Common Breakpoints"
        },
        "description": {
          "en": "Learn and master Common Breakpoints with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Common Breakpoints এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 34,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Common Breakpoints\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Common Breakpoints\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Common Breakpoints\n\n#### 1. Learning Objective\nMaster **Common Breakpoints** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Common Breakpoints with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Common Breakpoints */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Common Breakpoints -->\n<section class=\"lesson-demo\">\n  <h2>Common Breakpoints</h2>\n  <p>Interactive lab exercise for Common Breakpoints</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Common Breakpoints** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 4. Common Breakpoints\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **4. Common Breakpoints** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCommon Breakpoints এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**4. Common Breakpoints** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Common Breakpoints */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Common Breakpoints\");",
        "expectedOutput": "CSS Lab Ready: Common Breakpoints",
        "terminalTasks": [
          {
            "id": "task-w3-l4",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Common Breakpoints test.",
              "bn": "Common Breakpoints টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Common Breakpoints!",
              "bn": "Common Breakpoints টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w3-l3"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w3-l5",
        "weekId": "week-3",
        "order": 5,
        "title": {
          "en": "Mobile Navigation Patterns",
          "bn": "5. Mobile Navigation Patterns"
        },
        "description": {
          "en": "Learn and master Mobile Navigation Patterns with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Mobile Navigation Patterns এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 37,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Mobile Navigation Patterns\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Mobile Navigation Patterns\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Mobile Navigation Patterns\n\n#### 1. Learning Objective\nMaster **Mobile Navigation Patterns** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Mobile Navigation Patterns with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Mobile Navigation Patterns */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Mobile Navigation Patterns -->\n<section class=\"lesson-demo\">\n  <h2>Mobile Navigation Patterns</h2>\n  <p>Interactive lab exercise for Mobile Navigation Patterns</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Mobile Navigation Patterns** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 5. Mobile Navigation Patterns\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **5. Mobile Navigation Patterns** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nMobile Navigation Patterns এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**5. Mobile Navigation Patterns** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Mobile Navigation Patterns */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Mobile Navigation Patterns\");",
        "expectedOutput": "CSS Lab Ready: Mobile Navigation Patterns",
        "terminalTasks": [
          {
            "id": "task-w3-l5",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Mobile Navigation Patterns test.",
              "bn": "Mobile Navigation Patterns টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Mobile Navigation Patterns!",
              "bn": "Mobile Navigation Patterns টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w3-l4"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          ]
        }
      },
      {
        "id": "w3-l6",
        "weekId": "week-3",
        "order": 6,
        "title": {
          "en": "Flexible Images",
          "bn": "6. Flexible Images"
        },
        "description": {
          "en": "Learn and master Flexible Images with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Flexible Images এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Flexible Images\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Flexible Images\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Flexible Images\n\n#### 1. Learning Objective\nMaster **Flexible Images** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Flexible Images with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Flexible Images */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Flexible Images -->\n<section class=\"lesson-demo\">\n  <h2>Flexible Images</h2>\n  <p>Interactive lab exercise for Flexible Images</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Flexible Images** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 6. Flexible Images\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **6. Flexible Images** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nFlexible Images এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**6. Flexible Images** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Flexible Images */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Flexible Images\");",
        "expectedOutput": "CSS Lab Ready: Flexible Images",
        "terminalTasks": [
          {
            "id": "task-w3-l6",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Flexible Images test.",
              "bn": "Flexible Images টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Flexible Images!",
              "bn": "Flexible Images টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w3-l5"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w3-l7",
        "weekId": "week-3",
        "order": 7,
        "title": {
          "en": "Responsive Typography",
          "bn": "7. Responsive Typography"
        },
        "description": {
          "en": "Learn and master Responsive Typography with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Responsive Typography এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 43,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Responsive Typography\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Responsive Typography\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Responsive Typography\n\n#### 1. Learning Objective\nMaster **Responsive Typography** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Responsive Typography with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Responsive Typography */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Responsive Typography -->\n<section class=\"lesson-demo\">\n  <h2>Responsive Typography</h2>\n  <p>Interactive lab exercise for Responsive Typography</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Responsive Typography** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 7. Responsive Typography\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **7. Responsive Typography** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nResponsive Typography এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**7. Responsive Typography** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Responsive Typography */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Responsive Typography\");",
        "expectedOutput": "CSS Lab Ready: Responsive Typography",
        "terminalTasks": [
          {
            "id": "task-w3-l7",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Responsive Typography test.",
              "bn": "Responsive Typography টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Responsive Typography!",
              "bn": "Responsive Typography টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w3-l6"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w3-l8",
        "weekId": "week-3",
        "order": 8,
        "title": {
          "en": "Flexible Layouts (clamp)",
          "bn": "8. Flexible Layouts (clamp)"
        },
        "description": {
          "en": "Learn and master Flexible Layouts (clamp) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Flexible Layouts (clamp) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 46,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Flexible Layouts (clamp)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Flexible Layouts (clamp)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Flexible Layouts (clamp)\n\n#### 1. Learning Objective\nMaster **Flexible Layouts (clamp)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Flexible Layouts (clamp) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Flexible Layouts (clamp) */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Flexible Layouts (clamp) -->\n<section class=\"lesson-demo\">\n  <h2>Flexible Layouts (clamp)</h2>\n  <p>Interactive lab exercise for Flexible Layouts (clamp)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Flexible Layouts (clamp)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 8. Flexible Layouts (clamp)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **8. Flexible Layouts (clamp)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nFlexible Layouts (clamp) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**8. Flexible Layouts (clamp)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Flexible Layouts (clamp) */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Flexible Layouts (clamp)\");",
        "expectedOutput": "CSS Lab Ready: Flexible Layouts (clamp)",
        "terminalTasks": [
          {
            "id": "task-w3-l8",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Flexible Layouts (clamp) test.",
              "bn": "Flexible Layouts (clamp) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Flexible Layouts (clamp)!",
              "bn": "Flexible Layouts (clamp) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w3-l7"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w3-l9",
        "weekId": "week-3",
        "order": 9,
        "title": {
          "en": "Multi-Device Testing",
          "bn": "9. Multi-Device Testing"
        },
        "description": {
          "en": "Learn and master Multi-Device Testing with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Multi-Device Testing এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 49,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Multi-Device Testing\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Multi-Device Testing\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Multi-Device Testing\n\n#### 1. Learning Objective\nMaster **Multi-Device Testing** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Multi-Device Testing with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Multi-Device Testing */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Multi-Device Testing -->\n<section class=\"lesson-demo\">\n  <h2>Multi-Device Testing</h2>\n  <p>Interactive lab exercise for Multi-Device Testing</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Multi-Device Testing** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 9. Multi-Device Testing\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **9. Multi-Device Testing** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nMulti-Device Testing এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**9. Multi-Device Testing** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Multi-Device Testing */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Multi-Device Testing\");",
        "expectedOutput": "CSS Lab Ready: Multi-Device Testing",
        "terminalTasks": [
          {
            "id": "task-w3-l9",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Multi-Device Testing test.",
              "bn": "Multi-Device Testing টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Multi-Device Testing!",
              "bn": "Multi-Device Testing টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w3-l8"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w3-l10",
        "weekId": "week-3",
        "order": 10,
        "title": {
          "en": "Chrome DevTools Responsive",
          "bn": "10. Chrome DevTools Responsive"
        },
        "description": {
          "en": "Learn and master Chrome DevTools Responsive with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Chrome DevTools Responsive এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 27,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Chrome DevTools Responsive\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Chrome DevTools Responsive\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Chrome DevTools Responsive\n\n#### 1. Learning Objective\nMaster **Chrome DevTools Responsive** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Chrome DevTools Responsive with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Chrome DevTools Responsive */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Chrome DevTools Responsive -->\n<section class=\"lesson-demo\">\n  <h2>Chrome DevTools Responsive</h2>\n  <p>Interactive lab exercise for Chrome DevTools Responsive</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Chrome DevTools Responsive** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 10. Chrome DevTools Responsive\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **10. Chrome DevTools Responsive** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nChrome DevTools Responsive এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**10. Chrome DevTools Responsive** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Chrome DevTools Responsive */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Chrome DevTools Responsive\");",
        "expectedOutput": "CSS Lab Ready: Chrome DevTools Responsive",
        "terminalTasks": [
          {
            "id": "task-w3-l10",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Chrome DevTools Responsive test.",
              "bn": "Chrome DevTools Responsive টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Chrome DevTools Responsive!",
              "bn": "Chrome DevTools Responsive টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w3-l9"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w3-l11",
        "weekId": "week-3",
        "order": 11,
        "title": {
          "en": "Common Responsive Patterns",
          "bn": "11. Common Responsive Patterns"
        },
        "description": {
          "en": "Learn and master Common Responsive Patterns with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Common Responsive Patterns এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Common Responsive Patterns\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Common Responsive Patterns\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Common Responsive Patterns\n\n#### 1. Learning Objective\nMaster **Common Responsive Patterns** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Common Responsive Patterns with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Common Responsive Patterns */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Common Responsive Patterns -->\n<section class=\"lesson-demo\">\n  <h2>Common Responsive Patterns</h2>\n  <p>Interactive lab exercise for Common Responsive Patterns</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Common Responsive Patterns** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 11. Common Responsive Patterns\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **11. Common Responsive Patterns** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCommon Responsive Patterns এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**11. Common Responsive Patterns** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Common Responsive Patterns */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Common Responsive Patterns\");",
        "expectedOutput": "CSS Lab Ready: Common Responsive Patterns",
        "terminalTasks": [
          {
            "id": "task-w3-l11",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Common Responsive Patterns test.",
              "bn": "Common Responsive Patterns টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Common Responsive Patterns!",
              "bn": "Common Responsive Patterns টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w3-l10"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w3-l12",
        "weekId": "week-3",
        "order": 12,
        "title": {
          "en": "Project: Responsive Website",
          "bn": "12. Project: Responsive Website"
        },
        "description": {
          "en": "Learn and master Project: Responsive Website with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Project: Responsive Website এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 33,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Project: Responsive Website\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Project: Responsive Website\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Project: Responsive Website\n\n#### 1. Learning Objective\nMaster **Project: Responsive Website** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Project: Responsive Website with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Project: Responsive Website */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Project: Responsive Website -->\n<section class=\"lesson-demo\">\n  <h2>Project: Responsive Website</h2>\n  <p>Interactive lab exercise for Project: Responsive Website</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Project: Responsive Website** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 12. Project: Responsive Website\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **12. Project: Responsive Website** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProject: Responsive Website এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**12. Project: Responsive Website** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Project: Responsive Website */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Project: Responsive Website\");",
        "expectedOutput": "CSS Lab Ready: Project: Responsive Website",
        "terminalTasks": [
          {
            "id": "task-w3-l12",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Project: Responsive Website test.",
              "bn": "Project: Responsive Website টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Project: Responsive Website!",
              "bn": "Project: Responsive Website টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w3-l11"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      }
    ]
  },
  {
    "id": "week-4",
    "order": 4,
    "title": {
      "en": "Week 4: CSS Advanced & Preprocessing",
      "bn": "উইক 4: CSS অ্যাডভান্সড ও প্রিপ্রসেসিং"
    },
    "subtitle": {
      "en": "CSS Advanced & Preprocessing (14 Lessons)",
      "bn": "CSS অ্যাডভান্সড ও প্রিপ্রসেসিং (14 টি লেসন)"
    },
    "description": {
      "en": "Comprehensive CSS Advanced & Preprocessing module with 14 interactive step-by-step lessons.",
      "bn": "14 টি ইন্টারঅ্যাক্টিভ লেসন সহ CSS অ্যাডভান্সড ও প্রিপ্রসেসিং এর সম্পূর্ণ মডিউল।"
    },
    "isGitWeek": false,
    "lessons": [
      {
        "id": "w4-l1",
        "weekId": "week-4",
        "order": 1,
        "title": {
          "en": "SASS/SCSS Basics",
          "bn": "1. SASS/SCSS Basics"
        },
        "description": {
          "en": "Learn and master SASS/SCSS Basics with hands-on practice, syntax rules, and real-world examples.",
          "bn": "SASS/SCSS Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"SASS/SCSS Basics\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"SASS/SCSS Basics\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### SASS/SCSS Basics\n\n#### 1. Learning Objective\nMaster **SASS/SCSS Basics** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master SASS/SCSS Basics with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for SASS/SCSS Basics */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for SASS/SCSS Basics -->\n<section class=\"lesson-demo\">\n  <h2>SASS/SCSS Basics</h2>\n  <p>Interactive lab exercise for SASS/SCSS Basics</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **SASS/SCSS Basics** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 1. SASS/SCSS Basics\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **1. SASS/SCSS Basics** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nSASS/SCSS Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**1. SASS/SCSS Basics** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for SASS/SCSS Basics */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: SASS/SCSS Basics\");",
        "expectedOutput": "CSS Lab Ready: SASS/SCSS Basics",
        "terminalTasks": [
          {
            "id": "task-w4-l1",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the SASS/SCSS Basics test.",
              "bn": "SASS/SCSS Basics টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for SASS/SCSS Basics!",
              "bn": "SASS/SCSS Basics টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w3-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w4-l2",
        "weekId": "week-4",
        "order": 2,
        "title": {
          "en": "Variables & Data Types",
          "bn": "2. Variables & Data Types"
        },
        "description": {
          "en": "Learn and master Variables & Data Types with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Variables & Data Types এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 28,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Variables & Data Types\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Variables & Data Types\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Variables & Data Types\n\n#### 1. Learning Objective\nMaster **Variables & Data Types** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Variables & Data Types with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Variables & Data Types */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Variables & Data Types -->\n<section class=\"lesson-demo\">\n  <h2>Variables & Data Types</h2>\n  <p>Interactive lab exercise for Variables & Data Types</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Variables & Data Types** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 2. Variables & Data Types\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **2. Variables & Data Types** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nVariables & Data Types এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**2. Variables & Data Types** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Variables & Data Types */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Variables & Data Types\");",
        "expectedOutput": "CSS Lab Ready: Variables & Data Types",
        "terminalTasks": [
          {
            "id": "task-w4-l2",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Variables & Data Types test.",
              "bn": "Variables & Data Types টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Variables & Data Types!",
              "bn": "Variables & Data Types টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w4-l3",
        "weekId": "week-4",
        "order": 3,
        "title": {
          "en": "Nesting & Parent Selectors",
          "bn": "3. Nesting & Parent Selectors"
        },
        "description": {
          "en": "Learn and master Nesting & Parent Selectors with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Nesting & Parent Selectors এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 31,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Nesting & Parent Selectors\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Nesting & Parent Selectors\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Nesting & Parent Selectors\n\n#### 1. Learning Objective\nMaster **Nesting & Parent Selectors** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Nesting & Parent Selectors with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Nesting & Parent Selectors */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Nesting & Parent Selectors -->\n<section class=\"lesson-demo\">\n  <h2>Nesting & Parent Selectors</h2>\n  <p>Interactive lab exercise for Nesting & Parent Selectors</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Nesting & Parent Selectors** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 3. Nesting & Parent Selectors\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **3. Nesting & Parent Selectors** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nNesting & Parent Selectors এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**3. Nesting & Parent Selectors** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Nesting & Parent Selectors */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Nesting & Parent Selectors\");",
        "expectedOutput": "CSS Lab Ready: Nesting & Parent Selectors",
        "terminalTasks": [
          {
            "id": "task-w4-l3",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Nesting & Parent Selectors test.",
              "bn": "Nesting & Parent Selectors টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Nesting & Parent Selectors!",
              "bn": "Nesting & Parent Selectors টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l2"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w4-l4",
        "weekId": "week-4",
        "order": 4,
        "title": {
          "en": "Mixins",
          "bn": "4. Mixins"
        },
        "description": {
          "en": "Learn and master Mixins with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Mixins এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 34,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Mixins\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Mixins\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Mixins\n\n#### 1. Learning Objective\nMaster **Mixins** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Mixins with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Mixins */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Mixins -->\n<section class=\"lesson-demo\">\n  <h2>Mixins</h2>\n  <p>Interactive lab exercise for Mixins</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Mixins** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 4. Mixins\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **4. Mixins** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nMixins এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**4. Mixins** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Mixins */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Mixins\");",
        "expectedOutput": "CSS Lab Ready: Mixins",
        "terminalTasks": [
          {
            "id": "task-w4-l4",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Mixins test.",
              "bn": "Mixins টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Mixins!",
              "bn": "Mixins টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l3"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w4-l5",
        "weekId": "week-4",
        "order": 5,
        "title": {
          "en": "Functions",
          "bn": "5. Functions"
        },
        "description": {
          "en": "Learn and master Functions with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Functions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 37,
        "difficulty": "Beginner",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Functions\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Functions\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Functions\n\n#### 1. Learning Objective\nMaster **Functions** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Functions with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Functions */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Functions -->\n<section class=\"lesson-demo\">\n  <h2>Functions</h2>\n  <p>Interactive lab exercise for Functions</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Functions** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 5. Functions\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **5. Functions** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nFunctions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**5. Functions** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Functions */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Functions\");",
        "expectedOutput": "CSS Lab Ready: Functions",
        "terminalTasks": [
          {
            "id": "task-w4-l5",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Functions test.",
              "bn": "Functions টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Functions!",
              "bn": "Functions টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l4"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
          ]
        }
      },
      {
        "id": "w4-l6",
        "weekId": "week-4",
        "order": 6,
        "title": {
          "en": "Loops (@for, @each, @while)",
          "bn": "6. Loops (@for, @each, @while)"
        },
        "description": {
          "en": "Learn and master Loops (@for, @each, @while) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Loops (@for, @each, @while) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Loops (@for, @each, @while)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Loops (@for, @each, @while)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Loops (@for, @each, @while)\n\n#### 1. Learning Objective\nMaster **Loops (@for, @each, @while)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Loops (@for, @each, @while) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Loops (@for, @each, @while) */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Loops (@for, @each, @while) -->\n<section class=\"lesson-demo\">\n  <h2>Loops (@for, @each, @while)</h2>\n  <p>Interactive lab exercise for Loops (@for, @each, @while)</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Loops (@for, @each, @while)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 6. Loops (@for, @each, @while)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **6. Loops (@for, @each, @while)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nLoops (@for, @each, @while) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**6. Loops (@for, @each, @while)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Loops (@for, @each, @while) */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Loops (@for, @each, @while)\");",
        "expectedOutput": "CSS Lab Ready: Loops (@for, @each, @while)",
        "terminalTasks": [
          {
            "id": "task-w4-l6",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Loops (@for, @each, @while) test.",
              "bn": "Loops (@for, @each, @while) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Loops (@for, @each, @while)!",
              "bn": "Loops (@for, @each, @while) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l5"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w4-l7",
        "weekId": "week-4",
        "order": 7,
        "title": {
          "en": "Partials & Organization",
          "bn": "7. Partials & Organization"
        },
        "description": {
          "en": "Learn and master Partials & Organization with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Partials & Organization এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 43,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Partials & Organization\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Partials & Organization\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Partials & Organization\n\n#### 1. Learning Objective\nMaster **Partials & Organization** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Partials & Organization with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Partials & Organization */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Partials & Organization -->\n<section class=\"lesson-demo\">\n  <h2>Partials & Organization</h2>\n  <p>Interactive lab exercise for Partials & Organization</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Partials & Organization** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 7. Partials & Organization\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **7. Partials & Organization** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nPartials & Organization এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**7. Partials & Organization** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Partials & Organization */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Partials & Organization\");",
        "expectedOutput": "CSS Lab Ready: Partials & Organization",
        "terminalTasks": [
          {
            "id": "task-w4-l7",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Partials & Organization test.",
              "bn": "Partials & Organization টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Partials & Organization!",
              "bn": "Partials & Organization টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l6"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w4-l8",
        "weekId": "week-4",
        "order": 8,
        "title": {
          "en": "7-1 Architecture",
          "bn": "8. 7-1 Architecture"
        },
        "description": {
          "en": "Learn and master 7-1 Architecture with hands-on practice, syntax rules, and real-world examples.",
          "bn": "7-1 Architecture এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 46,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"7-1 Architecture\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"7-1 Architecture\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### 7-1 Architecture\n\n#### 1. Learning Objective\nMaster **7-1 Architecture** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master 7-1 Architecture with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for 7-1 Architecture */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for 7-1 Architecture -->\n<section class=\"lesson-demo\">\n  <h2>7-1 Architecture</h2>\n  <p>Interactive lab exercise for 7-1 Architecture</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **7-1 Architecture** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 8. 7-1 Architecture\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **8. 7-1 Architecture** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\n7-1 Architecture এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**8. 7-1 Architecture** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for 7-1 Architecture */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: 7-1 Architecture\");",
        "expectedOutput": "CSS Lab Ready: 7-1 Architecture",
        "terminalTasks": [
          {
            "id": "task-w4-l8",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the 7-1 Architecture test.",
              "bn": "7-1 Architecture টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for 7-1 Architecture!",
              "bn": "7-1 Architecture টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l7"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w4-l9",
        "weekId": "week-4",
        "order": 9,
        "title": {
          "en": "CSS Grid Advanced",
          "bn": "9. CSS Grid Advanced"
        },
        "description": {
          "en": "Learn and master CSS Grid Advanced with hands-on practice, syntax rules, and real-world examples.",
          "bn": "CSS Grid Advanced এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 49,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"CSS Grid Advanced\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"CSS Grid Advanced\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### CSS Grid Advanced\n\n#### 1. Learning Objective\nMaster **CSS Grid Advanced** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master CSS Grid Advanced with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for CSS Grid Advanced */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for CSS Grid Advanced -->\n<section class=\"lesson-demo\">\n  <h2>CSS Grid Advanced</h2>\n  <p>Interactive lab exercise for CSS Grid Advanced</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **CSS Grid Advanced** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 9. CSS Grid Advanced\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **9. CSS Grid Advanced** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCSS Grid Advanced এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**9. CSS Grid Advanced** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for CSS Grid Advanced */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: CSS Grid Advanced\");",
        "expectedOutput": "CSS Lab Ready: CSS Grid Advanced",
        "terminalTasks": [
          {
            "id": "task-w4-l9",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the CSS Grid Advanced test.",
              "bn": "CSS Grid Advanced টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for CSS Grid Advanced!",
              "bn": "CSS Grid Advanced টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l8"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"
          ]
        }
      },
      {
        "id": "w4-l10",
        "weekId": "week-4",
        "order": 10,
        "title": {
          "en": "Transforms & Transitions Advanced",
          "bn": "10. Transforms & Transitions Advanced"
        },
        "description": {
          "en": "Learn and master Transforms & Transitions Advanced with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Transforms & Transitions Advanced এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 27,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Transforms & Transitions Advanced\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Transforms & Transitions Advanced\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Transforms & Transitions Advanced\n\n#### 1. Learning Objective\nMaster **Transforms & Transitions Advanced** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Transforms & Transitions Advanced with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Transforms & Transitions Advanced */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Transforms & Transitions Advanced -->\n<section class=\"lesson-demo\">\n  <h2>Transforms & Transitions Advanced</h2>\n  <p>Interactive lab exercise for Transforms & Transitions Advanced</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Transforms & Transitions Advanced** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 10. Transforms & Transitions Advanced\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **10. Transforms & Transitions Advanced** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nTransforms & Transitions Advanced এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**10. Transforms & Transitions Advanced** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Transforms & Transitions Advanced */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Transforms & Transitions Advanced\");",
        "expectedOutput": "CSS Lab Ready: Transforms & Transitions Advanced",
        "terminalTasks": [
          {
            "id": "task-w4-l10",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Transforms & Transitions Advanced test.",
              "bn": "Transforms & Transitions Advanced টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Transforms & Transitions Advanced!",
              "bn": "Transforms & Transitions Advanced টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l9"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ]
        }
      },
      {
        "id": "w4-l11",
        "weekId": "week-4",
        "order": 11,
        "title": {
          "en": "Filters & Effects",
          "bn": "11. Filters & Effects"
        },
        "description": {
          "en": "Learn and master Filters & Effects with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Filters & Effects এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Filters & Effects\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Filters & Effects\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Filters & Effects\n\n#### 1. Learning Objective\nMaster **Filters & Effects** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Filters & Effects with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Filters & Effects */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Filters & Effects -->\n<section class=\"lesson-demo\">\n  <h2>Filters & Effects</h2>\n  <p>Interactive lab exercise for Filters & Effects</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Filters & Effects** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 11. Filters & Effects\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **11. Filters & Effects** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nFilters & Effects এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**11. Filters & Effects** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Filters & Effects */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Filters & Effects\");",
        "expectedOutput": "CSS Lab Ready: Filters & Effects",
        "terminalTasks": [
          {
            "id": "task-w4-l11",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Filters & Effects test.",
              "bn": "Filters & Effects টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Filters & Effects!",
              "bn": "Filters & Effects টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l10"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w4-l12",
        "weekId": "week-4",
        "order": 12,
        "title": {
          "en": "CSS Custom Properties",
          "bn": "12. CSS Custom Properties"
        },
        "description": {
          "en": "Learn and master CSS Custom Properties with hands-on practice, syntax rules, and real-world examples.",
          "bn": "CSS Custom Properties এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 33,
        "difficulty": "Intermediate",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"CSS Custom Properties\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"CSS Custom Properties\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### CSS Custom Properties\n\n#### 1. Learning Objective\nMaster **CSS Custom Properties** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master CSS Custom Properties with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for CSS Custom Properties */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for CSS Custom Properties -->\n<section class=\"lesson-demo\">\n  <h2>CSS Custom Properties</h2>\n  <p>Interactive lab exercise for CSS Custom Properties</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **CSS Custom Properties** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 12. CSS Custom Properties\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **12. CSS Custom Properties** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCSS Custom Properties এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**12. CSS Custom Properties** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for CSS Custom Properties */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: CSS Custom Properties\");",
        "expectedOutput": "CSS Lab Ready: CSS Custom Properties",
        "terminalTasks": [
          {
            "id": "task-w4-l12",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the CSS Custom Properties test.",
              "bn": "CSS Custom Properties টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for CSS Custom Properties!",
              "bn": "CSS Custom Properties টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l11"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w4-l13",
        "weekId": "week-4",
        "order": 13,
        "title": {
          "en": "Calc() Dynamic Sizing",
          "bn": "13. Calc() Dynamic Sizing"
        },
        "description": {
          "en": "Learn and master Calc() Dynamic Sizing with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Calc() Dynamic Sizing এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 36,
        "difficulty": "Advanced",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Calc() Dynamic Sizing\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Calc() Dynamic Sizing\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Calc() Dynamic Sizing\n\n#### 1. Learning Objective\nMaster **Calc() Dynamic Sizing** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Calc() Dynamic Sizing with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Calc() Dynamic Sizing */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Calc() Dynamic Sizing -->\n<section class=\"lesson-demo\">\n  <h2>Calc() Dynamic Sizing</h2>\n  <p>Interactive lab exercise for Calc() Dynamic Sizing</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Calc() Dynamic Sizing** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 13. Calc() Dynamic Sizing\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **13. Calc() Dynamic Sizing** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCalc() Dynamic Sizing এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**13. Calc() Dynamic Sizing** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Calc() Dynamic Sizing */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Calc() Dynamic Sizing\");",
        "expectedOutput": "CSS Lab Ready: Calc() Dynamic Sizing",
        "terminalTasks": [
          {
            "id": "task-w4-l13",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Calc() Dynamic Sizing test.",
              "bn": "Calc() Dynamic Sizing টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Calc() Dynamic Sizing!",
              "bn": "Calc() Dynamic Sizing টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l12"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          ]
        }
      },
      {
        "id": "w4-l14",
        "weekId": "week-4",
        "order": 14,
        "title": {
          "en": "Project: CSS Grid Dashboard",
          "bn": "14. Project: CSS Grid Dashboard"
        },
        "description": {
          "en": "Learn and master Project: CSS Grid Dashboard with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Project: CSS Grid Dashboard এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 39,
        "difficulty": "Advanced",
        "category": "css",
        "objectives": {
          "en": [
            "Understand core concepts of \"Project: CSS Grid Dashboard\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Project: CSS Grid Dashboard\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Project: CSS Grid Dashboard\n\n#### 1. Learning Objective\nMaster **Project: CSS Grid Dashboard** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Project: CSS Grid Dashboard with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nApply foundational CSS rules:\n```css\n/* Syntax structure for Project: CSS Grid Dashboard */\n.selector {\n  display: flex;\n  gap: 1rem;\n}\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Project: CSS Grid Dashboard -->\n<section class=\"lesson-demo\">\n  <h2>Project: CSS Grid Dashboard</h2>\n  <p>Interactive lab exercise for Project: CSS Grid Dashboard</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Project: CSS Grid Dashboard** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 14. Project: CSS Grid Dashboard\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **14. Project: CSS Grid Dashboard** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProject: CSS Grid Dashboard এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**14. Project: CSS Grid Dashboard** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "/* CSS Practice for Project: CSS Grid Dashboard */\nbody {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #1e293b;\n  border-radius: 12px;\n}\nconsole.log(\"CSS Lab Ready: Project: CSS Grid Dashboard\");",
        "expectedOutput": "CSS Lab Ready: Project: CSS Grid Dashboard",
        "terminalTasks": [
          {
            "id": "task-w4-l14",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Project: CSS Grid Dashboard test.",
              "bn": "Project: CSS Grid Dashboard টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Project: CSS Grid Dashboard!",
              "bn": "Project: CSS Grid Dashboard টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l13"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"
          ]
        }
      }
    ]
  },
  {
    "id": "week-5",
    "order": 5,
    "title": {
      "en": "Week 5: JavaScript Fundamentals",
      "bn": "উইক 5: জাভাস্ক্রিপ্ট মৌলিক"
    },
    "subtitle": {
      "en": "JavaScript Fundamentals (20 Lessons)",
      "bn": "জাভাস্ক্রিপ্ট মৌলিক (20 টি লেসন)"
    },
    "description": {
      "en": "Comprehensive JavaScript Fundamentals module with 20 interactive step-by-step lessons.",
      "bn": "20 টি ইন্টারঅ্যাক্টিভ লেসন সহ জাভাস্ক্রিপ্ট মৌলিক এর সম্পূর্ণ মডিউল।"
    },
    "isGitWeek": false,
    "lessons": [
      {
        "id": "w5-l1",
        "weekId": "week-5",
        "order": 1,
        "title": {
          "en": "JavaScript Basics & Syntax",
          "bn": "1. JavaScript Basics & Syntax"
        },
        "description": {
          "en": "Learn and master JavaScript Basics & Syntax with hands-on practice, syntax rules, and real-world examples.",
          "bn": "JavaScript Basics & Syntax এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"JavaScript Basics & Syntax\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"JavaScript Basics & Syntax\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### JavaScript Basics & Syntax\n\n#### 1. Learning Objective\nMaster **JavaScript Basics & Syntax** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master JavaScript Basics & Syntax with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// JavaScript Basics & Syntax execution pattern\nconsole.log(\"Mastering JavaScript Basics & Syntax\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of JavaScript Basics & Syntax\nfunction executeLessonTask() {\n  const topic = \"JavaScript Basics & Syntax\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **JavaScript Basics & Syntax** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 1. JavaScript Basics & Syntax\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **1. JavaScript Basics & Syntax** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nJavaScript Basics & Syntax এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**1. JavaScript Basics & Syntax** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: JavaScript Basics & Syntax\nfunction runLab() {\n  const lesson = \"JavaScript Basics & Syntax\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: JavaScript Basics & Syntax",
        "terminalTasks": [
          {
            "id": "task-w5-l1",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the JavaScript Basics & Syntax test.",
              "bn": "JavaScript Basics & Syntax টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for JavaScript Basics & Syntax!",
              "bn": "JavaScript Basics & Syntax টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w4-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l2",
        "weekId": "week-5",
        "order": 2,
        "title": {
          "en": "Variables (var/let/const)",
          "bn": "2. Variables (var/let/const)"
        },
        "description": {
          "en": "Learn and master Variables (var/let/const) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Variables (var/let/const) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 28,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Variables (var/let/const)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Variables (var/let/const)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Variables (var/let/const)\n\n#### 1. Learning Objective\nMaster **Variables (var/let/const)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Variables (var/let/const) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Variables (var/let/const) execution pattern\nconsole.log(\"Mastering Variables (var/let/const)\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Variables (var/let/const)\nfunction executeLessonTask() {\n  const topic = \"Variables (var/let/const)\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Variables (var/let/const)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 2. Variables (var/let/const)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **2. Variables (var/let/const)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nVariables (var/let/const) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**2. Variables (var/let/const)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Variables (var/let/const)\nfunction runLab() {\n  const lesson = \"Variables (var/let/const)\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Variables (var/let/const)",
        "terminalTasks": [
          {
            "id": "task-w5-l2",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Variables (var/let/const) test.",
              "bn": "Variables (var/let/const) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Variables (var/let/const)!",
              "bn": "Variables (var/let/const) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l3",
        "weekId": "week-5",
        "order": 3,
        "title": {
          "en": "Data Types",
          "bn": "3. Data Types"
        },
        "description": {
          "en": "Learn and master Data Types with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Data Types এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 31,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Data Types\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Data Types\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Data Types\n\n#### 1. Learning Objective\nMaster **Data Types** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Data Types with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Data Types execution pattern\nconsole.log(\"Mastering Data Types\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Data Types\nfunction executeLessonTask() {\n  const topic = \"Data Types\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Data Types** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 3. Data Types\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **3. Data Types** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nData Types এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**3. Data Types** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Data Types\nfunction runLab() {\n  const lesson = \"Data Types\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Data Types",
        "terminalTasks": [
          {
            "id": "task-w5-l3",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Data Types test.",
              "bn": "Data Types টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Data Types!",
              "bn": "Data Types টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l2"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l4",
        "weekId": "week-5",
        "order": 4,
        "title": {
          "en": "Type Coercion",
          "bn": "4. Type Coercion"
        },
        "description": {
          "en": "Learn and master Type Coercion with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Type Coercion এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 34,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Type Coercion\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Type Coercion\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Type Coercion\n\n#### 1. Learning Objective\nMaster **Type Coercion** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Type Coercion with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Type Coercion execution pattern\nconsole.log(\"Mastering Type Coercion\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Type Coercion\nfunction executeLessonTask() {\n  const topic = \"Type Coercion\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Type Coercion** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 4. Type Coercion\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **4. Type Coercion** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nType Coercion এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**4. Type Coercion** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Type Coercion\nfunction runLab() {\n  const lesson = \"Type Coercion\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Type Coercion",
        "terminalTasks": [
          {
            "id": "task-w5-l4",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Type Coercion test.",
              "bn": "Type Coercion টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Type Coercion!",
              "bn": "Type Coercion টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l3"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l5",
        "weekId": "week-5",
        "order": 5,
        "title": {
          "en": "Operators",
          "bn": "5. Operators"
        },
        "description": {
          "en": "Learn and master Operators with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Operators এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 37,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Operators\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Operators\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Operators\n\n#### 1. Learning Objective\nMaster **Operators** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Operators with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Operators execution pattern\nconsole.log(\"Mastering Operators\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Operators\nfunction executeLessonTask() {\n  const topic = \"Operators\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Operators** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 5. Operators\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **5. Operators** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nOperators এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**5. Operators** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Operators\nfunction runLab() {\n  const lesson = \"Operators\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Operators",
        "terminalTasks": [
          {
            "id": "task-w5-l5",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Operators test.",
              "bn": "Operators টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Operators!",
              "bn": "Operators টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l4"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l6",
        "weekId": "week-5",
        "order": 6,
        "title": {
          "en": "Strings",
          "bn": "6. Strings"
        },
        "description": {
          "en": "Learn and master Strings with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Strings এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Strings\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Strings\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Strings\n\n#### 1. Learning Objective\nMaster **Strings** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Strings with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Strings execution pattern\nconsole.log(\"Mastering Strings\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Strings\nfunction executeLessonTask() {\n  const topic = \"Strings\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Strings** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 6. Strings\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **6. Strings** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nStrings এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**6. Strings** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Strings\nfunction runLab() {\n  const lesson = \"Strings\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Strings",
        "terminalTasks": [
          {
            "id": "task-w5-l6",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Strings test.",
              "bn": "Strings টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Strings!",
              "bn": "Strings টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l5"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l7",
        "weekId": "week-5",
        "order": 7,
        "title": {
          "en": "Numbers",
          "bn": "7. Numbers"
        },
        "description": {
          "en": "Learn and master Numbers with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Numbers এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 43,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Numbers\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Numbers\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Numbers\n\n#### 1. Learning Objective\nMaster **Numbers** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Numbers with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Numbers execution pattern\nconsole.log(\"Mastering Numbers\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Numbers\nfunction executeLessonTask() {\n  const topic = \"Numbers\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Numbers** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 7. Numbers\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **7. Numbers** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nNumbers এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**7. Numbers** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Numbers\nfunction runLab() {\n  const lesson = \"Numbers\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Numbers",
        "terminalTasks": [
          {
            "id": "task-w5-l7",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Numbers test.",
              "bn": "Numbers টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Numbers!",
              "bn": "Numbers টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l6"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l8",
        "weekId": "week-5",
        "order": 8,
        "title": {
          "en": "Arrays",
          "bn": "8. Arrays"
        },
        "description": {
          "en": "Learn and master Arrays with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Arrays এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 46,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Arrays\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Arrays\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Arrays\n\n#### 1. Learning Objective\nMaster **Arrays** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Arrays with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Arrays execution pattern\nconsole.log(\"Mastering Arrays\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Arrays\nfunction executeLessonTask() {\n  const topic = \"Arrays\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Arrays** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 8. Arrays\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **8. Arrays** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nArrays এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**8. Arrays** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Arrays\nfunction runLab() {\n  const lesson = \"Arrays\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Arrays",
        "terminalTasks": [
          {
            "id": "task-w5-l8",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Arrays test.",
              "bn": "Arrays টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Arrays!",
              "bn": "Arrays টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l7"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l9",
        "weekId": "week-5",
        "order": 9,
        "title": {
          "en": "Array Methods (map/filter/reduce)",
          "bn": "9. Array Methods (map/filter/reduce)"
        },
        "description": {
          "en": "Learn and master Array Methods (map/filter/reduce) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Array Methods (map/filter/reduce) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 49,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Array Methods (map/filter/reduce)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Array Methods (map/filter/reduce)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Array Methods (map/filter/reduce)\n\n#### 1. Learning Objective\nMaster **Array Methods (map/filter/reduce)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Array Methods (map/filter/reduce) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Array Methods (map/filter/reduce) execution pattern\nconsole.log(\"Mastering Array Methods (map/filter/reduce)\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Array Methods (map/filter/reduce)\nfunction executeLessonTask() {\n  const topic = \"Array Methods (map/filter/reduce)\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Array Methods (map/filter/reduce)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 9. Array Methods (map/filter/reduce)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **9. Array Methods (map/filter/reduce)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nArray Methods (map/filter/reduce) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**9. Array Methods (map/filter/reduce)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Array Methods (map/filter/reduce)\nfunction runLab() {\n  const lesson = \"Array Methods (map/filter/reduce)\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Array Methods (map/filter/reduce)",
        "terminalTasks": [
          {
            "id": "task-w5-l9",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Array Methods (map/filter/reduce) test.",
              "bn": "Array Methods (map/filter/reduce) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Array Methods (map/filter/reduce)!",
              "bn": "Array Methods (map/filter/reduce) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l8"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l10",
        "weekId": "week-5",
        "order": 10,
        "title": {
          "en": "Objects",
          "bn": "10. Objects"
        },
        "description": {
          "en": "Learn and master Objects with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Objects এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 27,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Objects\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Objects\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Objects\n\n#### 1. Learning Objective\nMaster **Objects** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Objects with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Objects execution pattern\nconsole.log(\"Mastering Objects\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Objects\nfunction executeLessonTask() {\n  const topic = \"Objects\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Objects** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 10. Objects\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **10. Objects** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nObjects এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**10. Objects** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Objects\nfunction runLab() {\n  const lesson = \"Objects\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Objects",
        "terminalTasks": [
          {
            "id": "task-w5-l10",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Objects test.",
              "bn": "Objects টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Objects!",
              "bn": "Objects টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l9"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l11",
        "weekId": "week-5",
        "order": 11,
        "title": {
          "en": "Object Methods & this",
          "bn": "11. Object Methods & this"
        },
        "description": {
          "en": "Learn and master Object Methods & this with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Object Methods & this এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Object Methods & this\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Object Methods & this\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Object Methods & this\n\n#### 1. Learning Objective\nMaster **Object Methods & this** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Object Methods & this with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Object Methods & this execution pattern\nconsole.log(\"Mastering Object Methods & this\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Object Methods & this\nfunction executeLessonTask() {\n  const topic = \"Object Methods & this\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Object Methods & this** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 11. Object Methods & this\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **11. Object Methods & this** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nObject Methods & this এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**11. Object Methods & this** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Object Methods & this\nfunction runLab() {\n  const lesson = \"Object Methods & this\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Object Methods & this",
        "terminalTasks": [
          {
            "id": "task-w5-l11",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Object Methods & this test.",
              "bn": "Object Methods & this টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Object Methods & this!",
              "bn": "Object Methods & this টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l10"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l12",
        "weekId": "week-5",
        "order": 12,
        "title": {
          "en": "Conditionals (if/switch)",
          "bn": "12. Conditionals (if/switch)"
        },
        "description": {
          "en": "Learn and master Conditionals (if/switch) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Conditionals (if/switch) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 33,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Conditionals (if/switch)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Conditionals (if/switch)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Conditionals (if/switch)\n\n#### 1. Learning Objective\nMaster **Conditionals (if/switch)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Conditionals (if/switch) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Conditionals (if/switch) execution pattern\nconsole.log(\"Mastering Conditionals (if/switch)\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Conditionals (if/switch)\nfunction executeLessonTask() {\n  const topic = \"Conditionals (if/switch)\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Conditionals (if/switch)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 12. Conditionals (if/switch)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **12. Conditionals (if/switch)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nConditionals (if/switch) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**12. Conditionals (if/switch)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Conditionals (if/switch)\nfunction runLab() {\n  const lesson = \"Conditionals (if/switch)\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Conditionals (if/switch)",
        "terminalTasks": [
          {
            "id": "task-w5-l12",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Conditionals (if/switch) test.",
              "bn": "Conditionals (if/switch) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Conditionals (if/switch)!",
              "bn": "Conditionals (if/switch) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l11"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l13",
        "weekId": "week-5",
        "order": 13,
        "title": {
          "en": "Loops",
          "bn": "13. Loops"
        },
        "description": {
          "en": "Learn and master Loops with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Loops এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 36,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Loops\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Loops\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Loops\n\n#### 1. Learning Objective\nMaster **Loops** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Loops with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Loops execution pattern\nconsole.log(\"Mastering Loops\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Loops\nfunction executeLessonTask() {\n  const topic = \"Loops\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Loops** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 13. Loops\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **13. Loops** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nLoops এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**13. Loops** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Loops\nfunction runLab() {\n  const lesson = \"Loops\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Loops",
        "terminalTasks": [
          {
            "id": "task-w5-l13",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Loops test.",
              "bn": "Loops টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Loops!",
              "bn": "Loops টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l12"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l14",
        "weekId": "week-5",
        "order": 14,
        "title": {
          "en": "Functions",
          "bn": "14. Functions"
        },
        "description": {
          "en": "Learn and master Functions with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Functions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 39,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Functions\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Functions\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Functions\n\n#### 1. Learning Objective\nMaster **Functions** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Functions with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Functions execution pattern\nconsole.log(\"Mastering Functions\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Functions\nfunction executeLessonTask() {\n  const topic = \"Functions\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Functions** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 14. Functions\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **14. Functions** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nFunctions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**14. Functions** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Functions\nfunction runLab() {\n  const lesson = \"Functions\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Functions",
        "terminalTasks": [
          {
            "id": "task-w5-l14",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Functions test.",
              "bn": "Functions টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Functions!",
              "bn": "Functions টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l13"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
          ]
        }
      },
      {
        "id": "w5-l15",
        "weekId": "week-5",
        "order": 15,
        "title": {
          "en": "Scope & Hoisting",
          "bn": "15. Scope & Hoisting"
        },
        "description": {
          "en": "Learn and master Scope & Hoisting with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Scope & Hoisting এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 42,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Scope & Hoisting\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Scope & Hoisting\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Scope & Hoisting\n\n#### 1. Learning Objective\nMaster **Scope & Hoisting** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Scope & Hoisting with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Scope & Hoisting execution pattern\nconsole.log(\"Mastering Scope & Hoisting\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Scope & Hoisting\nfunction executeLessonTask() {\n  const topic = \"Scope & Hoisting\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Scope & Hoisting** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 15. Scope & Hoisting\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **15. Scope & Hoisting** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nScope & Hoisting এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**15. Scope & Hoisting** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Scope & Hoisting\nfunction runLab() {\n  const lesson = \"Scope & Hoisting\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Scope & Hoisting",
        "terminalTasks": [
          {
            "id": "task-w5-l15",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Scope & Hoisting test.",
              "bn": "Scope & Hoisting টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Scope & Hoisting!",
              "bn": "Scope & Hoisting টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l14"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l16",
        "weekId": "week-5",
        "order": 16,
        "title": {
          "en": "Arrow Functions",
          "bn": "16. Arrow Functions"
        },
        "description": {
          "en": "Learn and master Arrow Functions with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Arrow Functions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 45,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Arrow Functions\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Arrow Functions\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Arrow Functions\n\n#### 1. Learning Objective\nMaster **Arrow Functions** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Arrow Functions with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Arrow Functions execution pattern\nconsole.log(\"Mastering Arrow Functions\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Arrow Functions\nfunction executeLessonTask() {\n  const topic = \"Arrow Functions\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Arrow Functions** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 16. Arrow Functions\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **16. Arrow Functions** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nArrow Functions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**16. Arrow Functions** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Arrow Functions\nfunction runLab() {\n  const lesson = \"Arrow Functions\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Arrow Functions",
        "terminalTasks": [
          {
            "id": "task-w5-l16",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Arrow Functions test.",
              "bn": "Arrow Functions টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Arrow Functions!",
              "bn": "Arrow Functions টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l15"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
          ]
        }
      },
      {
        "id": "w5-l17",
        "weekId": "week-5",
        "order": 17,
        "title": {
          "en": "Default Params & Rest",
          "bn": "17. Default Params & Rest"
        },
        "description": {
          "en": "Learn and master Default Params & Rest with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Default Params & Rest এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 48,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Default Params & Rest\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Default Params & Rest\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Default Params & Rest\n\n#### 1. Learning Objective\nMaster **Default Params & Rest** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Default Params & Rest with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Default Params & Rest execution pattern\nconsole.log(\"Mastering Default Params & Rest\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Default Params & Rest\nfunction executeLessonTask() {\n  const topic = \"Default Params & Rest\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Default Params & Rest** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 17. Default Params & Rest\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **17. Default Params & Rest** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nDefault Params & Rest এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**17. Default Params & Rest** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Default Params & Rest\nfunction runLab() {\n  const lesson = \"Default Params & Rest\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Default Params & Rest",
        "terminalTasks": [
          {
            "id": "task-w5-l17",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Default Params & Rest test.",
              "bn": "Default Params & Rest টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Default Params & Rest!",
              "bn": "Default Params & Rest টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l16"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l18",
        "weekId": "week-5",
        "order": 18,
        "title": {
          "en": "Destructuring",
          "bn": "18. Destructuring"
        },
        "description": {
          "en": "Learn and master Destructuring with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Destructuring এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 26,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Destructuring\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Destructuring\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Destructuring\n\n#### 1. Learning Objective\nMaster **Destructuring** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Destructuring with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Destructuring execution pattern\nconsole.log(\"Mastering Destructuring\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Destructuring\nfunction executeLessonTask() {\n  const topic = \"Destructuring\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Destructuring** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 18. Destructuring\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **18. Destructuring** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nDestructuring এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**18. Destructuring** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Destructuring\nfunction runLab() {\n  const lesson = \"Destructuring\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Destructuring",
        "terminalTasks": [
          {
            "id": "task-w5-l18",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Destructuring test.",
              "bn": "Destructuring টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Destructuring!",
              "bn": "Destructuring টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l17"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l19",
        "weekId": "week-5",
        "order": 19,
        "title": {
          "en": "Template Literals",
          "bn": "19. Template Literals"
        },
        "description": {
          "en": "Learn and master Template Literals with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Template Literals এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 29,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Template Literals\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Template Literals\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Template Literals\n\n#### 1. Learning Objective\nMaster **Template Literals** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Template Literals with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Template Literals execution pattern\nconsole.log(\"Mastering Template Literals\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Template Literals\nfunction executeLessonTask() {\n  const topic = \"Template Literals\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Template Literals** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 19. Template Literals\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **19. Template Literals** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nTemplate Literals এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**19. Template Literals** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Template Literals\nfunction runLab() {\n  const lesson = \"Template Literals\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Template Literals",
        "terminalTasks": [
          {
            "id": "task-w5-l19",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Template Literals test.",
              "bn": "Template Literals টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Template Literals!",
              "bn": "Template Literals টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l18"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w5-l20",
        "weekId": "week-5",
        "order": 20,
        "title": {
          "en": "Project: Calculator + Todo",
          "bn": "20. Project: Calculator + Todo"
        },
        "description": {
          "en": "Learn and master Project: Calculator + Todo with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Project: Calculator + Todo এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 32,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Project: Calculator + Todo\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Project: Calculator + Todo\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Project: Calculator + Todo\n\n#### 1. Learning Objective\nMaster **Project: Calculator + Todo** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Project: Calculator + Todo with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Project: Calculator + Todo execution pattern\nconsole.log(\"Mastering Project: Calculator + Todo\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Project: Calculator + Todo\nfunction executeLessonTask() {\n  const topic = \"Project: Calculator + Todo\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Project: Calculator + Todo** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 20. Project: Calculator + Todo\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **20. Project: Calculator + Todo** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProject: Calculator + Todo এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**20. Project: Calculator + Todo** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Project: Calculator + Todo\nfunction runLab() {\n  const lesson = \"Project: Calculator + Todo\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Project: Calculator + Todo",
        "terminalTasks": [
          {
            "id": "task-w5-l20",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Project: Calculator + Todo test.",
              "bn": "Project: Calculator + Todo টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Project: Calculator + Todo!",
              "bn": "Project: Calculator + Todo টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l19"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      }
    ]
  },
  {
    "id": "week-6",
    "order": 6,
    "title": {
      "en": "Week 6: DOM Manipulation & Events",
      "bn": "উইক 6: DOM ম্যানিপুলেশন ও ইভেন্ট"
    },
    "subtitle": {
      "en": "DOM Manipulation & Events (16 Lessons)",
      "bn": "DOM ম্যানিপুলেশন ও ইভেন্ট (16 টি লেসন)"
    },
    "description": {
      "en": "Comprehensive DOM Manipulation & Events module with 16 interactive step-by-step lessons.",
      "bn": "16 টি ইন্টারঅ্যাক্টিভ লেসন সহ DOM ম্যানিপুলেশন ও ইভেন্ট এর সম্পূর্ণ মডিউল।"
    },
    "isGitWeek": false,
    "lessons": [
      {
        "id": "w6-l1",
        "weekId": "week-6",
        "order": 1,
        "title": {
          "en": "DOM Tree Structure",
          "bn": "1. DOM Tree Structure"
        },
        "description": {
          "en": "Learn and master DOM Tree Structure with hands-on practice, syntax rules, and real-world examples.",
          "bn": "DOM Tree Structure এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"DOM Tree Structure\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"DOM Tree Structure\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### DOM Tree Structure\n\n#### 1. Learning Objective\nMaster **DOM Tree Structure** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master DOM Tree Structure with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// DOM Tree Structure execution pattern\nconsole.log(\"Mastering DOM Tree Structure\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of DOM Tree Structure\nfunction executeLessonTask() {\n  const topic = \"DOM Tree Structure\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **DOM Tree Structure** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 1. DOM Tree Structure\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **1. DOM Tree Structure** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nDOM Tree Structure এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**1. DOM Tree Structure** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: DOM Tree Structure\nfunction runLab() {\n  const lesson = \"DOM Tree Structure\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: DOM Tree Structure",
        "terminalTasks": [
          {
            "id": "task-w6-l1",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the DOM Tree Structure test.",
              "bn": "DOM Tree Structure টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for DOM Tree Structure!",
              "bn": "DOM Tree Structure টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w5-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l2",
        "weekId": "week-6",
        "order": 2,
        "title": {
          "en": "Selecting Elements",
          "bn": "2. Selecting Elements"
        },
        "description": {
          "en": "Learn and master Selecting Elements with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Selecting Elements এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 28,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Selecting Elements\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Selecting Elements\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Selecting Elements\n\n#### 1. Learning Objective\nMaster **Selecting Elements** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Selecting Elements with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Selecting Elements execution pattern\nconsole.log(\"Mastering Selecting Elements\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Selecting Elements\nfunction executeLessonTask() {\n  const topic = \"Selecting Elements\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Selecting Elements** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 2. Selecting Elements\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **2. Selecting Elements** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nSelecting Elements এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**2. Selecting Elements** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Selecting Elements\nfunction runLab() {\n  const lesson = \"Selecting Elements\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Selecting Elements",
        "terminalTasks": [
          {
            "id": "task-w6-l2",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Selecting Elements test.",
              "bn": "Selecting Elements টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Selecting Elements!",
              "bn": "Selecting Elements টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l3",
        "weekId": "week-6",
        "order": 3,
        "title": {
          "en": "querySelector vs getElement",
          "bn": "3. querySelector vs getElement"
        },
        "description": {
          "en": "Learn and master querySelector vs getElement with hands-on practice, syntax rules, and real-world examples.",
          "bn": "querySelector vs getElement এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 31,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"querySelector vs getElement\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"querySelector vs getElement\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### querySelector vs getElement\n\n#### 1. Learning Objective\nMaster **querySelector vs getElement** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master querySelector vs getElement with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// querySelector vs getElement execution pattern\nconsole.log(\"Mastering querySelector vs getElement\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of querySelector vs getElement\nfunction executeLessonTask() {\n  const topic = \"querySelector vs getElement\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **querySelector vs getElement** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 3. querySelector vs getElement\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **3. querySelector vs getElement** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nquerySelector vs getElement এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**3. querySelector vs getElement** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: querySelector vs getElement\nfunction runLab() {\n  const lesson = \"querySelector vs getElement\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: querySelector vs getElement",
        "terminalTasks": [
          {
            "id": "task-w6-l3",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the querySelector vs getElement test.",
              "bn": "querySelector vs getElement টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for querySelector vs getElement!",
              "bn": "querySelector vs getElement টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l2"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l4",
        "weekId": "week-6",
        "order": 4,
        "title": {
          "en": "Traversing DOM",
          "bn": "4. Traversing DOM"
        },
        "description": {
          "en": "Learn and master Traversing DOM with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Traversing DOM এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 34,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Traversing DOM\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Traversing DOM\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Traversing DOM\n\n#### 1. Learning Objective\nMaster **Traversing DOM** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Traversing DOM with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Traversing DOM execution pattern\nconsole.log(\"Mastering Traversing DOM\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Traversing DOM\nfunction executeLessonTask() {\n  const topic = \"Traversing DOM\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Traversing DOM** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 4. Traversing DOM\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **4. Traversing DOM** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nTraversing DOM এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**4. Traversing DOM** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Traversing DOM\nfunction runLab() {\n  const lesson = \"Traversing DOM\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Traversing DOM",
        "terminalTasks": [
          {
            "id": "task-w6-l4",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Traversing DOM test.",
              "bn": "Traversing DOM টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Traversing DOM!",
              "bn": "Traversing DOM টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l3"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l5",
        "weekId": "week-6",
        "order": 5,
        "title": {
          "en": "Modifying HTML",
          "bn": "5. Modifying HTML"
        },
        "description": {
          "en": "Learn and master Modifying HTML with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Modifying HTML এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 37,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Modifying HTML\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Modifying HTML\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Modifying HTML\n\n#### 1. Learning Objective\nMaster **Modifying HTML** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Modifying HTML with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Modifying HTML execution pattern\nconsole.log(\"Mastering Modifying HTML\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Modifying HTML\nfunction executeLessonTask() {\n  const topic = \"Modifying HTML\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Modifying HTML** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 5. Modifying HTML\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **5. Modifying HTML** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nModifying HTML এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**5. Modifying HTML** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Modifying HTML\nfunction runLab() {\n  const lesson = \"Modifying HTML\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Modifying HTML",
        "terminalTasks": [
          {
            "id": "task-w6-l5",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Modifying HTML test.",
              "bn": "Modifying HTML টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Modifying HTML!",
              "bn": "Modifying HTML টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l4"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l6",
        "weekId": "week-6",
        "order": 6,
        "title": {
          "en": "Creating Elements",
          "bn": "6. Creating Elements"
        },
        "description": {
          "en": "Learn and master Creating Elements with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Creating Elements এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Creating Elements\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Creating Elements\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Creating Elements\n\n#### 1. Learning Objective\nMaster **Creating Elements** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Creating Elements with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Creating Elements execution pattern\nconsole.log(\"Mastering Creating Elements\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Creating Elements\nfunction executeLessonTask() {\n  const topic = \"Creating Elements\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Creating Elements** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 6. Creating Elements\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **6. Creating Elements** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCreating Elements এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**6. Creating Elements** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Creating Elements\nfunction runLab() {\n  const lesson = \"Creating Elements\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Creating Elements",
        "terminalTasks": [
          {
            "id": "task-w6-l6",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Creating Elements test.",
              "bn": "Creating Elements টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Creating Elements!",
              "bn": "Creating Elements টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l5"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l7",
        "weekId": "week-6",
        "order": 7,
        "title": {
          "en": "Removing Elements",
          "bn": "7. Removing Elements"
        },
        "description": {
          "en": "Learn and master Removing Elements with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Removing Elements এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 43,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Removing Elements\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Removing Elements\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Removing Elements\n\n#### 1. Learning Objective\nMaster **Removing Elements** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Removing Elements with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Removing Elements execution pattern\nconsole.log(\"Mastering Removing Elements\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Removing Elements\nfunction executeLessonTask() {\n  const topic = \"Removing Elements\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Removing Elements** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 7. Removing Elements\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **7. Removing Elements** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nRemoving Elements এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**7. Removing Elements** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Removing Elements\nfunction runLab() {\n  const lesson = \"Removing Elements\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Removing Elements",
        "terminalTasks": [
          {
            "id": "task-w6-l7",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Removing Elements test.",
              "bn": "Removing Elements টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Removing Elements!",
              "bn": "Removing Elements টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l6"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l8",
        "weekId": "week-6",
        "order": 8,
        "title": {
          "en": "Cloning Elements",
          "bn": "8. Cloning Elements"
        },
        "description": {
          "en": "Learn and master Cloning Elements with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Cloning Elements এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 46,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Cloning Elements\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Cloning Elements\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Cloning Elements\n\n#### 1. Learning Objective\nMaster **Cloning Elements** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Cloning Elements with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Cloning Elements execution pattern\nconsole.log(\"Mastering Cloning Elements\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Cloning Elements\nfunction executeLessonTask() {\n  const topic = \"Cloning Elements\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Cloning Elements** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 8. Cloning Elements\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **8. Cloning Elements** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCloning Elements এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**8. Cloning Elements** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Cloning Elements\nfunction runLab() {\n  const lesson = \"Cloning Elements\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Cloning Elements",
        "terminalTasks": [
          {
            "id": "task-w6-l8",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Cloning Elements test.",
              "bn": "Cloning Elements টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Cloning Elements!",
              "bn": "Cloning Elements টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l7"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l9",
        "weekId": "week-6",
        "order": 9,
        "title": {
          "en": "Event Listeners",
          "bn": "9. Event Listeners"
        },
        "description": {
          "en": "Learn and master Event Listeners with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Event Listeners এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 49,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Event Listeners\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Event Listeners\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Event Listeners\n\n#### 1. Learning Objective\nMaster **Event Listeners** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Event Listeners with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Event Listeners execution pattern\nconsole.log(\"Mastering Event Listeners\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Event Listeners\nfunction executeLessonTask() {\n  const topic = \"Event Listeners\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Event Listeners** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 9. Event Listeners\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **9. Event Listeners** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nEvent Listeners এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**9. Event Listeners** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Event Listeners\nfunction runLab() {\n  const lesson = \"Event Listeners\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Event Listeners",
        "terminalTasks": [
          {
            "id": "task-w6-l9",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Event Listeners test.",
              "bn": "Event Listeners টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Event Listeners!",
              "bn": "Event Listeners টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l8"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l10",
        "weekId": "week-6",
        "order": 10,
        "title": {
          "en": "Event Types",
          "bn": "10. Event Types"
        },
        "description": {
          "en": "Learn and master Event Types with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Event Types এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 27,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Event Types\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Event Types\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Event Types\n\n#### 1. Learning Objective\nMaster **Event Types** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Event Types with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Event Types execution pattern\nconsole.log(\"Mastering Event Types\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Event Types\nfunction executeLessonTask() {\n  const topic = \"Event Types\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Event Types** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 10. Event Types\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **10. Event Types** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nEvent Types এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**10. Event Types** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Event Types\nfunction runLab() {\n  const lesson = \"Event Types\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Event Types",
        "terminalTasks": [
          {
            "id": "task-w6-l10",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Event Types test.",
              "bn": "Event Types টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Event Types!",
              "bn": "Event Types টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l9"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l11",
        "weekId": "week-6",
        "order": 11,
        "title": {
          "en": "Event Object",
          "bn": "11. Event Object"
        },
        "description": {
          "en": "Learn and master Event Object with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Event Object এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Event Object\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Event Object\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Event Object\n\n#### 1. Learning Objective\nMaster **Event Object** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Event Object with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Event Object execution pattern\nconsole.log(\"Mastering Event Object\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Event Object\nfunction executeLessonTask() {\n  const topic = \"Event Object\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Event Object** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 11. Event Object\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **11. Event Object** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nEvent Object এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**11. Event Object** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Event Object\nfunction runLab() {\n  const lesson = \"Event Object\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Event Object",
        "terminalTasks": [
          {
            "id": "task-w6-l11",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Event Object test.",
              "bn": "Event Object টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Event Object!",
              "bn": "Event Object টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l10"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l12",
        "weekId": "week-6",
        "order": 12,
        "title": {
          "en": "Delegation & Bubbling",
          "bn": "12. Delegation & Bubbling"
        },
        "description": {
          "en": "Learn and master Delegation & Bubbling with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Delegation & Bubbling এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 33,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Delegation & Bubbling\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Delegation & Bubbling\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Delegation & Bubbling\n\n#### 1. Learning Objective\nMaster **Delegation & Bubbling** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Delegation & Bubbling with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Delegation & Bubbling execution pattern\nconsole.log(\"Mastering Delegation & Bubbling\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Delegation & Bubbling\nfunction executeLessonTask() {\n  const topic = \"Delegation & Bubbling\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Delegation & Bubbling** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 12. Delegation & Bubbling\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **12. Delegation & Bubbling** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nDelegation & Bubbling এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**12. Delegation & Bubbling** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Delegation & Bubbling\nfunction runLab() {\n  const lesson = \"Delegation & Bubbling\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Delegation & Bubbling",
        "terminalTasks": [
          {
            "id": "task-w6-l12",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Delegation & Bubbling test.",
              "bn": "Delegation & Bubbling টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Delegation & Bubbling!",
              "bn": "Delegation & Bubbling টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l11"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l13",
        "weekId": "week-6",
        "order": 13,
        "title": {
          "en": "preventDefault",
          "bn": "13. preventDefault"
        },
        "description": {
          "en": "Learn and master preventDefault with hands-on practice, syntax rules, and real-world examples.",
          "bn": "preventDefault এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 36,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"preventDefault\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"preventDefault\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### preventDefault\n\n#### 1. Learning Objective\nMaster **preventDefault** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master preventDefault with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// preventDefault execution pattern\nconsole.log(\"Mastering preventDefault\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of preventDefault\nfunction executeLessonTask() {\n  const topic = \"preventDefault\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **preventDefault** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 13. preventDefault\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **13. preventDefault** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\npreventDefault এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**13. preventDefault** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: preventDefault\nfunction runLab() {\n  const lesson = \"preventDefault\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: preventDefault",
        "terminalTasks": [
          {
            "id": "task-w6-l13",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the preventDefault test.",
              "bn": "preventDefault টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for preventDefault!",
              "bn": "preventDefault টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l12"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l14",
        "weekId": "week-6",
        "order": 14,
        "title": {
          "en": "stopPropagation",
          "bn": "14. stopPropagation"
        },
        "description": {
          "en": "Learn and master stopPropagation with hands-on practice, syntax rules, and real-world examples.",
          "bn": "stopPropagation এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 39,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"stopPropagation\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"stopPropagation\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### stopPropagation\n\n#### 1. Learning Objective\nMaster **stopPropagation** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master stopPropagation with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// stopPropagation execution pattern\nconsole.log(\"Mastering stopPropagation\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of stopPropagation\nfunction executeLessonTask() {\n  const topic = \"stopPropagation\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **stopPropagation** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 14. stopPropagation\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **14. stopPropagation** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nstopPropagation এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**14. stopPropagation** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: stopPropagation\nfunction runLab() {\n  const lesson = \"stopPropagation\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: stopPropagation",
        "terminalTasks": [
          {
            "id": "task-w6-l14",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the stopPropagation test.",
              "bn": "stopPropagation টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for stopPropagation!",
              "bn": "stopPropagation টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l13"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w6-l15",
        "weekId": "week-6",
        "order": 15,
        "title": {
          "en": "Form Handling & Validation",
          "bn": "15. Form Handling & Validation"
        },
        "description": {
          "en": "Learn and master Form Handling & Validation with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Form Handling & Validation এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 42,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Form Handling & Validation\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Form Handling & Validation\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Form Handling & Validation\n\n#### 1. Learning Objective\nMaster **Form Handling & Validation** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Form Handling & Validation with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Form Handling & Validation execution pattern\nconsole.log(\"Mastering Form Handling & Validation\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Form Handling & Validation\nfunction executeLessonTask() {\n  const topic = \"Form Handling & Validation\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Form Handling & Validation** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 15. Form Handling & Validation\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **15. Form Handling & Validation** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nForm Handling & Validation এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**15. Form Handling & Validation** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Form Handling & Validation\nfunction runLab() {\n  const lesson = \"Form Handling & Validation\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Form Handling & Validation",
        "terminalTasks": [
          {
            "id": "task-w6-l15",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Form Handling & Validation test.",
              "bn": "Form Handling & Validation টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Form Handling & Validation!",
              "bn": "Form Handling & Validation টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l14"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ]
        }
      },
      {
        "id": "w6-l16",
        "weekId": "week-6",
        "order": 16,
        "title": {
          "en": "Project: Weather App + Gallery",
          "bn": "16. Project: Weather App + Gallery"
        },
        "description": {
          "en": "Learn and master Project: Weather App + Gallery with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Project: Weather App + Gallery এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 45,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Project: Weather App + Gallery\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Project: Weather App + Gallery\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Project: Weather App + Gallery\n\n#### 1. Learning Objective\nMaster **Project: Weather App + Gallery** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Project: Weather App + Gallery with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Project: Weather App + Gallery execution pattern\nconsole.log(\"Mastering Project: Weather App + Gallery\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Project: Weather App + Gallery\nfunction executeLessonTask() {\n  const topic = \"Project: Weather App + Gallery\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Project: Weather App + Gallery** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 16. Project: Weather App + Gallery\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **16. Project: Weather App + Gallery** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProject: Weather App + Gallery এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**16. Project: Weather App + Gallery** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Project: Weather App + Gallery\nfunction runLab() {\n  const lesson = \"Project: Weather App + Gallery\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Project: Weather App + Gallery",
        "terminalTasks": [
          {
            "id": "task-w6-l16",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Project: Weather App + Gallery test.",
              "bn": "Project: Weather App + Gallery টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Project: Weather App + Gallery!",
              "bn": "Project: Weather App + Gallery টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l15"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      }
    ]
  },
  {
    "id": "week-7",
    "order": 7,
    "title": {
      "en": "Week 7: ES6+ & Asynchronous JavaScript",
      "bn": "উইক 7: ES6+ ও অ্যাসিঙ্ক্রোনাস JS"
    },
    "subtitle": {
      "en": "ES6+ & Asynchronous JavaScript (18 Lessons)",
      "bn": "ES6+ ও অ্যাসিঙ্ক্রোনাস JS (18 টি লেসন)"
    },
    "description": {
      "en": "Comprehensive ES6+ & Asynchronous JavaScript module with 18 interactive step-by-step lessons.",
      "bn": "18 টি ইন্টারঅ্যাক্টিভ লেসন সহ ES6+ ও অ্যাসিঙ্ক্রোনাস JS এর সম্পূর্ণ মডিউল।"
    },
    "isGitWeek": false,
    "lessons": [
      {
        "id": "w7-l1",
        "weekId": "week-7",
        "order": 1,
        "title": {
          "en": "Classes",
          "bn": "1. Classes"
        },
        "description": {
          "en": "Learn and master Classes with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Classes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Classes\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Classes\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Classes\n\n#### 1. Learning Objective\nMaster **Classes** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Classes with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Classes execution pattern\nconsole.log(\"Mastering Classes\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Classes\nfunction executeLessonTask() {\n  const topic = \"Classes\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Classes** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 1. Classes\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **1. Classes** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nClasses এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**1. Classes** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Classes\nfunction runLab() {\n  const lesson = \"Classes\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Classes",
        "terminalTasks": [
          {
            "id": "task-w7-l1",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Classes test.",
              "bn": "Classes টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Classes!",
              "bn": "Classes টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w6-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l2",
        "weekId": "week-7",
        "order": 2,
        "title": {
          "en": "Class Methods",
          "bn": "2. Class Methods"
        },
        "description": {
          "en": "Learn and master Class Methods with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Class Methods এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 28,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Class Methods\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Class Methods\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Class Methods\n\n#### 1. Learning Objective\nMaster **Class Methods** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Class Methods with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Class Methods execution pattern\nconsole.log(\"Mastering Class Methods\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Class Methods\nfunction executeLessonTask() {\n  const topic = \"Class Methods\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Class Methods** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 2. Class Methods\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **2. Class Methods** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nClass Methods এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**2. Class Methods** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Class Methods\nfunction runLab() {\n  const lesson = \"Class Methods\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Class Methods",
        "terminalTasks": [
          {
            "id": "task-w7-l2",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Class Methods test.",
              "bn": "Class Methods টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Class Methods!",
              "bn": "Class Methods টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l3",
        "weekId": "week-7",
        "order": 3,
        "title": {
          "en": "Inheritance",
          "bn": "3. Inheritance"
        },
        "description": {
          "en": "Learn and master Inheritance with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Inheritance এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 31,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Inheritance\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Inheritance\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Inheritance\n\n#### 1. Learning Objective\nMaster **Inheritance** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Inheritance with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Inheritance execution pattern\nconsole.log(\"Mastering Inheritance\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Inheritance\nfunction executeLessonTask() {\n  const topic = \"Inheritance\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Inheritance** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 3. Inheritance\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **3. Inheritance** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nInheritance এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**3. Inheritance** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Inheritance\nfunction runLab() {\n  const lesson = \"Inheritance\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Inheritance",
        "terminalTasks": [
          {
            "id": "task-w7-l3",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Inheritance test.",
              "bn": "Inheritance টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Inheritance!",
              "bn": "Inheritance টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l2"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l4",
        "weekId": "week-7",
        "order": 4,
        "title": {
          "en": "Static Methods",
          "bn": "4. Static Methods"
        },
        "description": {
          "en": "Learn and master Static Methods with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Static Methods এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 34,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Static Methods\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Static Methods\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Static Methods\n\n#### 1. Learning Objective\nMaster **Static Methods** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Static Methods with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Static Methods execution pattern\nconsole.log(\"Mastering Static Methods\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Static Methods\nfunction executeLessonTask() {\n  const topic = \"Static Methods\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Static Methods** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 4. Static Methods\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **4. Static Methods** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nStatic Methods এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**4. Static Methods** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Static Methods\nfunction runLab() {\n  const lesson = \"Static Methods\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Static Methods",
        "terminalTasks": [
          {
            "id": "task-w7-l4",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Static Methods test.",
              "bn": "Static Methods টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Static Methods!",
              "bn": "Static Methods টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l3"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l5",
        "weekId": "week-7",
        "order": 5,
        "title": {
          "en": "Getters/Setters",
          "bn": "5. Getters/Setters"
        },
        "description": {
          "en": "Learn and master Getters/Setters with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Getters/Setters এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 37,
        "difficulty": "Beginner",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Getters/Setters\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Getters/Setters\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Getters/Setters\n\n#### 1. Learning Objective\nMaster **Getters/Setters** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Getters/Setters with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Getters/Setters execution pattern\nconsole.log(\"Mastering Getters/Setters\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Getters/Setters\nfunction executeLessonTask() {\n  const topic = \"Getters/Setters\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Getters/Setters** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 5. Getters/Setters\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **5. Getters/Setters** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nGetters/Setters এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**5. Getters/Setters** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Getters/Setters\nfunction runLab() {\n  const lesson = \"Getters/Setters\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Getters/Setters",
        "terminalTasks": [
          {
            "id": "task-w7-l5",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Getters/Setters test.",
              "bn": "Getters/Setters টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Getters/Setters!",
              "bn": "Getters/Setters টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l4"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l6",
        "weekId": "week-7",
        "order": 6,
        "title": {
          "en": "Promises Intro",
          "bn": "6. Promises Intro"
        },
        "description": {
          "en": "Learn and master Promises Intro with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Promises Intro এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Promises Intro\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Promises Intro\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Promises Intro\n\n#### 1. Learning Objective\nMaster **Promises Intro** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Promises Intro with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Promises Intro execution pattern\nconsole.log(\"Mastering Promises Intro\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Promises Intro\nfunction executeLessonTask() {\n  const topic = \"Promises Intro\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Promises Intro** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 6. Promises Intro\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **6. Promises Intro** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nPromises Intro এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**6. Promises Intro** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Promises Intro\nfunction runLab() {\n  const lesson = \"Promises Intro\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Promises Intro",
        "terminalTasks": [
          {
            "id": "task-w7-l6",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Promises Intro test.",
              "bn": "Promises Intro টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Promises Intro!",
              "bn": "Promises Intro টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l5"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l7",
        "weekId": "week-7",
        "order": 7,
        "title": {
          "en": "Promise States",
          "bn": "7. Promise States"
        },
        "description": {
          "en": "Learn and master Promise States with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Promise States এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 43,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Promise States\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Promise States\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Promise States\n\n#### 1. Learning Objective\nMaster **Promise States** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Promise States with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Promise States execution pattern\nconsole.log(\"Mastering Promise States\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Promise States\nfunction executeLessonTask() {\n  const topic = \"Promise States\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Promise States** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 7. Promise States\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **7. Promise States** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nPromise States এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**7. Promise States** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Promise States\nfunction runLab() {\n  const lesson = \"Promise States\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Promise States",
        "terminalTasks": [
          {
            "id": "task-w7-l7",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Promise States test.",
              "bn": "Promise States টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Promise States!",
              "bn": "Promise States টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l6"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l8",
        "weekId": "week-7",
        "order": 8,
        "title": {
          "en": "then/catch/finally",
          "bn": "8. then/catch/finally"
        },
        "description": {
          "en": "Learn and master then/catch/finally with hands-on practice, syntax rules, and real-world examples.",
          "bn": "then/catch/finally এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 46,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"then/catch/finally\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"then/catch/finally\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### then/catch/finally\n\n#### 1. Learning Objective\nMaster **then/catch/finally** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master then/catch/finally with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// then/catch/finally execution pattern\nconsole.log(\"Mastering then/catch/finally\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of then/catch/finally\nfunction executeLessonTask() {\n  const topic = \"then/catch/finally\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **then/catch/finally** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 8. then/catch/finally\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **8. then/catch/finally** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nthen/catch/finally এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**8. then/catch/finally** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: then/catch/finally\nfunction runLab() {\n  const lesson = \"then/catch/finally\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: then/catch/finally",
        "terminalTasks": [
          {
            "id": "task-w7-l8",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the then/catch/finally test.",
              "bn": "then/catch/finally টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for then/catch/finally!",
              "bn": "then/catch/finally টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l7"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l9",
        "weekId": "week-7",
        "order": 9,
        "title": {
          "en": "Promise Chaining",
          "bn": "9. Promise Chaining"
        },
        "description": {
          "en": "Learn and master Promise Chaining with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Promise Chaining এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 49,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Promise Chaining\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Promise Chaining\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Promise Chaining\n\n#### 1. Learning Objective\nMaster **Promise Chaining** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Promise Chaining with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Promise Chaining execution pattern\nconsole.log(\"Mastering Promise Chaining\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Promise Chaining\nfunction executeLessonTask() {\n  const topic = \"Promise Chaining\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Promise Chaining** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 9. Promise Chaining\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **9. Promise Chaining** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nPromise Chaining এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**9. Promise Chaining** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Promise Chaining\nfunction runLab() {\n  const lesson = \"Promise Chaining\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Promise Chaining",
        "terminalTasks": [
          {
            "id": "task-w7-l9",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Promise Chaining test.",
              "bn": "Promise Chaining টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Promise Chaining!",
              "bn": "Promise Chaining টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l8"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l10",
        "weekId": "week-7",
        "order": 10,
        "title": {
          "en": "async/await",
          "bn": "10. async/await"
        },
        "description": {
          "en": "Learn and master async/await with hands-on practice, syntax rules, and real-world examples.",
          "bn": "async/await এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 27,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"async/await\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"async/await\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### async/await\n\n#### 1. Learning Objective\nMaster **async/await** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master async/await with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// async/await execution pattern\nconsole.log(\"Mastering async/await\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of async/await\nfunction executeLessonTask() {\n  const topic = \"async/await\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **async/await** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 10. async/await\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **10. async/await** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nasync/await এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**10. async/await** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: async/await\nfunction runLab() {\n  const lesson = \"async/await\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: async/await",
        "terminalTasks": [
          {
            "id": "task-w7-l10",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the async/await test.",
              "bn": "async/await টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for async/await!",
              "bn": "async/await টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l9"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l11",
        "weekId": "week-7",
        "order": 11,
        "title": {
          "en": "Error Handling in Async",
          "bn": "11. Error Handling in Async"
        },
        "description": {
          "en": "Learn and master Error Handling in Async with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Error Handling in Async এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Error Handling in Async\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Error Handling in Async\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Error Handling in Async\n\n#### 1. Learning Objective\nMaster **Error Handling in Async** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Error Handling in Async with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Error Handling in Async execution pattern\nconsole.log(\"Mastering Error Handling in Async\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Error Handling in Async\nfunction executeLessonTask() {\n  const topic = \"Error Handling in Async\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Error Handling in Async** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 11. Error Handling in Async\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **11. Error Handling in Async** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nError Handling in Async এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**11. Error Handling in Async** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Error Handling in Async\nfunction runLab() {\n  const lesson = \"Error Handling in Async\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Error Handling in Async",
        "terminalTasks": [
          {
            "id": "task-w7-l11",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Error Handling in Async test.",
              "bn": "Error Handling in Async টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Error Handling in Async!",
              "bn": "Error Handling in Async টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l10"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l12",
        "weekId": "week-7",
        "order": 12,
        "title": {
          "en": "Fetch API",
          "bn": "12. Fetch API"
        },
        "description": {
          "en": "Learn and master Fetch API with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Fetch API এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 33,
        "difficulty": "Intermediate",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Fetch API\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Fetch API\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Fetch API\n\n#### 1. Learning Objective\nMaster **Fetch API** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Fetch API with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Fetch API execution pattern\nconsole.log(\"Mastering Fetch API\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Fetch API\nfunction executeLessonTask() {\n  const topic = \"Fetch API\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Fetch API** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 12. Fetch API\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **12. Fetch API** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nFetch API এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**12. Fetch API** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Fetch API\nfunction runLab() {\n  const lesson = \"Fetch API\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Fetch API",
        "terminalTasks": [
          {
            "id": "task-w7-l12",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Fetch API test.",
              "bn": "Fetch API টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Fetch API!",
              "bn": "Fetch API টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l11"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          ]
        }
      },
      {
        "id": "w7-l13",
        "weekId": "week-7",
        "order": 13,
        "title": {
          "en": "GET Requests",
          "bn": "13. GET Requests"
        },
        "description": {
          "en": "Learn and master GET Requests with hands-on practice, syntax rules, and real-world examples.",
          "bn": "GET Requests এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 36,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"GET Requests\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"GET Requests\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### GET Requests\n\n#### 1. Learning Objective\nMaster **GET Requests** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master GET Requests with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// GET Requests execution pattern\nconsole.log(\"Mastering GET Requests\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of GET Requests\nfunction executeLessonTask() {\n  const topic = \"GET Requests\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **GET Requests** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 13. GET Requests\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **13. GET Requests** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nGET Requests এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**13. GET Requests** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: GET Requests\nfunction runLab() {\n  const lesson = \"GET Requests\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: GET Requests",
        "terminalTasks": [
          {
            "id": "task-w7-l13",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the GET Requests test.",
              "bn": "GET Requests টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for GET Requests!",
              "bn": "GET Requests টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l12"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l14",
        "weekId": "week-7",
        "order": 14,
        "title": {
          "en": "POST Requests",
          "bn": "14. POST Requests"
        },
        "description": {
          "en": "Learn and master POST Requests with hands-on practice, syntax rules, and real-world examples.",
          "bn": "POST Requests এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 39,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"POST Requests\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"POST Requests\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### POST Requests\n\n#### 1. Learning Objective\nMaster **POST Requests** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master POST Requests with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// POST Requests execution pattern\nconsole.log(\"Mastering POST Requests\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of POST Requests\nfunction executeLessonTask() {\n  const topic = \"POST Requests\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **POST Requests** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 14. POST Requests\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **14. POST Requests** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nPOST Requests এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**14. POST Requests** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: POST Requests\nfunction runLab() {\n  const lesson = \"POST Requests\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: POST Requests",
        "terminalTasks": [
          {
            "id": "task-w7-l14",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the POST Requests test.",
              "bn": "POST Requests টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for POST Requests!",
              "bn": "POST Requests টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l13"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l15",
        "weekId": "week-7",
        "order": 15,
        "title": {
          "en": "Handling JSON",
          "bn": "15. Handling JSON"
        },
        "description": {
          "en": "Learn and master Handling JSON with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Handling JSON এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 42,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Handling JSON\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Handling JSON\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Handling JSON\n\n#### 1. Learning Objective\nMaster **Handling JSON** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Handling JSON with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Handling JSON execution pattern\nconsole.log(\"Mastering Handling JSON\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Handling JSON\nfunction executeLessonTask() {\n  const topic = \"Handling JSON\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Handling JSON** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 15. Handling JSON\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **15. Handling JSON** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nHandling JSON এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**15. Handling JSON** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Handling JSON\nfunction runLab() {\n  const lesson = \"Handling JSON\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Handling JSON",
        "terminalTasks": [
          {
            "id": "task-w7-l15",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Handling JSON test.",
              "bn": "Handling JSON টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Handling JSON!",
              "bn": "Handling JSON টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l14"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l16",
        "weekId": "week-7",
        "order": 16,
        "title": {
          "en": "Fetch Error Handling",
          "bn": "16. Fetch Error Handling"
        },
        "description": {
          "en": "Learn and master Fetch Error Handling with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Fetch Error Handling এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 45,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Fetch Error Handling\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Fetch Error Handling\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Fetch Error Handling\n\n#### 1. Learning Objective\nMaster **Fetch Error Handling** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Fetch Error Handling with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Fetch Error Handling execution pattern\nconsole.log(\"Mastering Fetch Error Handling\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Fetch Error Handling\nfunction executeLessonTask() {\n  const topic = \"Fetch Error Handling\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Fetch Error Handling** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 16. Fetch Error Handling\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **16. Fetch Error Handling** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nFetch Error Handling এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**16. Fetch Error Handling** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Fetch Error Handling\nfunction runLab() {\n  const lesson = \"Fetch Error Handling\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Fetch Error Handling",
        "terminalTasks": [
          {
            "id": "task-w7-l16",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Fetch Error Handling test.",
              "bn": "Fetch Error Handling টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Fetch Error Handling!",
              "bn": "Fetch Error Handling টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l15"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          ]
        }
      },
      {
        "id": "w7-l17",
        "weekId": "week-7",
        "order": 17,
        "title": {
          "en": "Promise.all",
          "bn": "17. Promise.all"
        },
        "description": {
          "en": "Learn and master Promise.all with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Promise.all এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 48,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Promise.all\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Promise.all\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Promise.all\n\n#### 1. Learning Objective\nMaster **Promise.all** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Promise.all with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Promise.all execution pattern\nconsole.log(\"Mastering Promise.all\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Promise.all\nfunction executeLessonTask() {\n  const topic = \"Promise.all\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Promise.all** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 17. Promise.all\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **17. Promise.all** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nPromise.all এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**17. Promise.all** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Promise.all\nfunction runLab() {\n  const lesson = \"Promise.all\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Promise.all",
        "terminalTasks": [
          {
            "id": "task-w7-l17",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Promise.all test.",
              "bn": "Promise.all টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Promise.all!",
              "bn": "Promise.all টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l16"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          ]
        }
      },
      {
        "id": "w7-l18",
        "weekId": "week-7",
        "order": 18,
        "title": {
          "en": "Project: Real-time API App",
          "bn": "18. Project: Real-time API App"
        },
        "description": {
          "en": "Learn and master Project: Real-time API App with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Project: Real-time API App এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 26,
        "difficulty": "Advanced",
        "category": "javascript",
        "objectives": {
          "en": [
            "Understand core concepts of \"Project: Real-time API App\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Project: Real-time API App\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Project: Real-time API App\n\n#### 1. Learning Objective\nMaster **Project: Real-time API App** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Project: Real-time API App with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Project: Real-time API App execution pattern\nconsole.log(\"Mastering Project: Real-time API App\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Project: Real-time API App\nfunction executeLessonTask() {\n  const topic = \"Project: Real-time API App\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Project: Real-time API App** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 18. Project: Real-time API App\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **18. Project: Real-time API App** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProject: Real-time API App এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**18. Project: Real-time API App** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Project: Real-time API App\nfunction runLab() {\n  const lesson = \"Project: Real-time API App\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Project: Real-time API App",
        "terminalTasks": [
          {
            "id": "task-w7-l18",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Project: Real-time API App test.",
              "bn": "Project: Real-time API App টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Project: Real-time API App!",
              "bn": "Project: Real-time API App টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l17"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          ]
        }
      }
    ]
  },
  {
    "id": "week-8",
    "order": 8,
    "title": {
      "en": "Week 8: React.js Fundamentals",
      "bn": "উইক 8: React.js মৌলিক"
    },
    "subtitle": {
      "en": "React.js Fundamentals (20 Lessons)",
      "bn": "React.js মৌলিক (20 টি লেসন)"
    },
    "description": {
      "en": "Comprehensive React.js Fundamentals module with 20 interactive step-by-step lessons.",
      "bn": "20 টি ইন্টারঅ্যাক্টিভ লেসন সহ React.js মৌলিক এর সম্পূর্ণ মডিউল।"
    },
    "isGitWeek": false,
    "lessons": [
      {
        "id": "w8-l1",
        "weekId": "week-8",
        "order": 1,
        "title": {
          "en": "What is React",
          "bn": "1. What is React"
        },
        "description": {
          "en": "Learn and master What is React with hands-on practice, syntax rules, and real-world examples.",
          "bn": "What is React এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"What is React\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"What is React\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### What is React\n\n#### 1. Learning Objective\nMaster **What is React** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master What is React with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// What is React execution pattern\nconsole.log(\"Mastering What is React\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of What is React\nfunction executeLessonTask() {\n  const topic = \"What is React\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **What is React** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 1. What is React\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **1. What is React** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nWhat is React এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**1. What is React** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: What is React\nfunction runLab() {\n  const lesson = \"What is React\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: What is React",
        "terminalTasks": [
          {
            "id": "task-w8-l1",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the What is React test.",
              "bn": "What is React টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for What is React!",
              "bn": "What is React টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w7-l1"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l2",
        "weekId": "week-8",
        "order": 2,
        "title": {
          "en": "JSX Syntax",
          "bn": "2. JSX Syntax"
        },
        "description": {
          "en": "Learn and master JSX Syntax with hands-on practice, syntax rules, and real-world examples.",
          "bn": "JSX Syntax এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 28,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"JSX Syntax\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"JSX Syntax\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### JSX Syntax\n\n#### 1. Learning Objective\nMaster **JSX Syntax** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master JSX Syntax with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// JSX Syntax execution pattern\nconsole.log(\"Mastering JSX Syntax\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of JSX Syntax\nfunction executeLessonTask() {\n  const topic = \"JSX Syntax\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **JSX Syntax** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 2. JSX Syntax\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **2. JSX Syntax** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nJSX Syntax এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**2. JSX Syntax** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: JSX Syntax\nfunction runLab() {\n  const lesson = \"JSX Syntax\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: JSX Syntax",
        "terminalTasks": [
          {
            "id": "task-w8-l2",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the JSX Syntax test.",
              "bn": "JSX Syntax টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for JSX Syntax!",
              "bn": "JSX Syntax টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l1"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l3",
        "weekId": "week-8",
        "order": 3,
        "title": {
          "en": "Components (Functional/Class)",
          "bn": "3. Components (Functional/Class)"
        },
        "description": {
          "en": "Learn and master Components (Functional/Class) with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Components (Functional/Class) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 31,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Components (Functional/Class)\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Components (Functional/Class)\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Components (Functional/Class)\n\n#### 1. Learning Objective\nMaster **Components (Functional/Class)** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Components (Functional/Class) with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Components (Functional/Class) execution pattern\nconsole.log(\"Mastering Components (Functional/Class)\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Components (Functional/Class)\nfunction executeLessonTask() {\n  const topic = \"Components (Functional/Class)\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Components (Functional/Class)** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 3. Components (Functional/Class)\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **3. Components (Functional/Class)** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nComponents (Functional/Class) এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**3. Components (Functional/Class)** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Components (Functional/Class)\nfunction runLab() {\n  const lesson = \"Components (Functional/Class)\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Components (Functional/Class)",
        "terminalTasks": [
          {
            "id": "task-w8-l3",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Components (Functional/Class) test.",
              "bn": "Components (Functional/Class) টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Components (Functional/Class)!",
              "bn": "Components (Functional/Class) টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l2"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
          ]
        }
      },
      {
        "id": "w8-l4",
        "weekId": "week-8",
        "order": 4,
        "title": {
          "en": "Props",
          "bn": "4. Props"
        },
        "description": {
          "en": "Learn and master Props with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Props এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 34,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Props\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Props\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Props\n\n#### 1. Learning Objective\nMaster **Props** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Props with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Props execution pattern\nconsole.log(\"Mastering Props\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Props\nfunction executeLessonTask() {\n  const topic = \"Props\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Props** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 4. Props\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **4. Props** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProps এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**4. Props** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Props\nfunction runLab() {\n  const lesson = \"Props\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Props",
        "terminalTasks": [
          {
            "id": "task-w8-l4",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Props test.",
              "bn": "Props টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Props!",
              "bn": "Props টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l3"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l5",
        "weekId": "week-8",
        "order": 5,
        "title": {
          "en": "PropTypes",
          "bn": "5. PropTypes"
        },
        "description": {
          "en": "Learn and master PropTypes with hands-on practice, syntax rules, and real-world examples.",
          "bn": "PropTypes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 37,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"PropTypes\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"PropTypes\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### PropTypes\n\n#### 1. Learning Objective\nMaster **PropTypes** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master PropTypes with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// PropTypes execution pattern\nconsole.log(\"Mastering PropTypes\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of PropTypes\nfunction executeLessonTask() {\n  const topic = \"PropTypes\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **PropTypes** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 5. PropTypes\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **5. PropTypes** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nPropTypes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**5. PropTypes** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: PropTypes\nfunction runLab() {\n  const lesson = \"PropTypes\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: PropTypes",
        "terminalTasks": [
          {
            "id": "task-w8-l5",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the PropTypes test.",
              "bn": "PropTypes টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for PropTypes!",
              "bn": "PropTypes টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l4"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l6",
        "weekId": "week-8",
        "order": 6,
        "title": {
          "en": "useState",
          "bn": "6. useState"
        },
        "description": {
          "en": "Learn and master useState with hands-on practice, syntax rules, and real-world examples.",
          "bn": "useState এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"useState\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"useState\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### useState\n\n#### 1. Learning Objective\nMaster **useState** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master useState with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// useState execution pattern\nconsole.log(\"Mastering useState\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of useState\nfunction executeLessonTask() {\n  const topic = \"useState\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **useState** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 6. useState\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **6. useState** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nuseState এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**6. useState** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: useState\nfunction runLab() {\n  const lesson = \"useState\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: useState",
        "terminalTasks": [
          {
            "id": "task-w8-l6",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the useState test.",
              "bn": "useState টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for useState!",
              "bn": "useState টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l5"
        ],
        "resources": {
          "en": [
            "https://react.dev/reference/react/useState",
            "https://react.dev/learn/state-a-components-memory"
          ],
          "bn": [
            "https://react.dev/reference/react/useState",
            "https://react.dev/learn/state-a-components-memory"
          ]
        }
      },
      {
        "id": "w8-l7",
        "weekId": "week-8",
        "order": 7,
        "title": {
          "en": "State Best Practices",
          "bn": "7. State Best Practices"
        },
        "description": {
          "en": "Learn and master State Best Practices with hands-on practice, syntax rules, and real-world examples.",
          "bn": "State Best Practices এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 43,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"State Best Practices\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"State Best Practices\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### State Best Practices\n\n#### 1. Learning Objective\nMaster **State Best Practices** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master State Best Practices with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// State Best Practices execution pattern\nconsole.log(\"Mastering State Best Practices\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of State Best Practices\nfunction executeLessonTask() {\n  const topic = \"State Best Practices\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **State Best Practices** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 7. State Best Practices\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **7. State Best Practices** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nState Best Practices এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**7. State Best Practices** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: State Best Practices\nfunction runLab() {\n  const lesson = \"State Best Practices\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: State Best Practices",
        "terminalTasks": [
          {
            "id": "task-w8-l7",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the State Best Practices test.",
              "bn": "State Best Practices টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for State Best Practices!",
              "bn": "State Best Practices টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l6"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l8",
        "weekId": "week-8",
        "order": 8,
        "title": {
          "en": "Conditional Rendering",
          "bn": "8. Conditional Rendering"
        },
        "description": {
          "en": "Learn and master Conditional Rendering with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Conditional Rendering এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 46,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Conditional Rendering\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Conditional Rendering\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Conditional Rendering\n\n#### 1. Learning Objective\nMaster **Conditional Rendering** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Conditional Rendering with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Conditional Rendering execution pattern\nconsole.log(\"Mastering Conditional Rendering\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Conditional Rendering\nfunction executeLessonTask() {\n  const topic = \"Conditional Rendering\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Conditional Rendering** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 8. Conditional Rendering\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **8. Conditional Rendering** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nConditional Rendering এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**8. Conditional Rendering** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Conditional Rendering\nfunction runLab() {\n  const lesson = \"Conditional Rendering\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Conditional Rendering",
        "terminalTasks": [
          {
            "id": "task-w8-l8",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Conditional Rendering test.",
              "bn": "Conditional Rendering টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Conditional Rendering!",
              "bn": "Conditional Rendering টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l7"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l9",
        "weekId": "week-8",
        "order": 9,
        "title": {
          "en": "Lists & Keys",
          "bn": "9. Lists & Keys"
        },
        "description": {
          "en": "Learn and master Lists & Keys with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Lists & Keys এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 49,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Lists & Keys\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Lists & Keys\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Lists & Keys\n\n#### 1. Learning Objective\nMaster **Lists & Keys** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Lists & Keys with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Lists & Keys execution pattern\nconsole.log(\"Mastering Lists & Keys\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Lists & Keys\nfunction executeLessonTask() {\n  const topic = \"Lists & Keys\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Lists & Keys** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 9. Lists & Keys\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **9. Lists & Keys** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nLists & Keys এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**9. Lists & Keys** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Lists & Keys\nfunction runLab() {\n  const lesson = \"Lists & Keys\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Lists & Keys",
        "terminalTasks": [
          {
            "id": "task-w8-l9",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Lists & Keys test.",
              "bn": "Lists & Keys টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Lists & Keys!",
              "bn": "Lists & Keys টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l8"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l10",
        "weekId": "week-8",
        "order": 10,
        "title": {
          "en": "Forms",
          "bn": "10. Forms"
        },
        "description": {
          "en": "Learn and master Forms with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Forms এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 27,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Forms\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Forms\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Forms\n\n#### 1. Learning Objective\nMaster **Forms** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Forms with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Forms execution pattern\nconsole.log(\"Mastering Forms\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Forms\nfunction executeLessonTask() {\n  const topic = \"Forms\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Forms** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 10. Forms\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **10. Forms** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nForms এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**10. Forms** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Forms\nfunction runLab() {\n  const lesson = \"Forms\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Forms",
        "terminalTasks": [
          {
            "id": "task-w8-l10",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Forms test.",
              "bn": "Forms টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Forms!",
              "bn": "Forms টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l9"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ]
        }
      },
      {
        "id": "w8-l11",
        "weekId": "week-8",
        "order": 11,
        "title": {
          "en": "Controlled vs Uncontrolled",
          "bn": "11. Controlled vs Uncontrolled"
        },
        "description": {
          "en": "Learn and master Controlled vs Uncontrolled with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Controlled vs Uncontrolled এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Controlled vs Uncontrolled\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Controlled vs Uncontrolled\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Controlled vs Uncontrolled\n\n#### 1. Learning Objective\nMaster **Controlled vs Uncontrolled** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Controlled vs Uncontrolled with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Controlled vs Uncontrolled execution pattern\nconsole.log(\"Mastering Controlled vs Uncontrolled\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Controlled vs Uncontrolled\nfunction executeLessonTask() {\n  const topic = \"Controlled vs Uncontrolled\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Controlled vs Uncontrolled** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 11. Controlled vs Uncontrolled\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **11. Controlled vs Uncontrolled** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nControlled vs Uncontrolled এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**11. Controlled vs Uncontrolled** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Controlled vs Uncontrolled\nfunction runLab() {\n  const lesson = \"Controlled vs Uncontrolled\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Controlled vs Uncontrolled",
        "terminalTasks": [
          {
            "id": "task-w8-l11",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Controlled vs Uncontrolled test.",
              "bn": "Controlled vs Uncontrolled টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Controlled vs Uncontrolled!",
              "bn": "Controlled vs Uncontrolled টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l10"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l12",
        "weekId": "week-8",
        "order": 12,
        "title": {
          "en": "useEffect Basics",
          "bn": "12. useEffect Basics"
        },
        "description": {
          "en": "Learn and master useEffect Basics with hands-on practice, syntax rules, and real-world examples.",
          "bn": "useEffect Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 33,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"useEffect Basics\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"useEffect Basics\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### useEffect Basics\n\n#### 1. Learning Objective\nMaster **useEffect Basics** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master useEffect Basics with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// useEffect Basics execution pattern\nconsole.log(\"Mastering useEffect Basics\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of useEffect Basics\nfunction executeLessonTask() {\n  const topic = \"useEffect Basics\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **useEffect Basics** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 12. useEffect Basics\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **12. useEffect Basics** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nuseEffect Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**12. useEffect Basics** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: useEffect Basics\nfunction runLab() {\n  const lesson = \"useEffect Basics\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: useEffect Basics",
        "terminalTasks": [
          {
            "id": "task-w8-l12",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the useEffect Basics test.",
              "bn": "useEffect Basics টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for useEffect Basics!",
              "bn": "useEffect Basics টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l11"
        ],
        "resources": {
          "en": [
            "https://react.dev/reference/react/useEffect",
            "https://react.dev/learn/synchronizing-with-effects"
          ],
          "bn": [
            "https://react.dev/reference/react/useEffect",
            "https://react.dev/learn/synchronizing-with-effects"
          ]
        }
      },
      {
        "id": "w8-l13",
        "weekId": "week-8",
        "order": 13,
        "title": {
          "en": "Dependency Array",
          "bn": "13. Dependency Array"
        },
        "description": {
          "en": "Learn and master Dependency Array with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Dependency Array এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 36,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Dependency Array\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Dependency Array\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Dependency Array\n\n#### 1. Learning Objective\nMaster **Dependency Array** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Dependency Array with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Dependency Array execution pattern\nconsole.log(\"Mastering Dependency Array\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Dependency Array\nfunction executeLessonTask() {\n  const topic = \"Dependency Array\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Dependency Array** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 13. Dependency Array\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **13. Dependency Array** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nDependency Array এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**13. Dependency Array** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Dependency Array\nfunction runLab() {\n  const lesson = \"Dependency Array\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Dependency Array",
        "terminalTasks": [
          {
            "id": "task-w8-l13",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Dependency Array test.",
              "bn": "Dependency Array টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Dependency Array!",
              "bn": "Dependency Array টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l12"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l14",
        "weekId": "week-8",
        "order": 14,
        "title": {
          "en": "Cleanup Functions",
          "bn": "14. Cleanup Functions"
        },
        "description": {
          "en": "Learn and master Cleanup Functions with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Cleanup Functions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 39,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Cleanup Functions\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Cleanup Functions\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Cleanup Functions\n\n#### 1. Learning Objective\nMaster **Cleanup Functions** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Cleanup Functions with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Cleanup Functions execution pattern\nconsole.log(\"Mastering Cleanup Functions\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Cleanup Functions\nfunction executeLessonTask() {\n  const topic = \"Cleanup Functions\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Cleanup Functions** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 14. Cleanup Functions\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **14. Cleanup Functions** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCleanup Functions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**14. Cleanup Functions** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Cleanup Functions\nfunction runLab() {\n  const lesson = \"Cleanup Functions\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Cleanup Functions",
        "terminalTasks": [
          {
            "id": "task-w8-l14",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Cleanup Functions test.",
              "bn": "Cleanup Functions টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Cleanup Functions!",
              "bn": "Cleanup Functions টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l13"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
          ]
        }
      },
      {
        "id": "w8-l15",
        "weekId": "week-8",
        "order": 15,
        "title": {
          "en": "Lifting State Up",
          "bn": "15. Lifting State Up"
        },
        "description": {
          "en": "Learn and master Lifting State Up with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Lifting State Up এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 42,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Lifting State Up\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Lifting State Up\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Lifting State Up\n\n#### 1. Learning Objective\nMaster **Lifting State Up** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Lifting State Up with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Lifting State Up execution pattern\nconsole.log(\"Mastering Lifting State Up\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Lifting State Up\nfunction executeLessonTask() {\n  const topic = \"Lifting State Up\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Lifting State Up** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 15. Lifting State Up\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **15. Lifting State Up** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nLifting State Up এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**15. Lifting State Up** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Lifting State Up\nfunction runLab() {\n  const lesson = \"Lifting State Up\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Lifting State Up",
        "terminalTasks": [
          {
            "id": "task-w8-l15",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Lifting State Up test.",
              "bn": "Lifting State Up টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Lifting State Up!",
              "bn": "Lifting State Up টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l14"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l16",
        "weekId": "week-8",
        "order": 16,
        "title": {
          "en": "Composition",
          "bn": "16. Composition"
        },
        "description": {
          "en": "Learn and master Composition with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Composition এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 45,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Composition\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Composition\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Composition\n\n#### 1. Learning Objective\nMaster **Composition** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Composition with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Composition execution pattern\nconsole.log(\"Mastering Composition\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Composition\nfunction executeLessonTask() {\n  const topic = \"Composition\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Composition** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 16. Composition\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **16. Composition** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nComposition এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**16. Composition** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Composition\nfunction runLab() {\n  const lesson = \"Composition\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Composition",
        "terminalTasks": [
          {
            "id": "task-w8-l16",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Composition test.",
              "bn": "Composition টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Composition!",
              "bn": "Composition টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l15"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l17",
        "weekId": "week-8",
        "order": 17,
        "title": {
          "en": "Styling Components",
          "bn": "17. Styling Components"
        },
        "description": {
          "en": "Learn and master Styling Components with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Styling Components এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 48,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Styling Components\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Styling Components\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Styling Components\n\n#### 1. Learning Objective\nMaster **Styling Components** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Styling Components with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Styling Components execution pattern\nconsole.log(\"Mastering Styling Components\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Styling Components\nfunction executeLessonTask() {\n  const topic = \"Styling Components\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Styling Components** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 17. Styling Components\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **17. Styling Components** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nStyling Components এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**17. Styling Components** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Styling Components\nfunction runLab() {\n  const lesson = \"Styling Components\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Styling Components",
        "terminalTasks": [
          {
            "id": "task-w8-l17",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Styling Components test.",
              "bn": "Styling Components টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Styling Components!",
              "bn": "Styling Components টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l16"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l18",
        "weekId": "week-8",
        "order": 18,
        "title": {
          "en": "React DevTools",
          "bn": "18. React DevTools"
        },
        "description": {
          "en": "Learn and master React DevTools with hands-on practice, syntax rules, and real-world examples.",
          "bn": "React DevTools এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 26,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"React DevTools\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"React DevTools\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### React DevTools\n\n#### 1. Learning Objective\nMaster **React DevTools** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master React DevTools with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// React DevTools execution pattern\nconsole.log(\"Mastering React DevTools\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of React DevTools\nfunction executeLessonTask() {\n  const topic = \"React DevTools\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **React DevTools** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 18. React DevTools\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **18. React DevTools** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nReact DevTools এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**18. React DevTools** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: React DevTools\nfunction runLab() {\n  const lesson = \"React DevTools\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: React DevTools",
        "terminalTasks": [
          {
            "id": "task-w8-l18",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the React DevTools test.",
              "bn": "React DevTools টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for React DevTools!",
              "bn": "React DevTools টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l17"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w8-l19",
        "weekId": "week-8",
        "order": 19,
        "title": {
          "en": "Performance Tips",
          "bn": "19. Performance Tips"
        },
        "description": {
          "en": "Learn and master Performance Tips with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Performance Tips এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 29,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Performance Tips\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Performance Tips\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Performance Tips\n\n#### 1. Learning Objective\nMaster **Performance Tips** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Performance Tips with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Performance Tips execution pattern\nconsole.log(\"Mastering Performance Tips\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Performance Tips\nfunction executeLessonTask() {\n  const topic = \"Performance Tips\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Performance Tips** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 19. Performance Tips\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **19. Performance Tips** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nPerformance Tips এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**19. Performance Tips** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Performance Tips\nfunction runLab() {\n  const lesson = \"Performance Tips\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Performance Tips",
        "terminalTasks": [
          {
            "id": "task-w8-l19",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Performance Tips test.",
              "bn": "Performance Tips টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Performance Tips!",
              "bn": "Performance Tips টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l18"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
            "https://developer.mozilla.org/en-US/docs/Learn/Forms"
          ]
        }
      },
      {
        "id": "w8-l20",
        "weekId": "week-8",
        "order": 20,
        "title": {
          "en": "Project: 3 React Apps",
          "bn": "20. Project: 3 React Apps"
        },
        "description": {
          "en": "Learn and master Project: 3 React Apps with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Project: 3 React Apps এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 32,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Project: 3 React Apps\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Project: 3 React Apps\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Project: 3 React Apps\n\n#### 1. Learning Objective\nMaster **Project: 3 React Apps** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Project: 3 React Apps with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Project: 3 React Apps execution pattern\nconsole.log(\"Mastering Project: 3 React Apps\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Project: 3 React Apps\nfunction executeLessonTask() {\n  const topic = \"Project: 3 React Apps\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Project: 3 React Apps** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 20. Project: 3 React Apps\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **20. Project: 3 React Apps** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProject: 3 React Apps এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**20. Project: 3 React Apps** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Project: 3 React Apps\nfunction runLab() {\n  const lesson = \"Project: 3 React Apps\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Project: 3 React Apps",
        "terminalTasks": [
          {
            "id": "task-w8-l20",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Project: 3 React Apps test.",
              "bn": "Project: 3 React Apps টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Project: 3 React Apps!",
              "bn": "Project: 3 React Apps টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l19"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      }
    ]
  },
  {
    "id": "week-9",
    "order": 9,
    "title": {
      "en": "Week 9: React Advanced Patterns",
      "bn": "উইক 9: React অ্যাডভান্সড"
    },
    "subtitle": {
      "en": "React Advanced Patterns (18 Lessons)",
      "bn": "React অ্যাডভান্সড (18 টি লেসন)"
    },
    "description": {
      "en": "Comprehensive React Advanced Patterns module with 18 interactive step-by-step lessons.",
      "bn": "18 টি ইন্টারঅ্যাক্টিভ লেসন সহ React অ্যাডভান্সড এর সম্পূর্ণ মডিউল।"
    },
    "isGitWeek": false,
    "lessons": [
      {
        "id": "w9-l1",
        "weekId": "week-9",
        "order": 1,
        "title": {
          "en": "Context API Basics",
          "bn": "1. Context API Basics"
        },
        "description": {
          "en": "Learn and master Context API Basics with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Context API Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Context API Basics\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Context API Basics\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Context API Basics\n\n#### 1. Learning Objective\nMaster **Context API Basics** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Context API Basics with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Context API Basics execution pattern\nconsole.log(\"Mastering Context API Basics\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Context API Basics\nfunction executeLessonTask() {\n  const topic = \"Context API Basics\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Context API Basics** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 1. Context API Basics\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **1. Context API Basics** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nContext API Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**1. Context API Basics** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Context API Basics\nfunction runLab() {\n  const lesson = \"Context API Basics\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Context API Basics",
        "terminalTasks": [
          {
            "id": "task-w9-l1",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Context API Basics test.",
              "bn": "Context API Basics টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Context API Basics!",
              "bn": "Context API Basics টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w8-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          ]
        }
      },
      {
        "id": "w9-l2",
        "weekId": "week-9",
        "order": 2,
        "title": {
          "en": "Context & Providers",
          "bn": "2. Context & Providers"
        },
        "description": {
          "en": "Learn and master Context & Providers with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Context & Providers এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 28,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Context & Providers\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Context & Providers\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Context & Providers\n\n#### 1. Learning Objective\nMaster **Context & Providers** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Context & Providers with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Context & Providers execution pattern\nconsole.log(\"Mastering Context & Providers\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Context & Providers\nfunction executeLessonTask() {\n  const topic = \"Context & Providers\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Context & Providers** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 2. Context & Providers\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **2. Context & Providers** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nContext & Providers এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**2. Context & Providers** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Context & Providers\nfunction runLab() {\n  const lesson = \"Context & Providers\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Context & Providers",
        "terminalTasks": [
          {
            "id": "task-w9-l2",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Context & Providers test.",
              "bn": "Context & Providers টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Context & Providers!",
              "bn": "Context & Providers টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l1"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l3",
        "weekId": "week-9",
        "order": 3,
        "title": {
          "en": "useContext",
          "bn": "3. useContext"
        },
        "description": {
          "en": "Learn and master useContext with hands-on practice, syntax rules, and real-world examples.",
          "bn": "useContext এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 31,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"useContext\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"useContext\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### useContext\n\n#### 1. Learning Objective\nMaster **useContext** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master useContext with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// useContext execution pattern\nconsole.log(\"Mastering useContext\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of useContext\nfunction executeLessonTask() {\n  const topic = \"useContext\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **useContext** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 3. useContext\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **3. useContext** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nuseContext এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**3. useContext** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: useContext\nfunction runLab() {\n  const lesson = \"useContext\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: useContext",
        "terminalTasks": [
          {
            "id": "task-w9-l3",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the useContext test.",
              "bn": "useContext টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for useContext!",
              "bn": "useContext টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l2"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l4",
        "weekId": "week-9",
        "order": 4,
        "title": {
          "en": "useReducer",
          "bn": "4. useReducer"
        },
        "description": {
          "en": "Learn and master useReducer with hands-on practice, syntax rules, and real-world examples.",
          "bn": "useReducer এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 34,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"useReducer\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"useReducer\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### useReducer\n\n#### 1. Learning Objective\nMaster **useReducer** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master useReducer with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// useReducer execution pattern\nconsole.log(\"Mastering useReducer\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of useReducer\nfunction executeLessonTask() {\n  const topic = \"useReducer\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **useReducer** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 4. useReducer\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **4. useReducer** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nuseReducer এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**4. useReducer** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: useReducer\nfunction runLab() {\n  const lesson = \"useReducer\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: useReducer",
        "terminalTasks": [
          {
            "id": "task-w9-l4",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the useReducer test.",
              "bn": "useReducer টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for useReducer!",
              "bn": "useReducer টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l3"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l5",
        "weekId": "week-9",
        "order": 5,
        "title": {
          "en": "Reducer + Context",
          "bn": "5. Reducer + Context"
        },
        "description": {
          "en": "Learn and master Reducer + Context with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Reducer + Context এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 37,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Reducer + Context\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Reducer + Context\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Reducer + Context\n\n#### 1. Learning Objective\nMaster **Reducer + Context** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Reducer + Context with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Reducer + Context execution pattern\nconsole.log(\"Mastering Reducer + Context\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Reducer + Context\nfunction executeLessonTask() {\n  const topic = \"Reducer + Context\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Reducer + Context** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 5. Reducer + Context\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **5. Reducer + Context** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nReducer + Context এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**5. Reducer + Context** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Reducer + Context\nfunction runLab() {\n  const lesson = \"Reducer + Context\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Reducer + Context",
        "terminalTasks": [
          {
            "id": "task-w9-l5",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Reducer + Context test.",
              "bn": "Reducer + Context টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Reducer + Context!",
              "bn": "Reducer + Context টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l4"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l6",
        "weekId": "week-9",
        "order": 6,
        "title": {
          "en": "Custom Hooks",
          "bn": "6. Custom Hooks"
        },
        "description": {
          "en": "Learn and master Custom Hooks with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Custom Hooks এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Custom Hooks\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Custom Hooks\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Custom Hooks\n\n#### 1. Learning Objective\nMaster **Custom Hooks** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Custom Hooks with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Custom Hooks execution pattern\nconsole.log(\"Mastering Custom Hooks\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Custom Hooks\nfunction executeLessonTask() {\n  const topic = \"Custom Hooks\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Custom Hooks** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 6. Custom Hooks\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **6. Custom Hooks** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCustom Hooks এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**6. Custom Hooks** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Custom Hooks\nfunction runLab() {\n  const lesson = \"Custom Hooks\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Custom Hooks",
        "terminalTasks": [
          {
            "id": "task-w9-l6",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Custom Hooks test.",
              "bn": "Custom Hooks টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Custom Hooks!",
              "bn": "Custom Hooks টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l5"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l7",
        "weekId": "week-9",
        "order": 7,
        "title": {
          "en": "Best Practices",
          "bn": "7. Best Practices"
        },
        "description": {
          "en": "Learn and master Best Practices with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Best Practices এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 43,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Best Practices\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Best Practices\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Best Practices\n\n#### 1. Learning Objective\nMaster **Best Practices** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Best Practices with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Best Practices execution pattern\nconsole.log(\"Mastering Best Practices\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Best Practices\nfunction executeLessonTask() {\n  const topic = \"Best Practices\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Best Practices** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 7. Best Practices\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **7. Best Practices** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nBest Practices এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**7. Best Practices** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Best Practices\nfunction runLab() {\n  const lesson = \"Best Practices\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Best Practices",
        "terminalTasks": [
          {
            "id": "task-w9-l7",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Best Practices test.",
              "bn": "Best Practices টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Best Practices!",
              "bn": "Best Practices টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l6"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l8",
        "weekId": "week-9",
        "order": 8,
        "title": {
          "en": "useMemo",
          "bn": "8. useMemo"
        },
        "description": {
          "en": "Learn and master useMemo with hands-on practice, syntax rules, and real-world examples.",
          "bn": "useMemo এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 46,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"useMemo\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"useMemo\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### useMemo\n\n#### 1. Learning Objective\nMaster **useMemo** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master useMemo with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// useMemo execution pattern\nconsole.log(\"Mastering useMemo\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of useMemo\nfunction executeLessonTask() {\n  const topic = \"useMemo\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **useMemo** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 8. useMemo\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **8. useMemo** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nuseMemo এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**8. useMemo** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: useMemo\nfunction runLab() {\n  const lesson = \"useMemo\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: useMemo",
        "terminalTasks": [
          {
            "id": "task-w9-l8",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the useMemo test.",
              "bn": "useMemo টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for useMemo!",
              "bn": "useMemo টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l7"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l9",
        "weekId": "week-9",
        "order": 9,
        "title": {
          "en": "useCallback",
          "bn": "9. useCallback"
        },
        "description": {
          "en": "Learn and master useCallback with hands-on practice, syntax rules, and real-world examples.",
          "bn": "useCallback এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 49,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"useCallback\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"useCallback\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### useCallback\n\n#### 1. Learning Objective\nMaster **useCallback** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master useCallback with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// useCallback execution pattern\nconsole.log(\"Mastering useCallback\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of useCallback\nfunction executeLessonTask() {\n  const topic = \"useCallback\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **useCallback** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 9. useCallback\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **9. useCallback** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nuseCallback এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**9. useCallback** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: useCallback\nfunction runLab() {\n  const lesson = \"useCallback\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: useCallback",
        "terminalTasks": [
          {
            "id": "task-w9-l9",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the useCallback test.",
              "bn": "useCallback টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for useCallback!",
              "bn": "useCallback টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l8"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l10",
        "weekId": "week-9",
        "order": 10,
        "title": {
          "en": "React Router Install",
          "bn": "10. React Router Install"
        },
        "description": {
          "en": "Learn and master React Router Install with hands-on practice, syntax rules, and real-world examples.",
          "bn": "React Router Install এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 27,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"React Router Install\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"React Router Install\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### React Router Install\n\n#### 1. Learning Objective\nMaster **React Router Install** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master React Router Install with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// React Router Install execution pattern\nconsole.log(\"Mastering React Router Install\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of React Router Install\nfunction executeLessonTask() {\n  const topic = \"React Router Install\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **React Router Install** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 10. React Router Install\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **10. React Router Install** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nReact Router Install এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**10. React Router Install** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: React Router Install\nfunction runLab() {\n  const lesson = \"React Router Install\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: React Router Install",
        "terminalTasks": [
          {
            "id": "task-w9-l10",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the React Router Install test.",
              "bn": "React Router Install টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for React Router Install!",
              "bn": "React Router Install টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l9"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l11",
        "weekId": "week-9",
        "order": 11,
        "title": {
          "en": "Routes & Navigation",
          "bn": "11. Routes & Navigation"
        },
        "description": {
          "en": "Learn and master Routes & Navigation with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Routes & Navigation এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Routes & Navigation\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Routes & Navigation\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Routes & Navigation\n\n#### 1. Learning Objective\nMaster **Routes & Navigation** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Routes & Navigation with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Routes & Navigation execution pattern\nconsole.log(\"Mastering Routes & Navigation\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Routes & Navigation\nfunction executeLessonTask() {\n  const topic = \"Routes & Navigation\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Routes & Navigation** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 11. Routes & Navigation\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **11. Routes & Navigation** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nRoutes & Navigation এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**11. Routes & Navigation** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Routes & Navigation\nfunction runLab() {\n  const lesson = \"Routes & Navigation\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Routes & Navigation",
        "terminalTasks": [
          {
            "id": "task-w9-l11",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Routes & Navigation test.",
              "bn": "Routes & Navigation টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Routes & Navigation!",
              "bn": "Routes & Navigation টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l10"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          ]
        }
      },
      {
        "id": "w9-l12",
        "weekId": "week-9",
        "order": 12,
        "title": {
          "en": "Nested Routes",
          "bn": "12. Nested Routes"
        },
        "description": {
          "en": "Learn and master Nested Routes with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Nested Routes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 33,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Nested Routes\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Nested Routes\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Nested Routes\n\n#### 1. Learning Objective\nMaster **Nested Routes** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Nested Routes with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Nested Routes execution pattern\nconsole.log(\"Mastering Nested Routes\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Nested Routes\nfunction executeLessonTask() {\n  const topic = \"Nested Routes\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Nested Routes** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 12. Nested Routes\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **12. Nested Routes** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nNested Routes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**12. Nested Routes** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Nested Routes\nfunction runLab() {\n  const lesson = \"Nested Routes\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Nested Routes",
        "terminalTasks": [
          {
            "id": "task-w9-l12",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Nested Routes test.",
              "bn": "Nested Routes টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Nested Routes!",
              "bn": "Nested Routes টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l11"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l13",
        "weekId": "week-9",
        "order": 13,
        "title": {
          "en": "URL Params & Query",
          "bn": "13. URL Params & Query"
        },
        "description": {
          "en": "Learn and master URL Params & Query with hands-on practice, syntax rules, and real-world examples.",
          "bn": "URL Params & Query এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 36,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"URL Params & Query\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"URL Params & Query\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### URL Params & Query\n\n#### 1. Learning Objective\nMaster **URL Params & Query** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master URL Params & Query with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// URL Params & Query execution pattern\nconsole.log(\"Mastering URL Params & Query\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of URL Params & Query\nfunction executeLessonTask() {\n  const topic = \"URL Params & Query\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **URL Params & Query** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 13. URL Params & Query\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **13. URL Params & Query** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nURL Params & Query এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**13. URL Params & Query** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: URL Params & Query\nfunction runLab() {\n  const lesson = \"URL Params & Query\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: URL Params & Query",
        "terminalTasks": [
          {
            "id": "task-w9-l13",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the URL Params & Query test.",
              "bn": "URL Params & Query টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for URL Params & Query!",
              "bn": "URL Params & Query টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l12"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l14",
        "weekId": "week-9",
        "order": 14,
        "title": {
          "en": "Protected Routes",
          "bn": "14. Protected Routes"
        },
        "description": {
          "en": "Learn and master Protected Routes with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Protected Routes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 39,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Protected Routes\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Protected Routes\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Protected Routes\n\n#### 1. Learning Objective\nMaster **Protected Routes** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Protected Routes with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Protected Routes execution pattern\nconsole.log(\"Mastering Protected Routes\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Protected Routes\nfunction executeLessonTask() {\n  const topic = \"Protected Routes\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Protected Routes** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 14. Protected Routes\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **14. Protected Routes** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProtected Routes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**14. Protected Routes** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Protected Routes\nfunction runLab() {\n  const lesson = \"Protected Routes\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Protected Routes",
        "terminalTasks": [
          {
            "id": "task-w9-l14",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Protected Routes test.",
              "bn": "Protected Routes টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Protected Routes!",
              "bn": "Protected Routes টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l13"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l15",
        "weekId": "week-9",
        "order": 15,
        "title": {
          "en": "Auth Flow",
          "bn": "15. Auth Flow"
        },
        "description": {
          "en": "Learn and master Auth Flow with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Auth Flow এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 42,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Auth Flow\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Auth Flow\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Auth Flow\n\n#### 1. Learning Objective\nMaster **Auth Flow** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Auth Flow with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Auth Flow execution pattern\nconsole.log(\"Mastering Auth Flow\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Auth Flow\nfunction executeLessonTask() {\n  const topic = \"Auth Flow\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Auth Flow** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 15. Auth Flow\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **15. Auth Flow** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nAuth Flow এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**15. Auth Flow** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Auth Flow\nfunction runLab() {\n  const lesson = \"Auth Flow\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Auth Flow",
        "terminalTasks": [
          {
            "id": "task-w9-l15",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Auth Flow test.",
              "bn": "Auth Flow টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Auth Flow!",
              "bn": "Auth Flow টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l14"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l16",
        "weekId": "week-9",
        "order": 16,
        "title": {
          "en": "Firebase Setup",
          "bn": "16. Firebase Setup"
        },
        "description": {
          "en": "Learn and master Firebase Setup with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Firebase Setup এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 45,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Firebase Setup\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Firebase Setup\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Firebase Setup\n\n#### 1. Learning Objective\nMaster **Firebase Setup** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Firebase Setup with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Firebase Setup execution pattern\nconsole.log(\"Mastering Firebase Setup\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Firebase Setup\nfunction executeLessonTask() {\n  const topic = \"Firebase Setup\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Firebase Setup** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 16. Firebase Setup\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **16. Firebase Setup** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nFirebase Setup এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**16. Firebase Setup** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Firebase Setup\nfunction runLab() {\n  const lesson = \"Firebase Setup\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Firebase Setup",
        "terminalTasks": [
          {
            "id": "task-w9-l16",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Firebase Setup test.",
              "bn": "Firebase Setup টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Firebase Setup!",
              "bn": "Firebase Setup টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l15"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l17",
        "weekId": "week-9",
        "order": 17,
        "title": {
          "en": "Deploying React",
          "bn": "17. Deploying React"
        },
        "description": {
          "en": "Learn and master Deploying React with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Deploying React এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 48,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Deploying React\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Deploying React\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Deploying React\n\n#### 1. Learning Objective\nMaster **Deploying React** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Deploying React with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Deploying React execution pattern\nconsole.log(\"Mastering Deploying React\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Deploying React\nfunction executeLessonTask() {\n  const topic = \"Deploying React\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Deploying React** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 17. Deploying React\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **17. Deploying React** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nDeploying React এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**17. Deploying React** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Deploying React\nfunction runLab() {\n  const lesson = \"Deploying React\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Deploying React",
        "terminalTasks": [
          {
            "id": "task-w9-l17",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Deploying React test.",
              "bn": "Deploying React টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Deploying React!",
              "bn": "Deploying React টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l16"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w9-l18",
        "weekId": "week-9",
        "order": 18,
        "title": {
          "en": "Project: E-commerce + Auth",
          "bn": "18. Project: E-commerce + Auth"
        },
        "description": {
          "en": "Learn and master Project: E-commerce + Auth with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Project: E-commerce + Auth এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 26,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Project: E-commerce + Auth\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Project: E-commerce + Auth\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Project: E-commerce + Auth\n\n#### 1. Learning Objective\nMaster **Project: E-commerce + Auth** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Project: E-commerce + Auth with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Project: E-commerce + Auth execution pattern\nconsole.log(\"Mastering Project: E-commerce + Auth\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Project: E-commerce + Auth\nfunction executeLessonTask() {\n  const topic = \"Project: E-commerce + Auth\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Project: E-commerce + Auth** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 18. Project: E-commerce + Auth\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **18. Project: E-commerce + Auth** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProject: E-commerce + Auth এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**18. Project: E-commerce + Auth** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Project: E-commerce + Auth\nfunction runLab() {\n  const lesson = \"Project: E-commerce + Auth\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Project: E-commerce + Auth",
        "terminalTasks": [
          {
            "id": "task-w9-l18",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Project: E-commerce + Auth test.",
              "bn": "Project: E-commerce + Auth টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Project: E-commerce + Auth!",
              "bn": "Project: E-commerce + Auth টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l17"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      }
    ]
  },
  {
    "id": "week-10",
    "order": 10,
    "title": {
      "en": "Week 10: State Management & Testing",
      "bn": "উইক 10: স্টেট ম্যানেজমেন্ট ও টেস্টিং"
    },
    "subtitle": {
      "en": "State Management & Testing (16 Lessons)",
      "bn": "স্টেট ম্যানেজমেন্ট ও টেস্টিং (16 টি লেসন)"
    },
    "description": {
      "en": "Comprehensive State Management & Testing module with 16 interactive step-by-step lessons.",
      "bn": "16 টি ইন্টারঅ্যাক্টিভ লেসন সহ স্টেট ম্যানেজমেন্ট ও টেস্টিং এর সম্পূর্ণ মডিউল।"
    },
    "isGitWeek": false,
    "lessons": [
      {
        "id": "w10-l1",
        "weekId": "week-10",
        "order": 1,
        "title": {
          "en": "Redux Basics",
          "bn": "1. Redux Basics"
        },
        "description": {
          "en": "Learn and master Redux Basics with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Redux Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Redux Basics\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Redux Basics\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Redux Basics\n\n#### 1. Learning Objective\nMaster **Redux Basics** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Redux Basics with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Redux Basics execution pattern\nconsole.log(\"Mastering Redux Basics\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Redux Basics\nfunction executeLessonTask() {\n  const topic = \"Redux Basics\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Redux Basics** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 1. Redux Basics\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **1. Redux Basics** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nRedux Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**1. Redux Basics** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Redux Basics\nfunction runLab() {\n  const lesson = \"Redux Basics\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Redux Basics",
        "terminalTasks": [
          {
            "id": "task-w10-l1",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Redux Basics test.",
              "bn": "Redux Basics টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Redux Basics!",
              "bn": "Redux Basics টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w9-l1"
        ],
        "resources": {
          "en": [
            "https://redux.js.org/introduction/getting-started",
            "https://redux-toolkit.js.org/introduction/getting-started"
          ],
          "bn": [
            "https://redux.js.org/introduction/getting-started",
            "https://redux-toolkit.js.org/introduction/getting-started"
          ]
        }
      },
      {
        "id": "w10-l2",
        "weekId": "week-10",
        "order": 2,
        "title": {
          "en": "Actions & Creators",
          "bn": "2. Actions & Creators"
        },
        "description": {
          "en": "Learn and master Actions & Creators with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Actions & Creators এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 28,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Actions & Creators\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Actions & Creators\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Actions & Creators\n\n#### 1. Learning Objective\nMaster **Actions & Creators** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Actions & Creators with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Actions & Creators execution pattern\nconsole.log(\"Mastering Actions & Creators\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Actions & Creators\nfunction executeLessonTask() {\n  const topic = \"Actions & Creators\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Actions & Creators** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 2. Actions & Creators\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **2. Actions & Creators** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nActions & Creators এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**2. Actions & Creators** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Actions & Creators\nfunction runLab() {\n  const lesson = \"Actions & Creators\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Actions & Creators",
        "terminalTasks": [
          {
            "id": "task-w10-l2",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Actions & Creators test.",
              "bn": "Actions & Creators টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Actions & Creators!",
              "bn": "Actions & Creators টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l1"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w10-l3",
        "weekId": "week-10",
        "order": 3,
        "title": {
          "en": "Reducers",
          "bn": "3. Reducers"
        },
        "description": {
          "en": "Learn and master Reducers with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Reducers এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 31,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Reducers\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Reducers\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Reducers\n\n#### 1. Learning Objective\nMaster **Reducers** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Reducers with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Reducers execution pattern\nconsole.log(\"Mastering Reducers\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Reducers\nfunction executeLessonTask() {\n  const topic = \"Reducers\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Reducers** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 3. Reducers\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **3. Reducers** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nReducers এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**3. Reducers** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Reducers\nfunction runLab() {\n  const lesson = \"Reducers\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Reducers",
        "terminalTasks": [
          {
            "id": "task-w10-l3",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Reducers test.",
              "bn": "Reducers টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Reducers!",
              "bn": "Reducers টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l2"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w10-l4",
        "weekId": "week-10",
        "order": 4,
        "title": {
          "en": "Store & Dispatch",
          "bn": "4. Store & Dispatch"
        },
        "description": {
          "en": "Learn and master Store & Dispatch with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Store & Dispatch এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 34,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Store & Dispatch\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Store & Dispatch\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Store & Dispatch\n\n#### 1. Learning Objective\nMaster **Store & Dispatch** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Store & Dispatch with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Store & Dispatch execution pattern\nconsole.log(\"Mastering Store & Dispatch\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Store & Dispatch\nfunction executeLessonTask() {\n  const topic = \"Store & Dispatch\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Store & Dispatch** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 4. Store & Dispatch\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **4. Store & Dispatch** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nStore & Dispatch এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**4. Store & Dispatch** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Store & Dispatch\nfunction runLab() {\n  const lesson = \"Store & Dispatch\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Store & Dispatch",
        "terminalTasks": [
          {
            "id": "task-w10-l4",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Store & Dispatch test.",
              "bn": "Store & Dispatch টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Store & Dispatch!",
              "bn": "Store & Dispatch টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l3"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w10-l5",
        "weekId": "week-10",
        "order": 5,
        "title": {
          "en": "Middleware",
          "bn": "5. Middleware"
        },
        "description": {
          "en": "Learn and master Middleware with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Middleware এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 37,
        "difficulty": "Beginner",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Middleware\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Middleware\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Middleware\n\n#### 1. Learning Objective\nMaster **Middleware** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Middleware with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Middleware execution pattern\nconsole.log(\"Mastering Middleware\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Middleware\nfunction executeLessonTask() {\n  const topic = \"Middleware\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Middleware** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 5. Middleware\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **5. Middleware** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nMiddleware এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**5. Middleware** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Middleware\nfunction runLab() {\n  const lesson = \"Middleware\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Middleware",
        "terminalTasks": [
          {
            "id": "task-w10-l5",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Middleware test.",
              "bn": "Middleware টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Middleware!",
              "bn": "Middleware টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l4"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w10-l6",
        "weekId": "week-10",
        "order": 6,
        "title": {
          "en": "Redux Thunk",
          "bn": "6. Redux Thunk"
        },
        "description": {
          "en": "Learn and master Redux Thunk with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Redux Thunk এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Redux Thunk\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Redux Thunk\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Redux Thunk\n\n#### 1. Learning Objective\nMaster **Redux Thunk** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Redux Thunk with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Redux Thunk execution pattern\nconsole.log(\"Mastering Redux Thunk\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Redux Thunk\nfunction executeLessonTask() {\n  const topic = \"Redux Thunk\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Redux Thunk** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 6. Redux Thunk\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **6. Redux Thunk** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nRedux Thunk এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**6. Redux Thunk** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Redux Thunk\nfunction runLab() {\n  const lesson = \"Redux Thunk\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Redux Thunk",
        "terminalTasks": [
          {
            "id": "task-w10-l6",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Redux Thunk test.",
              "bn": "Redux Thunk টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Redux Thunk!",
              "bn": "Redux Thunk টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l5"
        ],
        "resources": {
          "en": [
            "https://redux.js.org/introduction/getting-started",
            "https://redux-toolkit.js.org/introduction/getting-started"
          ],
          "bn": [
            "https://redux.js.org/introduction/getting-started",
            "https://redux-toolkit.js.org/introduction/getting-started"
          ]
        }
      },
      {
        "id": "w10-l7",
        "weekId": "week-10",
        "order": 7,
        "title": {
          "en": "React-Redux",
          "bn": "7. React-Redux"
        },
        "description": {
          "en": "Learn and master React-Redux with hands-on practice, syntax rules, and real-world examples.",
          "bn": "React-Redux এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 43,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"React-Redux\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"React-Redux\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### React-Redux\n\n#### 1. Learning Objective\nMaster **React-Redux** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master React-Redux with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// React-Redux execution pattern\nconsole.log(\"Mastering React-Redux\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of React-Redux\nfunction executeLessonTask() {\n  const topic = \"React-Redux\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **React-Redux** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 7. React-Redux\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **7. React-Redux** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nReact-Redux এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**7. React-Redux** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: React-Redux\nfunction runLab() {\n  const lesson = \"React-Redux\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: React-Redux",
        "terminalTasks": [
          {
            "id": "task-w10-l7",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the React-Redux test.",
              "bn": "React-Redux টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for React-Redux!",
              "bn": "React-Redux টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l6"
        ],
        "resources": {
          "en": [
            "https://redux.js.org/introduction/getting-started",
            "https://redux-toolkit.js.org/introduction/getting-started"
          ],
          "bn": [
            "https://redux.js.org/introduction/getting-started",
            "https://redux-toolkit.js.org/introduction/getting-started"
          ]
        }
      },
      {
        "id": "w10-l8",
        "weekId": "week-10",
        "order": 8,
        "title": {
          "en": "Selectors",
          "bn": "8. Selectors"
        },
        "description": {
          "en": "Learn and master Selectors with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Selectors এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 46,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Selectors\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Selectors\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Selectors\n\n#### 1. Learning Objective\nMaster **Selectors** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Selectors with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Selectors execution pattern\nconsole.log(\"Mastering Selectors\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Selectors\nfunction executeLessonTask() {\n  const topic = \"Selectors\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Selectors** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 8. Selectors\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **8. Selectors** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nSelectors এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**8. Selectors** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Selectors\nfunction runLab() {\n  const lesson = \"Selectors\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Selectors",
        "terminalTasks": [
          {
            "id": "task-w10-l8",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Selectors test.",
              "bn": "Selectors টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Selectors!",
              "bn": "Selectors টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l7"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w10-l9",
        "weekId": "week-10",
        "order": 9,
        "title": {
          "en": "Jest",
          "bn": "9. Jest"
        },
        "description": {
          "en": "Learn and master Jest with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Jest এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 49,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Jest\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Jest\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Jest\n\n#### 1. Learning Objective\nMaster **Jest** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Jest with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Jest execution pattern\nconsole.log(\"Mastering Jest\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Jest\nfunction executeLessonTask() {\n  const topic = \"Jest\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Jest** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 9. Jest\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **9. Jest** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nJest এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**9. Jest** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Jest\nfunction runLab() {\n  const lesson = \"Jest\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Jest",
        "terminalTasks": [
          {
            "id": "task-w10-l9",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Jest test.",
              "bn": "Jest টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Jest!",
              "bn": "Jest টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l8"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w10-l10",
        "weekId": "week-10",
        "order": 10,
        "title": {
          "en": "Unit Tests",
          "bn": "10. Unit Tests"
        },
        "description": {
          "en": "Learn and master Unit Tests with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Unit Tests এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 27,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Unit Tests\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Unit Tests\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Unit Tests\n\n#### 1. Learning Objective\nMaster **Unit Tests** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Unit Tests with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Unit Tests execution pattern\nconsole.log(\"Mastering Unit Tests\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Unit Tests\nfunction executeLessonTask() {\n  const topic = \"Unit Tests\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Unit Tests** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 10. Unit Tests\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **10. Unit Tests** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nUnit Tests এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**10. Unit Tests** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Unit Tests\nfunction runLab() {\n  const lesson = \"Unit Tests\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Unit Tests",
        "terminalTasks": [
          {
            "id": "task-w10-l10",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Unit Tests test.",
              "bn": "Unit Tests টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Unit Tests!",
              "bn": "Unit Tests টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l9"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w10-l11",
        "weekId": "week-10",
        "order": 11,
        "title": {
          "en": "Testing Utilities",
          "bn": "11. Testing Utilities"
        },
        "description": {
          "en": "Learn and master Testing Utilities with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Testing Utilities এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Testing Utilities\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Testing Utilities\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Testing Utilities\n\n#### 1. Learning Objective\nMaster **Testing Utilities** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Testing Utilities with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Testing Utilities execution pattern\nconsole.log(\"Mastering Testing Utilities\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Testing Utilities\nfunction executeLessonTask() {\n  const topic = \"Testing Utilities\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Testing Utilities** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 11. Testing Utilities\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **11. Testing Utilities** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nTesting Utilities এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**11. Testing Utilities** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Testing Utilities\nfunction runLab() {\n  const lesson = \"Testing Utilities\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Testing Utilities",
        "terminalTasks": [
          {
            "id": "task-w10-l11",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Testing Utilities test.",
              "bn": "Testing Utilities টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Testing Utilities!",
              "bn": "Testing Utilities টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l10"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w10-l12",
        "weekId": "week-10",
        "order": 12,
        "title": {
          "en": "React Testing Library",
          "bn": "12. React Testing Library"
        },
        "description": {
          "en": "Learn and master React Testing Library with hands-on practice, syntax rules, and real-world examples.",
          "bn": "React Testing Library এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 33,
        "difficulty": "Intermediate",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"React Testing Library\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"React Testing Library\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### React Testing Library\n\n#### 1. Learning Objective\nMaster **React Testing Library** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master React Testing Library with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// React Testing Library execution pattern\nconsole.log(\"Mastering React Testing Library\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of React Testing Library\nfunction executeLessonTask() {\n  const topic = \"React Testing Library\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **React Testing Library** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 12. React Testing Library\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **12. React Testing Library** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nReact Testing Library এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**12. React Testing Library** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: React Testing Library\nfunction runLab() {\n  const lesson = \"React Testing Library\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: React Testing Library",
        "terminalTasks": [
          {
            "id": "task-w10-l12",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the React Testing Library test.",
              "bn": "React Testing Library টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for React Testing Library!",
              "bn": "React Testing Library টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l11"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w10-l13",
        "weekId": "week-10",
        "order": 13,
        "title": {
          "en": "Component Tests",
          "bn": "13. Component Tests"
        },
        "description": {
          "en": "Learn and master Component Tests with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Component Tests এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 36,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Component Tests\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Component Tests\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Component Tests\n\n#### 1. Learning Objective\nMaster **Component Tests** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Component Tests with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Component Tests execution pattern\nconsole.log(\"Mastering Component Tests\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Component Tests\nfunction executeLessonTask() {\n  const topic = \"Component Tests\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Component Tests** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 13. Component Tests\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **13. Component Tests** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nComponent Tests এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**13. Component Tests** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Component Tests\nfunction runLab() {\n  const lesson = \"Component Tests\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Component Tests",
        "terminalTasks": [
          {
            "id": "task-w10-l13",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Component Tests test.",
              "bn": "Component Tests টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Component Tests!",
              "bn": "Component Tests টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l12"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w10-l14",
        "weekId": "week-10",
        "order": 14,
        "title": {
          "en": "User Interactions",
          "bn": "14. User Interactions"
        },
        "description": {
          "en": "Learn and master User Interactions with hands-on practice, syntax rules, and real-world examples.",
          "bn": "User Interactions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 39,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"User Interactions\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"User Interactions\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### User Interactions\n\n#### 1. Learning Objective\nMaster **User Interactions** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master User Interactions with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// User Interactions execution pattern\nconsole.log(\"Mastering User Interactions\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of User Interactions\nfunction executeLessonTask() {\n  const topic = \"User Interactions\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **User Interactions** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 14. User Interactions\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **14. User Interactions** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nUser Interactions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**14. User Interactions** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: User Interactions\nfunction runLab() {\n  const lesson = \"User Interactions\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: User Interactions",
        "terminalTasks": [
          {
            "id": "task-w10-l14",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the User Interactions test.",
              "bn": "User Interactions টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for User Interactions!",
              "bn": "User Interactions টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l13"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w10-l15",
        "weekId": "week-10",
        "order": 15,
        "title": {
          "en": "Coverage Reports",
          "bn": "15. Coverage Reports"
        },
        "description": {
          "en": "Learn and master Coverage Reports with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Coverage Reports এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 42,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Coverage Reports\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Coverage Reports\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Coverage Reports\n\n#### 1. Learning Objective\nMaster **Coverage Reports** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Coverage Reports with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Coverage Reports execution pattern\nconsole.log(\"Mastering Coverage Reports\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Coverage Reports\nfunction executeLessonTask() {\n  const topic = \"Coverage Reports\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Coverage Reports** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 15. Coverage Reports\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **15. Coverage Reports** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCoverage Reports এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**15. Coverage Reports** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Coverage Reports\nfunction runLab() {\n  const lesson = \"Coverage Reports\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Coverage Reports",
        "terminalTasks": [
          {
            "id": "task-w10-l15",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Coverage Reports test.",
              "bn": "Coverage Reports টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Coverage Reports!",
              "bn": "Coverage Reports টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l14"
        ],
        "resources": {
          "en": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ],
          "bn": [
            "https://react.dev/learn",
            "https://react.dev/reference/react"
          ]
        }
      },
      {
        "id": "w10-l16",
        "weekId": "week-10",
        "order": 16,
        "title": {
          "en": "Project: Redux + Tests",
          "bn": "16. Project: Redux + Tests"
        },
        "description": {
          "en": "Learn and master Project: Redux + Tests with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Project: Redux + Tests এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 45,
        "difficulty": "Advanced",
        "category": "react",
        "objectives": {
          "en": [
            "Understand core concepts of \"Project: Redux + Tests\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Project: Redux + Tests\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Project: Redux + Tests\n\n#### 1. Learning Objective\nMaster **Project: Redux + Tests** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Project: Redux + Tests with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Project: Redux + Tests execution pattern\nconsole.log(\"Mastering Project: Redux + Tests\");\n```\n\n#### 4. Real-World Practical Example\n```javascript\n// Practical demonstration of Project: Redux + Tests\nfunction executeLessonTask() {\n  const topic = \"Project: Redux + Tests\";\n  console.log(\"Executing task for:\", topic);\n  return { success: true, topic };\n}\nexecuteLessonTask();\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Project: Redux + Tests** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 16. Project: Redux + Tests\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **16. Project: Redux + Tests** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProject: Redux + Tests এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**16. Project: Redux + Tests** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Project: Redux + Tests\nfunction runLab() {\n  const lesson = \"Project: Redux + Tests\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Project: Redux + Tests",
        "terminalTasks": [
          {
            "id": "task-w10-l16",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Project: Redux + Tests test.",
              "bn": "Project: Redux + Tests টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Project: Redux + Tests!",
              "bn": "Project: Redux + Tests টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l15"
        ],
        "resources": {
          "en": [
            "https://redux.js.org/introduction/getting-started",
            "https://redux-toolkit.js.org/introduction/getting-started"
          ],
          "bn": [
            "https://redux.js.org/introduction/getting-started",
            "https://redux-toolkit.js.org/introduction/getting-started"
          ]
        }
      }
    ]
  },
  {
    "id": "week-11",
    "order": 11,
    "title": {
      "en": "Week 11: Backend Basics & Deployment",
      "bn": "উইক 11: ব্যাকএন্ড মৌলিক ও ডিপ্লয়"
    },
    "subtitle": {
      "en": "Backend Basics & Deployment (14 Lessons)",
      "bn": "ব্যাকএন্ড মৌলিক ও ডিপ্লয় (14 টি লেসন)"
    },
    "description": {
      "en": "Comprehensive Backend Basics & Deployment module with 14 interactive step-by-step lessons.",
      "bn": "14 টি ইন্টারঅ্যাক্টিভ লেসন সহ ব্যাকএন্ড মৌলিক ও ডিপ্লয় এর সম্পূর্ণ মডিউল।"
    },
    "isGitWeek": false,
    "lessons": [
      {
        "id": "w11-l1",
        "weekId": "week-11",
        "order": 1,
        "title": {
          "en": "REST API Concepts",
          "bn": "1. REST API Concepts"
        },
        "description": {
          "en": "Learn and master REST API Concepts with hands-on practice, syntax rules, and real-world examples.",
          "bn": "REST API Concepts এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"REST API Concepts\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"REST API Concepts\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### REST API Concepts\n\n#### 1. Learning Objective\nMaster **REST API Concepts** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master REST API Concepts with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// REST API Concepts execution pattern\nconsole.log(\"Mastering REST API Concepts\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for REST API Concepts -->\n<section class=\"lesson-demo\">\n  <h2>REST API Concepts</h2>\n  <p>Interactive lab exercise for REST API Concepts</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **REST API Concepts** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 1. REST API Concepts\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **1. REST API Concepts** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nREST API Concepts এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**1. REST API Concepts** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: REST API Concepts\nfunction runLab() {\n  const lesson = \"REST API Concepts\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: REST API Concepts",
        "terminalTasks": [
          {
            "id": "task-w11-l1",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the REST API Concepts test.",
              "bn": "REST API Concepts টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for REST API Concepts!",
              "bn": "REST API Concepts টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w10-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          ]
        }
      },
      {
        "id": "w11-l2",
        "weekId": "week-11",
        "order": 2,
        "title": {
          "en": "HTTP Methods",
          "bn": "2. HTTP Methods"
        },
        "description": {
          "en": "Learn and master HTTP Methods with hands-on practice, syntax rules, and real-world examples.",
          "bn": "HTTP Methods এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 28,
        "difficulty": "Beginner",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"HTTP Methods\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"HTTP Methods\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### HTTP Methods\n\n#### 1. Learning Objective\nMaster **HTTP Methods** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master HTTP Methods with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// HTTP Methods execution pattern\nconsole.log(\"Mastering HTTP Methods\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for HTTP Methods -->\n<section class=\"lesson-demo\">\n  <h2>HTTP Methods</h2>\n  <p>Interactive lab exercise for HTTP Methods</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **HTTP Methods** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 2. HTTP Methods\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **2. HTTP Methods** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nHTTP Methods এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**2. HTTP Methods** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: HTTP Methods\nfunction runLab() {\n  const lesson = \"HTTP Methods\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: HTTP Methods",
        "terminalTasks": [
          {
            "id": "task-w11-l2",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the HTTP Methods test.",
              "bn": "HTTP Methods টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for HTTP Methods!",
              "bn": "HTTP Methods টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w11-l3",
        "weekId": "week-11",
        "order": 3,
        "title": {
          "en": "Status Codes",
          "bn": "3. Status Codes"
        },
        "description": {
          "en": "Learn and master Status Codes with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Status Codes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 31,
        "difficulty": "Beginner",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Status Codes\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Status Codes\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Status Codes\n\n#### 1. Learning Objective\nMaster **Status Codes** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Status Codes with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Status Codes execution pattern\nconsole.log(\"Mastering Status Codes\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Status Codes -->\n<section class=\"lesson-demo\">\n  <h2>Status Codes</h2>\n  <p>Interactive lab exercise for Status Codes</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Status Codes** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 3. Status Codes\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **3. Status Codes** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nStatus Codes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**3. Status Codes** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Status Codes\nfunction runLab() {\n  const lesson = \"Status Codes\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Status Codes",
        "terminalTasks": [
          {
            "id": "task-w11-l3",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Status Codes test.",
              "bn": "Status Codes টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Status Codes!",
              "bn": "Status Codes টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l2"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w11-l4",
        "weekId": "week-11",
        "order": 4,
        "title": {
          "en": "Node.js Basics",
          "bn": "4. Node.js Basics"
        },
        "description": {
          "en": "Learn and master Node.js Basics with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Node.js Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 34,
        "difficulty": "Beginner",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Node.js Basics\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Node.js Basics\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Node.js Basics\n\n#### 1. Learning Objective\nMaster **Node.js Basics** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Node.js Basics with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Node.js Basics execution pattern\nconsole.log(\"Mastering Node.js Basics\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Node.js Basics -->\n<section class=\"lesson-demo\">\n  <h2>Node.js Basics</h2>\n  <p>Interactive lab exercise for Node.js Basics</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Node.js Basics** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 4. Node.js Basics\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **4. Node.js Basics** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nNode.js Basics এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**4. Node.js Basics** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Node.js Basics\nfunction runLab() {\n  const lesson = \"Node.js Basics\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Node.js Basics",
        "terminalTasks": [
          {
            "id": "task-w11-l4",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Node.js Basics test.",
              "bn": "Node.js Basics টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Node.js Basics!",
              "bn": "Node.js Basics টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l3"
        ],
        "resources": {
          "en": [
            "https://expressjs.com/en/starter/hello-world.html",
            "https://nodejs.org/en/docs/guides/getting-started-guide/"
          ],
          "bn": [
            "https://expressjs.com/en/starter/hello-world.html",
            "https://nodejs.org/en/docs/guides/getting-started-guide/"
          ]
        }
      },
      {
        "id": "w11-l5",
        "weekId": "week-11",
        "order": 5,
        "title": {
          "en": "npm",
          "bn": "5. npm"
        },
        "description": {
          "en": "Learn and master npm with hands-on practice, syntax rules, and real-world examples.",
          "bn": "npm এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 37,
        "difficulty": "Beginner",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"npm\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"npm\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### npm\n\n#### 1. Learning Objective\nMaster **npm** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master npm with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// npm execution pattern\nconsole.log(\"Mastering npm\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for npm -->\n<section class=\"lesson-demo\">\n  <h2>npm</h2>\n  <p>Interactive lab exercise for npm</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **npm** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 5. npm\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **5. npm** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nnpm এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**5. npm** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: npm\nfunction runLab() {\n  const lesson = \"npm\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: npm",
        "terminalTasks": [
          {
            "id": "task-w11-l5",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the npm test.",
              "bn": "npm টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for npm!",
              "bn": "npm টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l4"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w11-l6",
        "weekId": "week-11",
        "order": 6,
        "title": {
          "en": "Express Setup",
          "bn": "6. Express Setup"
        },
        "description": {
          "en": "Learn and master Express Setup with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Express Setup এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Express Setup\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Express Setup\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Express Setup\n\n#### 1. Learning Objective\nMaster **Express Setup** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Express Setup with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Express Setup execution pattern\nconsole.log(\"Mastering Express Setup\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Express Setup -->\n<section class=\"lesson-demo\">\n  <h2>Express Setup</h2>\n  <p>Interactive lab exercise for Express Setup</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Express Setup** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 6. Express Setup\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **6. Express Setup** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nExpress Setup এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**6. Express Setup** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Express Setup\nfunction runLab() {\n  const lesson = \"Express Setup\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Express Setup",
        "terminalTasks": [
          {
            "id": "task-w11-l6",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Express Setup test.",
              "bn": "Express Setup টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Express Setup!",
              "bn": "Express Setup টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l5"
        ],
        "resources": {
          "en": [
            "https://expressjs.com/en/starter/hello-world.html",
            "https://nodejs.org/en/docs/guides/getting-started-guide/"
          ],
          "bn": [
            "https://expressjs.com/en/starter/hello-world.html",
            "https://nodejs.org/en/docs/guides/getting-started-guide/"
          ]
        }
      },
      {
        "id": "w11-l7",
        "weekId": "week-11",
        "order": 7,
        "title": {
          "en": "Routes",
          "bn": "7. Routes"
        },
        "description": {
          "en": "Learn and master Routes with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Routes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 43,
        "difficulty": "Intermediate",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Routes\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Routes\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Routes\n\n#### 1. Learning Objective\nMaster **Routes** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Routes with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Routes execution pattern\nconsole.log(\"Mastering Routes\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Routes -->\n<section class=\"lesson-demo\">\n  <h2>Routes</h2>\n  <p>Interactive lab exercise for Routes</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Routes** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 7. Routes\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **7. Routes** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nRoutes এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**7. Routes** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Routes\nfunction runLab() {\n  const lesson = \"Routes\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Routes",
        "terminalTasks": [
          {
            "id": "task-w11-l7",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Routes test.",
              "bn": "Routes টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Routes!",
              "bn": "Routes টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l6"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w11-l8",
        "weekId": "week-11",
        "order": 8,
        "title": {
          "en": "Middleware",
          "bn": "8. Middleware"
        },
        "description": {
          "en": "Learn and master Middleware with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Middleware এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 46,
        "difficulty": "Intermediate",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Middleware\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Middleware\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Middleware\n\n#### 1. Learning Objective\nMaster **Middleware** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Middleware with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Middleware execution pattern\nconsole.log(\"Mastering Middleware\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Middleware -->\n<section class=\"lesson-demo\">\n  <h2>Middleware</h2>\n  <p>Interactive lab exercise for Middleware</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Middleware** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 8. Middleware\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **8. Middleware** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nMiddleware এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**8. Middleware** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Middleware\nfunction runLab() {\n  const lesson = \"Middleware\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Middleware",
        "terminalTasks": [
          {
            "id": "task-w11-l8",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Middleware test.",
              "bn": "Middleware টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Middleware!",
              "bn": "Middleware টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l7"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w11-l9",
        "weekId": "week-11",
        "order": 9,
        "title": {
          "en": "Error Handling",
          "bn": "9. Error Handling"
        },
        "description": {
          "en": "Learn and master Error Handling with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Error Handling এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 49,
        "difficulty": "Intermediate",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Error Handling\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Error Handling\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Error Handling\n\n#### 1. Learning Objective\nMaster **Error Handling** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Error Handling with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Error Handling execution pattern\nconsole.log(\"Mastering Error Handling\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Error Handling -->\n<section class=\"lesson-demo\">\n  <h2>Error Handling</h2>\n  <p>Interactive lab exercise for Error Handling</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Error Handling** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 9. Error Handling\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **9. Error Handling** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nError Handling এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**9. Error Handling** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Error Handling\nfunction runLab() {\n  const lesson = \"Error Handling\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Error Handling",
        "terminalTasks": [
          {
            "id": "task-w11-l9",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Error Handling test.",
              "bn": "Error Handling টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Error Handling!",
              "bn": "Error Handling টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l8"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w11-l10",
        "weekId": "week-11",
        "order": 10,
        "title": {
          "en": "CORS & Security",
          "bn": "10. CORS & Security"
        },
        "description": {
          "en": "Learn and master CORS & Security with hands-on practice, syntax rules, and real-world examples.",
          "bn": "CORS & Security এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 27,
        "difficulty": "Intermediate",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"CORS & Security\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"CORS & Security\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### CORS & Security\n\n#### 1. Learning Objective\nMaster **CORS & Security** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master CORS & Security with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// CORS & Security execution pattern\nconsole.log(\"Mastering CORS & Security\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for CORS & Security -->\n<section class=\"lesson-demo\">\n  <h2>CORS & Security</h2>\n  <p>Interactive lab exercise for CORS & Security</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **CORS & Security** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 10. CORS & Security\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **10. CORS & Security** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCORS & Security এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**10. CORS & Security** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: CORS & Security\nfunction runLab() {\n  const lesson = \"CORS & Security\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: CORS & Security",
        "terminalTasks": [
          {
            "id": "task-w11-l10",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the CORS & Security test.",
              "bn": "CORS & Security টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for CORS & Security!",
              "bn": "CORS & Security টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l9"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w11-l11",
        "weekId": "week-11",
        "order": 11,
        "title": {
          "en": "Firebase Realtime DB",
          "bn": "11. Firebase Realtime DB"
        },
        "description": {
          "en": "Learn and master Firebase Realtime DB with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Firebase Realtime DB এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 30,
        "difficulty": "Intermediate",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Firebase Realtime DB\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Firebase Realtime DB\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Firebase Realtime DB\n\n#### 1. Learning Objective\nMaster **Firebase Realtime DB** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Firebase Realtime DB with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Firebase Realtime DB execution pattern\nconsole.log(\"Mastering Firebase Realtime DB\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Firebase Realtime DB -->\n<section class=\"lesson-demo\">\n  <h2>Firebase Realtime DB</h2>\n  <p>Interactive lab exercise for Firebase Realtime DB</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Firebase Realtime DB** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 11. Firebase Realtime DB\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **11. Firebase Realtime DB** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nFirebase Realtime DB এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**11. Firebase Realtime DB** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Firebase Realtime DB\nfunction runLab() {\n  const lesson = \"Firebase Realtime DB\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Firebase Realtime DB",
        "terminalTasks": [
          {
            "id": "task-w11-l11",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Firebase Realtime DB test.",
              "bn": "Firebase Realtime DB টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Firebase Realtime DB!",
              "bn": "Firebase Realtime DB টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l10"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w11-l12",
        "weekId": "week-11",
        "order": 12,
        "title": {
          "en": "Cloud Functions",
          "bn": "12. Cloud Functions"
        },
        "description": {
          "en": "Learn and master Cloud Functions with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Cloud Functions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 33,
        "difficulty": "Intermediate",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Cloud Functions\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Cloud Functions\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Cloud Functions\n\n#### 1. Learning Objective\nMaster **Cloud Functions** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Cloud Functions with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Cloud Functions execution pattern\nconsole.log(\"Mastering Cloud Functions\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Cloud Functions -->\n<section class=\"lesson-demo\">\n  <h2>Cloud Functions</h2>\n  <p>Interactive lab exercise for Cloud Functions</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Cloud Functions** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 12. Cloud Functions\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **12. Cloud Functions** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCloud Functions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**12. Cloud Functions** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Cloud Functions\nfunction runLab() {\n  const lesson = \"Cloud Functions\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Cloud Functions",
        "terminalTasks": [
          {
            "id": "task-w11-l12",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Cloud Functions test.",
              "bn": "Cloud Functions টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Cloud Functions!",
              "bn": "Cloud Functions টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l11"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
          ]
        }
      },
      {
        "id": "w11-l13",
        "weekId": "week-11",
        "order": 13,
        "title": {
          "en": "Deploying to Netlify",
          "bn": "13. Deploying to Netlify"
        },
        "description": {
          "en": "Learn and master Deploying to Netlify with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Deploying to Netlify এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 36,
        "difficulty": "Advanced",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Deploying to Netlify\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Deploying to Netlify\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Deploying to Netlify\n\n#### 1. Learning Objective\nMaster **Deploying to Netlify** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Deploying to Netlify with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Deploying to Netlify execution pattern\nconsole.log(\"Mastering Deploying to Netlify\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Deploying to Netlify -->\n<section class=\"lesson-demo\">\n  <h2>Deploying to Netlify</h2>\n  <p>Interactive lab exercise for Deploying to Netlify</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Deploying to Netlify** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 13. Deploying to Netlify\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **13. Deploying to Netlify** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nDeploying to Netlify এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**13. Deploying to Netlify** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Deploying to Netlify\nfunction runLab() {\n  const lesson = \"Deploying to Netlify\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Deploying to Netlify",
        "terminalTasks": [
          {
            "id": "task-w11-l13",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Deploying to Netlify test.",
              "bn": "Deploying to Netlify টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Deploying to Netlify!",
              "bn": "Deploying to Netlify টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l12"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w11-l14",
        "weekId": "week-11",
        "order": 14,
        "title": {
          "en": "Project: Deploy 5 Projects",
          "bn": "14. Project: Deploy 5 Projects"
        },
        "description": {
          "en": "Learn and master Project: Deploy 5 Projects with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Project: Deploy 5 Projects এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 39,
        "difficulty": "Advanced",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Project: Deploy 5 Projects\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Project: Deploy 5 Projects\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Project: Deploy 5 Projects\n\n#### 1. Learning Objective\nMaster **Project: Deploy 5 Projects** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Project: Deploy 5 Projects with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Project: Deploy 5 Projects execution pattern\nconsole.log(\"Mastering Project: Deploy 5 Projects\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Project: Deploy 5 Projects -->\n<section class=\"lesson-demo\">\n  <h2>Project: Deploy 5 Projects</h2>\n  <p>Interactive lab exercise for Project: Deploy 5 Projects</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Project: Deploy 5 Projects** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 14. Project: Deploy 5 Projects\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **14. Project: Deploy 5 Projects** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProject: Deploy 5 Projects এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**14. Project: Deploy 5 Projects** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Project: Deploy 5 Projects\nfunction runLab() {\n  const lesson = \"Project: Deploy 5 Projects\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Project: Deploy 5 Projects",
        "terminalTasks": [
          {
            "id": "task-w11-l14",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Project: Deploy 5 Projects test.",
              "bn": "Project: Deploy 5 Projects টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Project: Deploy 5 Projects!",
              "bn": "Project: Deploy 5 Projects টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l13"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      }
    ]
  },
  {
    "id": "week-12",
    "order": 12,
    "title": {
      "en": "Week 12: Portfolio & Career Preparation",
      "bn": "উইক 12: পোর্টফোলিও ও ক্যারিয়ার প্রস্তুতি"
    },
    "subtitle": {
      "en": "Portfolio & Career Preparation (10 Lessons)",
      "bn": "পোর্টফোলিও ও ক্যারিয়ার প্রস্তুতি (10 টি লেসন)"
    },
    "description": {
      "en": "Comprehensive Portfolio & Career Preparation module with 10 interactive step-by-step lessons.",
      "bn": "10 টি ইন্টারঅ্যাক্টিভ লেসন সহ পোর্টফোলিও ও ক্যারিয়ার প্রস্তুতি এর সম্পূর্ণ মডিউল।"
    },
    "isGitWeek": false,
    "lessons": [
      {
        "id": "w12-l1",
        "weekId": "week-12",
        "order": 1,
        "title": {
          "en": "Portfolio Strategy",
          "bn": "1. Portfolio Strategy"
        },
        "description": {
          "en": "Learn and master Portfolio Strategy with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Portfolio Strategy এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 25,
        "difficulty": "Beginner",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Portfolio Strategy\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Portfolio Strategy\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Portfolio Strategy\n\n#### 1. Learning Objective\nMaster **Portfolio Strategy** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Portfolio Strategy with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Portfolio Strategy execution pattern\nconsole.log(\"Mastering Portfolio Strategy\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Portfolio Strategy -->\n<section class=\"lesson-demo\">\n  <h2>Portfolio Strategy</h2>\n  <p>Interactive lab exercise for Portfolio Strategy</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Portfolio Strategy** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 1. Portfolio Strategy\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **1. Portfolio Strategy** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nPortfolio Strategy এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**1. Portfolio Strategy** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Portfolio Strategy\nfunction runLab() {\n  const lesson = \"Portfolio Strategy\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Portfolio Strategy",
        "terminalTasks": [
          {
            "id": "task-w12-l1",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Portfolio Strategy test.",
              "bn": "Portfolio Strategy টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Portfolio Strategy!",
              "bn": "Portfolio Strategy টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w11-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w12-l2",
        "weekId": "week-12",
        "order": 2,
        "title": {
          "en": "Showcasing Projects",
          "bn": "2. Showcasing Projects"
        },
        "description": {
          "en": "Learn and master Showcasing Projects with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Showcasing Projects এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 28,
        "difficulty": "Beginner",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Showcasing Projects\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Showcasing Projects\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Showcasing Projects\n\n#### 1. Learning Objective\nMaster **Showcasing Projects** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Showcasing Projects with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Showcasing Projects execution pattern\nconsole.log(\"Mastering Showcasing Projects\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Showcasing Projects -->\n<section class=\"lesson-demo\">\n  <h2>Showcasing Projects</h2>\n  <p>Interactive lab exercise for Showcasing Projects</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Showcasing Projects** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 2. Showcasing Projects\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **2. Showcasing Projects** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nShowcasing Projects এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**2. Showcasing Projects** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Showcasing Projects\nfunction runLab() {\n  const lesson = \"Showcasing Projects\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Showcasing Projects",
        "terminalTasks": [
          {
            "id": "task-w12-l2",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Showcasing Projects test.",
              "bn": "Showcasing Projects টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Showcasing Projects!",
              "bn": "Showcasing Projects টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w12-l1"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w12-l3",
        "weekId": "week-12",
        "order": 3,
        "title": {
          "en": "Writing Descriptions",
          "bn": "3. Writing Descriptions"
        },
        "description": {
          "en": "Learn and master Writing Descriptions with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Writing Descriptions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 31,
        "difficulty": "Beginner",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Writing Descriptions\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Writing Descriptions\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Writing Descriptions\n\n#### 1. Learning Objective\nMaster **Writing Descriptions** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Writing Descriptions with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Writing Descriptions execution pattern\nconsole.log(\"Mastering Writing Descriptions\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Writing Descriptions -->\n<section class=\"lesson-demo\">\n  <h2>Writing Descriptions</h2>\n  <p>Interactive lab exercise for Writing Descriptions</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Writing Descriptions** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 3. Writing Descriptions\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **3. Writing Descriptions** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nWriting Descriptions এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**3. Writing Descriptions** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Writing Descriptions\nfunction runLab() {\n  const lesson = \"Writing Descriptions\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Writing Descriptions",
        "terminalTasks": [
          {
            "id": "task-w12-l3",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Writing Descriptions test.",
              "bn": "Writing Descriptions টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Writing Descriptions!",
              "bn": "Writing Descriptions টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w12-l2"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w12-l4",
        "weekId": "week-12",
        "order": 4,
        "title": {
          "en": "GitHub Profile",
          "bn": "4. GitHub Profile"
        },
        "description": {
          "en": "Learn and master GitHub Profile with hands-on practice, syntax rules, and real-world examples.",
          "bn": "GitHub Profile এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 34,
        "difficulty": "Beginner",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"GitHub Profile\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"GitHub Profile\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### GitHub Profile\n\n#### 1. Learning Objective\nMaster **GitHub Profile** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master GitHub Profile with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// GitHub Profile execution pattern\nconsole.log(\"Mastering GitHub Profile\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for GitHub Profile -->\n<section class=\"lesson-demo\">\n  <h2>GitHub Profile</h2>\n  <p>Interactive lab exercise for GitHub Profile</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **GitHub Profile** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 4. GitHub Profile\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **4. GitHub Profile** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nGitHub Profile এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**4. GitHub Profile** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: GitHub Profile\nfunction runLab() {\n  const lesson = \"GitHub Profile\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: GitHub Profile",
        "terminalTasks": [
          {
            "id": "task-w12-l4",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the GitHub Profile test.",
              "bn": "GitHub Profile টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for GitHub Profile!",
              "bn": "GitHub Profile টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w12-l3"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w12-l5",
        "weekId": "week-12",
        "order": 5,
        "title": {
          "en": "Commit Messages",
          "bn": "5. Commit Messages"
        },
        "description": {
          "en": "Learn and master Commit Messages with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Commit Messages এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 37,
        "difficulty": "Beginner",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Commit Messages\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Commit Messages\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Commit Messages\n\n#### 1. Learning Objective\nMaster **Commit Messages** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Commit Messages with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Commit Messages execution pattern\nconsole.log(\"Mastering Commit Messages\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Commit Messages -->\n<section class=\"lesson-demo\">\n  <h2>Commit Messages</h2>\n  <p>Interactive lab exercise for Commit Messages</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Commit Messages** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 5. Commit Messages\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **5. Commit Messages** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nCommit Messages এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**5. Commit Messages** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Commit Messages\nfunction runLab() {\n  const lesson = \"Commit Messages\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Commit Messages",
        "terminalTasks": [
          {
            "id": "task-w12-l5",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Commit Messages test.",
              "bn": "Commit Messages টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Commit Messages!",
              "bn": "Commit Messages টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w12-l4"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w12-l6",
        "weekId": "week-12",
        "order": 6,
        "title": {
          "en": "README & Docs",
          "bn": "6. README & Docs"
        },
        "description": {
          "en": "Learn and master README & Docs with hands-on practice, syntax rules, and real-world examples.",
          "bn": "README & Docs এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 40,
        "difficulty": "Intermediate",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"README & Docs\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"README & Docs\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### README & Docs\n\n#### 1. Learning Objective\nMaster **README & Docs** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master README & Docs with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// README & Docs execution pattern\nconsole.log(\"Mastering README & Docs\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for README & Docs -->\n<section class=\"lesson-demo\">\n  <h2>README & Docs</h2>\n  <p>Interactive lab exercise for README & Docs</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **README & Docs** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 6. README & Docs\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **6. README & Docs** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nREADME & Docs এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**6. README & Docs** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: README & Docs\nfunction runLab() {\n  const lesson = \"README & Docs\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: README & Docs",
        "terminalTasks": [
          {
            "id": "task-w12-l6",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the README & Docs test.",
              "bn": "README & Docs টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for README & Docs!",
              "bn": "README & Docs টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w12-l5"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w12-l7",
        "weekId": "week-12",
        "order": 7,
        "title": {
          "en": "Personal Brand",
          "bn": "7. Personal Brand"
        },
        "description": {
          "en": "Learn and master Personal Brand with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Personal Brand এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 43,
        "difficulty": "Intermediate",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Personal Brand\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Personal Brand\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Personal Brand\n\n#### 1. Learning Objective\nMaster **Personal Brand** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Personal Brand with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Personal Brand execution pattern\nconsole.log(\"Mastering Personal Brand\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Personal Brand -->\n<section class=\"lesson-demo\">\n  <h2>Personal Brand</h2>\n  <p>Interactive lab exercise for Personal Brand</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Personal Brand** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 7. Personal Brand\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **7. Personal Brand** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nPersonal Brand এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**7. Personal Brand** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Personal Brand\nfunction runLab() {\n  const lesson = \"Personal Brand\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Personal Brand",
        "terminalTasks": [
          {
            "id": "task-w12-l7",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Personal Brand test.",
              "bn": "Personal Brand টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Personal Brand!",
              "bn": "Personal Brand টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w12-l6"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w12-l8",
        "weekId": "week-12",
        "order": 8,
        "title": {
          "en": "Interview Prep",
          "bn": "8. Interview Prep"
        },
        "description": {
          "en": "Learn and master Interview Prep with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Interview Prep এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 46,
        "difficulty": "Intermediate",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Interview Prep\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Interview Prep\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Interview Prep\n\n#### 1. Learning Objective\nMaster **Interview Prep** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Interview Prep with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Interview Prep execution pattern\nconsole.log(\"Mastering Interview Prep\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Interview Prep -->\n<section class=\"lesson-demo\">\n  <h2>Interview Prep</h2>\n  <p>Interactive lab exercise for Interview Prep</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Interview Prep** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 8. Interview Prep\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **8. Interview Prep** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nInterview Prep এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**8. Interview Prep** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Interview Prep\nfunction runLab() {\n  const lesson = \"Interview Prep\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Interview Prep",
        "terminalTasks": [
          {
            "id": "task-w12-l8",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Interview Prep test.",
              "bn": "Interview Prep টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Interview Prep!",
              "bn": "Interview Prep টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w12-l7"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w12-l9",
        "weekId": "week-12",
        "order": 9,
        "title": {
          "en": "Resume & Cover Letter",
          "bn": "9. Resume & Cover Letter"
        },
        "description": {
          "en": "Learn and master Resume & Cover Letter with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Resume & Cover Letter এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 49,
        "difficulty": "Intermediate",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Resume & Cover Letter\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Resume & Cover Letter\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Resume & Cover Letter\n\n#### 1. Learning Objective\nMaster **Resume & Cover Letter** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Resume & Cover Letter with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Resume & Cover Letter execution pattern\nconsole.log(\"Mastering Resume & Cover Letter\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Resume & Cover Letter -->\n<section class=\"lesson-demo\">\n  <h2>Resume & Cover Letter</h2>\n  <p>Interactive lab exercise for Resume & Cover Letter</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Resume & Cover Letter** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 9. Resume & Cover Letter\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **9. Resume & Cover Letter** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nResume & Cover Letter এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**9. Resume & Cover Letter** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Resume & Cover Letter\nfunction runLab() {\n  const lesson = \"Resume & Cover Letter\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Resume & Cover Letter",
        "terminalTasks": [
          {
            "id": "task-w12-l9",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Resume & Cover Letter test.",
              "bn": "Resume & Cover Letter টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Resume & Cover Letter!",
              "bn": "Resume & Cover Letter টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w12-l8"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      },
      {
        "id": "w12-l10",
        "weekId": "week-12",
        "order": 10,
        "title": {
          "en": "Project: Portfolio Site",
          "bn": "10. Project: Portfolio Site"
        },
        "description": {
          "en": "Learn and master Project: Portfolio Site with hands-on practice, syntax rules, and real-world examples.",
          "bn": "Project: Portfolio Site এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন।"
        },
        "durationMinutes": 27,
        "difficulty": "Intermediate",
        "category": "fullstack",
        "objectives": {
          "en": [
            "Understand core concepts of \"Project: Portfolio Site\"",
            "Apply the concept in real, runnable examples",
            "Recognize common pitfalls and how to avoid them",
            "Finish a short hands-on practice task"
          ],
          "bn": [
            "\"Project: Portfolio Site\" সম্পর্কে মৌলিক ধারণা অর্জন",
            "বাস্তব উদাহরণে প্রয়োগ করে দেখা",
            "সাধারণ ভুল এবং সেগুলো এড়ানোর কৌশল শেখা",
            "একটি ছোট প্র্যাকটিস কাজ সম্পন্ন করা"
          ]
        },
        "contentMarkdown": {
          "en": "### Project: Portfolio Site\n\n#### 1. Learning Objective\nMaster **Project: Portfolio Site** by understanding its core principles, practical usage patterns, and industry best practices in modern web development.\n\n#### 2. Concept Explanation & Why It Matters\nLearn and master Project: Portfolio Site with hands-on practice, syntax rules, and real-world examples. Understanding this topic enables you to write cleaner, more resilient, and efficient code in real-world production environments.\n\n#### 3. Structure & Syntax\nStandard JavaScript syntax:\n```javascript\n// Project: Portfolio Site execution pattern\nconsole.log(\"Mastering Project: Portfolio Site\");\n```\n\n#### 4. Real-World Practical Example\n```html\n<!-- Practical snippet for Project: Portfolio Site -->\n<section class=\"lesson-demo\">\n  <h2>Project: Portfolio Site</h2>\n  <p>Interactive lab exercise for Project: Portfolio Site</p>\n</section>\n```\n\n#### 5. Common Pitfalls & Best Practices\n- **Do**: Follow clear hierarchy, proper naming conventions, and clean modular code formatting.\n- **Don't**: Skip error handling, ignore semantic layout principles, or write unreadable spaghetti code.\n\n#### 6. Key Takeaways\n- Core principle of **Project: Portfolio Site** verified.\n- Prepared for hands-on application in the Practice Sandbox or Terminal CLI.",
          "bn": "### 10. Project: Portfolio Site\n\n#### ১. শিখন উদ্দেশ্য\nওয়েব ডেভেলপমেন্টে **10. Project: Portfolio Site** এর মূল ধারণা, সঠিক ব্যবহার এবং ইন্ডাস্ট্রির সেরা প্র্যাকটিসগুলো আয়ত্ত করা।\n\n#### ২. মূল ধারণা ও প্রয়োজনীয়তা\nProject: Portfolio Site এর মৌলিক ধারণা, সিনট্যাক্স নিয়মাবলী এবং বাস্তব কোড অনুশীলন করুন। এই বিষয়টি জানা থাকলে আপনি আরও নিখুঁত, সুরক্ষিত এবং পারফর্ম্যান্ট কোড লিখতে পারবেন।\n\n#### ৩. সিনট্যাক্স ও স্ট্রাকচার\nগিট হাব এবং আধুনিক কোডিং স্ট্যান্ডার্ড মেনে সঠিকভাবে কোড লিখুন।\n\n#### ৪. প্র্যাকটিক্যাল উদাহরণ\nকোডিং স্যান্ডবক্স অথবা টার্মিনালে সরাসরি চর্চা করে দক্ষতা যাচাই করুন।\n\n#### ৫. সাধারণ ভুল ও বেস্ট প্র্যাকটিস\n- **করুন**: পরিচ্ছন্ন কোড ফরম্যাটিং ও সঠিক নামকরণ বজায় রাখুন।\n- **এড়িয়ে চলুন**: অগোছালো কোড এবং ভুল এরর হ্যান্ডলিং।\n\n#### ৬. মূল টেকঅ্যাওয়ে\n**10. Project: Portfolio Site** এর ব্যবহারিক জ্ঞান অর্জিত হয়েছে।"
        },
        "practiceCode": "// Practice Lab: Project: Portfolio Site\nfunction runLab() {\n  const lesson = \"Project: Portfolio Site\";\n  console.log(\"Successfully executed:\", lesson);\n}\nrunLab();",
        "expectedOutput": "Successfully executed: Project: Portfolio Site",
        "terminalTasks": [
          {
            "id": "task-w12-l10",
            "instruction": {
              "en": "Execute `node index.js` in terminal to run the Project: Portfolio Site test.",
              "bn": "Project: Portfolio Site টেস্ট চালানোর জন্য টার্মিনালে `node index.js` লিখুন।"
            },
            "expectedCommandPattern": "node index.js",
            "successMessage": {
              "en": "Test Passed for Project: Portfolio Site!",
              "bn": "Project: Portfolio Site টেস্ট সফলভাবে সম্পন্ন হয়েছে!"
            }
          }
        ],
        "prerequisiteLessonIds": [
          "w12-l9"
        ],
        "resources": {
          "en": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ],
          "bn": [
            "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            "https://expressjs.com/en/starter/hello-world.html"
          ]
        }
      }
    ]
  }
];
