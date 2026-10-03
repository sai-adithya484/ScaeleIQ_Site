import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { RevealAnimation } from '../ui/RevealAnimation';
import {
  DirectFlowVisual,
  Govern360Visual,
  SemantIQVisual,
  CharlieVisual,
  SAPConnectVisual,
  Hub360Visual,
} from './SolutionVisuals';
import './SolutionShowcase.css';

export interface SolutionMetric {
  value: string;
  label: string;
}

export interface SolutionItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
  metrics: SolutionMetric[];
  visualType: 'direct-flow' | 'govern360' | 'sematiq' | 'charlie' | 'sap-connect' | 'hub360';
}

export const solutionsData: SolutionItem[] = [
  {
    id: 'direct-flow',
    category: 'ENTERPRISE DATA MIGRATION & MODERNIZATION',
    title: 'Direct Flow',
    subtitle: 'Move Enterprise Data.\nModernize Without Limits.',
    description:
      'An intelligent migration platform to move data from any enterprise source to Snowflake, Databricks or other modern data platforms using AWS, Azure or GCP as a flexible staging layer.',
    points: [
      'Multi-source connectivity',
      'High-performance migration',
      'Automated schema mapping',
      'Data validation & reconciliation',
      'Cloud-agnostic staging',
      'Minimal manual effort',
    ],
    ctaLabel: 'Explore Direct Flow',
    ctaHref: '/demo',
    metrics: [],
    visualType: 'direct-flow',
  },
  {
    id: 'govern360',
    category: 'AI-POWERED DATA GOVERNANCE',
    title: 'Govern360',
    subtitle: 'Discover. Govern. Trust.\nAcross Your Data Ecosystem.',
    description:
      'An AI-powered Data Governance Platform that brings together data discovery, governance, metadata management, quality monitoring, and observability into a unified experience.',
    points: [
      'Data Profiling — intelligent structural and completeness analysis',
      'Business Glossary — consistent definitions for KPIs and metrics',
      'Data Dictionary — column-level documentation and lineage',
      'Data Quality — validation rules, quality scoring, and tracking',
      'Data Observability — pipeline health, freshness, and anomaly alerts',
    ],
    ctaLabel: 'Explore Govern360',
    ctaHref: '/demo',
    metrics: [],
    visualType: 'govern360',
  },
  {
    id: 'semantiq',
    category: 'SEMANTIC LAYER AUTOMATION · AI AGENT',
    title: 'SemantIQ',
    subtitle: 'Turn Scattered Schemas Into\nOne Shared Meaning.',
    description:
      'An always-on AI agent that reads schema, sample data, and usage patterns to infer real business meaning — automating the semantic layer that every AI initiative needs.',
    points: [
      'Automated entity & relationship discovery',
      'Business glossary & metric standardization',
      'Continuous sync & schema drift detection',
      'Natural-language to semantic query mapping',
      'Governance & version control',
      'Multi-source schema unification',
    ],
    ctaLabel: 'Explore SemantIQ',
    ctaHref: '/demo',
    metrics: [],
    visualType: 'sematiq',
  },
  {
    id: 'charlie',
    category: 'NATURAL LANGUAGE DATA INTELLIGENCE',
    title: 'Charlie',
    subtitle: 'Ask Your Data Anything.',
    description:
      'Charlie is your AI data copilot that connects to your data, understands your questions, generates SQL, executes it safely and delivers clear answers and insights.',
    points: [
      'Natural language to SQL',
      'Context-aware answers',
      'Connects to your live data',
      'Visual insights & charts',
      'Intelligent query execution',
      'Enterprise-grade security',
    ],
    ctaLabel: 'Meet Charlie',
    ctaHref: '/demo',
    metrics: [
      { value: '2–5s', label: 'Average Response' },
      { value: '95%+', label: 'Query Accuracy' },
      { value: '10x', label: 'Faster Insights' },
      { value: 'Works With', label: 'Your Data' },
    ],
    visualType: 'charlie',
  },
  {
    id: 'sap-connect',
    category: 'SAP DATA INTEGRATION SOLUTION',
    title: 'SAP Connect',
    subtitle: 'One Connector Platform.\nFour Proven Extraction Paths.',
    description:
      'Extract data from any SAP system — ECC, S/4HANA, or BW — into Snowflake, Databricks, or the lakehouse of your choice, using four purpose-built extraction methods.',
    points: [
      'Direct DB Connect — native JDBC/ODBC, SQL pushdown, bulk extraction',
      'OData Services — metadata-driven discovery, filtering, pagination',
      'CDS Views — semantic extraction preserving business logic & auth checks',
      'CDC Connector — log-based change data capture, near real-time freshness',
    ],
    ctaLabel: 'Deploy SAP Connect',
    ctaHref: '/demo',
    metrics: [],
    visualType: 'sap-connect',
  },
  {
    id: 'hub360',
    category: 'UNIFIED DATA OPERATIONS',
    title: 'Hub360',
    subtitle: 'Your Enterprise Data.\nConnected.',
    description:
      'A centralized command center to monitor pipelines, agent executions, data health and SLA compliance across multi-cloud environments.',
    points: [
      'Unified multi-cloud observability',
      'Global pipeline orchestration',
      'Agent swarm monitoring',
      'Data health & cost insights',
      'Predictive SLA & anomaly alerts',
      'Single pane of control',
    ],
    ctaLabel: 'Launch Hub360',
    ctaHref: '/demo',
    metrics: [
      { value: '3', label: 'Cloud Platforms' },
      { value: '24/7', label: 'Monitoring' },
      { value: '99.9%', label: 'SLA Compliance' },
      { value: '60%', label: 'Faster Issue Resolution' },
    ],
    visualType: 'hub360',
  },
];

interface SolutionSectionProps {
  solution: SolutionItem;
  isReversed: boolean;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ solution, isReversed }) => {
  const renderVisual = () => {
    switch (solution.visualType) {
      case 'direct-flow':
        return <DirectFlowVisual />;
      case 'govern360':
        return <Govern360Visual />;
      case 'sematiq':
        return <SemantIQVisual />;
      case 'charlie':
        return <CharlieVisual />;
      case 'sap-connect':
        return <SAPConnectVisual />;
      case 'hub360':
        return <Hub360Visual />;
      default:
        return null;
    }
  };

  return (
    <section id={solution.id} className={`solution-section ${isReversed ? 'solution-section--reverse' : ''}`}>
      <div className="solution-section-inner">
        <div className="solution-grid">
          {/* Text Content */}
          <div className="solution-content">
            <RevealAnimation variant="up">
              <span className="solution-category">{solution.category}</span>
              <h2 className="solution-title">{solution.title}</h2>
              {solution.subtitle && <p className="solution-subtitle">{solution.subtitle}</p>}
              <p className="solution-description">{solution.description}</p>
            </RevealAnimation>

            <RevealAnimation variant="up" delayMs={100}>
              <div className="solution-points">
                {solution.points.map((point, index) => (
                  <div key={index} className="solution-point-item">
                    <span className="solution-point-icon">
                      <Check size={13} />
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </RevealAnimation>

            <RevealAnimation variant="up" delayMs={200}>
              <Link to={solution.ctaHref} className="solution-cta">
                <span>{solution.ctaLabel}</span>
                <ArrowRight size={18} className="solution-cta-icon" />
              </Link>
            </RevealAnimation>

            {/* Metrics Bar below CTA - only if metrics exist */}
            {solution.metrics && solution.metrics.length > 0 && (
              <RevealAnimation variant="up" delayMs={300}>
                <div className="solution-metrics-bar">
                  {solution.metrics.map((metric, index) => (
                    <div key={index} className="solution-metric-item">
                      <span className="solution-metric-value">{metric.value}</span>
                      <span className="solution-metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </RevealAnimation>
            )}
          </div>

          {/* Visual Component */}
          <RevealAnimation variant="large" delayMs={150} className="solution-visual-wrapper">
            {renderVisual()}
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export const SolutionShowcase: React.FC = () => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(solutionsData[0].id);

  // Smooth active tab tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sol of solutionsData) {
        const el = document.getElementById(sol.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSolutionId(sol.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSolution = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      setActiveSolutionId(id);
    }
  };

  return (
    <div className="solutions-showcase">
      {/* Interactive Solutions Quick-Jump Navigation Bar */}
      <div className="solutions-quick-nav">
        <div className="container">
          <div className="solutions-quick-nav-pills" role="tablist" aria-label="Solutions Navigation">
            {solutionsData.map((sol) => {
              const isActive = sol.id === activeSolutionId;
              return (
                <a
                  key={sol.id}
                  href={`#${sol.id}`}
                  onClick={(e) => scrollToSolution(e, sol.id)}
                  className={`solutions-nav-pill ${isActive ? 'solutions-nav-pill--active' : ''}`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span className="solutions-nav-pill-dot" />
                  <span className="solutions-nav-pill-title">{sol.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* 6 Alternating Solution Showcase Sections */}
      {solutionsData.map((solution, index) => {
        // Alternating layout: even index = visual on RIGHT, odd index = visual on LEFT
        const isReversed = index % 2 === 1;

        return (
          <SolutionSection
            key={solution.id}
            solution={solution}
            isReversed={isReversed}
          />
        );
      })}
    </div>
  );
};
