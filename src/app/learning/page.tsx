import type { Metadata } from "next"; import { LearningPage } from "@/components/portfolio";
export const metadata: Metadata = { title: "Currently Learning" };
export default function Page() { return <LearningPage />; }
