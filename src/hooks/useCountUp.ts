import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to animate a numerical value from `start` to `end` using requestAnimationFrame.
 *
 * @param end - The target number to count up to.
 * @param duration - Duration of the animation in milliseconds (default: 1200ms).
 * @param trigger - Boolean flag to start the animation (e.g. when element enters viewport).
 * @param start - Starting number (default: 0).
 * @returns The current animated numerical value.
 */
export function useCountUp(end: number, duration = 1200, trigger = false, start = 0): number {
  const [count, setCount] = useState(start);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    const startTime = performance.now();

    const step = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + eased * (end - start)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, end, duration, start]);

  return count;
}

