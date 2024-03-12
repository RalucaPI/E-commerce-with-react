import React from "react";
import { Chinchilla } from './animatiiRozatoare/Chinchilla';
import { Hamster } from "./animatiiRozatoare/Hamster";
import { Squirrel } from "./animatiiRozatoare/Squirrel";
import { Copa } from "./animatiiRozatoare/Copa";
import { Text } from "@react-three/drei";
export const Rozatoare = ({ ...props}) => {
    const handleClick = () => {
    window.location.href = '/rozătoare';
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
          position={[-1,2.0,-9]}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
          onClick={handleClick}
        >Rozătoare</Text>
        <Chinchilla scale={0.5} position={[0.8,-1.17,0]}/>
        <Hamster scale={0.05} position={[0.9,-1.55,0.7]}/>
        <Squirrel scale={0.6} position={[0.55,-1.5,-0.2]}/>
        <Copa scale={0.09} position={[1,-2,0]}/>
      </group>
      </>
  );
};