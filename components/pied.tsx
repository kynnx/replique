import Link from "next/link";

export default function Pied() {
  return (
    <footer className="border-t border-encre/20 pb-24 md:pb-0">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-titre font-extrabold text-sapin">Réplique</p>
        <nav aria-label="Informations légales">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href="/mentions-legales" className="underline underline-offset-4">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="underline underline-offset-4">
                Conditions de vente
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="underline underline-offset-4">
                Confidentialité
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}