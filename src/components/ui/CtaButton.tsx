import React from 'react';

interface CtaButtonProps {
  href: string;
  text: string;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ href, text, className = '' }) => {
  return (
    <a 
      href={href} 
      className={`group relative flex items-center justify-between pb-4 md:pb-6 w-[280px] cursor-pointer transition-all duration-300 ${className}`}
    >
      <div className="flex items-center">
        {/* Luxury Micro-Dash Indicator sliding in on hover */}
        <span className="inline-block w-0 h-[1.5px] bg-[var(--text-primary)] mr-0 opacity-0 group-hover:w-4 group-hover:mr-3 group-hover:opacity-100 transition-all duration-300 ease-out" />
        <span className="text-[11px] md:text-[11.5px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)]/80 group-hover:text-[var(--text-primary)] transition-colors duration-300">
          {text}
        </span>
      </div>
      
      {/* Custom Circular Dotted Spinning Indicator with border dial */}
      <div className="relative w-8 h-8 flex items-center justify-center border border-[var(--border-color)] rounded-full group-hover:border-[var(--text-primary)] transition-colors duration-300">
        <div className="absolute inset-0 flex items-center justify-center cta-spin">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <div 
              key={i} 
              className="absolute w-[2px] h-[2px] bg-[var(--text-primary)] rounded-full opacity-35 transition-all duration-300 group-hover:opacity-85 group-hover:scale-125"
              style={{ transform: `rotate(${angle}deg) translateY(-10px)` }}
            />
          ))}
        </div>
        <div className="w-[1.5px] h-[1.5px] bg-[var(--text-primary)] rounded-full transition-all duration-300 group-hover:scale-[1.75]" />
      </div>

      {/* Underline animations */}
      {/* Static thin base line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--border-color)] transition-colors duration-300 group-hover:bg-transparent" />
      {/* Active center-out drawing line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[var(--text-primary)] transition-all duration-500 ease-out group-hover:w-full" />
    </a>
  );
};

export default CtaButton;
