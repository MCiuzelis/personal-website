import { useRef, useEffect, useState } from 'react'

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  fallbackImage?: string
  className?: string
  threshold?: number
}

export const LazyVideo = ({ 
  src, 
  fallbackImage, 
  className = '', 
  threshold = 0.1,
  ...props 
}: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [threshold])

  useEffect(() => {
    if (isVisible && videoRef.current && !isLoaded) {
      const video = videoRef.current
      video.src = src
      video.addEventListener('loadeddata', () => setIsLoaded(true), { once: true })
    }
  }, [isVisible, src, isLoaded])

  return (
    <div className={`relative ${className}`}>
      {fallbackImage && !isLoaded && (
        <img 
          src={fallbackImage} 
          alt="Video placeholder"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
      {!isLoaded && isVisible && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  )
}