import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  Shield, 
  ArrowRight, 
  Play,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Sparkles,
  MessageSquare,
  Phone,
  Mail,
  Database,
  Headphones
} from 'lucide-react';
import Scene3D from './components/3D/Scene3D';
import TiltCard from './components/UX/TiltCard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SplineAIBot from './components/3D/SplineAIBot';
import CircularSolutionCard from './components/UX/CircularSolutionCard';

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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Solutions",
      content: "Agent Room AI transformed our customer service operations. Our AI agents now handle 80% of inquiries with 95% satisfaction rates.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director, GlobalCorp",
      content: "The intelligent automation reduced our processing time by 70% while improving accuracy. Exceptional ROI and support.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Watson",
      role: "CEO, InnovateLab",
      content: "Their AI agents understand our complex workflows better than we expected. The predictive capabilities are game-changing.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
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
              <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors font-medium">Testimonials</a>
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

            {/* Main Content Container - Centered */}
            <div className="flex items-center justify-center min-h-[600px] mt-16">
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="relative flex items-center justify-center h-[600px]">
                  {/* Central 3D AI Bot */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <motion.div
                      className="w-64 h-64 mt-20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <SplineAIBot 
                        autoRotate={true} 
                        rotationSpeed={0.4}
                        className="opacity-90"
                      />
                    </motion.div>
                  </div>

                  {/* Solution Cards in Circle */}
                  {agenticSolutions.map((solution, index) => (
                    <CircularSolutionCard
                      key={index}
                      title={solution.title}
                      description={solution.description}
                      icon={solution.icon}
                      index={index}
                      total={agenticSolutions.length}
                      isActive={false}
                      onClick={() => {}}
                    />
                  ))}
                </div>
              </div>
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
                Experience our proven methodology through interactive 3D visualization
              </p>
            </motion.div>

            {/* Full Width 3D Workflow Visualization */}
            <div className="w-full h-[500px] md:h-[600px] mb-16">
              <Scene3D 
                type="workflow" 
                onNodeClick={setActiveWorkflowNode}
                activeNode={activeWorkflowNode}
              />
            </div>

            {/* Workflow Details Below Animation */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-500 ${
                    index === activeWorkflowNode
                      ? 'bg-gradient-to-r from-gray-900/90 to-gray-800/90 border-orange-500/50 shadow-2xl shadow-orange-500/20'
                      : 'bg-gray-900/50 border-gray-700/30 hover:border-gray-600/50'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative py-16 px-6">
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
                  Client Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how leading companies transformed their operations with our AI agents
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <TiltCard>
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-200 mb-6 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
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
                <h3 className="font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
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