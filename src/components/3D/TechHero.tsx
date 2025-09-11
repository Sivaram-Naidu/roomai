import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const FloatingCubes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const cubes = useMemo(() => {
    const cubeData: Array<{
      position: [number, number, number];
      scale: number;
      rotationSpeed: [number, number, number];
    }> = [];
    
    for (let i = 0; i < 15; i++) {
      cubeData.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          -2 - Math.random() * 6,
        ],
        scale: 0.3 + Math.random() * 0.7,
        rotationSpeed: [
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
        ],
      });
    }
    return cubeData;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((cube, index) => {
        const data = cubes[index];
        cube.rotation.x += data.rotationSpeed[0];
        cube.rotation.y += data.rotationSpeed[1];
        cube.rotation.z += data.rotationSpeed[2];
        
        // Gentle floating motion
        cube.position.y = data.position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.3;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, index) => (
        <mesh key={index} position={cube.position} scale={cube.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color={'#e5e7eb'} 
            metalness={0.9} 
            roughness={0.1}
            emissive={'#9ca3af'} 
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

const ConnectedSpheres: React.FC = () => {
  const spheres = useMemo(() => {
    const sphereData: Array<{
      position: [number, number, number];
      connections: number[];
    }> = [];
    
    // Create 8 spheres in a network pattern
    const positions: [number, number, number][] = [
      [-3, 2, -3], [3, 2, -3], [-3, -2, -3], [3, -2, -3],
      [-2, 0, -5], [2, 0, -5], [0, 3, -4], [0, -3, -4]
    ];
    
    positions.forEach((pos, index) => {
      const connections: number[] = [];
      // Connect to 2-3 nearby spheres
      for (let i = 0; i < positions.length; i++) {
        if (i !== index && connections.length < 3) {
          const distance = Math.sqrt(
            Math.pow(pos[0] - positions[i][0], 2) +
            Math.pow(pos[1] - positions[i][1], 2) +
            Math.pow(pos[2] - positions[i][2], 2)
          );
          if (distance < 5) {
            connections.push(i);
          }
        }
      }
      
      sphereData.push({
        position: pos,
        connections
      });
    });
    
    return sphereData;
  }, []);

  return (
    <group>
      {/* Connection lines */}
      {spheres.map((sphere, index) =>
        sphere.connections.map((connectionIndex) => (
          <line key={`${index}-${connectionIndex}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([
                  ...sphere.position,
                  ...spheres[connectionIndex].position
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color={'#6b7280'} transparent opacity={0.4} />
          </line>
        ))
      )}
      
      {/* Spheres */}
      {spheres.map((sphere, index) => (
        <mesh key={index} position={sphere.position}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            color={'#d1d5db'} 
            metalness={0.8} 
            roughness={0.2}
            emissive={'#9ca3af'} 
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

const TechHero: React.FC = () => {
  return (
    <group>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#e5e7eb" />
      
      <FloatingCubes />
      <ConnectedSpheres />
      
      <EffectComposer>
        <Bloom intensity={0.15} luminanceThreshold={0.2} luminanceSmoothing={0.8} />
      </EffectComposer>
    </group>
  );
};

export default TechHero;