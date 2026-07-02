import { ButtonLink } from "@/components/ui/button-link";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-background py-[clamp(88px,9.7vw,140px)]">
      <div className="container-shell grid gap-12 lg:grid-cols-[1fr_384px] lg:items-center">
        <div>
          <p className="text-[12px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147]">
            Founding portfolio
          </p>
          <h2 className="display mt-6 max-w-[682px] text-[clamp(4.25rem,18vw,130px)] leading-[0.96] text-[#F3F0EB] lg:leading-[125px]">
            The first investments.
          </h2>
        </div>
        <div>
          <p className="max-w-[384px] text-[16px] leading-[22.75px] text-[#C0C5CE]">
            PATH54 Fund I is currently being assembled. We&apos;re actively meeting
            exceptional founders building businesses across Africa ahead of our
            inaugural investments.
          </p>
          <ButtonLink
            href="mailto:hello@path54.com"
            variant="secondary"
            className="mt-9 text-[11px] font-medium leading-[16.5px] tracking-[1.98px]"
          >
            Apply for funding -&gt;
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
