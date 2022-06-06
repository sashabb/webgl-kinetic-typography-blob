import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { fragmentShader } from "../shaders/fragment";
import { vertexShader } from "../shaders/vertex";

export default function Plane() {
  const meshRef = useRef();
  const clock = new THREE.Clock();

  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = elapsedTime;
    }
  });
  return (
    <mesh ref={meshRef}>
      <planeBufferGeometry args={[4.0, 4.0, 1, 1]} />
      <shaderMaterial
        uniforms={{
          uTime: { value: 0.0 },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        // wireframe={true}
      />
    </mesh>
  );
}
