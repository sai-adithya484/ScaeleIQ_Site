import React, { useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import { FeaturePanel } from '../components/sections/FeaturePanel';
import { CTASection } from '../components/sections/CTASection';
import { livingInfrastructurePanels } from '../data/homeContent';
import { platformCta } from '../data/ctaContent';
import './DataPage.css';

export const DataPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Enterprise Data Infrastructure & Migration | ScaeleIQ';
  }, []);

  return (
    <div className="page-wrapper data-page">
      {/* ═══════════════ DATA HERO ═══════════════ */}
      <section className="data-hero">
        {/* Background Image: Frosted Blue Wave Gradient */}
        <div className="data-hero__bg" aria-hidden="true">
          <img
            src="/assets/Frosted Blue Wave Gradient.png"
            alt=""
            className="data-hero__bg-img"
            fetchPriority="high"
          />
          {/* Central soft white translucent radial backdrop */}
          <div className="data-hero__backdrop" />
        </div>

        <div className="container data-hero__container">
          <RevealAnimation variant="up">
            <div className="data-hero__inner">
              <span className="data-hero__eyebrow">ENTERPRISE DATA</span>

              <h1 className="data-hero__title">
                Living Data Infrastructure
              </h1>

              <p className="data-hero__desc">
                Autonomous schema mapping, continuous forensic governance, and zero-downtime cutover for complex enterprise data estates.
              </p>

              <div className="data-hero__actions">
                <Button to="/platform" variant="primary" size="lg" className="data-hero__btn-primary">
                  Explore Platform
                </Button>
                <Button to="/demo" variant="secondary" size="lg" className="data-hero__btn-secondary">
                  Request Demo
                </Button>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {livingInfrastructurePanels.map((panel, idx) => (
              <FeaturePanel key={panel.id} panel={panel} reversed={idx % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      <CTASection config={platformCta} />
    </div>
  );
};
