export interface AgentCapabilityItem {
  text: string;
  subtext?: string;
}

export interface WorkflowStage {
  id: string;
  name: string;
  description: string;
}

export interface HowItWorksStage {
  step: string;
  title: string;
  service: string;
  description: string;
}

export interface UseCaseItem {
  area: string;
  documents: string;
  sampleQuestion: string;
  businessImpact: string;
}

export interface ExampleQAItem {
  question: string;
  userRole: string;
  response: string;
  citations: string[];
  groundingDetail: string;
}

export interface GovernanceControl {
  title: string;
  snowflakeFeature: string;
  description: string;
}

export interface PainPointItem {
  title: string;
  agencyImpact: string;
}

export interface InputsOutputsConfig {
  inputs: string[];
  processingEngine: string[];
  outputs: string[];
  storageSchema: string[];
}

export interface AgentFullData {
  id: 'docu' | 'incident' | 'forecast';
  slug: string;
  route: string;
  accentClass: 'docu' | 'summarization' | 'forecast';
  accentColor: string;
  accentBg: string;
  titlePrimary: string;
  titleSecondary: string;
  fullName: string;
  heroTagline: string;
  subtitle: string;
  cardDescription: string;
  cardCapabilities: string[];
  cardImage: string;
  heroImage: string;
  // Pain Points
  painPoints: PainPointItem[];
  // Inputs & Outputs Architecture
  inputsOutputs: InputsOutputsConfig;
  // Overview Data
  overview: {
    whatItDoes: string;
    keyCapabilities: { title: string; description: string }[];
    businessProblem: string;
    workflowStages: WorkflowStage[];
    supportedSources: string[];
    governanceSummary: string;
    exampleQuestion: {
      question: string;
      answerSummary: string;
      citations: string[];
      disclaimer: string;
    };
  };
  // How it works
  howItWorks: {
    overview: string;
    stages: HowItWorksStage[];
    architectureNotes: string[];
  };
  // Use Cases
  useCases: UseCaseItem[];
  // Example Q&A Walkthroughs
  exampleQAs: ExampleQAItem[];
  // Governance
  governance: {
    overview: string;
    controls: GovernanceControl[];
    complianceNotice: string;
  };
}

export const AI_AGENTS_DATA: AgentFullData[] = [
  {
    id: 'docu',
    slug: 'docu',
    route: '/ai/agents/docu',
    accentClass: 'docu',
    accentColor: '#0284c7',
    accentBg: '#e0f2fe',
    titlePrimary: 'DOCU',
    titleSecondary: 'Agent',
    fullName: 'Docu Agent',
    heroTagline: 'Snowflake-Native Document Processing for High-Assurance Workflows',
    subtitle: 'A Snowflake-native document processing agent for U.S. public-sector and enterprise workflows.',
    cardDescription: 'Turn grants, contracts, and case files into governed, searchable, question-ready data with cited retrieval inside Snowflake.',
    cardCapabilities: [
      'Parse complex layouts, scans, and tables',
      'Hybrid search with precise source citations',
      'Native Snowflake Horizon security & RBAC',
    ],
    cardImage: '/assets/ai-agents/new_im/Futuristic Citations Document Interface.png',
    heroImage: '/assets/ai-agents/new_im/Futuristic Citations Document Interface.png',
    painPoints: [
      {
        title: 'Scattered Unstructured Repositories',
        agencyImpact: 'Grants in SharePoint, permits on network shares, vendor bids in email, and archived records in cloud buckets with no unified search perimeter.',
      },
      {
        title: 'Manual Review & Re-Keying Burden',
        agencyImpact: 'Program officers, contracting leads, and analysts spend hundreds of hours manually reading PDFs and typing numbers into databases.',
      },
      {
        title: 'FOIA & Statutory Response Deadlines',
        agencyImpact: 'Public records requests require tedious manual keyword searches across mailboxes and page-by-page human redaction under statutory penalties.',
      },
      {
        title: 'Shadow AI & Compliance Exposure',
        agencyImpact: 'Employees pasting sensitive citizen documents into public consumer chatbots or unapproved OCR tools, risking severe privacy and regulatory breaches.',
      },
    ],
    inputsOutputs: {
      inputs: [
        'SharePoint / OneDrive document libraries',
        'Agency SMB/NFS network file shares',
        'Cloud storage buckets (AWS S3, Azure Gov Blob, Google Cloud Storage)',
        'Automated mailbox attachments & secure correspondence',
        'Scanned multi-page PDFs, TIFFs, Word files, and tabular spreadsheets',
      ],
      processingEngine: [
        'Snowflake Cortex AI (AI_PARSE_DOCUMENT)',
        'SPLIT_TEXT_RECURSIVE_CHARACTER chunking',
        'Cortex Search hybrid semantic embedding and keyword index',
        'Cortex Analyst semantic model translation for SQL execution',
      ],
      outputs: [
        'Natural-language answers with clickable document, page, and chunk citations',
        'Structured tabular data (dates, amounts, vendor entities, award numbers)',
        'Automated redaction recommendations for PII and confidential terms',
        'Streamlit in Snowflake interactive search portals and REST API endpoints',
      ],
      storageSchema: [
        'RAW_DOCS: Immutable landing stage with cryptographic file hashes',
        'DOC_CHUNKS: Syntactically chunked text with dense vector embeddings',
        'DOC_FIELDS: Extracted structured relational attributes queryable via SQL',
        'DOC_METADATA: Access control tags, origin timestamps, and classification flags',
      ],
    },
    overview: {
      whatItDoes:
        'Docu Agent automatically connects to agency repositories, stages documents inside Snowflake, parses layouts and tabular data using Cortex AI, and exposes an end-to-end question-answering pipeline. Staff ask questions in natural language and receive grounded answers with exact document and page citations.',
      keyCapabilities: [
        {
          title: 'Automated Multi-Source Ingestion',
          description: 'Ingest PDFs, Word files, scans, and spreadsheets from SharePoint, network file shares, cloud object storage (S3/Azure/GCS), and email attachments without manual uploads.',
        },
        {
          title: 'Layout-Aware Parsing & Extraction',
          description: 'Leverage Snowflake Cortex AI (AI_PARSE_DOCUMENT) to parse complex multi-column forms, dense tables, and low-contrast scanned documents with preserved structure.',
        },
        {
          title: 'Cited Hybrid Vector & Keyword Search',
          description: 'Cortex Search service combines semantic embeddings with exact keyword matching so every generated assertion cites the precise file name, page, and chunk.',
        },
        {
          title: 'Dual Structured & Unstructured Querying',
          description: 'Seamlessly routes questions across narrative document text (RAG) and extracted metadata fields (Cortex Analyst SQL) in a single unified prompt.',
        },
      ],
      businessProblem:
        'Decades of institutional knowledge remain trapped in siloed repositories. Program officers, procurement staff, and analysts spend hundreds of hours re-keying data from scans, while FOIA deadlines and oversight inquiries create severe operational backlogs.',
      workflowStages: [
        { id: '1', name: 'Sources', description: 'SharePoint, File Shares, S3/Azure Gov, Mailboxes' },
        { id: '2', name: 'Ingest', description: 'Snowpipe & Openflow landing into governed stages' },
        { id: '3', name: 'Parse & Structure', description: 'Cortex AI document parsing, chunking & embedding' },
        { id: '4', name: 'Store', description: 'RAW_DOCS, DOC_CHUNKS, DOC_FIELDS tables' },
        { id: '5', name: 'Retrieve & Answer', description: 'Cortex Search RAG + Cortex Analyst with citations' },
      ],
      supportedSources: [
        'SharePoint / OneDrive',
        'Agency File Shares',
        'S3 / Azure Gov / GCS',
        'Email Attachments',
        'Scanned PDFs & TIFs',
        'Spreadsheets & CSVs',
      ],
      governanceSummary:
        'Fully governed by Snowflake Horizon. Enforces enterprise role-based access control (RBAC), row-level access policies, dynamic column masking, and end-to-end data lineage. Unstructured files never leave your agency’s FedRAMP-authorized Snowflake perimeter.',
      exampleQuestion: {
        question: '“Which contracts auto-renew within 90 days, and what are their termination terms?”',
        answerSummary:
          'Identified 4 contracts expiring within 90 days. Contract #CT-2024-88A (Cloud Infra) requires 60-day written notice prior to Oct 31, 2026. Contract #CT-2023-14B (Facilities) renews automatically unless written cancellation is filed 30 days prior.',
        citations: [
          'Master_Services_Agmt_v2.pdf (Page 14, Section 9.2)',
          'Facilities_Renewal_Addendum.pdf (Page 3)',
        ],
        disclaimer: 'Illustrative example — not a live agent response.',
      },
    },
    howItWorks: {
      overview:
        'Docu Agent operates entirely inside your Snowflake Virtual Private Snowflake or Gov region. It transforms unstructured document intake into structured, queryable knowledge graphs without third-party API exfiltration.',
      stages: [
        {
          step: 'Stage 01',
          title: 'Enterprise Connectors & Stage Landing',
          service: 'Snowpipe & Directory Tables',
          description:
            'Connectors continuously pull files from SharePoint, SMB shares, S3, Azure Gov Blob, or mailboxes. Files land into an internal Snowflake stage with directory tables tracking file hash, timestamp, and metadata.',
        },
        {
          step: 'Stage 02',
          title: 'Layout-Aware Cortex OCR & Parsing',
          service: 'Snowflake Cortex AI_PARSE_DOCUMENT',
          description:
            'Parses complex PDFs, scanned forms, tables, and handwritten annotations. Retains tabular structure and layout hierarchy rather than flattening text into disorganized blocks.',
        },
        {
          step: 'Stage 03',
          title: 'Semantic Chunking & Embedding',
          service: 'SPLIT_TEXT_RECURSIVE_CHARACTER & Cortex Embeddings',
          description:
            'Splits text along logical paragraph and section boundaries. Generates dense vector embeddings for high-dimensional semantic indexing alongside full-text inverted indexes.',
        },
        {
          step: 'Stage 04',
          title: 'Structured Field Extraction & Storage',
          service: 'DOC_FIELDS & Dynamic Tables',
          description:
            'Extracts dates, dollar amounts, vendor names, clause categories, and contract numbers into relational tables queryable with standard ANSI SQL.',
        },
        {
          step: 'Stage 05',
          title: 'Cited Agent Serving & Orchestration',
          service: 'Cortex Search & Cortex Analyst',
          description:
            'Hybrid retrieval finds the top relevant chunks; LLM generates an accurate answer containing clickable citations to source files and page numbers.',
        },
      ],
      architectureNotes: [
        'Zero Data Egress: Documents and embeddings remain strictly within your Snowflake account boundary.',
        'Deterministic Lineage: Every answer maps back to an immutable object hash and version in Snowflake stage.',
        'Hybrid Semantic Engine: Vector distance combined with BM25 keyword matching eliminates hallucinations.',
      ],
    },
    useCases: [
      {
        area: 'Grants Management',
        documents: 'Grant applications, notices of award, quarterly financial reports, federal monitoring findings.',
        sampleQuestion: '“Which subrecipients have open audit findings and what corrective actions were mandated?”',
        businessImpact: 'Reduces grant review cycle time from days to minutes while preventing duplicate disbursements.',
      },
      {
        area: 'Procurement & Contracts',
        documents: 'RFPs, vendor master services agreements, addenda, statement of work (SOW), invoices.',
        sampleQuestion: '“Which contracts auto-renew within 90 days and what are their termination notification requirements?”',
        businessImpact: 'Prevents unwanted auto-renewals and standardizes vendor compliance terms across agency portfolios.',
      },
      {
        area: 'Public Records & FOIA',
        documents: 'Agency email correspondence, memorandums, meeting minutes, policy briefs, press packets.',
        sampleQuestion: '“Identify all records mentioning Project Falcon between FY24 Q1 and Q3, flagging any PII.”',
        businessImpact: 'Automates responsive record identification and accelerates redaction review to meet statutory timelines.',
      },
      {
        area: 'Health & Human Services',
        documents: 'Facility inspection reports, provider licensing dossiers, case worker intake records.',
        sampleQuestion: '“Summarize repeat life-safety deficiencies identified across licensed care homes this fiscal year.”',
        businessImpact: 'Enables proactive intervention for vulnerable populations by surfacing chronic compliance patterns.',
      },
      {
        area: 'Permitting & Licensing',
        documents: 'Building permits, civil engineering site plans, environmental impact disclosures, certificates of occupancy.',
        sampleQuestion: '“List all commercial applications submitted in September that are missing a storm runoff study.”',
        businessImpact: 'Eliminates intake backlogs and shortens permit approval turnarounds for local businesses.',
      },
    ],
    exampleQAs: [
      {
        question: '“Which contracts auto-renew within 90 days, and what are their termination terms?”',
        userRole: 'Procurement Director',
        response:
          'Based on an analysis of 34 active vendor agreements, 2 contracts have auto-renewal dates within the next 90 days:\n\n1. Enterprise Cloud Infrastructure (Vendor: Horizon Systems, Agmt #HS-2023-09)\n• Expiration: November 15, 2026\n• Renewal: Auto-renews for 12 months at +4% escalation\n• Termination Notice: Requires written notice 60 days prior (September 16, 2026)\n\n2. Telecommunications Maintenance (Vendor: Metrolink Comms, Agmt #ML-441)\n• Expiration: December 1, 2026\n• Renewal: Auto-renews monthly\n• Termination Notice: Requires 30 days advance notice.',
        citations: [
          'Horizon_Systems_MSA_v3.pdf — Page 18, Clause 12.3 ("Term and Termination")',
          'Metrolink_Telecom_Contract_Executed.pdf — Page 7, Section 4.1',
        ],
        groundingDetail: 'Answers sourced directly from parsed executed contracts stored in stage STG_PROCUREMENT_RAW.',
      },
      {
        question: '“Summarize the allowable travel reimbursement rates specified across all subrecipient awards for FY26.”',
        userRole: 'Compliance Officer',
        response:
          'All FY26 subrecipient agreements adhere to GSA per diem standards, with the following documented exceptions in Subaward #SUB-8812 (Urban Health Init): lodging in high-cost metro sectors is capped at 150% of federal per diem with prior written officer authorization.',
        citations: [
          'FY26_Grant_Guidance_Uniform_Guidance.pdf — Page 42',
          'Subaward_SUB-8812_SpecialConditions.pdf — Page 5, Paragraph 3',
        ],
        groundingDetail: 'Hybrid search matched semantic terms "per diem" and "lodging exceptions" across 12 active grants.',
      },
    ],
    governance: {
      overview:
        'Docu Agent builds on Snowflake Horizon, ensuring that security and compliance follow the user rather than the application. Restricted documents remain invisible to unauthorized roles.',
      controls: [
        {
          title: 'Unified Role-Based Access Control (RBAC)',
          snowflakeFeature: 'Snowflake Grants & Roles',
          description:
            'Users can only query documents and extract fields that their Snowflake role has privileges to read. Unprivileged users receive zero matching chunks.',
        },
        {
          title: 'Dynamic Data Masking & PII Redaction',
          snowflakeFeature: 'Masking Policies & Cortex Guard',
          description:
            'Tax IDs, SSNs, healthcare identifiers, and confidential pricing clauses are dynamically masked in query outputs based on caller security clearance.',
        },
        {
          title: 'Fine-Grained Row Access Policies',
          snowflakeFeature: 'Row Access Policies (RAP)',
          description:
            'Filters search results by program jurisdiction, state code, or contract classification so regional staff only retrieve records within their purview.',
        },
        {
          title: 'Immutable Query Auditing & Lineage',
          snowflakeFeature: 'Snowflake Horizon Access History',
          description:
            'Every natural-language question, underlying vector search query, generated response, and retrieved document chunk is permanently logged for audit review.',
        },
      ],
      complianceNotice:
        'Supports FedRAMP Moderate/High, CJIS, HIPAA, and SOC 2 Type II compliance standards natively inside authorized Snowflake cloud regions.',
    },
  },
  {
    id: 'incident',
    slug: 'incident-summarization',
    route: '/ai/agents/incident-summarization',
    accentClass: 'summarization',
    accentColor: '#6366f1',
    accentBg: '#ede9fe',
    titlePrimary: 'Summarization',
    titleSecondary: 'Agent',
    fullName: 'Incident Summarization Agent',
    heroTagline: 'Continuous Operational Incident Intelligence and Time-Window Briefings',
    subtitle: 'A Snowflake-native agent that turns operational incident noise into actionable briefings.',
    cardDescription: 'Transform incident noise across ServiceNow, Jira, Teams, and alerts into concise briefings, shift handoffs, and audit logs.',
    cardCapabilities: [
      'Multi-channel alert deduplication & correlation',
      'Time-windowed briefings (hourly, daily, weekly)',
      'Read-only operational analysis & audit trails',
    ],
    cardImage: '/assets/ai-agents/new_im/Futuristic Purple Incident Briefing Dashboard.png',
    heroImage: '/assets/ai-agents/new_im/Futuristic Purple Incident Briefing Dashboard.png',
    painPoints: [
      {
        title: 'Information Fractured Across Siloed Tools',
        agencyImpact: 'The ticketing system says one thing, bridge chat in Teams says another, and the real diagnosis sits in an email thread with no unified truth.',
      },
      {
        title: 'Alert Fatigue & Cascading Noise',
        agencyImpact: 'Hundreds of automated telemetry alerts per hour describe only a handful of root issues. Responders waste critical minutes deduplicating alarms.',
      },
      {
        title: 'Lossy Shift Handoff Transitions',
        agencyImpact: 'Overnight incident context is routinely dropped between shifts; incoming leads must scroll hours of messy chat to understand active degradation.',
      },
      {
        title: 'Constant Leadership Interruptions',
        agencyImpact: 'Incident commanders are forced to write manual status briefings every 30 minutes for executives rather than focusing on root-cause remediation.',
      },
    ],
    inputsOutputs: {
      inputs: [
        'ServiceNow Incidents, Problem tickets, and Change Requests',
        'Jira Service Management triage tickets & comments',
        'PagerDuty, Datadog, CloudWatch, and Prometheus webhook telemetry',
        'Microsoft Teams and Slack emergency bridge channels',
        'Alert monitoring mailboxes and automated failure digests',
      ],
      processingEngine: [
        'Snowpipe Streaming event consumer',
        'Dynamic Tables for real-time deduplication and entity clustering',
        'Snowpark Python temporal timeline reconstruction',
        'Snowflake Cortex AI LLM summarization with audience prompt templates',
      ],
      outputs: [
        'Bulleted 8-hour shift handoffs with unresolved blockers highlighted',
        'Executive situation digests (SITREPs) with affected services & customer impact',
        'Root cause analysis (RCA) milestone chronologies for post-mortems',
        'Automated dispatch to Teams channels, email digests, and interactive Q&A agent',
      ],
      storageSchema: [
        'INCIDENT_EVENTS_RAW: Immutable append-only operational event stream',
        'INCIDENTS_NORMALIZED: Normalized ITIL-compliant schema clustered by service',
        'INCIDENT_TIMELINES: Time-indexed milestones (detection, triage, mitigations)',
        'INCIDENT_BRIEFINGS: Persisted, auditable summaries linked to source ticket IDs',
      ],
    },
    overview: {
      whatItDoes:
        'Incident Summarization Agent ingests events, tickets, and chatter from ServiceNow, Jira Service Management, PagerDuty, monitoring alerts, and Microsoft Teams. It normalizes events into a common schema, deduplicates noise, and generates time-windowed operational briefings with exact ticket citations.',
      keyCapabilities: [
        {
          title: 'Cross-Platform Incident Ingestion',
          description: 'Continuously ingests tickets, alert mailboxes, monitoring webhooks, and collaborative incident bridge channels (Teams/Slack) in real-time.',
        },
        {
          title: 'Automated Noise Deduplication & Correlation',
          description: 'Groups hundreds of cascading telemetry alerts into root incidents and affected services using dynamic classification models.',
        },
        {
          title: 'Time-Windowed Multi-Audience Briefings',
          description: 'Generates specialized hourly situation reports, shift handoff logs for incoming leads, and executive briefings for senior leadership.',
        },
        {
          title: 'Strict Read-Only Operational Safety',
          description: 'Engineered as read-only decision support. It never modifies ticket statuses, alters priorities, or executes remediation commands autonomously.',
        },
      ],
      businessProblem:
        'During system degradations, facts are fractured across ticketing systems, bridge chats, and alert emails. Incident commanders spend 40% of their time writing status updates instead of troubleshooting, while context is routinely lost during shift transitions.',
      workflowStages: [
        { id: '1', name: 'Sources', description: 'ServiceNow, Jira SM, PagerDuty, Teams, Mailboxes' },
        { id: '2', name: 'Ingest', description: 'Streaming Snowpipe & Webhook event ingestion' },
        { id: '3', name: 'Normalize & Correlate', description: 'Common event schema, deduplication & service grouping' },
        { id: '4', name: 'Summarize', description: 'Windowed Cortex AI summarization (1h, 8h, 24h, 7d)' },
        { id: '5', name: 'Deliver & Ask', description: 'Teams digest, executive briefs & cited Q&A agent' },
      ],
      supportedSources: [
        'ServiceNow Incidents & Changes',
        'Jira Service Management',
        'PagerDuty / Datadog / CloudWatch',
        'Microsoft Teams Incident Channels',
        'Slack Ops Channels',
        'Alert Email Inboxes',
      ],
      governanceSummary:
        'Governed by Snowflake Horizon. Built with strict read-only permissions; credentials, API keys, and sensitive internal hostnames are scrubbed before summarization. Full auditability over every generated report and ticket citation.',
      exampleQuestion: {
        question: '“What caused the P1 outage on Payment Gateway at 02:14 UTC, and which services are still degraded?”',
        answerSummary:
          'Root cause: TLS certificate expiration on internal ingress load balancer lb-ext-04. The certificate was re-issued and deployed at 02:48 UTC. Payment Gateway is fully operational. Remaining degraded service: Async Notification Queue (processing 18,400 queued webhook retries).',
        citations: [
          'ServiceNow INC0849201 ("Payment API SSL Handshake Failures")',
          'Teams Channel #ops-sev1-bridge (Timestamp 02:49:12 UTC)',
          'PagerDuty Alert #PD-99214',
        ],
        disclaimer: 'Illustrative example — not a live agent response.',
      },
    },
    howItWorks: {
      overview:
        'The agent ingests raw event streams into Snowflake Bronze tables, correlates them with Dynamic Tables in Silver, and generates audience-tailored narrative briefings in Gold through Snowflake Cortex LLMs.',
      stages: [
        {
          step: 'Stage 01',
          title: 'Event & Chat Streaming Ingestion',
          service: 'Snowpipe Streaming & Webhooks',
          description:
            'Captures ticket creation/updates, monitoring notifications, and channel chat messages as immutable append-only JSON event records in INCIDENT_EVENTS_RAW.',
        },
        {
          step: 'Stage 02',
          title: 'Normalization & Service Correlation',
          service: 'Snowflake Dynamic Tables & Tasks',
          description:
            'Maps heterogeneous schemas into a unified public-safety and ITIL incident model. Deduplicates redundant alerts and clusters chatter around active incident IDs.',
        },
        {
          step: 'Stage 03',
          title: 'Timeline Reconstruction & Entity Tagging',
          service: 'Snowpark Python & Cortex AI',
          description:
            'Constructs chronological milestone logs: initial detection, triage assignment, mitigation actions, and verification steps with participant attribution.',
        },
        {
          step: 'Stage 04',
          title: 'Audience-Specific Cortex Summarization',
          service: 'Cortex AI_COMPLETE (Claude / Mistral / Llama)',
          description:
            'Transforms raw timelines into tailored deliverables: a bulleted shift handoff for engineers, an executive brief for directors, or a root cause analysis (RCA) draft.',
        },
        {
          step: 'Stage 05',
          title: 'Multi-Channel Dispatch & Interactive Q&A',
          service: 'Cortex Agent & Teams/Email Webhooks',
          description:
            'Dispatches hourly/daily digests to authorized communication channels and powers interactive follow-up querying with exact source citations.',
        },
      ],
      architectureNotes: [
        'Read-Only Perimeter: No write access to ticketing or infrastructure systems; completely insulated from operational disruption.',
        'Secret Scrubbing: Pre-processing filters remove passwords, JWT tokens, IP address segments, and internal keys before LLM summarization.',
        'Deterministic Temporal Windows: Summaries strictly respect specified time bounds (e.g. exactly 00:00 to 08:00 UTC shift).',
      ],
    },
    useCases: [
      {
        area: '24/7 IT Operations Center',
        documents: 'ServiceNow active tickets, monitoring threshold alerts, Teams bridge transcripts, on-call paging logs.',
        sampleQuestion: '“Generate the 08:00 shift handoff summary highlighting all unresolved Sev-1 and Sev-2 incidents.”',
        businessImpact: 'Saves 45 minutes per shift lead at handover; eliminates dropped context during overnight transitions.',
      },
      {
        area: 'Cybersecurity Incident Response (SOC)',
        documents: 'SIEM alert clusters, EDR incident tickets, triage chat channels, quarantine action logs.',
        sampleQuestion: '“Summarize the containment actions taken for host isolation incident INC-9281 over the last 6 hours.”',
        businessImpact: 'Produces defensible, cited chronologies required for regulatory disclosures (e.g. CISA, state CISOs).',
      },
      {
        area: 'Public Safety & Emergency Ops',
        documents: 'Computer-Aided Dispatch (CAD) logs, multi-agency dispatch channels, situational SITREPs.',
        sampleQuestion: '“Provide an executive summary of severe weather road closures and emergency shelter capacity.”',
        businessImpact: 'Enables leadership to grasp regional operational state without distracting field incident commanders.',
      },
      {
        area: 'Post-Incident Review (PIR/RCA)',
        documents: 'Resolved incident records, metric snapshots, remediation commit logs, retrospectives.',
        sampleQuestion: '“Draft an initial timeline of key milestones and responder decisions for the database failover on Tuesday.”',
        businessImpact: 'Cuts post-mortem authoring time from 3 days to 2 hours while preserving an objective audit log.',
      },
    ],
    exampleQAs: [
      {
        question: '“Provide a shift-handoff summary for the last 8 hours focusing on high-priority tickets and open blockers.”',
        userRole: 'Incoming Operations Lead',
        response:
          'Shift Summary (00:00 - 08:00 UTC):\n\nTotal Incidents Logged: 14 | Resolved: 11 | Active Blocker: 1\n\n• OPEN BLOCKER: INC-8829 (Enterprise SSO Latency)\n- Severity: P2 (Degraded)\n- Status: In progress with Identity Infrastructure team\n- Key Action: Token cache cleared at 05:22 UTC; 95th percentile latency reduced from 4.2s to 1.1s, but error rates remain elevated for EMEA endpoints.\n- Next Step: Vendor support engagement pending EMEA network routing trace.\n\n• RESOLVED: INC-8824 (Batch File Sync to State Archive)\n- Resolved at 03:40 UTC by automated retry queue upon SFTP socket reset.',
        citations: [
          'ServiceNow INC-8829 Activity Log (Updated 07:44 UTC)',
          'Teams Channel #identity-ops (Chat snippet from Lead Engineer)',
          'CloudWatch Alarm ALARM_ID_SSO_P95',
        ],
        groundingDetail: 'Correlated across 3 ServiceNow tickets, 142 Teams chat messages, and 12 monitoring alarms.',
      },
      {
        question: '“Which external-facing services experienced downtime this week, and what was the cumulative impact?”',
        userRole: 'VP of Technology',
        response:
          'Across the 7-day period (Oct 15 - Oct 22), 2 external services had recorded outages:\n1. Citizen Portal Login (28 min cumulative downtime across 2 events; caused by IdP rate-limiting during peak open enrollment).\n2. Document Upload API (14 min partial degradation; caused by cloud storage bucket throttling during annual tax filing dump). All other services maintained 99.98%+ uptime.',
        citations: [
          'Weekly Incident Metrics Summary (Table: INCIDENT_METRICS_WEEKLY)',
          'ServiceNow INC-8790, INC-8815',
        ],
        groundingDetail: 'Aggregated via SQL over normalized incident tables with verified duration calculations.',
      },
    ],
    governance: {
      overview:
        'Incident data frequently contains employee PII, customer accounts, and internal IP topology. Snowflake Horizon ensures enterprise data minimization, audit immutability, and zero writeback risk.',
      controls: [
        {
          title: 'Read-Only Integration Principle',
          snowflakeFeature: 'Granular Warehouse & Role Privileges',
          description:
            'The agent operates under dedicated read-only service accounts. It cannot edit ticket status, assign personnel, or execute remote command invocations.',
        },
        {
          title: 'Automated Credential & Secret Redaction',
          snowflakeFeature: 'Regex Masking & Cortex Guard',
          description:
            'Pre-ingestion filtering automatically redacts authorization headers, access keys, internal passwords, and database connection strings before table insertion.',
        },
        {
          title: 'Tiered Visibility by Incident Clearance',
          snowflakeFeature: 'Row Access Policies (RAP)',
          description:
            'Security incident summaries (Sev-0/SOC) are restricted to cleared security leads, while general infrastructure operational reports are broadly visible.',
        },
        {
          title: 'Complete Reproducibility & Audit Trail',
          snowflakeFeature: 'Snowflake Horizon Lineage & Event History',
          description:
            'Every generated briefing records the exact snapshot of tickets, alert timestamps, and channel messages that informed the synthesis.',
        },
      ],
      complianceNotice:
        'Meets CJIS, FedRAMP, and NIST 800-53 incident documentation guidelines without moving operational data outside your agency boundary.',
    },
  },
  {
    id: 'forecast',
    slug: 'forecasting',
    route: '/ai/agents/forecasting',
    accentClass: 'forecast',
    accentColor: '#0891b2',
    accentBg: '#cffafe',
    titlePrimary: 'Forecast',
    titleSecondary: 'Agent',
    fullName: 'Forecasting Agent',
    heroTagline: 'Defensible Machine Learning Forecasts and What-If Scenario Simulations',
    subtitle: 'A Snowflake-native agent that turns planning data and spreadsheets into explainable forecasts.',
    cardDescription: 'Convert historical planning spreadsheets into defensible, explainable forecasts with prediction intervals and scenario modeling.',
    cardCapabilities: [
      'Automated column mapping & data profiling',
      'Cortex ML forecasting & 80%/95% confidence bounds',
      'What-if scenario analysis & driver explanations',
    ],
    cardImage: '/assets/ai-agents/new_im/Futuristic AI Analytics Dashboard.png',
    heroImage: '/assets/ai-agents/new_im/Futuristic AI Analytics Dashboard.png',
    painPoints: [
      {
        title: 'Spreadsheet Sprawl & Version Confusion',
        agencyImpact: 'Planning actuals live across disparate workbooks ("budget_v4_FINAL_real.xlsx") circulating via email with zero provenance.',
      },
      {
        title: 'Massive Data Wrangling Overhead',
        agencyImpact: 'Financial analysts spend 80% of their month cleaning dates, reconciling fiscal years, and filling missing periods, leaving minimal time for analysis.',
      },
      {
        title: 'Indefensible Assumptions in Oversight Audits',
        agencyImpact: 'Cell formulas break and assumptions are undocumented when legislative committees or auditors request mathematical validation.',
      },
      {
        title: 'Static Annual Planning Cycles',
        agencyImpact: 'Traditional forecasts refresh only once or twice a year, leaving leadership completely blind to mid-year revenue shortfalls or caseload surges.',
      },
    ],
    inputsOutputs: {
      inputs: [
        'Excel workbooks (.xlsx, .xls) from SharePoint and shared folders',
        'CSV, TSV, and delimited data extracts from transactional databases',
        'Enterprise Resource Planning (ERP) exports (SAP, Workday, NetSuite)',
        'Budget and EPM planning platform feeds',
        'Automated mailbox attachments containing field office submissions',
      ],
      processingEngine: [
        'Automated macro sanitization & malware quarantine',
        'Snowpark AI schema profiling & automated date/calendar reconciliation',
        'Snowflake Cortex ML forecasting (gradient-boosted time-series regression)',
        'Snowflake Cortex Anomaly Detection for outlier classification',
      ],
      outputs: [
        'Point-estimate projections across 3, 6, 12, and 24-month forecast horizons',
        '80% and 95% prediction interval uncertainty boundaries',
        'Plain-English macroeconomic and seasonal driver decomposition',
        'Interactive What-If parameter sweeps and scenario comparison tables',
      ],
      storageSchema: [
        'TIMESERIES_ACTUALS_RAW: Sanitized historical intake observations',
        'TIMESERIES_CANONICAL: Imputed, standardized time-series with unified fiscal calendars',
        'FORECAST_MODELS: Versioned model artifacts in Snowflake Model Registry',
        'FORECAST_PREDICTIONS: Output distributions, prediction intervals, and anomaly flags',
      ],
    },
    overview: {
      whatItDoes:
        'Forecasting Agent connects to planning tools, ERP extracts, and messy Excel/CSV workbooks scattered across SharePoint and email. It standardizes historical data into Snowflake time-series tables, runs validated machine learning models (Snowflake Cortex ML), and produces defensible forecasts with prediction intervals and plain-language driver explanations.',
      keyCapabilities: [
        {
          title: 'Heterogeneous File & Sheet Intake',
          description: 'Ingests Excel workbooks, multi-tab sheets, CSV extracts, and ERP planning dumps from SharePoint, shared drives, and email without manual reformatting.',
        },
        {
          title: 'AI-Assisted Schema Normalization',
          description: 'Automatically profiles data quality, identifies missing fiscal periods, maps inconsistent column names, and reconciles fiscal calendars.',
        },
        {
          title: 'Defensible Cortex ML Forecasting',
          description: 'Leverages automated gradient-boosted time-series models with automated anomaly detection, seasonality modeling, and 80% & 95% prediction intervals.',
        },
        {
          title: 'Interactive What-If & Scenario Modeling',
          description: 'Allows analysts to simulate macroeconomic shifts, budget constraints, or policy changes (e.g., “What if hiring slows by 15%?”) in real-time.',
        },
      ],
      businessProblem:
        'Public-sector and enterprise forecasts are often trapped in version-sprawled Excel files (“budget_v4_final_REAL.xlsx”). Analysts spend 80% of their time wrangling messy numbers and cannot defend assumptions to auditors or legislative committees.',
      workflowStages: [
        { id: '1', name: 'Sources', description: 'Planning tools, ERP extracts, Excel, CSV, SharePoint' },
        { id: '2', name: 'Ingest', description: 'Safe intake with malware scanning & zero macro execution' },
        { id: '3', name: 'Understand & Prepare', description: 'AI column mapping, gap profiling & time series tables' },
        { id: '4', name: 'Forecast', description: 'Cortex ML forecasting, anomaly detection & back-testing' },
        { id: '5', name: 'Explain & Ask', description: 'Cortex Analyst Q&A, what-if scenarios & confidence bounds' },
      ],
      supportedSources: [
        'Excel Workbooks (.xlsx, .xls)',
        'CSV & Delimited Extracts',
        'ERP & Finance Systems (SAP, Workday)',
        'Planning & EPM Applications',
        'SharePoint & Shared Drives',
        'Automated Mailbox Attachments',
      ],
      governanceSummary:
        'Governed by Snowflake Horizon. Incorporates model registry versioning, back-testing validation, aggregation thresholds to prevent individual record re-identification, and full data lineage from source workbook to published forecast.',
      exampleQuestion: {
        question: '“What is the projected revenue shortfall for Q3 if current demand trends continue, and what are the 95% confidence bounds?”',
        answerSummary:
          'Projected Q3 baseline revenue: $42.8M (a $2.4M shortfall against the $45.2M budget target). The 95% confidence prediction interval ranges between $40.6M and $44.9M. Key drivers: 8.2% drop in commercial licensing renewals and seasonal Q3 procurement slowdowns.',
        citations: [
          'Historical_Actuals_FY22_FY25.xlsx (Sheet: "Quarterly_Revenue")',
          'Model: CORTEX_ML_FORECAST_REV_V3 (MAPE: 3.8%)',
        ],
        disclaimer: 'Illustrative example — not a live agent response.',
      },
    },
    howItWorks: {
      overview:
        'The agent blends automated data pipeline engineering with statistical and machine learning models running directly inside Snowflake. Statistical algorithms calculate the numbers; LLMs orchestrate the pipeline and explain drivers in plain English.',
      stages: [
        {
          step: 'Stage 01',
          title: 'File Intake & Secure Sanitization',
          service: 'Snowpipe & External Stage',
          description:
            'Uploads planning workbooks into Snowflake external stages. Performs malware verification and extracts raw cell data without running macros or executable formulas.',
        },
        {
          step: 'Stage 02',
          title: 'AI Schema Understanding & Imputation',
          service: 'Cortex AI & Snowpark Python',
          description:
            'Interprets disparate column headers, reconciles varying fiscal year calendars, flags missing periods, and constructs clean standardized time-series tables.',
        },
        {
          step: 'Stage 03',
          title: 'Model Training & Back-Testing',
          service: 'Snowflake Cortex ML Forecasting',
          description:
            'Trains ensemble gradient-boosted time-series models on historical actuals. Automatically back-tests across historical test windows to verify accuracy (MAPE & RMSE).',
        },
        {
          step: 'Stage 04',
          title: 'Prediction Intervals & Anomaly Flags',
          service: 'Cortex Anomaly Detection',
          description:
            'Generates point estimates alongside 80% and 95% confidence boundaries. Flags historical outliers and structural shifts in seasonal trends.',
        },
        {
          step: 'Stage 05',
          title: 'Explainable Agent & Scenario Simulator',
          service: 'Cortex Analyst & Streamlit in Snowflake',
          description:
            'Enables analysts to ask conversational questions, decompose variance into underlying macroeconomic drivers, and simulate what-if adjustments.',
        },
      ],
      architectureNotes: [
        'Separation of Concerns: LLMs do not invent or hallucinate forecast numbers; dedicated Snowflake statistical ML models compute the math.',
        'Auditable Reproducibility: Every forecast run links back to the specific model version, training hyperparameters, and dataset snapshot.',
        'Human-in-the-Loop: Forecasts serve strictly as decision support and cannot overwrite official agency budget ledgers without human approval.',
      ],
    },
    useCases: [
      {
        area: 'Revenue & Tax Receipt Planning',
        documents: 'Sales tax receipts, property tax rolls, franchise fee filings, historical quarterly budget journals.',
        sampleQuestion: '“What is the 12-month sales tax forecast, and what is the risk of falling below budget baseline?”',
        businessImpact: 'Provides finance directors with defensible ranges and early warnings for mid-year budget adjustments.',
      },
      {
        area: 'Caseload & Benefits Intake',
        documents: 'Medicaid/SNAP monthly application logs, unemployment filings, call center intake metrics.',
        sampleQuestion: '“Project SNAP eligibility application volume for winter months, incorporating seasonal heating trends.”',
        businessImpact: 'Prevents constituent service backlogs by aligning caseworker staffing 90 days before peak surge.',
      },
      {
        area: 'Workforce & Caseworker Capacity',
        documents: 'Active employee counts, attrition tables, requisition lead times, retirement eligibility rosters.',
        sampleQuestion: '“Project field inspection capacity over the next 4 quarters assuming 8% historical annual attrition.”',
        businessImpact: 'Enables proactive recruitment planning, avoiding critical statutory inspection deficits.',
      },
      {
        area: 'Public Infrastructure & Capital Works',
        documents: 'Contractor draw schedules, materials price indices, project milestone logs, federal reimbursement streams.',
        sampleQuestion: '“What is the projected cash disbursement schedule for highway projects across Q3 and Q4?”',
        businessImpact: 'Optimizes treasury cash management and avoids premature municipal bond issuance costs.',
      },
    ],
    exampleQAs: [
      {
        question: '“What is the projected revenue shortfall for Q3 if current demand trends continue, and what are the 95% confidence bounds?”',
        userRole: 'Budget Director',
        response:
          'Q3 FY26 Revenue Projections:\n\n• Point Estimate: $42.8M (projected variance: -$2.4M vs adopted budget of $45.2M)\n• 80% Confidence Interval: $41.7M – $43.9M\n• 95% Confidence Interval: $40.6M – $44.9M\n\nPrimary Contributing Drivers:\n1. Commercial Permitting Fees: -14.2% YoY (reflects regional commercial construction lending slowdown)\n2. Intergovernmental Transfers: On schedule ($12.0M baseline)\n3. Municipal Utility Royalties: +2.1% YoY (modest positive offset)\n\nRecommendation: The probability of exceeding the $45.2M budget target without intervention is under 6%. Review discretionary expenditure reserves.',
        citations: [
          'Historical_Revenue_FY20_FY25.xlsx (Table: REV_MONTHLY_ACTUALS)',
          'Model: CORTEX_FORECAST_REV_Q3_V2 (Back-test MAPE: 3.4%)',
        ],
        groundingDetail: 'Computed via Snowflake Cortex ML with holiday calendars and inflation indices as exogenous features.',
      },
      {
        question: '“Run a scenario: What happens to total expenditure if medical inflation increases by 2.5% in Q4?”',
        userRole: 'Healthcare Program Analyst',
        response:
          'Under the +2.5% medical inflation scenario:\n• Q4 Projected Claims Cost increases from $18.2M to $19.65M (+$1.45M delta).\n• Cumulative FY surplus narrows from +$2.1M to +$650K.\n• Prediction interval widens to [$18.9M – $20.4M] at 90% confidence.',
        citations: [
          'HHS_Claims_Actuarial_Model_2026.xlsx',
          'Dynamic Scenario Function: SIM_INFLATION_ADJUST(rate=0.025)',
        ],
        groundingDetail: 'Real-time parameter sweep executed in Snowpark against normalized claims history.',
      },
    ],
    governance: {
      overview:
        'Forecasting models must be explainable, transparent, and defensible to legislators, auditors, and oversight councils. Snowflake Horizon guarantees complete reproducibility and model governance.',
      controls: [
        {
          title: 'Snowflake Model Registry & Versioning',
          snowflakeFeature: 'Snowflake Model Registry',
          description:
            'Every generated forecast is stamped with the exact model version, training data snapshot, feature weights, and validation metrics (MAPE, RMSE).',
        },
        {
          title: 'Aggregation Thresholds & Privacy Protection',
          snowflakeFeature: 'Aggregation Policies & Horizon Masking',
          description:
            'Enforces minimum cohort sizes (k-anonymity) on underlying actuals to prevent indirect re-identification of individual vendors or citizens.',
        },
        {
          title: 'Back-Testing & Drift Monitoring',
          snowflakeFeature: 'Continuous Evaluation Tasks',
          description:
            'Continuously monitors forecast accuracy against realized actuals. Automatically triggers alerts when variance exceeds confidence thresholds.',
        },
        {
          title: 'Defensible Decision-Support Guardrails',
          snowflakeFeature: 'Read-Only Service Isolation',
          description:
            'Outputs are classified as decision support. No automatic modifications to financial ledgers or official published reports can occur without human sign-off.',
        },
      ],
      complianceNotice:
        'Designed to fulfill GASB (Governmental Accounting Standards Board) and federal OMB Circular A-11 defensibility requirements.',
    },
  },
];

/**
 * Helper to retrieve an agent by its slug or ID with alias resolution
 */
export function getAgentBySlug(slug: string): AgentFullData | undefined {
  const normalized = slug.toLowerCase().trim();
  return AI_AGENTS_DATA.find(
    (a) =>
      a.slug === normalized ||
      a.id === normalized ||
      (normalized === 'incident' && a.id === 'incident') ||
      (normalized === 'forecast' && a.id === 'forecast') ||
      (normalized === 'summarization' && a.id === 'incident')
  );
}
