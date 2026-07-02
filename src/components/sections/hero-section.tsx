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
    <section className="relative overflow-hidden border-b hairline bg-background">
      <div className="relative min-h-[720px] overflow-hidden md:min-h-[851px]">
        <Image
          src="/assets/hero-athlete.png"
          alt=""
          fill
          preload
          sizes="100vw"
          className="hero-image-entrance object-cover object-[62%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.78)_36%,rgba(5,5,5,0.28)_72%,rgba(5,5,5,0)_100%)]" />
        <div className="container-shell relative z-10 flex min-h-[720px] items-center py-20 md:min-h-[851px]">
          <div className="max-w-[607px]">
            <Reveal className="mb-7 flex items-center gap-5 sm:gap-6" delay={0.1} y={16}>
              <span className="h-px w-12 shrink-0 bg-gold sm:w-16" />
              <p className="eyebrow text-[10px] leading-[15px] tracking-[3px] sm:text-[12px]">
                Est. 2026 &middot; Athlete-led African venture capital
              </p>
            </Reveal>
            <Reveal delay={0.22} duration={0.95} y={42}>
              <h1 className="display text-[clamp(4.25rem,18vw,145px)] leading-[0.92] text-[#F3F0EB] md:leading-[130px]">
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
            <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row" delay={0.62} y={20}>
              <ButtonLink href="#collective">
                Become a founding member <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="#portfolio" variant="secondary">
                Apply for funding
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t hairline bg-background">
        <div className="flex min-h-20 overflow-hidden whitespace-nowrap">
          <div className="ticker-track flex min-w-max items-center">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="display flex items-center px-10 text-sm tracking-[0.28em] text-cream/70"
              >
                {item}
                <span className="ml-10 font-sans text-gold">&middot;</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
