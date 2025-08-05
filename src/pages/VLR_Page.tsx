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
          <section className="min-h-screen flex items-center justify-center bg-black px-8 py-16">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="section-heading text-white mb-12">Season Recap</h2>
              <ImageSlideshow />
            </div>
          </section>

          {/* My Contribution Section */}
          <section className="min-h-screen flex items-center justify-center px-8 py-16" style={{ backgroundColor: '#101010' }}>
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="section-heading text-white mb-8">My Contribution</h2>
              <div className="text-lg text-gray-300 leading-relaxed space-y-6">
                <p>
                  As the lead mechanical engineer on this project, I was responsible for designing 
                  and implementing the core structural components of our VLR robot system.
                </p>
                <p>
                  My primary contributions included developing the modular chassis architecture, 
                  optimizing the drivetrain for maximum efficiency, and integrating advanced 
                  sensor systems for autonomous navigation.
                </p>
                <p>
                  Through iterative prototyping and rigorous testing, I achieved a 40% improvement 
                  in overall system reliability while reducing weight by 15% compared to previous designs.
                </p>
              </div>
            </div>
          </section>

          {/* Robot in Action Section */}
          <section className="min-h-screen flex items-center justify-center bg-black px-8 py-16">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="section-heading text-white mb-8">Robot in Action</h2>
              <div className="text-lg text-gray-300 leading-relaxed space-y-6">
                <p>
                  Watch our VLR robot demonstrate its capabilities in real-world scenarios. 
                  From precise navigation to complex task execution, this robot showcases 
                  the culmination of our engineering excellence.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gray-900 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Autonomous Navigation</h3>
                    <p className="text-gray-400">
                      Advanced pathfinding algorithms enable seamless movement through 
                      complex environments with obstacle avoidance.
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Precision Control</h3>
                    <p className="text-gray-400">
                      Sub-millimeter accuracy in positioning and manipulation tasks 
                      through advanced servo control systems.
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