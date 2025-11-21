export default function Testimonials() {
  const items = [
    {
      name: 'Mirko Twardy',
      role: 'Dr. Kakuschke & Partner AG',
      quote:
        'Was mich wirklich überzeugt hat, war die Einfachheit – super intuitiv. Außerdem muss ich keine Gesprächsnotizen mehr selbst machen.',
    },
    {
      name: 'Alexander Alles',
      role: 'Vertrieb bei ThisIsMarketing',
      quote: 'Perfekt geeignet für den Mittelstand mit kleinen Vertriebsteams.',
    },
    {
      name: 'Felix Prieschenk',
      role: 'Vertrieb bei AXA',
      quote: 'Genau was wir gesucht haben. Einfach und übersichtlich.',
    },
    {
      name: 'Philipp Fauck',
      role: 'FLP Media',
      quote:
        'Die KI-Integration erspart mir sehr viel Zeit. Dank der intuitiven Pipeline-Übersicht behalte ich immer den Überblick und erhöhe meine Schlagzahl.',
    },
  ]

  return (
    <section className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Das sagen unsere Nutzer</h2>
          <p className="mt-3 text-slate-600">Echte Stimmen und Erfahrungen von Vertrieblern.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">
                <div className="font-medium text-slate-900">{t.name}</div>
                <div>{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
