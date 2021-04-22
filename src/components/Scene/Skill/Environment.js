import React from "react";
import { BackSide } from "three";

const Environment = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" />
      <meshStandardMaterial
        color="#f8f8f8"
        attach="material"
        side={BackSide}
        metalness={0.3}
      />
    </mesh>
  );
};
export default Environment;
