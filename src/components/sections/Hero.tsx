import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import AnimatedBackground from "../AnimatedBackground";
import HeroAnimation from "../HeroAnimation";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <AnimatedBackground />
      <div className="absolute inset-0 z-0 opacity-60">
        <HeroAnimation />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Intelligent
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              AI Agents
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-xl">
            Transform your business operations with sophisticated AI agents that
            understand, learn, and execute with precision across every aspect of
            your workflow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
