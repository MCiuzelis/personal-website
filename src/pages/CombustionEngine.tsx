import React, { useEffect, useRef, useState } from 'react'
import Navigation from '@/components/Navigation'
import FourImageMosaic from '@/components/FourImageMosaic'

import img1 from '@/assets/EnginePage/IMG_2408.jpeg'
import img2 from '@/assets/EnginePage/IMG_2409.jpeg'
import img3 from '@/assets/EnginePage/IMG_2410.jpeg'
import img4 from '@/assets/EnginePage/IMG_2411.jpeg'

import video1 from '@/assets/Ruben\'sTube/video.mp4'
import video2 from '@/assets/VLR_Page/RobotInAction.mp4'

const CombustionEngine: React.FC = () => {
  // SEO
  useEffect(() => {
    const title = 'Combustion Engine Project'
    document.title = title
    const desc = 'Combustion engine project showcase with image mosaic and demo videos.'
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = desc

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = window.location.origin + '/CombustionEngine'
  }, [])

  // Video controls
  const v1 = useRef<HTMLVideoElement | null>(null)
  const v2 = useRef<HTMLVideoElement | null>(null)
  const [muted1, setMuted1] = useState(true)
  const [muted2, setMuted2] = useState(true)

  const wrap1 = useRef<HTMLDivElement | null>(null)
  const wrap2 = useRef<HTMLDivElement | null>(null)
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

  useEffect(() => {
    const node = wrap1.current
    if (!node) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible1(true)
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const node = wrap2.current
    if (!node) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible2(true)
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const el = v1.current
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
    const el = v2.current
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

  useEffect(() => { if (v1.current) v1.current.muted = muted1 }, [muted1])
  useEffect(() => { if (v2.current) v2.current.muted = muted2 }, [muted2])

  return (
    <>
      <Navigation pageType="engine" scrollOffset={0} />

      <header className="bg-black px-8 pt-20">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h1 className="section-heading text-white mb-12">Combustion Engine</h1>
          <FourImageMosaic
            images={[
              { src: img1, alt: 'Combustion engine photo 1' },
              { src: img2, alt: 'Combustion engine photo 2' },
              { src: img3, alt: 'Combustion engine photo 3' },
              { src: img4, alt: 'Combustion engine photo 4' },
            ]}
            className="mx-auto w-[min(82vw,82vh)]"
            ariaLabelPrefix="Combustion engine image"
          />
        </div>
      </header>

      <main className="bg-black px-8 pb-24 pt-16 space-y-24">
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-6 text-center">Demo video 1</h2>
          <div className="flex items-center justify-center">
            <div className="h-[85vh] aspect-video">
              <div ref={wrap1} className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
                <video
                  ref={v1}
                  src={video1}
                  muted={muted1}
                  loop
                  playsInline
                  autoPlay
                  preload="auto"
                  className={`block w-full h-full object-cover rounded-xl opacity-0 ${visible1 ? 'animate-scale-fade-in' : ''}`}
                />
                <button
                  onClick={() => setMuted1(m => !m)}
                  aria-pressed={!muted1}
                  aria-label={muted1 ? 'Unmute video' : 'Mute video'}
                  className="absolute bottom-3 left-3 px-4 py-2 rounded-md bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
                >
                  {muted1 ? 'Unmute' : 'Mute'}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-6 text-center">Demo video 2</h2>
          <div className="flex items-center justify-center">
            <div className="h-[85vh] aspect-video">
              <div ref={wrap2} className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
                <video
                  ref={v2}
                  src={video2}
                  muted={muted2}
                  loop
                  playsInline
                  autoPlay
                  preload="auto"
                  className={`block w-full h-full object-cover rounded-xl opacity-0 ${visible2 ? 'animate-scale-fade-in' : ''}`}
                />
                <button
                  onClick={() => setMuted2(m => !m)}
                  aria-pressed={!muted2}
                  aria-label={muted2 ? 'Unmute video' : 'Mute video'}
                  className="absolute bottom-3 left-3 px-4 py-2 rounded-md bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
                >
                  {muted2 ? 'Unmute' : 'Mute'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default CombustionEngine
