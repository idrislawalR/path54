"use client";

import { motion } from "framer-motion";
import type { PointerEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type JournalCard = {
  category: string;
  title: string;
  date: string;
  dateTime: string;
};

type JournalCarouselProps = {
  cards: JournalCard[];
};

type JournalCardArticleProps = {
  card: JournalCard;
  isDuplicate?: boolean;
};

function JournalCardArticle({ card, isDuplicate = false }: JournalCardArticleProps) {
  return (
    <motion.article
      aria-hidden={isDuplicate}
      className="group flex h-full min-h-[260px] w-full flex-col overflow-hidden bg-background px-[clamp(32px,3.1vw,44px)] py-[clamp(34px,3.35vw,46px)] transition-colors duration-300 hover:bg-[#12110F]"
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      <p className="font-sans text-[10px] font-normal uppercase leading-[15px] tracking-[3px] text-[#AA8147] transition-colors duration-300 group-hover:text-[#C79A55]">
        {card.category}
      </p>
      <h3 className="display mt-[22px] max-w-[360px] text-[clamp(1.75rem,2.1vw,30px)] leading-[1.18] text-[#F3F0EB]">
        {card.title}
      </h3>
      <time
        dateTime={card.dateTime}
        className="mt-auto block font-sans text-[12px] font-normal leading-[18px] text-[#C0C5CE]"
      >
        {card.date}
      </time>
    </motion.article>
  );
}

const PAGE_SIZE = 3;
const AUTOPLAY_DELAY = 5200;

function chunkCards(cards: JournalCard[]) {
  const pages: JournalCard[][] = [];

  for (let index = 0; index < cards.length; index += PAGE_SIZE) {
    pages.push(cards.slice(index, index + PAGE_SIZE));
  }

  return pages;
}

export function JournalCarousel({ cards }: JournalCarouselProps) {
  const pages = useMemo(() => chunkCards(cards), [cards]);
  const viewportRef = useRef<HTMLDivElement>(null);
  const activePageRef = useRef(0);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const isDragging = useRef(false);
  const [activePage, setActivePage] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const getPageTarget = useCallback((viewport: HTMLDivElement, pageIndex: number) => {
    const firstCard = viewport.querySelector<HTMLElement>("[data-journal-card='0']");
    const pageFirstCard = viewport.querySelector<HTMLElement>(
      `[data-journal-card="${pageIndex * PAGE_SIZE}"]`,
    );

    if (!firstCard || !pageFirstCard) {
      return null;
    }

    return pageFirstCard.offsetLeft - firstCard.offsetLeft;
  }, []);

  const goToPage = useCallback((pageIndex: number, behavior: ScrollBehavior = "smooth") => {
    const viewport = viewportRef.current;
    const target = viewport ? getPageTarget(viewport, pageIndex) : null;

    if (!viewport || target === null) {
      return;
    }

    activePageRef.current = pageIndex;
    setActivePage(pageIndex);
    viewport.scrollTo({ left: target, behavior });
  }, [getPageTarget]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setIsReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isReducedMotion || pages.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const nextPage = (activePageRef.current + 1) % pages.length;
      goToPage(nextPage);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(intervalId);
  }, [goToPage, isReducedMotion, pages.length]);

  const syncActivePageFromScroll = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const nextActivePage = pages.reduce((closestPage, _, pageIndex) => {
      const pageTarget = getPageTarget(viewport, pageIndex);
      const closestTarget = getPageTarget(viewport, closestPage);

      if (pageTarget === null || closestTarget === null) {
        return closestPage;
      }

      const pageDistance = Math.abs(pageTarget - viewport.scrollLeft);
      const closestDistance = Math.abs(closestTarget - viewport.scrollLeft);

      return pageDistance < closestDistance ? pageIndex : closestPage;
    }, 0);

    activePageRef.current = nextActivePage;
    setActivePage(nextActivePage);
  }, [getPageTarget, pages]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    isDragging.current = true;
    dragStartX.current = event.clientX;
    dragStartScrollLeft.current = viewport.scrollLeft;
    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport || !isDragging.current) {
      return;
    }

    viewport.scrollLeft = dragStartScrollLeft.current - (event.clientX - dragStartX.current);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport || !isDragging.current) {
      return;
    }

    isDragging.current = false;
    viewport.releasePointerCapture(event.pointerId);
    syncActivePageFromScroll();
    goToPage(activePageRef.current);
  };

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
      <div
        ref={viewportRef}
        className="journal-viewport border border-[#2A2A2A]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onScroll={syncActivePageFromScroll}
      >
        <div className="journal-track flex">
          {cards.map((card, cardIndex) => (
            <div
              key={card.title}
              data-journal-card={cardIndex}
              className="journal-card-shell shrink-0"
            >
              <JournalCardArticle card={card} />
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
            onClick={() => goToPage(pageIndex)}
            className={`size-3 rounded-full ${
              activePage === pageIndex ? "bg-[#F3F0EB]" : "bg-[#F3F0EB]/30"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
