import React, { useEffect } from 'react';
import { caseStudies } from '../data/caseStudies';
import { CaseStudyCard } from '../components/cards/CaseStudyCard';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import { CTASection } from '../components/sections/CTASection';
import { homeCta } from '../data/ctaContent';

export const CaseStudiesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Studies: Real Outcomes at Breakthrough Speed | ScaeleIQ';
  }, []);

  return (
    <div className="page-wrapper case-studies-page">
      {/* Page Header */}
      <section
        className="case-studies-header-section"
        style={{ paddingTop: 'calc(76px + 4rem)', paddingBottom: '3.5rem' }}
      >
        <div className="container">
          <RevealAnimation variant="up">
            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <SectionLabel>CASE STUDIES</SectionLabel>
              <h1 className="heading-xl" style={{ marginBottom: '1.25rem' }}>
                Real Outcomes, Measurable Results
              </h1>
              <p className="body-lg">
                Discover how ScaeleIQ helps enterprises transform fragmented legacy systems into
                modern, AI-ready data platforms — in weeks, not years.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Cards Grid */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="case-studies-grid">
            {caseStudies.map((cs, index) => (
              <RevealAnimation
                key={cs.slug}
                variant="up"
                delayMs={index * 100}
                className="case-studies-grid__item"
              >
                <CaseStudyCard caseStudy={cs} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <CTASection config={homeCta} />
    </div>
  );
};
