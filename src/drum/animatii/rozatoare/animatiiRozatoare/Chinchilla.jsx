/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: Nyilonelycompany (https://sketchfab.com/Nyilonelycompany)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/chinchilla-low-poly-f8104f9ddbdb47c9a49e8b8c2e2dcf70
Title: Chinchilla (Low_poly)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Chinchilla(props) {
  const { nodes, materials } = useGLTF('../drum/rozatoare/chinchilla/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.09}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} rotation={[0, 0.01, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../drum/rozatoare/chinchilla/scene-transformed.glb')