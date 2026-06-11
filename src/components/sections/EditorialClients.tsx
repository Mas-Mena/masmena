import React from 'react';

const clientLogos = [
  { name: 'Wander', type: 'serif' },
  { name: 'AM MD', type: 'boxed' },
  { name: 'GROW PRONTO', type: 'cursor' },
  { name: 'HIDE', type: 'bold' },
  { name: 'Nailboo', type: 'chic' },
  { name: 'TATBROW', type: 'spaced' },
  { name: 'BEST OF THE BONE', type: 'stamp' },
  { name: 'ecomlanders', type: 'lowercase' },
  { name: 'NOMAD LANE', type: 'thin' },
  { name: 'VOLTED', type: 'italic-volt' },
  { name: 'DADFUEL', type: 'bold-italic' },
  { name: 'KN KOSSO', type: 'block' },
  { name: 'melróse', type: 'elegant' },
  { name: 'FIT PREPS', type: 'athletic' },
  { name: 'lukamachain', type: 'tech' },
  { name: 'monday', type: 'dot' },
  { name: 'PRIME IV', type: 'roman' },
  { name: 'THE MAN SHAKE', type: 'stacked' },
  { name: 'SCG', type: 'modern' },
  { name: 'REPRICED', type: 'price' },
  { name: 'Growth Minds', type: 'clean' },
  { name: 'boost berry', type: 'berry' },
  { name: 'CRAZE', type: 'heavy' },
  { name: 'Optimum 7', type: 'number' },
  { name: 'DORI EYEWEAR', type: 'glasses' },
  { name: 'TWISTY', type: 'wave' },
  { name: 'wipemate', type: 'wipemate' },
  { name: 'mailbucks', type: 'envelope' },
  { name: 'eightfold', type: 'infinity' },
  { name: 'KOBALT CLUB', type: 'club' },
  { name: 'GEL BLASTER', type: 'blaster' },
  { name: 'EVE AND CO', type: 'chic-co' },
  { name: 'WLDD', type: 'wide' }
];

const renderLogo = (logo: { name: string; type: string }) => {
  switch (logo.type) {
    case 'serif':
      return (
        <span className="font-serif italic text-lg tracking-wide text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'boxed':
      return (
        <span className="font-mono text-[10px] font-semibold border border-white/20 px-2.5 py-1 text-white/30 tracking-wider group-hover:border-white/50 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'cursor':
      return (
        <span className="font-sans text-[11px] tracking-widest font-black text-white/30 flex items-center gap-1 group-hover:text-white/95 transition-colors">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M7 2l12 11.2-5.8.8 4.6 7.4-2.8 1.6-4.6-7.4-3.4 3.4z"/></svg>
          {logo.name}
        </span>
      );
    case 'bold':
      return (
        <span className="font-black text-lg tracking-tighter text-white/35 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'chic':
      return (
        <span className="font-serif italic text-base tracking-widest font-medium text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'spaced':
      return (
        <span className="font-sans text-[9px] tracking-[0.3em] font-semibold text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'stamp':
      return (
        <span className="font-serif text-[9px] tracking-widest font-bold border-y border-white/20 py-0.5 px-1.5 text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'lowercase':
      return (
        <span className="font-sans text-sm tracking-tight font-medium text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'thin':
      return (
        <span className="font-sans text-xs tracking-[0.2em] font-light text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'italic-volt':
      return (
        <span className="font-sans italic font-black text-sm tracking-tight text-white/30 flex items-center gap-0.5 group-hover:text-white/95 transition-colors">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
          {logo.name}
        </span>
      );
    case 'bold-italic':
      return (
        <span className="font-sans italic font-extrabold text-sm tracking-tighter text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'block':
      return (
        <span className="font-sans font-black text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 text-white/30 group-hover:bg-white/10 group-hover:text-white/95 transition-all">
          {logo.name}
        </span>
      );
    case 'elegant':
      return (
        <span className="font-serif text-sm font-semibold tracking-wide text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'athletic':
      return (
        <span className="font-sans italic font-black text-xs tracking-wider text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'tech':
      return (
        <span className="font-mono text-[9px] tracking-[0.15em] font-bold text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'dot':
      return (
        <span className="font-sans text-sm font-black tracking-tight text-white/30 flex items-baseline group-hover:text-white/95 transition-colors">
          {logo.name}<span className="text-[var(--accent-color)] text-base">.</span>
        </span>
      );
    case 'roman':
      return (
        <span className="font-serif text-xs tracking-[0.25em] font-medium text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'stacked':
      return (
        <span className="font-sans text-[8px] leading-none tracking-widest font-black text-white/30 flex flex-col text-center group-hover:text-white/95 transition-colors">
          <span>THE MAN</span>
          <span className="text-[9px] tracking-tight mt-0.5">SHAKE</span>
        </span>
      );
    case 'modern':
      return (
        <span className="font-sans text-sm tracking-widest font-extrabold text-white/30 flex items-center gap-1 group-hover:text-white/95 transition-colors">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/></svg>
          {logo.name}
        </span>
      );
    case 'price':
      return (
        <span className="font-sans text-xs tracking-wide font-black text-white/30 flex items-center gap-0.5 group-hover:text-white/95 transition-colors">
          <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M12.5 3c-1.3 0-2.5.5-3.4 1.4l-6.2 6.2c-.8.8-.8 2.1 0 2.9l6.2 6.2c.8.8 2.1.8 2.9 0l6.2-6.2c.9-.9 1.4-2.1 1.4-3.4V5c0-1.1-.9-2-2-2h-5.1zm3.5 5c-.8 0-1.5-.7-1.5-1.5S15.2 5 16 5s1.5.7 1.5 1.5S16.8 8 16 8z"/></svg>
          {logo.name}
        </span>
      );
    case 'clean':
      return (
        <span className="font-sans text-xs tracking-wider font-semibold text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'berry':
      return (
        <span className="font-sans text-xs tracking-tight font-black text-white/30 flex items-center gap-1 group-hover:text-white/95 transition-colors">
          <span className="w-2.5 h-2.5 rounded-full bg-white/25 flex items-center justify-center text-[6px] font-bold text-black group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors">b</span>
          {logo.name}
        </span>
      );
    case 'heavy':
      return (
        <span className="font-sans text-base tracking-tighter font-extrabold uppercase text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    case 'number':
      return (
        <span className="font-sans text-xs font-black text-white/30 group-hover:text-white/95 transition-colors">
          Optimum<span className="text-[var(--accent-color)] text-sm">7</span>
        </span>
      );
    case 'glasses':
      return (
        <span className="font-sans text-[9px] tracking-[0.2em] font-extrabold text-white/30 flex flex-col items-center group-hover:text-white/95 transition-colors">
          <svg className="w-3.5 h-3 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24"><circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><path d="M11 12h2"/></svg>
          <span className="mt-0.5">DORI EYEWEAR</span>
        </span>
      );
    case 'wave':
      return (
        <span className="font-serif italic text-xs tracking-wider font-semibold text-white/30 flex items-center gap-1 group-hover:text-white/95 transition-colors">
          <svg className="w-3 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 3c-1.2 0-2.4.4-3.4 1.2-1-.8-2.2-1.2-3.4-1.2-1.8 0-3.5.9-4.5 2.5l1.7 1c.6-.9 1.6-1.5 2.8-1.5.8 0 1.6.3 2.2.8-.8.8-1.2 1.9-1.2 3 0 .8.3 1.6.8 2.2-.8.8-1.9 1.2-3 1.2H1v2h2.2c1.2 0 2.4-.4 3.4-1.2 1 .8 2.2 1.2 3.4 1.2 1.8 0 3.5-.9 4.5-2.5l-1.7-1c-.6.9-1.6 1.5-2.8 1.5-.8 0-1.6-.3-2.2-.8.8-.8 1.2-1.9 1.2-3 0-.8-.3-1.6-.8-2.2.8-.8 1.9-1.2 3-1.2h2.2V3z"/></svg>
          {logo.name}
        </span>
      );
    case 'wipemate':
      return (
        <span className="font-sans text-sm font-bold tracking-tighter text-white/40 lowercase group-hover:text-white/95 transition-colors">
          wipemate
        </span>
      );
    case 'envelope':
      return (
        <span className="font-sans text-xs tracking-wide font-bold text-white/30 flex items-center gap-1 group-hover:text-white/95 transition-colors">
          <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m21 8-9 6-9-6"/></svg>
          {logo.name}
        </span>
      );
    case 'infinity':
      return (
        <span className="font-sans text-xs tracking-[0.1em] font-semibold text-white/30 flex items-center gap-1 group-hover:text-white/95 transition-colors">
          <svg className="w-3.5 h-3 fill-current" viewBox="0 0 24 24"><path d="M18.5 6C16.8 6 15.2 7 14 8.7c-1.2-1.7-2.8-2.7-4.5-2.7C6.5 6 4 8.2 4 11s2.5 5 5.5 5c1.7 0 3.3-1 4.5-2.7 1.2 1.7 2.8 2.7 4.5 2.7 3 0 5.5-2.2 5.5-5s-2.5-5-5.5-5zm-9 8c-1.9 0-3.5-1.3-3.5-3s1.6-3 3.5-3 3.5 1.3 3.5 3-1.6 3-3.5 3zm9 0c-1.9 0-3.5-1.3-3.5-3s1.6-3 3.5-3 3.5 1.3 3.5 3-1.6 3-3.5 3z"/></svg>
          {logo.name}
        </span>
      );
    case 'club':
      return (
        <span className="font-sans text-xs tracking-widest font-black text-white/30 flex items-center gap-1 group-hover:text-white/95 transition-colors">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h14v-8h3L12 2z"/></svg>
          {logo.name}
        </span>
      );
    case 'blaster':
      return (
        <span className="font-sans italic font-black text-[10px] tracking-tight text-white/30 border border-white/20 px-2 py-0.5 group-hover:text-white/95 group-hover:border-white/50 transition-colors">
          {logo.name}
        </span>
      );
    case 'chic-co':
      return (
        <span className="font-serif italic text-xs tracking-widest font-bold text-white/30 group-hover:text-white/95 transition-colors">
          EVE & CO
        </span>
      );
    case 'wide':
      return (
        <span className="font-mono text-sm tracking-[0.35em] font-black text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
    default:
      return (
        <span className="font-sans text-xs font-bold text-white/30 group-hover:text-white/95 transition-colors">
          {logo.name}
        </span>
      );
  }
};

const EditorialClients: React.FC = () => {
  return (
    <section id="clients" className="relative w-full bg-[var(--bg-primary)] border-t border-[var(--border-color)] py-12 md:py-16 overflow-hidden transition-colors duration-700">
      <div className="container-custom flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 relative z-10">
        
        {/* Left Column: Heading Text */}
        <div className="w-full lg:w-[25%] flex-shrink-0">
          <p className="text-[var(--text-secondary)] text-[14px] md:text-[15px] font-medium leading-relaxed tracking-tight select-text">
            Trusted by world's<br className="hidden lg:block" /> most exciting brands
          </p>
        </div>

        {/* Right Column: Infinite Marquee */}
        <div className="w-full flex-1 overflow-hidden relative select-none">
          {/* Left and right vignette overlays for premium fade effect */}
          <div className="absolute top-0 left-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

          {/* Marquee Inner Track */}
          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            {/* Render list twice to ensure seamless infinite looping */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 group flex items-center justify-center"
              >
                {renderLogo(logo)}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Embedded Styles for Infinite Marquee Scrolling */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee-scroll 45s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default EditorialClients;
