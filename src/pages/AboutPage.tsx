import React, { useEffect } from 'react';
import { leadershipTeam } from '../data/leadership';
import { companyValues } from '../data/values';
import { investors } from '../data/investors';
import { pressMentions } from '../data/press';
import { LeadershipCard } from '../components/cards/LeadershipCard';
import { ValueCard } from '../components/cards/ValueCard';
import { PressCard } from '../components/cards/PressCard';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import { CTASection } from '../components/sections/CTASection';
import { homeCta } from '../data/ctaContent';
import { ArrowUpRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About ScaeleIQ: Leadership, Mission & Investors';
  }, []);

  return (
    <div className="page-wrapper about-page">
      {/* Header */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3.5rem' }}>
        <div className="container">
          <RevealAnimation variant="up">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <SectionLabel>OUR MISSION</SectionLabel>
              <h1 className="heading-xl" style={{ marginBottom: '1.25rem' }}>
                Engineering the Future of Data Modernization
              </h1>
              <p className="body-lg">
                We are building the intelligent operating system for enterprise system transformation, uniting autonomous agent swarms with human domain experts.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Leadership Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <RevealAnimation variant="up">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
              <SectionLabel>LEADERSHIP</SectionLabel>
              <h2 className="heading-lg">Our Leadership Team</h2>
            </div>
          </RevealAnimation>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {leadershipTeam.map((leader) => (
              <RevealAnimation key={leader.name} variant="up">
                <LeadershipCard leader={leader} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <RevealAnimation variant="up">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
              <SectionLabel>OUR PRINCIPLES</SectionLabel>
              <h2 className="heading-lg">Our Values</h2>
            </div>
          </RevealAnimation>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {companyValues.map((val) => (
              <RevealAnimation key={val.id} variant="up">
                <ValueCard value={val} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <RevealAnimation variant="up">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
              <SectionLabel>BACKING & CAPITAL</SectionLabel>
              <h2 className="heading-lg">Backed by Leading Investors</h2>
            </div>
          </RevealAnimation>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {investors.map((inv) => (
              <RevealAnimation key={inv.name} variant="up">
                <a
                  href={inv.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-card)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    minHeight: '140px',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all var(--transition-normal)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>{inv.name}</div>
                    <ArrowUpRight size={16} color="#868C98" />
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{inv.category}</div>
                </a>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <RevealAnimation variant="up">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
              <SectionLabel>IN THE NEWS</SectionLabel>
              <h2 className="heading-lg">Press & Media</h2>
            </div>
          </RevealAnimation>

          {pressMentions.map((press) => (
            <RevealAnimation key={press.id} variant="up">
              <PressCard press={press} />
            </RevealAnimation>
          ))}
        </div>
      </section>

      <CTASection config={homeCta} />
    </div>
  );
};
