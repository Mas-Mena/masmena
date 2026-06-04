import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const DynamicGridLines: React.FC = () => {
  const [mouseY, setMouseY] = useState(0);
  const [isNearLeft, setIsNearLeft] = useState(false);
  const [isNearRight, setIsNearRight] = useState(false);
  
  const gridRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
      
      // Calculate exact distance to each column using their real DOM position
      if (leftColRef.current) {
        const leftRect = leftColRef.current.getBoundingClientRect();
        setIsNearLeft(Math.abs(e.clientX - leftRect.left) < 60); // 60px hover radius
      }
      
      if (rightColRef.current) {
        const rightRect = rightColRef.current.getBoundingClientRect();
        setIsNearRight(Math.abs(e.clientX - rightRect.left) < 60);
      }
    };

    const handleMouseLeave = () => {
      setIsNearLeft(false);
      setIsNearRight(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={gridRef}
      className="fixed inset-0 pointer-events-none z-[1] flex justify-center"
    >
      <div className="container-custom relative h-full">
        
        {/* Left Vertical Line */}
        <div 
          ref={leftColRef}
          className="absolute left-8 md:left-16 top-0 bottom-0 w-px flex justify-center"
        >
          {/* The actual faint background grid line */}
          <div className="absolute inset-0 w-px bg-[var(--text-primary)] opacity-[var(--grid-opacity)]" />
          
          {/* Extremely Simple & Elegant White Neon Glow (Tracks mouse, visible only on hover) */}
          <motion.div 
            animate={{ 
              top: mouseY, 
              opacity: isNearLeft ? 1 : 0 
            }}
            transition={{ 
              top: { type: "tween", ease: "easeOut", duration: 0.15 },
              opacity: { duration: 0.2 }
            }}
            className="absolute left-1/2 w-0 h-[140px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
          >
            {/* Clean White Core */}
            <div className="absolute w-[1.5px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
            {/* Subtle Neon Bloom Layer */}
            <div className="absolute w-[8px] h-full bg-gradient-to-b from-transparent via-white to-transparent blur-[3px] opacity-75" />
          </motion.div>
        </div>

        {/* Right Vertical Line */}
        <div 
          ref={rightColRef}
          className="absolute right-8 md:right-16 top-0 bottom-0 w-px flex justify-center"
        >
          {/* The actual faint background grid line */}
          <div className="absolute inset-0 w-px bg-[var(--text-primary)] opacity-[var(--grid-opacity)]" />
          
          {/* Extremely Simple & Elegant White Neon Glow (Tracks mouse, visible only on hover) */}
          <motion.div 
            animate={{ 
              top: mouseY, 
              opacity: isNearRight ? 1 : 0 
            }}
            transition={{ 
              top: { type: "tween", ease: "easeOut", duration: 0.15 },
              opacity: { duration: 0.2 }
            }}
            className="absolute left-1/2 w-0 h-[140px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
          >
            {/* Clean White Core */}
            <div className="absolute w-[1.5px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
            {/* Subtle Neon Bloom Layer */}
            <div className="absolute w-[8px] h-full bg-gradient-to-b from-transparent via-white to-transparent blur-[3px] opacity-75" />
          </motion.div>
        </div>

        {/* Soft Periodic Purple Scan (Background ambient animation, unrelated to mouse hover) */}
        <motion.div 
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#a673ff]/10 to-transparent blur-[2px]"
        />
      </div>
    </div>
  );
};

export default DynamicGridLines;
