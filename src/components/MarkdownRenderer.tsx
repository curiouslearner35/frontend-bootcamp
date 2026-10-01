import React, { useState } from 'react';
import { Copy, Check, Code2, Terminal, BookOpen, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // Render inline formatting: **bold**, `code`, [link](url)
  const renderInline = (text: string): React.ReactNode[] => {
    // Regex matches **bold**, `inline code`, or [link text](url)
    const regex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const innerText = part.slice(2, -2);
        return (
          <strong key={index} className="font-bold text-cyan-300">
            {innerText}
          </strong>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        const innerText = part.slice(1, -1);
        return (
          <code
            key={index}
            className="px-1.5 py-0.5 mx-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-amber-300 font-mono text-[0.85em] inline-block"
          >
            {innerText}
          </code>
        );
      }
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        return (
          <a
            key={index}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 font-medium transition-colors"
          >
            {linkMatch[1]}
          </a>
        );
      }
      return part;
    });
  };

  // Parse markdown content into structured block elements
  const parseBlocks = (raw: string) => {
    const blocks: Array<{
      type: 'heading' | 'code' | 'list' | 'paragraph';
      level?: number;
      language?: string;
      code?: string;
      items?: string[];
      text?: string;
    }> = [];

    const lines = raw.split('\n');
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Code blocks (```lang ... ```)
      if (line.trim().startsWith('```')) {
        const lang = line.trim().replace(/^```/, '').trim();
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        blocks.push({
          type: 'code',
          language: lang || 'code',
          code: codeLines.join('\n')
        });
        i++;
        continue;
      }

      // Headings (#, ##, ###, ####, #####)
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        blocks.push({
          type: 'heading',
          level: headingMatch[1].length,
          text: headingMatch[2].trim()
        });
        i++;
        continue;
      }

      // Unordered List Items (- or *)
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const listItems: string[] = [];
        while (
          i < lines.length &&
          (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))
        ) {
          listItems.push(lines[i].trim().replace(/^[-*]\s+/, ''));
          i++;
        }
        blocks.push({
          type: 'list',
          items: listItems
        });
        continue;
      }

      // Blank line skip
      if (!line.trim()) {
        i++;
        continue;
      }

      // Paragraph / Multiline text block
      const paraLines: string[] = [line];
      i++;
      while (
        i < lines.length &&
        lines[i].trim() &&
        !lines[i].trim().startsWith('```') &&
        !lines[i].match(/^(#{1,6})\s+/) &&
        !lines[i].trim().startsWith('- ') &&
        !lines[i].trim().startsWith('* ')
      ) {
        paraLines.push(lines[i]);
        i++;
      }
      blocks.push({
        type: 'paragraph',
        text: paraLines.join('\n')
      });
    }

    return blocks;
  };

  const blocks = parseBlocks(content);

  return (
    <div className={`space-y-4 text-slate-200 leading-relaxed font-sans ${className}`}>
      {blocks.map((block, idx) => {
        if (block.type === 'heading') {
          const text = block.text || '';
          if (block.level === 1 || block.level === 2 || block.level === 3) {
            return (
              <div key={idx} className="pt-3 pb-1 border-b border-slate-800/80">
                <h3 className="text-base sm:text-lg font-bold font-mono text-cyan-400 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>{renderInline(text)}</span>
                </h3>
              </div>
            );
          }
          return (
            <div key={idx} className="pt-2">
              <h4 className="text-sm font-semibold font-mono text-amber-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>{renderInline(text)}</span>
              </h4>
            </div>
          );
        }

        if (block.type === 'code') {
          return (
            <CodeBlock
              key={idx}
              language={block.language || 'code'}
              code={block.code || ''}
            />
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={idx} className="space-y-2 pl-1 text-xs sm:text-sm">
              {block.items?.map((item, itemIdx) => {
                const isDo = item.toLowerCase().startsWith('**do**:') || item.toLowerCase().startsWith('**করুন**:');
                const isDont = item.toLowerCase().startsWith("**don't**:") || item.toLowerCase().startsWith('**এড়িয়ে চলুন**:');

                return (
                  <li key={itemIdx} className="flex items-start gap-2.5 leading-relaxed">
                    {isDo ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : isDont ? (
                      <AlertTriangle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80 shrink-0 mt-2" />
                    )}
                    <span className="text-slate-300">{renderInline(item)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        if (block.type === 'paragraph') {
          return (
            <p key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {renderInline(block.text || '')}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
};

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-3 rounded-2xl border border-slate-800 bg-[#0d1117] overflow-hidden shadow-lg group">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-slate-800/80 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          {language === 'javascript' || language === 'js' || language === 'ts' ? (
            <Code2 className="h-3.5 w-3.5 text-amber-400" />
          ) : language === 'html' || language === 'css' ? (
            <Code2 className="h-3.5 w-3.5 text-cyan-400" />
          ) : (
            <Terminal className="h-3.5 w-3.5 text-indigo-400" />
          )}
          <span className="uppercase text-[10px] tracking-wider font-semibold text-slate-300">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 text-[11px] font-mono transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3 text-slate-400 group-hover:text-slate-200" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-xs sm:text-sm text-cyan-100 leading-relaxed whitespace-pre">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
