import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { Vector2 } from 'three';

const FloatingCubes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const cubes = useMemo(() => {
    const cubeData: Array<{
      position: [number, number, number];
      scale: number;
      rotationSpeed: [number, number, number];
      color: string;
      emissiveIntensity: number;
    }> = [];
    
    const colors = ['#3b82f6', '#8b5cf6', '#06d6a0', '#f59e0b', '#ef4444', '#10b981'];
    
    for (let i = 0; i < 20; i++) {
      cubeData.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          -2 - Math.random() * 8,
        ],
        scale: 0.2 + Math.random() * 0.8,
        rotationSpeed: [
          (Math.random() - 0.5) * 0.03,
          (Math.random() - 0.5) * 0.03,
          (Math.random() - 0.5) * 0.03,
        ],
        color: colors[Math.floor(Math.random() * colors.length)],
        emissiveIntensity: 0.3 + Math.random() * 0.4,
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
        
        // Enhanced floating motion with wave patterns
        cube.position.y = data.position[1] + 
          Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.5 +
          Math.cos(state.clock.elapsedTime * 0.3 + index * 0.5) * 0.3;
        
        // Subtle pulsing scale
        const pulseScale = 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
        cube.scale.setScalar(data.scale * pulseScale);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, index) => (
        <mesh key={index} position={cube.position} scale={cube.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color={cube.color} 
            metalness={0.7} 
            roughness={0.3}
            emissive={cube.color} 
            emissiveIntensity={cube.emissiveIntensity}
          />
        </mesh>
      ))}
    </group>
  );
};

const ConnectedSpheres: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const spheres = useMemo(() => {
    const sphereData: Array<{
      position: [number, number, number];
      connections: number[];
      color: string;
      pulseSpeed: number;
    }> = [];
    
    const colors = ['#06d6a0', '#3b82f6', '#8b5cf6', '#f59e0b'];
    
    // Create network nodes
    const positions: [number, number, number][] = [
      [-4, 3, -4], [4, 3, -4], [-4, -3, -4], [4, -3, -4],
      [-2, 0, -6], [2, 0, -6], [0, 4, -5], [0, -4, -5],
      [-6, 0, -3], [6, 0, -3]
    ];
    
    positions.forEach((pos, index) => {
      const connections: number[] = [];
      for (let i = 0; i < positions.length; i++) {
        if (i !== index && connections.length < 3) {
          const distance = Math.sqrt(
            Math.pow(pos[0] - positions[i][0], 2) +
            Math.pow(pos[1] - positions[i][1], 2) +
            Math.pow(pos[2] - positions[i][2], 2)
          );
          if (distance < 6) {
            connections.push(i);
          }
        }
      }
      
      sphereData.push({
        position: pos,
        connections,
        color: colors[index % colors.length],
        pulseSpeed: 1 + Math.random() * 2
      });
    });
    
    return sphereData;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        if (child.type === 'Mesh') {
          const sphereIndex = Math.floor(index / 2);
          const data = spheres[sphereIndex];
          if (data) {
            // Pulsing effect
            const pulse = 1 + Math.sin(state.clock.elapsedTime * data.pulseSpeed) * 0.2;
            child.scale.setScalar(pulse);
          }
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Connection lines with animated opacity */}
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
            <lineBasicMaterial color={sphere.color} transparent opacity={0.6} />
          </line>
        ))
      )}
      
      {/* Spheres with vibrant colors */}
      {spheres.map((sphere, index) => (
        <mesh key={index} position={sphere.position}>
          <sphereGeometry args={[0.2, 20, 20]} />
          <meshStandardMaterial 
            color={sphere.color} 
            metalness={0.6} 
            roughness={0.4}
            emissive={sphere.color} 
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
};

const TechHero: React.FC = () => {
  return (
    <group>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#3b82f6" />
      <pointLight position={[5, -5, -5]} intensity={0.6} color="#8b5cf6" />
      
      <FloatingCubes />
      <ConnectedSpheres />
      
      <EffectComposer>
        <Bloom intensity={0.4} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
        <ChromaticAberration offset={new Vector2(0.001, 0.001)} />
      </EffectComposer>
    </group>
  );
};

export default TechHero;