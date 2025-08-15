import { Html, useProgress } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export const CanvasLoader = () => {
  const { progress } = useProgress()
  const meshRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
    }
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.1
    }
  })

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        {/* 3D Rotating Cube using CSS */}
        <div className="relative w-16 h-16 mb-6" style={{ perspective: '200px' }}>
          <div 
            className="w-full h-full relative animate-spin"
            style={{ 
              transformStyle: 'preserve-3d',
              animation: 'spin 2s linear infinite'
            }}
          >
            {/* Cube faces */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-80 border border-white/20" 
                 style={{ transform: 'rotateY(0deg) translateZ(2rem)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 opacity-80 border border-white/20" 
                 style={{ transform: 'rotateY(90deg) translateZ(2rem)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-600 opacity-80 border border-white/20" 
                 style={{ transform: 'rotateY(180deg) translateZ(2rem)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-600 opacity-80 border border-white/20" 
                 style={{ transform: 'rotateY(-90deg) translateZ(2rem)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-600 opacity-80 border border-white/20" 
                 style={{ transform: 'rotateX(90deg) translateZ(2rem)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-green-600 opacity-80 border border-white/20" 
                 style={{ transform: 'rotateX(-90deg) translateZ(2rem)' }} />
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Loading text */}
        <div className="mt-4 text-white/80 text-sm font-medium">
          Loading 3D Model... {Math.round(progress)}%
        </div>
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