import { HeroSection } from "@/components/institutions/HeroSection";
import { OfferingsSection } from "@/components/institutions/OfferingsSection";
import { PartnersSection } from "@/components/institutions/PartnersSection";
import { IntegrationSection } from "@/components/institutions/IntegrationSection";
import { CTASection } from "@/components/institutions/CTASection";

export default function InstitutionsPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OfferingsSection />
      <PartnersSection />
      <IntegrationSection />
      <CTASection />
    </main>
  );
}

