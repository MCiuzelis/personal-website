import React from 'react'
import { useInViewStagger } from '@/hooks/useInViewStagger'

interface ImageItem {
  src: string
  alt: string
}

interface ThreeImageMosaicProps {
  images: [ImageItem, ImageItem, ImageItem]
  className?: string
  ariaLabelPrefix?: string
}

// Layout: left large square (row-span-2), right two smaller squares stacked.
// Container uses aspect-[3/2] so left becomes square and right tiles are half-size squares.
const ThreeImageMosaic: React.FC<ThreeImageMosaicProps> = ({ images, className = '', ariaLabelPrefix = 'Mosaic image' }) => {
  const { ref, visible } = useInViewStagger<HTMLDivElement>()
  const delays = [0, 150, 300]

  return (
    <div ref={ref} className={className}>
      <div className="grid grid-cols-[2fr_1fr] grid-rows-2 gap-3 aspect-[3/2]">
        <section aria-label={`${ariaLabelPrefix} 1`} className="row-span-2 rounded-xl overflow-hidden">
          <img
            src={images[0].src}
            alt={images[0].alt}
            loading="lazy"
            decoding="async"
            className={`block w-full h-full object-cover opacity-0 ${visible ? 'animate-scale-fade-in' : ''}`}
            style={{ animationDelay: visible ? `${delays[0]}ms` : undefined }}
          />
        </section>

        <section aria-label={`${ariaLabelPrefix} 2`} className="rounded-xl overflow-hidden">
          <img
            src={images[1].src}
            alt={images[1].alt}
            loading="lazy"
            decoding="async"
            className={`block w-full h-full object-cover opacity-0 ${visible ? 'animate-scale-fade-in' : ''}`}
            style={{ animationDelay: visible ? `${delays[1]}ms` : undefined }}
          />
        </section>

        <section aria-label={`${ariaLabelPrefix} 3`} className="rounded-xl overflow-hidden">
          <img
            src={images[2].src}
            alt={images[2].alt}
            loading="lazy"
            decoding="async"
            className={`block w-full h-full object-cover opacity-0 ${visible ? 'animate-scale-fade-in' : ''}`}
            style={{ animationDelay: visible ? `${delays[2]}ms` : undefined }}
          />
        </section>
      </div>
    </div>
  )
}

export default ThreeImageMosaic
