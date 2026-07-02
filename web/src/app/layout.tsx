import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aioptic.dev"),
  title: {
    default: "AIOptic — See every token. Control every dollar.",
    template: "%s | AIOptic",
  },
  description:
    "AIOptic is the central AI operations and cost management platform. Unified visibility into LLM usage, token consumption, cloud costs, and governance across AWS, Azure, GCP, and every major AI provider.",
  keywords: [
    "AI cost management",
    "LLM observability",
    "token analytics",
    "AI FinOps",
    "multi-cloud AI",
    "LLM governance",
  ],
  openGraph: {
    title: "AIOptic — See every token. Control every dollar.",
    description:
      "The Datadog + Vercel + Stripe dashboard for AI infrastructure. Complete visibility into AI costs, usage, and governance.",
    type: "website",
    siteName: "AIOptic",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIOptic — See every token. Control every dollar.",
    description:
      "The central AI operations and cost management platform for modern enterprises.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
