/**
 * Chapter / Course Progression Engine
 * Curious Learners / Codazi Learning Hub
 * 
 * Maps Course → Week/Chapter → Lesson → Exercise progression.
 * Determines real unlock states based on student lesson completions.
 * Idempotently handles chapter completion rewards.
 */

import { CURRICULUM_DATA } from '../data/curriculumData';
import { ChapterState, ChapterStatus } from '../types/economy';
import { rewardEngine } from './rewardEngine';

export class ChapterEngine {
  /**
   * Calculate states for all curriculum chapters (weeks) for a given student
   */
  public getChapterStates(completedLessonIds: string[] = []): ChapterState[] {
    const states: ChapterState[] = [];
    let previousChapterCompleted = true; // Week 0 is always initially accessible

    CURRICULUM_DATA.forEach((week, idx) => {
      const totalLessons = week.lessons.length;
      const completedCount = week.lessons.filter((l) => completedLessonIds.includes(l.id)).length;
      const completionPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
      const isCompleted = totalLessons > 0 && completedCount === totalLessons;

      let status: ChapterStatus = 'LOCKED';

      if (idx === 0 || previousChapterCompleted) {
        if (isCompleted) {
          status = 'COMPLETED';
        } else if (completedCount > 0) {
          status = 'IN_PROGRESS';
        } else {
          status = 'AVAILABLE';
        }
      } else {
        status = 'LOCKED';
      }

      states.push({
        chapterId: week.id,
        order: week.order,
        status,
        totalLessons,
        completedLessonsCount: completedCount,
        completionPercentage,
        isRewardClaimed: false
      });

      // Next chapter is only unlocked if this chapter is fully completed
      previousChapterCompleted = isCompleted;
    });

    return states;
  }

  /**
   * Check if a lesson can be accessed based on chapter and prerequisite rules
   */
  public isLessonAccessible(lessonId: string, completedLessonIds: string[] = []): boolean {
    const week = CURRICULUM_DATA.find((w) => w.lessons.some((l) => l.id === lessonId));
    if (!week) return false;

    const chapterStates = this.getChapterStates(completedLessonIds);
    const chapterState = chapterStates.find((cs) => cs.chapterId === week.id);

    if (!chapterState || chapterState.status === 'LOCKED') {
      return false;
    }

    const lesson = week.lessons.find((l) => l.id === lessonId);
    if (!lesson) return false;

    // If lesson has specific prerequisites, check them
    if (lesson.prerequisiteLessonIds && lesson.prerequisiteLessonIds.length > 0) {
      return lesson.prerequisiteLessonIds.every((prereqId) => completedLessonIds.includes(prereqId));
    }

    return true;
  }

  /**
   * Check and reward chapter completion if all lessons in the chapter were completed
   */
  public checkAndRewardChapterCompletion(
    studentId: string,
    completedLessonIds: string[]
  ): { newlyCompletedChapters: string[]; rewardResults: any[] } {
    const states = this.getChapterStates(completedLessonIds);
    const newlyCompletedChapters: string[] = [];
    const rewardResults: any[] = [];

    for (const st of states) {
      if (st.status === 'COMPLETED') {
        const res = rewardEngine.processRewardEvent(studentId, 'CHAPTER_COMPLETE', st.chapterId, {
          customMetadata: { chapterOrder: st.order }
        });
        if (!res.alreadyClaimed) {
          newlyCompletedChapters.push(st.chapterId);
          rewardResults.push(res);
        }
      }
    }

    return { newlyCompletedChapters, rewardResults };
  }
}

export const chapterEngine = new ChapterEngine();
