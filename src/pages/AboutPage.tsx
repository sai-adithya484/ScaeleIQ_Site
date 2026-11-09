import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import {
  Layers,
  Sparkles,
  BarChart3,
  Zap,
  Users,
  Shield,
  ArrowUpRight
} from 'lucide-react';
import './AboutPage.css';

export interface Leader {
  name: string;
  role: string;
  initials: string;
  image?: string | null;
}

const leadershipTeam: Leader[] = [
  {
    name: 'Ramakrishna S',
    role: 'FOUNDER',
    initials: 'RS',
    image: null, // Set to '/assets/leadership/ramakrishna-s.webp' when photo is added
  },
  {
    name: 'Warner Burzer',
    role: 'CTO',
    initials: 'WB',
    image: null, // Set to '/assets/leadership/warner-burzer.webp' when photo is added
  },
  {
    name: 'Jeff Mario',
    role: 'CRO',
    initials: 'JM',
    image: null, // Set to '/assets/leadership/jeff-mario.webp' when photo is added
  },
];

const LeaderAvatar: React.FC<{ leader: Leader }> = ({ leader }) => {
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(leader.image) && !imgError;

  return (
    <div className="about-leader-card__portrait-wrap">
      {/* 1. Full 4:5 Initials Fallback */}
      <div className="about-leader-card__initials" aria-hidden={showImage}>
        <span className="about-leader-card__initials-text">{leader.initials}</span>
      </div>

      {/* 2. Full 4:5 Photograph (if configured and valid) */}
      {leader.image && !imgError && (
        <img
          src={leader.image}
          alt={leader.name}
          className="about-leader-card__photo"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
};

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Company — SCAELEIQ';
  }, []);

  return (
    <div className="page-wrapper about-page">
      {/* ═══════════════ 1. HERO ═══════════════ */}
      <section className="about-hero">
        <div className="about-hero__content">
          <RevealAnimation variant="up">
            <div className="about-hero__inner">
              <span className="about-hero__eyebrow">OUR COMPANY</span>

              <h1 className="about-hero__title">
                Engineering Real<br />
                Business <br className="about-hero__title-mobile-br" />Transformation<br />
                <span className="about-hero__title-accent">with Data and AI</span>
              </h1>

              <p className="about-hero__desc">
                SCAELEIQ modernizes enterprise data foundations and operationalizes AI to solve complex business challenges at scale.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ═══════════════ 2. WHO WE ARE ═══════════════ */}
      <section className="about-who">
        <div className="container">
          <RevealAnimation variant="up">
            <div className="about-who__grid">
              {/* Left Column */}
              <div className="about-who__left">
                <span className="about-eyebrow">WHO WE ARE</span>
                <h2 className="about-who__title">
                  A Modern Engineering Partner for the Data and AI Era
                </h2>
                <div className="about-who__accent-line" />
              </div>

              {/* Vertical Divider */}
              <div className="about-who__divider" aria-hidden="true" />

              {/* Right Column */}
              <div className="about-who__right">
                <p className="about-who__desc">
                  We help enterprises turn their data into a strategic asset — by modernizing data platforms, building intelligent data products, and deploying autonomous AI systems that deliver measurable business value.
                </p>

                <div className="about-who__highlights">
                  <div className="about-who__highlight-item">
                    <div className="about-who__icon-wrap">
                      <Layers size={22} />
                    </div>
                    <span className="about-who__highlight-label">
                      Modernize Data Platforms
                    </span>
                  </div>

                  <div className="about-who__highlight-item">
                    <div className="about-who__icon-wrap">
                      <Sparkles size={22} />
                    </div>
                    <span className="about-who__highlight-label">
                      Operationalize AI at Scale
                    </span>
                  </div>

                  <div className="about-who__highlight-item">
                    <div className="about-who__icon-wrap">
                      <BarChart3 size={22} />
                    </div>
                    <span className="about-who__highlight-label">
                      Deliver Business Impact
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ═══════════════ 3. LEADERSHIP ═══════════════ */}
      <section className="about-leadership">
        <div className="container">
          <RevealAnimation variant="up">
            <div className="about-leadership__header">
              <div className="about-leadership__title-wrap">
                <span className="about-eyebrow">LEADERSHIP</span>
                <h2 className="about-leadership__title">Our Leadership Team</h2>
              </div>
              <p className="about-leadership__supporting">
                A focused leadership team with deep expertise in enterprise technology, data, and AI.
              </p>
            </div>
          </RevealAnimation>

          <div className="about-leadership__grid">
            {leadershipTeam.map((leader, index) => (
              <RevealAnimation key={leader.name} variant="up" delayMs={50 * (index + 1)}>
                <div className="about-leader-card">
                  <LeaderAvatar leader={leader} />
                  <div className="about-leader-card__content">
                    <h3 className="about-leader-card__name">{leader.name}</h3>
                    <span className="about-leader-card__role">{leader.role}</span>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 4. OUR PRINCIPLES ═══════════════ */}
      <section className="about-principles">
        <div className="container">
          <RevealAnimation variant="up">
            <div className="about-principles__header">
              <span className="about-eyebrow">OUR PRINCIPLES</span>
              <h2 className="about-principles__title">The Values That Guide Us</h2>
            </div>
          </RevealAnimation>

          <RevealAnimation variant="up" delayMs={100}>
            <div className="about-principles__row">
              {/* Value 1 */}
              <div className="about-principle-item">
                <div className="about-principle-item__icon-wrap">
                  <Zap size={26} />
                </div>
                <div className="about-principle-item__content">
                  <h3 className="about-principle-item__title">Innovation First</h3>
                  <p className="about-principle-item__desc">
                    We build for what's next, not just what's now.
                  </p>
                </div>
              </div>

              <div className="about-principles__divider" aria-hidden="true" />

              {/* Value 2 */}
              <div className="about-principle-item">
                <div className="about-principle-item__icon-wrap">
                  <Users size={26} />
                </div>
                <div className="about-principle-item__content">
                  <h3 className="about-principle-item__title">Customer Obsession</h3>
                  <p className="about-principle-item__desc">
                    Real problems. Real impact. That's our focus.
                  </p>
                </div>
              </div>

              <div className="about-principles__divider" aria-hidden="true" />

              {/* Value 3 */}
              <div className="about-principle-item">
                <div className="about-principle-item__icon-wrap">
                  <Shield size={26} />
                </div>
                <div className="about-principle-item__content">
                  <h3 className="about-principle-item__title">Trust & Integrity</h3>
                  <p className="about-principle-item__desc">
                    We do what's right, always.
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ═══════════════ 5. SCAELEIQ AT A GLANCE ═══════════════ */}
      <section className="about-glance-section">
        <div className="container">
          <RevealAnimation variant="large">
            <div className="about-glance-panel">
              {/* Left Side */}
              <div className="about-glance-panel__left">
                <span className="about-eyebrow">SCAELEIQ AT A GLANCE</span>
                <h2 className="about-glance-panel__title">
                  A Focused, High-Impact Technology Company
                </h2>
              </div>

              {/* Right Side: Non-numeric descriptors */}
              <div className="about-glance-panel__metrics">
                <div className="about-glance-metric">
                  <span className="about-glance-metric__value">Enterprise</span>
                  <span className="about-glance-metric__label">Focused</span>
                </div>

                <div className="about-glance-panel__divider" aria-hidden="true" />

                <div className="about-glance-metric">
                  <span className="about-glance-metric__value">AI</span>
                  <span className="about-glance-metric__label">Intelligent Execution</span>
                </div>

                <div className="about-glance-panel__divider" aria-hidden="true" />

                <div className="about-glance-metric">
                  <span className="about-glance-metric__value">Business</span>
                  <span className="about-glance-metric__label">Impact</span>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ═══════════════ 6. FINAL CTA ═══════════════ */}
      <section className="about-cta-section">
        <div className="container">
          <RevealAnimation variant="large">
            <div className="about-cta-card">
              <div className="about-cta-card__content">
                <span className="about-cta-card__eyebrow">LET'S CONNECT</span>
                <h2 className="about-cta-card__heading">Build What's Next Together</h2>
                <p className="about-cta-card__desc">
                  Partner with SCAELEIQ to modernize your data, operationalize AI, and drive lasting business impact.
                </p>
                <Link to="/contact" className="about-cta-card__btn">
                  <span>Get in Touch</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </div>
  );
};
