import { useEffect, useRef, useMemo, useState, useCallback } from "react";
import { random } from "lodash";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
// import { EffectComposer, SSAO } from "@react-three/postprocessing";
import sharp from "../../Assets/images/sh.png";

const Cube = () => {
  const texture = useLoader(THREE.TextureLoader, sharp);
  const mesh = useRef(null);
  const time = useRef(0);

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const isActiveRef = useRef(isActive);

  const position = useMemo(() => {
    return [random(-3, 3, true), random(-3, 3, true), random(-3, 3, true)];
  }, []);

  // random time mod factor
  const timeMod = useMemo(() => random(0.1, 4, true), []);
  const color = isHovered ? 0xe5d54d : isActive ? 0xf7e7e5 : 0xf95b3c;
  // const color = isActive ? 0xf7e7e5 : 0xf95b3c;

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useFrame(() => {
    mesh.current.rotation.y += 0.01 * timeMod;
    mesh.current.rotation.x += 0.01 * timeMod;
    if (isActiveRef.current) {
      time.current += 0.03;
      mesh.current.position.y = position[1] + Math.sin(time.current) * 0.4;
    }
  });

  const onHover = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered(value);
    },
    [setIsHovered]
  );

  const onClick = useCallback(
    (e) => {
      e.stopPropagation();
      setIsActive((v) => !v);
    },
    [setIsActive]
  );

  return (
    <mesh
      ref={mesh}
      position={position}
      onClick={(e) => onClick(e)}
      onPointerOver={(e) => onHover(e, true)}
      onPointerOut={(e) => onHover(e, false)}
    >
      <boxBufferGeometry attach="geometry" args={[0, 0.29, 0.29]} />
      {/* <sphereBufferGeometry attach="geometry" args={[0.2, 20, 20]} /> */}

      {/* <meshStandardMaterial
        attach="material"
        color="#A7C926"
        roughness={0.3}
        metalness={0.7}
      /> */}
      <meshBasicMaterial
        attach="material"
        map={texture}
        transparent={true}
        alphaTest={0}
        opacity={1}
      />
    </mesh>
  );
};

export default Cube;
