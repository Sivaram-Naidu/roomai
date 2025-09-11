
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  Bot, 
  Zap, 
  Users, 
  BarChart3, 
  Calendar, 
  MessageSquare,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  Brain,
  Target,
  Send,
  Play,
  Cpu,
  Database,
  Shield,
  Rocket,
  Activity,
  Network,
  Layers3,
  Sparkles,
  Code,
  Settings,
  Monitor,
  Cloud
} from 'lucide-react';
import Scene3D from './components/3D/Scene3D';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import LottieRemote from './components/Lottie/LottieRemote';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeWorkflowNode, setActiveWorkflowNode] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          el.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      icon: Mail,
      title: 'Email Intelligence Agent',
      description: 'Advanced AI-powered email automation with natural language processing and intelligent response generation for enterprise communications.',
      features: ['Smart Automation', 'NLP Processing', 'Response Intelligence', 'Analytics Dashboard'],
      metric: '10,000+ emails processed daily'
    },
    {
      icon: Phone,
      title: 'Voice Communication Agent',
      description: 'Sophisticated voice AI for customer interactions with human-like conversation capabilities and multi-language support.',
      features: ['Natural Speech', 'Multi-language', 'Sentiment Analysis', 'Real-time Processing'],
      metric: '99.9% uptime reliability'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics Agent',
      description: 'Intelligent data processing and insights generation with predictive analytics capabilities for business intelligence.',
      features: ['Predictive Models', 'Real-time Analytics', 'Custom Reports', 'Data Visualization'],
      metric: '1TB+ data analyzed hourly'
    },
    {
      icon: Users,
      title: 'Sales Optimization Agent',
      description: 'Complete sales pipeline automation with intelligent lead scoring and conversion optimization for revenue growth.',
      features: ['Lead Qualification', 'Pipeline Management', 'Conversion Optimization', 'Performance Tracking'],
      metric: '300% conversion increase'
    },
    {
      icon: Calendar,
      title: 'Scheduling Intelligence Agent',
      description: 'Smart meeting coordination with AI-powered scheduling optimization and conflict resolution for seamless operations.',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Time Optimization', 'Integration Suite'],
      metric: '15+ hours saved weekly'
    },
    {
      icon: Bot,
      title: 'Content Generation Agent',
      description: 'AI-powered content creation with brand voice matching and multi-format output capabilities for marketing excellence.',
      features: ['Multi-format Content', 'Brand Voice AI', 'SEO Optimization', 'Content Strategy'],
      metric: '100+ pieces created daily'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechVision Corp',
      text: 'Agent Room AI revolutionized our operations. The intelligence and efficiency gains are remarkable.',
      rating: 5,
      avatar: 'SC',
      role: 'Chief Executive Officer'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Innovation Labs',
      text: 'The AI agents seamlessly integrated into our workflow, delivering exceptional results beyond expectations.',
      rating: 5,
      avatar: 'MR',
      role: 'Chief Technology Officer'
    },
    {
      name: 'Emily Watson',
      company: 'Future Systems',
      text: 'Professional, intelligent, and transformative. These AI solutions are the future of business automation.',
      rating: 5,
      avatar: 'EW',
      role: 'Head of Operations'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Agents Deployed', icon: Rocket },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Continuous Operation', icon: Shield },
    { number: '10x', label: 'Efficiency Improvement', icon: Zap }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest. Our AI specialists will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      service: ''
    });
  };

  return (
    <PerformanceOptimizer>
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Professional Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.02)_49%,rgba(255,255,255,0.02)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center space-x-4 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-silver-200 to-silver-400 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Brain className="w-7 h-7 text-black" />
                </motion.div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">
                  Agent Room AI
                </span>
                <div className="text-xs text-gray-400 font-medium">Intelligent Agent Solutions</div>
              </div>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'About', 'Testimonials'].map((item) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative group py-2 px-1 text-gray-300 hover:text-silver-200 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-silver-300 to-silver-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                className="relative group bg-gradient-to-r from-silver-200 to-silver-400 text-black px-6 py-3 rounded-lg hover:from-silver-300 hover:to-silver-500 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </div>

            <button 
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Scene3D type="hero" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-silver-400/10 to-transparent rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-silver-300/10 to-transparent rounded-full blur-lg animate-float-delayed"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-silver-500/5 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="inline-flex items-center space-x-3 bg-gray-900/50 backdrop-blur-xl rounded-full px-6 py-3 border border-gray-700 mb-8 shadow-glow">
                <div className="w-2 h-2 bg-silver-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-silver-300">
                  Advanced AI Agent Technology
                </span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.span 
                className="block text-white mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Intelligent
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-silver-200 via-silver-300 to-silver-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                AI Agents
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Transform your business operations with sophisticated AI agents that understand, 
              learn, and execute with precision across every aspect of your workflow.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.button 
                className="group relative px-8 py-4 bg-gradient-to-r from-silver-200 to-silver-400 text-black rounded-lg text-lg font-semibold hover:from-silver-300 hover:to-silver-500 transition-all duration-300 transform hover:scale-105 shadow-3d"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
              
              <motion.button 
                className="group px-8 py-4 border border-gray-600 rounded-lg text-lg font-semibold hover:border-silver-400 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </span>
              </motion.button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="group text-center transform hover:scale-110 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotateY: 5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-silver-800 group-hover:to-silver-900 transition-all duration-300 backdrop-blur-xl border border-gray-700 shadow-glow">
                    <stat.icon className="w-8 h-8 text-silver-300 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-silver-400" />
        </motion.div>
      </section>

      {/* Interactive Workflow Section */}
      <section ref={workflowRef} className="py-32 relative overflow-hidden">
        {/* ambient background accents */}
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-silver-400/10 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-silver-300/10 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-3 bg-gray-900/50 backdrop-blur-xl rounded-full px-6 py-3 border border-gray-700 mb-8 shadow-glow">
              <Network className="w-5 h-5 text-silver-300" />
              <span className="text-sm font-medium text-silver-300">Interactive Process Pipeline</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Our <span className="bg-gradient-to-r from-silver-200 to-silver-400 bg-clip-text text-transparent">Workflow</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience our AI agent development process through an interactive 3D visualization. 
              Click on each node to explore our methodology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="h-96 lg:h-[500px] bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700 backdrop-blur-xl shadow-3d"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Scene3D 
                type="workflow" 
                onNodeClick={setActiveWorkflowNode}
                activeNode={activeWorkflowNode}
              />
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  step: 0,
                  title: 'Discovery & Analysis',
                  description: 'We begin by understanding your business challenges, analyzing current workflows, and identifying optimization opportunities.',
                  icon: Target,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  step: 1,
                  title: 'Strategic Planning',
                  description: 'Our team designs a comprehensive AI strategy tailored to your specific needs and business objectives.',
                  icon: Brain,
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  step: 2,
                  title: 'Custom Development',
                  description: 'We build intelligent agents using cutting-edge AI technologies, ensuring seamless integration with your systems.',
                  icon: Code,
                  color: 'from-green-500 to-green-600'
                },
                {
                  step: 3,
                  title: 'Testing & Optimization',
                  description: 'Rigorous testing and performance optimization ensure your AI agents deliver maximum efficiency and reliability.',
                  icon: Settings,
                  color: 'from-orange-500 to-orange-600'
                },
                {
                  step: 4,
                  title: 'Deployment & Support',
                  description: 'Seamless deployment with ongoing monitoring, maintenance, and continuous improvement support.',
                  icon: Rocket,
                  color: 'from-red-500 to-red-600'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeWorkflowNode === item.step
                      ? 'bg-gradient-to-r from-silver-900/50 to-silver-800/50 border-silver-400 shadow-glow'
                      : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setActiveWorkflowNode(item.step)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section ref={servicesRef} id="services" className="py-32 relative">
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-silver-400/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-silver-300/10 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-3 bg-gray-900/50 backdrop-blur-xl rounded-full px-6 py-3 border border-gray-700 mb-8 shadow-glow">
              <Cpu className="w-5 h-5 text-silver-300" />
              <span className="text-sm font-medium text-silver-300">AI Solutions Portfolio</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Intelligent Agent Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of AI agents designed to revolutionize 
              your business operations with precision and intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-xl border border-gray-700 hover:border-silver-600 shadow-3d"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
              >
                {/* Removed 3D overlay from cards per request */}
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-silver-200 to-silver-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-black" />
                  </motion.div>
                  {/* Contextual tech animation per card */}
                  <div className="absolute -right-2 -top-2 w-24 h-24 opacity-70 pointer-events-none">
                    <LottieRemote
                      src={
                        index % 3 === 0
                          ? 'https://assets10.lottiefiles.com/packages/lf20_kyu7xb1v.json' /* circuit */
                          : index % 3 === 1
                          ? 'https://assets9.lottiefiles.com/private_files/lf30_q5pk6p1k.json' /* ai brain */
                          : 'https://assets1.lottiefiles.com/packages/lf20_zrqthn6o.json' /* data flow */
                      }
                      className="w-full h-full"
                      speed={0.8}
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-silver-200 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-4 h-4 text-silver-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-lg px-4 py-2 text-sm font-medium backdrop-blur-xl border border-gray-600">
                    <Activity className="w-4 h-4 text-silver-300" />
                    <span className="text-gray-300">{service.metric}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-silver-400/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-silver-300/10 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center space-x-3 bg-gray-900/50 backdrop-blur-xl rounded-full px-6 py-3 border border-gray-700 mb-8 shadow-glow"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Target className="w-5 h-5 text-silver-300" />
                <span className="text-sm font-medium text-silver-300">Why Choose Agent Room AI</span>
              </motion.div>

              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                The Future of
                <br />
                <span className="bg-gradient-to-r from-silver-200 to-silver-400 bg-clip-text text-transparent">
                  Business Intelligence
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                We pioneer the next generation of AI agent technology, combining advanced machine learning 
                with deep business understanding to create intelligent solutions that truly transform operations.
              </motion.p>
              
              <div className="space-y-8">
                {[
                  {
                    icon: Network,
                    title: 'Advanced AI Architecture',
                    description: 'Built on cutting-edge neural networks with continuous learning capabilities.'
                  },
                  {
                    icon: Globe,
                    title: 'Global Scale Operations',
                    description: 'Enterprise-grade infrastructure supporting worldwide deployment and operations.'
                  },
                  {
                    icon: Shield,
                    title: 'Enterprise Security',
                    description: 'Military-grade security protocols ensuring complete data protection and privacy.'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="group flex items-start space-x-6 p-6 rounded-xl hover:bg-gray-900/50 transition-all duration-300 border border-transparent hover:border-gray-700"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-silver-200 to-silver-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-7 h-7 text-black" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative z-10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-12 border border-gray-700 backdrop-blur-xl shadow-3d"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center group hover:scale-110 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-silver-200 to-silver-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-all duration-300 shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className="w-8 h-8 text-black" />
                      </motion.div>
                      <div className="text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-32 relative">
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-to-br from-silver-400/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-silver-300/10 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center space-x-3 bg-gray-900/50 backdrop-blur-xl rounded-full px-6 py-3 border border-gray-700 mb-8 shadow-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Star className="w-5 h-5 text-silver-300" />
              <span className="text-sm font-medium text-silver-300">Client Success Stories</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Transforming Enterprises
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Discover how leading organizations leverage our AI agents to achieve 
              unprecedented efficiency and innovation.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700 hover:border-silver-600 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-xl shadow-3d"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
              >
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.0 + index * 0.1 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 text-silver-300 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-300 mb-8 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    "{testimonial.text}"
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-silver-200 to-silver-400 rounded-full flex items-center justify-center text-black font-bold text-sm"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-silver-400/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-silver-300/10 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center space-x-3 bg-gray-900/50 backdrop-blur-xl rounded-full px-6 py-3 border border-gray-700 mb-8 shadow-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Send className="w-5 h-5 text-silver-300" />
              <span className="text-sm font-medium text-silver-300">Connect With Us</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-silver-200 to-silver-400 bg-clip-text text-transparent">
                Your Operations?
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Let's discuss your specific requirements and design the perfect AI agent solution 
              tailored to your business needs.
            </motion.p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-12 border border-gray-700 backdrop-blur-xl shadow-3d"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-silver-400 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300 hover:border-gray-500"
                    placeholder="Enter your full name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-silver-400 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300 hover:border-gray-500"
                    placeholder="Enter your email"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-silver-400 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300 hover:border-gray-500"
                    placeholder="Enter your company name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-3">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-silver-400 focus:border-transparent text-white backdrop-blur-xl transition-all duration-300 hover:border-gray-500"
                  >
                    <option value="" className="bg-gray-800">Select a service</option>
                    <option value="email-agent" className="bg-gray-800">Email Intelligence Agent</option>
                    <option value="voice-agent" className="bg-gray-800">Voice Communication Agent</option>
                    <option value="data-agent" className="bg-gray-800">Data Analytics Agent</option>
                    <option value="sales-agent" className="bg-gray-800">Sales Optimization Agent</option>
                    <option value="scheduling-agent" className="bg-gray-800">Scheduling Intelligence Agent</option>
                    <option value="content-agent" className="bg-gray-800">Content Generation Agent</option>
                    <option value="custom" className="bg-gray-800">Custom Solution</option>
                  </select>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                  Project Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-silver-400 focus:border-transparent text-white placeholder-gray-400 resize-none backdrop-blur-xl transition-all duration-300 hover:border-gray-500"
                  placeholder="Describe your business challenges and how AI agents could transform your operations..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-silver-200 to-silver-400 text-black py-6 rounded-xl font-semibold text-lg hover:from-silver-300 hover:to-silver-500 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Send Message</span>
                <Send className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>

            <motion.div 
              className="mt-12 pt-8 border-t border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Mail, text: 'hello@agentroomai.com' },
                { icon: Phone, text: '+1 (555) 123-4567' },
                { icon: MessageSquare, text: '24/7 Support Available' }
              ].map((contact, index) => (
                <motion.div 
                  key={index} 
                  className="group flex items-center justify-center space-x-3 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-silver-200 to-silver-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <contact.icon className="w-6 h-6 text-black" />
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-t from-gray-900/80 to-black py-16 border-t border-gray-800 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center space-x-4 mb-8 md:mb-0 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-silver-200 to-silver-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Brain className="w-7 h-7 text-black" />
                </motion.div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">
                  Agent Room AI
                </span>
                <div className="text-xs text-gray-400 font-medium">Intelligent Agent Solutions</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-gray-400 text-center md:text-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg font-medium mb-2">&copy; 2025 Agent Room AI. All rights reserved.</p>
              <p className="text-sm text-gray-500">
                Transforming businesses through intelligent automation
              </p>
            </motion.div>
          </motion.div>
        </div>
      </footer>
      </div>
    </PerformanceOptimizer>
  );
}

export default App;