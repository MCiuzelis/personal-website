import React, { useEffect, useRef, useState } from 'react'
import Navigation from '@/components/Navigation'
import {
  AUTONOMOUS_RC_CAR_DESCRIPTION,
  AUTONOMOUS_RC_CAR_TITLE,
} from './autonomousRcCarContent'

import heroImage from '@/assets/RC_car/2.jpeg'
import thumbnailImage from '@/assets/ProjectThumbnails/Rc_car.jpeg'
import showcaseVideo from '@/assets/RC_car/model_showcase.mov'

const AutonomousRcCar: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    document.title = AUTONOMOUS_RC_CAR_TITLE
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = AUTONOMOUS_RC_CAR_DESCRIPTION

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = window.location.origin + '/AutonomousRcCar'
  }, [])

  useEffect(() => {
    const node = wrapRef.current
    if (!node) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.disconnect()
      }
    }, { threshold: 0.1 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.currentTime = 0
        el.play().catch(() => {})
      } else {
        el.pause()
        el.currentTime = 0
      }
    }, { threshold: 0.01 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navigation pageType="other" scrollOffset={0} />

      <header className="bg-black px-8 pt-20">
        <div className="max-w-screen-2xl mx-auto text-center pb-20">
          <h1 className="section-heading text-white">{AUTONOMOUS_RC_CAR_TITLE}</h1>

          <p className="text-gray-300 text-base max-w-3xl mx-auto mt-6 mb-10">
            {AUTONOMOUS_RC_CAR_DESCRIPTION}
          </p>

          <div className="mx-auto mt-6 pb-10 flex flex-col md:flex-row justify-center gap-2 md:gap-4 max-w-[2500px]">
            <div className="w-full md:w-[40vw] h-[34vh] md:h-[30vw] rounded-xl overflow-hidden">
              <img
                src={heroImage}
                alt="Autonomous RC car photo 1"
                className="w-full h-full object-cover opacity-0 animate-scale-fade-in"
              />
            </div>
            <div className="w-full md:w-[40vw] h-[34vh] md:h-[30vw] rounded-xl overflow-hidden">
              <img
                src={thumbnailImage}
                alt="Autonomous RC car photo 2"
                className="w-full h-full object-cover opacity-0 animate-scale-fade-in"
                style={{ animationDelay: '150ms' }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="bg-black px-8 pb-10 pt-0 md:pt-16 space-y-6 md:space-y-24">
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="section-heading text-white mb-6 text-center">Policy training</h2>
          <div className="flex items-center justify-center">
            <div className="pt-0 md:pt-6 max-w-6xl">
              <div ref={wrapRef} className="relative mx-auto w-fit rounded-md md:rounded-xl overflow-hidden">
                <video
                  ref={videoRef}
                  src={showcaseVideo}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  poster={heroImage}
                  className={`block max-w-full h-auto max-h-[80vh] rounded-md md:rounded-xl opacity-0 ${visible ? 'animate-scale-fade-in' : ''}`}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AutonomousRcCar
