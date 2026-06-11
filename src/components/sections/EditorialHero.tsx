import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const projectImages = [
  'images/slider/dr-farah.slider.webp',
  'images/slider/slider (1).webp',
  'images/slider/slider (2).webp',
  'images/slider/slider (3).webp',
  'images/slider/slider (4).webp',
  'images/slider/slider (5).webp',
  'images/slider/slider (6).webp',
  'images/slider/slider (8).webp',
  'images/slider/slider-(1).webp',
  'images/slider/slider-(2).webp',
  'images/slider/slider-(4).png',
  'images/slider/slider-(5).webp',
  'images/slider/slider.webp',
];

const CARDS_COUNT = 24;

const EditorialHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  
  // Carousel tracking refs
  const positionsRef = useRef<number[]>([]);
  const indicesRef = useRef<number[]>([]);
  const scrollPos = useRef<number>(0);
  const targetScrollPos = useRef<number>(0);
  const isPressingRef = useRef<boolean>(false);
  const startScrollPos = useRef<number>(0);
  const startX = useRef<number>(0);
  const halfWidth = useRef<number>(0);
  const stepX = useRef<number>(0);
  const dragDeltaX = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const dragAnimationFrameRef = useRef<number>(0);
  const leftOutIndices = useRef<number[]>([]);
  const rightOutIndices = useRef<number[]>([]);
  const transitionIndex = useRef<number>(-12);
  const animationPass = useRef<string>('pass1');
  const cardActiveStates = useRef<boolean[]>(Array(CARDS_COUNT).fill(false));

  // Compute container dimensions
  const updateDimensions = (): boolean => {
    const el = containerRef.current;
    if (!el) return false;
    const width = el.offsetWidth;
    if (!width) return false;
    halfWidth.current = width / 2;
    stepX.current = 0.08 * width; // Card spacing is exactly 8% of width
    return true;
  };

  // Re-render the 3D wave positions on each scroll frame
  const renderCarousel = () => {
    const cardElements = cardsRef.current;
    const imgElements = imagesRef.current;
    const logicalPositions = positionsRef.current;
    const imageIndices = indicesRef.current;
    const sX = stepX.current;
    const hW = halfWidth.current;

    if (sX && hW && cardElements.length) {
      const currentScroll = scrollPos.current;
      const totalImages = projectImages.length;
      const pass = animationPass.current;
      const transIdx = transitionIndex.current;
      const leftOuts = leftOutIndices.current;
      const rightOuts = rightOutIndices.current;

      leftOuts.length = 0;
      rightOuts.length = 0;

      const Z = 12;
      const U = 0.6 * Math.PI;

      for (let i = 0; i < CARDS_COUNT; i++) {
        const pos = logicalPositions[i];
        const offset = pos - currentScroll;
        const absOffset = Math.abs(offset);

        // Track wrapping coordinates in done pass
        if (pass === 'done') {
          if (offset < -Z) {
            leftOuts.push(i);
            continue;
          }
          if (offset > Z) {
            rightOuts.push(i);
            continue;
          }
        }

        // Clip rendering of far out-of-view cards
        if (absOffset > Z + 2) continue;

        const card = cardElements[i];
        const img = imgElements[i];

        if (card && img) {
          // Exact mathematical layout formulas from creativecue.co production chunk
          const xPos = offset * sX;
          const yPos = 80 * Math.sin(xPos / hW * U) + 0.2 * xPos;
          const scale = 0.4 + 0.4 * Math.exp(-(0.8 * absOffset));
          const zIndex = 100 - 10 * Math.round(absOffset);

          if (pass === 'pass2' || pass === 'done') {
            gsap.set(card, {
              x: xPos,
              y: yPos,
              scale: scale,
              xPercent: -50,
              yPercent: -50,
              zIndex: zIndex,
              visibility: 'visible',
              opacity: 1,
            });
          } else if (pass === 'pass1') {
            // Staggered reveal timeline entrance logic
            const isActive = imageIndices[i] <= transIdx && imageIndices[i] > transIdx - 4;
            const hasRevealed = cardActiveStates.current[i];

            if (isActive) {
              gsap.set(card, {
                x: xPos,
                y: yPos,
                scale: 0.9 * scale,
                xPercent: -50,
                yPercent: -50,
                zIndex: zIndex,
                visibility: 'visible',
              });
              if (hasRevealed) {
                gsap.set(card, { scale: scale, opacity: 1 });
              } else {
                gsap.killTweensOf(card);
                gsap.to(card, {
                  opacity: 1,
                  scale: scale,
                  duration: 0.24,
                  ease: 'power2.out',
                });
                cardActiveStates.current[i] = true;
              }
            } else if (hasRevealed) {
              gsap.killTweensOf(card);
              gsap.to(card, {
                opacity: 0,
                duration: 0.06,
                ease: 'none',
                onComplete: () => {
                  gsap.set(card, { visibility: 'hidden' });
                },
              });
              cardActiveStates.current[i] = false;
            }
          }
        }
      }

      // Recycle virtual cards moving off-screen to the left
      for (let s = 0; s < leftOuts.length; s++) {
        const idx = leftOuts[s];
        const newPos = logicalPositions[idx] + 24;
        const newImgIdx = ((imageIndices[idx] + 24) % totalImages + totalImages) % totalImages;
        logicalPositions[idx] = newPos;
        imageIndices[idx] = newImgIdx;
        
        const img = imgElements[idx];
        if (img) {
          const src = projectImages[newImgIdx];
          if (img.dataset.src !== src) {
            img.src = src;
            img.dataset.src = src;
          }
        }
      }

      // Recycle virtual cards moving off-screen to the right
      for (let r = 0; r < rightOuts.length; r++) {
        const idx = rightOuts[r];
        const newPos = logicalPositions[idx] - 24;
        const newImgIdx = ((imageIndices[idx] - 24) % totalImages + totalImages) % totalImages;
        logicalPositions[idx] = newPos;
        imageIndices[idx] = newImgIdx;

        const img = imgElements[idx];
        if (img) {
          const src = projectImages[newImgIdx];
          if (img.dataset.src !== src) {
            img.src = src;
            img.dataset.src = src;
          }
        }
      }

      // Keep coordinates small to avoid layout float overflow
      if (currentScroll > 10000 || currentScroll < -10000) {
        const shift = Math.round(currentScroll / totalImages) * totalImages;
        scrollPos.current -= shift;
        for (let o = 0; o < CARDS_COUNT; o++) {
          logicalPositions[o] -= shift;
        }
      }
    }
  };

  useEffect(() => {
    // Preload Unsplash Showcase Images
    projectImages.forEach((url) => {
      const img = new Image();
      img.src = url;
    });

    const container = containerRef.current;
    if (container && updateDimensions()) {
      const cardEls = cardsRef.current;
      const imgEls = imagesRef.current;
      const Z = 12;

      animationPass.current = 'pass1';
      transitionIndex.current = -Z;
      cardActiveStates.current = Array(CARDS_COUNT).fill(false);

      // Distribute starting logical indexes and initial images
      for (let i = 0; i < CARDS_COUNT; i++) {
        const card = cardEls[i];
        const img = imgEls[i];
        if (card && img) {
          const imgIdx = ((i - Z) % projectImages.length + projectImages.length) % projectImages.length;
          positionsRef.current[i] = i - Z;
          indicesRef.current[i] = imgIdx;

          const src = projectImages[imgIdx];
          img.src = src;
          img.dataset.src = src;
          gsap.set(card, { visibility: 'hidden', opacity: 0 });
        }
      }

      scrollPos.current = 0;
      targetScrollPos.current = 0;
      renderCarousel();

      const progressState = { index: -Z };
      const enterTimelineState = { position: 0 };
      const transitionThreshold = Z + projectImages.length;
      let dragInstance: any = null;

      // Smooth interpolation and background auto-scroll drift update loop
      let rafId = 0;
      const updateLoop = () => {
        // Slow auto-scroll drift when not dragging or pressing
        if (
          !isDraggingRef.current && 
          !isPressingRef.current && 
          !revealTimeline.isActive() && 
          animationPass.current === 'done'
        ) {
          targetScrollPos.current += 0.0012; // Gentle background drift (move 1 card every ~14 seconds at 60fps)
        }

        // Smoothly interpolate scrollPos towards targetScrollPos using Lerp
        const diff = targetScrollPos.current - scrollPos.current;
        if (Math.abs(diff) > 0.0001) {
          scrollPos.current += diff * 0.05; // 0.05 lerp coefficient for super smooth fluid damping
          renderCarousel();
        } else if (!isDraggingRef.current && !isPressingRef.current && !revealTimeline.isActive() && animationPass.current === 'done') {
          scrollPos.current = targetScrollPos.current;
          renderCarousel();
        }

        rafId = requestAnimationFrame(updateLoop);
      };
      
      rafId = requestAnimationFrame(updateLoop);

      // Construct dynamic GSAP Draggable for mouse/touch interactions
      const setupDraggable = () => {
        if (!dragInstance) {
          const proxy = document.createElement('div');
          dragInstance = Draggable.create(proxy, {
            trigger: container,
            type: 'x',
            inertia: false,
            onPress: function () {
              revealTimeline.kill();
              animationPass.current = 'done';
              isDraggingRef.current = false;
              isPressingRef.current = true;
              cancelAnimationFrame(dragAnimationFrameRef.current);
              targetScrollPos.current = scrollPos.current; // Sync
              startScrollPos.current = scrollPos.current;
              startX.current = this.x;
              dragDeltaX.current = 0;
            },
            onDrag: function () {
              const sX = stepX.current;
              if (sX) {
                const delta = (this.x - startX.current) * 0.22; // Slightly reduced sensitivity for smoother control
                dragDeltaX.current = delta;
                startX.current = this.x;
                targetScrollPos.current = targetScrollPos.current - delta / sX;
              }
            },
            onRelease: function () {
              isPressingRef.current = false;
            },
            onDragEnd: function () {
              const sX = stepX.current;
              if (sX) {
                isDraggingRef.current = true;
                let velocity = dragDeltaX.current;

                // Inertia momentum decay loop (decay factor 0.94 for smooth dampening deceleration)
                const decayLoop = () => {
                  if (isDraggingRef.current) {
                     velocity *= 0.94; 
                     if (Math.abs(velocity) < 1e-4) {
                       isDraggingRef.current = false;
                       return;
                     }
                     targetScrollPos.current -= velocity / sX;
                     dragAnimationFrameRef.current = requestAnimationFrame(decayLoop);
                  }
                };
                dragAnimationFrameRef.current = requestAnimationFrame(decayLoop);
              }
            },
          })[0];

          container.addEventListener('touchstart', () => {
            isDraggingRef.current = false;
            isPressingRef.current = true;
            cancelAnimationFrame(dragAnimationFrameRef.current);
          }, { passive: true });
        }
      };

      // Entrance Stagger Timeline Reveal Animation
      const revealTimeline = gsap.timeline({ delay: 0 });
      revealTimeline.to(progressState, {
        index: Z + 4,
        duration: (Z + 4 + Z) * 0.04,
        ease: 'none',
        onUpdate: () => {
          transitionIndex.current = Math.round(progressState.index);
          renderCarousel();
        },
        onComplete: () => {
          for (let i = 0; i < CARDS_COUNT; i++) {
            const card = cardsRef.current[i];
            if (card) {
              gsap.killTweensOf(card);
              gsap.set(card, { visibility: 'hidden', opacity: 0 });
            }
            cardActiveStates.current[i] = false;
          }
          animationPass.current = 'pass2';
          scrollPos.current = -transitionThreshold;
          targetScrollPos.current = -transitionThreshold; // Sync target
          enterTimelineState.position = -transitionThreshold;
        },
      });

      revealTimeline.to(enterTimelineState, {
        position: 0,
        delay: 0.4,
        duration: 0.22 * projectImages.length,
        ease: 'expo.out',
        onStart: () => {
          setupDraggable();
        },
        onUpdate: () => {
          scrollPos.current = enterTimelineState.position;
          targetScrollPos.current = enterTimelineState.position; // Sync target
          renderCarousel();
        },
        onComplete: () => {
          animationPass.current = 'done';
          renderCarousel();
        },
      });

      // Responsive dimensions watch
      let resizeTick = 0;
      const resObserver = new ResizeObserver(() => {
        cancelAnimationFrame(resizeTick);
        resizeTick = requestAnimationFrame(() => {
          if (updateDimensions()) {
            renderCarousel();
          }
        });
      });
      resObserver.observe(container);

      // Elegant Editorial Headline Reveal
      gsap.fromTo('.heading-reveal',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power4.out', delay: 0.2 }
      );

      gsap.fromTo('.subtext-reveal',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo('.stats-reveal',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.65 }
      );

      gsap.fromTo('.cta-reveal',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );

      return () => {
        revealTimeline.kill();
        if (dragInstance) dragInstance.kill();
        isDraggingRef.current = false;
        cancelAnimationFrame(dragAnimationFrameRef.current);
        cancelAnimationFrame(rafId);
        resObserver.disconnect();
        cancelAnimationFrame(resizeTick);
      };
    }
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-72px)] min-h-[calc(100svh-72px)] lg:min-h-screen w-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col justify-end overflow-hidden transition-colors duration-700">
      {/* 3D Wave Interactive Background Carousel */}
      <div className="absolute top-[170px] md:top-[130px] lg:top-[170px] left-0 lg:left-auto lg:right-0 w-full lg:w-[80%] h-[calc(100svh-170px)] lg:h-full z-[1] lg:translate-x-[15%] flex items-center select-none pointer-events-auto">
        <div 
          className="w-full h-[400px] md:h-[520px] lg:h-[700px] relative cursor-grab z-[10000]" 
          ref={containerRef}
          style={{ touchAction: 'pan-y' }}
        >
          {Array.from({ length: CARDS_COUNT }).map((_, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="absolute left-1/2 top-[46%] origin-center will-change-transform transform-style-preserve-3d"
            >
              <img
                ref={(el) => { imagesRef.current[i] = el; }}
                alt=""
                className="w-[280px] h-[190px] md:w-[440px] md:h-[300px] lg:w-[640px] lg:h-[440px] object-cover pointer-events-none block shadow-2xl bg-[#080808] grayscale-[0.25] group-hover:grayscale-0 transition-all duration-700 select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content Section */}
      <div className="hidden md:flex container-custom relative z-10 w-full flex-col items-start pb-12 md:pb-20 lg:pb-[72px] pointer-events-none select-none">
        


        {/* Hero Title */}
        <h1 className="heading-reveal font-display text-[28px] md:text-[42px] leading-[1.15] font-medium text-[var(--text-primary)] max-w-[340px] md:max-w-[493px] mb-6 tracking-tight text-center md:text-left">
          Connect. Create. Thrive.
        </h1>

        {/* Description Subtext */}
        <p className="subtext-reveal text-[var(--text-secondary)] text-[14px] leading-relaxed max-w-[340px] md:max-w-[450px] mb-8 font-normal text-center md:text-left select-text pointer-events-auto">
          MAS is a full-service marketing agency delivering creative, data-driven, and culturally relevant campaigns for brands in FMCG, healthcare, beauty, and more. Our team blends digital and offline strategies to drive impact across Jordan, the GCC, and beyond.
        </p>

        {/* Statistics Bar */}
        <div className="stats-reveal pointer-events-auto flex gap-12 mb-9 text-left select-text">
          <div className="flex flex-col">
            <span className="text-[20px] md:text-[24px] font-semibold text-[var(--text-primary)] tracking-tight">24+</span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--text-secondary)] font-bold mt-1">Countries Reached</span>
          </div>
          <div className="w-[1px] h-10 bg-[var(--border-color)] self-center" />
          <div className="flex flex-col">
            <span className="text-[20px] md:text-[24px] font-semibold text-[var(--text-primary)] tracking-tight">200+</span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--text-secondary)] font-bold mt-1">Projects Completed</span>
          </div>
        </div>

        {/* Book A Call CTA */}
        <div className="cta-reveal pointer-events-auto w-full max-w-[340px] md:max-w-none flex justify-center md:justify-start">
          <a 
            href="#book" 
            className="group flex items-center justify-between w-full md:max-w-[421px] border-b border-white/10 pb-6 pointer-events-auto transition-all hover:border-white"
          >
            <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest text-[var(--text-primary)]">
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

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        .animate-spin-slow { 
          animation: spin-slow 12s linear infinite; 
        }
      `}} />
    </section>
  );
};

export default EditorialHero;
