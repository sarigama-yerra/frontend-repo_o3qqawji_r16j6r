import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Results from './components/Results'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Results />
      <CTA />
      <footer className="py-10 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} bolko media. All rights reserved.</p>
          <div className="text-sm text-gray-500">Built for brands that want growth without the guesswork.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
