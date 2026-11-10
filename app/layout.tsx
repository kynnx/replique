import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://replique-nine.vercel.app"),
  title: "Réplique : vos réponses aux questions qui reviennent",
  description:
    "Une réponse prête en un clic pour chaque question qui revient dans votre boutique en ligne. Gratuit pour commencer.",
  openGraph: {
    title: "Réplique : vos réponses aux questions qui reviennent",
    description:
      "Une réponse prête en un clic pour chaque question qui revient dans votre boutique en ligne.",
    siteName: "Réplique",
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f7f3ec",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}