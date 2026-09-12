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
  kicker: 'The $1.5 trillion IT services industry is being rewritten.',
  heading: 'We’re writing the first chapter: the IT modernization platform built for the Agentic era.',
  description: 'Deploy specialized AI agents and forward-deployed engineers to accelerate your transformation today.',
  primaryButton: { label: 'Start your transformation', href: '/demo' },
  secondaryButton: { label: 'Contact sales', href: '/contact' },
};
