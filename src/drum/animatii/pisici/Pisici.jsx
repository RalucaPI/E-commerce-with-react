import React from "react";
import { Pur } from './animatiiPisici/Pur';
import { Iarba } from '../iarba/Iarba';
import { Pisi1 } from './animatiiPisici/Pisi1';
import { Pisi2 } from './animatiiPisici/Pisi2';
import { Fluturi } from './animatiiPisici/Fluturi';
import { Text } from "@react-three/drei";
export const Pisici = ({ ...props }) => {
   const handleClick = () => {
    window.location.href = '/pisici';
  };
  return (
    <>
      <group {...props} position-y={[-19]} scale={0.5} >
         <Text
          color="black"
          anchorX={"left"}
          anchorY="top"
          fontSize={2}
          maxWidth={2.5}
          position={[1,10.0,1]}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
          onClick={handleClick}
        >Pisici</Text>
        <Pisi1  scale={0.09} position={[-2,1,2]} />  
        <Pisi2  scale={4}  position={[2,0.5,0]}   /> 
        <Fluturi scale={0.01}  />        
        </group>        
    </>
  );
};