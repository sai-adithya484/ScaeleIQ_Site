import React, { useEffect } from 'react';
import { privacyPolicyContent } from '../data/legalContent';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealAnimation } from '../components/ui/RevealAnimation';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | ScaeleIQ';
  }, []);

  return (
    <div className="page-wrapper privacy-page">
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <RevealAnimation variant="up">
            <SectionLabel>LEGAL & COMPLIANCE</SectionLabel>
            <h1 className="heading-xl" style={{ marginBottom: '0.75rem' }}>
              {privacyPolicyContent.title}
            </h1>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Last Updated: {privacyPolicyContent.lastUpdated}
            </div>

            <p className="body-lg" style={{ marginBottom: '3rem', lineHeight: 1.7 }}>
              {privacyPolicyContent.intro}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {privacyPolicyContent.sections.map((section) => (
                <div key={section.id} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h2 className="heading-sm" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                    {section.title}
                  </h2>

                  {section.subsections?.map((sub, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {sub.subtitle && (
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {sub.subtitle}
                        </h3>
                      )}
                      {sub.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="body-md" style={{ lineHeight: 1.7 }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>
    </div>
  );
};
