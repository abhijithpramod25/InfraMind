import type { ReactNode } from 'react';

export function Dialog({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div
      aria-label={label}
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-black/45 p-4"
      role="dialog"
    >
      {children}
    </div>
  );
}
