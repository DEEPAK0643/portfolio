import React, { useState } from 'react';
import { Contact, Download } from 'lucide-react';

import ContactDetails from './ContactDetails';

const RESUME_URL = '/RESUME.pdf';

const Header = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className="absolute top-0 right-0 flex justify-end items-center p-8 w-full z-50">
      <div className="flex items-center gap-3">
        <a
          href={RESUME_URL}
          download="Deepakraja-Resume.pdf"
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 glass-panel hover:bg-white/5 transition-all text-sm tracking-wider"
        >
          <Download size={16} />
          DOWNLOAD RESUME
        </a>
        <div className="relative">
          <button
            type="button"
            onClick={() => setContactOpen((isOpen) => !isOpen)}
            aria-expanded={contactOpen}
            aria-controls="header-contact"
            className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 glass-panel hover:bg-white/5 transition-all text-sm tracking-wider"
          >
            <Contact size={16} />
            CONTACT
          </button>
          {contactOpen && (
            <ContactDetails id="header-contact" className="absolute right-0 top-full mt-3" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;