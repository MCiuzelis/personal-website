import React, { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import ThreeImageMosaic from '@/components/ThreeImageMosaic'

import img1 from '@/assets/KineticLaunchPlatform/image1.jpg'
import img2 from '@/assets/KineticLaunchPlatform/image2.jpeg'
import img3 from '@/assets/KineticLaunchPlatform/image3.jpeg'

const KineticLaunchPlatform: React.FC = () => {
  // SEO
  useEffect(() => {
    const title = 'Kinetic Model Launch Platform'
    document.title = title
    const desc = 'Fully and rapidly reusable centrifugal model rocket launch platform, more details coming soon'
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = desc

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = window.location.origin + '/KineticLaunchPlatform'
  }, [])

  return (
    <>
      <Navigation pageType="other" scrollOffset={0} />

        <header className="bg-black px-8 pt-20">
            <div className="max-w-screen-2xl mx-auto text-center">
                <h1 className="section-heading text-white mb-20">
                    Kinetic Model Launch Platform
                </h1>
                <ThreeImageMosaic
                    images={[
                        { src: img1, alt: 'Kinetic model launch platform photo 1' },
                        { src: img2, alt: 'Kinetic model launch platform photo 2' },
                        { src: img3, alt: 'Kinetic model launch platform photo 3' },
                    ]}
                    className="mx-auto w-[65vw] mt-6"
                    ariaLabelPrefix="Kinetic launch platform image"
                />
            </div>
        </header>

        <main className="bg-black px-8 pb-24 pt-20">
            <section className="max-w-screen-2xl mx-auto">
                <p className="section-heading text-white text-center">
                    Still in development, more information coming soon...
                </p>
            </section>
        </main>
    </>
  )
}

export default KineticLaunchPlatform
