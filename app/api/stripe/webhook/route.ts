import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";

function statut(sub: Stripe.Subscription) {
  return sub.status === "active" || sub.status === "trialing"
    ? "actif"
    : "inactif";
}

function finPeriode(sub: Stripe.Subscription) {
  const fin = sub.items.data[0]?.current_period_end;
  return fin ? new Date(fin * 1000).toISOString() : null;
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ erreur: "Signature manquante" }, { status: 400 });
  }

  const corps = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      corps,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch {
    return NextResponse.json({ erreur: "Signature invalide" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.client_reference_id;

    if (userId && typeof session.subscription === "string") {
      const sub = await stripe.subscriptions.retrieve(session.subscription);
      const { error } = await supabase.from("abonnements").upsert(
        {
          user_id: userId,
          statut: statut(sub),
          stripe_customer_id:
            typeof sub.customer === "string" ? sub.customer : sub.customer.id,
          stripe_subscription_id: sub.id,
          fin_periode: finPeriode(sub),
        },
        { onConflict: "user_id" },
      );
      if (error) {
        return NextResponse.json({ erreur: "Écriture impossible" }, { status: 500 });
      }
    }
  }

  if (
    event.type === "customer.subscription.updated" ||
    event.type === "customer.subscription.deleted"
  ) {
    const sub = event.data.object as Stripe.Subscription;
    const { error } = await supabase
      .from("abonnements")
      .update({ statut: statut(sub), fin_periode: finPeriode(sub) })
      .eq("stripe_subscription_id", sub.id);
    if (error) {
      return NextResponse.json({ erreur: "Écriture impossible" }, { status: 500 });
    }
  }

  return NextResponse.json({ recu: true });
}