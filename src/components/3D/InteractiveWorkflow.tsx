import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { Text } from '@react-three/drei';

interface WorkflowNodeProps {
  position: [number, number, number];
  label: string;
  isActive: boolean;
  onClick: () => void;
  color?: string;
}

const WorkflowNode: React.FC<WorkflowNodeProps> = ({ 
  position, 
  label, 
  isActive, 
  onClick, 
  color = '#e5e7eb' 
}) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = isActive ? 1.2 : hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new Vector3(scale, scale, scale), 0.1);
      
      if (isActive) {
        meshRef.current.rotation.y = state.clock.elapsedTime * 2;
      }
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.5, 24, 24]} />
        <meshStandardMaterial 
          color={isActive ? '#fbbf24' : color}
          metalness={0.85}
          roughness={0.25}
          emissive={isActive ? '#fbbf24' : color}
          emissiveIntensity={isActive ? 0.35 : 0.12}
        />
      </mesh>
      {isActive && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.65, 0.8, 64]} />
          <meshBasicMaterial color={'#fbbf24'} transparent opacity={0.4} />
        </mesh>
      )}
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.3}
        color={isActive ? '#fbbf24' : '#9ca3af'}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

interface ConnectionLineProps {
  start: [number, number, number];
  end: [number, number, number];
  isActive: boolean;
}

const ConnectionLine: React.FC<ConnectionLineProps> = ({ start, end, isActive }) => {
  const points = [start, end];
  
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array(points.flat())}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial 
        color={isActive ? '#fbbf24' : '#4b5563'} 
        linewidth={isActive ? 3 : 1}
        transparent
        opacity={isActive ? 1 : 0.3}
      />
    </line>
  );
};

interface InteractiveWorkflowProps {
  onNodeClick: (nodeIndex: number) => void;
  activeNode: number;
}

const InteractiveWorkflow: React.FC<InteractiveWorkflowProps> = ({ 
  onNodeClick, 
  activeNode 
}) => {
  // Symmetric S-curve layout to align with two-column content beside
  const nodes = [
    { position: [-4, -1.5, 0] as [number, number, number], label: 'Discovery' },
    { position: [-2, 1.5, 0] as [number, number, number], label: 'Analysis' },
    { position: [0, -1.5, 0] as [number, number, number], label: 'Design' },
    { position: [2, 1.5, 0] as [number, number, number], label: 'Development' },
    { position: [4, -1.5, 0] as [number, number, number], label: 'Deployment' },
  ];

  const connections = [
    { start: nodes[0].position, end: nodes[1].position },
    { start: nodes[1].position, end: nodes[2].position },
    { start: nodes[2].position, end: nodes[3].position },
    { start: nodes[3].position, end: nodes[4].position },
  ];

  return (
    <group>
      {/* Connection lines */}
      {connections.map((connection, index) => (
        <ConnectionLine
          key={index}
          start={connection.start}
          end={connection.end}
          isActive={index < activeNode}
        />
      ))}
      
      {/* Nodes */}
      {nodes.map((node, index) => (
        <WorkflowNode
          key={index}
          position={node.position}
          label={node.label}
          isActive={index === activeNode}
          onClick={() => onNodeClick(index)}
        />
      ))}
    </group>
  );
};

export default InteractiveWorkflow;
