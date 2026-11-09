import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element intersects the viewport.
 * Disconnects once the element has entered the viewport (trigger-once behavior).
 *
 * @param threshold - Intersection threshold (0.0 to 1.0, default: 0.2).
 * @returns Object containing a typed React ref to attach and an `inView` boolean flag.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

