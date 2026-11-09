import React, { useEffect } from 'react';
import { ContactForm } from '../components/forms/ContactForm';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const DemoPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Request Demo & Proposal | ScaeleIQ';
  }, []);

  return (
    <div className="page-wrapper demo-page">
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '6rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'flex-start',
            }}
          >
            {/* Left Column: What to expect in a demo */}
            <RevealAnimation variant="up">
              <SectionLabel>PLATFORM DEMONSTRATION</SectionLabel>
              <h1 className="heading-xl" style={{ marginBottom: '1.25rem' }}>
                Experience Autonomous Modernization
              </h1>
              <p className="body-lg" style={{ marginBottom: '2.5rem' }}>
                Schedule a custom briefing tailored to your legacy tech stack, schema complexity, and cloud target.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                      Architecture & Schema Ingestion Walkthrough
                    </h3>
                    <p className="body-sm">
                      See how our agents scan complex stored procedures, map schemas, and generate production-ready specs in real-time.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                      Timeline & Cost Estimation
                    </h3>
                    <p className="body-sm">
                      Receive an automated work breakdown and fixed-window timeline measured in weeks rather than quarters.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                      Enterprise Isolation & Security
                    </h3>
                    <p className="body-sm">
                      Review SOC2 readiness, zero-retention tenant sandboxing, and air-gapped deployment configurations.
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            {/* Right Form Card */}
            <RevealAnimation variant="up" delayMs={150}>
              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <h2 className="heading-sm" style={{ marginBottom: '1.5rem' }}>
                  Get a Custom Proposal
                </h2>
                <ContactForm />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};
