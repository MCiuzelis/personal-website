import React from 'react'
import { useInViewStagger } from '@/hooks/useInViewStagger'

interface ImageItem {
  src: string
  alt: string
}

interface FourImageMosaicProps {
  images: [ImageItem, ImageItem, ImageItem, ImageItem]
  className?: string
  ariaLabelPrefix?: string
}

const FourImageMosaic: React.FC<FourImageMosaicProps> = ({ images, className = '', ariaLabelPrefix = 'Mosaic image' }) => {
  const { ref, visible } = useInViewStagger<HTMLDivElement>()

  const delays = [0, 150, 300, 450]

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${className}`}>
      {images.map((img, idx) => (
        <section key={idx} aria-label={`${ariaLabelPrefix} ${idx + 1}`} className="rounded-xl overflow-hidden aspect-square">
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            decoding="async"
            className={`block w-full h-full object-cover transition-opacity duration-500 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              transitionDelay: visible ? `${delays[idx]}ms` : undefined,
              willChange: visible ? 'auto' : 'opacity'
            }}
          />
        </section>
      ))}
    </div>
  )
}

export default FourImageMosaic
