'use client';

import { Bell, ChevronDown, Menu, Moon, Search, Sun, UserRound } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { usePlatformStore } from '@/stores/platform-store';

export function Topbar({
  onOpenCommands,
  onOpenMobileNav,
}: {
  onOpenCommands: () => void;
  onOpenMobileNav: () => void;
}) {
  const { theme, toggleTheme, workspaceName } = usePlatformStore();
  const setWorkspaceName = usePlatformStore((state) => state.setWorkspaceName);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const workspaces = ['InfraMind workspace', 'Platform engineering'];
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-line bg-canvas px-4 sm:px-6">
      <div className="flex items-center gap-2">
        <button
          aria-label="Open navigation"
          className="rounded-md p-2 text-muted hover:bg-panel md:hidden"
          onClick={onOpenMobileNav}
          type="button"
        >
          <Menu size={18} />
        </button>
        <div className="relative hidden sm:block">
          <button
            aria-expanded={workspaceOpen}
            className="flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1.5 text-sm font-medium hover:bg-panel"
            onClick={() => setWorkspaceOpen((open) => !open)}
            type="button"
          >
            <span className="h-2 w-2 rounded-full bg-signal" />
            {workspaceName}
            <ChevronDown aria-hidden="true" size={15} />
          </button>
          {workspaceOpen && (
            <div className="absolute left-0 top-11 z-30 w-56 rounded-lg border border-line bg-surface p-1 shadow-xl">
              {workspaces.map((workspace) => (
                <button
                  className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-panel"
                  key={workspace}
                  onClick={() => {
                    setWorkspaceName(workspace);
                    setWorkspaceOpen(false);
                  }}
                  type="button"
                >
                  {workspace}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <Button
          aria-label="Open global search"
          className="hidden gap-2 border border-line bg-surface text-muted sm:inline-flex"
          onClick={onOpenCommands}
        >
          <Search size={16} />
          <span>Search</span>
          <kbd className="rounded border border-line px-1.5 py-0.5 text-[10px]">⌘K</kbd>
        </Button>
        <Button
          aria-label="Toggle theme"
          className="text-muted hover:text-foreground"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
        <div className="relative">
          <Button
            aria-label="Notifications"
            className="text-muted hover:text-foreground"
            onClick={() => setNotificationsOpen((open) => !open)}
          >
            <Bell size={18} />
          </Button>
          {notificationsOpen && (
            <div className="absolute right-0 top-11 z-30 w-72 rounded-lg border border-line bg-surface p-4 shadow-xl">
              <p className="text-sm font-semibold">Notifications</p>
              <p className="mt-2 text-sm leading-5 text-muted">
                Notifications will appear here when event sources are enabled.
              </p>
            </div>
          )}
        </div>
        <div className="relative">
          <Button
            aria-label="Profile menu"
            className="text-muted hover:text-foreground"
            onClick={() => setProfileOpen((open) => !open)}
          >
            <UserRound size={18} />
          </Button>
          {profileOpen && (
            <div className="absolute right-0 top-11 z-30 w-52 rounded-lg border border-line bg-surface p-2 shadow-xl">
              <p className="px-2 py-2 text-xs text-muted">
                Profile capabilities are not configured.
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
