import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";

type Metric = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  plus?: boolean;
};

const metrics: Metric[] = [
  { value: 54, label: "African nations" },
  { value: 10, prefix: "£", suffix: "M", label: "Fund I target" },
  { value: 150, suffix: "M", plus: true, label: "Long-term vision" },
  { value: 250000, plus: true, label: "Lives impacted" },
];

export function ImpactSection() {
  return (
    <section className="bg-background py-[clamp(5.5rem,8.9vw,8rem)]">
      <div className="container-shell">
        <Reveal>
          <p className="text-[0.75rem] font-normal uppercase leading-[0.9375rem] tracking-[0.1875rem] text-[#AA8147]">
            Impact
          </p>
        </Reveal>
        <dl className="mt-16 grid grid-cols-2 lg:grid-cols-4 md:gap-x-8 gap-y-12 lg:justify-between">
          {metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              className="whitespace-nowrap border-y border-[#2A2A2A] py-12"
              delay={index * 0.08}
            >
              <dt className="display text-[clamp(3.5rem,8.5vw,6rem)] leading-none text-[#F3F0EB]">
                <AnimatedCounter value={metric.value} prefix={metric.prefix} />
                {metric.suffix && (
                  <span className="text-[#AA8147]">{metric.suffix}</span>
                )}
                {metric.plus && (
                  <span className="relative -top-[0.35em] text-[0.4em] text-[#AA8147]">+</span>
                )}
              </dt>
              <dd className="mt-6 text-[0.75rem] font-normal uppercase leading-[0.9375rem] tracking-[0.1875rem] text-[#AA8147]">
                {metric.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
