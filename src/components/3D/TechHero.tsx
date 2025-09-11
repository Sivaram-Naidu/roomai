import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import ParticleField from './ParticleField';
import FloatingGeometry from './FloatingGeometry';

const TechHero: React.FC = () => {
  return (
    <group>
      {/* Ambient lighting for overall illumination */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#e5e7eb" />
      
      {/* Particle field for background effect */}
      <ParticleField count={800} speed={0.3} color="#e5e7eb" />
      
      {/* Floating geometric shapes */}
      <FloatingGeometry position={[-3, 2, -2]} type="box" speed={0.8} color="#d1d5db" />
      <FloatingGeometry position={[3, -1, -3]} type="sphere" speed={1.2} color="#9ca3af" />
      <FloatingGeometry position={[-2, -2, -1]} type="torus" speed={0.6} color="#6b7280" />
      <FloatingGeometry position={[2, 3, -4]} type="octahedron" speed={1.0} color="#e5e7eb" />
      <FloatingGeometry position={[0, 0, -5]} type="box" speed={0.4} color="#d1d5db" />
    </group>
  );
};

export default TechHero;