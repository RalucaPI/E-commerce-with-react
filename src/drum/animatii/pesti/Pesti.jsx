
import { Beta } from './animatiiPesti/Beta';
import { Fish } from './animatiiPesti/Fish';
import { Goldf } from './animatiiPesti/Goldf';
import { Guppi } from './animatiiPesti/Guppi';
import { Killi } from './animatiiPesti/Killi';
import { Plank } from './animatiiPesti/Plank';
import { Seahorse } from './animatiiPesti/Seahorse';
import { Tuna } from './animatiiPesti/Tuna';
import { Text } from "@react-three/drei";
export const Pesti = ({ ...props }) => {
     const handleClick = () => {
    window.location.href = '/pești';
  };
    return (
        <>
            <group {...props} scale={0.5}>      
        <Text
          color="black"
          anchorX={"left"}
          anchorY="top"
          fontSize={2}
          maxWidth={2.5}
          position={[-1,4,-12]}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
          onClick={handleClick}
        >Pești</Text>        
            <Beta  scale={0.1}  />    
           <Fish  scale={0.3} position={[0,2,-2]} />    
           <Goldf  scale={0.05} position={[-4,2,4]} />     
           <Guppi  scale={0.1} position={[0,4,0]} /> 
           <Killi  scale={0.3} position={[0,3,0]} />    
           <Plank  scale={0.05} position={[0,20,0]} />       
           <Seahorse  scale={0.3} position={[0,-1,0]} />   
           <Tuna  scale={0.3} position={[0,4,0]} />    
           </group>
        </>
  );
};
