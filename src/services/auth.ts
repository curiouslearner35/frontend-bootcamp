/**
 * Authentication Service
 * Handles Firebase Google sign-in, profile auto-population, customized credentials, and account switching
 */

import { UserProfile } from '../types';
import { saveLocalUser, loadLocalUser, profileStorage } from './storage';
import { gemEconomy } from './gemEconomy';
import { progressionEngine } from './progressionEngine';
import { auth, googleProvider, db } from './firebase';
import { signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export interface SignInOptions {
  name?: string;
  email?: string;
  username?: string;
  avatar?: string;
}

const KNOWN_ACCOUNTS_KEY = 'curious_learners_saved_accounts';

export function getSavedAccounts(): UserProfile[] {
  try {
    const raw = localStorage.getItem(KNOWN_ACCOUNTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveAccountToHistory(profile: UserProfile): void {
  try {
    const existing = getSavedAccounts().filter((acc) => acc.id !== profile.id && acc.email !== profile.email);
    existing.unshift(profile);
    const bounded = existing.slice(0, 5);
    localStorage.setItem(KNOWN_ACCOUNTS_KEY, JSON.stringify(bounded));
  } catch {
    // Ignore storage issues
  }
}

export function createDefaultProfile(
  provider: 'google' | 'github',
  emailNameHint?: string,
  options?: SignInOptions
): UserProfile {
  const isGithub = provider === 'github';

  let email = options?.email || (isGithub ? 'alex.chen.dev@github.com' : 'samira.rahaman@gmail.com');
  if (emailNameHint && emailNameHint.includes('@')) {
    email = emailNameHint;
  }

  // Derive username and name intelligently if email is provided
  const emailPrefix = email.includes('@') ? email.split('@')[0] : '';
  const formattedPrefixName = emailPrefix
    ? emailPrefix
        .replace(/[._-]/g, ' ')
        .split(' ')
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    : '';

  const name =
    options?.name ||
    (emailNameHint && !emailNameHint.includes('@') ? emailNameHint : null) ||
    formattedPrefixName ||
    (isGithub ? 'Alex Chen (GitHub Learner)' : 'Samira Rahaman (Google Learner)');

  const username =
    options?.username ||
    (emailPrefix ? emailPrefix.toLowerCase().replace(/[^a-z0-9_]/g, '_') : isGithub ? 'alexchen_dev' : 'samira_learner');

  // Avatar generation with fallback
  let avatar = options?.avatar;
  if (!avatar) {
    if (isGithub) {
      avatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250';
    } else {
      avatar = `https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250`;
    }
  }

  return {
    id: `user-${provider}-${Date.now()}`,
    name,
    email,
    username,
    avatar,
    provider,
    role: 'student',
    bio: isGithub
      ? 'Git enthusiast & open-source contributor learning full-stack web architecture.'
      : 'Curious learner building Git-first projects and interactive terminal tools.',
    joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    streakDays: 4,
    completedLessonIds: ['git-lesson-1'],
    verifiedProjectIds: [],
    submittedVerificationIds: [],
    skills: ['Git & Version Control', 'Terminal CLI', 'HTML5', 'JavaScript ES6'],
    gitCommitsCount: 18,
    totalStudyMinutes: 5220, // 87 Hours
    track: 'Frontend Track',
    xp: 3660
  };
}

export async function signInWithFirebaseGoogle(): Promise<UserProfile> {
  const result = await signInWithPopup(auth, googleProvider);
  const fbUser = result.user;

  let profile: UserProfile;

  try {
    const userRef = doc(db, 'users', fbUser.uid);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      profile = docSnap.data() as UserProfile;
    } else {
      profile = {
        id: fbUser.uid,
        name: fbUser.displayName || 'Google Learner',
        email: fbUser.email || 'learner@gmail.com',
        username: fbUser.email ? fbUser.email.split('@')[0] : `user_${fbUser.uid.slice(0, 8)}`,
        avatar: fbUser.photoURL || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250',
        provider: 'google',
        role: 'student',
        bio: 'Curious learner building Git-first projects and interactive terminal tools.',
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        streakDays: 1,
        completedLessonIds: [],
        verifiedProjectIds: [],
        submittedVerificationIds: [],
        skills: ['Git & Version Control', 'Terminal CLI', 'HTML5', 'JavaScript ES6'],
        gitCommitsCount: 0,
        totalStudyMinutes: 0,
        track: 'Frontend Track',
        xp: 100,
        gems: 20
      };

      const welcomeResult = gemEconomy.awardWelcomeBonus(profile.id);
      profile.gems = welcomeResult.wallet.balance;

      await setDoc(userRef, profile);
    }
  } catch (fsErr) {
    console.warn('Firestore profile sync warning, fallback to local storage profile:', fsErr);
    profile = createDefaultProfile('google', fbUser.email || undefined, {
      name: fbUser.displayName || undefined,
      email: fbUser.email || undefined,
      avatar: fbUser.photoURL || undefined
    });
    profile.id = fbUser.uid;
  }

  saveLocalUser(profile);
  profileStorage.setProfile(profile);
  saveAccountToHistory(profile);
  return profile;
}

export function signInWithProvider(
  provider: 'google' | 'github',
  options?: SignInOptions
): UserProfile {
  const profile = createDefaultProfile(provider, undefined, options);
  
  // Award 20 Gems Welcome Bonus idempotently on first login / account creation
  const welcomeResult = gemEconomy.awardWelcomeBonus(profile.id);
  const xpProfile = progressionEngine.getXPProfile(profile.id, profile.xp || 3660);
  const pointsProfile = progressionEngine.getPointProfile(profile.id, 150);

  profile.gems = welcomeResult.wallet.balance;
  profile.xp = xpProfile.totalXP;
  profile.level = xpProfile.currentLevel;
  profile.points = pointsProfile.totalPoints;

  saveLocalUser(profile);
  profileStorage.setProfile(profile);
  saveAccountToHistory(profile);
  return profile;
}

export async function signOutUser(): Promise<void> {
  try {
    await firebaseSignOut(auth);
  } catch (err) {
    console.warn('Firebase signOut warning:', err);
  }
  saveLocalUser(null);
  profileStorage.clearProfile();
}

export function getActiveUser(): UserProfile | null {
  return loadLocalUser();
}

export function updateActiveUserProfile(user: UserProfile, updates: Partial<UserProfile>): UserProfile {
  const updated = { ...user, ...updates };
  saveLocalUser(updated);
  profileStorage.updateProfile(updates);
  saveAccountToHistory(updated);

  // Sync to Firestore if signed in
  if (user.id && db) {
    const userRef = doc(db, 'users', user.id);
    setDoc(userRef, updated, { merge: true }).catch((err) => {
      console.warn('Failed to update Firestore profile:', err);
    });
  }

  return updated;
}


