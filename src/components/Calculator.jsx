import { useMemo, useState } from 'react'

const PLATFORM_FEES = {
  Temu: 0.15,
  Shein: 0.20,
}

function formatCurrency(value) {
  if (Number.isNaN(value)) return '$0.00'
  return value.toLocaleString(undefined, { style: 'currency', currency: 'USD' })
}

function Calculator() {
  const [platform, setPlatform] = useState('Temu')
  const [cost, setCost] = useState('')
  const [shipping, setShipping] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState(1)

  const feeRate = PLATFORM_FEES[platform]

  const { totalCost, platformFee, netProfit, margin } = useMemo(() => {
    const c = parseFloat(cost) || 0
    const s = parseFloat(shipping) || 0
    const p = parseFloat(price) || 0
    const q = Math.max(1, parseInt(quantity) || 1)

    const totalCost = (c + s) * q
    const platformFee = p * feeRate * q
    const revenue = p * q
    const netProfit = revenue - platformFee - totalCost
    const margin = revenue > 0 ? (netProfit / revenue) * 100 : 0

    return { totalCost, platformFee, netProfit, margin }
  }, [cost, shipping, price, feeRate, quantity])

  const inputClass = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition'
  const labelClass = 'block text-sm font-medium text-slate-700 mb-2'

  return (
    <section id="calculator" className="relative">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Profit Calculator</h2>
          <p className="mt-2 text-slate-600">Fill in your numbers and see results in real-time.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Platform</label>
              <select value={platform} onChange={(e) => setPlatform(e.target.value)} className={inputClass}>
                {Object.keys(PLATFORM_FEES).map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <p className="mt-2 text-xs text-slate-500">Fee auto-fills: {Math.round(feeRate * 100)}%</p>
            </div>
            <div>
              <label className={labelClass}>Selling price (per unit)</label>
              <input type="number" min="0" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} className={inputClass} placeholder="e.g. 24.99" />
            </div>
            <div>
              <label className={labelClass}>Product cost (per unit)</label>
              <input type="number" min="0" step="0.01" value={cost} onChange={(e) => setCost(e.target.value)} className={inputClass} placeholder="e.g. 8.50" />
            </div>
            <div>
              <label className={labelClass}>Shipping cost (per unit)</label>
              <input type="number" min="0" step="0.01" value={shipping} onChange={(e) => setShipping(e.target.value)} className={inputClass} placeholder="e.g. 2.99" />
            </div>
            <div>
              <label className={labelClass}>Quantity</label>
              <input type="number" min="1" step="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} className={inputClass} placeholder="1" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-50 to-white rounded-2xl border border-emerald-200 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Results</h3>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Total cost</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{formatCurrency(totalCost)}</p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Platform fee</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{formatCurrency(platformFee)}</p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Net profit</p>
              <p className={`mt-1 text-2xl font-bold ${netProfit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{formatCurrency(netProfit)}</p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Profit margin</p>
              <p className={`mt-1 text-2xl font-bold ${margin >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{margin.toFixed(1)}%</p>
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            <p>Formula:</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Total cost = (Product cost + Shipping) × Quantity</li>
              <li>Platform fee = Selling price × Fee × Quantity</li>
              <li>Net profit = Revenue − Platform fee − Total cost</li>
              <li>Profit margin = Net profit ÷ Revenue</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
