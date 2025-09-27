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
      if (e.isIntersecting) {
        setImgVisible(true)
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  // Video controls
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const [muted, setMuted] = useState(true)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const wrapper = wrapRef.current
    const video = videoRef.current
    if (!wrapper || !video) return

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    }, { threshold: 0.3 })

    obs.observe(wrapper)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted
    }
  }, [muted])

  return (
      <>
        <Navigation pageType="other" scrollOffset={0} />

        <header className="bg-black px-8 pt-20">
          {/* Keep title + description inside the constrained container */}
          <div className="max-w-screen-2xl mx-auto text-center">
            <h1 className="section-heading text-white mb-0">Ruben&apos;s Tube</h1>
            <p className="text-gray-300 text-base max-w-xl mx-auto mt-8 mb-10">
              A fascinating physics demonstration and music project meant to visualize audio waveforms with flames.
            </p>
          </div>

          {/* Image */}
          <div
              ref={imgWrapRef}
              className="mx-auto w-[88vw] mt-6 pb-10 rounded-xl overflow-hidden"
          >
            <img
                src={setupImg}
                alt="Ruben's Tube setup photo"
                loading="lazy"
                decoding="async"
                srcSet={`${setupImg} 1200w`}
                sizes="(max-width: 768px) 90vw, 1200px"
                className={`block w-full h-auto max-h-[80vh] md:max-h-[90vh] object-contain rounded-xl will-change-transform will-change-opacity ${
                    imgVisible ? 'animate-scale-fade-in' : ''
                }`}
            />
          </div>
        </header>

        <main className="bg-black px-8 pb-10 pt-16 space-y-24">
          <section className="max-w-screen-2xl mx-auto">
            <h2 className="section-heading text-white mb-6 text-center">Project demonstration</h2>
            <div className="flex items-center justify-center">
              <div className="pt-0 md:pt-6 h-[50vh] md:h-[90vh] w-full md:aspect-video">
                <div
                    ref={wrapRef}
                    className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900"
                >
                  <video
                      ref={videoRef}
                      src={tubeVideo}
                      muted={muted}
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      className={`block w-full h-full object-cover md:object-contain rounded-xl opacity-0 will-change-transform will-change-opacity ${
                          visible ? 'animate-scale-fade-in' : ''
                      }`}
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
