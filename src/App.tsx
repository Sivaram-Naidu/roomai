import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Brain,
  Zap,
  Target,
  Shield,
  ArrowRight,
  Play,
  Award,
  Sparkles,
  MessageSquare,
  Phone,
  Mail,
  Database,
  Headphones
} from 'lucide-react';
import Scene3D from './components/3D/Scene3D';
import PerformanceOptimizer from './components/PerformanceOptimizer';

// Suppress Spline console errors
const originalConsoleError = console.error;
console.error = (...args: any[]) => {
  // Filter out Spline "Missing property" errors
  const message = args[0];
  if (typeof message === 'string' && message.includes('Missing property')) {
    return; // Ignore this error
  }
  // Call original console.error for other errors
  originalConsoleError.apply(console, args);
};
const App: React.FC = () => {
  const [activeWorkflowNode, setActiveWorkflowNode] = useState(0);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Auto-advance workflow demo
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWorkflowNode((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const workflowSteps = [
    {
      title: "Discovery & Analysis",
      description: "We analyze your business processes and identify automation opportunities with AI-powered insights.",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-400 to-orange-300"
    },
    {
      title: "Strategic Planning",
      description: "Custom AI agent architecture designed specifically for your workflow requirements and goals.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-orange-400"
    },
    {
      title: "Intelligent Design",
      description: "Advanced machine learning models and natural language processing tailored to your domain.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-orange-400 to-orange-500"
    },
    {
      title: "Development & Training",
      description: "Robust AI agents built with cutting-edge technology and trained on your specific data patterns.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-300 to-orange-400"
    },
    {
      title: "Deployment & Optimization",
      description: "Seamless integration with continuous monitoring and performance optimization for maximum ROI.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const agenticSolutions = [
    {
      title: "RAG Chatbots",
      description: "Intelligent conversational agents with retrieval-augmented generation for accurate responses.",
      icon: MessageSquare
    },
    {
      title: "WhatsApp Bots",
      description: "Automated customer service and engagement through WhatsApp Business API integration.",
      icon: Phone
    },
    {
      title: "Email Automation",
      description: "Smart email agents that handle customer inquiries and automate communication workflows.",
      icon: Mail
    },
    {
      title: "CRM Management",
      description: "AI-powered CRM agents that manage leads, track interactions, and optimize sales processes.",
      icon: Database
    },
    {
      title: "BPO Call Agents",
      description: "Voice-enabled AI agents for customer support, sales calls, and business process outsourcing.",
      icon: Headphones
    }
  ];

  return (
    <PerformanceOptimizer>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="fixed inset-0 opacity-20"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-gray-900/20 to-orange-800/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_70%)]" />
        </motion.div>

        {/* Navigation */}
        <nav className="relative z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Agent Room AI
              </span>
            </motion.div>
            
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="#services" className="text-white hover:text-blue-400 transition-colors font-medium">Services</a>
              <a href="#workflow" className="text-white hover:text-blue-400 transition-colors font-medium">Process</a>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </motion.div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div className="absolute inset-0 z-0 opacity-80">
            <Scene3D type="hero" />
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
                Transform your business operations with sophisticated AI agents that understand, 
                learn, and execute with precision across every aspect of your workflow.
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

        {/* Services Section */}
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

            {/* Solutions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
              {agenticSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/80 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all duration-300">
                      <solution.icon className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Workflow Section */}
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

            {/* Workflow Steps with Visual Flow */}
            <div className="relative max-w-6xl mx-auto mb-16">
              {/* Connection Lines */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 transform -translate-y-1/2" />

              {/* Workflow Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-2xl border transition-all duration-500 relative bg-gray-900/80 backdrop-blur-sm ${
                      index === activeWorkflowNode
                        ? 'border-orange-500/70 shadow-2xl shadow-orange-500/30 scale-105'
                        : 'border-gray-700/50 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>

                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} flex-shrink-0`}>
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join industry leaders who trust Agent Room AI to revolutionize their operations with intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  className="border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Schedule Consultation</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-gray-800/50 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">Agent Room AI</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Pioneering the future of business automation with intelligent AI agents that understand, learn, and execute with precision.
                </p>
                <div className="flex items-center space-x-4">
                  <Award className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">Industry Leading AI Solutions</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Solutions</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Process Automation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Conversational AI</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Predictive Analytics</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Custom Development</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Contact Us</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-orange-400" />
                    <a href="tel:+917842429871" className="hover:text-white transition-colors">+91 7842429871</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-orange-400" />
                    <a href="mailto:admin@agentroomai.com" className="hover:text-white transition-colors">admin@agentroomai.com</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800/50 mt-8 pt-6 text-center text-gray-400">
              <p>&copy; 2024 Agent Room AI. All rights reserved. Built with cutting-edge technology.</p>
            </div>
          </div>
        </footer>
      </div>
    </PerformanceOptimizer>
  );
};

export default App;