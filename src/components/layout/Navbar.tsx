import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { nav } from '@/data/content';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { cn } from '@/lib/cn';

export function Navbar() {
  const { lang } = useLanguage();
  const items = nav[lang];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = items.map((i) => i.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5">
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'pointer-events-auto flex items-center gap-1 rounded-full border px-1.5 py-1.5 backdrop-blur-md transition-all duration-300',
          scrolled
            ? 'border-border-strong bg-background/80 shadow-[0_8px_24px_-12px_rgb(var(--foreground)/0.18)]'
            : 'border-border bg-background/60',
        )}
      >
        <a
          href="#home"
          aria-label="Victor Moro — home"
          className="hidden items-center gap-2 rounded-full pl-3 pr-2 sm:flex"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground">VM</span>
          <span aria-hidden className="h-3 w-px bg-border-strong" />
        </a>

        <ul className="hidden items-center md:flex">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    'relative inline-flex h-9 items-center rounded-full px-3.5 text-sm transition-colors',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-muted"
                    />
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5 pl-1.5">
          <span aria-hidden className="hidden h-5 w-px bg-border md:block" />
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:border-border-strong md:hidden"
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-full mt-2 w-[min(92vw,28rem)] rounded-2xl border border-border bg-background/95 p-2 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    onClick={() => setOpen(false)}
                    href={`#${item.id}`}
                    className={cn(
                      'flex h-11 items-center rounded-xl px-4 text-sm transition-colors',
                      active === item.id ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
