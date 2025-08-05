import { useState, useEffect } from 'react'
import image1 from '@/assets/VLR_Page/Slideshow/img1.jpeg'
import image2 from '@/assets/VLR_Page/Slideshow/img2.jpeg'
import image3 from '@/assets/VLR_Page/Slideshow/img3.jpeg'
import image4 from '@/assets/VLR_Page/Slideshow/img4.jpeg'
import image5 from '@/assets/VLR_Page/Slideshow/img5.jpeg'
import image6 from '@/assets/VLR_Page/Slideshow/img6.jpeg'

const images = [image1, image2, image3, image4, image5, image6]

export default function ImageSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(0)

    // Calculate how many slides are jumped (usually 1, but can be 5 when going from last to first)
    const slideDistance = Math.abs(currentIndex - prevIndex)
    const baseDuration = 700 // in ms per 1 slide
    const transitionDuration = slideDistance * baseDuration

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPrevIndex(currentIndex)
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, transitionDuration + 3500) // Wait for animation + full visible time

        return () => clearTimeout(timeout)
    }, [currentIndex])

    return (
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg">
            <div
                className="flex"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: `transform ${transitionDuration}ms ease-in-out`,
                }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-[75vh] object-cover rounded-lg"
                        />
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