import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Eye = ({ position }: { position: [number, number, number] }) => {
  const pupilRef = useRef<THREE.Mesh>(null!);

  useFrame(({ mouse }) => {
    if (pupilRef.current) {
      pupilRef.current.position.x = THREE.MathUtils.clamp(
        mouse.x * 0.2,
        -0.1,
        0.1
      );
      pupilRef.current.position.y = THREE.MathUtils.clamp(
        -mouse.y * 0.2,
        -0.1,
        0.1
      );
    }
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh ref={pupilRef} position={[0, 0, 0.18]}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
};

const Head = () => {
  const headRef = useRef<THREE.Mesh>(null!);

  useFrame(({ mouse }) => {
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.clamp(
        mouse.x * 0.5,
        -0.5,
        0.5
      );
      headRef.current.rotation.x = THREE.MathUtils.clamp(
        -mouse.y * 0.5,
        -0.5,
        0.5
      );
    }
  });

  return (
    <mesh ref={headRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#F9CBA7" />
      <Eye position={[-0.3, 0.2, 0.8]} />
      <Eye position={[0.3, 0.2, 0.8]} />
    </mesh>
  );
};

const Avatar3D: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Head />
    </Canvas>
  );
};

export default Avatar3D;
