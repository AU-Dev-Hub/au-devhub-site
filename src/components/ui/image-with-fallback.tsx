import { useState } from "react";
import { cn } from "@/lib/utils";
import { defaultAvatarPlaceholder, defaultLogoPlaceholder, createPlaceholderImage } from "@/lib/placeholders";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  showLoadingPlaceholder?: boolean;
}

const ImageWithFallback = ({ 
  src, 
  fallbackSrc, 
  alt, 
  className, 
  showLoadingPlaceholder = true,
  ...props 
}: ImageWithFallbackProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Default fallback images based on common use cases
  const getDefaultFallback = () => {
    // If it's an avatar/profile image (common patterns)
    if (alt.toLowerCase().includes('avatar') || 
        alt.toLowerCase().includes('profile') || 
        alt.toLowerCase().includes('student') ||
        alt.toLowerCase().includes('member') ||
        className?.includes('rounded-full')) {
      return defaultAvatarPlaceholder(160);
    }
    
    // If it's a logo
    if (alt.toLowerCase().includes('logo') || alt.toLowerCase().includes('au dev hub')) {
      return defaultLogoPlaceholder(100);
    }
    
    // Generic placeholder
    return createPlaceholderImage(200, 200, '📷', '#f3f4f6', '#9ca3af');
  };

  const finalFallbackSrc = fallbackSrc || getDefaultFallback();

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  return (
    <div className="relative inline-block">
      {showLoadingPlaceholder && imageLoading && (
        <div className={cn(
          "absolute inset-0 bg-muted animate-pulse",
          className?.includes('rounded-full') ? 'rounded-full' : 'rounded',
          className
        )} />
      )}
      <img
        {...props}
        src={imageError ? finalFallbackSrc : src}
        alt={alt}
        className={cn(
          imageLoading && showLoadingPlaceholder ? 'opacity-0' : 'opacity-100',
          'transition-opacity duration-200',
          className
        )}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
};

export default ImageWithFallback;