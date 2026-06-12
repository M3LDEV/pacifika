import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEKANO — Gestion d'atelier automobile · PACIFIKA",
  description:
    "MEKANO est le logiciel SaaS de gestion d'atelier automobile pour les garages du Pacifique. Ordres de réparation, facturation, stock pièces et bien plus.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "MEKANO — Gestion d'atelier automobile · PACIFIKA",
    description:
      "MEKANO est le logiciel SaaS de gestion d'atelier automobile pour les garages du Pacifique.",
    siteName: "PACIFIKA",
  },
  twitter: {
    card: "summary",
    title: "MEKANO — Gestion d'atelier automobile · PACIFIKA",
    description:
      "MEKANO est le logiciel SaaS de gestion d'atelier automobile pour les garages du Pacifique. Ordres de réparation, facturation, stock pièces.",
  },
};

const features = [
  {
    title: "Clients",
    description: "Fiche client complète, historique des interventions, coordonnées et préférences en un coup d'œil.",
  },
  {
    title: "Véhicules",
    description: "Parc véhicule par client : immatriculation, kilométrage, historique mécanique et alertes d'entretien.",
  },
  {
    title: "Devis",
    description: "Créez et envoyez des devis en quelques clics, transformez-les en ordres de réparation d'un seul geste.",
  },
  {
    title: "Ordres de réparation",
    description: "Pilotez chaque intervention de l'ouverture à la clôture : affectation technicien, suivi temps, statut en temps réel.",
  },
  {
    title: "Factures",
    description: "Facturation automatique à la clôture de l'ordre. Numérotation, TVA, relances — tout est géré.",
  },
  {
    title: "Stock pièces",
    description: "Inventaire en temps réel, alertes de réapprovisionnement et lien direct avec les ordres de réparation.",
  },
  {
    title: "Fournisseurs",
    description: "Gérez vos fournisseurs, commandes et réceptions de pièces depuis le même espace.",
  },
  {
    title: "Rôles utilisateurs",
    description: "Gérant, réceptionniste, technicien — chaque profil accède uniquement à ce dont il a besoin.",
  },
  {
    title: "Tableaux de bord",
    description: "Vision instantanée de l'activité : chiffre d'affaires, ordres en cours, stock critique et performance atelier.",
  },
] as const;

export default function MekanoPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* ── Navbar ── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold tracking-widest transition hover:text-emerald-400">
            PACIFIKA
          </Link>
          <a
            href="mailto:contact@pacifika.nc"
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
          >
            Nous contacter
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
          Solutions PACIFIKA · Atelier automobile
        </p>

        <h1 className="text-6xl font-black tracking-tight sm:text-8xl lg:text-9xl text-emerald-400">
          MEKANO
        </h1>

        <p className="mt-6 max-w-xl text-lg text-neutral-300 sm:text-xl">
          Le logiciel SaaS des garages et ateliers du Pacifique.
        </p>

        <p className="mt-4 max-w-lg text-sm font-medium text-neutral-400 sm:text-base">
          Disponible maintenant · Déploiement pilote en cours
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#demo"
            className="rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400"
          >
            Demander une démonstration
          </a>
          <a
            href="mailto:contact@pacifika.nc"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contacter PACIFIKA
          </a>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-neutral-600">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ── Pitch ── */}
      <section className="border-t border-white/5 px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
            Le produit
          </p>
          <h2 className="text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
            Tout ce qu&apos;il faut pour gérer
            <br />
            <span className="text-emerald-400">votre atelier au quotidien.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-neutral-400 sm:text-lg">
            MEKANO centralise clients, véhicules, interventions, facturation et stocks
            dans une interface unique, pensée pour les équipes terrain du Pacifique.
          </p>
        </div>
      </section>

      {/* ── Fonctionnalités ── */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
              Fonctionnalités
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Ce que MEKANO couvre</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-emerald-500/20 bg-white/[0.02] p-8 transition hover:border-emerald-500/40"
              >
                <div className="mb-3 h-px w-8 bg-emerald-500" />
                <h3 className="mb-3 text-lg font-bold text-emerald-400">{f.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Démo ── */}
      <section id="demo" className="border-t border-white/5 px-6 py-28">
        <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-500/20 bg-white/[0.03] p-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
            Démonstration
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Voir MEKANO en action
          </h2>
          <p className="mt-5 text-neutral-400">
            Vous gérez un garage ou un atelier automobile ? Demandez une démonstration
            personnalisée et découvrez comment MEKANO peut transformer votre quotidien.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:contact@pacifika.nc?subject=Demande%20de%20d%C3%A9monstration%20MEKANO"
              className="rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400"
            >
              Demander une démonstration
            </a>
            <a
              href="mailto:contact@pacifika.nc"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contacter PACIFIKA
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <Link href="/" className="text-sm font-bold tracking-widest text-white transition hover:text-emerald-400">
            ← PACIFIKA
          </Link>
          <p className="text-xs text-neutral-400">
            MEKANO · Gestion d&apos;atelier automobile
          </p>
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} PACIFIKA · Nouvelle-Calédonie
          </p>
        </div>
      </footer>
    </main>
  );
}
