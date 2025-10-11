import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { Vector2, Vector3 } from 'three';

const BrainNeurons: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const neurons = useMemo(() => {
    const neuronData: Array<{
      position: [number, number, number];
      connections: number[];
      color: string;
      pulseSpeed: number;
      size: number;
    }> = [];
    
    // Silver color palette for neurons
    const silverColors = ['#f8fafc', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b'];
    
    // Create a more organic, brain-like network structure
    const positions: [number, number, number][] = [];
    
    // Generate neurons in clusters like brain regions
    for (let cluster = 0; cluster < 4; cluster++) {
      const clusterX = (cluster % 2 - 0.5) * 8;
      const clusterY = (Math.floor(cluster / 2) - 0.5) * 6;
      const clusterZ = -4 - Math.random() * 4;
      
      // Add neurons within each cluster
      for (let i = 0; i < 8; i++) {
        positions.push([
          clusterX + (Math.random() - 0.5) * 4,
          clusterY + (Math.random() - 0.5) * 3,
          clusterZ + (Math.random() - 0.5) * 2
        ]);
      }
    }
    
    // Add some scattered neurons for complexity
    for (let i = 0; i < 15; i++) {
      positions.push([
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        -3 - Math.random() * 6
      ]);
    }
    
    positions.forEach((pos, index) => {
      const connections: number[] = [];
      
      // Connect to nearby neurons (like synapses)
      for (let i = 0; i < positions.length; i++) {
        if (i !== index && connections.length < 4) {
          const distance = Math.sqrt(
            Math.pow(pos[0] - positions[i][0], 2) +
            Math.pow(pos[1] - positions[i][1], 2) +
            Math.pow(pos[2] - positions[i][2], 2)
          );
          if (distance < 4.5) {
            connections.push(i);
          }
        }
      }
      
      neuronData.push({
        position: [pos[0], pos[1], pos[2]],
        connections,
        color: silverColors[Math.floor(Math.random() * silverColors.length)],
        pulseSpeed: 0.8 + Math.random() * 1.5,
        size: 0.08 + Math.random() * 0.12
      });
    });
    
    return neuronData;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Animate the entire network with gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      
      // Animate individual neurons
      groupRef.current.children.forEach((child, index) => {
        if (child.type === 'Mesh') {
          const neuronIndex = Math.floor(index / 2);
          const neuron = neurons[neuronIndex];
          if (neuron) {
            // Pulsing effect for neuron activity
            const pulse = 1 + Math.sin(state.clock.elapsedTime * neuron.pulseSpeed + index) * 0.3;
            child.scale.setScalar(pulse);
            
            // Subtle floating motion
            const originalY = neuron.position[1];
            child.position.y = originalY + Math.sin(state.clock.elapsedTime * 0.5 + index * 0.3) * 0.2;
          }
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Neural connections (synapses) */}
      {neurons.map((neuron, index) =>
        neuron.connections.map((connectionIndex) => {
          const connectedNeuron = neurons[connectionIndex];
          if (!connectedNeuron) return null;
          
          return (
            <line key={`${index}-${connectionIndex}`}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([
                    ...neuron.position,
                    ...connectedNeuron.position
                  ])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial 
                color={neuron.color} 
                transparent 
                opacity={0.4}
                linewidth={1}
              />
            </line>
          );
        })
      )}
      
      {/* Neuron bodies */}
      {neurons.map((neuron, index) => (
        <mesh key={index} position={neuron.position}>
          <sphereGeometry args={[neuron.size, 16, 16]} />
          <meshStandardMaterial 
            color={neuron.color}
            metalness={0.9}
            roughness={0.1}
            emissive={neuron.color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

const SynapticActivity: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const synapses = useMemo(() => {
    const synapseData: Array<{
      start: [number, number, number];
      end: [number, number, number];
      activity: number;
      color: string;
    }> = [];
    
    const silverColors = ['#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8'];
    
    // Create synaptic pathways
    for (let i = 0; i < 20; i++) {
      const startX = (Math.random() - 0.5) * 10;
      const startY = (Math.random() - 0.5) * 6;
      const startZ = -2 - Math.random() * 4;
      
      const endX = startX + (Math.random() - 0.5) * 6;
      const endY = startY + (Math.random() - 0.5) * 4;
      const endZ = startZ + (Math.random() - 0.5) * 3;
      
      synapseData.push({
        start: [startX, startY, startZ],
        end: [endX, endY, endZ],
        activity: Math.random(),
        color: silverColors[Math.floor(Math.random() * silverColors.length)]
      });
    }
    
    return synapseData;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        if (child.type === 'Mesh') {
          const synapse = synapses[index];
          if (synapse) {
            // Simulate electrical activity along synapses
            const activity = Math.sin(state.clock.elapsedTime * 2 + index * 0.5) * 0.5 + 0.5;
            (child.material as any).emissiveIntensity = activity * 0.4;
            (child.material as any).opacity = 0.3 + activity * 0.4;
          }
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {synapses.map((synapse, index) => {
        const midPoint = [
          (synapse.start[0] + synapse.end[0]) / 2,
          (synapse.start[1] + synapse.end[1]) / 2,
          (synapse.start[2] + synapse.end[2]) / 2
        ] as [number, number, number];
        
        return (
          <mesh key={index} position={midPoint}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial
              color={synapse.color}
              metalness={0.8}
              roughness={0.2}
              emissive={synapse.color}
              emissiveIntensity={0.2}
              transparent
              opacity={0.6}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const NeuralPulses: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const pulses = useMemo(() => {
    const pulseData: Array<{
      path: Vector3[];
      speed: number;
      color: string;
      size: number;
    }> = [];
    
    const silverColors = ['#ffffff', '#f1f5f9', '#e2e8f0', '#cbd5e1'];
    
    // Create neural pulse pathways
    for (let i = 0; i < 8; i++) {
      const path: Vector3[] = [];
      const startX = (Math.random() - 0.5) * 8;
      const startY = (Math.random() - 0.5) * 5;
      const startZ = -3 - Math.random() * 3;
      
      // Create curved path
      for (let j = 0; j <= 10; j++) {
        const t = j / 10;
        const x = startX + Math.sin(t * Math.PI * 2) * 2;
        const y = startY + Math.cos(t * Math.PI) * 1.5;
        const z = startZ + t * 2;
        path.push(new Vector3(x, y, z));
      }
      
      pulseData.push({
        path,
        speed: 0.5 + Math.random() * 1,
        color: silverColors[Math.floor(Math.random() * silverColors.length)],
        size: 0.05 + Math.random() * 0.08
      });
    }
    
    return pulseData;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        const pulse = pulses[index];
        if (pulse && child.type === 'Mesh') {
          // Move pulse along path
          const t = (state.clock.elapsedTime * pulse.speed + index) % 1;
          const pathIndex = Math.floor(t * (pulse.path.length - 1));
          const nextIndex = Math.min(pathIndex + 1, pulse.path.length - 1);
          const localT = (t * (pulse.path.length - 1)) % 1;
          
          const currentPos = pulse.path[pathIndex];
          const nextPos = pulse.path[nextIndex];
          
          if (currentPos && nextPos) {
            child.position.lerpVectors(currentPos, nextPos, localT);
            
            // Fade in/out effect
            const fadeT = Math.sin(t * Math.PI);
            (child.material as any).opacity = fadeT * 0.8;
            (child.material as any).emissiveIntensity = fadeT * 0.5;
          }
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {pulses.map((pulse, index) => (
        <mesh key={index}>
          <sphereGeometry args={[pulse.size, 12, 12]} />
          <meshStandardMaterial
            color={pulse.color}
            metalness={0.9}
            roughness={0.1}
            emissive={pulse.color}
            emissiveIntensity={0.4}
            transparent
            opacity={0.7}
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
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#f1f5f9" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#e2e8f0" />
      <pointLight position={[5, -5, -5]} intensity={0.4} color="#cbd5e1" />
      <pointLight position={[0, 5, -3]} intensity={0.3} color="#94a3b8" />
      
      <BrainNeurons />
      <SynapticActivity />
      <NeuralPulses />
      
      <EffectComposer>
        <Bloom intensity={0.3} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
        <ChromaticAberration offset={new Vector2(0.0003, 0.0003)} />
      </EffectComposer>
    </group>
  );
};

export default TechHero;
