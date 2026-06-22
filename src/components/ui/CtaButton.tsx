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
      className={`group relative inline-flex items-center justify-between gap-6 px-6 py-3 md:px-8 md:py-4 border border-[var(--border-color)] rounded-full hover:border-[var(--text-primary)] bg-transparent hover:bg-[var(--text-primary)]/[0.03] transition-all duration-300 w-fit cursor-pointer ${className}`}
    >
      <span className="text-[11px] md:text-[11.5px] font-bold uppercase tracking-[0.25em] text-[var(--text-primary)]/80 group-hover:text-[var(--text-primary)] transition-colors duration-300 whitespace-nowrap">
        {text}
      </span>
      
      {/* Custom Circular Dotted Spinning Indicator */}
      <div className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
        <div className="absolute inset-0 flex items-center justify-center cta-spin">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <div 
              key={i} 
              className="absolute w-[2px] h-[2px] bg-[var(--text-primary)] rounded-full opacity-35 transition-all duration-300 group-hover:opacity-85 group-hover:scale-125"
              style={{ transform: `rotate(${angle}deg) translateY(-8px)` }}
            />
          ))}
        </div>
        <div className="w-[1.5px] h-[1.5px] bg-[var(--text-primary)] rounded-full transition-all duration-300 group-hover:scale-[1.75]" />
      </div>
    </a>
  );
};

export default CtaButton;
