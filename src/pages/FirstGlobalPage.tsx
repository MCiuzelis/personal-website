import React, { useEffect, useRef, useState } from 'react'
import main from '@/assets/FGC/main.jpg'
import mosaic1 from '@/assets/FGC/mosaic1.jpeg'
import mosaic2 from '@/assets/FGC/mosaic2.jpeg'
import mosaic3 from '@/assets/FGC/mosaic3.jpeg'
import mosaic4 from '@/assets/FGC/mosaic4.jpeg'
import kitVideo from '@/assets/FGC/2022_KitCapture.mp4'

const FirstGlobalPage: React.FC = () => {
  // SEO setup
  useEffect(() => {
    const title = '2022 First Global Challenge'
    document.title = title

    const desc = 'Explore the 2022 First Global Challenge: hero gallery, robot development mosaic, and kit capture video.'
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = desc

    // Canonical
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = window.location.origin + '/FirstGlobal'

    // JSON-LD structured data
    const scriptId = 'ld-json-first-global'
    let ld = document.getElementById(scriptId)
    if (ld) ld.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = scriptId
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: desc,
      mainEntityOfPage: window.location.href,
    })
    document.head.appendChild(script)
  }, [])

  // Autoplay on visibility (reused from Robot in Action)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [muted, setMuted] = useState(true)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [m1Loaded, setM1Loaded] = useState(false)
  const [m2Loaded, setM2Loaded] = useState(false)
  const [m3Loaded, setM3Loaded] = useState(false)
  const [m4Loaded, setM4Loaded] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          videoRef.current?.play()
          setHasPlayed(true)
        }
      },
      { threshold: 0.8 }
    )
    if (videoRef.current) observer.observe(videoRef.current)
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [hasPlayed])

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted
  }, [muted])

  return (
    <>
      <header className="bg-black px-8 pt-6">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="section-heading text-white mb-10 md:mb-12 text-center">2022 First Global Challenge</h1>
          <section className="flex items-center justify-center mb-16">
            <div className="w-[min(90vw,120vh)] aspect-video">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-900">
                <img
                  src={main}
                  alt="2022 First Global Challenge hero placeholder image"
                  fetchPriority="high"
                  decoding="async"
                  onLoad={() => setHeroLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
            </div>
          </section>
        </div>
      </header>

      <main className="bg-black px-8 pb-20">
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-10 md:mb-12 text-center">Robot development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-[min(90vw,90vh)]">
            <section aria-label="Robot development image 1" className="rounded-xl overflow-hidden aspect-square">
              <img src={mosaic1} alt="Robot development placeholder 1" loading="lazy" decoding="async" onLoad={() => setM1Loaded(true)} className={`w-full h-full object-cover transition-opacity duration-700 ${m1Loaded ? 'opacity-100' : 'opacity-0'}`} />
            </section>
            <section aria-label="Robot development image 2" className="rounded-xl overflow-hidden aspect-square">
              <img src={mosaic2} alt="Robot development placeholder 2" loading="lazy" decoding="async" onLoad={() => setM2Loaded(true)} className={`w-full h-full object-cover transition-opacity duration-700 ${m2Loaded ? 'opacity-100' : 'opacity-0'}`} />
            </section>
            <section aria-label="Robot development image 3" className="rounded-xl overflow-hidden aspect-square">
              <img src={mosaic3} alt="Robot development placeholder 3" loading="lazy" decoding="async" onLoad={() => setM3Loaded(true)} className={`w-full h-full object-cover transition-opacity duration-700 ${m3Loaded ? 'opacity-100' : 'opacity-0'}`} />
            </section>
            <section aria-label="Robot development image 4" className="rounded-xl overflow-hidden aspect-square">
              <img src={mosaic4} alt="Robot development placeholder 4" loading="lazy" decoding="async" onLoad={() => setM4Loaded(true)} className={`w-full h-full object-cover transition-opacity duration-700 ${m4Loaded ? 'opacity-100' : 'opacity-0'}`} />
            </section>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto mt-20">
          <h2 className="section-heading text-white mb-10 md:mb-12 text-center">Kit capture video</h2>
          <div className="flex items-center justify-center mt-6">
            <div className="w-[min(90vw,120vh)] aspect-video">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-900">
                <video
                  ref={videoRef}
                  src={kitVideo}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="auto"
                  controls={false}
                  onCanPlay={() => setVideoReady(true)}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className="absolute bottom-3 right-3">
                  <button
                    onClick={() => setMuted((m) => !m)}
                    aria-pressed={!muted}
                    aria-label={muted ? 'Unmute video' : 'Mute video'}
                    className="px-4 py-2 rounded-md bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
                  >
                    {muted ? 'Unmute' : 'Mute'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default FirstGlobalPage
