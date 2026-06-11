import React from 'react';

const clientLogos = [
  { src: 'images/partners/MOG-logo.png', alt: 'MOG', isDark: true },
  { src: 'images/partners/chupa-chups.png', alt: 'Chupa Chups', isDark: false },
  { src: 'images/partners/drfarah-1.png', alt: 'Dr. Farah', isDark: true },
  { src: 'images/partners/nasmat-watan-1.png', alt: 'Nasmat Watan', isDark: true },
  { src: 'images/partners/serene-kogo.png', alt: 'Serene', isDark: true },
  { src: 'images/partners/super-logo.png', alt: 'Super', isDark: true },
];

const EditorialClients: React.FC = () => {
  // Repeat the logos array multiple times to ensure it fills widescreen marquees seamlessly
  const repeatedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

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
          <div className="animate-marquee flex items-center gap-6 md:gap-8">
            {repeatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 group flex items-center justify-center cursor-pointer px-5 py-3 h-14 w-36 transition-all duration-300 opacity-80 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-8 max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                  style={logo.isDark ? { filter: 'brightness(0) invert(1)' } : undefined}
                  loading="lazy"
                />
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
          animation: marquee-scroll 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default EditorialClients;
