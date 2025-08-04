import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { 
  PerspectiveCamera, 
  Environment, 
  ScrollControls, 
  useScroll 
} from '@react-three/drei'
import Navigation from '@/components/Navigation'

interface ExplosionPart {
  name: string
  move: [number, number, number]
}

interface ExplosionStep {
  parts: ExplosionPart[]
}

interface RobotPageTemplateProps {
  explosionSequence: ExplosionStep[]
  robotModel: React.ComponentType<{ 
    scrollValue: number
    explosionSequence: ExplosionStep[]
    finalScale?: number
  }>
  sections: Array<{
    title: string
    content: string
    className?: string
  }>
  finalScale?: number
}

const RobotPageTemplate = ({ 
  explosionSequence, 
  robotModel: RobotModel, 
  sections,
  finalScale = 1
}: RobotPageTemplateProps) => {
  const [scrollLocked, setScrollLocked] = useState(true)
  const [animationProgress, setAnimationProgress] = useState(0)

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
            <RobotModel 
              scrollValue={0} 
              explosionSequence={explosionSequence}
              finalScale={finalScale}
            />
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

      {/* Dynamic content sections */}
      <div className="absolute top-full left-0 w-full bg-white text-black">
        {sections.map((section, index) => (
          <div 
            key={index}
            className={`min-h-screen flex items-center justify-center ${
              index % 2 === 1 ? 'bg-gray-100' : ''
            } ${section.className || ''}`}
          >
            <div className="max-w-4xl mx-auto p-8">
              <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
              <p className="text-lg leading-relaxed">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Helper components
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

export default RobotPageTemplate