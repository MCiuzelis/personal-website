import { useState, useEffect, useRef, useCallback } from 'react'

interface ImageSlideshowProps {
    images: string[]
}

export default function ImageSlideshow({ images }: ImageSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [hasStarted, setHasStarted] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

    // Calculate how many slides are jumped (usually 1, but can be 5 when going from last to first)
    const slideDistance = Math.abs(currentIndex - prevIndex)
    const baseDuration = 700 // in ms per 1 slide
    const transitionDuration = slideDistance * baseDuration

    // Check if a file is a video
    const isVideo = useCallback((src: string) => {
        return src.toLowerCase().endsWith('.mp4')
    }, [])

    // Visibility observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setIsVisible(true)
                    setHasStarted(true)
                } else if (!entry.isIntersecting && hasStarted) {
                    // Reset when scrolling away and back
                    setIsVisible(false)
                    setHasStarted(false)
                    setCurrentIndex(0)
                    setPrevIndex(0)
                }
            },
            { threshold: 0.3 }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [hasStarted])

    useEffect(() => {
        if (!isVisible) return

        const currentMedia = images[currentIndex]
        
        if (isVideo(currentMedia)) {
            // For videos, wait for the video to end + 400ms
            const videoElement = videoRefs.current[currentIndex]
            if (videoElement) {
                const handleVideoEnd = () => {
                    setTimeout(() => {
                        setPrevIndex(currentIndex)
                        setCurrentIndex((prev) => (prev + 1) % images.length)
                    }, 400)
                }
                
                videoElement.addEventListener('ended', handleVideoEnd)
                videoElement.play()
                
                return () => {
                    videoElement.removeEventListener('ended', handleVideoEnd)
                }
            }
        } else {
            // For images, use the original 3500ms timing
            const timeout = setTimeout(() => {
                setPrevIndex(currentIndex)
                setCurrentIndex((prev) => (prev + 1) % images.length)
            }, transitionDuration + 3000)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, isVisible, transitionDuration, images, isVideo])

    return (
        <div ref={containerRef} className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg">
            <div
                className="flex"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: `transform ${transitionDuration}ms ease-in-out`,
                }}
            >
                {images.map((media, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        {isVideo(media) ? (
                            <video
                                ref={(el) => (videoRefs.current[index] = el)}
                                src={media}
                                muted
                                playsInline
                                className="w-full h-[75vh] object-cover rounded-lg"
                            />
                        ) : (
                            <img
                                src={media}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[75vh] object-cover rounded-lg"
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Dot indicators in a glassy pill container */}
            <div className="mt-8 flex justify-center">
                <div className="backdrop-blur-md bg-white/20 rounded-full px-4 py-3 flex space-x-3 shadow-md">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                                index === currentIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                            onClick={() => {
                                setPrevIndex(currentIndex)
                                setCurrentIndex(index)
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}