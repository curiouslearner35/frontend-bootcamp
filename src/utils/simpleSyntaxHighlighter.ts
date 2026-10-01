import { VisualizerTheme } from '../types/visualizer';
import { sanitizeCodeForXml } from './visualizerDefaults';

export interface Token {
  type: 'keyword' | 'string' | 'comment' | 'number' | 'function' | 'operator' | 'plain';
  value: string;
}

const KEYWORDS = new Set([
  'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'do',
  'switch', 'case', 'break', 'default', 'import', 'export', 'from', 'class', 'extends',
  'interface', 'type', 'async', 'await', 'try', 'catch', 'finally', 'throw', 'new',
  'typeof', 'instanceof', 'void', 'this', 'super', 'true', 'false', 'null', 'undefined',
  'def', 'self', 'lambda', 'with', 'as', 'pass', 'raise', 'SELECT', 'FROM', 'WHERE',
  'INSERT', 'UPDATE', 'DELETE', 'JOIN', 'ON', 'GROUP', 'BY', 'ORDER', 'HAVING'
]);

export function tokenizeCode(code: string): Token[] {
  const tokens: Token[] = [];
  let remaining = code;

  while (remaining.length > 0) {
    // Comments
    if (remaining.startsWith('//') || remaining.startsWith('#')) {
      const lineEnd = remaining.indexOf('\n');
      const commentText = lineEnd === -1 ? remaining : remaining.slice(0, lineEnd);
      tokens.push({ type: 'comment', value: commentText });
      remaining = lineEnd === -1 ? '' : remaining.slice(lineEnd);
      continue;
    }

    // Strings
    if (remaining[0] === '"' || remaining[0] === "'" || remaining[0] === '`') {
      const quote = remaining[0];
      let endIdx = 1;
      while (endIdx < remaining.length && (remaining[endIdx] !== quote || remaining[endIdx - 1] === '\\')) {
        endIdx++;
      }
      if (endIdx < remaining.length) endIdx++; // include closing quote
      tokens.push({ type: 'string', value: remaining.slice(0, endIdx) });
      remaining = remaining.slice(endIdx);
      continue;
    }

    // Numbers
    const numMatch = remaining.match(/^[0-9]+(\.[0-9]+)?/);
    if (numMatch) {
      tokens.push({ type: 'number', value: numMatch[0] });
      remaining = remaining.slice(numMatch[0].length);
      continue;
    }

    // Identifiers (keywords, functions, variables)
    const idMatch = remaining.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*/);
    if (idMatch) {
      const word = idMatch[0];
      if (KEYWORDS.has(word) || KEYWORDS.has(word.toUpperCase())) {
        tokens.push({ type: 'keyword', value: word });
      } else if (remaining.slice(word.length).trimStart().startsWith('(')) {
        tokens.push({ type: 'function', value: word });
      } else {
        tokens.push({ type: 'plain', value: word });
      }
      remaining = remaining.slice(word.length);
      continue;
    }

    // Operators / Symbols
    const opMatch = remaining.match(/^[+\-*/=<>!&|^~%:]+/);
    if (opMatch) {
      tokens.push({ type: 'operator', value: opMatch[0] });
      remaining = remaining.slice(opMatch[0].length);
      continue;
    }

    // Plain text / Whitespace / Newlines
    tokens.push({ type: 'plain', value: remaining[0] });
    remaining = remaining.slice(1);
  }

  return tokens;
}

export function renderHighlightedSvgTokens(code: string, theme: VisualizerTheme): string {
  const tokens = tokenizeCode(code);
  let xml = '';

  for (const token of tokens) {
    const escaped = sanitizeCodeForXml(token.value);
    let color = theme.foreground;

    if (token.type === 'keyword') color = theme.syntax.keyword;
    else if (token.type === 'string') color = theme.syntax.string;
    else if (token.type === 'comment') color = theme.syntax.comment;
    else if (token.type === 'number') color = theme.syntax.number;
    else if (token.type === 'function') color = theme.syntax.function;
    else if (token.type === 'operator') color = theme.syntax.operator;

    if (color !== theme.foreground) {
      xml += `<tspan fill="${color}">${escaped}</tspan>`;
    } else {
      xml += escaped;
    }
  }

  return xml;
}
