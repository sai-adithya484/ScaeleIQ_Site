import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { ComparisonBar } from '../components/sections/ComparisonBar';
import { FeaturePanel } from '../components/sections/FeaturePanel';
import { AgentCard } from '../components/cards/AgentCard';
import { CaseStudyCard } from '../components/cards/CaseStudyCard';
import { CTASection } from '../components/sections/CTASection';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import { Button } from '../components/ui/Button';
import { livingInfrastructurePanels } from '../data/homeContent';
import { agents } from '../data/agents';
import { caseStudies } from '../data/caseStudies';
import { homeCta } from '../data/ctaContent';
import './HomePage.css';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'ScaeleIQ: Rewriting the Data Modernization Playbook';
  }, []);

  return (
    <div className="page-wrapper home-page">
      {/* 1. Hero Section */}
      <Hero
        title="Rewriting the Data Modernization Playbook"
        description="Our agentic platform completes data modernization projects in weeks with AI agents and human experts working together."
        primaryButton={{
          label: 'Request a demo',
          to: '/demo',
        }}
        secondaryButton={{
          label: 'Explore platform',
          to: '/platform',
        }}
        imageSrc="/assets/platform.webp"
        imageAlt="ScaeleIQ Platform Overview"
      />

      {/* 2. Outcomes & Metrics Comparison Strip */}
      <ComparisonBar />

      {/* 3. Living Infrastructure 3-Panel Feature Set */}
      <section className="home-features-section">
        <div className="container">
          <div className="home-features-header">
            <RevealAnimation variant="up">
              <SectionLabel>LIVING INFRASTRUCTURE</SectionLabel>
              <h2 className="section-title">Meet Your Living Infrastructure</h2>
              <p className="section-subtitle">
                Autonomous data pipelines engineered for enterprise agility and continuous intelligence.
              </p>
            </RevealAnimation>
          </div>

          <div className="home-features-panels">
            {livingInfrastructurePanels.map((panel, idx) => (
              <FeaturePanel key={panel.id} panel={panel} reversed={idx % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI Agents + Experts Grid */}
      <section className="home-agents-section">
        <div className="container">
          <div className="home-agents-header">
            <RevealAnimation variant="up">
              <SectionLabel>AGENT SWARMS</SectionLabel>
              <h2 className="section-title">AI Agents + Experts = 5× Faster Results</h2>
              <p className="section-subtitle">
                Specialized agents and subject matter experts deliver enterprise IT transformation – all working in parallel around the clock.
              </p>
            </RevealAnimation>
          </div>

          <div className="home-agents-grid">
            {agents.map((agent) => (
              <RevealAnimation key={agent.id} variant="up">
                <AgentCard agent={agent} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Real Companies, Real Results (Case Studies Preview) */}
      <section className="home-cases-section">
        <div className="container">
          <div className="home-cases-header">
            <RevealAnimation variant="up">
              <div>
                <SectionLabel>PROVEN IMPACT</SectionLabel>
                <h2 className="section-title">Real Companies. Real Results.</h2>
              </div>
              <Button to="/case-studies" variant="secondary" size="md">
                View all case studies
              </Button>
            </RevealAnimation>
          </div>

          <div className="home-cases-grid">
            {caseStudies.slice(0, 3).map((cs) => (
              <RevealAnimation key={cs.slug} variant="up">
                <CaseStudyCard caseStudy={cs} compact={true} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing Dark CTA */}
      <CTASection config={homeCta} />
    </div>
  );
};
