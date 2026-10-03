import type { LucideIcon } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { StatusBadge } from '@/components/ui/status-badge';
import type { Status } from '@/types/platform';

export function MetricCard({
  icon: Icon,
  label,
  description,
  status = 'unknown',
}: {
  icon: LucideIcon;
  label: string;
  description: string;
  status?: Status;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <Icon aria-hidden="true" className="text-signal" size={20} />
        <StatusBadge status={status} />
      </div>
      <h2 className="mt-5 text-base font-semibold">{label}</h2>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </Card>
  );
}
