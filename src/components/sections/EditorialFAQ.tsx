import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Why choose MAS as your marketing agency?",
    answer: "MAS is a full-service marketing agency that blends digital and offline strategies. We deliver creative, data-driven, and culturally relevant campaigns tailored to Jordan, the GCC, and the MENA region, embodying our slogan 'Creativity, Strategy, Impact'."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have extensive experience delivering high-impact marketing and brand solutions across multiple sectors, including FMCG, healthcare, beauty, pharmaceuticals, retail, and more."
  },
  {
    question: "Do you operate outside Jordan?",
    answer: "Yes! While our primary headquarters is in Jordan, we blend digital and offline strategies to drive growth and deliver culturally resonant campaigns across Jordan, the GCC, and the wider MENA region."
  },
  {
    question: "What is Presence Management?",
    answer: "Presence Management is our specialized service designed for multi-location businesses. We help brands manage listing synchronization, review response workflows, local discoverability, and SEO performance from one centralized dashboard."
  },
  {
    question: "How do we collaborate and track projects?",
    answer: "We collaborate efficiently using Slack for fast asynchronous communication and Notion for dedicated project management boards, giving you direct visibility into task lists, progress, and updates in real-time."
  },
  {
    question: "How quickly can a campaign launch?",
    answer: "Typical campaign timelines vary based on scope, but simple campaigns and assets can be developed in 2-3 business days. Comprehensive full-service strategies are mapped out to ensure precision, strategy, and impact."
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
          
          {/* Premium Widescreen Image Showcase */}
          <div className="relative w-full aspect-[16/10] mb-10 overflow-hidden border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
             <motion.img 
               src="/images/projects/projects1.webp" 
               className="w-full h-full object-cover" 
               whileHover={{ scale: 1.04 }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
               alt="MAS MENA Work" 
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Indented Text Area */}
          <div className="pl-4 md:pl-8">
            <p className="text-[var(--text-secondary)] text-[14px] leading-relaxed max-w-[400px] mb-12">
              Find clear answers to the most common questions, all in one place. Everything is explained simply and upfront, so you know exactly what to expect.
            </p>
            
            <a href="#book" className="group flex items-center justify-between border-b border-[var(--border-color)] pb-4 transition-all hover:border-[var(--text-primary)] w-[200px]">
               <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]/90">Book A Call</span>
               <div className="relative w-6 h-6 flex items-center justify-center">
                 <div className="absolute inset-0 border border-dotted border-[var(--border-color)] rounded-full animate-spin-slow" />
                 <div className="w-[2px] h-[2px] bg-[var(--text-primary)] rounded-full" />
               </div>
            </a>
          </div>
        </div>

        {/* ── Right Column: Interactive Accordion ── */}
        <div className="flex-1 flex flex-col border-t border-white/10">
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
