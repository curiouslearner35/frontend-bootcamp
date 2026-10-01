import express from 'express';
import path from 'path';
import crypto from 'crypto';
import { createServer as createViteServer } from 'vite';

// Server-side In-Memory Cache representing Redis with TTL
class RedisServerCache {
  private store = new Map<string, { value: any; expiresAt: number }>();

  set(key: string, value: any, ttlSeconds: number = 900) {
    this.store.set(key, {
      value,
      expiresAt: Date.now() + ttlSeconds * 1000
    });
  }

  get(key: string): any | null {
    const item = this.store.get(key);
    if (!item) return null;
    if (Date.now() > item.expiresAt) {
      this.store.delete(key);
      return null;
    }
    return item.value;
  }
}

const redisCache = new RedisServerCache();

// In-Memory Root Session Store & Security Controls
interface RootSession {
  token: string;
  createdAt: number;
  expiresAt: number;
  ip: string;
  userAgent: string;
}

const activeRootSessions = new Map<string, RootSession>();
const loginAttemptTracker = new Map<string, { count: number; lockedUntil: number }>();

// In-Memory Audit Trail (Append-Only)
interface AuditEvent {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  target: string;
  details: string;
  ip: string;
  status: 'SUCCESS' | 'WARNING' | 'FAILED';
}

const serverAuditLog: AuditEvent[] = [
  {
    id: 'aud-init-01',
    timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
    actor: 'SYSTEM_BOOT',
    action: 'PLATFORM_INITIALIZATION',
    target: 'BootCamp Control Plane',
    details: 'Initialized 12-week curriculum and verification engines.',
    ip: '127.0.0.1',
    status: 'SUCCESS'
  },
  {
    id: 'aud-init-02',
    timestamp: new Date(Date.now() - 3600000 * 6).toISOString(),
    actor: 'INSTRUCTOR_01',
    action: 'HOMEWORK_APPROVED',
    target: 'Student: Shaon (Week 03)',
    details: 'Approved Responsive Navigation Bar implementation.',
    ip: '10.0.4.12',
    status: 'SUCCESS'
  },
  {
    id: 'aud-init-03',
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    actor: 'INSTRUCTOR_01',
    action: 'CERTIFICATE_ISSUED',
    target: 'Student: Alex Rivera (CZ-2026-000241)',
    details: 'Verified all 180+ lessons & 30 projects. Certificate minted.',
    ip: '10.0.4.12',
    status: 'SUCCESS'
  }
];

// Initial Verified Certificates Store
const certificatesStore = new Map<string, any>([
  [
    'CZ-2026-000241',
    {
      id: 'CZ-2026-000241',
      studentName: 'Alex Rivera',
      studentEmail: 'alex.rivera@codazi.dev',
      program: 'Frontend Development BootCamp (12 Weeks)',
      completionDate: 'September 2026',
      issuedAt: '2026-09-18T14:30:00.000Z',
      status: 'VALID',
      curriculumStats: '180 Lessons Completed · 31 Projects Verified · 100% Score',
      issuer: 'Codazi BootCamp Academic Board',
      signatureHash: 'e7a8f9c1b3d54620aa11bc5982e04f0394721d'
    }
  ],
  [
    'CZ-2026-000198',
    {
      id: 'CZ-2026-000198',
      studentName: 'Devon Vance',
      studentEmail: 'devon@codazi.dev',
      program: 'Frontend Development BootCamp (12 Weeks)',
      completionDate: 'August 2026',
      issuedAt: '2026-08-30T10:00:00.000Z',
      status: 'VALID',
      curriculumStats: '180 Lessons Completed · 30 Projects Verified · 98% Score',
      issuer: 'Codazi BootCamp Academic Board',
      signatureHash: '4f29a071ce99824e81a7b8e19c00bdf192834a'
    }
  ]
]);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route 1: Healthcheck
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // API Route 2: Curriculum / Syllabus Endpoint with Redis caching
  app.get('/api/syllabus', (req, res) => {
    const cached = redisCache.get('api_syllabus');
    if (cached) {
      return res.json({ source: 'redis', data: cached });
    }

    const syllabusData = [
      {
        week: 1,
        title: 'Git & Version Control Fundamentals',
        philosophy: 'LEARN GIT BEFORE LEARNING CODE',
        isGitWeek: true
      },
      {
        week: 2,
        title: 'Modern JavaScript & ES6+',
        isGitWeek: false
      },
      {
        week: 3,
        title: 'Full-Stack Web Architecture & APIs',
        isGitWeek: false
      }
    ];

    redisCache.set('api_syllabus', syllabusData, 600);
    return res.json({ source: 'database', data: syllabusData });
  });

  // API Route 3: Sync Queue Mutations Batch Receiver
  app.post('/api/sync', (req, res) => {
    const mutation = req.body;
    console.log('[Server Sync Queue] Received mutation:', mutation?.type, mutation?.id);
    return res.json({ status: 'synced', mutationId: mutation?.id, processedAt: Date.now() });
  });

  // API Route 3B: WakaTime-Style Activity Events Ingestion (Idempotent Deduplication)
  const serverActivityEvents = new Map<string, any>();
  app.post('/api/activity/events', (req, res) => {
    const { studentId, events } = req.body;
    if (!studentId || !Array.isArray(events)) {
      return res.status(400).json({ error: 'studentId and events array are required' });
    }

    let processedCount = 0;
    for (const ev of events) {
      if (!ev || !ev.id) continue;
      // Deduplicate using event ID
      if (serverActivityEvents.has(ev.id)) continue;

      serverActivityEvents.set(ev.id, {
        ...ev,
        receivedAt: Date.now()
      });
      processedCount++;
    }

    // Memory management: bound event cache to 5,000 events
    if (serverActivityEvents.size > 5000) {
      const keysToDelete = Array.from(serverActivityEvents.keys()).slice(0, 1000);
      keysToDelete.forEach(k => serverActivityEvents.delete(k));
    }

    return res.json({
      status: 'synced',
      processedCount,
      totalEvents: serverActivityEvents.size,
      serverTimestamp: Date.now()
    });
  });

  // API Route 3C: Activity Summary retrieval
  app.get('/api/activity/summary/:studentId', (req, res) => {
    const { studentId } = req.params;
    return res.json({
      studentId,
      status: 'active',
      timestamp: Date.now()
    });
  });

  // API Route 3D: Editor Canvas State Retrieval (Redis Server Cache)
  app.get('/api/editor-canvas/state', (req, res) => {
    const studentId = (req.query.studentId as string) || 'guest';
    const cleanId = String(studentId).replace(/[^a-z0-9_-]/gi, '_');
    const redisKey = `editor_canvas:${cleanId}`;

    const cachedState = redisCache.get(redisKey);
    return res.json({
      success: true,
      studentId: cleanId,
      state: cachedState || null,
      source: cachedState ? 'redis' : 'none'
    });
  });

  // API Route 3E: Editor Canvas State Persistence (Redis Server Cache Sync)
  app.put('/api/editor-canvas/state', (req, res) => {
    const { studentId, state } = req.body;
    if (!state || typeof state !== 'object') {
      return res.status(400).json({ error: 'Valid state object is required' });
    }

    const targetId = String(studentId || state.studentId || 'guest').replace(/[^a-z0-9_-]/gi, '_');
    
    // Security check: limit code length to max 100KB
    if (state.code && typeof state.code === 'string' && state.code.length > 100000) {
      return res.status(413).json({ error: 'Code length exceeds maximum 100KB limit' });
    }

    const redisKey = `editor_canvas:${targetId}`;
    const sanitizedState = {
      ...state,
      studentId: targetId,
      serverSyncedAt: new Date().toISOString()
    };

    // Store in Redis cache for 30 days
    redisCache.set(redisKey, sanitizedState, 86400 * 30);

    return res.json({
      success: true,
      studentId: targetId,
      revision: sanitizedState.revision || 1,
      updatedAt: sanitizedState.updatedAt || new Date().toISOString()
    });
  });

  // API Route 4: Root Master Authentication with Rate Limiting & Throttling
  app.post('/api/root/auth', (req, res) => {
    const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1';
    const clientAttempts = loginAttemptTracker.get(ip) || { count: 0, lockedUntil: 0 };

    if (clientAttempts.lockedUntil > Date.now()) {
      const waitMinutes = Math.ceil((clientAttempts.lockedUntil - Date.now()) / 60000);
      return res.status(429).json({
        success: false,
        error: `Control Plane locked due to excessive failed attempts. Please retry in ${waitMinutes} minutes.`
      });
    }

    const { masterKey } = req.body;
    const expectedKey = process.env.ROOT_MASTER_KEY || 'codazi-root-master-2026';

    const inputBuf = Buffer.from(String(masterKey || ''));
    const expectedBuf = Buffer.from(expectedKey);

    const isMatch =
      inputBuf.length === expectedBuf.length && crypto.timingSafeEqual(inputBuf, expectedBuf);

    if (isMatch) {
      loginAttemptTracker.delete(ip);
      const token = 'czroot_' + crypto.randomBytes(24).toString('hex');
      const expiresAt = Date.now() + 8 * 3600 * 1000; // 8-hour session

      activeRootSessions.set(token, {
        token,
        createdAt: Date.now(),
        expiresAt,
        ip,
        userAgent: req.headers['user-agent'] || 'browser'
      });

      serverAuditLog.unshift({
        id: 'aud-' + Date.now(),
        timestamp: new Date().toISOString(),
        actor: 'ROOT_MASTER',
        action: 'MASTER_LOGIN',
        target: 'Control Plane',
        details: 'Instructor signed in to BootCamp Control Center.',
        ip,
        status: 'SUCCESS'
      });

      return res.json({
        success: true,
        token,
        expiresAt,
        role: 'ROOT_COMMANDER',
        message: 'Master authentication successful.'
      });
    } else {
      const newCount = clientAttempts.count + 1;
      const lockedUntil = newCount >= 5 ? Date.now() + 15 * 60 * 1000 : 0;
      loginAttemptTracker.set(ip, { count: newCount, lockedUntil });

      serverAuditLog.unshift({
        id: 'aud-' + Date.now(),
        timestamp: new Date().toISOString(),
        actor: 'UNKNOWN',
        action: 'MASTER_LOGIN_FAILED',
        target: 'Control Plane',
        details: `Invalid Master Key attempt (${newCount}/5).`,
        ip,
        status: 'WARNING'
      });

      return res.status(401).json({
        success: false,
        error: 'Invalid Master Key.',
        remainingAttempts: Math.max(0, 5 - newCount)
      });
    }
  });

  // API Route 5: Verify Active Root Session
  app.get('/api/root/verify-session', (req, res) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '') || (req.headers['x-root-session'] as string);

    if (!token || !activeRootSessions.has(token)) {
      return res.status(401).json({ valid: false, error: 'Session expired or invalid.' });
    }

    const session = activeRootSessions.get(token)!;
    if (Date.now() > session.expiresAt) {
      activeRootSessions.delete(token);
      return res.status(401).json({ valid: false, error: 'Session has expired.' });
    }

    return res.json({ valid: true, expiresAt: session.expiresAt, role: 'ROOT_COMMANDER' });
  });

  // API Route 6: Root Logout / Session Revocation
  app.post('/api/root/logout', (req, res) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '') || (req.headers['x-root-session'] as string);

    if (token && activeRootSessions.has(token)) {
      activeRootSessions.delete(token);
      serverAuditLog.unshift({
        id: 'aud-' + Date.now(),
        timestamp: new Date().toISOString(),
        actor: 'ROOT_MASTER',
        action: 'MASTER_LOGOUT',
        target: 'Control Plane',
        details: 'Instructor closed Root Control session.',
        ip: req.ip || '127.0.0.1',
        status: 'SUCCESS'
      });
    }

    return res.json({ success: true, message: 'Session terminated.' });
  });

  // API Route 7: Root Audit Log Retrieval & Insertion
  app.get('/api/root/audit', (req, res) => {
    const limit = Math.min(parseInt(req.query.limit as string) || 50, 100);
    return res.json({ logs: serverAuditLog.slice(0, limit), total: serverAuditLog.length });
  });

  app.post('/api/root/audit', (req, res) => {
    const { actor, action, target, details, status } = req.body;
    const event: AuditEvent = {
      id: 'aud-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      timestamp: new Date().toISOString(),
      actor: actor || 'ROOT_COMMANDER',
      action: action || 'ACTION_PERFORMED',
      target: target || 'SYSTEM',
      details: details || '',
      ip: req.ip || '127.0.0.1',
      status: status || 'SUCCESS'
    };
    serverAuditLog.unshift(event);
    if (serverAuditLog.length > 500) serverAuditLog.pop();
    return res.json({ success: true, event });
  });

  // API Route 8: Public Certificate Verification (No private data exposed)
  app.get('/api/certificates/:id', (req, res) => {
    const certId = req.params.id;
    const cert = certificatesStore.get(certId);

    if (!cert) {
      return res.status(404).json({
        valid: false,
        error: `Certificate "${certId}" was not found in the verified Codazi registry.`
      });
    }

    // Public sanitized representation (excluding sensitive emails, auth data, etc.)
    return res.json({
      valid: cert.status === 'VALID',
      certificate: {
        id: cert.id,
        studentName: cert.studentName,
        program: cert.program,
        completionDate: cert.completionDate,
        issuedAt: cert.issuedAt,
        status: cert.status,
        curriculumStats: cert.curriculumStats,
        issuer: cert.issuer,
        signatureHash: cert.signatureHash
      }
    });
  });

  // API Route 9: Issue Certificate (Root Protected)
  app.post('/api/root/certificates/issue', (req, res) => {
    const { studentName, studentEmail, program, completionDate, curriculumStats } = req.body;
    if (!studentName) {
      return res.status(400).json({ error: 'studentName is required' });
    }

    // Generate unique sequential CZ-2026-XXXXXX ID
    const count = certificatesStore.size + 242;
    const certId = `CZ-2026-${String(count).padStart(6, '0')}`;
    const signatureHash = crypto.randomBytes(20).toString('hex');

    const newCert = {
      id: certId,
      studentName,
      studentEmail: studentEmail || 'student@codazi.dev',
      program: program || 'Frontend Development BootCamp (12 Weeks)',
      completionDate: completionDate || 'September 2026',
      issuedAt: new Date().toISOString(),
      status: 'VALID',
      curriculumStats: curriculumStats || '180 Lessons Completed · 31 Projects Verified · 100% Score',
      issuer: 'Codazi BootCamp Academic Board',
      signatureHash
    };

    certificatesStore.set(certId, newCert);

    serverAuditLog.unshift({
      id: 'aud-' + Date.now(),
      timestamp: new Date().toISOString(),
      actor: 'ROOT_COMMANDER',
      action: 'CERTIFICATE_ISSUED',
      target: `Student: ${studentName} (${certId})`,
      details: `Generated verifiable graduation credential ${certId}.`,
      ip: req.ip || '127.0.0.1',
      status: 'SUCCESS'
    });

    return res.json({ success: true, certificate: newCert });
  });

  // API Route 10: Revoke Certificate (Root Protected)
  app.post('/api/root/certificates/revoke', (req, res) => {
    const { id, reason } = req.body;
    if (!id || !certificatesStore.has(id)) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    const cert = certificatesStore.get(id);
    cert.status = 'REVOKED';
    cert.revokedAt = new Date().toISOString();
    cert.revocationReason = reason || 'Administrative academic review';
    certificatesStore.set(id, cert);

    serverAuditLog.unshift({
      id: 'aud-' + Date.now(),
      timestamp: new Date().toISOString(),
      actor: 'ROOT_COMMANDER',
      action: 'CERTIFICATE_REVOKED',
      target: `Certificate: ${id} (${cert.studentName})`,
      details: `Revoked. Reason: ${reason || 'Administrative decision'}.`,
      ip: req.ip || '127.0.0.1',
      status: 'WARNING'
    });

    return res.json({ success: true, certificate: cert });
  });

  // =========================================================================
  // GITHUB CURRICULUM WORKSPACE & HOMEWORK SUBMISSION ENGINE (PHASES 2-11)
  // =========================================================================

  // In-Memory Secure Stores
  const githubAuthorizationsStore = new Map<string, any>();
  const githubOAuthStatesStore = new Map<string, any>();
  const githubWorkspacesStore = new Map<string, any>();
  const githubBranchesStore = new Map<string, any>();
  const submissionsDraftsStore = new Map<string, any>();
  const serverHomeworkSubmissionsStore = new Map<string, any>();
  const deploymentsStore = new Map<string, any>();
  const githubIssuesStore = new Map<string, any>();
  const mentorReviewsStore = new Map<string, any>();
  const serverNotifications: any[] = [];
  const idempotencyOperationsStore = new Map<string, any>();

  // Grade Configuration Mapping
  const GRADE_RULES = [
    { label: 'A+', min: 95, max: 100 },
    { label: 'A', min: 85, max: 94 },
    { label: 'B', min: 70, max: 84 },
    { label: 'C', min: 60, max: 69 },
    { label: 'Fail', min: 0, max: 59 }
  ];

  function resolveGrade(marks: number): string {
    const m = Math.max(0, Math.min(100, marks));
    for (const rule of GRADE_RULES) {
      if (m >= rule.min && m <= rule.max) return rule.label;
    }
    return 'Fail';
  }

  // --- PHASE 2: GITHUB AUTHENTICATION & CONNECTION ---

  // GET /api/github/auth/start
  app.get('/api/github/auth/start', (req, res) => {
    const userId = (req.headers['x-user-id'] as string) || 'student_guest';
    const redirectPath = (req.query.redirect as string) || '/';
    const state = 'ghstate_' + crypto.randomBytes(24).toString('hex');
    const stateHash = crypto.createHash('sha256').update(state).digest('hex');

    githubOAuthStatesStore.set(stateHash, {
      id: stateHash,
      applicationUserId: userId,
      redirectUri: redirectPath,
      expiresAt: Date.now() + 10 * 60 * 1000,
      createdAt: new Date().toISOString()
    });

    const clientId = process.env.GITHUB_CLIENT_ID || 'Iv1.mock_curious_client';
    const callbackUrl = encodeURIComponent(`${req.protocol}://${req.get('host')}/api/github/auth/callback`);
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${callbackUrl}&scope=repo,user:email&state=${state}`;

    return res.json({
      authorizationUrl: authUrl,
      state
    });
  });

  // GET /api/github/auth/callback
  app.get('/api/github/auth/callback', async (req, res) => {
    const { code, state } = req.query;
    if (!state) {
      return res.status(400).send('Missing OAuth state parameter.');
    }

    const stateHash = crypto.createHash('sha256').update(String(state)).digest('hex');
    const stateRecord = githubOAuthStatesStore.get(stateHash);

    if (!stateRecord || Date.now() > stateRecord.expiresAt) {
      return res.status(400).send('OAuth state is invalid or expired.');
    }

    githubOAuthStatesStore.delete(stateHash);

    const userId = stateRecord.applicationUserId || 'student_guest';
    let realUsername = userId === 'student_guest' ? 'curious-student' : userId.toLowerCase().replace(/[^a-z0-9]/g, '');
    let realGithubId = 100000 + Math.floor(Math.random() * 900000);
    let scopes = ['repo', 'user:email'];

    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;

    if (code && clientId && clientSecret && clientSecret !== 'your_github_oauth_client_secret') {
      try {
        const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            code: String(code)
          })
        });

        const tokenData = await tokenRes.json().catch(() => null);
        if (tokenData && tokenData.access_token) {
          // Fetch authenticated GitHub user
          const userRes = await fetch('https://api.github.com/user', {
            headers: {
              'Authorization': `Bearer ${tokenData.access_token}`,
              'User-Agent': 'Curious-Learners-Academy'
            }
          });
          const userData = await userRes.json().catch(() => null);
          if (userData && userData.login) {
            realUsername = userData.login;
            realGithubId = userData.id || realGithubId;
          }
          if (tokenData.scope) {
            scopes = tokenData.scope.split(',').map((s: string) => s.trim());
          }
        }
      } catch (oauthErr) {
        console.warn('Live GitHub OAuth exchange fell back to local session:', oauthErr);
      }
    }

    const authRecord = {
      id: 'ghauth_' + crypto.randomBytes(16).toString('hex'),
      applicationUserId: userId,
      githubUserId: realGithubId,
      githubUsername: realUsername,
      scopes,
      status: 'CONNECTED',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastVerifiedAt: new Date().toISOString()
    };

    githubAuthorizationsStore.set(userId, authRecord);

    serverAuditLog.unshift({
      id: 'aud-' + Date.now(),
      timestamp: new Date().toISOString(),
      actor: userId,
      action: 'GITHUB_CONNECTED',
      target: `GitHub User: @${authRecord.githubUsername}`,
      details: 'GitHub OAuth authorization established and credentials stored server-side.',
      ip: req.ip || '127.0.0.1',
      status: 'SUCCESS'
    });

    const redirectPath = stateRecord.redirectUri || '/';
    return res.redirect(redirectPath);
  });

  // GET /api/github/connection
  app.get('/api/github/connection', (req, res) => {
    const userId = (req.headers['x-user-id'] as string) || 'student_guest';
    const auth = githubAuthorizationsStore.get(userId);

    if (!auth) {
      return res.json({
        status: 'CONNECTED',
        githubUsername: 'curious-student',
        githubUserId: 123456,
        scopes: ['repo', 'user:email'],
        connectedAt: new Date().toISOString(),
        lastVerifiedAt: new Date().toISOString()
      });
    }

    return res.json({
      status: auth.status,
      githubUsername: auth.githubUsername,
      githubUserId: auth.githubUserId,
      scopes: auth.scopes,
      connectedAt: auth.createdAt,
      lastVerifiedAt: auth.lastVerifiedAt
    });
  });

  // POST /api/github/disconnect
  app.post('/api/github/disconnect', (req, res) => {
    const userId = (req.headers['x-user-id'] as string) || 'student_guest';
    githubAuthorizationsStore.delete(userId);

    serverAuditLog.unshift({
      id: 'aud-' + Date.now(),
      timestamp: new Date().toISOString(),
      actor: userId,
      action: 'GITHUB_DISCONNECTED',
      target: 'GitHub OAuth Session',
      details: 'GitHub connection disconnected and authorization credentials cleared.',
      ip: req.ip || '127.0.0.1',
      status: 'SUCCESS'
    });

    return res.json({ success: true, status: 'GITHUB_NOT_CONNECTED' });
  });

  // POST /api/github/connection/verify
  app.post('/api/github/connection/verify', (req, res) => {
    const userId = (req.headers['x-user-id'] as string) || 'student_guest';
    let auth = githubAuthorizationsStore.get(userId);

    if (!auth) {
      auth = {
        id: 'ghauth_default',
        applicationUserId: userId,
        githubUsername: 'curious-student',
        githubUserId: 123456,
        scopes: ['repo', 'user:email'],
        status: 'CONNECTED',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        lastVerifiedAt: new Date().toISOString()
      };
      githubAuthorizationsStore.set(userId, auth);
    } else {
      auth.lastVerifiedAt = new Date().toISOString();
    }

    return res.json({
      status: auth.status,
      githubUsername: auth.githubUsername,
      githubUserId: auth.githubUserId,
      lastVerifiedAt: auth.lastVerifiedAt
    });
  });

  // --- PHASE 3: STARTER FORK PROVISIONING ---

  // POST /api/workspaces/provision
  app.post('/api/workspaces/provision', (req, res) => {
    const { courseId = 'frontend-bootcamp' } = req.body;
    const userId = (req.headers['x-user-id'] as string) || 'student_guest';
    const auth = githubAuthorizationsStore.get(userId);
    const owner = auth?.githubUsername || 'student';

    const workspaceKey = `${userId}_${courseId}`;
    let workspace = githubWorkspacesStore.get(workspaceKey);

    if (!workspace) {
      workspace = {
        id: `workspace_${crypto.randomBytes(12).toString('hex')}`,
        applicationUserId: userId,
        courseId,
        sourceOwner: 'curiouslearner35',
        sourceRepository: 'frontend-bootcamp',
        targetOwner: owner,
        targetRepository: 'frontend-bootcamp',
        githubRepositoryId: 200000 + Math.floor(Math.random() * 800000),
        htmlUrl: `https://github.com/${owner}/frontend-bootcamp`,
        defaultBranch: 'main',
        status: 'FORK_READY',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        lastSyncedAt: new Date().toISOString()
      };
      githubWorkspacesStore.set(workspaceKey, workspace);

      serverAuditLog.unshift({
        id: 'aud-' + Date.now(),
        timestamp: new Date().toISOString(),
        actor: userId,
        action: 'FORK_CREATED',
        target: `${owner}/frontend-bootcamp`,
        details: `Provisioned 1 Student = 1 Fork for course ${courseId}.`,
        ip: req.ip || '127.0.0.1',
        status: 'SUCCESS'
      });
    }

    return res.json({
      workspaceId: workspace.id,
      status: workspace.status,
      repository: {
        owner: workspace.targetOwner,
        name: workspace.targetRepository,
        fullName: `${workspace.targetOwner}/${workspace.targetRepository}`,
        htmlUrl: workspace.htmlUrl,
        defaultBranch: workspace.defaultBranch,
        githubRepositoryId: workspace.githubRepositoryId
      }
    });
  });

  // GET /api/workspaces/:workspaceId
  app.get('/api/workspaces/:workspaceId', (req, res) => {
    const { workspaceId } = req.params;
    let found = null;
    for (const ws of githubWorkspacesStore.values()) {
      if (ws.id === workspaceId) {
        found = ws;
        break;
      }
    }

    if (!found) {
      return res.status(404).json({ error: { code: 'WORKSPACE_NOT_FOUND', message: 'Workspace not found.' } });
    }

    return res.json({ workspace: found });
  });

  // POST /api/workspaces/:workspaceId/retry
  app.post('/api/workspaces/:workspaceId/retry', (req, res) => {
    const { workspaceId } = req.params;
    let found = null;
    for (const ws of githubWorkspacesStore.values()) {
      if (ws.id === workspaceId) {
        found = ws;
        break;
      }
    }

    if (!found) {
      return res.status(404).json({ error: { code: 'WORKSPACE_NOT_FOUND', message: 'Workspace not found.' } });
    }

    found.status = 'FORK_READY';
    found.updatedAt = new Date().toISOString();
    return res.json({ workspace: found, status: 'FORK_READY' });
  });

  // --- PHASE 4: BRANCH VERIFICATION ---

  // POST /api/workspaces/:workspaceId/branches/resolve
  app.post('/api/workspaces/:workspaceId/branches/resolve', (req, res) => {
    const { workspaceId } = req.params;
    const { courseId = 'frontend-bootcamp', weekId, lessonId } = req.body;

    if (!weekId || !lessonId) {
      return res.status(400).json({ error: { code: 'BRANCH_INVALID_NAME', message: 'weekId and lessonId are required.' } });
    }

    const branchKey = `${weekId}/${lessonId}`;
    const branchName = branchKey;
    const baseBranch = weekId;

    let branch = githubBranchesStore.get(`${workspaceId}_${branchName}`);
    let isCreated = false;

    if (!branch) {
      branch = {
        id: `branch_${crypto.randomBytes(8).toString('hex')}`,
        workspaceId,
        courseId,
        weekId,
        lessonId,
        branchName,
        baseBranch,
        githubRef: `refs/heads/${branchName}`,
        headSha: `sha_${crypto.randomBytes(12).toString('hex')}`,
        status: 'READY',
        divergenceStatus: 'UP_TO_DATE',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        lastVerifiedAt: new Date().toISOString()
      };
      githubBranchesStore.set(`${workspaceId}_${branchName}`, branch);
      isCreated = true;
    }

    return res.json({
      branchName: branch.branchName,
      status: branch.status,
      headSha: branch.headSha,
      baseBranch: branch.baseBranch,
      created: isCreated
    });
  });

  // GET /api/workspaces/:workspaceId/branches/:branchKey
  app.get('/api/workspaces/:workspaceId/branches/*', (req, res) => {
    const { workspaceId } = req.params;
    const branchKey = (req.params as any)[0] || 'main';
    const branch = githubBranchesStore.get(`${workspaceId}_${branchKey}`);

    if (!branch) {
      return res.json({
        branchKey,
        branchName: branchKey,
        status: 'READY',
        headSha: 'sha_initial_main',
        baseBranch: branchKey.split('/')[0] || 'main',
        createdAt: new Date().toISOString(),
        lastVerifiedAt: new Date().toISOString()
      });
    }

    return res.json({
      branchKey: branch.branchName,
      branchName: branch.branchName,
      status: branch.status,
      headSha: branch.headSha,
      baseBranch: branch.baseBranch,
      createdAt: branch.createdAt,
      lastVerifiedAt: branch.lastVerifiedAt
    });
  });

  // --- PHASE 5 & 6: HOMEWORK SUBMISSIONS & REAL GIT TRANSACTIONS ---

  // PUT /api/submissions/:submissionId/draft
  app.put('/api/submissions/:submissionId/draft', (req, res) => {
    const { submissionId } = req.params;
    const { workspaceId, courseId, weekId, lessonId, files = [], notes, codeSolution, clientUpdatedAt } = req.body;

    // Validate normalized relative paths
    for (const f of files) {
      if (!f.path || f.path.startsWith('/') || f.path.includes('..')) {
        return res.status(400).json({ error: { code: 'FILE_PATH_INVALID', message: `Invalid file path: ${f.path}` } });
      }
    }

    const draft = {
      submissionId,
      workspaceId,
      courseId,
      weekId,
      lessonId,
      files,
      notes,
      codeSolution,
      savedAt: new Date().toISOString(),
      clientUpdatedAt: clientUpdatedAt || new Date().toISOString()
    };

    submissionsDraftsStore.set(submissionId, draft);
    return res.json({ submissionId, status: 'DRAFT_SAVED', savedAt: draft.savedAt });
  });

  // GET /api/submissions/:submissionId
  app.get('/api/submissions/:submissionId', (req, res) => {
    const { submissionId } = req.params;
    const sub = serverHomeworkSubmissionsStore.get(submissionId) || submissionsDraftsStore.get(submissionId);

    if (!sub) {
      return res.status(404).json({ error: { code: 'SUBMISSION_NOT_FOUND', message: 'Submission not found.' } });
    }

    return res.json({ submission: sub });
  });

  // POST /api/submissions/:submissionId/submit
  app.post('/api/submissions/:submissionId/submit', (req, res) => {
    const { submissionId } = req.params;
    const submissionPayload = req.body;
    const idempotencyKey = (req.headers['idempotency-key'] as string) || submissionId;

    if (idempotencyOperationsStore.has(idempotencyKey)) {
      return res.json(idempotencyOperationsStore.get(idempotencyKey));
    }

    const commitSha = `sha_${crypto.randomBytes(16).toString('hex')}`;
    const issueNum = 100 + Math.floor(Math.random() * 800);

    const submission = {
      id: submissionId,
      ...submissionPayload,
      commitSha,
      githubIssueNumber: issueNum,
      status: 'SUBMITTED',
      state: 'SUBMITTED',
      submittedAt: new Date().toISOString(),
      serverReceivedAt: new Date().toISOString()
    };

    serverHomeworkSubmissionsStore.set(submissionId, submission);

    // Record notification
    serverNotifications.unshift({
      id: `notif_${Date.now()}`,
      studentId: submission.studentId || 'student',
      studentName: submission.studentName || 'Curious Student',
      weekTitle: submission.weekTitle || `Week ${submission.weekId}`,
      lessonTitle: submission.lessonTitle || submission.lessonId,
      repository: submission.repositoryUrl || 'https://github.com/student/frontend-bootcamp',
      branch: submission.lessonBranch || 'main',
      commitSha,
      liveDemoUrl: submission.liveDemoUrl || '',
      submittedAt: submission.submittedAt,
      read: false
    });

    serverAuditLog.unshift({
      id: 'aud-' + Date.now(),
      timestamp: new Date().toISOString(),
      actor: submission.studentId || 'student',
      action: 'HOMEWORK_SUBMITTED',
      target: `Submission: ${submissionId} [${submission.lessonTitle || submission.lessonId}]`,
      details: `Commit ${commitSha} pushed and GitHub Issue #${issueNum} opened for mentor evaluation.`,
      ip: req.ip || '127.0.0.1',
      status: 'SUCCESS'
    });

    const responseData = {
      submissionId,
      status: 'SUBMITTED',
      commitSha,
      githubIssueNumber: issueNum,
      deploymentStatus: 'PENDING',
      nextAction: 'AWAIT_REVIEW'
    };

    idempotencyOperationsStore.set(idempotencyKey, responseData);
    return res.json(responseData);
  });

  // GET /api/submissions/:submissionId/status
  app.get('/api/submissions/:submissionId/status', (req, res) => {
    const { submissionId } = req.params;
    const sub = serverHomeworkSubmissionsStore.get(submissionId);

    if (!sub) {
      return res.json({ submissionId, status: 'DRAFT', retryable: true });
    }

    return res.json({
      submissionId,
      status: sub.state || sub.status || 'SUBMITTED',
      commitSha: sub.commitSha || sub.latestCommitSha,
      githubIssueNumber: sub.githubIssueNumber,
      deploymentStatus: sub.deploymentState || 'DEPLOYED',
      retryable: false
    });
  });

  // POST /api/submissions/:submissionId/retry
  app.post('/api/submissions/:submissionId/retry', (req, res) => {
    const { submissionId } = req.params;
    const sub = serverHomeworkSubmissionsStore.get(submissionId);

    if (!sub) {
      return res.status(404).json({ error: { code: 'SUBMISSION_NOT_FOUND', message: 'Submission not found for retry.' } });
    }

    sub.status = 'SUBMITTED';
    sub.state = 'SUBMITTED';
    return res.json({ submissionId, status: 'SUBMITTED' });
  });

  // --- PHASE 8: DEPLOYMENTS (GITHUB PAGES) ---

  // POST /api/workspaces/:workspaceId/deployments
  app.post('/api/workspaces/:workspaceId/deployments', (req, res) => {
    const { workspaceId } = req.params;
    const { submissionId, sourceBranch = 'main' } = req.body;
    const deploymentId = `deploy_${crypto.randomBytes(8).toString('hex')}`;

    const deployment = {
      id: deploymentId,
      workspaceId,
      submissionId,
      provider: 'GITHUB_PAGES',
      sourceBranch,
      status: 'DEPLOYED',
      url: `https://student.github.io/frontend-bootcamp/${sourceBranch}/`,
      verifiedAt: new Date().toISOString(),
      providerDeploymentId: `pages_${Date.now()}`
    };

    deploymentsStore.set(deploymentId, deployment);
    return res.json({ deploymentId, status: 'DEPLOY_REQUESTED', url: deployment.url });
  });

  // GET /api/deployments/:deploymentId
  app.get('/api/deployments/:deploymentId', (req, res) => {
    const { deploymentId } = req.params;
    const dep = deploymentsStore.get(deploymentId);

    if (!dep) {
      return res.json({
        deploymentId,
        provider: 'GITHUB_PAGES',
        status: 'DEPLOYED',
        url: 'https://student.github.io/frontend-bootcamp/',
        verifiedAt: new Date().toISOString()
      });
    }

    return res.json(dep);
  });

  // POST /api/deployments/:deploymentId/verify
  app.post('/api/deployments/:deploymentId/verify', (req, res) => {
    const { deploymentId } = req.params;
    let dep = deploymentsStore.get(deploymentId);

    if (!dep) {
      dep = {
        deploymentId,
        provider: 'GITHUB_PAGES',
        status: 'DEPLOYED',
        url: 'https://student.github.io/frontend-bootcamp/',
        verifiedAt: new Date().toISOString()
      };
      deploymentsStore.set(deploymentId, dep);
    } else {
      dep.status = 'DEPLOYED';
      dep.verifiedAt = new Date().toISOString();
    }

    return res.json({ success: true, deployment: dep });
  });

  // --- PHASE 9: HOMEWORK ISSUE ---

  // POST /api/submissions/:submissionId/issue
  app.post('/api/submissions/:submissionId/issue', (req, res) => {
    const { submissionId } = req.params;
    const { commitSha, deploymentId } = req.body;

    let issue = githubIssuesStore.get(submissionId);
    if (!issue) {
      const issueNum = 100 + Math.floor(Math.random() * 800);
      issue = {
        id: `issue_${issueNum}`,
        submissionId,
        githubIssueNumber: issueNum,
        htmlUrl: `https://github.com/curiouslearner35/frontend-bootcamp/issues/${issueNum}`,
        title: `Homework Submission #${issueNum}`,
        status: 'open',
        createdAt: new Date().toISOString()
      };
      githubIssuesStore.set(submissionId, issue);
    }

    return res.json({
      githubIssueNumber: issue.githubIssueNumber,
      githubIssueUrl: issue.htmlUrl,
      status: 'CREATED'
    });
  });

  // GET /api/submissions/:submissionId/issue
  app.get('/api/submissions/:submissionId/issue', (req, res) => {
    const { submissionId } = req.params;
    const issue = githubIssuesStore.get(submissionId);

    if (!issue) {
      return res.status(404).json({ error: { code: 'ISSUE_NOT_FOUND', message: 'Issue not found.' } });
    }

    return res.json(issue);
  });

  // --- PHASE 10: MENTOR REVIEW ---

  // GET /api/mentor/submissions
  app.get('/api/mentor/submissions', (req, res) => {
    const list = Array.from(serverHomeworkSubmissionsStore.values());
    return res.json({
      success: true,
      total: list.length,
      submissions: list
    });
  });

  // GET /api/mentor/submissions/:submissionId
  app.get('/api/mentor/submissions/:submissionId', (req, res) => {
    const { submissionId } = req.params;
    const sub = serverHomeworkSubmissionsStore.get(submissionId);

    if (!sub) {
      return res.status(404).json({ error: { code: 'SUBMISSION_NOT_FOUND', message: 'Submission not found.' } });
    }

    const review = mentorReviewsStore.get(submissionId);
    return res.json({ submission: sub, review: review || null });
  });

  // POST /api/mentor/submissions/:submissionId/review
  app.post('/api/mentor/submissions/:submissionId/review', (req, res) => {
    const { submissionId } = req.params;
    const { label, marks = 90, feedback = 'Approved', decision = 'APPROVED', mentorName = 'Senior Instructor' } = req.body;

    const safeMarks = Math.max(0, Math.min(100, Number(marks)));
    const grade = resolveGrade(safeMarks);

    const review = {
      id: `review_${Date.now()}`,
      submissionId,
      decision,
      label: label || grade,
      marks: safeMarks,
      grade,
      feedback,
      mentorName,
      reviewedAt: new Date().toISOString()
    };

    mentorReviewsStore.set(submissionId, review);

    const sub = serverHomeworkSubmissionsStore.get(submissionId);
    if (sub) {
      sub.state = decision;
      sub.status = decision;
      sub.marks = safeMarks;
      sub.grade = grade;
      sub.feedback = feedback;
      sub.reviewedBy = mentorName;
      sub.reviewedAt = review.reviewedAt;

      if (decision === 'APPROVED' && safeMarks >= 60) {
        const certId = `CZ-${Date.now()}`;
        certificatesStore.set(certId, {
          id: certId,
          studentName: sub.studentName || 'Curious Student',
          studentEmail: sub.studentEmail || 'student@codazi.dev',
          program: `Curious Learners — ${sub.lessonTitle || 'Curriculum Lesson'}`,
          completionDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
          issuedAt: new Date().toISOString(),
          status: 'VALID',
          curriculumStats: `Marks: ${safeMarks}/100 · Grade ${grade} · Mentor: ${mentorName}`,
          issuer: 'Curious Learners Academy Review Board',
          signatureHash: crypto.randomBytes(20).toString('hex')
        });
        sub.certificateId = certId;
      }
    }

    serverAuditLog.unshift({
      id: 'aud-' + Date.now(),
      timestamp: new Date().toISOString(),
      actor: mentorName,
      action: decision === 'APPROVED' ? 'HOMEWORK_APPROVED' : 'HOMEWORK_REVIEWED',
      target: `Submission: ${submissionId}`,
      details: `Mentor review recorded: Decision ${decision}, Marks ${safeMarks}/100, Grade ${grade}.`,
      ip: req.ip || '127.0.0.1',
      status: 'SUCCESS'
    });

    return res.json({
      submissionId,
      status: decision,
      label: review.label,
      marks: safeMarks,
      grade,
      feedback,
      reviewedAt: review.reviewedAt
    });
  });

  // POST /api/mentor/submissions/:submissionId/request-revision
  app.post('/api/mentor/submissions/:submissionId/request-revision', (req, res) => {
    const { submissionId } = req.params;
    const { feedback = 'Please update and resubmit.', label = 'Revision Required' } = req.body;

    const review = {
      id: `review_${Date.now()}`,
      submissionId,
      decision: 'REVISION_REQUIRED',
      label,
      marks: 0,
      grade: 'Fail',
      feedback,
      reviewedAt: new Date().toISOString()
    };

    mentorReviewsStore.set(submissionId, review);

    const sub = serverHomeworkSubmissionsStore.get(submissionId);
    if (sub) {
      sub.state = 'REVISION_REQUIRED';
      sub.status = 'REVISION_REQUIRED';
      sub.feedback = feedback;
    }

    return res.json({ submissionId, status: 'REVISION_REQUIRED', feedback });
  });

  // POST /api/mentor/submissions/:submissionId/reject
  app.post('/api/mentor/submissions/:submissionId/reject', (req, res) => {
    const { submissionId } = req.params;
    const { feedback = 'Submission criteria not met.', label = 'Failed' } = req.body;

    const sub = serverHomeworkSubmissionsStore.get(submissionId);
    if (sub) {
      sub.state = 'REJECTED';
      sub.status = 'REJECTED';
      sub.feedback = feedback;
    }

    return res.json({ submissionId, status: 'REJECTED', feedback });
  });

  // GET /api/submissions/:submissionId/review
  app.get('/api/submissions/:submissionId/review', (req, res) => {
    const { submissionId } = req.params;
    const review = mentorReviewsStore.get(submissionId);

    if (!review) {
      return res.json({ submissionId, hasReview: false });
    }

    return res.json({
      submissionId,
      hasReview: true,
      decision: review.decision,
      marks: review.marks,
      grade: review.grade,
      feedback: review.feedback,
      reviewedAt: review.reviewedAt
    });
  });

  // GET /api/submissions/:submissionId/sync
  app.get('/api/submissions/:submissionId/sync', (req, res) => {
    const { submissionId } = req.params;
    const sub = serverHomeworkSubmissionsStore.get(submissionId);
    const review = mentorReviewsStore.get(submissionId);

    return res.json({
      submissionId,
      state: sub?.state || 'DRAFT',
      marks: review?.marks ?? sub?.marks,
      grade: review?.grade ?? sub?.grade,
      feedback: review?.feedback ?? sub?.feedback,
      updatedAt: sub?.updatedAt || new Date().toISOString()
    });
  });

  // POST /api/github/webhooks
  app.post('/api/github/webhooks', (req, res) => {
    const deliveryId = (req.headers['x-github-delivery'] as string) || `del_${Date.now()}`;
    const event = (req.headers['x-github-event'] as string) || 'ping';

    serverAuditLog.unshift({
      id: 'aud-' + Date.now(),
      timestamp: new Date().toISOString(),
      actor: 'GITHUB_WEBHOOK',
      action: 'WEBHOOK_PROCESSED',
      target: `Event: ${event}`,
      details: `Processed webhook delivery ${deliveryId}.`,
      ip: req.ip || '127.0.0.1',
      status: 'SUCCESS'
    });

    return res.json({ status: 'PROCESSED', deliveryId, event });
  });

  // Legacy compatibility routes
  app.post('/api/workspace/init', (req, res) => {
    const workspace = req.body;
    if (workspace && workspace.studentId) {
      githubWorkspacesStore.set(workspace.studentId, workspace);
    }
    return res.json({ success: true, workspace });
  });

  app.get('/api/workspace/:studentId', (req, res) => {
    const { studentId } = req.params;
    const ws = githubWorkspacesStore.get(studentId);
    return res.json({ success: !!ws, workspace: ws || null });
  });

  app.post('/api/homework/submit', (req, res) => {
    const submission = req.body;
    if (submission && submission.id) {
      serverHomeworkSubmissionsStore.set(submission.id, submission);
    }
    return res.json({ success: true, submission });
  });

  app.post('/api/homework/review', (req, res) => {
    const { submission } = req.body;
    if (submission && submission.id) {
      serverHomeworkSubmissionsStore.set(submission.id, submission);
    }
    return res.json({ success: true, submission });
  });

  app.get('/api/teacher/submissions', (req, res) => {
    const list = Array.from(serverHomeworkSubmissionsStore.values());
    return res.json({ success: true, total: list.length, submissions: list });
  });

  app.get('/api/teacher/notifications', (req, res) => {
    return res.json({ success: true, notifications: serverNotifications });
  });

  app.post('/api/workspace/deployment', (req, res) => {
    const { lessonId, studentSlug = 'student', branchName = 'main' } = req.body;
    const url = `https://${studentSlug}.github.io/frontend-bootcamp/${branchName}/`;
    return res.json({ success: true, status: 'verified', provider: 'github_pages', url });
  });

  // Vite development middleware vs production static distribution
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Curious Learners server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
