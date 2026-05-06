import { ArrowDownRight, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';
import { content, links } from '@/data/content';

export function Hero() {
  const { lang } = useLanguage();
  const t = content.hero;

  return (
    <section
      id="home"
      aria-label={t.role[lang]}
      className="relative overflow-hidden pb-24 pt-28 sm:pt-36 lg:pt-44"
    >
      {/* faint hairline grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-hairlines opacity-[0.18]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgb(var(--accent) / 0.10) 0%, transparent 60%)',
        }}
      />

      <div className="container-edge relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-border bg-surface/70 py-1.5 pl-1.5 pr-4 backdrop-blur"
          >
            <span aria-hidden className="relative grid h-5 w-5 place-items-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/85">
              {t.badge[lang]}
            </span>
          </motion.div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-border-strong" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {t.role[lang]} · React · Node · Java
              </span>
            </div>

            <h1 className="text-display-sm font-semibold uppercase leading-[0.94] tracking-display text-foreground text-balance md:text-display">
              <Reveal delay={0.05}>Victor</Reveal>
              <Reveal delay={0.18}>
                <span className="relative inline-block">
                  Moro
                  <motion.span
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-1 left-0 h-1 w-full origin-left bg-accent"
                  />
                </span>
              </Reveal>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-pretty text-lg leading-relaxed text-foreground/85 sm:text-xl"
            >
              {t.headline[lang]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-sm leading-relaxed text-muted-foreground"
            >
              {t.sub[lang]}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center gap-2.5 pt-1"
          >
            <Button as="a" href="#projects" size="lg">
              {t.cta.projects[lang]}
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Button>
            <Button as="a" href="#contact" variant="secondary" size="lg">
              <Mail size={15} />
              {t.cta.contact[lang]}
            </Button>
            <Button as="a" href={links.cv} variant="ghost" size="lg">
              <Download size={15} />
              {t.cta.cv[lang]}
            </Button>
          </motion.div>
        </div>

        <CodeVisual />
      </div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function CodeVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[520px]"
    >
      {/* glow halo */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-3xl"
        style={{
          background:
            'radial-gradient(60% 50% at 70% 20%, rgb(var(--accent) / 0.18), transparent 70%)',
        }}
      />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_60px_-30px_rgb(var(--foreground)/0.18)]">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            developer.tsx
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">●&nbsp;live</span>
        </div>

        <div className="grid grid-cols-[40px_1fr] font-mono text-[12.5px] leading-[1.7] text-foreground/85">
          <div className="select-none border-r border-border bg-muted/25 py-5 text-right text-[10px] text-muted-foreground/60">
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i} className="px-2">{String(i + 1).padStart(2, '0')}</div>
            ))}
          </div>

          <pre className="overflow-x-auto whitespace-pre py-5 pl-4 pr-5">
{tk('keyword', 'export const ')}{tk('fn', 'developer')}{tk('plain', ' = {')}{'\n'}
{'  '}{tk('prop', 'name')}{tk('plain', ': ')}{tk('string', '"Victor Moro"')}{tk('plain', ',')}{'\n'}
{'  '}{tk('prop', 'role')}{tk('plain', ': ')}{tk('string', '"Full Stack Developer"')}{tk('plain', ',')}{'\n'}
{'  '}{tk('prop', 'focus')}{tk('plain', ': [')}{'\n'}
{'    '}{tk('string', '"clean code"')}{tk('plain', ',')}{'\n'}
{'    '}{tk('string', '"refined UI"')}{tk('plain', ',')}{'\n'}
{'    '}{tk('string', '"product mindset"')}{'\n'}
{'  '}{tk('plain', '],')}{'\n'}
{'  '}{tk('prop', 'stack')}{tk('plain', ': ')}{tk('keyword', 'new')}{tk('plain', ' ')}{tk('fn', 'Set')}{tk('plain', '([')}{tk('string', '"React"')}{tk('plain', ', ')}{tk('string', '"Node"')}{tk('plain', ', ')}{tk('string', '"Java"')}{tk('plain', ']),')}{'\n'}
{'  '}{tk('prop', 'available')}{tk('plain', ': ')}{tk('boolean', 'true')}{tk('plain', ',')}{'\n'}
{tk('plain', '} as ')}{tk('type', 'const')}{tk('plain', ';')}
          </pre>
        </div>

        {/* bottom status bar */}
        <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-2 font-mono text-[10px] text-muted-foreground">
          <span>TypeScript · UTF-8</span>
          <span className="flex items-center gap-3">
            <span>↳ build ok</span>
            <span className="text-accent">●</span>
          </span>
        </div>
      </div>

      {/* floating chip */}
      <div className="absolute -right-3 -top-3 hidden rotate-3 rounded-full border border-border bg-background px-3 py-1.5 text-xs shadow-md sm:block">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">v1.0 · </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">shipping</span>
      </div>
    </motion.div>
  );
}

const palette: Record<string, string> = {
  keyword: 'text-fuchsia-500/90 dark:text-fuchsia-300/90',
  fn:      'text-sky-600 dark:text-sky-300',
  prop:    'text-foreground',
  string:  'text-emerald-600 dark:text-emerald-300/90',
  boolean: 'text-amber-600 dark:text-amber-300',
  type:    'text-violet-500 dark:text-violet-300',
  plain:   'text-foreground/70',
};

function tk(kind: keyof typeof palette, text: string) {
  return <span className={palette[kind]}>{text}</span>;
}
