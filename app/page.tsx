export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-emerald-400">
          Portail SaaS
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          PACIFIKA
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-300 sm:text-xl">
          Le portail des logiciels métiers conçus pour les entreprises du
          Pacifique.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://www.mekano.nc"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            Découvrir MEKANO
          </a>

          <a
            href="mailto:contact@pacifika.nc"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  );
}