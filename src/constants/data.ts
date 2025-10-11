import {
  Target,
  Brain,
  Sparkles,
  Zap,
  Shield,
  MessageSquare,
  Phone,
  Mail,
  Database,
  Headphones
} from 'lucide-react';

export const workflowSteps = [
  {
    title: "Discovery & Analysis",
    description: "We analyze your business processes and identify automation opportunities with AI-powered insights.",
    icon: Target,
    color: "from-orange-400 to-orange-300"
  },
  {
    title: "Strategic Planning",
    description: "Custom AI agent architecture designed specifically for your workflow requirements and goals.",
    icon: Brain,
    color: "from-orange-500 to-orange-400"
  },
  {
    title: "Intelligent Design",
    description: "Advanced machine learning models and natural language processing tailored to your domain.",
    icon: Sparkles,
    color: "from-orange-400 to-orange-500"
  },
  {
    title: "Development & Training",
    description: "Robust AI agents built with cutting-edge technology and trained on your specific data patterns.",
    icon: Zap,
    color: "from-orange-300 to-orange-400"
  },
  {
    title: "Deployment & Optimization",
    description: "Seamless integration with continuous monitoring and performance optimization for maximum ROI.",
    icon: Shield,
    color: "from-orange-500 to-orange-600"
  }
];

export const agenticSolutions = [
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
