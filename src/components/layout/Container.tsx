import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', narrow = false }) => {
  return <div className={`${narrow ? 'container-narrow' : 'container'} ${className}`}>{children}</div>;
};
