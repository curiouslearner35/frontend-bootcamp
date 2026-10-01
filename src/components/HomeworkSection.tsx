import React from 'react';
import { Lesson, Week, Language, UserProfile } from '../types';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { MentorDashboard } from './MentorDashboard';

interface HomeworkSectionProps {
  lesson: Lesson;
  week?: Week;
  user: UserProfile | null;
  language: Language;
  isSectionProgressPassed: boolean;
  isTheoryDone?: boolean;
  isSandboxDone?: boolean;
  isTerminalDone?: boolean;
  onOpenAuth?: () => void;
}

export const HomeworkSection: React.FC<HomeworkSectionProps> = (props) => {
  const resolvedWeek =
    props.week ||
    CURRICULUM_DATA.find((w) => w.id === props.lesson.weekId) ||
    CURRICULUM_DATA[0];

  return <MentorDashboard {...props} week={resolvedWeek} />;
};
