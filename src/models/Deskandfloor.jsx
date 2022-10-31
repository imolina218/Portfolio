import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function DeskAndFloor({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/DeskAndFloor.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh /* receiveShadow */ geometry={nodes.Floor.geometry} material={materials.Desktop} position={[2, 0.05, 13]} scale={40} />
      <mesh /* castShadow */ geometry={nodes.Desk.geometry} material={materials.Desktop} />
    </group>
  )
}