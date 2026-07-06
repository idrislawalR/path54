"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type JournalCard = {
  src: string;
  alt: string;
};

type JournalCarouselProps = {
  cards: JournalCard[];
};

export function JournalCarousel({ cards }: JournalCarouselProps) {
  const loopedCards = [...cards, ...cards];

  return (
    <motion.div
      className="mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      <div className="overflow-hidden border-l border-t border-[#2A2A2A]">
        <div className="journal-track flex w-max">
          {loopedCards.map((card, index) => {
            const isDuplicate = index >= cards.length;

            return (
              <motion.article
                key={`${card.src}-${index}`}
                aria-hidden={isDuplicate}
                className="journal-card relative aspect-[448/285] shrink-0 overflow-hidden border-b border-r border-[#2A2A2A] transition-colors duration-300 hover:border-[#AA8147]/55"
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <Image
                  src={card.src}
                  alt={isDuplicate ? "" : card.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 86vw, (max-width: 1440px) 31vw, 448px"
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.025]"
                />
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
        {[0, 1, 2].map((item) => (
          <span
            key={item}
            className={`size-3 rounded-full ${
              item === 0 ? "bg-[#F3F0EB]" : "bg-[#F3F0EB]/30"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
