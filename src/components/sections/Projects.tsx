import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { projects } from '@/data/projects';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProjectRow } from '@/components/ui/ProjectRow';

export function Projects() {
  const { lang } = useLanguage();
  const t = content.projects;

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-edge">
        <Reveal>
          <SectionLabel number="03" label={t.label[lang]} />
        </Reveal>

        <div className="mt-8">
          <Reveal direction="up">
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-display text-balance sm:text-5xl">
              {t.title[lang]}
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-y-24 sm:mt-28 lg:gap-y-40">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
