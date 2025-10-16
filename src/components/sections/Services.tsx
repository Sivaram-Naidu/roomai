import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { agenticSolutions } from "../../constants/data";

const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) container.scrollLeft = 0;
  }, []);

  // ✅ Faster scroll with acceleration feel
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 600; // ⬆️ increased for faster movement

    // remove delay lag by turning off smooth only during repeated clicks
    container.scrollTo({
      left:
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="relative pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            Intelligent AI agents designed to automate and optimize your
            business processes
          </p>
        </motion.div>

        {/* Arrows + Scroll Container */}
        <div className="relative mt-16">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scrollable Row */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto overflow-y-hidden custom-scrollbar-hide scroll-smooth snap-x snap-mandatory w-full px-10"
          >
            {agenticSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[300px] snap-start p-6 rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/80 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group"
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
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .custom-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
