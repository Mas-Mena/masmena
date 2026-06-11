import React from 'react';

const toolsData = [
  {
    name: 'Figma',
    category: 'Design & Prototyping',
    icon: (
      <svg width="40" height="40" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0H9.5C4.25 0 0 4.25 0 9.5C0 14.75 4.25 19 9.5 19H19V0Z" fill="#F24E1E"/>
        <path d="M38 9.5C38 4.25 33.75 0 28.5 0H19V19H28.5C33.75 19 38 14.75 38 9.5Z" fill="#FF7262"/>
        <path d="M19 19H9.5C4.25 19 0 23.25 0 28.5C0 33.75 4.25 38 9.5 38H19V19Z" fill="#A259FF"/>
        <path d="M19 38H28.5C33.75 38 38 33.75 38 28.5C38 23.25 33.75 19 28.5 19H19V38Z" fill="#1ABC9C"/>
        <path d="M9.5 57C14.75 57 19 52.75 19 47.5V38H9.5C4.25 38 0 42.25 0 47.5C0 52.75 4.25 57 9.5 57Z" fill="#0ACF83"/>
      </svg>
    )
  },
  {
    name: 'Photoshop',
    category: 'Creative Production',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#001829" stroke="#31A8FF" strokeWidth="2"/>
        <path d="M6 7h3.2c1.2 0 2 .5 2 1.6s-.8 1.6-2 1.6H7.5V17H6V7Zm1.5 1.4v1.8H9c.5 0 .8-.2.8-.9s-.3-.9-.8-.9H7.5ZM12.5 13.5c.3.3.8.5 1.3.5.6 0 .9-.3.9-.7s-.3-.6-.8-.8l-.6-.2c-.8-.2-1.3-.7-1.3-1.4s.6-1.5 1.6-1.5c.6 0 1.1.2 1.4.5l-.4.7c-.3-.2-.7-.4-1.1-.4-.5 0-.7.2-.7.5s.3.5.7.6l.6.2c1 .3 1.4.8 1.4 1.5 0 .9-.7 1.5-1.7 1.5-.7 0-1.3-.3-1.6-.6l.4-.7Z" fill="#31A8FF" />
      </svg>
    )
  },
  {
    name: 'React',
    category: 'Frontend Technology',
    icon: (
      <svg width="40" height="40" viewBox="-11.5 -10.23 23 20.46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: 'Webflow',
    category: 'Development & Hosting',
    icon: (
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M91.8 19.4H74.3L60.5 61.1L49.3 26.6C48.5 24.1 46.2 22.3 43.5 22.3H26.2C23.6 22.3 21.4 24 20.6 26.5L7.2 68.6C6.4 71.1 8.2 73.7 10.9 73.7H28.4C30.7 73.7 32.7 72.2 33.3 70L40.7 45.4L51.9 80C52.7 82.5 55 84.3 57.7 84.3H75C77.6 84.3 79.8 82.6 80.6 80.1L94.1 38C95.5 33.6 92.2 29.2 87.6 29.2H76.7L83.5 52L91.8 19.4Z" fill="#4353FF"/>
      </svg>
    )
  },
  {
    name: 'Framer',
    category: 'Interactive Design',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 2h14v7H12L5 2Zm7 7h7v7H5l7-7Zm-7 7h7v6l-7-6Z" fill="url(#framer-gradient-acc)"/>
        <defs>
          <linearGradient id="framer-gradient-acc" x1="5" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0055FF" />
            <stop offset="50%" stopColor="#8833FF" />
            <stop offset="100%" stopColor="#FF00AA" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'Shopify',
    category: 'E-Commerce Solutions',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.5h-2.5V6c0-1.7-1.3-3-3-3h-3c-1.7 0-3 1.3-3 3v.5H5c-.8 0-1.5.7-1.5 1.5l1.5 12c.1.8.8 1.5 1.6 1.5h10.8c.8 0 1.5-.7 1.6-1.5l1.5-12c.1-.8-.6-1.5-1.5-1.5ZM10.5 4.5h3c.8 0 1.5.7 1.5 1.5v.5h-6V6c0-.8.7-1.5 1.5-1.5ZM18.5 8l-1.3 11H6.8L5.5 8h13Z" fill="#96bf48"/>
        <path d="M12 9.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5Zm0 3.8c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3Z" fill="#5e8e3e"/>
      </svg>
    )
  },
  {
    name: 'WordPress',
    category: 'CMS Platforms',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#21759B" />
        <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1" />
        <path d="M12.1 11.4l2.4 6.9c.4.1.8.2 1.2.2.8 0 1.6-.2 2.3-.6l-4.1-11.2c.1.2.1.4.1.6 0 .5-.1.9-.3 1.3l-1.6 2.8zm-2.8-.7L12 18.2l2.6-7.5-1.6-4.5c-.3-.8-.9-1.1-1.6-1.1-.3 0-.6.1-.9.2L9.3 10.7zM6.1 16.5c.7.8 1.6 1.3 2.7 1.5l-2.4-6.8c-.8 1.5-.9 3.4-.3 5.3zm12.7-7c0-.6-.2-1-.4-1.3-.3-.5-.7-.8-1.2-1 .3-.1.6-.2.9-.2 1.3 0 2.2.9 2.2 2.2 0 .8-.3 1.6-.8 2.5l-.7-2.2z" fill="#ffffff" />
      </svg>
    )
  },
  {
    name: 'Squarespace',
    category: 'Digital Publishing',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 8.5c1.4 0 2.5 1.1 2.5 2.5v4.5c0 1.4-1.1 2.5-2.5 2.5H11c-1.4 0-2.5-1.1-2.5-2.5V11c0-1.4 1.1-2.5 2.5-2.5h4.5Zm0 1.5H11c-.6 0-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1V11c0-.6-.4-1-1-1ZM8.5 15.5c-1.4 0-2.5-1.1-2.5-2.5V8.5C6 7.1 7.1 6 8.5 6H13c1.4 0 2.5 1.1 2.5 2.5V9h-1.5v-.5c0-.6-.4-1-1-1H8.5c-.6 0-1 .4-1 1v4.5c0 .6.4 1 1 1H9v1.5h-.5Z" fill="#ffffff" />
      </svg>
    )
  }
];

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

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
          {toolsData.map((tool, index) => (
            <div 
              key={index}
              className="group relative border border-[var(--border-color)] p-6 md:p-8 flex flex-col items-start hover:border-[var(--accent-color)]/30 hover:bg-white/[0.01] transition-all duration-500 rounded-none overflow-hidden"
            >
              {/* Hover Glow Light Overlay */}
              <div className="absolute -inset-px bg-gradient-to-br from-[var(--accent-color)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon container */}
              <div className="mb-6 flex items-center justify-center p-3 bg-white/[0.02] border border-[var(--border-color)] group-hover:border-[var(--accent-color)]/25 group-hover:bg-white/[0.04] transition-all duration-500 scale-95 group-hover:scale-100">
                {tool.icon}
              </div>

              {/* Tool Category Label */}
              <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-2 block">
                {tool.category}
              </span>

              {/* Tool Name */}
              <h3 className="text-[17px] md:text-[19px] font-display font-medium text-[var(--text-primary)] tracking-tight">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EditorialTools;
