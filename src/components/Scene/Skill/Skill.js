import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Cubes from "./Cubes";
import Light from "./Light";
// import Environment from "./Environment";
import { OrbitControls } from "@react-three/drei";

const Skill = () => {
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      colorManagement={false}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.NoToneMapping;
      }}
    >
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Cubes />
        <Light />
        {/* <Environment /> */}
      </Suspense>
    </Canvas>
  );
};

export default Skill;
