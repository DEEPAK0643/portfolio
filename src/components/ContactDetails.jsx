import React, { useState } from 'react';
import { ArrowLeft, Linkedin, Mail, Phone, Send } from 'lucide-react';

const FORMSUBMIT_ACTION = 'https://formsubmit.co/c08752beaad657d9ddf2cd7ea4a91c68';
const FORMSUBMIT_AJAX_URL = FORMSUBMIT_ACTION.replace(
  'https://formsubmit.co/',
  'https://formsubmit.co/ajax/',
);
const LINKEDIN_URL = 'https://www.linkedin.com/in/deepakrajas008';
const PHONE_NUMBER = '+919245855544';

const ContactDetails = ({ id, className }) => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set('_replyto', formData.get('email'));

    try {
      const response = await fetch(FORMSUBMIT_AJAX_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'The message could not be sent.');
      }

      form.reset();
      setStatus({ type: 'success', message: 'Message sent. Thanks for reaching out!' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Could not send your message. Please try again.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      id={id}
      className={`w-72 rounded-xl border border-white/10 bg-[#11111d]/95 p-4 text-left shadow-2xl backdrop-blur-md ${className}`}
    >
      {showEmailForm ? (
        <>
          <button
            type="button"
            onClick={() => {
              setShowEmailForm(false);
              setStatus(null);
            }}
            className="mb-3 flex items-center gap-2 text-xs text-textMuted hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to contact details
          </button>
          <h2 className="mb-3 text-sm font-semibold tracking-widest text-white">SEND A MESSAGE</h2>
          <form
            action={FORMSUBMIT_ACTION}
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="text"
              name="_honey"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
            />
            <label className="flex flex-col gap-1 text-xs text-textMuted">
              Your name
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="Your name"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-textMuted/60 focus:border-neonPurple"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs text-textMuted">
              Your email
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="you@example.com"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-textMuted/60 focus:border-neonPurple"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs text-textMuted">
              Subject
              <input
                type="text"
                name="subject"
                required
                maxLength={200}
                placeholder="What is this about?"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-textMuted/60 focus:border-neonPurple"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs text-textMuted">
              Message
              <textarea
                name="message"
                required
                maxLength={5000}
                rows={4}
                placeholder="Write your message..."
                className="resize-y rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-textMuted/60 focus:border-neonPurple"
              />
            </label>
            <button
              type="submit"
              disabled={isSending}
              className="flex items-center justify-center gap-2 rounded-lg bg-neonPurple px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={15} />
              {isSending ? 'Sending...' : 'Send message'}
            </button>
            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`text-xs ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
              >
                {status.message}
              </p>
            )}
          </form>
        </>
      ) : (
        <>
          <h2 className="mb-3 text-sm font-semibold tracking-widest text-white">CONTACT</h2>
          <div className="flex flex-col gap-3 text-sm text-textMuted">
            <button
              type="button"
              onClick={() => setShowEmailForm(true)}
              className="flex items-center gap-3 text-left hover:text-neonPurple"
            >
              <Mail size={18} />
              Email
            </button>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-neonPurple"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 hover:text-neonPurple"
            >
              <Phone size={18} />
              +91 92458 55544
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactDetails;
