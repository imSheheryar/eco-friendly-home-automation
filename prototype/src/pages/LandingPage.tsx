import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Base background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=3270&auto=format&fit=crop')`
        }}
      />
      
      {/* Overlay gradients - reduced opacity for more visible background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/60 to-gray-900/80" />
    </div>
  );
};

const FadeInSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, delay }}
  >
    {children}
  </motion.div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <BackgroundImage />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo and Title */}
          <FadeInSection>
            <div className="mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-blue-500/20"
              >
                <span className="text-3xl font-bold">E</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                EcoHome
              </h1>
              <p className="text-xl text-gray-300">
                Smart Energy Monitoring System
              </p>
            </div>
          </FadeInSection>

          {/* Course Information */}
          <FadeInSection delay={0.3}>
            <motion.div
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-700/50 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6">Course Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Course</h3>
                  <p className="text-gray-300">Elements of Software Engineering</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Professor</h3>
                  <p className="text-gray-300">Leilo Campanile</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">University</h3>
                  <p className="text-gray-300">Università degli studi campania luigi vanvitelli</p>
                </div>
              </div>
            </motion.div>
          </FadeInSection>

          {/* Team Members */}
          <FadeInSection delay={0.6}>
            <motion.div
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-700/50 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6">Team Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Muhammad Hasnain',
                  'Sheheryar Yousaf',
                  'Muhammad Mubashir'
                ].map((member, index) => (
                  <motion.div
                    key={member}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                    className="bg-gray-700/30 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <span className="text-xl font-bold">{member[0]}</span>
                    </div>
                    <p className="text-gray-200">{member}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeInSection>

          {/* CTA Button */}
          <FadeInSection delay={0.9}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Link
                to="/app"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Launch Prototype
              </Link>
            </motion.div>
          </FadeInSection>
        </motion.div>
      </div>

      {/* Footer - single instance */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 text-center py-4 text-gray-400 text-sm bg-gray-900/50 backdrop-blur-sm z-20"
      >
        <p>Created by: Sheheryar Yousaf</p>
      </motion.div>
    </div>
  );
};

export default LandingPage; 