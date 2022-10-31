import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Chair({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/Chair.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.mesh_chair_01.geometry} material={materials['Black resin']} position={[0.81, 0.07, -0.14]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.12} />
    </group>
  )
}