import type { Metadata } from "next";
import Link from "next/link";
import PageLegale from "@/components/page-legale";
import Pied from "@/components/pied";

export const metadata: Metadata = {
  title: "Conditions générales de vente · Réplique",
};

function AC({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-brique/15 px-1 text-encre">
      [À COMPLÉTER : {children}]
    </mark>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-titre text-2xl font-extrabold text-sapin">
      {children}
    </h2>
  );
}

export default function Cgv() {
  return (
    <>
      <PageLegale titre="Conditions générales de vente">
        <H2>1. Objet</H2>
        <p>
          Les présentes conditions régissent la vente de l’abonnement à
          Réplique, un service en ligne qui aide les professionnels à répondre
          aux questions qui reviennent. Elles s’adressent aux professionnels.
          En vous abonnant, vous les acceptez.
        </p>

        <H2>2. Le service</H2>
        <p>
          Réplique permet de constituer une base de questions fréquentes et
          d’obtenir une réponse proposée, que vous relisez et modifiez avant de
          l’envoyer. Les fonctionnalités sont ajoutées progressivement :
          l’abonnement donne accès à celles qui sont disponibles.
        </p>
        <p>
          À la souscription, l’éditeur remplit avec vous votre base de
          questions fréquentes, dans un délai de{" "}
          <AC>délai de mise en place, par exemple 3 jours ouvrés</AC>.
        </p>

        <H2>3. Prix et paiement</H2>
        <p>
          L’abonnement coûte 79 € par mois. Il est prélevé chaque mois par carte
          bancaire, via le prestataire de paiement Stripe. TVA :{" "}
          <AC>mention à confirmer selon votre situation</AC>.
        </p>

        <H2>4. Durée et résiliation</H2>
        <p>
          L’abonnement est sans engagement et résiliable à tout moment, en
          écrivant à <AC>adresse e-mail de contact</AC>. La résiliation prend
          effet à la fin de la période déjà payée, et aucun prélèvement n’a lieu
          ensuite.
        </p>

        <H2>5. Garantie satisfait ou remboursé</H2>
        <p>
          Pendant 30 jours à compter de votre premier paiement, vous pouvez
          demander le remboursement intégral de ce paiement, sans avoir à vous
          justifier. Il suffit d’écrire à <AC>adresse e-mail de contact</AC>.
          Le remboursement est effectué sous 5 jours ouvrés, sur le moyen de
          paiement utilisé.
        </p>

        <H2>6. Responsabilité</H2>
        <p>
          L’éditeur met en œuvre des moyens raisonnables pour assurer l’accès
          au service, sans garantie d’une disponibilité continue. Les réponses
          proposées sont des suggestions : vous restez responsable de ce que
          vous envoyez à vos clients.
        </p>

        <H2>7. Données personnelles</H2>
        <p>
          Le traitement de vos données est décrit dans notre{" "}
          <Link href="/confidentialite" className="underline underline-offset-4">
            politique de confidentialité
          </Link>
          .
        </p>

        <H2>8. Droit applicable</H2>
        <p>
          Les présentes conditions sont soumises au droit français. En cas de
          litige, une solution amiable est recherchée avant toute action devant
          les tribunaux compétents <AC>juridiction compétente</AC>.
        </p>
      </PageLegale>
      <Pied />
    </>
  );
}