import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function Experience() {
  const { lang } = useLanguage();
  const t = content.experience;
  const items = t.items[lang];

  return (
    <section id="experience" className="relative scroll-mt-24 border-y border-border bg-muted/30 py-24 sm:py-32">
      <div className="container-edge">
        <Reveal>
          <SectionLabel number="04" label={t.label[lang]} />
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

        <ol className="relative mt-16 flex flex-col gap-10 sm:mt-20">
          <span
            aria-hidden
            className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-border-strong via-border to-transparent sm:left-[11px]"
          />

          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <li className="relative grid grid-cols-[28px_1fr] gap-5 sm:grid-cols-[40px_1fr] sm:gap-8">
                <div className="relative pt-[7px]">
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 grid h-4 w-4 place-items-center rounded-full border border-border-strong bg-background"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-elevated sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span aria-hidden className="h-px w-8 bg-border-strong" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {item.chapter}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-foreground sm:text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
