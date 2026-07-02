"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type RevealProps = ComponentPropsWithoutRef<typeof motion.div> & {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 28,
  once = true,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.28, margin: "0px 0px -8% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = ComponentPropsWithoutRef<typeof motion.div> & {
  children: ReactNode;
  stagger?: number;
};

export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  ...props
}: RevealGroupProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -8% 0px" }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = ComponentPropsWithoutRef<typeof motion.div> & {
  children: ReactNode;
  as?: "div" | "article";
  y?: number;
};

export function RevealItem({ children, className, as = "div", y = 24, ...props }: RevealItemProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "article" ? motion.article : motion.div;

  if (reduceMotion) {
    const StaticComponent = as;
    return <StaticComponent className={className}>{children}</StaticComponent>;
  }

  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
