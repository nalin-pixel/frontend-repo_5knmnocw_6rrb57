import Spline from '@splinetool/react-spline'

function Hero({ onCTAClick }) {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90 md:from-white/70 md:via-white/50 md:to-white/80" />

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            E‑commerce Profit Calculator
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            Quickly estimate your true profit on Temu and Shein. Enter your costs, pick a platform, and see your net profit and margins instantly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button onClick={onCTAClick} className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 shadow-lg shadow-emerald-500/20 transition">
              Start Calculating Now
            </button>
            <a href="#how-to" className="inline-flex items-center justify-center rounded-xl bg-white/80 hover:bg-white text-slate-900 font-semibold px-6 py-3 border border-slate-200 backdrop-blur-md transition">
              Learn how to increase profit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
