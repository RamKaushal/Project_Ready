import type { Metadata } from "next";
import { DashboardApp } from "@/components/dashboard-app";

export const metadata: Metadata = {
  title: "Dashboard Demo",
  description: "Interactive demo of the AIOptic unified AI operations dashboard.",
};

export default function DashboardPage() {
  return <DashboardApp />;
}
