import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulseia — AI that works for you 24/7",
};

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
