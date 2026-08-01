import { Activity, ArrowUpRight, BrainCircuit, Network, ShieldCheck } from 'lucide-react';

const capabilities = [
  { icon: Activity, label: 'System signals', detail: 'Metrics, logs, traces, and deployment context.' },
  { icon: BrainCircuit, label: 'Reasoned answers', detail: 'Turn operational noise into focused investigation.' },
  { icon: Network, label: 'Connected context', detail: 'Understand services as one evolving system.' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-canvas text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_13%,rgba(36,123,112,0.22),transparent_30%),radial-gradient(circle_at_12%_30%,rgba(59,130,246,0.13),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-7 lg:px-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-signal text-canvas"><ShieldCheck size={20} /></span>
            InfraMind
          </div>
          <span className="rounded-full border border-line bg-surface/50 px-3 py-1.5 text-xs font-medium text-slate-300">Platform foundation</span>
        </header>
        <section className="grid min-h-[calc(100vh-110px)] items-center gap-14 py-20 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-signal">Infrastructure Intelligence</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl">Know what your infrastructure is telling you.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">InfraMind brings the signals engineering teams rely on into a single intelligent operational foundation.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#foundation" className="inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-3 text-sm font-semibold text-canvas transition hover:bg-emerald-300">Explore the platform <ArrowUpRight size={16} /></a>
              <span className="inline-flex items-center rounded-lg border border-line px-5 py-3 text-sm text-slate-300">Built for modern cloud teams</span>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-surface/75 p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="flex items-center justify-between border-b border-line pb-4 text-xs text-slate-400"><span className="font-medium text-slate-200">INFRASTRUCTURE PULSE</span><span className="flex items-center gap-2 text-signal"><span className="h-2 w-2 rounded-full bg-signal" /> Operational</span></div>
            <div className="grid grid-cols-2 gap-3 py-5">
              {['Services', 'Deployments', 'Signals', 'Context'].map((label, index) => <div className="rounded-xl border border-line bg-canvas/60 p-4" key={label}><p className="text-xs text-slate-400">{label}</p><p className="mt-2 text-2xl font-semibold">0{index + 1}</p><div className="mt-3 h-1.5 rounded-full bg-line"><div className="h-full rounded-full bg-signal" style={{ width: `${60 + index * 9}%` }} /></div></div>)}
            </div>
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 text-sm text-slate-300">A reliable foundation for the future of engineering operations.</div>
          </div>
        </section>
        <section id="foundation" className="grid gap-4 border-t border-line py-12 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, label, detail }) => <article className="rounded-xl border border-line bg-surface/40 p-5" key={label}><Icon className="text-signal" size={21} /><h2 className="mt-5 font-semibold text-white">{label}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p></article>)}
        </section>
      </div>
    </main>
  );
}
