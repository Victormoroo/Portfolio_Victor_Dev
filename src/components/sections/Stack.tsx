import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { technologies, type TechCategory } from '@/data/technologies';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TechCard } from '@/components/ui/TechCard';
import { cn } from '@/lib/cn';

const order: TechCategory[] = ['frontend', 'mobile', 'backend', 'database', 'tools'];

// Group once at module load — data is static, no need to recompute per render.
const grouped = order.map((cat) => ({
  cat,
  items: technologies.filter((tech) => tech.category === cat),
}));

// On mobile, only the first N techs of each category show until "show all".
const MOBILE_VISIBLE_PER_GROUP = 2;
const MOBILE_QUERY = '(max-width: 639px)';

export function Stack() {
  const { lang } = useLanguage();
  const t = content.stack;
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <section id="stack" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-edge">
        <Reveal>
          <SectionLabel number="02" label={t.label[lang]} />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal direction="up" className="lg:col-span-7">
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-display text-balance sm:text-5xl">
              {t.title[lang]}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-muted-foreground text-balance">{t.sub[lang]}</p>
          </Reveal>
        </div>

        {/* Mobile-only switch to reveal every technology at once. */}
        <div className="mt-10 flex items-center justify-end gap-3 sm:hidden">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {t.showAll[lang]}
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={expanded}
            aria-label={t.showAll[lang]}
            onClick={() => setExpanded((v) => !v)}
            className={cn(
              'relative h-6 w-11 shrink-0 rounded-full border transition-colors duration-300',
              expanded ? 'border-accent bg-accent' : 'border-border-strong bg-muted',
            )}
          >
            <span
              aria-hidden
              className="absolute left-0.5 top-1/2 h-4 w-4 rounded-full bg-background shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: expanded
                  ? 'translateY(-50%) translateX(1.25rem)'
                  : 'translateY(-50%) translateX(0)',
              }}
            />
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-12 sm:mt-20">
          {grouped.map((group, gi) => (
            <Reveal key={group.cat} delay={gi * 0.05}>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-[160px_1fr] lg:gap-10">
                <div className="lg:pt-1">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    /{group.cat}
                  </span>
                </div>
                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((tech, ti) => {
                    const isExtra = ti >= MOBILE_VISIBLE_PER_GROUP;

                    // Desktop (and the first N on mobile): render plainly.
                    if (!isExtra || !isMobile) {
                      return (
                        <li key={tech.name}>
                          <TechCard tech={tech} />
                        </li>
                      );
                    }

                    // Mobile extras: animate in/out when the switch toggles.
                    return (
                      <AnimatePresence key={tech.name} initial={false}>
                        {expanded && (
                          <motion.li
                            initial={{ opacity: 0, y: 10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: 10, height: 0 }}
                            transition={{
                              duration: 0.32,
                              ease: [0.22, 1, 0.36, 1],
                              delay: (ti - MOBILE_VISIBLE_PER_GROUP) * 0.05,
                            }}
                            className="overflow-hidden"
                          >
                            <TechCard tech={tech} />
                          </motion.li>
                        )}
                      </AnimatePresence>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
