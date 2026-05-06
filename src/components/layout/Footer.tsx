import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { content, links } from '@/data/content';

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-edge flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium tracking-display">Victor Moro</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {content.footer.role[lang]} · © {year}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <FooterIcon href={links.github} label="GitHub">
            <Github size={15} strokeWidth={1.6} />
          </FooterIcon>
          <FooterIcon href={links.linkedin} label="LinkedIn">
            <Linkedin size={15} strokeWidth={1.6} />
          </FooterIcon>
          <FooterIcon href={`mailto:${links.email}`} label="Email">
            <Mail size={15} strokeWidth={1.6} />
          </FooterIcon>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {content.footer.rights[lang]}
        </p>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-foreground hover:text-foreground"
    >
      {children}
    </a>
  );
}
