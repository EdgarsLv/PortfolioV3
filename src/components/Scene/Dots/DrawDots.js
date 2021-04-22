import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const roundedSquareWave = (t, delta, a, f) => {
  return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
};

function DrawDots(props) {
  const ref = useRef();

  const { vec, transform, positions, distances } = useMemo(() => {
    const vec = new THREE.Vector3();
    const transform = new THREE.Matrix4();
    const positions = [...Array(10000)].map((_, i) => {
      const position = new THREE.Vector3();
      // Place in a grid
      position.x = (i % 100) - 50;
      position.y = Math.floor(i / 100) - 50;

      // Offset every other column (hexagonal pattern)
      position.y += (i % 2) * 0.5;

      // Add some noise
      position.x += Math.random() * 0.3;
      position.y += Math.random() * 0.3;
      return position;
    });
    const right = new THREE.Vector3(1, 0, 0);
    const distances = positions.map(
      (pos) => pos.length() + Math.cos(pos.angleTo(right) * 32) * 2.5
    );
    return { vec, transform, positions, distances };
  }, []);

  useFrame(({ clock, mouse }) => {
    for (let i = 0; i < 10000; ++i) {
      const dist = distances[i];
      const t = clock.elapsedTime - (dist / 25) * mouse.y * 16;
      const wave = roundedSquareWave(t, 0.35 + 0.3 * dist, 0.4, 1 / 3.8);
      vec.copy(positions[i]).multiplyScalar(wave + 1);
      transform.setPosition(vec);
      ref.current.setMatrixAt(i, transform);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, 10000]}>
      <circleBufferGeometry args={[1, 4]} />

      <meshBasicMaterial wireframe={false} {...props} />
    </instancedMesh>
  );
}
export default DrawDots;
