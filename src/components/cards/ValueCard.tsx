import React from 'react';
import { Zap, Heart, Compass } from 'lucide-react';
import { CompanyValue } from '../../data/values';
import './ValueCard.css';

interface ValueCardProps {
  value: CompanyValue;
}

export const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'zap': return <Zap size={24} color="#00B4D8" />;
      case 'heart': return <Heart size={24} color="#00B4D8" />;
      case 'compass': return <Compass size={24} color="#00B4D8" />;
      default: return <Zap size={24} color="#00B4D8" />;
    }
  };

  return (
    <div className="value-card">
      <div className="value-card__icon-wrap">
        {getIcon(value.iconName)}
      </div>
      <h3 className="value-card__title">{value.title}</h3>
      <p className="value-card__desc">{value.description}</p>
    </div>
  );
};
