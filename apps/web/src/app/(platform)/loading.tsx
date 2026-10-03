import { LoadingSkeleton } from '@/components/ui/loading-skeleton';

export default function PlatformLoading() {
  return (
    <div className="space-y-7">
      <LoadingSkeleton className="h-4 w-32" />
      <div>
        <LoadingSkeleton className="h-8 w-52" />
        <LoadingSkeleton className="mt-3 h-4 w-96 max-w-full" />
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <LoadingSkeleton className="h-44" key={item} />
        ))}
      </div>
    </div>
  );
}
