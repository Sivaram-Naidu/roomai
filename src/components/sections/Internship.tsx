import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Internship: React.FC = () => {
  return (
    <section id="internship" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Internships
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our internship program and gain hands-on experience with
            cutting-edge AI technologies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 rounded-2xl bg-gray-900/50 border border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>

              {/* ----- START: MODIFIED SECTION ----- */}

              <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
                Ready to kickstart your career in AI? Explore our open roles and
                apply to join the next wave of innovators.
              </p>

              <a
                href="internships.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Openings
              </a>

              {/* ----- END: MODIFIED SECTION ----- */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
