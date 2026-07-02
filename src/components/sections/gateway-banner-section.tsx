import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function GatewayBannerSection() {
  return (
    <section className="overflow-hidden bg-background">
      <Reveal y={20}>
        <Image
          src="/assets/gateway-banner.png"
          alt="Sport is the gateway. Innovation is the destination."
          width={1440}
          height={594}
          unoptimized
          sizes="100vw"
          className="h-auto w-full md:gateway-motion"
        />
      </Reveal>
    </section>
  );
}
