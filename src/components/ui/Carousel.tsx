import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/cn';

export interface CarouselImage {
  src: string | { pt: string; en: string };
  alt: { pt: string; en: string };
}

interface Props {
  images: readonly CarouselImage[];
  label: string;
  /** Auto-advance interval in ms. Pass 0 to disable. */
  autoPlayMs?: number;
}

export function Carousel({ images, label, autoPlayMs = 5500 }: Props) {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % images.length) + images.length) % images.length);
    },
    [images.length],
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (paused || images.length <= 1 || autoPlayMs <= 0) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((i) => (i + 1) % images.length);
    }, autoPlayMs);
    return () => window.clearInterval(id);
  }, [paused, images.length, autoPlayMs]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  };

  const current = images[index];
  const resolvedSrc =
    typeof current.src === 'string' ? current.src : current.src[lang];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={handleKey}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative h-full w-full focus:outline-none"
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={resolvedSrc}
          src={resolvedSrc}
          alt={current.alt[lang]}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          draggable={false}
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/mockup:scale-[1.04]"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/70 text-foreground/85 opacity-0 backdrop-blur-md transition-opacity duration-200 hover:bg-background hover:text-foreground focus-visible:opacity-100 group-hover/mockup:opacity-100"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/70 text-foreground/85 opacity-0 backdrop-blur-md transition-opacity duration-200 hover:bg-background hover:text-foreground focus-visible:opacity-100 group-hover/mockup:opacity-100"
          >
            <ChevronRight size={16} />
          </button>

          <ul className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => {
              const active = i === index;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to image ${i + 1}`}
                    aria-current={active || undefined}
                    className={cn(
                      'block h-1.5 rounded-full transition-all duration-300',
                      active ? 'w-6 bg-accent' : 'w-1.5 bg-foreground/30 hover:bg-foreground/60',
                    )}
                  />
                </li>
              );
            })}
          </ul>
        </>
      )}

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {`${index + 1} / ${images.length}`}
      </p>
    </div>
  );
}
