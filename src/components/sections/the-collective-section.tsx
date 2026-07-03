import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const collectiveCards = [
  {
    src: "/assets/collective-card-collective.png",
    alt: "Founding members in the PATH54 collective",
  },
  {
    src: "/assets/collective-card-network.png",
    alt: "Advisors and partners in the PATH54 network",
  },
  {
    src: "/assets/collective-card-founders.png",
    alt: "Next generation founders overlooking a city",
  },
  {
    src: "/assets/collective-card-statement.png",
    alt: "World-class athletes, world-changing founders",
  },
];

export function TheCollectiveSection() {
  return (
    <section id="collective" className="bg-background py-[clamp(80px,9vw,132px)]">
      <div className="container-shell">
        <Reveal>
          <p className="text-[10px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147]">
            The collective
          </p>
          <h2 className="display mt-7 max-w-[458px] text-[clamp(4rem,5.57vw,80.22px)] leading-[0.9] text-[#F3F0EB]">
            The people are the proof.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16" stagger={0.16}>
          {collectiveCards.map(({ src, alt }) => (
            <RevealItem key={src} className="relative aspect-[388/426] w-full overflow-hidden" y={36}>
              <Image
                src={src}
                alt={alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 93vw, (max-width: 1440px) 46vw, 672px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
