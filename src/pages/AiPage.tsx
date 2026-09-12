import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { AgentCard } from '../components/cards/AgentCard';
import { ArchitectureSection } from '../components/sections/architecture/ArchitectureSection';
import { DeliveryModel } from '../components/sections/DeliveryModel';
import { CTASection } from '../components/sections/CTASection';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import { agents } from '../data/agents';
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

      <DeliveryModel />

      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <RevealAnimation variant="up">
              <SectionLabel>AGENT ROSTER</SectionLabel>
              <h2 className="heading-lg">Meet the Autonomous Agents</h2>
              <p className="body-md">Specialized agents built specifically for enterprise IT modernization workflows.</p>
            </RevealAnimation>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {agents.map((agent) => (
              <RevealAnimation key={agent.id} variant="up">
                <AgentCard agent={agent} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <CTASection config={platformCta} />
    </div>
  );
};
