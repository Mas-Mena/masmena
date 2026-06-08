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

const gridImages = [
  { src: '/images/slider/dr-farah.slider.webp', span: 'col-span-12 md:col-span-8', aspect: 'aspect-[16/10]', alt: 'Dr. Farah Brand Identity' },
  { src: '/images/slider/slider (1).webp', span: 'col-span-12 md:col-span-4', aspect: 'aspect-square', alt: 'MAS MENA Digital Campaign' },
  { src: '/images/slider/slider (2).webp', span: 'col-span-12 md:col-span-4', aspect: 'aspect-[3/4]', alt: 'Creative Visual Design' },
  { src: '/images/slider/slider (3).webp', span: 'col-span-12 md:col-span-8', aspect: 'aspect-[16/10] md:aspect-[16/7]', alt: 'Social Media Management' },
  { src: '/images/slider/slider (4).webp', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[16/10]', alt: 'Brand Presence Campaign' },
  { src: '/images/slider/slider (5).webp', span: 'col-span-12 md:col-span-6', aspect: 'aspect-[16/10]', alt: 'FMCG Product Marketing' },
  { src: '/images/slider/slider (6).webp', span: 'col-span-12 md:col-span-4', aspect: 'aspect-square', alt: 'Corporate Event Coverage' },
  { src: '/images/slider/slider (8).webp', span: 'col-span-12 md:col-span-8', aspect: 'aspect-[16/10]', alt: 'MENA Strategy Blueprint' },
  { src: '/images/slider/slider-(1).webp', span: 'col-span-12 md:col-span-5', aspect: 'aspect-[3/4]', alt: 'Digital Asset Activation' },
  { src: '/images/slider/slider-(2).webp', span: 'col-span-12 md:col-span-7', aspect: 'aspect-[16/10]', alt: 'Video Campaign Asset' },
  { src: '/images/slider/slider-(4).png', span: 'col-span-12 md:col-span-6', aspect: 'aspect-square', alt: 'B2B Creative Project' },
  { src: '/images/slider/slider-(5).webp', span: 'col-span-12 md:col-span-6', aspect: 'aspect-square', alt: 'Consumer Brand Activation' },
  { src: '/images/slider/slider.webp', span: 'col-span-12', aspect: 'aspect-[16/10] md:aspect-[21/9]', alt: 'MAS MENA Integrated Campaign' }
];

const EditorialFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] section-padding border-t border-[var(--border-color)] overflow-hidden transition-colors duration-700">
      
      {/* Background Number (06) */}
      <div className="absolute top-12 left-8 md:top-16 md:left-16 text-[180px] sm:text-[240px] md:text-[320px] font-medium text-[var(--text-primary)]/[0.012] leading-none pointer-events-none tracking-tighter z-0">
        (06)
      </div>

      <div className="container-custom relative z-10">
        {/* Top Section: Heading + Description & Accordion */}
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-20 mb-24">
          
          {/* Header & CTA */}
          <div className="w-full lg:w-[40%] flex flex-col justify-between items-start">
            <div>
              <h2 className="relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] mb-6">
                Frequently Asked<br />
                <span className="inline-block">Questions</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-[14px] leading-relaxed max-w-[400px] mb-8">
                Find clear answers to the most common questions, all in one place. Everything is explained simply and upfront, so you know exactly what to expect.
              </p>
            </div>
            
            <a href="#book" className="group flex items-center justify-between border-b border-[var(--border-color)] pb-4 transition-all hover:border-[var(--text-primary)] w-[200px] mt-8 lg:mt-0">
               <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]/90">Book A Call</span>
               <div className="relative w-6 h-6 flex items-center justify-center">
                 <div className="absolute inset-0 border border-dotted border-[var(--border-color)] rounded-full animate-spin-slow" />
                 <div className="w-[2px] h-[2px] bg-[var(--text-primary)] rounded-full" />
               </div>
            </a>
          </div>

          {/* Interactive Accordion */}
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
                    className="w-full py-8 md:py-10 px-2 sm:px-6 md:px-8 flex justify-between items-center text-left transition-all"
                  >
                    <span className={`text-[17px] sm:text-[20px] md:text-[22px] font-semibold tracking-tight text-left transition-all duration-300 ${isOpen ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
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
                        <div className="px-2 sm:px-6 md:px-8 pb-8 md:pb-10">
                          <p className="text-[var(--text-secondary)] text-[14px] sm:text-[15px] md:text-[16px] text-left leading-[1.8] max-w-[620px]">
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

        {/* Dynamic Showcase Masonry Grid of Slider Images */}
        <div className="mt-16 pt-16 border-t border-[var(--border-color)]">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)] block mb-3">Showcase</span>
            <h3 className="text-[28px] md:text-[36px] font-medium tracking-tight text-[var(--text-primary)]">
              Our Creative Portfolio
            </h3>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6 w-full">
            {gridImages.map((image, index) => (
              <motion.div
                key={index}
                className={`${image.span} relative ${image.aspect} overflow-hidden border border-white/10 shadow-lg rounded-lg group`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img 
                  src={image.src} 
                  className="w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  alt={image.alt} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-4 md:p-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/50 block mb-1">Project</span>
                  <h4 className="text-sm md:text-lg font-semibold tracking-tight text-white">{image.alt}</h4>
                </div>
              </motion.div>
            ))}
          </div>
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
