import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What services does MAS offer?",
    answer: "We are a full-service marketing agency offering tailored online and offline solutions, from digital campaigns, branding, and social media to print, activations, and media planning, designed to grow your brand and drive results."
  },
  {
    question: "How does MAS ensure cultural relevance?",
    answer: "We use Arabic-first strategies, local dialects, and market research to create campaigns that resonate with regional values and trends."
  },
  {
    question: "What is MAS’s campaign process?",
    answer: "We start with market research, develop tailored strategies, execute hybrid campaigns, and track performance for measurable results."
  },
  {
    question: "How does MAS measure success?",
    answer: "At MAS, we measure success by the tangible impact we create for our clients, including growth in brand awareness, engagement, sales, and long-term customer loyalty. We track key performance indicators (KPIs) across every campaign, combining data insights with strategic goals to ensure measurable and meaningful results."
  },
  {
    question: "Who are MAS’s target clients?",
    answer: "MAS works with clients across all industries. Our strategies are built on deep marketing research and professional execution, tailored to fit any sector or business size."
  },
  {
    question: "Can MAS handle international campaigns?",
    answer: "Yes, MAS has the expertise and network to manage international campaigns with local relevance and global impact, seamlessly handling strategy, execution, and performance across borders."
  },
  {
    question: "How fast can MAS respond to an idea?",
    answer: "Our agile team collaborates closely with clients and typically responds to ideas within 1–2 business days to kickstart strategy and execution."
  }
];

const EditorialFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] section-padding border-t border-[var(--border-color)] overflow-hidden transition-colors duration-700">
      <div className="container-custom relative z-10 flex flex-col lg:flex-row gap-16 xl:gap-20">
        
        {/* ── Left Column: Header & Visuals ── */}
        <div className="w-full lg:w-[45%] flex flex-col items-start">
          {/* Background Number (06) */}
          <div className="absolute -top-12 -left-8 md:-top-24 md:-left-16 text-[180px] sm:text-[240px] md:text-[320px] font-medium text-[var(--text-primary)]/[0.012] leading-none pointer-events-none tracking-tighter">
            (06)
          </div>

          {/* Heading Structure */}
          <div className="relative mb-6">
            <h2 className="relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)]">
              Frequently Asked<br />
              <span className="inline-block">Questions</span>
            </h2>
          </div>
          
          {/* Indented Text Area */}
          <div className="mb-8">
            <p className="text-[var(--text-secondary)] text-[14px] leading-relaxed max-w-[400px]">
              Find clear answers to the most common questions, all in one place. Everything is explained simply and upfront, so you know exactly what to expect.
            </p>
          </div>
          
          {/* Premium Editorial Asymmetrical Grid Showcase (4 slider images with different sizes) */}
          <div className="grid grid-cols-12 gap-2 mb-10 w-full max-w-[300px]">
            {/* 1. Large Wide Landscape (col-span-8) */}
            <div className="col-span-8 relative aspect-[16/10] overflow-hidden border border-white/10 shadow-lg rounded-none group">
              <motion.img 
                src="images/slider/dr-farah.slider.webp" 
                className="w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                alt="Dr. Farah Brand Identity" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* 2. Small Square (col-span-4) */}
            <div className="col-span-4 relative aspect-square overflow-hidden border border-white/10 shadow-lg rounded-none group">
              <motion.img 
                src="images/slider/super-design.webp" 
                className="w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                alt="MAS MENA Digital Campaign" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* 3. Tall Portrait (col-span-4) */}
            <div className="col-span-4 relative aspect-[3/4] overflow-hidden border border-white/10 shadow-lg rounded-none group">
              <motion.img 
                src="images/slider/slider (2).webp" 
                className="w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                alt="Creative Visual Design" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* 4. Long Panoramic Landscape (col-span-8) */}
            <div className="col-span-8 relative aspect-[16/7] overflow-hidden border border-white/10 shadow-lg rounded-none group">
              <motion.img 
                src="images/slider/MOG-design.webp" 
                className="w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                alt="Social Media Management" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <a href="#book" className="group flex items-center justify-between border-b border-[var(--border-color)] pb-4 transition-all hover:border-[var(--text-primary)] w-[200px]">
             <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]/90">Book A Call</span>
             <div className="relative w-6 h-6 flex items-center justify-center">
               <div className="absolute inset-0 border border-dotted border-[var(--border-color)] rounded-full animate-spin-slow" />
               <div className="w-[2px] h-[2px] bg-[var(--text-primary)] rounded-full" />
             </div>
          </a>
        </div>

        {/* ── Right Column: Interactive Accordion ── */}
        <div className="flex-1 flex flex-col border-t border-white/10 mt-12 lg:mt-0">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index}
                className={`relative border-b border-white/10 transition-all duration-500 ${isOpen ? 'bg-gradient-to-b from-white/[0.05] to-transparent' : 'hover:bg-white/[0.01]'}`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full py-8 md:py-12 px-2 sm:px-6 md:px-8 flex justify-between items-center text-left transition-all"
                >
                  <span className={`text-[17px] sm:text-[20px] md:text-[24px] font-semibold tracking-tight text-left transition-all duration-300 ${isOpen ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                    {item.question}
                  </span>
                  
                  <div className="relative w-6 h-6 flex items-center justify-center opacity-40 flex-shrink-0 ml-4">
                    <div className="flex flex-col gap-[3px] items-end">
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <div className="flex gap-[3px]">
                        <div className="w-1 h-1 bg-[var(--text-primary)] rounded-full" />
                        <div className="w-1 h-1 bg-[var(--text-primary)] rounded-full" />
                      </div>
                    </div>
                  </div>
                </button>
 
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-2 sm:px-6 md:px-8 pb-8 md:pb-12">
                        <p className="text-[var(--text-secondary)] text-[14px] sm:text-[15px] md:text-[17px] text-left leading-[1.8] max-w-[620px]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}} />
    </section>
  );
};

export default EditorialFAQ;
