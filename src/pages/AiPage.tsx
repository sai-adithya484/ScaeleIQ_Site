import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { ArchitectureSection } from '../components/sections/architecture/ArchitectureSection';
import { AIAgentsShowcase } from '../components/sections/AIAgentsShowcase';
import { CTASection } from '../components/sections/CTASection';
import { platformCta } from '../data/ctaContent';

export const AiPage: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Agent Swarms & Intelligence | ScaeleIQ';
  }, []);

  return (
    <div className="page-wrapper ai-page">
      <Hero
        eyebrow="AGENTIC SYSTEMS"
        title="AI Agent Swarms + Experts"
        description="Deterministic execution combined with generative reasoning. Specialized autonomous agents handling 80% of migration and code generation."
        primaryButton={{ label: 'Explore Architecture', to: '/platform' }}
        secondaryButton={{ label: 'Schedule Demo', to: '/demo' }}
      />

      {/* The Agentic Architecture 5-Layer Interactive Section */}
      <ArchitectureSection />

      {/* AI Agents Showcase */}
      <AIAgentsShowcase />

      <CTASection config={platformCta} />
    </div>
  );
};
