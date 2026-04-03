import type { Metadata } from "next";
import "./globals.css";
import RevealProvider from "@/components/RevealProvider";

export const metadata: Metadata = {
  title: "Pulseia — AI that works for you 24/7",
  description: "Pulseia est l'agence qui transforme votre présence digitale avec l'IA. Sites web autonomes, automatisation, et croissance continue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RevealProvider />
        {children}
      </body>
    </html>
  );
}
