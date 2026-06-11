import React from 'react';

const track1 = [
  { name: 'Figma', category: 'Design & Prototyping', iconSrc: 'images/skills/figma.png' },
  { name: 'Photoshop', category: 'Creative Production', iconSrc: 'images/skills/photoshop.png' },
  { name: 'Webflow', category: 'Development & Hosting', iconSrc: 'images/skills/webflow.png' },
  { name: 'Framer', category: 'Interactive Design', iconSrc: 'images/skills/farmer.png' }
];

const track2 = [
  { name: 'React', category: 'Frontend Technology', iconSrc: 'images/skills/react.png' },
  { name: 'Shopify', category: 'E-Commerce Solutions', iconSrc: 'images/skills/social.svg' },
  { name: 'WordPress', category: 'CMS Platforms', iconSrc: 'images/skills/wordpress-1.svg' },
  { name: 'Squarespace', category: 'Digital Publishing', iconSrc: 'images/skills/squarespace-white.svg' }
];

// Repeat tracks 8 times to fill ultra-widescreen viewports without gaps
const repeatedTrack1 = [...track1, ...track1, ...track1, ...track1, ...track1, ...track1, ...track1, ...track1];
const repeatedTrack2 = [...track2, ...track2, ...track2, ...track2, ...track2, ...track2, ...track2, ...track2];

const EditorialTools: React.FC = () => {
  return (
    <section id="tools" className="py-24 md:py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] border-t border-[var(--border-color)] overflow-hidden transition-colors duration-700">
      <div className="container-custom">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end relative pb-4 border-b border-[var(--border-color)] mb-16">
          
          {/* Background Faded Number */}
          <div className="absolute -top-12 -left-8 md:-top-24 md:-left-16 text-[180px] sm:text-[240px] md:text-[320px] font-medium text-[var(--text-primary)]/[0.012] leading-none pointer-events-none tracking-tighter select-none z-0">
            (05)
          </div>

          <div className="relative z-10">
            <p className="text-[var(--text-secondary)] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Our Stack</p>
            
            <h2 className="relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] text-4xl md:text-5xl lg:text-[56px] mb-8">
              <span className="font-serif italic font-light mr-2">The Tools</span>
              Behind Our Work
            </h2>

            <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed max-w-[500px] font-normal">
              We leverage industry-leading design, development, and publishing platforms to build robust, scalable, and visually arresting campaigns.
            </p>
          </div>

          <div className="relative z-10 flex lg:justify-end items-end h-full lg:pb-4">
            <a 
              href="#contact" 
              className="group flex items-center justify-between border-b border-[var(--border-color)] pb-4 transition-all hover:border-[var(--text-primary)] w-[220px]"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)]/90">
                Start A Project
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

        {/* Dual Marquee Track System */}
        <div className="flex flex-col gap-6 relative z-10 w-full overflow-hidden select-none py-4">
          {/* Vignette Overlays for smooth side-fade edges */}
          <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

          {/* Track 1: Moving Left */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-left flex items-center gap-6">
              {repeatedTrack1.map((tool, index) => (
                <div 
                  key={`t1-${index}`}
                  className="group flex-shrink-0 flex items-center gap-4 border border-[var(--border-color)] bg-white/[0.01] hover:bg-white/[0.03] hover:border-[var(--accent-color)]/20 px-6 py-4 transition-all duration-300 w-64 h-20 cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center p-2 bg-white/[0.02] border border-[var(--border-color)] group-hover:border-[var(--accent-color)]/25 transition-all duration-500 scale-95 group-hover:scale-100 flex-shrink-0">
                    <img 
                      src={tool.iconSrc} 
                      alt={`${tool.name} Logo`} 
                      className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-1 truncate">{tool.category}</span>
                    <h3 className="text-[15px] font-display font-medium text-[var(--text-primary)] tracking-tight truncate">{tool.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Track 2: Moving Right */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-right flex items-center gap-6">
              {repeatedTrack2.map((tool, index) => (
                <div 
                  key={`t2-${index}`}
                  className="group flex-shrink-0 flex items-center gap-4 border border-[var(--border-color)] bg-white/[0.01] hover:bg-white/[0.03] hover:border-[var(--accent-color)]/20 px-6 py-4 transition-all duration-300 w-64 h-20 cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center p-2 bg-white/[0.02] border border-[var(--border-color)] group-hover:border-[var(--accent-color)]/25 transition-all duration-500 scale-95 group-hover:scale-100 flex-shrink-0">
                    <img 
                      src={tool.iconSrc} 
                      alt={`${tool.name} Logo`} 
                      className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-1 truncate">{tool.category}</span>
                    <h3 className="text-[15px] font-display font-medium text-[var(--text-primary)] tracking-tight truncate">{tool.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Embedded CSS for Dual Marquee Tracks */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 25s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default EditorialTools;
