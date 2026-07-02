import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/arrow-icon";

const platformLinks = [
  "Mission",
  "Why PATH54",
  "Investment Focus",
  "The Collective",
  "Portfolio",
  "Journal",
];

const involvementLinks = [
  "Become a Founding Member",
  "Apply for Investment",
  "Partner With Us",
  "Careers",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-background py-16 md:py-20">
      <div className="container-shell">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[286px_190px_260px_286px] lg:justify-between">
          <div className="lg:-mt-2">
            <Image
              src="/assets/path54-footer-logo.svg"
              alt="PATH54"
              width={286}
              height={256}
              className="h-auto w-[220px] max-w-full sm:w-[250px] lg:w-[286px]"
            />
          </div>
          <FooterColumn title="Platform" links={platformLinks} />
          <FooterColumn title="Get involved" links={involvementLinks} />
          <div>
            <p className="text-[9px] font-normal uppercase leading-[13.5px] tracking-[2.25px] text-[#AA8147]">
              Newsletter
            </p>
            <p className="mt-8 max-w-[286px] text-[12px] font-medium leading-[18px] text-[#8E939C]">
              Insights from the intersection of football, technology and African
              business.
            </p>
            <form className="mt-7 flex w-full max-w-[286px] border border-[#2A2A2A] transition-colors duration-300 focus-within:border-[#AA8147]/80" action="#">
              <label htmlFor="footer-email" className="sr-only">
                Your email
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Your email"
                className="min-h-[46px] min-w-0 flex-1 bg-transparent px-5 text-[12px] font-normal leading-none text-[#F3F0EB] outline-none placeholder:text-[#8E939C] transition-colors duration-300 focus:placeholder:text-[#F3F0EB]/45"
              />
              <button
                className="min-h-[46px] w-[46px] bg-[#AA8147] text-[18px] text-[#0F0F0F] transition-[background-color,transform] duration-300 hover:bg-[#C49A58] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3F0EB] active:translate-x-0.5"
                type="submit"
                aria-label="Subscribe"
              >
                <ArrowIcon className="mx-auto" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-[#2A2A2A] pt-8 text-[12px] font-medium leading-[18px] text-[#8E939C] md:flex-row">
          <p>&copy; 2026 PATH54. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 text-[12px] uppercase leading-[18px] tracking-[2.4px] md:gap-8">
            {["Instagram", "X", "LinkedIn", "YouTube"].map((item) => (
              <Link key={item} href="#" className="transition-colors duration-300 hover:text-[#F3F0EB] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#AA8147]">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-[9px] font-normal uppercase leading-[13.5px] tracking-[2.25px] text-[#AA8147]">
        {title}
      </p>
      <ul className="mt-8 space-y-4 text-[12px] font-medium leading-[18px] text-[#8E939C]">
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="transition-colors duration-300 hover:text-[#F3F0EB] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#AA8147]">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
