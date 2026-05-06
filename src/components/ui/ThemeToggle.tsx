import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:border-border-strong hover:text-foreground"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 grid place-items-center"
        >
          {isDark ? <Moon size={15} strokeWidth={1.6} /> : <Sun size={15} strokeWidth={1.6} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
