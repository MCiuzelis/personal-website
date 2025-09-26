import * as THREE from 'three'
import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  Scroll,
  useScroll,
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useNavigate } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import { CanvasLoader } from '@/components/CanvasLoader'
import { useIsMobile } from '@/hooks/use-mobile'
import { ChevronDown } from 'lucide-react'

interface RobotPageTemplateProps {
  robot: React.ReactNode
  children?: React.ReactNode
}

export default function RobotPageTemplate({ robot, children }: RobotPageTemplateProps) {
  const [controlsKey] = useState(0)
  const navigate = useNavigate()
  const [animationProgress, setAnimationProgress] = useState(0)
  const [lockScroll, setLockScroll] = useState(true)
  const [scrollValue, setScrollValue] = useState(0)
  const [robotVisible, setRobotVisible] = useState(true)
  const [mobileSliderValue, setMobileSliderValue] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const robotSectionRef = useRef<HTMLDivElement>(null)
  const contentSectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  // Toggle mobile body scroll
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = lockScroll ? 'hidden' : 'auto'
      return () => { document.body.style.overflow = 'auto' }
    }
  }, [lockScroll, isMobile])

  // Robot visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => setRobotVisible(entry.isIntersecting),
        { threshold: 0.00001 }
    )
    if (robotSectionRef.current) observer.observe(robotSectionRef.current)
    return () => {
      if (robotSectionRef.current) observer.unobserve(robotSectionRef.current)
    }
  }, [])

  return (
      <div className="relative bg-[#101010]">
        <Navigation pageType="robot" scrollOffset={scrollValue} />

        {/* Canvas Section */}
        <div
            ref={robotSectionRef}
            className="relative bg-[#101010]"
            style={{ height: isMobile && !lockScroll ? '60vh' : '100vh' }} // shrink on mobile when unlocked
        >
          <Canvas
              dpr={[1, 2]}
              style={{
                width: '100vw',
                height: '100%',
                position: 'relative',
                pointerEvents: lockScroll ? 'auto' : 'none',
                touchAction: lockScroll ? 'auto' : 'auto', // allow touch scroll after unlock
                background: '#101010',
              }}
              gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
              onCreated={({ gl }) => gl.setClearColor(new THREE.Color('#101010'))}
          >
            <Environment files="/old_depot.hdr" background={false} />
            <primitive attach="background" object={new THREE.Color('#101010')} />

            {!isMobile && lockScroll && (
                <ScrollControls pages={1} damping={0}>
                  <Scroll>
                    <AnimationTracker
                        onScroll={(v) => setAnimationProgress(v)}
                        onUnlock={() => setLockScroll(false)}
                        lockScroll={lockScroll}
                    />
                  </Scroll>
                </ScrollControls>
            )}

            <PageTracker
                onRelock={() => setLockScroll(true)}
                lockScroll={lockScroll}
                onScrollChange={(v) => setScrollValue(v)}
            />

            <Suspense fallback={<CanvasLoader />}>
              {robotVisible &&
                  React.cloneElement(robot as React.ReactElement, {
                    scrollValue: isMobile ? mobileSliderValue : animationProgress,
                  })}
            </Suspense>

            <PerspectiveCamera makeDefault position={[50, 25, -40]} fov={50} />

            <OrbitControls
                enableZoom={false}
                enablePan={!lockScroll}
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 1.25}
                makeDefault
                key={controlsKey}
            />

            <Tone mapping="ACESFilmic" exposure={0.85} />

            {!isMobile && (
                <Perf
                    style={{
                      position: 'absolute',
                      top: '4.5rem',
                      right: '1rem',
                      pointerEvents: 'none',
                      zIndex: 9999,
                    }}
                />
            )}
          </Canvas>

          {/* Mobile Controls */}
          {isMobile && lockScroll && (
              <div className="absolute bottom-16 left-0 right-0 z-50 px-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3">
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={mobileSliderValue}
                        onChange={(e) => setMobileSliderValue(parseFloat(e.target.value))}
                        className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) ${
                              mobileSliderValue * 100
                          }%, rgba(255,255,255,0.2) ${mobileSliderValue * 100}%, rgba(255,255,255,0.2) 100%)`,
                        }}
                    />
                  </div>

                  <button
                      onClick={() => {
                        setShowContent(true)
                        setLockScroll(false)
                        setTimeout(() => {
                          contentSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }, 100)
                      }}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
                      aria-label="Toggle content visibility"
                  >
                    <ChevronDown
                        className={`w-6 h-6 transition-transform duration-300 ${
                            showContent ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                </div>
              </div>
          )}
        </div>

        {/* Content Section */}
        <div
            ref={contentSectionRef}
            className="relative z-10 bg-[#101010] text-white"
            style={{ minHeight: '200vh', paddingBottom: '4rem' }} // increased to allow full scroll
        >
          {children}
        </div>
      </div>
  )
}

// --- Shared Components ---
function Tone({ mapping, exposure }: { mapping: string; exposure: number }) {
  const gl = useThree((state) => state.gl)
  useEffect(() => {
    const prevFrag = THREE.ShaderChunk.tonemapping_pars_fragment
    const prevTM = gl.toneMapping
    const prevExp = gl.toneMappingExposure

    THREE.ShaderChunk.tonemapping_pars_fragment = prevFrag.replace(
        'vec3 CustomToneMapping( vec3 color ) { return color; }',
        `float startCompression = 0.8 - 0.04;
       float desaturation = 0.15;
       vec3 CustomToneMapping( vec3 color ) {
         color *= toneMappingExposure;
         float x = min(color.r, min(color.g, color.b));
         float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
         color -= offset;
         float peak = max(color.r, max(color.g, color.b));
         if (peak < startCompression) return color;
         float d = 1. - startCompression;
         float newPeak = 1. - d * d / (peak + d - startCompression);
         color *= newPeak / peak;
         float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
         return mix(color, vec3(1), g);
       }`
    )

    gl.toneMapping =
        (THREE as unknown as Record<string, THREE.ToneMapping>)[`${mapping}ToneMapping`] ??
        THREE.ACESFilmicToneMapping
    gl.toneMappingExposure = exposure

    return () => {
      gl.toneMapping = prevTM
      gl.toneMappingExposure = prevExp
      THREE.ShaderChunk.tonemapping_pars_fragment = prevFrag
    }
  }, [mapping, exposure])
  return null
}

function AnimationTracker({
                            onScroll,
                            onUnlock,
                            lockScroll,
                          }: {
  onScroll: (value: number) => void
  onUnlock: () => void
  lockScroll: boolean
}) {
  const scroll = useScroll()
  const lastScroll = React.useRef(0)

  useFrame(() => {
    if (!lockScroll) return

    const currentOffset = scroll.offset * 2
    onScroll(currentOffset)

    if (currentOffset >= 1.1 && lastScroll.current < 1.1) {
      onUnlock()
    }

    lastScroll.current = currentOffset
  })

  return null
}

interface PageTrackerProps {
  onRelock: () => void
  lockScroll: boolean
  onScrollChange?: (scrollValue: number) => void
}

function PageTracker({ onRelock, lockScroll, onScrollChange }: PageTrackerProps) {
  const lastWindowY = React.useRef(0)

  useFrame(() => {
    if (!lockScroll) {
      const scrollY = window.scrollY

      if (scrollY <= 10 && lastWindowY.current > 10) {
        onScrollChange?.(0)
        onRelock()
      }

      if (scrollY > 0) {
        onScrollChange?.(scrollY)
      }

      lastWindowY.current = scrollY
    }
  })
  return null
}
