import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-6 text-foreground">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">404</p>
        <h1 className="mt-3 text-3xl font-semibold">This workspace view does not exist</h1>
        <p className="mt-3 text-sm text-muted">Return to the InfraMind dashboard to continue.</p>
        <Link
          className="mt-6 inline-flex rounded-md bg-signal px-4 py-2 text-sm font-semibold text-canvas"
          href="/"
        >
          Go to dashboard
        </Link>
      </div>
    </main>
  );
}
