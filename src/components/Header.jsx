function Header({ onCalcClick }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#top" className="font-extrabold tracking-tight text-slate-900">
          Temu & Shein Profit Calculator
        </a>
        <nav className="hidden sm:flex items-center gap-4 text-sm">
          <a href="#calculator" onClick={onCalcClick} className="text-slate-700 hover:text-emerald-600">Calculator</a>
          <a href="#how-to" className="text-slate-700 hover:text-emerald-600">Profit Tips</a>
          <a href="#faq" className="text-slate-700 hover:text-emerald-600">FAQ</a>
          <a href="https://x.com/arbazkakkar5" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-emerald-600">X (Twitter)</a>
          <a href="https://alhalalcosmetics.nl" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-emerald-600">AlHalalCosmetics.nl</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
