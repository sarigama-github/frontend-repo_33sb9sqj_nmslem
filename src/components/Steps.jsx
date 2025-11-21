export default function Steps() {
  const steps = [
    {
      title: 'Account erstellen',
      desc: 'Erstell dir sofort einen Account – oder gemeinsam mit uns im Call.',
    },
    {
      title: 'Leads hochladen',
      desc: 'Importiere deine Leads in wenigen Klicks. Alles ist sofort startklar.',
    },
    {
      title: 'Loslegen',
      desc: 'Starte direkt deine ersten Calls und sichere Termine.',
    },
  ]

  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">In 3 einfachen Schritten zu mehr Umsatz</h2>
          <p className="mt-3 text-slate-600">Schnell eingerichtet. Sofort einsatzbereit.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl p-6 bg-white ring-1 ring-slate-200">
              <div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm">{i + 1}</div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
