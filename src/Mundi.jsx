/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/Mundi.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import useScrollAnimation from './hooks/scrollAnimation'
export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Mundi.glb')
  const { actions } = useAnimations(animations, group)
  const setReft = useScrollAnimation(animations,10)
  return (
    <group ref={setReft} {...props} dispose={null} scale={[0.7,0.7,0.7]}>
      <group name="Scene">
        <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Material.001']} rotation={[0, -0.29, 0]} scale={3.73} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.004']} position={[-0.88, 1.09, 3.32]} rotation={[1.27, -0.08, 0.25]} scale={[0.19, 0.6, 0.19]} />
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.Material} position={[-0.71, 2.74, 2.51]} rotation={[0.83, -0.17, 0.19]} scale={[0.19, 0.83, 0.19]} />
        <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials.Material} position={[-1, 3.24, 1.38]} rotation={[0.74, -0.54, 0.3]} scale={[0.19, 0.8, 0.19]} />
        <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials.Material} position={[-2.81, -0.04, 2.27]} rotation={[1.58, -0.01, 0.89]} scale={[0.19, 5.21, 0.19]} />
        <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.Material} position={[-3.45, 0.97, 0.2]} rotation={[1.78, -0.4, 1.62]} scale={[0.19, 6.04, 0.19]} />
        <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials['Material.004']} position={[-1.89, 2.83, 1.23]} rotation={[0.97, -0.73, 0.77]} scale={[0.19, 0.78, 0.19]} />
        <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials['Material.004']} position={[-3.4, 0.14, 0.63]} rotation={[1.58, 0, 0.95]} scale={[0.25, 0.06, 0.25]} />
        <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials.Material} position={[-1.26, 3.4, -0.04]} rotation={[0.12, -0.3, 0.33]} scale={[0.27, 0.6, 0.27]} />
        <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.Material} position={[-1.66, 2.92, -1.38]} rotation={[-0.11, -0.64, 0.8]} scale={[0.27, 0.37, 0.27]} />
        <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.Material} position={[-3.48, 0.49, -0.62]} rotation={[1.47, -0.15, 1.75]} scale={[0.27, 4.05, 0.27]} />
        <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials.Material} position={[-0.77, 2.97, -1.91]} rotation={[2.58, -0.2, 2.92]} scale={[0.2, 5.75, 0.2]} />
        <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials['Material.004']} position={[-2.95, 0.48, -2.1]} rotation={[1.96, 0.11, 2.15]} scale={[0.19, 0.5, 0.19]} />
        <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials['Material.004']} position={[-1.76, 1.36, -2.83]} rotation={[1.88, -0.2, 2.53]} scale={[0.25, 0.41, 0.25]} />
        <mesh name="Cube013" geometry={nodes.Cube013.geometry} material={materials['Material.004']} position={[-2.29, 2.96, -0.41]} rotation={[1.08, -0.71, 1.12]} scale={[0.19, 0.4, 0.19]} />
        <mesh name="Cube014" geometry={nodes.Cube014.geometry} material={materials.Material} position={[-3.39, 0.35, 1.25]} rotation={[0.53, 0.13, 1.29]} scale={[0.19, 4.62, 0.19]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Mundi.glb')
