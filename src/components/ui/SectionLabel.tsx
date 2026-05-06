import { cn } from '@/lib/cn';

interface Props {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className }: Props) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{number}</span>
      <span aria-hidden className="h-px w-8 bg-border-strong" />
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
