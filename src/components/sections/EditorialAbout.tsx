import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    num: '(01)',
    firstLetter: 'I',
    restOfTitle: 'nfluencer & Creator',
    items: [
      { num: '(1.1)', label: 'Influencer Marketing' },
      { num: '(1.2)', label: 'Affiliate Marketing' },
      { num: '(1.3)', label: 'Creator Partnerships' },
      { num: '(1.4)', label: 'Campaign Strategy & Management' },
      { num: '(1.5)', label: 'Performance Tracking & Reporting' }
    ]
  },
  {
    num: '(02)',
    firstLetter: 'C',
    restOfTitle: 'ontent Production',
    items: [
      { num: '(2.1)', label: 'Short-Form Video Production' },
      { num: '(2.2)', label: 'Professional Photography' },
      { num: '(2.3)', label: 'Commercial Photography' },
      { num: '(2.4)', label: 'Lifestyle Photography' },
      { num: '(2.5)', label: 'Corporate Photography' },
      { num: '(2.6)', label: 'Product Photography' }
    ]
  },
  {
    num: '(03)',
    firstLetter: 'S',
    restOfTitle: 'ocial Media',
    items: [
      { num: '(3.1)', label: 'Content Planning & Strategy' },
      { num: '(3.2)', label: 'Community Management' },
      { num: '(3.3)', label: 'Audience Engagement' },
      { num: '(3.4)', label: 'Moderation & Customer Interaction' }
    ]
  },
  {
    num: '(04)',
    firstLetter: 'D',
    restOfTitle: 'igital Marketing',
    items: [
      { num: '(4.1)', label: 'Search Engine Optimization (SEO) & Digital PR' },
      { num: '(4.2)', label: 'Generative Engine Optimization (GEO) & Ai Search Visibility' },
      { num: '(4.3)', label: 'Media Outreach' },
      { num: '(4.4)', label: 'Online Reputation & Authority' }
    ]
  },
  {
    num: '(05)',
    firstLetter: 'E',
    restOfTitle: '-Commerce',
    items: [
      { num: '(5.1)', label: 'Shopify Store Development' },
      { num: '(5.2)', label: 'Conversion Rate Optimization' },
      { num: '(5.3)', label: 'E-Commerce Strategy' },
      { num: '(5.4)', label: 'Customer Journey Optimization' }
    ]
  },
  {
    num: '(06)',
    firstLetter: 'E',
    restOfTitle: 'xperiential',
    items: [
      { num: '(6.1)', label: 'Brand Activations' },
      { num: '(6.2)', label: 'Pop-Up Experiences' },
      { num: '(6.3)', label: 'Consumer Engagement Events' },
      { num: '(6.4)', label: 'On-Ground Campaigns' }
    ]
  }
];

const EditorialAbout: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const textToSplit = "The Kind Of Work";
      textRef.current.innerHTML = textToSplit
        .split("")
        .map(char => `<span class="char inline-block">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      gsap.fromTo(
        textRef.current.querySelectorAll(".char"),
        { 
          opacity: 0,
          y: 50,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          }
        }
      );
    }

    if (videoContainerRef.current) {
      gsap.fromTo(
        videoContainerRef.current,
        {
          scale: 0.85,
        },
        {
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: "top bottom",
            end: "bottom center",
            scrub: true,
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] border-t border-[var(--border-color)] overflow-hidden transition-colors duration-700">
      <div className="container-custom">
        {/* Header Block exactly like the image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end relative pb-4">

          <div className="relative z-10">
            <p className="text-[var(--text-secondary)] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Our Services</p>
            
            <h2 className="relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] text-[36px] md:text-[50px] mb-8">
              <span ref={textRef}>The Kind Of Work</span><br />
              We Do For Our Partners
            </h2>

            <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed max-w-[500px] font-normal">
              Marketing today requires more than a single service. That's why MAS combines strategy, content, media, influencers, technology, and experiences to help brands grow through a fully integrated approach.
            </p>
          </div>

          <div className="relative z-10 flex lg:justify-end items-end h-full lg:pb-4">
            <a 
              href="#contact" 
              className="group flex items-center justify-between border-b border-[var(--border-color)] pb-4 transition-all hover:border-[var(--text-primary)] w-[260px]"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)]/90">
                Book Your Appointment
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
          </div>

        </div>

        {/* Video showcase with responsive Scroll Effect */}
        <div className="w-full mt-16 md:mt-24 relative overflow-visible flex justify-center">
          <div 
            ref={videoContainerRef} 
            className="w-full aspect-video overflow-hidden shadow-2xl relative"
            style={{ transformOrigin: 'center center' }}
          >
            <video
              src="images/show-case.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 6-Column / 3-Column Services List in Creative Cue Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 sm:gap-y-20 mt-16 md:mt-28 lg:mt-36 relative z-10">
          {servicesData.map((category, index) => (
            <div 
              key={index}
              className="relative h-auto md:h-[320px] bg-black p-8 sm:p-10 overflow-hidden flex flex-col justify-start group hover:bg-white/[0.01] transition-all duration-500"
            >

              {/* Styled Title */}
              <h3 className="relative z-10 text-2xl md:text-3xl font-medium tracking-tight mb-8 leading-none">
                <span className="font-serif italic font-light text-[1.25em] mr-0.5">{category.firstLetter}</span>
                <span className="font-display font-medium text-[var(--text-primary)]">{category.restOfTitle}</span>
              </h3>

              {/* Sub-items Indented List */}
              <ul className="space-y-4 relative z-10 w-full">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[13px] md:text-[14px]">
                    <span className="text-[var(--text-secondary)] font-sans opacity-50 font-semibold w-8 flex-shrink-0 text-left">{item.num}</span>
                    <span className="text-[var(--text-primary)]/80 leading-snug">{item.label}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EditorialAbout;
