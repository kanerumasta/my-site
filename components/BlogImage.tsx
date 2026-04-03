'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export function BlogImage({ src, alt, caption, width = 800, height = 400 }: BlogImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <figure className="my-8">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-auto transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          priority={false}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-foreground/60 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
