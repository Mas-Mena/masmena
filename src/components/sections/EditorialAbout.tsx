import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EditorialAbout: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const textToSplit = "bout MAS &";
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
          
          {/* Background Faded Number */}
          <div className="absolute -top-12 -left-8 md:-top-24 md:-left-16 text-[180px] sm:text-[240px] md:text-[320px] font-medium text-[var(--text-primary)]/[0.012] leading-none pointer-events-none tracking-tighter select-none z-0">
            (02)
          </div>

          <div className="relative z-10">
            <p className="text-[var(--text-secondary)] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Who We Are</p>
            
            <h2 className="relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] text-4xl md:text-5xl lg:text-[56px] mb-8">
              <span
                className="inline-block font-normal text-[var(--text-primary)] select-none mr-1 relative -top-[0.05em]"
                style={{ fontFamily: '"Great Vibes", cursive', fontSize: '1.35em', lineHeight: 0.8 }}
              >A</span>
              <span ref={textRef}>bout MAS &</span><br />
              our creative impact
            </h2>

            <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed max-w-[500px] font-normal">
              MAS is a full-service marketing agency based in Amman, Jordan. Specializing in creative campaigns, digital presence, and marketing across the GCC and MENA, we blend digital and offline strategies to drive impact, embodying our slogan “Creativity, Strategy, Impact.”
            </p>
          </div>

          <div className="relative z-10 flex lg:justify-end items-end h-full lg:pb-4">
            <a 
              href="#contact" 
              className="group flex items-center justify-between border-b border-[var(--border-color)] pb-4 transition-all hover:border-[var(--text-primary)] w-[220px]"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)]/90">
                Book A Call
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
              src="https://www.creativecue.co/videos/showcase.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorialAbout;
