import * as THREE from 'three'
import '../utils/geometry'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber'
import { Image, Environment, ScrollControls, useScroll } from '@react-three/drei'
import { easing } from 'maath'
import { useNavigate } from 'react-router-dom'
import Navigation from '@/components/Navigation'

// Import card images
import card1 from '@/assets/ProjectThumbnails/main.jpg'
import card2 from '@/assets/ProjectThumbnails/spinLaunch.jpg'
import card3 from '@/assets/ProjectThumbnails/RubensTube.jpg'
import card4 from '@/assets/ProjectThumbnails/engine.jpeg'
import card5 from '@/assets/ProjectThumbnails/FLL.jpg'
import card6 from '@/assets/ProjectThumbnails/FGC.jpeg'
import card7 from '@/assets/ProjectThumbnails/Swerve.jpg'
import card8 from '@/assets/ProjectThumbnails/VLR.jpg'

const cardImages = [card1, card2, card3, card4, card5, card6, card7, card8]

const LandingPage = () => {
  const [hasScrolled, setHasScrolled] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const title = "Matas' project showcase"
    document.title = title
    const desc = 'Explore kinetic launch platform, combustion engine, and robotics projects.'
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = desc

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = window.location.origin + '/'
  }, [])

  const handleScrollChange = (scrolled: number) => {
    setHasScrolled(scrolled)
  }

  return (
    <div className="h-screen w-full overflow-hidden relative bg-black">
      {/* Navigation */}
      <Navigation pageType = 'landing' scrollOffset={hasScrolled} hoveredCard={hoveredCard} />

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 100], fov: 8.75 }} style={{ background: '#000' }}>
        {/*<fog attach="fog" args={['#000', 8.5, 12]} />*/}
        <ScrollControls pages={4} infinite>
          <Rig rotation={[0, 0, 0.02]} onScrollChange={handleScrollChange}>
            <Carousel onCardHover={setHoveredCard} />
          </Rig>
        </ScrollControls>
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
    const scrollDelta = Math.abs(scroll.offset - prevOffset.current)
    if (scrollDelta > 0.001) {
      onScrollChange?.(scrollDelta)
      // console.log("scrolled")
      prevOffset.current = scroll.offset
    }

    state.events?.update?.()
    easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta)
    state.camera.lookAt(0, 0, 1)
  })
  return <group ref={ref} {...props} />
}

function Carousel({ radius = 1.34, count = 8, onCardHover }: { radius?: number, count?: number, onCardHover: (cardIndex: number | null) => void }) {
  return Array.from({ length: count }, (_, i) => (
      <Card
          key={i}
          url={cardImages[i % cardImages.length]}
          position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
          rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
          cardIndex={i}
          onCardHover={onCardHover}
      />
  ))
}

interface CardProps {
  url: string
  position?: [number, number, number]
  rotation?: [number, number, number]
  cardIndex: number
  onCardHover: (cardIndex: number | null) => void
}

interface ZoomableMaterial extends THREE.ShaderMaterial {
  radius: number
  zoom: number
}

function Card({ url, cardIndex, onCardHover, ...props }: CardProps) {
  const ref = useRef<THREE.Mesh<THREE.BufferGeometry, ZoomableMaterial>>(null!)
  const [hovered, hover] = useState(false)
  const rotationAngle = useRef(0)
  const navigate = useNavigate()

  const pointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    hover(true)
    onCardHover(cardIndex)
  }

  const pointerOut = (_e: ThreeEvent<PointerEvent>) => {
    hover(false)
    onCardHover(null)
  }

  const handleClick = (e: ThreeEvent<MouseEvent>, cardIndex: number) => {
    e.stopPropagation()
    // Navigate to different robot pages based on card index
    const routes = [null, 'KineticLaunchPlatform', 'RubensTube', 'CombustionEngine', 'FLL', 'FirstGlobal', 'Swerve', 'VLR']
    navigate(routes[cardIndex])
  }

  useFrame((state, delta) => {
    if (ref.current) {
      easing.damp3(ref.current.scale, hovered ? 1.16 : 1, 0.1, delta)
      easing.damp(ref.current.material, 'radius', hovered ? 0.1 : 0.05, 0.2, delta)
      easing.damp(ref.current.material, 'zoom', hovered ? 1.035 : 1, 0.2, delta)
    }
  })

  return (
      <group scale={[-1, 1, 1]}>
        <Image
            ref={ref}
            url={url}
            transparent
            side={THREE.BackSide}
            onPointerOver={pointerOver}
            onPointerOut={pointerOut}
            onClick={(e) => handleClick(e, cardIndex)}
            {...props}
        >
          <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
        </Image>
      </group>
  )
}



export default LandingPage
