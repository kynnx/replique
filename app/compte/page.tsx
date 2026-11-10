import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";
import Pied from "@/components/pied";
import { envoyerQuestions } from "./actions";

export const metadata: Metadata = {
  title: "Mon compte · Réplique",
};

async function Contenu({
  searchParams,
}: {
  searchParams: Promise<{ paiement?: string; envoi?: string }>;
}) {
  await connection();
  const { paiement, envoi } = await searchParams;

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

      {actif && (
        <section className="mt-8">
          <p className="text-sm font-bold uppercase tracking-widest text-brique">
            Prochaine étape
          </p>
          <h2 className="mt-2 font-titre text-2xl font-extrabold text-sapin">
            Envoyez-nous vos questions
          </h2>
          <p className="mt-3 text-lg leading-snug">
            Écrivez les questions que vos clients vous posent le plus souvent,
            une par ligne. Si vous l’avez, ajoutez la réponse que vous donnez
            d’habitude. Nous préparons votre base de réponses sous 3 jours
            ouvrés et nous vous l’envoyons par e-mail, dans un document
            partagé que vous pourrez modifier.
          </p>

          {envoi === "ok" && (
            <p className="mt-6 rounded-md border border-sapin px-4 py-3 text-sapin">
              Merci, vos questions sont bien reçues. Vous recevrez votre base de
              réponses par e-mail sous 3 jours ouvrés, dans un document partagé
              que vous pourrez modifier. Vous pouvez ajouter d’autres questions
              à tout moment.
            </p>
          )}
          {envoi === "erreur" && (
            <p className="mt-6 rounded-md border border-brique px-4 py-3 text-brique">
              Vos questions n’ont pas pu être envoyées. Vérifiez que le texte
              n’est pas vide et qu’il fait moins de 5 000 caractères, puis
              réessayez.
            </p>
          )}

          <form action={envoyerQuestions} className="mt-6">
            <label htmlFor="contenu" className="block text-sm font-bold">
              Vos questions fréquentes
            </label>
            <textarea
              id="contenu"
              name="contenu"
              required
              maxLength={5000}
              rows={10}
              placeholder="Où est ma commande ?&#10;Puis-je échanger un article ?&#10;Livrez-vous en Belgique ?"
              className="mt-2 block w-full rounded-md border border-encre/40 bg-white px-4 py-3 text-base"
            />
            <button
              type="submit"
              className="mt-4 block w-full rounded-md bg-brique px-6 py-4 text-center text-lg font-bold text-white"
            >
              Envoyer mes questions
            </button>
          </form>
        </section>
      )}
    </>
  );
}

export default function Compte({
  searchParams,
}: {
  searchParams: Promise<{ paiement?: string; envoi?: string }>;
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