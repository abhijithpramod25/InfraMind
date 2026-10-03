'use client';

import { PanelLeftClose, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navigationItems } from '@/constants/navigation';
import { cn } from '@/lib/utils';
import { usePlatformStore } from '@/stores/platform-store';

export function Sidebar({
  isMobileOpen,
  onMobileClose,
}: {
  isMobileOpen: boolean;
  onMobileClose: () => void;
}) {
  const pathname = usePathname();
  const { isSidebarCollapsed, toggleSidebar } = usePlatformStore();
  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 flex-col border-r border-line bg-surface px-3 py-4 transition-transform duration-200 md:relative md:z-auto md:translate-x-0 md:transition-[width]',
        isMobileOpen ? 'translate-x-0' : '-translate-x-full',
        isSidebarCollapsed ? 'md:w-16' : 'md:w-64',
      )}
    >
      <div className="mb-7 flex items-center justify-between px-1">
        <Link
          aria-label="InfraMind dashboard"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
          href="/"
          onClick={onMobileClose}
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-signal text-canvas">
            <ShieldCheck size={17} />
          </span>
          {!isSidebarCollapsed && <span>InfraMind</span>}
        </Link>
        <button
          aria-label="Collapse sidebar"
          className="rounded p-1.5 text-muted hover:bg-panel hover:text-foreground"
          onClick={toggleSidebar}
          type="button"
        >
          <PanelLeftClose size={17} />
        </button>
      </div>
      <nav aria-label="Main navigation" className="space-y-1">
        {navigationItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              aria-current={active ? 'page' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-md px-2.5 py-2 text-sm transition',
                active
                  ? 'bg-panel text-foreground'
                  : 'text-muted hover:bg-panel hover:text-foreground',
              )}
              href={item.href}
              key={item.href}
              onClick={onMobileClose}
              title={isSidebarCollapsed ? item.label : undefined}
            >
              <item.icon aria-hidden="true" size={18} />
              {!isSidebarCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
