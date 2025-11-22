function FAQ() {
  const faqs = [
    { q: 'What is the Temu and Shein profit calculator?', a: 'It is a free tool to estimate net profit and margins for Temu and Shein listings using your price, cost, shipping, and each platform\'s referral fee.' },
    { q: 'Which platforms are supported?', a: 'This calculator focuses 100% on Temu and Shein for SEO relevance and accuracy.' },
    { q: 'What fee does Temu charge?', a: 'We use a typical 15% referral fee for Temu. Categories and promotions may vary—verify in your seller dashboard.' },
    { q: 'What fee does Shein charge?', a: 'We use a typical 20% referral fee for Shein. Actual fees can vary based on product categories and campaigns.' },
    { q: 'How do I calculate Temu profit?', a: 'Enter product cost, shipping cost, and selling price. Choose Temu to apply the 15% fee. The calculator shows total cost, platform fee, net profit, and margin.' },
    { q: 'How do I calculate Shein profit?', a: 'Enter your numbers and choose Shein to apply a 20% fee. Results update instantly for net profit and profit margin.' },
    { q: 'Does the calculator include shipping?', a: 'Yes, shipping cost per unit is included in total cost and net profit calculations.' },
    { q: 'Can I change quantities?', a: 'Yes. Adjust the quantity to simulate multi-unit orders for Temu and Shein.' },
    { q: 'How is platform fee computed?', a: 'Platform fee = Selling price × Fee rate × Quantity. For Temu it is 15%, for Shein it is 20% by default.' },
    { q: 'How is profit margin calculated?', a: 'Profit margin = Net profit ÷ Revenue × 100. Revenue equals selling price × quantity.' },
    { q: 'Is this accurate for all categories?', a: 'Use this as a planning estimate. Exact Temu and Shein fees vary by category and promos.' },
    { q: 'Do Temu and Shein fees include tax?', a: 'Platform fees typically apply before taxes; tax handling varies by region and platform rules.' },
    { q: 'How do returns affect profit?', a: 'Returns reduce net profit. Consider average return rate and potential reshipping or restocking costs.' },
    { q: 'What margin should I target on Temu?', a: 'Many Temu sellers aim for 20–35% depending on competition and shipping. Test and iterate.' },
    { q: 'What margin should I target on Shein?', a: 'Fashion margins on Shein can be 20–40% depending on trends, seasonality, and marketing costs.' },
    { q: 'Does packaging cost matter?', a: 'Yes. Add packaging to product cost if it impacts your per-unit expense on Temu or Shein.' },
    { q: 'Can I use different currencies?', a: 'Results display in your browser locale currency format. Convert your inputs accordingly.' },
    { q: 'Should I include ads in the cost?', a: 'For a conservative estimate, include average ad spend per unit in your product cost to see true Shein/Temu profitability.' },
    { q: 'How do discounts impact fees?', a: 'Fees are calculated from the actual selling price after discounts. Lower prices reduce profit margin.' },
    { q: 'Can I export my Temu or Shein calculations?', a: 'Copy the results or screenshot for records. CSV export can be added on request.' },
    { q: 'Why focus only on Temu and Shein?', a: 'This narrow focus improves SEO and ensures the calculator follows Temu and Shein fee structures closely.' },
    { q: 'Is there a minimum order quantity?', a: 'No fixed MOQs for the tool. Quantity input lets you test small or bulk Temu/Shein orders.' },
    { q: 'How do shipping zones affect profit?', a: 'Higher international rates raise total cost. Consider separate scenarios for domestic vs. international customers.' },
    { q: 'Does the tool save my data?', a: 'No. Everything runs in your browser for privacy.' },
    { q: 'Are Temu and Shein fees negotiable?', a: 'Occasionally fees may change via category promotions or programs. Always verify platform announcements.' },
    { q: 'How can I increase Temu profit?', a: 'Lower unit cost through suppliers, reduce shipping weight, and price test to maintain margins after the 15% fee.' },
    { q: 'How can I increase Shein profit?', a: 'Bundle items, optimize sizing to reduce returns, and price test around category standards to offset the 20% fee.' },
    { q: 'Can I use this for pre-launch planning?', a: 'Yes. Validate pricing for Temu and Shein before listing to avoid negative margins.' },
    { q: 'Does weight affect shipping cost?', a: 'Yes. Heavier items raise shipping per unit, which reduces profit for both platforms.' },
    { q: 'What about warehouse/storage costs?', a: 'Add a per-unit allocation of storage or fulfillment to your product cost for accurate margins.' },
    { q: 'How does seasonality affect Shein sales?', a: 'Seasonal fashion trends impact conversion and returns; simulate different price points to preserve margins.' },
    { q: 'What is a break-even price?', a: 'Break-even occurs when net profit is zero. Adjust price until net profit shows $0 to find it.' },
    { q: 'Do volume discounts change costs?', a: 'If supplier discounts apply, lower your product cost input to see higher margins for Temu/Shein.' },
    { q: 'Can I link to my store?', a: 'Yes, you can include backlinks in your listings or bio. Check platform policies for external links.' },
    { q: 'Where can I learn more about cosmetics margins?', a: 'Visit AlHalalCosmetics.nl for insights and related products that can influence your cost structure.' },
    { q: 'How do I contact you?', a: 'Reach out via X at x.com/arbazkakkar5 for feedback or feature requests.' },
    { q: 'Is there a mobile version?', a: 'Yes, the calculator is mobile-first and works great on phones for Temu and Shein sellers.' },
    { q: 'Can I bookmark specific scenarios?', a: 'Currently no URL parameters. We can add sharable links if needed.' },
    { q: 'Does the calculator handle taxes/VAT?', a: 'Taxes vary widely. Add a per-unit estimate into product cost for conservative calculations.' },
    { q: 'What if my profit is negative?', a: 'Consider raising price, negotiating cost, or reducing shipping weight to move into positive margin on Temu or Shein.' },
    { q: 'Can I request new features?', a: 'Absolutely. Tell us what would help your Temu and Shein workflow.' },
  ]

  return (
    <section id="faq" className="container mx-auto px-4">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Temu & Shein Calculator FAQs</h2>
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
