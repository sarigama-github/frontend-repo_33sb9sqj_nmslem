import { PhoneCall, Workflow, Rocket, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: PhoneCall,
    title: 'Die richtigen Leads zur richtigen Zeit anrufen',
    desc: 'Powercall hat alle deine Kontakte in Echtzeit im Blick und priorisiert nach Abschlusswahrscheinlichkeit und Erreichbarkeit. Nie wieder überlegen, wen du als Nächstes anrufst.',
    stat: '35% höhere Abschlussrate',
  },
  {
    icon: Rocket,
    title: 'KI Powerdialer für mehr Anrufe am Tag',
    desc: 'Keine Nummern raussuchen, nicht mehr manuell wählen. Der KI-Dialer ruft deine Leads intelligent hintereinander an – ohne Pausen zwischen den Calls.',
    stat: '100% mehr Schlagzahl',
  },
  {
    icon: Workflow,
    title: 'Erstellt Gesprächsnotizen und Follow-Ups',
    desc: 'Powercall fasst Gespräche automatisch zusammen, speichert sie ab und legt passende Wiedervorlagen an. Du fokussierst dich aufs Verkaufen.',
    stat: '80% weniger Nachbereitungsaufwand',
  },
  {
    icon: ShieldCheck,
    title: 'Server in Deutschland & DSGVO-konform',
    desc: 'Wir setzen auf höchste Sicherheitsstandards und DSGVO-Konformität. Ideal für deutsche Unternehmen.',
  },
]

export default function FeatureCards() {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">3 Vorteile für mehr Umsatz</h2>
          <p className="mt-3 text-slate-600">Das macht deinen Vertrieb effektiver.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl p-6 bg-white ring-1 ring-slate-200 hover:shadow-xl hover:ring-slate-300 transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-violet-500 text-white flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-slate-900 font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
              {f.stat && (
                <div className="mt-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-sky-50 text-sky-700 ring-1 ring-sky-200">{f.stat}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 opacity-80">
          {['Binova AG','Königsbau GmbH','Müller Transport AG','MüllerMedia','Immobilien Neumair','und mehr'].map((n)=> (
            <div key={n} className="text-sm text-slate-500 bg-slate-50 rounded-xl px-4 py-3 ring-1 ring-slate-200 text-center">{n}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
