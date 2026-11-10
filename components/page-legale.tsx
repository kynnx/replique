import Link from "next/link";

export default function PageLegale({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <header className="mx-auto max-w-3xl px-5 py-5">
        <Link href="/" className="font-titre text-xl font-extrabold text-sapin">
          Réplique
        </Link>
      </header>
      <article className="mx-auto max-w-3xl px-5 pb-16 pt-6">
        <h1 className="font-titre text-4xl font-extrabold leading-[1.05] text-sapin">
          {titre}
        </h1>
        <div className="mt-8 space-y-4 text-lg leading-snug">{children}</div>
      </article>
    </main>
  );
}