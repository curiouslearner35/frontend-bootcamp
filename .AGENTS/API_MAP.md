# API Map — Curious Learners Express Backend

All backend APIs are defined in `server.ts` running on port 3000.

## 1. Public & Core Endpoints

### `GET /api/health`
- **Purpose**: System health check.
- **Auth**: None (Public).
- **Response**: `{ status: 'ok', timestamp: string }`

### `GET /api/syllabus`
- **Purpose**: Retrieves curriculum syllabus overview cached via in-memory Redis TTL store.
- **Auth**: None (Public).
- **Response**: `{ source: 'redis' | 'database', data: SyllabusWeek[] }`

### `GET /api/certificates/:id`
- **Purpose**: Verifies public certificate credential.
- **Auth**: None (Public).
- **Response**: `{ valid: boolean, certificate?: PublicCertificate, error?: string }`

---

## 2. Activity & Synchronization Endpoints

### `POST /api/sync`
- **Purpose**: Batch receiver for client offline mutation queue.
- **Auth**: Public client worker.
- **Body**: `{ type: string, id: string, payload: any }`
- **Response**: `{ status: 'synced', mutationId: string, processedAt: number }`

### `POST /api/activity/events`
- **Purpose**: WakaTime-style activity event ingestion with idempotent event ID deduplication.
- **Auth**: Student session.
- **Body**: `{ studentId: string, events: ActivityEvent[] }`
- **Response**: `{ status: 'synced', processedCount: number, totalEvents: number, serverTimestamp: number }`

### `GET /api/activity/summary/:studentId`
- **Purpose**: Retrieves summary activity stats for a student.
- **Auth**: Student session.
- **Response**: `{ studentId: string, status: string, timestamp: number }`

---

## 3. Instructor Control Plane Endpoints (`/api/root/*`)

### `POST /api/root/auth`
- **Purpose**: Authenticates instructor with Root Master Key (`ROOT_MASTER_KEY`).
- **Auth**: Master Key. Protected by IP rate limiting (lockout after 5 failed attempts for 15 mins).
- **Body**: `{ masterKey: string }`
- **Response**: `{ success: boolean, token?: string, expiresAt?: number, role?: string, error?: string }`

### `GET /api/root/verify-session`
- **Purpose**: Validates active Root Commander session token.
- **Header**: `Authorization: Bearer <token>` or `x-root-session: <token>`
- **Response**: `{ valid: boolean, expiresAt?: number, role?: string }`

### `POST /api/root/logout`
- **Purpose**: Revokes current Root session token.
- **Header**: `Authorization: Bearer <token>`
- **Response**: `{ success: boolean, message: string }`

### `GET /api/root/audit`
- **Purpose**: Retrieves audit trail event log (max limit 100).
- **Auth**: Root Commander.
- **Response**: `{ logs: AuditEvent[], total: number }`

### `POST /api/root/audit`
- **Purpose**: Records a new administrative audit event.
- **Auth**: Root Commander.
- **Body**: `{ actor: string, action: string, target: string, details: string, status: 'SUCCESS' | 'WARNING' | 'FAILED' }`
- **Response**: `{ success: boolean, event: AuditEvent }`

### `POST /api/root/certificates/issue`
- **Purpose**: Mints a new verifiable student graduation certificate.
- **Auth**: Root Commander.
- **Body**: `{ studentName: string, studentEmail?: string, program?: string, completionDate?: string, curriculumStats?: string }`
- **Response**: `{ success: boolean, certificate: CertificateRecord }`

### `POST /api/root/certificates/revoke`
- **Purpose**: Revokes an existing certificate credential.
- **Auth**: Root Commander.
- **Body**: `{ id: string, reason?: string }`
- **Response**: `{ success: boolean, certificate: CertificateRecord }`
