import { Link } from "react-router-dom";

export default function Fetch() {
  return (
    <div className="w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-2 text-sm sm:text-base font-semibold text-white hover:bg-blue-700 transition"
            >
              Tous
            </Link>
            <Link
              to="/nouveaux"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-4 py-2 text-sm sm:text-base font-semibold text-white hover:bg-emerald-600 transition"
            >
              Nouveaux
            </Link>
            <Link
              to="/recents"
              className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-4 py-2 text-sm sm:text-base font-semibold text-white hover:bg-sky-600 transition"
            >
              Recents
            </Link>
            <Link
              to="/ancients"
              className="inline-flex items-center justify-center rounded-2xl bg-violet-500 px-4 py-2 text-sm sm:text-base font-semibold text-white hover:bg-violet-600 transition"
            >
              Anciens
            </Link>
          </div>
          <div className="text-xs sm:text-sm text-slate-500">
            Choisissez une catégorie pour filtrer les posts
          </div>
        </div>
      </div>
    </div>
  );
}
