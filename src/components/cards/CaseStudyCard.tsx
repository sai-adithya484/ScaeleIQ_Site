import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  Database,
  Server,
  TrendingUp,
  Calendar,
  BarChart2,
  Cpu,
  ShieldCheck,
  Clock,
  Users,
  ShieldAlert,
  CheckCircle2,
} from 'lucide-react';
import { CaseStudy } from '../../data/caseStudies';
import './CaseStudyCard.css';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const renderMetricIcon = (iconName?: string) => {
  switch (iconName) {
    case 'Zap':
      return <Zap size={14} strokeWidth={2.2} />;
    case 'Database':
      return <Database size={14} strokeWidth={2.2} />;
    case 'Server':
      return <Server size={14} strokeWidth={2.2} />;
    case 'TrendingUp':
      return <TrendingUp size={14} strokeWidth={2.2} />;
    case 'Calendar':
      return <Calendar size={14} strokeWidth={2.2} />;
    case 'BarChart2':
    case 'BarChart3':
      return <BarChart2 size={14} strokeWidth={2.2} />;
    case 'Cpu':
      return <Cpu size={14} strokeWidth={2.2} />;
    case 'ShieldCheck':
      return <ShieldCheck size={14} strokeWidth={2.2} />;
    case 'Clock':
      return <Clock size={14} strokeWidth={2.2} />;
    case 'Users':
      return <Users size={14} strokeWidth={2.2} />;
    case 'ShieldAlert':
      return <ShieldAlert size={14} strokeWidth={2.2} />;
    case 'CheckCircle2':
      return <CheckCircle2 size={14} strokeWidth={2.2} />;
    default:
      return <Zap size={14} strokeWidth={2.2} />;
  }
};

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <Link
      to={`/case-studies/${caseStudy.slug}`}
      className="case-study-card"
      aria-label={`${caseStudy.company}: ${caseStudy.headline}`}
    >
      {/* Subtle atmospheric visual in top-right */}
      <div className="case-study-card__visual-wrap" aria-hidden="true">
        <img
          src={caseStudy.visual}
          alt=""
          className="case-study-card__visual"
          loading="lazy"
        />
      </div>

      {/* Card Header: Client Logo with slug modifier */}
      <div className="case-study-card__header">
        <div className="case-study-card__logo-wrap">
          <img
            src={caseStudy.logo}
            alt={caseStudy.company}
            className={`case-study-card__logo case-study-card__logo--${caseStudy.slug}`}
            loading="lazy"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="case-study-card__tags">
        {caseStudy.industry.slice(0, 2).map((tag) => (
          <span key={tag} className="case-study-card__tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Case Study Title */}
      <h3 className="case-study-card__title">{caseStudy.headline}</h3>

      {/* Short Source-Derived Description */}
      <p className="case-study-card__description">{caseStudy.summary}</p>

      {/* Flexible Spacer ensuring uniform height & bottom pinning */}
      <div className="case-study-card__spacer" />

      {/* Bottom Row: 3 Outcome Metrics + Circular Action Arrow */}
      <div className="case-study-card__bottom">
        <div className="case-study-card__metrics">
          {caseStudy.metrics.slice(0, 3).map((metric, idx) => (
            <div key={idx} className="case-study-card__metric">
              <div
                className="case-study-card__metric-icon"
                style={{
                  backgroundColor: metric.iconBg || 'rgba(2, 132, 199, 0.1)',
                  color: metric.iconColor || '#0284C7',
                }}
                aria-hidden="true"
              >
                {renderMetricIcon(metric.icon)}
              </div>
              <div className="case-study-card__metric-info">
                <span className="case-study-card__metric-val">{metric.value}</span>
                <span className="case-study-card__metric-lbl">{metric.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="case-study-card__arrow-btn" aria-hidden="true">
          <ArrowRight size={17} strokeWidth={2.4} />
        </div>
      </div>
    </Link>
  );
};
