import React, { useRef, useEffect, useCallback } from 'react';
import { Database, Globe, FileText, Server, Layers, Cpu, ShieldCheck, ArrowDown, Sparkles, CheckCircle2, Play, Zap } from 'lucide-react';
import { ArchitectureLayer } from '../../../data/architectureLayers';

interface ArchitectureScene3DProps {
  layers: ArchitectureLayer[];
  selectedLayer: number;
  onSelectLayer: (index: number) => void;
}

const DATA_SOURCES = [
  { id: 'db', name: 'DATABASES', icon: Database, delay: '0s' },
  { id: 'api', name: 'APIs', icon: Globe, delay: '0.5s' },
  { id: 'files', name: 'FILES', icon: FileText, delay: '1.0s' },
  { id: 'erp', name: 'ERP', icon: Server, delay: '0.3s' },
  { id: 'apps', name: 'APPS', icon: Layers, delay: '0.8s' },
];

export const ArchitectureScene3D: React.FC<ArchitectureScene3DProps> = ({
  layers,
  selectedLayer,
  onSelectLayer,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);

  // Target and current rotation refs for 60fps rAF camera orbit without React re-renders
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  // 3D Parallax Camera Loop — Controls ONLY camera orientation, completely decoupled from layers
  useEffect(() => {
    // Subtle top-down pitch providing depth and visibility into the stack
    const BASE_PITCH = 14;
    const BASE_YAW = 0;

    const tick = () => {
      if (isVisibleRef.current && cameraRef.current) {
        // Physical spring inertia interpolation (lerp factor 0.08)
        currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.08;
        currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.08;

        const rx = BASE_PITCH + currentRotation.current.x;
        const ry = BASE_YAW + currentRotation.current.y;

        // Camera rig rotates around center of physical stack
        cameraRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // IntersectionObserver to pause rAF when section is offscreen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Cursor movement controls ONLY the 3D camera / perspective (NEVER changes selected layer)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // Normalized from -1 (left/top) to +1 (right/bottom)
    const nx = (e.clientX - cx) / (rect.width / 2);
    const ny = (e.clientY - cy) / (rect.height / 2);

    // Physical camera orbit (vertical ±7°, horizontal ±9°)
    targetRotation.current = {
      x: -ny * 7.5,
      y: nx * 9.0,
    };
  }, []);

  // Smooth return to neutral when mouse leaves
  const handleMouseLeave = useCallback(() => {
    targetRotation.current = { x: 0, y: 0 };
  }, []);

  // Internal layer visualization: Two distinct visual hierarchies matching Ref 1 (active) and Ref 2 (inactive)
  const renderInternalVisualization = (layerIndex: number, isSelected: boolean) => {
    switch (layerIndex) {
      case 0: // Ingestion: Sources -> Discovery -> Schema
        return (
          <div className={`arch-vis-window arch-vis-window--ingestion ${isSelected ? 'arch-vis-window--active' : 'arch-vis-window--inactive'}`}>
            <div className="arch-vis-ingest-flow">
              <div className="arch-vis-source-tags">
                <span className="arch-vis-source-badge">DB</span>
                <span className="arch-vis-source-badge">API</span>
                <span className="arch-vis-source-badge">FILES</span>
                <span className="arch-vis-source-badge">ERP</span>
                {isSelected && <span className="arch-vis-source-badge">APPS</span>}
              </div>
              <div className="arch-vis-flow-stream">
                {isSelected ? (
                  <div className="arch-vis-particle-track">
                    <span className="arch-vis-particle arch-vis-particle--1" />
                    <span className="arch-vis-particle arch-vis-particle--2" />
                  </div>
                ) : (
                  <div className="arch-vis-line-inactive" />
                )}
                <span className={`arch-vis-step-tag ${isSelected ? '' : 'arch-vis-step-tag--subtle'}`}>DISCOVERY</span>
                {isSelected ? (
                  <div className="arch-vis-particle-track">
                    <span className="arch-vis-particle arch-vis-particle--3" />
                  </div>
                ) : (
                  <div className="arch-vis-line-inactive" />
                )}
                <span className={`arch-vis-step-tag ${isSelected ? 'arch-vis-step-tag--cyan' : 'arch-vis-step-tag--subtle'}`}>SCHEMA</span>
              </div>
            </div>
          </div>
        );

      case 1: // Orchestration: Orchestrator -> 4 Agents
        return (
          <div className={`arch-vis-window arch-vis-window--orchestration ${isSelected ? 'arch-vis-window--active' : 'arch-vis-window--inactive'}`}>
            <div className="arch-vis-swarm-grid">
              <div className={`arch-vis-orch-core ${isSelected ? 'arch-vis-orch-core--active' : 'arch-vis-orch-core--subtle'}`}>
                <Cpu size={13} className="arch-vis-orch-icon" />
                <span>ORCHESTRATOR</span>
                {/* Rotating dotted outline removed — was arch-vis-pulse-ring */}
              </div>
              <div className="arch-vis-agents-row">
                <span className="arch-vis-agent-chip">Discovery</span>
                <span className="arch-vis-agent-chip">Data Eng</span>
                <span className="arch-vis-agent-chip">Coding</span>
                <span className="arch-vis-agent-chip">Quality</span>
              </div>
            </div>
          </div>
        );

      case 2: // Ontology: Semantic Network (Customer, Order, Product, Account, Supplier)
        return (
          <div className={`arch-vis-window arch-vis-window--ontology ${isSelected ? 'arch-vis-window--active' : 'arch-vis-window--inactive'}`}>
            <div className="arch-vis-ontology-graph">
              <svg className="arch-vis-graph-svg" viewBox="0 0 460 48">
                <line x1="75" y1="16" x2="230" y2="24" className={isSelected ? 'arch-vis-wire arch-vis-wire--active' : 'arch-vis-wire arch-vis-wire--subtle'} />
                <line x1="75" y1="34" x2="230" y2="24" className={isSelected ? 'arch-vis-wire arch-vis-wire--active' : 'arch-vis-wire arch-vis-wire--subtle'} />
                <line x1="230" y1="24" x2="385" y2="15" className={isSelected ? 'arch-vis-wire arch-vis-wire--active' : 'arch-vis-wire arch-vis-wire--subtle'} />
                <line x1="230" y1="24" x2="385" y2="34" className={isSelected ? 'arch-vis-wire arch-vis-wire--active' : 'arch-vis-wire arch-vis-wire--subtle'} />
              </svg>
              <div className="arch-vis-onto-node arch-vis-onto-node--1">CUSTOMER</div>
              <div className="arch-vis-onto-node arch-vis-onto-node--2">ACCOUNT</div>
              <div className={`arch-vis-onto-node arch-vis-onto-node--hub ${isSelected ? 'arch-vis-onto-node--hub-active' : 'arch-vis-onto-node--hub-subtle'}`}>
                {isSelected && <Zap size={11} />}
                <span>ORDER</span>
              </div>
              <div className="arch-vis-onto-node arch-vis-onto-node--3">PRODUCT</div>
              <div className="arch-vis-onto-node arch-vis-onto-node--4">SUPPLIER</div>
            </div>
          </div>
        );

      case 3: // Governance: Quality, Security, Lineage, Audit, Compliance
        return (
          <div className={`arch-vis-window arch-vis-window--governance ${isSelected ? 'arch-vis-window--active' : 'arch-vis-window--inactive'}`}>
            <div className="arch-vis-gov-gates">
              <div className="arch-vis-gate-chip">
                <CheckCircle2 size={11} className={isSelected ? 'arch-vis-gate-check' : 'arch-vis-gate-check--subtle'} />
                <span>QUALITY</span>
              </div>
              <div className="arch-vis-gate-chip">
                <ShieldCheck size={11} className={isSelected ? 'arch-vis-gate-check' : 'arch-vis-gate-check--subtle'} />
                <span>SECURITY</span>
              </div>
              <div className="arch-vis-gate-chip">
                <CheckCircle2 size={11} className={isSelected ? 'arch-vis-gate-check' : 'arch-vis-gate-check--subtle'} />
                <span>LINEAGE</span>
              </div>
              <div className="arch-vis-gate-chip">
                <CheckCircle2 size={11} className={isSelected ? 'arch-vis-gate-check' : 'arch-vis-gate-check--subtle'} />
                <span>AUDIT</span>
              </div>
              <div className="arch-vis-gate-chip">
                <CheckCircle2 size={11} className={isSelected ? 'arch-vis-gate-check' : 'arch-vis-gate-check--subtle'} />
                <span>COMPLIANCE</span>
              </div>
            </div>
          </div>
        );

      case 4: // Pipelines: BUILD -> TEST -> DEPLOY -> MONITOR
      default:
        return (
          <div className={`arch-vis-window arch-vis-window--pipeline ${isSelected ? 'arch-vis-window--active' : 'arch-vis-window--inactive'}`}>
            <div className="arch-vis-pipeline-track">
              <div className={`arch-vis-pipe-node ${isSelected ? 'arch-vis-pipe-node--done' : 'arch-vis-pipe-node--subtle'}`}>BUILD</div>
              <div className={`arch-vis-pipe-connector ${isSelected ? 'arch-vis-pipe-connector--active' : ''}`} />
              <div className={`arch-vis-pipe-node ${isSelected ? 'arch-vis-pipe-node--done' : 'arch-vis-pipe-node--subtle'}`}>TEST</div>
              <div className={`arch-vis-pipe-connector ${isSelected ? 'arch-vis-pipe-connector--active' : ''}`} />
              <div className={`arch-vis-pipe-node ${isSelected ? 'arch-vis-pipe-node--pulse' : 'arch-vis-pipe-node--subtle'}`}>
                {isSelected && <Play size={10} />}
                <span>DEPLOY</span>
              </div>
              <div className="arch-vis-pipe-connector" />
              <div className="arch-vis-pipe-node arch-vis-pipe-node--subtle">MONITOR</div>
            </div>
          </div>
        );
    }
  };

  // Fixed vertical tier spacing: each layer has a LOCKED, PERMANENT vertical Y position
  const TIER_SPACING_Y = 104;

  return (
    <div
      ref={containerRef}
      className="arch-3d-scene"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="3D Interactive Architecture System"
    >
      {/* ============================================================
          TOP FLOATING DATA SOURCES
          ============================================================ */}
      <div className="arch-sources-deck">
        <div className="arch-sources-row">
          {DATA_SOURCES.map((src) => {
            const Icon = src.icon;
            return (
              <div
                key={src.id}
                className="arch-source-node"
                style={{ animationDelay: src.delay }}
              >
                <div className="arch-source-node__pill">
                  <Icon size={14} className="arch-source-node__icon" />
                  <span className="arch-source-node__name">{src.name}</span>
                </div>
                <div className="arch-source-stream">
                  <span className="arch-source-particle" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="arch-sources-converge-label">
          <ArrowDown size={14} className="arch-converge-arrow" />
          <span>DATA ENTERING SYSTEM</span>
        </div>
        {/* Thin centered connector from source row into the intelligence engine */}
        <div className="arch-sources-converge-line" />
      </div>

      {/* ============================================================
          CENTRAL INTELLIGENCE CORE
          ============================================================ */}
      <div className="arch-intelligence-core">
        <div className="arch-core-gem">
          <Sparkles size={16} className="arch-core-gem-icon" />
        </div>
        <span className="arch-core-title">ScaeleIQ Intelligence Engine</span>
      </div>
      {/* Connector from intelligence engine down into the viewport */}
      <div className="arch-sources-converge-line" style={{ marginBottom: '0.4rem' }} />

      {/* ============================================================
          3D PERSPECTIVE VIEWPORT
          ============================================================ */}
      <div className="arch-perspective-viewport">
        {/* CAMERA RIG: ONLY controls camera rotation / parallax */}
        <div ref={cameraRef} className="arch-camera-rig">
          {/* PHYSICAL ARCHITECTURE STACK: Holds the 5 layers in permanent vertical order */}
          <div className="arch-stack-rack">
            {layers.map((layer, index) => {
              const isSelected = index === selectedLayer;
              // PERMANENT, IMMUTABLE VERTICAL Y POSITION
              const fixedTop = index * TIER_SPACING_Y;

              return (
                <div
                  key={layer.id}
                  className={`arch-stack-tier ${isSelected ? 'arch-stack-tier--selected' : 'arch-stack-tier--inactive'
                    }`}
                  style={{
                    // Y POSITION IS 100% LOCKED AT fixedTop — NEVER CHANGES!
                    top: `${fixedTop}px`,
                    // ONLY translateZ and scale change! Zero translateX, zero translateY!
                    transform: isSelected
                      ? 'translateZ(95px) scale(1.05)'
                      : 'translateZ(0px) scale(1)',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectLayer(index);
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`Select ${layer.title}, Layer ${layer.number}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectLayer(index);
                    }
                  }}
                >
                  {/* Physical Glass Surface Plate — pointer events pass through to tier */}
                  <div className="arch-glass-surface" style={{ pointerEvents: 'none' }}>
                    {/* Illuminated Cyan Rim Light (active only) */}
                    <div className="arch-glass-rim" />

                    {/* Header Row: Number + Title + Pill (SELECTED vs CLICK TO VIEW) */}
                    <div className="arch-glass-header-row">
                      <div className="arch-glass-meta">
                        <span className={`arch-glass-num ${isSelected ? 'arch-glass-num--selected' : 'arch-glass-num--inactive'}`}>
                          {layer.number}
                        </span>
                        <span className={`arch-glass-name ${isSelected ? 'arch-glass-name--selected' : 'arch-glass-name--inactive'}`}>
                          {layer.title}
                        </span>
                      </div>

                      <div className="arch-glass-status-wrap">
                        {isSelected ? (
                          <span className="arch-status-pill arch-status-pill--active">
                            <span className="arch-status-dot" />
                            SELECTED
                          </span>
                        ) : (
                          <span className="arch-status-pill arch-status-pill--idle">
                            CLICK TO VIEW
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Internal Visualization (moves WITH layer along Z) */}
                    {renderInternalVisualization(index, isSelected)}
                  </div>

                  {/* 3D Glass Side Depth Bevel — decorative, no pointer events */}
                  <div className="arch-glass-extrusion" />

                  {/* Ground Shadow — decorative, no pointer events */}
                  <div className="arch-glass-shadow" />

                  {/* Cyan Ambient Spotlight Aura (active only) — decorative */}
                  {isSelected && <div className="arch-glass-glow" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================
          BOTTOM BUSINESS OUTCOME ANCHOR
          ============================================================ */}
      <div className="arch-outcome-deck">
        <div className="arch-outcome-beam">
          <span className="arch-outcome-pulse" />
        </div>
        <div className="arch-outcome-pill">
          <span className="arch-outcome-dot" />
          <span className="arch-outcome-title">BUSINESS OUTCOME</span>
          <span className="arch-outcome-tag">PRODUCTION READY IN WEEKS</span>
        </div>
      </div>
    </div>
  );
};
