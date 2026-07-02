import Image from "next/image";

export function GatewayBannerSection() {
  return (
    <section className="relative aspect-[1440/594] min-h-[220px] overflow-hidden bg-background sm:min-h-[300px] lg:min-h-[360px]">
      <Image
        src="/assets/gateway-banner.png"
        alt="Sport is the gateway. Innovation is the destination."
        fill
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
