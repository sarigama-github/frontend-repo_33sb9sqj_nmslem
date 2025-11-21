export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Ein Plan. Alles drin.</h2>
          <p className="mt-3 text-slate-600">Monatlich kündbar, kein Risiko.</p>
          <div className="mt-4 inline-flex items-center gap-1 rounded-xl px-2 py-1 text-xs text-slate-700 ring-1 ring-slate-200">
            <button className="px-2 py-1 rounded-lg bg-slate-900 text-white">Monatlich</button>
            <button className="px-2 py-1 rounded-lg text-slate-700">Jährlich</button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-white ring-1 ring-slate-200">
            <div className="text-slate-900 font-semibold">All in one</div>
            <div className="mt-2 text-4xl font-bold text-slate-900">59€<span className="text-base font-normal text-slate-500">/ Monat & User</span></div>
            <ul className="mt-6 space-y-2 text-slate-600 text-sm">
              <li>Effektive Leadverwaltung und Dashboard</li>
              <li>Bis zu 12 Pipelines</li>
              <li>Dynamische Telefonleitfäden</li>
              <li>KI Powerdialer</li>
              <li>KI Gesprächsnotizen und automatische Wiedervorlagen</li>
              <li>Kostenlose All-Net-Flat im DACH-Raum</li>
              <li>Benutzerdefinierte Felder und Ereignisse</li>
              <li>Powercall Akademie</li>
              <li>24/7 Premium Support</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold">Zugang sichern</button>
          </div>

          <div className="rounded-2xl p-6 bg-white ring-1 ring-slate-200">
            <div className="text-slate-900 font-semibold">Monatlich</div>
            <div className="mt-2 text-4xl font-bold text-slate-900">59€<span className="text-base font-normal text-slate-500">/ Monat & User</span></div>
            <ul className="mt-6 space-y-2 text-slate-600 text-sm">
              <li>Alles aus All in one</li>
              <li>Flexible Laufzeit</li>
              <li>Kündbar zum Monatsende</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 rounded-xl bg-white text-slate-900 ring-1 ring-slate-200">Kontakt</button>
          </div>

          <div className="rounded-2xl p-6 bg-white ring-1 ring-slate-200">
            <div className="text-slate-900 font-semibold">Jährlich</div>
            <div className="mt-2 text-4xl font-bold text-slate-900">49€<span className="text-base font-normal text-slate-500">/ Monat & User</span></div>
            <ul className="mt-6 space-y-2 text-slate-600 text-sm">
              <li>Alles aus All in one</li>
              <li>2 Monate sparen</li>
              <li>Priorisierter Support</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 rounded-xl bg-white text-slate-900 ring-1 ring-slate-200">Kontakt</button>
          </div>
        </div>
      </div>
    </section>
  )
}
