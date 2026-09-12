export interface LivingInfrastructurePanel {
  id: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  bullets: { lead: string; text: string }[];
  imageAlt: string;
}

export const livingInfrastructurePanels: LivingInfrastructurePanel[] = [
  {
    id: 'data-migration',
    step: '01',
    title: 'Data Migration',
    tagline: "Don't just move your data. Modernize it.",
    description: 'Bypass manual ETL plumbing with autonomous agent swarms that reverse-engineer stored procedures, rebuild schemas, and migrate in days.',
    bullets: [
      { lead: 'Ontology Reconstruction:', text: 'Extract business rules directly from code with zero loss of fidelity.' },
      { lead: 'Automated Compilers:', text: 'Generate high-performance dbt and cloud SQL pipelines automatically.' },
    ],
    imageAlt: 'Data Migration Visualization',
  },
  {
    id: 'data-governance',
    step: '02',
    title: 'Data Governance',
    tagline: "Don't let bad data drive your business decisions.",
    description: 'Continuous forensic monitoring ensures every row in your warehouse matches ledger reality without manual stewardship spreadsheets.',
    bullets: [
      { lead: 'Forensic Lineage:', text: 'End-to-end tracing from ingestion sources to executive dashboards.' },
      { lead: 'Self-Healing Checks:', text: 'Automated alert and remediation workflows for corrupted records.' },
    ],
    imageAlt: 'Data Governance Visualization',
  },
  {
    id: 'data-unification',
    step: '03',
    title: 'Data Unification & Intelligence',
    tagline: 'Infrastructure that stays one step ahead.',
    description: 'Transform disconnected databases across acquisitions and regional branches into an active, event-driven semantic knowledge graph.',
    bullets: [
      { lead: 'One-Click Upgrades:', text: 'Continuous schema adaptation that evolves with your business.' },
      { lead: 'Sub-Second Queries:', text: 'High-speed vector and relational search across enterprise repositories.' },
    ],
    imageAlt: 'Data Unification Visualization',
  },
];
