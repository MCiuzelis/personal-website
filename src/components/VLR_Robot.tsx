import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useRobotAnimation } from '@/hooks/useRobotAnimation'

type MoveVec = [number, number, number]
type ExplosionPart = { name: string; move: MoveVec }
type ExplosionStep = { parts: ExplosionPart[] }

interface RobotProps extends React.ComponentProps<'group'> {
    scrollValue?: number
    scale?: number
}

export default function VLR_Robot({ scrollValue = 0, scale: finalScale = 1, ...props }: RobotProps) {
    const { nodes, materials } = useGLTF('/CAD_models/VLR_Robot.glb') as GLTF & {
        nodes: Record<string, THREE.Mesh>
        materials: Record<string, THREE.Material>
    }

    const explosionSequence: ExplosionStep[] = [
        {
            parts: [
                { name: 'outer', move: [4, 0, 0] },
                { name: 'spacers', move: [3.75, 0, 0] },
                { name: 'metal', move: [1, 0, 0] },
                { name: 'pulleys', move: [3.5, 0, 0] },
                { name: 'wheels', move: [2.8, 0, 0] },
                { name: 'sensorCase', move: [2.5, 0, 0] },
                { name: 'sensors', move: [1.9, 0, 0] },
                { name: 'plateSpacers', move: [0.75, 0, 0] },
                { name: 'motors', move: [1.5, 0, 0] },
                { name: 'hangOuter', move: [3, 0, 0] },
                { name: 'hangMiddle', move: [1.5, 0, 0] },
                { name: 'hangInner', move: [0.5, 0, 0] },

                { name: 'front', move: [0, 0, -0.75] },
                { name: 'back', move: [0, 0, 0.75] }
            ]
        },
        {
            parts: [
                { name: 'axel', move: [0, 4, 2.5] },
                { name: 'armPulley', move: [0, 4, 2.5] },
                { name: 'armSide', move: [0, 4, 2.5] },
                { name: 'armSlides', move: [0, 4, 2.5] },
                { name: 'armMiddle', move: [0, 4, 2.5] },
                { name: 'armInnerSide', move: [0, 4, 2.5] },
                { name: 'clawBase', move: [0, 4, 2.5] },
                { name: 'clawMiddle', move: [0, 4, 2.5] },
                { name: 'clawGripper', move: [0, 4, 2.5] },
                { name: 'encoderCover', move: [0, 4, 2.5] },
                { name: 'proximitySensor', move: [0, 4, 2.5] },
                { name: 'sample', move: [0, 4, 2.5] },
                { name: 'camera', move: [0, 2, -2] }
            ]
        },
        {
            parts: [
                { name: 'axel', move: [-3, 0, 0] },
                { name: 'armSide', move: [-2, 0, 0] },
                { name: 'armSlides', move: [-1.5, 0, 0] },
                { name: 'armInnerSide', move: [-1, 0, 0] },
                { name: 'clawMiddle', move: [0, 0.5, 0.3125] },
                { name: 'clawGripper', move: [0, 1, 0.625] },
                { name: 'encoderCover', move: [-1, 0 ,0] },
                { name: 'proximitySensor', move: [0, 1, 0.625] },
                { name: 'sample', move: [0, 1, 0.625] },
            ]
        },
        {
            parts: [
                { name: 'proximitySensor', move: [0, 1, 0.625] },
                { name: 'sample', move: [0, 1, -1] },
            ]
        }
    ]

    const { groupRef, getMeshRef, getGroupRef } = useRobotAnimation({
        scrollValue,
        explosionSequence,
        nodes,
        finalScale,
        dampingFactor: 0.15
    })

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <mesh name="Shape_IndexedFaceSet004" geometry={nodes.Shape_IndexedFaceSet004.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group ref={getGroupRef('spacersMirror')} name="Shape_IndexedFaceSet009" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet009_1" geometry={nodes.Shape_IndexedFaceSet009_1.geometry} material={materials.darkGrey} />
                <mesh name="Shape_IndexedFaceSet009_2" geometry={nodes.Shape_IndexedFaceSet009_2.geometry} material={materials.printed} />
            </group>
            <mesh name="Shape_IndexedFaceSet011" geometry={nodes.Shape_IndexedFaceSet011.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group ref={getGroupRef('motorsMirror')} name="Shape_IndexedFaceSet137" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet137_1" geometry={nodes.Shape_IndexedFaceSet137_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet137_2" geometry={nodes.Shape_IndexedFaceSet137_2.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet137_3" geometry={nodes.Shape_IndexedFaceSet137_3.geometry} material={materials.yellow} />
                <mesh name="Shape_IndexedFaceSet137_4" geometry={nodes.Shape_IndexedFaceSet137_4.geometry} material={materials.limelight} />
            </group>
            <mesh name="Shape_IndexedFaceSet282" geometry={nodes.Shape_IndexedFaceSet282.geometry} material={nodes.Shape_IndexedFaceSet282.material} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group ref={getGroupRef('outerMirror')} name="Shape_IndexedFaceSet321" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet321_1" geometry={nodes.Shape_IndexedFaceSet321_1.geometry} material={materials.red} />
                <mesh name="Shape_IndexedFaceSet321_2" geometry={nodes.Shape_IndexedFaceSet321_2.geometry} material={materials.wood} />
                <mesh name="Shape_IndexedFaceSet321_3" geometry={nodes.Shape_IndexedFaceSet321_3.geometry} material={materials.white} />
            </group>
            <mesh ref={getMeshRef('metalMirror')} name="Shape_IndexedFaceSet326" geometry={nodes.Shape_IndexedFaceSet326.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh ref={getMeshRef('sensorCaseMirror')} name="Shape_IndexedFaceSet328" geometry={nodes.Shape_IndexedFaceSet328.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group name="Shape_IndexedFaceSet464" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet464_1" geometry={nodes.Shape_IndexedFaceSet464_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet464_2" geometry={nodes.Shape_IndexedFaceSet464_2.geometry} material={materials.metal} />
            </group>
            <mesh ref={getMeshRef('front')} name="Shape_IndexedFaceSet494" geometry={nodes.Shape_IndexedFaceSet494.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh ref={getMeshRef('sensors')} name="Shape_IndexedFaceSet497" geometry={nodes.Shape_IndexedFaceSet497.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group ref={getGroupRef('pulleys')} name="Shape_IndexedFaceSet523" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet523_1" geometry={nodes.Shape_IndexedFaceSet523_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet523_2" geometry={nodes.Shape_IndexedFaceSet523_2.geometry} material={materials.metal} />
            </group>
            <group ref={getGroupRef('plateSpacers')} name="Shape_IndexedFaceSet527" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet527_1" geometry={nodes.Shape_IndexedFaceSet527_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet527_2" geometry={nodes.Shape_IndexedFaceSet527_2.geometry} material={materials.grey} />
            </group>
            <mesh ref={getMeshRef('sensorCase')} name="Shape_IndexedFaceSet555" geometry={nodes.Shape_IndexedFaceSet555.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group name="Shape_IndexedFaceSet556" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet556_1" geometry={nodes.Shape_IndexedFaceSet556_1.geometry} material={materials.wood} />
                <mesh name="Shape_IndexedFaceSet556_2" geometry={nodes.Shape_IndexedFaceSet556_2.geometry} material={materials.grey} />
                <mesh name="Shape_IndexedFaceSet556_3" geometry={nodes.Shape_IndexedFaceSet556_3.geometry} material={materials.printed} />
            </group>
            <group ref={getGroupRef('outer')} name="Shape_IndexedFaceSet796" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet796_1" geometry={nodes.Shape_IndexedFaceSet796_1.geometry} material={materials.wood} />
                <mesh name="Shape_IndexedFaceSet796_2" geometry={nodes.Shape_IndexedFaceSet796_2.geometry} material={materials.red} />
                <mesh name="Shape_IndexedFaceSet796_3" geometry={nodes.Shape_IndexedFaceSet796_3.geometry} material={materials.white} />
            </group>
            <mesh ref={getMeshRef('metal')} name="Shape_IndexedFaceSet812" geometry={nodes.Shape_IndexedFaceSet812.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet815" geometry={nodes.Shape_IndexedFaceSet815.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet818" geometry={nodes.Shape_IndexedFaceSet818.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh ref={getMeshRef('back')} name="Shape_IndexedFaceSet819" geometry={nodes.Shape_IndexedFaceSet819.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet821" geometry={nodes.Shape_IndexedFaceSet821.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet823" geometry={nodes.Shape_IndexedFaceSet823.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group name="Shape_IndexedFaceSet826" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet826_1" geometry={nodes.Shape_IndexedFaceSet826_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet826_2" geometry={nodes.Shape_IndexedFaceSet826_2.geometry} material={nodes.Shape_IndexedFaceSet826_2.material} />
                <mesh name="Shape_IndexedFaceSet826_3" geometry={nodes.Shape_IndexedFaceSet826_3.geometry} material={materials.printed} />
            </group>
            <mesh name="Shape_IndexedFaceSet979" geometry={nodes.Shape_IndexedFaceSet979.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet990" geometry={nodes.Shape_IndexedFaceSet990.geometry} material={materials.carbon} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet997" geometry={nodes.Shape_IndexedFaceSet997.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet998" geometry={nodes.Shape_IndexedFaceSet998.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet1007" geometry={nodes.Shape_IndexedFaceSet1007.geometry} material={nodes.Shape_IndexedFaceSet1007.material} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet1008" geometry={nodes.Shape_IndexedFaceSet1008.geometry} material={nodes.Shape_IndexedFaceSet1008.material} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet1022" geometry={nodes.Shape_IndexedFaceSet1022.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet1535" geometry={nodes.Shape_IndexedFaceSet1535.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet1542" geometry={nodes.Shape_IndexedFaceSet1542.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group name="Shape_IndexedFaceSet1548" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1548_1" geometry={nodes.Shape_IndexedFaceSet1548_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet1548_2" geometry={nodes.Shape_IndexedFaceSet1548_2.geometry} material={materials.yellow} />
                <mesh name="Shape_IndexedFaceSet1548_3" geometry={nodes.Shape_IndexedFaceSet1548_3.geometry} material={materials.printed} />
            </group>
            <group ref={getGroupRef('hangInner')} name="Shape_IndexedFaceSet1588" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1588_1" geometry={nodes.Shape_IndexedFaceSet1588_1.geometry} material={materials.red} />
                <mesh name="Shape_IndexedFaceSet1588_2" geometry={nodes.Shape_IndexedFaceSet1588_2.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet1588_3" geometry={nodes.Shape_IndexedFaceSet1588_3.geometry} material={materials.metal} />
            </group>
            <mesh name="Shape_IndexedFaceSet1605" geometry={nodes.Shape_IndexedFaceSet1605.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group ref={getGroupRef('hangMiddleMirror')} name="Shape_IndexedFaceSet1630" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1630_1" geometry={nodes.Shape_IndexedFaceSet1630_1.geometry} material={materials.wood} />
                <mesh name="Shape_IndexedFaceSet1630_2" geometry={nodes.Shape_IndexedFaceSet1630_2.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet1630_3" geometry={nodes.Shape_IndexedFaceSet1630_3.geometry} material={materials.red} />
                <mesh name="Shape_IndexedFaceSet1630_4" geometry={nodes.Shape_IndexedFaceSet1630_4.geometry} material={materials.limelight} />
            </group>
            <group ref={getGroupRef('hangOuterMirror')} name="Shape_IndexedFaceSet1634" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1634_1" geometry={nodes.Shape_IndexedFaceSet1634_1.geometry} material={materials.red} />
                <mesh name="Shape_IndexedFaceSet1634_2" geometry={nodes.Shape_IndexedFaceSet1634_2.geometry} material={materials.metal} />
            </group>
            <group ref={getGroupRef('hangInnerMirror')} name="Shape_IndexedFaceSet1635" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1635_1" geometry={nodes.Shape_IndexedFaceSet1635_1.geometry} material={materials.red} />
                <mesh name="Shape_IndexedFaceSet1635_2" geometry={nodes.Shape_IndexedFaceSet1635_2.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet1635_3" geometry={nodes.Shape_IndexedFaceSet1635_3.geometry} material={materials.metal} />
            </group>
            <group ref={getGroupRef('hangOuter')} name="Shape_IndexedFaceSet1640" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1640_1" geometry={nodes.Shape_IndexedFaceSet1640_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet1640_2" geometry={nodes.Shape_IndexedFaceSet1640_2.geometry} material={materials.red} />
            </group>
            <group ref={getGroupRef('plateSpacersMirror')} name="Shape_IndexedFaceSet1641" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1641_1" geometry={nodes.Shape_IndexedFaceSet1641_1.geometry} material={materials.grey} />
                <mesh name="Shape_IndexedFaceSet1641_2" geometry={nodes.Shape_IndexedFaceSet1641_2.geometry} material={materials.printed} />
            </group>
            <mesh name="Shape_IndexedFaceSet1649" geometry={nodes.Shape_IndexedFaceSet1649.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet1650" geometry={nodes.Shape_IndexedFaceSet1650.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet1751" geometry={nodes.Shape_IndexedFaceSet1751.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet1767" geometry={nodes.Shape_IndexedFaceSet1767.geometry} material={materials.hub} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh name="Shape_IndexedFaceSet1776" geometry={nodes.Shape_IndexedFaceSet1776.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group name="Shape_IndexedFaceSet1785" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1785_1" geometry={nodes.Shape_IndexedFaceSet1785_1.geometry} material={nodes.Shape_IndexedFaceSet1785_1.material} />
                <mesh name="Shape_IndexedFaceSet1785_2" geometry={nodes.Shape_IndexedFaceSet1785_2.geometry} material={nodes.Shape_IndexedFaceSet1785_2.material} />
                <mesh name="Shape_IndexedFaceSet1785_3" geometry={nodes.Shape_IndexedFaceSet1785_3.geometry} material={nodes.Shape_IndexedFaceSet1785_3.material} />
                <mesh name="Shape_IndexedFaceSet1785_4" geometry={nodes.Shape_IndexedFaceSet1785_4.geometry} material={nodes.Shape_IndexedFaceSet1785_4.material} />
                <mesh name="Shape_IndexedFaceSet1785_5" geometry={nodes.Shape_IndexedFaceSet1785_5.geometry} material={nodes.Shape_IndexedFaceSet1785_5.material} />
            </group>
            <group ref={getGroupRef('spacers')} name="Shape_IndexedFaceSet003" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1789" geometry={nodes.Shape_IndexedFaceSet1789.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet1789_1" geometry={nodes.Shape_IndexedFaceSet1789_1.geometry} material={materials.darkGrey} />
            </group>
            <group ref={getGroupRef('wheels')} name="Shape_IndexedFaceSet005" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1790" geometry={nodes.Shape_IndexedFaceSet1790.geometry} material={materials.rubber} />
                <mesh name="Shape_IndexedFaceSet1790_1" geometry={nodes.Shape_IndexedFaceSet1790_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet1790_2" geometry={nodes.Shape_IndexedFaceSet1790_2.geometry} material={materials.yellow} />
            </group>
            <mesh ref={getMeshRef('sensorsMirror')} name="Shape_IndexedFaceSet006" geometry={nodes.Shape_IndexedFaceSet006.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group ref={getGroupRef('wheelsMirror')} name="Shape_IndexedFaceSet010" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet013" geometry={nodes.Shape_IndexedFaceSet013.geometry} material={materials.rubber} />
                <mesh name="Shape_IndexedFaceSet013_1" geometry={nodes.Shape_IndexedFaceSet013_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet013_2" geometry={nodes.Shape_IndexedFaceSet013_2.geometry} material={materials.yellow} />
            </group>
            <group ref={getGroupRef('pulleysMirror')} name="Shape_IndexedFaceSet015" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet016_1" geometry={nodes.Shape_IndexedFaceSet016_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet016_2" geometry={nodes.Shape_IndexedFaceSet016_2.geometry} material={materials.printed} />
            </group>
            <mesh name="Shape_IndexedFaceSet016" geometry={nodes.Shape_IndexedFaceSet016.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group ref={getGroupRef('hangMiddle')} name="Shape_IndexedFaceSet018" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet019" geometry={nodes.Shape_IndexedFaceSet019.geometry} material={materials.wood} />
                <mesh name="Shape_IndexedFaceSet019_1" geometry={nodes.Shape_IndexedFaceSet019_1.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet019_2" geometry={nodes.Shape_IndexedFaceSet019_2.geometry} material={materials.red} />
                <mesh name="Shape_IndexedFaceSet019_3" geometry={nodes.Shape_IndexedFaceSet019_3.geometry} material={materials.metal} />
            </group>
            <group ref={getGroupRef('motors')} name="Shape_IndexedFaceSet020" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet021" geometry={nodes.Shape_IndexedFaceSet021.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet021_1" geometry={nodes.Shape_IndexedFaceSet021_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet021_2" geometry={nodes.Shape_IndexedFaceSet021_2.geometry} material={materials.yellow} />
                <mesh name="Shape_IndexedFaceSet021_3" geometry={nodes.Shape_IndexedFaceSet021_3.geometry} material={materials.limelight} />
            </group>
            <group ref={getGroupRef('axel')} name="Shape_IndexedFaceSet1110" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1110_1" geometry={nodes.Shape_IndexedFaceSet1110_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet1110_2" geometry={nodes.Shape_IndexedFaceSet1110_2.geometry} material={materials.metal} />
            </group>
            <group ref={getGroupRef('armInnerSide')} name="Shape_IndexedFaceSet1127" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1127_1" geometry={nodes.Shape_IndexedFaceSet1127_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet1127_2" geometry={nodes.Shape_IndexedFaceSet1127_2.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet1127_3" geometry={nodes.Shape_IndexedFaceSet1127_3.geometry} material={materials.limelight} />
            </group>
            <group ref={getGroupRef('armInnerSideMirror')} name="Shape_IndexedFaceSet1130" rotation={[Math.PI / 2, 0, Math.PI]}>
                {/*<mesh name="Shape_IndexedFaceSet1122" geometry={nodes.Shape_IndexedFaceSet1122.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />*/}
                <mesh name="Shape_IndexedFaceSet1130_1" geometry={nodes.Shape_IndexedFaceSet1130_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet1130_2" geometry={nodes.Shape_IndexedFaceSet1130_2.geometry} material={materials.metal} />
            </group>
            <group ref={getGroupRef('armMiddle')} name="Shape_IndexedFaceSet1134" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1134_1" geometry={nodes.Shape_IndexedFaceSet1134_1.geometry} material={materials.red} />
                <mesh name="Shape_IndexedFaceSet1134_2" geometry={nodes.Shape_IndexedFaceSet1134_2.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet1134_3" geometry={nodes.Shape_IndexedFaceSet1134_3.geometry} material={materials.darkGrey} />
                <mesh name="Shape_IndexedFaceSet1134_4" geometry={nodes.Shape_IndexedFaceSet1134_4.geometry} material={materials.printed} />
            </group>
            <group ref={getGroupRef('clawGripper')} name="Shape_IndexedFaceSet1222" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1222_1" geometry={nodes.Shape_IndexedFaceSet1222_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet1222_2" geometry={nodes.Shape_IndexedFaceSet1222_2.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet1222_3" geometry={nodes.Shape_IndexedFaceSet1222_3.geometry} material={materials.grey} />
            </group>
            <mesh ref={getMeshRef('sample')} name="Shape_IndexedFaceSet1227" geometry={nodes.Shape_IndexedFaceSet1227.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group ref={getGroupRef('clawBase')} name="Shape_IndexedFaceSet1239" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1239_1" geometry={nodes.Shape_IndexedFaceSet1239_1.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet1239_2" geometry={nodes.Shape_IndexedFaceSet1239_2.geometry} material={materials.printed} />
            </group>
            <group ref={getGroupRef('clawMiddle')} name="Shape_IndexedFaceSet1247" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1247_1" geometry={nodes.Shape_IndexedFaceSet1247_1.geometry} material={materials.darkGrey} />
                <mesh name="Shape_IndexedFaceSet1247_2" geometry={nodes.Shape_IndexedFaceSet1247_2.geometry} material={materials.metal} />
            </group>
            <mesh ref={getMeshRef('proximitySensor')} name="Shape_IndexedFaceSet1261" geometry={nodes.Shape_IndexedFaceSet1261.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
            <mesh ref={getMeshRef('proximitySensorMirror')} name="Shape_IndexedFaceSet1262" geometry={nodes.Shape_IndexedFaceSet1262.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} />
            <group ref={getGroupRef('armSideMirror')} name="Shape_IndexedFaceSet1487" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1487_1" geometry={nodes.Shape_IndexedFaceSet1487_1.geometry} material={materials.wood} />
                <mesh name="Shape_IndexedFaceSet1487_2" geometry={nodes.Shape_IndexedFaceSet1487_2.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet1487_3" geometry={nodes.Shape_IndexedFaceSet1487_3.geometry} material={materials.printed} />
            </group>
            <group ref={getGroupRef('armPulley')} name="Shape_IndexedFaceSet1490" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1490_1" geometry={nodes.Shape_IndexedFaceSet1490_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet1490_2" geometry={nodes.Shape_IndexedFaceSet1490_2.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet1490_3" geometry={nodes.Shape_IndexedFaceSet1490_3.geometry} material={materials.yellow} />
                <mesh name="Shape_IndexedFaceSet1490_4" geometry={nodes.Shape_IndexedFaceSet1490_4.geometry} material={materials.grey} />
            </group>
            <group ref={getGroupRef('armSide')} name="Shape_IndexedFaceSet1500" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1500_1" geometry={nodes.Shape_IndexedFaceSet1500_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet1500_2" geometry={nodes.Shape_IndexedFaceSet1500_2.geometry} material={materials.wood} />
                <mesh name="Shape_IndexedFaceSet1500_3" geometry={nodes.Shape_IndexedFaceSet1500_3.geometry} material={materials.grey} />
                <mesh name="Shape_IndexedFaceSet1500_4" geometry={nodes.Shape_IndexedFaceSet1500_4.geometry} material={materials.darkGrey} />
            </group>
            <group ref={getGroupRef('encoderCover')} name="Shape_IndexedFaceSet1501" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1501_1" geometry={nodes.Shape_IndexedFaceSet1501_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet1501_2" geometry={nodes.Shape_IndexedFaceSet1501_2.geometry} material={materials.Material} />
            </group>
            <group ref={getGroupRef('armSlidesMirror')} name="Shape_IndexedFaceSet001" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet002" geometry={nodes.Shape_IndexedFaceSet002.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet002_1" geometry={nodes.Shape_IndexedFaceSet002_1.geometry} material={materials.limelight} />
            </group>
            <group ref={getGroupRef('armSlides')} name="Shape_IndexedFaceSet008" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet006_1" geometry={nodes.Shape_IndexedFaceSet006_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet006_2" geometry={nodes.Shape_IndexedFaceSet006_2.geometry} material={materials.limelight} />
            </group>
            <group ref={getGroupRef('camera')} name="Shape_IndexedFaceSet1770" rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh name="Shape_IndexedFaceSet1770_1" geometry={nodes.Shape_IndexedFaceSet1770_1.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet1770_2" geometry={nodes.Shape_IndexedFaceSet1770_2.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet1770_3" geometry={nodes.Shape_IndexedFaceSet1770_3.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet1770_4" geometry={nodes.Shape_IndexedFaceSet1770_4.geometry} material={materials.yellow} />
                <mesh name="Shape_IndexedFaceSet1770_5" geometry={nodes.Shape_IndexedFaceSet1770_5.geometry} material={materials.carbon} />
            </group>
        </group>
    )
}

useGLTF.preload('/CAD_models/VLR_Robot.glb')