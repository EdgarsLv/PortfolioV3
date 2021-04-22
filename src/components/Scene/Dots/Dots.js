import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
// import { OrbitControls } from "@react-three/drei";
import DrawDots from "./DrawDots";
// import { Effects } from "./Effects";

const Dots = () => {
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      orthographic
      camera={{ zoom: 25 }}
      colorManagement={false}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.NoToneMapping;
      }}
    >
      {/* <color attach="background" args={["#a6c92600"]} /> */}
      {/* <OrbitControls /> */}
      {/* <Effects /> */}
      <DrawDots color="#a7c926" />
      <DrawDots color="#f8f8f8" />
    </Canvas>
  );
};

export default Dots;
