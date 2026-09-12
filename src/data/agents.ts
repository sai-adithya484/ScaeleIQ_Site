export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  tag?: string;
  iconName: string;
}

export const agents: Agent[] = [
  {
    id: 'hawk',
    name: 'Hawk',
    role: 'ORCHESTRATION NODE',
    description: 'Decomposes complex modernization goals into atomic dependency graphs, routing subtasks to specialist agents and tracking execution critical paths.',
    tag: 'AI Tools',
    iconName: 'workflow',
  },
  {
    id: 'snowy',
    name: 'Snowy',
    role: 'SNOWFLAKE DATA AGENT',
    description: 'Autonomous data pipeline architect. Instantly connects to Snowflake, optimizes schemas, and prepares high-volume datasets for analytics in real-time.',
    iconName: 'database',
  },
  {
    id: 'cody',
    name: 'Cody',
    role: 'CODING AGENT',
    description: 'Generates production-grade integration code. Builds, tests, and deploys connectors between SAP, SFDC, and NetSuite in hours, eliminating manual bottlenecks.',
    iconName: 'code',
  },
  {
    id: 'integra',
    name: 'Integra',
    role: 'INTEGRATION AGENT',
    description: 'Unifies fragmented APIs, enterprise message queues, and legacy protocols into coherent event streams with automated error recovery.',
    iconName: 'layers',
  },
  {
    id: 'anna',
    name: 'Anna',
    role: 'SEMANTIC DATA AGENT',
    description: 'Constructs organizational knowledge graphs and domain ontologies, reconciling naming discrepancies across conflicting line-of-business systems.',
    iconName: 'brain',
  },
  {
    id: 'ada',
    name: 'Ada',
    role: 'LEGACY DATA AGENT',
    description: 'Reverse-engineers mainframe schemas, COBOL definitions, and legacy stored procedures into clean modern data specifications.',
    iconName: 'cpu',
  },
  {
    id: 'guru',
    name: 'Guru',
    role: 'QA & MONITORING AGENT',
    description: 'Runs continuous forensic validation across transformed data, verifying row-level checksums, business rules, and anomaly detection.',
    iconName: 'shield',
  },
];
