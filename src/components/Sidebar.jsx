import React, { useState } from 'react';
import { Home as HomeIcon, FolderKanban, Code2, Contact, Award } from 'lucide-react';
import ContactDetails from './ContactDetails';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [contactOpen, setContactOpen] = useState(false);
  const items = [
    { label: 'Home', Icon: HomeIcon, tab: 'HOME' },
    { label: 'Projects', Icon: FolderKanban, tab: 'PROJECTS' },
    { label: 'Skills', Icon: Code2, tab: 'SKILLS' },
    { label: 'Certificates', Icon: Award, tab: 'CERTIFICATES' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-8 border-r border-white/5 z-50 bg-darkBg/80 backdrop-blur-md">
      <div className="mb-12">
        <img src="/hawk-logo-white.png" alt="Hawk logo" className="w-9 h-9 object-contain" />
      </div>
      
      <nav aria-label="Portfolio shortcuts" className="flex flex-col gap-10">
        {items.map(({ label, Icon, tab, href }) => href ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="text-textMuted hover:text-neonPurple transition-colors duration-300"
          >
            <Icon size={24} strokeWidth={1.5} />
          </a>
        ) : (
          <button
            key={label}
            type="button"
            onClick={() => setActiveTab(tab)}
            aria-label={label}
            aria-current={activeTab === tab ? 'page' : undefined}
            title={label}
            className={`transition-colors duration-300 ${
              activeTab === tab ? 'text-neonPurple' : 'text-textMuted hover:text-neonPurple'
            }`}
          >
            <Icon size={24} strokeWidth={1.5} />
          </button>
        ))}
        <div className="relative">
          <button
            type="button"
            onClick={() => setContactOpen((isOpen) => !isOpen)}
            aria-label="Contact"
            aria-expanded={contactOpen}
            aria-controls="sidebar-contact"
            title="Contact"
            className={`transition-colors duration-300 ${
              contactOpen ? 'text-neonPurple' : 'text-textMuted hover:text-neonPurple'
            }`}
          >
            <Contact size={24} strokeWidth={1.5} />
          </button>
          {contactOpen && (
            <ContactDetails id="sidebar-contact" className="absolute left-full bottom-0 ml-4" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;