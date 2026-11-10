import type { Metadata } from "next";
import PageLegale from "@/components/page-legale";
import Pied from "@/components/pied";

export const metadata: Metadata = {
  title: "Politique de confidentialité · Réplique",
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

export default function Confidentialite() {
  return (
    <>
      <PageLegale titre="Politique de confidentialité">
        <H2>Qui est responsable de vos données</H2>
        <p>
          Le responsable du traitement est <AC>nom et prénom de l’éditeur</AC>,
          joignable à l’adresse <AC>adresse e-mail de contact</AC>.
        </p>

        <H2>Les données que nous collectons</H2>
        <p>
          Votre adresse e-mail, pour vous permettre de vous connecter par un
          lien reçu dans votre boîte mail. Les informations liées à votre
          abonnement : son statut, sa date de fin de période et les
          identifiants fournis par Stripe. Les contenus que vous nous confiez
          pour faire fonctionner le service, comme votre base de questions
          fréquentes et vos réponses.
        </p>
        <p>
          Nous ne voyons pas et ne conservons pas votre numéro de carte
          bancaire : il est traité uniquement par Stripe.
        </p>

        <H2>Pourquoi et sur quelle base</H2>
        <p>
          Ces données servent à fournir le service auquel vous vous abonnez, à
          gérer votre paiement et à vous répondre. La base légale est
          l’exécution du contrat conclu avec vous. Nous ne les vendons pas et
          ne les utilisons pas pour de la publicité.
        </p>

        <H2>Combien de temps nous les gardons</H2>
        <p>
          Pendant la durée de votre abonnement, puis{" "}
          <AC>durée de conservation après résiliation</AC>. Les données de
          facturation sont conservées le temps exigé par la loi.
        </p>

        <H2>Nos prestataires</H2>
        <p>
          Supabase héberge la base de données et la connexion, dans la région
          de Paris. Stripe traite les paiements. Vercel héberge le site. Certains
          de ces prestataires peuvent traiter des données en dehors de l’Union
          européenne, avec les garanties prévues par le RGPD :{" "}
          <AC>à vérifier auprès de chaque prestataire</AC>.
        </p>

        <H2>Cookies</H2>
        <p>
          Le site utilise uniquement un cookie technique, nécessaire pour
          garder votre session ouverte après votre connexion. Il ne sert ni au
          suivi ni à la publicité et ne demande donc pas de consentement.
        </p>

        <H2>Vos droits</H2>
        <p>
          Vous pouvez demander l’accès à vos données, leur rectification, leur
          effacement, leur portabilité, ou vous opposer à leur traitement, en
          écrivant à <AC>adresse e-mail de contact</AC>. Si vous estimez que vos
          droits ne sont pas respectés, vous pouvez saisir la CNIL (cnil.fr).
        </p>
      </PageLegale>
      <Pied />
    </>
  );
}