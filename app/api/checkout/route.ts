import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const { origin } = new URL(request.url);

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(`${origin}/connexion`, 303);
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    locale: "fr",
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    customer_email: user.email,
    client_reference_id: user.id,
    subscription_data: { metadata: { user_id: user.id } },
    success_url: `${origin}/compte?paiement=ok`,
    cancel_url: `${origin}/compte?paiement=annule`,
  });

  return NextResponse.redirect(session.url!, 303);
}