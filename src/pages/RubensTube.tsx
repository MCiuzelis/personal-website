import React, { useEffect, useRef, useState } from 'react'
import Navigation from '@/components/Navigation'
import setupImg from "@/assets/Ruben'sTube/setup.jpeg"
import tubeVideo from "@/assets/Ruben'sTube/video.mp4"

const RubensTube: React.FC = () => {
  // SEO
  useEffect(() => {
    const title = "Ruben's Tube Project"
    document.title = title
    const desc = "A fascinating physics demonstration and music project meant to visualize audio waveforms with flames."
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = desc

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = window.location.origin + '/RubensTube'
  }, [])

  // Image reveal
  const imgWrapRef = useRef<HTMLDivElement | null>(null)
  const [imgVisible, setImgVisible] = useState(false)
  useEffect(() => {
    const node = imgWrapRef.current
    if (!node) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setImgVisible(true); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  // Video controls
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const node = wrapRef.current
    if (!node) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => { if (videoRef.current) videoRef.current.muted = muted }, [muted])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.currentTime = 0; el.play().catch(() => {}) }
      else { el.pause(); el.currentTime = 0 }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
      <>
        <Navigation pageType="other" scrollOffset={0} />

        <header className="bg-black px-8 pt-20">
          {/* Keep title + description inside the constrained container */}
          <div className="max-w-screen-2xl mx-auto text-center">
            <h1 className="section-heading text-white mb-0">Ruben's Tube</h1>
            <p className="text-gray-300 text-base max-w-xl mx-auto mt-8 mb-10">
              A fascinating physics demonstration and music project meant to visualize audio waveforms with flames.
            </p>
          </div>

          {/* Move the image wrapper outside the max-w container so viewport-based width (w-[88vw]) centers properly
            and the image keeps its intended size. */}
          <div
              ref={imgWrapRef}
              className="mx-auto w-[88vw] mt-6 pb-10 rounded-xl overflow-hidden"
          >
            <img
                src={setupImg}
                alt="Ruben's Tube setup photo"
                loading="lazy"
                decoding="async"
                className={`block w-full h-auto max-h-[90vh] object-contain opacity-0 ${
                    imgVisible ? 'animate-scale-fade-in' : ''
                }`}
            />
          </div>
        </header>

        <main className="bg-black px-8 pb-10 pt-16 space-y-24">
          <section className="max-w-screen-2xl mx-auto">
            <h2 className="section-heading text-white mb-6 text-center">Project demonstration</h2>
            <div className="flex items-center justify-center">
              <div className="pt-6 h-[90vh] aspect-video">
                <div ref={wrapRef} className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
                  <video
                      ref={videoRef}
                      src={tubeVideo}
                      muted={muted}
                      loop
                      playsInline
                      autoPlay
                      preload="auto"
                      className={`block w-full h-full object-cover rounded-xl opacity-0 ${visible ? 'animate-scale-fade-in' : ''}`}
                  />
                  <button
                      onClick={() => setMuted(m => !m)}
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
      </>
  )
}

export default RubensTube
