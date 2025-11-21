import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import Pricing from './components/Pricing'
import Steps from './components/Steps'
import FourReasons from './components/FourReasons'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <FeatureCards />
      <Steps />
      <FourReasons />
      <Testimonials />
      <Pricing />

      <footer id="faq" className="relative py-16 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-slate-900 font-semibold text-lg">Powercall</div>
              <p className="mt-2 text-slate-600 text-sm max-w-sm">Das KI-CRM für Telefonvertrieb. Mehr Abschlüsse, weniger Klicks – mit Priorisierung, KI-Dialer und automatischen Wiedervorlagen.</p>
            </div>
            <div>
              <div className="text-slate-900 font-semibold">Produkt</div>
              <ul className="mt-3 space-y-2 text-slate-600 text-sm">
                <li><a href="#features">Funktionen</a></li>
                <li><a href="#pricing">Preise</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="text-slate-900 font-semibold">Unternehmen</div>
              <ul className="mt-3 space-y-2 text-slate-600 text-sm">
                <li>Über uns</li>
                <li>Kontakt</li>
                <li>Datenschutz</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between text-slate-500 text-sm">
            <div>© {new Date().getFullYear()} Powercall. Alle Rechte vorbehalten.</div>
            <div className="flex items-center gap-4">
              <a className="hover:text-slate-700" href="#">Datenschutz</a>
              <a className="hover:text-slate-700" href="#">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
