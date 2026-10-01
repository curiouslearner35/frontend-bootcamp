import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CodeVisualizerConfig, ExportFormat, VisualizerExportPackage, VisualizerTheme, VisualizerFont } from '../types/visualizer';
import { VISUALIZER_THEMES } from '../config/visualizerThemes';
import { VISUALIZER_FONTS } from '../config/visualizerFonts';
import { generateSafeFilename, sanitizeCodeForXml } from '../utils/visualizerDefaults';
import { renderHighlightedSvgTokens } from '../utils/simpleSyntaxHighlighter';

export interface ExportResult {
  success: boolean;
  filename: string;
  error?: string;
}

export async function exportVisualizer(
  format: ExportFormat,
  config: CodeVisualizerConfig,
  previewElement?: HTMLElement | null
): Promise<ExportResult> {
  const title = config.title || 'code-snippet';

  try {
    switch (format) {
      case 'png':
        return await exportToPng(config, previewElement, title);
      case 'svg':
        return exportToSvg(config, title);
      case 'pdf':
        return await exportToPdf(config, previewElement, title);
      case 'markdown':
        return exportToMarkdown(config, title);
      case 'json':
        return exportToJson(config, title);
      case 'txt':
        return exportToTxt(config, title);
      case 'html':
        return exportToHtml(config, title);
      default:
        throw new Error(`Unsupported export format: ${format}`);
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown export error';
    return {
      success: false,
      filename: generateSafeFilename(title, format),
      error: message,
    };
  }
}

async function exportToPng(
  config: CodeVisualizerConfig,
  element?: HTMLElement | null,
  title?: string
): Promise<ExportResult> {
  if (!element) {
    throw new Error('Preview element reference is missing for PNG export');
  }

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: null,
    logging: false,
  });

  const dataUrl = canvas.toDataURL('image/png');
  const filename = generateSafeFilename(title, 'png');
  downloadDataUrl(dataUrl, filename);

  return { success: true, filename };
}

function exportToSvg(config: CodeVisualizerConfig, title?: string): ExportResult {
  const theme: VisualizerTheme = VISUALIZER_THEMES[config.theme] || VISUALIZER_THEMES.onedark;
  const font: VisualizerFont = VISUALIZER_FONTS[config.font] || VISUALIZER_FONTS['fira-code'];
  const lines = (config.code || '').split('\n');

  const lineHeight = Math.round(config.fontSize * 1.5);
  const codeHeight = lines.length * lineHeight;
  const chromeHeight = config.windowStyle !== 'none' ? 40 : 0;
  const totalWidth = 800;
  const totalHeight = codeHeight + chromeHeight + config.padding * 2 + 40;

  let windowChromeSvg = '';
  if (config.windowStyle === 'mac') {
    windowChromeSvg = `
      <circle cx="25" cy="20" r="6" fill="#ff5f56"/>
      <circle cx="45" cy="20" r="6" fill="#ffbd2e"/>
      <circle cx="65" cy="20" r="6" fill="#27c93f"/>
    `;
  } else if (config.windowStyle === 'windows') {
    windowChromeSvg = `
      <text x="730" y="24" fill="${theme.foreground}" font-size="12" font-family="sans-serif">─  ▢  ✕</text>
    `;
  }

  let codeTspans = '';
  lines.forEach((line, idx) => {
    const y = chromeHeight + config.padding + (idx + 1) * lineHeight;
    const lineNumber = (idx + 1).toString().padStart(2, ' ');
    const highlightedLine = renderHighlightedSvgTokens(line, theme);
    codeTspans += `
      <text x="${config.padding + 20}" y="${y}" fill="${theme.foreground}">
        <tspan fill="${theme.syntax.comment}" opacity="0.5">${lineNumber}  </tspan>
        ${highlightedLine}
      </text>
    `;
  });

  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${totalHeight}" viewBox="0 0 ${totalWidth} ${totalHeight}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .bg { fill: url(#bg-grad); }
      .surface { fill: ${theme.surface}; stroke: ${theme.border}; stroke-width: 1px; rx: 12px; }
      .code-text { font-family: ${font.fontFamily}; font-size: ${config.fontSize}px; }
    </style>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${theme.isDark ? '#1e2227' : '#f6f8fa'}"/>
      <stop offset="100%" stop-color="${theme.isDark ? '#282c34' : '#e1e4e8'}"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" class="bg" rx="16"/>

  <g transform="translate(${config.padding}, ${config.padding})">
    <rect width="${totalWidth - config.padding * 2}" height="${totalHeight - config.padding * 2}" class="surface"/>
    ${windowChromeSvg}
    <g class="code-text">
      ${codeTspans}
    </g>
  </g>
</svg>`;

  const filename = generateSafeFilename(title, 'svg');
  downloadBlob(new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' }), filename);

  return { success: true, filename };
}

async function exportToPdf(
  config: CodeVisualizerConfig,
  element?: HTMLElement | null,
  title?: string
): Promise<ExportResult> {
  const filename = generateSafeFilename(title, 'pdf');

  if (element) {
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(filename);
    return { success: true, filename };
  }

  // Fallback text-based PDF
  const pdf = new jsPDF();
  pdf.setFont('courier');
  pdf.setFontSize(10);
  pdf.text(config.code || '', 10, 10);
  pdf.save(filename);

  return { success: true, filename };
}

function exportToMarkdown(config: CodeVisualizerConfig, title?: string): ExportResult {
  const safeCode = (config.code || '').replace(/```/g, '`\\`\\`');
  const mdContent = `# ${config.title || 'Code Snippet'}

\`\`\`${config.language}
${safeCode}
\`\`\`

---
*Exported from Curious Learners Code Visualizer*
`;

  const filename = generateSafeFilename(title, 'md');
  downloadBlob(new Blob([mdContent], { type: 'text/markdown;charset=utf-8' }), filename);

  return { success: true, filename };
}

function exportToJson(config: CodeVisualizerConfig, title?: string): ExportResult {
  const pkg: VisualizerExportPackage = {
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    config,
  };

  const jsonString = JSON.stringify(pkg, null, 2);
  const filename = generateSafeFilename(title, 'json');
  downloadBlob(new Blob([jsonString], { type: 'application/json;charset=utf-8' }), filename);

  return { success: true, filename };
}

function exportToTxt(config: CodeVisualizerConfig, title?: string): ExportResult {
  const filename = generateSafeFilename(title, 'txt');
  downloadBlob(new Blob([config.code || ''], { type: 'text/plain;charset=utf-8' }), filename);

  return { success: true, filename };
}

function exportToHtml(config: CodeVisualizerConfig, title?: string): ExportResult {
  const theme = VISUALIZER_THEMES[config.theme] || VISUALIZER_THEMES.onedark;
  const font = VISUALIZER_FONTS[config.font] || VISUALIZER_FONTS['fira-code'];
  const escapedCode = sanitizeCodeForXml(config.code || '');

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sanitizeCodeForXml(config.title || 'Code Snippet')}</title>
  <style>
    body {
      margin: 0;
      padding: ${config.padding}px;
      background: ${theme.background};
      font-family: ${font.fontFamily};
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .window {
      background-color: ${theme.surface};
      border: 1px solid ${theme.border};
      border-radius: 12px;
      overflow: hidden;
      width: 100%;
      max-width: 800px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    }
    .header {
      padding: 12px 16px;
      border-bottom: 1px solid ${theme.border};
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .dot { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }
    .dot-red { background: #ff5f56; }
    .dot-yellow { background: #ffbd2e; }
    .dot-green { background: #27c93f; }
    pre {
      margin: 0;
      padding: 20px;
      color: ${theme.foreground};
      font-size: ${config.fontSize}px;
      line-height: 1.6;
      overflow-x: auto;
    }
  </style>
</head>
<body>
  <div class="window">
    ${
      config.windowStyle === 'mac'
        ? `<div class="header">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>`
        : ''
    }
    <pre><code>${escapedCode}</code></pre>
  </div>
</body>
</html>`;

  const filename = generateSafeFilename(title, 'html');
  downloadBlob(new Blob([htmlContent], { type: 'text/html;charset=utf-8' }), filename);

  return { success: true, filename };
}

function downloadDataUrl(dataUrl: string, filename: string): void {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  downloadDataUrl(url, filename);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
