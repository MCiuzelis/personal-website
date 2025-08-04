import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRobotAnimation } from '@/hooks/useRobotAnimation'

interface Robot2Props {
  scrollValue: number
  explosionSequence?: any[]
  finalScale?: number
}

const Robot2 = ({ scrollValue = 0, finalScale = 1 }: Robot2Props) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  // Different explosion sequence for Robot2
  const explosionSequence = [
    {
      parts: [
        { name: 'leftArm', move: [-4, 2, 0] as [number, number, number] },
        { name: 'rightArm', move: [4, 2, 0] as [number, number, number] },
        { name: 'head', move: [0, 3, 0] as [number, number, number] }
      ]
    },
    {
      parts: [
        { name: 'torso', move: [0, 0, -2] as [number, number, number] },
        { name: 'leftLeg', move: [-2, -3, 0] as [number, number, number] },
        { name: 'rightLeg', move: [2, -3, 0] as [number, number, number] }
      ]
    }
  ]

  // Mock nodes object for the hook
  const nodes = { robot2: meshRef.current }

  const { groupRef } = useRobotAnimation({
    scrollValue,
    explosionSequence,
    nodes,
    finalScale,
    dampingFactor: 0.1
  })
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Simple rotation animation
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
      
      // Scale based on scroll
      const targetScale = finalScale + (scrollValue * 0.5)
      meshRef.current.scale.setScalar(targetScale)
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#ff6b6b" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  )
}

export default Robot2