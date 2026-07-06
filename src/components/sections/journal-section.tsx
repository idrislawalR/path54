import { JournalCarousel } from "@/components/ui/journal-carousel";
import { Reveal } from "@/components/ui/reveal";

const journalCards = [
  {
    category: "Investment Insights",
    title: "Why We Believe Africa's Greatest Companies Will Be Built This Decade",
    date: "July 2026",
    dateTime: "2026-07",
  },
  {
    category: "African Innovation",
    title: "How Lagos, Nairobi and Cape Town Are Reshaping Global Venture Capital",
    date: "July 2026",
    dateTime: "2026-07",
  },
  {
    category: "Beyond the Game",
    title: "From Contracts to Cap Tables: Why Ownership Matters After Sport",
    date: "June 2026",
    dateTime: "2026-06",
  },
  {
    category: "Athlete Perspectives",
    title: "What Elite Athletes Look For Before Making Their First Startup Investment",
    date: "June 2026",
    dateTime: "2026-06",
  },
  {
    category: "Market Reports",
    title: "The State of African Venture Capital 2026",
    date: "June 2026",
    dateTime: "2026-06",
  },
  {
    category: "Founder Stories",
    title: "How One Ghanaian Founder Is Reimagining Healthcare Through AI",
    date: "June 2026",
    dateTime: "2026-06",
  },
  {
    category: "Investment Insights",
    title: "Five Sectors We Believe Will Define Africa's Next Generation",
    date: "June 2026",
    dateTime: "2026-06",
  },
  {
    category: "African Innovation",
    title: "The Rise of Climate Infrastructure Across East Africa",
    date: "June 2026",
    dateTime: "2026-06",
  },
  {
    category: "Beyond the Game",
    title: "Legacy Isn't What You Leave Behind, It's What You Help Build.",
    date: "June 2026",
    dateTime: "2026-06",
  },
];

export function JournalSection() {
  return (
    <section id="journal" className="bg-background py-[clamp(88px,9.7vw,140px)] border-t hairline">
      <div className="container-shell">
        <Reveal>
          <p className="text-[12px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147] ">
            Journal
          </p>
          <h2 className="display mt-6 max-w-[395px] text-[clamp(4rem,18vw,80.22px)] leading-[0.9] text-[#F3F0EB] lg:leading-[72.2px]">
            Stories that matter.
          </h2>
        </Reveal>
        <JournalCarousel cards={journalCards} />
      </div>
    </section>
  );
}
