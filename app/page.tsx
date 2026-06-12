import Link from "next/link";

const products = [
  {
    name: "MEKANO",
    tagline: "Gestion d'atelier mécanique",
    description:
      "Le logiciel métier des garages et ateliers. Ordres de réparation, facturation, gestion des techniciens — tout en un.",
    href: "/solutions/mekano",
    available: true,
    accent: "emerald",
  },
  {
    name: "LOKATO",
    tagline: "Gestion locative",
    description:
      "Gérez vos biens immobiliers, locataires, quittances et états des lieux depuis une interface unique.",
    href: null,
    available: false,
    accent: "sky",
  },
  {
    name: "BOUTIKO",
    tagline: "Commerce & point de vente",
    description:
      "Caisse, stocks, clients et ventes. Tout ce qu'il faut pour gérer votre commerce au quotidien.",
    href: null,
    available: false,
    accent: "amber",
  },
  {
    name: "PLANTO",
    tagline: "Agriculture & plantation",
    description:
      "Suivi des cultures, des parcelles, de la récolte et des intrants. Conçu pour les exploitants du Pacifique.",
    href: null,
    available: false,
    accent: "lime",
  },
] as const;

const values = [
  {
    title: "Ancrage local",
    description:
      "Conçus par et pour les entreprises du Pacifique, nos outils répondent aux réalités du terrain — pas à des marchés lointains.",
  },
  {
    title: "Ambition régionale",
    description:
      "Un écosystème SaaS complet pour accompagner la transformation numérique des entreprises de la région.",
  },
  {
    title: "Simplicité radicale",
    description:
      "Des interfaces pensées pour les équipes terrain. Aucun superflu, juste l'essentiel qui fonctionne.",
  },
] as const;

const accentClasses: Record<string, { border: string; text: string; badge: string }> = {
  emerald: {
    border: "border-emerald-500/30 hover:border-emerald-500/60",
    text: "text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400",
  },
  sky: {
    border: "border-sky-500/30 hover:border-sky-500/60",
    text: "text-sky-400",
    badge: "bg-sky-500/10 text-sky-400",
  },
  amber: {
    border: "border-amber-500/30 hover:border-amber-500/60",
    text: "text-amber-400",
    badge: "bg-amber-500/10 text-amber-400",
  },
  lime: {
    border: "border-lime-500/30 hover:border-lime-500/60",
    text: "text-lime-400",
    badge: "bg-lime-500/10 text-lime-400",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* ── Navbar ── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-widest">PACIFIKA</span>
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
          Écosystème SaaS · Pacifique
        </p>

        <h1 className="text-6xl font-black tracking-tight sm:text-8xl lg:text-9xl">
          PACIFIKA
        </h1>

        <p className="mt-6 max-w-xl text-lg text-neutral-400 sm:text-xl">
          Écosystème de solutions SaaS pour les entreprises du Pacifique.
        </p>

        <p className="mt-4 max-w-lg text-sm font-medium text-neutral-400 sm:text-base">
          Un écosystème.&nbsp; Des solutions.&nbsp; Une même vision.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/solutions/mekano"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            Découvrir MEKANO
          </Link>
          <a
            href="#solutions"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Voir les solutions
          </a>
        </div>

        {/* scroll indicator */}
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

      {/* ── Solutions ── */}
      <section id="solutions" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
              Solutions
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Un outil pour chaque métier
            </h2>
            <p className="mt-4 text-neutral-400">
              Chaque solution est conçue pour un secteur précis, avec une
              profondeur métier réelle.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((p) => {
              const cls = accentClasses[p.accent];
              const inner = (
                <div
                  className={`group flex h-full flex-col rounded-2xl border bg-white/[0.02] p-8 transition-all duration-200 ${cls.border}`}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className={`text-2xl font-black tracking-tight ${cls.text}`}>
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-neutral-300">
                        {p.tagline}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                        p.available
                          ? cls.badge
                          : "bg-white/5 text-neutral-400"
                      }`}
                    >
                      {p.available ? "Disponible" : "Bientôt"}
                    </span>
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-neutral-400">
                    {p.description}
                  </p>

                  {p.available && (
                    <div
                      className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${cls.text} group-hover:gap-3 transition-all`}
                    >
                      Accéder à {p.name}
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              );

              return p.href ? (
                <Link key={p.name} href={p.href}>
                  {inner}
                </Link>
              ) : (
                <div key={p.name}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
            Notre vision
          </p>
          <blockquote className="text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl">
            &quot;Un écosystème.
            <br />
            Des solutions.
            <br />
            <span className="text-emerald-400">Une même vision.</span>&quot;
          </blockquote>
          <p className="mx-auto mt-8 max-w-2xl text-neutral-400 sm:text-lg">
            Le Pacifique mérite des logiciels conçus pour lui. PACIFIKA
            construit un écosystème de solutions SaaS verticales, pensées pour
            les contraintes locales, déployées avec une ambition régionale.
          </p>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="border-t border-white/5 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
              Valeurs
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Ce qui nous guide</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                <div className="mb-3 h-px w-8 bg-emerald-500" />
                <h3 className="mb-3 text-lg font-bold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Contact ── */}
      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
            Contact
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Une question ? Un projet ?
          </h2>
          <p className="mt-5 text-neutral-400">
            Vous souhaitez en savoir plus sur une solution, un partenariat ou
            rejoindre l&apos;écosystème ? Écrivez-nous.
          </p>
          <a
            href="mailto:contact@pacifika.nc"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            contact@pacifika.nc
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <span className="text-sm font-bold tracking-widest text-white">
            PACIFIKA
          </span>
          <p className="text-xs text-neutral-400">
            Écosystème SaaS pour les entreprises du Pacifique
          </p>
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} PACIFIKA · Nouvelle-Calédonie
          </p>
        </div>
      </footer>
    </main>
  );
}
