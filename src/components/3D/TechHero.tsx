import React, { useMemo } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const NeuralGrid: React.FC = () => {
  const points = useMemo(() => {
    // Dispersed field of glowing particles
    const nodes: [number, number, number][] = [];
    for (let i = 0; i < 200; i++) {
      nodes.push([
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 8,
        -4 - Math.random() * 4,
      ]);
    }
    return nodes;
  }, []);

  return (
    <group>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.04, 10, 10]} />
          <meshStandardMaterial emissive={'#9ca3af'} emissiveIntensity={0.7} color={'#e5e7eb'} roughness={0.25} metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
};

const TechHero: React.FC = () => {
  return (
    <group>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <NeuralGrid />
      <EffectComposer>
        <Bloom intensity={0.25} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
      </EffectComposer>
    </group>
  );
};

export default TechHero;
