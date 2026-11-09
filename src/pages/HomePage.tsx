import React, { useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import { CTASection } from '../components/sections/CTASection';
import { homeCta } from '../data/ctaContent';
import { DataOrganizationVisual } from '../components/home/DataOrganizationVisual';
import { AIAgentsSection } from '../components/home/AIAgentsSection';
import { Govern360Visual } from '../components/home/Govern360Visual';
import { DataIntelligenceVisual } from '../components/home/DataIntelligenceVisual';
import { useCountUp, useInView } from '../hooks';
import {
  Database,
  ShieldCheck,
  Cpu,
  Sliders,
  Zap,
  BookOpen,
  Eye,
  BarChart2,
  RefreshCw
} from 'lucide-react';
import './HomePage.css';

/* ── Main Home Page Component ────────────────────────────── */
export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'ScaeleIQ — Enterprise Data Modernization & Intelligence';
  }, []);

  const outcomesRef = useInView(0.3);
  const speedCount = useCountUp(5, 750, outcomesRef.inView, 1);
  const costCount = useCountUp(40, 1100, outcomesRef.inView, 0);

  /* Dot matrix: exactly 30 dots (3 rows of 10) matching image1.png from HOME PAGE.docx */
  const totalDots = 30;
  const activeDots = 12; // 40% of 30 dots (12/30 = 0.40)

  return (
    <div className="page-wrapper home-page">

      {/* ═══════════════ 1. HERO ═══════════════ */}
      <section className="home-hero">
        <div className="home-hero__content">
          <RevealAnimation variant="up">
            <div className="home-hero__inner">
              <span className="home-hero__eyebrow">ENTERPRISE DATA MODERNIZATION</span>

              <h1 className="home-hero__title">
                The Autonomous Data<br className="home-hero__title-br" />
                Modernization Platform
              </h1>

              <p className="home-hero__desc">
                Deploy specialized AI agents to modernize legacy data stacks, automate governance, and unify enterprise semantics in weeks, not quarters.
              </p>

              <div className="home-hero__actions">
                <Button to="/demo" variant="primary" size="lg" className="home-hero__btn-primary">
                  Request a demo
                </Button>
                <Button to="/solutions" variant="secondary" size="lg" className="home-hero__btn-secondary">
                  Explore solutions
                </Button>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>



      {/* ═══════════════ 3. PROVEN OUTCOMES, FASTER THAN EVER ═══════════════ */}
      <section className="home-outcomes" ref={outcomesRef.ref}>
        <div className="container">
          <RevealAnimation variant="up">
            <div className="home-outcomes__header">
              <span className="home-section-eyebrow">MEASURABLE ENTERPRISE ADVANTAGE</span>
              <h2 className="home-outcomes__title">Proven Outcomes, Faster Than Ever</h2>
            </div>
          </RevealAnimation>

          <div className="home-outcomes__grid">
            {/* Speed Comparison Card (Card 1) */}
            <RevealAnimation variant="up" delayMs={100} className="home-outcome-card-wrap">
              <div className="home-outcome-card">
                <div className="outcome-card-header">
                  <span className="outcome-card-tag">DEPLOYMENT TIMELINE</span>
                </div>
                <div className="outcome-bar-group">
                  <div className="outcome-bar">
                    <div className="outcome-bar__meta">
                      <span className="outcome-bar__label">Generic Approach</span>
                      <span className="outcome-bar__unit">Months</span>
                    </div>
                    <div className="outcome-bar__track">
                      <div
                        className="outcome-bar__fill outcome-bar__fill--old"
                        style={{ width: outcomesRef.inView ? '85%' : '0%' }}
                      />
                    </div>
                  </div>
                  <div className="outcome-bar">
                    <div className="outcome-bar__meta">
                      <span className="outcome-bar__label outcome-bar__label--brand">SCAELEIQ</span>
                      <span className="outcome-bar__unit outcome-bar__unit--brand">Weeks</span>
                    </div>
                    <div className="outcome-bar__track">
                      <div
                        className="outcome-bar__fill outcome-bar__fill--new"
                        style={{ width: outcomesRef.inView ? '25%' : '0%' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="outcome-metric">
                  <span className="outcome-metric__value">{speedCount}X</span>
                  <span className="outcome-metric__label">Faster Execution</span>
                  <p className="outcome-metric__desc">
                    Autonomous agent swarms accelerate extraction, schema mapping, and pipeline deployment.
                  </p>
                </div>
              </div>
            </RevealAnimation>

            {/* Cost-Effectiveness Card (Card 2): 30 dots (3 rows of 10) matching image1.png */}
            <RevealAnimation variant="up" delayMs={220} className="home-outcome-card-wrap">
              <div className="home-outcome-card home-outcome-card--dark">
                <div className="outcome-card-header">
                  <span className="outcome-card-tag outcome-card-tag--cyan">EFFICIENCY RATIO</span>
                </div>
                <div className="outcome-dots" aria-label="40% cost reduction matrix">
                  {Array.from({ length: totalDots }).map((_, i) => (
                    <div
                      key={i}
                      className={`outcome-dot ${i < activeDots ? 'outcome-dot--active' : ''}`}
                      style={{ transitionDelay: outcomesRef.inView ? `${i * 35}ms` : '0ms' }}
                    />
                  ))}
                </div>
                <div className="outcome-metric">
                  <span className="outcome-metric__value outcome-metric__value--light">
                    {costCount}%
                  </span>
                  <span className="outcome-metric__label outcome-metric__label--light">
                    More Cost-Effective
                  </span>
                  <p className="outcome-metric__desc outcome-metric__desc--light">
                    Streamlined autonomous workflows reduce cloud computing, licensing, and engineering overhead.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>


      {/* ═══════════════ 4. MEET YOUR LIVING INFRASTRUCTURE ═══════════════ */}
      {/* Modeled directly on APPROVED VISUAL REFERENCE IMAGE with alternating rows and central spine */}
      <section className="home-living-infra">
        <div className="container">
          <RevealAnimation variant="up">
            <div className="home-living-infra__header">
              <span className="infra-eyebrow">OUR DATA PLATFORM</span>
              <h2 className="infra-title">Meet Your Living Infrastructure</h2>
              <p className="infra-subtitle">
                A modern, intelligent foundation to unify, govern and activate your data — continuously.
              </p>
            </div>
          </RevealAnimation>

          <div className="infra-timeline-wrapper">
            {/* Central Vertical Connecting Spine with Animated Pulse Nodes */}
            <div className="infra-spine">
              <div className="infra-spine-line" />
              <div className="infra-spine-node infra-spine-node--1">
                <div className="spine-node-inner" />
              </div>
              <div className="infra-spine-node infra-spine-node--2">
                <div className="spine-node-inner" />
              </div>
              <div className="infra-spine-node infra-spine-node--3">
                <div className="spine-node-inner" />
              </div>
            </div>

            {/* ── ROW 1: [VISUAL] Left | [DATA ORGANIZATION] Right ── */}
            <div className="infra-row infra-row--visual-left">
              {/* Left Animated Product Visualization: DataOrganizationVisual */}
              <RevealAnimation variant="up">
                <DataOrganizationVisual />
              </RevealAnimation>

              {/* Right Content */}
              <RevealAnimation variant="up" delayMs={100}>
                <div className="infra-card infra-card--content">
                  <span className="infra-category-pill">DATA ORGANIZATION</span>
                  <h3 className="infra-heading">
                    Stop moving data. Start modernizing it.
                  </h3>
                  <p className="infra-description">
                    You can't build the future on legacy infrastructure. Our AI agents accelerate your path from any source to a modern, unified data foundation — mapping, cleansing and standardizing data for what's next.
                  </p>
                  <ul className="infra-bullet-list">
                    <li className="infra-bullet-item">
                      <div className="infra-bullet-icon-wrap">
                        <Database size={13} />
                      </div>
                      <span className="infra-bullet-text">Connect and ingest from diverse sources</span>
                    </li>
                    <li className="infra-bullet-item">
                      <div className="infra-bullet-icon-wrap">
                        <Sliders size={13} />
                      </div>
                      <span className="infra-bullet-text">Automate mapping and standardization</span>
                    </li>
                    <li className="infra-bullet-item">
                      <div className="infra-bullet-icon-wrap">
                        <Zap size={13} />
                      </div>
                      <span className="infra-bullet-text">Accelerate time to value</span>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>

            {/* ── ROW 2: [DATA GOVERNANCE] Left | [VISUAL] Right ── */}
            <div className="infra-row infra-row--visual-right">
              {/* Left Content */}
              <RevealAnimation variant="up">
                <div className="infra-card infra-card--content">
                  <span className="infra-category-pill">DATA GOVERNANCE</span>
                  <h3 className="infra-heading">
                    Stop letting bad data shape your business outcomes.
                  </h3>
                  <p className="infra-description">
                    We transform messy, fragmented, structured and unstructured data into trusted, governed assets, using continuous, AI-driven governance to ensure data integrity and reliability.
                  </p>
                  <ul className="infra-bullet-list">
                    <li className="infra-bullet-item">
                      <div className="infra-bullet-icon-wrap">
                        <ShieldCheck size={13} />
                      </div>
                      <span className="infra-bullet-text">Improve data quality and consistency</span>
                    </li>
                    <li className="infra-bullet-item">
                      <div className="infra-bullet-icon-wrap">
                        <BookOpen size={13} />
                      </div>
                      <span className="infra-bullet-text">Build a shared business glossary</span>
                    </li>
                    <li className="infra-bullet-item">
                      <div className="infra-bullet-icon-wrap">
                        <Eye size={13} />
                      </div>
                      <span className="infra-bullet-text">Gain full visibility with observability</span>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>

              {/* Right Product Visualization: Govern360Visual */}
              <RevealAnimation variant="up" delayMs={100}>
                <Govern360Visual />
              </RevealAnimation>
            </div>

            {/* ── ROW 3: [VISUAL] Left | [DATA INTEGRATION & INTELLIGENCE] Right ── */}
            <div className="infra-row infra-row--visual-left">
              {/* Left Animated Product Visualization: DataIntelligenceVisual */}
              <RevealAnimation variant="up">
                <DataIntelligenceVisual />
              </RevealAnimation>

              {/* Right Content */}
              <RevealAnimation variant="up" delayMs={100}>
                <div className="infra-card infra-card--content">
                  <span className="infra-category-pill">DATA INTEGRATION & INTELLIGENCE</span>
                  <h3 className="infra-heading">
                    Infrastructure that stays one step ahead.
                  </h3>
                  <p className="infra-description">
                    Agents understand your infrastructure, architecture and data. They continuously learn, adapt and optimize so you can focus on business outcomes, not maintenance.
                  </p>
                  <ul className="infra-bullet-list">
                    <li className="infra-bullet-item">
                      <div className="infra-bullet-icon-wrap">
                        <BarChart2 size={13} />
                      </div>
                      <span className="infra-bullet-text">One-click upgrades and continuous optimization</span>
                    </li>
                    <li className="infra-bullet-item">
                      <div className="infra-bullet-icon-wrap">
                        <RefreshCw size={13} />
                      </div>
                      <span className="infra-bullet-text">Self-improving with every data change</span>
                    </li>
                    <li className="infra-bullet-item">
                      <div className="infra-bullet-icon-wrap">
                        <Cpu size={13} />
                      </div>
                      <span className="infra-bullet-text">Ready for AI, analytics and enterprise applications</span>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════ 5. AI AGENTS + EXPERTS ═══════════════ */}
      <AIAgentsSection />

      {/* ═══════════════ 6. OUR CLIENTS & OUR PARTNERS ═══════════════ */}
      <section className="home-clients" id="clients-partners">
        <div className="container">
          {/* CLIENTS BLOCK */}
          <div className="home-clients__block">
            <RevealAnimation variant="up">
              <div className="home-clients__header">
                <div className="home-clients__pill">
                  <span className="home-clients__pill-dot" aria-hidden="true" />
                  <span>OUR CLIENTS</span>
                </div>
                <h2 className="home-clients__title">Trusted by Leading Organizations</h2>
                <p className="home-clients__subtitle">
                  Organizations across industries trust SCAELEIQ to modernize their data landscapes,
                  improve operational performance and build strong foundations for AI-led business transformation.
                </p>
              </div>
            </RevealAnimation>

            <div className="home-clients__grid home-clients__grid--clients">
              {[
                {
                  id: 'abbott',
                  name: 'Abbott',
                  logo: '/assets/Logos/Abbott.svg',
                },
                {
                  id: 'fospha',
                  name: 'FOSPHA',
                  logo: '/assets/Logos/Fospha-logo-1.png',
                },
                {
                  id: 'borosil',
                  name: 'Borosil',
                  logo: '/assets/Logos/Borosil.svg',
                },
                {
                  id: 'raymond-realty',
                  name: 'Raymond Realty',
                  logo: '/assets/Logos/Raymond Realty Go Beyond Logo (1).png',
                },
                {
                  id: 'baskin-robbins',
                  name: 'Baskin Robbins',
                  logo: '/assets/Logos/Baskin_Robbins.svg',
                },
                {
                  id: 'tata-agratas',
                  name: 'Tata Agratas',
                  logo: '/assets/Logos/logo-new_dark.webp',
                },
                {
                  id: 'kec-international',
                  name: 'KEC International',
                  logo: '/assets/Logos/KEC Logo - hi-res jpg.jpg',
                },
              ].map((client, index) => (
                <RevealAnimation key={client.name} variant="up" delayMs={50 + index * 30}>
                  <div
                    className="client-card"
                    tabIndex={0}
                    role="group"
                    aria-label={client.name}
                    title={client.name}
                  >
                    <div className="client-card__logo-area">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className={`client-brand-logo client-brand-logo--${client.id}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>

          {/* PARTNERS BLOCK */}
          <div className="home-clients__block home-clients__block--partners">
            <RevealAnimation variant="up">
              <div className="home-clients__header">
                <div className="home-clients__pill">
                  <span className="home-clients__pill-dot" aria-hidden="true" />
                  <span>OUR PARTNERS</span>
                </div>
                <h2 className="home-clients__title">Partnered with Industry Leaders</h2>
                <p className="home-clients__subtitle">
                  We partner with established organizations to combine expertise, share capabilities
                  and create greater value for businesses through meaningful, long-term partnerships.
                </p>
              </div>
            </RevealAnimation>

            <div className="home-clients__grid home-clients__grid--partners">
              {[
                {
                  id: 'spartakus',
                  name: 'Spartakus Tech',
                  logo: '/assets/Logos/Spartakus-Temporaire.png',
                },
                {
                  id: 'shi',
                  name: 'SHI',
                  logo: '/assets/Logos/SHI_International_id1CAW25_E_1.png',
                },
                {
                  id: 'bluechip',
                  name: 'Blue Chip Informatics',
                  logo: '/assets/Logos/BCinformaticslogo-2.png',
                },
                {
                  id: 'crmit',
                  name: 'CRMIT',
                  logo: '/assets/Logos/CRMIT_logo.png',
                },
                {
                  id: 'palni',
                  name: 'Palni',
                  logo: '/assets/Logos/palni_logo.png',
                },
              ].map((partner, index) => (
                <RevealAnimation key={partner.name} variant="up" delayMs={50 + index * 35}>
                  <div
                    className="client-card"
                    tabIndex={0}
                    role="group"
                    aria-label={partner.name}
                    title={partner.name}
                  >
                    <div className="client-card__logo-area">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={`client-brand-logo client-brand-logo--${partner.id}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════ 7. CLOSING CTA ═══════════════ */}
      <CTASection config={homeCta} />
    </div>
  );
};
