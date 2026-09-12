import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { FeaturePanel } from '../components/sections/FeaturePanel';
import { CTASection } from '../components/sections/CTASection';
import { livingInfrastructurePanels } from '../data/homeContent';
import { platformCta } from '../data/ctaContent';

export const DataPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Enterprise Data Infrastructure & Migration | ScaeleIQ';
  }, []);

  return (
    <div className="page-wrapper data-page">
      <Hero
        eyebrow="ENTERPRISE DATA"
        title="Living Data Infrastructure"
        description="Autonomous schema mapping, continuous forensic governance, and zero-downtime cutover for complex enterprise data estates."
        primaryButton={{ label: 'Explore Platform', to: '/platform' }}
        secondaryButton={{ label: 'Request Demo', to: '/demo' }}
        imageSrc="/assets/platform.webp"
      />

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
