export interface Investor {
  name: string;
  category: string;
  url: string;
}

export const investors: Investor[] = [
  { name: 'Slow Ventures', category: 'Seed & Early Stage Venture Capital', url: 'https://slow.co' },
  { name: 'Civilization Ventures', category: 'Frontier Tech & AI Investors', url: 'https://civilizationventures.com' },
  { name: 'Founder Collective', category: 'Founder-First Seed Fund', url: 'https://foundercollective.com' },
  { name: 'Hunch Ventures', category: 'Global Innovation & Growth Capital', url: 'https://hunchventures.com' },
];
