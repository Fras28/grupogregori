// src/components/OptimizedImage.tsx
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = 'aspect-[4/3]',
  priority = false 
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${aspectRatio} overflow-hidden bg-[#141414]`}>
      <img
        src={src}
        alt={alt}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-all duration-700
          ${loaded ? 'opacity-100 grayscale-0' : 'opacity-0'}
          ${className}
        `}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        width="800"
        height="600"
      />
      {!loaded && (
        <div className="absolute inset-0 bg-[#1a1a1a] animate-pulse" />
      )}
    </div>
  );
};