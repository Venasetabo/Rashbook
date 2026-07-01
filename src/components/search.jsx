import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { usePost } from "../hooks/use-post";

export default function Search({ searchOpen, setSearchOpen }) {
  const [query, setQuery] = useState("");
  const {data, loading } = usePost();
  const filterPosts = data.filter((post)=>(
    post.title.toLowerCase().includes(query.toLowerCase()) || 
  post.body.toLowerCase().includes(query.toLowerCase())
  ))

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-100 ease-in-out ${searchOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
    >
      <div
        onClick={() => setSearchOpen(false)}
        className={`absolute inset-0 bg-black/40 transition-all duration-300 ease-in-out ${searchOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      ></div>

      <form
        onClick={(e) => e.stopPropagation()}
        className={`absolute left-1/2 -translate-x-1/2 bg-card border border-gray-100/10 shadow-2xl rounded-2xl p-4 w-full max-w-2xl transition-all duration-300 ease-in-out ${searchOpen ? "top-[81px]" : "top-[110px]"}`}
      >
        <div className="relative flex items-center w-full">
          <SearchIcon className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />

          <input
            type="search"
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            placeholder="Chercher un sujet, un article..."
            className="w-full pl-12 pr-4 py-3 bg-background border border-gray-200/10 rounded-xl text-base text-muted dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
          />
          
          <span
            onClick={() => setSearchOpen(false)}
            className="absolute right-4 hidden md:inline-flex items-center px-1.5 py-0.5 border border-gray-200/30 rounded text-xs text-gray-400 bg-gray-100/10"
          >
            ESC
          </span>
        </div>

        {query === "" ? (
          <p className="text-sm text-center text-gray-400 py-4">
            Commencez à taper pour rechercher un sujet...
          </p>
        ) : filterPosts.length > 0 ? (
          filterPosts.map((q) => (
            <Link 
            onClick={()=> setSearchOpen(false)}
             key={q.id} to={`/posts/${q.id}`} className="mt-4">
              <h3 className="text-text font-bold text-lg">
                {q.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {q.body}
              </p>
            </Link>
          ))
        ) : (
          <p className="mt-4 text-center text-gray-500">
            Aucun résultat trouvé pour "{query}"
          </p>
        )}
      </form>
    </div>
  );
}
