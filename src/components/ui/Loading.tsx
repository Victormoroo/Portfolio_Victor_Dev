import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';

interface Props {
  onComplete: () => void;
}

export function Loading({ onComplete }: Props) {
  const reduce = useReducedMotion();
  const { lang } = useLanguage();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setDone(true), reduce ? 200 : 1300);
    return () => window.clearTimeout(id);
  }, [reduce]);

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => done && onComplete()}
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          <span aria-hidden className="h-px w-12 bg-border-strong" />
          VM
          <span aria-hidden className="h-px w-12 bg-border-strong" />
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl font-semibold tracking-display sm:text-4xl"
          >
            Victor&nbsp;Moro
          </motion.div>
        </div>

        <div className="relative h-px w-44 overflow-hidden bg-border">
          <motion.span
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: reduce ? 0 : 1.0, ease: 'easeInOut' }}
            className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {content.loading[lang]}
        </p>
      </div>
    </motion.div>
  );
}
