import { useState } from 'react'
import { Menu, X, PhoneCall } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 dark:bg-slate-900/40 border border-white/20 rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.15)]">
          <nav className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <div className="text-white font-semibold text-lg tracking-tight">VertriebHub</div>
                <div className="text-xs text-white/60 -mt-0.5">CRM for Cold Calls</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
              <a href="#faq" className="text-white/80 hover:text-white transition">FAQ</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 rounded-xl text-sm text-white/80 hover:text-white transition">Sign in</button>
              <button className="px-5 py-2 rounded-xl text-sm font-semibold bg-white text-slate-900 hover:shadow-lg hover:shadow-blue-500/20 transition">Start free</button>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 pb-6">
              <div className="flex flex-col gap-4 py-4">
                <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
                <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
                <a href="#faq" className="text-white/80 hover:text-white transition">FAQ</a>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex-1 px-4 py-2 rounded-xl text-sm text-white/80 hover:text-white transition">Sign in</button>
                <button className="flex-1 px-5 py-2 rounded-xl text-sm font-semibold bg-white text-slate-900">Start free</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
