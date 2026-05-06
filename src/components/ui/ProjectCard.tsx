import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { ProjectMockup } from './ProjectMockup';

interface Props {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  const { lang } = useLanguage();
  const t = content.projects.actions;

  return (
    <article className="group relative isolate flex flex-col gap-6 rounded-2xl border border-border bg-surface p-5 transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-elevated md:p-6">
      {/* gradient edge halo on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(140deg, rgb(var(--accent) / 0.35), transparent 35%, transparent 60%, rgb(var(--accent) / 0.18))',
          padding: '1px',
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span aria-hidden className="h-px w-6 bg-border-strong" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {project.type[lang]}
          </span>
        </div>
        <ArrowUpRight
          size={16}
          className="text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </header>

      <div className="aspect-[16/10] w-full overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]">
          <ProjectMockup kind={project.kind} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-display text-balance">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-balance">
            {project.description[lang]}
          </p>
        </div>

        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-2 pt-2">
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
      </div>
    </article>
  );
}
