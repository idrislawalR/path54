import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const collectiveRows = [
  {
    src: "/assets/collective-top-row.png",
    alt: "Founding members and advisors in the PATH54 collective",
    aspect: "aspect-[1344/738]",
  },
  {
    src: "/assets/collective-bottom-row.png",
    alt: "The founders tile beside the world-class athletes and founders statement",
    aspect: "aspect-[1344/543]",
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

        <RevealGroup className="mt-12 space-y-4 md:mt-16" stagger={0.16}>
          {collectiveRows.map(({ src, alt, aspect }) => (
            <RevealItem key={src} className={`relative w-full overflow-hidden ${aspect}`} y={36}>
              <Image
                src={src}
                alt={alt}
                fill
                unoptimized
                sizes="(max-width: 1440px) 93vw, 1344px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
