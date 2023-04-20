/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ../public/deliveryScene/car.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ModelCar(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/deliveryScene/car.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model002" position={[26.11, 1.62, 27.65]} rotation={[-Math.PI / 2, 0, 3.07]} scale={0.5}>
          <group name="Mercedes_Sprinter_2006_pt2c4dfbx001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2001">
              <group name="RootNode001">
                <group name="Autre001" position={[26.64, 0.98, 150.14]}>
                  <mesh name="Autre_Autre_0" geometry={nodes.Autre_Autre_0.geometry} material={materials.Autre} />
                </group>
                <group name="Carrosserie001" position={[66.01, -39.71, 157.12]}>
                  <mesh name="Carrosserie_Carrosserie_0" geometry={nodes.Carrosserie_Carrosserie_0.geometry} material={materials.Carrosserie} />
                </group>
                <group name="Carrosserie_5001" position={[66.01, -39.71, 157.12]}>
                  <mesh name="Carrosserie_5_Carrosserie_5_0" geometry={nodes.Carrosserie_5_Carrosserie_5_0.geometry} material={materials.Carrosserie_5} />
                </group>
                <group name="Chassis001" position={[26.64, 0.98, 150.14]}>
                  <mesh name="Chassis_Chassis_0" geometry={nodes.Chassis_Chassis_0.geometry} material={materials.Chassis} />
                </group>
                <group name="Chassis_2001" position={[26.64, 0.98, 150.14]}>
                  <mesh name="Chassis_2_Chassis_2_0" geometry={nodes.Chassis_2_Chassis_2_0.geometry} material={materials.Chassis_2} />
                </group>
                <group name="Interieur001" position={[53.18, 6.23, 148.02]}>
                  <mesh name="Interieur_Interrieur_0" geometry={nodes.Interieur_Interrieur_0.geometry} material={materials.Interrieur} />
                </group>
                <group name="Phare001" position={[26.64, 0.98, 150.14]}>
                  <mesh name="Phare_Phare_0" geometry={nodes.Phare_Phare_0.geometry} material={materials.Phare} />
                </group>
                <group name="Porte_1001" position={[-110.79, -7.88, -376.38]} rotation={[-Math.PI, 1.31, -Math.PI]}>
                  <mesh name="Porte_1__0" geometry={nodes.Porte_1__0.geometry} material={materials.Porte_2__0} position={[-1.07, 0, 0.79]} rotation={[Math.PI, -1.27, Math.PI]} />
                  <mesh name="Porte_1_Autre_0" geometry={nodes.Porte_1_Autre_0.geometry} material={materials.Autre} rotation={[Math.PI, -1.12, Math.PI]} />
                  <mesh name="Porte_1_Carrosserie_0" geometry={nodes.Porte_1_Carrosserie_0.geometry} material={materials.Carrosserie} position={[-0.34, 1.83, -1.58]} rotation={[Math.PI, -1.27, Math.PI]} />
                  <mesh name="Porte_1_Interrieur_0" geometry={nodes.Porte_1_Interrieur_0.geometry} material={materials.Interrieur} position={[-1.07, 0, 0.79]} rotation={[Math.PI, -1.27, Math.PI]} />
                </group>
                <group name="Porte_2001" position={[104.9, -7.88, -377.94]} rotation={[Math.PI, -1.4, Math.PI]}>
                  <mesh name="Porte_2__0" geometry={nodes.Porte_2__0.geometry} material={materials.Porte_2__0} rotation={[-Math.PI, 1.21, -Math.PI]} />
                  <mesh name="Porte_2_Autre_0" geometry={nodes.Porte_2_Autre_0.geometry} material={materials.Autre} rotation={[-Math.PI, 1.21, -Math.PI]} />
                  <mesh name="Porte_2_Carrosserie_0" geometry={nodes.Porte_2_Carrosserie_0.geometry} material={materials.Carrosserie} rotation={[-Math.PI, 1.27, -Math.PI]} />
                  <mesh name="Porte_2_Interrieur_0" geometry={nodes.Porte_2_Interrieur_0.geometry} material={materials.Interrieur} rotation={[-Math.PI, 1.27, -Math.PI]} />
                </group>
                <group name="Porte_avnt_1001" position={[129.72, -16.74, 228.3]} rotation={[0, -1.48, 0]}>
                  <mesh name="Porte_avnt_1_Autre_0" geometry={nodes.Porte_avnt_1_Autre_0.geometry} material={materials.Autre} rotation={[0, 1.44, 0]} />
                  <mesh name="Porte_avnt_1_Carrosserie_0" geometry={nodes.Porte_avnt_1_Carrosserie_0.geometry} material={materials.Carrosserie} rotation={[0, 1.44, 0]} />
                  <mesh name="Porte_avnt_1_Chassis_0" geometry={nodes.Porte_avnt_1_Chassis_0.geometry} material={materials.Chassis} rotation={[0, 1.45, 0]} />
                  <mesh name="Porte_avnt_1_Interrieur_0" geometry={nodes.Porte_avnt_1_Interrieur_0.geometry} material={materials.Interrieur} rotation={[0, 1.44, 0]} />
                  <mesh name="Porte_avnt_1_Vitre_0" geometry={nodes.Porte_avnt_1_Vitre_0.geometry} material={materials.Vitre} rotation={[0, 1.44, 0]} />
                </group>
                <group name="Porte_avnt_2001" position={[-134.3, -16.74, 228.3]} rotation={[0, 1.48, 0]}>
                  <mesh name="Porte_avnt_2_Autre_0" geometry={nodes.Porte_avnt_2_Autre_0.geometry} material={materials.Autre} rotation={[0, -1.46, 0]} />
                  <mesh name="Porte_avnt_2_Carrosserie_0" geometry={nodes.Porte_avnt_2_Carrosserie_0.geometry} material={materials.Carrosserie} rotation={[0, -1.46, 0]} />
                  <mesh name="Porte_avnt_2_Chassis_0" geometry={nodes.Porte_avnt_2_Chassis_0.geometry} material={materials.Chassis} rotation={[0, -1.47, 0]} />
                  <mesh name="Porte_avnt_2_Interrieur_0" geometry={nodes.Porte_avnt_2_Interrieur_0.geometry} material={materials.Interrieur} rotation={[0, -1.46, 0]} />
                  <mesh name="Porte_avnt_2_Vitre_0" geometry={nodes.Porte_avnt_2_Vitre_0.geometry} material={materials.Vitre} rotation={[0, -1.46, 0]} />
                </group>
                <group name="Symmetry001">
                  <group name="Null" position={[110.11, -124.87, 16.2]} rotation={[1.83, 0, -Math.PI / 2]}>
                    <group name="Cylinder001" position={[-237.63, 2.46, -65.7]}>
                      <mesh name="Cylinder_Mat_0" geometry={nodes.Cylinder_Mat_0.geometry} material={materials.material} />
                    </group>
                    <group name="Cylinder_1" position={[237.63, 2.46, 65.7]}>
                      <mesh name="Cylinder_1_Mat_0" geometry={nodes.Cylinder_1_Mat_0.geometry} material={materials.material} />
                    </group>
                  </group>
                </group>
                <group name="Vitre001" position={[41.18, -6.27, 81.94]}>
                  <mesh name="Vitre_Vitre_0" geometry={nodes.Vitre_Vitre_0.geometry} material={materials.Vitre} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Material2002" position={[24.84, -2.58, -2.53]} rotation={[-Math.PI / 2, 0.04, 0]} scale={0.02} />
        <group name="Material2005" position={[24.84, -2.58, -2.53]} rotation={[-Math.PI / 2, 0.04, 0]} scale={0.02} />
        <group name="SketchUp" position={[24.84, -2.58, -2.53]} rotation={[-Math.PI / 2, 0.04, 0]} scale={0.02}>
          <group name="skp_camera_Last_Saved_SketchUp_View" position={[307.06, -2238.35, 334.48]} rotation={[1.26, 0.47, 0.14]}>
            <group name="ID1" />
          </group>
        </group>
        <group name="Object_2" position={[-2.48, 1.83, 56.99]} rotation={[1.57, -0.04, 0.04]} scale={0.01}>
          <group name="RootNode">
            <group name="Autre" position={[26.64, 0.98, 150.14]} />
            <group name="Carrosserie" position={[66.01, -39.71, 157.12]} />
            <group name="Carrosserie_5" position={[66.01, -39.71, 157.12]} />
            <group name="Chassis" position={[26.64, 0.98, 150.14]} />
            <group name="Chassis_2" position={[26.64, 0.98, 150.14]} />
            <group name="Interieur" position={[53.18, 6.23, 148.02]} />
            <group name="Phare" position={[26.64, 0.98, 150.14]} />
            <group name="Porte_1" position={[-110.79, -7.88, -376.39]} />
            <group name="Porte_2" position={[104.9, -7.88, -377.94]} />
            <group name="Porte_avnt_1" position={[129.72, -16.74, 228.3]} />
            <group name="Porte_avnt_2" position={[-134.31, -16.74, 228.3]} />
            <group name="Symmetry" />
            <group name="Vitre" position={[41.18, -6.27, 81.93]} />
          </group>
        </group>
        <mesh name="Material2" geometry={nodes.Material2.geometry} material={materials.Grass_0} position={[24.84, -2.36, -2.65]} rotation={[-Math.PI / 2, 0.04, 0]} scale={0.02} />
        <mesh name="Material2001" geometry={nodes.Material2001.geometry} material={materials.RoadLines} position={[24.84, -2.36, -2.65]} rotation={[-Math.PI / 2, 0.04, 0]} scale={0.02} />
        <mesh name="Material2003" geometry={nodes.Material2003.geometry} material={materials.Asphalt04} position={[24.84, -2.33, -2.65]} rotation={[-Math.PI / 2, 0.03, 0]} scale={0.02} />
        <mesh name="Material2004" geometry={nodes.Material2004.geometry} material={materials['material.001']} position={[24.84, -2.58, -2.53]} rotation={[-Math.PI / 2, 0.04, 0]} scale={0.02} />
        <mesh name="Material3" geometry={nodes.Material3.geometry} material={materials.material_0} position={[24.84, -2.58, -2.53]} rotation={[-Math.PI / 2, 0.04, 0]} scale={0.02} />
      </group>
    </group>
  )
}

useGLTF.preload('/car.gltf')