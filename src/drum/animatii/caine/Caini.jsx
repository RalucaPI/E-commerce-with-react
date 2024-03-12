import React from "react";
import { Iarba } from "../iarba/Iarba";
import { Rover } from './animatiiCaini/Rover';
import { Hydra } from "./animatiiCaini/Hydra";
import { Lilimov } from "./animatiiCaini/Lilimov";
import { Lilith } from "./animatiiCaini/Lilith";
import { Text } from "@react-three/drei";
export const Caini = ({ ...props }) => {
    const handleClick = () => {
    window.location.href = '/câini';
  };
    return (
        <>
            <group {...props} >
        <Text
          color="black"
          anchorX={"left"}
          anchorY="top"
          fontSize={1}
          maxWidth={2.5}
          position={[1.5,2.0,-9]}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
          onClick={handleClick}
        >Câini</Text>
            <Iarba scale={0.15} position={[1, -0.5, 0.4]} />
            <Rover scale={0.5} position={[1, -0.4, 0]} />
            <Hydra scale={0.02} position={[0.6, -0.1, -0.5]} />
            <Hydra scale={0.02} position={[1.1, -0.1, -0.5]} rotation={[Math.PI / 0.1, 1, 0]}/>
            <Lilimov scale={0.03} position={[1.2, -0.2, 0]} />
            <Lilimov scale={0.03} position={[1.2, -0.2, 0]} rotation={[Math.PI / 2, 2, 0]}/>
            <Lilimov scale={0.03} position={[1.2, -0.2, 0]} rotation={[Math.PI / 2, 3, 0]}/>
            <Lilimov scale={0.03} position={[0.4, -0.2, 0]} />
            <Lilith scale={0.005} position={[1, -0.3, -1]} />
            <Lilith scale={0.005} position={[1.3, -0.4, -1]} />
              
            </group>
        </>
    )
}