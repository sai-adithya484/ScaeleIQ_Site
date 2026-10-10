import React from 'react';
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
  LucideIcon,
} from 'lucide-react';
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
    {/* Back document sheet */}
    <path
      d="M17 5 h11 l6 6 v18 a2.5 2.5 0 0 1 -2.5 2.5 h-14.5 a2.5 2.5 0 0 1 -2.5 -2.5 v-21.5 a2.5 2.5 0 0 1 2.5 -2.5 z"
      fill="url(#docuBackGrad)"
    />
    <path d="M28 5 v6 h6 z" fill="#7dd3fc" opacity="0.9" />

    {/* Front document sheet */}
    <g filter="url(#docuTileShadow)">
      <path
        d="M10 11 h12 l6 6 v17 a2.5 2.5 0 0 1 -2.5 2.5 h-15.5 a2.5 2.5 0 0 1 -2.5 -2.5 v-20.5 a2.5 2.5 0 0 1 2.5 -2.5 z"
        fill="url(#docuFrontGrad)"
      />
      <path d="M22 11 v6 h6 z" fill="url(#docuFlapGrad)" />
      {/* Document content lines */}
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
    {/* Main document */}
    <g filter="url(#sumTileShadow)">
      <path
        d="M10 8 h14 l6 6 v19 a2.5 2.5 0 0 1 -2.5 2.5 h-17.5 a2.5 2.5 0 0 1 -2.5 -2.5 v-22.5 a2.5 2.5 0 0 1 2.5 -2.5 z"
        fill="url(#sumDocGrad)"
      />
      <path d="M24 8 v6 h6 z" fill="url(#sumFlapGrad)" />
      {/* Document content lines */}
      <rect x="13.5" y="18" width="6" height="2.2" rx="1.1" fill="#f5f3ff" opacity="0.9" />
      <rect x="13.5" y="22" width="11" height="2.2" rx="1.1" fill="#f5f3ff" opacity="0.9" />
      <rect x="13.5" y="26" width="8" height="2.2" rx="1.1" fill="#f5f3ff" opacity="0.9" />
    </g>
    {/* Overlapping Sparkle Star at bottom right */}
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
      {/* 3 ascending rounded vertical bars */}
      <rect x="9" y="24" width="6.5" height="12" rx="3.25" fill="url(#fcBar1)" />
      <rect x="18.5" y="16.5" width="6.5" height="19.5" rx="3.25" fill="url(#fcBar2)" />
      <rect x="28" y="8" width="6.5" height="28" rx="3.25" fill="url(#fcBar3)" />
    </g>
  </svg>
);

/* -------------------------------------------------------------
   Agent Data Definitions
   ------------------------------------------------------------- */

interface AgentCapability {
  icon: LucideIcon;
  text: string;
}

interface AgentCardConfig {
  id: string;
  titlePrimary: string;
  titleSecondary: string;
  accentClass: 'docu' | 'summarization' | 'forecast';
  TileIcon: React.FC;
  description: string;
  capabilities: AgentCapability[];
  visSrc: string;
  visAlt: string;
}

const AGENTS: AgentCardConfig[] = [
  {
    id: 'docu',
    titlePrimary: 'DOCU',
    titleSecondary: 'Agent',
    accentClass: 'docu',
    TileIcon: DocuTileIcon,
    description: 'An agent focused on document-centric workflows and information access.',
    capabilities: [
      { icon: FileText, text: 'Work with diverse documents' },
      { icon: Search, text: 'Access information faster' },
      { icon: Layers, text: 'Simplify document workflows' },
    ],
    visSrc: '/assets/ai-agents/docu-agent-vis.png',
    visAlt: 'DOCU Agent document workflows 3D visualization',
  },
  {
    id: 'summarization',
    titlePrimary: 'Summarization',
    titleSecondary: 'Agent',
    accentClass: 'summarization',
    TileIcon: SummaryTileIcon,
    description: 'An agent designed to turn lengthy information into concise, readable summaries.',
    capabilities: [
      { icon: List, text: 'Convert complex content to clear summaries' },
      { icon: Sparkles, text: 'Extract key insights quickly' },
      { icon: Files, text: 'Support faster decision making' },
    ],
    visSrc: '/assets/ai-agents/summary-agent-vis.png',
    visAlt: 'Summarization Agent concise extraction 3D visualization',
  },
  {
    id: 'forecast',
    titlePrimary: 'Forecast',
    titleSecondary: 'Agent',
    accentClass: 'forecast',
    TileIcon: ForecastTileIcon,
    description: 'An agent focused on forecasting trends and supporting forward-looking analysis.',
    capabilities: [
      { icon: BarChart2, text: 'Identify trends and patterns' },
      { icon: TrendingUp, text: 'Support data-driven planning' },
      { icon: Target, text: 'Enable proactive decision making' },
    ],
    visSrc: '/assets/ai-agents/forecast-agent-vis.png',
    visAlt: 'Forecast Agent trend forecasting 3D visualization',
  },
];

/* -------------------------------------------------------------
   Main Section Component
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
        <div className="ai-agents-header">
          <div className="ai-agents-eyebrow-row">
            <span className="ai-agents-eyebrow">AI AGENTS</span>
            <span className="ai-agents-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 id="ai-agents-heading" className="ai-agents-heading">
            Intelligence for Every Workflow
          </h2>
          <p className="ai-agents-subtitle">
            Explore specialized AI agents designed to support document workflows,{' '}
            <br className="ai-agents-subtitle__br" />
            summarization, and forecasting.
          </p>
        </div>

        {/* 3 Equal Cards */}
        <div className="ai-agents-grid">
          {AGENTS.map((agent) => {
            const { TileIcon } = agent;
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

                  <div
                    className={`ai-agent-card__arrow-btn ai-agent-card__arrow-btn--${agent.accentClass}`}
                    aria-hidden="true"
                  >
                    <ArrowRight size={20} />
                  </div>
                </div>

                {/* Description */}
                <p className="ai-agent-card__description">
                  {agent.description}
                </p>

                {/* Horizontal Divider */}
                <div className="ai-agent-card__divider-h" aria-hidden="true" />

                {/* Capability List */}
                <ul className="ai-agent-card__capabilities">
                  {agent.capabilities.map((cap, idx) => {
                    const CapIcon = cap.icon;
                    return (
                      <li key={idx} className="ai-agent-card__cap-item">
                        <CapIcon
                          size={17}
                          className={`ai-agent-card__cap-icon ai-agent-card__cap-icon--${agent.accentClass}`}
                        />
                        <span className="ai-agent-card__cap-text">{cap.text}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* 3D Illustration at bottom of card */}
                <div className="ai-agent-card__vis-container" aria-hidden="true">
                  <img
                    src={agent.visSrc}
                    alt={agent.visAlt}
                    className="ai-agent-card__vis-image"
                    loading="lazy"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
