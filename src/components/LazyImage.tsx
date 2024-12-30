import { useState, useEffect, useCallback } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { toast } = useToast();

  // Implement image preloading
  const preloadImage = useCallback(() => {
    const img = new Image();
    
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
      toast({
        variant: "destructive",
        title: "Image Load Error",
        description: "Failed to load image. Please try refreshing the page.",
      });
    };

    // Add timestamp to prevent caching issues
    const timestamp = new Date().getTime();
    img.src = `${src}?t=${timestamp}`;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, toast]);

  useEffect(() => {
    const cleanup = preloadImage();
    return cleanup;
  }, [preloadImage]);

  // Implement retry mechanism
  const handleRetry = () => {
    setLoading(true);
    setError(false);
    preloadImage();
  };

  if (error) {
    return (
      <div className={`${className} bg-gray-800 flex flex-col items-center justify-center p-4 rounded-lg`}>
        <span className="text-red-400 text-sm mb-2">Failed to load image</span>
        <button 
          onClick={handleRetry}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <Skeleton className="w-full h-full min-h-[200px]" />
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={handleRetry}
      fetchPriority="high"
    />
  );
};

export default LazyImage;