import React, { useEffect, useRef, useState } from 'react'
import main from '@/assets/FGC/main.jpeg'
import mosaic1 from '@/assets/FGC/mosaic1.jpeg'
import mosaic2 from '@/assets/FGC/mosaic2.jpeg'
import mosaic3 from '@/assets/FGC/mosaic3.jpeg'
import mosaic4 from '@/assets/FGC/mosaic4.jpeg'
import kitVideo from '@/assets/FGC/2022_KitCapture.mp4'

import main2 from '@/assets/FGC/main2.jpeg'
import mosaic5 from '@/assets/FGC/mosaic5.jpeg'
import mosaic6 from '@/assets/FGC/mosaic6.jpeg'
import mosaic7 from '@/assets/FGC/horizontal.jpeg'
import mosaic8 from '@/assets/FGC/robotInAction.mp4'
import kitVideo2 from '@/assets/FGC/2024_KitCapture.mp4'
import Navigation from "@/components/Navigation.tsx";

const FirstGlobalPage: React.FC = () => {
  // SEO setup
  useEffect(() => {
    const title = '2022, 2024 First Global Challenge'
    document.title = title

    const desc = '2022 and 2024 First Global Challenge season recap'
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
    const ld = document.getElementById(scriptId)
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
  const videoRef2022 = useRef<HTMLVideoElement | null>(null)
  const videoRef2024 = useRef<HTMLVideoElement | null>(null)
  const [muted2022, setMuted2022] = useState(true)
  const [muted2024, setMuted2024] = useState(true)
  const [videoReady, setVideoReady] = useState(false)

  const mosaicRef2022 = useRef<HTMLDivElement | null>(null)
  const mosaicRef2024 = useRef<HTMLDivElement | null>(null)
  const [mosaicVisible2022, setMosaicVisible2022] = useState(false)
  const [mosaicVisible2024, setMosaicVisible2024] = useState(false)

  // State for visibility
  const [heroVisible, setHeroVisible] = useState(false)
  const heroRef = useRef<HTMLImageElement | null>(null)
  const [heroVisible2024, setHeroVisible2024] = useState(false)
  const heroRef2024 = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (!heroRef.current) return
    const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHeroVisible(true)
            obs.disconnect()
          }
        },
        { threshold: 0.3 }
    )
    obs.observe(heroRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!heroRef2024.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible2024(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(heroRef2024.current)
    return () => obs.disconnect()
  }, [])

  const [videoVisible2022, setVideoVisible2022] = useState(false)
  const [videoVisible2024, setVideoVisible2024] = useState(false)
  const videoWrapperRef2022 = useRef<HTMLDivElement | null>(null)
  const videoWrapperRef2024 = useRef<HTMLDivElement | null>(null)
  const mosaicVideoRef2024 = useRef<HTMLVideoElement | null>(null)
  const [mosaicVideoVisible2024, setMosaicVideoVisible2024] = useState(false)

  useEffect(() => {
    if (!videoWrapperRef2022.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoVisible2022(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(videoWrapperRef2022.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!videoWrapperRef2024.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoVisible2024(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(videoWrapperRef2024.current)
    return () => obs.disconnect()
  }, [])

  // Reveal mosaics with sequential animation when in view (per section)
  useEffect(() => {
    if (!mosaicRef2022.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMosaicVisible2022(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(mosaicRef2022.current)
    return () => obs.disconnect()
  }, [])

  // Reveal 2024 vertical mosaic video when in view
  useEffect(() => {
    if (!mosaicVideoRef2024.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMosaicVideoVisible2024(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(mosaicVideoRef2024.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const el = mosaicVideoRef2024.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.currentTime = 0
        el.play().catch(() => {})
      } else {
        el.pause(); el.currentTime = 0
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!mosaicRef2024.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMosaicVisible2024(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(mosaicRef2024.current)
    return () => obs.disconnect()
  }, [])


  useEffect(() => {
    const target = videoRef2022.current
    if (!target) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        const el = videoRef2022.current
        if (!el) return
        if (entry.isIntersecting) {
          el.currentTime = 0
          el.play().catch(() => {})
        } else {
          el.pause()
          el.currentTime = 0
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const target = videoRef2024.current
    if (!target) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        const el = videoRef2024.current
        if (!el) return
        if (entry.isIntersecting) {
          el.currentTime = 0
          el.play().catch(() => {})
        } else {
          el.pause()
          el.currentTime = 0
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (videoRef2022.current) videoRef2022.current.muted = muted2022
  }, [muted2022])
  useEffect(() => {
    if (videoRef2024.current) videoRef2024.current.muted = muted2024
  }, [muted2024])
  return (
    <>
      <Navigation pageType="other" scrollOffset={0} />

      <header className="bg-black px-8 pt-20">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="section-heading text-white mb-12 md:mb-8 text-center">2022 First Global Challenge</h1>
          <section className="flex items-center justify-center pb-20">
            <div className="h-[50vh] md:h-[80vh] aspect-video">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-900">
                <img
                    ref={heroRef}
                    src={main}
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
          <h2 className="section-heading text-white mb-12 md:mb-6 text-center">2022 Robot development</h2>
          <div
              ref={mosaicRef2022}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto w-[min(82vw,82vh)]"
          >
            {/* Top-left */}
            <section aria-label="Robot development image 1" className="rounded-xl overflow-hidden aspect-square">
              <img
                  src={mosaic1}
                  alt="Robot development 1"
                  loading="lazy"
                  decoding="async"
                  className={`block w-full h-full object-cover opacity-0 ${mosaicVisible2022 ? 'animate-scale-fade-in' : ''}`}
                  style={{ animationDelay: mosaicVisible2022 ? '0ms' : undefined }}
              />
            </section>

            {/* Top-right */}
            <section aria-label="Robot development image 2" className="rounded-xl overflow-hidden aspect-square">
              <img
                  src={mosaic2}
                  alt="Robot development 2"
                  loading="lazy"
                  decoding="async"
                  className={`block w-full h-full object-cover opacity-0 ${mosaicVisible2022 ? 'animate-scale-fade-in' : ''}`}
                  style={{ animationDelay: mosaicVisible2022 ? '150ms' : undefined }}
              />
            </section>

            {/* Bottom-right */}
            <section aria-label="Robot development image 3" className="rounded-xl overflow-hidden aspect-square">
              <img
                  src={mosaic3}
                  alt="Robot development 3"
                  loading="lazy"
                  decoding="async"
                  className={`block w-full h-full object-cover opacity-0 ${mosaicVisible2022 ? 'animate-scale-fade-in' : ''}`}
                  style={{ animationDelay: mosaicVisible2022 ? '300ms' : undefined }}
              />
            </section>

            {/* Bottom-left */}
            <section aria-label="Robot development image 4" className="rounded-xl overflow-hidden aspect-square">
              <img
                  src={mosaic4}
                  alt="Robot development 4"
                  loading="lazy"
                  decoding="async"
                  className={`block w-full h-full object-cover opacity-0 ${mosaicVisible2022 ? 'animate-scale-fade-in' : ''}`}
                  style={{ animationDelay: mosaicVisible2022 ? '450ms' : undefined }}
              />
            </section>
          </div>
        </section>
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-6 md:mb-6 text-center">2022 Kit capture video</h2>
          <div className="flex items-center justify-center">
            <div className="h-[50vh] md:h-[85vh] aspect-video">
              <div ref={videoWrapperRef2022} className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
                <video
                    ref={videoRef2022}
                    src={kitVideo}
                    muted={muted2022}
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                    controls={false}
                    onCanPlay={() => setVideoReady(true)}
                    className={`block w-full h-full object-cover rounded-xl opacity-0 ${videoVisible2022 ? 'animate-scale-fade-in' : ''}`}
                />
                {/* Mute button inside video */}
                <button
                    onClick={() => setMuted2022((m) => !m)}
                    aria-pressed={!muted2022}
                    aria-label={muted2022 ? 'Unmute video' : 'Mute video'}
                    className="absolute bottom-3 left-3 px-4 py-2 rounded-md bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
                >
                  {muted2022 ? 'Unmute' : 'Mute'}
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
            <div className="h-[50vh] md:h-[80vh] aspect-video">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-900">
                  <img
                      ref={heroRef2024}
                      src={main2}
                      decoding="async"
                      className={`block w-full h-full object-cover opacity-0 ${heroVisible2024 ? 'animate-scale-fade-in' : ''}`}
                  />
              </div>
            </div>
          </section>
        </div>

        {/* Robot development - custom grid + vertical video */}
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-12 md:mb-6 text-center">2024 Robot development</h2>
          {/* Unified container that scales as one element */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-3 mx-auto w-[65vw] justify-center">
            {/* Grid of images */}
            <div
                ref={mosaicRef2024}
                className="grid grid-cols-2 gap-2"
            >
              {/* Square 1 */}
              <section aria-label="Robot development image 5" className="rounded-xl overflow-hidden aspect-square bg-black">
                <img
                    src={mosaic5}
                    alt="Robot development 5"
                    loading="lazy"
                    decoding="async"
                    className={`block w-full h-full object-cover opacity-0 ${mosaicVisible2024 ? 'animate-scale-fade-in' : ''}`}
                    style={{ animationDelay: mosaicVisible2024 ? '0ms' : undefined }}
                />
              </section>

              {/* Square 2 */}
              <section aria-label="Robot development image 6" className="rounded-xl overflow-hidden aspect-square bg-black">
                <img
                    src={mosaic6}
                    alt="Robot development 6"
                    loading="lazy"
                    decoding="async"
                    className={`block w-full h-full object-cover opacity-0 ${mosaicVisible2024 ? 'animate-scale-fade-in' : ''}`}
                    style={{ animationDelay: mosaicVisible2024 ? '150ms' : undefined }}
                />
              </section>

              {/* Horizontal image spanning both columns */}
              <section aria-label="Robot development image 7" className="rounded-xl overflow-hidden col-span-2 aspect-[2/1] bg-black">
                <img
                    src={mosaic7}
                    alt="Robot development 7"
                    loading="lazy"
                    decoding="async"
                    className={`block w-full h-full object-cover opacity-0 ${mosaicVisible2024 ? 'animate-scale-fade-in' : ''}`}
                    style={{ animationDelay: mosaicVisible2024 ? '300ms' : undefined }}
                />
              </section>
            </div>

            {/* Vertical video that matches the height of the image grid */}
            <div className="rounded-xl overflow-hidden bg-gray-900 h-full -ml-1">
              <video
                  ref={mosaicVideoRef2024}
                  src={mosaic8}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="auto"
                  className={`block w-full h-full object-cover opacity-0 ${mosaicVideoVisible2024 ? 'animate-scale-fade-in' : ''}`}
              />
            </div>
          </div>
        </section>

        {/* Kit capture video */}
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-6 md:mb-6 text-center">2024 Kit capture video</h2>
          <div className="flex items-center justify-center">
            <div className="h-[50vh] md:h-[85vh] aspect-[1920/950]">
              <div ref={videoWrapperRef2024} className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
                <video
                    ref={videoRef2024}
                    src={kitVideo2}
                    muted={muted2024}
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                    controls={false}
                    onCanPlay={() => setVideoReady(true)}
                    className={`block w-full h-full object-cover rounded-xl opacity-0 ${videoVisible2024 ? 'animate-scale-fade-in' : ''}`}
                />
                {/* Mute button */}
                <button
                    onClick={() => setMuted2024((m) => !m)}
                    aria-pressed={!muted2024}
                    aria-label={muted2024 ? 'Unmute video' : 'Mute video'}
                    className="absolute bottom-3 left-3 px-4 py-2 rounded-md bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
                >
                  {muted2024 ? 'Unmute' : 'Mute'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* My Contribution Section */}
        <section className="min-h-screen px-8 py-16" style={{backgroundColor: '#101010'}}>
          <div className="max-w-6xl mx-auto">
            <h2 className="section-heading text-white mb-8 pt-8 text-center">My Contribution</h2>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_auto_2fr_auto_2fr] gap-12 md:gap-20 mt-12">
              {/* Mechanical Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6" >Mechanical</h3>
                <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We built the 2022 season's championship winning robot together with Rokas Kirdulis in my small workshop in
                    the summer of 2022 over the course of about 2 months with no real prior practical experience in First Global.
                  </p>
                  <p>
                    The majority of the 2024 season's robot was build during a robotic's summer camp along First Glocal team Ukraine.
                    This was the best summer camp I have ever had so far.
                  </p>
                </div>
              </div>

              {/* Vertical Separator 1 */}
              <div className="hidden md:flex justify-center">
                <div className="w-0.5 h-80 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full shadow-lg"></div>
              </div>
              
              {/* Mobile Separator 1 */}
              <div className="md:hidden flex justify-center py-6">
                <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full shadow-lg"></div>
              </div>

              {/* Programming Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Programming</h3>
                <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Wrote the majority of the code for the 2022 season's robot in java. It was messy, everything was squished into a single file,
                    but in the end it worked and helped secure the victory.
                  </p>
                  <p>
                    2024 season's code was much more advanced state machine with complex command sequences and code practices leaned from
                    First Tech Challenge.
                  </p>
                </div>
              </div>

              {/* Vertical Separator 2 */}
              <div className="hidden md:flex justify-center">
                <div className="w-0.5 h-80 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full shadow-lg"></div>
              </div>
              
              {/* Mobile Separator 2 */}
              <div className="md:hidden flex justify-center py-6">
                <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full shadow-lg"></div>
              </div>

              {/* Filmmaking Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Filmmaking</h3>
                <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Together with Rokas Kirdulis and Dovydas Šatkauskas we directed and filmed ourselves for the 2022 season's Kit Capture video, with me being the editor.
                    It was not perfect, but this was the start of my filmmaking journey.
                  </p>
                  <p>
                    Together with Rokas Kirdulis we directed and filmed the 2024 video and I also edited it. This was the most fun I have ever had filming anything
                    and while still not perfect, the result speaks for itself.
                  </p>
                </div>
              </div>
            </div>
            
            {/* GitHub Link */}
            <div className="flex items-center justify-center mt-12">
              <a
                href="https://github.com/MCiuzelis/FirstGlobal_2024"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl text-lg font-medium text-gray-100
                bg-white/10 backdrop-blur-md border border-white/20
                hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <svg aria-hidden="true" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                    0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                    -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092
                    -.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103
                    -.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115
                    2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595
                    1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419
                    -.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="underline underline-offset-4">Check out all the code on GitHub</span>
              </a>
            </div>
          </div>
        </section>
    </>
  )
}

export default FirstGlobalPage