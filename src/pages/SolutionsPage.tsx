import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { SolutionShowcase } from '../components/solutions/SolutionShowcase';
import { CTASection } from '../components/sections/CTASection';
import { platformCta } from '../data/ctaContent';

export const SolutionsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Enterprise IT Modernization Solutions | ScaeleIQ';
  }, []);

  return (
    <div className="page-wrapper solutions-page">
      {/* Existing Solutions Hero Section */}
      <Hero
        eyebrow="ENTERPRISE SOLUTIONS"
        title="Modernization Built for Enterprise Scale"
        description="Replace multi-year consulting engagements with autonomous agent swarms delivering production data pipelines in weeks."
        primaryButton={{ label: 'Schedule Briefing', to: '/demo' }}
        secondaryButton={{ label: 'Explore Architecture', to: '/platform' }}
      />

      {/* New 4-Section Alternating Solutions Showcase */}
      <SolutionShowcase />

      {/* CTA Section */}
      <CTASection config={platformCta} />
    </div>
  );
};
