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
    const desc = 'A fully and rapidly reusable model rocket launch system'
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
                <h1 className="section-heading text-white mb-0">
                    Kinetic Model Launch Platform
                </h1>
                
                <p className="text-gray-300 text-base max-w-2xl mx-auto mt-8 mb-10">
                    Together with Rokas Kirdulis we are designing a fully and rapidly reusable model rocket launch system, still in development, more details coming soon...
                </p>
                
                <ThreeImageMosaic
                    images={[
                        { src: img1, alt: 'Kinetic model launch platform photo 1' },
                        { src: img2, alt: 'Kinetic model launch platform photo 2' },
                        { src: img3, alt: 'Kinetic model launch platform photo 3' },
                    ]}
                    className="mx-auto w-[52vw] mt-6"
                    ariaLabelPrefix="Kinetic launch platform image"
                />
            </div>
        </header>
    </>
  )
}

export default KineticLaunchPlatform
