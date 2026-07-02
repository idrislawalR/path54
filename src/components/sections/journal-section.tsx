import { JournalCarousel } from "@/components/ui/journal-carousel";

const journalCards = [
  {
    src: "/assets/journal-01.png",
    alt: "Investment insights: why we believe Africa's greatest companies will be built this decade",
  },
  {
    src: "/assets/journal-02.png",
    alt: "African innovation: how Lagos, Nairobi and Cape Town are reshaping global venture capital",
  },
  {
    src: "/assets/journal-03.png",
    alt: "Beyond the game: from contracts to cap tables, why ownership matters after sport",
  },
  {
    src: "/assets/journal-04.png",
    alt: "Athlete perspectives: what elite athletes look for before making their first startup investment",
  },
  {
    src: "/assets/journal-05.png",
    alt: "Market reports: the state of African venture capital 2026",
  },
  {
    src: "/assets/journal-06.png",
    alt: "Founder stories: how one Ghanaian founder is reimagining healthcare through AI",
  },
  {
    src: "/assets/journal-07.png",
    alt: "Investment insights: five sectors we believe will define Africa's next generation",
  },
  {
    src: "/assets/journal-08.png",
    alt: "African innovation: the rise of climate infrastructure across East Africa",
  },
  {
    src: "/assets/journal-09.png",
    alt: "Beyond the game: legacy is not what you leave behind, it is what you help build",
  },
];

export function JournalSection() {
  return (
    <section id="journal" className="bg-background py-[clamp(88px,9.7vw,140px)]">
      <div className="container-shell">
        <p className="text-[12px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147]">
          Journal
        </p>
        <h2 className="display mt-6 max-w-[395px] text-[clamp(4rem,18vw,80.22px)] leading-[0.9] text-[#F3F0EB] lg:leading-[72.2px]">
          Stories that matter.
        </h2>
        <JournalCarousel cards={journalCards} />
      </div>
    </section>
  );
}
