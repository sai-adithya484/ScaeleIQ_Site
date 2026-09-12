import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudies';
import './CaseStudyCard.css';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  compact?: boolean;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, compact = false }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      // Normalise to -1 … +1
      const nx = (x - cx) / cx;
      const ny = (y - cy) / cy;

      // Max ±3deg tilt
      const rotateY = nx * 3;
      const rotateX = -ny * 3;

      // Spotlight as percentage for CSS
      const pctX = (x / rect.width) * 100;
      const pctY = (y / rect.height) * 100;

      card.style.setProperty('--rotate-x', `${rotateX}deg`);
      card.style.setProperty('--rotate-y', `${rotateY}deg`);
      card.style.setProperty('--mouse-x', `${pctX}%`);
      card.style.setProperty('--mouse-y', `${pctY}%`);
      card.style.setProperty('--tilt-active', '1');
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
    card.style.setProperty('--tilt-active', '0');
  }, []);

  return (
    <Link
      ref={cardRef}
      to={`/case-studies/${caseStudy.slug}`}
      className={`case-study-card ${compact ? 'case-study-card--compact' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--rotate-x': '0deg',
        '--rotate-y': '0deg',
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        '--tilt-active': '0',
      } as React.CSSProperties}
    >
      {/* Cursor spotlight */}
      <span className="case-study-card__spotlight" aria-hidden="true" />

      <div className="case-study-card__header">
        <div className="case-study-card__tags">
          {caseStudy.industry.map((ind) => (
            <span key={ind} className="case-study-card__tag">
              {ind}
            </span>
          ))}
        </div>
        <span className="case-study-card__arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <div className="case-study-card__company">{caseStudy.company}</div>
      <h3 className="case-study-card__headline">{caseStudy.headline}</h3>

      {/* Spacer so footer always sticks to bottom */}
      <div className="case-study-card__spacer" />

      {!compact && (
        <div className="case-study-card__metrics">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="case-study-card__metric">
              <div className="case-study-card__metric-val">{m.value}</div>
              <div className="case-study-card__metric-lbl">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="case-study-card__footer">
        <span className="case-study-card__cta-text">Learn more</span>
        <span className="case-study-card__cta-arrow" aria-hidden="true">
          <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
};
