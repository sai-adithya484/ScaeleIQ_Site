import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { podFeatures } from '../../data/podFeatures';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealAnimation } from '../ui/RevealAnimation';
import './DeliveryModel.css';

export const DeliveryModel: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="delivery-model-section">
      <div className="container">
        <div className="delivery-model-grid">
          {/* Left Column: Copy & Accordion Feature Rows */}
          <div className="delivery-model__left">
            <RevealAnimation variant="up">
              <SectionLabel>THE DELIVERY MODEL</SectionLabel>
              <h2 className="delivery-model__heading">
                Meet the “Pod”:<br />Agents + Engineers.
              </h2>
              <p className="delivery-model__desc">
                ScaeleIQ moves beyond the “black box” AI model. We deploy modular units called Pods.
                Each Pod consists of specialized AI Agents handling 80% of the execution, and
                Forward Deployed Engineers (FDEs) providing high-level judgment and client oversight.
              </p>

              {/* Feature Rows */}
              <div className="pod-features-list">
                {podFeatures.map((feat) => {
                  const isExpanded = expandedId === feat.id;
                  return (
                    <div
                      key={feat.id}
                      className={`pod-feature-row ${isExpanded ? 'pod-feature-row--expanded' : ''}`}
                      onClick={() => toggleRow(feat.id)}
                    >
                      <div className="pod-feature-row__header">
                        <div className="pod-feature-row__icon-btn">
                          {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                        <h3 className="pod-feature-row__title">{feat.title}</h3>
                      </div>
                      <div className="pod-feature-row__content">
                        <p className="pod-feature-row__short">{feat.shortDescription}</p>
                        {isExpanded && (
                          <p className="pod-feature-row__full">{feat.fullDescription}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </RevealAnimation>
          </div>

          {/* Right Column: Visual Diagram Asset */}
          <div className="delivery-model__right">
            <RevealAnimation variant="up" delayMs={150}>
              <div className="delivery-model__visual-frame">
                <img
                  src="/assets/platform-agent.webp"
                  alt="Your POD Team Visualization"
                  className="delivery-model__img"
                />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
