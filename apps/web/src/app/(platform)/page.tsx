import { Activity, FolderKanban, Rocket, Sparkles } from 'lucide-react';

import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { PageHeader } from '@/components/shared/page-header';
import { Card } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';
import { StatusBadge } from '@/components/ui/status-badge';

const overviewCards = [
  {
    title: 'Infrastructure health',
    description:
      'Service health signals will be summarized here once infrastructure sources are connected.',
    icon: Activity,
  },
  {
    title: 'Recent activity',
    description: 'A focused event stream will make operational changes easier to review.',
    icon: Rocket,
  },
  {
    title: 'AI insights',
    description: 'Future investigation guidance will surface here with transparent source context.',
    icon: Sparkles,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-7">
      <Breadcrumbs current="Dashboard" />
      <PageHeader
        description="A calm operational starting point for your engineering workspace."
        eyebrow="Workspace overview"
        title="Dashboard"
      />
      <section aria-label="System overview" className="grid gap-4 lg:grid-cols-3">
        {overviewCards.map(({ title, description, icon: Icon }) => (
          <Card key={title}>
            <div className="flex items-start justify-between">
              <Icon aria-hidden="true" className="text-signal" size={20} />
              <StatusBadge status="unknown" />
            </div>
            <h2 className="mt-5 text-base font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
          </Card>
        ))}
      </section>
      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="text-base font-semibold">Deployment timeline</h2>
          <p className="mt-2 text-sm text-muted">
            A contextual timeline will appear after a deployment source is enabled.
          </p>
          <div className="mt-6 border-t border-dashed border-line pt-8 text-sm text-muted">
            No deployment activity to display.
          </div>
        </Card>
        <Card>
          <h2 className="text-base font-semibold">Incident summary</h2>
          <p className="mt-2 text-sm text-muted">
            Incident response context will be available when response workflows are configured.
          </p>
          <div className="mt-6 border-t border-dashed border-line pt-8 text-sm text-muted">
            No incident data to display.
          </div>
        </Card>
      </section>
      <section className="grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
        <EmptyState
          description="Projects will appear here when platform sources are introduced."
          icon={FolderKanban}
          title="No recent projects"
        />
        <Card>
          <h2 className="text-base font-semibold">Quick actions</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Use global search to navigate the platform. Contextual actions will become available as
            capabilities are connected.
          </p>
          <button className="mt-5 text-sm font-medium text-signal hover:underline" type="button">
            Open command palette with ⌘K
          </button>
        </Card>
      </section>
    </div>
  );
}
