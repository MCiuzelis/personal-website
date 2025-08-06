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

export default function SwerveRobot({ scrollValue = 0, scale: finalScale = 1, ...props }: RobotProps) {
    const { nodes, materials } = useGLTF('/src/assets/CAD_models/SwerveRobot.glb') as GLTF & {
        nodes: Record<string, THREE.Mesh>
        materials: Record<string, THREE.Material>
    }

    const explosionSequence: ExplosionStep[] = [
        {
            parts: [
                { name: 'top', move: [0, 3, 0] },
                { name: 'inner', move: [0, 3, 0] },
                { name: 'slides', move: [0, 3, 0] },
                { name: 'arm', move: [0, 3, 0] },
                { name: 'webcam', move: [0, 3, 0] },
                { name: 'topSupport', move: [0, 3, 0] },
                { name: 'bottomSupport', move: [0, 3, 0] },
                { name: 'gripper', move: [0, 3, 0] },
                { name: 'carbon', move: [0, 3, 0] },
                { name: 'plastic', move: [0, 3, 0] },

                { name: 'bottom', move: [0, -2, 0] },
                { name: 'outer', move: [0, -5.5, 0] }
            ]
        },
        {
            parts: [
                { name: 'slides', move: [0, 4, 7] },
                { name: 'arm', move: [0, 4, 7] },
                { name: 'webcam', move: [0, 4, 7] },
                { name: 'topSupport', move: [0, 4, 7] },
                { name: 'bottomSupport', move: [0, 4, 7] },
                { name: 'gripper', move: [0, 4, 7.5] },
                { name: 'carbon', move: [0, 4, 7] },
                { name: 'plastic', move: [0, 4, 7] }
            ]
        },
        {
            parts: [
                { name: 'slides', move: [3, 0, 0] },
                { name: 'arm', move: [-2, 0, 0] },

                { name: 'outerModule', move: [-3, 0, 0] },
                { name: 'innerModule', move: [-3, 0, 0] }
            ]
        },

        {
            parts: [
                { name: 'outerModule', move: [0, 0.5, 0] },
                { name: 'innerModule', move: [0, -0.5, 0] }
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
            <mesh ref = {getMeshRef('plastic')} name="Shape_IndexedFaceSet248" geometry={nodes.Shape_IndexedFaceSet248.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
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
            <mesh name="Shape_IndexedFaceSet354" geometry={nodes.Shape_IndexedFaceSet354.geometry} material={materials.darkGrey} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh ref = {getMeshRef('inner')} name="Shape_IndexedFaceSet492" geometry={nodes.Shape_IndexedFaceSet492.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh ref = {getMeshRef('innerMirror')} name="Shape_IndexedFaceSet495" geometry={nodes.Shape_IndexedFaceSet495.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh ref = {getMeshRef('outer')} name="Shape_IndexedFaceSet496" geometry={nodes.Shape_IndexedFaceSet496.geometry} material={materials.metal} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group ref = {getGroupRef('innerModule')} name="InnerModule" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet648" geometry={nodes.Shape_IndexedFaceSet648.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet648_1" geometry={nodes.Shape_IndexedFaceSet648_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet648_2" geometry={nodes.Shape_IndexedFaceSet648_2.geometry} material={materials.rubber} />
                <mesh name="Shape_IndexedFaceSet648_3" geometry={nodes.Shape_IndexedFaceSet648_3.geometry} material={materials.grey} />
            </group>
            <group ref = {getGroupRef('outerModule')} name="OuterModule" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet663" geometry={nodes.Shape_IndexedFaceSet663.geometry} material={materials.darkGrey} />
                <mesh name="Shape_IndexedFaceSet663_1" geometry={nodes.Shape_IndexedFaceSet663_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet663_2" geometry={nodes.Shape_IndexedFaceSet663_2.geometry} material={materials.printed} />
            </group>
            <group ref = {getGroupRef('gripper')} name="Gripper" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet924" geometry={nodes.Shape_IndexedFaceSet924.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet924_1" geometry={nodes.Shape_IndexedFaceSet924_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet924_2" geometry={nodes.Shape_IndexedFaceSet924_2.geometry} material={materials.violet} />
                <mesh name="Shape_IndexedFaceSet924_3" geometry={nodes.Shape_IndexedFaceSet924_3.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet924_4" geometry={nodes.Shape_IndexedFaceSet924_4.geometry} material={materials.yellow} />
            </group>
            <group ref = {getGroupRef('topSupport')} name="Shape_IndexedFaceSet1034" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet1034_1" geometry={nodes.Shape_IndexedFaceSet1034_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet1034_2" geometry={nodes.Shape_IndexedFaceSet1034_2.geometry} material={materials.darkGrey} />
            </group>
            <mesh ref = {getMeshRef('plasticMirror')} name="Shape_IndexedFaceSet1111" geometry={nodes.Shape_IndexedFaceSet1111.geometry} material={materials.printed} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <mesh ref = {getMeshRef('carbon')} name="Shape_IndexedFaceSet1114" geometry={nodes.Shape_IndexedFaceSet1114.geometry} material={materials.limelight} rotation={[Math.PI / 2, 0, Math.PI]} scale={10} />
            <group name="Shape_IndexedFaceSet1123" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet1123_1" geometry={nodes.Shape_IndexedFaceSet1123_1.geometry} material={materials.darkGrey} />
                <mesh name="Shape_IndexedFaceSet1123_2" geometry={nodes.Shape_IndexedFaceSet1123_2.geometry} material={materials.printed} />
            </group>
            <group ref = {getGroupRef('slidesMirror')} name="Shape_IndexedFaceSet254" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet1197" geometry={nodes.Shape_IndexedFaceSet1197.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet1197_1" geometry={nodes.Shape_IndexedFaceSet1197_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet1197_2" geometry={nodes.Shape_IndexedFaceSet1197_2.geometry} material={materials.printed} />
            </group>
            <group ref = {getGroupRef('top')} name="TOP" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet528" geometry={nodes.Shape_IndexedFaceSet528.geometry} material={materials.grey} />
                <mesh name="Shape_IndexedFaceSet528_1" geometry={nodes.Shape_IndexedFaceSet528_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet528_2" geometry={nodes.Shape_IndexedFaceSet528_2.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet528_3" geometry={nodes.Shape_IndexedFaceSet528_3.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet528_4" geometry={nodes.Shape_IndexedFaceSet528_4.geometry} material={materials.yellow} />
                <mesh name="Shape_IndexedFaceSet528_5" geometry={nodes.Shape_IndexedFaceSet528_5.geometry} material={materials.darkGrey} />
            </group>
            <group name="Shape_IndexedFaceSet007" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet529" geometry={nodes.Shape_IndexedFaceSet529.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet529_1" geometry={nodes.Shape_IndexedFaceSet529_1.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet529_2" geometry={nodes.Shape_IndexedFaceSet529_2.geometry} material={materials.rubber} />
                <mesh name="Shape_IndexedFaceSet529_3" geometry={nodes.Shape_IndexedFaceSet529_3.geometry} material={materials.grey} />
            </group>
            <group name="Shape_IndexedFaceSet010" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet532" geometry={nodes.Shape_IndexedFaceSet532.geometry} material={materials.darkGrey} />
                <mesh name="Shape_IndexedFaceSet532_1" geometry={nodes.Shape_IndexedFaceSet532_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet532_2" geometry={nodes.Shape_IndexedFaceSet532_2.geometry} material={materials.printed} />
            </group>
            <group ref = {getGroupRef('bottom')} name="Bottom" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet533" geometry={nodes.Shape_IndexedFaceSet533.geometry} material={materials.printed} />
                <mesh name="Shape_IndexedFaceSet533_1" geometry={nodes.Shape_IndexedFaceSet533_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet533_2" geometry={nodes.Shape_IndexedFaceSet533_2.geometry} material={materials.grey} />
            </group>
            <group ref = {getGroupRef('slides')} name="Shape_IndexedFaceSet013" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="Shape_IndexedFaceSet535" geometry={nodes.Shape_IndexedFaceSet535.geometry} material={materials.limelight} />
                <mesh name="Shape_IndexedFaceSet535_1" geometry={nodes.Shape_IndexedFaceSet535_1.geometry} material={materials.metal} />
                <mesh name="Shape_IndexedFaceSet535_2" geometry={nodes.Shape_IndexedFaceSet535_2.geometry} material={materials.printed} />
            </group>
            <mesh ref = {getMeshRef('bottomSupport')} name="Shape_IndexedFaceSet015" geometry={nodes.Shape_IndexedFaceSet015.geometry} material={materials.printed} rotation={[-0.279, 0, 0]} scale={10} />
            <group ref = {getGroupRef('arm')} name="left" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="left_1" geometry={nodes.left_1.geometry} material={materials.orange} />
                <mesh name="left_2" geometry={nodes.left_2.geometry} material={materials.metal} />
                <mesh name="left_3" geometry={nodes.left_3.geometry} material={materials.limelight} />
            </group>
            <group ref = {getGroupRef('armMirror')} name="right" rotation={[Math.PI / 2, 0, Math.PI]} scale={10}>
                <mesh name="right_1" geometry={nodes.right_1.geometry} material={materials.limelight} />
                <mesh name="right_2" geometry={nodes.right_2.geometry} material={materials.orange} />
                <mesh name="right_3" geometry={nodes.right_3.geometry} material={materials.metal} />
            </group>
        </group>
    )
}

useGLTF.preload('/src/assets/CAD_models/SwerveRobot.glb')