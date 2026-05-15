import { Fragment, useEffect, useState } from 'react';
import { ArrowDownRight, Download, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
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
                ReactJS · NodeJS · Spring · Docker · PostgreSQL
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
                    className="absolute -bottom-1 left-0 h-1 w-full origin-left bg-accent shadow-[0_0_24px_rgb(var(--accent)/0.55)]"
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
      className="dark relative mx-auto w-full max-w-[520px]"
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
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              aria-label="Close"
              className="group/close grid h-2.5 w-2.5 place-items-center rounded-full bg-foreground/15 p-0 leading-none transition-colors hover:bg-[#ff5f57]"
            >
              <svg
                width="8"
                height="8"
                viewBox="0 0 12 12"
                fill="none"
                stroke="#4d0000"
                strokeWidth="2"
                strokeLinecap="round"
                className="block opacity-0 transition-opacity duration-150 group-hover/close:opacity-100"
                aria-hidden
              >
                <path d="M3.5 3.5 L8.5 8.5 M8.5 3.5 L3.5 8.5" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Minimize"
              className="group/min grid h-2.5 w-2.5 place-items-center rounded-full bg-foreground/15 p-0 leading-none transition-colors hover:bg-[#febc2e]"
            >
              <svg
                width="8"
                height="8"
                viewBox="0 0 12 12"
                fill="none"
                stroke="#5a3300"
                strokeWidth="2"
                strokeLinecap="round"
                className="block opacity-0 transition-opacity duration-150 group-hover/min:opacity-100"
                aria-hidden
              >
                <path d="M3 6 L9 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Maximize"
              className="group/max grid h-2.5 w-2.5 place-items-center rounded-full bg-foreground/15 p-0 leading-none transition-colors hover:bg-[#28c840]"
            >
              <svg
                width="8"
                height="8"
                viewBox="0 0 12 12"
                fill="#0c3b0c"
                className="block opacity-0 transition-opacity duration-150 group-hover/max:opacity-100"
                aria-hidden
              >
                <path d="M3 3 L7 3 L3 7 Z M9 5 L9 9 L5 9 Z" />
              </svg>
            </button>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            developer.tsx
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">●&nbsp;live</span>
        </div>

        <TypedCode />

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
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">stable</span>
      </div>
    </motion.div>
  );
}

type TokenKind = 'keyword' | 'fn' | 'prop' | 'string' | 'boolean' | 'type' | 'plain' | 'ws';

const palette: Record<TokenKind, string> = {
  keyword: 'text-fuchsia-500/90 dark:text-fuchsia-300/90',
  fn:      'text-sky-600 dark:text-sky-300',
  prop:    'text-foreground',
  string:  'text-emerald-600 dark:text-emerald-300/90',
  boolean: 'text-amber-600 dark:text-amber-300',
  type:    'text-violet-500 dark:text-violet-300',
  plain:   'text-foreground/70',
  ws:      '',
};

type Token = { kind: TokenKind; text: string };
type CodeLine = { gutter: string; tokens: Token[] };

// Each entry is a visible row in the editor. The 10th row is the wrap continuation
// of line 9, so its gutter label is empty (no number, no extra line counted).
const codeLines: ReadonlyArray<CodeLine> = [
  { gutter: '01', tokens: [
    { kind: 'keyword', text: 'export const ' },
    { kind: 'fn',      text: 'developer' },
    { kind: 'plain',   text: ' = {' },
  ]},
  { gutter: '02', tokens: [
    { kind: 'ws',      text: '  ' },
    { kind: 'prop',    text: 'name' },
    { kind: 'plain',   text: ': ' },
    { kind: 'string',  text: '"Victor Moro"' },
    { kind: 'plain',   text: ',' },
  ]},
  { gutter: '03', tokens: [
    { kind: 'ws',      text: '  ' },
    { kind: 'prop',    text: 'role' },
    { kind: 'plain',   text: ': ' },
    { kind: 'string',  text: '"Full Stack Developer"' },
    { kind: 'plain',   text: ',' },
  ]},
  { gutter: '04', tokens: [
    { kind: 'ws',      text: '  ' },
    { kind: 'prop',    text: 'focus' },
    { kind: 'plain',   text: ': [' },
  ]},
  { gutter: '05', tokens: [
    { kind: 'ws',      text: '    ' },
    { kind: 'string',  text: '"clean code"' },
    { kind: 'plain',   text: ',' },
  ]},
  { gutter: '06', tokens: [
    { kind: 'ws',      text: '    ' },
    { kind: 'string',  text: '"refined UI"' },
    { kind: 'plain',   text: ',' },
  ]},
  { gutter: '07', tokens: [
    { kind: 'ws',      text: '    ' },
    { kind: 'string',  text: '"product mindset"' },
  ]},
  { gutter: '08', tokens: [
    { kind: 'ws',      text: '  ' },
    { kind: 'plain',   text: '],' },
  ]},
  { gutter: '09', tokens: [
    { kind: 'ws',      text: '  ' },
    { kind: 'prop',    text: 'stack' },
    { kind: 'plain',   text: ': ' },
    { kind: 'keyword', text: 'new' },
    { kind: 'plain',   text: ' ' },
    { kind: 'fn',      text: 'Set' },
    { kind: 'plain',   text: '([' },
    { kind: 'string',  text: '"ReactJS"' },
    { kind: 'plain',   text: ', ' },
    { kind: 'string',  text: '"NodeJS"' },
    { kind: 'plain',   text: ', ' },
    { kind: 'string',  text: '"Spring"' },
    { kind: 'plain',   text: ',' },
  ]},
  { gutter: '', tokens: [
    { kind: 'ws',      text: '    ' },
    { kind: 'string',  text: '"Docker"' },
    { kind: 'plain',   text: ', ' },
    { kind: 'string',  text: '"PostgreSQL"' },
    { kind: 'plain',   text: ']),' },
  ]},
  { gutter: '10', tokens: [
    { kind: 'ws',      text: '  ' },
    { kind: 'prop',    text: 'available' },
    { kind: 'plain',   text: ': ' },
    { kind: 'boolean', text: 'true' },
    { kind: 'plain',   text: ',' },
  ]},
  { gutter: '11', tokens: [
    { kind: 'plain',   text: '} as ' },
    { kind: 'type',    text: 'const' },
    { kind: 'plain',   text: ';' },
  ]},
  // Empty trailing line. Acts as the "home" for the blinking caret after typing finishes.
  { gutter: '12', tokens: [] },
];

// Char counts per line (excluding the newline that separates rows during typing).
const lineLengths = codeLines.map((l) => l.tokens.reduce((n, t) => n + t.text.length, 0));
// Cumulative char count BEFORE each line (treating one virtual newline between rows).
const lineStartOffsets: number[] = [];
{
  let offset = 0;
  for (let i = 0; i < codeLines.length; i++) {
    lineStartOffsets.push(offset);
    offset += lineLengths[i] + (i < codeLines.length - 1 ? 1 : 0); // +1 for the newline
  }
}
const totalChars = lineStartOffsets[codeLines.length - 1] + lineLengths[codeLines.length - 1];

// Waits for the hero's intro animations to finish before starting, then
// types ~50 chars/s. Respects prefers-reduced-motion (renders fully).
const TYPING_START_DELAY_MS = 1400;
const TYPING_MS_PER_CHAR = 20;

function TypedCode() {
  const reducedMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(reducedMotion ? totalChars : 0);
  const done = revealed >= totalChars;

  useEffect(() => {
    if (reducedMotion) {
      setRevealed(totalChars);
      return;
    }
    let raf = 0;
    let startTime = 0;

    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime - TYPING_START_DELAY_MS;
      if (elapsed >= 0) {
        const chars = Math.min(totalChars, Math.floor(elapsed / TYPING_MS_PER_CHAR));
        setRevealed((prev) => (prev === chars ? prev : chars));
        if (chars >= totalChars) return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  return (
    <div className="grid grid-cols-[40px_1fr] bg-surface font-mono text-[12.5px] leading-[21.25px] text-foreground/85">
      <div className="h-5 border-r border-border bg-muted/25" />
      <div className="h-5" />
      {codeLines.map((line, i) => {
        const lineStart = lineStartOffsets[i];
        const lineEnd = lineStart + lineLengths[i];
        const isCaretHome = i === codeLines.length - 1;
        const numberVisible = isCaretHome ? done : revealed > lineStart;
        const isCaretLine = done
          ? isCaretHome
          : revealed >= lineStart && revealed <= lineEnd && !isCaretHome;
        const localRevealed = Math.max(0, Math.min(lineLengths[i], revealed - lineStart));
        return (
          <Fragment key={i}>
            <div
              className={cn(
                'h-[21.25px] select-none border-r border-border bg-muted/25 px-2 text-right text-[10px] leading-[21.25px] text-muted-foreground/60',
                i === 0 && 'pt-0',
              )}
            >
              <span
                className={cn(
                  'transition-opacity duration-200',
                  numberVisible && line.gutter ? 'opacity-100' : 'opacity-0',
                )}
              >
                {line.gutter || ' '}
              </span>
            </div>
            <pre
              className={cn(
                'h-[21.25px] overflow-x-auto whitespace-pre pl-4 pr-5',
                i === 0 && 'pt-0',
              )}
            >
              {renderLineTokens(line.tokens, localRevealed)}
              {isCaretLine && <Caret />}
            </pre>
          </Fragment>
        );
      })}
      <div className="h-5 border-r border-border bg-muted/25" />
      <div className="h-5" />
    </div>
  );
}

function renderLineTokens(tokens: Token[], localRevealed: number) {
  const out: React.ReactNode[] = [];
  let consumed = 0;
  for (let i = 0; i < tokens.length; i++) {
    if (consumed >= localRevealed) break;
    const tok = tokens[i];
    const remaining = localRevealed - consumed;
    const shown = remaining >= tok.text.length ? tok.text : tok.text.slice(0, remaining);
    out.push(
      <span key={i} className={palette[tok.kind]}>
        {shown}
      </span>,
    );
    consumed += tok.text.length;
  }
  return out;
}

function Caret() {
  return (
    <motion.span
      aria-hidden
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear', times: [0, 0.5, 0.5, 1] }}
      className="ml-[1px] inline-block h-[1.05em] w-[2px] -translate-y-[1px] bg-muted-foreground align-middle"
    />
  );
}
