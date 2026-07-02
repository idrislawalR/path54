import { ButtonLink } from "@/components/ui/button-link";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-y hairline bg-[radial-gradient(circle_at_50%_20%,rgba(244,241,235,0.08),transparent_28%),#111] py-28 text-center md:py-36">
      <div className="container-shell">
        <p className="eyebrow">The next chapter</p>
        <h2 className="display mx-auto mt-7 max-w-[572px] text-center text-[clamp(4.5rem,18vw,135px)] leading-[0.9] text-cream lg:leading-[117.66px]">
          More than
          <br />a game.
        </h2>
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="#collective">Become a founding member -&gt;</ButtonLink>
          <ButtonLink href="#portfolio" variant="secondary">
            Apply for funding
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
