import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/cn';

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const isPt = lang === 'pt';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch language to ${isPt ? 'English' : 'Portuguese'}`}
      className="relative inline-flex h-9 select-none items-center rounded-full border border-border bg-surface px-1 font-mono text-[11px] uppercase tracking-[0.18em]"
    >
      <span
        aria-hidden
        className="absolute left-1 top-1 h-7 w-9 rounded-full bg-foreground transition-transform duration-300 ease-out"
        style={{ transform: isPt ? 'translateX(0)' : 'translateX(2.25rem)' }}
      />
      <span className={cn('relative z-10 grid h-7 w-9 place-items-center transition-colors', isPt ? 'text-background' : 'text-muted-foreground')}>
        PT
      </span>
      <span className={cn('relative z-10 grid h-7 w-9 place-items-center transition-colors', !isPt ? 'text-background' : 'text-muted-foreground')}>
        EN
      </span>
    </button>
  );
}
