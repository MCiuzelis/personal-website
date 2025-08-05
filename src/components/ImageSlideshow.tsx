import { useState, useEffect } from 'react'
import card1 from '@/assets/card1.jpg'
import card2 from '@/assets/card2.jpg'
import card3 from '@/assets/card3.jpg'
import card4 from '@/assets/card4.jpg'
import card5 from '@/assets/card5.jpg'
import card6 from '@/assets/card6.jpg'
import card7 from '@/assets/card7.jpg'
import card8 from '@/assets/card8.jpg'

const images = [card1, card2, card3, card4, card5, card6, card7, card8]

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
      <div 
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}