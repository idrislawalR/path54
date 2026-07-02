import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { GatewayBannerSection } from "@/components/sections/gateway-banner-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { InvestmentFocusSection } from "@/components/sections/investment-focus-section";
import { JournalSection } from "@/components/sections/journal-section";
import { MissionSection } from "@/components/sections/mission-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TheCollectiveSection } from "@/components/sections/the-collective-section";
import { WhyPath54Section } from "@/components/sections/why-path54-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <MissionSection />
        <WhyPath54Section />
        <GatewayBannerSection />
        <InvestmentFocusSection />
        <TheCollectiveSection />
        <PortfolioSection />
        <ImpactSection />
        <JournalSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
