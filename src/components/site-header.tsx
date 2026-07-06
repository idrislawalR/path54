"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";

const navItems = [
  ["Mission", "#mission"],
  ["Why PATH54", "#why"],
  ["Sectors", "#sectors"],
  ["Collective", "#collective"],
  ["Journal", "#journal"],
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 18);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b hairline backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-500 ease-out ${
        isScrolled
          ? "bg-background/95 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
          : "bg-background/62"
      }`}
    >
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
            <Link key={item} href={href} className="transition-colors duration-300 hover:text-cream">
              {item}
            </Link>
          ))}
        </nav>

        <ButtonLink
          href="mailto:hello@path54.com"
          variant="secondary"
          className="hidden border-gold text-gold sm:inline-flex"
        >
          Become a founding member
        </ButtonLink>
      </div>
    </header>
  );
}
