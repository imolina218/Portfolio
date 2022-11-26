import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ProjectsBase({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/ProjectsBase.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane008.geometry} material={materials['Black base']} position={[1.92, 0.79, -0.67]} scale={0.17} />
    </group>
  )
}