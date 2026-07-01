function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 md:px-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="space-y-3 lg:max-w-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-cyan-500/20 ring-1 ring-cyan-400 shadow-sm shadow-cyan-500/10" />
            <div>
              <p className="text-lg font-semibold text-white">PAWEB-C</p>
              <p className="text-sm text-slate-400">Design moderne et responsive pour votre contenu.</p>
            </div>
          </div>
          <p className="text-sm leading-6 text-slate-400">
            Un espace de partage, de publication et de découverte d’articles, optimisé pour tous les écrans.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Menu</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="transition hover:text-white">Tech</li>
              <li className="transition hover:text-white">Services</li>
              <li className="transition hover:text-white">Community</li>
              <li className="transition hover:text-white">PAWEB-C</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Ressources</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="transition hover:text-white">FAQ</li>
              <li className="transition hover:text-white">Support</li>
              <li className="transition hover:text-white">Contact</li>
              <li className="transition hover:text-white">A propos</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Suivez-nous</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#" className="flex items-center gap-2 transition hover:text-cyan-400">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">📷</span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 transition hover:text-cyan-400">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">in</span>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 transition hover:text-cyan-400">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">𝕏</span>
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-4 sm:px-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PAWEB-C. Tous droits réservés.</p>
          <p>Réalisé avec Tailwind CSS et React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;