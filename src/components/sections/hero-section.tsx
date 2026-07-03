import Image from "next/image";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

const tickerItems = [
  "Founders",
  "Legacy",
  "Technology",
  "Future",
  "Founders",
  "Legacy",
  "Technology",
  "Future",
];

export function HeroSection() {
  return (
    <section className="relative flex h-[calc(100dvh+130px)] flex-col overflow-hidden border-b hairline bg-background">
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <Image
          src="/assets/hero-athlete.png"
          alt=""
          fill
          preload
          sizes="100vw"
          className="hero-image-entrance object-cover object-[top_50px_0px] brightness-[1.35] contrast-[1.05] md:object-[30%_top]"
        />
        <div className="container-shell relative z-10 flex h-full items-center py-[clamp(20px,5vh,64px)]">
          <div className="max-w-[609px]">
            <Reveal className="mb-7 flex items-center gap-5 sm:gap-6" delay={0.1} y={16}>
              <span className="h-px w-12 shrink-0 bg-gold sm:w-12" />
              <p className="eyebrow  tracking-[3px] text-[0.625rem]">
                Est. 2026 &middot; Athlete-led African venture capital
              </p>
            </Reveal>
            <Reveal delay={0.22} duration={0.95} y={42}>
              <h1 className="display text-[clamp(2.75rem,min(15vw,14vh),145px)] leading-[0.92] text-[#F3F0EB]">
                Investing
                <br />
                in Africa&apos;s
                <br />
                future.
              </h1>
            </Reveal>
            <Reveal delay={0.48} y={24}>
              <p className="mt-9 max-w-[606px] text-[clamp(1.125rem,1.67vw,24px)] leading-[1.4] text-[#F3F0EB]/65">
                Bringing together the world&apos;s leading African and African-heritage
                athletes to invest in the founders, technologies and businesses
                shaping Africa&apos;s future.
              </p>
            </Reveal>
            <Reveal
              className="hero-cta-row mt-10 grid grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] gap-2 sm:max-w-[609px] sm:gap-4"
              delay={0.62}
              y={20}
            >
              <ButtonLink href="#collective" className="hero-cta">
                Become a founding member <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="#portfolio" variant="secondary" className="hero-cta">
                Apply for funding
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-y border-[#2A2A2A] bg-background">
        <div className="flex h-[54px] items-center overflow-hidden whitespace-nowrap">
          <div className="ticker-track flex min-w-max items-center">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="display flex items-center px-8 text-[13px] leading-[19.5px] tracking-[2.86px] text-cream/70"
              >
                {item}
                <span className="ml-8 font-sans text-gold">&middot;</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
