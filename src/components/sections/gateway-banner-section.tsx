import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function GatewayBannerSection() {
  return (
    <section className="relative aspect-[1440/594] min-h-[220px] overflow-hidden bg-background sm:min-h-[300px] lg:min-h-[360px]">
      <Reveal className="absolute inset-0" y={20}>
        <Image
          src="/assets/gateway-banner.png"
          alt="Sport is the gateway. Innovation is the destination."
          fill
          unoptimized
          sizes="100vw"
          className="slow-scale object-cover"
        />
      </Reveal>
    </section>
  );
}
