import React, { useState, useEffect } from 'react';
import { AppState, UserProfile, Language, ThemeMode, ForumPost, SyncMutation } from './types';
import {
  loadLocalUser,
  saveLocalUser,
  loadLocalLanguage,
  saveLocalLanguage,
  loadLocalTheme,
  saveLocalTheme,
  loadOnboardingStatus,
  saveOnboardingStatus,
  loadForumPosts,
  saveForumPosts,
  loadSyncQueue,
  saveSyncQueue
} from './services/storage';
import { queueMutation, startBackgroundSyncWorker } from './services/syncWorker';
import { updateActiveUserProfile, signOutUser } from './services/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { gemEconomy } from './services/gemEconomy';
import { recordStudyMinutes } from './services/analyticsService';
import { activityTracker, ActivitySurface } from './services/activityTracker';
import { sessionManager } from './services/sessionManager';
import { SessionContext, SessionSummary } from './types/learningSession';
import { SessionPlannerModal } from './components/learningSession/SessionPlannerModal';
import { ActiveSessionWidget } from './components/learningSession/ActiveSessionWidget';
import { SessionAlarmToast } from './components/learningSession/SessionAlarmToast';
import { SessionSummaryModal } from './components/learningSession/SessionSummaryModal';
import { CodeVisualizerModal } from './components/visualizer/CodeVisualizerModal';

import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { OnboardingModal } from './components/OnboardingModal';
import { AuthModal } from './components/AuthModal';
import { PWAInstallGuide } from './components/PWAInstallGuide';

import { HomePage, HomePageCachedData } from './pages/HomePage';
import { dailyGoalsEngine } from './services/dailyGoalsEngine';
import { progressionEngine } from './services/progressionEngine';
import { leaderboardService } from './services/leaderboardService';
import { editorCanvasStorage } from './services/editorCanvasStorage';
import { SyllabusPage } from './pages/SyllabusPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ForumPage } from './pages/ForumPage';
import { ProfilePage } from './pages/ProfilePage';
import { PromotionalPage } from './pages/PromotionalPage';
import { RootControlPage } from './pages/RootControlPage';
import { PublicCertificatePage } from './pages/PublicCertificatePage';

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(() => loadLocalUser());
  const [language, setLanguage] = useState<Language>(() => loadLocalLanguage());
  const [theme, setTheme] = useState<ThemeMode>(() => loadLocalTheme());
  const [activeTab, setActiveTab] = useState<'home' | 'syllabus' | 'projects' | 'forum' | 'profile'>('home');
  const [forumPosts, setForumPosts] = useState<ForumPost[]>(() => loadForumPosts());
  const [syncQueue, setSyncQueue] = useState<SyncMutation[]>(() => loadSyncQueue());
  const [isOnline, setIsOnline] = useState<boolean>(typeof navigator !== 'undefined' ? navigator.onLine : true);

  const [showOnboarding, setShowOnboarding] = useState<boolean>(() => !loadOnboardingStatus());
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);

  const [isPlannerOpen, setIsPlannerOpen] = useState<boolean>(false);
  const [plannerContext, setPlannerContext] = useState<SessionContext | undefined>(undefined);
  const [completedSummary, setCompletedSummary] = useState<SessionSummary | null>(null);

  const [isVisualizerOpen, setIsVisualizerOpen] = useState<boolean>(false);

  // Cached LocalStorage Data for Offline-First Immediate HomePage Rendering
  const cachedHomeData: HomePageCachedData = React.useMemo(() => {
    const userId = user?.id || 'guest';
    const completedCount = user?.completedLessonIds?.length || 0;
    return {
      dailyGoals: dailyGoalsEngine.getTodayGoals(userId, completedCount > 0 ? 1 : 0),
      xpProfile: progressionEngine.getXPProfile(userId, user?.xp || 3660),
      gemsBalance: user ? gemEconomy.getWallet(user.id).balance : 0,
      canvasSummary: editorCanvasStorage.getSummary(user?.id),
      leaderboard: leaderboardService.getLeaderboard(user),
      lastSyncedAt: new Date().toISOString()
    };
  }, [user]);

  // Firebase Auth State Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        try {
          const userRef = doc(db, 'users', fbUser.uid);
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            const fsProfile = docSnap.data() as UserProfile;
            setUser(fsProfile);
            saveLocalUser(fsProfile);
          }
        } catch (err) {
          console.warn('Firebase user sync error:', err);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const openSessionPlanner = (context?: SessionContext) => {
    setPlannerContext(context);
    setIsPlannerOpen(true);
  };

  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  // Listen to browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToRoute = (path: string, tab?: 'home' | 'syllabus' | 'projects' | 'forum' | 'profile') => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== path) {
        window.history.pushState({}, '', path);
      }
      setCurrentPath(path);
    }
    if (tab) {
      setActiveTab(tab);
    }
  };

  // Apply root theme CSS class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    saveLocalTheme(theme);
  }, [theme]);

  // Online / Offline listener
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Start Caveman background sync worker
    const stopWorker = startBackgroundSyncWorker(10000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      stopWorker();
    };
  }, []);

  // Sync state to LocalStorage
  useEffect(() => {
    saveLocalUser(user);
  }, [user]);

  useEffect(() => {
    saveLocalLanguage(language);
  }, [language]);

  useEffect(() => {
    saveForumPosts(forumPosts);
  }, [forumPosts]);

  // Connect WakaTime activity tracking student identity
  useEffect(() => {
    activityTracker.setStudent(user && user.provider !== 'guest' ? user.id : null);
  }, [user?.id, user?.provider]);

  // Connect WakaTime surface context when switching tabs
  useEffect(() => {
    const surfaceMap: Record<string, ActivitySurface> = {
      home: 'OTHER',
      syllabus: 'LESSON',
      projects: 'PROJECT',
      forum: 'FORUM',
      profile: 'OTHER'
    };
    activityTracker.setContext(surfaceMap[activeTab] || 'OTHER');
  }, [activeTab]);

  // Toggle Handlers
  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // User Actions (Mutates local state immediately, enqueues background sync)
  const handleCompleteLesson = (lessonId: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    if (user.completedLessonIds.includes(lessonId)) return;

    const updatedCompleted = [...user.completedLessonIds, lessonId];
    recordStudyMinutes(user.id, 30);
    activityTracker.recordActivity('LESSON', 'LESSON_COMPLETE', lessonId);
    const updatedUser = updateActiveUserProfile(user, {
      completedLessonIds: updatedCompleted,
      totalStudyMinutes: user.totalStudyMinutes + 30
    });

    setUser(updatedUser);

    // Queue mutation via Caveman Pattern
    queueMutation('COMPLETE_LESSON', { userId: user.id, lessonId });
    setSyncQueue(loadSyncQueue());
  };

  const handleIncrementCommitCount = () => {
    if (!user) return;

    activityTracker.recordActivity('TERMINAL', 'TERMINAL_COMMAND', undefined, { commandName: 'git commit' });

    const updatedUser = updateActiveUserProfile(user, {
      gitCommitsCount: user.gitCommitsCount + 1
    });

    setUser(updatedUser);
  };

  const handleSubmitTeacherVerification = (projectId: string, repoUrl: string, notes: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    activityTracker.recordActivity('PROJECT', 'PROJECT_SUBMIT', projectId);

    const updatedSubmitted = Array.from(new Set([...user.submittedVerificationIds, projectId]));
    const updatedUser = updateActiveUserProfile(user, {
      submittedVerificationIds: updatedSubmitted
    });

    setUser(updatedUser);

    queueMutation('SUBMIT_TEACHER_VERIFICATION', {
      userId: user.id,
      projectId,
      repoUrl,
      notes
    });
    setSyncQueue(loadSyncQueue());
  };

  const handleCreateForumPost = (
    title: string,
    content: string,
    category: ForumPost['category']
  ) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    const newPost: ForumPost = {
      id: `post-${Date.now()}`,
      authorId: user.id,
      authorName: user.name,
      authorAvatar: user.avatar,
      authorProvider: user.provider as 'google' | 'github',
      title,
      content,
      category,
      createdAt: new Date().toISOString(),
      likesCount: 0,
      likedBy: [],
      commentsCount: 0,
      comments: []
    };

    setForumPosts((prev) => [newPost, ...prev]);

    queueMutation('CREATE_FORUM_POST', newPost);
    setSyncQueue(loadSyncQueue());
  };

  const handleCreateForumComment = (postId: string, content: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    const newComment = {
      id: `comment-${Date.now()}`,
      postId,
      authorId: user.id,
      authorName: user.name,
      authorAvatar: user.avatar,
      content,
      createdAt: new Date().toISOString()
    };

    setForumPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            commentsCount: p.commentsCount + 1,
            comments: [...p.comments, newComment]
          };
        }
        return p;
      })
    );

    queueMutation('CREATE_FORUM_COMMENT', newComment);
    setSyncQueue(loadSyncQueue());
  };

  const handleLikePost = (postId: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    setForumPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const isLiked = p.likedBy.includes(user.id);
          const updatedLikedBy = isLiked
            ? p.likedBy.filter((id) => id !== user.id)
            : [...p.likedBy, user.id];

          return {
            ...p,
            likesCount: updatedLikedBy.length,
            likedBy: updatedLikedBy
          };
        }
        return p;
      })
    );

    queueMutation('LIKE_POST', { userId: user.id, postId });
    setSyncQueue(loadSyncQueue());
  };

  const handleUpdateUserProfile = (updates: Partial<UserProfile>) => {
    if (!user) return;
    const updated = updateActiveUserProfile(user, updates);
    setUser(updated);

    queueMutation('UPDATE_PROFILE', { userId: user.id, updates });
    setSyncQueue(loadSyncQueue());
  };

  const handleSignOut = () => {
    signOutUser();
    setUser(null);
  };

  const handleCloseOnboarding = () => {
    setShowOnboarding(false);
    saveOnboardingStatus(true);
  };

  // Render BootCamp Control Center if navigated to /root
  if (currentPath.startsWith('/root')) {
    return (
      <RootControlPage
        onNavigateHome={() => navigateToRoute('/')}
        onNavigateVerify={(certId) => navigateToRoute(`/verify/${certId}`)}
      />
    );
  }

  // Render Public Certificate Verification if navigated to /verify
  if (currentPath.startsWith('/verify')) {
    const certIdFromPath = currentPath.replace(/^\/verify\/?/, '').trim();
    return (
      <PublicCertificatePage
        certId={certIdFromPath || undefined}
        onNavigateHome={() => navigateToRoute('/')}
      />
    );
  }

  // Render Promotional Landing Page if navigated to /promotional
  if (currentPath === '/promotional' || currentPath === '/promotional/') {
    return (
      <PromotionalPage
        user={user}
        language={language}
        theme={theme}
        onToggleLanguage={handleToggleLanguage}
        onToggleTheme={handleToggleTheme}
        onNavigateToApp={(tab) => navigateToRoute('/', tab || 'syllabus')}
        onOpenAuth={() => {
          navigateToRoute('/');
          setShowAuthModal(true);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">
      {/* Top Header */}
      <Header
        language={language}
        theme={theme}
        user={user}
        onToggleLanguage={handleToggleLanguage}
        onToggleTheme={handleToggleTheme}
        isOnline={isOnline}
        pendingSyncCount={syncQueue.filter((q) => q.status === 'pending').length}
        onStartSession={() => openSessionPlanner()}
        onOpenGemsLedger={() => setActiveTab('profile')}
      />

      {/* Main Screen Container with Page Transition Animation */}
      <main className="max-w-4xl mx-auto px-4 pt-4">
        <div key={activeTab} className="animate-page-transition">
          {activeTab === 'home' && (
            <HomePage
              user={user}
              language={language}
              cachedData={cachedHomeData}
              onNavigateToSyllabus={() => setActiveTab('syllabus')}
              onNavigateToProjects={() => setActiveTab('projects')}
              onNavigateToForum={() => setActiveTab('forum')}
              onOpenOnboarding={() => setShowOnboarding(true)}
              onOpenAuth={() => setShowAuthModal(true)}
              onOpenVisualizer={() => setIsVisualizerOpen(true)}
              onUpdateUser={handleUpdateUserProfile}
              onStartSession={() => openSessionPlanner()}
            />
          )}

          {activeTab === 'syllabus' && (
            <SyllabusPage
              user={user}
              language={language}
              onCompleteLesson={handleCompleteLesson}
              onIncrementCommitCount={handleIncrementCommitCount}
              onStartSession={(ctx) => openSessionPlanner(ctx)}
              onOpenAuth={() => setShowAuthModal(true)}
            />
          )}

          {activeTab === 'projects' && (
            <ProjectsPage
              user={user}
              language={language}
              onSubmitVerification={handleSubmitTeacherVerification}
              onNavigateToSyllabus={() => setActiveTab('syllabus')}
              onOpenAuth={() => setShowAuthModal(true)}
            />
          )}

          {activeTab === 'forum' && (
            <ForumPage
              posts={forumPosts}
              user={user}
              language={language}
              onCreatePost={handleCreateForumPost}
              onCreateComment={handleCreateForumComment}
              onLikePost={handleLikePost}
              onOpenAuth={() => setShowAuthModal(true)}
            />
          )}

          {activeTab === 'profile' && (
            <ProfilePage
              user={user}
              language={language}
              onUpdateUser={handleUpdateUserProfile}
              onOpenAuth={() => setShowAuthModal(true)}
              onSignOut={handleSignOut}
              onNavigateToSyllabus={() => setActiveTab('syllabus')}
              onStartSession={() => openSessionPlanner()}
            />
          )}
        </div>
      </main>

      {/* 5-Tab Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        language={language}
        isLoggedIn={user !== null}
      />

      {/* Onboarding & PWA Install Splash */}
      <OnboardingModal
        isOpen={showOnboarding}
        onClose={handleCloseOnboarding}
        onStartLearning={() => {
          handleCloseOnboarding();
          setActiveTab('syllabus');
        }}
        language={language}
      />

      {/* Auth Login Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuthenticated={(loggedInUser) => {
          setUser(loggedInUser);
          gemEconomy.awardWelcomeBonus(loggedInUser.id);
        }}
        language={language}
      />

      {/* PWA Install Guide Popup */}
      <PWAInstallGuide />

      {/* Active Learning Session Floating Widget */}
      <ActiveSessionWidget />

      {/* In-App Alarm / Phase Transition Toast */}
      <SessionAlarmToast />

      {/* Custom Learning Session Planner Modal */}
      <SessionPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        initialContext={plannerContext}
        studentId={user?.id}
      />

      {/* Session Completed/Ended Summary Modal */}
      <SessionSummaryModal
        summary={completedSummary}
        onClose={() => setCompletedSummary(null)}
        onNavigateToHome={() => {
          setActiveTab('home');
          navigateToRoute('/');
        }}
      />

      {/* React Carbon-Style Code Visualizer Modal */}
      <CodeVisualizerModal
        isOpen={isVisualizerOpen}
        onClose={() => setIsVisualizerOpen(false)}
        studentId={user?.id}
      />
    </div>
  );
}
