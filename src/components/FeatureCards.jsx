import { PhoneCall, Workflow, Rocket, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: PhoneCall,
    title: 'Power Dialer',
    desc: 'Blazing-fast dialer with local presence, voicemail drop, and automatic cadence steps.',
  },
  {
    icon: Workflow,
    title: 'Playbooks',
    desc: 'Guided call flows, objection handling, and smart scripts right in the call view.',
  },
  {
    icon: Rocket,
    title: 'Pipeline Velocity',
    desc: 'One-click logging, auto-enrichment, and AI summaries keep reps selling, not typing.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Security',
    desc: 'GDPR-ready, role-based permissions, audit logs, and SSO for peace of mind.',
  },
]

export default function FeatureCards() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Built to fuel outbound</h2>
          <p className="mt-3 text-white/70">Everything your team needs to prospect, dial, and follow-up at lightning speed.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
