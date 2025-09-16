import React, { Suspense } from 'react';
import SplineBrain from './SplineBrain';
import Spline from '@splinetool/react-spline';
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
    <div className="w-full h-full">
      <Spline
        scene="https://prod.spline.design/HkPA1OwWoo3-zwZR/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent'
        }}
      />
    </div>
  );
};

export default Scene3D;
