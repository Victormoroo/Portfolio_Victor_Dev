import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { ProjectMockup } from './ProjectMockup';
import { Reveal } from './Reveal';
import { cn } from '@/lib/cn';

interface Props {
  project: Project;
  index: number;
}

export function ProjectRow({ project, index }: Props) {
  const { lang } = useLanguage();
  const t = content.projects.actions;
  // 1st, 3rd, 5th... → header on the left (default)
  // 2nd, 4th... → header on the right via lg:order-2
  const headerOnRight = index % 2 === 1;

  return (
    <article className="grid items-start gap-10 md:gap-12 lg:grid-cols-12">
      <header
        className={cn(
          'flex flex-col gap-6 lg:col-span-5 lg:sticky lg:top-32',
          headerOnRight && 'lg:order-2',
        )}
      >
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden className="text-sm leading-none text-accent">
              ◆
            </span>
            <span aria-hidden className="h-px w-8 bg-border-strong" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {project.type[lang]}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="text-4xl font-semibold leading-[0.98] tracking-display text-balance sm:text-5xl lg:text-[3.75rem]">
            {project.name}
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground text-balance">
            {project.description[lang]}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>

        {(project.links.demo || project.links.code) && (
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 text-xs font-medium transition-colors hover:border-foreground"
                >
                  {t.demo[lang]}
                  <ArrowUpRight size={12} />
                </a>
              )}
              {project.links.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t.code[lang]} — ${project.name}`}
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 text-xs font-medium transition-colors hover:border-foreground"
                >
                  <Github size={13} />
                  {t.code[lang]}
                </a>
              )}
            </div>
          </Reveal>
        )}
      </header>

      <div className="flex flex-col gap-8 md:gap-10 lg:col-span-7">
        <Reveal>
          <div className="group/mockup relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-500 hover:border-border-strong">
            <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/mockup:scale-[1.04]">
              <ProjectMockup kind={project.kind} />
            </div>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover/mockup:opacity-100"
              style={{
                background:
                  'radial-gradient(80% 60% at 50% 0%, rgb(var(--accent) / 0.10), transparent 70%)',
              }}
            />
          </div>
        </Reveal>

        <ul className="flex flex-col">
          {project.bullets[lang].map((bullet, bi) => (
            <Reveal key={bi} delay={bi * 0.06}>
              <li className="group grid grid-cols-[40px_1fr] items-baseline gap-5 border-b border-border py-5 transition-colors first:border-t hover:bg-muted/40 sm:grid-cols-[64px_1fr] sm:gap-7 sm:py-6">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent transition-transform duration-300 group-hover:-translate-y-px sm:text-sm">
                  {String(bi + 1).padStart(2, '0')}
                </span>
                <p className="text-[15px] leading-relaxed text-foreground sm:text-base">
                  {bullet}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </article>
  );
}
