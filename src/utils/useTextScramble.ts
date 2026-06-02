import { useRef, useCallback } from 'react';

const CHARS = 'abcdefghijklmnopqrstuvwxyz';

/**
 * Scramble animation engine.
 *
 * ALL characters cycle random letters at 60fps from frame 1.
 * Characters lock into their final value left→right over `resolveDuration` ms.
 *
 * Requires each target element to contain one [data-char] span per character
 * (use <CharSpans text="…" /> to generate them in JSX).
 */
export function useTextScramble() {
  const rafRef = useRef<number>(0);

  const run = useCallback(
    (
      containers: Array<{ spans: NodeListOf<Element> | Element[]; text: string }>,
      resolveDuration = 900,
      onComplete?: () => void
    ) => {
      cancelAnimationFrame(rafRef.current);

      type Job = {
        spans: Element[];
        chars: string[];
        resolveTimes: number[]; // ms at which this char locks in
      };

      const jobs: Job[] = containers.map(({ spans, text }) => {
        const chars = text.split('');
        const n = chars.length;
        const resolveTimes = chars.map((_, i) =>
          n <= 1 ? 0 : (i / (n - 1)) * resolveDuration
        );
        return { spans: Array.from(spans), chars, resolveTimes };
      });

      const totalDuration = resolveDuration + 80;
      let startTime: number | null = null;
      let done = false;

      const tick = (ts: number) => {
        if (startTime === null) startTime = ts;
        const elapsed = ts - startTime;

        for (const { spans, chars, resolveTimes } of jobs) {
          for (let i = 0; i < chars.length; i++) {
            const span = spans[i] as HTMLElement;
            if (!span) continue;
            const ch = chars[i];
            if (ch === ' ') continue; // spaces never scramble

            if (elapsed >= resolveTimes[i]) {
              // Locked in
              if (span.textContent !== ch) span.textContent = ch;
            } else {
              // Still scrambling — random char from pool
              span.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
        }

        if (elapsed < totalDuration) {
          rafRef.current = requestAnimationFrame(tick);
        } else if (!done) {
          done = true;
          // Guarantee all chars show final values
          for (const { spans, chars } of jobs) {
            spans.forEach((span, i) => {
              (span as HTMLElement).textContent = chars[i];
            });
          }
          onComplete?.();
        }
      };

      rafRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafRef.current);
    },
    []
  );

  return { run };
}
