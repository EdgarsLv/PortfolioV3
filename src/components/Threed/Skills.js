import React from "react";
import { Canvas } from "react-three-fiber";
import Box from "./Box";

const Skills = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default Skills;
