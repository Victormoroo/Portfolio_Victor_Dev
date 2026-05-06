import { Code2, Layers, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

const icons = [Code2, Layers, Sparkles];

export function About() {
  const { lang } = useLanguage();
  const t = content.about;

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-edge">
        <Reveal>
          <SectionLabel number="01" label={t.label[lang]} />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal direction="up" className="lg:col-span-7">
            <h2 className="whitespace-pre-line text-3xl font-semibold leading-[1.05] tracking-display text-balance sm:text-5xl">
              {t.title[lang]}
            </h2>
          </Reveal>

          <div className="flex flex-col gap-5 lg:col-span-5">
            {t.paragraphs[lang].map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-[15px] leading-relaxed text-muted-foreground text-balance">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 md:grid-cols-3">
          {t.pillars[lang].map((pillar, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <li className="group relative flex h-full flex-col gap-5 rounded-2xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-elevated">
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-foreground/80 transition-colors duration-500 group-hover:border-accent group-hover:text-accent">
                      <Icon size={17} strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
