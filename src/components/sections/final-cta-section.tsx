import Image from "next/image";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-y hairline bg-[radial-gradient(circle_at_50%_20%,rgba(244,241,235,0.08),transparent_28%),#111] py-28 text-center md:py-36">
      <Image
        src="/assets/next-chapter-bg.png"
        alt=""
        fill
        unoptimized
        sizes="100vw"
        className="slow-scale pointer-events-none object-cover object-center brightness-[1.65] contrast-[1.08]"
      />
      <div className="container-shell relative z-10">
        <Reveal y={18}>
          <p className="eyebrow">The next chapter</p>
        </Reveal>
        <Reveal delay={0.12} duration={0.95} y={48}>
          <h2 className="display mx-auto mt-7 max-w-[572px] text-center text-[clamp(4.5rem,18vw,135px)] leading-[0.9] text-cream lg:leading-[117.66px]">
            More than
            <br />a game.
          </h2>
        </Reveal>
        <Reveal className="mt-12 flex flex-col justify-center gap-4 sm:flex-row" delay={0.28} y={20}>
          <ButtonLink href="#collective">
            Become a founding member <ArrowIcon />
          </ButtonLink>
          <ButtonLink href="#portfolio" variant="secondary">
            Apply for funding
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
