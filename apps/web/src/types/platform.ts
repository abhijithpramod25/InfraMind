import type { LucideIcon } from 'lucide-react';

export type Theme = 'dark' | 'light';
export type Status = 'healthy' | 'warning' | 'critical' | 'offline' | 'unknown';

export interface NavigationItem {
  href: string;
  icon: LucideIcon;
  label: string;
  description: string;
}

export interface PageDefinition {
  title: string;
  description: string;
  eyebrow: string;
  emptyTitle: string;
  emptyDescription: string;
}
