import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function GatewayBannerSection() {
  return (
    <section className="overflow-hidden bg-background">
      <Reveal y={20}>
        <div className="relative h-[clamp(300px,41.25vw,594px)] overflow-hidden">
          <Image
            src="/assets/gateway-building.png"
            alt=""
            fill
            unoptimized
            sizes="90vw"
            className="object-cover object-bottom md:gateway-motion"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/50" />
          <div className="absolute inset-x-0 bottom-[clamp(28px,6.5vw,92px)] z-10">
            <h2 className="display ml-auto mr-[clamp(20px,4vw,48px)] max-w-[650px] text-right text-[clamp(2rem,4.7vw,76px)] leading-[0.88] text-[#F3F0EB]">
              Sport is the gateway.
              <br />
              <span className="text-[#AA8147]">Innovation</span> is the
              <br />
              destination.
            </h2>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
