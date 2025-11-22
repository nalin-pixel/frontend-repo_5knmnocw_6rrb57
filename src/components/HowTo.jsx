function HowTo() {
  const tips = [
    {
      title: 'Negotiate supplier costs',
      body: 'Lower product cost has the biggest impact on profit. Ask for tiered pricing or bundle discounts.'
    },
    {
      title: 'Optimize shipping',
      body: 'Use lighter packaging and compare carriers. Combine orders when possible to reduce per‑unit shipping.'
    },
    {
      title: 'Price to value',
      body: 'Bundle accessories, improve photos, and highlight benefits. A higher perceived value supports a better price.'
    },
    {
      title: 'Track platform fees',
      body: 'Temu typically takes 15% and Shein 20%. Some categories vary—always verify in your seller dashboard.'
    },
  ]

  return (
    <section id="how-to" className="container mx-auto px-4">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How to increase your profit on Temu and Shein</h2>
        <p className="mt-3 text-slate-600">Simple actions that move the needle for small e‑commerce sellers.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {tips.map((t) => (
            <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-slate-600">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowTo
