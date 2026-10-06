import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  { title: 'Iris Scanner for Secure Money Transfers', category: 'Cybersecurity', tags: ['Iris Recognition', 'Biometrics', 'Transaction Security'], desc: 'Uses iris scanning to verify identity and help make money transfers safer.' },
  { title: 'AI in Cybersecurity', category: 'Artificial Intelligence', tags: ['Phishing Detection', 'Deepfake Audio', 'AI'], desc: 'Uses AI to detect phishing emails and identify deepfake voices.' },
  { title: 'Autonomous Delivery Truck', category: 'Autonomous Systems', tags: ['Autonomous Driving', 'Logistics', 'Long-Distance Delivery'], desc: 'An autonomous truck concept for delivering packages and goods over long distances by road.' },
  { title: 'GeoSense', category: 'Road Safety', tags: ['Geolocation', 'Weather', 'Traffic'], desc: 'Guides drivers toward safer journeys by accounting for conditions such as rain and heavy traffic.' },
  { title: 'Signal Guard', category: 'Drone Security', tags: ['RF Signals', 'Controller Security', 'Drone'], desc: 'Aims to protect the radio-frequency signals between a drone and its controller.' },
];

const Projects = () => {
  return (
    <div className="h-full px-24 pt-10 overflow-y-auto relative z-10">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
        <h2 className="text-5xl font-bold text-white mb-4">PROJECTS</h2>
        <p className="text-textMuted max-w-lg">A collection of ideas turned into reality.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel glass-panel-hover p-6 flex flex-col justify-between h-[250px] group cursor-pointer"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-neonCyan bg-neonCyan/10 px-3 py-1 rounded-full">{proj.category}</span>
                <ExternalLink size={18} className="text-textMuted group-hover:text-neonPurple transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-sm text-textMuted">{proj.desc}</p>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              {proj.tags.map(tag => (
                <span key={tag} className="text-xs text-textMuted border border-white/10 px-2 py-1 rounded-md">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;