import React from 'react';
import { motion } from 'framer-motion';
import { agenticSolutions } from '../../constants/data';

const Services: React.FC = () => {
  const duplicatedSolutions = [];
  for (let i = 0; i < 8; i++) {
    duplicatedSolutions.push(...agenticSolutions);
  }

  return (
    <section id="services" className="relative pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Agentic AI Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Intelligent AI agents designed to automate and optimize your business processes
          </p>
        </motion.div>

        <div className="relative overflow-hidden mt-16">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"
               style={{
                 maskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 100%)'
               }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"
               style={{
                 maskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 100%)'
               }}
          />

          <motion.div
            className="flex gap-5"
            animate={{
              x: [0, -2035],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[300px] p-6 rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/80 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group"
                whileHover={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all duration-300">
                    <solution.icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
