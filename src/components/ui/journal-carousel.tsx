"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type JournalCard = {
  src: string;
  alt: string;
};

type JournalCarouselProps = {
  cards: JournalCard[];
};

const PAGE_SIZE = 3;

function chunkCards(cards: JournalCard[]) {
  const pages: JournalCard[][] = [];

  for (let index = 0; index < cards.length; index += PAGE_SIZE) {
    pages.push(cards.slice(index, index + PAGE_SIZE));
  }

  return pages;
}

export function JournalCarousel({ cards }: JournalCarouselProps) {
  const [activePage, setActivePage] = useState(0);
  const pages = chunkCards(cards);

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
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activePage * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="grid min-w-full grid-cols-1 md:grid-cols-3"
            >
              {page.map((card) => (
                <motion.article
                  key={card.src}
                  className="relative aspect-[448/285] overflow-hidden border-b border-r border-[#2A2A2A] transition-colors duration-300 hover:border-[#AA8147]/55"
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
                    alt={card.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 92vw, (max-width: 1440px) 31vw, 448px"
                    className="object-cover transition-transform duration-500 ease-out hover:scale-[1.025]"
                  />
                </motion.article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2" aria-label="Journal carousel pages">
        {pages.map((_, pageIndex) => (
          <button
            key={pageIndex}
            type="button"
            aria-label={`Show journal page ${pageIndex + 1}`}
            aria-current={activePage === pageIndex}
            onClick={() => setActivePage(pageIndex)}
            className={`size-3 rounded-full transition-colors duration-300 ${
              activePage === pageIndex ? "bg-[#F3F0EB]" : "bg-[#F3F0EB]/30"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
