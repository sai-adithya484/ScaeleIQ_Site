import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui/Button';
import {
  LucideIcon,
  Layers,
  GitFork,
  Database,
  Users,
  Clock,
  Cloud,
  GitMerge,
  BarChart3
} from 'lucide-react';
import './DataPage.css';

/* ── Our Expertise Data ── */
interface ExpertiseCard {
  number: string;
  title: string;
  desc: string;
  img: string;
  icon: LucideIcon;
}

const expertiseCards: ExpertiseCard[] = [
  {
    number: '01',
    title: 'ETL & ELT Pipeline Development',
    desc: 'Design automated ETL and ELT workflows that ensure scalable, reliable data movement across your enterprise ecosystem. Build production-grade pipelines using modern orchestration, dbt, and cloud platforms.',
    img: '/assets/expertise/etl-pipeline.jpg',
    icon: GitFork
  },
  {
    number: '02',
    title: 'Big Data Engineering',
    desc: 'Build scalable big data solutions to process, store, and analyze massive volumes of structured and unstructured data. Leverage modern distributed frameworks, real-time streaming, and lakehouse storage.',
    img: '/assets/expertise/big-data.jpg',
    icon: Database
  },
  {
    number: '03',
    title: 'Cloud Data Modernization',
    desc: 'Modernize legacy data infrastructure with secure, cloud-native architectures on AWS, Azure, and Google Cloud. Migrate databases, optimize query performance, and reduce infrastructure total cost of ownership.',
    img: '/assets/expertise/cloud-modernization.jpg',
    icon: Cloud
  },
  {
    number: '04',
    title: 'Data Architecture Design',
    desc: 'Create future-ready data lakehouse and warehouse architectures tailored to your business model. Establish unified schema standards, modular data domains, and scalable foundation layers.',
    img: '/assets/expertise/data-architecture.jpg',
    icon: Layers
  },
  {
    number: '05',
    title: 'Data Integration & Transformation',
    desc: 'Unify fragmented data across disparate SaaS tools, ERPs, and legacy applications using robust integration patterns, DataOps methodologies, and automated transformation pipelines.',
    img: '/assets/expertise/data-integration.jpg',
    icon: GitMerge
  },
  {
    number: '06',
    title: 'Analytics & BI Enablement',
    desc: 'Enable confident, data-driven decisions with modern BI dashboards, semantic metrics layers, and self-service analytics models that deliver clear insights to business stakeholders.',
    img: '/assets/expertise/analytics-bi.jpg',
    icon: BarChart3
  }
];

/* ── Engagement Models Data ── */
interface EngagementModel {
  number: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

const engagementModels: EngagementModel[] = [
  {
    number: '01',
    title: 'Dedicated Engineering Team',
    desc: 'Extend your engineering capabilities with experienced data professionals who work alongside your team, follow your delivery processes, and contribute to your technical objectives.',
    icon: Users
  },
  {
    number: '02',
    title: 'Flexible Engineering Support',
    desc: 'Scale engineering capacity around your project requirements, with the flexibility to adapt priorities, workloads, and delivery timelines as your needs evolve.',
    icon: Clock
  },
  {
    number: '03',
    title: 'End-to-End Project Delivery',
    desc: 'Engage SCAELEIQ to plan and deliver defined data engineering initiatives, from technical design and implementation through validation and handover.',
    icon: Layers
  }
];

/* ── No-Code ELT Framework Data ── */
interface FrameworkBlock {
  title: string;
  desc: string;
}

interface FrameworkPhase {
  number: string;
  name: string;
  title: string;
  blocks: FrameworkBlock[];
}

const frameworkPhases: FrameworkPhase[] = [
  {
    number: '01',
    name: 'Data Discovery',
    title: 'Data Discovery',
    blocks: [
      {
        title: 'Source & Requirements Assessment',
        desc: 'Evaluate enterprise source systems, databases, applications and available datasets while translating business requirements into a clear data modernization scope.'
      },
      {
        title: 'Data Profiling & Architecture Planning',
        desc: 'Examine schemas, data relationships, completeness, freshness and quality characteristics to establish the target architecture and prioritize the datasets that need attention.'
      }
    ]
  },
  {
    number: '02',
    name: 'Data Ingestion',
    title: 'Data Ingestion',
    blocks: [
      {
        title: 'Source Connectivity & Configuration',
        desc: 'Establish connections with enterprise databases, applications and supported data sources, configuring the appropriate ingestion settings for each source.'
      },
      {
        title: 'Data Loading & Validation',
        desc: 'Configure suitable batch or incremental loading patterns, verify incoming records and identify ingestion exceptions before data moves into transformation workflows.'
      }
    ]
  },
  {
    number: '03',
    name: 'Data Transformation',
    title: 'Data Transformation',
    blocks: [
      {
        title: 'Visual Transformation & Standardization',
        desc: 'Design and configure transformation workflows that organize raw data, align schemas, standardize formats and apply reusable processing logic.'
      },
      {
        title: 'Quality Controls & Business-Ready Models',
        desc: 'Apply appropriate validation rules and consistency checks, then structure transformed datasets into dependable models for analytics and downstream consumption.'
      }
    ]
  },
  {
    number: '04',
    name: 'Pipeline Development',
    title: 'Pipeline Development',
    blocks: [
      {
        title: 'Workflow Design & Orchestration',
        desc: 'Connect ingestion and transformation activities into coordinated ELT workflows, defining execution sequences and dependencies between processing stages.'
      },
      {
        title: 'Scheduling, Monitoring & Recovery',
        desc: 'Configure workflow scheduling and execution monitoring, making it easier to identify failures, investigate exceptions and validate pipeline outcomes.'
      }
    ]
  },
  {
    number: '05',
    name: 'Data Deployment',
    title: 'Data Deployment',
    blocks: [
      {
        title: 'Production Delivery & Integration',
        desc: 'Prepare and publish validated datasets into their intended target environments, ensuring that downstream applications and analytics platforms can consume the required data.'
      },
      {
        title: 'Deployment Validation & Operational Readiness',
        desc: 'Verify deployed data for completeness and consistency, and establish suitable monitoring and maintenance practices for reliable ongoing operation.'
      }
    ]
  }
];

/* ── ELT Framework Showcase Features ── */
interface ShowcaseFeature {
  number: string;
  title: string;
  desc: string;
}

const showcaseFeatures: ShowcaseFeature[] = [
  {
    number: '01',
    title: 'Pre-Built Connectors',
    desc: 'Connect enterprise databases, applications, cloud platforms and source systems through ready-to-use integrations.'
  },
  {
    number: '02',
    title: 'Reusable Transformation Models',
    desc: 'Accelerate data preparation with pre-configured transformation logic and reusable models.'
  },
  {
    number: '03',
    title: 'Automated Pipeline Orchestration',
    desc: 'Coordinate pipeline execution, dependencies and schedules through a unified workflow.'
  },
  {
    number: '04',
    title: 'Built-In Data Quality',
    desc: 'Apply validation, standardization and consistency checks throughout data processing.'
  },
  {
    number: '05',
    title: 'Enterprise-Ready Architecture',
    desc: 'Support scalable data processing across cloud data platforms and enterprise environments.'
  },
  {
    number: '06',
    title: 'Analytics-Ready Data',
    desc: 'Prepare governed, structured data for reporting, business intelligence and AI workloads.'
  }
];

export const DataPage: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.title = 'Enterprise Data Infrastructure & Modernization | SCAELEIQ';
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="page-wrapper data-page">
      {/* ═══════════════ 0. APPROVED DATA HERO SECTION ═══════════════ */}
      <section className="data-hero" aria-label="Data Engineering and Modernization">
        {/* Dedicated Right-Side Artwork Layer (Complete Image, No Right-Edge Cropping) */}
        <div className="data-hero__art-wrap" aria-hidden="true">
          <img
            src="/assets/Neon Isometric Data Network.png"
            alt=""
            className="data-hero__art-img"
            fetchPriority="high"
          />
        </div>

        <div className="data-hero__bg-overlay" aria-hidden="true" />

        <div className="data-hero__container">
          <div className="data-hero__content">
            <div className="data-hero__eyebrow-wrap">
              <span className="data-hero__eyebrow">DATA ENGINEERING &amp; MODERNIZATION</span>
              <span className="data-hero__eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="data-hero__title">
              <span className="data-hero__title-line data-hero__title-line--white">Build a Modern,</span>
              <span className="data-hero__title-line data-hero__title-line--cyan">AI-Ready Data</span>
              <span className="data-hero__title-line data-hero__title-line--white">Foundation</span>
            </h1>

            <p className="data-hero__desc">
              Modernize enterprise data with trusted engineering and seamless integration across systems.
            </p>

            <div className="data-hero__actions">
              <Button
                href="#capabilities"
                variant="primary"
                size="lg"
                showArrow={false}
                className="data-hero__btn data-hero__btn--primary"
              >
                Explore Our Capabilities
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                showArrow={true}
                className="data-hero__btn data-hero__btn--secondary"
              >
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION: OUR EXPERTISE ═══════════════ */}
      <section className="data-expertise" id="expertise" aria-label="Our Data Engineering Expertise">
        <div className="container">
          {/* Header Row: Left Title & Right Aligned Description */}
          <div className="data-expertise__header">
            <div className="data-expertise__header-left">
              <span className="data-eyebrow">OUR EXPERTISE</span>
              <h2 className="data-expertise__title">
                We optimize the entire <span className="data-expertise__highlight">data lifecycle</span>.
              </h2>
            </div>
            <p className="data-expertise__desc">
              From data pipelines and architecture to cloud modernization and analytics, we build connected,<br className="data-expertise__desc-br" /> reliable data foundations that help enterprises turn complex data into business value.
            </p>
          </div>

          {/* 6 Expertise Cards (3 columns x 2 rows) */}
          <div className="data-expertise__grid">
            {expertiseCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.number} className="data-expertise-card">
                  <div className="data-expertise-card__media">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="data-expertise-card__img"
                      loading="lazy"
                    />
                  </div>
                  <div className="data-expertise-card__body">
                    <div className="data-expertise-card__meta">
                      <div className="data-expertise-card__icon-badge" aria-hidden="true">
                        <Icon size={18} strokeWidth={2.2} />
                      </div>
                      <span className="data-expertise-card__number">{card.number}</span>
                    </div>
                    <h3 className="data-expertise-card__title">{card.title}</h3>
                    <p className="data-expertise-card__desc">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION: ENGAGEMENT MODELS ═══════════════ */}
      <section className="data-models" id="engagement-models" aria-label="Engagement Models">
        <div className="container data-models__container">
          {/* Section Heading & Intro */}
          <div className="data-models__header">
            <div className="data-models__header-left">
              <div className="data-models__eyebrow-wrap">
                <span className="data-models__eyebrow">ENGAGEMENT MODELS</span>
                <span className="data-models__eyebrow-line" aria-hidden="true" />
              </div>
              <h2 className="data-models__title">
                Flexible models built around <span className="data-models__highlight">your goals</span>.
              </h2>
            </div>

            <p className="data-models__desc">
              Choose a delivery model that fits your objectives — from dedicated<br className="data-models__desc-br" /> engineering expertise to flexible execution and outcome-driven projects.
            </p>
          </div>

          {/* 3 Engagement Cards */}
          <div className="data-models__grid">
            {engagementModels.map((model) => {
              const Icon = model.icon;
              return (
                <div key={model.number} className="data-model-card">
                  <div className="data-model-card__meta">
                    <div className="data-model-card__icon-badge" aria-hidden="true">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <span className="data-model-card__number">{model.number}</span>
                  </div>
                  <h3 className="data-model-card__title">{model.title}</h3>
                  <p className="data-model-card__desc">{model.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Section CTA */}
          <div className="data-models__cta-wrap">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="data-models__btn"
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION: NO-CODE ELT FRAMEWORK (METHODOLOGY) ═══════════════ */}
      <section className="data-framework" id="framework" aria-label="No-Code ELT Framework">
        <div className="container">
          {/* Section Header */}
          <div className="data-framework__header">
            <div className="data-framework__header-left">
              <div className="data-framework__eyebrow-wrap">
                <span className="data-framework__eyebrow">STANDARD PRACTICES</span>
                <span className="data-framework__eyebrow-line" aria-hidden="true" />
              </div>
              <h2 className="data-framework__title">
                A Proven No-Code ELT Framework{' '}
                <br className="data-framework__title-br" />
                for <span className="data-framework__highlight">Enterprise Data Modernization</span>
              </h2>
            </div>

            <p className="data-framework__desc">
              A structured, no-code approach to discovering, ingesting, transforming and deploying{' '}
              <br className="data-framework__desc-br" />
              enterprise data — reducing manual effort while accelerating modernization.
            </p>
          </div>

          {/* Interactive Two-Column Methodology */}
          <div className="data-framework__content">
            {/* Left Column: 5 Step Selectors */}
            <div className="data-framework__steps" role="tablist" aria-label="ELT Framework Phases">
              {frameworkPhases.map((phase, idx) => {
                const isActive = idx === activePhase;
                return (
                  <button
                    key={phase.number}
                    type="button"
                    role="tab"
                    id={`phase-tab-${phase.number}`}
                    aria-selected={isActive}
                    aria-controls={`phase-panel-${phase.number}`}
                    onClick={() => setActivePhase(idx)}
                    className={`data-framework__step-btn ${isActive ? 'data-framework__step-btn--active' : ''}`}
                  >
                    <span className="data-framework__step-number">{phase.number}</span>
                    <span className="data-framework__step-name">{phase.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detail Panel */}
            <div
              className="data-framework__panel"
              id={`phase-panel-${frameworkPhases[activePhase].number}`}
              role="tabpanel"
              aria-labelledby={`phase-tab-${frameworkPhases[activePhase].number}`}
            >
              <div className="data-framework__phase-tag">
                PHASE {frameworkPhases[activePhase].number}
              </div>
              <h3 className="data-framework__phase-heading">
                {frameworkPhases[activePhase].title}
              </h3>

              <div className="data-framework__blocks">
                {frameworkPhases[activePhase].blocks.map((block, bIdx) => (
                  <div key={bIdx} className="data-framework__block">
                    <div className="data-framework__block-bar" aria-hidden="true" />
                    <div className="data-framework__block-content">
                      <h4 className="data-framework__block-title">{block.title}</h4>
                      <p className="data-framework__block-desc">{block.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION: ELT FRAMEWORK SHOWCASE ═══════════════ */}
      <section className="data-showcase" id="framework-showcase" aria-label="ELT Framework Showcase">
        <div className="container">
          {/* Section Heading */}
          <div className="data-showcase__header">
            <div className="data-showcase__header-left">
              <div className="data-showcase__eyebrow-wrap">
                <span className="data-showcase__eyebrow">OUR FRAMEWORK</span>
                <span className="data-showcase__eyebrow-line" aria-hidden="true" />
              </div>
              <h2 className="data-showcase__title">
                A Smarter Way to<br className="data-showcase__title-br" />{' '}
                <span className="data-showcase__highlight">Modernize Enterprise Data</span>
              </h2>
            </div>
            <p className="data-showcase__desc">
              Bring your enterprise data into a unified, trusted and analytics-ready environment through a structured, pre-built ELT framework.
            </p>
          </div>

          {/* Main Showcase Panel */}
          <div className="data-showcase__panel">
            {/* Left Side — ELT framework features */}
            <div className="data-showcase__content">
              <h3 className="data-showcase__panel-title">
                The SCAELEIQ Pre-Built ELT Framework
              </h3>
              <p className="data-showcase__panel-desc">
                Accelerate enterprise data modernization with reusable integrations, intelligent automation, built-in quality controls and a scalable architecture designed for analytics-ready data.
              </p>

              {/* 6 Feature Areas */}
              <div className="data-showcase__features">
                {showcaseFeatures.map((feat) => (
                  <div key={feat.number} className="data-showcase__feature">
                    <span className="data-showcase__feature-num">{feat.number}</span>
                    <div className="data-showcase__feature-body">
                      <h4 className="data-showcase__feature-title">{feat.title}</h4>
                      <p className="data-showcase__feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Action */}
              <div className="data-showcase__action">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  showArrow={true}
                  className="data-showcase__btn"
                >
                  Discuss Your Data Modernization
                </Button>
              </div>
            </div>

            {/* Right Side — Framework Visual (Video) */}
            <div className="data-showcase__visual">
              <video
                ref={videoRef}
                className="data-showcase__video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/assets/data/framework-video-poster.jpg"
                aria-label="SCAELEIQ Pre-Built ELT Framework Architecture and Operations"
              >
                <source src="/assets/183108-870151713.mp4" type="video/mp4" />
              </video>
              <div className="data-showcase__visual-overlay" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION: FINAL DARK CTA ═══════════════ */}
      <section className="data-final-cta" aria-label="Ready to Modernize">
        <div className="container">
          <div className="data-final-cta__panel">
            <div className="data-final-cta__glow" aria-hidden="true" />
            <div className="data-final-cta__content">
              <span className="data-final-cta__eyebrow">READY TO MODERNIZE?</span>
              <h2 className="data-final-cta__title">
                Move Your Enterprise <span className="data-final-cta__highlight">Data Forward.</span>
              </h2>
              <p className="data-final-cta__desc">
                Bring your data modernization goals to life with SCAELEIQ's pre-built ELT framework. Simplify complex data workflows, establish trusted data foundations and prepare your enterprise for what's next.
              </p>
              <div className="data-final-cta__actions">
                <Button
                  to="/demo"
                  variant="primary"
                  size="lg"
                  showArrow={true}
                  className="data-final-cta__btn data-final-cta__btn--primary"
                >
                  Request a Demo
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                  showArrow={true}
                  className="data-final-cta__btn data-final-cta__btn--secondary"
                >
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
