import React, { useEffect, useRef, useState } from 'react';

interface RevealAnimationProps {
  children: React.ReactNode;
  variant?: 'up' | 'large' | 'fade';
  delayMs?: number;
  className?: string;
}

export const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  variant = 'up',
  delayMs = 0,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let animationClass = '';
  if (isVisible) {
    if (variant === 'large') animationClass = 'animate-reveal-large';
    else if (variant === 'fade') animationClass = 'animate-fade-in';
    else animationClass = 'animate-reveal-up';
  }

  return (
    <div
      ref={ref}
      className={`${className} ${animationClass}`}
      style={{
        opacity: isVisible ? undefined : 0,
        animationDelay: isVisible && delayMs > 0 ? `${delayMs}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
};
