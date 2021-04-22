import { Canvas } from "react-three-fiber";
// import { EffectComposer, SSAO } from "@react-three/postprocessing";

import Swarm from "./Swarm";
const color = "#f8f8f8";
const Particles = () => {
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      shadowMap
      gl={{ alpha: false, antialias: false }}
      camera={{ fov: 75, position: [0, 0, 70], near: 10, far: 150 }}
      onCreated={(state) => state.gl.setClearColor(color)}
    >
      {/* <color attach="background" args={["white"]} /> */}
      <ambientLight intensity={0.5} />
      <pointLight position={[100, 100, 100]} intensity={2} castShadow />
      <pointLight position={[-100, -100, -100]} intensity={5} color="#9926c9" />
      <Swarm count={150} />
      {/* <EffectComposer multisampling={0}>
        <SSAO
          samples={31}
          radius={20}
          intensity={40}
          luminanceInfluence={0.1}
          color="black"
        />
      </EffectComposer> */}
    </Canvas>
  );
};

export default Particles;
