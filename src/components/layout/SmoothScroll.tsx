import React, { useEffect } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Overlays (e.g. the full-screen menu) dispatch these events to freeze the
    // page behind them while they're open.
    let scrollLocked = false;
    const onLock = () => {
      scrollLocked = true;
      lenis.stop();
      document.documentElement.style.overflow = 'hidden';
    };
    const onUnlock = () => {
      scrollLocked = false;
      lenis.start();
      document.documentElement.style.overflow = '';
    };
    window.addEventListener('scroll-lock', onLock);
    window.addEventListener('scroll-unlock', onUnlock);

    // Pause Lenis while tab is hidden to save CPU/GPU
    const onVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop();
      } else if (!scrollLocked) {
        lenis.start();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Intercept hash link clicks to handle smooth scrolling via Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const targetEl = document.querySelector(href) as HTMLElement | null;
          if (targetEl) {
            // A menu link was clicked: release the lock before scrolling.
            if (scrollLocked) onUnlock();
            lenis.scrollTo(targetEl, {
              force: true,
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll-lock', onLock);
      window.removeEventListener('scroll-unlock', onUnlock);
      document.documentElement.style.overflow = '';
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
