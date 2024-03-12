import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experienta } from "./componente/Experienta";
import { PaginaPornire } from "./componente/PaginaPornire";
import { usePlay } from "./context/Play";
export function Drum() {
 
  const { play} = usePlay();
    return (
      <>
	  <Canvas>
        <color attach="background" args={["#ccffff"]} />
        <ScrollControls
          pages={play ? 10 : 0}
          damping={0.5}
          style={{
            top: "7px",
            left: "0px",
            bottom: "7px",
            right: "7px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <Experienta />
        </ScrollControls>
      </Canvas>
      <PaginaPornire/>
   
	</>
  );
};
