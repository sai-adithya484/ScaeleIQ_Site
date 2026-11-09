import React, { useEffect } from 'react';
import { ContactForm } from '../components/forms/ContactForm';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import { Mail, MapPin, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact ScaeleIQ: See Modernization in Action';
  }, []);

  return (
    <div className="page-wrapper contact-page">
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
            {/* Left Info Column */}
            <RevealAnimation variant="up">
              <SectionLabel>GET IN TOUCH</SectionLabel>
              <h1 className="heading-xl" style={{ marginBottom: '1.25rem' }}>
                See ScaeleIQ in action
              </h1>
              <p className="body-lg" style={{ marginBottom: '2.5rem' }}>
                Want to see how we can drive business value at the speed of AI? Share your info and our solutions architecture team will be in touch!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-muted)' }}>EMAIL SALES</div>
                    <a href="mailto:sales@scaeleiq.com" style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      sales@scaeleiq.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-muted)' }}>HEADQUARTERS</div>
                    <div style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      San Francisco, CA & Delhi, India
                    </div>
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
                <h2 className="heading-sm" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={20} color="var(--accent)" />
                  Request Platform Briefing
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
