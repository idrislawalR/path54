import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/ui/newsletter-form";

const platformLinks = [
  "Mission",
  "Why PATH54",
  "Investment Focus",
  "The Collective",
  "Portfolio",
  "Journal",
];

const involvementLinks = [
  { label: "Become a Founding Member", href: "mailto:hello@path54.com" },
  { label: "Apply for Investment", href: "mailto:hello@path54.com" },
  { label: "Partner With Us", href: "#" },
  { label: "Careers", href: "#" },
];

const socialLinks = {
  Instagram: "https://www.instagram.com/path54vc",
  X: "#",
  LinkedIn: "https://www.linkedin.com/company/path54",
  YouTube: "#",
};

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
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-[#2A2A2A] pt-8 text-[12px] font-medium leading-[18px] text-[#8E939C] md:flex-row">
          <p>&copy; 2026 PATH54. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 text-[12px] uppercase leading-[18px] tracking-[2.4px] md:gap-8">
            {Object.entries(socialLinks).map(([name, url]) => (
              <Link key={name} href={url} className="transition-colors duration-300 hover:text-[#F3F0EB] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#AA8147]">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<string | { label: string; href: string }>;
}) {
  return (
    <div>
      <p className="text-[9px] font-normal uppercase leading-[13.5px] tracking-[2.25px] text-[#AA8147]">
        {title}
      </p>
      <ul className="mt-8 space-y-4 text-[12px] font-medium leading-[18px] text-[#8E939C]">
        {links.map((link) => {
          const item =
            typeof link === "string" ? { label: link, href: "#" } : link;

          return (
            <li key={item.label}>
              {item.href.startsWith("mailto:") ? (
                <a
                  href={item.href}
                  className="transition-colors duration-300 hover:text-[#F3F0EB] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#AA8147]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors duration-300 hover:text-[#F3F0EB] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#AA8147]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
