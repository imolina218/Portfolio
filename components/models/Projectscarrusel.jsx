import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({...props}) {
  const { nodes, materials } = useGLTF("/Models/Projects.glb");
  return (
    <group {...props} dispose={null}>
      <group 
        position={[1.920, 0.960, -0.670]} 
        rotation={props.customRotations.rotation}
      >
        <mesh
          geometry={nodes.Plane002.geometry}
          material={materials.BeetleRoseMiniatura}
        />
        <mesh
          geometry={nodes.Plane002_1.geometry}
          material={materials.Snapshoot}
        />
        <mesh
          geometry={nodes.Plane002_2.geometry}
          material={materials.Portfolio}
        />
        <mesh
          geometry={nodes.Plane002_3.geometry}
          material={materials.ElectricaCitharae}
        />
        <mesh
          geometry={nodes.Plane002_4.geometry}
          material={materials.FrikiWiki}
        />
        <mesh
          geometry={nodes.Plane002_5.geometry}
          material={materials["Recipes Searcher"]}
        />
        <mesh
          geometry={nodes.Plane002_6.geometry}
          material={materials.TeasAndCups02}
        />
      </group>
    </group>
  );
}