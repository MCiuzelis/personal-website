import React from 'react'
import SwerveRobot from '@/components/SwerveRobot'
import RobotPageTemplate from './RobotPageTemplate'

export default function SwervePage() {
  return (
      <RobotPageTemplate
          robot={<SwerveRobot position={[-1, -3.5, -1]} scale={13} rotation-y={0} />}
      >
        {/* Team + Build content goes here */}
        <div className="relative z-10 bg-background">
          {/* Team Section */}
          <section className="min-h-screen px-8 py-16 bg-gradient-to-br from-secondary to-accent">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-card rounded-lg shadow-lg p-6 text-center border border-border">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">John Doe</h3>
                  <p className="text-muted-foreground mb-2">Mechanical Engineer</p>
                  <p className="text-sm text-muted-foreground">Specializes in robotics design and mechanical systems integration.</p>
                </div>
                <div className="bg-card rounded-lg shadow-lg p-6 text-center border border-border">
                  <div className="w-24 h-24 bg-chart-2 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Jane Smith</h3>
                  <p className="text-muted-foreground mb-2">Electrical Engineer</p>
                  <p className="text-sm text-muted-foreground">Expert in control systems and embedded programming.</p>
                </div>
                <div className="bg-card rounded-lg shadow-lg p-6 text-center border border-border">
                  <div className="w-24 h-24 bg-chart-4 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Mike Johnson</h3>
                  <p className="text-muted-foreground mb-2">Software Engineer</p>
                  <p className="text-sm text-muted-foreground">Develops AI algorithms and robot control software.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Build Process Section */}
          <section className="min-h-screen px-8 py-16 bg-gradient-to-br from-muted to-muted/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Build Process</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">Engineering Excellence</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">1</div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-foreground">Design & Modeling</h4>
                        <p className="text-muted-foreground">3D CAD modeling and simulation to optimize performance and functionality.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">2</div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-foreground">Prototyping</h4>
                        <p className="text-muted-foreground">Rapid prototyping using 3D printing and precision machining.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">3</div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-foreground">Integration</h4>
                        <p className="text-muted-foreground">Seamless integration of mechanical, electrical, and software components.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">4</div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-foreground">Testing & Validation</h4>
                        <p className="text-muted-foreground">Rigorous testing to ensure reliability and performance standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">Technical Specifications</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Advanced servo control systems</li>
                    <li>• Real-time motion planning algorithms</li>
                    <li>• Modular component architecture</li>
                    <li>• High-precision sensor integration</li>
                    <li>• Robust communication protocols</li>
                    <li>• Fail-safe operational modes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </RobotPageTemplate>
  )
}