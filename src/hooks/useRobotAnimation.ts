import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import React from 'react'

interface ExplosionPart {
  name: string
  move: [number, number, number]
}

interface ExplosionStep {
  parts: ExplosionPart[]
}

interface UseRobotAnimationProps {
  scrollValue: number
  explosionSequence: ExplosionStep[]
  nodes: Record<string, any>
  finalScale?: number
  dampingFactor?: number
}

export const useRobotAnimation = ({
  scrollValue,
  explosionSequence,
  nodes,
  finalScale = 1,
  dampingFactor = 0.1
}: UseRobotAnimationProps) => {
  const groupRef = useRef<THREE.Group>(null!)
  const [modelReady, setModelReady] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)

  // 🧠 Collect all unique part names (plus mirrors)
  const allPartNames = Array.from(
    new Set(
      explosionSequence.flatMap(step =>
        step.parts.flatMap(part => [part.name, part.name + 'Mirror'])
      )
    )
  )

  // 🧵 Refs by name
  const refMap = React.useMemo(() => {
    const map: Record<string, React.RefObject<THREE.Object3D>> = {}
    allPartNames.forEach(name => {
      map[name] = React.createRef<THREE.Object3D>()
    })
    return map
  }, [allPartNames])

  // 🔧 Helpers to cast refs safely
  const getMeshRef = (name: string) =>
    refMap[name] as React.RefObject<THREE.Mesh>
  const getGroupRef = (name: string) =>
    refMap[name] as React.RefObject<THREE.Group>

  const stepSize = 1 / explosionSequence.length

  const smoothedPositions = useRef<Record<string, THREE.Vector3>>(
    Object.fromEntries(
      allPartNames.map(name => [name, new THREE.Vector3()])
    )
  )

  useEffect(() => {
    if (groupRef.current && Object.keys(nodes).length) {
      // ensure initial scale is zero
      groupRef.current.scale.setScalar(0)
      setModelReady(true)
    }

    const onFirstPointer = () => setUserInteracted(true)
    window.addEventListener('pointerdown', onFirstPointer, { once: true })
    return () => {
      window.removeEventListener('pointerdown', onFirstPointer)
    }
  }, [nodes])

  // 🎞 Animate parts with cumulative movement
  useFrame((_, delta) => {
    // 1) explosion logic
    const totalMovement: Record<string, THREE.Vector3> = {}
    explosionSequence.forEach((step, i) => {
      const start = i * stepSize
      const end = (i + 1) * stepSize
      let localT = 0
      if (scrollValue >= end) localT = 1
      else if (scrollValue > start)
        localT = (scrollValue - start) / stepSize

      step.parts.forEach(part => {
        for (const suffix of ['', 'Mirror']) {
          const name = part.name + suffix
          const moveVec = suffix === 'Mirror'
            ? [-part.move[0], part.move[1], part.move[2]]
            : part.move
          const vec = new THREE.Vector3(...moveVec)

          if (!totalMovement[name]) totalMovement[name] = new THREE.Vector3()
          totalMovement[name].add(
            vec.clone().multiplyScalar(
              scrollValue >= end ? 1 : localT
            )
          )
        }
      })
    })

    for (const name in totalMovement) {
      const ref = refMap[name]
      if (ref.current) {
        // Target position scaled as before
        const targetPos = totalMovement[name].clone().multiplyScalar(1 / 6)
        smoothedPositions.current[name].lerp(targetPos, dampingFactor)
        ref.current.position.copy(smoothedPositions.current[name])
      }
    }

    if (groupRef.current && !userInteracted) {
      groupRef.current.rotation.y += delta * 0.5 // rad/s
    }

    if (modelReady && groupRef.current) {
      // target scale is 1
      const current = groupRef.current.scale.x
      const next = THREE.MathUtils.lerp(current, finalScale, 0.01)
      groupRef.current.scale.setScalar(next)
    }
  })

  return {
    groupRef,
    getMeshRef,
    getGroupRef,
    refMap,
    modelReady
  }
}