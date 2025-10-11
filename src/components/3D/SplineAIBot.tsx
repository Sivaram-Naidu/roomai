import React, { useRef, useEffect, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import ErrorBoundary from '../ErrorBoundary';

interface SplineAIBotProps {
  className?: string;
  autoRotate?: boolean;
  rotationSpeed?: number;
}

const SplineAIBot: React.FC<SplineAIBotProps> = ({ 
  className = '', 
  autoRotate = true, 
  rotationSpeed = 0.3 
}) => {
  const splineRef = useRef<any>(null);

  const onLoad = (splineApp: any) => {
    splineRef.current = splineApp;
    
    if (autoRotate && splineApp) {
      const animate = () => {
        if (splineRef.current) {
          try {
            const scene = splineApp.scene;
            if (scene) {
              scene.rotation.y += rotationSpeed * 0.01;
            }
          } catch (error) {
            console.log('Rotation not available');
          }
        }
        requestAnimationFrame(animate);
      };
      animate();
    }
  };

  return (
    <ErrorBoundary
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
            </div>
            <p className="text-gray-600">Loading AI Bot...</p>
          </div>
        </div>
      }
    >
      <div className={`w-full h-full ${className}`}>
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
              </div>
              <p className="text-gray-600">Loading AI Bot...</p>
            </div>
          </div>
        }>
          <Spline
            scene="https://prod.spline.design/q8f270u2gVjmjPqS/scene.splinecode" 
            onLoad={onLoad}
            style={{ width: '100%', height: '100%' }}
          />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default SplineAIBot;