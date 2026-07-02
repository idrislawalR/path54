import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";

const metrics = [
  { value: 54, label: "African nations" },
  { value: 28, label: "Fund I target", suffix: "+" },
  { value: 150, label: "Long-term vision", suffix: "M+" },
  { value: 250000, label: "Lives impacted", suffix: "+" },
];

export function ImpactSection() {
  return (
    <section className="bg-background py-[clamp(88px,8.9vw,128px)]">
      <div className="container-shell">
        <Reveal>
          <p className="text-[12px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147]">
            Impact
          </p>
        </Reveal>
        <dl className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} className="border-y border-[#2A2A2A] py-12" delay={index * 0.08}>
              <dt className="display text-[clamp(4rem,17vw,112px)] leading-none text-[#F3F0EB]">
                <AnimatedCounter value={metric.value} />
                {metric.suffix && (
                  <span className="text-[#AA8147]">{metric.suffix}</span>
                )}
              </dt>
              <dd className="mt-6 text-[12px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147]">
                {metric.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
