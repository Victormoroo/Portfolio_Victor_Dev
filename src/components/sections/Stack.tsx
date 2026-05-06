import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { technologies, type TechCategory } from '@/data/technologies';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TechCard } from '@/components/ui/TechCard';

const order: TechCategory[] = ['frontend', 'backend', 'database', 'tools'];

export function Stack() {
  const { lang } = useLanguage();
  const t = content.stack;

  const grouped = order.map((cat) => ({
    cat,
    items: technologies.filter((tech) => tech.category === cat),
  }));

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

        <div className="mt-16 flex flex-col gap-12 sm:mt-20">
          {grouped.map((group, gi) => (
            <Reveal key={group.cat} delay={gi * 0.05}>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-[160px_1fr] lg:gap-10">
                <div className="lg:pt-1">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    /{group.cat}
                  </span>
                  <p className="mt-1.5 text-sm text-foreground">
                    {t.categories[group.cat][lang]}
                  </p>
                </div>
                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((tech) => (
                    <li key={tech.name}>
                      <TechCard tech={tech} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
