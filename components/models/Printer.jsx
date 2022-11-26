import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Printer({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Models/3DPrinter.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.PlateAnimation.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cube" position={[1.95, 0.76, -1.26]} scale={0.13}>
          <mesh name="Cube_1" geometry={nodes.Cube_1.geometry} material={materials['Black resin']} />
          <mesh name="Cube_2" geometry={nodes.Cube_2.geometry} material={materials['Trousers.001']} />
          <mesh name="Cube_3" geometry={nodes.Cube_3.geometry} material={materials.Aluminum} />
        </group>
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Black resin']} position={[1.94, 0.85, -1.28]} />
      </group>
    </group>
  )
}