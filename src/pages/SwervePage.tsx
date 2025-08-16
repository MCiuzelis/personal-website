import React, {useEffect} from 'react'
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
        const title = '2023 - 2024 FTC Swerve season'
        document.title = title
        const desc = 'Swerve robot 3D model, season recap, and my contributions.'
        let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.head.appendChild(meta)
        }
        meta.content = desc

        let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
        if (!link) {
            link = document.createElement('link');
            link.rel = 'canonical';
            document.head.appendChild(link)
        }
        link.href = window.location.origin + '/Swerve'
    }, [])
    return (
        <RobotPageTemplate
            robot={<SwerveRobot position={[-1, -3.5, -1]} scale={13} rotation-y={0}/>}
        >
            <div className="relative z-10">
                {/* Season Recap Section */}
                <section className="min-h-screen bg-black px-8 py-12">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="section-heading text-white mb-8 pt-8 text-center">Season Recap</h2>
                        <div className="flex items-center justify-center mt-6">
                            <ImageSlideshow images={slideshowImages}/>
                        </div>
                    </div>
                </section>

                {/* My Contribution Section */}
                <section className="min-h-screen px-8 py-16" style={{backgroundColor: '#101010'}}>
                    <div className="max-w-6xl mx-auto">
                        <h2 className="section-heading text-white mb-8 pt-8 text-center">My Contribution</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
                            {/* Mechanical Section */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-white mb-6">Mechanical</h3>
                                <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                                    <p>
                                        As the lead mechanical engineer, I modeled, tested, broke and remodeled the
                                        swerve drive unit, perfecting and optimising it
                                        throughout 2 FTC seasons.
                                    </p>
                                    <p>
                                        During the final standalone test the 3d printed swerve modules endured over 1500
                                        cycles of lifting a 5kg bucket of water up and down
                                        2.5 meters, travelling 3 km and running for over 10h at maximum load with
                                        minimal gear degradation.
                                    </p>
                                    <p>
                                        Modeled and manufactured 6 major chassis revisions, decreasing weight and
                                        increasing performance every time.
                                    </p>
                                </div>
                            </div>

                            {/* Vertical Separator */}
                            <div className="hidden md:flex justify-center">
                                <div
                                    className="w-0.5 h-80 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full shadow-lg"></div>
                            </div>

                            {/* Mobile Separator */}
                            <div className="md:hidden flex justify-center py-6">
                                <div
                                    className="h-0.5 w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full shadow-lg"></div>
                            </div>

                            {/* Electrical Section */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-white mb-6">Programming</h3>
                                <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                                    <p>
                                        Coded all the kinematics for the differential swerve drive and optimised the
                                        algorithm for the quickest response.
                                    </p>
                                    <p>
                                        Tuned all low - level joint PID controllers, and simple autonomous paths.
                                    </p>
                                    <p>
                                        Together with Rokas Kirdulis learned by trying and failing how to train a
                                        rudimentary Tensorflow like object detection
                                        model and quantizing it to run on the REV Control Hub.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* GitHub Link */}
                        <div className="flex items-center justify-center mt-12">
                            <a
                                href="https://github.com/MCiuzelis/FTC_Centerstage_Swerve"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl text-lg font-medium text-gray-100
                bg-white/10 backdrop-blur-md border border-white/20
                hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                <svg aria-hidden="true" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                    0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                    -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092
                    -.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103
                    -.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115
                    2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595
                    1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419
                    -.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="underline underline-offset-4">Check out all the code on GitHub</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </RobotPageTemplate>
    )
}