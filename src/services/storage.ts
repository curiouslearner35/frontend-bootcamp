/**
 * Storage Service — Client-side LocalStorage & Cache Management
 * Implements Cache-First serving & Local State Persistence
 */

import { AppState, UserProfile, SyncMutation, ForumPost } from '../types';
import { INITIAL_FORUM_POSTS } from '../data/forumData';

const STORAGE_KEYS = {
  USER: 'curious_learners_user',
  LANGUAGE: 'curious_learners_lang',
  THEME: 'curious_learners_theme',
  ONBOARDING: 'curious_learners_onboarding',
  SYNC_QUEUE: 'curious_learners_sync_queue',
  FORUM_POSTS: 'curious_learners_forum_posts',
  COMPLETED_LESSONS: 'curious_learners_completed_lessons',
  VERIFIED_PROJECTS: 'curious_learners_verified_projects',
  SUBMITTED_VERIFICATIONS: 'curious_learners_submitted_verifications',
  CACHE_TIMESTAMP: 'curious_learners_cache_time'
};

const CACHE_TTL_MS = 1000 * 60 * 15; // 15 Minutes Cache TTL

export function loadLocalUser(): UserProfile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load local user state:', err);
    return null;
  }
}

export function saveLocalUser(user: UserProfile | null): void {
  try {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  } catch (err) {
    console.error('Failed to save local user state:', err);
  }
}

export interface ProfileMeta {
  version: number;
  updatedAt: string;
  lastSyncedAt: string;
  source: 'local' | 'synced';
}

export const profileStorage = {
  getProfile(): UserProfile | null {
    return loadLocalUser();
  },
  setProfile(user: UserProfile | null): void {
    saveLocalUser(user);
    if (user) {
      const meta: ProfileMeta = {
        version: 1,
        updatedAt: new Date().toISOString(),
        lastSyncedAt: new Date().toISOString(),
        source: 'local'
      };
      localStorage.setItem('codazi:profile_meta', JSON.stringify(meta));
    } else {
      localStorage.removeItem('codazi:profile_meta');
    }
  },
  updateProfile(updates: Partial<UserProfile>): UserProfile | null {
    const current = loadLocalUser();
    if (!current) return null;
    const updated = { ...current, ...updates };
    this.setProfile(updated);
    return updated;
  },
  clearProfile(): void {
    this.setProfile(null);
  },
  getProfileMeta(): ProfileMeta | null {
    try {
      const raw = localStorage.getItem('codazi:profile_meta');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
};

export function loadLocalLanguage(): 'en' | 'bn' {
  const lang = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
  return (lang === 'bn' ? 'bn' : 'en');
}

export function saveLocalLanguage(lang: 'en' | 'bn'): void {
  localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
}

export function loadLocalTheme(): 'light' | 'dark' {
  const theme = localStorage.getItem(STORAGE_KEYS.THEME);
  return (theme === 'light' ? 'light' : 'dark');
}

export function saveLocalTheme(theme: 'light' | 'dark'): void {
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
}

export function loadOnboardingStatus(): boolean {
  return localStorage.getItem(STORAGE_KEYS.ONBOARDING) === 'true';
}

export function saveOnboardingStatus(completed: boolean): void {
  localStorage.setItem(STORAGE_KEYS.ONBOARDING, completed ? 'true' : 'false');
}

export function loadSyncQueue(): SyncMutation[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SYNC_QUEUE);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to load sync queue:', err);
    return [];
  }
}

export function saveSyncQueue(queue: SyncMutation[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SYNC_QUEUE, JSON.stringify(queue));
  } catch (err) {
    console.error('Failed to save sync queue:', err);
  }
}

export function loadForumPosts(): ForumPost[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FORUM_POSTS);
    if (!raw) return INITIAL_FORUM_POSTS;
    return JSON.parse(raw);
  } catch (err) {
    return INITIAL_FORUM_POSTS;
  }
}

export function saveForumPosts(posts: ForumPost[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.FORUM_POSTS, JSON.stringify(posts));
  } catch (err) {
    console.error('Failed to save forum posts:', err);
  }
}

export function isCacheValid(): boolean {
  const timeRaw = localStorage.getItem(STORAGE_KEYS.CACHE_TIMESTAMP);
  if (!timeRaw) return false;
  const elapsed = Date.now() - parseInt(timeRaw, 10);
  return elapsed < CACHE_TTL_MS;
}

export function updateCacheTimestamp(): void {
  localStorage.setItem(STORAGE_KEYS.CACHE_TIMESTAMP, Date.now().toString());
}
