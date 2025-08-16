import { Html, useProgress } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

export const CanvasLoader = () => {
  const { progress, errors, item, loaded, total } = useProgress()
  const meshRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  
  // Optimized progress calculation with better UX
  const { displayProgress, barProgress, isComplete, loadingText } = useMemo(() => {
    // Show progress more aggressively to reduce perceived loading time
    const smoothProgress = Math.min(progress * 1.1, 100) // Slightly boost perceived progress
    const displayProg = smoothProgress >= 98 ? 100 : Math.round(smoothProgress)
    const barProg = smoothProgress >= 98 ? 100 : smoothProgress
    const complete = smoothProgress >= 99
    
    let text = 'Loading 3D Model'
    if (loaded > 0 && total > 0) {
      text = `Loading Assets (${loaded}/${total})`
    }
    if (errors.length > 0) {
      text = 'Almost ready...'
    }
    
    return {
      displayProgress: displayProg,
      barProgress: barProg,
      isComplete: complete,
      loadingText: text
    }
  }, [progress, errors, loaded, total])

  // Optimized animation frame
  useFrame((state, delta) => {
    const dampedDelta = Math.min(delta, 0.016) // Cap at 60fps equivalent
    
    if (meshRef.current) {
      meshRef.current.rotation.x += dampedDelta * 0.5
      meshRef.current.rotation.y += dampedDelta * 0.3
    }
    if (groupRef.current) {
      groupRef.current.rotation.z += dampedDelta * 0.1
    }
  })

  return (
    <Html center>
      <div 
        className={`flex flex-col items-center justify-center transition-opacity duration-300 ${
          isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ willChange: 'opacity' }} // Optimize for transitions
      >
        {/* Optimized 3D Rotating Cube */}
        <div className="relative w-16 h-16 mb-6" style={{ perspective: '200px' }}>
          <div 
            className="w-full h-full relative"
            style={{ 
              transformStyle: 'preserve-3d',
              animation: 'spin 2s linear infinite',
              willChange: 'transform'
            }}
          >
            {/* Cube faces with optimized gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-90 border border-white/30 rounded-sm" 
                 style={{ transform: 'rotateY(0deg) translateZ(2rem)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 opacity-90 border border-white/30 rounded-sm" 
                 style={{ transform: 'rotateY(90deg) translateZ(2rem)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-600 opacity-90 border border-white/30 rounded-sm" 
                 style={{ transform: 'rotateY(180deg) translateZ(2rem)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-600 opacity-90 border border-white/30 rounded-sm" 
                 style={{ transform: 'rotateY(-90deg) translateZ(2rem)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-600 opacity-90 border border-white/30 rounded-sm" 
                 style={{ transform: 'rotateX(90deg) translateZ(2rem)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-green-600 opacity-90 border border-white/30 rounded-sm" 
                 style={{ transform: 'rotateX(-90deg) translateZ(2rem)' }} />
          </div>
        </div>
        
        {/* Enhanced progress bar */}
        <div className="w-52 h-1.5 bg-white/15 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-200 ease-out"
            style={{ 
              width: `${barProgress}%`,
              willChange: 'width'
            }}
          />
        </div>
        
        {/* Loading text with better UX */}
        <div className="mt-4 text-white/90 text-sm font-medium text-center">
          {loadingText}
          {displayProgress < 100 && <span className="ml-1">{displayProgress}%</span>}
        </div>
        
        {/* Error handling */}
        {errors.length > 0 && (
          <div className="mt-2 text-orange-300 text-xs text-center max-w-xs">
            Some assets are taking longer than expected...
          </div>
        )}
      </div>
    </Html>
  )
}

export const CanvasLoaderFallback = () => (
  <Html center>
    <div className="flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4" />
      <div className="text-white/80 text-sm">Loading...</div>
    </div>
  </Html>
)