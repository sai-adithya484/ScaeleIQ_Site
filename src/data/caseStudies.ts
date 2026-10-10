export interface Metric {
  value: string;
  label: string;
  icon?: string;
  iconColor?: string;
  iconBg?: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  logo: string;
  visual: string;
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
    slug: 'abbott',
    company: 'Abbott',
    logo: '/assets/Logos/Abbott_Logo_1.png',
    visual: '/assets/case-studies/abbott-visual.png',
    industry: ['Pharma & Life Sciences', 'Global Operations'],
    headline: 'Modern Data Architecture and Data Governance',
    summary:
      'Migrated 12 TB from multiple SAP ERP and Salesforce systems to SAP HANA Cloud, establishing a unified, governed data foundation for enterprise analytics and AI.',
    metrics: [
      {
        value: '76%',
        label: 'Faster query performance',
        icon: 'Zap',
        iconColor: '#0284C7',
        iconBg: 'rgba(2, 132, 199, 0.1)',
      },
      {
        value: '12 TB',
        label: 'Data migrated',
        icon: 'Database',
        iconColor: '#2563EB',
        iconBg: 'rgba(37, 99, 235, 0.1)',
      },
      {
        value: '1000+',
        label: 'Tables loaded to HANA',
        icon: 'Server',
        iconColor: '#7C3AED',
        iconBg: 'rgba(124, 58, 237, 0.1)',
      },
    ],
    orgInfo: {
      organization: 'Abbott Laboratories',
      industry: 'Pharmaceuticals, Medical Devices & Diagnostics',
      customers: '160+ Countries Worldwide',
      revenue: 'Global Market Leader',
    },
    about:
      'Abbott is an American multinational healthcare company and global leader in pharmaceuticals, nutrition, medical devices, and diagnostics serving patients and healthcare institutions worldwide.',
    servicesProvided: [
      'Automated Legacy Schema Decomposition',
      'Multi-Source ERP & CRM Data Consolidation',
      'Automated SQL & Stored Procedure Conversion',
      'Enterprise Data Governance & Regulatory Lineage',
      'High-Performance Cloud Migration to SAP HANA',
    ],
    challenge: [
      {
        heading: 'Fragmented Global Source Systems',
        body: 'Data was distributed across multiple regional SAP ERP instances, Salesforce systems, and localized databases, causing reporting latency and analytical inconsistencies.',
      },
      {
        heading: 'Legacy Compute Bottlenecks',
        body: 'Query times on on-premise infrastructure exceeded acceptable thresholds for critical operational reporting and clinical supply chain decisions.',
      },
    ],
    solution: {
      intro:
        'ScaeleIQ deployed autonomous agents and modern data migration pods to accelerate end-to-end data consolidation into SAP HANA Cloud.',
      sections: [
        {
          heading: 'Automated Schema and ETL Translation',
          body: 'Converted over 1,000 tables, hundreds of complex stored procedures, and custom business calculations directly into modern HANA-native transformations.',
        },
        {
          heading: 'Comprehensive Data Governance Layer',
          body: 'Established end-to-end metadata lineage, automated quality checks, and role-based data security controls across the entire global analytical landscape.',
        },
      ],
    },
    results: {
      intro:
        'Achieved dramatic speed improvements, completed a 12 TB data migration, and unlocked real-time analytics for global operations.',
      sections: [
        {
          heading: '76% Query Acceleration',
          body: 'Massively reduced reporting runtimes, allowing executives and clinical teams to access actionable intelligence within seconds.',
        },
        {
          heading: '12 TB Fully Migrated',
          body: 'Seamless transition of critical multi-ERP datasets to SAP HANA Cloud with zero operational downtime.',
        },
      ],
    },
  },
  {
    slug: 'fospha',
    company: 'FOSPHA',
    logo: '/assets/Logos/Fospha-logo-1.png',
    visual: '/assets/case-studies/fospha-visual.png',
    industry: ['Retail & Marketing', 'Data & Analytics'],
    headline: 'Unifying Data for Scalable Insights and Advanced Analytics',
    summary:
      'Built a real-time data platform with Snowflake and Kafka, enabling scalable analytics and a unified view across systems.',
    metrics: [
      {
        value: '60%',
        label: 'Faster query performance',
        icon: 'TrendingUp',
        iconColor: '#0D9488',
        iconBg: 'rgba(13, 148, 136, 0.1)',
      },
      {
        value: '6 Months',
        label: 'Project timeline',
        icon: 'Calendar',
        iconColor: '#7C3AED',
        iconBg: 'rgba(124, 58, 237, 0.1)',
      },
      {
        value: '100+',
        label: 'Tables loaded to HANA',
        icon: 'BarChart2',
        iconColor: '#2563EB',
        iconBg: 'rgba(37, 99, 235, 0.1)',
      },
    ],
    orgInfo: {
      organization: 'Fospha',
      industry: 'Marketing Measurement & Multi-Touch Attribution',
      customers: 'Leading Global Direct-to-Consumer Brands',
    },
    about:
      'Fospha delivers privacy-safe marketing measurement and multi-touch attribution, empowering direct-to-consumer and eCommerce brands to optimize customer acquisition spend.',
    servicesProvided: [
      'Real-Time Streaming Ingestion with Apache Kafka',
      'Snowflake Cloud Analytical Warehouse Modeling',
      'Marketing Attribution Pipeline Acceleration',
      'Cross-Channel Identity Resolution Engine',
    ],
    challenge: [
      {
        heading: 'Siloed Advertising & Transactional Data',
        body: 'Marketing data was fragmented across ad platforms, web analytics, payment providers, and eCommerce engines, creating delayed attribution reporting.',
      },
      {
        heading: 'Scalability Limits on High-Volume Streams',
        body: 'Legacy processing pipelines struggled to absorb millions of daily clickstream and event interactions without queue delays.',
      },
    ],
    solution: {
      intro:
        'ScaeleIQ engineered a unified streaming and analytical architecture built on Kafka and Snowflake.',
      sections: [
        {
          heading: 'Event-Driven Real-Time Pipelines',
          body: 'Constructed resilient Kafka streaming pipelines that ingest, normalize, and validate high-frequency attribution events instantaneously.',
        },
        {
          heading: 'Snowflake Data Modeling',
          body: 'Designed optimized dimensional schemas and materialized views for lightning-fast cohort analysis and ad spend performance queries.',
        },
      ],
    },
    results: {
      intro:
        'Completed the platform overhaul in just 6 months, delivering 60% faster queries and seamless multi-channel attribution.',
      sections: [
        {
          heading: '60% Faster Query Response',
          body: 'Complex multi-touch attribution calculations that previously took minutes now return in sub-second timelines.',
        },
        {
          heading: 'Accelerated Delivery in 6 Months',
          body: 'Modernized the full data tier in half the time expected by conventional consulting models.',
        },
      ],
    },
  },
  {
    slug: 'sciton',
    company: 'Sciton',
    logo: '/assets/Logos/sciton_logo.png',
    visual: '/assets/case-studies/sciton-visual.png',
    industry: ['Medical Devices', 'AI & Automation'],
    headline: 'Multi Model AI Agentic Framework',
    summary:
      'Built an AI agentic framework to streamline supply chain, finance, and legal operations with real-time, accurate insights.',
    metrics: [
      {
        value: '100%',
        label: 'Demand & supply chain matching',
        icon: 'Cpu',
        iconColor: '#0284C7',
        iconBg: 'rgba(2, 132, 199, 0.1)',
      },
      {
        value: '100%',
        label: 'Accurate royalty calculation',
        icon: 'ShieldCheck',
        iconColor: '#D97706',
        iconBg: 'rgba(217, 119, 6, 0.1)',
      },
      {
        value: '1 Min',
        label: 'Answer retrieval from legal documents',
        icon: 'Clock',
        iconColor: '#7C3AED',
        iconBg: 'rgba(124, 58, 237, 0.1)',
      },
    ],
    orgInfo: {
      organization: 'Sciton Inc.',
      industry: 'Medical Laser & Advanced Aesthetic Devices',
      customers: 'Physicians & Medical Clinics Worldwide',
    },
    about:
      'Sciton is a premier medical device manufacturer providing advanced laser and light systems for dermatology, plastic surgery, and aesthetic medicine.',
    servicesProvided: [
      'Multi-Model AI Agentic Framework Deployment',
      'Centralized Data Lakehouse Construction',
      'Autonomous Supply Chain & Demand Rebalancing',
      'Automated Royalty & Legal Contract Intelligence',
    ],
    challenge: [
      {
        heading: 'Unstructured Enterprise Silos',
        body: 'Crucial contract terms, patent royalties, and bill-of-materials constraints were locked in unstructured PDF documents and disparate enterprise systems.',
      },
      {
        heading: 'Manual Supply Chain Reconciliations',
        body: 'Procurement teams spent weeks cross-referencing supplier contracts against volatile component manufacturing lead times.',
      },
    ],
    solution: {
      intro:
        'ScaeleIQ implemented a multi-model agentic AI framework connected to a centralized data lakehouse with logical relation graphs.',
      sections: [
        {
          heading: 'Autonomous Document Reasoning',
          body: 'AI agents extract, reconcile, and audit intricate royalty terms and procurement contracts in under 60 seconds.',
        },
        {
          heading: 'Predictive Demand & Supply Harmonization',
          body: 'Continuous agentic models match component inventory against production schedules with 100% precision.',
        },
      ],
    },
    results: {
      intro:
        'Transformed operational efficiency across legal, finance, and manufacturing departments.',
      sections: [
        {
          heading: '100% Demand & Supply Matching',
          body: 'Eliminated component shortages and inventory bottlenecks across manufacturing lines.',
        },
        {
          heading: 'Sub-Minute Document Retrieval',
          body: 'Legal teams resolve complex compliance and royalty inquiries in 1 minute instead of days of manual discovery.',
        },
      ],
    },
  },
  {
    slug: 'growindigo',
    company: 'GrowIndigo',
    logo: '/assets/Logos/growindigo_logo.png',
    visual: '/assets/case-studies/growindigo-visual.png',
    industry: ['Manufacturing', 'ERP Modernization'],
    headline: 'SAP Data Migration and Semantics Conversion',
    summary:
      'Migrated 2TB+ data and converted 2,000+ queries, 150 stored procedures, and 70 ABAP reports to modernize the data landscape.',
    metrics: [
      {
        value: '81%',
        label: 'Faster query performance',
        icon: 'Zap',
        iconColor: '#6366F1',
        iconBg: 'rgba(99, 102, 241, 0.1)',
      },
      {
        value: '1 Year',
        label: 'Project timeline',
        icon: 'Calendar',
        iconColor: '#0D9488',
        iconBg: 'rgba(13, 148, 136, 0.1)',
      },
      {
        value: '500+',
        label: 'Tables loaded to HANA',
        icon: 'Database',
        iconColor: '#EA580C',
        iconBg: 'rgba(234, 88, 12, 0.1)',
      },
    ],
    orgInfo: {
      organization: 'GrowIndigo',
      industry: 'AgTech & Sustainable Agriculture Manufacturing',
      customers: 'Smallholder Farmers Across 14+ States',
    },
    about:
      'GrowIndigo is a sustainable agriculture enterprise founded by Mahyco Grow and Indigo Ag, providing biological crop inputs, digital retail platforms, and carbon farming solutions to farmers across India.',
    servicesProvided: [
      'Automated ABAP Report & Stored Procedure Refactoring',
      'SAP ERP to HANA Semantic Schema Transformation',
      '2TB+ Historical Operational Data Migration',
      'Automated Quality & Semantic Integrity Validation',
    ],
    challenge: [
      {
        heading: 'Complex Legacy ABAP & Stored Procedures',
        body: 'Over 2,000 proprietary queries, 150 legacy stored procedures, and 70 custom ABAP reports prevented modernization of the core agricultural data tier.',
      },
      {
        heading: 'Data Growth Strain on Legacy Databases',
        body: 'Agricultural yield tracking and retail supply chain transactions slowed query response times, hindering real-time farmer advisory services.',
      },
    ],
    solution: {
      intro:
        'ScaeleIQ utilized code-conversion accelerators and semantic mapping agents to migrate and modernize GrowIndigo’s SAP landscape.',
      sections: [
        {
          heading: 'Automated Code Modernization',
          body: 'Converted 2,000+ queries and 150 stored procedures into optimized cloud HANA models with zero manual rewriting errors.',
        },
        {
          heading: 'Semantic Conversion & Data Migration',
          body: 'Loaded 500+ relational tables into SAP HANA Cloud while preserving business logic and multi-year historical integrity.',
        },
      ],
    },
    results: {
      intro:
        'Completed a comprehensive SAP migration in 1 year, elevating query speeds by 81% across agricultural logistics.',
      sections: [
        {
          heading: '81% Faster Query Execution',
          body: 'Analytics and field supply reports generate 5x faster, supporting real-time decisions for farmers and supply partners.',
        },
        {
          heading: '500+ Tables Modernized',
          body: 'Full legacy conversion delivered on schedule with complete semantic validation.',
        },
      ],
    },
  },
  {
    slug: 'mswipe',
    company: 'Mswipe',
    logo: '/assets/Logos/mswipe_logo.png',
    visual: '/assets/case-studies/mswipe-visual.png',
    industry: ['Financial Services', 'Data Migration'],
    headline: 'Hadoop Data Migration to Snowflake',
    summary:
      'Migrated 20TB+ Hadoop data, upgraded Spark, and converted 1000+ programs for a high-performance data platform.',
    metrics: [
      {
        value: '82%',
        label: 'Faster query performance',
        icon: 'TrendingUp',
        iconColor: '#7C3AED',
        iconBg: 'rgba(124, 58, 237, 0.1)',
      },
      {
        value: '1 Year',
        label: 'Project timeline',
        icon: 'Calendar',
        iconColor: '#0284C7',
        iconBg: 'rgba(2, 132, 199, 0.1)',
      },
      {
        value: '2000+',
        label: 'Tables migrated',
        icon: 'Database',
        iconColor: '#2563EB',
        iconBg: 'rgba(37, 99, 235, 0.1)',
      },
    ],
    orgInfo: {
      organization: 'Mswipe Technologies',
      industry: 'Fintech, Digital Payments & POS Infrastructure',
      customers: 'Over 675,000 Merchants Nationwide',
    },
    about:
      'Mswipe is a premier digital payments and financial services provider supplying POS terminals, QR soundboxes, and omnichannel payment gateways to businesses.',
    servicesProvided: [
      '640-Node Hadoop Cluster Deprecation & Cloud Migration',
      'Automated Spark 2.x to 3.x Modernization in 2 Weeks',
      '1,000+ Hadoop Programs Converted to Snowflake Syntax',
      'Real-Time Observability & Fraud Analytics Layer',
    ],
    challenge: [
      {
        heading: '640 On-Premise Hadoop Nodes',
        body: 'Transaction log and merchant reporting data was locked across 640 legacy Hadoop nodes across Europe and the USA with heavy maintenance overhead.',
      },
      {
        heading: 'Sluggish Daily Batch ELT Cycles',
        body: 'Nightly batch reconciliations ran dangerously close to market opening hours, limiting the availability of clean merchant settlement reporting.',
      },
    ],
    solution: {
      intro:
        'ScaeleIQ deployed autonomous translation tools to migrate 20TB+ of data and refactor legacy Big Data jobs to Snowflake.',
      sections: [
        {
          heading: 'Automated Spark & Hadoop Refactoring',
          body: 'Modernized Spark 2.x code to 3.x in just 2 weeks and converted 1,000+ Hadoop scripts and 700+ transformation jobs into native Snowflake SQL.',
        },
        {
          heading: 'Streamlined ELT Execution',
          body: 'Compressed daily ELT runtimes into 3.5 hours, improving operational efficiency and saving $600,000 annually.',
        },
      ],
    },
    results: {
      intro:
        'Elevated query performance by 82%, reduced data quality issues by 83%, and established a single source of financial truth.',
      sections: [
        {
          heading: '82% Faster Performance',
          body: 'Merchant transaction analyses and fraud alerts execute in near-real-time.',
        },
        {
          heading: '2,000+ Tables Migrated',
          body: '20TB+ successfully transferred from legacy clusters into high-efficiency cloud storage.',
        },
      ],
    },
  },
  {
    slug: 'district-attorney',
    company: 'District Attorney',
    logo: '/assets/Logos/district_attorney_logo.png',
    visual: '/assets/case-studies/district-attorney-visual.png',
    industry: ['Public Sector', 'Justice & Safety'],
    headline: 'IRIS360',
    summary:
      'Unified multiple data sources with an AI-powered assistant to improve case insights, reduce duplicates, and enable faster, data-driven decisions.',
    metrics: [
      {
        value: '82%',
        label: 'Self-service adoption',
        icon: 'Users',
        iconColor: '#D97706',
        iconBg: 'rgba(217, 119, 6, 0.1)',
      },
      {
        value: '90%',
        label: 'Time reduction in case reporting',
        icon: 'Clock',
        iconColor: '#0D9488',
        iconBg: 'rgba(13, 148, 136, 0.1)',
      },
      {
        value: '1 Min',
        label: 'Daily ELTs completion',
        icon: 'Zap',
        iconColor: '#2563EB',
        iconBg: 'rgba(37, 99, 235, 0.1)',
      },
    ],
    orgInfo: {
      organization: "District Attorney's Office",
      industry: 'Prosecution, Criminal Justice & Public Safety',
      customers: 'Serving 2.3M+ Diverse Metropolitan Residents',
    },
    about:
      "One of the largest and most ethnically diverse prosecutor's offices in the United States, employing roughly 300 Assistant District Attorneys serving over 2.3 million residents.",
    servicesProvided: [
      'Multi-Agency Record Unification & Resolution (NYPD, IRIS, Courts)',
      'Natural-Language AI Agent ("Milo") for Case Inquiries',
      'Automated Daily ELT Pipelines into Snowflake',
      'Real-Time Caseload Aging & Disposition Dashboards',
    ],
    challenge: [
      {
        heading: 'Siloed Law Enforcement & Case Databases',
        body: 'Critical case history was fragmented across the IRIS case management system, NYPD databases, and court registries, requiring manual reconciliation.',
      },
      {
        heading: 'Reporting Bottlenecks for Legal Teams',
        body: 'ADAs and case supervisors waited days for technical staff to assemble ad hoc case statistics and historical sentencing context.',
      },
    ],
    solution: {
      intro:
        'ScaeleIQ created an integrated Snowflake data foundation and deployed "Milo," an enterprise AI assistant for prosecutors.',
      sections: [
        {
          heading: 'Entity Resolution & Deduplication',
          body: 'Resolved divergent individual and case identifiers across agencies, eliminating 95% of duplicate records.',
        },
        {
          heading: 'Conversational Case Intelligence',
          body: 'Prosecutors query case data in plain English through Milo, receiving verified answers in minutes without manual data pulls.',
        },
      ],
    },
    results: {
      intro:
        'Achieved 90% reduction in case reporting time and completed daily ELTs in 1 hour with $1M in annual overhead avoidance.',
      sections: [
        {
          heading: '90% Time Reduction in Reporting',
          body: 'Leadership and courtroom attorneys access instant, real-time case visibility instead of stale manual reports.',
        },
        {
          heading: '82% Self-Service AI Adoption',
          body: 'The majority of operational queries are resolved directly through natural-language assistants.',
        },
      ],
    },
  },
  {
    slug: 'careoregon',
    company: 'CareOregon',
    logo: '/assets/Logos/careoregon_logo.png',
    visual: '/assets/case-studies/careoregon-visual.png',
    industry: ['Healthcare', 'Data Governance'],
    headline: 'Govern360',
    summary:
      'Modernized healthcare data infrastructure with Govern360, identifying 500+ governance gaps and reducing data-quality issues by 95%.',
    metrics: [
      {
        value: '500+',
        label: 'Governance gaps identified',
        icon: 'ShieldAlert',
        iconColor: '#EA580C',
        iconBg: 'rgba(234, 88, 12, 0.1)',
      },
      {
        value: '3 Months',
        label: 'Project timeline',
        icon: 'Calendar',
        iconColor: '#2563EB',
        iconBg: 'rgba(37, 99, 235, 0.1)',
      },
      {
        value: '95%',
        label: 'Reduction in data-quality issues',
        icon: 'CheckCircle2',
        iconColor: '#0D9488',
        iconBg: 'rgba(13, 148, 136, 0.1)',
      },
    ],
    orgInfo: {
      organization: 'CareOregon',
      industry: 'Nonprofit Healthcare Payer & Managed Care',
      customers: '500,000+ Medicaid & Medicare Members',
    },
    about:
      'CareOregon is a mission-driven nonprofit managed care organization administering physical, dental, and mental health care alongside substance use treatment for more than 500,000 Oregonians.',
    servicesProvided: [
      'Govern360 Healthcare Data Governance & Quality Audit',
      'Automated PHI Data Classification & HIPAA Tagging',
      'Enterprise Business Glossary & Healthcare Data Dictionary',
      'Continuous Data Observability & Anomaly Alerting',
    ],
    challenge: [
      {
        heading: 'Fragmented Healthcare Definitions',
        body: 'Disparate healthcare systems lacked consistent business definitions for core member and clinical terms, creating friction during regulatory reporting.',
      },
      {
        heading: 'Limited Downstream Data Observability',
        body: 'Data errors and duplicate claims were discovered downstream after impacting operational workflows rather than proactively caught at ingestion.',
      },
    ],
    solution: {
      intro:
        'ScaeleIQ implemented Govern360 to systematically audit, catalog, and secure sensitive member health records across the enterprise.',
      sections: [
        {
          heading: 'Automated Classification & HIPAA Compliance',
          body: 'Classified 90% of sensitive data assets, tagging Protected Health Information (PHI) with granular access-control rules.',
        },
        {
          heading: 'Proactive Quality Framework',
          body: 'Built automated validation scorecards and anomaly detection rules that flag data issues in under 5 minutes.',
        },
      ],
    },
    results: {
      intro:
        'Delivered complete governance transformation in 3 months with 95% fewer data quality errors and 100% stakeholder confidence.',
      sections: [
        {
          heading: '500+ Governance Gaps Remediated',
          body: 'Uncovered and systematically resolved hundreds of regulatory and classification risks.',
        },
        {
          heading: '95% Fewer Data Quality Defects',
          body: 'Virtually eliminated duplicate records and inconsistent claims before they reach reporting layers.',
        },
      ],
    },
  },
];
