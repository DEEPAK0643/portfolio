import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';

const Home = ({ setActiveTab }) => {
  return (
    <div className="flex flex-col h-full justify-center px-24 relative z-10 w-full max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-neonPurple font-mono text-sm tracking-widest mb-4">
          // WELCOME TO MY DOMAIN
        </p>
        <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
          DEEPAKRAJA S
        </h1>
        <p className="text-xl text-textMuted mb-12">
          2nd-year Cyber Security student | Aspiring Ethical Hacker | Passionate about offensive security
        </p>

        <div className="flex items-center">
          <button 
            onClick={() => setActiveTab('PROJECTS')}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-neonPurple to-indigo-600 text-white font-medium shadow-neon hover:scale-105 transition-transform duration-300"
          >
            ENTER THE LAB
            <ArrowUpRight size={20} />
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-24 right-24 flex items-center text-xs text-textMuted tracking-widest">
        <div className="flex items-center gap-3">
          <MousePointer2 size={16} className="animate-bounce" />
          SCROLL TO EXPLORE
        </div>
      </div>
    </div>
  );
};

export default Home;