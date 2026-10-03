import { cn } from '@/lib/utils';
import type { Status } from '@/types/platform';

const statusStyles: Record<Status, string> = {
  healthy: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500',
  warning: 'border-amber-500/30 bg-amber-500/10 text-amber-500',
  critical: 'border-rose-500/30 bg-rose-500/10 text-rose-500',
  offline: 'border-slate-500/30 bg-slate-500/10 text-slate-400',
  unknown: 'border-line bg-panel text-muted',
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium capitalize',
        statusStyles[status],
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
