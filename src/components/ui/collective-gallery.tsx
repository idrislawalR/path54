import Image from "next/image";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

type CollectiveGalleryProps = {
  subheading: string;
  heading: string;
};

type CollectiveImageCardProps = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  className: string;
  sizes: string;
  imageClassName?: string;
};

function CollectiveImageCard({
  src,
  alt,
  eyebrow,
  title,
  className,
  sizes,
  imageClassName = "object-cover",
}: CollectiveImageCardProps) {
  return (
    <RevealItem className={`relative min-w-0 overflow-hidden ${className}`} y={36}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes={sizes}
        className={`${imageClassName} transition-transform duration-700 ease-out hover:scale-[1.015]`}
      />
      <div className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-black via-black/95 via-45% to-black/0" />
      <div className="absolute inset-x-0 bottom-0 h-[26%] bg-black/70" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-[clamp(20px,4.4vw,32px)]">
        <p className="text-[10px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147]">
          {eyebrow}
        </p>
        <h3 className="display mt-2 text-[clamp(2rem,3.1vw,42px)] leading-[0.95] text-[#F3F0EB]">
          {title}
        </h3>
      </div>
    </RevealItem>
  );
}

export function CollectiveGallery({ subheading, heading }: CollectiveGalleryProps) {
  return (
    <div className="container-shell">
      <Reveal>
        <p className="text-[10px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147]">
          {subheading}
        </p>
        <h2 className="display mt-7 max-w-[458px] text-[clamp(4rem,5.57vw,80.22px)] leading-[0.9] text-[#F3F0EB]">
          {heading}
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid min-w-0 gap-4 md:mt-16 md:grid-cols-12" stagger={0.16}>
        <CollectiveImageCard
          src="/assets/collective-card-collective.png"
          alt="Founding members in the PATH54 collective"
          eyebrow="Founding members"
          title="The collective"
          className="aspect-[388/426] md:col-span-7 md:aspect-auto md:h-[clamp(520px,51.25vw,738px)]"
          sizes="(max-width: 768px) 93vw, (max-width: 1440px) 54vw, 795px"
        />
        <CollectiveImageCard
          src="/assets/collective-card-network.png"
          alt="Advisors and partners in the PATH54 network"
          eyebrow="Advisors & partners"
          title="The network"
          className="aspect-[388/426] md:col-span-5 md:aspect-auto md:h-[clamp(520px,51.25vw,738px)]"
          sizes="(max-width: 768px) 93vw, (max-width: 1440px) 37vw, 533px"
          imageClassName="object-cover object-center"
        />
        <CollectiveImageCard
          src="/assets/collective-card-founders.png"
          alt="Next generation founders overlooking a city"
          eyebrow="Next generation"
          title="The founders"
          className="aspect-[388/426] md:col-span-5 md:aspect-[533/527]"
          sizes="(max-width: 768px) 93vw, (max-width: 1440px) 40vw, 533px"
        />
        <RevealItem className="flex min-w-0 items-center h-full border border-[#2A2A2A] bg-[#2A2A2A]/30 px-[clamp(28px,4.7vw,64px)] py-12 md:col-span-7 md:aspect-[795/527] md:py-[clamp(28px,4.7vw,64px)]" y={36}>
          <div className="max-w-[560px]">
            <h3 className="display text-[clamp(2.55rem,4.25vw,58px)] leading-[0.95] text-[#F3F0EB]">
              <span className="text-[#AA8147]">World-class athletes.</span>
              <br />
              World-changing founders.
            </h3>
            <p className="mt-8 max-w-[524px] text-[14px] leading-[22.75px] text-[#C0C5CE] sm:text-[16px] sm:leading-[1.55]">
              PATH54 is intentionally curated. Every founding member shares a
              long-term commitment to backing ambitious founders, creating
              lasting impact and helping shape Africa&apos;s future.
            </p>
            <a
              href="mailto:hello@path54.com"
              className="mt-10 inline-flex max-w-full items-center gap-2 border-b border-[#AA8147] pb-2 text-[11px] font-medium uppercase leading-[16.5px] tracking-[1.98px] text-[#AA8147] transition-colors duration-300 hover:text-[#F3F0EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AA8147]"
            >
              <span className="truncate">Become a founding member</span>
              <ArrowIcon />
            </a>
          </div>
        </RevealItem>
      </RevealGroup>
    </div>
  );
}
