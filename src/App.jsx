import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <FeatureCards />
      <Pricing />

      <footer id="faq" className="relative py-16 border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-white font-semibold text-lg">VertriebHub</div>
              <p className="mt-2 text-white/60 text-sm max-w-sm">A modern CRM designed for cold calling teams. Make more connects, book more meetings, and keep the pipeline moving.</p>
            </div>
            <div>
              <div className="text-white/80 font-semibold">Product</div>
              <ul className="mt-3 space-y-2 text-white/60 text-sm">
                <li>Features</li>
                <li>Pricing</li>
                <li>Changelog</li>
              </ul>
            </div>
            <div>
              <div className="text-white/80 font-semibold">Company</div>
              <ul className="mt-3 space-y-2 text-white/60 text-sm">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between text-white/50 text-sm">
            <div>© {new Date().getFullYear()} VertriebHub. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a className="hover:text-white" href="#">Privacy</a>
              <a className="hover:text-white" href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
