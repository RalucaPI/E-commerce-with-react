import React from "react";
import { Papagal1 } from './animatiiPasari/Papagal1';
import { Papagal3 } from './animatiiPasari/Papagal3';
import { Birdi } from './animatiiPasari/Birdi';
import { Text } from "@react-three/drei";
export const Pasari = ({ sceneOpacity, ...props }) => {
   const handleClick = () => {
    window.location.href = '/păsări';
  };
    return (
      <>
        <group {...props} >
           <Text
          color="black"
          anchorX={"left"}
          anchorY="top"
          fontSize={0.52}
          maxWidth={2.5}
          position={[2.0,0,-5]}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
          onClick={handleClick}
        >Păsări</Text>
        <Papagal1 scale={0.01} position={[2.0,-0.45,-5]}/>
        <Papagal3 scale={0.007} position={[2.9,-0.2,-5]}/>
        <Birdi scale={0.1} position={[3.35,-0.18,-5]}/>
      </group>
      </>
  );
};