'use client';

import { Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sql';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language = 'javascript', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    try {
      const highlighted = Prism.highlight(
        code,
        Prism.languages[language] || Prism.languages.javascript,
        language
      );
      setHighlightedCode(highlighted);
    } catch (error) {
      console.error('Syntax highlighting error:', error);
      setHighlightedCode(code);
    }
  }, [code, language]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="my-6 overflow-hidden rounded-lg bg-gray-900 dark:bg-gray-950">
      {/* Header */}
      {filename && (
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2 dark:bg-gray-900">
          <span className="text-sm font-mono text-gray-400">{filename}</span>
          <span className="text-xs text-gray-500">{language}</span>
        </div>
      )}

      {/* Code Container */}
      <div className="relative">
        <pre style={{ whiteSpace: 'pre' }} className="overflow-x-auto p-4 m-0" suppressHydrationWarning>
          <code
            className={`font-mono text-sm language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode || code }}
            suppressHydrationWarning
          />
        </pre>

        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className="absolute right-4 top-4 rounded bg-gray-700 p-2 text-gray-300 transition hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
          title="Copy code"
        >
          {copied ? (
            <Check size={18} className="text-green-400" />
          ) : (
            <Copy size={18} />
          )}
        </button>
      </div>
    </div>
  );
}
