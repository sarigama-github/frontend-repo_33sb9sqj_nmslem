import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlays for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950"></div>
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl py-28">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/10 text-white/80 ring-1 ring-white/20 backdrop-blur">
              New • Ultra-fast CRM for outbound teams
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl leading-tight font-semibold tracking-tight text-white">
              Close more deals with a CRM built for cold calls
            </h1>
            <p className="mt-4 text-lg text-white/80">
              VertriebHub streamlines prospecting, dialing, and follow-ups so your team can focus on conversations, not clicks.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.25)] hover:shadow-[0_10px_50px_rgba(59,130,246,0.35)] transition">
                Start free trial
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition">
                See features
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70">
              <div>
                <div className="text-2xl font-semibold text-white">2x</div>
                <div className="text-xs">More connects</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">-40%</div>
                <div className="text-xs">Admin time</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">+31%</div>
                <div className="text-xs">Booked demos</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">SOC2</div>
                <div className="text-xs">Enterprise-ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
