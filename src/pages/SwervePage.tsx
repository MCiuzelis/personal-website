import React, { useEffect } from 'react'
import SwerveRobot from '@/components/SwerveRobot'
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

export default function SwervePage() {
  useEffect(() => {
    const title = 'Swerve Drive Robot Project'
    document.title = title
    const desc = 'Swerve robot 3D model, season recap, and my contributions.'
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = desc

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = window.location.origin + '/Swerve'
  }, [])
  return (
      <RobotPageTemplate
          robot={<SwerveRobot position={[-1, -3.5, -1]} scale={13} rotation-y={0} />}
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
                  <h3 className="text-2xl font-semibold text-white mb-6">Mechanical</h3>
                  <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                    <p>
                      As the lead mechanical engineer, I modeled, tested, broke and remodeled the swerve drive unit, perfecting and optimising it
                      throughout 2 FTC seasons.
                    </p>
                    <p>
                      During the final standalone test the 3d printed swerve modules endured over 1500 cycles of lifting a 5kg bucket of water up and down
                      2.5 meters, travelling 3 km and running for over 10h at maximum load with minimal gear degradation.
                    </p>
                    <p>
                      Modeled and manufactured 6 major chassis revisions, decreasing weight and increasing performance every time.
                    </p>
                  </div>
                </div>

                {/* Vertical Separator */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-80 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full shadow-lg"></div>
                </div>

                {/* Electrical Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">Programming</h3>
                  <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                    <p>
                      Coded all the kinematics for the differential swerve drive and optimised the algorithm for the quickest response.
                    </p>
                    <p>
                      Tuned all low - level joint PID controllers, and simple autonomous paths.
                    </p>
                    <p>
                      Together with Rokas Kirdulis learned by trying and failing how to train a rudimentary Tensorflow like object detection
                      model and quantizing it to run on the REV Control Hub.
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