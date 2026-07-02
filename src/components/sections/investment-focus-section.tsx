import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const sectors = [
  "Artificial Intelligence",
  "Fintech",
  "Healthtech",
  "Agritech",
  "Climate",
  "Education",
  "Future of Work",
];

export function InvestmentFocusSection() {
  return (
    <section id="sectors" className="bg-background py-[clamp(80px,9vw,132px)]">
      <div className="container-shell">
        <Reveal className="grid items-end gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-[12px] font-normal uppercase leading-4 tracking-[3px] text-[#AA8147]">
              Investment focus
            </p>
            <h2 className="display mt-6 max-w-[567px] text-[clamp(4rem,5.57vw,80.22px)] leading-[0.9] text-[#F3F0EB]">
              Sectors that shape tomorrow.
            </h2>
          </div>
          <p className="max-w-[320px] text-[16px] font-normal leading-[22.75px] text-[#C0C5CE] lg:pb-3 lg:text-right">
            We invest in founders building the technologies, infrastructure and
            businesses shaping Africa&apos;s future.
          </p>
        </Reveal>
        <RevealGroup className="mt-16 grid border-l border-t border-[#2A2A2A] md:grid-cols-2 xl:grid-cols-4" stagger={0.06}>
          {sectors.map((sector, index) => (
            <RevealItem
              as="article"
              key={sector}
              className="hover-reveal group relative min-h-[175px] border-b border-r border-[#2A2A2A] p-8 transition-[background-color,border-color] duration-300 ease-out hover:border-[#AA8147]/55 hover:bg-[#AA8147]/10"
            >
              <p className="display text-[12px] leading-4 tracking-[1.2px] text-[#AA8147] transition-colors duration-300 group-hover:text-[#C49A58]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="display mt-8 max-w-[245px] text-[30px] leading-[36.77px] text-[#F3F0EB] transition-colors duration-300 group-hover:text-white">
                {sector}
              </h3>
              <span
                aria-hidden="true"
                className="hover-arrow absolute bottom-8 right-8 text-[#AA8147]"
              >
                <ArrowIcon />
              </span>
            </RevealItem>
          ))}
          <RevealItem as="article" className="min-h-[175px] border-b border-r border-[#2A2A2A] p-8">
            <p className="mt-7 text-[12px] uppercase leading-6 tracking-[3px] text-[#F3F0EB]">
              7 sectors.
              <br />
              1 continent.
              <br />
              Infinite potential.
            </p>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
