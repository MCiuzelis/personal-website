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

export default function Robot({ scrollValue = 0, scale: finalScale = 1, ...props }: RobotProps) {
    const { nodes, materials } = useGLTF('/src/assets/robot2.glb') as GLTF & {
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
            <group ref={groupRef} {...props}>
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
                    <group ref = {getGroupRef('outerPlateMirror')} name="Shape_IndexedFaceSet321" rotation={[Math.PI / 2, 0, Math.PI]}>
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
                    <mesh ref = {getMeshRef('innerPlate')} name="Shape_IndexedFaceSet556" geometry={nodes.Shape_IndexedFaceSet556.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <group name="Shape_IndexedFaceSet712" rotation={[Math.PI / 2, 0, Math.PI]}>
                            <mesh name="Shape_IndexedFaceSet712_1" geometry={nodes.Shape_IndexedFaceSet712_1.geometry} material={materials.rubber} />
                            <mesh name="Shape_IndexedFaceSet712_2" geometry={nodes.Shape_IndexedFaceSet712_2.geometry} material={materials.metal} />
                            <mesh name="Shape_IndexedFaceSet712_3" geometry={nodes.Shape_IndexedFaceSet712_3.geometry} material={materials.yellow} />
                    </group>
                    <group ref = {getGroupRef('outerPlate')} name="Shape_IndexedFaceSet796" rotation={[Math.PI / 2, 0, Math.PI]}>
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
                    <group ref = {getGroupRef('middleSection')} name="Shape_IndexedFaceSet005" rotation={[Math.PI / 2, 0, Math.PI]}>
                            <mesh name="Shape_IndexedFaceSet1790" geometry={nodes.Shape_IndexedFaceSet1790.geometry} material={materials.rubber} />
                            <mesh name="Shape_IndexedFaceSet1790_1" geometry={nodes.Shape_IndexedFaceSet1790_1.geometry} material={materials.metal} />
                            <mesh name="Shape_IndexedFaceSet1790_2" geometry={nodes.Shape_IndexedFaceSet1790_2.geometry} material={materials.yellow} />
                    </group>
                    <mesh name="Shape_IndexedFaceSet006" geometry={nodes.Shape_IndexedFaceSet006.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <group ref = {getGroupRef('middleSection')} name="Shape_IndexedFaceSet014" rotation={[Math.PI / 2, 0, Math.PI]}>
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
                    <mesh name="Shape_IndexedFaceSet001" geometry={nodes.Shape_IndexedFaceSet001.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet008" geometry={nodes.Shape_IndexedFaceSet008.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet824" geometry={nodes.Shape_IndexedFaceSet824.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1104" geometry={nodes.Shape_IndexedFaceSet1104.geometry} material={nodes.Shape_IndexedFaceSet1104.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1105" geometry={nodes.Shape_IndexedFaceSet1105.geometry} material={nodes.Shape_IndexedFaceSet1105.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1106" geometry={nodes.Shape_IndexedFaceSet1106.geometry} material={nodes.Shape_IndexedFaceSet1106.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1107" geometry={nodes.Shape_IndexedFaceSet1107.geometry} material={nodes.Shape_IndexedFaceSet1107.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1108" geometry={nodes.Shape_IndexedFaceSet1108.geometry} material={nodes.Shape_IndexedFaceSet1108.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1109" geometry={nodes.Shape_IndexedFaceSet1109.geometry} material={nodes.Shape_IndexedFaceSet1109.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1110" geometry={nodes.Shape_IndexedFaceSet1110.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1116" geometry={nodes.Shape_IndexedFaceSet1116.geometry} material={materials.grey} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1117" geometry={nodes.Shape_IndexedFaceSet1117.geometry} material={nodes.Shape_IndexedFaceSet1117.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1118" geometry={nodes.Shape_IndexedFaceSet1118.geometry} material={nodes.Shape_IndexedFaceSet1118.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1119" geometry={nodes.Shape_IndexedFaceSet1119.geometry} material={nodes.Shape_IndexedFaceSet1119.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1120" geometry={nodes.Shape_IndexedFaceSet1120.geometry} material={nodes.Shape_IndexedFaceSet1120.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1121" geometry={nodes.Shape_IndexedFaceSet1121.geometry} material={nodes.Shape_IndexedFaceSet1121.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1122" geometry={nodes.Shape_IndexedFaceSet1122.geometry} material={nodes.Shape_IndexedFaceSet1122.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1123" geometry={nodes.Shape_IndexedFaceSet1123.geometry} material={nodes.Shape_IndexedFaceSet1123.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1124" geometry={nodes.Shape_IndexedFaceSet1124.geometry} material={nodes.Shape_IndexedFaceSet1124.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1125" geometry={nodes.Shape_IndexedFaceSet1125.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1126" geometry={nodes.Shape_IndexedFaceSet1126.geometry} material={nodes.Shape_IndexedFaceSet1126.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1127" geometry={nodes.Shape_IndexedFaceSet1127.geometry} material={nodes.Shape_IndexedFaceSet1127.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1128" geometry={nodes.Shape_IndexedFaceSet1128.geometry} material={nodes.Shape_IndexedFaceSet1128.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1129" geometry={nodes.Shape_IndexedFaceSet1129.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1130" geometry={nodes.Shape_IndexedFaceSet1130.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1131" geometry={nodes.Shape_IndexedFaceSet1131.geometry} material={nodes.Shape_IndexedFaceSet1131.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1132" geometry={nodes.Shape_IndexedFaceSet1132.geometry} material={nodes.Shape_IndexedFaceSet1132.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1133" geometry={nodes.Shape_IndexedFaceSet1133.geometry} material={nodes.Shape_IndexedFaceSet1133.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1134" geometry={nodes.Shape_IndexedFaceSet1134.geometry} material={nodes.Shape_IndexedFaceSet1134.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1135" geometry={nodes.Shape_IndexedFaceSet1135.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1137" geometry={nodes.Shape_IndexedFaceSet1137.geometry} material={materials.grey} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1140" geometry={nodes.Shape_IndexedFaceSet1140.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1161" geometry={nodes.Shape_IndexedFaceSet1161.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1162" geometry={nodes.Shape_IndexedFaceSet1162.geometry} material={nodes.Shape_IndexedFaceSet1162.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1163" geometry={nodes.Shape_IndexedFaceSet1163.geometry} material={nodes.Shape_IndexedFaceSet1163.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1165" geometry={nodes.Shape_IndexedFaceSet1165.geometry} material={nodes.Shape_IndexedFaceSet1165.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1166" geometry={nodes.Shape_IndexedFaceSet1166.geometry} material={nodes.Shape_IndexedFaceSet1166.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1167" geometry={nodes.Shape_IndexedFaceSet1167.geometry} material={nodes.Shape_IndexedFaceSet1167.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1168" geometry={nodes.Shape_IndexedFaceSet1168.geometry} material={nodes.Shape_IndexedFaceSet1168.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1169" geometry={nodes.Shape_IndexedFaceSet1169.geometry} material={nodes.Shape_IndexedFaceSet1169.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1170" geometry={nodes.Shape_IndexedFaceSet1170.geometry} material={nodes.Shape_IndexedFaceSet1170.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1171" geometry={nodes.Shape_IndexedFaceSet1171.geometry} material={nodes.Shape_IndexedFaceSet1171.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1172" geometry={nodes.Shape_IndexedFaceSet1172.geometry} material={nodes.Shape_IndexedFaceSet1172.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1173" geometry={nodes.Shape_IndexedFaceSet1173.geometry} material={nodes.Shape_IndexedFaceSet1173.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1174" geometry={nodes.Shape_IndexedFaceSet1174.geometry} material={nodes.Shape_IndexedFaceSet1174.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1175" geometry={nodes.Shape_IndexedFaceSet1175.geometry} material={nodes.Shape_IndexedFaceSet1175.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1176" geometry={nodes.Shape_IndexedFaceSet1176.geometry} material={nodes.Shape_IndexedFaceSet1176.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1177" geometry={nodes.Shape_IndexedFaceSet1177.geometry} material={nodes.Shape_IndexedFaceSet1177.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1178" geometry={nodes.Shape_IndexedFaceSet1178.geometry} material={nodes.Shape_IndexedFaceSet1178.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1179" geometry={nodes.Shape_IndexedFaceSet1179.geometry} material={nodes.Shape_IndexedFaceSet1179.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1180" geometry={nodes.Shape_IndexedFaceSet1180.geometry} material={nodes.Shape_IndexedFaceSet1180.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1181" geometry={nodes.Shape_IndexedFaceSet1181.geometry} material={nodes.Shape_IndexedFaceSet1181.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1182" geometry={nodes.Shape_IndexedFaceSet1182.geometry} material={nodes.Shape_IndexedFaceSet1182.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1183" geometry={nodes.Shape_IndexedFaceSet1183.geometry} material={nodes.Shape_IndexedFaceSet1183.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1184" geometry={nodes.Shape_IndexedFaceSet1184.geometry} material={nodes.Shape_IndexedFaceSet1184.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1190" geometry={nodes.Shape_IndexedFaceSet1190.geometry} material={nodes.Shape_IndexedFaceSet1190.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1191" geometry={nodes.Shape_IndexedFaceSet1191.geometry} material={nodes.Shape_IndexedFaceSet1191.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1192" geometry={nodes.Shape_IndexedFaceSet1192.geometry} material={nodes.Shape_IndexedFaceSet1192.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1193" geometry={nodes.Shape_IndexedFaceSet1193.geometry} material={nodes.Shape_IndexedFaceSet1193.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1194" geometry={nodes.Shape_IndexedFaceSet1194.geometry} material={nodes.Shape_IndexedFaceSet1194.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1195" geometry={nodes.Shape_IndexedFaceSet1195.geometry} material={nodes.Shape_IndexedFaceSet1195.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1196" geometry={nodes.Shape_IndexedFaceSet1196.geometry} material={nodes.Shape_IndexedFaceSet1196.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1197" geometry={nodes.Shape_IndexedFaceSet1197.geometry} material={nodes.Shape_IndexedFaceSet1197.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1198" geometry={nodes.Shape_IndexedFaceSet1198.geometry} material={nodes.Shape_IndexedFaceSet1198.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1199" geometry={nodes.Shape_IndexedFaceSet1199.geometry} material={nodes.Shape_IndexedFaceSet1199.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1200" geometry={nodes.Shape_IndexedFaceSet1200.geometry} material={nodes.Shape_IndexedFaceSet1200.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1201" geometry={nodes.Shape_IndexedFaceSet1201.geometry} material={nodes.Shape_IndexedFaceSet1201.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1202" geometry={nodes.Shape_IndexedFaceSet1202.geometry} material={nodes.Shape_IndexedFaceSet1202.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1203" geometry={nodes.Shape_IndexedFaceSet1203.geometry} material={nodes.Shape_IndexedFaceSet1203.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1204" geometry={nodes.Shape_IndexedFaceSet1204.geometry} material={nodes.Shape_IndexedFaceSet1204.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1205" geometry={nodes.Shape_IndexedFaceSet1205.geometry} material={nodes.Shape_IndexedFaceSet1205.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1206" geometry={nodes.Shape_IndexedFaceSet1206.geometry} material={nodes.Shape_IndexedFaceSet1206.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1207" geometry={nodes.Shape_IndexedFaceSet1207.geometry} material={nodes.Shape_IndexedFaceSet1207.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1208" geometry={nodes.Shape_IndexedFaceSet1208.geometry} material={nodes.Shape_IndexedFaceSet1208.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1209" geometry={nodes.Shape_IndexedFaceSet1209.geometry} material={nodes.Shape_IndexedFaceSet1209.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1210" geometry={nodes.Shape_IndexedFaceSet1210.geometry} material={nodes.Shape_IndexedFaceSet1210.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1211" geometry={nodes.Shape_IndexedFaceSet1211.geometry} material={nodes.Shape_IndexedFaceSet1211.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1212" geometry={nodes.Shape_IndexedFaceSet1212.geometry} material={nodes.Shape_IndexedFaceSet1212.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1213" geometry={nodes.Shape_IndexedFaceSet1213.geometry} material={nodes.Shape_IndexedFaceSet1213.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1214" geometry={nodes.Shape_IndexedFaceSet1214.geometry} material={nodes.Shape_IndexedFaceSet1214.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1215" geometry={nodes.Shape_IndexedFaceSet1215.geometry} material={nodes.Shape_IndexedFaceSet1215.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1216" geometry={nodes.Shape_IndexedFaceSet1216.geometry} material={nodes.Shape_IndexedFaceSet1216.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <group name="Shape_IndexedFaceSet1217" rotation={[Math.PI / 2, 0, Math.PI]}>
                            <mesh name="Shape_IndexedFaceSet1217_1" geometry={nodes.Shape_IndexedFaceSet1217_1.geometry} material={materials.metal} />
                            <mesh name="Shape_IndexedFaceSet1217_2" geometry={nodes.Shape_IndexedFaceSet1217_2.geometry} material={materials.printed} />
                    </group>
                    <mesh name="Shape_IndexedFaceSet1218" geometry={nodes.Shape_IndexedFaceSet1218.geometry} material={nodes.Shape_IndexedFaceSet1218.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1220" geometry={nodes.Shape_IndexedFaceSet1220.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1222" geometry={nodes.Shape_IndexedFaceSet1222.geometry} material={nodes.Shape_IndexedFaceSet1222.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1223" geometry={nodes.Shape_IndexedFaceSet1223.geometry} material={nodes.Shape_IndexedFaceSet1223.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1224" geometry={nodes.Shape_IndexedFaceSet1224.geometry} material={nodes.Shape_IndexedFaceSet1224.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1225" geometry={nodes.Shape_IndexedFaceSet1225.geometry} material={nodes.Shape_IndexedFaceSet1225.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1226" geometry={nodes.Shape_IndexedFaceSet1226.geometry} material={nodes.Shape_IndexedFaceSet1226.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh ref = {getMeshRef('sample')} name="Shape_IndexedFaceSet1227" geometry={nodes.Shape_IndexedFaceSet1227.geometry} material={materials.red} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1236" geometry={nodes.Shape_IndexedFaceSet1236.geometry} material={nodes.Shape_IndexedFaceSet1236.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1237" geometry={nodes.Shape_IndexedFaceSet1237.geometry} material={nodes.Shape_IndexedFaceSet1237.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1238" geometry={nodes.Shape_IndexedFaceSet1238.geometry} material={nodes.Shape_IndexedFaceSet1238.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1239" geometry={nodes.Shape_IndexedFaceSet1239.geometry} material={nodes.Shape_IndexedFaceSet1239.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1240" geometry={nodes.Shape_IndexedFaceSet1240.geometry} material={nodes.Shape_IndexedFaceSet1240.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1241" geometry={nodes.Shape_IndexedFaceSet1241.geometry} material={nodes.Shape_IndexedFaceSet1241.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1242" geometry={nodes.Shape_IndexedFaceSet1242.geometry} material={nodes.Shape_IndexedFaceSet1242.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1243" geometry={nodes.Shape_IndexedFaceSet1243.geometry} material={nodes.Shape_IndexedFaceSet1243.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1244" geometry={nodes.Shape_IndexedFaceSet1244.geometry} material={nodes.Shape_IndexedFaceSet1244.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1245" geometry={nodes.Shape_IndexedFaceSet1245.geometry} material={nodes.Shape_IndexedFaceSet1245.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1246" geometry={nodes.Shape_IndexedFaceSet1246.geometry} material={nodes.Shape_IndexedFaceSet1246.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1247" geometry={nodes.Shape_IndexedFaceSet1247.geometry} material={nodes.Shape_IndexedFaceSet1247.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1248" geometry={nodes.Shape_IndexedFaceSet1248.geometry} material={nodes.Shape_IndexedFaceSet1248.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1249" geometry={nodes.Shape_IndexedFaceSet1249.geometry} material={nodes.Shape_IndexedFaceSet1249.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1250" geometry={nodes.Shape_IndexedFaceSet1250.geometry} material={nodes.Shape_IndexedFaceSet1250.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1251" geometry={nodes.Shape_IndexedFaceSet1251.geometry} material={nodes.Shape_IndexedFaceSet1251.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1252" geometry={nodes.Shape_IndexedFaceSet1252.geometry} material={nodes.Shape_IndexedFaceSet1252.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1253" geometry={nodes.Shape_IndexedFaceSet1253.geometry} material={nodes.Shape_IndexedFaceSet1253.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1254" geometry={nodes.Shape_IndexedFaceSet1254.geometry} material={nodes.Shape_IndexedFaceSet1254.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1255" geometry={nodes.Shape_IndexedFaceSet1255.geometry} material={nodes.Shape_IndexedFaceSet1255.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1256" geometry={nodes.Shape_IndexedFaceSet1256.geometry} material={nodes.Shape_IndexedFaceSet1256.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1257" geometry={nodes.Shape_IndexedFaceSet1257.geometry} material={nodes.Shape_IndexedFaceSet1257.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1258" geometry={nodes.Shape_IndexedFaceSet1258.geometry} material={nodes.Shape_IndexedFaceSet1258.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1259" geometry={nodes.Shape_IndexedFaceSet1259.geometry} material={nodes.Shape_IndexedFaceSet1259.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1260" geometry={nodes.Shape_IndexedFaceSet1260.geometry} material={nodes.Shape_IndexedFaceSet1260.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1261" geometry={nodes.Shape_IndexedFaceSet1261.geometry} material={nodes.Shape_IndexedFaceSet1261.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1262" geometry={nodes.Shape_IndexedFaceSet1262.geometry} material={nodes.Shape_IndexedFaceSet1262.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1263" geometry={nodes.Shape_IndexedFaceSet1263.geometry} material={nodes.Shape_IndexedFaceSet1263.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1264" geometry={nodes.Shape_IndexedFaceSet1264.geometry} material={nodes.Shape_IndexedFaceSet1264.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1265" geometry={nodes.Shape_IndexedFaceSet1265.geometry} material={nodes.Shape_IndexedFaceSet1265.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1266" geometry={nodes.Shape_IndexedFaceSet1266.geometry} material={nodes.Shape_IndexedFaceSet1266.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1267" geometry={nodes.Shape_IndexedFaceSet1267.geometry} material={nodes.Shape_IndexedFaceSet1267.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1268" geometry={nodes.Shape_IndexedFaceSet1268.geometry} material={nodes.Shape_IndexedFaceSet1268.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1269" geometry={nodes.Shape_IndexedFaceSet1269.geometry} material={nodes.Shape_IndexedFaceSet1269.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1270" geometry={nodes.Shape_IndexedFaceSet1270.geometry} material={nodes.Shape_IndexedFaceSet1270.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1271" geometry={nodes.Shape_IndexedFaceSet1271.geometry} material={nodes.Shape_IndexedFaceSet1271.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1272" geometry={nodes.Shape_IndexedFaceSet1272.geometry} material={nodes.Shape_IndexedFaceSet1272.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1273" geometry={nodes.Shape_IndexedFaceSet1273.geometry} material={nodes.Shape_IndexedFaceSet1273.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1274" geometry={nodes.Shape_IndexedFaceSet1274.geometry} material={nodes.Shape_IndexedFaceSet1274.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1275" geometry={nodes.Shape_IndexedFaceSet1275.geometry} material={nodes.Shape_IndexedFaceSet1275.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1276" geometry={nodes.Shape_IndexedFaceSet1276.geometry} material={nodes.Shape_IndexedFaceSet1276.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1277" geometry={nodes.Shape_IndexedFaceSet1277.geometry} material={nodes.Shape_IndexedFaceSet1277.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1278" geometry={nodes.Shape_IndexedFaceSet1278.geometry} material={nodes.Shape_IndexedFaceSet1278.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1279" geometry={nodes.Shape_IndexedFaceSet1279.geometry} material={nodes.Shape_IndexedFaceSet1279.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1280" geometry={nodes.Shape_IndexedFaceSet1280.geometry} material={nodes.Shape_IndexedFaceSet1280.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1281" geometry={nodes.Shape_IndexedFaceSet1281.geometry} material={nodes.Shape_IndexedFaceSet1281.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1282" geometry={nodes.Shape_IndexedFaceSet1282.geometry} material={nodes.Shape_IndexedFaceSet1282.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1283" geometry={nodes.Shape_IndexedFaceSet1283.geometry} material={nodes.Shape_IndexedFaceSet1283.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1284" geometry={nodes.Shape_IndexedFaceSet1284.geometry} material={nodes.Shape_IndexedFaceSet1284.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1285" geometry={nodes.Shape_IndexedFaceSet1285.geometry} material={nodes.Shape_IndexedFaceSet1285.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1286" geometry={nodes.Shape_IndexedFaceSet1286.geometry} material={nodes.Shape_IndexedFaceSet1286.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1287" geometry={nodes.Shape_IndexedFaceSet1287.geometry} material={nodes.Shape_IndexedFaceSet1287.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1288" geometry={nodes.Shape_IndexedFaceSet1288.geometry} material={nodes.Shape_IndexedFaceSet1288.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1289" geometry={nodes.Shape_IndexedFaceSet1289.geometry} material={nodes.Shape_IndexedFaceSet1289.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1290" geometry={nodes.Shape_IndexedFaceSet1290.geometry} material={nodes.Shape_IndexedFaceSet1290.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1294" geometry={nodes.Shape_IndexedFaceSet1294.geometry} material={nodes.Shape_IndexedFaceSet1294.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1295" geometry={nodes.Shape_IndexedFaceSet1295.geometry} material={nodes.Shape_IndexedFaceSet1295.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1296" geometry={nodes.Shape_IndexedFaceSet1296.geometry} material={nodes.Shape_IndexedFaceSet1296.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1297" geometry={nodes.Shape_IndexedFaceSet1297.geometry} material={nodes.Shape_IndexedFaceSet1297.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1298" geometry={nodes.Shape_IndexedFaceSet1298.geometry} material={nodes.Shape_IndexedFaceSet1298.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1299" geometry={nodes.Shape_IndexedFaceSet1299.geometry} material={nodes.Shape_IndexedFaceSet1299.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1300" geometry={nodes.Shape_IndexedFaceSet1300.geometry} material={nodes.Shape_IndexedFaceSet1300.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1301" geometry={nodes.Shape_IndexedFaceSet1301.geometry} material={nodes.Shape_IndexedFaceSet1301.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1302" geometry={nodes.Shape_IndexedFaceSet1302.geometry} material={nodes.Shape_IndexedFaceSet1302.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1303" geometry={nodes.Shape_IndexedFaceSet1303.geometry} material={nodes.Shape_IndexedFaceSet1303.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1304" geometry={nodes.Shape_IndexedFaceSet1304.geometry} material={nodes.Shape_IndexedFaceSet1304.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1305" geometry={nodes.Shape_IndexedFaceSet1305.geometry} material={nodes.Shape_IndexedFaceSet1305.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1306" geometry={nodes.Shape_IndexedFaceSet1306.geometry} material={nodes.Shape_IndexedFaceSet1306.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1307" geometry={nodes.Shape_IndexedFaceSet1307.geometry} material={nodes.Shape_IndexedFaceSet1307.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1308" geometry={nodes.Shape_IndexedFaceSet1308.geometry} material={nodes.Shape_IndexedFaceSet1308.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1309" geometry={nodes.Shape_IndexedFaceSet1309.geometry} material={nodes.Shape_IndexedFaceSet1309.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1310" geometry={nodes.Shape_IndexedFaceSet1310.geometry} material={nodes.Shape_IndexedFaceSet1310.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1311" geometry={nodes.Shape_IndexedFaceSet1311.geometry} material={nodes.Shape_IndexedFaceSet1311.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1312" geometry={nodes.Shape_IndexedFaceSet1312.geometry} material={nodes.Shape_IndexedFaceSet1312.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1313" geometry={nodes.Shape_IndexedFaceSet1313.geometry} material={nodes.Shape_IndexedFaceSet1313.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1314" geometry={nodes.Shape_IndexedFaceSet1314.geometry} material={nodes.Shape_IndexedFaceSet1314.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1315" geometry={nodes.Shape_IndexedFaceSet1315.geometry} material={nodes.Shape_IndexedFaceSet1315.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1316" geometry={nodes.Shape_IndexedFaceSet1316.geometry} material={nodes.Shape_IndexedFaceSet1316.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1317" geometry={nodes.Shape_IndexedFaceSet1317.geometry} material={nodes.Shape_IndexedFaceSet1317.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1318" geometry={nodes.Shape_IndexedFaceSet1318.geometry} material={nodes.Shape_IndexedFaceSet1318.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1319" geometry={nodes.Shape_IndexedFaceSet1319.geometry} material={nodes.Shape_IndexedFaceSet1319.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1320" geometry={nodes.Shape_IndexedFaceSet1320.geometry} material={nodes.Shape_IndexedFaceSet1320.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1321" geometry={nodes.Shape_IndexedFaceSet1321.geometry} material={nodes.Shape_IndexedFaceSet1321.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1322" geometry={nodes.Shape_IndexedFaceSet1322.geometry} material={nodes.Shape_IndexedFaceSet1322.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1323" geometry={nodes.Shape_IndexedFaceSet1323.geometry} material={nodes.Shape_IndexedFaceSet1323.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1324" geometry={nodes.Shape_IndexedFaceSet1324.geometry} material={nodes.Shape_IndexedFaceSet1324.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1325" geometry={nodes.Shape_IndexedFaceSet1325.geometry} material={nodes.Shape_IndexedFaceSet1325.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1326" geometry={nodes.Shape_IndexedFaceSet1326.geometry} material={nodes.Shape_IndexedFaceSet1326.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1327" geometry={nodes.Shape_IndexedFaceSet1327.geometry} material={nodes.Shape_IndexedFaceSet1327.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1328" geometry={nodes.Shape_IndexedFaceSet1328.geometry} material={nodes.Shape_IndexedFaceSet1328.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1329" geometry={nodes.Shape_IndexedFaceSet1329.geometry} material={nodes.Shape_IndexedFaceSet1329.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1330" geometry={nodes.Shape_IndexedFaceSet1330.geometry} material={nodes.Shape_IndexedFaceSet1330.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1331" geometry={nodes.Shape_IndexedFaceSet1331.geometry} material={nodes.Shape_IndexedFaceSet1331.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1332" geometry={nodes.Shape_IndexedFaceSet1332.geometry} material={nodes.Shape_IndexedFaceSet1332.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1333" geometry={nodes.Shape_IndexedFaceSet1333.geometry} material={nodes.Shape_IndexedFaceSet1333.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1334" geometry={nodes.Shape_IndexedFaceSet1334.geometry} material={nodes.Shape_IndexedFaceSet1334.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1335" geometry={nodes.Shape_IndexedFaceSet1335.geometry} material={nodes.Shape_IndexedFaceSet1335.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1336" geometry={nodes.Shape_IndexedFaceSet1336.geometry} material={nodes.Shape_IndexedFaceSet1336.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1337" geometry={nodes.Shape_IndexedFaceSet1337.geometry} material={nodes.Shape_IndexedFaceSet1337.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1338" geometry={nodes.Shape_IndexedFaceSet1338.geometry} material={nodes.Shape_IndexedFaceSet1338.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1339" geometry={nodes.Shape_IndexedFaceSet1339.geometry} material={nodes.Shape_IndexedFaceSet1339.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1340" geometry={nodes.Shape_IndexedFaceSet1340.geometry} material={nodes.Shape_IndexedFaceSet1340.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1341" geometry={nodes.Shape_IndexedFaceSet1341.geometry} material={nodes.Shape_IndexedFaceSet1341.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1342" geometry={nodes.Shape_IndexedFaceSet1342.geometry} material={nodes.Shape_IndexedFaceSet1342.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1343" geometry={nodes.Shape_IndexedFaceSet1343.geometry} material={nodes.Shape_IndexedFaceSet1343.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1344" geometry={nodes.Shape_IndexedFaceSet1344.geometry} material={nodes.Shape_IndexedFaceSet1344.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1345" geometry={nodes.Shape_IndexedFaceSet1345.geometry} material={nodes.Shape_IndexedFaceSet1345.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1346" geometry={nodes.Shape_IndexedFaceSet1346.geometry} material={nodes.Shape_IndexedFaceSet1346.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1347" geometry={nodes.Shape_IndexedFaceSet1347.geometry} material={nodes.Shape_IndexedFaceSet1347.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1348" geometry={nodes.Shape_IndexedFaceSet1348.geometry} material={nodes.Shape_IndexedFaceSet1348.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1349" geometry={nodes.Shape_IndexedFaceSet1349.geometry} material={nodes.Shape_IndexedFaceSet1349.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1350" geometry={nodes.Shape_IndexedFaceSet1350.geometry} material={nodes.Shape_IndexedFaceSet1350.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1351" geometry={nodes.Shape_IndexedFaceSet1351.geometry} material={nodes.Shape_IndexedFaceSet1351.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1352" geometry={nodes.Shape_IndexedFaceSet1352.geometry} material={nodes.Shape_IndexedFaceSet1352.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1353" geometry={nodes.Shape_IndexedFaceSet1353.geometry} material={nodes.Shape_IndexedFaceSet1353.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1354" geometry={nodes.Shape_IndexedFaceSet1354.geometry} material={nodes.Shape_IndexedFaceSet1354.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1355" geometry={nodes.Shape_IndexedFaceSet1355.geometry} material={nodes.Shape_IndexedFaceSet1355.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1356" geometry={nodes.Shape_IndexedFaceSet1356.geometry} material={nodes.Shape_IndexedFaceSet1356.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1357" geometry={nodes.Shape_IndexedFaceSet1357.geometry} material={nodes.Shape_IndexedFaceSet1357.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1358" geometry={nodes.Shape_IndexedFaceSet1358.geometry} material={nodes.Shape_IndexedFaceSet1358.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1359" geometry={nodes.Shape_IndexedFaceSet1359.geometry} material={nodes.Shape_IndexedFaceSet1359.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1360" geometry={nodes.Shape_IndexedFaceSet1360.geometry} material={nodes.Shape_IndexedFaceSet1360.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1361" geometry={nodes.Shape_IndexedFaceSet1361.geometry} material={nodes.Shape_IndexedFaceSet1361.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1362" geometry={nodes.Shape_IndexedFaceSet1362.geometry} material={nodes.Shape_IndexedFaceSet1362.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1363" geometry={nodes.Shape_IndexedFaceSet1363.geometry} material={nodes.Shape_IndexedFaceSet1363.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1364" geometry={nodes.Shape_IndexedFaceSet1364.geometry} material={nodes.Shape_IndexedFaceSet1364.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1365" geometry={nodes.Shape_IndexedFaceSet1365.geometry} material={nodes.Shape_IndexedFaceSet1365.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1366" geometry={nodes.Shape_IndexedFaceSet1366.geometry} material={nodes.Shape_IndexedFaceSet1366.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1367" geometry={nodes.Shape_IndexedFaceSet1367.geometry} material={nodes.Shape_IndexedFaceSet1367.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1368" geometry={nodes.Shape_IndexedFaceSet1368.geometry} material={nodes.Shape_IndexedFaceSet1368.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1369" geometry={nodes.Shape_IndexedFaceSet1369.geometry} material={nodes.Shape_IndexedFaceSet1369.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1370" geometry={nodes.Shape_IndexedFaceSet1370.geometry} material={nodes.Shape_IndexedFaceSet1370.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1371" geometry={nodes.Shape_IndexedFaceSet1371.geometry} material={nodes.Shape_IndexedFaceSet1371.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1372" geometry={nodes.Shape_IndexedFaceSet1372.geometry} material={nodes.Shape_IndexedFaceSet1372.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1373" geometry={nodes.Shape_IndexedFaceSet1373.geometry} material={nodes.Shape_IndexedFaceSet1373.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1374" geometry={nodes.Shape_IndexedFaceSet1374.geometry} material={nodes.Shape_IndexedFaceSet1374.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1375" geometry={nodes.Shape_IndexedFaceSet1375.geometry} material={nodes.Shape_IndexedFaceSet1375.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1376" geometry={nodes.Shape_IndexedFaceSet1376.geometry} material={nodes.Shape_IndexedFaceSet1376.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1377" geometry={nodes.Shape_IndexedFaceSet1377.geometry} material={nodes.Shape_IndexedFaceSet1377.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1378" geometry={nodes.Shape_IndexedFaceSet1378.geometry} material={nodes.Shape_IndexedFaceSet1378.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1379" geometry={nodes.Shape_IndexedFaceSet1379.geometry} material={nodes.Shape_IndexedFaceSet1379.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1380" geometry={nodes.Shape_IndexedFaceSet1380.geometry} material={nodes.Shape_IndexedFaceSet1380.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1381" geometry={nodes.Shape_IndexedFaceSet1381.geometry} material={nodes.Shape_IndexedFaceSet1381.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1382" geometry={nodes.Shape_IndexedFaceSet1382.geometry} material={nodes.Shape_IndexedFaceSet1382.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1383" geometry={nodes.Shape_IndexedFaceSet1383.geometry} material={nodes.Shape_IndexedFaceSet1383.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1384" geometry={nodes.Shape_IndexedFaceSet1384.geometry} material={nodes.Shape_IndexedFaceSet1384.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1385" geometry={nodes.Shape_IndexedFaceSet1385.geometry} material={nodes.Shape_IndexedFaceSet1385.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1386" geometry={nodes.Shape_IndexedFaceSet1386.geometry} material={nodes.Shape_IndexedFaceSet1386.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1387" geometry={nodes.Shape_IndexedFaceSet1387.geometry} material={nodes.Shape_IndexedFaceSet1387.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1388" geometry={nodes.Shape_IndexedFaceSet1388.geometry} material={nodes.Shape_IndexedFaceSet1388.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1389" geometry={nodes.Shape_IndexedFaceSet1389.geometry} material={nodes.Shape_IndexedFaceSet1389.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1390" geometry={nodes.Shape_IndexedFaceSet1390.geometry} material={nodes.Shape_IndexedFaceSet1390.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1391" geometry={nodes.Shape_IndexedFaceSet1391.geometry} material={nodes.Shape_IndexedFaceSet1391.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1392" geometry={nodes.Shape_IndexedFaceSet1392.geometry} material={nodes.Shape_IndexedFaceSet1392.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1393" geometry={nodes.Shape_IndexedFaceSet1393.geometry} material={nodes.Shape_IndexedFaceSet1393.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1394" geometry={nodes.Shape_IndexedFaceSet1394.geometry} material={nodes.Shape_IndexedFaceSet1394.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1395" geometry={nodes.Shape_IndexedFaceSet1395.geometry} material={nodes.Shape_IndexedFaceSet1395.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1396" geometry={nodes.Shape_IndexedFaceSet1396.geometry} material={nodes.Shape_IndexedFaceSet1396.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1397" geometry={nodes.Shape_IndexedFaceSet1397.geometry} material={nodes.Shape_IndexedFaceSet1397.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1398" geometry={nodes.Shape_IndexedFaceSet1398.geometry} material={nodes.Shape_IndexedFaceSet1398.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1399" geometry={nodes.Shape_IndexedFaceSet1399.geometry} material={nodes.Shape_IndexedFaceSet1399.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1400" geometry={nodes.Shape_IndexedFaceSet1400.geometry} material={nodes.Shape_IndexedFaceSet1400.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1401" geometry={nodes.Shape_IndexedFaceSet1401.geometry} material={nodes.Shape_IndexedFaceSet1401.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1402" geometry={nodes.Shape_IndexedFaceSet1402.geometry} material={nodes.Shape_IndexedFaceSet1402.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1403" geometry={nodes.Shape_IndexedFaceSet1403.geometry} material={nodes.Shape_IndexedFaceSet1403.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1404" geometry={nodes.Shape_IndexedFaceSet1404.geometry} material={nodes.Shape_IndexedFaceSet1404.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1405" geometry={nodes.Shape_IndexedFaceSet1405.geometry} material={nodes.Shape_IndexedFaceSet1405.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1406" geometry={nodes.Shape_IndexedFaceSet1406.geometry} material={nodes.Shape_IndexedFaceSet1406.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1407" geometry={nodes.Shape_IndexedFaceSet1407.geometry} material={nodes.Shape_IndexedFaceSet1407.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1408" geometry={nodes.Shape_IndexedFaceSet1408.geometry} material={nodes.Shape_IndexedFaceSet1408.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1409" geometry={nodes.Shape_IndexedFaceSet1409.geometry} material={nodes.Shape_IndexedFaceSet1409.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1410" geometry={nodes.Shape_IndexedFaceSet1410.geometry} material={nodes.Shape_IndexedFaceSet1410.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1411" geometry={nodes.Shape_IndexedFaceSet1411.geometry} material={nodes.Shape_IndexedFaceSet1411.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1412" geometry={nodes.Shape_IndexedFaceSet1412.geometry} material={nodes.Shape_IndexedFaceSet1412.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1413" geometry={nodes.Shape_IndexedFaceSet1413.geometry} material={nodes.Shape_IndexedFaceSet1413.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1414" geometry={nodes.Shape_IndexedFaceSet1414.geometry} material={nodes.Shape_IndexedFaceSet1414.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1415" geometry={nodes.Shape_IndexedFaceSet1415.geometry} material={nodes.Shape_IndexedFaceSet1415.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1416" geometry={nodes.Shape_IndexedFaceSet1416.geometry} material={nodes.Shape_IndexedFaceSet1416.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1417" geometry={nodes.Shape_IndexedFaceSet1417.geometry} material={nodes.Shape_IndexedFaceSet1417.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1418" geometry={nodes.Shape_IndexedFaceSet1418.geometry} material={nodes.Shape_IndexedFaceSet1418.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1419" geometry={nodes.Shape_IndexedFaceSet1419.geometry} material={nodes.Shape_IndexedFaceSet1419.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1420" geometry={nodes.Shape_IndexedFaceSet1420.geometry} material={nodes.Shape_IndexedFaceSet1420.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1421" geometry={nodes.Shape_IndexedFaceSet1421.geometry} material={nodes.Shape_IndexedFaceSet1421.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1422" geometry={nodes.Shape_IndexedFaceSet1422.geometry} material={nodes.Shape_IndexedFaceSet1422.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1423" geometry={nodes.Shape_IndexedFaceSet1423.geometry} material={nodes.Shape_IndexedFaceSet1423.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1424" geometry={nodes.Shape_IndexedFaceSet1424.geometry} material={nodes.Shape_IndexedFaceSet1424.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1425" geometry={nodes.Shape_IndexedFaceSet1425.geometry} material={nodes.Shape_IndexedFaceSet1425.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1426" geometry={nodes.Shape_IndexedFaceSet1426.geometry} material={nodes.Shape_IndexedFaceSet1426.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1427" geometry={nodes.Shape_IndexedFaceSet1427.geometry} material={nodes.Shape_IndexedFaceSet1427.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1428" geometry={nodes.Shape_IndexedFaceSet1428.geometry} material={nodes.Shape_IndexedFaceSet1428.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1429" geometry={nodes.Shape_IndexedFaceSet1429.geometry} material={nodes.Shape_IndexedFaceSet1429.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1430" geometry={nodes.Shape_IndexedFaceSet1430.geometry} material={nodes.Shape_IndexedFaceSet1430.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1431" geometry={nodes.Shape_IndexedFaceSet1431.geometry} material={nodes.Shape_IndexedFaceSet1431.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1432" geometry={nodes.Shape_IndexedFaceSet1432.geometry} material={nodes.Shape_IndexedFaceSet1432.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1433" geometry={nodes.Shape_IndexedFaceSet1433.geometry} material={nodes.Shape_IndexedFaceSet1433.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1434" geometry={nodes.Shape_IndexedFaceSet1434.geometry} material={nodes.Shape_IndexedFaceSet1434.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1435" geometry={nodes.Shape_IndexedFaceSet1435.geometry} material={nodes.Shape_IndexedFaceSet1435.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1436" geometry={nodes.Shape_IndexedFaceSet1436.geometry} material={nodes.Shape_IndexedFaceSet1436.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1437" geometry={nodes.Shape_IndexedFaceSet1437.geometry} material={nodes.Shape_IndexedFaceSet1437.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1438" geometry={nodes.Shape_IndexedFaceSet1438.geometry} material={nodes.Shape_IndexedFaceSet1438.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1439" geometry={nodes.Shape_IndexedFaceSet1439.geometry} material={nodes.Shape_IndexedFaceSet1439.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1440" geometry={nodes.Shape_IndexedFaceSet1440.geometry} material={nodes.Shape_IndexedFaceSet1440.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1441" geometry={nodes.Shape_IndexedFaceSet1441.geometry} material={nodes.Shape_IndexedFaceSet1441.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1442" geometry={nodes.Shape_IndexedFaceSet1442.geometry} material={nodes.Shape_IndexedFaceSet1442.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1443" geometry={nodes.Shape_IndexedFaceSet1443.geometry} material={nodes.Shape_IndexedFaceSet1443.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1444" geometry={nodes.Shape_IndexedFaceSet1444.geometry} material={nodes.Shape_IndexedFaceSet1444.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1445" geometry={nodes.Shape_IndexedFaceSet1445.geometry} material={nodes.Shape_IndexedFaceSet1445.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1446" geometry={nodes.Shape_IndexedFaceSet1446.geometry} material={nodes.Shape_IndexedFaceSet1446.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1447" geometry={nodes.Shape_IndexedFaceSet1447.geometry} material={nodes.Shape_IndexedFaceSet1447.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1448" geometry={nodes.Shape_IndexedFaceSet1448.geometry} material={nodes.Shape_IndexedFaceSet1448.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1449" geometry={nodes.Shape_IndexedFaceSet1449.geometry} material={nodes.Shape_IndexedFaceSet1449.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1450" geometry={nodes.Shape_IndexedFaceSet1450.geometry} material={nodes.Shape_IndexedFaceSet1450.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1451" geometry={nodes.Shape_IndexedFaceSet1451.geometry} material={nodes.Shape_IndexedFaceSet1451.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1452" geometry={nodes.Shape_IndexedFaceSet1452.geometry} material={nodes.Shape_IndexedFaceSet1452.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1453" geometry={nodes.Shape_IndexedFaceSet1453.geometry} material={nodes.Shape_IndexedFaceSet1453.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1454" geometry={nodes.Shape_IndexedFaceSet1454.geometry} material={nodes.Shape_IndexedFaceSet1454.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1455" geometry={nodes.Shape_IndexedFaceSet1455.geometry} material={nodes.Shape_IndexedFaceSet1455.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1456" geometry={nodes.Shape_IndexedFaceSet1456.geometry} material={nodes.Shape_IndexedFaceSet1456.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1457" geometry={nodes.Shape_IndexedFaceSet1457.geometry} material={nodes.Shape_IndexedFaceSet1457.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1458" geometry={nodes.Shape_IndexedFaceSet1458.geometry} material={nodes.Shape_IndexedFaceSet1458.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1459" geometry={nodes.Shape_IndexedFaceSet1459.geometry} material={nodes.Shape_IndexedFaceSet1459.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1460" geometry={nodes.Shape_IndexedFaceSet1460.geometry} material={nodes.Shape_IndexedFaceSet1460.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1461" geometry={nodes.Shape_IndexedFaceSet1461.geometry} material={nodes.Shape_IndexedFaceSet1461.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1462" geometry={nodes.Shape_IndexedFaceSet1462.geometry} material={nodes.Shape_IndexedFaceSet1462.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1463" geometry={nodes.Shape_IndexedFaceSet1463.geometry} material={nodes.Shape_IndexedFaceSet1463.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1464" geometry={nodes.Shape_IndexedFaceSet1464.geometry} material={nodes.Shape_IndexedFaceSet1464.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1465" geometry={nodes.Shape_IndexedFaceSet1465.geometry} material={nodes.Shape_IndexedFaceSet1465.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1466" geometry={nodes.Shape_IndexedFaceSet1466.geometry} material={nodes.Shape_IndexedFaceSet1466.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1467" geometry={nodes.Shape_IndexedFaceSet1467.geometry} material={nodes.Shape_IndexedFaceSet1467.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1468" geometry={nodes.Shape_IndexedFaceSet1468.geometry} material={nodes.Shape_IndexedFaceSet1468.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1469" geometry={nodes.Shape_IndexedFaceSet1469.geometry} material={nodes.Shape_IndexedFaceSet1469.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1470" geometry={nodes.Shape_IndexedFaceSet1470.geometry} material={nodes.Shape_IndexedFaceSet1470.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1471" geometry={nodes.Shape_IndexedFaceSet1471.geometry} material={nodes.Shape_IndexedFaceSet1471.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1472" geometry={nodes.Shape_IndexedFaceSet1472.geometry} material={nodes.Shape_IndexedFaceSet1472.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1473" geometry={nodes.Shape_IndexedFaceSet1473.geometry} material={nodes.Shape_IndexedFaceSet1473.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1474" geometry={nodes.Shape_IndexedFaceSet1474.geometry} material={nodes.Shape_IndexedFaceSet1474.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1475" geometry={nodes.Shape_IndexedFaceSet1475.geometry} material={nodes.Shape_IndexedFaceSet1475.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1476" geometry={nodes.Shape_IndexedFaceSet1476.geometry} material={nodes.Shape_IndexedFaceSet1476.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1477" geometry={nodes.Shape_IndexedFaceSet1477.geometry} material={nodes.Shape_IndexedFaceSet1477.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1478" geometry={nodes.Shape_IndexedFaceSet1478.geometry} material={nodes.Shape_IndexedFaceSet1478.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1479" geometry={nodes.Shape_IndexedFaceSet1479.geometry} material={nodes.Shape_IndexedFaceSet1479.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1480" geometry={nodes.Shape_IndexedFaceSet1480.geometry} material={nodes.Shape_IndexedFaceSet1480.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1481" geometry={nodes.Shape_IndexedFaceSet1481.geometry} material={nodes.Shape_IndexedFaceSet1481.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1482" geometry={nodes.Shape_IndexedFaceSet1482.geometry} material={nodes.Shape_IndexedFaceSet1482.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1483" geometry={nodes.Shape_IndexedFaceSet1483.geometry} material={nodes.Shape_IndexedFaceSet1483.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1484" geometry={nodes.Shape_IndexedFaceSet1484.geometry} material={nodes.Shape_IndexedFaceSet1484.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1485" geometry={nodes.Shape_IndexedFaceSet1485.geometry} material={nodes.Shape_IndexedFaceSet1485.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1486" geometry={nodes.Shape_IndexedFaceSet1486.geometry} material={nodes.Shape_IndexedFaceSet1486.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1487" geometry={nodes.Shape_IndexedFaceSet1487.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1488" geometry={nodes.Shape_IndexedFaceSet1488.geometry} material={materials.wood} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <group name="Shape_IndexedFaceSet1490" rotation={[Math.PI / 2, 0, Math.PI]}>
                            <mesh name="Shape_IndexedFaceSet1490_1" geometry={nodes.Shape_IndexedFaceSet1490_1.geometry} material={materials.printed} />
                            <mesh name="Shape_IndexedFaceSet1490_2" geometry={nodes.Shape_IndexedFaceSet1490_2.geometry} material={materials.metal} />
                            <mesh name="Shape_IndexedFaceSet1490_3" geometry={nodes.Shape_IndexedFaceSet1490_3.geometry} material={materials.yellow} />
                    </group>
                    <mesh name="Shape_IndexedFaceSet1494" geometry={nodes.Shape_IndexedFaceSet1494.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1495" geometry={nodes.Shape_IndexedFaceSet1495.geometry} material={nodes.Shape_IndexedFaceSet1495.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1496" geometry={nodes.Shape_IndexedFaceSet1496.geometry} material={nodes.Shape_IndexedFaceSet1496.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1500" geometry={nodes.Shape_IndexedFaceSet1500.geometry} material={nodes.Shape_IndexedFaceSet1500.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1501" geometry={nodes.Shape_IndexedFaceSet1501.geometry} material={nodes.Shape_IndexedFaceSet1501.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1502" geometry={nodes.Shape_IndexedFaceSet1502.geometry} material={nodes.Shape_IndexedFaceSet1502.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1503" geometry={nodes.Shape_IndexedFaceSet1503.geometry} material={nodes.Shape_IndexedFaceSet1503.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1504" geometry={nodes.Shape_IndexedFaceSet1504.geometry} material={nodes.Shape_IndexedFaceSet1504.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1505" geometry={nodes.Shape_IndexedFaceSet1505.geometry} material={nodes.Shape_IndexedFaceSet1505.material} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1530" geometry={nodes.Shape_IndexedFaceSet1530.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1608" geometry={nodes.Shape_IndexedFaceSet1608.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1616" geometry={nodes.Shape_IndexedFaceSet1616.geometry} material={materials.yellow} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1769" geometry={nodes.Shape_IndexedFaceSet1769.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1770" geometry={nodes.Shape_IndexedFaceSet1770.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} />
                    <mesh name="Shape_IndexedFaceSet1780" geometry={nodes.Shape_IndexedFaceSet1780.geometry} material={materials.carbon} rotation={[Math.PI / 2, 0, Math.PI]} />
            </group>
        )
}

useGLTF.preload('/src/assets/robot2.glb')