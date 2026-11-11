import type { Metadata } from "next"; import { ResumePage } from "@/components/portfolio";
export const metadata: Metadata = { title: "Resume" };
export default function Page() { return <ResumePage />; }
