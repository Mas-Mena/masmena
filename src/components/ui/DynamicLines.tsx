import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DynamicLines: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to light position
  const lightY1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lightY2 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      <div className="container-custom h-full relative">
        {/* Left Vertical Line */}
        <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-white/[0.03]">
          <motion.div 
            style={{ top: lightY1 }}
            className="absolute left-[-1px] w-[3px] h-[300px] bg-gradient-to-b from-transparent via-white/20 to-transparent blur-[1px]"
          />
        </div>

        {/* Right Vertical Line */}
        <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-white/[0.03]">
          <motion.div 
            style={{ top: lightY2 }}
            className="absolute left-[-1px] w-[3px] h-[300px] bg-gradient-to-b from-transparent via-white/20 to-transparent blur-[1px]"
          />
        </div>

        {/* Center Vertical Line (Optional subtle one) */}
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/[0.01]" />
      </div>
      
      {/* Dynamic Horizontal Scanning Line */}
      <motion.div 
        animate={{ 
          top: ["-10%", "110%"],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </div>
  );
};

export default DynamicLines;
