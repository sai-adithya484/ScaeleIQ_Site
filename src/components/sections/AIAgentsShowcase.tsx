import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Search,
  Layers,
  List,
  Sparkles,
  Files,
  BarChart2,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';
import { AI_AGENTS_DATA } from '../../data/aiAgentsData';
import './AIAgentsShowcase.css';

/* -------------------------------------------------------------
   Custom Scalable Vector Tile Icons (matching reference image)
   ------------------------------------------------------------- */

const DocuTileIcon: React.FC = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ai-agent-card__tile-svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="docuBackGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <linearGradient id="docuFrontGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
      <linearGradient id="docuFlapGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#bae6fd" />
      </linearGradient>
      <filter id="docuTileShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0369a1" floodOpacity="0.28" />
      </filter>
    </defs>
    <path
      d="M17 5 h11 l6 6 v18 a2.5 2.5 0 0 1 -2.5 2.5 h-14.5 a2.5 2.5 0 0 1 -2.5 -2.5 v-21.5 a2.5 2.5 0 0 1 2.5 -2.5 z"
      fill="url(#docuBackGrad)"
    />
    <path d="M28 5 v6 h6 z" fill="#7dd3fc" opacity="0.9" />
    <g filter="url(#docuTileShadow)">
      <path
        d="M10 11 h12 l6 6 v17 a2.5 2.5 0 0 1 -2.5 2.5 h-15.5 a2.5 2.5 0 0 1 -2.5 -2.5 v-20.5 a2.5 2.5 0 0 1 2.5 -2.5 z"
        fill="url(#docuFrontGrad)"
      />
      <path d="M22 11 v6 h6 z" fill="url(#docuFlapGrad)" />
      <rect x="13" y="22.5" width="9" height="2.2" rx="1.1" fill="#ffffff" opacity="0.95" />
      <rect x="13" y="27" width="13" height="2.2" rx="1.1" fill="#ffffff" opacity="0.95" />
    </g>
  </svg>
);

const SummaryTileIcon: React.FC = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ai-agent-card__tile-svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="sumDocGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#6d28d9" />
      </linearGradient>
      <linearGradient id="sumFlapGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#ddd6fe" />
      </linearGradient>
      <linearGradient id="sumSparkleGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e9d5ff" />
        <stop offset="50%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
      <filter id="sumTileShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#5b21b6" floodOpacity="0.28" />
      </filter>
    </defs>
    <g filter="url(#sumTileShadow)">
      <path
        d="M10 8 h14 l6 6 v19 a2.5 2.5 0 0 1 -2.5 2.5 h-17.5 a2.5 2.5 0 0 1 -2.5 -2.5 v-22.5 a2.5 2.5 0 0 1 2.5 -2.5 z"
        fill="url(#sumDocGrad)"
      />
      <path d="M24 8 v6 h6 z" fill="url(#sumFlapGrad)" />
      <rect x="13.5" y="18" width="6" height="2.2" rx="1.1" fill="#f5f3ff" opacity="0.9" />
      <rect x="13.5" y="22" width="11" height="2.2" rx="1.1" fill="#f5f3ff" opacity="0.9" />
      <rect x="13.5" y="26" width="8" height="2.2" rx="1.1" fill="#f5f3ff" opacity="0.9" />
    </g>
    <path
      d="M30 22 C30 25.5 32.5 28 36 28 C32.5 28 30 30.5 30 34 C30 30.5 27.5 28 24 28 C27.5 28 30 25.5 30 22 Z"
      fill="url(#sumSparkleGrad)"
      filter="url(#sumTileShadow)"
    />
  </svg>
);

const ForecastTileIcon: React.FC = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ai-agent-card__tile-svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="fcBar1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#0891b2" />
      </linearGradient>
      <linearGradient id="fcBar2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="fcBar3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <filter id="fcTileShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0891b2" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#fcTileShadow)">
      <rect x="9" y="24" width="6.5" height="12" rx="3.25" fill="url(#fcBar1)" />
      <rect x="18.5" y="16.5" width="6.5" height="19.5" rx="3.25" fill="url(#fcBar2)" />
      <rect x="28" y="8" width="6.5" height="28" rx="3.25" fill="url(#fcBar3)" />
    </g>
  </svg>
);

const TILE_ICONS: Record<string, React.FC> = {
  docu: DocuTileIcon,
  incident: SummaryTileIcon,
  forecast: ForecastTileIcon,
};

const CARD_CAP_ICONS: Record<string, LucideIcon[]> = {
  docu: [FileText, Search, Layers],
  incident: [List, Sparkles, Files],
  forecast: [BarChart2, TrendingUp, Target],
};

/* -------------------------------------------------------------
   Main Showcase Component
   ------------------------------------------------------------- */

export const AIAgentsShowcase: React.FC = () => {
  return (
    <section
      id="ai-agents"
      className="ai-agents-section"
      aria-labelledby="ai-agents-heading"
    >
      {/* Ambient background decoration */}
      <div className="ai-agents-bg-decor" aria-hidden="true">
        <div className="ai-agents-bg-decor__corner ai-agents-bg-decor__corner--left" />
        <div className="ai-agents-bg-decor__corner ai-agents-bg-decor__corner--right" />
        <div className="ai-agents-bg-decor__dots ai-agents-bg-decor__dots--left" />
        <div className="ai-agents-bg-decor__dots ai-agents-bg-decor__dots--right" />
      </div>

      <div className="ai-agents-container">
        {/* Section Header */}
        <header className="ai-agents-header">
          <div className="ai-agents-eyebrow-row">
            <span className="ai-agents-eyebrow">SNOWFLAKE-NATIVE AI AGENTS</span>
            <span className="ai-agents-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 id="ai-agents-heading" className="ai-agents-heading">
            Purpose-Built AI Agents. Governed by Design.
          </h2>
          <p className="ai-agents-subtitle">
            Specialized domain agents engineered for deep contextual workflows within your Snowflake data cloud — fully observable, auditable, and secure.
          </p>
        </header>

        {/* 3 Equal Cards Overview Row */}
        <div className="ai-agents-grid" role="region" aria-label="Available AI Agents">
          {AI_AGENTS_DATA.map((agent) => {
            const TileIcon = TILE_ICONS[agent.id] || DocuTileIcon;
            const capIcons = CARD_CAP_ICONS[agent.id] || [FileText, Search, Layers];

            return (
              <article
                key={agent.id}
                className={`ai-agent-card ai-agent-card--${agent.accentClass}`}
              >
                {/* Ambient glow accent at bottom of card */}
                <div
                  className={`ai-agent-card__ambient-glow ai-agent-card__ambient-glow--${agent.accentClass}`}
                  aria-hidden="true"
                />

                {/* Card Header */}
                <div className="ai-agent-card__header">
                  <div
                    className={`ai-agent-card__icon-tile ai-agent-card__icon-tile--${agent.accentClass}`}
                  >
                    <TileIcon />
                  </div>

                  <div className="ai-agent-card__divider-v" aria-hidden="true" />

                  <div className="ai-agent-card__title-box">
                    <span className="ai-agent-card__title-main">
                      {agent.titlePrimary}
                    </span>
                    <span
                      className={`ai-agent-card__title-agent ai-agent-card__title-agent--${agent.accentClass}`}
                    >
                      {agent.titleSecondary}
                    </span>
                  </div>

                  {/* Circular Interactive Arrow Button linking directly to dedicated agent page */}
                  <Link
                    to={agent.route}
                    className={`ai-agent-card__arrow-btn ai-agent-card__arrow-btn--${agent.accentClass}`}
                    aria-label={`Explore dedicated page for ${agent.fullName}`}
                  >
                    <ArrowRight
                      size={20}
                      className="ai-agent-card__arrow-icon"
                      aria-hidden="true"
                    />
                  </Link>
                </div>

                {/* Description */}
                <p className="ai-agent-card__description">
                  {agent.cardDescription}
                </p>

                {/* Horizontal Divider */}
                <div className="ai-agent-card__divider-h" aria-hidden="true" />

                {/* Capability List */}
                <ul className="ai-agent-card__capabilities">
                  {agent.cardCapabilities.map((capText, idx) => {
                    const CapIcon = capIcons[idx] || CheckCircle2;
                    return (
                      <li key={idx} className="ai-agent-card__cap-item">
                        <CapIcon
                          size={17}
                          className={`ai-agent-card__cap-icon ai-agent-card__cap-icon--${agent.accentClass}`}
                        />
                        <span className="ai-agent-card__cap-text">{capText}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Ultra-HD 3D Visualization at bottom of card */}
                <Link
                  to={agent.route}
                  className="ai-agent-card__vis-container"
                  aria-label={`Learn more about ${agent.fullName}`}
                >
                  <img
                    src={agent.cardImage}
                    alt={`${agent.fullName} 3D visualization`}
                    className="ai-agent-card__vis-image"
                    loading="lazy"
                    width={1774}
                    height={887}
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
