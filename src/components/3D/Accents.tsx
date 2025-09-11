import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const OrbitingNode: React.FC<{ radius?: number; speed?: number; y?: number }>
= ({ radius = 1.2, speed = 0.6, y = 0 }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    ref.current.position.set(x, y, z - 2);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.05, 12, 12]} />
      <meshStandardMaterial color={'#d1d5db'} emissive={'#9ca3af'} emissiveIntensity={0.6} metalness={0.9} roughness={0.2} />
    </mesh>
  );
};

export const ScanningLine: React.FC<{ width?: number; height?: number; speed?: number }>
= ({ width = 2, height = 1, speed = 0.8 }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = (Math.sin(state.clock.getElapsedTime() * speed) + 1) / 2; // 0..1
    ref.current.position.y = (t - 0.5) * height;
  });
  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <planeGeometry args={[width, 0.02]} />
      <meshBasicMaterial color={'#9ca3af'} transparent opacity={0.25} />
    </mesh>
  );
};

const Accents: React.FC = () => {
  return (
    <group>
      <OrbitingNode radius={1.1} y={0.25} speed={0.7} />
      <OrbitingNode radius={1.4} y={-0.3} speed={-0.5} />
      <ScanningLine width={2.4} height={1.2} speed={1.2} />
    </group>
  );
};

export default Accents;
