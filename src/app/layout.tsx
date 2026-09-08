import type { Metadata } from "next";
import { Bebas_Neue, Fraunces, Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


/* =========================================================
   FONTS
========================================================= */

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


/* =========================================================
   SITE METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    default: "The Styled Edit Live — Thrift. Style. Live.",
    template: "%s — The Styled Edit Live",
  },

  description:
    "The Styled Edit Live is the one-year anniversary of The Styled Edit — a live fashion and lifestyle experience built around thrift, styling, creativity, community and the next chapter of TSE.",

  keywords: [
    "The Styled Edit",
    "TSE Live",
    "thrift Kenya",
    "fashion Kenya",
    "Rongai events",
    "fashion events Nairobi",
    "lifestyle Kenya",
    "thrift fashion",
  ],

  authors: [
    {
      name: "The Styled Edit",
    },
  ],

  creator: "The Styled Edit",

  openGraph: {
    title: "The Styled Edit Live",
    description:
      "One year of TSE. A live fashion & lifestyle experience.",
    type: "website",
    locale: "en_KE",
    siteName: "The Styled Edit Live",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Styled Edit Live",
    description:
      "One year of TSE. A live fashion & lifestyle experience.",
  },

  robots: {
    index: true,
    follow: true,
  },
};


/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${bebas.variable}
        ${inter.variable}
        ${fraunces.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full bg-tse-black text-tse-paper flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}