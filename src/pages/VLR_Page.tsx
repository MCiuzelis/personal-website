import React from 'react'
import VLRRobot from '@/components/VLR_Robot'
import RobotPageTemplate from './RobotPageTemplate'
import ImageSlideshow from '@/components/ImageSlideshow'
import RobotInAction from '@/assets/VLR_Page/RobotInAction.mp4'
import { useEffect, useRef, useState } from 'react'
import image1 from '@/assets/VLR_Page/Slideshow/img1.jpeg'
import image2 from '@/assets/VLR_Page/Slideshow/img2.jpeg'
import image3 from '@/assets/VLR_Page/Slideshow/img3.jpeg'
import image4 from '@/assets/VLR_Page/Slideshow/img4.jpeg'
import image5 from '@/assets/VLR_Page/Slideshow/img5.jpeg'
import image6 from '@/assets/VLR_Page/Slideshow/img6.jpeg'

const slideshowImages = [image1, image2, image3, image4, image5, image6]


export default function VLRPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasPlayed) {
            videoRef.current?.play()
            setHasPlayed(true)
          }
        },
        { threshold: 0.8 } // Play when 80% of the video is visible
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [hasPlayed])



  return (
      <div>
        <RobotPageTemplate
            robot={<VLRRobot position={[1, -2, 1]} scale={23} rotation-y={0} />}
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
              <h2 className="section-heading text-white mb-8 pt-8 text-center">My Contribution</h2>
              <div className="grid grid-cols-3 gap-12 mt-12">
                {/* Mechanical Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">Mechanical Engineering</h3>
                  <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                    <p>
                      As the lead mechanical engineer, I designed and implemented the core structural 
                      components of our VLR robot system.
                    </p>
                    <p>
                      Developed the modular chassis architecture and optimized the drivetrain for 
                      maximum efficiency and reliability.
                    </p>
                    <p>
                      Achieved a 40% improvement in overall system reliability while reducing 
                      weight by 15% compared to previous designs.
                    </p>
                  </div>
                </div>
                
                {/* Vertical Separator */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-80 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full shadow-lg"></div>
                </div>
                
                {/* Electrical Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">Electrical Systems</h3>
                  <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                    <p>
                      Integrated advanced sensor systems for autonomous navigation and 
                      environmental awareness capabilities.
                    </p>
                    <p>
                      Designed the power distribution system and implemented fail-safe 
                      mechanisms for critical components.
                    </p>
                    <p>
                      Optimized the control algorithms for precise motor control and 
                      real-time sensor data processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Robot in Action Section */}
          <section className="min-h-screen bg-black px-8 py-12">
            <div className="max-w-screen-2xl mx-auto">
              <h2 className="section-heading text-white mb-8 pt-8 text-center">Robot in Action</h2>
              <div className="flex items-center justify-center mt-6">
                <div className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-h-[85vh] aspect-video">
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-900">
                    <video
                        ref={videoRef}
                        src={RobotInAction}
                        muted
                        loop
                        playsInline
                        controls={false}
                        className="w-full h-full object-cover"
                    />
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