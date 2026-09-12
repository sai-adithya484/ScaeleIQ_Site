import React, { useEffect } from 'react';
import { insightPosts } from '../data/insightPosts';
import { InsightCard } from '../components/cards/InsightCard';
import { SectionLabel } from '../components/ui/SectionLabel';
import { NewsletterForm } from '../components/forms/NewsletterForm';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import { CTASection } from '../components/sections/CTASection';
import { homeCta } from '../data/ctaContent';

export const InsightsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Insights: AI Modernization, Architecture & Strategy | ScaeleIQ';
  }, []);

  return (
    <div className="page-wrapper insights-page">
      {/* Header Section */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3.5rem' }}>
        <div className="container">
          <RevealAnimation variant="up">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <SectionLabel>PERSPECTIVES & RESEARCH</SectionLabel>
              <h1 className="heading-xl" style={{ marginBottom: '1.25rem' }}>
                Insights
              </h1>
              <p className="body-lg" style={{ marginBottom: '2.5rem' }}>
                Perspectives on agentic systems, enterprise ontology engineering, and modernizing data architectures at breakthrough speed.
              </p>

              {/* Newsletter Subscription Form */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <NewsletterForm />
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Article List Section */}
      <section style={{ paddingBottom: '5rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {insightPosts.map((post) => (
              <RevealAnimation key={post.slug} variant="up">
                <InsightCard post={post} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <CTASection config={homeCta} />
    </div>
  );
};
