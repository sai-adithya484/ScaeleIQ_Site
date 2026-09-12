import React from 'react';
import { LivingInfrastructurePanel } from '../../data/homeContent';
import { RevealAnimation } from '../ui/RevealAnimation';
import { Check } from 'lucide-react';
import './FeaturePanel.css';

interface FeaturePanelProps {
  panel: LivingInfrastructurePanel;
  reversed?: boolean;
}

export const FeaturePanel: React.FC<FeaturePanelProps> = ({ panel, reversed = false }) => {
  return (
    <div className={`feature-panel ${reversed ? 'feature-panel--reversed' : ''}`}>
      {/* Text Column */}
      <div className="feature-panel__text">
        <RevealAnimation variant="up">
          <div className="feature-panel__step">{panel.step}</div>
          <h3 className="feature-panel__title">{panel.title}</h3>
          <div className="feature-panel__tagline">{panel.tagline}</div>
          <p className="feature-panel__desc">{panel.description}</p>

          <div className="feature-panel__bullets">
            {panel.bullets.map((b, idx) => (
              <div key={idx} className="feature-panel__bullet">
                <span className="feature-panel__bullet-icon">
                  <Check size={16} />
                </span>
                <p className="feature-panel__bullet-text">
                  <strong>{b.lead}</strong> {b.text}
                </p>
              </div>
            ))}
          </div>
        </RevealAnimation>
      </div>

      {/* Visual Placeholder Frame Column */}
      <div className="feature-panel__visual">
        <RevealAnimation variant="up" delayMs={150}>
          <div className="feature-panel__card">
            <div className="feature-panel__card-header">
              <div className="feature-panel__card-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <div className="feature-panel__card-badge">{panel.title} Engine</div>
            </div>
            <div className="feature-panel__card-body">
              <div className="feature-panel__schematic">
                <div className="schematic-node schematic-node--source">Legacy System</div>
                <div className="schematic-connector">
                  <span className="schematic-pulse" />
                </div>
                <div className="schematic-node schematic-node--agent">ScaeleIQ Agent Swarm</div>
                <div className="schematic-connector">
                  <span className="schematic-pulse" />
                </div>
                <div className="schematic-node schematic-node--target">Cloud Target</div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};
