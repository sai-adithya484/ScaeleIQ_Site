export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  industry: string[];
  headline: string;
  summary: string;
  metrics: Metric[];
  orgInfo: {
    organization: string;
    industry: string;
    customers?: string;
    revenue?: string;
  };
  about: string;
  servicesProvided: string[];
  challenge: {
    heading: string;
    body: string;
  }[];
  solution: {
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
  };
  results: {
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'pharma-logistics',
    company: 'Pharma Logistics',
    industry: ['Logistics', 'Healthcare'],
    headline: 'Reducing Data Infrastructure Costs by 40% in 6 Weeks with AI-driven Optimization',
    summary: 'Automated reverse-engineering of legacy data warehouses and migration to modern cloud data infrastructure.',
    metrics: [
      { value: '40%', label: 'Cost Reduction' },
      { value: '6 Weeks', label: 'Migration Time' },
      { value: '99.99%', label: 'Data Accuracy' },
    ],
    orgInfo: {
      organization: 'Pharma Logistics Inc.',
      industry: 'Pharmaceutical Supply Chain & Compliance',
      customers: '500+ Healthcare Providers',
      revenue: '$250M+ Annual Volume',
    },
    about:
      'Pharma Logistics is a leading pharmaceutical reverse distributor managing complex supply-chain compliance, product recall, and returns data for hospitals and pharmacy chains across North America.',
    servicesProvided: [
      'Automated Legacy Schema Decomposition',
      'Continuous Lineage Mapping & Tracing',
      'Automated SQL & Stored Procedure Conversion',
      'Real-Time Anomaly & Hygiene Detection',
      'Cloud Data Warehouse Architecture Migration',
    ],
    challenge: [
      {
        heading: 'Siloed Compliance Warehouses',
        body: 'Over 15 years of legacy SQL Server scripts, undocumented ETL flows, and proprietary batch routines created severe analytical delays and compliance audit bottlenecks.',
      },
      {
        heading: 'Escalating Maintenance Overhead',
        body: 'Manual schema patches and brittle jobs required dedicated IT fire drills each week just to close monthly reconciliation batches.',
      },
    ],
    solution: {
      intro: 'ScaeleIQ deployed specialized Pods combining autonomous AI agents with forward-deployed engineers to inspect, refactor, and migrate the entire data tier.',
      sections: [
        {
          heading: 'Autonomous Schema & Stored Procedure Parsing',
          body: 'Agent swarms ingested 2,400+ complex stored procedures, extracting business logic and generating modern modular dbt transformations in days.',
        },
        {
          heading: 'Semantic Lineage Verification',
          body: 'Every data asset was cataloged with unbroken forensic lineage, guaranteeing end-to-end auditability required for pharmaceutical compliance.',
        },
      ],
    },
    results: {
      intro: 'Within 6 weeks, Pharma Logistics transitioned completely off legacy servers into a modern high-performance cloud data foundation.',
      sections: [
        {
          heading: '40% Infrastructure Cost Reduction',
          body: 'Eliminated redundant compute clusters and expensive legacy licensing fees.',
        },
        {
          heading: 'Real-Time Operational Analytics',
          body: 'Reports that previously took 48 hours to compile are now available instantaneously for compliance teams.',
        },
      ],
    },
  },
  {
    slug: 'mccarthy-tire-service',
    company: 'McCarthy Tire Service',
    industry: ['Retail', 'Automotive'],
    headline: 'Modernizing Legacy Infrastructure to Real-Time Analytics in 5 weeks at 70% Cost Savings',
    summary: 'Consolidation of 40,000 legacy database tables across dozens of regional distribution centers into a unified cloud analytical layer.',
    metrics: [
      { value: '40,000', label: 'Tables Mapped in 4 Days' },
      { value: '70%', label: 'Cost Reduction' },
      { value: '5 Weeks', label: 'To Complete' },
    ],
    orgInfo: {
      organization: 'McCarthy Tire Service',
      industry: 'Commercial Tire & Automotive Retailing',
      customers: 'Thousands of Commercial Fleet Operators',
      revenue: '$500M+ Operations',
    },
    about:
      'McCarthy Tire Service is one of the largest commercial tire dealers in the United States, operating over 70 commercial locations and numerous retread manufacturing plants.',
    servicesProvided: [
      'Automated Multi-System Schema Reconciliation',
      'Ontology & Semantic Dictionary Generation',
      'Real-Time Fleet Inventory Integration',
      'Automated Zero-Downtime Data Migration',
    ],
    challenge: [
      {
        heading: 'Time-consuming manual reporting',
        body: 'Regional inventory data was fragmented across disparate POS databases and on-premise servers, preventing executive visibility into supply chain dynamics.',
      },
      {
        heading: 'Delayed decision making',
        body: 'Pricing updates and stock rebalances required manual data merges that took days to reconcile.',
      },
      {
        heading: 'Undocumented system complexity',
        body: 'Decades of organic growth and acquisitions resulted in over 40,000 unmapped database tables with duplicate field naming.',
      },
    ],
    solution: {
      intro: 'ScaeleIQ deployed the Ingestion and Ontology agents to map all legacy endpoints without requiring weeks of stakeholder discovery interviews.',
      sections: [
        {
          heading: 'Instant Ecosystem Discovery',
          body: 'AI agents scanned database catalogs, transaction logs, and schemas to reconstruct an authoritative data model in 4 days.',
        },
        {
          heading: 'Unified Semantic Layer',
          body: 'Built an unambiguous business ontology mapping fleet accounts, tire lifecycles, and inventory availability across all branches.',
        },
      ],
    },
    results: {
      intro: 'Modernized the entire core analytical data stack in 5 weeks with dramatic speed and cost benefits.',
      sections: [
        {
          heading: 'Three times faster delivery',
          body: 'Project finished in 5 weeks versus the 18 months estimated by traditional system integrators.',
        },
        {
          heading: '70% cost reduction',
          body: 'Massively reduced required consulting hours through autonomous agent code generation.',
        },
      ],
    },
  },
  {
    slug: 'the-quorum',
    company: 'The Quorum',
    industry: ['Hospitality', 'Real Estate'],
    headline: 'Transforming Hospitality Data from EOL Systems to Modern Platforms in 8 weeks',
    summary: 'Seamless migration of mission-critical guest management and membership data away from end-of-life legacy servers.',
    metrics: [
      { value: '8 Weeks', label: 'Delivery Window' },
      { value: '100%', label: 'Member History Preserved' },
      { value: 'Zero', label: 'Operational Downtime' },
    ],
    orgInfo: {
      organization: 'The Quorum Club',
      industry: 'Hospitality & Private Member Communities',
      customers: '10,000+ Global Members',
    },
    about:
      'The Quorum operates premium lifestyle and private membership clubs, delivering world-class hospitality, curated events, and private dining experiences across major metropolitan hubs.',
    servicesProvided: [
      'Legacy CRM & POS Data Migration',
      'Member 360 Knowledge Graph Creation',
      'Real-Time Concierge Data Integration',
      'Automated Privacy & Compliance Scrubbing',
    ],
    challenge: [
      {
        heading: 'End-of-Life Core Software',
        body: 'The club legacy membership management system had reached formal end-of-life status, leaving security vulnerabilities and blocking digital guest experience upgrades.',
      },
    ],
    solution: {
      intro: 'ScaeleIQ agents mapped legacy member histories, billing ledgers, and dining preferences to a modern composable platform with automated validation.',
      sections: [
        {
          heading: 'Autonomous Migration Pipeline',
          body: 'Cody and Snowy agents constructed live synchronization pipelines with automatic fallback to prevent disruptions to daily concierge operations.',
        },
      ],
    },
    results: {
      intro: 'Delivered an integrated modern data foundation within 8 weeks, empowering staff with unified member insights.',
      sections: [
        {
          heading: 'Instant Guest Personalization',
          body: 'Member preferences and visit history are instantly accessible to staff across all venue locations in real time.',
        },
      ],
    },
  },
  {
    slug: 'penguin-solutions',
    company: 'Penguin Solutions',
    industry: ['Computing Infrastructure', 'Enterprise Technology'],
    headline: 'Unifies Data Infrastructure Across Multiple Acquisitions in Three Weeks',
    summary: 'Automated unification of enterprise schemas and financial reporting across disparate corporate acquisitions.',
    metrics: [
      { value: '3 Weeks', label: 'Time to Unify' },
      { value: '5 Merged', label: 'Acquired Entities' },
      { value: '1 Source', label: 'Unified Truth' },
    ],
    orgInfo: {
      organization: 'Penguin Solutions',
      industry: 'High-Performance Computing & AI Infrastructure',
      customers: 'Fortune 500 Enterprises & Research Labs',
    },
    about:
      'Penguin Solutions designs and operates advanced computing infrastructure, accelerating AI, HPC, and cloud computing deployments for enterprise clients worldwide.',
    servicesProvided: [
      'Multi-Tenant Schema Consolidation',
      'Automated Entity Resolution',
      'Consolidated Revenue Pipeline Modeling',
      'Cross-System Governance and Lineage',
    ],
    challenge: [
      {
        heading: 'Acquisition Schema Divergence',
        body: 'Five consecutive acquisitions left Penguin with overlapping ERPs, divergent customer definitions, and disparate metric calculations across business units.',
      },
    ],
    solution: {
      intro: 'ScaeleIQ deployed ontology and governance agents to reconcile definitions and synthesize a single source of enterprise truth in record time.',
      sections: [
        {
          heading: 'AI-Driven Entity Resolution',
          body: 'Anna agent resolved tens of thousands of duplicate enterprise accounts and cross-referenced product catalogs with zero manual spreadsheets.',
        },
      ],
    },
    results: {
      intro: 'Executive leadership gained unified operational and pipeline visibility within just three weeks.',
      sections: [
        {
          heading: 'Immediate Consolidated Reporting',
          body: 'Real-time board reporting and operational metrics unified across all five subsidiary organizations.',
        },
      ],
    },
  },
];
