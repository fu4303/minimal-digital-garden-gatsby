import React from "react";
import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";

/**
 * A single 3D cube
 */
const Cube = ({ position, imagePath }) => {
  const [image] = useTexture(imagePath);
  const [ref] = useBox(() => ({
    mass: 1,
    position,
    rotation: [0.2, 0.5, 0.4],
    args: [1, 1, 1],
  }));

  return (
    <mesh ref={ref} receiveShadow castShadow>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" map={image} />
    </mesh>
  );
};

export default Cube;
