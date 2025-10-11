import React from 'react';
import { motion } from 'framer-motion';
import { workflowSteps } from '../../constants/data';

interface WorkflowProps {
  activeWorkflowNode: number;
  setActiveWorkflowNode: (index: number) => void;
}

const Workflow: React.FC<WorkflowProps> = ({ activeWorkflowNode, setActiveWorkflowNode }) => {
  return (
    <section id="workflow" className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven methodology for delivering exceptional AI solutions
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {workflowSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-500 relative bg-gray-900/80 backdrop-blur-sm cursor-pointer ${
                    index === activeWorkflowNode
                      ? 'border-orange-500/70 shadow-2xl shadow-orange-500/30 scale-105'
                      : 'border-gray-700/50 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  onClick={() => setActiveWorkflowNode(index)}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${step.color} flex-shrink-0`}
                      animate={index === activeWorkflowNode ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-orange-400/0 to-orange-600/0 opacity-0 transition-opacity duration-500"
                    whileHover={{ opacity: 0.1 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
