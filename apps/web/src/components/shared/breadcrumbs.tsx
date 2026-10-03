import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-xs text-muted">
        <li>
          <Link className="hover:text-foreground" href="/">
            InfraMind
          </Link>
        </li>
        <ChevronRight aria-hidden="true" size={13} />
        <li className="text-foreground">{current}</li>
      </ol>
    </nav>
  );
}
