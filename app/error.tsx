"use client";

import Link from "next/link";

export default function Erreur({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen">
      <header className="mx-auto max-w-xl px-5 py-5">
        <Link href="/" className="font-titre text-xl font-extrabold text-sapin">
          Réplique
        </Link>
      </header>
      <section className="mx-auto max-w-xl px-5 pb-16 pt-6">
        <p className="text-sm font-bold uppercase tracking-widest text-brique">
          Erreur
        </p>
        <h1 className="mt-2 font-titre text-4xl font-extrabold leading-[1.05] text-sapin">
          Quelque chose s’est mal passé.
        </h1>
        <p className="mt-4 text-lg leading-snug">
          Ce n’est pas de votre faute. Réessayez dans un instant : si le
          problème continue, revenez à l’accueil.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 block w-full rounded-md bg-brique px-6 py-4 text-center text-lg font-bold text-white"
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="mt-4 block text-center text-lg underline underline-offset-4"
        >
          Retour à l’accueil
        </Link>
      </section>
    </main>
  );
}