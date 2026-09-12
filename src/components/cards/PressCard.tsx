import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PressItem } from '../../data/press';
import './PressCard.css';

interface PressCardProps {
  press: PressItem;
}

export const PressCard: React.FC<PressCardProps> = ({ press }) => {
  return (
    <a href={press.url} target="_blank" rel="noopener noreferrer" className="press-card">
      <div className="press-card__header">
        <span className="press-card__outlet">{press.outlet}</span>
        <span className="press-card__arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <h3 className="press-card__headline">{press.headline}</h3>
      <p className="press-card__summary">{press.summary}</p>
      <div className="press-card__footer">
        <span className="press-card__cta">Explore feature</span>
      </div>
    </a>
  );
};
