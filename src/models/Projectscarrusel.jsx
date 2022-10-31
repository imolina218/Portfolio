import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/Projects.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1.92, 1, -0.67]} rotation={props.customRotations.rotation} scale={0.17}>
        <mesh geometry={nodes.Plane011.geometry} material={materials.Electrica} />
        <mesh geometry={nodes.Plane011_1.geometry} material={materials.FrikiWiki} />
        <mesh geometry={nodes.Plane011_2.geometry} material={materials.Recipes} />
        <mesh geometry={nodes.Plane011_3.geometry} material={materials.TandC} />
      </group>
    </group>
  )
}