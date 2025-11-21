import { useState } from 'react'
import { Menu, X, PhoneCall } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur bg-white/80 border border-slate-200 rounded-2xl shadow-lg">
          <nav className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-violet-500 text-white flex items-center justify-center">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <div className="text-slate-900 font-semibold text-lg tracking-tight">Powercall</div>
                <div className="text-xs text-slate-500 -mt-0.5">KI-CRM für Telefonvertrieb</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-700 hover:text-slate-900 transition">Funktionen</a>
              <a href="#pricing" className="text-slate-700 hover:text-slate-900 transition">Preise</a>
              <a href="#faq" className="text-slate-700 hover:text-slate-900 transition">FAQ</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 rounded-xl text-sm text-slate-700 hover:text-slate-900 transition">Anmelden</button>
              <button className="px-5 py-2 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-black transition">Zugang sichern</button>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white text-slate-900 border border-slate-200">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-slate-200 px-6 pb-6">
              <div className="flex flex-col gap-4 py-4">
                <a href="#features" className="text-slate-700 hover:text-slate-900 transition">Funktionen</a>
                <a href="#pricing" className="text-slate-700 hover:text-slate-900 transition">Preise</a>
                <a href="#faq" className="text-slate-700 hover:text-slate-900 transition">FAQ</a>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex-1 px-4 py-2 rounded-xl text-sm text-slate-700 hover:text-slate-900 transition">Anmelden</button>
                <button className="flex-1 px-5 py-2 rounded-xl text-sm font-semibold bg-slate-900 text-white">Zugang sichern</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
