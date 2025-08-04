import * as THREE from 'three'
import React from 'react'
import { useEffect, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import {Environment, OrbitControls, PerspectiveCamera, ScrollControls, Scroll, useScroll,} from '@react-three/drei'
import VLR_Robot from '../components/VLR_Robot.tsx'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import { useNavigate } from 'react-router-dom'
import Navigation from '@/components/Navigation'

export default function VLR_Page() {
  const [controlsKey] = useState(0)
  const navigate = useNavigate()
  const [animationProgress, setAnimationProgress] = useState(0)
  const [lockScroll, setLockScroll] = useState(true)
  const [scrollValue, setScrollValue] = useState(0)

  // const { mapping, exposure } = useControls({
  //   exposure: { value: 0.85, min: 0, max: 4 },
  //   mapping: {
  //     value: 'ACESFilmic',
  //     options: ['No', 'Linear', 'AgX', 'ACESFilmic', 'Reinhard', 'Cineon', 'Custom'],
  //   },
  // })

  return (
      <div className="relative overflow-hidden">
        {/* Navigation */}
        <Navigation pageType = 'robot' scrollOffset={scrollValue}/>

        {/* 3D Model Section - Full height with ScrollControls */}
        <div className="relative overflow-hidden bg-[#000]">
            <Canvas
                dpr={[1, 2]}
                style={{ width: '100vw', height: '100vh', pointerEvents: lockScroll ? 'auto' : 'none' }}
                gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
                onCreated={({ gl }) => gl.setClearColor(new THREE.Color('#000'))}
            >
              <Environment files="/old_depot_2k.hdr" background={false} />
              <primitive attach="background" object={new THREE.Color('#000')} />

              <ScrollControls pages={1} damping={0}>
                <Scroll>
                  <AnimationTracker
                      onScroll={(v) => {
                        setAnimationProgress(v)
                      }}
                      onUnlock={() => setLockScroll(false)}
                      lockScroll={lockScroll}
                  />
                </Scroll>
              </ScrollControls>

              <PageTracker
                  onRelock={() => {
                    setLockScroll(true)
                  }}
                  lockScroll={lockScroll}
                  onScrollChange={(scrolled) => setScrollValue(scrolled)}
              />

              <VLR_Robot scrollValue={animationProgress} position={[1, -2, 1]} scale={23} rotation-y={0} />

              <PerspectiveCamera makeDefault position={[50, 25, -40]} fov={50} />
              <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={0}
                  maxPolarAngle={Math.PI / 1.25}
                  makeDefault
                  key={controlsKey}
              />
              <Tone mapping={'ACESFilmic'} exposure={0.85} />
              <Perf style={{ position: 'absolute', top: '1rem', right: '1rem', pointerEvents: 'none', zIndex: 9999 }} />
            </Canvas>
        </div>


        {/* Content Sections - Positioned below the 3D section */}
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
      </div>
  )
}

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

    gl.toneMapping = (THREE as unknown as Record<string, THREE.ToneMapping>)[`${mapping}ToneMapping`] ?? THREE.ACESFilmicToneMapping
    gl.toneMappingExposure = exposure

    return () => {
      gl.toneMapping = prevTM
      gl.toneMappingExposure = prevExp
      THREE.ShaderChunk.tonemapping_pars_fragment = prevFrag
    }
  }, [mapping, exposure])

  return null
}



function AnimationTracker({onScroll, onUnlock, lockScroll}: {
  onScroll: (value: number) => void
  onUnlock: () => void
  lockScroll: boolean
}) {
  const scroll = useScroll()
  const lastScroll = React.useRef(0)

  useFrame(() => {
    if (!lockScroll){
      return
    }

    const currentOffset = scroll.offset;

    // console.log(currentOffset)
    onScroll(scroll.offset)

    if (currentOffset >= 0.99 && lastScroll.current < 0.99) {
      console.log("unlocking")
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

function PageTracker({onRelock, lockScroll, onScrollChange}: PageTrackerProps) {
  const lastWindowY = React.useRef(0)

  useFrame(() => {
    if (!lockScroll){
      const scrollY = window.scrollY
      // console.log(scrollY)

      if (scrollY == 0 && lastWindowY.current != 0){
        console.log("relocking")
        onScrollChange?.(0)
        onRelock()
      }

      if (scrollY > 0){
        onScrollChange?.(scrollY)
        // console.log("for nav " + scrollY)
      }

      lastWindowY.current = scrollY
    }
  })

  return null
}



interface PrintYProps {
  lockScroll: boolean
}

function PrintY({lockScroll}: PrintYProps) {

  useFrame(() => {
    // console.log(lockScroll)
  })

  return null
}