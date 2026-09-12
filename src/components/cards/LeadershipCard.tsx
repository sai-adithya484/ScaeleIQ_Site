import React from 'react';
import { Leader } from '../../data/leadership';
import { Linkedin } from 'lucide-react';
import './LeadershipCard.css';

interface LeadershipCardProps {
  leader: Leader;
}

export const LeadershipCard: React.FC<LeadershipCardProps> = ({ leader }) => {
  return (
    <div className="leadership-card">
      <div className="leadership-card__avatar-placeholder">
        <div className="leadership-card__initials">
          {leader.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
      </div>
      <div className="leadership-card__content">
        <div className="leadership-card__top">
          <div>
            <h3 className="leadership-card__name">{leader.name}</h3>
            <div className="leadership-card__role">{leader.role}</div>
          </div>
          <a
            href={leader.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="leadership-card__linkedin"
            aria-label={`${leader.name} LinkedIn`}
          >
            <Linkedin size={18} />
          </a>
        </div>
        <p className="leadership-card__bio">{leader.bio}</p>
      </div>
    </div>
  );
};
