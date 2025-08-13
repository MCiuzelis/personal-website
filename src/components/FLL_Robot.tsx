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
    const { nodes, materials } = useGLTF('/CAD_models/FLL_Robot.glb') as GLTF & {
        nodes: Record<string, THREE.Mesh>
        materials: Record<string, THREE.Material>
    }

    const explosionSequence: ExplosionStep[] = [
        {
            parts: [
                { name: 'front', move: [0, 0, 2] },
                { name: 'left', move: [2.5, 0, 0] },
                { name: 'right', move: [-2.5, 0, 0] },
                { name: 'top', move: [0, 1.5, 0] },
                { name: 'brick', move: [0, 1.5, 0] }
            ]
        },
        {
            parts: [
                { name: 'left', move: [0, -2, 0] },
                { name: 'right', move: [0, -2, 0] },
                { name: 'front', move: [0, -2, 0] },
                { name: 'top', move: [0, 0, -3] },
                { name: 'brick', move: [0, 0, -4] }
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
            <group ref = {getGroupRef('front')} name="Front">
                <mesh name="Object1400" geometry={nodes.Object1400.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1401" geometry={nodes.Object1401.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1402" geometry={nodes.Object1402.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1403" geometry={nodes.Object1403.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1424" geometry={nodes.Object1424.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1425" geometry={nodes.Object1425.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1426" geometry={nodes.Object1426.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1459" geometry={nodes.Object1459.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1460" geometry={nodes.Object1460.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1461" geometry={nodes.Object1461.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1462" geometry={nodes.Object1462.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1463" geometry={nodes.Object1463.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1464" geometry={nodes.Object1464.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1465" geometry={nodes.Object1465.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1466" geometry={nodes.Object1466.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1467" geometry={nodes.Object1467.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1468" geometry={nodes.Object1468.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1469" geometry={nodes.Object1469.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1470" geometry={nodes.Object1470.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1471" geometry={nodes.Object1471.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1472" geometry={nodes.Object1472.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1473" geometry={nodes.Object1473.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1474" geometry={nodes.Object1474.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1475" geometry={nodes.Object1475.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1476" geometry={nodes.Object1476.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1477" geometry={nodes.Object1477.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1478" geometry={nodes.Object1478.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1479" geometry={nodes.Object1479.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1480" geometry={nodes.Object1480.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1481" geometry={nodes.Object1481.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1482" geometry={nodes.Object1482.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1483" geometry={nodes.Object1483.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1484" geometry={nodes.Object1484.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1485" geometry={nodes.Object1485.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1486" geometry={nodes.Object1486.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1487" geometry={nodes.Object1487.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1488" geometry={nodes.Object1488.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1489" geometry={nodes.Object1489.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1490" geometry={nodes.Object1490.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1491" geometry={nodes.Object1491.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1492" geometry={nodes.Object1492.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1493" geometry={nodes.Object1493.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1495" geometry={nodes.Object1495.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1496" geometry={nodes.Object1496.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1497" geometry={nodes.Object1497.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1498" geometry={nodes.Object1498.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1499" geometry={nodes.Object1499.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1500" geometry={nodes.Object1500.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1501" geometry={nodes.Object1501.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1502" geometry={nodes.Object1502.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1504" geometry={nodes.Object1504.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1506" geometry={nodes.Object1506.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1509" geometry={nodes.Object1509.geometry} material={materials['SOLID-RED.001']}/>
                <mesh name="Object1510" geometry={nodes.Object1510.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1511" geometry={nodes.Object1511.geometry} material={materials['SOLID-RED.001']}/>
                <mesh name="Object1512" geometry={nodes.Object1512.geometry} material={materials['SOLID-RED.001']}/>
                <mesh name="Object1513" geometry={nodes.Object1513.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1514" geometry={nodes.Object1514.geometry} material={materials['SOLID-RED.001']}/>
                <mesh name="Object1515" geometry={nodes.Object1515.geometry} material={materials['SOLID-BLACK']}/>
            </group>
            <group ref = {getGroupRef('right')} name="Right">
                <mesh name="Object1158" geometry={nodes.Object1158.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1161" geometry={nodes.Object1161.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1162" geometry={nodes.Object1162.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1163" geometry={nodes.Object1163.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1164" geometry={nodes.Object1164.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1165" geometry={nodes.Object1165.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1166" geometry={nodes.Object1166.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1167" geometry={nodes.Object1167.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1168" geometry={nodes.Object1168.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1169" geometry={nodes.Object1169.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1170" geometry={nodes.Object1170.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1171" geometry={nodes.Object1171.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1172" geometry={nodes.Object1172.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1173" geometry={nodes.Object1173.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1174" geometry={nodes.Object1174.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1175" geometry={nodes.Object1175.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1176" geometry={nodes.Object1176.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1177" geometry={nodes.Object1177.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1178" geometry={nodes.Object1178.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1179" geometry={nodes.Object1179.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1180" geometry={nodes.Object1180.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1202" geometry={nodes.Object1202.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1203" geometry={nodes.Object1203.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1204" geometry={nodes.Object1204.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1205" geometry={nodes.Object1205.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1206" geometry={nodes.Object1206.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1207" geometry={nodes.Object1207.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1208" geometry={nodes.Object1208.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1209" geometry={nodes.Object1209.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1210" geometry={nodes.Object1210.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1211" geometry={nodes.Object1211.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1212" geometry={nodes.Object1212.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1224" geometry={nodes.Object1224.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1225" geometry={nodes.Object1225.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1226" geometry={nodes.Object1226.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1227" geometry={nodes.Object1227.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1228" geometry={nodes.Object1228.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1229" geometry={nodes.Object1229.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1230" geometry={nodes.Object1230.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1236" geometry={nodes.Object1236.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1245" geometry={nodes.Object1245.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1259" geometry={nodes.Object1259.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1265" geometry={nodes.Object1265.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1296" geometry={nodes.Object1296.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1297" geometry={nodes.Object1297.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1302" geometry={nodes.Object1302.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1303" geometry={nodes.Object1303.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1305" geometry={nodes.Object1305.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1306" geometry={nodes.Object1306.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1307" geometry={nodes.Object1307.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1393" geometry={nodes.Object1393.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1427" geometry={nodes.Object1427.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1428" geometry={nodes.Object1428.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1429" geometry={nodes.Object1429.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1433" geometry={nodes.Object1433.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1526" geometry={nodes.Object1526.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1527" geometry={nodes.Object1527.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1528" geometry={nodes.Object1528.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1529" geometry={nodes.Object1529.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1551" geometry={nodes.Object1551.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1552" geometry={nodes.Object1552.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1553" geometry={nodes.Object1553.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1554" geometry={nodes.Object1554.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1555" geometry={nodes.Object1555.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1556" geometry={nodes.Object1556.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1557" geometry={nodes.Object1557.geometry} material={materials['SOLID-BLACK.001']}/>
            </group>
            <group ref = {getGroupRef('left')} name="Left">
                <mesh name="Object1181" geometry={nodes.Object1181.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1182" geometry={nodes.Object1182.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1183" geometry={nodes.Object1183.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1184" geometry={nodes.Object1184.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1185" geometry={nodes.Object1185.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1186" geometry={nodes.Object1186.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1187" geometry={nodes.Object1187.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1188" geometry={nodes.Object1188.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1189" geometry={nodes.Object1189.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1190" geometry={nodes.Object1190.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1191" geometry={nodes.Object1191.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1192" geometry={nodes.Object1192.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1193" geometry={nodes.Object1193.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1194" geometry={nodes.Object1194.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1195" geometry={nodes.Object1195.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1196" geometry={nodes.Object1196.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1197" geometry={nodes.Object1197.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1198" geometry={nodes.Object1198.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1199" geometry={nodes.Object1199.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1200" geometry={nodes.Object1200.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1201" geometry={nodes.Object1201.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1213" geometry={nodes.Object1213.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1214" geometry={nodes.Object1214.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1215" geometry={nodes.Object1215.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1216" geometry={nodes.Object1216.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1217" geometry={nodes.Object1217.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1218" geometry={nodes.Object1218.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1219" geometry={nodes.Object1219.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1220" geometry={nodes.Object1220.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1221" geometry={nodes.Object1221.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1222" geometry={nodes.Object1222.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1223" geometry={nodes.Object1223.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1231" geometry={nodes.Object1231.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1232" geometry={nodes.Object1232.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1233" geometry={nodes.Object1233.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1234" geometry={nodes.Object1234.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1235" geometry={nodes.Object1235.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1237" geometry={nodes.Object1237.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1247" geometry={nodes.Object1247.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1260" geometry={nodes.Object1260.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1266" geometry={nodes.Object1266.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1298" geometry={nodes.Object1298.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1299" geometry={nodes.Object1299.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1300" geometry={nodes.Object1300.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1301" geometry={nodes.Object1301.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1304" geometry={nodes.Object1304.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1308" geometry={nodes.Object1308.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1309" geometry={nodes.Object1309.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1392" geometry={nodes.Object1392.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1430" geometry={nodes.Object1430.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1431" geometry={nodes.Object1431.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1432" geometry={nodes.Object1432.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1434" geometry={nodes.Object1434.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1524" geometry={nodes.Object1524.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1525" geometry={nodes.Object1525.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1530" geometry={nodes.Object1530.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1531" geometry={nodes.Object1531.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1543" geometry={nodes.Object1543.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1544" geometry={nodes.Object1544.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1545" geometry={nodes.Object1545.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1546" geometry={nodes.Object1546.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1547" geometry={nodes.Object1547.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1548" geometry={nodes.Object1548.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1549" geometry={nodes.Object1549.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1550" geometry={nodes.Object1550.geometry} material={materials['SOLID-BLACK.001']}/>
            </group>
            <group ref = {getGroupRef('brick')} name="Brick">
                <group name="Object1381">
                    <mesh name="Part-95646_dot_dat002" geometry={nodes['Part-95646_dot_dat002'].geometry} material={materials['SOLID-WHITE.001']} />
                    <mesh name="Part-95646_dot_dat002_1" geometry={nodes['Part-95646_dot_dat002_1'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
                    <mesh name="Part-95646_dot_dat002_2" geometry={nodes['Part-95646_dot_dat002_2'].geometry} material={materials['CHROME-GOLD.001']} />
                    <mesh name="Part-95646_dot_dat002_3" geometry={nodes['Part-95646_dot_dat002_3'].geometry} material={materials['SOLID-RED.001']} />
                    <mesh name="Part-95646_dot_dat002_4" geometry={nodes['Part-95646_dot_dat002_4'].geometry} material={materials.tras} />
                    <mesh name="Part-95646_dot_dat002_5" geometry={nodes['Part-95646_dot_dat002_5'].geometry} material={materials['SOLID-BLACK']} />
                    <mesh name="Part-95646_dot_dat002_6" geometry={nodes['Part-95646_dot_dat002_6'].geometry} material={materials['SOLID-LIGHT_GREEN.001']} />
                    <mesh name="Part-95646_dot_dat002_7" geometry={nodes['Part-95646_dot_dat002_7'].geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']} />
                    <mesh name="Part-95646_dot_dat002_8" geometry={nodes['Part-95646_dot_dat002_8'].geometry} material={materials['SOLID-WHITE.001']} />
                    <mesh name="Part-95646_dot_dat002_9" geometry={nodes['Part-95646_dot_dat002_9'].geometry} material={materials['SOLID-YELLOW.001']} />
                    <mesh name="Part-95646_dot_dat002_10" geometry={nodes['Part-95646_dot_dat002_10'].geometry} material={materials['METAL-CONTACT_ALLOY.001']} />
                    <mesh name="Part-95646_dot_dat002_11" geometry={nodes['Part-95646_dot_dat002_11'].geometry} material={materials['SOLID-GREEN.001']} />
                    <mesh name="Part-95646_dot_dat002_12" geometry={nodes['Part-95646_dot_dat002_12'].geometry} material={materials['Material.001']} />
                </group>
                <mesh name="Object1382" geometry={nodes.Object1382.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1383" geometry={nodes.Object1383.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1384" geometry={nodes.Object1384.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1385" geometry={nodes.Object1385.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1386" geometry={nodes.Object1386.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1387" geometry={nodes.Object1387.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1388" geometry={nodes.Object1388.geometry} material={materials['SOLID-RED.001']}/>
                <mesh name="Object1389" geometry={nodes.Object1389.geometry} material={materials['SOLID-RED.001']}/>
            </group>
            <group ref = {getGroupRef('top')} name="Top">
                <mesh name="Object1109" geometry={nodes.Object1109.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1110" geometry={nodes.Object1110.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1115" geometry={nodes.Object1115.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1116" geometry={nodes.Object1116.geometry} material={materials['SOLID-DARK_BLUISH_GRAY.002']}/>
                <mesh name="Object1117" geometry={nodes.Object1117.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1118" geometry={nodes.Object1118.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1119" geometry={nodes.Object1119.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1120" geometry={nodes.Object1120.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1121" geometry={nodes.Object1121.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1122" geometry={nodes.Object1122.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1123" geometry={nodes.Object1123.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1124" geometry={nodes.Object1124.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1125" geometry={nodes.Object1125.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1127" geometry={nodes.Object1127.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1128" geometry={nodes.Object1128.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1129" geometry={nodes.Object1129.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1130" geometry={nodes.Object1130.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1131" geometry={nodes.Object1131.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1132" geometry={nodes.Object1132.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1133" geometry={nodes.Object1133.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1134" geometry={nodes.Object1134.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1135" geometry={nodes.Object1135.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1136" geometry={nodes.Object1136.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1137" geometry={nodes.Object1137.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1138" geometry={nodes.Object1138.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1139" geometry={nodes.Object1139.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1141" geometry={nodes.Object1141.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1142" geometry={nodes.Object1142.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1143" geometry={nodes.Object1143.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1144" geometry={nodes.Object1144.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1145" geometry={nodes.Object1145.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1146" geometry={nodes.Object1146.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1147" geometry={nodes.Object1147.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1148" geometry={nodes.Object1148.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1149" geometry={nodes.Object1149.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1150" geometry={nodes.Object1150.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1151" geometry={nodes.Object1151.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1152" geometry={nodes.Object1152.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1153" geometry={nodes.Object1153.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1154" geometry={nodes.Object1154.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1155" geometry={nodes.Object1155.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1156" geometry={nodes.Object1156.geometry} material={materials['SOLID-BLUE.001']}/>
                <mesh name="Object1157" geometry={nodes.Object1157.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1272" geometry={nodes.Object1272.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1273" geometry={nodes.Object1273.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1344" geometry={nodes.Object1344.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1345" geometry={nodes.Object1345.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1346" geometry={nodes.Object1346.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1390" geometry={nodes.Object1390.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1391" geometry={nodes.Object1391.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1394" geometry={nodes.Object1394.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1395" geometry={nodes.Object1395.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1396" geometry={nodes.Object1396.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1397" geometry={nodes.Object1397.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1398" geometry={nodes.Object1398.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1399" geometry={nodes.Object1399.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1516" geometry={nodes.Object1516.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1517" geometry={nodes.Object1517.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1518" geometry={nodes.Object1518.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1519" geometry={nodes.Object1519.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']}/>
                <mesh name="Object1520" geometry={nodes.Object1520.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1521" geometry={nodes.Object1521.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1522" geometry={nodes.Object1522.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1523" geometry={nodes.Object1523.geometry} material={materials['SOLID-BLACK.001']}/>
                <mesh name="Object1140" geometry={nodes.Object1140.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            </group>
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
            <mesh name="Object1423" geometry={nodes.Object1423.geometry} material={materials['SOLID-BLUE.001']} />
            <mesh name="Object989" geometry={nodes.Object989.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1455" geometry={nodes.Object1455.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1456" geometry={nodes.Object1456.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1457" geometry={nodes.Object1457.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1458" geometry={nodes.Object1458.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Object1046" geometry={nodes.Object1046.geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
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
            <mesh name="Part-86652c01_dot_dat002" geometry={nodes['Part-86652c01_dot_dat002'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-86652c01_dot_dat002_1" geometry={nodes['Part-86652c01_dot_dat002_1'].geometry} material={materials['RUBBER-BLACK.001']} />
            <mesh name="Part-86652c01_dot_dat001" geometry={nodes['Part-86652c01_dot_dat001'].geometry} material={materials['SOLID-LIGHT_BLUISH_GRAY.001']} />
            <mesh name="Part-86652c01_dot_dat001_1" geometry={nodes['Part-86652c01_dot_dat001_1'].geometry} material={materials['RUBBER-BLACK.001']} />
        </group>
    )
}

useGLTF.preload('/CAD_models/FLL_Robot.glb')