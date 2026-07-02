import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "border-white bg-white text-ink hover:bg-gold hover:text-ink",
  secondary: "border-cream/25 bg-transparent text-cream hover:border-gold hover:text-gold",
  ghost: "border-transparent bg-transparent text-cream/70 hover:text-cream",
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`btn-base ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
