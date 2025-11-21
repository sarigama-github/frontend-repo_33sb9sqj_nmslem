export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free. Upgrade when your team is ready to scale.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <div className="text-white font-semibold">Starter</div>
            <div className="mt-2 text-4xl font-bold text-white">$29<span className="text-base font-normal text-white/60">/mo</span></div>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>1,000 calls/month</li>
              <li>Basic playbooks</li>
              <li>Lead import</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold">Choose plan</button>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 shadow-[0_10px_60px_rgba(59,130,246,0.25)]">
            <div className="text-white font-semibold">Growth</div>
            <div className="mt-2 text-4xl font-bold text-white">$79<span className="text-base font-normal text-white/60">/mo</span></div>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>Unlimited calls</li>
              <li>Advanced playbooks</li>
              <li>Power dialer</li>
              <li>AI summaries</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold">Choose plan</button>
          </div>

          <div className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <div className="text-white font-semibold">Enterprise</div>
            <div className="mt-2 text-4xl font-bold text-white">Let’s talk</div>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>SOC2 + SSO</li>
              <li>Custom roles</li>
              <li>Dedicated support</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 rounded-xl bg-white/10 text-white ring-1 ring-white/20">Contact sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}
