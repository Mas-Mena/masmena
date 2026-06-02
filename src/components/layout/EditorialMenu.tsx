import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Dribbble, Linkedin, Twitter, Sparkle } from 'lucide-react';

interface EditorialMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Workflow', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const EditorialMenu: React.FC<EditorialMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-xl flex flex-col"
        >
          {/* Header */}
          <div className="w-full py-12 px-8 md:px-16 flex justify-between items-center">
            <a href="/" className="text-[14px] md:text-[16px] uppercase tracking-[0.5em] font-black text-white">
              MAS MENA®
            </a>
            
            <div className="flex items-center gap-8 md:gap-16">
              <a href="#work" className="hidden md:block text-[11px] uppercase tracking-[0.4em] font-bold text-white/60 hover:text-white transition-colors">
                View Works
              </a>
              <button 
                onClick={onClose}
                className="group flex flex-col items-center justify-center h-10 w-10 relative"
              >
                <div className="absolute w-8 h-[1px] bg-white rotate-45 group-hover:scale-x-125 transition-transform duration-300" />
                <div className="absolute w-8 h-[1px] bg-white -rotate-45 group-hover:scale-x-125 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <nav className="flex flex-col gap-2 md:gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[40px] md:text-[64px] font-semibold tracking-tight text-white hover:italic hover:pl-8 transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="w-full py-12 px-8 md:px-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Star Icon */}
            <div className="text-white/40">
              <Sparkle size={24} className="animate-pulse" />
            </div>

            {/* Studio Info */}
            <div className="text-center md:max-w-[400px]">
              <p className="text-[11px] md:text-[12px] text-white/40 leading-relaxed tracking-tight">
                A full-service marketing agency based in Amman, Jordan.<br />
                Specialising in creative campaigns, digital presence & marketing across GCC & MENA.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Dribbble size={18} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditorialMenu;
