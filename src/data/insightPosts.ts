export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export interface InsightPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    company: string;
  };
  publishDate: string;
  readTime: string;
  toc: TocItem[];
  body: {
    heading?: string;
    headingId?: string;
    level?: number;
    paragraphs: string[];
    callouts?: string[];
  }[];
}

export const insightPosts: InsightPost[] = [
  {
    slug: 'controlled-chaos-balancing-agency-with-control',
    category: 'Blog posts',
    title: 'Controlled Chaos: Why balancing Agency with Control optimizes AI performance',
    excerpt: 'Autonomous AI agents need room to explore solutions, but enterprise systems require absolute deterministic reliability. Here is how modern architectures balance both.',
    author: {
      name: 'Nikhil Sama',
      role: 'Founder / CTO',
      company: 'ScaeleIQ AI',
    },
    publishDate: 'August 3, 2025',
    readTime: '10 min Read',
    toc: [
      { id: 'the-autonomy-paradox', title: 'The Autonomy Paradox in Enterprise AI', level: 2 },
      { id: 'guardrails-without-straightjackets', title: 'Guardrails Without Straightjackets', level: 2 },
      { id: 'deterministic-vs-generative', title: 'Separating Deterministic Execution from Generative Reasoning', level: 3 },
      { id: 'continuous-verification', title: 'Continuous Forensic Verification', level: 2 },
      { id: 'conclusion', title: 'The Path Forward', level: 2 },
    ],
    body: [
      {
        heading: 'The Autonomy Paradox in Enterprise AI',
        headingId: 'the-autonomy-paradox',
        level: 2,
        paragraphs: [
          'When organizations attempt to implement agentic AI into mission-critical workflows, they inevitably collide with the fundamental tension between agency and determinism. Grant an agent too little autonomy, and it becomes nothing more than a fragile brittle script. Grant it unchecked freedom, and hallucinated edge cases can corrupt multi-million-dollar data warehouses.',
          'The solution is not to eliminate autonomy, but to structure its boundaries with precision. In the ScaeleIQ architecture, agents operate within strictly bounded deterministic sandboxes where every proposed transformation is subjected to automated schema validation before being committed.',
        ],
        callouts: [
          'Autonomous discovery allows agents to map undocumented systems in hours rather than months.',
          'Deterministic compilers ensure zero unverified code reaches production.',
        ],
      },
      {
        heading: 'Guardrails Without Straightjackets',
        headingId: 'guardrails-without-straightjackets',
        level: 2,
        paragraphs: [
          'Effective guardrails must be architectural, not prompt-based. Relying on system prompts to enforce business compliance is inherently probabilistic. Instead, we use graph-based ontology engines to mathematically verify that data transformations preserve core business invariant equations.',
        ],
      },
      {
        heading: 'Separating Deterministic Execution from Generative Reasoning',
        headingId: 'deterministic-vs-generative',
        level: 3,
        paragraphs: [
          'Generative reasoning excels at interpreting messy legacy artifacts: reading ambiguous SQL comments, parsing fragmented CSV headers, and understanding inconsistent database column acronyms. But once a transformation logic is synthesized, its execution must be entirely deterministic, reproducible, and tracked by automated unit tests.',
        ],
      },
      {
        heading: 'Continuous Forensic Verification',
        headingId: 'continuous-verification',
        level: 2,
        paragraphs: [
          'By combining QA agents like Guru with human forward-deployed engineers, every migration milestone achieves code-level accuracy with complete lineage auditability.',
        ],
      },
      {
        heading: 'The Path Forward',
        headingId: 'conclusion',
        level: 2,
        paragraphs: [
          'The future of enterprise IT modernization belongs to hybrid swarms where AI agents handle 80% of repetitive operational tasks while engineers provide high-level judgment and client oversight. This is how modernization happens in weeks, not years.',
        ],
      },
    ],
  },
  {
    slug: 'your-model-found-the-needle-lost-the-plot',
    category: 'Blog posts',
    title: 'Your model found the needle but lost the plot',
    excerpt: 'Why pinpoint accuracy on isolated data points fails when LLMs lack a cohesive understanding of enterprise business ontology.',
    author: {
      name: 'Ankur Varma',
      role: 'Founder / CEO',
      company: 'ScaeleIQ AI',
    },
    publishDate: 'July 18, 2025',
    readTime: '7 min Read',
    toc: [
      { id: 'the-semantic-gap', title: 'The Semantic Gap in Modern Data Systems', level: 2 },
      { id: 'ontology-first', title: 'Why Ontology Must Precede AI Adoption', level: 2 },
    ],
    body: [
      {
        heading: 'The Semantic Gap in Modern Data Systems',
        headingId: 'the-semantic-gap',
        level: 2,
        paragraphs: [
          'Finding an individual record in a database is trivial. Understanding how that record relates to revenue recognition across three merged subsidiaries is where traditional LLMs fall apart without a formal semantic graph.',
        ],
      },
      {
        heading: 'Why Ontology Must Precede AI Adoption',
        headingId: 'ontology-first',
        level: 2,
        paragraphs: [
          'Before deploying agents to automate business processes, enterprises must first build an unambiguous map of their core operational entities. ScaeleIQ ontology builder automates this discovery in days.',
        ],
      },
    ],
  },
  {
    slug: 'why-ai-native-system-integration-starts-with-ontology',
    category: 'Blog posts',
    title: 'Why AI-Native System Integration Starts With an Ontology Engine — Not a Migration Script',
    excerpt: 'Scripts move bytes; ontologies translate meaning. Why the traditional ETL paradigm is being replaced by agentic semantic modeling.',
    author: {
      name: 'Nikhil Sama',
      role: 'Founder / CTO',
      company: 'ScaeleIQ AI',
    },
    publishDate: 'June 29, 2025',
    readTime: '8 min Read',
    toc: [
      { id: 'beyond-migration-scripts', title: 'Beyond Static Migration Scripts', level: 2 },
    ],
    body: [
      {
        heading: 'Beyond Static Migration Scripts',
        headingId: 'beyond-migration-scripts',
        level: 2,
        paragraphs: [
          'Traditional migration approaches treat system integration as a manual plumbing exercise. In contrast, AI-native integration creates an intelligent, self-healing semantic layer that adapts to future schema changes autonomously.',
        ],
      },
    ],
  },
  {
    slug: 'ai-integration-solutions-boosting-enterprise-efficiency',
    category: 'Blog posts',
    title: 'AI Integration Solutions: Boosting Enterprise Efficiency',
    excerpt: 'How Fortune 500 enterprises are accelerating digital transformation by replacing multi-year IT consulting projects with agent pods.',
    author: {
      name: 'Rudra Dalmia',
      role: 'Founder / CRO',
      company: 'ScaeleIQ AI',
    },
    publishDate: 'June 14, 2025',
    readTime: '6 min Read',
    toc: [
      { id: 'speed-as-a-strategy', title: 'Speed as a Competitive Strategy', level: 2 },
    ],
    body: [
      {
        heading: 'Speed as a Competitive Strategy',
        headingId: 'speed-as-a-strategy',
        level: 2,
        paragraphs: [
          'In an era of rapid AI adoption, waiting 18 months for a traditional systems integrator to modernize legacy ERP databases is a recipe for falling behind. Agentic pods deliver production outcomes in weeks.',
        ],
      },
    ],
  },
  {
    slug: 'enhance-analytics-with-ai-agents',
    category: 'Blog posts',
    title: 'Enhance Analytics with AI Agents: ScaeleIQ AI Insights',
    excerpt: 'Transforming stagnant data warehouses into active, event-driven analytical hubs powered by specialized agent swarms.',
    author: {
      name: 'Nikhil Sama',
      role: 'Founder / CTO',
      company: 'ScaeleIQ AI',
    },
    publishDate: 'May 28, 2025',
    readTime: '5 min Read',
    toc: [
      { id: 'live-analytics', title: 'Giving Data a Pulse', level: 2 },
    ],
    body: [
      {
        heading: 'Giving Data a Pulse',
        headingId: 'live-analytics',
        level: 2,
        paragraphs: [
          'Data should not sit idle in warehouses waiting for quarterly reporting cycles. Continuous monitoring agents inspect quality, surface actionable anomalies, and maintain decision-grade reliability in real time.',
        ],
      },
    ],
  },
  {
    slug: 'from-mvp-to-llm-how-ai-product-strategy-breaks-traditional-thinking',
    category: 'Blog posts',
    title: 'From MVP to LLM: How AI Product Strategy Breaks Traditional Product Thinking',
    excerpt: 'Why linear roadmaps fail in the agentic era and how modular pod structures enable continuous high-velocity iteration.',
    author: {
      name: 'Ankur Varma',
      role: 'Founder / CEO',
      company: 'ScaeleIQ AI',
    },
    publishDate: 'May 12, 2025',
    readTime: '9 min Read',
    toc: [
      { id: 'breaking-linear-roadmaps', title: 'Breaking Linear IT Roadmaps', level: 2 },
    ],
    body: [
      {
        heading: 'Breaking Linear IT Roadmaps',
        headingId: 'breaking-linear-roadmaps',
        level: 2,
        paragraphs: [
          'When AI agents can generate schema mappings and code connectors in hours, the bottleneck shifts from development capacity to architectural intent and verification.',
        ],
      },
    ],
  },
  {
    slug: 'data-migration-experts-streamline-infrastructure-ai',
    category: 'Blog posts',
    title: 'Data Migration Experts: Streamline Your Infrastructure with AI',
    excerpt: 'A practical playbook for eliminating legacy technical debt without risking operational downtime or revenue disruption.',
    author: {
      name: 'Rudra Dalmia',
      role: 'Founder / CRO',
      company: 'ScaeleIQ AI',
    },
    publishDate: 'April 25, 2025',
    readTime: '6 min Read',
    toc: [
      { id: 'zero-downtime-playbook', title: 'The Zero-Downtime Playbook', level: 2 },
    ],
    body: [
      {
        heading: 'The Zero-Downtime Playbook',
        headingId: 'zero-downtime-playbook',
        level: 2,
        paragraphs: [
          'Learn how automated reconciliation algorithms compare legacy inputs with cloud outputs continuously to ensure 100% data parity before final cutover.',
        ],
      },
    ],
  },
  {
    slug: 'langchain-langgraph-or-custom-choosing-agentic-framework',
    category: 'Blog posts',
    title: 'LangChain, LangGraph, or Custom? Choosing the Right Agentic Framework',
    excerpt: 'An engineering deep-dive into evaluating agent orchestration frameworks for high-reliability enterprise production systems.',
    author: {
      name: 'Nikhil Sama',
      role: 'Founder / CTO',
      company: 'ScaeleIQ AI',
    },
    publishDate: 'April 05, 2025',
    readTime: '11 min Read',
    toc: [
      { id: 'evaluating-frameworks', title: 'Evaluating Agent Frameworks at Scale', level: 2 },
    ],
    body: [
      {
        heading: 'Evaluating Agent Frameworks at Scale',
        headingId: 'evaluating-frameworks',
        level: 2,
        paragraphs: [
          'Generic agent frameworks often struggle with deterministic guarantees required by enterprise IT compliance. Here is why bespoke dependency-graph architectures outperform off-the-shelf wrappers.',
        ],
      },
    ],
  },
];
