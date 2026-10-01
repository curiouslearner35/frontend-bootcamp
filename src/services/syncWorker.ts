/**
 * Caveman Background Sync Worker
 * Pushes queued local state mutations to server with retry logic
 */

import { SyncMutation } from '../types';
import { loadSyncQueue, saveSyncQueue } from './storage';

let isWorkerRunning = false;

export function queueMutation(type: SyncMutation['type'], payload: any): SyncMutation {
  const mutation: SyncMutation = {
    id: `sync-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    type,
    payload,
    timestamp: Date.now(),
    status: 'pending',
    retryCount: 0
  };

  const currentQueue = loadSyncQueue();
  const updatedQueue = [...currentQueue, mutation];
  saveSyncQueue(updatedQueue);

  // Trigger immediate background sync
  processSyncQueue();

  return mutation;
}

export async function sendMutationToServer(mutation: SyncMutation): Promise<boolean> {
  try {
    const response = await fetch('/api/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mutation)
    });

    if (response.ok) {
      return true;
    }
    return false;
  } catch (err) {
    // Network or server error - gracefully handle offline fallback
    return false;
  }
}

export async function processSyncQueue(): Promise<void> {
  if (isWorkerRunning) return;

  const queue = loadSyncQueue();
  const pending = queue.filter(item => item.status === 'pending' || item.status === 'failed');

  if (pending.length === 0) return;

  isWorkerRunning = true;

  const remainingQueue: SyncMutation[] = [];

  for (const item of queue) {
    if (item.status === 'synced') {
      continue; // Remove already synced items from local persistent queue
    }

    if (item.status === 'pending' || item.status === 'failed') {
      item.status = 'syncing';
      saveSyncQueue(queue);

      const success = await sendMutationToServer(item);

      if (success) {
        item.status = 'synced';
      } else {
        item.status = 'failed';
        item.retryCount += 1;
        remainingQueue.push(item);
      }
    } else {
      remainingQueue.push(item);
    }
  }

  saveSyncQueue(remainingQueue);
  isWorkerRunning = false;
}

export function startBackgroundSyncWorker(intervalMs: number = 10000): () => void {
  // Run once immediately
  processSyncQueue();

  // Schedule periodic background worker run
  const intervalId = setInterval(() => {
    processSyncQueue();
  }, intervalMs);

  return () => clearInterval(intervalId);
}
