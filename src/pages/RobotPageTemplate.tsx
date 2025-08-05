import * as THREE from 'three'
import React, { useState, useEffect } from 'react'
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

  return (
    <div className="relative overflow-hidden">
      <Navigation pageType="robot" scrollOffset={scrollValue} />

      {/* Canvas section */}
      <div className="relative overflow-hidden bg-[#101010]">
        <Canvas
          dpr={[1, 2]}
          style={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
            pointerEvents: lockScroll ? 'auto' : 'none',
          }}
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
          onCreated={({ gl }) => gl.setClearColor(new THREE.Color('#101010'))}
        >
          <Environment files="/old_depot_2k.hdr" background={false} />
          <primitive attach="background" object={new THREE.Color('#101010')} />

          <ScrollControls pages={1} damping={0}>
            <Scroll>
              <AnimationTracker
                onScroll={(v) => setAnimationProgress(v)}
                onUnlock={() => setLockScroll(false)}
                lockScroll={lockScroll}
              />
            </Scroll>
          </ScrollControls>

          <PageTracker
            onRelock={() => setLockScroll(true)}
            lockScroll={lockScroll}
            onScrollChange={(v) => setScrollValue(v)}
          />

          {/* Robot Component passed in as prop */}
          {React.cloneElement(robot as React.ReactElement<any>, {
            scrollValue: animationProgress,
          })}

          <PerspectiveCamera makeDefault position={[50, 25, -40]} fov={50} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.25}
            makeDefault
            key={controlsKey}
          />
          <Tone mapping="ACESFilmic" exposure={0.85} />

          <Perf
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              pointerEvents: 'none',
              zIndex: 9999,
            }}
          />
        </Canvas>
      </div>

      {/* Content section passed in as children */}
      <div className="relative z-10 bg-background">{children}</div>
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

    const currentOffset = scroll.offset
    onScroll(currentOffset)

    if (currentOffset >= 0.99 && lastScroll.current < 0.99) {
      console.log('unlocking')
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

      if (scrollY === 0 && lastWindowY.current !== 0) {
        console.log('relocking')
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