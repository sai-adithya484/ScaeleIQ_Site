export interface Job {
  id: string;
  title: string;
  location: string;
  department: string;
  employmentType: string;
  workMode: 'On-site' | 'Hybrid' | 'Remote';
  applyUrl: string;
}

export const locationsList = ['All Locations', 'San Francisco, US', 'Delhi, India'];

export const departmentsList = ['All Departments', 'Engineering', 'Product', 'Executives', 'Sales', 'HR', 'Delivery'];

export const jobs: Job[] = [
  {
    id: 'delivery-mgr-sf',
    title: 'Delivery Manager',
    location: 'San Francisco, US',
    department: 'Delivery',
    employmentType: 'Full time',
    workMode: 'On-site',
    applyUrl: 'mailto:careers@scaeleiq.ai?subject=Application:%20Delivery%20Manager%20(SF)',
  },
  {
    id: 'delivery-mgr-delhi',
    title: 'Delivery Manager',
    location: 'Delhi, India',
    department: 'Delivery',
    employmentType: 'Full time',
    workMode: 'On-site',
    applyUrl: 'mailto:careers@scaeleiq.ai?subject=Application:%20Delivery%20Manager%20(Delhi)',
  },
  {
    id: 'head-partnerships-sf',
    title: 'Head of Partnerships',
    location: 'San Francisco, US',
    department: 'Sales',
    employmentType: 'Full time',
    workMode: 'On-site',
    applyUrl: 'mailto:careers@scaeleiq.ai?subject=Application:%20Head%20of%20Partnerships',
  },
  {
    id: 'solutions-architect-sf',
    title: 'Solutions Architect',
    location: 'San Francisco, US',
    department: 'Engineering',
    employmentType: 'Full time',
    workMode: 'On-site',
    applyUrl: 'mailto:careers@scaeleiq.ai?subject=Application:%20Solutions%20Architect',
  },
  {
    id: 'bdr-sf',
    title: 'Business Development Representative',
    location: 'San Francisco, US',
    department: 'Sales',
    employmentType: 'Full time',
    workMode: 'On-site',
    applyUrl: 'mailto:careers@scaeleiq.ai?subject=Application:%20BDR',
  },
  {
    id: 'data-engineer-delhi',
    title: 'Data Engineer',
    location: 'Delhi, India',
    department: 'Engineering',
    employmentType: 'Full time',
    workMode: 'On-site',
    applyUrl: 'mailto:careers@scaeleiq.ai?subject=Application:%20Data%20Engineer',
  },
  {
    id: 'pm-ai-agent-delhi',
    title: 'Product Manager – AI Agent Platform',
    location: 'Delhi, India',
    department: 'Engineering',
    employmentType: 'Full time',
    workMode: 'On-site',
    applyUrl: 'mailto:careers@scaeleiq.ai?subject=Application:%20PM%20AI%20Agent',
  },
  {
    id: 'dir-eng-delhi',
    title: 'Director of Engineering',
    location: 'Delhi, India',
    department: 'Engineering',
    employmentType: 'Full time',
    workMode: 'On-site',
    applyUrl: 'mailto:careers@scaeleiq.ai?subject=Application:%20Director%20of%20Engineering',
  },
  {
    id: 'pm-sf',
    title: 'Product Manager',
    location: 'San Francisco, US',
    department: 'Product',
    employmentType: 'Full time',
    workMode: 'Hybrid',
    applyUrl: 'mailto:careers@scaeleiq.ai?subject=Application:%20Product%20Manager%20(SF)',
  },
  {
    id: 'sr-ai-eng-global',
    title: 'Sr. AI Engineer',
    location: 'Delhi, India and San Francisco, US',
    department: 'Engineering',
    employmentType: 'Full time',
    workMode: 'Remote',
    applyUrl: 'mailto:careers@scaeleiq.ai?subject=Application:%20Sr%20AI%20Engineer',
  },
  {
    id: 'gen-ai-eng-global',
    title: 'Generative AI Engineer',
    location: 'Delhi, India and San Francisco, US',
    department: 'Engineering',
    employmentType: 'Full time',
    workMode: 'On-site',
    applyUrl: 'mailto:careers@scaeleiq.ai?subject=Application:%20Generative%20AI%20Engineer',
  },
  {
    id: 'fde-sf',
    title: 'Forward Deployed Engineer',
    location: 'San Francisco, US',
    department: 'Engineering',
    employmentType: 'Full time',
    workMode: 'On-site',
    applyUrl: 'mailto:careers@scaeleiq.ai?subject=Application:%20Forward%20Deployed%20Engineer',
  },
];
