import React from 'react'
import VLRRobot from '@/components/VLR_Robot'
import RobotPageTemplate from './RobotPageTemplate'
import ImageSlideshow from '@/components/ImageSlideshow'

export default function VLRPage() {
  return (
      <RobotPageTemplate
          robot={<VLRRobot position={[1, -2, 1]} scale={23} rotation-y={0} />}
      >
        <div className="relative z-10">
          {/* Season Recap Section */}
          <section className="min-h-screen bg-black px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-heading text-white mb-8 pt-8">Season Recap</h2>
              <div className="flex items-center justify-center">
                <ImageSlideshow />
              </div>
            </div>
          </section>

          {/* My Contribution Section */}
          <section className="min-h-screen px-8 py-16" style={{ backgroundColor: '#101010' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="section-heading text-white mb-8 pt-8">My Contribution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
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
          <section className="min-h-screen bg-black px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-heading text-white mb-8 pt-8">Robot in Action</h2>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-4xl">
                  {/* Video Placeholder */}
                  <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl text-gray-600 mb-4">▶</div>
                        <p className="text-xl text-gray-400">Video Preview</p>
                        <p className="text-gray-500 mt-2">Robot demonstration video will be displayed here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </RobotPageTemplate>
  )
}