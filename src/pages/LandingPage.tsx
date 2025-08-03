import * as THREE from 'three'
import '../utils/geometry'
import { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber'
import { Image, Environment, ScrollControls, useScroll } from '@react-three/drei'
import { easing } from 'maath'
import { useNavigate } from 'react-router-dom'
import Navigation from '@/components/Navigation'

// Import card images
import card1 from '@/assets/card1.jpg'
import card2 from '@/assets/card2.jpg'
import card3 from '@/assets/card3.jpg'
import card4 from '@/assets/card4.jpg'
import card5 from '@/assets/card5.jpg'
import card6 from '@/assets/card6.jpg'
import card7 from '@/assets/card7.jpg'
import card8 from '@/assets/card8.jpg'

const cardImages = [card1, card2, card3, card4, card5, card6, card7, card8]

// Create Siri-style border animation
function createSiriBorder(rotationAngle = 0) {
  const size = 2048
  const borderThickness = 10
  const cornerRadius = 256

  // create and size canvas
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  // Calculate gradient endpoints based on rotation angle
  const centerX = size / 2
  const centerY = size / 2
  const radius = size * 0.7
  const startX = centerX + Math.cos(rotationAngle) * radius
  const startY = centerY + Math.sin(rotationAngle) * radius
  const endX = centerX + Math.cos(rotationAngle + Math.PI) * radius
  const endY = centerY + Math.sin(rotationAngle + Math.PI) * radius

  // draw full‐canvas gradient with rotation
  const grad = ctx.createLinearGradient(startX, startY, endX, endY)
  grad.addColorStop(0, 'rgba(124, 58, 237, 1)')
  grad.addColorStop(0.2, 'rgba(59, 130, 246, 1)')
  grad.addColorStop(0.4, 'rgba(16, 185, 129, 1)')
  grad.addColorStop(0.6, 'rgba(245, 158, 11, 1)')
  grad.addColorStop(0.8, 'rgba(239, 68, 68, 1)')
  grad.addColorStop(1, 'rgba(219, 39, 119, 1)')
  ctx.fillStyle = grad

  // draw rounded rect background
  ctx.beginPath()
  ctx.moveTo(cornerRadius, 0)
  ctx.lineTo(size - cornerRadius, 0)
  ctx.quadraticCurveTo(size, 0, size, cornerRadius)
  ctx.lineTo(size, size - cornerRadius)
  ctx.quadraticCurveTo(size, size, size - cornerRadius, size)
  ctx.lineTo(cornerRadius, size)
  ctx.quadraticCurveTo(0, size, 0, size - cornerRadius)
  ctx.lineTo(0, cornerRadius)
  ctx.quadraticCurveTo(0, 0, cornerRadius, 0)
  ctx.closePath()
  ctx.fill()

  // punch out inner rounded rect to form border
  ctx.globalCompositeOperation = 'destination-out'
  ctx.beginPath()
  const inner = borderThickness
  const innerSize = size - borderThickness * 2
  ctx.moveTo(inner + cornerRadius, inner)
  ctx.lineTo(inner + innerSize - cornerRadius, inner)
  ctx.quadraticCurveTo(inner + innerSize, inner, inner + innerSize, inner + cornerRadius)
  ctx.lineTo(inner + innerSize, inner + innerSize - cornerRadius)
  ctx.quadraticCurveTo(inner + innerSize, inner + innerSize, inner + innerSize - cornerRadius, inner + innerSize)
  ctx.lineTo(inner + cornerRadius, inner + innerSize)
  ctx.quadraticCurveTo(inner, inner + innerSize, inner, inner + innerSize - cornerRadius)
  ctx.lineTo(inner, inner + cornerRadius)
  ctx.quadraticCurveTo(inner, inner, inner + cornerRadius, inner)
  ctx.closePath()
  ctx.fill()

  // reset composite for future draws
  ctx.globalCompositeOperation = 'source-over'

  return canvas
}


const LandingPage = () => {
  const [hasScrolled, setHasScrolled] = useState(0)

  const handleScrollChange = (scrolled: number) => {
    setHasScrolled(scrolled)
  }

  return (
    <div className="h-screen w-full overflow-hidden relative">
      {/* Background Orbs */}
      <div className="background-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      {/* Navigation */}
      <Navigation pageType = 'landing' scrollOffset={hasScrolled} />
      
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 100], fov: 9 }}>
        <fog attach="fog" args={['#a79', 8.5, 12]} />
        <ScrollControls pages={4} infinite>
          <Rig rotation={[0, 0, 0.03]} onScrollChange={handleScrollChange}>
            <Carousel />
          </Rig>
        </ScrollControls>
        <Environment preset="dawn" background blur={0.5} />
      </Canvas>
    </div>
  )
}

interface RigProps extends React.ComponentProps<'group'> {
  rotation: [number, number, number]
  onScrollChange?: (hasScrolled: number) => void
}

function Rig({ onScrollChange, ...props }: RigProps) {
  const ref = useRef<THREE.Group>(null!)
  const scroll = useScroll()
  const prevOffset = useRef(0)
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = -scroll.offset * (Math.PI * 2)
    }
    
    // Detect scroll change
    if (Math.abs(scroll.offset - prevOffset.current) > 0.001) {
      onScrollChange?.(scroll.offset)
      console.log("scrolled")
      prevOffset.current = scroll.offset
    }
    
    state.events?.update?.()
    easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta)
    state.camera.lookAt(0, 0, 1.25)
  })
  return <group ref={ref} {...props} />
}

function Carousel({ radius = 1.4, count = 8 }) {
  return Array.from({ length: count }, (_, i) => (
      <Card
          key={i}
          url={cardImages[i % cardImages.length]}
          position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
          rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
      />
  ))
}

interface CardProps {
  url: string
  position?: [number, number, number]
  rotation?: [number, number, number]
}

interface ZoomableMaterial extends THREE.ShaderMaterial {
  radius: number
  zoom: number
}

function Card({ url, ...props }: CardProps) {
  const ref = useRef<THREE.Mesh<THREE.BufferGeometry, ZoomableMaterial>>(null!)
  const [hovered, hover] = useState(false)
  const rotationAngle = useRef(0)
  const navigate = useNavigate()

  const pointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    hover(true)
  }

  const pointerOut = (_e: ThreeEvent<PointerEvent>) => {
    hover(false)
  }

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    navigate('/robot')
  }

  useFrame((state, delta) => {
    if (ref.current) {
      easing.damp3(ref.current.scale, hovered ? 1.25 : 1, 0.1, delta)
      easing.damp(ref.current.material, 'radius', hovered ? 0.1 : 0.05, 0.2, delta)
      easing.damp(ref.current.material, 'zoom', hovered ? 1.15 : 1, 0.2, delta)
    }
    
    // Animate border rotation when hovered
    if (hovered) {
      rotationAngle.current += delta * 0.5 // Adjust speed as needed
    }
  })

  return (
    <group>
      <Image
        ref={ref}
        url={url}
        transparent
        side={THREE.DoubleSide}
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={handleClick}
        {...props}
      >
        <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
      </Image>
      {hovered && (
        <mesh
          position={props.position}
          rotation={props.rotation}
          scale={1.26}
        >
          <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
          <meshBasicMaterial
            transparent
            opacity={1}
            side={THREE.DoubleSide}
          >
            <primitive
              attach="map"
              object={new THREE.CanvasTexture(createSiriBorder(rotationAngle.current))}
            />
          </meshBasicMaterial>
        </mesh>
      )}
    </group>
  )
}

export default LandingPage
