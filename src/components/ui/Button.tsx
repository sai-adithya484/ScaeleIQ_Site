import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Button.css';

export interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark-outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  target,
  rel,
  variant = 'primary',
  size = 'md',
  showArrow = true,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const content = (
    <div className="btn-inner">
      <span className="btn-text-wrap">
        <span className="btn-text">{children}</span>
        <span className="btn-text-ab">{children}</span>
      </span>
      {showArrow && (
        <span className="btn-icon">
          <ArrowUpRight size={16} strokeWidth={2} />
        </span>
      )}
    </div>
  );

  const classes = `btn btn--${variant} btn--${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isAnchor = href.startsWith('#');
    const resolvedTarget = target ?? (isAnchor ? undefined : '_blank');
    const resolvedRel = rel ?? (isAnchor ? undefined : 'noopener noreferrer');
    return (
      <a href={href} className={classes} target={resolvedTarget} rel={resolvedRel} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};
