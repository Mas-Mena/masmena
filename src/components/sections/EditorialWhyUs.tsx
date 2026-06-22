import React from 'react';
import CtaButton from '../ui/CtaButton';


const whyUsData = [
  {
    num: '(01)',
    title: 'Strategy First',
    description: 'We start with market research and tailored strategies before execution.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80 transition-all duration-500 group-hover:text-[var(--accent-color)]">
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-40 transition-transform duration-[6s] ease-linear group-hover:rotate-180" style={{ transformOrigin: '32px 32px' }} />
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1" className="opacity-60 transition-transform duration-[2s] ease-in-out group-hover:scale-[0.92]" style={{ transformOrigin: '32px 32px' }} />
        <path d="M32 16C32 24.8366 24.8366 32 16 32C24.8366 32 32 39.1634 32 48C32 39.1634 39.1634 32 48 32C39.1634 32 32 24.8366 32 16Z" fill="currentColor" className="opacity-90 transition-transform duration-700 ease-out group-hover:rotate-[90deg] group-hover:scale-110" style={{ transformOrigin: '32px 32px' }} />
      </svg>
    )
  },
  {
    num: '(02)',
    title: 'Arabic-First Marketing',
    description: 'Local dialects, cultural understanding, and regionally relevant campaigns.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80 transition-all duration-500 group-hover:text-[var(--accent-color)]">
        <rect x="26" y="10" width="12" height="12" rx="3" fill="currentColor" className="opacity-40 transition-all duration-500 ease-out group-hover:translate-y-[-3px] group-hover:opacity-60" />
        <rect x="10" y="26" width="12" height="12" rx="3" fill="currentColor" className="opacity-40 transition-all duration-500 ease-out group-hover:translate-x-[-3px] group-hover:opacity-60" />
        <rect x="26" y="26" width="12" height="12" rx="3" fill="currentColor" className="opacity-80 transition-transform duration-500 ease-out group-hover:rotate-45" style={{ transformOrigin: '32px 32px' }} />
        <rect x="42" y="26" width="12" height="12" rx="3" fill="currentColor" className="opacity-40 transition-all duration-500 ease-out group-hover:translate-x-[3px] group-hover:opacity-60" />
        <rect x="26" y="42" width="12" height="12" rx="3" fill="currentColor" className="opacity-40 transition-all duration-500 ease-out group-hover:translate-y-[3px] group-hover:opacity-60" />
      </svg>
    )
  },
  {
    num: '(03)',
    title: 'Online & Offline Expertise',
    description: 'Integrated campaigns across digital, experiential, and traditional channels.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80 transition-all duration-500 group-hover:text-[var(--accent-color)]">
        <path d="M18 14C18 14 26 22 26 32C26 42 18 50 18 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-40 transition-all duration-500 ease-out group-hover:opacity-60 group-hover:translate-x-[-2px]" />
        <path d="M32 14C32 14 40 22 40 32C40 42 32 50 32 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-80 transition-all duration-700 ease-out group-hover:scale-y-[1.12]" style={{ transformOrigin: '32px 32px' }} />
        <path d="M46 14C46 14 54 22 54 32C54 42 46 50 46 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-40 transition-all duration-500 ease-out group-hover:opacity-60 group-hover:translate-x-[2px]" />
      </svg>
    )
  },
  {
    num: '(04)',
    title: 'Influencer Network',
    description: 'Jordanian and GCC influencers, athletes, and creators.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80 transition-all duration-500 group-hover:text-[var(--accent-color)]">
        <path d="M32 6L58 32L32 58L6 32Z" stroke="currentColor" strokeWidth="1" className="opacity-30 transition-transform duration-700 ease-out group-hover:scale-[1.08]" style={{ transformOrigin: '32px 32px' }} />
        <path d="M32 16L48 32L32 48L16 32Z" stroke="currentColor" strokeWidth="1.5" className="opacity-70 transition-transform duration-700 ease-out group-hover:scale-[0.9]" style={{ transformOrigin: '32px 32px' }} />
        <line x1="32" y1="6" x2="32" y2="58" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-40" />
        <line x1="6" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-40" />
        <circle cx="32" cy="32" r="3" fill="currentColor" className="opacity-85 transition-all duration-500 ease-out group-hover:scale-[1.8] group-hover:fill-[var(--accent-color)]" style={{ transformOrigin: '32px 32px' }} />
      </svg>
    )
  },
  {
    num: '(05)',
    title: 'Creative Production',
    description: 'Photography, short-form video, content creation, and campaign assets.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80 transition-all duration-500 group-hover:text-[var(--accent-color)]">
        <path d="M32 4C32 19.464 19.464 32 4 32C19.464 32 32 44.536 32 60C32 44.536 44.536 32 60 32C44.536 32 32 19.464 32 4Z" fill="currentColor" className="opacity-75 transition-transform duration-700 ease-out group-hover:rotate-[45deg] group-hover:scale-[1.1]" style={{ transformOrigin: '32px 32px' }} />
      </svg>
    )
  },
  {
    num: '(06)',
    title: 'Data-Driven Decisions',
    description: 'Every campaign is tracked and optimized using measurable KPIs.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80 transition-all duration-500 group-hover:text-[var(--accent-color)]">
        <path d="M16 16V48H48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
        <line x1="16" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-20" />
        <line x1="32" y1="16" x2="32" y2="48" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-20" />
        <path d="M16 42L28 30L40 36L48 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 transition-all duration-700 ease-out group-hover:translate-y-[-3px] group-hover:translate-x-[1px]" />
        <circle cx="28" cy="30" r="3" fill="currentColor" className="opacity-90 transition-all duration-500 ease-out group-hover:translate-y-[-3px] group-hover:translate-x-[1px]" />
        <circle cx="40" cy="36" r="3" fill="currentColor" className="opacity-90 transition-all duration-500 ease-out group-hover:translate-y-[-3px] group-hover:translate-x-[1px]" />
        <circle cx="48" cy="20" r="3" fill="currentColor" className="opacity-90 transition-all duration-500 ease-out group-hover:translate-y-[-3px] group-hover:translate-x-[1px]" />
      </svg>
    )
  },
  {
    num: '(07)',
    title: 'Regional Reach',
    description: 'Campaign execution across Jordan, GCC, and international markets.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80 transition-all duration-500 group-hover:text-[var(--accent-color)]">
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.5" className="opacity-40 transition-transform duration-[5s] ease-linear group-hover:rotate-90" style={{ transformOrigin: '32px 32px' }} />
        <path d="M8 32H56" stroke="currentColor" strokeWidth="1.2" className="opacity-60" />
        <ellipse cx="32" cy="32" rx="12" ry="24" stroke="currentColor" strokeWidth="1.2" className="opacity-50 transition-all duration-700 ease-out group-hover:scale-x-[1.3]" style={{ transformOrigin: '32px 32px' }} />
        <line x1="32" y1="8" x2="32" y2="56" stroke="currentColor" strokeWidth="1.2" className="opacity-60" />
        <circle cx="20" cy="24" r="2.5" fill="currentColor" className="opacity-80 transition-all duration-500 ease-out group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]" />
        <circle cx="44" cy="40" r="2.5" fill="currentColor" className="opacity-80 transition-all duration-500 ease-out group-hover:translate-x-[1px] group-hover:translate-y-[1px]" />
        <circle cx="32" cy="18" r="2.5" fill="currentColor" className="opacity-85 transition-all duration-500 ease-out group-hover:translate-y-[-2px]" />
      </svg>
    )
  },
  {
    num: '(08)',
    title: 'Fast Execution',
    description: 'Agile team responding to new ideas within 1–2 business days.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--text-primary)] opacity-80 transition-all duration-500 group-hover:text-[var(--accent-color)]">
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
        <path d="M36 12L20 34H32L28 52L44 30H32L36 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="opacity-40 transition-transform duration-300 ease-out group-hover:scale-[1.08] group-hover:translate-x-[1px]" style={{ transformOrigin: '32px 32px' }} />
        <path d="M35 15L23 31H32L29 47L41 31H32L35 15Z" fill="currentColor" className="opacity-80 transition-all duration-300 ease-out group-hover:scale-[1.15] group-hover:skew-x-[-4deg] group-hover:translate-x-[1.5px]" style={{ transformOrigin: '32px 32px' }} />
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
            
            <h2 className="relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] text-[36px] md:text-[50px] mb-8">
              Why MAS?
            </h2>

            <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed max-w-[500px] font-normal">
              Because great marketing is more than visibility. We help brands build meaningful connections, accelerate growth, and deliver measurable results.
            </p>
          </div>

          <div className="relative z-10 flex lg:justify-end items-end h-full lg:pb-4">
            <CtaButton href="#contact" text="Book Your Appointment" />
          </div>

        </div>

        {/* 4x2 Grid of Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-20 relative z-10">
          {whyUsData.map((item, index) => (
            <div key={index} className="group relative flex flex-col items-start">
              
              {/* Icon Frame */}
              <div className="w-16 h-16 flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-105">
                {item.icon}
              </div>

              {/* Title Block */}
              <div className="relative w-full mb-3">
                <h3 className="relative z-10 leading-tight text-[19px] sm:text-[21px] md:text-[23px] font-medium tracking-tight text-[var(--text-primary)]">
                  {item.title}
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
    </section>
  );
};

export default EditorialWhyUs;
