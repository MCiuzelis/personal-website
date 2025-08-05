import React from 'react'
import FLL_Robot from '@/components/FLL_Robot.tsx'
import RobotPageTemplate from './RobotPageTemplate'
import ImageSlideshow from "@/components/ImageSlideshow.tsx";
import team from '@/assets/SwervePage/SwerveTeamPicture.jpeg'
import image1 from '@/assets/SwervePage/img1.jpg'
import image2 from '@/assets/SwervePage/img2.jpeg'
import image3 from '@/assets/SwervePage/img3.jpeg'
import image4 from '@/assets/SwervePage/img4.jpeg'
import image5 from '@/assets/SwervePage/img5.jpeg'
import video1 from '@/assets/SwervePage/vid0.mp4'
import video2 from '@/assets/SwervePage/vid1.mp4'
import video3 from '@/assets/SwervePage/vid2.mp4'


const slideshowImages = [team, image1, image3, image4, image2, image5, video1, video3, video2]

export default function FLL_Page() {
  return (
      <RobotPageTemplate
          robot={<FLL_Robot position={[-1, -3.5, -1]} scale={13} rotation-y={0} />}
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
        </div>
      </RobotPageTemplate>
  )
}