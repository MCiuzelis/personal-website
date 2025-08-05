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
    const { nodes, materials } = useGLTF('/src/assets/CAD_models/VLR_Robot.glb') as GLTF & {
        nodes: Record<string, THREE.Mesh>
        materials: Record<string, THREE.Material>
    }

    const explosionSequence: ExplosionStep[] = [
        {
            parts: [
                { name: 'outerPlate', move: [6, 0, 0] },
                { name: 'middleSection', move: [3, 0, 0] },
                { name: 'innerPlate', move: [1.5, 0, 0] }
            ]
        },
        {
            parts: [
                { name: 'hang', move: [1.5, 0, 0] }
            ]
        },
        {
            parts: [
                { name: 'sample', move: [0, 0, 2] },
                { name: 'outerPlate', move: [2, 0, 0] }
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
            <group ref = {groupRef} {...props} dispose={null}>
                <mesh name="Shape_IndexedFaceSet004" geometry={nodes.Shape_IndexedFaceSet004.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet009" geometry={nodes.Shape_IndexedFaceSet009.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet011" geometry={nodes.Shape_IndexedFaceSet011.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet137" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet137_1" geometry={nodes.Shape_IndexedFaceSet137_1.geometry} material={materials.printed} />
                    <mesh name="Shape_IndexedFaceSet137_2" geometry={nodes.Shape_IndexedFaceSet137_2.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet137_3" geometry={nodes.Shape_IndexedFaceSet137_3.geometry} material={materials.yellow} />
                </group>
                <mesh name="Shape_IndexedFaceSet141" geometry={nodes.Shape_IndexedFaceSet141.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet259" geometry={nodes.Shape_IndexedFaceSet259.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet265" geometry={nodes.Shape_IndexedFaceSet265.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet282" geometry={nodes.Shape_IndexedFaceSet282.geometry} material={nodes.Shape_IndexedFaceSet282.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet321" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet321_1" geometry={nodes.Shape_IndexedFaceSet321_1.geometry} material={materials.red} />
                    <mesh name="Shape_IndexedFaceSet321_2" geometry={nodes.Shape_IndexedFaceSet321_2.geometry} material={materials.wood} />
                    <mesh name="Shape_IndexedFaceSet321_3" geometry={nodes.Shape_IndexedFaceSet321_3.geometry} material={materials.white} />
                </group>
                <mesh name="Shape_IndexedFaceSet326" geometry={nodes.Shape_IndexedFaceSet326.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet328" geometry={nodes.Shape_IndexedFaceSet328.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet353" geometry={nodes.Shape_IndexedFaceSet353.geometry} material={materials.grey} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet464" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet464_1" geometry={nodes.Shape_IndexedFaceSet464_1.geometry} material={materials.printed} />
                    <mesh name="Shape_IndexedFaceSet464_2" geometry={nodes.Shape_IndexedFaceSet464_2.geometry} material={materials.metal} />
                </group>
                <mesh name="Shape_IndexedFaceSet494" geometry={nodes.Shape_IndexedFaceSet494.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet497" geometry={nodes.Shape_IndexedFaceSet497.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet523" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet523_1" geometry={nodes.Shape_IndexedFaceSet523_1.geometry} material={materials.printed} />
                    <mesh name="Shape_IndexedFaceSet523_2" geometry={nodes.Shape_IndexedFaceSet523_2.geometry} material={materials.metal} />
                </group>
                <mesh name="Shape_IndexedFaceSet527" geometry={nodes.Shape_IndexedFaceSet527.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet555" geometry={nodes.Shape_IndexedFaceSet555.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet556" geometry={nodes.Shape_IndexedFaceSet556.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet712" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet712_1" geometry={nodes.Shape_IndexedFaceSet712_1.geometry} material={materials.rubber} />
                    <mesh name="Shape_IndexedFaceSet712_2" geometry={nodes.Shape_IndexedFaceSet712_2.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet712_3" geometry={nodes.Shape_IndexedFaceSet712_3.geometry} material={materials.yellow} />
                </group>
                <group name="Shape_IndexedFaceSet796" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet796_1" geometry={nodes.Shape_IndexedFaceSet796_1.geometry} material={materials.wood} />
                    <mesh name="Shape_IndexedFaceSet796_2" geometry={nodes.Shape_IndexedFaceSet796_2.geometry} material={materials.red} />
                    <mesh name="Shape_IndexedFaceSet796_3" geometry={nodes.Shape_IndexedFaceSet796_3.geometry} material={materials.white} />
                </group>
                <mesh name="Shape_IndexedFaceSet798" geometry={nodes.Shape_IndexedFaceSet798.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet804" geometry={nodes.Shape_IndexedFaceSet804.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet812" geometry={nodes.Shape_IndexedFaceSet812.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet815" geometry={nodes.Shape_IndexedFaceSet815.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet818" geometry={nodes.Shape_IndexedFaceSet818.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet819" geometry={nodes.Shape_IndexedFaceSet819.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
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
                <mesh name="Shape_IndexedFaceSet999" geometry={nodes.Shape_IndexedFaceSet999.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
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
                <mesh name="Shape_IndexedFaceSet1582" geometry={nodes.Shape_IndexedFaceSet1582.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1588" geometry={nodes.Shape_IndexedFaceSet1588.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1590" geometry={nodes.Shape_IndexedFaceSet1590.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1592" geometry={nodes.Shape_IndexedFaceSet1592.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1593" geometry={nodes.Shape_IndexedFaceSet1593.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1594" geometry={nodes.Shape_IndexedFaceSet1594.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1595" geometry={nodes.Shape_IndexedFaceSet1595.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1597" geometry={nodes.Shape_IndexedFaceSet1597.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1605" geometry={nodes.Shape_IndexedFaceSet1605.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1620" geometry={nodes.Shape_IndexedFaceSet1620.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1623" geometry={nodes.Shape_IndexedFaceSet1623.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1624" geometry={nodes.Shape_IndexedFaceSet1624.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1627" geometry={nodes.Shape_IndexedFaceSet1627.geometry} material={nodes.Shape_IndexedFaceSet1627.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1630" geometry={nodes.Shape_IndexedFaceSet1630.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1633" geometry={nodes.Shape_IndexedFaceSet1633.geometry} material={materials.metal} position={[-0.73, 0.517, 0.958]} rotation={[Math.PI / 2, 0, 0]} />
                <mesh name="Shape_IndexedFaceSet1634" geometry={nodes.Shape_IndexedFaceSet1634.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1635" geometry={nodes.Shape_IndexedFaceSet1635.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1637" geometry={nodes.Shape_IndexedFaceSet1637.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1638" geometry={nodes.Shape_IndexedFaceSet1638.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1640" geometry={nodes.Shape_IndexedFaceSet1640.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1641" geometry={nodes.Shape_IndexedFaceSet1641.geometry} material={materials.grey} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1648" geometry={nodes.Shape_IndexedFaceSet1648.geometry} material={materials.grey} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1649" geometry={nodes.Shape_IndexedFaceSet1649.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1650" geometry={nodes.Shape_IndexedFaceSet1650.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1751" geometry={nodes.Shape_IndexedFaceSet1751.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1767" geometry={nodes.Shape_IndexedFaceSet1767.geometry} material={materials.hub} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1776" geometry={nodes.Shape_IndexedFaceSet1776.geometry} material={nodes.Shape_IndexedFaceSet1776.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet1785" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1785_1" geometry={nodes.Shape_IndexedFaceSet1785_1.geometry} material={nodes.Shape_IndexedFaceSet1785_1.material} />
                    <mesh name="Shape_IndexedFaceSet1785_2" geometry={nodes.Shape_IndexedFaceSet1785_2.geometry} material={nodes.Shape_IndexedFaceSet1785_2.material} />
                    <mesh name="Shape_IndexedFaceSet1785_3" geometry={nodes.Shape_IndexedFaceSet1785_3.geometry} material={nodes.Shape_IndexedFaceSet1785_3.material} />
                    <mesh name="Shape_IndexedFaceSet1785_4" geometry={nodes.Shape_IndexedFaceSet1785_4.geometry} material={nodes.Shape_IndexedFaceSet1785_4.material} />
                    <mesh name="Shape_IndexedFaceSet1785_5" geometry={nodes.Shape_IndexedFaceSet1785_5.geometry} material={nodes.Shape_IndexedFaceSet1785_5.material} />
                </group>
                <mesh name="Shape_IndexedFaceSet003" geometry={nodes.Shape_IndexedFaceSet003.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet005" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1790" geometry={nodes.Shape_IndexedFaceSet1790.geometry} material={materials.rubber} />
                    <mesh name="Shape_IndexedFaceSet1790_1" geometry={nodes.Shape_IndexedFaceSet1790_1.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet1790_2" geometry={nodes.Shape_IndexedFaceSet1790_2.geometry} material={materials.yellow} />
                </group>
                <mesh name="Shape_IndexedFaceSet006" geometry={nodes.Shape_IndexedFaceSet006.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet014" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet010_1" geometry={nodes.Shape_IndexedFaceSet010_1.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet010_2" geometry={nodes.Shape_IndexedFaceSet010_2.geometry} material={materials.printed} />
                </group>
                <group name="Shape_IndexedFaceSet010" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet013_1" geometry={nodes.Shape_IndexedFaceSet013_1.geometry} material={materials.rubber} />
                    <mesh name="Shape_IndexedFaceSet013_2" geometry={nodes.Shape_IndexedFaceSet013_2.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet013_3" geometry={nodes.Shape_IndexedFaceSet013_3.geometry} material={materials.yellow} />
                </group>
                <group name="Shape_IndexedFaceSet012" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet014_1" geometry={nodes.Shape_IndexedFaceSet014_1.geometry} material={materials.printed} />
                    <mesh name="Shape_IndexedFaceSet014_2" geometry={nodes.Shape_IndexedFaceSet014_2.geometry} material={materials.metal} />
                </group>
                <group name="Shape_IndexedFaceSet013" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet015_1" geometry={nodes.Shape_IndexedFaceSet015_1.geometry} material={materials.rubber} />
                    <mesh name="Shape_IndexedFaceSet015_2" geometry={nodes.Shape_IndexedFaceSet015_2.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet015_3" geometry={nodes.Shape_IndexedFaceSet015_3.geometry} material={materials.yellow} />
                </group>
                <group name="Shape_IndexedFaceSet015" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet016_1" geometry={nodes.Shape_IndexedFaceSet016_1.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet016_2" geometry={nodes.Shape_IndexedFaceSet016_2.geometry} material={materials.printed} />
                </group>
                <mesh name="Shape_IndexedFaceSet016" geometry={nodes.Shape_IndexedFaceSet016.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet017" geometry={nodes.Shape_IndexedFaceSet017.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet018" geometry={nodes.Shape_IndexedFaceSet018.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet019" geometry={nodes.Shape_IndexedFaceSet019.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet020" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet021" geometry={nodes.Shape_IndexedFaceSet021.geometry} material={materials.printed} />
                    <mesh name="Shape_IndexedFaceSet021_1" geometry={nodes.Shape_IndexedFaceSet021_1.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet021_2" geometry={nodes.Shape_IndexedFaceSet021_2.geometry} material={materials.yellow} />
                </group>
                <mesh name="Shape_IndexedFaceSet1107" geometry={nodes.Shape_IndexedFaceSet1107.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet1110" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1110_1" geometry={nodes.Shape_IndexedFaceSet1110_1.geometry} material={materials.printed} />
                    <mesh name="Shape_IndexedFaceSet1110_2" geometry={nodes.Shape_IndexedFaceSet1110_2.geometry} material={materials.metal} />
                </group>
                <mesh name="Shape_IndexedFaceSet1122" geometry={nodes.Shape_IndexedFaceSet1122.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet1127" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1127_1" geometry={nodes.Shape_IndexedFaceSet1127_1.geometry} material={materials.printed} />
                    <mesh name="Shape_IndexedFaceSet1127_2" geometry={nodes.Shape_IndexedFaceSet1127_2.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet1127_3" geometry={nodes.Shape_IndexedFaceSet1127_3.geometry} material={materials.limelight} />
                </group>
                <group name="Shape_IndexedFaceSet1130" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1130_1" geometry={nodes.Shape_IndexedFaceSet1130_1.geometry} material={materials.printed} />
                    <mesh name="Shape_IndexedFaceSet1130_2" geometry={nodes.Shape_IndexedFaceSet1130_2.geometry} material={materials.metal} />
                </group>
                <group name="Shape_IndexedFaceSet1131" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1131_1" geometry={nodes.Shape_IndexedFaceSet1131_1.geometry} material={materials.darkGrey} />
                    <mesh name="Shape_IndexedFaceSet1131_2" geometry={nodes.Shape_IndexedFaceSet1131_2.geometry} material={materials.printed} />
                </group>
                <mesh name="Shape_IndexedFaceSet1133" geometry={nodes.Shape_IndexedFaceSet1133.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1134" geometry={nodes.Shape_IndexedFaceSet1134.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1135" geometry={nodes.Shape_IndexedFaceSet1135.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet1140" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1140_1" geometry={nodes.Shape_IndexedFaceSet1140_1.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet1140_2" geometry={nodes.Shape_IndexedFaceSet1140_2.geometry} material={materials.grey} />
                </group>
                <group name="Shape_IndexedFaceSet1216" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1216_1" geometry={nodes.Shape_IndexedFaceSet1216_1.geometry} material={materials.darkGrey} />
                    <mesh name="Shape_IndexedFaceSet1216_2" geometry={nodes.Shape_IndexedFaceSet1216_2.geometry} material={materials.printed} />
                </group>
                <mesh name="Shape_IndexedFaceSet1220" geometry={nodes.Shape_IndexedFaceSet1220.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1222" geometry={nodes.Shape_IndexedFaceSet1222.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1224" geometry={nodes.Shape_IndexedFaceSet1224.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet1225" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1225_1" geometry={nodes.Shape_IndexedFaceSet1225_1.geometry} material={materials.limelight} />
                    <mesh name="Shape_IndexedFaceSet1225_2" geometry={nodes.Shape_IndexedFaceSet1225_2.geometry} material={materials.grey} />
                </group>
                <mesh name="Shape_IndexedFaceSet1227" geometry={nodes.Shape_IndexedFaceSet1227.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1239" geometry={nodes.Shape_IndexedFaceSet1239.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1246" geometry={nodes.Shape_IndexedFaceSet1246.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1247" geometry={nodes.Shape_IndexedFaceSet1247.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1248" geometry={nodes.Shape_IndexedFaceSet1248.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1249" geometry={nodes.Shape_IndexedFaceSet1249.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1250" geometry={nodes.Shape_IndexedFaceSet1250.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1261" geometry={nodes.Shape_IndexedFaceSet1261.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1262" geometry={nodes.Shape_IndexedFaceSet1262.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet1287" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1287_1" geometry={nodes.Shape_IndexedFaceSet1287_1.geometry} material={materials.grey} />
                    <mesh name="Shape_IndexedFaceSet1287_2" geometry={nodes.Shape_IndexedFaceSet1287_2.geometry} material={materials.limelight} />
                </group>
                <mesh name="Shape_IndexedFaceSet1290" geometry={nodes.Shape_IndexedFaceSet1290.geometry} material={materials.Material} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet1295" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1295_1" geometry={nodes.Shape_IndexedFaceSet1295_1.geometry} material={materials.limelight} />
                    <mesh name="Shape_IndexedFaceSet1295_2" geometry={nodes.Shape_IndexedFaceSet1295_2.geometry} material={materials.metal} />
                </group>
                <group name="Shape_IndexedFaceSet1300" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1300_1" geometry={nodes.Shape_IndexedFaceSet1300_1.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet1300_2" geometry={nodes.Shape_IndexedFaceSet1300_2.geometry} material={materials.limelight} />
                </group>
                <group name="Shape_IndexedFaceSet1487" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1487_1" geometry={nodes.Shape_IndexedFaceSet1487_1.geometry} material={materials.wood} />
                    <mesh name="Shape_IndexedFaceSet1487_2" geometry={nodes.Shape_IndexedFaceSet1487_2.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet1487_3" geometry={nodes.Shape_IndexedFaceSet1487_3.geometry} material={materials.printed} />
                </group>
                <group name="Shape_IndexedFaceSet1490" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1490_1" geometry={nodes.Shape_IndexedFaceSet1490_1.geometry} material={materials.printed} />
                    <mesh name="Shape_IndexedFaceSet1490_2" geometry={nodes.Shape_IndexedFaceSet1490_2.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet1490_3" geometry={nodes.Shape_IndexedFaceSet1490_3.geometry} material={materials.yellow} />
                </group>
                <group name="Shape_IndexedFaceSet1500" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet1500_1" geometry={nodes.Shape_IndexedFaceSet1500_1.geometry} material={materials.printed} />
                    <mesh name="Shape_IndexedFaceSet1500_2" geometry={nodes.Shape_IndexedFaceSet1500_2.geometry} material={materials.wood} />
                    <mesh name="Shape_IndexedFaceSet1500_3" geometry={nodes.Shape_IndexedFaceSet1500_3.geometry} material={materials.grey} />
                    <mesh name="Shape_IndexedFaceSet1500_4" geometry={nodes.Shape_IndexedFaceSet1500_4.geometry} material={materials.darkGrey} />
                </group>
                <mesh name="Shape_IndexedFaceSet1501" geometry={nodes.Shape_IndexedFaceSet1501.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <group name="Shape_IndexedFaceSet001" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet002_1" geometry={nodes.Shape_IndexedFaceSet002_1.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet002_2" geometry={nodes.Shape_IndexedFaceSet002_2.geometry} material={materials.limelight} />
                </group>
                <group name="Shape_IndexedFaceSet002" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet003_1" geometry={nodes.Shape_IndexedFaceSet003_1.geometry} material={materials.limelight} />
                    <mesh name="Shape_IndexedFaceSet003_2" geometry={nodes.Shape_IndexedFaceSet003_2.geometry} material={materials.metal} />
                </group>
                <group name="Shape_IndexedFaceSet007" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet005_1" geometry={nodes.Shape_IndexedFaceSet005_1.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet005_2" geometry={nodes.Shape_IndexedFaceSet005_2.geometry} material={materials.limelight} />
                </group>
                <group name="Shape_IndexedFaceSet008" rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh name="Shape_IndexedFaceSet006_1" geometry={nodes.Shape_IndexedFaceSet006_1.geometry} material={materials.metal} />
                    <mesh name="Shape_IndexedFaceSet006_2" geometry={nodes.Shape_IndexedFaceSet006_2.geometry} material={materials.limelight} />
                </group>
                <mesh name="Shape_IndexedFaceSet1608" geometry={nodes.Shape_IndexedFaceSet1608.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1616" geometry={nodes.Shape_IndexedFaceSet1616.geometry} material={materials.yellow} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1769" geometry={nodes.Shape_IndexedFaceSet1769.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1770" geometry={nodes.Shape_IndexedFaceSet1770.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh name="Shape_IndexedFaceSet1780" geometry={nodes.Shape_IndexedFaceSet1780.geometry} material={materials.carbon} rotation={[Math.PI / 2, 0, Math.PI]} />
            </group>
        )
}

useGLTF.preload('/src/assets/CAD_models/VLR_Robot.glb')