function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
        <p className="text-slate-600">© {new Date().getFullYear()} Temu & Shein Profit Calculator. All rights reserved.</p>
        <div className="flex justify-center gap-4 text-slate-600">
          <a href="https://x.com/arbazkakkar5" target="_blank" rel="noreferrer" className="hover:text-slate-900">X (Twitter)</a>
          <a href="https://alhalalcosmetics.nl" target="_blank" rel="noreferrer" className="hover:text-slate-900">AlHalalCosmetics.nl</a>
          <a href="mailto:hello@example.com" className="hover:text-slate-900">Contact</a>
        </div>
        <div className="text-sm text-right text-slate-500">
          Built for Temu and Shein sellers seeking higher profit.
        </div>
      </div>
    </footer>
  )
}

export default Footer
