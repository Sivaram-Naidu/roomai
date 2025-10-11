import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  type: 'box' | 'sphere' | 'torus' | 'octahedron';
  speed?: number;
  color?: string;
}

const FloatingGeometry: React.FC<FloatingGeometryProps> = ({ 
  position, 
  type, 
  speed = 1, 
  color = '#e5e7eb' 
}) => {
  const meshRef = useRef<Mesh>(null);

  const geometry = useMemo(() => {
    switch (type) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[0.5, 0.2, 16, 100]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.5]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  }, [type]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.7) * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

export default FloatingGeometry;
