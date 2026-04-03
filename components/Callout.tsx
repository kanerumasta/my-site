'use client';

import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children: React.ReactNode;
}

const calloutStyles = {
  info: {
    bg: 'bg-blue-50 dark:bg-blue-950',
    border: 'border-blue-200 dark:border-blue-800',
    text: 'text-blue-900 dark:text-blue-100',
    icon: 'text-blue-600 dark:text-blue-400',
    Icon: Info,
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-yellow-950',
    border: 'border-yellow-200 dark:border-yellow-800',
    text: 'text-yellow-900 dark:text-yellow-100',
    icon: 'text-yellow-600 dark:text-yellow-400',
    Icon: AlertTriangle,
  },
  error: {
    bg: 'bg-red-50 dark:bg-red-950',
    border: 'border-red-200 dark:border-red-800',
    text: 'text-red-900 dark:text-red-100',
    icon: 'text-red-600 dark:text-red-400',
    Icon: AlertCircle,
  },
  success: {
    bg: 'bg-green-50 dark:bg-green-950',
    border: 'border-green-200 dark:border-green-800',
    text: 'text-green-900 dark:text-green-100',
    icon: 'text-green-600 dark:text-green-400',
    Icon: CheckCircle,
  },
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = calloutStyles[type];
  const { Icon } = styles;

  return (
    <div
      className={`flex gap-3 rounded-lg border-l-4 ${styles.bg} ${styles.border} p-4 my-6`}
    >
      <Icon className={`mt-0.5 shrink-0 ${styles.icon}`} size={20} />
      <div className={`flex-1 ${styles.text}`}>
        {title && <div className="font-semibold mb-1">{title}</div>}
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
