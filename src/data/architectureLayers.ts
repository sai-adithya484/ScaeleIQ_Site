export interface ArchitectureLayer {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  agent: string;
  capabilities: string[];
  metrics: { label: string; value: string };
  sources?: string[];
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'ingestion',
    number: '01',
    title: 'Ingestion Layer',
    tagline: 'Connect & Map Architecture',
    summary: 'Map your entire data architecture automatically.',
    description:
      'Autonomous swarms scan databases, APIs, files, and legacy ERP systems in real time. Schemas, entity relationships, and hidden dependencies are identified in hours.',
    agent: 'BRD & Discovery Agent',
    capabilities: [
      'Multi-source discovery',
      'Automated schema mapping',
      'Dependency inference'
    ],
    metrics: { label: 'Speed', value: '10× Faster' },
    sources: ['Databases', 'APIs', 'Files', 'ERP', 'Applications']
  },
  {
    id: 'orchestration',
    number: '02',
    title: 'Orchestration Layer',
    tagline: 'Autonomous Agent Swarm',
    summary: 'Coordinate agents, tasks, and workflows in real time.',
    description:
      'A central orchestrator delegates tasks across specialized agents for discovery, data, coding, and QA. Workflows recalculate dynamically as new data constraints emerge.',
    agent: 'Swarm Orchestration Core',
    capabilities: [
      'Dynamic dependency scheduling',
      'Multi-agent task delegation',
      'Autonomous self-healing loops'
    ],
    metrics: { label: 'Throughput', value: '24/7 Ops' }
  },
  {
    id: 'ontology',
    number: '03',
    title: 'Ontology Builder',
    tagline: 'Enterprise Semantic Truth',
    summary: 'Build a unified semantic understanding of enterprise data.',
    description:
      'Unify fragmented schemas into a centralized enterprise semantic knowledge graph. Connect Customers, Orders, Products, Accounts, and Suppliers with verified business context.',
    agent: 'Data Dictionary & Semantic Agent',
    capabilities: [
      'Entity-relationship resolution',
      'Unified enterprise glossary',
      'Semantic lineage graph'
    ],
    metrics: { label: 'Clarity', value: '100% Unified' }
  },
  {
    id: 'governance',
    number: '04',
    title: 'Governance Layer',
    tagline: 'Forensic Lineage & Hygiene',
    summary: 'Ensure quality, security, lineage, and continuous compliance.',
    description:
      'Automated policy guards audit data quality before ingestion into analytical models. End-to-end cryptographic lineage and compliance verifications safeguard integrity.',
    agent: 'Forensic Governance Agent',
    capabilities: [
      'Cryptographic data lineage',
      'Automated hygiene & drift checks',
      'Zero-trust compliance guardrails'
    ],
    metrics: { label: 'Quality SLA', value: '99.99%' }
  },
  {
    id: 'pipeline',
    number: '05',
    title: 'Pipeline Builder',
    tagline: 'Production Execution Highway',
    summary: 'Automate, test, deploy, and monitor production pipelines.',
    description:
      'Synthesize production-grade pipelines with automated reconciliation and zero-downtime blue/green cutovers. Migrations execute continuously in days, not months.',
    agent: 'Pipeline Synthesis Agent',
    capabilities: [
      'Autonomous pipeline synthesis',
      'Automated reconciliation testing',
      'Zero-downtime blue/green cutover'
    ],
    metrics: { label: 'Cutover', value: 'Days, not Months' }
  }
];
