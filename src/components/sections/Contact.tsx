import { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { ContactModal } from '@/components/ui/ContactModal';
import { useLanguage } from '@/hooks/useLanguage';
import { content, links } from '@/data/content';

export function Contact() {
  const { lang } = useLanguage();
  const t = content.contact;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="relative scroll-mt-24 py-28 sm:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-hairlines opacity-[0.12]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgb(var(--accent) / 0.10) 0%, transparent 65%)',
        }}
      />

      <div className="container-edge relative">
        <Reveal>
          <SectionLabel number="06" label={t.label[lang]} />
        </Reveal>

        <Reveal direction="up" className="mt-8">
          <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.96] tracking-display text-balance sm:text-7xl">
            {t.title[lang]}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-6 max-w-xl">
          <p className="text-[15px] leading-relaxed text-muted-foreground text-balance">{t.sub[lang]}</p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <Button onClick={() => setModalOpen(true)} size="lg">
              <Mail size={15} />
              {t.cta.email[lang]}
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button as="a" href={links.linkedin} variant="secondary" size="lg" target="_blank" rel="noreferrer">
              <Linkedin size={15} />
              {t.cta.linkedin[lang]}
            </Button>
            <Button as="a" href={links.github} variant="secondary" size="lg" target="_blank" rel="noreferrer">
              <Github size={15} />
              {t.cta.github[lang]}
            </Button>
          </div>
        </Reveal>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
