import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import FloatingGeometry from './FloatingGeometry';
import ParticleField from './ParticleField';
import TechHero from './TechHero';
import Accents from './Accents';
import InteractiveWorkflow from './InteractiveWorkflow';

interface Scene3DProps {
  type: 'hero' | 'workflow';
  onNodeClick?: (nodeIndex: number) => void;
  activeNode?: number;
}

const Scene3D: React.FC<Scene3DProps> = ({ type, onNodeClick, activeNode = 0 }) => {
  return (
    <Canvas
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      camera={{ position: [0, 0, 10], fov: 75 }}
      gl={{ alpha: true, antialias: true, premultipliedAlpha: false }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#e5e7eb" />
      
      {/* Environment */}
      <Environment preset="night" background={false} environmentIntensity={0.3} />
      
      <Suspense fallback={null}>
        {type === 'hero' && <TechHero />}
        
        {type === 'workflow' && onNodeClick && (
          <>
            <InteractiveWorkflow onNodeClick={onNodeClick} activeNode={activeNode} />
            <Accents />
          </>
        )}
      </Suspense>
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate={type === 'hero'}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Scene3D;
