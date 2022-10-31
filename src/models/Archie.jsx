import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Archie({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Models/Archie.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.ArchieAnimation.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Archie" position={[2, 0.97, -0.04]} rotation={[Math.PI / 2, 0, -0.97]} scale={0.25}>
          <mesh name="meshId0_name003" geometry={nodes.meshId0_name003.geometry} material={materials['White metal boxes']} />
          <mesh name="meshId0_name003_1" geometry={nodes.meshId0_name003_1.geometry} material={materials['Trousers.001']} />
        </group>
      </group>
    </group>
  )
}