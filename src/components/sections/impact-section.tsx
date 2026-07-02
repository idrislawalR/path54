const metrics = [
  { value: "54", label: "African nations" },
  { value: "\u00A310", label: "Fund I target", accent: "M" },
  { value: "150", label: "Long-term vision", accent: "M+" },
  { value: "250,000", label: "Lives impacted", accent: "+" },
];

export function ImpactSection() {
  return (
    <section className="bg-background py-[clamp(88px,8.9vw,128px)]">
      <div className="container-shell">
        <p className="text-[12px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147]">
          Impact
        </p>
        <dl className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-y border-[#2A2A2A] py-12">
              <dt className="display text-[clamp(4rem,17vw,112px)] leading-none text-[#F3F0EB]">
                {metric.value}
                {metric.accent && (
                  <span className="text-[#AA8147]">{metric.accent}</span>
                )}
              </dt>
              <dd className="mt-6 text-[12px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147]">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
