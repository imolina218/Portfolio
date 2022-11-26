import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function PrinterExtrusor({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Models/3DPrinterExtrusor.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.ExtrusorAnimation.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cube017" position={[1.98, 0.89, -1.28]} rotation={[0, -Math.PI / 2, 0]} scale={0.02}>
          <mesh name="Cube017_1" geometry={nodes.Cube017_1.geometry} material={materials['Black base']} />
          <mesh name="Cube017_2" geometry={nodes.Cube017_2.geometry} material={materials['Black resin']} />
          <mesh name="Cube017_3" geometry={nodes.Cube017_3.geometry} material={materials['White metal boxes']} />
        </group>
      </group>
    </group>
  )
}