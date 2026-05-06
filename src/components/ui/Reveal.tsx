import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  amount?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const offset: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0, y: 18 },
  down:  { x: 0, y: -18 },
  left:  { x: 18, y: 0 },
  right: { x: -18, y: 0 },
  none:  { x: 0, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  amount = 0.2,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const o = offset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x: reduce ? 0 : o.x, y: reduce ? 0 : o.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
