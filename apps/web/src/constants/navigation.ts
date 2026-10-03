import {
  Bot,
  Boxes,
  ChartNoAxesCombined,
  FolderKanban,
  Gauge,
  Home,
  Rocket,
  ScrollText,
  Settings,
  Siren,
} from 'lucide-react';

import type { NavigationItem, PageDefinition } from '@/types/platform';

export const navigationItems: NavigationItem[] = [
  { href: '/', icon: Home, label: 'Dashboard', description: 'Operational starting point' },
  {
    href: '/projects',
    icon: FolderKanban,
    label: 'Projects',
    description: 'Organize service ownership',
  },
  {
    href: '/infrastructure',
    icon: Boxes,
    label: 'Infrastructure',
    description: 'Cloud resources and topology',
  },
  { href: '/services', icon: Gauge, label: 'Services', description: 'Application service catalog' },
  {
    href: '/deployments',
    icon: Rocket,
    label: 'Deployments',
    description: 'Change and release history',
  },
  {
    href: '/metrics',
    icon: ChartNoAxesCombined,
    label: 'Metrics',
    description: 'Signals and time series',
  },
  { href: '/logs', icon: ScrollText, label: 'Logs', description: 'Searchable operational events' },
  { href: '/incidents', icon: Siren, label: 'Incidents', description: 'Response coordination' },
  {
    href: '/ai-assistant',
    icon: Bot,
    label: 'AI Assistant',
    description: 'Guided investigation workspace',
  },
  { href: '/settings', icon: Settings, label: 'Settings', description: 'Workspace preferences' },
];

export const pageDefinitions: Record<string, PageDefinition> = {
  projects: {
    title: 'Projects',
    description: 'Organize the systems your workspace will operate.',
    eyebrow: 'Workspace catalog',
    emptyTitle: 'No projects connected',
    emptyDescription: 'Projects will appear here when source integrations are introduced.',
  },
  infrastructure: {
    title: 'Infrastructure',
    description: 'A future home for cloud resources and their relationships.',
    eyebrow: 'Resource topology',
    emptyTitle: 'Infrastructure is not connected',
    emptyDescription:
      'Connect an infrastructure source in a future release to begin building topology.',
  },
  services: {
    title: 'Services',
    description: 'A dependable catalog for the services your teams own.',
    eyebrow: 'Service catalog',
    emptyTitle: 'No services registered',
    emptyDescription: 'Service ownership and health context will appear here when configured.',
  },
  deployments: {
    title: 'Deployments',
    description: 'A timeline designed to put changes in operational context.',
    eyebrow: 'Change history',
    emptyTitle: 'No deployment sources connected',
    emptyDescription: 'Deployment history will become available after a source is configured.',
  },
  metrics: {
    title: 'Metrics',
    description: 'A focused workspace for future operational signals.',
    eyebrow: 'Signals',
    emptyTitle: 'Metrics are not connected',
    emptyDescription: 'Add a metrics integration in a future phase to explore service signals.',
  },
  logs: {
    title: 'Logs',
    description: 'A search-oriented home for future operational events.',
    eyebrow: 'Event exploration',
    emptyTitle: 'Logs are not connected',
    emptyDescription: 'Log streams will appear once a compatible source is configured.',
  },
  incidents: {
    title: 'Incidents',
    description: 'A future collaboration surface for responding to service disruption.',
    eyebrow: 'Response',
    emptyTitle: 'No incident workflow configured',
    emptyDescription: 'Incident context will appear after response capabilities are introduced.',
  },
  'ai-assistant': {
    title: 'AI Assistant',
    description: 'A reserved space for guided operational investigation.',
    eyebrow: 'Investigation',
    emptyTitle: 'AI assistance is not configured',
    emptyDescription: 'This workspace is ready for a future investigation experience.',
  },
  settings: {
    title: 'Settings',
    description: 'Workspace preferences and platform configuration.',
    eyebrow: 'Configuration',
    emptyTitle: 'Workspace settings will appear here',
    emptyDescription: 'Available preferences will expand as platform capabilities are enabled.',
  },
};
