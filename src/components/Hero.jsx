import AppMockup from './AppMockup'

export default function Hero() {
  return (
    <section className="relative pt-28 bg-gradient-to-b from-white to-sky-50/60">
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl py-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-sky-100 text-sky-700 ring-1 ring-sky-200">
              Neu • Das einfachste KI-CRM
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl leading-tight font-semibold tracking-tight text-slate-900">
              Das einfachste KI-CRM
              <br />
              für mehr Abschlüsse im Telefonvertrieb
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Das erste Tool, das mitdenkt und von selbst arbeitet. Es sortiert deine Kontakte nach Abschlusswahrscheinlichkeit, fasst Telefonate zusammen und erstellt automatisch Wiedervorlagen – damit du wertvolle Zeit sparst und doppelt so viele Anrufe machen kannst.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-sm hover:bg-black transition">
                Zugang sichern
              </a>
              <a href="#demo" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition">
                Demo-Call buchen
              </a>
            </div>
            <div className="mt-8">
              <AppMockup />
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-600">
              <div>
                <div className="text-2xl font-semibold text-slate-900">100+</div>
                <div className="text-xs">vertrauen auf powercall.io</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-900">35%</div>
                <div className="text-xs">höhere Abschlussrate</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-900">100%</div>
                <div className="text-xs">mehr Schlagzahl</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-900">80%</div>
                <div className="text-xs">weniger Nachbereitung</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* soft background visuals */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute bottom-0 -left-10 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
      </div>
    </section>
  )
}
