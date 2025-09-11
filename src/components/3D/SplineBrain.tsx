import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineBrainProps {
  className?: string;
  autoRotate?: boolean;
  rotationSpeed?: number;
}

const SplineBrain: React.FC<SplineBrainProps> = ({ 
  className = '', 
  autoRotate = true, 
  rotationSpeed = 0.5 
}) => {
  const splineRef = useRef<any>(null);

  const onLoad = (splineApp: any) => {
    splineRef.current = splineApp;
    
    if (autoRotate && splineApp) {
      // Enable rotation controls
      const animate = () => {
        if (splineRef.current) {
          try {
            // Rotate the scene continuously
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

  const onMouseDown = (e: any) => {
    // Enable manual rotation on mouse interaction
    if (splineRef.current) {
      try {
        splineRef.current.setVariable('mouseDown', true);
      } catch (error) {
        console.log('Mouse interaction not available');
      }
    }
  };

  const onMouseUp = (e: any) => {
    if (splineRef.current) {
      try {
        splineRef.current.setVariable('mouseDown', false);
      } catch (error) {
        console.log('Mouse interaction not available');
      }
    }
  };

  return (
    <div 
      className={`w-full h-full ${className}`}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={{ cursor: 'grab' }}
    >
      <Spline
        scene="https://prod.spline.design/T22gPWYUOWj1UpOn/scene.splinecode"
        onLoad={onLoad}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent'
        }}
      />
    </div>
  );
};

export default SplineBrain;
