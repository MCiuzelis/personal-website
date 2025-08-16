import { useState, useRef, useEffect } from 'react'

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  priority?: boolean
  placeholder?: string
  className?: string
  onLoad?: () => void
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  priority = false, 
  placeholder,
  className = '',
  onLoad,
  ...props 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (priority && imgRef.current) {
      // For high priority images, start loading immediately
      const img = new Image()
      img.onload = () => {
        setIsLoaded(true)
        onLoad?.()
      }
      img.onerror = () => setHasError(true)
      img.src = src
    }
  }, [src, priority, onLoad])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          {placeholder ? (
            <img src={placeholder} alt="" className="opacity-50" />
          ) : (
            <div className="w-8 h-8 border-2 border-gray-600 border-t-gray-400 rounded-full animate-spin" />
          )}
        </div>
      )}
      
      {/* Main image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-400">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  )
}