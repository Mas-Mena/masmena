import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const EditorialAboutLegacy: React.FC = () => {
  return (
    <section id="agency" className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] section-padding border-t border-[var(--border-color)] overflow-hidden transition-colors duration-700">
      
      {/* Background Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="container-custom h-full relative">
          <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-white/5" />
          <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-white/5" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Team Image & Floating Badge */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 rounded-none overflow-hidden shadow-2xl border border-[var(--border-color)] aspect-[4/3] md:aspect-[16/11]"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="MAS MENA Team"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Ambient Background Glow Elements */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[var(--accent-color)]/[0.04] rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[var(--accent-color)]/[0.06] rounded-full blur-3xl" />
            
            {/* Glassmorphic Floating Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -left-4 md:-left-8 bg-black/40 backdrop-blur-md p-6 px-8 border border-white/10 shadow-2xl z-20 flex flex-col items-center justify-center text-center rounded-none w-[180px]"
            >
              <div className="text-4xl font-extrabold text-[var(--accent-color)] tracking-tight mb-1" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                10+
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-black text-white/70 leading-normal">
                Years of Experience
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Copy & Checklists */}
          <div className="order-1 lg:order-2 relative">
            {/* Faded Background Number */}
            <div className="absolute -top-20 -left-12 text-[180px] md:text-[240px] leading-none font-medium text-[var(--text-primary)]/[0.012] pointer-events-none tracking-tighter select-none">
              (04)
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <p className="text-[var(--text-secondary)] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">About MAS MENA</p>
              
              <h2 className="relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] mb-8">
                <span
                  className="inline-block font-normal text-[var(--text-primary)] select-none mr-1 relative -top-[0.05em]"
                  style={{ fontFamily: '"Great Vibes", cursive', fontSize: '1.3em', lineHeight: 0.8 }}
                >E</span>mpowering Brands<br />
                in the <span className="font-serif italic font-light text-[var(--accent-color)]">Digital Era</span>
              </h2>

              <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed mb-8 font-normal max-w-[500px]">
                MAS MENA is more than just a marketing agency. We are a team of creative thinkers, data analysts, and cultural experts dedicated to helping brands thrive in the diverse and dynamic MENA landscape.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Deep regional cultural understanding',
                  'Data-driven performance marketing',
                  'Award-winning creative production',
                  'Exclusive influencer partnerships'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center text-[var(--accent-color)] flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={12} className="stroke-[2.5px]" />
                    </div>
                    <span className="font-medium text-[var(--text-primary)]/80 text-[13.5px] leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Book Call Action */}
              <a 
                href="#contact" 
                className="group flex items-center justify-between border-b border-[var(--border-color)] pb-4 transition-all hover:border-[var(--text-primary)] w-[220px]"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)]/90">
                  Learn More About Us
                </span>
                
                {/* Custom Circular Dotted Spinning Indicator */}
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
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialAboutLegacy;
