import React, { useEffect, useRef, useState } from 'react'
import FLL_Robot from '@/components/FLL_Robot.tsx'
import RobotPageTemplate from './RobotPageTemplate'
import ImageSlideshow from "@/components/ImageSlideshow.tsx";
import image1 from '@/assets/FLL_Page/img1.jpeg'
import image3 from '@/assets/FLL_Page/img3.jpg'
import image4 from '@/assets/FLL_Page/img4.jpeg'
import image5 from '@/assets/FLL_Page/img5.jpeg'
import image6 from '@/assets/FLL_Page/img6.jpeg'
import image7 from '@/assets/FLL_Page/img7.jpeg'
import FLLVideo from '@/assets/FLL_Page/FLL_RobotInAction.mp4'

const slideshowImages = [image1, image3, image4, image5, image6, image7]

export default function FLL_Page() {
  useEffect(() => {
    const title = 'FIRST LEGO League Robot'
    document.title = title
    const desc = 'FIRST LEGO League robot showcase with 3d model and animations'
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = desc

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = window.location.origin + '/FLL'
  }, [])

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = wrapRef.current
    if (!node) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true)
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const el = videoRef.current
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

  return (
      <RobotPageTemplate
          robot={<FLL_Robot position={[0, -11, 0]} scale={38} rotation-y={0} />}
      >
        <div className="relative z-10">
          {/* Season Recap Section */}
          <section className="min-h-screen bg-black px-8 py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-heading text-white mb-8 pt-8 text-center">Season Recap</h2>
              <div className="flex items-center justify-center mt-6">
                <ImageSlideshow images={slideshowImages} />
              </div>
            </div>
          </section>

          {/* Robot in Action Section */}
          <section className="min-h-screen bg-black px-8 py-6">
            <div className="max-w-screen-2xl mx-auto">
              <h2 className="section-heading text-white mb-8 pt-8 text-center">Robot in Action</h2>
              <div className="flex items-center justify-center mt-6">
                <div className="pt-1 h-[90vh] aspect-video">
                  <div ref={wrapRef} className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
                    <video
                      ref={videoRef}
                      src={FLLVideo}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="auto"
                      className={`block w-full h-full object-cover rounded-xl opacity-0 ${visible ? 'animate-scale-fade-in' : ''}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* My Contribution Section */}
          <section className="min-h-screen px-8 py-16" style={{ backgroundColor: '#101010' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="section-heading text-white mb-8 pt-8 text-center">My Contribution</h2>
              <div className="grid grid-cols-3 gap-12 mt-12">
                {/* Mechanical Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">Mechanical</h3>
                  <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                    <p>
                      I created a modular and compact robot base with an internal 4 output gearbox helping our robot to
                      achieve 4 different independent functions during a run with only 2 motors.
                    </p>
                    <p>
                      Together with Julius Augustaitis I developed 4 robot attachments to score almost 400 points in the
                      Cargo Connect FLL season.
                    </p>
                  </div>
                </div>

                {/* Vertical Separator */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-80 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full shadow-lg"></div>
                </div>

                {/* Electrical Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">Other</h3>
                  <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                    <p>
                      I programmed the robot with EV3 python - a way more stable, robust and capable framework compared to the stadard EV3 block environment.
                    </p>
                    <p>
                      I rebuilt the robot piece by piece in CAD to create stunning animations and better convey the robot's construction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </RobotPageTemplate>
  )
}