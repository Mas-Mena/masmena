import React, { useEffect, useRef } from 'react';
import BookingForm from './BookingForm';

const CHARS = '0123456789#@%&';
const COLORS = [
  '#ff3030', '#ff5050',
  '#3b82f6', '#60a5fa',
  '#22c55e', '#4ade80',
  '#06b6d4', '#22d3ee',
  '#a855f7', '#c084fc',
  '#f59e0b', '#fbbf24',
  '#ec4899', '#f472b6',
  '#e5e5e5', '#ffffff',
];

interface Char {
  x: number;
  y: number;
  char: string;
  color: string;
}

const HOVER_RADIUS = 150;
const COL_GAP = 12; // Increased slightly for performance
const ROW_GAP = 14; 
const FONT_SIZE = 11;

const EditorialContact: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const charsRef = useRef<Char[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const isVisible = useRef(false);

  const buildChars = (W: number, H: number) => {
    const list: Char[] = [];
    const cols = Math.ceil(W / COL_GAP) + 1;
    const rows = Math.ceil(H / ROW_GAP) + 1;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        list.push({
          x: c * COL_GAP,
          y: r * ROW_GAP,
          char: CHARS[Math.floor(Math.random() * CHARS.length)],
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    }
    charsRef.current = list;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Create offscreen mask canvas for performance
    const maskCanvas = document.createElement('canvas');
    maskCanvasRef.current = maskCanvas;
    const maskCtx = maskCanvas.getContext('2d');

    const resize = () => {
      const W = canvas.parentElement!.offsetWidth;
      const H = canvas.parentElement!.offsetHeight;
      canvas.width = W;
      canvas.height = H;
      maskCanvas.width = W;
      maskCanvas.height = H;
      buildChars(W, H);
    };

    const render = (time: number) => {
      if (!isVisible.current) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      const { width: W, height: H } = canvas;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, W, H);
      ctx.font = `${FONT_SIZE}px monospace`;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const scale = Math.min(W, H) * 0.95;
      const cx = W / 2;
      const cy = H / 2;
      
      const offX = Math.sin(time * 0.0006) * 40;
      const offY = Math.cos(time * 0.0008) * 30;

      // 1. Draw logo to mask canvas once per frame
      if (maskCtx) {
        maskCtx.clearRect(0, 0, W, H);
        const logoPath = new Path2D();
        logoPath.moveTo(cx + offX - scale * 0.15, cy + offY - scale * 0.35);
        logoPath.bezierCurveTo(cx + offX + scale * 0.45, cy + offY - scale * 0.45, cx + offX + scale * 0.45, cy + offY + scale * 0.1, cx + offX, cy + offY);
        logoPath.bezierCurveTo(cx + offX - scale * 0.45, cy + offY + scale * 0.1, cx + offX - scale * 0.45, cy + offY + scale * 0.45, cx + offX + scale * 0.1, cy + offY + scale * 0.35);
        logoPath.bezierCurveTo(cx + offX + scale * 0.45, cy + offY + scale * 0.25, cx + offX + scale * 0.25, cy + offY - scale * 0.1, cx + offX - scale * 0.1, cy + offY - scale * 0.2);
        
        maskCtx.lineWidth = scale * 0.28;
        maskCtx.strokeStyle = 'white';
        maskCtx.stroke(logoPath);
      }

      // Pre-fetch mask data for bulk point-testing (MUCH faster than isPointInStroke)
      const maskData = maskCtx?.getImageData(0, 0, W, H).data;

      for (const ch of charsRef.current) {
        if (Math.random() < 0.003) {
          ch.char = CHARS[Math.floor(Math.random() * CHARS.length)];
        }

        const dx = ch.x - mx;
        const dy = ch.y - my;
        const distSq = dx * dx + dy * dy;
        
        // Fast distance check before square root
        let hoverFactor = 0;
        if (distSq < HOVER_RADIUS * HOVER_RADIUS) {
          hoverFactor = 1 - Math.sqrt(distSq) / HOVER_RADIUS;
        }

        // Fast pixel test from mask data
        const pixelIdx = (Math.floor(ch.y) * W + Math.floor(ch.x)) * 4;
        const isInside = maskData && maskData[pixelIdx] > 0;

        let opacity = 0.04;
        if (isInside) {
          opacity = 0.25 + hoverFactor * 0.75;
          ctx.fillStyle = ch.color;
        } else {
          opacity = 0.01 + hoverFactor * 0.1;
          ctx.fillStyle = '#ffffff';
        }

        ctx.globalAlpha = opacity;
        ctx.fillText(ch.char, ch.x, ch.y);
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(render);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    // Intersection Observer to run only when in viewport
    const observer = new IntersectionObserver((entries) => {
      isVisible.current = entries[0].isIntersecting;
    }, { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);

    resize();
    rafRef.current = requestAnimationFrame(render);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section id="contact" ref={containerRef} className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] section-padding overflow-hidden min-h-screen flex flex-col border-t border-[var(--border-color)] transition-colors duration-700">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ display: 'block', pointerEvents: 'auto', cursor: 'default' }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 70% at 50% 50%, rgba(0,0,0,0.95) 0%, transparent 100%)',
        }}
      />
      <div className="relative z-10 text-center mb-12 px-4" style={{ pointerEvents: 'none' }}>
        <h2 className="mb-4 text-[var(--text-primary)]">
          Different needs? Let's talk.
        </h2>
        <p className="text-[var(--text-secondary)] text-[14px] leading-relaxed max-w-[500px] mx-auto mt-3">
          Whether you operate in Jordan today or are preparing to scale across MENA, let's explore how we can create a plan that fits you perfectly. We will ask the right questions, discuss possibilities, and make an action plan.
        </p>
      </div>
      <div className="relative z-10 w-full flex-1 flex justify-center px-4" style={{ pointerEvents: 'auto' }}>
        <BookingForm />
      </div>
    </section>
  );
};

export default EditorialContact;
