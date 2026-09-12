import React from 'react';
import { Database, FileText, Globe, Server, Layers, Cpu, ShieldCheck, CheckCircle2, GitFork, ArrowRight, Play, Zap } from 'lucide-react';

interface ArchitectureMiniVisualizerProps {
  layerId: string;
}

export const ArchitectureMiniVisualizer: React.FC<ArchitectureMiniVisualizerProps> = ({ layerId }) => {
  switch (layerId) {
    case 'ingestion':
      return (
        <div className="arch-mini-vis arch-mini-vis--ingestion">
          <div className="arch-mini-vis__title-bar">
            <span className="arch-mini-vis__badge">
              <span className="arch-mini-vis__badge-dot" />
              Live Ingestion Stream
            </span>
            <span className="arch-mini-vis__meta">5 Sources Active</span>
          </div>

          <div className="arch-mini-ingest-grid">
            <div className="arch-mini-sources-col">
              <div className="arch-mini-source-item">
                <Database size={13} className="arch-mini-source-icon" />
                <span>Databases</span>
                <span className="arch-mini-pulse-dot" />
              </div>
              <div className="arch-mini-source-item">
                <Globe size={13} className="arch-mini-source-icon" />
                <span>REST / APIs</span>
                <span className="arch-mini-pulse-dot" />
              </div>
              <div className="arch-mini-source-item">
                <FileText size={13} className="arch-mini-source-icon" />
                <span>Unstructured</span>
                <span className="arch-mini-pulse-dot" />
              </div>
              <div className="arch-mini-source-item">
                <Server size={13} className="arch-mini-source-icon" />
                <span>ERP & Legacy</span>
                <span className="arch-mini-pulse-dot" />
              </div>
            </div>

            <div className="arch-mini-ingest-arrow">
              <div className="arch-mini-stream-line">
                <span className="arch-mini-stream-particle" />
                <span className="arch-mini-stream-particle arch-mini-stream-particle--delay" />
              </div>
              <ArrowRight size={14} className="arch-mini-arrow-icon" />
            </div>

            <div className="arch-mini-target-box">
              <div className="arch-mini-target-header">
                <Layers size={14} className="arch-mini-cyan-icon" />
                <span>Auto-Discovery</span>
              </div>
              <div className="arch-mini-target-metric">
                <span className="arch-mini-metric-num">240+</span>
                <span className="arch-mini-metric-lbl">Entities Mapped</span>
              </div>
              <div className="arch-mini-target-bar">
                <div className="arch-mini-target-progress" style={{ width: '84%' }} />
              </div>
            </div>
          </div>
        </div>
      );

    case 'orchestration':
      return (
        <div className="arch-mini-vis arch-mini-vis--orchestration">
          <div className="arch-mini-vis__title-bar">
            <span className="arch-mini-vis__badge">
              <span className="arch-mini-vis__badge-dot" />
              Autonomous Swarm
            </span>
            <span className="arch-mini-vis__meta">4 Agents Running</span>
          </div>

          <div className="arch-mini-orchestrator-layout">
            <div className="arch-mini-core-node">
              <Cpu size={16} className="arch-mini-cyan-icon" />
              <span className="arch-mini-core-label">Orchestrator</span>
              <div className="arch-mini-core-ring" />
            </div>

            <div className="arch-mini-agents-grid">
              <div className="arch-mini-agent-card">
                <span className="arch-mini-agent-role">Discovery</span>
                <span className="arch-mini-agent-status arch-mini-agent-status--active">Scanning</span>
              </div>
              <div className="arch-mini-agent-card">
                <span className="arch-mini-agent-role">Data Eng</span>
                <span className="arch-mini-agent-status arch-mini-agent-status--active">Mapping</span>
              </div>
              <div className="arch-mini-agent-card">
                <span className="arch-mini-agent-role">Coding</span>
                <span className="arch-mini-agent-status arch-mini-agent-status--active">Synthesizing</span>
              </div>
              <div className="arch-mini-agent-card">
                <span className="arch-mini-agent-role">Quality QA</span>
                <span className="arch-mini-agent-status arch-mini-agent-status--active">Validating</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'ontology':
      return (
        <div className="arch-mini-vis arch-mini-vis--ontology">
          <div className="arch-mini-vis__title-bar">
            <span className="arch-mini-vis__badge">
              <span className="arch-mini-vis__badge-dot" />
              Semantic Knowledge Graph
            </span>
            <span className="arch-mini-vis__meta">Unified Context</span>
          </div>

          <div className="arch-mini-ontology-canvas">
            <svg className="arch-mini-ontology-lines" viewBox="0 0 260 110" preserveAspectRatio="none">
              {/* Connection lines between ontology nodes */}
              <line x1="50" y1="30" x2="130" y2="55" className="arch-mini-graph-line" />
              <line x1="50" y1="80" x2="130" y2="55" className="arch-mini-graph-line" />
              <line x1="130" y1="55" x2="210" y2="30" className="arch-mini-graph-line" />
              <line x1="130" y1="55" x2="210" y2="80" className="arch-mini-graph-line" />
              <line x1="50" y1="30" x2="210" y2="30" className="arch-mini-graph-line arch-mini-graph-line--subtle" />
            </svg>

            <div className="arch-mini-graph-nodes">
              <div className="arch-mini-node arch-mini-node--c1" style={{ left: '10%', top: '15%' }}>
                <span>Customer</span>
              </div>
              <div className="arch-mini-node arch-mini-node--c2" style={{ left: '10%', top: '65%' }}>
                <span>Account</span>
              </div>
              <div className="arch-mini-node arch-mini-node--hub" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <Zap size={11} className="arch-mini-cyan-icon" />
                <span>Order</span>
              </div>
              <div className="arch-mini-node arch-mini-node--c3" style={{ right: '10%', top: '15%' }}>
                <span>Product</span>
              </div>
              <div className="arch-mini-node arch-mini-node--c4" style={{ right: '10%', top: '65%' }}>
                <span>Supplier</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'governance':
      return (
        <div className="arch-mini-vis arch-mini-vis--governance">
          <div className="arch-mini-vis__title-bar">
            <span className="arch-mini-vis__badge">
              <span className="arch-mini-vis__badge-dot" />
              Automated Checkpoints
            </span>
            <span className="arch-mini-vis__meta">Zero-Trust Active</span>
          </div>

          <div className="arch-mini-gov-checks">
            <div className="arch-mini-gov-row">
              <div className="arch-mini-gov-label">
                <ShieldCheck size={13} className="arch-mini-cyan-icon" />
                <span>Data Quality SLAs</span>
              </div>
              <div className="arch-mini-gov-status">
                <CheckCircle2 size={13} className="arch-mini-success-icon" />
                <span>99.99% Pass</span>
              </div>
            </div>

            <div className="arch-mini-gov-row">
              <div className="arch-mini-gov-label">
                <GitFork size={13} className="arch-mini-cyan-icon" />
                <span>Cryptographic Lineage</span>
              </div>
              <div className="arch-mini-gov-status">
                <CheckCircle2 size={13} className="arch-mini-success-icon" />
                <span>Verified</span>
              </div>
            </div>

            <div className="arch-mini-gov-row">
              <div className="arch-mini-gov-label">
                <ShieldCheck size={13} className="arch-mini-cyan-icon" />
                <span>PII & Security Masking</span>
              </div>
              <div className="arch-mini-gov-status">
                <CheckCircle2 size={13} className="arch-mini-success-icon" />
                <span>Enforced</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'pipeline':
    default:
      return (
        <div className="arch-mini-vis arch-mini-vis--pipeline">
          <div className="arch-mini-vis__title-bar">
            <span className="arch-mini-vis__badge">
              <span className="arch-mini-vis__badge-dot" />
              Automated CI/CD Pipeline
            </span>
            <span className="arch-mini-vis__meta">Autonomous Deploy</span>
          </div>

          <div className="arch-mini-pipeline-stepper">
            <div className="arch-mini-pipe-step arch-mini-pipe-step--done">
              <span className="arch-mini-pipe-dot"><CheckCircle2 size={10} /></span>
              <span className="arch-mini-pipe-name">Source</span>
            </div>
            <div className="arch-mini-pipe-link arch-mini-pipe-link--active" />

            <div className="arch-mini-pipe-step arch-mini-pipe-step--done">
              <span className="arch-mini-pipe-dot"><CheckCircle2 size={10} /></span>
              <span className="arch-mini-pipe-name">Transform</span>
            </div>
            <div className="arch-mini-pipe-link arch-mini-pipe-link--active" />

            <div className="arch-mini-pipe-step arch-mini-pipe-step--done">
              <span className="arch-mini-pipe-dot"><CheckCircle2 size={10} /></span>
              <span className="arch-mini-pipe-name">Test</span>
            </div>
            <div className="arch-mini-pipe-link arch-mini-pipe-link--active" />

            <div className="arch-mini-pipe-step arch-mini-pipe-step--active">
              <span className="arch-mini-pipe-dot arch-mini-pipe-dot--pulse"><Play size={9} /></span>
              <span className="arch-mini-pipe-name">Deploy</span>
            </div>
            <div className="arch-mini-pipe-link" />

            <div className="arch-mini-pipe-step">
              <span className="arch-mini-pipe-dot" />
              <span className="arch-mini-pipe-name">Monitor</span>
            </div>
          </div>
        </div>
      );
  }
};
