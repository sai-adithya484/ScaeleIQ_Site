export interface PodFeature {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
}

export const podFeatures: PodFeature[] = [
  {
    id: 'agent-swarms',
    title: 'AI Agent Swarms',
    shortDescription: 'Automate SOW generation, code migration, schema mapping, and testing.',
    fullDescription:
      'Autonomous agent swarms execute deterministic tasks in parallel 24/7. From reverse-engineering legacy stored procedures to writing production-ready dbt models and Snowflake SQL, agents handle the heavy operational lift with zero fatigue.',
  },
  {
    id: 'hitl-oversight',
    title: 'Human in the Loop Oversight',
    shortDescription: 'Validate outputs, manage client expectations, and handle edge cases.',
    fullDescription:
      'Forward Deployed Engineers (FDEs) review all mission-critical milestones, validate automated outputs against business context, and ensure flawless delivery into enterprise production environments.',
  },
];
