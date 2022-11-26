import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Ismael({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Models/Ismael.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Writing.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0.76, 0.12, -0.68]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="lpMaleG001">
            <skinnedMesh name="Mesh001" geometry={nodes.Mesh001.geometry} material={materials['Skin.001']} skeleton={nodes.Mesh001.skeleton} />
            <skinnedMesh name="Mesh001_1" geometry={nodes.Mesh001_1.geometry} material={materials['Hair.001']} skeleton={nodes.Mesh001_1.skeleton} />
            <skinnedMesh name="Mesh001_2" geometry={nodes.Mesh001_2.geometry} material={materials['T-Shirt.001']} skeleton={nodes.Mesh001_2.skeleton} />
            <skinnedMesh name="Mesh001_3" geometry={nodes.Mesh001_3.geometry} material={materials['Trousers.001']} skeleton={nodes.Mesh001_3.skeleton} />
            <skinnedMesh name="Mesh001_4" geometry={nodes.Mesh001_4.geometry} material={materials['Shoes.001']} skeleton={nodes.Mesh001_4.skeleton} />
            <skinnedMesh name="Mesh001_5" geometry={nodes.Mesh001_5.geometry} material={materials['Lips.001']} skeleton={nodes.Mesh001_5.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}