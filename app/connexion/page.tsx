import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Formulaire from "./formulaire";

export const metadata: Metadata = {
  title: "Connexion · Réplique",
};

export default function Connexion() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto max-w-xl px-5 py-5">
        <Link href="/" className="font-titre text-xl font-extrabold text-sapin">
          Réplique
        </Link>
      </header>

      <section className="mx-auto max-w-xl px-5 pb-16 pt-6">
        <h1 className="font-titre text-4xl font-extrabold leading-[1.05] text-sapin">
          Connexion
        </h1>
        <p className="mt-4 text-lg leading-snug">
          Entrez votre adresse e-mail : vous recevez un lien pour vous
          connecter, sans mot de passe à retenir.
        </p>
        <Suspense fallback={null}>
          <Formulaire />
        </Suspense>
      </section>
    </main>
  );
}