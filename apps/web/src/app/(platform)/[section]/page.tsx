import { Boxes } from 'lucide-react';
import { notFound } from 'next/navigation';

import { pageDefinitions } from '@/constants/navigation';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { PageHeader } from '@/components/shared/page-header';
import { Card } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';
import { LoadingSkeleton } from '@/components/ui/loading-skeleton';

export default async function PlatformSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const definition = pageDefinitions[section];
  if (!definition) notFound();
  return (
    <div className="space-y-7">
      <Breadcrumbs current={definition.title} />
      <PageHeader
        description={definition.description}
        eyebrow={definition.eyebrow}
        title={definition.title}
      />
      <section className="grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
        <EmptyState
          description={definition.emptyDescription}
          icon={Boxes}
          title={definition.emptyTitle}
        />
        <Card>
          <h2 className="text-base font-semibold">Prepared for integration</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            This page uses shared layout and state primitives, ready for its future feature module
            without changing platform navigation.
          </p>
          <div className="mt-6 space-y-3" aria-label="Loading placeholder">
            <LoadingSkeleton className="h-3 w-4/5" />
            <LoadingSkeleton className="h-3 w-3/5" />
            <LoadingSkeleton className="h-3 w-2/5" />
          </div>
        </Card>
      </section>
    </div>
  );
}
