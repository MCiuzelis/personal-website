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
    const { nodes, materials } = useGLTF('/src/assets/CAD_models/FLL_Robot.glb') as GLTF & {
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
            <mesh name="Object987" geometry={nodes.Object987.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object988" geometry={nodes.Object988.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object990" geometry={nodes.Object990.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object991" geometry={nodes.Object991.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object992" geometry={nodes.Object992.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object993" geometry={nodes.Object993.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object994" geometry={nodes.Object994.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object995" geometry={nodes.Object995.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object996" geometry={nodes.Object996.geometry} material={materials['SOLID-ORANGE.001']} />
            <mesh name="Object997" geometry={nodes.Object997.geometry} material={materials['SOLID-ORANGE.001']} />
            <mesh name="Object998" geometry={nodes.Object998.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object999" geometry={nodes.Object999.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1000" geometry={nodes.Object1000.geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Object1001" geometry={nodes.Object1001.geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Object1002" geometry={nodes.Object1002.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1003" geometry={nodes.Object1003.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1004" geometry={nodes.Object1004.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1005" geometry={nodes.Object1005.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1006" geometry={nodes.Object1006.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1007" geometry={nodes.Object1007.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1008" geometry={nodes.Object1008.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1009" geometry={nodes.Object1009.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1010" geometry={nodes.Object1010.geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Object1011" geometry={nodes.Object1011.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1012" geometry={nodes.Object1012.geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Object1013" geometry={nodes.Object1013.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1014" geometry={nodes.Object1014.geometry} material={materials['SOLID-DARK_TAN.001']} />
            <mesh name="Object1015" geometry={nodes.Object1015.geometry} material={materials['SOLID-DARK_TAN.001']} />
            <mesh name="Object1016" geometry={nodes.Object1016.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1017" geometry={nodes.Object1017.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1018" geometry={nodes.Object1018.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1019" geometry={nodes.Object1019.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1020" geometry={nodes.Object1020.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1021" geometry={nodes.Object1021.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1022" geometry={nodes.Object1022.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1023" geometry={nodes.Object1023.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1024" geometry={nodes.Object1024.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1025" geometry={nodes.Object1025.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1026" geometry={nodes.Object1026.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1027" geometry={nodes.Object1027.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1028" geometry={nodes.Object1028.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1029" geometry={nodes.Object1029.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1030" geometry={nodes.Object1030.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1031" geometry={nodes.Object1031.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1032" geometry={nodes.Object1032.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1033" geometry={nodes.Object1033.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1034" geometry={nodes.Object1034.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1035" geometry={nodes.Object1035.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1036" geometry={nodes.Object1036.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1037" geometry={nodes.Object1037.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1038" geometry={nodes.Object1038.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1039" geometry={nodes.Object1039.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1040" geometry={nodes.Object1040.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1041" geometry={nodes.Object1041.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1042" geometry={nodes.Object1042.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1043" geometry={nodes.Object1043.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1044" geometry={nodes.Object1044.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1045" geometry={nodes.Object1045.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1047" geometry={nodes.Object1047.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1050" geometry={nodes.Object1050.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1051" geometry={nodes.Object1051.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1052" geometry={nodes.Object1052.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1053" geometry={nodes.Object1053.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1054" geometry={nodes.Object1054.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1055" geometry={nodes.Object1055.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1056" geometry={nodes.Object1056.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1057" geometry={nodes.Object1057.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1058" geometry={nodes.Object1058.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1059" geometry={nodes.Object1059.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1060" geometry={nodes.Object1060.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1061" geometry={nodes.Object1061.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1062" geometry={nodes.Object1062.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1063" geometry={nodes.Object1063.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1064" geometry={nodes.Object1064.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1065" geometry={nodes.Object1065.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1066" geometry={nodes.Object1066.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1067" geometry={nodes.Object1067.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1068" geometry={nodes.Object1068.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1069" geometry={nodes.Object1069.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1070" geometry={nodes.Object1070.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1071" geometry={nodes.Object1071.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1072" geometry={nodes.Object1072.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1073" geometry={nodes.Object1073.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1074" geometry={nodes.Object1074.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1075" geometry={nodes.Object1075.geometry} material={materials['SOLID-DARK_TAN.001']} />
            <mesh name="Object1076" geometry={nodes.Object1076.geometry} material={materials['SOLID-DARK_TAN.001']} />
            <mesh name="Object1077" geometry={nodes.Object1077.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1078" geometry={nodes.Object1078.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1079" geometry={nodes.Object1079.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1080" geometry={nodes.Object1080.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1081" geometry={nodes.Object1081.geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Object1082" geometry={nodes.Object1082.geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Object1083" geometry={nodes.Object1083.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1084" geometry={nodes.Object1084.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1085" geometry={nodes.Object1085.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
            <mesh name="Object1086" geometry={nodes.Object1086.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
            <mesh name="Object1087" geometry={nodes.Object1087.geometry} material={materials['SOLID-TAN.001']} />
            <mesh name="Object1088" geometry={nodes.Object1088.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1089" geometry={nodes.Object1089.geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Object1090" geometry={nodes.Object1090.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1091" geometry={nodes.Object1091.geometry} material={materials['SOLID-TAN.001']} />
            <mesh name="Object1092" geometry={nodes.Object1092.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1093" geometry={nodes.Object1093.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1094" geometry={nodes.Object1094.geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Object1095" geometry={nodes.Object1095.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1096" geometry={nodes.Object1096.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1097" geometry={nodes.Object1097.geometry} material={materials['SOLID-DARK_TAN.001']} />
            <mesh name="Object1098" geometry={nodes.Object1098.geometry} material={materials['SOLID-DARK_TAN.001']} />
            <mesh name="Object1099" geometry={nodes.Object1099.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1100" geometry={nodes.Object1100.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1101" geometry={nodes.Object1101.geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Object1102" geometry={nodes.Object1102.geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Object1103" geometry={nodes.Object1103.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1104" geometry={nodes.Object1104.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1105" geometry={nodes.Object1105.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
            <mesh name="Object1106" geometry={nodes.Object1106.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
            <mesh name="Object1107" geometry={nodes.Object1107.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1108" geometry={nodes.Object1108.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1111" geometry={nodes.Object1111.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1112" geometry={nodes.Object1112.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1113" geometry={nodes.Object1113.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1114" geometry={nodes.Object1114.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1159" geometry={nodes.Object1159.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1160" geometry={nodes.Object1160.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1274" geometry={nodes.Object1274.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1275" geometry={nodes.Object1275.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1276" geometry={nodes.Object1276.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1277" geometry={nodes.Object1277.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1278" geometry={nodes.Object1278.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1279" geometry={nodes.Object1279.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1280" geometry={nodes.Object1280.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1281" geometry={nodes.Object1281.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1282" geometry={nodes.Object1282.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1283" geometry={nodes.Object1283.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1284" geometry={nodes.Object1284.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1285" geometry={nodes.Object1285.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1310" geometry={nodes.Object1310.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1311" geometry={nodes.Object1311.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1344" geometry={nodes.Object1344.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1355" geometry={nodes.Object1355.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1356" geometry={nodes.Object1356.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1357" geometry={nodes.Object1357.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1358" geometry={nodes.Object1358.geometry} material={materials['SOLID-DARK_TAN.001']} />
            <mesh name="Object1359" geometry={nodes.Object1359.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1360" geometry={nodes.Object1360.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1361" geometry={nodes.Object1361.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1362" geometry={nodes.Object1362.geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Object1363" geometry={nodes.Object1363.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1364" geometry={nodes.Object1364.geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Object1365" geometry={nodes.Object1365.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1370" geometry={nodes.Object1370.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
            <mesh name="Object1371" geometry={nodes.Object1371.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1374" geometry={nodes.Object1374.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1503" geometry={nodes.Object1503.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1505" geometry={nodes.Object1505.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1507" geometry={nodes.Object1507.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1508" geometry={nodes.Object1508.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1238" geometry={nodes.Object1238.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1239" geometry={nodes.Object1239.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1240" geometry={nodes.Object1240.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1241" geometry={nodes.Object1241.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1242" geometry={nodes.Object1242.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1243" geometry={nodes.Object1243.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1244" geometry={nodes.Object1244.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1246" geometry={nodes.Object1246.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1248" geometry={nodes.Object1248.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1249" geometry={nodes.Object1249.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1250" geometry={nodes.Object1250.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1251" geometry={nodes.Object1251.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1252" geometry={nodes.Object1252.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
            <mesh name="Object1253" geometry={nodes.Object1253.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
            <mesh name="Object1254" geometry={nodes.Object1254.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1255" geometry={nodes.Object1255.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1256" geometry={nodes.Object1256.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1257" geometry={nodes.Object1257.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1258" geometry={nodes.Object1258.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1261" geometry={nodes.Object1261.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1262" geometry={nodes.Object1262.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1263" geometry={nodes.Object1263.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1264" geometry={nodes.Object1264.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1267" geometry={nodes.Object1267.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1268" geometry={nodes.Object1268.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1269" geometry={nodes.Object1269.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1270" geometry={nodes.Object1270.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1271" geometry={nodes.Object1271.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1286" geometry={nodes.Object1286.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1287" geometry={nodes.Object1287.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1318" geometry={nodes.Object1318.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1319" geometry={nodes.Object1319.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1320" geometry={nodes.Object1320.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1321" geometry={nodes.Object1321.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1322" geometry={nodes.Object1322.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1323" geometry={nodes.Object1323.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1324" geometry={nodes.Object1324.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1325" geometry={nodes.Object1325.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1326" geometry={nodes.Object1326.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1327" geometry={nodes.Object1327.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1328" geometry={nodes.Object1328.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1329" geometry={nodes.Object1329.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1366" geometry={nodes.Object1366.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1367" geometry={nodes.Object1367.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1368" geometry={nodes.Object1368.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1369" geometry={nodes.Object1369.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1372" geometry={nodes.Object1372.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1373" geometry={nodes.Object1373.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1375" geometry={nodes.Object1375.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1376" geometry={nodes.Object1376.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1377" geometry={nodes.Object1377.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1378" geometry={nodes.Object1378.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1379" geometry={nodes.Object1379.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1380" geometry={nodes.Object1380.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1532" geometry={nodes.Object1532.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1533" geometry={nodes.Object1533.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1534" geometry={nodes.Object1534.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1535" geometry={nodes.Object1535.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1536" geometry={nodes.Object1536.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1537" geometry={nodes.Object1537.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1538" geometry={nodes.Object1538.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1539" geometry={nodes.Object1539.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1540" geometry={nodes.Object1540.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1541" geometry={nodes.Object1541.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1542" geometry={nodes.Object1542.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1179" geometry={nodes.Object1179.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1180" geometry={nodes.Object1180.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1200" geometry={nodes.Object1200.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1201" geometry={nodes.Object1201.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1291" geometry={nodes.Object1291.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1292" geometry={nodes.Object1292.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1294" geometry={nodes.Object1294.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1295" geometry={nodes.Object1295.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1312" geometry={nodes.Object1312.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1316" geometry={nodes.Object1316.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1317" geometry={nodes.Object1317.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1330" geometry={nodes.Object1330.geometry} material={materials['SOLID-TAN.001']} />
            <mesh name="Object1331" geometry={nodes.Object1331.geometry} material={materials['SOLID-TAN.001']} />
            <mesh name="Object1332" geometry={nodes.Object1332.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1333" geometry={nodes.Object1333.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1334" geometry={nodes.Object1334.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1335" geometry={nodes.Object1335.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1336" geometry={nodes.Object1336.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1337" geometry={nodes.Object1337.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1338" geometry={nodes.Object1338.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1339" geometry={nodes.Object1339.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1340" geometry={nodes.Object1340.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1341" geometry={nodes.Object1341.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1404" geometry={nodes.Object1404.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1405" geometry={nodes.Object1405.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1406" geometry={nodes.Object1406.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1407" geometry={nodes.Object1407.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1408" geometry={nodes.Object1408.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1409" geometry={nodes.Object1409.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1410" geometry={nodes.Object1410.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1411" geometry={nodes.Object1411.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1412" geometry={nodes.Object1412.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1413" geometry={nodes.Object1413.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1414" geometry={nodes.Object1414.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1415" geometry={nodes.Object1415.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1418" geometry={nodes.Object1418.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1419" geometry={nodes.Object1419.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1420" geometry={nodes.Object1420.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1421" geometry={nodes.Object1421.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1436" geometry={nodes.Object1436.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1437" geometry={nodes.Object1437.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1438" geometry={nodes.Object1438.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1439" geometry={nodes.Object1439.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1440" geometry={nodes.Object1440.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1441" geometry={nodes.Object1441.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
            <mesh name="Object1442" geometry={nodes.Object1442.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1443" geometry={nodes.Object1443.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1444" geometry={nodes.Object1444.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1445" geometry={nodes.Object1445.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1446" geometry={nodes.Object1446.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1447" geometry={nodes.Object1447.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1448" geometry={nodes.Object1448.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1449" geometry={nodes.Object1449.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1450" geometry={nodes.Object1450.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1451" geometry={nodes.Object1451.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1452" geometry={nodes.Object1452.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1494" geometry={nodes.Object1494.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1048" geometry={nodes.Object1048.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1049" geometry={nodes.Object1049.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1353" geometry={nodes.Object1353.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1453" geometry={nodes.Object1453.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1454" geometry={nodes.Object1454.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1314" geometry={nodes.Object1314.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1315" geometry={nodes.Object1315.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1342" geometry={nodes.Object1342.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1343" geometry={nodes.Object1343.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1347" geometry={nodes.Object1347.geometry} material={materials['SOLID-DARK_TAN.001']} />
            <mesh name="Object1348" geometry={nodes.Object1348.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object1350" geometry={nodes.Object1350.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object1351" geometry={nodes.Object1351.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1352" geometry={nodes.Object1352.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1354" geometry={nodes.Object1354.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1422" geometry={nodes.Object1422.geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Object989" geometry={nodes.Object989.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1455" geometry={nodes.Object1455.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1456" geometry={nodes.Object1456.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1457" geometry={nodes.Object1457.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1458" geometry={nodes.Object1458.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1046" geometry={nodes.Object1046.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-4459_dot_dat024" geometry={nodes['Part-4459_dot_dat024'].geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Part-4459_dot_dat024_1" geometry={nodes['Part-4459_dot_dat024_1'].geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Part-4459_dot_dat024_2" geometry={nodes['Part-4459_dot_dat024_2'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-4459_dot_dat024_3" geometry={nodes['Part-4459_dot_dat024_3'].geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
            <mesh name="Part-32062_dot_dat008" geometry={nodes['Part-32062_dot_dat008'].geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Part-32062_dot_dat008_1" geometry={nodes['Part-32062_dot_dat008_1'].geometry} material={materials['SOLID-WHITE.001']} />
            <mesh name="Part-32062_dot_dat008_2" geometry={nodes['Part-32062_dot_dat008_2'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-32062_dot_dat008_3" geometry={nodes['Part-32062_dot_dat008_3'].geometry} material={materials['CHROME-GOLD.001']} />
            <mesh name="Part-32062_dot_dat008_4" geometry={nodes['Part-32062_dot_dat008_4'].geometry} material={materials.tras} />
            <mesh name="Part-32062_dot_dat008_5" geometry={nodes['Part-32062_dot_dat008_5'].geometry} material={materials['SOLID-BLACK']} />
            <mesh name="Part-32062_dot_dat008_6" geometry={nodes['Part-32062_dot_dat008_6'].geometry} material={materials['SOLID-LIGHT_GREEN.001']} />
            <mesh name="Part-32062_dot_dat008_7" geometry={nodes['Part-32062_dot_dat008_7'].geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
            <mesh name="Part-32062_dot_dat008_8" geometry={nodes['Part-32062_dot_dat008_8'].geometry} material={materials['SOLID-YELLOW.001']} />
            <mesh name="Part-32062_dot_dat008_9" geometry={nodes['Part-32062_dot_dat008_9'].geometry} material={materials['METAL-CONTACT_ALLOY.001']} />
            <mesh name="Part-32062_dot_dat008_10" geometry={nodes['Part-32062_dot_dat008_10'].geometry} material={materials['SOLID-GREEN.001']} />
            <mesh name="Part-32062_dot_dat008_11" geometry={nodes['Part-32062_dot_dat008_11'].geometry} material={materials['Material.001']} />
            <mesh name="Part-32062_dot_dat008_12" geometry={nodes['Part-32062_dot_dat008_12'].geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Part-95648_dot_dat001" geometry={nodes['Part-95648_dot_dat001'].geometry} material={materials['SOLID-WHITE.001']} />
            <mesh name="Part-95648_dot_dat001_1" geometry={nodes['Part-95648_dot_dat001_1'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-95648_dot_dat001_2" geometry={nodes['Part-95648_dot_dat001_2'].geometry} material={materials['CHROME-GOLD.001']} />
            <mesh name="Part-95648_dot_dat001_3" geometry={nodes['Part-95648_dot_dat001_3'].geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Part-95650_dot_dat001" geometry={nodes['Part-95650_dot_dat001'].geometry} material={materials['SOLID-WHITE.001']} />
            <mesh name="Part-95650_dot_dat001_1" geometry={nodes['Part-95650_dot_dat001_1'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-95650_dot_dat001_2" geometry={nodes['Part-95650_dot_dat001_2'].geometry} material={materials['CHROME-GOLD.001']} />
            <mesh name="Part-95650_dot_dat001_3" geometry={nodes['Part-95650_dot_dat001_3'].geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Part-95650_dot_dat001_4" geometry={nodes['Part-95650_dot_dat001_4'].geometry} material={materials['TRANS-CLEAR.001']} />
            <mesh name="Part-95650_dot_dat001_5" geometry={nodes['Part-95650_dot_dat001_5'].geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Part-95650_dot_dat001_6" geometry={nodes['Part-95650_dot_dat001_6'].geometry} material={materials['METAL-CONTACT_ALLOY.001']} />
            <mesh name="Part-95650_dot_dat001_7" geometry={nodes['Part-95650_dot_dat001_7'].geometry} material={materials['SOLID-BRIGHT_GREEN']} />
            <mesh name="Part-95650_dot_dat001_8" geometry={nodes['Part-95650_dot_dat001_8'].geometry} material={materials['SOLID-LIGHT_BLUE']} />
            <mesh name="Part-95650_dot_dat002" geometry={nodes['Part-95650_dot_dat002'].geometry} material={materials['SOLID-WHITE.001']} />
            <mesh name="Part-95650_dot_dat002_1" geometry={nodes['Part-95650_dot_dat002_1'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-95650_dot_dat002_2" geometry={nodes['Part-95650_dot_dat002_2'].geometry} material={materials['CHROME-GOLD.001']} />
            <mesh name="Part-95650_dot_dat002_3" geometry={nodes['Part-95650_dot_dat002_3'].geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Part-95650_dot_dat002_4" geometry={nodes['Part-95650_dot_dat002_4'].geometry} material={materials['TRANS-CLEAR.001']} />
            <mesh name="Part-95650_dot_dat002_5" geometry={nodes['Part-95650_dot_dat002_5'].geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Part-95650_dot_dat002_6" geometry={nodes['Part-95650_dot_dat002_6'].geometry} material={materials['METAL-CONTACT_ALLOY.001']} />
            <mesh name="Part-95650_dot_dat002_7" geometry={nodes['Part-95650_dot_dat002_7'].geometry} material={materials['SOLID-BRIGHT_GREEN']} />
            <mesh name="Part-95650_dot_dat002_8" geometry={nodes['Part-95650_dot_dat002_8'].geometry} material={materials['SOLID-LIGHT_BLUE']} />
            <mesh name="Part-95650_dot_dat" geometry={nodes['Part-95650_dot_dat'].geometry} material={materials['SOLID-WHITE.001']} />
            <mesh name="Part-95650_dot_dat_1" geometry={nodes['Part-95650_dot_dat_1'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-95650_dot_dat_2" geometry={nodes['Part-95650_dot_dat_2'].geometry} material={materials['CHROME-GOLD.001']} />
            <mesh name="Part-95650_dot_dat_3" geometry={nodes['Part-95650_dot_dat_3'].geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Part-95650_dot_dat_4" geometry={nodes['Part-95650_dot_dat_4'].geometry} material={materials['TRANS-CLEAR.001']} />
            <mesh name="Part-95650_dot_dat_5" geometry={nodes['Part-95650_dot_dat_5'].geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Part-95650_dot_dat_6" geometry={nodes['Part-95650_dot_dat_6'].geometry} material={materials['METAL-CONTACT_ALLOY.001']} />
            <mesh name="Part-95650_dot_dat_7" geometry={nodes['Part-95650_dot_dat_7'].geometry} material={materials['SOLID-BRIGHT_GREEN']} />
            <mesh name="Part-95650_dot_dat_8" geometry={nodes['Part-95650_dot_dat_8'].geometry} material={materials['SOLID-LIGHT_BLUE']} />
            <mesh name="Part-99455_dot_dat002" geometry={nodes['Part-99455_dot_dat002'].geometry} material={materials['SOLID-WHITE.001']} />
            <mesh name="Part-99455_dot_dat002_1" geometry={nodes['Part-99455_dot_dat002_1'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-99455_dot_dat002_2" geometry={nodes['Part-99455_dot_dat002_2'].geometry} material={materials['CHROME-GOLD.001']} />
            <mesh name="Part-99455_dot_dat002_3" geometry={nodes['Part-99455_dot_dat002_3'].geometry} material={materials['MILKY-WHITE.001']} />
            <mesh name="Part-99455_dot_dat002_4" geometry={nodes['Part-99455_dot_dat002_4'].geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Part-95658_dot_dat002" geometry={nodes['Part-95658_dot_dat002'].geometry} material={materials['SOLID-WHITE.001']} />
            <mesh name="Part-95658_dot_dat002_1" geometry={nodes['Part-95658_dot_dat002_1'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-95658_dot_dat002_2" geometry={nodes['Part-95658_dot_dat002_2'].geometry} material={materials['CHROME-GOLD.001']} />
            <mesh name="Part-95658_dot_dat002_3" geometry={nodes['Part-95658_dot_dat002_3'].geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Part-95658_dot_dat001" geometry={nodes['Part-95658_dot_dat001'].geometry} material={materials['SOLID-WHITE.001']} />
            <mesh name="Part-95658_dot_dat001_1" geometry={nodes['Part-95658_dot_dat001_1'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-95658_dot_dat001_2" geometry={nodes['Part-95658_dot_dat001_2'].geometry} material={materials['CHROME-GOLD.001']} />
            <mesh name="Part-95658_dot_dat001_3" geometry={nodes['Part-95658_dot_dat001_3'].geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Part-99455_dot_dat001" geometry={nodes['Part-99455_dot_dat001'].geometry} material={materials['SOLID-WHITE.001']} />
            <mesh name="Part-99455_dot_dat001_1" geometry={nodes['Part-99455_dot_dat001_1'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-99455_dot_dat001_2" geometry={nodes['Part-99455_dot_dat001_2'].geometry} material={materials['CHROME-GOLD.001']} />
            <mesh name="Part-99455_dot_dat001_3" geometry={nodes['Part-99455_dot_dat001_3'].geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Part-99455_dot_dat001_4" geometry={nodes['Part-99455_dot_dat001_4'].geometry} material={materials['SOLID-GREEN.001']} />
            <mesh name="Part-43093_dot_dat015" geometry={nodes['Part-43093_dot_dat015'].geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Part-43093_dot_dat015_1" geometry={nodes['Part-43093_dot_dat015_1'].geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Part-43093_dot_dat015_2" geometry={nodes['Part-43093_dot_dat015_2'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-43093_dot_dat015_3" geometry={nodes['Part-43093_dot_dat015_3'].geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
            <mesh name="Part-86652c01_dot_dat002" geometry={nodes['Part-86652c01_dot_dat002'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-86652c01_dot_dat002_1" geometry={nodes['Part-86652c01_dot_dat002_1'].geometry} material={materials['RUBBER-BLACK.001']} />
            <mesh name="Part-86652c01_dot_dat001" geometry={nodes['Part-86652c01_dot_dat001'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-86652c01_dot_dat001_1" geometry={nodes['Part-86652c01_dot_dat001_1'].geometry} material={materials['RUBBER-BLACK.001']} />
            <mesh name="Part-4459_dot_dat090" geometry={nodes['Part-4459_dot_dat090'].geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Part-4459_dot_dat090_1" geometry={nodes['Part-4459_dot_dat090_1'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-4459_dot_dat090_2" geometry={nodes['Part-4459_dot_dat090_2'].geometry} material={materials['SOLID-BLACK']} />
            <mesh name="Part-4459_dot_dat090_3" geometry={nodes['Part-4459_dot_dat090_3'].geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Part-4459_dot_dat090_4" geometry={nodes['Part-4459_dot_dat090_4'].geometry} material={materials['SOLID-RED.001']} />
            <mesh name="Part-4459_dot_dat090_5" geometry={nodes['Part-4459_dot_dat090_5'].geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
            <mesh name="Part-4459_dot_dat124" geometry={nodes['Part-4459_dot_dat124'].geometry} material={materials['SOLID-BLACK.001']} />
            <mesh name="Part-4459_dot_dat124_1" geometry={nodes['Part-4459_dot_dat124_1'].geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Part-4459_dot_dat124_2" geometry={nodes['Part-4459_dot_dat124_2'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-4459_dot_dat124_3" geometry={nodes['Part-4459_dot_dat124_3'].geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
        </group>
    )
}

useGLTF.preload('/src/assets/CAD_models/FLL_Robot.glb')