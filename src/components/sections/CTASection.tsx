import React from 'react';
import { CtaConfig } from '../../data/ctaContent';
import { Button } from '../ui/Button';
import { RevealAnimation } from '../ui/RevealAnimation';
import './CTASection.css';

interface CTASectionProps {
  config: CtaConfig;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ config, className = '' }) => {
  return (
    <section className={`cta-section ${className}`}>
      <div className="container">
        <RevealAnimation variant="large">
          <div className="cta-card">
            <div className="cta-card__content">
              {config.kicker && <div className="cta-card__kicker">{config.kicker}</div>}
              <h2 className="cta-card__heading">{config.heading}</h2>
              <p className="cta-card__desc">{config.description}</p>

              <div className="cta-card__actions">
                <Button to={config.primaryButton.href} variant="primary" size="lg">
                  {config.primaryButton.label}
                </Button>
                {config.secondaryButton && (
                  <Button to={config.secondaryButton.href} variant="dark-outline" size="lg">
                    {config.secondaryButton.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};
