import type { Metadata } from "next";
import Link from "next/link";
import Pied from "@/components/pied";

export const metadata: Metadata = {
  title: "Page introuvable · Réplique",
};

export default function NotFound() {
  return (
    <>
      <main className="min-h-[70vh]">
        <header className="mx-auto max-w-xl px-5 py-5">
          <Link href="/" className="font-titre text-xl font-extrabold text-sapin">
            Réplique
          </Link>
        </header>
        <section className="mx-auto max-w-xl px-5 pb-16 pt-6">
          <p className="text-sm font-bold uppercase tracking-widest text-brique">
            Erreur 404
          </p>
          <h1 className="mt-2 font-titre text-4xl font-extrabold leading-[1.05] text-sapin">
            Cette page n’existe pas.
          </h1>
          <p className="mt-4 text-lg leading-snug">
            Le lien est peut-être incomplet, ou la page a été déplacée.
          </p>
          <Link
            href="/"
            className="mt-8 block rounded-md bg-brique px-6 py-4 text-center text-lg font-bold text-white"
          >
            Retour à l’accueil
          </Link>
        </section>
      </main>
      <Pied />
    </>
  );
}