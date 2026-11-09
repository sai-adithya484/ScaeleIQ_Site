import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { MetricStat } from '../components/ui/MetricStat';
import { InfoTable } from '../components/case-study/InfoTable';
import { ChallengeBlock, SolutionBlock, ResultsBlock } from '../components/case-study/CaseStudyBlocks';
import { CTASection } from '../components/sections/CTASection';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { platformCta } from '../data/ctaContent';
import '../components/case-study/CaseStudy.css';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = caseStudies.find((c) => c.slug === slug);

  useEffect(() => {
    if (caseStudy) {
      document.title = `${caseStudy.company} Case Study | ScaeleIQ`;
    }
  }, [caseStudy]);

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="page-wrapper case-study-detail-page">
      <section style={{ paddingTop: 'calc(72px + 3.5rem)', paddingBottom: '3rem' }}>
        <div className="container">
          <Link
            to="/case-studies"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--accent)',
              marginBottom: '2rem',
            }}
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>

          <RevealAnimation variant="up">
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              {caseStudy.industry.map((ind) => (
                <span
                  key={ind}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--accent)',
                    backgroundColor: 'var(--accent-light)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {ind}
                </span>
              ))}
            </div>

            <h1 className="heading-xl" style={{ marginBottom: '1.5rem', maxWidth: '960px' }}>
              {caseStudy.headline}
            </h1>

            <p className="body-lg" style={{ maxWidth: '800px', marginBottom: '3rem' }}>
              {caseStudy.summary}
            </p>

            {/* Big Metrics Stat Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem 2rem',
                marginBottom: '3.5rem',
              }}
            >
              {caseStudy.metrics.map((m, idx) => (
                <MetricStat key={idx} value={m.value} label={m.label} />
              ))}
            </div>

            {/* Organization Info Table */}
            <InfoTable orgInfo={caseStudy.orgInfo} />

            {/* About Section */}
            <div style={{ margin: '3.5rem 0' }}>
              <h2 className="heading-md" style={{ marginBottom: '1rem' }}>
                About {caseStudy.company}
              </h2>
              <p className="body-md" style={{ maxWidth: '800px', lineHeight: 1.7 }}>
                {caseStudy.about}
              </p>
            </div>

            {/* Services Provided */}
            <div style={{ margin: '3.5rem 0' }}>
              <h2 className="heading-md" style={{ marginBottom: '1.25rem' }}>
                ScaeleIQ Services Provided
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {caseStudy.servicesProvided.map((service, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1rem 1.25rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-card)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--accent)" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge Block */}
            <ChallengeBlock items={caseStudy.challenge} />

            {/* Solution Block */}
            <SolutionBlock solution={caseStudy.solution} />

            {/* Results Block */}
            <ResultsBlock results={caseStudy.results} />
          </RevealAnimation>
        </div>
      </section>

      <CTASection config={platformCta} />
    </div>
  );
};
