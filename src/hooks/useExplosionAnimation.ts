import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type MoveVec = [number, number, number]

interface ExplosionStep {
  parts: string[]
  movement: MoveVec
}

interface UseExplosionAnimationProps {
  scrollValue: number
  explosionSequence: ExplosionStep[]
  partRefs: Record<string, React.RefObject<THREE.Object3D>>
  finalScale?: number
  autoRotate?: boolean
}

export const useExplosionAnimation = ({
  scrollValue,
  explosionSequence,
  partRefs,
  finalScale = 1,
  autoRotate = true
}: UseExplosionAnimationProps) => {
  const groupRef = useRef<THREE.Group>(null!)
  const userInteracted = useRef(false)

  useFrame((state, delta) => {
    // Handle mouse interaction
    if (state.pointer.x !== 0 || state.pointer.y !== 0) {
      userInteracted.current = true
    }

    // Calculate cumulative movement for each part
    const partMovements: Record<string, MoveVec> = {}
    
    explosionSequence.forEach((step, stepIndex) => {
      const stepProgress = Math.max(0, Math.min(1, (scrollValue - stepIndex * 0.25) / 0.25))
      
      step.parts.forEach(partName => {
        if (!partMovements[partName]) {
          partMovements[partName] = [0, 0, 0]
        }
        partMovements[partName][0] += step.movement[0] * stepProgress
        partMovements[partName][1] += step.movement[1] * stepProgress
        partMovements[partName][2] += step.movement[2] * stepProgress
      })
    })

    // Apply movements to parts
    Object.entries(partMovements).forEach(([partName, movement]) => {
      const partRef = partRefs[partName]
      if (partRef?.current) {
        const targetPosition = new THREE.Vector3(...movement)
        partRef.current.position.lerp(targetPosition, 0.1)
      }
    })

    // Scale animation
    if (groupRef.current) {
      const targetScale = new THREE.Vector3(finalScale, finalScale, finalScale)
      groupRef.current.scale.lerp(targetScale, 0.05)
    }

    // Auto rotation
    if (groupRef.current && autoRotate && !userInteracted.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return { groupRef }
}