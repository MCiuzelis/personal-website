import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useRobotAnimation } from '@/hooks/useRobotAnimation'
import React from "react";

type MoveVec = [number, number, number]
type ExplosionPart = { name: string; move: MoveVec }
type ExplosionStep = { parts: ExplosionPart[] }

interface RobotProps extends React.ComponentProps<'group'> {
    scrollValue?: number
    scale?: number
}

export default function IntoTheDeepRobot({ scrollValue = 0, scale: finalScale = 1, ...props }: RobotProps) {
    const { nodes, materials } = useGLTF('/src/assets/swerve.glb') as GLTF & {
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
            <group name="Shape_IndexedFaceSet246" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet246_1" geometry={nodes.Shape_IndexedFaceSet246_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet246_2" geometry={nodes.Shape_IndexedFaceSet246_2.geometry} material={materials.metal} />
            </group>
            <mesh name="Shape_IndexedFaceSet248" geometry={nodes.Shape_IndexedFaceSet248.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet249" geometry={nodes.Shape_IndexedFaceSet249.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet253" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet253_1" geometry={nodes.Shape_IndexedFaceSet253_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet253_2" geometry={nodes.Shape_IndexedFaceSet253_2.geometry} material={materials.metal} />
            </group>
            <group name="Shape_IndexedFaceSet258" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet258_1" geometry={nodes.Shape_IndexedFaceSet258_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet258_2" geometry={nodes.Shape_IndexedFaceSet258_2.geometry} material={materials.metal} />
            </group>
            <group name="Shape_IndexedFaceSet263" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet263_1" geometry={nodes.Shape_IndexedFaceSet263_1.geometry} material={materials.grey} />
                <mesh name="Shape_IndexedFaceSet263_2" geometry={nodes.Shape_IndexedFaceSet263_2.geometry} material={materials.metal} />
            </group>
            <group name="Shape_IndexedFaceSet322" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet322_1" geometry={nodes.Shape_IndexedFaceSet322_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet322_2" geometry={nodes.Shape_IndexedFaceSet322_2.geometry} material={materials.printed} />
            </group>
            <group name="Shape_IndexedFaceSet324" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet324_1" geometry={nodes.Shape_IndexedFaceSet324_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet324_2" geometry={nodes.Shape_IndexedFaceSet324_2.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet324_3" geometry={nodes.Shape_IndexedFaceSet324_3.geometry} material={materials.rubber} />
                <mesh name="Shape_IndexedFaceSet324_4" geometry={nodes.Shape_IndexedFaceSet324_4.geometry} material={materials.grey} />
            </group>
            <mesh name="Shape_IndexedFaceSet337" geometry={nodes.Shape_IndexedFaceSet337.geometry} material={materials.grey} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet343" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet343_1" geometry={nodes.Shape_IndexedFaceSet343_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet343_2" geometry={nodes.Shape_IndexedFaceSet343_2.geometry} material={materials.grey} />
                <mesh name="Shape_IndexedFaceSet343_3" geometry={nodes.Shape_IndexedFaceSet343_3.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet343_4" geometry={nodes.Shape_IndexedFaceSet343_4.geometry} material={materials.yellow} />
                <mesh name="Shape_IndexedFaceSet343_5" geometry={nodes.Shape_IndexedFaceSet343_5.geometry} material={materials.printed} />
            </group>
            <mesh name="Shape_IndexedFaceSet354" geometry={nodes.Shape_IndexedFaceSet354.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet421" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet421_1" geometry={nodes.Shape_IndexedFaceSet421_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet421_2" geometry={nodes.Shape_IndexedFaceSet421_2.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet421_3" geometry={nodes.Shape_IndexedFaceSet421_3.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet421_4" geometry={nodes.Shape_IndexedFaceSet421_4.geometry} material={materials.yellow} />
            </group>
            <mesh name="Shape_IndexedFaceSet492" geometry={nodes.Shape_IndexedFaceSet492.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet494" geometry={nodes.Shape_IndexedFaceSet494.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet495" geometry={nodes.Shape_IndexedFaceSet495.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet496" geometry={nodes.Shape_IndexedFaceSet496.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet498" geometry={nodes.Shape_IndexedFaceSet498.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet548" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet548_1" geometry={nodes.Shape_IndexedFaceSet548_1.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet548_2" geometry={nodes.Shape_IndexedFaceSet548_2.geometry} material={materials.metal} />
            </group>
            <mesh name="Shape_IndexedFaceSet581" geometry={nodes.Shape_IndexedFaceSet581.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet582" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet582_1" geometry={nodes.Shape_IndexedFaceSet582_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet582_2" geometry={nodes.Shape_IndexedFaceSet582_2.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet582_3" geometry={nodes.Shape_IndexedFaceSet582_3.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet582_4" geometry={nodes.Shape_IndexedFaceSet582_4.geometry} material={materials.yellow} />
            </group>
            <group name="Shape_IndexedFaceSet648" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet648_1" geometry={nodes.Shape_IndexedFaceSet648_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet648_2" geometry={nodes.Shape_IndexedFaceSet648_2.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet648_3" geometry={nodes.Shape_IndexedFaceSet648_3.geometry} material={materials.rubber} />
                <mesh name="Shape_IndexedFaceSet648_4" geometry={nodes.Shape_IndexedFaceSet648_4.geometry} material={materials.grey} />
            </group>
            <mesh name="Shape_IndexedFaceSet656" geometry={nodes.Shape_IndexedFaceSet656.geometry} material={materials.grey} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet663" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet663_1" geometry={nodes.Shape_IndexedFaceSet663_1.geometry} material={materials.darkGrey} />
                <mesh name="Shape_IndexedFaceSet663_2" geometry={nodes.Shape_IndexedFaceSet663_2.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet663_3" geometry={nodes.Shape_IndexedFaceSet663_3.geometry} material={materials.printed} />
            </group>
            <group name="Shape_IndexedFaceSet669" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet669_1" geometry={nodes.Shape_IndexedFaceSet669_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet669_2" geometry={nodes.Shape_IndexedFaceSet669_2.geometry} material={materials.metal} />
            </group>
            <group name="Shape_IndexedFaceSet670" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet670_1" geometry={nodes.Shape_IndexedFaceSet670_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet670_2" geometry={nodes.Shape_IndexedFaceSet670_2.geometry} material={materials.metal} />
            </group>
            <mesh name="Shape_IndexedFaceSet883" geometry={nodes.Shape_IndexedFaceSet883.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet884" geometry={nodes.Shape_IndexedFaceSet884.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet905" geometry={nodes.Shape_IndexedFaceSet905.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet908" geometry={nodes.Shape_IndexedFaceSet908.geometry} material={materials.yellow} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet924" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet924_1" geometry={nodes.Shape_IndexedFaceSet924_1.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet924_2" geometry={nodes.Shape_IndexedFaceSet924_2.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet924_3" geometry={nodes.Shape_IndexedFaceSet924_3.geometry} material={materials.violet} />
            </group>
            <mesh name="Shape_IndexedFaceSet961" geometry={nodes.Shape_IndexedFaceSet961.geometry} material={materials.yellow} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet963" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet963_1" geometry={nodes.Shape_IndexedFaceSet963_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet963_2" geometry={nodes.Shape_IndexedFaceSet963_2.geometry} material={materials.limelight} />
            </group>
            <group name="Shape_IndexedFaceSet964" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet964_1" geometry={nodes.Shape_IndexedFaceSet964_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet964_2" geometry={nodes.Shape_IndexedFaceSet964_2.geometry} material={materials.limelight} />
            </group>
            <mesh name="Shape_IndexedFaceSet995" geometry={nodes.Shape_IndexedFaceSet995.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet1009" geometry={nodes.Shape_IndexedFaceSet1009.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet1010" geometry={nodes.Shape_IndexedFaceSet1010.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet1031" geometry={nodes.Shape_IndexedFaceSet1031.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet1032" geometry={nodes.Shape_IndexedFaceSet1032.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet1033" geometry={nodes.Shape_IndexedFaceSet1033.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet1034" geometry={nodes.Shape_IndexedFaceSet1034.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet1111" geometry={nodes.Shape_IndexedFaceSet1111.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet1112" geometry={nodes.Shape_IndexedFaceSet1112.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet1114" geometry={nodes.Shape_IndexedFaceSet1114.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet1123" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet1123_1" geometry={nodes.Shape_IndexedFaceSet1123_1.geometry} material={materials.darkGrey} />
                <mesh name="Shape_IndexedFaceSet1123_2" geometry={nodes.Shape_IndexedFaceSet1123_2.geometry} material={materials.printed} />
            </group>
            <group name="Shape_IndexedFaceSet1124" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet1124_1" geometry={nodes.Shape_IndexedFaceSet1124_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet1124_2" geometry={nodes.Shape_IndexedFaceSet1124_2.geometry} material={materials.printed} />
            </group>
            <group name="Shape_IndexedFaceSet1194" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet1194_1" geometry={nodes.Shape_IndexedFaceSet1194_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet1194_2" geometry={nodes.Shape_IndexedFaceSet1194_2.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet1194_3" geometry={nodes.Shape_IndexedFaceSet1194_3.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet1194_4" geometry={nodes.Shape_IndexedFaceSet1194_4.geometry} material={materials.yellow} />
            </group>
            <group name="Shape_IndexedFaceSet254" position={[0.082, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet1197" geometry={nodes.Shape_IndexedFaceSet1197.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet1197_1" geometry={nodes.Shape_IndexedFaceSet1197_1.geometry} material={materials.metal} />
            </group>
            <group name="Shape_IndexedFaceSet001" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet523" geometry={nodes.Shape_IndexedFaceSet523.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet523_1" geometry={nodes.Shape_IndexedFaceSet523_1.geometry} material={materials.metal} />
            </group>
            <mesh name="Shape_IndexedFaceSet002" geometry={nodes.Shape_IndexedFaceSet002.geometry} material={materials.grey} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh name="Shape_IndexedFaceSet003" geometry={nodes.Shape_IndexedFaceSet003.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet004" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet526" geometry={nodes.Shape_IndexedFaceSet526.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet526_1" geometry={nodes.Shape_IndexedFaceSet526_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet526_2" geometry={nodes.Shape_IndexedFaceSet526_2.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet526_3" geometry={nodes.Shape_IndexedFaceSet526_3.geometry} material={materials.yellow} />
            </group>
            <group name="Shape_IndexedFaceSet005" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet527" geometry={nodes.Shape_IndexedFaceSet527.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet527_1" geometry={nodes.Shape_IndexedFaceSet527_1.geometry} material={materials.metal} />
            </group>
            <mesh name="Shape_IndexedFaceSet006" geometry={nodes.Shape_IndexedFaceSet006.geometry} material={materials.grey} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet007" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet529" geometry={nodes.Shape_IndexedFaceSet529.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet529_1" geometry={nodes.Shape_IndexedFaceSet529_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet529_2" geometry={nodes.Shape_IndexedFaceSet529_2.geometry} material={materials.rubber} />
                <mesh name="Shape_IndexedFaceSet529_3" geometry={nodes.Shape_IndexedFaceSet529_3.geometry} material={materials.grey} />
            </group>
            <mesh name="Shape_IndexedFaceSet008" geometry={nodes.Shape_IndexedFaceSet008.geometry} material={materials.grey} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet009" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet531" geometry={nodes.Shape_IndexedFaceSet531.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet531_1" geometry={nodes.Shape_IndexedFaceSet531_1.geometry} material={materials.metal} />
            </group>
            <group name="Shape_IndexedFaceSet010" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet532" geometry={nodes.Shape_IndexedFaceSet532.geometry} material={materials.darkGrey} />
                <mesh name="Shape_IndexedFaceSet532_1" geometry={nodes.Shape_IndexedFaceSet532_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet532_2" geometry={nodes.Shape_IndexedFaceSet532_2.geometry} material={materials.printed} />
            </group>
            <group name="Shape_IndexedFaceSet011" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet533" geometry={nodes.Shape_IndexedFaceSet533.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet533_1" geometry={nodes.Shape_IndexedFaceSet533_1.geometry} material={materials.metal} />
            </group>
            <group name="Shape_IndexedFaceSet012" position={[-0.082, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet534" geometry={nodes.Shape_IndexedFaceSet534.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet534_1" geometry={nodes.Shape_IndexedFaceSet534_1.geometry} material={materials.metal} />
            </group>
            <group name="Shape_IndexedFaceSet013" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet535" geometry={nodes.Shape_IndexedFaceSet535.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet535_1" geometry={nodes.Shape_IndexedFaceSet535_1.geometry} material={materials.metal} />
            </group>
            <group name="Shape_IndexedFaceSet014" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet536" geometry={nodes.Shape_IndexedFaceSet536.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet536_1" geometry={nodes.Shape_IndexedFaceSet536_1.geometry} material={materials.printed} />
            </group>
        </group>
    )
}

useGLTF.preload('/src/assets/swerve.glb')