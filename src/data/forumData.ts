import { ForumPost } from '../types';

export const INITIAL_FORUM_POSTS: ForumPost[] = [
  {
    id: 'post-101',
    authorId: 'user-github-dev1',
    authorName: 'Tanvir Hossain',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    authorProvider: 'github',
    title: 'Why is Git status showing untracked files after git init?',
    content: 'When I run `git init` in a directory with existing files, `git status` lists all my files in red under "Untracked files". How do I stage them properly before my first commit?',
    category: 'git',
    createdAt: '2026-09-19T14:30:00.000Z',
    likesCount: 12,
    likedBy: ['user-google-dev2'],
    commentsCount: 2,
    comments: [
      {
        id: 'comment-1',
        postId: 'post-101',
        authorId: 'user-google-dev2',
        authorName: 'Nusrat Jahan',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
        content: 'Running `git add .` tells Git to track all files in the current working directory. Then run `git status` again to see them staged in green!',
        createdAt: '2026-09-19T15:00:00.000Z'
      },
      {
        id: 'comment-2',
        postId: 'post-101',
        authorId: 'user-github-dev1',
        authorName: 'Tanvir Hossain',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
        content: 'That worked perfectly! Thanks Nusrat. The terminal tasks in Week 1 Lesson 2 really helped practice this.',
        createdAt: '2026-09-19T15:20:00.000Z'
      }
    ]
  },
  {
    id: 'post-102',
    authorId: 'user-google-dev3',
    authorName: 'Rafiqul Islam',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    authorProvider: 'google',
    title: 'How long does Teacher Verification take for Project 1?',
    content: 'I submitted my GitHub CLI repository link for Project 1 verification earlier today. Is there anything specific the teachers check during code review?',
    category: 'projects',
    createdAt: '2026-09-18T10:15:00.000Z',
    likesCount: 8,
    likedBy: [],
    commentsCount: 1,
    comments: [
      {
        id: 'comment-3',
        postId: 'post-102',
        authorId: 'user-instructor-1',
        authorName: 'Teacher Zahid (Mentor)',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
        content: 'Hi Rafiqul! Teacher verifications are processed within 1-2 hours. We verify commit history hygiene, git branch discipline, and terminal task completion.',
        createdAt: '2026-09-18T11:00:00.000Z'
      }
    ]
  }
];
