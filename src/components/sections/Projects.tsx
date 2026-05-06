import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { projects } from '@/data/projects';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function Projects() {
  const { lang } = useLanguage();
  const t = content.projects;

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-edge">
        <Reveal>
          <SectionLabel number="03" label={t.label[lang]} />
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

        <ul className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <li className="h-full">
                <ProjectCard project={p} index={i} />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
