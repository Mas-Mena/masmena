import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  /** Each string becomes one line. Separate multi-line headings into an array. */
  lines: string[];
  className?: string;
}

/**
 * Renders an h2 where each character animates in on scroll —
 * the same effect as "The Kind Of Work" in EditorialAbout.
 */
const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ lines, className = '' }) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const chars = ref.current.querySelectorAll<HTMLSpanElement>('.anim-char');

    gsap.fromTo(
      chars,
      { opacity: 0, y: 45, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.03,
        duration: 0.75,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <h2
      ref={ref}
      className={`relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] text-[36px] md:text-[50px] ${className}`}
      style={{ perspective: '600px' }}
    >
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          <span className="block overflow-hidden">
            {line.split('').map((char, j) => (
              <span
                key={j}
                className="anim-char inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </React.Fragment>
      ))}
    </h2>
  );
};

export default AnimatedTitle;
