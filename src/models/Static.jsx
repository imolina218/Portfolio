import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function StaticObjects({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/StaticObjects.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1.21, 0.79, -0.01]} rotation={[Math.PI, -0.98, Math.PI]} scale={0.03}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials.GreenApple} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials.Branch} />
      </group>
      <group position={[1.09, 0.79, 0.17]} rotation={[Math.PI, -0.98, Math.PI]} scale={0.03}>
        <mesh geometry={nodes.Sphere001.geometry} material={materials.RedApple} />
        <mesh geometry={nodes.Sphere001_1.geometry} material={materials.Branch} />
      </group>
      <group position={[0.41, 0.78, 0.11]}>
        <mesh geometry={nodes.Mug_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Mug_0_1.geometry} material={materials.Coffe} />
      </group>
      <mesh geometry={nodes.IronManHelmet.geometry} material={materials['White metal boxes']} position={[0.18, 1.11, 0.04]} />
      <group position={[1.06, 0.78, 0.08]}>
        <mesh geometry={nodes.Mesh004.geometry} material={materials['Mat.1']} />
        <mesh geometry={nodes.Mesh004_1.geometry} material={materials.Mat} />
      </group>
      <group position={[0.32, 0.77, 0.04]} rotation={[-Math.PI, 0.82, -Math.PI]} scale={[0.02, 0.01, 0.03]}>
        <mesh geometry={nodes.Cube005.geometry} material={materials.gold} />
        <mesh geometry={nodes.Cube005_1.geometry} material={materials.RedGem} />
      </group>
      <mesh geometry={nodes.Cube001_Cube002.geometry} material={materials['AT-AT']} position={[0.14, 0.785, -0.25]} rotation={[Math.PI / 2, 0, 2.71]} scale={0.03} />
    </group>
  )
}