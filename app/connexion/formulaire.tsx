"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Etat = "repos" | "envoi" | "envoye" | "erreur";

export default function Formulaire() {
  const params = useSearchParams();
  const lienInvalide = params.get("erreur") === "lien";
  const [email, setEmail] = useState("");
  const [etat, setEtat] = useState<Etat>("repos");

  async function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEtat("envoi");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    setEtat(error ? "erreur" : "envoye");
  }

  if (etat === "envoye") {
    return (
      <div className="mt-8 border-y border-encre/20 py-6">
        <p className="font-titre text-xl font-extrabold text-sapin">
          Consultez votre boîte mail
        </p>
        <p className="mt-2 text-lg leading-snug">
          Nous avons envoyé un lien de connexion à {email.trim()}. Cliquez
          dessus pour entrer. Pensez à vérifier vos courriers indésirables.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={envoyer} className="mt-8">
      {lienInvalide && (
        <p className="mb-4 rounded-md border border-brique px-4 py-3 text-brique">
          Ce lien n’est plus valable. Demandez-en un nouveau ci-dessous.
        </p>
      )}
      <label htmlFor="email" className="block text-lg font-bold">
        Votre adresse e-mail
      </label>
      <input
        id="email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 w-full rounded-md border border-encre/40 bg-white px-4 py-3 text-lg"
      />
      {etat === "erreur" && (
        <p className="mt-3 text-brique">
          Le lien n’a pas pu être envoyé. Vérifiez l’adresse et réessayez.
        </p>
      )}
      <button
        type="submit"
        disabled={etat === "envoi"}
        className="mt-5 block w-full rounded-md bg-brique px-6 py-4 text-center text-lg font-bold text-white disabled:opacity-60"
      >
        {etat === "envoi" ? "Envoi en cours…" : "Recevoir mon lien de connexion"}
      </button>
    </form>
  );
}