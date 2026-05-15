import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiPostgresql,
  SiVite,
  SiDocker,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export type TechCategory = 'frontend' | 'backend' | 'database' | 'tools';

export interface Tech {
  name: string;
  icon: IconType;
  category: TechCategory;
  /** Brand color used for hover accent only - kept subtle. */
  color: string;
}

export const technologies: Tech[] = [
  { name: 'React',         icon: SiReact,       category: 'frontend', color: '#61dafb' },
  { name: 'Next.js',       icon: SiNextdotjs,   category: 'frontend', color: '#ffffff' },
  { name: 'TypeScript',    icon: SiTypescript,  category: 'frontend', color: '#3178c6' },
  { name: 'JavaScript',    icon: SiJavascript,  category: 'frontend', color: '#f7df1e' },
  { name: 'Tailwind CSS',  icon: SiTailwindcss, category: 'frontend', color: '#38bdf8' },
  { name: 'Node.js',       icon: SiNodedotjs,   category: 'backend',  color: '#5fa04e' },
  { name: 'Java',          icon: FaJava,        category: 'backend',  color: '#f89820' },
  { name: 'Spring Boot',   icon: SiSpringboot,  category: 'backend',  color: '#6db33f' },
  { name: 'PostgreSQL',    icon: SiPostgresql,  category: 'database', color: '#4169e1' },
  { name: 'Vite',          icon: SiVite,        category: 'tools',    color: '#646cff' },
  { name: 'Docker',        icon: SiDocker,      category: 'tools',    color: '#2496ed' },
];
