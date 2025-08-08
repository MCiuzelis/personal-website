import React, { useEffect, useRef, useState } from 'react'
import main from '@/assets/FGC/main.jpg'
import mosaic1 from '@/assets/FGC/mosaic1.jpeg'
import mosaic2 from '@/assets/FGC/mosaic2.jpeg'
import mosaic3 from '@/assets/FGC/mosaic3.jpeg'
import mosaic4 from '@/assets/FGC/mosaic4.jpeg'
import kitVideo from '@/assets/FGC/2022_KitCapture.mp4'

import main2 from '@/assets/FGC/main2.jpg'
import mosaic5 from '@/assets/FGC/mosaic5.jpg'
import mosaic6 from '@/assets/FGC/mosaic6.jpg'
import mosaic7 from '@/assets/FGC/horizontal.jpg'
import mosaic8 from '@/assets/FGC/robotInAction.mp4'
import kitVideo2 from '@/assets/FGC/2024_KitCapture.mp4'
import Navigation from "@/components/Navigation.tsx";

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


  // State for loading states
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [muted, setMuted] = useState(true)
  const [videoReady, setVideoReady] = useState(false)
  const mosaicRef = useRef<HTMLDivElement | null>(null)
  const [mosaicVisible, setMosaicVisible] = useState(false)

  // State for visibility
  const [heroVisible, setHeroVisible] = useState(false)
  const heroRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (!heroRef.current) return
    const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHeroVisible(true)
            obs.disconnect()
          }
        },
        { threshold: 0.2 }
    )
    obs.observe(heroRef.current)
    return () => obs.disconnect()
  }, [])

  const [videoVisible, setVideoVisible] = useState(false)
  const videoWrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!videoWrapperRef.current) return
    const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVideoVisible(true)
            obs.disconnect()
          }
        },
        { threshold: 0.2 }
    )
    obs.observe(videoWrapperRef.current)
    return () => obs.disconnect()
  }, [])

  // Reveal mosaic with sequential animation when in view
  useEffect(() => {
    if (!mosaicRef.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMosaicVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(mosaicRef.current)
    return () => obs.disconnect()
  }, [])


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.currentTime = 0
            videoRef.current.play()
          }
        }
      },
      { threshold: 0.5 }
    )
    if (videoRef.current) observer.observe(videoRef.current)
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [])

  // Update video muted state
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted
  }, [muted])
  return (
    <>
      <Navigation pageType="FGC" scrollOffset={0} />

      <header className="bg-black px-8 pt-20">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="section-heading text-white mb-12 md:mb-8 text-center">2022 First Global Challenge</h1>
          <section className="flex items-center justify-center mb-20">
            <div className="h-[80vh] aspect-video">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-900">
                <img
                    ref={heroRef}
                    src={main}
                    fetchPriority="high"
                    decoding="async"
                    className={`block w-full h-full object-cover opacity-0 ${heroVisible ? 'animate-scale-fade-in' : ''}`}
                />
              </div>
            </div>
          </section>
        </div>
      </header>

      <main className="bg-black px-8 pb-20 pt-12 space-y-32 md:space-y-40">
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-12 md:mb-6 text-center">Robot development</h2>
          <div
              ref={mosaicRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto w-[min(82vw,82vh)]"
          >
            {/* Top-left */}
            <section aria-label="Robot development image 1" className="rounded-xl overflow-hidden aspect-square">
              <img
                  src={mosaic1}
                  alt="Robot development 1"
                  loading="lazy"
                  decoding="async"
                  className={`block w-full h-full object-cover opacity-0 ${mosaicVisible ? 'animate-scale-fade-in' : ''}`}
                  style={{ animationDelay: mosaicVisible ? '0ms' : undefined }}
              />
            </section>

            {/* Top-right */}
            <section aria-label="Robot development image 2" className="rounded-xl overflow-hidden aspect-square">
              <img
                  src={mosaic2}
                  alt="Robot development 2"
                  loading="lazy"
                  decoding="async"
                  className={`block w-full h-full object-cover opacity-0 ${mosaicVisible ? 'animate-scale-fade-in' : ''}`}
                  style={{ animationDelay: mosaicVisible ? '150ms' : undefined }}
              />
            </section>

            {/* Bottom-right */}
            <section aria-label="Robot development image 3" className="rounded-xl overflow-hidden aspect-square">
              <img
                  src={mosaic3}
                  alt="Robot development 3"
                  loading="lazy"
                  decoding="async"
                  className={`block w-full h-full object-cover opacity-0 ${mosaicVisible ? 'animate-scale-fade-in' : ''}`}
                  style={{ animationDelay: mosaicVisible ? '300ms' : undefined }}
              />
            </section>

            {/* Bottom-left */}
            <section aria-label="Robot development image 4" className="rounded-xl overflow-hidden aspect-square">
              <img
                  src={mosaic4}
                  alt="Robot development 4"
                  loading="lazy"
                  decoding="async"
                  className={`block w-full h-full object-cover opacity-0 ${mosaicVisible ? 'animate-scale-fade-in' : ''}`}
                  style={{ animationDelay: mosaicVisible ? '450ms' : undefined }}
              />
            </section>
          </div>
        </section>
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-6 md:mb-6 text-center">Kit capture video</h2>
          <div className="flex items-center justify-center">
            <div className="h-[85vh] aspect-video">
              <div ref={videoWrapperRef} className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
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
                    className={`block w-full h-full object-cover rounded-xl opacity-0 ${videoVisible ? 'animate-scale-fade-in' : ''}`}
                />
                {/* Mute button inside video */}
                <button
                    onClick={() => setMuted((m) => !m)}
                    aria-pressed={!muted}
                    aria-label={muted ? 'Unmute video' : 'Mute video'}
                    className="absolute bottom-3 left-3 px-4 py-2 rounded-md bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
                >
                  {muted ? 'Unmute' : 'Mute'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* === 2024 First Global Challenge Section === */}
      <section className="bg-black px-8 pb-20 pt-12 space-y-32 md:space-y-40">
        {/* Hero section */}
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="section-heading text-white mb-12 md:mb-8 text-center">2024 First Global Challenge</h1>
          <section className="flex items-center justify-center mb-20">
            <div className="h-[80vh] aspect-video">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-900">
                <img
                    src={main2}
                    fetchPriority="high"
                    decoding="async"
                    className={`block w-full h-full object-cover opacity-0 ${heroVisible ? 'animate-scale-fade-in' : ''}`}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Robot development - custom grid + vertical video */}
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-12 md:mb-6 text-center">Robot development</h2>
          <div className="flex flex-col md:flex-row gap-4 items-start justify-center">
            {/* Grid of images */}
            <div
                ref={mosaicRef}
                className="grid grid-cols-2 gap-3 w-[min(60vw,70vh)]"
            >
              {/* Square 1 */}
              <section aria-label="Robot development image 5" className="rounded-xl overflow-hidden aspect-square">
                <img
                    src={mosaic5}
                    alt="Robot development 5"
                    loading="lazy"
                    decoding="async"
                    className={`block w-full h-full object-cover opacity-0 ${mosaicVisible ? 'animate-scale-fade-in' : ''}`}
                    style={{ animationDelay: mosaicVisible ? '0ms' : undefined }}
                />
              </section>

              {/* Square 2 */}
              <section aria-label="Robot development image 6" className="rounded-xl overflow-hidden aspect-square">
                <img
                    src={mosaic6}
                    alt="Robot development 6"
                    loading="lazy"
                    decoding="async"
                    className={`block w-full h-full object-cover opacity-0 ${mosaicVisible ? 'animate-scale-fade-in' : ''}`}
                    style={{ animationDelay: mosaicVisible ? '150ms' : undefined }}
                />
              </section>

              {/* Horizontal image spanning both columns */}
              <section aria-label="Robot development image 7" className="rounded-xl overflow-hidden col-span-2 aspect-[2/1]">
                <img
                    src={mosaic7}
                    alt="Robot development 7"
                    loading="lazy"
                    decoding="async"
                    className={`block w-full h-full object-cover opacity-0 ${mosaicVisible ? 'animate-scale-fade-in' : ''}`}
                    style={{ animationDelay: mosaicVisible ? '300ms' : undefined }}
                />
              </section>
            </div>

            {/* Vertical video to the right */}
            <div className="w-[min(30vw,40vh)] aspect-[9/16] rounded-xl overflow-hidden bg-gray-900">
              <video
                  src={mosaic8}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="auto"
                  className="block w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Kit capture video */}
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-6 md:mb-6 text-center">Kit capture video</h2>
          <div className="flex items-center justify-center">
            <div className="h-[85vh] aspect-video">
              <div ref={videoWrapperRef} className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
                <video
                    ref={videoRef}
                    src={kitVideo2}
                    muted={muted}
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                    controls={false}
                    onCanPlay={() => setVideoReady(true)}
                    className={`block w-full h-full object-cover rounded-xl opacity-0 ${videoVisible ? 'animate-scale-fade-in' : ''}`}
                />
                {/* Mute button */}
                <button
                    onClick={() => setMuted((m) => !m)}
                    aria-pressed={!muted}
                    aria-label={muted ? 'Unmute video' : 'Mute video'}
                    className="absolute bottom-3 left-3 px-4 py-2 rounded-md bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
                >
                  {muted ? 'Unmute' : 'Mute'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default FirstGlobalPage
