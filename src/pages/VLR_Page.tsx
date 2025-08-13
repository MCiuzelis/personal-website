import React from 'react'
import VLRRobot from '@/components/VLR_Robot'
import RobotPageTemplate from './RobotPageTemplate'
import ImageSlideshow from '@/components/ImageSlideshow'
import RobotInAction from '@/assets/VLR_Page/RobotInAction.mp4'
import { useEffect, useRef, useState } from 'react'
import { LazyVideo } from '@/components/LazyVideo'
import image1 from '@/assets/VLR_Page/Slideshow/img1.jpeg'
import image2 from '@/assets/VLR_Page/Slideshow/img2.jpeg'
import image3 from '@/assets/VLR_Page/Slideshow/img3.jpeg'
import image4 from '@/assets/VLR_Page/Slideshow/img4.jpeg'
import image5 from '@/assets/VLR_Page/Slideshow/img5.jpeg'
import image6 from '@/assets/VLR_Page/Slideshow/img6.jpeg'
import image7 from '@/assets/VLR_Page/Slideshow/img7.jpeg'
import image8 from '@/assets/VLR_Page/Slideshow/img8.jpeg'
import image9 from '@/assets/VLR_Page/Slideshow/img9.jpeg'
import image10 from '@/assets/VLR_Page/Slideshow/img10.jpeg'

const slideshowImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]


export default function VLRPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [muted, setMuted] = useState(true)

  // SEO
  useEffect(() => {
    const title = '2024 - 2025 FTC season'
    document.title = title
    const desc = 'My robotics journey at Vilnius lyceum robotics and mecanum robot development in the 2024 - 2025 FTC season'
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = desc

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = window.location.origin + '/VLR'
  }, [])

  // reveal animation for video container
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

  // sync muted property
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted
  }, [muted])

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
      <div>
        <RobotPageTemplate
            robot={<VLRRobot position={[1, -4, 1]} scale={21} rotation-y={0} />}
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

          {/* My Contribution Section */}
          <section className="min-h-screen px-8 py-16" style={{ backgroundColor: '#101010' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="section-heading text-white mb-8 pt-8 text-center">My Contribution to the team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
                {/* Mechanical Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">Mechanical</h3>
                  <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                    <p>
                      As the lead mechanical engineer I created most of the robot's CAD model with 12 iterations of the robot throughout the season.
                    </p>
                    <p>
                      During the offseason created a full test chassis to test the innovative approach of using bare 6000 rpm drivetrain motors with a single stage belt reduction for weight saving.
                    </p>
                    <p>
                      Optimised parts for 3d printing and manufactured most of the robot's parts with my own 3d printer.
                    </p>
                    <p>
                      Prototyped 4 different hang version and helping to teach the team's rookies mechanical design skills.
                    </p>
                  </div>
                </div>
                
                {/* Vertical Separator */}
                <div className="hidden md:flex justify-center">
                  <div className="w-0.5 h-80 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full shadow-lg"></div>
                </div>
                
                {/* Mobile Separator */}
                <div className="md:hidden flex justify-center py-6">
                  <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full shadow-lg"></div>
                </div>
                
                {/* Electrical Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">Programming</h3>
                  <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                    <p>
                      Programmed and tuned most of the low - level parts, like motion profiles and pidfva controllers for the robot's arm, leaving the high level level parts, like the vision system
                      implementation and command system implementation for to the team's lead programmer Nojus Adomatais.
                    </p>
                    <p>
                      Spent countless hours tuning autonomous paths and parallelizing arm movements during autonomous operation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Robot in Action Section */}
          <section className="min-h-screen bg-black px-8 py-6">
            <div className="max-w-screen-2xl mx-auto">
              <h2 className="section-heading text-white mb-8 pt-8 text-center">Robot in Action</h2>
              <div className="flex items-center justify-center mt-6">
                <div className="pt-1 h-[50vh] md:h-[90vh] aspect-video">
                  <div ref={wrapRef} className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
                    <LazyVideo
                      src={RobotInAction}
                      muted={muted}
                      loop
                      playsInline
                      autoPlay
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
            </div>
          </section>
        </div>
        </RobotPageTemplate>
      </div>
  )
}