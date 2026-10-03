import type { ReactNode } from 'react';

export function FormField({
  label,
  children,
  description,
}: {
  label: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium">
      <span>{label}</span>
      {children}
      {description && <span className="text-xs font-normal text-muted">{description}</span>}
    </label>
  );
}
