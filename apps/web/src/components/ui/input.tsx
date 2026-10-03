import type { InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'w-full rounded-md border border-line bg-surface px-3 py-2 text-sm placeholder:text-muted',
        className,
      )}
      {...props}
    />
  );
}
