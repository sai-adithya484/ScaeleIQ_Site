import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  CheckCircle2,
  Database,
  Lock,
  FileCheck,
  Server,
  Layers,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { getAgentBySlug, AI_AGENTS_DATA, AgentFullData } from '../data/aiAgentsData';
import { CTASection } from '../components/sections/CTASection';
import { platformCta } from '../data/ctaContent';
import './AgentDetailPage.css';

export const AgentDetailPage: React.FC = () => {
  const { agentId } = useParams<{ agentId: string }>();
  const agent: AgentFullData | undefined = agentId ? getAgentBySlug(agentId) : undefined;

  useEffect(() => {
    if (agent) {
      document.title = `${agent.fullName} | ScaeleIQ Snowflake-Native AI Agents`;
    }
  }, [agent]);

  if (!agent) {
    return <Navigate to="/ai" replace />;
  }

  // Other agents for related navigation
  const otherAgents = AI_AGENTS_DATA.filter((a) => a.id !== agent.id);

  return (
    <div className={`page-wrapper agent-detail-page agent-detail-page--${agent.accentClass}`}>
      {/* =========================================================
          HERO SECTION
          ========================================================= */}
      <section className="agent-hero-section">
        <div className="agent-hero-bg-decor" aria-hidden="true">
          <div className={`agent-hero-orb agent-hero-orb--${agent.accentClass}`} />
          <div className="agent-hero-grid-pattern" />
        </div>

        <div className="container agent-hero-container">
          {/* Back link aligned to the left of the container, matching Case Studies */}
          <Link to="/ai#ai-agents" className="agent-back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to AI Agents</span>
          </Link>

          <div className="agent-hero-grid">
            {/* Left Column: Headings & CTAs */}
            <div className="agent-hero-content">
              <div className="agent-hero-eyebrow-block">
                <span className={`agent-hero-badge agent-hero-badge--${agent.accentClass}`}>
                  SNOWFLAKE-NATIVE AI AGENT
                </span>
                <p className="agent-hero-tagline">{agent.heroTagline}</p>
              </div>

              <h1 className="agent-hero-title">{agent.fullName}</h1>

              <p className="agent-hero-subtitle">{agent.subtitle}</p>

              <p className="agent-hero-description">{agent.cardDescription}</p>

              <div className="agent-hero-divider" aria-hidden="true" />

              <div className="agent-hero-cta-group">
                <Link to="/demo" className="agent-btn agent-btn--primary">
                  Request a Demo
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <a href="#capabilities" className="agent-btn agent-btn--secondary">
                  Explore Capabilities
                </a>
              </div>
            </div>

            {/* Right Column: Frameless 3D HD Visualization matching reference */}
            <div className="agent-hero-media">
              <img
                src={agent.heroImage}
                alt={`${agent.fullName} 3D architectural render`}
                className="agent-hero-image"
                width={1774}
                height={887}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 1: OVERVIEW & THE PAIN POINT
          ========================================================= */}
      <section className="agent-section agent-section--overview" id="overview">
        <div className="container">
          <div className="agent-section-header">
            <span className={`agent-section-eyebrow agent-section-eyebrow--${agent.accentClass}`}>
              OPERATIONAL REALITY
            </span>
            <h2 className="agent-section-heading">The Challenge in Public Sector & Enterprise</h2>
            <p className="agent-section-lead">{agent.overview.businessProblem}</p>
          </div>

          <div className="agent-pain-grid">
            {agent.painPoints.map((pain, pIdx) => (
              <div key={pIdx} className="agent-pain-card">
                <div className="agent-pain-card__num">0{pIdx + 1}</div>
                <h3 className="agent-pain-card__title">{pain.title}</h3>
                <p className="agent-pain-card__desc">{pain.agencyImpact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: KEY CAPABILITIES
          ========================================================= */}
      <section className="agent-section agent-section--capabilities" id="capabilities">
        <div className="container">
          <div className="agent-section-header">
            <span className={`agent-section-eyebrow agent-section-eyebrow--${agent.accentClass}`}>
              CORE COMPETENCIES
            </span>
            <h2 className="agent-section-heading">Engineered for Precision & Grounding</h2>
            <p className="agent-section-lead">{agent.overview.whatItDoes}</p>
          </div>

          <div className="agent-caps-grid">
            {agent.overview.keyCapabilities.map((cap, cIdx) => (
              <div key={cIdx} className="agent-cap-card">
                <div className={`agent-cap-card__icon agent-cap-card__icon--${agent.accentClass}`}>
                  <CheckCircle2 size={24} aria-hidden="true" />
                </div>
                <h3 className="agent-cap-card__title">{cap.title}</h3>
                <p className="agent-cap-card__desc">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: HOW IT WORKS & ARCHITECTURE FLOW
          ========================================================= */}
      <section className="agent-section agent-section--architecture" id="architecture">
        <div className="container">
          <div className="agent-section-header">
            <span className={`agent-section-eyebrow agent-section-eyebrow--${agent.accentClass}`}>
              END-TO-END PIPELINE
            </span>
            <h2 className="agent-section-heading">How {agent.fullName} Operates</h2>
            <p className="agent-section-lead">{agent.howItWorks.overview}</p>
          </div>

          {/* 5-Stage Stepper */}
          <div className="agent-workflow-stepper">
            {agent.overview.workflowStages.map((wf, wfIdx) => (
              <div key={wf.id} className="agent-stepper-item">
                <div className={`agent-stepper-node agent-stepper-node--${agent.accentClass}`}>
                  <span>{wf.id}</span>
                </div>
                {wfIdx < agent.overview.workflowStages.length - 1 && (
                  <div className="agent-stepper-line" aria-hidden="true" />
                )}
                <h4 className="agent-stepper-title">{wf.name}</h4>
                <p className="agent-stepper-desc">{wf.description}</p>
              </div>
            ))}
          </div>

          {/* Deep-Dive Pipeline Cards */}
          <div className="agent-pipeline-stages">
            {agent.howItWorks.stages.map((stg, sIdx) => (
              <div key={sIdx} className="agent-pipeline-card">
                <div className="agent-pipeline-card__header">
                  <span className={`agent-pipeline-card__step agent-pipeline-card__step--${agent.accentClass}`}>
                    {stg.step}
                  </span>
                </div>
                <h3 className="agent-pipeline-card__title">{stg.title}</h3>
                <p className="agent-pipeline-card__desc">{stg.description}</p>
              </div>
            ))}
          </div>

          {/* Guaranteed Architecture Principles */}
          <div className="agent-arch-callout">
            <h3 className="agent-arch-callout__title">Non-Negotiable Architecture Guardrails</h3>
            <div className="agent-arch-callout__grid">
              {agent.howItWorks.architectureNotes.map((note, nIdx) => (
                <div key={nIdx} className="agent-arch-callout__item">
                  <CheckCircle2
                    size={18}
                    className={`agent-arch-callout__icon agent-arch-callout__icon--${agent.accentClass}`}
                    aria-hidden="true"
                  />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: SUPPORTED INPUTS, PROCESSING & OUTPUTS
          ========================================================= */}
      <section className="agent-section agent-section--inputs-outputs" id="inputs-outputs">
        <div className="container">
          <div className="agent-section-header">
            <span className={`agent-section-eyebrow agent-section-eyebrow--${agent.accentClass}`}>
              INTEGRATION SURFACE
            </span>
            <h2 className="agent-section-heading">Supported Inputs, Models & Storage</h2>
            <p className="agent-section-lead">
              Natively connects to the platforms where your data currently resides, transforming unstructured inputs into governed Snowflake schemas.
            </p>
          </div>

          <div className="agent-io-grid">
            {/* Box 1: Ingestion Sources */}
            <div className="agent-io-box">
              <div className="agent-io-box__header">
                <Server size={20} className="agent-io-box__icon" aria-hidden="true" />
                <h3 className="agent-io-box__title">Supported Input Sources</h3>
              </div>
              <ul className="agent-io-box__list">
                {agent.inputsOutputs.inputs.map((inp, idx) => (
                  <li key={idx} className="agent-io-box__item">
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>{inp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Snowflake Engine */}
            <div className="agent-io-box">
              <div className="agent-io-box__header">
                <Layers size={20} className="agent-io-box__icon" aria-hidden="true" />
                <h3 className="agent-io-box__title">Processing & Cortex Services</h3>
              </div>
              <ul className="agent-io-box__list">
                {agent.inputsOutputs.processingEngine.map((engine, idx) => (
                  <li key={idx} className="agent-io-box__item">
                    <Database size={15} aria-hidden="true" />
                    <span>{engine}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: Storage Schema */}
            <div className="agent-io-box">
              <div className="agent-io-box__header">
                <Database size={20} className="agent-io-box__icon" aria-hidden="true" />
                <h3 className="agent-io-box__title">Governed Storage Schema</h3>
              </div>
              <ul className="agent-io-box__list">
                {agent.inputsOutputs.storageSchema.map((schema, idx) => (
                  <li key={idx} className="agent-io-box__item">
                    <span className="agent-io-box__code-dot" />
                    <code>{schema}</code>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 4: Delivered Outputs */}
            <div className="agent-io-box">
              <div className="agent-io-box__header">
                <Sparkles size={20} className="agent-io-box__icon" aria-hidden="true" />
                <h3 className="agent-io-box__title">Generated Outputs & Channels</h3>
              </div>
              <ul className="agent-io-box__list">
                {agent.inputsOutputs.outputs.map((out, idx) => (
                  <li key={idx} className="agent-io-box__item">
                    <FileCheck size={15} aria-hidden="true" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: MISSION USE CASES
          ========================================================= */}
      <section className="agent-section agent-section--usecases" id="use-cases">
        <div className="container">
          <div className="agent-section-header">
            <span className={`agent-section-eyebrow agent-section-eyebrow--${agent.accentClass}`}>
              PROVEN DEPLOYMENTS
            </span>
            <h2 className="agent-section-heading">Mission Areas & Agency Workflows</h2>
            <p className="agent-section-lead">
              Tailored use cases designed for public-sector programs, regulatory enforcement, and enterprise operations.
            </p>
          </div>

          <div className="agent-usecases-showcase">
            {agent.useCases.map((uc, uIdx) => (
              <article key={uIdx} className="agent-usecase-tile">
                <div className="agent-usecase-tile__top">
                  <span className={`agent-usecase-tile__badge agent-usecase-tile__badge--${agent.accentClass}`}>
                    Area 0{uIdx + 1}
                  </span>
                  <h3 className="agent-usecase-tile__title">{uc.area}</h3>
                </div>

                <div className="agent-usecase-tile__body">
                  <div className="agent-usecase-tile__row">
                    <span className="agent-usecase-tile__label">Target Documents:</span>
                    <p className="agent-usecase-tile__val">{uc.documents}</p>
                  </div>

                  <div className="agent-usecase-tile__row agent-usecase-tile__row--quote">
                    <span className="agent-usecase-tile__label">Example Query:</span>
                    <blockquote className="agent-usecase-tile__quote">{uc.sampleQuestion}</blockquote>
                  </div>

                  <div className="agent-usecase-tile__impact">
                    <span className="agent-usecase-tile__impact-tag">Impact:</span>
                    <span className="agent-usecase-tile__impact-text">{uc.businessImpact}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: INTERACTIVE EXAMPLE Q&A WALKTHROUGH
          ========================================================= */}
      <section className="agent-section agent-section--qa" id="example-qa">
        <div className="container">
          <div className="agent-section-header">
            <span className={`agent-section-eyebrow agent-section-eyebrow--${agent.accentClass}`}>
              VERIFIED GROUNDING
            </span>
            <h2 className="agent-section-heading">Auditable Example Q&A Walkthrough</h2>
            <p className="agent-section-lead">
              Examine how {agent.fullName} answers complex enterprise inquiries by synthesizing structured fields and citing exact source artifacts.
            </p>
          </div>

          <div className="agent-qa-container">
            {agent.exampleQAs.map((qaItem, qIdx) => (
              <div key={qIdx} className="agent-qa-detail-card">
                <div className="agent-qa-detail-card__meta">
                  <span className="agent-qa-detail-card__role">
                    Target Role: <strong>{qaItem.userRole}</strong>
                  </span>
                  <span className="agent-qa-detail-card__tag">Illustrative Grounded Walkthrough</span>
                </div>

                <div className="agent-qa-detail-card__query">
                  <HelpCircle size={22} className="agent-qa-detail-card__query-icon" aria-hidden="true" />
                  <h3 className="agent-qa-detail-card__question">{qaItem.question}</h3>
                </div>

                <div className="agent-qa-detail-card__answer-box">
                  <span className="agent-qa-detail-card__label">
                    {agent.fullName} Response (Grounded Synthesis):
                  </span>
                  <div className="agent-qa-detail-card__text">
                    {qaItem.response.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx} className="agent-qa-detail-card__para">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="agent-qa-detail-card__provenance">
                  <div className="agent-qa-detail-card__cit-header">
                    <FileCheck size={16} aria-hidden="true" />
                    <span>Verified Source Citations:</span>
                  </div>
                  <ul className="agent-qa-detail-card__cit-list">
                    {qaItem.citations.map((c, cIdx) => (
                      <li key={cIdx} className="agent-qa-detail-card__cit-item">
                        <code>{c}</code>
                      </li>
                    ))}
                  </ul>
                  <p className="agent-qa-detail-card__note">
                    <strong>Provenance Note:</strong> {qaItem.groundingDetail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: GOVERNANCE & SECURITY (SNOWFLAKE HORIZON)
          ========================================================= */}
      <section className="agent-section agent-section--governance" id="governance">
        <div className="container">
          <div className="agent-section-header">
            <span className={`agent-section-eyebrow agent-section-eyebrow--${agent.accentClass}`}>
              SECURITY & COMPLIANCE
            </span>
            <h2 className="agent-section-heading">Snowflake Horizon Governance</h2>
            <p className="agent-section-lead">{agent.governance.overview}</p>
          </div>

          <div className="agent-gov-grid">
            {agent.governance.controls.map((ctrl, cIdx) => (
              <div key={cIdx} className="agent-gov-box">
                <div className="agent-gov-box__badge-row">
                  <span className={`agent-gov-box__badge agent-gov-box__badge--${agent.accentClass}`}>
                    <Lock size={12} aria-hidden="true" />
                    {ctrl.snowflakeFeature}
                  </span>
                </div>
                <h3 className="agent-gov-box__title">{ctrl.title}</h3>
                <p className="agent-gov-box__desc">{ctrl.description}</p>
              </div>
            ))}
          </div>

          <div className="agent-gov-compliance-banner">
            <div className="agent-gov-compliance-banner__icon">
              <Shield size={28} aria-hidden="true" />
            </div>
            <div className="agent-gov-compliance-banner__text">
              <h3 className="agent-gov-compliance-banner__title">Regulatory & Federal Compliance</h3>
              <p className="agent-gov-compliance-banner__desc">{agent.governance.complianceNotice}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPLORE OTHER AGENTS
          ========================================================= */}
      <section className="agent-section agent-section--other-agents">
        <div className="container">
          <div className="agent-section-header">
            <span className="agent-section-eyebrow">EXPLORE ECOSYSTEM</span>
            <h2 className="agent-section-heading">Other Purpose-Built AI Agents</h2>
          </div>

          <div className="agent-other-grid">
            {otherAgents.map((other) => (
              <Link key={other.id} to={other.route} className="agent-other-card">
                <div className="agent-other-card__content">
                  <span className={`agent-other-card__badge agent-other-card__badge--${other.accentClass}`}>
                    {other.titlePrimary} Agent
                  </span>
                  <h3 className="agent-other-card__title">{other.fullName}</h3>
                  <p className="agent-other-card__desc">{other.cardDescription}</p>
                </div>
                <div className="agent-other-card__arrow">
                  <ArrowRight size={20} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Standard CTA Section */}
      <CTASection config={platformCta} />
    </div>
  );
};
