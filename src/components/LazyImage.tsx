import { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      console.log(`Image loaded successfully: ${src}`);
      setImageSrc(src);
      setLoading(false);
      setError(false);
    };

    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setError(true);
      setLoading(false);
    };

    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (error) {
    return (
      <div className={`${className} bg-gray-800 flex items-center justify-center`}>
        <span className="text-red-400 text-sm">Failed to load image</span>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={`${className} bg-gray-700 animate-pulse flex items-center justify-center`}>
        <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
};

export default LazyImage;