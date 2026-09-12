export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: 'Data', href: '/data' },
  { label: 'AI', href: '/ai' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Company', href: '/about' },
];

export const ctaButton = {
  label: 'Contact',
  href: '/demo',
};
