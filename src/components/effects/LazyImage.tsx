// components/institutional/LazyImage.tsx
import { useState, useEffect, forwardRef, ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  rootMargin?: string;
  threshold?: number;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(
  (
    {
      src,
      alt,
      placeholderSrc,
      rootMargin = '50px',
      threshold = 0.01,
      className = '',
      onLoad,
      onError,
      loading,
      ...imgProps
    },
    ref
  ) => {
    const [imageSrc, setImageSrc] = useState<string>(placeholderSrc || '');
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInViewport, setIsInViewport] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      // Si loading es eager, cargar inmediatamente
      if (loading === 'eager') {
        setImageSrc(src);
        setIsInViewport(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInViewport(true);
              setImageSrc(src);
              observer.disconnect();
            }
          });
        },
        {
          rootMargin,
          threshold,
        }
      );

      const imgElement = document.querySelector(`[data-src="${src}"]`);
      if (imgElement) {
        observer.observe(imgElement);
      }

      return () => {
        observer.disconnect();
      };
    }, [src, loading, rootMargin, threshold]);

    const handleLoad = () => {
      setIsLoaded(true);
      onLoad?.();
    };

    const handleError = () => {
      setHasError(true);
      onError?.();
    };

    if (hasError) {
      return (
        <div
          className={`${className} bg-[#1a1a1a] flex items-center justify-center min-h-[200px]`}
          role="img"
          aria-label={`Error cargando: ${alt}`}
        >
          <div className="text-center">
            <span className="material-symbols-outlined text-slate-600 text-4xl block mb-2">
              broken_image
            </span>
            <span className="text-slate-500 text-xs uppercase tracking-wider">
              No disponible
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full h-full overflow-hidden">
        {/* Placeholder/Skeleton */}
        {!isLoaded && (
          <div
            className={`absolute inset-0 bg-[#1a1a1a] animate-pulse ${className}`}
            style={{
              backgroundImage: placeholderSrc ? `url(${placeholderSrc})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(10px)',
              transform: 'scale(1.1)',
            }}
          />
        )}

        {/* Imagen real */}
        <img
          ref={ref}
          data-src={src}
          src={imageSrc || placeholderSrc}
          alt={alt}
          className={`${className} transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'
          }`}
          loading={loading}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          {...imgProps}
        />

        {/* Efecto de brillo durante carga */}
        {!isLoaded && isInViewport && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        )}
      </div>
    );
  }
);

LazyImage.displayName = 'LazyImage';

export default LazyImage;