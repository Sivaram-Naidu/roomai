import React, { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Detect low-end devices
    const checkDevicePerformance = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        setIsLowEndDevice(true);
        return;
      }

      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        const isLowEnd = /intel|integrated|hd graphics|uhd graphics/i.test(renderer);
        setIsLowEndDevice(isLowEnd);
      }

      // Check memory
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const isLowMemory = memory.jsHeapSizeLimit < 1073741824; // 1GB
        if (isLowMemory) setIsLowEndDevice(true);
      }
    };

    checkDevicePerformance();

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const target = document.getElementById('main-content');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  // Reduce animations for low-end devices
  useEffect(() => {
    if (isLowEndDevice) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    }
  }, [isLowEndDevice]);

  return (
    <div 
      id="main-content"
      className={`performance-optimized ${isLowEndDevice ? 'low-end-device' : ''} ${!isVisible ? 'not-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default PerformanceOptimizer;
