import type { Metadata } from "next";
import Link from "next/link";
import PageLegale from "@/components/page-legale";
import Pied from "@/components/pied";

export const metadata: Metadata = {
  title: "Mentions légales · Réplique",
};

function AC({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-brique/15 px-1 text-encre">
      [À COMPLÉTER : {children}]
    </mark>
  );
}

export default function MentionsLegales() {
  return (
    <>
      <PageLegale titre="Mentions légales">
        <h2 className="font-titre text-2xl font-extrabold text-sapin">
          Éditeur du site
        </h2>
        <p>
          Le site Réplique est édité par <AC>nom et prénom</AC>, entrepreneur
          individuel.
        </p>
        <p>
          SIRET : <AC>numéro à 14 chiffres</AC>
          <br />
          Adresse : <AC>adresse postale</AC>
          <br />
          Contact : <AC>adresse e-mail de contact</AC>
          <br />
          Directeur de la publication : <AC>nom et prénom</AC>
        </p>
        <p>
          TVA : <AC>mention à confirmer selon votre situation</AC>
        </p>

        <h2 className="font-titre text-2xl font-extrabold text-sapin">
          Hébergement
        </h2>
        <p>
          Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, États-Unis (vercel.com).
        </p>

        <h2 className="font-titre text-2xl font-extrabold text-sapin">
          Propriété intellectuelle
        </h2>
        <p>
          Les textes, les logos et les éléments graphiques du site sont la
          propriété de l’éditeur, sauf mention contraire. Toute reproduction
          sans autorisation écrite est interdite.
        </p>

        <h2 className="font-titre text-2xl font-extrabold text-sapin">
          Données personnelles
        </h2>
        <p>
          Le traitement de vos données est décrit dans notre{" "}
          <Link href="/confidentialite" className="underline underline-offset-4">
            politique de confidentialité
          </Link>
          .
        </p>
      </PageLegale>
      <Pied />
    </>
  );
}