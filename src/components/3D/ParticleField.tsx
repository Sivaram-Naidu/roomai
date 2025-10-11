import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { BufferGeometry, Float32BufferAttribute, Points } from 'three';

interface ParticleFieldProps {
  count?: number;
  speed?: number;
  color?: string;
}

const ParticleField: React.FC<ParticleFieldProps> = ({ 
  count = 1000, 
  speed = 0.5, 
  color = '#e5e7eb' 
}) => {
  const pointsRef = useRef<Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = (Math.random() - 0.5) * 50;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;
      
      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    return { positions, velocities };
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] += particles.velocities[i3] * speed;
        positions[i3 + 1] += particles.velocities[i3 + 1] * speed;
        positions[i3 + 2] += particles.velocities[i3 + 2] * speed;
        
        // Wrap around
        if (Math.abs(positions[i3]) > 25) positions[i3] *= -0.9;
        if (Math.abs(positions[i3 + 1]) > 25) positions[i3 + 1] *= -0.9;
        if (Math.abs(positions[i3 + 2]) > 25) positions[i3 + 2] *= -0.9;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        color={color} 
        size={0.02} 
        transparent 
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export default ParticleField;
