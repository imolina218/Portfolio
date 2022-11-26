import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Computer({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/Computer.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.01, -6]}>
        <mesh geometry={nodes.Cube006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials['Black base']} />
        <mesh geometry={nodes.Cube006_2.geometry} material={materials.Aluminum} />
        <mesh geometry={nodes.Cube006_3.geometry} material={materials.Desktop01} />
        <mesh geometry={nodes.Cube006_4.geometry} material={materials.Desktop02} />
      </group>
    </group>
  )
}