import React, { useEffect, useRef, useState } from 'react';
import { Database, Code2, Network, ShieldCheck, Terminal, Activity, Cpu } from 'lucide-react';
import { RevealAnimation } from '../ui/RevealAnimation';
import { OglOrb } from './OglOrb';
import './AIAgentsSection.css';

/* ─── Agent definitions ──────────────────────────────────────────────── */
const AGENTS = [
  {
    id: 'pipeline',
    title: 'Autonomous Pipeline Agent',
    role: 'INGESTION & MIGRATION',
    desc: 'Autonomous data pipeline architect. Instantly connects to source systems, optimizes schemas, and deploys high-volume data pipelines in real-time.',
    icon: Database,
    color: '#0EA5E9',
    colorRgb: '14, 165, 233',
    position: 'top-left',
    // SVG connector from Orb perimeter to card dock
    ox: 426.3,
    oy: 219.9,
    dx: 320,
    dy: 100,
    path: 'M 426.3 219.9 C 375 210, 360 120, 320 100',
  },
  {
    id: 'semantic',
    title: 'Semantic Graph Agent',
    role: 'SEMANTIC & ONTOLOGY',
    desc: 'The structural engineer of your ecosystem. Translates technical metadata into business-ready semantic layers, ensuring a unified truth across teams.',
    icon: Network,
    color: '#7C3AED',
    colorRgb: '124, 58, 237',
    position: 'top-right',
    ox: 733.7,
    oy: 219.9,
    dx: 840,
    dy: 100,
    path: 'M 733.7 219.9 C 785 210, 800 120, 840 100',
  },
  {
    id: 'integration',
    title: 'Integration & Connector Agent',
    role: 'SYSTEM INTEGRATION',
    desc: 'Generates production-grade integration code. Builds, tests, and deploys certified connectors between SAP, Salesforce, Oracle, and cloud platforms in hours.',
    icon: Code2,
    color: '#0D9488',
    colorRgb: '13, 148, 136',
    position: 'mid-left',
    ox: 385,
    oy: 340,
    dx: 320,
    dy: 340,
    path: 'M 385 340 L 320 340',
  },
  {
    id: 'observability',
    title: 'Observability & Resilience Agent',
    role: 'MONITORING & HEALING',
    desc: 'Autonomous system watchdog. Continuously profiles pipeline throughput, auto-tunes indexing, and self-heals failing tasks before downstream dashboards are affected.',
    icon: Activity,
    color: '#E11D48',
    colorRgb: '225, 29, 72',
    position: 'mid-right',
    ox: 775,
    oy: 340,
    dx: 840,
    dy: 340,
    path: 'M 775 340 L 840 340',
  },
  {
    id: 'governance',
    title: 'Governance & Quality Guard',
    role: 'FORENSIC & QA AGENT',
    desc: 'Zero-latency quality assurance. Monitors data pipelines 24/7, validates master data integrity, and triggers self-healing protocols before downstream impact.',
    icon: ShieldCheck,
    color: '#EA580C',
    colorRgb: '234, 88, 12',
    position: 'bot-left',
    ox: 426.3,
    oy: 460.1,
    dx: 320,
    dy: 580,
    path: 'M 426.3 460.1 C 375 470, 360 560, 320 580',
  },
  {
    id: 'legacy',
    title: 'Legacy Modernization Assistant',
    role: 'LEGACY MODERNIZATION',
    desc: 'Legacy modernization specialist. Deconstructs complex stored procedures, ETL scripts, and proprietary mainframes, unlocking siloed historical data without disruption.',
    icon: Terminal,
    color: '#2563EB',
    colorRgb: '37, 99, 235',
    position: 'bot-right',
    ox: 733.7,
    oy: 460.1,
    dx: 840,
    dy: 580,
    path: 'M 733.7 460.1 C 785 470, 800 560, 840 580',
  },
];

export const AIAgentsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="oas-section" ref={sectionRef}>
      <div className="container">

        {/* ── Section Header ─────────────────────────────────────────── */}
        <RevealAnimation variant="up">
          <div className="oas-header">
            <div className="oas-eyebrow">
              <div className="oas-eyebrow-dot" />
              <span>AI-POWERED ENTERPRISE TRANSFORMATION</span>
            </div>
            <h2 className="oas-title">AI Agents + Experts = 5x Faster Results</h2>
            <p className="oas-subtitle">
              Specialized agents and subject matter experts deliver enterprise IT transformation —
              all working in parallel around the clock.
            </p>
          </div>
        </RevealAnimation>

        {/* ── Ecosystem Orchestration Stage ───────────────────────────── */}
        <div className={`oas-stage ${inView ? 'oas-stage--in' : ''}`} ref={stageRef}>

          {/* SVG Connector Layer */}
          <svg
            className="oas-connectors"
            viewBox="0 0 1160 680"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              {AGENTS.map((a) => (
                <React.Fragment key={a.id}>
                  <filter id={`glow-${a.id}`} x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </React.Fragment>
              ))}
            </defs>

            {AGENTS.map((agent) => {
              const isHovered = hoveredAgent === agent.id;
              const isOtherHovered = hoveredAgent !== null && !isHovered;
              const opacity = isOtherHovered ? 0.2 : isHovered ? 1.0 : 0.65;

              return (
                <g key={agent.id} style={{ opacity, transition: 'opacity 0.3s ease' }}>
                  {/* Subtle wide glow line */}
                  <path
                    d={agent.path}
                    fill="none"
                    stroke={agent.color}
                    strokeWidth={isHovered ? 5 : 2.5}
                    strokeOpacity={isHovered ? 0.35 : 0.12}
                    className="oas-connector-glow"
                  />
                  {/* Main connector path */}
                  <path
                    d={agent.path}
                    fill="none"
                    stroke={agent.color}
                    strokeWidth={isHovered ? 2.2 : 1.5}
                    strokeOpacity={isHovered ? 1 : 0.6}
                    strokeDasharray="5 7"
                    className={`oas-connector oas-connector--${agent.id} ${inView ? 'oas-connector--in' : ''}`}
                  />
                  {/* Start endpoint on Orb perimeter */}
                  <circle
                    cx={agent.ox}
                    cy={agent.oy}
                    r={isHovered ? 5.5 : 4}
                    fill={agent.color}
                    fillOpacity={isHovered ? 1 : 0.8}
                    filter={isHovered ? `url(#glow-${agent.id})` : undefined}
                  />
                  {/* Destination endpoint at card dock */}
                  <circle
                    cx={agent.dx}
                    cy={agent.dy}
                    r={isHovered ? 6 : 4.5}
                    fill={agent.color}
                    fillOpacity={1}
                    filter={`url(#glow-${agent.id})`}
                  />
                </g>
              );
            })}
          </svg>

          {/* ── CENTRAL ORCHESTRATION ENGINE (OGL ORB CORE) ───────────── */}
          <div className={`oas-orb-cell ${inView ? 'oas-orb-cell--in' : ''}`}>
            <div className="oas-orb-wrap">
              {/* Outer orbit rings */}
              <div className="oas-orb-ring oas-orb-ring--outer" />
              <div className="oas-orb-ring oas-orb-ring--inner" />

              {/* The WebGL OGL Animated Orb Canvas */}
              <OglOrb
                hue={208}
                hoverIntensity={2}
                rotateOnHover={true}
                forceHoverState={false}
                className="oas-orb-canvas"
              />

              {/* Central Intelligence Layer Content */}
              <div className="oas-orb-content">
                <div className="oas-orb-icon-badge">
                  <div className="oas-chip-pin oas-chip-pin--left-1" />
                  <div className="oas-chip-pin oas-chip-pin--left-2" />
                  <div className="oas-chip-pin oas-chip-pin--right-1" />
                  <div className="oas-chip-pin oas-chip-pin--right-2" />
                  <Cpu size={22} className="oas-chip-icon" />
                </div>
                <h3 className="oas-orb-title">
                  ScaeleIQ<br />
                  Orchestration Engine
                </h3>
                <span className="oas-orb-tag">CENTRAL INTELLIGENCE LAYER</span>
                <p className="oas-orb-desc">
                  <strong>The Central Nervous System.</strong> Orchestrates the entire autonomous
                  agent workforce, optimizing workflows, assigning migration tasks based on real-time
                  load, and resolving data bottlenecks autonomously.
                </p>
              </div>
            </div>
          </div>

          {/* ── SIX SURROUNDING AGENT CARDS ──────────────────────────── */}
          {AGENTS.map((agent, i) => {
            const Icon = agent.icon;
            const isHovered = hoveredAgent === agent.id;
            return (
              <div
                key={agent.id}
                className={`oas-card oas-card--${agent.position} ${inView ? 'oas-card--in' : ''} ${
                  isHovered ? 'oas-card--hovered' : ''
                }`}
                style={{
                  animationDelay: `${0.2 + i * 0.08}s`,
                  ['--agent-color' as string]: agent.color,
                  ['--agent-rgb' as string]: agent.colorRgb,
                }}
                onMouseEnter={() => setHoveredAgent(agent.id)}
                onMouseLeave={() => setHoveredAgent(null)}
              >
                <div
                  className="oas-card__icon-wrap"
                  style={{ background: `rgba(${agent.colorRgb}, 0.09)` }}
                >
                  <Icon size={19} style={{ color: agent.color }} />
                </div>
                <div className="oas-card__body">
                  <span className="oas-card__role" style={{ color: agent.color }}>
                    {agent.role}
                  </span>
                  <h4 className="oas-card__title">{agent.title}</h4>
                  <p className="oas-card__desc">{agent.desc}</p>
                </div>

                {/* Dock point indicator on card edge facing the Orb */}
                <div
                  className="oas-card__dock-dot"
                  style={{
                    backgroundColor: agent.color,
                    boxShadow: isHovered
                      ? `0 0 12px 3px rgba(${agent.colorRgb}, 0.7)`
                      : `0 0 6px 1px rgba(${agent.colorRgb}, 0.4)`,
                  }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
