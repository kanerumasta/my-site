'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface TerminalProps {
  command?: string;
  output: string;
}

export function Terminal({ command, output }: TerminalProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    const textToCopy = command ? `${command}\n${output}` : output;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="my-6 overflow-hidden rounded-lg bg-gray-900 dark:bg-gray-950">
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-3 dark:bg-gray-900 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm font-mono text-gray-400 ml-2">terminal</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="rounded bg-gray-700 p-2 text-gray-300 transition hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
          title="Copy output"
        >
          {copied ? (
            <Check size={18} className="text-green-400" />
          ) : (
            <Copy size={18} />
          )}
        </button>
      </div>

      {/* Terminal Content */}
      <div className="relative">
        <pre className="overflow-x-auto p-4 m-0">
          <code className="font-mono text-sm text-green-400">
            {command && (
              <>
                <span className="text-gray-400">$ </span>
                {command}
                {'\n'}
              </>
            )}
            <span className="text-green-300">{output}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
