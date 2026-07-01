import { useState, useEffect, useRef, useContext} from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../hooks/use-context";

import { BookDashed, Search, ChevronDown, Ellipsis, User, LogOut, Settings, Languages, Moon, SunMoon} from "lucide-react";
import DropDown from "../ui/drop-down";
import i18n from "../../i18n";

export default function TopBar({ setSearchOpen }) {
    const {t, i18n} = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const [IsDark, setIsDark] = useState(()=>{
        return localStorage.getItem("item") === "dark"
    });

    const {user} = useContext(UserContext);
    console.log("USER",user);
    
    
    const  [ isLangOpen, setIsLangOpen] = useState(false)

    useEffect(()=> {
        const root = document.documentElement;
        if (!IsDark) {
            root.classList.add("dark");
            localStorage.setItem("item","dark")
        }else{
            root.classList.remove("dark");
            localStorage.setItem("item","light")
        }
    },[IsDark])

    
        const activeTheme = ()=>{
            setIsDark(!IsDark)
        }
        

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--muted)]/10">
            <div className="flex justify-between gap-4 items-center w-[95%] max-w-7xl mx-auto h-16">
                
                <div className="flex gap-3 items-center">
                    <div className="p-2 bg-[var(--btn)]/10 rounded-xl">
                        <BookDashed className="text-[var(--btn)]" size={24} />
                    </div>
                    <div className="leading-tight">
                        <h1 className="text-[var(--text)] font-black text-lg tracking-tight">
                            Pawebc Forum
                        </h1>
                        <p className="text-[var(--muted)] text-[11px] font-medium">
                            Forum de discussion
                        </p>
                    </div>
                </div>
                
                <div className="flex gap-4 items-center">
                    {t("forum")}
                    <button 
                        onClick={() => setSearchOpen(true)} 
                        className="p-2 text-[var(--muted)] hover:text-[var(--text)] rounded-lg hover:bg-[var(--muted)]/5 transition-colors"
                        aria-label="Rechercher"
                    >
                        <Search size={18} />

                    </button>
                    {IsDark ?(
                        <Moon 
                        className="text-muted" 
                        onClick={activeTheme}
                         />
                    ):(
                        <SunMoon

                         onClick={activeTheme}
                         className="text-muted"

                          />

                    )

                    } 

                       <div className="relative">
                         <Languages 
                        className="text-muted"
                        onClick={()=> setIsLangOpen(!isLangOpen)}
                        //onClick={()=> i18n.changeLanguage("en")} 
                        size={18} />
                        {isLangOpen && (
                            <div className="absolute bg-card p-3 rounded-md top-10 right-0">
                                <button className="flex gap-1 text-muted"
                                        onClick={()=>{
                                            i18n.changeLanguage("fr")
                                            setIsLangOpen(false)
                                        }}>
                                            FR
                                </button>
                                 <button className="flex gap-1 text-muted"
                                        onClick={()=>{
                                            i18n.changeLanguage("en")
                                            setIsLangOpen(false)
                                        }}>
                                            EN
                                </button>
                                   <button className="flex gap-1 text-muted"
                                        onClick={()=>{
                                            i18n.changeLanguage("sw")
                                            setIsLangOpen(false)
                                        }}>
                                            SW
                                </button>
                            </div>
                        )}

                       </div>
                    <div className="h-4 w-[1px] bg-[var(--muted)]/20"></div>

                    <div className="relative" ref={menuRef}>
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex items-center gap-1.5 p-0.5 pr-1 rounded-full border border-[var(--muted)]/10 bg-[var(--surface-card)] hover:border-[var(--muted)]/30 transition-all cursor-pointer group"
                        >
                            <ChevronDown 
                                size={14} 
                                className={`text-[var(--muted)] transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''} group-hover:text-[var(--text)]`}
                            />
                            <img 
                                className="w-7 h-7 rounded-full object-cover border border-[var(--muted)]/10"
                                src="/profil1.jpg" 
                                alt="Profil utilisateur"
                            />
                        </button>

                        <DropDown isOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    </div>

                </div>
            </div>
        </header>
    );
}