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
      <div className="grid grid-cols-[2fr_1fr] grid-rows-2 gap-1 md:gap-3 aspect-[3/2]">
        <section aria-label={`${ariaLabelPrefix} 1`} className="row-span-2 rounded-lg md:rounded-xl overflow-hidden">
          <img
            src={images[0].src}
            alt={images[0].alt}
            loading="lazy"
            decoding="async"
            className={`block w-full h-full object-cover transition-opacity duration-500 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              transitionDelay: visible ? `${delays[0]}ms` : undefined,
              willChange: visible ? 'auto' : 'opacity'
            }}
          />
        </section>

        <section aria-label={`${ariaLabelPrefix} 2`} className="rounded-lg md:rounded-xl overflow-hidden">
          <img
            src={images[1].src}
            alt={images[1].alt}
            loading="lazy"
            decoding="async"
            className={`block w-full h-full object-cover transition-opacity duration-500 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              transitionDelay: visible ? `${delays[1]}ms` : undefined,
              willChange: visible ? 'auto' : 'opacity'
            }}
          />
        </section>

        <section aria-label={`${ariaLabelPrefix} 3`} className="rounded-lg md:rounded-xl overflow-hidden">
          <img
            src={images[2].src}
            alt={images[2].alt}
            loading="lazy"
            decoding="async"
            className={`block w-full h-full object-cover transition-opacity duration-500 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              transitionDelay: visible ? `${delays[2]}ms` : undefined,
              willChange: visible ? 'auto' : 'opacity'
            }}
          />
        </section>
      </div>
    </div>
  )
}

export default ThreeImageMosaic
