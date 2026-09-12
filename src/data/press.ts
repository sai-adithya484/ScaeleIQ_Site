export interface PressItem {
  id: string;
  outlet: string;
  headline: string;
  summary: string;
  date: string;
  url: string;
}

export const pressMentions: PressItem[] = [
  {
    id: 'cio-dive-feature',
    outlet: 'CIO Dive',
    headline: 'How ScaeleIQ Is Rewriting Enterprise IT Modernization With Agent Swarms',
    summary: 'Autonomous data migration and ontology-building AI agents deliver enterprise transformation projects in weeks rather than quarters.',
    date: '2025',
    url: 'https://ciodive.com',
  },
];
