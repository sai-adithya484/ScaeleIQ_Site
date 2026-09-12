export interface LegalSection {
  id: string;
  title: string;
  subsections?: {
    subtitle?: string;
    paragraphs: string[];
  }[];
}

export const privacyPolicyContent: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
} = {
  title: 'ScaeleIQ Privacy Policy',
  lastUpdated: 'January 19, 2026',
  intro: 'ScaeleIQ Inc. ("ScaeleIQ", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share your personal information when you visit our website, use our platform, or interact with our services.',
  sections: [
    {
      id: 'info-we-collect',
      title: '1. Information We Collect',
      subsections: [
        {
          subtitle: '1.1 Information You Provide Voluntarily',
          paragraphs: [
            'We collect personal information that you provide when requesting a product demonstration, applying for employment opportunities, contacting sales, or subscribing to our newsletters. This includes your name, business email address, phone number, company name, and job role.',
          ],
        },
        {
          subtitle: '1.2 Information Collected Automatically',
          paragraphs: [
            'When you access our digital properties, our servers automatically log standard diagnostic data, including your IP address, browser type, operating system, referring URLs, device identifiers, and timestamps.',
          ],
        },
      ],
    },
    {
      id: 'how-we-use-info',
      title: '2. How We Use Your Information',
      subsections: [
        {
          paragraphs: [
            'We utilize collected data to provide, operate, maintain, and enhance our platform; respond to inquiries and provide customer support; evaluate employment candidates; monitor security anomalies; and fulfill enterprise legal and regulatory obligations.',
          ],
        },
      ],
    },
    {
      id: 'security-data-retention',
      title: '3. Data Security & Enterprise Isolation',
      subsections: [
        {
          paragraphs: [
            'We enforce multi-layered defense-in-depth protocols, including end-to-end TLS 1.3 encryption in transit, AES-256 encryption at rest, role-based access control (RBAC), and strict zero-retention tenant sandboxing for customer code and enterprise data assets.',
          ],
        },
      ],
    },
    {
      id: 'contact-privacy',
      title: '4. Contact Our Privacy Office',
      subsections: [
        {
          paragraphs: [
            'If you have questions, data subject access requests (DSAR), or privacy inquiries, please contact our Data Protection Officer at privacy@scaeleiq.ai.',
          ],
        },
      ],
    },
  ],
};
