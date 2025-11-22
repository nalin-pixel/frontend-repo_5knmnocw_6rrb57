function FAQ() {
  const faqs = [
    {
      q: 'What fees do Temu and Shein charge?',
      a: 'We prefill typical referral fees: Temu ~15% and Shein ~20%. Exact fees can vary by category and promos—always confirm in your seller account.'
    },
    {
      q: 'Does shipping include returns?',
      a: 'The calculator uses your one‑way shipping cost per unit. If return rates are high, factor that into your margin separately.'
    },
    {
      q: 'What is a good profit margin?',
      a: 'Many sellers aim for 20–40% margins after fees and shipping, but it depends on category, volume, and competition.'
    },
    {
      q: 'Can I calculate multiple quantities?',
      a: 'Yes. Adjust the quantity field to see how totals and margins scale with order size.'
    }
  ]

  return (
    <section id="faq" className="container mx-auto px-4">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">FAQ</h2>
        <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="p-5 group">
              <summary className="cursor-pointer list-none text-lg font-medium text-slate-900 flex items-center justify-between">
                <span>{f.q}</span>
                <span className="ml-4 text-slate-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
