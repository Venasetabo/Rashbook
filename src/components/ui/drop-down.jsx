import { User, Settings, LogOut } from "lucide-react";

export default function DropDown({ isOpen, setMenuOpen }) {
    return (
        <div className={`absolute right-0 mt-2 w-48 rounded-xl border border-[var(--muted)]/10 bg-[var(--surface-card)] p-1.5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50 ${isOpen ? 'translate-y-[9px] opacity-100 visible pointer-event-auto' : 'translate-y-[20px] opacity-0 invisible pointer-event-none'}`}>
            <div className="px-2 py-1.5 mb-1 border-b border-[var(--muted)]/5">
                <p className="text-[11px] font-mono text-[var(--muted)]">Connecté en tant que</p>
                <p className="text-xs font-bold text-[var(--text)] truncate">Utilisateur</p>
            </div>

            <button 
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--muted)]/5 transition-colors text-left"
            >
                <User size={14} />
                Mon Profil
            </button>

            <button 
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--muted)]/5 transition-colors text-left"
            >
                <Settings size={14} />
                Paramètres
            </button>
             <button 
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--muted)]/5 transition-colors text-left"
            >
                <Settings size={14} />
                Dark mode
            </button>

            <div className="my-1 border-b border-[var(--muted)]/5"></div>

            <button 
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-red-400 hover:bg-red-500/10 transition-colors text-left"
            >
                <LogOut size={14} />
                Déconnexion
            </button>
        </div>
    )
}