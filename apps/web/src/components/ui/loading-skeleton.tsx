export function LoadingSkeleton({ className = '' }: { className?: string }) {
  return (
    <div
      aria-label="Loading"
      className={`animate-pulse rounded-md bg-panel ${className}`}
      role="status"
    />
  );
}
