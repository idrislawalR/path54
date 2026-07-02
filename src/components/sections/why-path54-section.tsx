import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const pillars = [
  {
    title: "Capital",
    copy: "Backing ambitious founders with patient capital, deep local understanding and a long-term commitment to building globally significant African businesses.",
  },
  {
    title: "Network",
    copy: "Connecting founders with elite athletes, experienced operators and global investors who believe in Africa's long-term future.",
  },
  {
    title: "Impact",
    copy: "Creating lasting opportunity across Africa by backing businesses that transform industries, strengthen communities and leave a legacy for generations.",
  },
];

export function WhyPath54Section() {
  return (
    <section id="why" className="bg-background py-[clamp(80px,9vw,132px)]">
      <div className="container-shell">
        <Reveal className="text-center">
          <p className="text-[12px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147]">
            Why PATH54
          </p>
          <h2 className="display mx-auto mt-9 max-w-[841px] text-[clamp(3.75rem,5.14vw,74px)] leading-[0.894] text-[#F3F0EB]">
            Three pillars. One direction.
          </h2>
        </Reveal>
        <RevealGroup className="mt-20 grid border-l border-t border-[#2A2A2A] md:grid-cols-3" stagger={0.14}>
          {pillars.map((pillar, index) => (
            <RevealItem
              as="article"
              key={pillar.title}
              className="min-h-[311px] border-b border-r border-[#2A2A2A] p-12"
            >
              <p className="display text-[14px] leading-5 tracking-[1.4px] text-[#AA8147]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="display mt-8 text-[54px] leading-[53.48px] text-[#F3F0EB]">
                {pillar.title}
              </h3>
              <div className="mt-6 h-px w-12 bg-[#AA8147]" />
              <p className="mt-7 max-w-[366px] text-[14px] font-normal leading-[22.75px] text-[#C0C5CE]">
                {pillar.copy}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
