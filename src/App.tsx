import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Stack } from '@/components/sections/Stack';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';
import { Loading } from '@/components/ui/Loading';

export default function App() {
  const [ready, setReady] = useState(false);

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
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
