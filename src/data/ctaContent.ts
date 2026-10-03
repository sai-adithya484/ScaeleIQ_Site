export interface CtaConfig {
  kicker?: string;
  heading: string;
  highlightWord?: string;
  description: string;
  primaryButton: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
}

export const platformCta: CtaConfig = {
  heading: 'Modernization measured in weeks.',
  highlightWord: 'Modernization',
  description: 'Join the enterprises already using ScaeleIQ to clean data, migrate systems, and adopt AI.',
  primaryButton: { label: 'Get a proposal', href: '/demo' },
  secondaryButton: { label: 'Contact sales', href: '/contact' },
};

export const homeCta: CtaConfig = {
  heading: 'Enterprise data modernization — measured in weeks, not quarters.',
  description: 'Deploy AI agents and domain experts to modernize your data infrastructure. Governance, intelligence, and integration — all from one platform.',
  primaryButton: { label: 'Request a demo', href: '/demo' },
  secondaryButton: { label: 'Contact sales', href: '/contact' },
};
