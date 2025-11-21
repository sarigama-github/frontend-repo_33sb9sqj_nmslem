export default function FourReasons() {
  const reasons = [
    {
      title: 'Kennzahlen auf einen Blick',
      desc: 'Behalte im Dashboard die wichtigsten vertrieblichen Kennzahlen und Quoten im Blick.',
    },
    {
      title: 'Automatische E-Mail Vorlagen',
      desc: 'Versendet automatisch Terminbestätigungen, Erinnerungen und angepasste Infomails.',
    },
    {
      title: 'Immer das passende Skript',
      desc: 'Personalisiert Skripte automatisch und passt sie für jede Phase an.',
    },
    {
      title: 'Server in Deutschland',
      desc: 'Höchste DSGVO-konforme Standards. Ideal für deutsche Unternehmen.',
    },
  ]

  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">4 weitere Gründe für powercall.io</h2>
          <p className="mt-3 text-slate-600">Weil Details den Unterschied machen.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
