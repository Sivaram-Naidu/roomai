import React from "react";
// 'Brain' icon removed from this import
import { Award, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-gray-800/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* === LOGO CODE START === */}
              {/* The 'div' and 'Brain' icon were replaced with this 'img' tag */}
              <img
                src="/logo.png"
                alt="Agent Room AI Logo"
                className="w-10 h-10 rounded-xl"
              />
              {/* === LOGO CODE END === */}

              <span className="text-2xl font-bold text-white">
                Agent Room AI
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Pioneering the future of business automation with intelligent AI
              agents that understand, learn, and execute with precision.
            </p>
            <div className="flex items-center space-x-4">
              <Award className="w-5 h-5 text-orange-400" />
              <span className="text-gray-300">
                Industry Leading AI Solutions
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Conversational AI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Predictive Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Custom Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <a
                  href="tel:+917842429871"
                  className="hover:text-white transition-colors"
                >
                  +91 7842429871
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <a
                  href="mailto:admin@agentroomai.com"
                  className="hover:text-white transition-colors"
                >
                  admin@agentroomai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; 2025 Agent Room AI. All rights reserved. Built with
            cutting-edge technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
