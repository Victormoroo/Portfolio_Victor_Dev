import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out ' +
  'disabled:pointer-events-none disabled:opacity-50 select-none whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-foreground text-background hover:bg-accent hover:text-accent-foreground ' +
    'shadow-[0_1px_0_0_rgb(var(--foreground)/0.06)_inset,0_8px_24px_-12px_rgb(var(--foreground)/0.35)] ' +
    'hover:shadow-[0_1px_0_0_rgb(var(--accent)/0.1)_inset,0_12px_32px_-12px_rgb(var(--accent)/0.6)]',
  secondary:
    'border border-border-strong bg-surface text-foreground hover:border-foreground hover:bg-surface-elevated',
  ghost:
    'text-foreground/80 hover:text-foreground hover:bg-muted',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | AnchorProps>(
  ({ variant = 'primary', size = 'md', className, children, ...rest }, ref) => {
    const classes = cn(base, variants[variant], sizes[size], className);

    if ('as' in rest && rest.as === 'a') {
      const { as: _as, ...anchorProps } = rest;
      void _as;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }
    const { as: _as, ...buttonProps } = rest as ButtonProps;
    void _as;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps}>
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';
