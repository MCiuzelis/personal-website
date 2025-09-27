import React, { useEffect, useRef, useState } from 'react'
import Navigation from '@/components/Navigation'
import { LazyVideo } from '@/components/LazyVideo'
import { useIsMobile } from '@/hooks/use-mobile'

import img1 from '@/assets/EnginePage/engine1.png'
import img2 from '@/assets/EnginePage/engine4.jpeg'

import video1 from '@/assets/EnginePage/engineInAction.mp4'


const CombustionEngine: React.FC = () => {
  const isMobile = useIsMobile()
  
  // SEO
  useEffect(() => {
    const title = 'Music playing combustion engine'
    document.title = title
    const desc = "How I used a go cart's engine to mimic any melody"
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
  const [muted1, setMuted1] = useState(true)
  const wrap1 = useRef<HTMLDivElement | null>(null)
  const [visible1, setVisible1] = useState(false)

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
    const el = v1.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.currentTime = 0
        el.play().catch(() => {})
      } else {
        el.pause(); el.currentTime = 0
      }
    }, { threshold: 0.01 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])


  useEffect(() => { if (v1.current) v1.current.muted = muted1 }, [muted1])
  

  return (
    <>
      <Navigation pageType="other" scrollOffset={0} hoveredCard={isMobile ? null : undefined} />

      <header className="bg-black px-8 pt-20">
        <div className="max-w-screen-2xl mx-auto text-center pb-20">
          <h1 className="section-heading text-white md:text-left text-center">Combustion Engine</h1>

          <p className="text-gray-300 text-base max-w-l mx-auto mt-6 mb-10 md:text-left text-center">
            A small servo actuates the throttle valve of an 8hp go cart combustion engine to mimic the changing pitch of music.
          </p>

          <div className="mx-auto mt-6 pb-10 flex md:flex-row flex-col items-center justify-center gap-4 max-w-[2500px]">
            <div className="md:w-[70vw] w-[90vw] md:h-[38vw] h-[50vw] rounded-xl overflow-hidden">
              <img
                  src={img1}
                  alt="Combustion engine photo 1"
                  className="w-full h-full md:object-cover object-cover opacity-0 animate-scale-fade-in"
              />
            </div>
            <div className="md:w-[70vw] w-[90vw] md:h-[38vw] h-[50vw] rounded-xl overflow-hidden">
              <img
                  src={img2}
                  alt="Combustion engine photo 2"
                  className="w-full h-full md:object-cover object-cover opacity-0 animate-scale-fade-in"
                  style={{ animationDelay: '150ms' }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="bg-black px-8 pb-10 pt-16 space-y-24">
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-6 text-center">Engine in action</h2>
          <div className="flex items-center justify-center">
            <div className="pt-6 md:h-[90vh] h-[50vh] md:aspect-video aspect-video">
              <div ref={wrap1} className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
                <LazyVideo
                  src={video1}
                  muted={muted1}
                  loop
                  playsInline
                  autoPlay
                  className={`block w-full h-full md:object-contain object-cover rounded-xl opacity-0 ${visible1 ? 'animate-scale-fade-in' : ''}`}
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
      </main>
    </>
  )
}

export default CombustionEngine
