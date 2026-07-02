import Image from "next/image";

export function MissionSection() {
  return (
    <section id="mission" className="bg-background py-[clamp(80px,9vw,130px)]">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_620px]">
        <div>
          <p className="text-[12px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147]">
            The mission
          </p>
          <h2 className="display mt-9 max-w-[643px] text-[clamp(3.75rem,5.14vw,74px)] leading-[0.894] text-[#F3F0EB]">
            Africa has produced world-class athletes.
          </h2>
          <div className="mt-9 h-px w-14 bg-gold" />
          <h3 className="mt-10 max-w-[524px] text-[20px] font-semibold leading-[27.5px] text-[#F3F0EB]">
            Now we&apos;re helping build world-class businesses.
          </h3>
          <p className="mt-4 max-w-[524px] text-[14px] font-normal leading-[22.75px] text-[#C0C5CE]">
            PATH54 is a movement built around African excellence. Elite athletes
            are the catalyst. Innovation, entrepreneurship and long-term impact
            are the destination.
          </p>
        </div>
        <div className="relative aspect-square overflow-hidden bg-cream">
          <Image
            src="/assets/mission-legacy.png"
            alt="PATH54 legacy campaign image"
            fill
            sizes="(max-width: 1024px) 92vw, 540px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
