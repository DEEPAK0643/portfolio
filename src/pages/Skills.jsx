import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Users, Zap } from 'lucide-react';

const technicalSkills = [
  { name: 'Python', level: 90, icon: <Code size={18} /> },
  { name: 'C / C++', level: 80, icon: <Code size={18} /> },
  { name: 'HTML', level: 55, icon: <Code size={18} /> },
];

const softSkills = [
  { name: 'Problem Solving', icon: <Brain size={24} /> },
  { name: 'Team Collaboration', icon: <Users size={24} /> },
  { name: 'Adaptability', icon: <Zap size={24} /> },
];

const Skills = () => {
  return (
    <div className="h-full px-24 pt-10 overflow-y-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-20">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-5xl font-bold text-white mb-4">SKILLS</h2>
        <p className="text-textMuted mb-10">My technical expertise and tools.</p>

        <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-2">TECHNICAL SKILLS</h3>
        <div className="flex flex-col gap-6">
          {technicalSkills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm mb-2 text-textMuted">
                <span className="flex items-center gap-2 text-white">{skill.icon} {skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className="h-full bg-gradient-to-r from-neonPurple to-neonCyan rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
        <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-2 mt-16 lg:mt-0">SOFT SKILLS</h3>
        <div className="grid grid-cols-2 gap-4">
          {softSkills.map((skill, idx) => (
            <div key={idx} className="glass-panel p-4 flex flex-col items-center justify-center text-center gap-3 hover:border-neonPurple transition-all cursor-pointer">
              <div className="text-neonPurple">{skill.icon}</div>
              <span className="text-sm text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;