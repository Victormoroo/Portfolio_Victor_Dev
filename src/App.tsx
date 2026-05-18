import { useEffect, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Stack } from '@/components/sections/Stack';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Loading } from '@/components/ui/Loading';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';

export default function App() {
  const [ready, setReady] = useState(false);
  const { lang } = useLanguage();

  // Keep <title>, meta description and og:locale in sync with the active language.
  useEffect(() => {
    const title = content.meta.title[lang];
    const description = content.meta.description[lang];

    document.title = title;

    const setMeta = (selector: string, value: string) => {
      const el = document.head.querySelector<HTMLMetaElement>(selector);
      if (el) el.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:locale"]', lang === 'pt' ? 'pt_BR' : 'en_US');
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
  }, [lang]);

  return (
    <>
      {!ready && <Loading onComplete={() => setReady(true)} />}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
