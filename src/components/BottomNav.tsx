import React from 'react';
import { Home, BookOpen, FolderGit2, MessagesSquare, User } from 'lucide-react';
import { Language } from '../types';
import { t } from '../i18n/translations';

interface BottomNavProps {
  activeTab: 'home' | 'syllabus' | 'projects' | 'forum' | 'profile';
  onSelectTab: (tab: 'home' | 'syllabus' | 'projects' | 'forum' | 'profile') => void;
  language: Language;
  isLoggedIn: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onSelectTab,
  language,
  isLoggedIn
}) => {
  const tabs = [
    { id: 'home' as const, label: t.navHome[language], icon: Home },
    { id: 'syllabus' as const, label: t.navSyllabus[language], icon: BookOpen },
    { id: 'projects' as const, label: t.navProjects[language], icon: FolderGit2 },
    { id: 'forum' as const, label: t.navForum[language], icon: MessagesSquare },
    { id: 'profile' as const, label: t.navProfile[language], icon: User }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-[var(--bg-card)]/95 backdrop-blur-md transition-colors px-2 py-1.5 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-150 min-w-[64px] ${
                isActive
                  ? 'text-[var(--primary)] font-bold bg-[var(--bg-elevated)] scale-105'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)] font-medium'
              }`}
            >
              <div className="relative">
                <Icon className={`h-5 w-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
                {tab.id === 'profile' && !isLoggedIn && (
                  <span className="absolute -top-0.5 -right-1 h-2 w-2 rounded-full bg-amber-500" />
                )}
              </div>
              <span className="text-[11px] mt-1 leading-none tracking-tight">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
