import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CircularSolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  total: number;
  isActive: boolean;
  onClick: () => void;
}

const CircularSolutionCard: React.FC<CircularSolutionCardProps> = ({
  title,
  description,
  icon: Icon,
  index,
  total,
  isActive,
  onClick
}) => {
  // Calculate position in perfect circle around center
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
  const radius = 250; // Distance from center
  const x = Math.cos(angle) * radius - 88; // Offset to center the cards (half of card width)
  const y = Math.sin(angle) * radius - 88; // Offset to center the cards (half of card height)

  return (
    <motion.div
      className="absolute w-44 h-44"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(0, 0)',
        zIndex: 20
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: 0
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 120,
        damping: 15
      }}
      whileHover={{ scale: 1.1, y: -10 }}
      onClick={onClick}
    >
      <div className="
        w-full h-full rounded-2xl cursor-pointer transition-all duration-300
        bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/60 
        hover:border-orange-400/60 hover:bg-gradient-to-br hover:from-orange-500/25 hover:to-orange-600/25
        hover:shadow-2xl hover:shadow-orange-500/30
        backdrop-blur-xl flex flex-col items-center justify-center p-5 text-center group
      ">
        <div className="
          w-12 h-12 rounded-xl mb-3 flex items-center justify-center transition-all duration-300
          bg-gradient-to-br from-gray-700 to-gray-600 
          group-hover:from-orange-400 group-hover:to-orange-600 
          group-hover:shadow-lg group-hover:shadow-orange-500/30
        ">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="
          text-sm font-bold mb-2 leading-tight transition-colors duration-300
          text-white group-hover:text-orange-300
        ">
          {title}
        </h3>
        
        <p className="
          text-xs leading-relaxed transition-colors duration-300
          text-gray-300 group-hover:text-gray-200
        ">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default CircularSolutionCard;