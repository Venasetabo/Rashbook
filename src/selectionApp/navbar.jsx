import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-slate-950 text-white shadow-xl sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-4 sm:py-5">
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full  shadow-lg"
              src="./public/rash.jpg"
              alt="logo de paweb-c"
            />
            <div>
              <p className="text-base sm:text-lg font-semibold tracking-wide uppercase">
                Rash.
              </p>
              <p className="text-xs sm:text-sm text-slate-400">PAWEB-C</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a className="text-slate-200 hover:text-white transition text-sm sm:text-base" href="#tech">
              Tech
            </a>
            <a className="text-slate-200 hover:text-white transition text-sm sm:text-base" href="#services">
              Services
            </a>
            <a className="text-slate-200 hover:text-white transition text-sm sm:text-base" href="#community">
              Community
            </a>
            <a className="text-slate-200 hover:text-white transition text-sm sm:text-base" href="#about">
              PAWEB-C
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-500/20 transition">
              Contact
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-slate-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 pb-4 pt-2 space-y-2">
            <a className="block rounded-2xl px-4 py-3 text-slate-200 hover:bg-slate-800 transition" href="#tech">
              Tech
            </a>
            <a className="block rounded-2xl px-4 py-3 text-slate-200 hover:bg-slate-800 transition" href="#services">
              Services
            </a>
            <a className="block rounded-2xl px-4 py-3 text-slate-200 hover:bg-slate-800 transition" href="#community">
              Community
            </a>
            <a className="block rounded-2xl px-4 py-3 text-slate-200 hover:bg-slate-800 transition" href="#about">
              PAWEB-C
            </a>
            <button className="w-full rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
