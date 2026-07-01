import { useState } from "react"

export default function NewPost({ isOpen, setIsOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://api-lab-plum.vercel.app/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!res.ok) throw new Error(`erreur ${await res.json()}`);
      await res.json();

      setMessage("✔ Données ajoutées avec succès !");
      setIsOpen(false);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/70 p-4 sm:p-6">
      <div className="relative w-full max-w-2xl rounded-[2rem] bg-white p-5 sm:p-7 md:p-9 shadow-2xl ring-1 ring-slate-200">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
          aria-label="Fermer"
        >
          ✕
        </button>

        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-600">Nouvel article</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-900">
            Créer un nouveau post
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Remplissez le formulaire ci-dessous pour ajouter un post. Le design est responsive et adapté aux petits écrans.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition"
            >
              Annuler
            </button>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Nom</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Insérer votre nom"
              className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insérer votre email"
              className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Mot de passe</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Insérer votre mot de passe"
              className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              required
            />
          </label>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              disabled={loading}
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-3xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Envoi..." : "Ajouter"}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-3xl border border-slate-300 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Fermer
            </button>
          </div>

          {message && (
            <p className="rounded-3xl bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-white">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
