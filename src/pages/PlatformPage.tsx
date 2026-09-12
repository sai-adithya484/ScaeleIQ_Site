import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { DeliveryModel } from '../components/sections/DeliveryModel';
import { ArchitectureSection } from '../components/sections/architecture/ArchitectureSection';
import { CTASection } from '../components/sections/CTASection';
import { platformCta } from '../data/ctaContent';

export const PlatformPage: React.FC = () => {
  useEffect(() => {
    document.title = 'ScaeleIQ Platform: AI-Powered Migration & Modernization';
  }, []);

  return (
    <div className="page-wrapper platform-page">
      {/* Hero Section */}
      <Hero
        title="Engineered for Velocity"
        description={
          <>
            Deploy swarms of AI agents to autonomously migrate legacy systems, build{' '}
            ontologies, and unify data. <strong>Outcomes, not hours.</strong>
          </>
        }
        primaryButton={{
          label: 'Start modernization',
          to: '/demo',
        }}
        secondaryButton={{
          label: 'View architecture',
          href: '#architecture',
        }}
        imageSrc="/assets/platform.webp"
        imageAlt="ScaeleIQ Platform Dashboard Interface"
      />

      {/* The Delivery Model / Pod Section */}
      <DeliveryModel />

      {/* The Agentic Architecture 5-Layer Interactive Section */}
      <ArchitectureSection />

      {/* Dark CTA Section */}
      <CTASection config={platformCta} />
    </div>
  );
};
