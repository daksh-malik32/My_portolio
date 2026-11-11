import type { Metadata } from "next";
import { SiteShell } from "@/components/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Daksh Malik — AI/ML Engineer in the Making", template: "%s | Daksh Malik" },
  description: "Daksh Malik — Computer Science student exploring artificial intelligence, machine learning, and thoughtful products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
