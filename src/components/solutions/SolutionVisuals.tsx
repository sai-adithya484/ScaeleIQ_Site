import React, { useState, useEffect } from 'react';
import {
  GitMerge,
  ShieldCheck,
  Workflow,
  Layers,
  CheckCircle2,
  Cloud,
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
  HardDrive,
} from 'lucide-react';

/* ============================================================
   VISUAL 1: DIRECT FLOW
   Enterprise Data Migration & Modernization Architecture
   Matches reference: Sources → Staging Layer (AWS/Azure/GCP) → Target Platforms
   ============================================================ */
export const DirectFlowVisual: React.FC = () => {
  const [activeSource, setActiveSource] = useState(0);
  const [activeCloud, setActiveCloud] = useState(0);

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
    { name: 'SAP', badge: 'SAP', badgeClass: 'df-badge--sap' },
    { name: 'Teradata', badge: 'TD', badgeClass: 'df-badge--tera' },
    { name: 'Oracle', badge: 'ORA', badgeClass: 'df-badge--oracle' },
    { name: 'SQL Server', badge: 'SQL', badgeClass: 'df-badge--sql' },
  ];

  const pipelineCapabilities = [
    { name: 'CDC', icon: Database },
    { name: 'Schema Mapping', icon: GitFork },
    { name: 'Transform', icon: Settings },
    { name: 'Validate', icon: ShieldCheck },
    { name: 'Orchestrate', icon: Sliders },
    { name: 'Load', icon: CloudDownload },
  ];

  return (
    <div className="visual-direct-flow-v2">
      {/* Top Main Data Flow */}
      <div className="df-flow-canvas">
        {/* Column 1: Enterprise Sources */}
        <div className="df-col df-col--sources">
          <span className="df-col-header">ENTERPRISE SOURCES</span>
          <div className="df-cards-stack">
            {sources.map((src, i) => (
              <div
                key={src.name}
                className={`df-source-card-v2 ${i === activeSource ? 'df-source-card-v2--active' : ''}`}
              >
                <div className={`df-card-badge ${src.badgeClass}`}>{src.badge}</div>
                <span className="df-card-name">{src.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SVG Connector 1: Sources -> Staging */}
        <div className="df-connector-box">
          <svg viewBox="0 0 90 220" className="df-connector-svg" preserveAspectRatio="none">
            <defs>
              <filter id="dfGlowL" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connecting paths */}
            <path d="M 0 22 C 52 22, 38 96, 90 96" className="df-flow-path" />
            <path d="M 0 78 C 52 78, 38 105, 90 105" className="df-flow-path" />
            <path d="M 0 134 C 52 134, 38 115, 90 115" className="df-flow-path" />
            <path d="M 0 190 C 52 190, 38 124, 90 124" className="df-flow-path" />

            {/* Terminal node dots */}
            <circle cx="0" cy="22" r="2.5" className="df-flow-node" />
            <circle cx="0" cy="78" r="2.5" className="df-flow-node" />
            <circle cx="0" cy="134" r="2.5" className="df-flow-node" />
            <circle cx="0" cy="190" r="2.5" className="df-flow-node" />

            <circle cx="90" cy="96" r="2.5" className="df-flow-node" />
            <circle cx="90" cy="105" r="2.5" className="df-flow-node" />
            <circle cx="90" cy="115" r="2.5" className="df-flow-node" />
            <circle cx="90" cy="124" r="2.5" className="df-flow-node" />

            {/* Glowing cyan particles flowing LEFT to RIGHT */}
            <circle r="3.2" fill="#00E5FF" filter="url(#dfGlowL)">
              <animateMotion dur="2.2s" repeatCount="indefinite" path="M 0 22 C 52 22, 38 96, 90 96" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle r="3.2" fill="#00E5FF" filter="url(#dfGlowL)">
              <animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite" path="M 0 22 C 52 22, 38 96, 90 96" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
            </circle>

            <circle r="3.2" fill="#00E5FF" filter="url(#dfGlowL)">
              <animateMotion dur="2.0s" begin="0.3s" repeatCount="indefinite" path="M 0 78 C 52 78, 38 105, 90 105" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.0s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            <circle r="3.2" fill="#00E5FF" filter="url(#dfGlowL)">
              <animateMotion dur="2.0s" begin="1.3s" repeatCount="indefinite" path="M 0 78 C 52 78, 38 105, 90 105" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.0s" begin="1.3s" repeatCount="indefinite" />
            </circle>

            <circle r="3.2" fill="#00E5FF" filter="url(#dfGlowL)">
              <animateMotion dur="2.1s" begin="0.6s" repeatCount="indefinite" path="M 0 134 C 52 134, 38 115, 90 115" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.1s" begin="0.6s" repeatCount="indefinite" />
            </circle>
            <circle r="3.2" fill="#00E5FF" filter="url(#dfGlowL)">
              <animateMotion dur="2.1s" begin="1.6s" repeatCount="indefinite" path="M 0 134 C 52 134, 38 115, 90 115" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.1s" begin="1.6s" repeatCount="indefinite" />
            </circle>

            <circle r="3.2" fill="#00E5FF" filter="url(#dfGlowL)">
              <animateMotion dur="2.3s" begin="0.9s" repeatCount="indefinite" path="M 0 190 C 52 190, 38 124, 90 124" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.3s" begin="0.9s" repeatCount="indefinite" />
            </circle>
            <circle r="3.2" fill="#00E5FF" filter="url(#dfGlowL)">
              <animateMotion dur="2.3s" begin="1.9s" repeatCount="indefinite" path="M 0 190 C 52 190, 38 124, 90 124" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.3s" begin="1.9s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Column 2: Staging Layer (AWS, Azure, GCP) */}
        <div className="df-col df-col--staging">
          <span className="df-col-header df-col-header--center">STAGING LAYER</span>
          <div className="df-staging-box-v2">
            {/* AWS */}
            <div className={`df-staging-card ${activeCloud === 0 ? 'df-staging-card--active' : ''}`}>
              <div className="df-cloud-logo df-cloud-logo--aws">
                <span className="df-aws-word">aws</span>
                <svg viewBox="0 0 24 8" width="22" height="7" fill="none">
                  <path d="M 2 2 Q 12 8 22 2" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M 19 1 L 22.5 2.5 L 20 4.5" fill="#FF9900" />
                </svg>
              </div>
              <span className="df-staging-card-title">AWS</span>
            </div>

            {/* Azure */}
            <div className={`df-staging-card df-staging-card--azure ${activeCloud === 1 ? 'df-staging-card--active' : ''}`}>
              <div className="df-cloud-logo">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                  <path d="M13.05 3.58L6.47 16.27l4.35 4.15 7.42-3.14L13.05 3.58z" fill="#0078D4"/>
                  <path d="M6.47 16.27l6.58-5.32 5.19 6.34-11.77-1.02z" fill="#50E6FF" opacity="0.85"/>
                </svg>
              </div>
              <span className="df-staging-card-title">Azure</span>
            </div>

            {/* GCP */}
            <div className={`df-staging-card ${activeCloud === 2 ? 'df-staging-card--active' : ''}`}>
              <div className="df-cloud-logo">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
                  <circle cx="12" cy="13.2" r="2.8" fill="#EA4335" />
                  <circle cx="15.5" cy="14" r="2.2" fill="#FBBC05" />
                  <circle cx="8.5" cy="14" r="2.2" fill="#34A853" />
                </svg>
              </div>
              <span className="df-staging-card-title">GCP</span>
            </div>
          </div>
        </div>

        {/* SVG Connector 2: Staging -> Targets */}
        <div className="df-connector-box">
          <svg viewBox="0 0 90 220" className="df-connector-svg" preserveAspectRatio="none">
            <defs>
              <filter id="dfGlowR" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connecting paths */}
            <path d="M 0 104 C 38 104, 52 76, 90 76" className="df-flow-path" />
            <path d="M 0 116 C 38 116, 52 144, 90 144" className="df-flow-path" />

            {/* Terminal node dots */}
            <circle cx="0" cy="104" r="2.5" className="df-flow-node" />
            <circle cx="0" cy="116" r="2.5" className="df-flow-node" />
            <circle cx="90" cy="76" r="2.5" className="df-flow-node" />
            <circle cx="90" cy="144" r="2.5" className="df-flow-node" />

            {/* Animated Particles flowing LEFT to RIGHT */}
            <circle r="3.2" fill="#00E5FF" filter="url(#dfGlowR)">
              <animateMotion dur="2.0s" begin="0.2s" repeatCount="indefinite" path="M 0 104 C 38 104, 52 76, 90 76" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.0s" begin="0.2s" repeatCount="indefinite" />
            </circle>
            <circle r="3.2" fill="#00E5FF" filter="url(#dfGlowR)">
              <animateMotion dur="2.0s" begin="1.2s" repeatCount="indefinite" path="M 0 104 C 38 104, 52 76, 90 76" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.0s" begin="1.2s" repeatCount="indefinite" />
            </circle>

            <circle r="3.2" fill="#00E5FF" filter="url(#dfGlowR)">
              <animateMotion dur="2.1s" begin="0.7s" repeatCount="indefinite" path="M 0 116 C 38 116, 52 144, 90 144" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.1s" begin="0.7s" repeatCount="indefinite" />
            </circle>
            <circle r="3.2" fill="#00E5FF" filter="url(#dfGlowR)">
              <animateMotion dur="2.1s" begin="1.7s" repeatCount="indefinite" path="M 0 116 C 38 116, 52 144, 90 144" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.1s" begin="1.7s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Column 3: Target Platforms (Snowflake, Databricks) */}
        <div className="df-col df-col--targets">
          <span className="df-col-header df-col-header--right">TARGET PLATFORMS</span>
          <div className="df-cards-stack df-cards-stack--targets">
            <div className="df-target-card-v2">
              <div className="df-card-badge df-badge--snow">
                <Cloud size={16} />
              </div>
              <span className="df-card-name">Snowflake</span>
            </div>
            <div className="df-target-card-v2">
              <div className="df-card-badge df-badge--dbr">
                <Layers size={16} />
              </div>
              <span className="df-card-name">Databricks</span>
            </div>
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
   Radial Governance Diagram — Center hub with orbiting domains
   Matches reference: Data Governance center → Quality, Lineage,
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
          <span className="gov-metric-val">360°</span>
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
          {/* Customer → Hub */}
          <line x1="130" y1="60" x2="250" y2="180" className="sem-wire" />
          <line x1="130" y1="60" x2="250" y2="180" className={`sem-wire-pulse ${activeEdge === 0 ? '' : 'sem-wire-pulse--delay1'}`} />

          {/* Account → Hub */}
          <line x1="80" y1="280" x2="250" y2="180" className="sem-wire" />
          <line x1="80" y1="280" x2="250" y2="180" className={`sem-wire-pulse sem-wire-pulse--delay2`} />

          {/* Product → Hub */}
          <line x1="400" y1="60" x2="250" y2="180" className="sem-wire" />
          <line x1="400" y1="60" x2="250" y2="180" className={`sem-wire-pulse sem-wire-pulse--delay3`} />

          {/* Supplier → Hub */}
          <line x1="420" y1="280" x2="250" y2="180" className="sem-wire" />
          <line x1="420" y1="280" x2="250" y2="180" className={`sem-wire-pulse`} />

          {/* Order → Hub (bottom center) */}
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
   AI Copilot — Conversational Q&A → SQL → Answer
   Matches reference: User question → understanding → SQL generation
   → execution → answer with chart
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
          <span className="charlie-metric-val">2–5s</span>
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
   Matches reference: SAP Systems → SAP Connect → Modern Platforms
   with SAP Modules row at bottom
   ============================================================ */
export const SAPConnectVisual: React.FC = () => {
  const [activeSystem, setActiveSystem] = useState(1); // S/4HANA initially active
  const [activePlatform, setActivePlatform] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSystem((prev) => (prev + 1) % 3);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePlatform((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sapSystems = [
    { name: 'ECC', badge: 'ECC' },
    { name: 'S/4HANA', badge: 'S/4' },
    { name: 'BW', badge: 'BW' },
  ];

  const modernPlatforms = [
    { name: 'Snowflake', badgeClass: 'sap-badge--snow', icon: Cloud },
    { name: 'Databricks', badgeClass: 'sap-badge--dbr', icon: Layers },
    { name: 'BigQuery', badgeClass: 'sap-badge--bq', icon: Database },
    { name: 'Data Lake', badgeClass: 'sap-badge--lake', icon: HardDrive },
  ];

  const sapModules = [
    { name: 'Finance', icon: DollarSign },
    { name: 'Sales', icon: ShoppingCart },
    { name: 'Procurement', icon: Building2 },
    { name: 'Inventory', icon: Package },
    { name: 'HR', icon: Users },
  ];

  return (
    <div className="visual-sap-connect-v2">
      {/* Top Main Data Flow */}
      <div className="sap-flow-canvas">
        {/* Column 1: SAP Systems */}
        <div className="sap-col sap-col--systems">
          <span className="sap-col-header">SAP SYSTEMS</span>
          <div className="sap-cards-stack sap-cards-stack--systems">
            {sapSystems.map((sys, i) => (
              <div
                key={sys.name}
                className={`sap-system-card-v2 ${i === activeSystem ? 'sap-system-card-v2--active' : ''}`}
              >
                <div className="sap-card-badge sap-badge--blue">{sys.badge}</div>
                <span className="sap-card-name">{sys.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SVG Connector 1: SAP Systems -> SAP Connect */}
        <div className="sap-connector-box">
          <svg viewBox="0 0 90 220" className="sap-connector-svg" preserveAspectRatio="none">
            <defs>
              <filter id="sapGlowL" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connecting paths */}
            <path d="M 0 44 C 48 44, 42 98, 90 98" className="sap-flow-path" />
            {/* S/4HANA ACTIVE DIRECT CONNECTION - CRITICAL REQUIREMENT */}
            <path d="M 0 110 L 90 110" className="sap-flow-path sap-flow-path--s4" />
            <path d="M 0 176 C 48 176, 42 122, 90 122" className="sap-flow-path" />

            {/* Terminal node dots */}
            <circle cx="0" cy="44" r="2.5" className="sap-flow-node" />
            <circle cx="0" cy="110" r="2.5" className="sap-flow-node sap-flow-node--s4" />
            <circle cx="0" cy="176" r="2.5" className="sap-flow-node" />

            <circle cx="90" cy="98" r="2.5" className="sap-flow-node" />
            <circle cx="90" cy="110" r="2.5" className="sap-flow-node sap-flow-node--s4" />
            <circle cx="90" cy="122" r="2.5" className="sap-flow-node" />

            {/* Animated Particles flowing LEFT to RIGHT */}
            <circle r="3.2" fill="#00E5FF" filter="url(#sapGlowL)">
              <animateMotion dur="2.1s" begin="0s" repeatCount="indefinite" path="M 0 44 C 48 44, 42 98, 90 98" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.1s" begin="0s" repeatCount="indefinite" />
            </circle>
            <circle r="3.2" fill="#00E5FF" filter="url(#sapGlowL)">
              <animateMotion dur="2.1s" begin="1.05s" repeatCount="indefinite" path="M 0 44 C 48 44, 42 98, 90 98" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.1s" begin="1.05s" repeatCount="indefinite" />
            </circle>

            {/* S/4HANA ACTIVE PARTICLES (Vibrant, continuous stream) */}
            <circle r="3.6" fill="#00E5FF" filter="url(#sapGlowL)">
              <animateMotion dur="1.8s" begin="0.3s" repeatCount="indefinite" path="M 0 110 L 90 110" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            <circle r="3.6" fill="#00E5FF" filter="url(#sapGlowL)">
              <animateMotion dur="1.8s" begin="1.2s" repeatCount="indefinite" path="M 0 110 L 90 110" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="1.8s" begin="1.2s" repeatCount="indefinite" />
            </circle>

            <circle r="3.2" fill="#00E5FF" filter="url(#sapGlowL)">
              <animateMotion dur="2.2s" begin="0.6s" repeatCount="indefinite" path="M 0 176 C 48 176, 42 122, 90 122" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.2s" begin="0.6s" repeatCount="indefinite" />
            </circle>
            <circle r="3.2" fill="#00E5FF" filter="url(#sapGlowL)">
              <animateMotion dur="2.2s" begin="1.7s" repeatCount="indefinite" path="M 0 176 C 48 176, 42 122, 90 122" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.2s" begin="1.7s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Column 2: SAP Connect Center Card */}
        <div className="sap-col sap-col--center">
          <div className="sap-connect-center-card">
            <div className="sap-center-icon-wrap">
              <Network size={22} className="sap-center-icon" />
            </div>
            <span className="sap-center-title">SAP Connect</span>
            <span className="sap-center-subtitle">Extract · Decode ·</span>
            <span className="sap-center-subtitle">Transform · Deliver</span>
          </div>
        </div>

        {/* SVG Connector 2: SAP Connect -> Modern Platforms */}
        <div className="sap-connector-box">
          <svg viewBox="0 0 90 220" className="sap-connector-svg" preserveAspectRatio="none">
            <defs>
              <filter id="sapGlowR" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connecting paths */}
            <path d="M 0 96 C 38 96, 52 22, 90 22" className="sap-flow-path" />
            <path d="M 0 105 C 38 105, 52 78, 90 78" className="sap-flow-path" />
            <path d="M 0 115 C 38 115, 52 134, 90 134" className="sap-flow-path" />
            <path d="M 0 124 C 38 124, 52 190, 90 190" className="sap-flow-path" />

            {/* Terminal node dots */}
            <circle cx="0" cy="96" r="2.5" className="sap-flow-node" />
            <circle cx="0" cy="105" r="2.5" className="sap-flow-node" />
            <circle cx="0" cy="115" r="2.5" className="sap-flow-node" />
            <circle cx="0" cy="124" r="2.5" className="sap-flow-node" />

            <circle cx="90" cy="22" r="2.5" className="sap-flow-node" />
            <circle cx="90" cy="78" r="2.5" className="sap-flow-node" />
            <circle cx="90" cy="134" r="2.5" className="sap-flow-node" />
            <circle cx="90" cy="190" r="2.5" className="sap-flow-node" />

            {/* Animated Particles flowing LEFT to RIGHT */}
            <circle r="3.2" fill="#00E5FF" filter="url(#sapGlowR)">
              <animateMotion dur="2.0s" begin="0.2s" repeatCount="indefinite" path="M 0 96 C 38 96, 52 22, 90 22" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.0s" begin="0.2s" repeatCount="indefinite" />
            </circle>
            <circle r="3.2" fill="#00E5FF" filter="url(#sapGlowR)">
              <animateMotion dur="2.0s" begin="1.2s" repeatCount="indefinite" path="M 0 96 C 38 96, 52 22, 90 22" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.0s" begin="1.2s" repeatCount="indefinite" />
            </circle>

            <circle r="3.2" fill="#00E5FF" filter="url(#sapGlowR)">
              <animateMotion dur="2.1s" begin="0.5s" repeatCount="indefinite" path="M 0 105 C 38 105, 52 78, 90 78" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.1s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle r="3.2" fill="#00E5FF" filter="url(#sapGlowR)">
              <animateMotion dur="2.1s" begin="1.5s" repeatCount="indefinite" path="M 0 105 C 38 105, 52 78, 90 78" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.1s" begin="1.5s" repeatCount="indefinite" />
            </circle>

            <circle r="3.2" fill="#00E5FF" filter="url(#sapGlowR)">
              <animateMotion dur="2.1s" begin="0.8s" repeatCount="indefinite" path="M 0 115 C 38 115, 52 134, 90 134" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.1s" begin="0.8s" repeatCount="indefinite" />
            </circle>
            <circle r="3.2" fill="#00E5FF" filter="url(#sapGlowR)">
              <animateMotion dur="2.1s" begin="1.8s" repeatCount="indefinite" path="M 0 115 C 38 115, 52 134, 90 134" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.1s" begin="1.8s" repeatCount="indefinite" />
            </circle>

            <circle r="3.2" fill="#00E5FF" filter="url(#sapGlowR)">
              <animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite" path="M 0 124 C 38 124, 52 190, 90 190" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
            </circle>
            <circle r="3.2" fill="#00E5FF" filter="url(#sapGlowR)">
              <animateMotion dur="2.2s" begin="2.1s" repeatCount="indefinite" path="M 0 124 C 38 124, 52 190, 90 190" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.2s" begin="2.1s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Column 3: Modern Platforms */}
        <div className="sap-col sap-col--platforms">
          <span className="sap-col-header sap-col-header--right">MODERN PLATFORMS</span>
          <div className="sap-cards-stack sap-cards-stack--platforms">
            {modernPlatforms.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className={`sap-platform-card-v2 ${i === activePlatform ? 'sap-platform-card-v2--active' : ''}`}
                >
                  <div className={`sap-card-badge ${p.badgeClass}`}>
                    <Icon size={16} />
                  </div>
                  <span className="sap-card-name">{p.name}</span>
                </div>
              );
            })}
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

/* ============================================================
   VISUAL 6: HUB360
   Centralized Command Center
   Matches reference: Active Pipelines + System Health stats,
   3 cloud regions with uptime, animated pipeline bars,
   bottom control icons + metrics
   ============================================================ */
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
          <span className="hub-stat-change">↑ 12%</span>
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
