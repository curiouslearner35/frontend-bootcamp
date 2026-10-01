import React, { useState, useMemo } from 'react';
import { ForumPost, Language, UserProfile } from '../types';
import { LeaderboardEntry } from '../types/economy';
import {
  MessageSquare,
  Heart,
  MessageCircle,
  Plus,
  Lock,
  Send,
  ShieldAlert,
  Search,
  Trophy,
  Crown,
  Flame,
  Sparkles,
  Zap,
  Medal,
  ChevronRight,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  Code2,
  Terminal,
  HelpCircle,
  Filter,
  ArrowUpRight,
  Share2,
  ThumbsUp,
  Compass
} from 'lucide-react';
import { t } from '../i18n/translations';
import { activityTracker } from '../services/activityTracker';
import { leaderboardService } from '../services/leaderboardService';

interface ForumPageProps {
  posts: ForumPost[];
  user: UserProfile | null;
  language: Language;
  onCreatePost: (title: string, content: string, category: ForumPost['category']) => void;
  onCreateComment: (postId: string, content: string) => void;
  onLikePost: (postId: string) => void;
  onOpenAuth: () => void;
}

export const ForumPage: React.FC<ForumPageProps> = ({
  posts,
  user,
  language,
  onCreatePost,
  onCreateComment,
  onLikePost,
  onOpenAuth
}) => {
  // Navigation: Discussions vs Leaderboard vs My Activity
  const [activeForumTab, setActiveForumTab] = useState<'discussions' | 'leaderboard' | 'my_posts'>('discussions');

  // Discussions state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostCategory, setNewPostCategory] = useState<ForumPost['category']>('git');
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);
  const [commentInput, setCommentInput] = useState('');
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);

  // Leaderboard state
  const [leaderboardFilter, setLeaderboardFilter] = useState<'all' | 'streak' | 'xp'>('all');
  const [leaderboardSearch, setLeaderboardSearch] = useState('');

  // Compute live leaderboard
  const leaderboard = useMemo(() => {
    return leaderboardService.getLeaderboard(user);
  }, [user, user?.points, user?.xp, user?.streakDays]);

  // Create quick lookup for student leaderboard metadata
  const peerRankMap = useMemo(() => {
    const map = new Map<string, LeaderboardEntry>();
    leaderboard.forEach((entry) => {
      map.set(entry.studentId, entry);
      map.set(entry.name.toLowerCase(), entry);
      map.set(entry.username.toLowerCase(), entry);
    });
    return map;
  }, [leaderboard]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (activeForumTab === 'my_posts' && user) {
        if (post.authorId !== user.id && post.authorName !== user.name) return false;
      }
      const matchesCat = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.authorName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery, activeForumTab, user]);

  const filteredLeaderboard = useMemo(() => {
    let list = [...leaderboard];
    if (leaderboardFilter === 'streak') {
      list.sort((a, b) => b.streakDays - a.streakDays);
    } else if (leaderboardFilter === 'xp') {
      list.sort((a, b) => b.level - a.level || b.points - a.points);
    } else {
      list.sort((a, b) => b.points - a.points);
    }

    // Assign ranking based on active sort
    list = list.map((item, idx) => ({ ...item, rank: idx + 1 }));

    if (leaderboardSearch.trim()) {
      const q = leaderboardSearch.toLowerCase();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.username.toLowerCase().includes(q)
      );
    }
    return list;
  }, [leaderboard, leaderboardFilter, leaderboardSearch]);

  const currentUserEntry = useMemo(() => {
    return leaderboard.find((entry) => entry.isCurrentUser);
  }, [leaderboard]);

  const topThree = useMemo(() => {
    return leaderboard.slice(0, 3);
  }, [leaderboard]);

  const totalLikes = useMemo(() => {
    return posts.reduce((acc, p) => acc + (p.likesCount || 0), 0);
  }, [posts]);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    activityTracker.recordActivity('FORUM', 'FORUM_INTERACTION', undefined, { action: 'create_post' });
    onCreatePost(newPostTitle, newPostContent, newPostCategory);
    setNewPostTitle('');
    setNewPostContent('');
    setShowNewPostModal(false);
  };

  const handleCommentSubmit = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    activityTracker.recordActivity('FORUM', 'FORUM_INTERACTION', postId, { action: 'create_comment' });
    onCreateComment(postId, commentInput);
    setCommentInput('');
  };

  const handleSharePost = (postId: string) => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedPostId(postId);
    setTimeout(() => setCopiedPostId(null), 2000);
  };

  const getAuthorRankBadge = (authorName: string, authorId?: string) => {
    const entry = (authorId && peerRankMap.get(authorId)) || peerRankMap.get(authorName.toLowerCase());
    if (!entry) return null;

    if (entry.rank === 1) {
      return (
        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold">
          <Crown className="h-3 w-3 text-amber-400" />
          <span>#1 Champ</span>
        </span>
      );
    }
    if (entry.rank <= 3) {
      return (
        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-slate-400/20 text-slate-200 border border-slate-400/30 text-[10px] font-mono font-bold">
          <Medal className="h-3 w-3 text-slate-300" />
          <span>Top {entry.rank}</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-mono font-semibold">
        <Zap className="h-2.5 w-2.5" />
        <span>Lv.{entry.level}</span>
      </span>
    );
  };

  return (
    <div className="space-y-6 pb-24 animate-fade-in text-[var(--text)]">
      {/* Dynamic Community Hero & Stats Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[#131826] via-[#101420] to-[#0d101a] p-6 sm:p-7 shadow-xl">
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Users className="h-4 w-4" />
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Academy Arena & Discussions
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[10px] font-mono font-bold flex items-center gap-1">
                  <Trophy className="h-3 w-3" />
                  Live Sync
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Curious Learners Community
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl font-normal leading-relaxed">
                Connect with fellow developers, debug command errors, share production repositories, and compete for verified leaderboard ranks.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0">
              {user ? (
                <button
                  onClick={() => setShowNewPostModal(true)}
                  className="px-4 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
                >
                  <Plus className="h-4 w-4 stroke-[2.5]" />
                  <span>{t.createPost[language]}</span>
                </button>
              ) : (
                <button
                  onClick={onOpenAuth}
                  className="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <Lock className="h-3.5 w-3.5 stroke-[2.5]" />
                  <span>Sign In to Post</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Stat Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-800/80">
            <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div>
                <div className="text-base font-black text-white">{posts.length}</div>
                <div className="text-[10px] font-mono text-slate-400">Total Discussions</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Trophy className="h-4 w-4" />
              </div>
              <div>
                <div className="text-base font-black text-amber-400">{leaderboard.length}</div>
                <div className="text-[10px] font-mono text-slate-400">Ranked Peers</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <Heart className="h-4 w-4" />
              </div>
              <div>
                <div className="text-base font-black text-white">{totalLikes}</div>
                <div className="text-[10px] font-mono text-slate-400">Community Likes</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Crown className="h-4 w-4" />
              </div>
              <div className="truncate">
                <div className="text-base font-black text-cyan-300 truncate">
                  {topThree[0]?.name || 'Tanvir Hossain'}
                </div>
                <div className="text-[10px] font-mono text-slate-400">#1 Leader ({topThree[0]?.points || 340} pts)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Tab Navigation Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-1.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]">
        <div className="grid grid-cols-3 gap-1 w-full sm:w-auto">
          <button
            onClick={() => setActiveForumTab('discussions')}
            className={`py-2 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeForumTab === 'discussions'
                ? 'bg-[var(--bg-card)] text-[var(--text)] shadow-md border border-[var(--border)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text)]'
            }`}
          >
            <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
            <span>Discussions</span>
            <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-full bg-[var(--bg-elevated)] text-[10px] font-mono text-[var(--text-muted)]">
              {posts.length}
            </span>
          </button>

          <button
            onClick={() => setActiveForumTab('leaderboard')}
            className={`py-2 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeForumTab === 'leaderboard'
                ? 'bg-[var(--bg-card)] text-amber-400 shadow-md border border-amber-500/40'
                : 'text-[var(--text-muted)] hover:text-amber-400'
            }`}
          >
            <Trophy className="h-3.5 w-3.5 text-amber-400" />
            <span>Leaderboard</span>
            <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-full bg-amber-500/20 text-[10px] font-mono text-amber-400 font-bold">
              Arena
            </span>
          </button>

          <button
            onClick={() => {
              if (!user) {
                onOpenAuth();
                return;
              }
              setActiveForumTab('my_posts');
            }}
            className={`py-2 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeForumTab === 'my_posts'
                ? 'bg-[var(--bg-card)] text-cyan-400 shadow-md border border-cyan-500/40'
                : 'text-[var(--text-muted)] hover:text-cyan-400'
            }`}
          >
            <Award className="h-3.5 w-3.5 text-cyan-400" />
            <span>My Activity</span>
          </button>
        </div>

        {/* Current User Standing Pill */}
        {currentUserEntry && (
          <div className="flex items-center justify-between sm:justify-end gap-2 px-3 py-1 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[11px] font-mono">
            <span className="text-[var(--text-muted)]">Your Rank:</span>
            <span className="font-extrabold text-amber-400">#{currentUserEntry.rank}</span>
            <span className="text-[var(--text-muted)]">·</span>
            <span className="text-cyan-400 font-bold">Lv.{currentUserEntry.level}</span>
            <span className="text-[var(--text-muted)]">·</span>
            <span className="text-amber-400 font-bold">{currentUserEntry.points} pts</span>
          </div>
        )}
      </div>

      {/* Guest Read-Only Notice */}
      {!user && (activeForumTab === 'discussions' || activeForumTab === 'my_posts') && (
        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-medium flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 shrink-0 text-amber-400" />
            <span>{t.forumGuestNotice[language]}</span>
          </div>
          {onOpenAuth && (
            <button
              onClick={onOpenAuth}
              className="px-3 py-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-[11px] shrink-0 transition-colors cursor-pointer"
            >
              Sign In
            </button>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: DISCUSSIONS & MY POSTS FEED */}
      {/* ========================================================================= */}
      {(activeForumTab === 'discussions' || activeForumTab === 'my_posts') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Left: Post Filters & Stream (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Category Filter Chips & Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                {[
                  { id: 'all', label: t.categoryAll[language], icon: Compass },
                  { id: 'git', label: t.categoryGit[language], icon: Terminal },
                  { id: 'help', label: t.categoryHelp[language], icon: HelpCircle },
                  { id: 'projects', label: t.categoryProjects[language], icon: Code2 }
                ].map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'bg-[var(--primary)] text-white shadow-md'
                          : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
                      }`}
                    >
                      <Icon className="h-3 w-3" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="relative shrink-0">
                <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[var(--text-muted)]" />
                <input
                  type="text"
                  placeholder="Search discussions & authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-56 pl-9 pr-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-xs text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
                />
              </div>
            </div>

            {/* Discussions Stream */}
            <div className="space-y-4">
              {filteredPosts.length === 0 ? (
                <div className="p-12 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] text-center space-y-3">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-slate-800/60 border border-slate-700 flex items-center justify-center text-slate-400">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text)]">No discussions found</h3>
                  <p className="text-xs text-[var(--text-muted)] max-w-sm mx-auto">
                    {searchQuery
                      ? 'No threads matched your search query. Try other keywords.'
                      : 'Be the first to share a question or code insight in this category!'}
                  </p>
                  {user && (
                    <button
                      onClick={() => setShowNewPostModal(true)}
                      className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white font-mono font-bold text-xs hover:opacity-90 transition-opacity inline-flex items-center gap-2 cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Start New Discussion</span>
                    </button>
                  )}
                </div>
              ) : (
                filteredPosts.map((post) => {
                  const isLiked = user ? post.likedBy.includes(user.id) : false;
                  const rankBadge = getAuthorRankBadge(post.authorName, post.authorId);

                  return (
                    <div
                      key={post.id}
                      className="group rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 sm:p-6 shadow-sm space-y-3.5 transition-all hover:border-[var(--border-hover)] hover:shadow-md"
                    >
                      {/* Author Info & Category Bar */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img
                              src={post.authorAvatar}
                              alt={post.authorName}
                              className="h-9 w-9 rounded-full object-cover border border-[var(--border)] ring-2 ring-slate-800"
                            />
                            {rankBadge && (
                              <span className="absolute -bottom-1 -right-1 flex">
                                <Sparkles className="h-3 w-3 text-amber-400 fill-amber-400" />
                              </span>
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-bold text-xs text-[var(--text)]">{post.authorName}</h4>
                              {rankBadge}
                            </div>
                            <span className="text-[10px] text-[var(--text-muted)] font-mono">
                              {new Date(post.createdAt).toLocaleDateString(undefined, {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>

                      {/* Post Title & Content */}
                      <div className="space-y-1.5">
                        <h2 className="text-base font-extrabold text-[var(--text)] group-hover:text-emerald-400 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed whitespace-pre-wrap font-normal">
                          {post.content}
                        </p>
                      </div>

                      {/* Like, Reply, & Share Footer */}
                      <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              if (!user) {
                                onOpenAuth();
                                return;
                              }
                              onLikePost(post.id);
                            }}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              isLiked
                                ? 'bg-rose-500/10 border-rose-500/30 text-rose-500'
                                : 'bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:text-rose-400'
                            }`}
                          >
                            <Heart className={`h-3.5 w-3.5 ${isLiked ? 'fill-rose-500' : ''}`} />
                            <span>{post.likesCount}</span>
                          </button>

                          <button
                            onClick={() =>
                              setActiveCommentPostId(activeCommentPostId === post.id ? null : post.id)
                            }
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              activeCommentPostId === post.id
                                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                                : 'bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:text-emerald-400'
                            }`}
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                            <span>{post.comments.length} Comments</span>
                          </button>
                        </div>

                        <button
                          onClick={() => handleSharePost(post.id)}
                          title="Share Discussion Link"
                          className="p-2 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-pointer text-xs flex items-center gap-1 font-mono"
                        >
                          <Share2 className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">
                            {copiedPostId === post.id ? 'Copied!' : 'Share'}
                          </span>
                        </button>
                      </div>

                      {/* Comments Accordion */}
                      {activeCommentPostId === post.id && (
                        <div className="pt-3 border-t border-[var(--border)] space-y-3 bg-[var(--bg-elevated)]/60 p-4 rounded-2xl animate-fade-in">
                          <div className="flex items-center justify-between text-xs font-bold text-[var(--text)]">
                            <span className="flex items-center gap-1.5">
                              <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                              Thread Responses ({post.comments.length})
                            </span>
                          </div>

                          <div className="space-y-2.5">
                            {post.comments.length === 0 ? (
                              <p className="text-xs text-[var(--text-muted)] italic py-2">
                                No comments yet. Be the first to answer!
                              </p>
                            ) : (
                              post.comments.map((comment) => (
                                <div
                                  key={comment.id}
                                  className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] space-y-1.5"
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <span className="font-bold text-xs text-[var(--text)]">
                                        {comment.authorName}
                                      </span>
                                      {getAuthorRankBadge(comment.authorName)}
                                    </div>
                                    <span className="text-[10px] text-[var(--text-muted)] font-mono">
                                      {new Date(comment.createdAt).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                      })}
                                    </span>
                                  </div>
                                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                                    {comment.content}
                                  </p>
                                </div>
                              ))
                            )}
                          </div>

                          {/* Submit Comment Input */}
                          {user ? (
                            <form
                              onSubmit={(e) => handleCommentSubmit(post.id, e)}
                              className="flex items-center gap-2 pt-2"
                            >
                              <input
                                type="text"
                                placeholder={t.addComment[language]}
                                value={commentInput}
                                onChange={(e) => setCommentInput(e.target.value)}
                                className="w-full p-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-xs text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] font-medium"
                              />
                              <button
                                type="submit"
                                className="px-3.5 py-2.5 rounded-xl bg-[var(--primary)] text-white font-bold text-xs hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer shrink-0"
                              >
                                <Send className="h-3.5 w-3.5" />
                                <span>Send</span>
                              </button>
                            </form>
                          ) : (
                            <div className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-center text-xs text-[var(--text-muted)]">
                              <span>Sign in to join the conversation and reply.</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Sidebar: Quick Leaderboard Spotlight (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Top Ranked Card */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xs text-[var(--text)]">Top Ranked Peers</h3>
                    <p className="text-[10px] text-[var(--text-muted)] font-mono">Performance Points Arena</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveForumTab('leaderboard')}
                  className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-0.5 transition-colors cursor-pointer"
                >
                  <span>Full Table</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Top 5 list items */}
              <div className="space-y-2">
                {leaderboard.slice(0, 5).map((entry) => (
                  <div
                    key={entry.studentId}
                    className={`p-2.5 rounded-2xl border flex items-center justify-between text-xs font-mono transition-all ${
                      entry.isCurrentUser
                        ? 'border-amber-500/40 bg-amber-500/10 ring-1 ring-amber-500/30'
                        : 'border-[var(--border)] bg-[var(--bg-elevated)] hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`h-6 w-6 rounded-lg font-black flex items-center justify-center text-[10px] shrink-0 ${
                          entry.rank === 1
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                            : entry.rank === 2
                            ? 'bg-slate-400/20 text-slate-200 border border-slate-400/50'
                            : entry.rank === 3
                            ? 'bg-amber-700/20 text-amber-400 border border-amber-700/50'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        #{entry.rank}
                      </div>

                      <div className="flex items-center gap-2 truncate">
                        {entry.avatar ? (
                          <img
                            src={entry.avatar}
                            alt={entry.name}
                            className="h-6 w-6 rounded-full object-cover border border-[var(--border)] shrink-0"
                          />
                        ) : (
                          <div className="h-6 w-6 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                            {entry.name.charAt(0)}
                          </div>
                        )}
                        <span className="font-bold text-xs text-[var(--text)] truncate">
                          {entry.name}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0 pl-2">
                      <span className="text-amber-400 font-bold text-xs">{entry.points} 🏆</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveForumTab('leaderboard')}
                className="w-full py-2.5 rounded-2xl bg-[var(--bg-elevated)] hover:bg-[var(--border)] border border-[var(--border)] text-xs font-mono font-bold text-[var(--text)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Award className="h-3.5 w-3.5 text-amber-400" />
                <span>View Full Leaderboard Arena</span>
              </button>
            </div>

            {/* Community Guidelines Card */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 space-y-3 text-xs">
              <h4 className="font-extrabold text-[var(--text)] flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Community Guidelines</span>
              </h4>
              <ul className="space-y-1.5 text-[var(--text-muted)] text-[11px] leading-relaxed">
                <li>• Share formatted Git logs and terminal errors clearly.</li>
                <li>• Upvote helpful answers from top ranked learners.</li>
                <li>• Earn performance points by passing weekly chapter drills.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: FULL LEADERBOARD ARENA */}
      {/* ========================================================================= */}
      {activeForumTab === 'leaderboard' && (
        <div className="space-y-6">
          {/* Top 3 Champion Podium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {/* 2nd Place (Silver) */}
            {topThree[1] && (
              <div className="order-2 md:order-1 rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-800/40 via-[#121622] to-[#0f121d] p-5 text-center space-y-3 relative overflow-hidden shadow-lg">
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-slate-500/10 blur-xl"></div>
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-2xl bg-slate-500/20 text-slate-200 border border-slate-400/40 font-mono font-bold text-xs">
                  <Medal className="h-4 w-4 mr-1 text-slate-300" />
                  <span>2ND PLACE</span>
                </div>

                <div className="relative mx-auto w-16 h-16">
                  {topThree[1].avatar ? (
                    <img
                      src={topThree[1].avatar}
                      alt={topThree[1].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-slate-400 shadow-md ring-2 ring-slate-400/20"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-xl">
                      {topThree[1].name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="space-y-0.5">
                  <h3 className="font-extrabold text-sm text-white truncate">
                    {topThree[1].name} {topThree[1].isCurrentUser && <span className="text-cyan-400">(You)</span>}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    @{topThree[1].username} · Level {topThree[1].level}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-center gap-3 font-mono text-xs border-t border-slate-800">
                  <span className="text-amber-400 font-black">{topThree[1].points} 🏆 Points</span>
                  <span className="text-rose-400 font-bold flex items-center gap-1">
                    <Flame className="h-3.5 w-3.5" />
                    <span>{topThree[1].streakDays}d Streak</span>
                  </span>
                </div>
              </div>
            )}

            {/* 1st Place (Gold Champion) */}
            {topThree[0] && (
              <div className="order-1 md:order-2 rounded-3xl border-2 border-amber-500/60 bg-gradient-to-b from-amber-500/20 via-[#161a29] to-[#121622] p-6 text-center space-y-4 relative overflow-hidden shadow-2xl scale-100 md:-translate-y-2">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-amber-500/20 blur-2xl"></div>
                <div className="inline-flex items-center justify-center px-3.5 py-1 rounded-2xl bg-amber-500/30 text-amber-300 border border-amber-500/60 font-mono font-black text-xs shadow-sm">
                  <Crown className="h-4 w-4 mr-1.5 text-amber-400 animate-bounce" />
                  <span>ACADEMY CHAMPION #1</span>
                </div>

                <div className="relative mx-auto w-20 h-20">
                  {topThree[0].avatar ? (
                    <img
                      src={topThree[0].avatar}
                      alt={topThree[0].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-amber-400 shadow-xl ring-4 ring-amber-500/30"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black text-2xl">
                      {topThree[0].name.charAt(0)}
                    </div>
                  )}
                  <span className="absolute -bottom-1 -right-1 p-1 bg-amber-500 text-slate-950 rounded-full shadow-md">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="font-black text-base text-white truncate">
                    {topThree[0].name} {topThree[0].isCurrentUser && <span className="text-amber-400">(You)</span>}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    @{topThree[0].username} · Level {topThree[0].level} Master
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-center gap-4 font-mono text-sm border-t border-amber-500/30">
                  <span className="text-amber-300 font-black text-base">{topThree[0].points} 🏆 Points</span>
                  <span className="text-rose-400 font-bold flex items-center gap-1 text-xs">
                    <Flame className="h-4 w-4" />
                    <span>{topThree[0].streakDays}d Streak</span>
                  </span>
                </div>
              </div>
            )}

            {/* 3rd Place (Bronze) */}
            {topThree[2] && (
              <div className="order-3 md:order-3 rounded-3xl border border-amber-800/40 bg-gradient-to-b from-amber-900/20 via-[#121622] to-[#0f121d] p-5 text-center space-y-3 relative overflow-hidden shadow-lg">
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-amber-700/10 blur-xl"></div>
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-2xl bg-amber-700/20 text-amber-400 border border-amber-700/40 font-mono font-bold text-xs">
                  <Medal className="h-4 w-4 mr-1 text-amber-500" />
                  <span>3RD PLACE</span>
                </div>

                <div className="relative mx-auto w-16 h-16">
                  {topThree[2].avatar ? (
                    <img
                      src={topThree[2].avatar}
                      alt={topThree[2].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-600 shadow-md ring-2 ring-amber-600/20"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-amber-800 text-amber-200 flex items-center justify-center font-bold text-xl">
                      {topThree[2].name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="space-y-0.5">
                  <h3 className="font-extrabold text-sm text-white truncate">
                    {topThree[2].name} {topThree[2].isCurrentUser && <span className="text-cyan-400">(You)</span>}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    @{topThree[2].username} · Level {topThree[2].level}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-center gap-3 font-mono text-xs border-t border-slate-800">
                  <span className="text-amber-400 font-black">{topThree[2].points} 🏆 Points</span>
                  <span className="text-rose-400 font-bold flex items-center gap-1">
                    <Flame className="h-3.5 w-3.5" />
                    <span>{topThree[2].streakDays}d Streak</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Controls Bar: Sort Categories & Instant Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              <button
                onClick={() => setLeaderboardFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  leaderboardFilter === 'all'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                🏆 Points Standing
              </button>
              <button
                onClick={() => setLeaderboardFilter('streak')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  leaderboardFilter === 'streak'
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                🔥 Daily Streaks
              </button>
              <button
                onClick={() => setLeaderboardFilter('xp')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  leaderboardFilter === 'xp'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                ⭐ Experience Level
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="Search ranked peer..."
                value={leaderboardSearch}
                onChange={(e) => setLeaderboardSearch(e.target.value)}
                className="w-full sm:w-60 pl-9 pr-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-xs text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
            </div>
          </div>

          {/* Full Ranked Table */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--bg-elevated)]/70 text-[var(--text-muted)]">
                    <th className="py-3.5 px-4 font-bold">RANK</th>
                    <th className="py-3.5 px-4 font-bold">LEARNER</th>
                    <th className="py-3.5 px-4 font-bold text-center">XP LEVEL</th>
                    <th className="py-3.5 px-4 font-bold text-center">DAILY STREAK</th>
                    <th className="py-3.5 px-4 font-bold text-right">ACCURACY POINTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {filteredLeaderboard.map((entry) => {
                    return (
                      <tr
                        key={entry.studentId}
                        className={`transition-colors ${
                          entry.isCurrentUser
                            ? 'bg-amber-500/10 hover:bg-amber-500/15'
                            : 'hover:bg-[var(--bg-elevated)]'
                        }`}
                      >
                        {/* Rank */}
                        <td className="py-3.5 px-4">
                          <div
                            className={`h-7 w-7 rounded-xl font-black flex items-center justify-center text-xs ${
                              entry.rank === 1
                                ? 'bg-amber-500/30 text-amber-300 border border-amber-500/60'
                                : entry.rank === 2
                                ? 'bg-slate-400/20 text-slate-200 border border-slate-400/50'
                                : entry.rank === 3
                                ? 'bg-amber-700/20 text-amber-400 border border-amber-700/50'
                                : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border)]'
                            }`}
                          >
                            #{entry.rank}
                          </div>
                        </td>

                        {/* Learner Avatar & Name */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            {entry.avatar ? (
                              <img
                                src={entry.avatar}
                                alt={entry.name}
                                className="h-8 w-8 rounded-full object-cover border border-[var(--border)]"
                              />
                            ) : (
                              <div className="h-8 w-8 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-xs">
                                {entry.name.charAt(0)}
                              </div>
                            )}
                            <div>
                              <div className="flex items-center gap-1.5 font-bold text-xs text-[var(--text)]">
                                <span>{entry.name}</span>
                                {entry.isCurrentUser && (
                                  <span className="px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[10px] font-normal border border-amber-500/30">
                                    You
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-[var(--text-muted)]">
                                @{entry.username}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* XP Level */}
                        <td className="py-3.5 px-4 text-center">
                          <span className="px-2.5 py-1 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold inline-flex items-center gap-1">
                            <Zap className="h-3 w-3" />
                            <span>Lv.{entry.level}</span>
                          </span>
                        </td>

                        {/* Streak */}
                        <td className="py-3.5 px-4 text-center">
                          <span className="px-2.5 py-1 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold inline-flex items-center gap-1">
                            <Flame className="h-3 w-3" />
                            <span>{entry.streakDays}d</span>
                          </span>
                        </td>

                        {/* Performance Points */}
                        <td className="py-3.5 px-4 text-right">
                          <span className="text-amber-400 font-extrabold text-sm">
                            {entry.points} 🏆
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* New Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
              <h3 className="font-extrabold text-base text-[var(--text)] flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>{t.createPost[language]}</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowNewPostModal(false)}
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text)] font-mono cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <form onSubmit={handlePostSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[var(--text)] mb-1">Category</label>
                <select
                  value={newPostCategory}
                  onChange={(e) => setNewPostCategory(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs text-[var(--text)] font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="git">Git Drills & Commands</option>
                  <option value="help">Code & Terminal Debugging</option>
                  <option value="projects">Projects & Verification</option>
                  <option value="general">General Discussion</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text)] mb-1">
                  {t.postTitle[language]}
                </label>
                <input
                  type="text"
                  required
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  placeholder="e.g. How to undo git commit without losing staged changes?"
                  className="w-full p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text)] mb-1">
                  {t.postContent[language]}
                </label>
                <textarea
                  rows={4}
                  required
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="Describe the issue, paste relevant terminal logs or code snippets..."
                  className="w-full p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewPostModal(false)}
                  className="w-full py-2.5 rounded-xl border border-[var(--border)] text-[var(--text-muted)] font-bold text-xs hover:bg-[var(--bg-elevated)] cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[var(--primary)] text-white font-bold text-xs shadow-md hover:opacity-90 cursor-pointer transition-opacity"
                >
                  {t.submitPost[language]}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
