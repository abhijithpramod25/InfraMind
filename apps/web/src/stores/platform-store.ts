'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Theme } from '@/types/platform';

interface PlatformState {
  theme: Theme;
  isSidebarCollapsed: boolean;
  workspaceName: string;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  setWorkspaceName: (workspaceName: string) => void;
}

export const usePlatformStore = create<PlatformState>()(
  persist(
    (set) => ({
      theme: 'dark',
      isSidebarCollapsed: false,
      workspaceName: 'InfraMind workspace',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      toggleSidebar: () => set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
      setWorkspaceName: (workspaceName) => set({ workspaceName }),
    }),
    { name: 'inframind-platform' },
  ),
);
