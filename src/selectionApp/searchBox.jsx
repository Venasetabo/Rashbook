import { Search } from "lucide-react"
import { useState } from "react"

export default function Searchbox({ placeholder }) {
  const [query, setQuery] = useState("")

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl border border-blue-200 shadow-sm p-4 sm:p-   5 md:p-6">
        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          <div className="flex-1 min-w-0">
            <label htmlFor="search-input" className="sr-only">
              Rechercher
            </label>
            <input
              id="search-input"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              placeholder={`Recherchez des ${placeholder} publiés...`}
              className="w-full h-12 sm:h-14 rounded-2xl border border-slate-300 bg-slate-50 px-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 sm:px-6 py-3 sm:py-3 text-white text-sm sm:text-base font-semibold hover:bg-blue-700 transition w-full sm:w-auto"
          >
            <Search size={20} className="mr-2" />
            Rechercher
          </button>
        </div>

        <div className="mt-4 text-sm sm:text-base text-slate-600">
          Résultats pour : <span className="font-semibold text-slate-900">{query || "..."}</span>
        </div>
      </div>
    </div>
  )
}
