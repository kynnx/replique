import Link from "next/link";
import Pied from "@/components/pied";

export default function Home() {
  return (
    <>
      <main>
        <header className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5">
          <span className="font-titre text-xl font-extrabold text-sapin">
            Réplique
          </span>
          <Link href="/connexion" className="text-base underline underline-offset-4">
            Connexion
          </Link>
        </header>

        <section className="mx-auto max-w-3xl px-5 pb-14 pt-6">
          <h1 className="font-titre text-4xl font-extrabold leading-[1.05] text-sapin sm:text-6xl">
            Répondez à vos clients en un clic.
          </h1>
          <p className="mt-5 text-lg leading-snug sm:text-xl">
            Les mêmes questions reviennent chaque jour. Réplique les reconnaît et
            vous propose la bonne réponse, prête à envoyer.
          </p>
          <Link
            href="/connexion"
            className="mt-8 block rounded-md bg-brique px-6 py-4 text-center text-lg font-bold text-white sm:inline-block"
          >
            Commencer
          </Link>
          <p className="mt-3 text-base">
            79 € par mois · sans engagement · satisfait ou remboursé pendant 30 jours
          </p>
        </section>
               <section className="mx-auto max-w-3xl px-5 pb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-brique">
            Un exemple concret
          </p>
          <div className="mt-4 rounded-md border border-encre/20 bg-white p-5">
            <p className="text-sm font-bold uppercase tracking-widest text-encre/60">
              Votre client écrit
            </p>
            <p className="mt-2 text-lg leading-snug">
              « Bonjour, je n’ai toujours pas reçu ma commande. Où en est-elle ? »
            </p>
            <hr className="my-5 border-encre/20" />
            <p className="text-sm font-bold uppercase tracking-widest text-sapin">
              Réplique propose · Suivi de commande
            </p>
            <p className="mt-2 rounded-md bg-creme px-4 py-3 text-lg leading-snug">
              Bonjour, merci de votre patience. Votre commande est en cours
              d’acheminement : un e-mail de suivi vous a été envoyé avec son
              numéro. Si rien n’est arrivé d’ici 3 jours, répondez à ce message
              et nous la traitons en priorité. Bonne journée.
            </p>
            <div className="mt-4 flex gap-3" aria-hidden="true">
              <span className="rounded-md border border-sapin px-5 py-3 font-bold text-sapin">
                Modifier
              </span>
              <span className="rounded-md bg-sapin px-5 py-3 font-bold text-white">
                Envoyer
              </span>
            </div>
          </div>
          <p className="mt-3 text-sm">
            Exemple pour illustrer : le client et son message sont inventés.
          </p>
        </section>

        <section className="border-y border-encre/20 bg-white/40">
          <div className="mx-auto max-w-3xl px-5 py-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brique">
              Ce que ça vous coûte aujourd’hui
            </p>
            <p className="mt-4 font-titre text-6xl font-extrabold leading-none text-sapin sm:text-7xl">
              7 h 20
            </p>
            <p className="mt-2 text-lg font-bold">perdues chaque mois</p>
            <p className="mt-4 max-w-xl text-lg leading-snug">
              Dix questions par jour, deux minutes pour taper chaque réponse,
              vingt-deux jours ouvrés : ce temps n’est facturé à personne.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-12">
          <h2 className="font-titre text-3xl font-extrabold text-sapin sm:text-4xl">
            Trois choses, pas une de plus.
          </h2>
          <ol className="mt-8 divide-y divide-encre/20 border-y border-encre/20">
            <li className="py-6">
              <p className="font-titre text-xl font-extrabold">
                1. Votre base en dix minutes
              </p>
              <p className="mt-1 text-lg leading-snug">
                Vous saisissez vos questions fréquentes une fois, avec la réponse
                que vous donnez d’habitude.
              </p>
            </li>
            <li className="py-6">
              <p className="font-titre text-xl font-extrabold">
                2. Une réponse en un clic
              </p>
              <p className="mt-1 text-lg leading-snug">
                Elle est proposée dès qu’une question arrive. Vous la relisez, vous
                la modifiez si besoin, puis vous l’envoyez.
              </p>
            </li>
            <li className="py-6">
              <p className="font-titre text-xl font-extrabold">
                3. Le temps gagné, chiffré
              </p>
              <p className="mt-1 text-lg leading-snug">
                Les questions nouvelles sont repérées pour être ajoutées à la base,
                et vous voyez chaque semaine combien d’heures vous avez récupérées.
              </p>
            </li>
          </ol>
        </section>

        <section className="border-y border-encre/20 bg-white/40">
          <div className="mx-auto max-w-3xl px-5 py-12">
            <h2 className="font-titre text-3xl font-extrabold text-sapin">
              Ce que vous recevez au départ
            </h2>
            <p className="mt-4 text-lg leading-snug">
              Après votre inscription, nous remplissons ensemble votre base de
              questions fréquentes, sous quelques jours. Le service s’enrichit
              ensuite régulièrement : votre abonnement donne accès à chaque
              nouveauté.
            </p>
          </div>
        </section>

        <section className="bg-sapin text-creme">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <h2 className="font-titre text-3xl font-extrabold sm:text-4xl">
              Reprenez vos 7 heures.
            </h2>
            <Link
              href="/connexion"
              className="mt-6 block rounded-md bg-brique px-6 py-4 text-center text-lg font-bold text-white sm:inline-block"
            >
              Commencer
            </Link>
            <p className="mt-4 text-base leading-snug">
              Satisfait ou remboursé pendant 30 jours : un e-mail suffit, et le
              remboursement est effectué sous 5 jours ouvrés. Sans engagement,
              résiliable à tout moment.
            </p>
          </div>
        </section>
      </main>

      <Pied />

      <div className="fixed inset-x-0 bottom-0 border-t border-encre/20 bg-creme p-3 md:hidden">
        <Link
          href="/connexion"
          className="block rounded-md bg-brique px-6 py-4 text-center text-lg font-bold text-white"
        >
          Commencer · 79 € par mois
        </Link>
      </div>
    </>
  );
}