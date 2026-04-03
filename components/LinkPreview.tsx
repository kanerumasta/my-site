'use client';

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface LinkPreviewProps {
  url: string;
  title: string;
  description?: string;
  image?: string;
}

export function LinkPreview({ url, title, description, image }: LinkPreviewProps) {
  const domain = new URL(url).hostname.replace('www.', '');

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block my-6 w-full"
    >
      <div className="flex gap-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300 hover:border-gray-300 dark:hover:border-gray-600">
        {/* Content */}
        <div className="flex-1 p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                {title}
              </h3>
              {description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                  {description}
                </p>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                {domain}
              </p>
            </div>
            <ExternalLink size={18} className="shrink-0 text-gray-400 mt-1" />
          </div>
        </div>

        {/* Image */}
        {image && (
          <div className="hidden sm:block w-32 h-32 shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800">
            <Image
              src={image}
              alt={title}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </a>
  );
}
