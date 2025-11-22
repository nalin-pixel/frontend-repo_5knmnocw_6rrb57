import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import HowTo from './components/HowTo'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const calcRef = useRef(null)

  const scrollToCalc = () => {
    calcRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header onCalcClick={scrollToCalc} />
      <Hero onCTAClick={scrollToCalc} />

      <main className="relative z-10 -mt-6 md:-mt-10">
        <div ref={calcRef} className="container mx-auto px-4">
          <div className="rounded-3xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border border-slate-200 p-4 md:p-8 shadow-xl">
            <Calculator />
          </div>
        </div>

        <div className="mt-12 md:mt-16 space-y-12 md:space-y-16">
          <HowTo />
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
