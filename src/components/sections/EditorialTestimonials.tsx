import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    image: "images/testimonials/super.webp",
    quote: `"We chose the amazing team at MAS to elevate Super's visual identity, and they exceeded all our expectations! Their creativity and eye for detail gave our products a massive competitive edge. We couldn't be happier with the results.."`,
    author: "",
    title: "",
    company: "Super",
    avatar: ""
  },
  {
    id: 2,
    image: "images/testimonials/MOG.webp",
    quote: `"Building a unique marketplace like MOG from scratch was a massive challenge, but the team at MAS handled it flawlessly! They managed all our branding, marketing, and web development, bringing our vision to life perfectly."`,
    author: "",
    title: "",
    company: "MOG",
    avatar: ""
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
    quote: `"The quality of their content is unmatched. Their influencer collaborations felt like an organic extension of our beauty brand rather than a third-party agency. Highly professional and always on time."`,
    author: "Sarah Haddad",
    title: "Brand Lead",
    company: "Glow & Co.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    quote: `"We launched our Shopify-powered bilingual platform integrated with local payment gateways. MAS MENA managed the entire search-to-store funnel, lifting branch visits by 42%."`,
    author: "Omar Al-Taji",
    title: "Managing Director",
    company: "Jordan Retail",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
  }
];

const EditorialTestimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] section-padding border-t border-[var(--border-color)] transition-colors duration-700">
      <div className="container-custom relative z-10">
        
        {/* Header Area */}
        <div className="mb-20 relative px-4 md:px-0">
          <h2 className="relative font-medium tracking-tight mb-6 leading-[1.1] text-[36px] md:text-[50px]">
            From The Mouth Of Our<br />Beloved Partners & Winners
          </h2>
          <p className="text-[var(--text-secondary)] text-[14px] md:text-[15px] leading-relaxed max-w-[420px] mt-6">
            Don't take our word for it. These are the founders and marketing leads who trusted us with their companies and kept coming back.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-color)] border border-[var(--border-color)]">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="relative aspect-auto min-h-[420px] md:min-h-0 md:aspect-[1.15/1] bg-black overflow-hidden group flex flex-col md:block"
            >
              {/* Background Image - monochromatic & desaturated */}
              <div className="relative md:absolute top-0 left-0 right-0 h-[200px] sm:h-[240px] md:h-[65%] overflow-hidden grayscale contrast-125 brightness-75 transition-all duration-[1.2s] ease-in-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-90 flex-shrink-0">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-in-out group-hover:scale-105"
                />
                {/* Vignette to blend into bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
              </div>
              
              {/* Content Block */}
              <div className="relative md:absolute md:inset-0 p-6 sm:p-8 md:p-12 flex flex-col justify-end flex-1 md:flex-initial">
                
                {/* Quote Text */}
                <p className="text-[13px] md:text-[14px] text-[var(--text-secondary)] leading-[1.7] mb-6 md:mb-12 font-normal max-w-[95%]">
                  {testimonial.quote}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-end w-full">
                  
                  {/* Author Info */}
                  {testimonial.author ? (
                    <div className="flex items-center gap-4">
                      {testimonial.avatar && (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-11 h-11 object-cover grayscale brightness-110"
                        />
                      )}
                      <div className="flex flex-col">
                        <h4 className="text-[14px] font-semibold text-[var(--text-primary)] tracking-tight leading-tight">{testimonial.author}</h4>
                        <p className="text-[12px] text-[var(--text-secondary)] mt-1 font-medium">{testimonial.title}</p>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}

                  {/* Company Logo */}
                  <div className="mix-blend-normal opacity-90">
                    {testimonial.company.toLowerCase() === 'wipemate' ? (
                      <div className="flex flex-col items-end">
                         <span className="text-[20px] font-bold tracking-tighter text-[var(--text-primary)] lowercase">wipemate</span>
                      </div>
                    ) : testimonial.company.toLowerCase() === 'dadfuel' ? (
                      <div className="flex flex-col items-end">
                         <span className="text-[22px] font-black tracking-tighter text-[var(--text-primary)] uppercase italic">DADFUEL</span>
                      </div>
                    ) : (
                      <span className="text-[16px] font-bold tracking-[0.1em] uppercase text-[var(--text-secondary)]">
                        {testimonial.company}
                      </span>
                    )}
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialTestimonials;
