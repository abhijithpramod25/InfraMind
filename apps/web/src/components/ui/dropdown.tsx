import type { ReactNode } from 'react';

export function Dropdown({ children }: { children: ReactNode }) {
  return (
    <div className="absolute z-30 rounded-lg border border-line bg-surface p-1 shadow-xl">
      {children}
    </div>
  );
}
