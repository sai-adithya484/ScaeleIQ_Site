import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children, className = '', light = false }) => {
  return (
    <span
      className={`eyebrow ${className}`}
      style={light ? { color: 'var(--accent-cyan)' } : undefined}
    >
      {children}
    </span>
  );
};
