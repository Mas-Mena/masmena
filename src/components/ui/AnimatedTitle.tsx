import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  /** Each string becomes one line. Separate multi-line headings into an array. */
  lines: string[];
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'span';
}

/**
 * Renders an heading where each character animates in on scroll —
 * the same effect as "The Kind Of Work" in EditorialAbout.
 */
const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ lines, className = '', tag = 'h2' }) => {
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

  const Tag = tag;
  const hasCustomSize = className.includes('text-[') || className.includes('text-');
  const sizeClass = hasCustomSize ? '' : 'text-[36px] md:text-[50px]';

  return (
    <Tag
      ref={ref}
      className={`relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] ${sizeClass} ${className}`}
      style={{ perspective: '600px' }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          {line.split(' ').map((word, wIdx) => (
            <span key={wIdx} className="inline-block whitespace-nowrap">
              {word.split('').map((char, cIdx) => (
                <span key={cIdx} className="anim-char inline-block">
                  {char}
                </span>
              ))}
              {/* Add space after the word, but not after the last word */}
              {wIdx < line.split(' ').length - 1 && '\u00A0'}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedTitle;
