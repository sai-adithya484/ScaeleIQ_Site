import React, { useState, useEffect } from 'react';
import {
  GitMerge,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  Activity,
  Network,
  Lock,
  Eye,
  FileSearch,
  BarChart3,
  RefreshCw,
  Settings,
  AlertTriangle,
  Package,
  Users,
  DollarSign,
  ShoppingCart,
  Database,
  GitFork,
  Sliders,
  CloudDownload,
  Building2,
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
    { src: 23,  dst: 92  },
    { src: 81,  dst: 104 },
    { src: 139, dst: 116 },
    { src: 197, dst: 128 },
  ];

  // Target cards: 2 × 44px + 1 gap × 24px = 112px, centered in 220px
  // Offset = (220-112)/2 = 54 → centers: 54+22=76, 54+22+44+24=144
  // Staging exit — fan around 110 with 12px spacing (not a single point):
  //   Path 0: 104 → 76 (Snowflake),  Path 1: 116 → 144 (Databricks)
  const rightPaths = [
    { src: 104, dst: 76  },
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
   Radial Governance Diagram â€” Center hub with orbiting domains
   Matches reference: Data Governance center â†’ Quality, Lineage,
   Security, Compliance, Ownership, Policies orbiting around
   ============================================================ */
export const Govern360Visual: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { key: 'quality', label: 'Quality', icon: BarChart3, pos: 'gov-orbit-node--quality' },
    { key: 'lineage', label: 'Lineage', icon: GitMerge, pos: 'gov-orbit-node--lineage' },
    { key: 'security', label: 'Security', icon: Lock, pos: 'gov-orbit-node--security' },
    { key: 'compliance', label: 'Compliance', icon: ShieldCheck, pos: 'gov-orbit-node--compliance' },
    { key: 'ownership', label: 'Ownership', icon: Users, pos: 'gov-orbit-node--ownership' },
    { key: 'policies', label: 'Policies', icon: FileSearch, pos: 'gov-orbit-node--policies' },
  ];

  // Compute center and node positions for SVG lines
  const cx = 170, cy = 170, radius = 130;
  const angleOffset = -90; // start from top
  const nodePositions = nodes.map((_, i) => {
    const angle = (angleOffset + i * 60) * (Math.PI / 180);
    return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
  });

  return (
    <div className="visual-govern360">
      <div className="gov-radial-container">
        {/* SVG Connection Lines */}
        <svg className="gov-svg-connections" viewBox="0 0 340 340">
          {nodePositions.map((pos, i) => (
            <React.Fragment key={i}>
              <line
                x1={cx} y1={cy} x2={pos.x} y2={pos.y}
                className="gov-connection-line"
              />
              <line
                x1={cx} y1={cy} x2={pos.x} y2={pos.y}
                className={`gov-connection-pulse`}
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            </React.Fragment>
          ))}
        </svg>

        {/* Center Node */}
        <div className="gov-center-node">
          <ShieldCheck size={22} color="#007791" />
          <span className="gov-center-label">Unified</span>
          <span className="gov-center-title">Data Governance</span>
        </div>

        {/* Orbiting Nodes */}
        {nodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div key={node.key} className={`gov-orbit-node ${node.pos}`}>
              <div className={`gov-orbit-bubble ${i === activeNode ? 'gov-orbit-bubble--active' : ''}`}>
                <Icon size={22} />
              </div>
              <span className="gov-orbit-label">{node.label}</span>
            </div>
          );
        })}
      </div>

      {/* Bottom Metrics */}
      <div className="gov-metrics-row">
        <div className="gov-metric-item">
          <span className="gov-metric-val">360Â°</span>
          <span className="gov-metric-lbl">Enterprise Visibility</span>
        </div>
        <div className="gov-metric-item">
          <span className="gov-metric-val">99.98%</span>
          <span className="gov-metric-lbl">Data Quality Rate</span>
        </div>
        <div className="gov-metric-item">
          <span className="gov-metric-val">100%</span>
          <span className="gov-metric-lbl">Compliance Ready</span>
        </div>
        <div className="gov-metric-item">
          <span className="gov-metric-val">50%</span>
          <span className="gov-metric-lbl">Faster Audit Cycles</span>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   VISUAL 3: SEMATIQ
   Interactive Semantic Knowledge Graph
   Matches reference: Customer, Account, Product, Supplier, Order
   nodes connected to central SematIQ hub
   ============================================================ */
export const SematIQVisual: React.FC = () => {
  const [activeEdge, setActiveEdge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEdge((prev) => (prev + 1) % 5);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visual-sematiq">
      {/* Topology Container */}
      <div className="sem-topology-container">
        {/* SVG Wire connections */}
        <svg className="sem-svg-wires" viewBox="0 0 500 360">
          {/* Customer â†’ Hub */}
          <line x1="130" y1="60" x2="250" y2="180" className="sem-wire" />
          <line x1="130" y1="60" x2="250" y2="180" className={`sem-wire-pulse ${activeEdge === 0 ? '' : 'sem-wire-pulse--delay1'}`} />

          {/* Account â†’ Hub */}
          <line x1="80" y1="280" x2="250" y2="180" className="sem-wire" />
          <line x1="80" y1="280" x2="250" y2="180" className={`sem-wire-pulse sem-wire-pulse--delay2`} />

          {/* Product â†’ Hub */}
          <line x1="400" y1="60" x2="250" y2="180" className="sem-wire" />
          <line x1="400" y1="60" x2="250" y2="180" className={`sem-wire-pulse sem-wire-pulse--delay3`} />

          {/* Supplier â†’ Hub */}
          <line x1="420" y1="280" x2="250" y2="180" className="sem-wire" />
          <line x1="420" y1="280" x2="250" y2="180" className={`sem-wire-pulse`} />

          {/* Order â†’ Hub (bottom center) */}
          <line x1="250" y1="340" x2="250" y2="180" className="sem-wire" />
          <line x1="250" y1="340" x2="250" y2="180" className={`sem-wire-pulse sem-wire-pulse--delay1`} />
        </svg>

        {/* Entity Nodes */}
        <div className="sem-entity-node sem-entity-node--customer">
          <div className={`sem-entity-bubble ${activeEdge === 0 ? 'sem-entity-bubble--active' : ''}`}>
            Custo-<br/>mer
          </div>
          <span className="sem-entity-label">Customer</span>
        </div>

        <div className="sem-entity-node sem-entity-node--account">
          <div className={`sem-entity-bubble ${activeEdge === 1 ? 'sem-entity-bubble--active' : ''}`}>
            Acct
          </div>
          <span className="sem-entity-label">Account</span>
        </div>

        <div className="sem-entity-node sem-entity-node--product">
          <div className={`sem-entity-bubble ${activeEdge === 2 ? 'sem-entity-bubble--active' : ''}`}>
            Prod
          </div>
          <span className="sem-entity-label">Product</span>
        </div>

        <div className="sem-entity-node sem-entity-node--supplier">
          <div className={`sem-entity-bubble ${activeEdge === 3 ? 'sem-entity-bubble--active' : ''}`}>
            Suppl
          </div>
          <span className="sem-entity-label">Supplier</span>
        </div>

        <div className="sem-entity-node sem-entity-node--order">
          <div className={`sem-entity-bubble ${activeEdge === 4 ? 'sem-entity-bubble--active' : ''}`}>
            Order
          </div>
          <span className="sem-entity-label">Order</span>
        </div>

        {/* Central SematIQ Hub */}
        <div className="sem-hub-node">
          <div className="sem-hub-circle">
            <Network size={22} color="#007791" />
            <span className="sem-hub-name">SematIQ</span>
          </div>
          <span className="sem-hub-desc">Unified product catalog across ERP, CRM and supply chain</span>
        </div>
      </div>

      {/* Product Info Box */}
      <div className="sem-info-box">
        <div className="sem-info-icon">
          <Package size={18} />
        </div>
        <div>
          <div className="sem-info-title">Product</div>
          <div className="sem-info-desc">Unified product catalog across ERP, CRM and supply chain</div>
        </div>
      </div>

      {/* Bottom Metrics */}
      <div className="sem-metrics-row">
        <div className="sem-metric-item">
          <span className="sem-metric-val">84+</span>
          <span className="sem-metric-lbl">Business Entities</span>
        </div>
        <div className="sem-metric-item">
          <span className="sem-metric-val">100%</span>
          <span className="sem-metric-lbl">Context Consistency</span>
        </div>
        <div className="sem-metric-item">
          <span className="sem-metric-val">3x</span>
          <span className="sem-metric-lbl">Faster Data Discovery</span>
        </div>
        <div className="sem-metric-item">
          <span className="sem-metric-val">Sub-Second</span>
          <span className="sem-metric-lbl">Semantic Queries</span>
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

/* ============================================================
   VISUAL 5: SAP CONNECT
   Enterprise SAP Integration Architecture
   Matches reference: SAP Systems â†’ SAP Connect â†’ Modern Platforms
   with SAP Modules row at bottom
   LEFT â†’ RIGHT flow with real logos from /assets/Logos/
   ============================================================ */
export const SAPConnectVisual: React.FC = () => {
  const [activeSystem, setActiveSystem] = useState(1); // S/4HANA initially active
  const [activePlatform, setActivePlatform] = useState(0);
  const [hoveredSystem, setHoveredSystem] = useState<number | null>(null);
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSystem((prev) => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePlatform((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // 5 SAP systems â€” all use sap-logo.png + system name label
  const sapSystems = [
    { name: 'ECC' },
    { name: 'S/4HANA' },
    { name: 'BW' },
    { name: 'B1' },
    { name: 'BDC' },
  ];

  // 3 modern platforms with real logos
  const modernPlatforms = [
    { name: 'Snowflake', logo: '/assets/Logos/Snowflake.png', logoAlt: 'Snowflake' },
    { name: 'Databricks', logo: '/assets/Logos/Databricks.png', logoAlt: 'Databricks' },
    { name: 'BigQuery', logo: '/assets/Logos/BigQuery.png', logoAlt: 'BigQuery' },
  ];

  const sapModules = [
    { name: 'Finance', icon: DollarSign },
    { name: 'Sales', icon: ShoppingCart },
    { name: 'Procurement', icon: Building2 },
    { name: 'Inventory', icon: Package },
    { name: 'HR', icon: Users },
  ];

  // ── EXACT COORDINATE MATH FOR 5-SYSTEM SAP STACK ──────────────────────
  // SAP systems stack: 5 cards × 44px + 4 gaps × 10px = 260px total height
  // Connector SVG viewBox height = 260px, connector box height = 260px
  // Card centers in 260px viewBox (no justify-content offset, stack is exactly 260px):
  //   Card 0 (ECC):    22
  //   Card 1 (S4):     22+44+10 = 76
  //   Card 2 (BW):     76+44+10 = 130  ← geometric center of 260px = 130 ✓
  //   Card 3 (B1):     130+44+10 = 184
  //   Card 4 (BDC):    184+44+10 = 238
  //
  // SAP Connect center card is vertically centered in the canvas → y=130
  // Fan 5 entry points around 130 with 12px spacing:
  //   Path 0: 130-24 = 106,  Path 1: 130-12 = 118,  Path 2: 130,
  //   Path 3: 130+12 = 142,  Path 4: 130+24 = 154
  const sapLeftPaths = [
    { src: 22,  dst: 106 },
    { src: 76,  dst: 118 },
    { src: 130, dst: 130 },
    { src: 184, dst: 142 },
    { src: 238, dst: 154 },
  ];

  // Modern platforms: 3 cards × 44px + 2 gaps × 20px = 172px
  // Centered in 260px: top offset = (260-172)/2 = 44
  // Platform centers: 44+22=66, 44+22+44+20=130, 130+44+20=194
  // SAP Connect exit — fan around 130 with 12px spacing (not a single point):
  //   Path 0: 118 → 66,  Path 1: 130 → 130,  Path 2: 142 → 194
  const sapRightPaths = [
    { src: 118, dst: 66  },
    { src: 130, dst: 130 },
    { src: 142, dst: 194 },
  ];

  const getSystemOp = (idx: number) => {
    if (hoveredSystem !== null) return idx === hoveredSystem ? 1 : 0.2;
    return 1;
  };

  const getPlatformOp = (idx: number) => {
    if (hoveredPlatform !== null) return idx === hoveredPlatform ? 1 : 0.2;
    return 1;
  };

  return (
    <div className="visual-sap-connect-v2">
      {/* ── COLUMN HEADERS above canvas so SVG and cards align exactly ── */}
      <div className="sap-flow-headers">
        <div className="sap-col-header-cell">SAP SYSTEMS</div>
        <div className="sap-connector-header-gap" />
        <div className="sap-col-header-cell sap-col-header-cell--center">SAP CONNECT</div>
        <div className="sap-connector-header-gap" />
        <div className="sap-col-header-cell sap-col-header-cell--right">MODERN PLATFORMS</div>
      </div>

      {/* Top Main Data Flow */}
      <div className="sap-flow-canvas">
        {/* Column 1: SAP Systems */}
        <div className="sap-col sap-col--systems">
          <div className="sap-cards-stack sap-cards-stack--systems">
            {sapSystems.map((sys, i) => (
              <div
                key={sys.name}
                className={`sap-system-card-v2 ${(i === activeSystem || i === hoveredSystem) ? 'sap-system-card-v2--active' : ''}`}
                onMouseEnter={() => setHoveredSystem(i)}
                onMouseLeave={() => setHoveredSystem(null)}
              >
                <div className="sap-logo-badge">
                  <img src="/assets/Logos/sap-logo.png" alt="SAP" className="sap-logo-img" />
                </div>
                <span className="sap-card-name">{sys.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SVG Connector 1: SAP Systems → SAP Connect */}
        <div className="sap-connector-box">
          <svg viewBox="0 0 90 260" className="sap-connector-svg" preserveAspectRatio="none">
            <defs>
              <filter id="sapGlowL" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Static paths */}
            {sapLeftPaths.map((p, i) => (
              <path
                key={i}
                d={`M 0 ${p.src} C 50 ${p.src}, 40 ${p.dst}, 90 ${p.dst}`}
                className={`sap-flow-path ${i === 2 ? 'sap-flow-path--s4' : ''}`}
                style={{ opacity: hoveredSystem !== null && hoveredSystem !== i ? 0.15 : 1 }}
              />
            ))}

            {/* Terminal dots left */}
            {sapLeftPaths.map((p, i) => (
              <circle key={`nl-${i}`} cx="0" cy={p.src} r={i === 2 ? 3 : 2.5}
                className={`sap-flow-node ${i === 2 ? 'sap-flow-node--s4' : ''}`}
                style={{ opacity: hoveredSystem !== null && hoveredSystem !== i ? 0.15 : 1 }} />
            ))}
            {/* Terminal dots right */}
            {sapLeftPaths.map((p, i) => (
              <circle key={`nr-${i}`} cx="90" cy={p.dst} r={i === 2 ? 3 : 2.5}
                className={`sap-flow-node ${i === 2 ? 'sap-flow-node--s4' : ''}`}
                style={{ opacity: hoveredSystem !== null && hoveredSystem !== i ? 0.15 : 1 }} />
            ))}

            {/* Particles â€” staggered Lâ†’R */}
            {sapLeftPaths.map((p, i) => {
              const pathD = `M 0 ${p.src} C 50 ${p.src}, 40 ${p.dst}, 90 ${p.dst}`;
              const dur = [2.1, 2.0, 1.8, 2.2, 2.3][i];
              const offset = i * 0.25;
              const r = i === 2 ? 3.6 : 3;
              const op = getSystemOp(i);
              return (
                <g key={`sap-l-particles-${i}`}>
                  <circle r={r} fill="#00E5FF" filter="url(#sapGlowL)">
                    <animateMotion dur={`${dur}s`} begin={`${offset}s`} repeatCount="indefinite" path={pathD} />
                    <animate attributeName="opacity" values={`0;${op};${op};0`} keyTimes="0;0.1;0.9;1" dur={`${dur}s`} begin={`${offset}s`} repeatCount="indefinite" />
                  </circle>
                  <circle r={r} fill="#00E5FF" filter="url(#sapGlowL)">
                    <animateMotion dur={`${dur}s`} begin={`${offset + dur / 2}s`} repeatCount="indefinite" path={pathD} />
                    <animate attributeName="opacity" values={`0;${op};${op};0`} keyTimes="0;0.1;0.9;1" dur={`${dur}s`} begin={`${offset + dur / 2}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Column 2: SAP Connect Center Card */}
        <div className="sap-col sap-col--center">
          <div className="sap-connect-center-card">
            <div className="sap-center-icon-wrap">
              <Network size={22} className="sap-center-icon" />
            </div>
            <span className="sap-center-title">SAP Connect</span>
            <span className="sap-center-subtitle">Extract Â· Decode Â·</span>
            <span className="sap-center-subtitle">Transform Â· Deliver</span>
          </div>
        </div>

        {/* SVG Connector 2: SAP Connect → Modern Platforms */}
        <div className="sap-connector-box">
          <svg viewBox="0 0 90 260" className="sap-connector-svg" preserveAspectRatio="none">
            <defs>
              <filter id="sapGlowR" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Static paths */}
            {sapRightPaths.map((p, i) => (
              <path
                key={i}
                d={`M 0 ${p.src} C 40 ${p.src}, 50 ${p.dst}, 90 ${p.dst}`}
                className="sap-flow-path"
                style={{ opacity: hoveredPlatform !== null && hoveredPlatform !== i ? 0.15 : 1 }}
              />
            ))}

            {/* Terminal dots */}
            {sapRightPaths.map((p, i) => (
              <circle key={`nl-${i}`} cx="0" cy={p.src} r="2.5" className="sap-flow-node"
                style={{ opacity: hoveredPlatform !== null && hoveredPlatform !== i ? 0.15 : 1 }} />
            ))}
            {sapRightPaths.map((p, i) => (
              <circle key={`nr-${i}`} cx="90" cy={p.dst} r="2.5" className="sap-flow-node"
                style={{ opacity: hoveredPlatform !== null && hoveredPlatform !== i ? 0.15 : 1 }} />
            ))}

            {/* Particles Lâ†’R */}
            {sapRightPaths.map((p, i) => {
              const pathD = `M 0 ${p.src} C 40 ${p.src}, 50 ${p.dst}, 90 ${p.dst}`;
              const dur = [2.0, 2.1, 2.2][i];
              const offset = i * 0.4 + 0.2;
              const op = getPlatformOp(i);
              return (
                <g key={`sap-r-particles-${i}`}>
                  <circle r="3" fill="#00E5FF" filter="url(#sapGlowR)">
                    <animateMotion dur={`${dur}s`} begin={`${offset}s`} repeatCount="indefinite" path={pathD} />
                    <animate attributeName="opacity" values={`0;${op};${op};0`} keyTimes="0;0.1;0.9;1" dur={`${dur}s`} begin={`${offset}s`} repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#00E5FF" filter="url(#sapGlowR)">
                    <animateMotion dur={`${dur}s`} begin={`${offset + dur / 2}s`} repeatCount="indefinite" path={pathD} />
                    <animate attributeName="opacity" values={`0;${op};${op};0`} keyTimes="0;0.1;0.9;1" dur={`${dur}s`} begin={`${offset + dur / 2}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Column 3: Modern Platforms */}
        <div className="sap-col sap-col--platforms">
          <div className="sap-cards-stack sap-cards-stack--platforms">
            {modernPlatforms.map((p, i) => (
              <div
                key={p.name}
                className={`sap-platform-card-v2 ${(i === activePlatform || i === hoveredPlatform) ? 'sap-platform-card-v2--active' : ''}`}
                onMouseEnter={() => setHoveredPlatform(i)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                <div className="sap-target-logo-wrap">
                  <img src={p.logo} alt={p.logoAlt} className="sap-target-logo-img" />
                </div>
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
};

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
