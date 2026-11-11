import type { Metadata } from "next"; import { AboutPage } from "@/components/portfolio";
export const metadata: Metadata = { title: "About" };
export default function Page() { return <AboutPage />; }
