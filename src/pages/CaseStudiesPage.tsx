import React, { useEffect } from 'react';
import { caseStudies } from '../data/caseStudies';
import { CaseStudyCard } from '../components/cards/CaseStudyCard';
import { CTASection } from '../components/sections/CTASection';
import { homeCta } from '../data/ctaContent';
import './CaseStudiesPage.css';

export const CaseStudiesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Studies: Real Outcomes, Measurable Results | ScaeleIQ';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper case-studies-page">
      {/* Page Header */}
      <section className="case-studies-header-section">
        <div className="case-studies-container">
          <div className="case-studies-header__inner">
            <div className="case-studies-eyebrow">
              <span className="case-studies-eyebrow__dot" aria-hidden="true" />
              CASE STUDIES
            </div>
            <h1 className="case-studies-heading">
              Real Outcomes,
              <br />
              Measurable Results
            </h1>
            <p className="case-studies-subtitle">
              Discover how SCAELEIQ helps enterprises transform fragmented legacy systems into
              modern, AI-ready data platforms — in weeks, not years.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Column Cards Grid */}
      <section className="case-studies-grid-section">
        <div className="case-studies-container">
          <div className="case-studies-grid">
            {caseStudies.map((cs) => (
              <div key={cs.slug} className="case-studies-grid__item">
                <CaseStudyCard caseStudy={cs} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection config={homeCta} />
    </div>
  );
};
