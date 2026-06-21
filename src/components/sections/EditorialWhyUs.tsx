import React from 'react';

const whyUsData = [
  {
    num: '(01)',
    cursiveTitle: 'Strategy',
    normalTitle: 'First',
    description: 'We start with market research and tailored strategies before execution.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80">
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1" className="opacity-60" />
        <path d="M32 16C32 24.8366 24.8366 32 16 32C24.8366 32 32 39.1634 32 48C32 39.1634 39.1634 32 48 32C39.1634 32 32 24.8366 32 16Z" fill="currentColor" className="opacity-90" />
      </svg>
    )
  },
  {
    num: '(02)',
    cursiveTitle: 'Arabic-First',
    normalTitle: 'Marketing',
    description: 'Local dialects, cultural understanding, and regionally relevant campaigns.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80">
        <rect x="26" y="10" width="12" height="12" rx="3" fill="currentColor" className="opacity-40" />
        <rect x="10" y="26" width="12" height="12" rx="3" fill="currentColor" className="opacity-40" />
        <rect x="26" y="26" width="12" height="12" rx="3" fill="currentColor" className="opacity-80" />
        <rect x="42" y="26" width="12" height="12" rx="3" fill="currentColor" className="opacity-40" />
        <rect x="26" y="42" width="12" height="12" rx="3" fill="currentColor" className="opacity-40" />
      </svg>
    )
  },
  {
    num: '(03)',
    cursiveTitle: 'Online & Offline',
    normalTitle: 'Expertise',
    description: 'Integrated campaigns across digital, experiential, and traditional channels.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80">
        <path d="M18 14C18 14 26 22 26 32C26 42 18 50 18 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-40" />
        <path d="M32 14C32 14 40 22 40 32C40 42 32 50 32 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-80" />
        <path d="M46 14C46 14 54 22 54 32C54 42 46 50 46 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-40" />
      </svg>
    )
  },
  {
    num: '(04)',
    cursiveTitle: 'Influencer',
    normalTitle: 'Network',
    description: 'Jordanian and GCC influencers, athletes, and creators.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80">
        <path d="M32 6L58 32L32 58L6 32Z" stroke="currentColor" strokeWidth="1" className="opacity-30" />
        <path d="M32 16L48 32L32 48L16 32Z" stroke="currentColor" strokeWidth="1.5" className="opacity-70" />
        <line x1="32" y1="6" x2="32" y2="58" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-40" />
        <line x1="6" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-40" />
        <circle cx="32" cy="32" r="3" fill="currentColor" className="opacity-85" />
      </svg>
    )
  },
  {
    num: '(05)',
    cursiveTitle: 'Creative',
    normalTitle: 'Production',
    description: 'Photography, short-form video, content creation, and campaign assets.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80">
        <path d="M32 4C32 19.464 19.464 32 4 32C19.464 32 32 44.536 32 60C32 44.536 44.536 32 60 32C44.536 32 32 19.464 32 4Z" fill="currentColor" className="opacity-75" />
      </svg>
    )
  },
  {
    num: '(06)',
    cursiveTitle: 'Data-Driven',
    normalTitle: 'Decisions',
    description: 'Every campaign is tracked and optimized using measurable KPIs.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80">
        <path d="M16 16V48H48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
        <line x1="16" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-20" />
        <line x1="32" y1="16" x2="32" y2="48" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-20" />
        <path d="M16 42L28 30L40 36L48 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80" />
        <circle cx="28" cy="30" r="3" fill="currentColor" className="opacity-90" />
        <circle cx="40" cy="36" r="3" fill="currentColor" className="opacity-90" />
        <circle cx="48" cy="20" r="3" fill="currentColor" className="opacity-90" />
      </svg>
    )
  },
  {
    num: '(07)',
    cursiveTitle: 'Regional',
    normalTitle: 'Reach',
    description: 'Campaign execution across Jordan, GCC, and international markets.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80">
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
        <path d="M8 32H56" stroke="currentColor" strokeWidth="1.2" className="opacity-60" />
        <ellipse cx="32" cy="32" rx="12" ry="24" stroke="currentColor" strokeWidth="1.2" className="opacity-50" />
        <line x1="32" y1="8" x2="32" y2="56" stroke="currentColor" strokeWidth="1.2" className="opacity-60" />
        <circle cx="20" cy="24" r="2.5" fill="currentColor" className="opacity-80" />
        <circle cx="44" cy="40" r="2.5" fill="currentColor" className="opacity-80" />
        <circle cx="32" cy="18" r="2.5" fill="currentColor" className="opacity-85" />
      </svg>
    )
  },
  {
    num: '(08)',
    cursiveTitle: 'Fast',
    normalTitle: 'Execution',
    description: 'Agile team responding to new ideas within 1–2 business days.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80">
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
        <path d="M36 12L20 34H32L28 52L44 30H32L36 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="opacity-40" />
        <path d="M35 15L23 31H32L29 47L41 31H32L35 15Z" fill="currentColor" className="opacity-80" />
      </svg>
    )
  }
];

const EditorialWhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] border-t border-[var(--border-color)] overflow-hidden transition-colors duration-700">
      <div className="container-custom">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end relative pb-4">

          <div className="relative z-10">
            <p className="text-[var(--text-secondary)] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Why Us</p>
            
            <h2 className="relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] text-4xl md:text-5xl lg:text-[56px] mb-8">
              <span className="font-serif italic font-light mr-2">Why</span>
              MAS?
            </h2>

            <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed max-w-[500px] font-normal">
              Because great marketing is more than visibility. We help brands build meaningful connections, accelerate growth, and deliver measurable results.
            </p>
          </div>

          <div className="relative z-10 flex lg:justify-end items-end h-full lg:pb-4">
            <a 
              href="#contact" 
              className="group flex items-center justify-between border-b border-[var(--border-color)] pb-4 transition-all hover:border-[var(--text-primary)] w-[260px]"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)]/90">
                Book Your Appointment
              </span>
              
              {/* Circular Dotted Spinning Indicator */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <div 
                      key={i} 
                      className="absolute w-[2px] h-[2px] bg-[var(--text-primary)] rounded-full opacity-40"
                      style={{ transform: `rotate(${angle}deg) translateY(-10px)` }}
                    />
                  ))}
                </div>
                <div className="w-[1.5px] h-[1.5px] bg-[var(--text-primary)] rounded-full" />
              </div>
            </a>
          </div>

        </div>

        {/* 4x2 Grid of Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-20 relative z-10">
          {whyUsData.map((item, index) => (
            <div key={index} className="group relative flex flex-col items-start">
              
              {/* Icon Frame */}
              <div className="w-16 h-16 rounded-full bg-[var(--text-primary)]/[0.02] border border-[var(--border-color)] flex items-center justify-center mb-8 group-hover:bg-[var(--text-primary)]/[0.04] group-hover:border-[var(--text-primary)]/20 transition-all duration-500 group-hover:scale-105">
                {item.icon}
              </div>

              {/* Title Block */}
              <div className="relative w-full mb-3 min-h-[44px] flex items-end">
                <h3 className="relative z-10 flex flex-wrap items-baseline gap-x-1.5 leading-none">
                  <span className="font-serif italic font-light text-[var(--text-primary)] text-[1.25em] leading-none">{item.cursiveTitle}</span>
                  <span className="font-display font-medium text-[var(--text-primary)] text-[15px] sm:text-[16px] md:text-[17px] tracking-tight">{item.normalTitle}</span>
                </h3>
              </div>

              {/* Description */}
              <p className="text-[var(--text-secondary)] text-[13px] md:text-[14px] leading-relaxed max-w-[280px]">
                {item.description}
              </p>

            </div>
          ))}
        </div>
      </div>
      
      {/* Custom slow spin styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}} />
    </section>
  );
};

export default EditorialWhyUs;
