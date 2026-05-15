import type { Tech } from '@/data/technologies';
import { useTheme } from '@/hooks/useTheme';

interface Props {
  tech: Tech;
}

export function TechCard({ tech }: Props) {
  const Icon = tech.icon;
  const { theme } = useTheme();
  const brand = theme === 'light' && tech.colorLight ? tech.colorLight : tech.color;

  return (
    <div
      className="group relative flex items-center gap-4 rounded-xl border border-border bg-surface px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-elevated"
      style={{ ['--brand' as string]: brand }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(120% 120% at 100% 0%, color-mix(in oklab, var(--brand), transparent 86%) 0%, transparent 60%)',
        }}
      />
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-background transition-colors duration-300 group-hover:border-border-strong">
        <Icon
          size={18}
          className="text-foreground/80 transition-colors duration-300 group-hover:text-[color:var(--brand)]"
        />
      </div>
      <div className="relative min-w-0">
        <p className="truncate text-sm font-medium">{tech.name}</p>
        <span
          aria-hidden
          className="mt-1.5 block h-px w-8 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
          style={{ background: 'var(--brand)' }}
        />
      </div>
    </div>
  );
}
