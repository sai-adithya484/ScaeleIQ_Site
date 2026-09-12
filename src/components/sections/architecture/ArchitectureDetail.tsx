import React from 'react';
import { ArchitectureLayer } from '../../../data/architectureLayers';
import { ArchitectureMiniVisualizer } from './ArchitectureMiniVisualizer';
import { Bot, Check, Zap } from 'lucide-react';

interface ArchitectureDetailProps {
  layer: ArchitectureLayer;
  totalLayers: number;
}

export const ArchitectureDetail: React.FC<ArchitectureDetailProps> = ({
  layer,
  totalLayers,
}) => {
  return (
    <div className="arch-detail-panel" key={layer.id}>
      {/* Top Meta Bar */}
      <div className="arch-detail-meta-bar">
        <div className="arch-detail-step-badge">
          <span className="arch-detail-step-current">{layer.number}</span>
          <span className="arch-detail-step-sep">/</span>
          <span className="arch-detail-step-total">{String(totalLayers).padStart(2, '0')}</span>
        </div>
        <div className="arch-detail-status-tag">
          <span className="arch-detail-live-dot" />
          <span>Active Layer</span>
        </div>
      </div>

      {/* Title & Concise Summary */}
      <div className="arch-detail-heading-group">
        <h3 className="arch-detail-title">{layer.title}</h3>
        <p className="arch-detail-tagline">{layer.summary}</p>
      </div>

      {/* Short 2-sentence description */}
      <p className="arch-detail-description">{layer.description}</p>

      {/* Dedicated Interactive Mini Visualizer */}
      <div className="arch-detail-vis-slot">
        <ArchitectureMiniVisualizer layerId={layer.id} />
      </div>

      {/* 3 Key Capabilities with Checkmarks */}
      <div className="arch-detail-capabilities">
        <div className="arch-detail-cap-list">
          {layer.capabilities.map((cap, idx) => (
            <div key={idx} className="arch-detail-cap-row">
              <Check size={13} className="arch-detail-check-icon" />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Compact Footer: Agent & Metric */}
      <div className="arch-detail-footer">
        <div className="arch-detail-agent-box">
          <Bot size={14} className="arch-detail-agent-icon" />
          <div>
            <span className="arch-detail-agent-lbl">Assigned Agent</span>
            <span className="arch-detail-agent-val">{layer.agent}</span>
          </div>
        </div>

        <div className="arch-detail-metric-badge">
          <Zap size={12} className="arch-detail-metric-icon" />
          <div>
            <span className="arch-detail-metric-val">{layer.metrics.value}</span>
            <span className="arch-detail-metric-lbl">{layer.metrics.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
