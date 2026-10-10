import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ShieldCheck, CheckCircle2,
  Activity,
  Network,
  Lock, RefreshCw,
  Settings, Users,
  DollarSign,
  ShoppingCart,
  Database,
  GitFork,
  Sliders,
  CloudDownload,
  Building2,
  BarChart2,
  FileText,
  GitBranch,
  Sparkles,
  Link2,
  Package,
  Layers,
  MoreVertical,
  Cpu,
  Workflow,
  Eye,
  AlertTriangle,
  Cloud,
  User,
} from 'lucide-react';

/* ============================================================
   VISUAL 1: DIRECT FLOW
   Enterprise Data Migration & Modernization Architecture
   Matches reference: Sources â†’ Staging Layer (AWS/Azure/GCP) â†’ Target Platforms
   LEFT â†’ RIGHT flow with real logos from /assets/Logos/
   ============================================================ */
export const DirectFlowVisual: React.FC = () => {
  const [activeSource, setActiveSource] = useState(0);
  const [activeCloud, setActiveCloud] = useState(0);
  const [hoveredSource, setHoveredSource] = useState<number | null>(null);
  const [hoveredTarget, setHoveredTarget] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSource((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCloud((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const sources = [
    { name: 'SAP', logo: '/assets/Logos/sap-logo.png', logoAlt: 'SAP' },
    { name: 'Teradata', logo: '/assets/Logos/teradata_Logo.png', logoAlt: 'Teradata' },
    { name: 'Oracle', logo: '/assets/Logos/oracle-logo.png', logoAlt: 'Oracle' },
    { name: 'SQL Server', logo: '/assets/Logos/sql-server.png', logoAlt: 'SQL Server' },
  ];

  const targets = [
    { name: 'Snowflake', logo: '/assets/Logos/Snowflake.png', logoAlt: 'Snowflake' },
    { name: 'Databricks', logo: '/assets/Logos/Databricks.png', logoAlt: 'Databricks' },
  ];

  const pipelineCapabilities = [
    { name: 'CDC', icon: Database },
    { name: 'Schema Mapping', icon: GitFork },
    { name: 'Transform', icon: Settings },
    { name: 'Validate', icon: ShieldCheck },
    { name: 'Orchestrate', icon: Sliders },
    { name: 'Load', icon: CloudDownload },
  ];

  // ── EXACT COORDINATE MATH ──────────────────────────────────────────────
  // Stack height = 220px, justify-content: center
  // 4 cards × 44px + 3 gaps × 14px = 218px → top offset = (220-218)/2 = 1px
  // Card centers (from top of SVG viewBox = top of connector box):
  //   Card 0: 1 + 22 = 23
  //   Card 1: 1 + 44 + 14 + 22 = 81
  //   Card 2: 1 + 44+14+44+14+22 = 139
  //   Card 3: 1 + 44+14+44+14+44+14+22 = 197
  //
  // Staging box (3 × 66px cards + 2 × 10.4px gaps ≈ 219px) sits centered
  // in the 220px canvas → center of staging = 110.
  // Fan entry points around 110 with 12px spacing:
  //   Path 0: 110-18 = 92,  Path 1: 110-6 = 104,
  //   Path 2: 110+6 = 116,  Path 3: 110+18 = 128
  const leftPaths = [
    { src: 23, dst: 92 },
    { src: 81, dst: 104 },
    { src: 139, dst: 116 },
    { src: 197, dst: 128 },
  ];

  // Target cards: 2 × 44px + 1 gap × 24px = 112px, centered in 220px
  // Offset = (220-112)/2 = 54 → centers: 54+22=76, 54+22+44+24=144
  // Staging exit — fan around 110 with 12px spacing (not a single point):
  //   Path 0: 104 → 76 (Snowflake),  Path 1: 116 → 144 (Databricks)
  const rightPaths = [
    { src: 104, dst: 76 },
    { src: 116, dst: 144 },
  ];

  const getParticleOpacity = (idx: number, side: 'left' | 'right') => {
    if (side === 'left' && hoveredSource !== null) return idx === hoveredSource ? 1 : 0.2;
    if (side === 'right' && hoveredTarget !== null) return idx === hoveredTarget ? 1 : 0.2;
    return 1;
  };

  return (
    <div className="visual-direct-flow-v2">

      {/* ── COLUMN HEADERS above canvas so SVG and cards align exactly ── */}
      <div className="df-flow-headers">
        <div className="df-col-header-cell">ENTERPRISE SOURCES</div>
        <div className="df-connector-header-gap" />
        <div className="df-col-header-cell df-col-header-cell--center">STAGING LAYER</div>
        <div className="df-connector-header-gap" />
        <div className="df-col-header-cell df-col-header-cell--right">TARGET PLATFORMS</div>
      </div>

      {/* ── FLOW CANVAS — cards + connectors only, no headers ── */}
      <div className="df-flow-canvas">

        {/* Column 1: Enterprise Sources — full-size logo, no badge box, no text */}
        <div className="df-col df-col--sources">
          <div className="df-cards-stack">
            {sources.map((src, i) => (
              <div
                key={src.name}
                className={`df-source-card-v2 ${(i === activeSource || i === hoveredSource) ? 'df-source-card-v2--active' : ''}`}
                onMouseEnter={() => setHoveredSource(i)}
                onMouseLeave={() => setHoveredSource(null)}
              >
                <img
                  src={src.logo}
                  alt={src.logoAlt}
                  className={`df-card-logo df-card-logo--${src.name.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* SVG Connector 1: Sources â†’ Staging â€” paths start from card centers */}
        <div className="df-connector-box">
          <svg viewBox="0 0 90 220" className="df-connector-svg" preserveAspectRatio="none">
            <defs>
              <filter id="dfGlowL" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Static path lines */}
            {leftPaths.map((p, i) => (
              <path
                key={i}
                d={`M 0 ${p.src} C 50 ${p.src}, 40 ${p.dst}, 90 ${p.dst}`}
                className="df-flow-path"
                style={{ opacity: hoveredSource !== null && hoveredSource !== i ? 0.15 : 1 }}
              />
            ))}

            {/* Terminal dot at card center (left edge) */}
            {leftPaths.map((p, i) => (
              <circle key={`nl-${i}`} cx="0" cy={p.src} r="2.5" className="df-flow-node"
                style={{ opacity: hoveredSource !== null && hoveredSource !== i ? 0.15 : 1 }} />
            ))}
            {/* Terminal dot at staging entry (right edge) */}
            {leftPaths.map((p, i) => (
              <circle key={`nr-${i}`} cx="90" cy={p.dst} r="2.5" className="df-flow-node"
                style={{ opacity: hoveredSource !== null && hoveredSource !== i ? 0.15 : 1 }} />
            ))}

            {/* Glowing cyan particles â€” 2 per path, staggered */}
            {leftPaths.map((p, i) => {
              const pathD = `M 0 ${p.src} C 50 ${p.src}, 40 ${p.dst}, 90 ${p.dst}`;
              const dur = [2.2, 2.0, 2.1, 2.3][i];
              const offset = i * 0.3;
              const op = getParticleOpacity(i, 'left');
              return (
                <g key={`particles-l-${i}`}>
                  <circle r="3" fill="#00E5FF" filter="url(#dfGlowL)">
                    <animateMotion dur={`${dur}s`} begin={`${offset}s`} repeatCount="indefinite" path={pathD} />
                    <animate attributeName="opacity" values={`0;${op};${op};0`} keyTimes="0;0.1;0.9;1" dur={`${dur}s`} begin={`${offset}s`} repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#00E5FF" filter="url(#dfGlowL)">
                    <animateMotion dur={`${dur}s`} begin={`${offset + dur / 2}s`} repeatCount="indefinite" path={pathD} />
                    <animate attributeName="opacity" values={`0;${op};${op};0`} keyTimes="0;0.1;0.9;1" dur={`${dur}s`} begin={`${offset + dur / 2}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Column 2: Staging Layer — logo only, no text labels */}
        <div className="df-col df-col--staging">
          <div className="df-staging-box-v2">
            <div className={`df-staging-card ${activeCloud === 0 ? 'df-staging-card--active' : ''}`}>
              <img src="/assets/Logos/aws-logo.png" alt="AWS" className="df-staging-logo-only" />
            </div>
            <div className={`df-staging-card df-staging-card--azure ${activeCloud === 1 ? 'df-staging-card--active' : ''}`}>
              <img src="/assets/Logos/azure.png" alt="Azure" className="df-staging-logo-only" />
            </div>
            <div className={`df-staging-card ${activeCloud === 2 ? 'df-staging-card--active' : ''}`}>
              <img src="/assets/Logos/google-cloud.png" alt="GCP" className="df-staging-logo-only" />
            </div>
          </div>
        </div>

        {/* SVG Connector 2: Staging → Targets */}
        <div className="df-connector-box">
          <svg viewBox="0 0 90 220" className="df-connector-svg" preserveAspectRatio="none">
            <defs>
              <filter id="dfGlowR" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {rightPaths.map((p, i) => (
              <path
                key={i}
                d={`M 0 ${p.src} C 40 ${p.src}, 50 ${p.dst}, 90 ${p.dst}`}
                className="df-flow-path"
                style={{ opacity: hoveredTarget !== null && hoveredTarget !== i ? 0.15 : 1 }}
              />
            ))}
            {rightPaths.map((p, i) => (
              <circle key={`nl-${i}`} cx="0" cy={p.src} r="2.5" className="df-flow-node"
                style={{ opacity: hoveredTarget !== null && hoveredTarget !== i ? 0.15 : 1 }} />
            ))}
            {rightPaths.map((p, i) => (
              <circle key={`nr-${i}`} cx="90" cy={p.dst} r="2.5" className="df-flow-node"
                style={{ opacity: hoveredTarget !== null && hoveredTarget !== i ? 0.15 : 1 }} />
            ))}
            {rightPaths.map((p, i) => {
              const pathD = `M 0 ${p.src} C 40 ${p.src}, 50 ${p.dst}, 90 ${p.dst}`;
              const dur = [2.0, 2.1][i];
              const offset = i * 0.5 + 0.2;
              const op = getParticleOpacity(i, 'right');
              return (
                <g key={`particles-r-${i}`}>
                  <circle r="3" fill="#00E5FF" filter="url(#dfGlowR)">
                    <animateMotion dur={`${dur}s`} begin={`${offset}s`} repeatCount="indefinite" path={pathD} />
                    <animate attributeName="opacity" values={`0;${op};${op};0`} keyTimes="0;0.1;0.9;1" dur={`${dur}s`} begin={`${offset}s`} repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#00E5FF" filter="url(#dfGlowR)">
                    <animateMotion dur={`${dur}s`} begin={`${offset + dur / 2}s`} repeatCount="indefinite" path={pathD} />
                    <animate attributeName="opacity" values={`0;${op};${op};0`} keyTimes="0;0.1;0.9;1" dur={`${dur}s`} begin={`${offset + dur / 2}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Column 3: Target Platforms — full-size logo, no wrapper */}
        <div className="df-col df-col--targets">
          <div className="df-cards-stack df-cards-stack--targets">
            {targets.map((tgt, i) => (
              <div
                key={tgt.name}
                className={`df-target-card-v2 ${i === hoveredTarget ? 'df-target-card-v2--active' : ''}`}
                onMouseEnter={() => setHoveredTarget(i)}
                onMouseLeave={() => setHoveredTarget(null)}
              >
                <img src={tgt.logo} alt={tgt.logoAlt} className="df-card-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Pipeline Capabilities */}
      <div className="df-pipeline-capabilities">
        <span className="df-capabilities-header">PIPELINE CAPABILITIES</span>
        <div className="df-capabilities-grid">
          {pipelineCapabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.name} className="df-cap-card">
                <div className="df-cap-icon-wrap">
                  <Icon size={16} />
                </div>
                <span className="df-cap-name">{cap.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   VISUAL 2: GOVERN360
   Rebuilt Radial Governance Visualization
   Matches Reference: Central Govern360 Node with 6 Surrounding Pillars
   Top: Quality | Upper-Left: Policies | Upper-Right: Lineage
   Lower-Left: Ownership | Lower-Right: Security | Bottom: Compliance
   Bottom Metrics: 360° | 99.98% | 100% | 50%
   ============================================================ */
export const Govern360Visual: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0); // Default to Quality (index 0)
  const [isHovering, setIsHovering] = useState(false);

  // Auto-cycle through pillars gently when user is not hovering
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 4200);
    return () => clearInterval(interval);
  }, [isHovering]);

  const pillars = [
    {
      key: 'quality',
      title: 'Data Quality',
      shortLabel: 'Quality',
      icon: BarChart2,
      desc: 'Validation rules, automated scoring, anomaly detection, and continuous quality monitoring.',
      badge: 'Continuous Validation',
    },
    {
      key: 'policies',
      title: 'Governance Policies',
      shortLabel: 'Policies',
      icon: FileText,
      desc: 'Centralized policy enforcement, compliance retention rules, and enterprise data standards.',
      badge: 'Policy Enforcement',
    },
    {
      key: 'lineage',
      title: 'Data Lineage',
      shortLabel: 'Lineage',
      icon: GitBranch,
      desc: 'Automated end-to-end column traceability from source ingestion to downstream consumption.',
      badge: 'Column-Level Lineage',
    },
    {
      key: 'ownership',
      title: 'Data Ownership',
      shortLabel: 'Ownership',
      icon: Users,
      desc: 'Domain stewardship, collaborative dataset curation, and business accountability assignment.',
      badge: 'Domain Stewardship',
    },
    {
      key: 'security',
      title: 'Data Security',
      shortLabel: 'Security',
      icon: Lock,
      desc: 'Granular attribute-based masking, zero-trust permission auditing, and encryption governance.',
      badge: 'Zero-Trust Security',
    },
    {
      key: 'compliance',
      title: 'Compliance & Audit',
      shortLabel: 'Compliance',
      icon: ShieldCheck,
      desc: 'Regulatory readiness, automated audit reporting logs, and friction-free compliance certification.',
      badge: 'Audit Ready',
    },
  ];

  // Radial geometry (540 x 380 coordinate space)
  const vbWidth = 540;
  const vbHeight = 380;
  const cx = 270;
  const cy = 190;
  const rCenter = 58; // radius of center hub
  const rNode = 26;   // radius of outer node circle

  // Coords strictly following the reference image:
  // TOP: Quality, UPPER LEFT: Policies, UPPER RIGHT: Lineage,
  // LOWER LEFT: Ownership, LOWER RIGHT: Security, BOTTOM: Compliance
  const nodeCoords = [
    { x: 270, y: 52 },  // Quality (Top)
    { x: 110, y: 124 }, // Policies (Upper-Left)
    { x: 430, y: 124 }, // Lineage (Upper-Right)
    { x: 110, y: 256 }, // Ownership (Lower-Left)
    { x: 430, y: 256 }, // Security (Lower-Right)
    { x: 270, y: 328 }, // Compliance (Bottom)
  ];

  // Mathematical spoke calculation: exact edge-of-center to edge-of-node
  const spokes = nodeCoords.map((coord) => {
    const angle = Math.atan2(coord.y - cy, coord.x - cx);
    const startX = cx + rCenter * Math.cos(angle);
    const startY = cy + rCenter * Math.sin(angle);
    const endX = coord.x - rNode * Math.cos(angle);
    const endY = coord.y - rNode * Math.sin(angle);
    return {
      x: coord.x,
      y: coord.y,
      d: `M ${startX.toFixed(1)} ${startY.toFixed(1)} L ${endX.toFixed(1)} ${endY.toFixed(1)}`,
      angleDeg: (angle * 180) / Math.PI,
    };
  });

  const activePillar = pillars[activeNode];

  return (
    <div
      className="visual-govern360"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Primary Radial Governance Card */}
      <div className="gov-radial-card">
        {/* Radial Stage Container */}
        <div className="gov-radial-stage">
          {/* SVG Connection Network, Concentric Rings & Radar Ticks */}
          <svg
            className="gov-svg-connections"
            viewBox={`0 0 ${vbWidth} ${vbHeight}`}
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="govCenterAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.12" />
                <stop offset="60%" stopColor="#0284C7" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
              </radialGradient>
              <filter id="govGlowCyan" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ambient Cyan Aura behind center */}
            <circle cx={cx} cy={cy} r="128" fill="url(#govCenterAura)" />

            {/* Concentric ambient rings matching reference */}
            <circle cx={cx} cy={cy} r="74" className="gov-ring gov-ring--inner" />
            <circle cx={cx} cy={cy} r="94" className="gov-ring gov-ring--middle" />
            <circle cx={cx} cy={cy} r="114" className="gov-ring gov-ring--outer" />

            {/* Subtle radar / compass tick markings */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const x1 = cx + 82 * Math.cos(rad);
              const y1 = cy + 82 * Math.sin(rad);
              const x2 = cx + 114 * Math.cos(rad);
              const y2 = cy + 114 * Math.sin(rad);
              return (
                <line
                  key={deg}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  className="gov-radar-tick"
                />
              );
            })}

            {/* 6 Exact Radial Connections */}
            {spokes.map((spoke, i) => {
              const isActive = i === activeNode;
              return (
                <g key={pillars[i].key}>
                  {/* Subtle spoke guideline */}
                  <path
                    d={spoke.d}
                    className={`gov-spoke-path ${isActive ? 'gov-spoke-path--active' : ''}`}
                  />
                  {/* Gentle cyan traveling pulse when node is active */}
                  {isActive && (
                    <circle r="3" fill="#00B4D8" filter="url(#govGlowCyan)">
                      <animateMotion
                        dur="1.6s"
                        repeatCount="indefinite"
                        path={spoke.d}
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Central Govern360 Hub Node */}
          <div className="gov-center-node">
            <div className="gov-center-shield-badge">
              <ShieldCheck size={20} className="gov-center-shield-icon" />
            </div>
            <span className="gov-center-tag">UNIFIED</span>
            <span className="gov-center-title">Data Governance</span>
            <span className="gov-center-brand">GOVERN360</span>
            <div className="gov-center-aura" />
          </div>

          {/* 6 Outer Pillar Floating Nodes */}
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isActive = i === activeNode;
            const pos = nodeCoords[i];
            return (
              <button
                key={pillar.key}
                type="button"
                className={`gov-node-button ${isActive ? 'gov-node-button--active' : ''}`}
                style={{
                  left: `${(pos.x / vbWidth) * 100}%`,
                  top: `${(pos.y / vbHeight) * 100}%`,
                }}
                onClick={() => setActiveNode(i)}
                onMouseEnter={() => setActiveNode(i)}
                aria-label={pillar.title}
              >
                <div className={`gov-node-circle ${isActive ? 'gov-node-circle--active' : ''}`}>
                  <Icon size={19} className="gov-node-icon" />
                </div>
                <span className={`gov-node-label ${isActive ? 'gov-node-label--active' : ''}`}>
                  {pillar.shortLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Pillar Contextual Strip */}
        <div className="gov-active-detail-strip">
          <div className="gov-active-badge-tag">{activePillar.badge}</div>
          <div className="gov-active-summary">
            <span className="gov-active-summary-title">{activePillar.title}:</span>{' '}
            <span className="gov-active-summary-desc">{activePillar.desc}</span>
          </div>
        </div>

        {/* Bottom Metrics Bar (Matches Reference Image) */}
        <div className="gov-bottom-metrics-bar">
          <div className="gov-metric-column">
            <span className="gov-metric-number">360°</span>
            <span className="gov-metric-caption">Enterprise Visibility</span>
          </div>
          <div className="gov-metric-column">
            <span className="gov-metric-number">99.98%</span>
            <span className="gov-metric-caption">Data Quality Rate</span>
          </div>
          <div className="gov-metric-column">
            <span className="gov-metric-number">100%</span>
            <span className="gov-metric-caption">Compliance Ready</span>
          </div>
          <div className="gov-metric-column">
            <span className="gov-metric-number">50%</span>
            <span className="gov-metric-caption">Faster Audit Cycles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SemantIQVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Refs for schema card right-edge port dots
  const rawPortRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Refs for agent left/right connection ports
  const agentLeftPortRef = useRef<HTMLDivElement>(null);
  const agentRightPortRef = useRef<HTMLDivElement>(null);
  // Refs for entity nodes
  const entityRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const [hoveredRaw, setHoveredRaw] = useState<number | null>(null);
  const [hoveredEntity, setHoveredEntity] = useState<string | null>(null);
  const [activeSchemaIdx, setActiveSchemaIdx] = useState(0);
  const [anchors, setAnchors] = useState<any | null>(null); /*
    rawPoints: { x: number; y: number }[];
    agentLeft: { x: number; y: number };
    agentRight: { x: number; y: number };
    */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSchemaIdx((prev) => (prev + 1) % 4);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const updateAnchors = useCallback(() => {
    if (!containerRef.current || !agentLeftPortRef.current || !agentRightPortRef.current) return;
    const cBox = containerRef.current.getBoundingClientRect();
    const alp = agentLeftPortRef.current.getBoundingClientRect();
    const arp = agentRightPortRef.current.getBoundingClientRect();

    const agentLeft = {
      x: alp.left + alp.width / 2 - cBox.left,
      y: alp.top + alp.height / 2 - cBox.top,
    };
    const agentRight = {
      x: arp.left + arp.width / 2 - cBox.left,
      y: arp.top + arp.height / 2 - cBox.top,
    };

    const rawPoints = rawPortRefs.current.map((el) => {
      if (!el) return { x: 0, y: 0 };
      const b = el.getBoundingClientRect();
      return {
        x: b.right - cBox.left,
        y: b.top + b.height / 2 - cBox.top,
      };
    });

    const entities: typeof anchors extends null ? never : (typeof anchors)['entities'] = {};
    Object.keys(entityRefs.current).forEach((k) => {
      const el = entityRefs.current[k];
      if (!el) return;
      const b = el.getBoundingClientRect();
      entities[k] = {
        left: { x: b.left - cBox.left, y: b.top + b.height / 2 - cBox.top },
        right: { x: b.right - cBox.left, y: b.top + b.height / 2 - cBox.top },
        center: { x: b.left + b.width / 2 - cBox.left, y: b.top + b.height / 2 - cBox.top },
      };
    });

    setAnchors({ rawPoints, agentLeft, agentRight, entities } as any);
  }, []);

  useEffect(() => {
    updateAnchors();
    const t1 = setTimeout(updateAnchors, 60);
    const t2 = setTimeout(updateAnchors, 280);
    window.addEventListener('resize', updateAnchors);
    let ro: ResizeObserver | null = null;
    if (containerRef.current) {
      ro = new ResizeObserver(() => requestAnimationFrame(updateAnchors));
      ro.observe(containerRef.current);
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', updateAnchors);
      if (ro) ro.disconnect();
    };
  }, [updateAnchors]);

  const rawSchemas = [
    { id: 'oracle', name: 'Table', source: 'Oracle • ERP', type: 'Table', icon: Database },
    { id: 'sap', name: 'Table', source: 'SAP • ERP', type: 'Table', icon: Database },
    { id: 'salesforce', name: 'Object', source: 'Salesforce • CRM', type: 'Object', icon: Cloud },
    { id: 'finance', name: 'File', source: 'Files • Finance', type: 'File', icon: FileText },
  ];

  const topCapabilities = [
    { label: 'Schema Understanding', icon: Database },
    { label: 'AI-Powered Mapping', icon: Sparkles },
    { label: 'Business Context', icon: FileText },
  ];

  const bottomCapabilities = [
    { label: 'Entity Resolution', icon: Link2 },
    { label: 'Semantic Layer Automation', icon: Settings },
    { label: 'Governed Metadata', icon: ShieldCheck },
  ];

  // Primary entities (left column of graph)
  const primaryEntities = [
    { id: 'Customer', name: 'Customer', icon: User, color: '#2563EB', stroke: '#3B82F6', marker: 'url(#arrowBlue)', pulseFill: '#3B82F6' },
    { id: 'Order', name: 'Order', icon: FileText, color: '#0D9488', stroke: '#0D9488', marker: 'url(#arrowTeal)', pulseFill: '#0D9488' },
    { id: 'Product', name: 'Product', icon: Package, color: '#EA580C', stroke: '#EA580C', marker: 'url(#arrowOrange)', pulseFill: '#EA580C' },
  ];

  // Secondary entities (right column of graph)
  const secondaryEntities = [
    { id: 'Revenue', name: 'Revenue', icon: BarChart2, color: '#9333EA' },
    { id: 'Fulfillment', name: 'Fulfillment', icon: Layers, color: '#7C3AED' },
  ];

  // Relationships between primary and secondary entities
  const relationships = [
    { from: 'Customer', to: 'Revenue', color: '#8B5CF6', marker: 'url(#arrowPurple)', dur: '2.1s', offset: '0s' },
    { from: 'Order', to: 'Revenue', color: '#8B5CF6', marker: 'url(#arrowPurple)', dur: '2.3s', offset: '0.4s' },
    { from: 'Order', to: 'Fulfillment', color: '#7C3AED', marker: 'url(#arrowViolet)', dur: '2.0s', offset: '0.6s' },
    { from: 'Product', to: 'Fulfillment', color: '#7C3AED', marker: 'url(#arrowViolet)', dur: '2.2s', offset: '0.2s' },
  ];

  const isRelActive = (rel: { from: string; to: string }) => {
    if (!hoveredEntity) return true;
    return hoveredEntity === rel.from || hoveredEntity === rel.to;
  };

  const isAgentBranchActive = (entityId: string) => {
    if (!hoveredEntity) return true;
    if (hoveredEntity === entityId) return true;
    if ((hoveredEntity === 'Revenue' || hoveredEntity === 'Fulfillment') && entityId === 'Order') return true;
    if (hoveredEntity === 'Revenue' && entityId === 'Customer') return true;
    if (hoveredEntity === 'Fulfillment' && entityId === 'Product') return true;
    return false;
  };

  return (
    <div className="visual-semantiq-v2">
      {/* 3-Column Header Titles */}
      <div className="sem-stage-headers">
        <div className="sem-stage-header-cell sem-stage-header-cell--left">
          <span className="sem-stage-title">RAW, DISCONNECTED SCHEMAS</span>
        </div>
        <div className="sem-stage-header-cell sem-stage-header-cell--center">
          <span className="sem-stage-title">SEMANTIQ AGENT</span>
        </div>
        <div className="sem-stage-header-cell sem-stage-header-cell--right">
          <span className="sem-stage-title">GOVERNED SEMANTIC GRAPH</span>
        </div>
      </div>

      {/* Main 3-Column Architecture Canvas */}
      <div className="sem-canvas-stage" ref={containerRef}>
        {/* Dynamic SVG Connection Layer — covers the entire canvas */}
        <svg className="sem-svg-overlay" aria-hidden="true">
          <defs>
            <filter id="semGlowCyan" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="semGlowColor" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <marker id="arrowBlue" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 7 4 L 0 7 z" fill="#3B82F6" />
            </marker>
            <marker id="arrowTeal" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 7 4 L 0 7 z" fill="#0D9488" />
            </marker>
            <marker id="arrowOrange" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 7 4 L 0 7 z" fill="#EA580C" />
            </marker>
            <marker id="arrowPurple" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 7 4 L 0 7 z" fill="#9333EA" />
            </marker>
            <marker id="arrowViolet" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 7 4 L 0 7 z" fill="#7C3AED" />
            </marker>
          </defs>

          {anchors && (
            <>
              {/* 1. Left Schema Cards → Agent Left Port (dashed cyan lines) */}
              {anchors.rawPoints.map((pt: any, i: any) => {
                if (pt.x === 0 && pt.y === 0) return null;
                const isActive = hoveredRaw === i || (hoveredRaw === null && activeSchemaIdx === i);
                const dx = anchors.agentLeft.x - pt.x;
                const pathD = `M ${pt.x} ${pt.y} C ${pt.x + dx * 0.5} ${pt.y}, ${anchors.agentLeft.x - dx * 0.3} ${anchors.agentLeft.y}, ${anchors.agentLeft.x} ${anchors.agentLeft.y}`;
                return (
                  <g key={`raw-conn-${i}`}>
                    <path
                      d={pathD}
                      className={`sem-flow-curve ${isActive ? 'sem-flow-curve--active' : ''}`}
                    />
                    <circle r="3" fill="#00B4D8" filter="url(#semGlowCyan)" opacity={isActive ? 1 : 0.5}>
                      <animateMotion
                        dur={`${1.6 + i * 0.2}s`}
                        begin={`${i * 0.3}s`}
                        repeatCount="indefinite"
                        path={pathD}
                      />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={`${1.6 + i * 0.2}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                );
              })}

              {/* 2. Agent Right Port → Primary Entities (colored solid lines with arrows) */}
              {primaryEntities.map((ent, idx) => {
                const target = anchors.entities[ent.id];
                if (!target) return null;
                const isActive = isAgentBranchActive(ent.id);
                const dx = target.left.x - anchors.agentRight.x;
                const pathD = `M ${anchors.agentRight.x} ${anchors.agentRight.y} C ${anchors.agentRight.x + dx * 0.5} ${anchors.agentRight.y}, ${target.left.x - dx * 0.4} ${target.left.y}, ${target.left.x} ${target.left.y}`;
                return (
                  <g key={`agent-to-${ent.id}`}>
                    <path
                      d={pathD}
                      stroke={ent.stroke}
                      strokeWidth={isActive ? 2.2 : 1.4}
                      strokeOpacity={isActive ? 0.9 : 0.2}
                      fill="none"
                      markerEnd={ent.marker}
                    />
                    {isActive && (
                      <circle r="3" fill={ent.pulseFill} filter="url(#semGlowColor)">
                        <animateMotion dur="1.8s" begin={`${idx * 0.35}s`} repeatCount="indefinite" path={pathD} />
                        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="1.8s" begin={`${idx * 0.35}s`} repeatCount="indefinite" />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* 3. Primary → Secondary Entity Relationships (curved arrows) */}
              {relationships.map((rel) => {
                const src = anchors.entities[rel.from];
                const dst = anchors.entities[rel.to];
                if (!src || !dst) return null;
                const isActive = isRelActive(rel);
                const dx = dst.left.x - src.right.x;
                // const dy = dst.center.y - src.center.y;
                const pathD = `M ${src.right.x} ${src.center.y} C ${src.right.x + dx * 0.55} ${src.center.y}, ${dst.left.x - dx * 0.35} ${dst.center.y}, ${dst.left.x} ${dst.center.y}`;
                return (
                  <g key={`rel-${rel.from}-${rel.to}`}>
                    <path
                      d={pathD}
                      stroke={rel.color}
                      strokeWidth={isActive ? 2 : 1.2}
                      strokeOpacity={isActive ? 0.85 : 0.2}
                      fill="none"
                      markerEnd={rel.marker}
                    />
                    {isActive && (
                      <circle r="2.8" fill={rel.color} filter="url(#semGlowColor)">
                        <animateMotion dur={rel.dur} begin={rel.offset} repeatCount="indefinite" path={pathD} />
                        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={rel.dur} begin={rel.offset} repeatCount="indefinite" />
                      </circle>
                    )}
                  </g>
                );
              })}
            </>
          )}
        </svg>

        {/* ── LEFT COLUMN: Raw Schema Cards ── */}
        <div className="sem-col-schemas">
          <div className="sem-raw-stack">
            {rawSchemas.map((schema, i) => {
              const Icon = schema.icon;
              const isSelected = hoveredRaw === i || (hoveredRaw === null && activeSchemaIdx === i);
              return (
                <div
                  key={schema.id}
                  className={`sem-schema-card ${isSelected ? 'sem-schema-card--active' : ''}`}
                  onMouseEnter={() => setHoveredRaw(i)}
                  onMouseLeave={() => setHoveredRaw(null)}
                  onClick={() => setActiveSchemaIdx(i)}
                >
                  <div className="sem-schema-icon-wrap">
                    <Icon size={15} />
                  </div>
                  <div className="sem-schema-body">
                    <span className="sem-schema-name">{schema.name}</span>
                    <span className="sem-schema-source">{schema.source}</span>
                  </div>
                  <div className="sem-schema-meta">
                    <span className="sem-schema-tag">{schema.type}</span>
                    <MoreVertical size={13} className="sem-schema-more" />
                  </div>
                  {/* Anchor Port Dot — right edge */}
                  <div
                    ref={(el: any) => { rawPortRefs.current[i] = el; }}
                    className="sem-schema-port"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CENTER COLUMN: SemantIQ Agent ── */}
        <div className="sem-col-agent">
          {/* Top 3 Capability Pills */}
          <div className="sem-agent-caps-row sem-agent-caps-row--top">
            {topCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.label} className="sem-cap-pill sem-cap-pill--top">
                  <Icon size={13} className="sem-cap-icon" />
                  <span>{cap.label}</span>
                </div>
              );
            })}
          </div>

          {/* Central Layered Hexagon */}
          <div className="sem-agent-hexagon-wrapper">
            <svg className="sem-hex-background-svg" viewBox="0 0 260 220" aria-hidden="true">
              <defs>
                <radialGradient id="hexInnerGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                  <stop offset="60%" stopColor="#F8FAFC" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#F0F9FF" stopOpacity="0.92" />
                </radialGradient>
                <filter id="hexAuraGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Outer glow halo */}
              <polygon
                points="65,10 195,10 252,110 195,210 65,210 8,110"
                fill="rgba(0, 180, 216, 0.08)"
                filter="url(#hexAuraGlow)"
              />
              {/* Outermost thin cyan outline */}
              <polygon
                points="65,10 195,10 252,110 195,210 65,210 8,110"
                fill="none"
                stroke="rgba(0, 180, 216, 0.22)"
                strokeWidth="1.5"
              />
              {/* Middle dashed concentric hexagon */}
              <polygon
                points="75,24 185,24 238,110 185,196 75,196 22,110"
                fill="none"
                stroke="rgba(0, 180, 216, 0.38)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Core glass hexagon surface */}
              <polygon
                points="80,34 180,34 228,110 180,186 80,186 32,110"
                fill="url(#hexInnerGrad)"
                stroke="rgba(0, 180, 216, 0.55)"
                strokeWidth="2"
              />
            </svg>

            {/* Central Agent Content */}
            <div className="sem-agent-content">
              <img
                src="/assets/3DLogos/SCAELE_IQ_LOGO_C.png"
                alt="SemantIQ Agent"
                className="sem-agent-3d-logo"
              />
              <span className="sem-agent-brand-title">Semantic Agent</span>
              {/* <span className="sem-agent-brand-sub">Semantic Agent</span> */}
              {/* <span className="sem-agent-brand-caption">Schema • Meaning • Intelligence</span> */}
            </div>

            {/* Connection Port Nodes */}
            <div ref={agentLeftPortRef} className="sem-agent-port sem-agent-port--left" />
            <div ref={agentRightPortRef} className="sem-agent-port sem-agent-port--right" />
          </div>

          {/* Bottom 3 Capability Pills */}
          <div className="sem-agent-caps-row sem-agent-caps-row--bottom">
            {bottomCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.label} className="sem-cap-pill sem-cap-pill--bottom">
                  <Icon size={13} className="sem-cap-icon" />
                  <span>{cap.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Governed Semantic Graph ── */}
        <div className="sem-col-graph">
          {/* Primary entities — Customer, Order, Product (left sub-column) */}
          <div className="sem-graph-primary-col">
            {primaryEntities.map((ent) => {
              const Icon = ent.icon;
              const isHov = hoveredEntity === ent.id;
              return (
                <div
                  key={ent.id}
                  ref={(el) => { entityRefs.current[ent.id] = el; }}
                  className={`sem-entity-node sem-entity-node--primary ${isHov ? 'sem-entity-node--hover' : ''}`}
                  style={{ '--ent-color': ent.color } as React.CSSProperties}
                  onMouseEnter={() => setHoveredEntity(ent.id)}
                  onMouseLeave={() => setHoveredEntity(null)}
                >
                  <Icon size={20} />
                  <span className="sem-entity-label">{ent.name}</span>
                </div>
              );
            })}
          </div>

          {/* Secondary entities — Revenue, Fulfillment (right sub-column) */}
          <div className="sem-graph-secondary-col">
            {secondaryEntities.map((ent) => {
              const Icon = ent.icon;
              const isHov = hoveredEntity === ent.id;
              return (
                <div
                  key={ent.id}
                  ref={(el) => { entityRefs.current[ent.id] = el; }}
                  className={`sem-entity-node sem-entity-node--secondary ${isHov ? 'sem-entity-node--hover' : ''}`}
                  style={{ '--ent-color': ent.color } as React.CSSProperties}
                  onMouseEnter={() => setHoveredEntity(ent.id)}
                  onMouseLeave={() => setHoveredEntity(null)}
                >
                  <Icon size={20} />
                  <span className="sem-entity-label">{ent.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom: Downstream Integrations Strip */}
      <div className="sem-downstream-strip">
        <span className="sem-downstream-label">DOWNSTREAM INTEGRATIONS:</span>
        <div className="sem-downstream-cards">
          <div className="sem-downstream-card">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="sem-int-svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FF3621" />
              <path d="M2 12L12 17L22 12" stroke="#FF3621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="#FF3621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Databricks</span>
          </div>
          <div className="sem-downstream-card">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="sem-int-svg">
              <rect x="3" y="12" width="4.5" height="9" rx="1.5" fill="#F2C811" />
              <rect x="9.5" y="8" width="4.5" height="13" rx="1.5" fill="#E8B400" />
              <rect x="16" y="4" width="4.5" height="17" rx="1.5" fill="#DDA000" />
            </svg>
            <span>Power BI</span>
          </div>
          <div className="sem-downstream-card">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="sem-int-svg">
              <circle cx="12" cy="4" r="1.8" fill="#E8762D" />
              <circle cx="12" cy="20" r="1.8" fill="#1F77B4" />
              <circle cx="4" cy="12" r="1.8" fill="#1F77B4" />
              <circle cx="20" cy="12" r="1.8" fill="#E8762D" />
              <circle cx="8" cy="8" r="1.5" fill="#5A9BD4" />
              <circle cx="16" cy="8" r="1.5" fill="#D34B37" />
              <circle cx="8" cy="16" r="1.5" fill="#2CA02C" />
              <circle cx="16" cy="16" r="1.5" fill="#FF7F0E" />
              <circle cx="12" cy="12" r="2.2" fill="#E4572E" />
            </svg>
            <span>Tableau</span>
          </div>
          <div className="sem-downstream-card">
            <Cpu size={17} color="#2563EB" />
            <span>LLM / AI Agents</span>
          </div>
        </div>
      </div>
    </div>
  );
};


/* ============================================================
   VISUAL 4: CHARLIE
   AI Copilot â€” Conversational Q&A â†’ SQL â†’ Answer
   Matches reference: User question â†’ understanding â†’ SQL generation
   â†’ execution â†’ answer with chart
   ============================================================ */
export const CharlieVisual: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const steps = [0, 1, 2, 3, 4];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % steps.length;
      setStep(steps[idx]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const barHeights = [28, 38, 22, 44, 32, 48, 26, 40];

  return (
    <div className="visual-charlie">
      <div className="charlie-conversation">
        {/* User Question */}
        <div className="charlie-user-bubble">
          <div className="charlie-user-msg">
            <p>Which region generated the highest revenue this quarter?</p>
          </div>
        </div>

        {/* Charlie Processing Steps */}
        <div className="charlie-response-flow">
          <div className="charlie-step">
            <span className={`charlie-step-icon ${step >= 0 ? 'charlie-step-icon--done' : ''}`}>
              <CheckCircle2 size={12} />
            </span>
            <span className="charlie-step-text">Understanding your question...</span>
          </div>

          <div className="charlie-step">
            <span className={`charlie-step-icon ${step >= 1 ? 'charlie-step-icon--done' : 'charlie-step-icon--loading'}`}>
              {step >= 1 ? <CheckCircle2 size={12} /> : <RefreshCw size={10} />}
            </span>
            <span className={`charlie-step-text ${step < 1 ? 'charlie-step-text--italic' : ''}`}>
              Generating SQL...
            </span>
          </div>
        </div>

        {/* SQL Block */}
        {step >= 1 && (
          <div className="charlie-sql-block">
            <div className="charlie-sql-header">
              <span className="charlie-sql-dot charlie-sql-dot--red" />
              <span className="charlie-sql-dot charlie-sql-dot--yellow" />
              <span className="charlie-sql-dot charlie-sql-dot--green" />
              <span className="charlie-sql-label">Generated SQL</span>
            </div>
            <div className="charlie-sql-body">
              <code>
                <span className="charlie-sql-keyword">SELECT</span>{' '}region, <span className="charlie-sql-func">SUM</span>(revenue) <span className="charlie-sql-keyword">AS</span> total_revenue{'\n'}
                <span className="charlie-sql-keyword">FROM</span> sales{'\n'}
                <span className="charlie-sql-keyword">WHERE</span> quarter = <span className="charlie-sql-string">'Q3'</span>{'\n'}
                <span className="charlie-sql-keyword">GROUP BY</span> region{'\n'}
                <span className="charlie-sql-keyword">ORDER BY</span> total_revenue <span className="charlie-sql-keyword">DESC</span>
              </code>
            </div>
          </div>
        )}

        {/* Executing step */}
        {step >= 2 && (
          <div className="charlie-step">
            <span className={`charlie-step-icon ${step >= 3 ? 'charlie-step-icon--done' : 'charlie-step-icon--loading'}`}>
              {step >= 3 ? <CheckCircle2 size={12} /> : <RefreshCw size={10} />}
            </span>
            <span className="charlie-step-text">Executing query...</span>
          </div>
        )}

        {step >= 3 && (
          <div className="charlie-step">
            <span className="charlie-step-icon charlie-step-icon--done">
              <CheckCircle2 size={12} />
            </span>
            <span className="charlie-step-text">Here's your answer:</span>
          </div>
        )}

        {/* Answer Box */}
        {step >= 3 && (
          <div className="charlie-answer-box">
            <div className="charlie-answer-header">
              <Activity size={12} />
              <span>Query Result</span>
            </div>
            <div className="charlie-answer-content">
              <div className="charlie-answer-text">
                <div className="charlie-answer-region">North America</div>
                <div className="charlie-answer-val">$12.4M</div>
                <div className="charlie-answer-desc">Highest revenue this quarter</div>
              </div>
              <div className="charlie-mini-chart">
                {barHeights.map((h, i) => (
                  <div
                    key={i}
                    className={`charlie-chart-bar ${i === 5 ? 'charlie-chart-bar--active' : ''}`}
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Metrics */}
      <div className="charlie-metrics-row">
        <div className="charlie-metric-item">
          <span className="charlie-metric-val">2â€“5s</span>
          <span className="charlie-metric-lbl">Average Response</span>
        </div>
        <div className="charlie-metric-item">
          <span className="charlie-metric-val">95%+</span>
          <span className="charlie-metric-lbl">Query Accuracy</span>
        </div>
        <div className="charlie-metric-item">
          <span className="charlie-metric-val">10x</span>
          <span className="charlie-metric-lbl">Faster Insights</span>
        </div>
        <div className="charlie-metric-item">
          <span className="charlie-metric-val">Works With</span>
          <span className="charlie-metric-lbl">Your Data</span>
        </div>
      </div>
    </div>
  );
};

export const SAPConnectVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sysRefs = useRef<(HTMLDivElement | null)[]>([]);
  const centerLeftRef = useRef<HTMLDivElement>(null);
  const centerRightRef = useRef<HTMLDivElement>(null);
  const platformRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [anchors, setAnchors] = useState<any | null>(null);

  const sapSystems = [
    { name: 'ECC', img: '/assets/Logos/sap-logo.png' },
    { name: 'S/4HANA', img: '/assets/Logos/sap-logo.png' },
    { name: 'BW', img: '/assets/Logos/sap-logo.png' },
    { name: 'B1', img: '/assets/Logos/sap-logo.png' },
    { name: 'BDC', img: '/assets/Logos/sap-logo.png' },
  ];

  const modernPlatforms = [
    { name: 'Snowflake', img: '/assets/Logos/Snowflake.png' },
    { name: 'Databricks', img: '/assets/Logos/Databricks.png' },
    { name: 'BigQuery', img: '/assets/Logos/BigQuery.png' },
  ];

  const sapModules = [
    { name: 'Finance', icon: DollarSign },
    { name: 'Sales', icon: ShoppingCart },
    { name: 'Procurement', icon: Building2 },
    { name: 'Inventory', icon: Package },
    { name: 'HR', icon: Users },
  ];

  const updateAnchors = useCallback(() => {
    if (!containerRef.current || !centerLeftRef.current || !centerRightRef.current) return;
    const cBox = containerRef.current.getBoundingClientRect();

    const cl = centerLeftRef.current.getBoundingClientRect();
    const cr = centerRightRef.current.getBoundingClientRect();

    const centerLeft = { x: cl.left - cBox.left, y: cl.top + cl.height / 2 - cBox.top };
    const centerRight = { x: cr.right - cBox.left, y: cr.top + cr.height / 2 - cBox.top };

    const sysPoints = sysRefs.current.map(el => {
      if (!el) return { x: 0, y: 0 };
      const b = el.getBoundingClientRect();
      return { x: b.right - cBox.left, y: b.top + b.height / 2 - cBox.top };
    });

    const platPoints = platformRefs.current.map(el => {
      if (!el) return { x: 0, y: 0 };
      const b = el.getBoundingClientRect();
      return { x: b.left - cBox.left, y: b.top + b.height / 2 - cBox.top };
    });

    setAnchors({ sysPoints, platPoints, centerLeft, centerRight });
  }, []);

  useEffect(() => {
    updateAnchors();
    const t = setTimeout(updateAnchors, 100);
    window.addEventListener('resize', updateAnchors);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', updateAnchors);
    };
  }, [updateAnchors]);

  return (
    <div className="visual-sap-connect-v2" style={{ position: 'relative' }}>
      <div className="sap-flow-canvas" ref={containerRef} style={{ position: 'relative', top: '-15px', marginBottom: '-15px' }}>

        {/* SVG Dynamic Overlay */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'visible' }}>
          <defs>
            <filter id="sapGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {anchors && anchors.sysPoints.map((pt: any, i: any) => {
            if (pt.x === 0) return null;
            const targetY = anchors.centerLeft.y - 40 + i * 20;
            const dx = anchors.centerLeft.x - pt.x;
            const pathD = `M ${pt.x} ${pt.y} C ${pt.x + dx * 0.5} ${pt.y}, ${anchors.centerLeft.x - dx * 0.3} ${targetY}, ${anchors.centerLeft.x} ${targetY}`;
            return (
              <g key={`sys-conn-${i}`}>
                <path d={pathD} fill="none" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="1.5" />
                <circle cx={pt.x} cy={pt.y} r="2.5" fill="#00E5FF" />
                <circle cx={anchors.centerLeft.x} cy={targetY} r="2.5" fill="#00E5FF" />
                <circle r="3.2" fill="#00E5FF" filter="url(#sapGlow)">
                  <animateMotion dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" path={pathD} />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                </circle>
              </g>
            );
          })}

          {anchors && anchors.platPoints.map((pt: any, i: any) => {
            if (pt.x === 0) return null;
            const startY = anchors.centerRight.y - 20 + i * 20;
            const dx = pt.x - anchors.centerRight.x;
            const pathD = `M ${anchors.centerRight.x} ${startY} C ${anchors.centerRight.x + dx * 0.5} ${startY}, ${pt.x - dx * 0.3} ${pt.y}, ${pt.x} ${pt.y}`;
            return (
              <g key={`plat-conn-${i}`}>
                <path d={pathD} fill="none" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="1.5" />
                <circle cx={anchors.centerRight.x} cy={startY} r="2.5" fill="#00E5FF" />
                <circle cx={pt.x} cy={pt.y} r="2.5" fill="#00E5FF" />
                <circle r="3.2" fill="#00E5FF" filter="url(#sapGlow)">
                  <animateMotion dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" path={pathD} />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Column 1: SAP Systems */}
        <div className="sap-col sap-col--systems">
          <span className="sap-col-header">SAP SYSTEMS</span>
          <div className="sap-cards-stack sap-cards-stack--systems">
            {sapSystems.map((sys, i) => (
              <div
                key={sys.name}
                ref={(el) => { sysRefs.current[i] = el; }}
                className="sap-system-card-v2"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', zIndex: 1, minWidth: '130px' }}
              >
                <img src={sys.img} alt={sys.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                <span className="sap-card-name" style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>{sys.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: SAP Connect Center Card */}
        <div className="sap-col sap-col--center" style={{ zIndex: 1 }}>
          <div className="sap-connect-center-card" style={{ position: 'relative', padding: '2.5rem 2rem', background: '#fff', border: '1px solid rgba(0, 229, 255, 0.3)', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0, 229, 255, 0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '180px' }}>
            <div ref={centerLeftRef} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '1px', height: '100px' }} />
            <div ref={centerRightRef} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '1px', height: '60px' }} />
            <div className="sap-center-icon-wrap" style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#E0F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Network size={26} className="sap-center-icon" color="#00B4D8" />
            </div>
            <span className="sap-center-title" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>SAP Connect</span>
            <span className="sap-center-subtitle" style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>Extract · Decode ·</span>
            <span className="sap-center-subtitle" style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>Transform · Deliver</span>
          </div>
        </div>

        {/* Column 3: Modern Platforms */}
        <div className="sap-col sap-col--platforms">
          <span className="sap-col-header sap-col-header--right">MODERN PLATFORMS</span>
          <div className="sap-cards-stack sap-cards-stack--platforms">
            {modernPlatforms.map((p, i) => (
              <div
                key={p.name}
                ref={(el) => { platformRefs.current[i] = el; }}
                className="sap-platform-card-v2"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 20px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', zIndex: 1, minWidth: '150px' }}
              >
                <img src={p.img} alt={p.name} style={{ height: '28px', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: SAP Modules */}
      <div className="sap-modules-section">
        <span className="sap-modules-header">SAP MODULES</span>
        <div className="sap-modules-grid">
          {sapModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div key={mod.name} className="sap-module-card">
                <div className="sap-module-icon-wrap">
                  <Icon size={16} />
                </div>
                <span className="sap-module-name">{mod.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export const Hub360Visual: React.FC = () => {
  const [pipelineCount, setPipelineCount] = useState(142);

  useEffect(() => {
    const interval = setInterval(() => {
      setPipelineCount((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(138, Math.min(148, prev + delta));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visual-hub360">
      {/* Top Stats */}
      <div className="hub-top-stats">
        <div className="hub-stat-card">
          <span className="hub-stat-value">{pipelineCount}</span>
          <span className="hub-stat-change">â†‘ 12%</span>
          <span className="hub-stat-label">Active Pipelines</span>
        </div>
        <div className="hub-stat-card">
          <span className="hub-stat-value">99.98%</span>
          <span className="hub-stat-health">
            <span className="hub-stat-health-dot" />
            Healthy
          </span>
          <span className="hub-stat-label">System Health</span>
        </div>
      </div>

      {/* Cloud Regions */}
      <div className="hub-regions-row">
        <div className="hub-region-card hub-region-card--aws">
          <span className="hub-region-name">US-East</span>
          <span className="hub-region-provider">(AWS)</span>
          <span className="hub-region-uptime">98.9%</span>
          <div className="hub-pipeline-bars">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="hub-pipeline-bar" />
            ))}
          </div>
        </div>

        <div className="hub-region-card hub-region-card--azure">
          <span className="hub-region-name">EU-West</span>
          <span className="hub-region-provider">(Azure)</span>
          <span className="hub-region-uptime">99.2%</span>
          <div className="hub-pipeline-bars">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="hub-pipeline-bar" style={{ animationDelay: `${i * 0.12 + 0.3}s` }} />
            ))}
          </div>
        </div>

        <div className="hub-region-card hub-region-card--gcp">
          <span className="hub-region-name">AP-South</span>
          <span className="hub-region-provider">(GCP)</span>
          <span className="hub-region-uptime">99.9%</span>
          <div className="hub-pipeline-bars">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="hub-pipeline-bar" style={{ animationDelay: `${i * 0.12 + 0.6}s` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="hub-controls-row">
        {[
          { icon: RefreshCw, label: 'Ingest' },
          { icon: Settings, label: 'Transform' },
          { icon: Workflow, label: 'Orchestrate' },
          { icon: Eye, label: 'Monitor' },
          { icon: AlertTriangle, label: 'Alert' },
        ].map((ctrl) => {
          const Icon = ctrl.icon;
          return (
            <div key={ctrl.label} className="hub-control-item">
              <div className="hub-control-icon">
                <Icon size={16} />
              </div>
              <span className="hub-control-label">{ctrl.label}</span>
            </div>
          );
        })}
      </div>

      {/* Bottom Metrics */}
      <div className="hub-metrics-row">
        <div className="hub-metric-item">
          <span className="hub-metric-val">3</span>
          <span className="hub-metric-lbl">Cloud Platforms</span>
        </div>
        <div className="hub-metric-item">
          <span className="hub-metric-val">24/7</span>
          <span className="hub-metric-lbl">Monitoring</span>
        </div>
        <div className="hub-metric-item">
          <span className="hub-metric-val">99.9%</span>
          <span className="hub-metric-lbl">SLA Compliance</span>
        </div>
        <div className="hub-metric-item">
          <span className="hub-metric-val">60%</span>
          <span className="hub-metric-lbl">Faster Issue Resolution</span>
        </div>
      </div>
    </div>
  );
};
