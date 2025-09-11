import React, { Suspense } from 'react';
import SplineBrain from './SplineBrain';
import InteractiveWorkflow from './InteractiveWorkflow';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import Accents from './Accents';

interface Scene3DProps {
  type: 'hero' | 'workflow';
  onNodeClick?: (nodeIndex: number) => void;
  activeNode?: number;
}

const Scene3D: React.FC<Scene3DProps> = ({ type, onNodeClick, activeNode = 0 }) => {
  // For hero type, use Spline brain instead of Canvas
  if (type === 'hero') {
    return (
      <div className="w-full h-full">
        <SplineBrain 
          autoRotate={true} 
          rotationSpeed={0.3}
          className="opacity-80"
        />
      </div>
    );
  }

  // For workflow type, keep the existing Three.js setup
  return (
    <Canvas
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      camera={{ position: [0, 0, 10], fov: 75 }}
      gl={{ alpha: true, antialias: true }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} color="#f3f4f6" />
      <pointLight position={[-10, -10, -5]} intensity={0.4} color="#e5e7eb" />
      <pointLight position={[5, -5, 5]} intensity={0.3} color="#d1d5db" />
      
      {/* Environment */}
      <Environment preset="studio" background={false} />
      
      <Suspense fallback={null}>
        <InteractiveWorkflow onNodeClick={onNodeClick} activeNode={activeNode} />
        <Accents />
      </Suspense>
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Scene3D;
