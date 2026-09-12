import React from 'react';
import './MetricStat.css';

interface MetricStatProps {
  value: string;
  label: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export const MetricStat: React.FC<MetricStatProps> = ({
  value,
  label,
  className = '',
  variant = 'light',
}) => {
  return (
    <div className={`metric-stat metric-stat--${variant} ${className}`}>
      <div className="metric-stat__value">{value}</div>
      <div className="metric-stat__label">{label}</div>
    </div>
  );
};
