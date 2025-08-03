import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Environment, ScrollControls, useScroll } from '@react-three/drei'
import { easing } from 'maath'
import { useNavigate } from 'react-router-dom'
import '../utils/geometry'

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

const Index = () => {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 100], fov: 9 }}>
        <fog attach="fog" args={['#a79', 8.5, 12]} />
        <ScrollControls pages={4} infinite>
          <Rig rotation={[0, 0, 0.03]}>
            <Carousel />
          </Rig>
        </ScrollControls>
        <Environment preset="dawn" background blur={0.5} />
      </Canvas>
    </div>
  )
}

function Rig(props: any) {
  const ref = useRef<THREE.Group>(null!)
  const scroll = useScroll()
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = -scroll.offset * (Math.PI * 2)
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

function Card({ url, ...props }: { url: string; [key: string]: any }) {
  const ref = useRef<any>(null!)
  const [hovered, hover] = useState(false)
  const navigate = useNavigate()
  
  const pointerOver = (e: any) => {
    e.stopPropagation()
    hover(true)
  }
  
  const pointerOut = () => hover(false)
  
  const handleClick = (e: any) => {
    e.stopPropagation()
    navigate('/details')
  }
  
  useFrame((state, delta) => {
    if (ref.current) {
      easing.damp3(ref.current.scale, hovered ? 1.25 : 1, 0.1, delta)
      easing.damp(ref.current.material, 'radius', hovered ? 0.1 : 0.05, 0.2, delta)
      easing.damp(ref.current.material, 'zoom', hovered ? 1.15 : 1, 0.2, delta)
    }
  })
  
  return (
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
  )
};

export default Index;
