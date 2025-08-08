import React, { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import FourImageMosaic from '@/components/FourImageMosaic'

import imgA from '@/assets/ProjectThumbnails/spinLaunch.jpeg'
import imgB from '@/assets/ProjectThumbnails/card2.jpg'
import imgC from '@/assets/ProjectThumbnails/card3.jpg'
import imgD from '@/assets/ProjectThumbnails/card4.jpg'

const KineticLaunchPlatform: React.FC = () => {
  // SEO
  useEffect(() => {
    const title = 'Kinetic Model Launch Platform'
    document.title = title
    const desc = 'Kinetic model launch platform project with image mosaic. More info coming soon.'
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = desc

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = window.location.origin + '/KineticLaunchPlatform'
  }, [])

  return (
    <>
      <Navigation pageType="kinetic" scrollOffset={0} />

      <header className="bg-black px-8 pt-20">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h1 className="section-heading text-white mb-12">Kinetic Model Launch Platform</h1>
          <FourImageMosaic
            images={[
              { src: imgA, alt: 'Kinetic launch platform image 1' },
              { src: imgB, alt: 'Kinetic launch platform image 2' },
              { src: imgC, alt: 'Kinetic launch platform image 3' },
              { src: imgD, alt: 'Kinetic launch platform image 4' },
            ]}
            className="mx-auto w-[min(82vw,82vh)]"
            ariaLabelPrefix="Kinetic launch platform image"
          />
        </div>
      </header>

      <main className="bg-black px-8 pb-24 pt-16">
        <section className="max-w-screen-2xl mx-auto">
          <p className="text-white text-center text-2xl md:text-4xl lg:text-5xl font-semibold">
            still in development, more information coming soon
          </p>
        </section>
      </main>
    </>
  )
}

export default KineticLaunchPlatform
