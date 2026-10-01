import { PlaygroundTheme } from '../types/playground';

export interface ThemeDefinition {
  id: PlaygroundTheme;
  name: string;
  bg: string;
  cardBg: string;
  text: string;
  gutterBg: string;
  gutterText: string;
  border: string;
  windowChromeBg: string;
  titleColor: string;
  canvasBg: string;
  syntax: {
    keyword: string;
    string: string;
    comment: string;
    function: string;
    number: string;
    tag: string;
    attr: string;
    operator: string;
  };
}

export const PLAYGROUND_THEMES: Record<PlaygroundTheme, ThemeDefinition> = {
  'one-dark': {
    id: 'one-dark',
    name: 'One Dark',
    bg: '#282c34',
    cardBg: '#21252b',
    text: '#abb2bf',
    gutterBg: '#21252b',
    gutterText: '#4b5263',
    border: '#3e4451',
    windowChromeBg: '#21252b',
    titleColor: '#9da5b4',
    canvasBg: 'linear-gradient(135deg, #181a1f 0%, #282c34 50%, #181a1f 100%)',
    syntax: {
      keyword: '#c678dd',
      string: '#98c379',
      comment: '#5c6370',
      function: '#61afef',
      number: '#d19a66',
      tag: '#e06c75',
      attr: '#d19a66',
      operator: '#56b6c2',
    },
  },
  dracula: {
    id: 'dracula',
    name: 'Dracula',
    bg: '#282a36',
    cardBg: '#21222c',
    text: '#f8f8f2',
    gutterBg: '#21222c',
    gutterText: '#6272a4',
    border: '#44475a',
    windowChromeBg: '#21222c',
    titleColor: '#bd93f9',
    canvasBg: 'linear-gradient(135deg, #191a21 0%, #282a36 50%, #44475a 100%)',
    syntax: {
      keyword: '#ff79c6',
      string: '#f1fa8c',
      comment: '#6272a4',
      function: '#8be9fd',
      number: '#bd93f9',
      tag: '#ff79c6',
      attr: '#50fa7b',
      operator: '#ff79c6',
    },
  },
  monokai: {
    id: 'monokai',
    name: 'Monokai',
    bg: '#272822',
    cardBg: '#1e1f1c',
    text: '#f8f8f2',
    gutterBg: '#1e1f1c',
    gutterText: '#75715e',
    border: '#3e3d32',
    windowChromeBg: '#1e1f1c',
    titleColor: '#f92672',
    canvasBg: 'linear-gradient(135deg, #141411 0%, #272822 50%, #3e3d32 100%)',
    syntax: {
      keyword: '#f92672',
      string: '#e6db74',
      comment: '#75715e',
      function: '#a6e22e',
      number: '#ae81ff',
      tag: '#f92672',
      attr: '#a6e22e',
      operator: '#f92672',
    },
  },
  'github-light': {
    id: 'github-light',
    name: 'GitHub Light',
    bg: '#ffffff',
    cardBg: '#f6f8fa',
    text: '#24292e',
    gutterBg: '#f6f8fa',
    gutterText: '#6a737d',
    border: '#e1e4e8',
    windowChromeBg: '#f1f3f5',
    titleColor: '#24292e',
    canvasBg: 'linear-gradient(135deg, #d0d7de 0%, #f6f8fa 50%, #ffffff 100%)',
    syntax: {
      keyword: '#d73a49',
      string: '#032f62',
      comment: '#6a737d',
      function: '#6f42c1',
      number: '#005cc5',
      tag: '#22863a',
      attr: '#6f42c1',
      operator: '#d73a49',
    },
  },
  nord: {
    id: 'nord',
    name: 'Nord',
    bg: '#2e3440',
    cardBg: '#242933',
    text: '#d8dee9',
    gutterBg: '#242933',
    gutterText: '#4c566a',
    border: '#434c5e',
    windowChromeBg: '#242933',
    titleColor: '#88c0d0',
    canvasBg: 'linear-gradient(135deg, #1d212a 0%, #2e3440 50%, #3b4252 100%)',
    syntax: {
      keyword: '#81a1c1',
      string: '#a3be8c',
      comment: '#616e88',
      function: '#88c0d0',
      number: '#b48ead',
      tag: '#81a1c1',
      attr: '#8fbcbb',
      operator: '#81a1c1',
    },
  },
  dark: {
    id: 'dark',
    name: 'Default Dark',
    bg: '#0f172a',
    cardBg: '#1e293b',
    text: '#f8fafc',
    gutterBg: '#1e293b',
    gutterText: '#64748b',
    border: '#334155',
    windowChromeBg: '#1e293b',
    titleColor: '#38bdf8',
    canvasBg: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
    syntax: {
      keyword: '#c084fc',
      string: '#4ade80',
      comment: '#64748b',
      function: '#38bdf8',
      number: '#fb923c',
      tag: '#f43f5e',
      attr: '#facc15',
      operator: '#38bdf8',
    },
  },
  light: {
    id: 'light',
    name: 'Default Light',
    bg: '#ffffff',
    cardBg: '#f8fafc',
    text: '#0f172a',
    gutterBg: '#f1f5f9',
    gutterText: '#94a3b8',
    border: '#e2e8f0',
    windowChromeBg: '#f1f5f9',
    titleColor: '#0284c7',
    canvasBg: 'linear-gradient(135deg, #e2e8f0 0%, #ffffff 100%)',
    syntax: {
      keyword: '#9333ea',
      string: '#16a34a',
      comment: '#94a3b8',
      function: '#0284c7',
      number: '#ea580c',
      tag: '#e11d48',
      attr: '#ca8a04',
      operator: '#0284c7',
    },
  },
  'high-contrast': {
    id: 'high-contrast',
    name: 'High Contrast',
    bg: '#000000',
    cardBg: '#050505',
    text: '#ffffff',
    gutterBg: '#111111',
    gutterText: '#888888',
    border: '#ffff00',
    windowChromeBg: '#111111',
    titleColor: '#00ffff',
    canvasBg: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
    syntax: {
      keyword: '#ff00ff',
      string: '#00ff00',
      comment: '#888888',
      function: '#00ffff',
      number: '#ffaa00',
      tag: '#ff0000',
      attr: '#ffff00',
      operator: '#ffffff',
    },
  },
};

export function getThemeDef(themeId: PlaygroundTheme): ThemeDefinition {
  return PLAYGROUND_THEMES[themeId] || PLAYGROUND_THEMES['one-dark'];
}
