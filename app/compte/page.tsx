import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";
import Pied from "@/components/pied";

export const metadata: Metadata = {
  title: "Mon compte · Réplique",
};

async function Contenu({
  searchParams,
}: {
  searchParams: Promise<{ paiement?: string }>;
}) {
  await connection();
  const { paiement } = await searchParams;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const { data: abonnement } = await supabase
    .from("abonnements")
    .select("statut")
    .maybeSingle();

  const actif = abonnement?.statut === "actif";

  return (
    <>
      <h1 className="font-titre text-4xl font-extrabold leading-[1.05] text-sapin">
        Mon compte
      </h1>
      <p className="mt-4 text-lg leading-snug">
        Vous êtes connecté avec {user.email}.
      </p>

      {paiement === "ok" && !actif && (
        <p className="mt-6 rounded-md border border-sapin px-4 py-3 text-sapin">
          Paiement reçu. Votre abonnement s’active dans quelques secondes :
          actualisez la page.
        </p>
      )}
      {paiement === "annule" && (
        <p className="mt-6 rounded-md border border-encre/40 px-4 py-3">
          Le paiement a été annulé. Vous n’avez pas été débité.
        </p>
      )}

      <div className="mt-8 border-y border-encre/20 py-6">
        <p className="text-sm font-bold uppercase tracking-widest text-brique">
          Abonnement
        </p>
        <p className="mt-2 font-titre text-2xl font-extrabold text-sapin">
          {actif ? "Actif" : "Aucun abonnement actif"}
        </p>
      </div>

      {!actif && (
        <form action="/api/checkout" method="post" className="mt-6">
          <button
            type="submit"
            className="block w-full rounded-md bg-brique px-6 py-4 text-center text-lg font-bold text-white"
          >
            S’abonner · 79 € par mois
          </button>
        </form>
      )}
    </>
  );
}

export default function Compte({
  searchParams,
}: {
  searchParams: Promise<{ paiement?: string }>;
}) {
  return (
    <>
    <main className="min-h-screen">
      <header className="mx-auto max-w-xl px-5 py-5">
        <Link href="/" className="font-titre text-xl font-extrabold text-sapin">
          Réplique
        </Link>
      </header>
      <section className="mx-auto max-w-xl px-5 pb-16 pt-6">
        <Suspense fallback={<p className="text-lg">Chargement…</p>}>
          <Contenu searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
    <Pied />
    </>
  );
}