'use client';

import { useState, type ReactNode } from 'react';

import { CommandPalette } from '@/components/platform/command-palette';
import { Sidebar } from '@/components/platform/sidebar';
import { Topbar } from '@/components/platform/topbar';
import { ErrorBoundary } from '@/components/shared/error-boundary';
import { useCommandPalette } from '@/hooks/use-command-palette';

export function PlatformShell({ children }: { children: ReactNode }) {
  const { isOpen, setIsOpen } = useCommandPalette();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen bg-canvas text-foreground">
        {isMobileNavOpen && (
          <button
            aria-label="Close navigation"
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
            onClick={() => setIsMobileNavOpen(false)}
            type="button"
          />
        )}
        <Sidebar isMobileOpen={isMobileNavOpen} onMobileClose={() => setIsMobileNavOpen(false)} />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar
            onOpenCommands={() => setIsOpen(true)}
            onOpenMobileNav={() => setIsMobileNavOpen(true)}
          />
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-7 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
        <CommandPalette isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </ErrorBoundary>
  );
}
