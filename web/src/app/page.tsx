import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import {
  TrustedBy,
  ProductOverview,
  Features,
  Integrations,
  SelfHosted,
  Security,
} from "@/components/sections";
import { DashboardPreview } from "@/components/dashboard-preview";
import { Pricing, Testimonials, FAQ, Contact, Footer } from "@/components/pricing-faq";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustedBy />
        <ProductOverview />
        <Features />
        <DashboardPreview />
        <Integrations />
        <SelfHosted />
        <Security />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
