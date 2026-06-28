import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EditorialMenu from './EditorialMenu';

const EditorialNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-[1000] py-12 flex justify-center mix-blend-difference pointer-events-none w-full">
        <div className="container-custom flex justify-between items-center">
          <motion.a 
            href="/"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pointer-events-auto flex items-center"
          >
            <img 
              src="logo-masmena.png" 
              alt="MAS MENA" 
              className="h-7 w-auto object-contain" 
            />
          </motion.a>
          
          <div className="flex gap-16 items-center pointer-events-auto">
            {/* Status indicator seen in screenshot */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="hidden md:flex items-center gap-6"
            >
              <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center opacity-50">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <a
                href="/work"
                className="text-[11px] uppercase tracking-[0.4em] font-bold hover:opacity-50 transition-opacity"
              >
                View Works
              </a>
            </motion.div>

            <motion.button
              onClick={() => setIsMenuOpen(true)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="magnetic flex flex-col justify-center items-end gap-[6px] group h-10 w-10 pl-4"
            >
              <div className="w-8 h-[1px] bg-white group-hover:w-4 transition-all duration-300" />
              <div className="w-4 h-[1px] bg-white group-hover:w-8 transition-all duration-300" />
            </motion.button>
          </div>
        </div>
      </nav>

      <EditorialMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default EditorialNavbar;
