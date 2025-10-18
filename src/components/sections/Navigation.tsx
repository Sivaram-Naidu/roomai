import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* This div uses 'flex items-center' to align the logo and text in a line */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Your logo from the 'public' folder */}
          <img
            src="/logo.png"
            alt="Agent Room AI Logo"
            className="w-10 h-10 rounded-xl"
          />

          {/* Your site title */}
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Agent Room AI
          </span>
        </motion.div>

        {/* This is the desktop navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#services"
            className="text-white hover:text-orange-400 transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="#workflow"
            className="text-white hover:text-orange-400 transition-colors font-medium"
          >
            Process
          </a>

          <a
            href="internships.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition-colors font-medium"
          >
            Internships
          </a>

          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </motion.div>

        <motion.button
          className="md:hidden p-2 text-white hover:text-orange-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* This is the mobile navigation dropdown */}
      <motion.div
        className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        {mobileMenuOpen && (
          <div className="px-6 py-4 space-y-4">
            <a
              href="#services"
              className="block text-white hover:text-orange-400 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#workflow"
              className="block text-white hover:text-orange-400 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="internships.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white hover:text-orange-400 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Internships
            </a>

            <button
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navigation;
