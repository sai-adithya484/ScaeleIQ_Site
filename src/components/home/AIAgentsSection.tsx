import React, { useEffect, useRef, useState } from 'react';
import { Database, Code2, Network, ShieldCheck, Terminal, Activity, BrainCircuit, LucideIcon } from 'lucide-react';
import { RevealAnimation } from '../ui/RevealAnimation';
import { OglOrb } from './OglOrb';
import './AIAgentsSection.css';

/*
  COORDINATE SYSTEM — SVG viewBox 0 0 1200 720
  Central orb center: (600, 360)  radius: 185

  Card positions (CSS absolute) — width: 320px, height: 160px:
    top-left  : left:80px  top:20px   -> dock right edge at SVG (400, 100)
    top-right : right:80px top:20px   -> dock left  edge at SVG (800, 100)
    mid-left  : left:-30px top:290px  -> dock right edge at SVG (290, 370)  [increased distance!]
    mid-right : right:-30px top:290px -> dock left  edge at SVG (910, 370)  [increased distance!]
    bot-left  : left:80px  top:540px  -> dock right edge at SVG (400, 620)
    bot-right : right:80px top:540px  -> dock left  edge at SVG (800, 620)

  Orb perimeter points & smooth Bezier curves:
    pipeline     : ox=454, oy=246 -> dx=400, dy=100 : M 454 246 C 445 200, 425 150, 400 100
    semantic     : ox=746, oy=246 -> dx=800, dy=100 : M 746 246 C 755 200, 775 150, 800 100
    integration  : ox=420, oy=322 -> dx=290, dy=370 : M 420 322 C 375 322, 335 370, 290 370 [curved into dot!]
    observability: ox=780, oy=322 -> dx=910, dy=370 : M 780 322 C 825 322, 865 370, 910 370 [curved into dot!]
    governance   : ox=454, oy=474 -> dx=400, dy=620 : M 454 474 C 445 520, 425 570, 400 620
    legacy       : ox=746, oy=474 -> dx=800, dy=620 : M 746 474 C 755 520, 775 570, 800 620
*/

interface AgentDef {
  id: string;
  title: string;
  role: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  glowColor?: string;
  colorRgb: string;
  glowRgb?: string;
  position: 'top-left' | 'top-right' | 'mid-left' | 'mid-right' | 'bot-left' | 'bot-right';
  ox: number;
  oy: number;
  dx: number;
  dy: number;
  path: string;
}

const AGENTS: AgentDef[] = [
  {
    id: 'pipeline',
    title: 'Autonomous Pipeline Agent',
    role: 'INGESTION & MIGRATION',
    desc: 'Autonomous data pipeline architect. Instantly connects to source systems, optimizes schemas, and deploys high-volume data pipelines in real-time.',
    icon: Database,
    color: '#06B6D4',
    glowColor: '#22D3EE',
    colorRgb: '6, 182, 212',
    glowRgb: '34, 211, 238',
    position: 'top-left',
    ox: 454,
    oy: 246,
    dx: 400,
    dy: 100,
    path: 'M 454 246 C 445 200, 425 150, 400 100',
  },
  {
    id: 'semantic',
    title: 'Semantic Graph Agent',
    role: 'SEMANTIC & ONTOLOGY',
    desc: 'The structural engineer of your ecosystem. Translates technical metadata into business-ready semantic layers, ensuring a unified truth across teams.',
    icon: Network,
    color: '#7C3AED',
    glowColor: '#A855F7',
    colorRgb: '124, 58, 237',
    glowRgb: '168, 85, 247',
    position: 'top-right',
    ox: 746,
    oy: 246,
    dx: 800,
    dy: 100,
    path: 'M 746 246 C 755 200, 775 150, 800 100',
  },
  {
    id: 'integration',
    title: 'Integration & Connector Agent',
    role: 'SYSTEM INTEGRATION',
    desc: 'Builds and deploys production-ready connectors across SAP, Salesforce, Oracle, and cloud platforms.',
    icon: Code2,
    color: '#0D9488',
    glowColor: '#10B981',
    colorRgb: '13, 148, 136',
    glowRgb: '16, 185, 129',
    position: 'mid-left',
    ox: 420,
    oy: 322,
    dx: 290,
    dy: 370,
    path: 'M 420 322 C 375 322, 335 370, 290 370',
  },
  {
    id: 'observability',
    title: 'Observability & Resilience Agent',
    role: 'MONITORING & HEALING',
    desc: 'Continuously monitors pipelines, auto-tunes performance, and self-heals failures before downstream impact.',
    icon: Activity,
    color: '#E11D48',
    glowColor: '#F43F5E',
    colorRgb: '225, 29, 72',
    glowRgb: '244, 63, 94',
    position: 'mid-right',
    ox: 780,
    oy: 322,
    dx: 910,
    dy: 370,
    path: 'M 780 322 C 825 322, 865 370, 910 370',
  },
  {
    id: 'governance',
    title: 'Governance & Quality Guard',
    role: 'FORENSIC & QA AGENT',
    desc: 'Zero-latency quality assurance. Monitors data pipelines 24/7, validates master data integrity, and triggers self-healing protocols before downstream impact.',
    icon: ShieldCheck,
    color: '#EA580C',
    glowColor: '#FB923C',
    colorRgb: '234, 88, 12',
    glowRgb: '251, 146, 60',
    position: 'bot-left',
    ox: 454,
    oy: 474,
    dx: 400,
    dy: 620,
    path: 'M 454 474 C 445 520, 425 570, 400 620',
  },
  {
    id: 'legacy',
    title: 'Legacy Modernization Assistant',
    role: 'LEGACY MODERNIZATION',
    desc: 'Modernizes complex stored procedures, ETL scripts, and proprietary frameworks while preserving historical data.',
    icon: Terminal,
    color: '#3B82F6',
    glowColor: '#60A5FA',
    colorRgb: '59, 130, 246',
    glowRgb: '96, 165, 250',
    position: 'bot-right',
    ox: 746,
    oy: 474,
    dx: 800,
    dy: 620,
    path: 'M 746 474 C 755 520, 775 570, 800 620',
  },
];

export const AIAgentsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);
  const [orbHovered, setOrbHovered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setInView(true); obs.unobserve(el); }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="oas-section" ref={sectionRef}>
      <div className="container">
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

        <div className={`oas-stage ${inView ? 'oas-stage--in' : ''}`}>

          <svg
            className="oas-connectors"
            viewBox="0 0 1200 720"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              {AGENTS.map((a) => {
                const glowCol = a.glowColor || a.color;
                return (
                  <React.Fragment key={a.id}>
                    <filter id={`eglow-${a.id}`} x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <linearGradient
                      id={`lg-${a.id}`}
                      x1={a.ox} y1={a.oy}
                      x2={a.dx} y2={a.dy}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor={a.color} stopOpacity="1" />
                      <stop offset="100%" stopColor={glowCol} stopOpacity="0.85" />
                    </linearGradient>
                  </React.Fragment>
                );
              })}
            </defs>

            {AGENTS.map((agent) => {
              const agentActive = hoveredAgent === agent.id;
              const isActive = agentActive || orbHovered;
              const anyHovered = hoveredAgent !== null || orbHovered;
              const faded = anyHovered && !isActive;
              const glowCol = agent.glowColor || agent.color;

              return (
                <g
                  key={agent.id}
                  style={{
                    opacity: faded ? 0.2 : 1,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  {/* Invisible wide hit area for easy line hovering */}
                  <path
                    d={agent.path}
                    fill="none"
                    stroke="transparent"
                    strokeWidth={28}
                    style={{ cursor: 'pointer', pointerEvents: 'stroke' }}
                    onMouseEnter={() => setHoveredAgent(agent.id)}
                    onMouseLeave={() => setHoveredAgent(null)}
                  />

                  {/* Single glow layer — ONLY active on hover, zero glow when resting */}
                  <path
                    d={agent.path}
                    fill="none"
                    stroke={glowCol}
                    strokeWidth={isActive ? 8 : 0}
                    strokeOpacity={isActive ? 0.75 : 0}
                    strokeLinecap="round"
                    filter={isActive ? `url(#eglow-${agent.id})` : undefined}
                    style={{
                      transition: 'stroke-opacity 0.25s ease, stroke-width 0.25s ease',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Clean primary connector — crisp colored line when resting, enhanced on hover */}
                  <path
                    d={agent.path}
                    fill="none"
                    stroke={agent.color}
                    strokeWidth={isActive ? 2.4 : 1.8}
                    strokeOpacity={isActive ? 1 : 0.85}
                    strokeLinecap="round"
                    pathLength="1"
                    className={`oas-connector oas-connector--${agent.id} ${inView ? 'oas-connector--in' : ''}`}
                    style={{ cursor: 'pointer', pointerEvents: 'stroke' }}
                    onMouseEnter={() => setHoveredAgent(agent.id)}
                    onMouseLeave={() => setHoveredAgent(null)}
                  />

                  {/* Orb-side dot ONLY — card-side dot is the HTML dock-dot element */}
                  <circle
                    cx={agent.ox} cy={agent.oy}
                    r={isActive ? 7.5 : 5.5}
                    fill={agent.color}
                    fillOpacity={1}
                    filter={isActive ? `url(#eglow-${agent.id})` : undefined}
                    style={{ transition: 'r 0.25s ease', cursor: 'pointer', pointerEvents: 'all' }}
                    onMouseEnter={() => setHoveredAgent(agent.id)}
                    onMouseLeave={() => setHoveredAgent(null)}
                  />
                </g>
              );
            })}
          </svg>

          <div
            className={`oas-orb-cell ${inView ? 'oas-orb-cell--in' : ''}`}
            onMouseEnter={() => setOrbHovered(true)}
            onMouseLeave={() => setOrbHovered(false)}
          >
            <div className="oas-orb-wrap">
              <div className={`oas-orb-ambient-halo ${orbHovered ? 'oas-orb-ambient-halo--active' : ''}`} />
              <div className="oas-chroma-fields" aria-hidden="true">
                {AGENTS.map((agent) => {
                  const active = hoveredAgent === agent.id || orbHovered;
                  const rgb = agent.glowRgb || agent.colorRgb;
                  return (
                    <div
                      key={`cf-${agent.id}`}
                      className={`oas-chroma-field oas-chroma-field--${agent.position} ${active ? 'oas-chroma-field--active' : ''}`}
                      style={{
                        background: `radial-gradient(circle, rgba(${rgb},${active ? '0.62' : '0.30'}) 0%, rgba(${rgb},0) 70%)`,
                      }}
                    />
                  );
                })}
              </div>
              <div className="oas-orb-ring oas-orb-ring--outer" />
              <div className="oas-orb-ring oas-orb-ring--inner" />
              <OglOrb
                hue={208}
                hoverIntensity={0.65}
                rotateOnHover={true}
                forceHoverState={orbHovered}
                className="oas-orb-canvas"
              />
              <div className={`oas-orb-content ${orbHovered ? 'oas-orb-content--active' : ''}`}>
                <div className="oas-orb-icon-badge">
                  <BrainCircuit size={28} className="oas-chip-icon" />
                </div>
                <h3 className="oas-orb-title">
                  ScaeleIQ<br />
                  Orchestration Engine
                </h3>
                <span className="oas-orb-tag">CENTRAL INTELLIGENCE LAYER</span>
                <div className="oas-orb-divider" />
                <p className="oas-orb-desc">
                  <strong>The Central Nervous System.</strong><br />
                  Orchestrates workflows, assigns tasks,<br />
                  and resolves bottlenecks autonomously.
                </p>
              </div>
            </div>
          </div>

          {AGENTS.map((agent, i) => {
            const Icon = agent.icon;
            const isAgentHovered = hoveredAgent === agent.id;
            const isActive = isAgentHovered || orbHovered;
            const anyHovered = hoveredAgent !== null || orbHovered;
            const isFaded = anyHovered && !isActive;

            return (
              <div
                key={agent.id}
                className={`oas-card oas-card--${agent.position} ${inView ? 'oas-card--in' : ''} ${isActive ? 'oas-card--hovered' : ''} ${isFaded ? 'oas-card--faded' : ''}`}
                style={{
                  transitionDelay: inView ? '0s' : `${0.2 + i * 0.08}s`,
                  ['--agent-color' as string]: agent.color,
                  ['--agent-rgb' as string]: agent.colorRgb,
                }}
                onMouseEnter={() => setHoveredAgent(agent.id)}
                onMouseLeave={() => setHoveredAgent(null)}
              >
                <div
                  className="oas-card__icon-wrap"
                  style={{
                    background: `rgba(${agent.colorRgb}, 0.10)`,
                    border: `1px solid rgba(${agent.colorRgb}, 0.22)`,
                    boxShadow: isActive ? `0 0 18px rgba(${agent.glowRgb || agent.colorRgb}, 0.35)` : 'none',
                  }}
                >
                  <Icon size={22} style={{ color: agent.color }} />
                </div>
                <div className="oas-card__body">
                  <span className="oas-card__role" style={{ color: agent.color }}>
                    {agent.role}
                  </span>
                  <h4 className="oas-card__title">{agent.title}</h4>
                  <p className="oas-card__desc">{agent.desc}</p>
                </div>
                <div
                  className="oas-card__dock-dot"
                  style={{
                    backgroundColor: agent.color,
                    boxShadow: `0 0 ${isActive ? '18px 6px' : '8px 2px'} rgba(${agent.glowRgb || agent.colorRgb}, ${isActive ? '0.95' : '0.55'})`,
                    transform: isActive ? 'translateY(-50%) scale(1.45)' : 'translateY(-50%)',
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
