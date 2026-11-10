"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function envoyerQuestions(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: abonnement } = await supabase
    .from("abonnements")
    .select("statut")
    .eq("user_id", user.id)
    .maybeSingle();
  if (abonnement?.statut !== "actif") redirect("/compte");

  const contenu = String(formData.get("contenu") ?? "").trim();
  if (contenu.length < 1 || contenu.length > 5000) {
    redirect("/compte?envoi=erreur");
  }

  const { error } = await supabase
    .from("questions")
    .insert({ user_id: user.id, contenu });

  redirect(error ? "/compte?envoi=erreur" : "/compte?envoi=ok");
}