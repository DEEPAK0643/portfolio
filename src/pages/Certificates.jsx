import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  {
    name: 'VibeAthlon 6.0 - VibeCoding Hackathon',
    issuer: 'NXTGENSEC',
    date: 'Jul 25-27, 2026',
    image: '/certificates/vibeathon-6-vibecoding.jpg',
  },
  {
    name: 'Combined Annual Training Camp III',
    issuer: '5 (TN) Air Squadron (Tech) NCC, Salem',
    date: 'Jul 22-31, 2026',
    image: '/certificates/ncc-training-camp-iii.jpg',
  },
  {
    name: 'Morrow 1.0 - Finalist',
    issuer: 'Makers Need More, Unstop, and .xyz',
    date: '2026',
    image: '/certificates/morrow-1-finalist.jpg',
  },
  {
    name: 'Morrow 1.0 - Participation',
    issuer: 'Makers Need More, Unstop, and .xyz',
    date: '2026',
    image: '/certificates/morrow-1-participation.jpg',
  },
  {
    name: 'IDEATHON 2026 - Participation',
    issuer: 'Tamizhan Skills',
    date: 'Jan 24, 2026',
    image: '/certificates/ideathon-2026-tamizhan-skills.jpg',
  },
  {
    name: 'Basic Cyber Course (English)',
    issuer: 'NIELIT',
    date: 'May 1, 2026',
    image: '/certificates/nielit-basic-cyber-course.jpg',
  },
  {
    name: "EL-MISSION'26 - Paper Presentation",
    issuer: 'PSNA College of Engineering and Technology',
    date: 'Apr 27, 2026',
    image: '/certificates/el-mission-26-paper-presentation.jpg',
  },
  {
    name: 'Annual Training Camp II',
    issuer: '14 (TN) Battalion NCC, Dindigul',
    date: 'Aug 4-13, 2026',
    image: '/certificates/ncc-annual-training-camp-ii.jpg',
  },
  {
    name: 'Generative AI Revolution: Understanding Large Language Models',
    issuer: 'Reccsar Pvt. Ltd.',
    date: 'Sep 27, 2026',
    image: '/certificates/reccsar-generative-ai-workshop.jpg',
  },
  {
    name: 'Critical Thinking in the AI Era',
    issuer: 'HP LIFE',
    date: 'Jul 19, 2026',
    image: '/certificates/hp-life-critical-thinking-ai-era.jpg',
  },
  {
    name: 'Effective Presentations',
    issuer: 'HP LIFE',
    date: 'Jul 19, 2026',
    image: '/certificates/hp-life-effective-presentations.jpg',
  },
  {
    name: 'AI for Beginners',
    issuer: 'HP LIFE',
    date: 'Jun 29, 2026',
    image: '/certificates/hp-life-ai-for-beginners.jpg',
  },
  {
    name: 'Critical Thinking in the AI Era',
    issuer: 'HP LIFE',
    date: 'Jul 19, 2026',
    image: '/certificates/hp-life-critical-thinking-ai-era.jpg',
  },
  {
    name: 'Effective Presentations',
    issuer: 'HP LIFE',
    date: 'Jul 19, 2026',
    image: '/certificates/hp-life-effective-presentations.jpg',
  },
  {
    name: 'AI for Beginners',
    issuer: 'HP LIFE',
    date: 'Jun 29, 2026',
    image: '/certificates/hp-life-ai-for-beginners.jpg',
  },
];

const Certificates = () => {
  return (
    <div className="h-full px-24 pt-10 overflow-y-auto relative z-10">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
        <h2 className="text-5xl font-bold text-white mb-4">CERTIFICATES</h2>
        <p className="text-textMuted max-w-lg">Certificates, workshops, and achievements.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
        {certificates.map((certificate, index) => (
          <motion.a
            key={certificate.name}
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="glass-panel glass-panel-hover overflow-hidden flex flex-col group"
            aria-label={`Open ${certificate.name} certificate image`}
          >
            <div className="h-52 bg-black/30 flex items-center justify-center p-3">
              <img
                src={certificate.image}
                alt={`${certificate.name} certificate`}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-neonPurple mb-3">
                <Award size={17} strokeWidth={1.7} />
                <span className="text-xs tracking-wider">{certificate.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{certificate.name}</h3>
              <p className="text-sm text-textMuted">{certificate.issuer}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
