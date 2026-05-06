import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function Process() {
  const { lang } = useLanguage();
  const t = content.process;
  const items = t.items[lang];

  return (
    <section id="process" className="relative scroll-mt-24 border-y border-border bg-muted/30 py-24 sm:py-32">
      <div className="container-edge">
        <Reveal>
          <SectionLabel number="05" label={t.label[lang]} />
        </Reveal>

        <Reveal direction="up" className="mt-8">
          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-display text-balance sm:text-5xl">
            {t.title[lang]}
          </h2>
        </Reveal>

        <ul className="mt-16 divide-y divide-border border-y border-border sm:mt-20">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <li className="group grid grid-cols-[80px_1fr] gap-4 py-7 transition-colors hover:bg-background/40 sm:grid-cols-[120px_1fr_auto] sm:gap-10 sm:py-9">
                <span className="font-mono text-3xl font-medium leading-none text-foreground/40 transition-colors duration-300 group-hover:text-accent sm:text-5xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-semibold text-foreground sm:text-2xl">{item.title}</h3>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.body}
                  </p>
                </div>
                <span aria-hidden className="hidden self-center text-2xl text-foreground/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent sm:block">
                  →
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
