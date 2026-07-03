"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  formatter?: (value: number) => string;
};

const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

function defaultFormatter(nextValue: number) {
  return numberFormatter.format(nextValue);
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
  formatter = defaultFormatter,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(() => formatter(0));

  useEffect(() => {
    if (!inView) {
      return;
    }

    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(formatter(Math.round(latest)));
    });

    const controls = animate(motionValue, value, {
      duration: 1.65,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [formatter, inView, motionValue, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
