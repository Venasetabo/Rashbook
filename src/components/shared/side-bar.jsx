import { Link } from "react-router-dom"
import { 
    MessagesSquare, 
    FileText, 
    Mic2, 
    Star, 
    MessageCircleMore, 
    UserCircle2 
} from "lucide-react"
import { useTranslation } from "react-i18next";

export default function SideBar() {
    const {t} = useTranslation();

    return (
        <div className="sticky top-0 h-[calc(100vh_-_81px)] max-sm:bg-[var(--surface-card)] max-sm:rounded-2xl">
            <nav>
                <ul className="flex flex-col py-8 gap-5 text-text px-4">
                  
                    <li className="flex gap-3 items-center hover:text-white">
                        <Link to="/" className="flex gap-3 items-center hover:text-white">
                            <MessagesSquare size={20} className="text-gray-400/60" />
                            <h2 className="text-[15px] font-medium max-sm:hidden">
                                {t("sidebar.forum")}
                            </h2>
                        </Link>
                    </li>

                    <li className="flex gap-3 items-center hover:text-white">
                        <Link to="/new-posts" className="flex gap-3 items-center hover:text-white">
                            <FileText size={20} className="text-gray-400/60" />
                            <h2 className="text-[15px] font-medium max-sm:hidden">{t("sidebar.new")}</h2>
                        </Link>
                    </li>

                    <li className="flex gap-3 items-center hover:text-white">
                        <Link to="/podcast" className="flex gap-3 items-center hover:text-white">
                            <Mic2 size={20} className="text-gray-400/60" />
                            <h2 className="text-[15px] font-medium max-sm:hidden">{t("sidebar.podcast")}</h2>
                        </Link>
                    </li>

                    <li className="flex gap-3 items-center hover:text-white">
                        <Link to="/following" className="flex gap-3 items-center hover:text-white">
                            <Star size={20} className="text-gray-400/60" />
                            <h2 className="text-[15px] font-medium max-sm:hidden">{t("sidebar.following")}</h2>
                        </Link>
                    </li>

                    <li className="flex gap-3 items-center hover:text-white">
                        <Link to="/new-threads" className="flex gap-3 items-center hover:text-white">
                            <MessageCircleMore size={20} className="text-gray-400/60" />
                            <h2 className="text-[15px] font-medium max-sm:hidden">{t("sidebar.thread")}</h2>
                        </Link>
                    </li>

                    <li className="flex gap-3 items-center hover:text-white transition-colors">
                        <Link to="/about" className="flex gap-3 items-center hover:text-white">
                            <UserCircle2 size={20} className="text-gray-400/60" />
                            <h2 className="text-[15px] font-medium max-sm:hidden">{t("sidebar.about")}</h2>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}