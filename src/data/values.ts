export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const companyValues: CompanyValue[] = [
  {
    id: 'challenge-status-quo',
    title: 'Challenge the status quo',
    description: 'We believe multi-year consulting timelines are an artifact of the past. We continuously question convention to deliver orders of magnitude higher speed.',
    iconName: 'zap',
  },
  {
    id: 'deliver-delight',
    title: "Don't just deliver, delight",
    description: 'Every interface, migration pipeline, and automated agent we build is crafted to exceed enterprise expectations with absolute precision.',
    iconName: 'heart',
  },
  {
    id: 'think-deep-go-fast',
    title: 'Think deep, to go fast',
    description: 'Rigorous architectural planning and deep semantic modeling unlock unprecedented velocity during execution.',
    iconName: 'compass',
  },
];
