import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";

const navItems = [
  ["Mission", "#mission"],
  ["Why PATH54", "#why"],
  ["Sectors", "#sectors"],
  ["Collective", "#collective"],
  ["Journal", "#journal"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b hairline bg-background/95 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="PATH54 home">
          <Image
            src="/assets/path54-logo.svg"
            alt="PATH54"
            width={129}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        <nav
          className="hidden items-center gap-9 text-xs font-medium uppercase text-cream/55 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map(([item, href]) => (
            <Link key={item} href={href} className="hover:text-cream">
              {item}
            </Link>
          ))}
        </nav>

        <ButtonLink
          href="#collective"
          variant="secondary"
          className="hidden border-gold text-gold sm:inline-flex"
        >
          Become a founding member
        </ButtonLink>
      </div>
    </header>
  );
}
