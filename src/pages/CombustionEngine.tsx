import React, { useEffect, useRef, useState } from 'react'
import Navigation from '@/components/Navigation'


import img1 from '@/assets/EnginePage/engine1.png'
import img2 from '@/assets/EnginePage/engine2.png'
import img3 from '@/assets/EnginePage/engine3.jpeg'


import video1 from '@/assets/EnginePage/engineInAction.mp4'


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
  
  const [muted1, setMuted1] = useState(true)
  

  const wrap1 = useRef<HTMLDivElement | null>(null)

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
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])


  useEffect(() => { if (v1.current) v1.current.muted = muted1 }, [muted1])
  

  return (
    <>
      <Navigation pageType="other" scrollOffset={0} />

      <header className="bg-black px-8 pt-20">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h1 className="section-heading text-white mb-3">Combustion Engine</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in">
            A compact combustion engine prototype showcasing design, machining, and tuning.
          </p>
          <div className="mx-auto w-[min(70vw,85vh)] mt-6 pb-10 grid grid-cols-1 md:grid-cols-3 gap-3">
            <img src={img1} alt="Combustion engine photo 1" className="rounded-xl w-full h-full object-cover opacity-0 animate-scale-fade-in" />
            <img src={img2} alt="Combustion engine photo 2" className="rounded-xl w-full h-full object-cover opacity-0 animate-scale-fade-in" style={{ animationDelay: '150ms' }} />
            <img src={img3} alt="Combustion engine photo 3" className="rounded-xl w-full h-full object-cover opacity-0 animate-scale-fade-in" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </header>

      <main className="bg-black px-8 pb-10 pt-16 space-y-24">
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-6 text-center">Engine in action</h2>
          <div className="flex items-center justify-center">
            <div className="pt-6 h-[90vh] aspect-video">
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
      </main>
    </>
  )
}

export default CombustionEngine
