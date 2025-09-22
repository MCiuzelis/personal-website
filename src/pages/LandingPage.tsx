import * as THREE from 'three'
import '../utils/geometry'
import {useRef, useState, useEffect, useMemo} from 'react'
import {Canvas, useFrame, ThreeEvent} from '@react-three/fiber'
import {Image, Environment, ScrollControls, useScroll} from '@react-three/drei'
import {easing} from 'maath'
import {useNavigate} from 'react-router-dom'
import Navigation from '@/components/Navigation'
import {useAssetPreloader} from '@/hooks/useAssetPreloader'
import {useIsMobile} from '@/hooks/use-mobile'

// Typing animation hook (unchanged)
const useTypingEffect = (text: string, speed = 50, delay = 0) => {
    const [displayText, setDisplayText] = useState('')
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        let index = 0
        const startTimer = setTimeout(() => {
            const timer = setInterval(() => {
                if (index < text.length) {
                    setDisplayText(text.slice(0, index + 1))
                    index++
                } else {
                    setIsComplete(true)
                    clearInterval(timer)
                }
            }, speed)

            return () => clearInterval(timer)
        }, delay)

        return () => clearTimeout(startTimer)
    }, [text, speed, delay])

    return {displayText, isComplete}
}

/**
 * Robust Two-step typing animation hook
 *
 * Sequence:
 *  - wait startDelay
 *  - show cursor
 *  - type texts[0]
 *  - pause pauseDuration (cursor remains)
 *  - delete texts[0]
 *  - type texts[1]
 *  - finish (cursor hidden)
 *
 * This implementation:
 *  - uses an async sequence for readability
 *  - tracks all timers and clears them on cleanup
 *  - only begins after startDelay has elapsed (so the cursor won't show early)
 */
const useThreeStepTypingEffect = (
    texts: string[],
    typeSpeed = 30,
    deleteSpeed = 20,
    pauseDuration = 2000,
    startDelay = 0,
    appendDelay = 1000
) => {
    const [displayText, setDisplayText] = useState("")
    const [showCursor, setShowCursor] = useState(false)

    useEffect(() => {
        if (!Array.isArray(texts) || texts.length < 3) return

        let timers: number[] = []
        let cancelled = false
        const sleep = (ms: number) =>
            new Promise<void>((resolve) => {
                const id = window.setTimeout(() => resolve(), ms)
                timers.push(id)
            })

        const run = async () => {
            if (startDelay > 0) {
                await sleep(startDelay)
                if (cancelled) return
            }
            setShowCursor(true)

            // Step 1: type first text
            const first = texts[0]
            for (let i = 1; i <= first.length; i++) {
                if (cancelled) return
                setDisplayText(first.slice(0, i))
                await sleep(typeSpeed)
            }

            // Step 2: wait before appending
            await sleep(appendDelay)
            if (cancelled) return

            // Step 3: append second text (continue typing)
            const second = texts[1]
            for (let i = 1; i <= second.length; i++) {
                if (cancelled) return
                setDisplayText(first + second.slice(0, i))
                await sleep(typeSpeed)
            }

            // Step 4: pause after full first+second
            await sleep(pauseDuration)
            if (cancelled) return

            // Step 5: delete everything
            const combined = first + second
            for (let i = combined.length - 1; i >= 0; i--) {
                if (cancelled) return
                setDisplayText(combined.slice(0, i))
                await sleep(deleteSpeed)
            }

            // Step 6: type third (final) text
            const third = texts[2]
            for (let i = 1; i <= third.length; i++) {
                if (cancelled) return
                setDisplayText(third.slice(0, i))
                await sleep(typeSpeed)
            }

            setShowCursor(false)
        }

        run()

        return () => {
            cancelled = true
            timers.forEach((t) => clearTimeout(t))
            timers = []
        }
    }, [texts, typeSpeed, deleteSpeed, pauseDuration, startDelay, appendDelay])

    return { displayText, showCursor }
}

// Import card images
import profilePicture from '@/assets/profilePicture.jpeg'
import card2 from '@/assets/ProjectThumbnails/spinLaunch.jpg'
import card3 from '@/assets/ProjectThumbnails/RubensTube.jpg'
import card4 from '@/assets/ProjectThumbnails/engine.jpeg'
import card5 from '@/assets/ProjectThumbnails/FLL.jpg'
import card6 from '@/assets/ProjectThumbnails/FGC.jpeg'
import card7 from '@/assets/ProjectThumbnails/Swerve.jpg'
import card8 from '@/assets/ProjectThumbnails/VLR.jpg'

const cardImages = [card2, card3, card4, card5, card6, card7, card8]

const LandingPage = () => {
    const [hasScrolled, setHasScrolled] = useState(0)
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)
    const [mobileCardIndex, setMobileCardIndex] = useState(0)
    // Initialize showProfile based on hash - start directly in projects if hash is #projects
    const [showProfile, setShowProfile] = useState(() => window.location.hash !== '#projects')
    const [scrollOffset, setScrollOffset] = useState(0)
    const isMobile = useIsMobile()
    const overlayRef = useRef<HTMLDivElement | null>(null)

    // Aggressive preloading for instant page transitions
    useAssetPreloader({
        models: [
            '/CAD_models/VLR_Robot.glb',
            '/CAD_models/SwerveRobot.glb',
            '/CAD_models/FLL_Robot.glb'
        ],
        images: cardImages,
        videos: [
            '/src/assets/VLR_Page/RobotInAction.mp4',
            '/src/assets/SwervePage/vid0.mp4',
            '/src/assets/FLL_Page/FLL_RobotInAction.mp4'
        ],
        priority: 'high'
    })

    useEffect(() => {
        const title = "Matas' project showcase"
        document.title = title
        const desc = 'Explore kinetic launch platform, combustion engine, and robotics projects.'
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
        link.href = window.location.origin + '/'

        // Listen for hash changes to handle navigation to #projects
        const handleHashChange = () => {
            if (window.location.hash === '#projects') {
                setShowProfile(false)
            }
        }

        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    const handleScrollChange = (scrolled: number) => {
        setHasScrolled(scrolled)
        setScrollOffset(scrolled)
        if (scrolled > 0.1) {
            setShowProfile(false)
        }
    }

    const handleProfileScroll = () => {
        setShowProfile(false)
    }

    // Listen for wheel/touch events even if overlay is covering scroll
    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            if (showProfile) {
                setShowProfile(false)
            }
        }
        const onTouchMove = (e: TouchEvent) => {
            if (showProfile) {
                setShowProfile(false)
            }
        }

        window.addEventListener('wheel', onWheel, {passive: true})
        window.addEventListener('touchmove', onTouchMove, {passive: true})

        return () => {
            window.removeEventListener('wheel', onWheel)
            window.removeEventListener('touchmove', onTouchMove)
        }
    }, [showProfile])

    if (isMobile) {
        return (
            <div className="h-screen w-full overflow-hidden relative bg-black">
                {/* Navigation - slides in from left after intro */}
                <div className={`fixed top-0 left-0 w-full z-20 transition-transform duration-700 ease-out ${
                    showProfile ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                }`}>
                    <Navigation pageType='landing' scrollOffset={hasScrolled} hoveredCard={hoveredCard}/>
                </div>

                {/* Profile Intro Section - Mobile */}
                <MobileProfileIntro showProfile={showProfile} onScrollClick={handleProfileScroll}/>

                {/* Projects Section */}
                <div className={`h-full transition-transform duration-1000 ease-in-out ${
                    showProfile ? 'translate-y-full' : 'translate-y-0'
                }`}>
                    <div className="flex flex-col h-full pt-16">
                        <div className="flex-1 flex items-start justify-center px-4 pt-8 pb-8">
                            <MobileCarousel
                                cardIndex={mobileCardIndex}
                                onCardChange={setMobileCardIndex}
                                onCardHover={setHoveredCard}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="h-screen w-full overflow-hidden relative bg-black">
            {/* Navigation - slides in from left after intro */}
            <div className={`fixed top-0 left-0 w-full z-20 transition-transform duration-700 ease-out ${
                showProfile ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
            }`}>
                <Navigation pageType='landing' scrollOffset={hasScrolled} hoveredCard={hoveredCard}/>
            </div>

            {/* Profile Intro Section */}
            <ProfileIntro showProfile={showProfile} onScrollClick={handleProfileScroll}/>


            {/* 3D Canvas */}
            <Canvas camera={{position: [0, 0, 100], fov: 8.75}} style={{background: '#000'}}>
                <ScrollControls pages={4} infinite>
                    <Rig rotation={[0, 0, 0.02]} onScrollChange={handleScrollChange} showProfile={showProfile}>
                        <Carousel onCardHover={setHoveredCard}/>
                    </Rig>
                </ScrollControls>
            </Canvas>
        </div>
    )
}

interface RigProps extends React.ComponentProps<'group'> {
    rotation: [number, number, number]
    onScrollChange?: (hasScrolled: number) => void
    showProfile?: boolean
}

function Rig({onScrollChange, showProfile, ...props}: RigProps) {
    const ref = useRef<THREE.Group>(null!)
    const scroll = useScroll()
    const prevOffset = useRef(0)
    const lastLog = useRef(0)

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y = -scroll.offset * (Math.PI * 2)
        }

        const scrollDelta = Math.abs(scroll.offset - prevOffset.current)
        if (scrollDelta > 0.0005) {
            onScrollChange?.(scroll.offset)
            prevOffset.current = scroll.offset
        }

        const targetY = showProfile ? 15 : state.pointer.y + 1.5
        const targetPosition: [number, number, number] = [-state.pointer.x * 2, targetY, 10]
        easing.damp3(state.camera.position, targetPosition, showProfile ? 0.1 : 0.3, delta)
        state.camera.lookAt(0, 0, 1)
    })
    return <group ref={ref} {...props} />
}

/* --- Carousel, Card, MobileCard, MobileCardNavigation unchanged --- */

function Carousel({radius = 1.175, count = 7, onCardHover}: {
    radius?: number,
    count?: number,
    onCardHover: (cardIndex: number | null) => void
}) {
    return Array.from({length: count}, (_, i) => {
        // Rotate by 6 positions to center VLR (2024-2025 FTC robot)
        const adjustedIndex = (i + 6) % count
        return (
            <Card
                key={i}
                url={cardImages[adjustedIndex % cardImages.length]}
                position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
                rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
                cardIndex={adjustedIndex}
                onCardHover={onCardHover}
            />
        )
    })
}

interface CardProps {
    url: string
    position?: [number, number, number]
    rotation?: [number, number, number]
    cardIndex: number
    onCardHover: (cardIndex: number | null) => void
}

interface ZoomableMaterial extends THREE.ShaderMaterial {
    radius: number
    zoom: number
}

function Card({url, cardIndex, onCardHover, ...props}: CardProps) {
    const ref = useRef<THREE.Mesh<THREE.BufferGeometry, ZoomableMaterial>>(null!)
    const geometryRef = useRef<any>(null!)
    const [hovered, hover] = useState(false)
    const navigate = useNavigate()

    const pointerOver = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation()
        hover(true)
        onCardHover(cardIndex)
    }

    const pointerOut = (_e: ThreeEvent<PointerEvent>) => {
        hover(false)
        onCardHover(null)
    }

    const handleClick = (e: ThreeEvent<MouseEvent>, cardIndex: number) => {
        e.stopPropagation()
        const routes = ['KineticLaunchPlatform', 'RubensTube', 'CombustionEngine', 'FLL', 'FirstGlobal', 'Swerve', 'VLR']
        navigate(routes[cardIndex])
    }

    useFrame((state, delta) => {
        if (ref.current) {
            easing.damp3(ref.current.scale, hovered ? 1.16 : 1, 0.1, delta)
            easing.damp(ref.current.material, 'radius', hovered ? 0.1 : 0.05, 0.2, delta)
            easing.damp(ref.current.material, 'zoom', hovered ? 1.035 : 1, 0.2, delta)
        }

        // Add subtle movement to the geometry
        if (geometryRef.current && geometryRef.current.update) {
            geometryRef.current.update(delta)
        }
    })

    return (
        <group scale={[-1, 1, 1]}>
            <Image
                ref={ref}
                url={url}
                transparent
                side={THREE.BackSide}
                onPointerOver={pointerOver}
                onPointerOut={pointerOut}
                onClick={(e) => handleClick(e, cardIndex)}
                {...props}
            >
                <animatedBentPlaneGeometry ref={geometryRef} args={[0.1, 1, 1, 20, 20]}/>
            </Image>
        </group>
    )
}

function MobileCarousel({ cardIndex, onCardChange, onCardHover }: {
    cardIndex: number
    onCardChange: (index: number) => void
    onCardHover: (cardIndex: number | null) => void
}) {
    const navigate = useNavigate()
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    const [internalIndex, setInternalIndex] = useState(cardIndex + 1) // start at 1 because 0 is duplicate last
    const [isTransitioning, setIsTransitioning] = useState(false)

    const gap = 30
    const cardWidth = 320
    
    // Reorder to match desktop sequence (VLR first, then follow the rotation)
    const mobileCardImages = [card8, card7, card5, card6, card2, card3, card4, ]
    const mobileProjectTitles = [
        'FTC final season robot',
        'Swerve Drive',
        'FIRST Lego League',
        'FIRST Global Challenge',
        'Kinetic Launch Platform', 
        "Ruben's Tube",
        'Combustion Engine'
    ]
    const mobileRoutes = ['VLR', 'Swerve', 'FLL', 'FirstGlobal', 'KineticLaunchPlatform', 'RubensTube', 'CombustionEngine']
    
    const totalCards = mobileCardImages.length

    const handleClick = () => {
        navigate(mobileRoutes[(internalIndex - 1 + totalCards) % totalCards])
    }

    const loopedCards = [mobileCardImages[totalCards - 1], ...mobileCardImages, mobileCardImages[0]]
    const loopedTitles = [mobileProjectTitles[totalCards - 1], ...mobileProjectTitles, mobileProjectTitles[0]]

    const moveToIndex = (newIndex: number) => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setInternalIndex(newIndex)

        setTimeout(() => {
            let adjustedIndex = newIndex

            // If we hit the duplicate at the start or end, jump silently to the real card
            if (newIndex === 0) adjustedIndex = totalCards
            if (newIndex === totalCards + 1) adjustedIndex = 1

            if (adjustedIndex !== newIndex) {
                // Jump instantly without transition
                setIsTransitioning(false)
                setInternalIndex(adjustedIndex)
            } else {
                setIsTransitioning(false)
            }

            // Notify parent of visible card index
            onCardChange((adjustedIndex - 1 + totalCards) % totalCards)
        }, 500)
    }

    const handlePrevious = () => moveToIndex(internalIndex - 1)
    const handleNext = () => moveToIndex(internalIndex + 1)

    // Touch handlers
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
    const onTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return
        const distance = touchStart - touchEnd
        if (distance > 50) handleNext()
        else if (distance < -50) handlePrevious()
    }

    const translateX = -internalIndex * (cardWidth + gap)

    return (
        <div className="flex flex-col items-center space-y-6 w-full max-w-md mx-auto">
            {/* Project Title */}
            <h2 className="text-2xl font-semibold text-white text-center px-4">
                {loopedTitles[internalIndex]}
            </h2>
            
            <div
                className="relative w-80 h-96 mx-auto overflow-hidden rounded-xl"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                    style={{
                        transform: `translateX(${translateX}px)`,
                        gap: `${gap}px`
                    }}
                >
                    {loopedCards.map((img, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-80 h-96 cursor-pointer"
                            onClick={handleClick}
                            onMouseEnter={() => onCardHover((i - 1 + totalCards) % totalCards)}
                            onMouseLeave={() => onCardHover(null)}
                        >
                            <img
                                src={img}
                                alt={`Project ${i}`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center space-x-4">
                <button onClick={handlePrevious} className="p-3 text-white/70 hover:text-white text-xl">←</button>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2.5 flex space-x-3">
                    {Array.from({ length: totalCards }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => moveToIndex(i + 1)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                (internalIndex - 1 + totalCards) % totalCards === i 
                                    ? 'bg-white shadow-lg scale-110' 
                                    : 'bg-white/40 hover:bg-white/60'
                            }`}
                        />
                    ))}
                </div>
                <button onClick={handleNext} className="p-3 text-white/70 hover:text-white text-xl">→</button>
            </div>
        </div>
    )
}



// Profile intro component
function ProfileIntro({showProfile, onScrollClick}: { showProfile: boolean, onScrollClick: () => void }) {
    const nameText = "Matas Čiuželis"
    const descriptions = useMemo(() => [
        "I created a swerve drive in my mom's garage.",
        " Oops, wrong audience",
        "Mechanical engineering student at the University of Glasgow"
    ], [])

    // State for profile picture animation
    const [profilePictureAnimated, setProfilePictureAnimated] = useState(false)

    // Start profile picture animation when component shows
    useEffect(() => {
        if (showProfile) {
            const timer = setTimeout(() => {
                setProfilePictureAnimated(true)
            }, 200) // Small delay for smooth transition
            return () => clearTimeout(timer)
        } else {
            setProfilePictureAnimated(false)
        }
    }, [showProfile])

    // Only start typing after profile picture is in place
    const {displayText: nameDisplay, isComplete: nameComplete} = useTypingEffect(
        nameText,
        50,
        profilePictureAnimated ? 1200 : 999999 // Wait for profile pic animation
    )
    const { displayText: descriptionDisplay, showCursor } = useThreeStepTypingEffect(
        descriptions,
        40,     // typing speed
        30,     // delete speed
        1000,   // pause after first+second
        nameComplete ? 400 : 999999, // start delay
        800    // delay before appending second text
    )

    return (
        <div
            className={`absolute inset-0 z-10 transition-transform duration-1000 ease-in-out ${
                showProfile ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative h-full flex items-center justify-center px-8">
                <div className="flex items-center gap-8 max-w-6xl mx-auto">
                    {/* Profile Image - Slide and rotate animation */}
                    <div className="relative flex-shrink-0">
                        <img
                            src={profilePicture}
                            alt="Matas Čiuželis"
                            className={`w-[280px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] h-auto rounded-2xl object-cover transition-all duration-1000 ease-out
                                ${profilePictureAnimated 
                                    ? 'translate-x-0 rotate-0 opacity-100' 
                                    : '-translate-x-full rotate-12 opacity-0'
                                }`}
                            style={{
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 255, 255, 0.05)'
                            }}
                        />
                    </div>

                    {/* Text with typing animation */}
                    <div className="text-white flex-shrink-0" style={{width: '600px'}}>
                        <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-inter font-normal mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-normal tracking-tight"
                            style={{lineHeight: '1.1', height: '1.1em'}}>
                            <span>{nameDisplay}</span>
                            {nameDisplay !== nameText && <span className="animate-pulse ml-1">|</span>}
                        </h1>
                        <div className="space-y-1">
                            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-inter font-normal tracking-wide max-w-lg leading-relaxed h-16 overflow-hidden">
                                {nameComplete && (
                                    <span>{descriptionDisplay}
                                        {showCursor && <span className="animate-pulse">|</span>}
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-center">
                <div
                    className="cursor-pointer hover:text-white transition-colors"
                    onClick={onScrollClick}
                >
                    <p className="text-sm mb-4 font-inter font-normal" style={{
                        background: 'linear-gradient(90deg, rgba(255,255,255,0.7), rgba(255,255,255,1), rgba(255,255,255,0.7))',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'moving-highlight 6s ease-in-out infinite alternate'
                    }}>Scroll to explore my portfolio</p>
                    <div className="animate-bounce">
                        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Mobile Profile intro component
function MobileProfileIntro({showProfile, onScrollClick}: { showProfile: boolean, onScrollClick: () => void }) {
    const nameText = "Matas Čiuželis"
    const descriptions = useMemo(() => [
        "I created a swerve drive in my mom's garage.",
        " Oops, wrong audience",
        "Mechanical engineering student at the University of Glasgow"
    ], [])

    // State for profile picture animation
    const [profilePictureAnimated, setProfilePictureAnimated] = useState(false)

    // Start profile picture animation when component shows
    useEffect(() => {
        if (showProfile) {
            const timer = setTimeout(() => {
                setProfilePictureAnimated(true)
            }, 200) // Small delay for smooth transition
            return () => clearTimeout(timer)
        } else {
            setProfilePictureAnimated(false)
        }
    }, [showProfile])

    // Only start typing after profile picture is in place
    const {displayText: nameDisplay, isComplete: nameComplete} = useTypingEffect(
        nameText,
        50,
        profilePictureAnimated ? 1200 : 999999 // Wait for profile pic animation
    )
    const { displayText: descriptionDisplay, showCursor } = useThreeStepTypingEffect(
        descriptions,
        40,     // typing speed
        30,     // delete speed
        1000,   // pause after first+second
        nameComplete ? 400 : 999999, // start delay
        800    // delay before appending second text
    )

    return (
        <div
            className={`absolute inset-0 z-10 transition-transform duration-1000 ease-in-out ${
                showProfile ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative h-full flex flex-col items-center justify-center px-6 pt-16">
                {/* Profile Image - Mobile - slightly larger and centered */}
                <div className="relative flex-shrink-0 mb-8">
                    <img
                        src={profilePicture}
                        alt="Matas Čiuželis"
                        className={`w-40 h-40 rounded-full object-cover transition-all duration-1000 ease-out
                            ${profilePictureAnimated 
                                ? 'translate-x-0 rotate-0 opacity-100' 
                                : '-translate-x-full rotate-12 opacity-0'
                            }`}
                        style={{
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 255, 255, 0.05)'
                        }}
                    />
                </div>

                {/* Text with typing animation - Mobile */}
                <div className="text-white text-center">
                    <h1 className="text-3xl sm:text-4xl font-inter font-normal mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-normal tracking-tight"
                        style={{lineHeight: '1.1', height: '1.1em'}}>
                        <span>{nameDisplay}</span>
                        {nameDisplay !== nameText && <span className="animate-pulse ml-1">|</span>}
                    </h1>
                    <div className="space-y-1">
                        <p className="text-base sm:text-lg text-gray-400 font-inter font-normal tracking-wide max-w-sm leading-relaxed h-12 overflow-hidden">
                            {nameComplete && (
                                <span>{descriptionDisplay}
                                    {showCursor && <span className="animate-pulse">|</span>}
                                </span>
                            )}
                        </p>
                    </div>
                </div>

                 {/* Scroll Indicator - Mobile */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 text-center">
                    <div
                        className="cursor-pointer hover:text-white transition-colors"
                        onClick={onScrollClick}
                    >
                        <p className="text-sm mb-4 font-inter font-normal" style={{
                            background: 'linear-gradient(90deg, rgba(255,255,255,0.7), rgba(255,255,255,1), rgba(255,255,255,0.7))',
                            backgroundSize: '200% 100%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'moving-highlight 6s ease-in-out infinite alternate'
                        }}>Scroll to explore my portfolio</p>
                        <div className="animate-bounce">
                            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LandingPage
