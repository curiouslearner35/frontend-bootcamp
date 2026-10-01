/**
 * GitHub Profile Sync Service
 * Fetches public GitHub user profiles, validates data, and persists locally
 */

export interface GitHubSyncedProfile {
  username: string;
  name: string;
  avatarUrl: string;
  bio: string;
  profileUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
  syncedAt: string;
}

export interface GitHubCommitEvent {
  date: string; // YYYY-MM-DD
  count: number;
  repoName?: string;
}

const STORAGE_KEY = 'codazi:github_sync_profile';
const EVENTS_CACHE_PREFIX = 'codazi:github_events_';
const EVENTS_CACHE_TTL_MS = 1000 * 60 * 15; // 15 minutes TTL

export async function fetchAndSyncGitHubProfile(username: string): Promise<GitHubSyncedProfile> {
  const cleanUsername = username.trim().replace(/^@/, '').replace(/^https?:\/\/github\.com\//, '');
  if (!cleanUsername) {
    throw new Error('Please enter a valid GitHub username.');
  }

  const response = await fetch(`https://api.github.com/users/${encodeURIComponent(cleanUsername)}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`GitHub user "${cleanUsername}" not found.`);
    }
    if (response.status === 403) {
      throw new Error('GitHub API rate limit reached. Please try again later.');
    }
    throw new Error(`Failed to sync GitHub profile (HTTP ${response.status}).`);
  }

  const data = await response.json();

  const syncedProfile: GitHubSyncedProfile = {
    username: data.login || cleanUsername,
    name: data.name || data.login || cleanUsername,
    avatarUrl: data.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    bio: data.bio || 'Public GitHub Developer Profile',
    profileUrl: data.html_url || `https://github.com/${cleanUsername}`,
    publicRepos: typeof data.public_repos === 'number' ? data.public_repos : 0,
    followers: typeof data.followers === 'number' ? data.followers : 0,
    following: typeof data.following === 'number' ? data.following : 0,
    syncedAt: new Date().toISOString()
  };

  saveSyncedGitHubProfile(syncedProfile);
  return syncedProfile;
}

export function saveSyncedGitHubProfile(profile: GitHubSyncedProfile | null): void {
  try {
    if (profile) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (err) {
    console.error('Failed to save GitHub synced profile to localStorage:', err);
  }
}

export function getSyncedGitHubProfile(): GitHubSyncedProfile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function fetchGitHubCommitActivity(username: string): Promise<GitHubCommitEvent[]> {
  const cleanUsername = username.trim().replace(/^@/, '').replace(/^https?:\/\/github\.com\//, '');
  if (!cleanUsername) return [];

  const cacheKey = `${EVENTS_CACHE_PREFIX}${cleanUsername}`;
  try {
    const cachedRaw = localStorage.getItem(cacheKey);
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      if (Date.now() - cached.timestamp < EVENTS_CACHE_TTL_MS && Array.isArray(cached.data)) {
        return cached.data;
      }
    }
  } catch {
    // Ignore cache parse error
  }

  const response = await fetch(`https://api.github.com/users/${encodeURIComponent(cleanUsername)}/events/public?per_page=100`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  if (!response.ok) {
    // If rate limited or error, fall back to cached data if exists
    try {
      const cachedRaw = localStorage.getItem(cacheKey);
      if (cachedRaw) {
        const cached = JSON.parse(cachedRaw);
        if (Array.isArray(cached.data)) return cached.data;
      }
    } catch {}

    if (response.status === 403) {
      throw new Error('GitHub API rate limit reached. Please try again later.');
    }
    throw new Error(`Failed to fetch GitHub activity (HTTP ${response.status}).`);
  }

  const events = await response.json();
  if (!Array.isArray(events)) return [];

  // Group PushEvent commits by date (YYYY-MM-DD)
  const dateMap: Record<string, { count: number; repoName?: string }> = {};

  for (const ev of events) {
    if (ev.type === 'PushEvent' && ev.created_at) {
      const date = ev.created_at.slice(0, 10);
      const commitCount = ev.payload?.commits?.length || ev.payload?.size || 1;
      const repoName = ev.repo?.name;

      if (!dateMap[date]) {
        dateMap[date] = { count: 0, repoName };
      }
      dateMap[date].count += commitCount;
    }
  }

  const result: GitHubCommitEvent[] = Object.entries(dateMap)
    .map(([date, val]) => ({
      date,
      count: val.count,
      repoName: val.repoName
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  try {
    localStorage.setItem(cacheKey, JSON.stringify({
      timestamp: Date.now(),
      data: result
    }));
  } catch {}

  return result;
}

/**
 * Check authoritative GitHub OAuth connection state from backend API
 */
export async function getGitHubConnectionStatus(): Promise<{
  status: 'GITHUB_NOT_CONNECTED' | 'CONNECTED' | 'AUTHORIZATION_EXPIRED' | 'AUTHORIZATION_REVOKED' | 'INSUFFICIENT_PERMISSIONS' | 'RATE_LIMITED';
  githubUsername?: string;
  githubUserId?: number;
  scopes?: string[];
  connectedAt?: string;
  lastVerifiedAt?: string;
}> {
  try {
    const response = await fetch('/api/github/connection');
    if (response.ok) {
      return await response.json();
    }
    return { status: 'GITHUB_NOT_CONNECTED' };
  } catch {
    return { status: 'GITHUB_NOT_CONNECTED' };
  }
}

/**
 * Start GitHub OAuth authorization flow
 */
export async function startGitHubAuth(redirectPath: string = '/'): Promise<{ authorizationUrl?: string; error?: string }> {
  try {
    const response = await fetch(`/api/github/auth/start?redirect=${encodeURIComponent(redirectPath)}`);
    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      return { error: errData.message || 'Failed to initialize GitHub OAuth flow' };
    }
    const data = await response.json();
    return { authorizationUrl: data.authorizationUrl };
  } catch (err: any) {
    return { error: err.message || 'Network error starting GitHub authorization' };
  }
}

/**
 * Disconnect GitHub OAuth link
 */
export async function disconnectGitHub(): Promise<boolean> {
  try {
    const response = await fetch('/api/github/disconnect', { method: 'POST' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Verify / re-validate active GitHub connection
 */
export async function verifyGitHubConnection(): Promise<boolean> {
  try {
    const response = await fetch('/api/github/connection/verify', { method: 'POST' });
    if (response.ok) {
      const data = await response.json();
      return data.status === 'CONNECTED';
    }
    return false;
  } catch {
    return false;
  }
}

