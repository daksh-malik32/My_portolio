import type { Metadata } from "next"; import { SkillsPage } from "@/components/portfolio";
export const metadata: Metadata = { title: "Skills" };
export default function Page() { return <SkillsPage />; }
