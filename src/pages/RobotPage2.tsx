import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { 
  PerspectiveCamera, 
  Environment, 
  ScrollControls, 
  useScroll 
} from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import Navigation from '@/components/Navigation'

// Placeholder Robot component for the second robot
const Robot2 = ({ scrollValue = 0, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Simple rotation animation
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
      
      // Scale based on scroll
      const targetScale = scale + (scrollValue * 0.5)
      meshRef.current.scale.setScalar(targetScale)
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#ff6b6b" metalness={0.7} roughness={0.3} />
    </mesh>
  )
}

const RobotPage2 = () => {
  const [scrollLocked, setScrollLocked] = useState(true)
  const [animationProgress, setAnimationProgress] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [scrollLocked])

  return (
    <div className="h-screen w-full overflow-hidden relative bg-black">
      <Navigation pageType="robot" scrollOffset={animationProgress} />
      
      <Canvas style={{ background: '#000' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <ScrollControls pages={3} damping={0.1}>
          <Suspense fallback={null}>
            <Robot2 />
            <AnimationTracker 
              onUnlock={() => setScrollLocked(false)}
              onProgressChange={setAnimationProgress}
            />
          </Suspense>
        </ScrollControls>
        
        <Environment preset="warehouse" />
        <Tone />
      </Canvas>

      {!scrollLocked && (
        <PageTracker 
          onRelock={() => setScrollLocked(true)}
          lockScroll={scrollLocked}
          onScrollChange={(scrolled) => setAnimationProgress(scrolled)}
        />
      )}

      {/* Static content sections */}
      <div className="absolute top-full left-0 w-full bg-white text-black">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-4xl font-bold mb-6">Meet Our Second Robot</h2>
            <p className="text-lg leading-relaxed">
              This is our second innovative robot design, featuring advanced capabilities
              and cutting-edge technology. Built with precision and designed for excellence.
            </p>
          </div>
        </div>
        
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-4xl font-bold mb-6">Enhanced Features</h2>
            <p className="text-lg leading-relaxed">
              Our second robot incorporates lessons learned from the first model,
              with improved efficiency, better performance, and enhanced user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper components (copied from original RobotPage)
function Tone() {
  const { gl } = useThree()
  
  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMappingExposure = 1.25
  }, [gl])
  
  return null
}

function AnimationTracker({ 
  onUnlock, 
  onProgressChange 
}: { 
  onUnlock: () => void
  onProgressChange: (progress: number) => void 
}) {
  const scroll = useScroll()
  const hasUnlocked = useRef(false)
  
  useFrame(() => {
    const progress = scroll.offset * 1000
    onProgressChange(progress)
    
    if (scroll.offset > 0.95 && !hasUnlocked.current) {
      hasUnlocked.current = true
      onUnlock()
    }
  })
  
  return null
}

interface PageTrackerProps {
  onRelock: () => void
  lockScroll: boolean
  onScrollChange: (scrolled: number) => void
}

function PageTracker({ onRelock, lockScroll, onScrollChange }: PageTrackerProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      onScrollChange(scrolled)
      
      if (scrolled <= 50 && !lockScroll) {
        onRelock()
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onRelock, lockScroll, onScrollChange])

  return null
}

export default RobotPage2