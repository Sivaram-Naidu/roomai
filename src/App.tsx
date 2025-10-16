import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Workflow from "./components/sections/Workflow";
import Internship from "./components/sections/Internship";
import CTA from "./components/sections/CTA";
import Footer from "./components/sections/Footer";

const originalConsoleError = console.error;
console.error = (...args: any[]) => {
  const message = args[0];
  if (typeof message === "string" && message.includes("Missing property")) {
    return;
  }
  originalConsoleError.apply(console, args);
};

const App: React.FC = () => {
  const [activeWorkflowNode, setActiveWorkflowNode] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWorkflowNode((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PerformanceOptimizer>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <motion.div
          className="fixed inset-0 opacity-20"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-gray-900/20 to-orange-800/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_70%)]" />
        </motion.div>

        <Navigation
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <Hero />
        <Services />
        <Workflow
          activeWorkflowNode={activeWorkflowNode}
          setActiveWorkflowNode={setActiveWorkflowNode}
        />
        <Internship />
        <CTA />
        <Footer />
      </div>
    </PerformanceOptimizer>
  );
};

export default App;
