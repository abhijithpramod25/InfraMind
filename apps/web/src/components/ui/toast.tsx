import { CheckCircle2, XCircle } from 'lucide-react';

export function Toast({
  message,
  variant = 'success',
}: {
  message: string;
  variant?: 'success' | 'error';
}) {
  const Icon = variant === 'success' ? CheckCircle2 : XCircle;
  return (
    <div
      aria-live="polite"
      className="flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-3 text-sm shadow-lg"
    >
      <Icon
        aria-hidden="true"
        className={variant === 'success' ? 'text-signal' : 'text-rose-500'}
        size={17}
      />
      {message}
    </div>
  );
}
