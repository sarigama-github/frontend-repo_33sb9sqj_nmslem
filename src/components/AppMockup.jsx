export default function AppMockup() {
  return (
    <div className="mt-10">
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-slate-200 bg-white/90 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-1 border-b border-slate-200 px-4 py-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <div className="ml-3 text-xs text-slate-500">powercall.io</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <aside className="lg:col-span-3 border-r border-slate-200 p-4 bg-slate-50">
            <div className="text-xs font-semibold text-slate-500 mb-2">Pipelines</div>
            <ul className="space-y-2 text-sm">
              {['Eingang', 'Qualifizierung', 'Angebot', 'Verhandlung', 'Gewonnen'].map((s) => (
                <li key={s} className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-white">
                  <span className="text-slate-700">{s}</span>
                  <span className="text-xs text-slate-500">12</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-xs font-semibold text-slate-500 mb-2">Playbooks</div>
            <div className="rounded-lg bg-white p-3 ring-1 ring-slate-200 text-sm text-slate-700">Einwandbehandlung</div>
          </aside>
          <main className="lg:col-span-9 p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-lg font-semibold text-slate-900">Heute anrufen</div>
              <div className="flex gap-2">
                <input placeholder="Suche Leads" className="w-full md:w-64 rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300" />
                <button className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white">KI-Dialer starten</button>
              </div>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    {['Kontakt', 'Unternehmen', 'Wahrscheinlichkeit', 'Nächster Schritt', 'Fälligkeit'].map((h) => (
                      <th key={h} className="px-4 py-3 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {[
                    ['Lena Weber', 'MüllerMedia', 'Hoch', 'Demo vereinbaren', 'Heute'],
                    ['Jonas Richter', 'Binova AG', 'Mittel', 'Angebot senden', 'Morgen'],
                    ['Sofia Brand', 'Königsbau GmbH', 'Sehr hoch', 'Abschluss', 'Heute'],
                    ['Tim Becker', 'AXA', 'Niedrig', 'Qualifizierung', 'Nächste Woche'],
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70">
                      {row.map((c, i) => (
                        <td key={i} className="px-4 py-3 text-slate-700">{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <div className="text-xs text-slate-500">Zusammenfassung</div>
                <p className="mt-1 text-sm text-slate-700">KI fasst deine letzten 5 Gespräche automatisch zusammen.</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <div className="text-xs text-slate-500">Wiedervorlagen</div>
                <p className="mt-1 text-sm text-slate-700">3 fällige Follow-ups heute.</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <div className="text-xs text-slate-500">Schlagzahl</div>
                <p className="mt-1 text-sm text-slate-700">+100% Anrufe im Vergleich zur letzten Woche.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
