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
  SiFlutter,
  SiPython,
  SiPhp,
  SiMongodb,
  SiGit,
  SiIntellijidea,
  SiPostman,
  SiLinux,
  SiApple,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export type TechCategory = 'frontend' | 'mobile' | 'backend' | 'database' | 'tools';

export interface Tech {
  name: string;
  icon: IconType;
  category: TechCategory;
  /** Brand color used for hover accent only - kept subtle. */
  color: string;
  /** Optional override applied only in light theme. */
  colorLight?: string;
}

export const technologies: Tech[] = [
  { name: 'React',         icon: SiReact,       category: 'frontend', color: '#61dafb' },
  { name: 'Next.js',       icon: SiNextdotjs,   category: 'frontend', color: '#ffffff', colorLight: '#000000' },
  { name: 'TypeScript',    icon: SiTypescript,  category: 'frontend', color: '#3178c6' },
  { name: 'JavaScript',    icon: SiJavascript,  category: 'frontend', color: '#f7df1e' },
  { name: 'Tailwind CSS',  icon: SiTailwindcss, category: 'frontend', color: '#38bdf8' },
  { name: 'React Native',  icon: SiReact,       category: 'mobile',   color: '#61dafb' },
  { name: 'Flutter',       icon: SiFlutter,     category: 'mobile',   color: '#02569B' },
  { name: 'Node.js',       icon: SiNodedotjs,   category: 'backend',  color: '#5fa04e' },
  { name: 'Java',          icon: FaJava,        category: 'backend',  color: '#f89820' },
  { name: 'Spring Boot',   icon: SiSpringboot,  category: 'backend',  color: '#6db33f' },
  { name: 'Python',        icon: SiPython,      category: 'backend',  color: '#3776ab' },
  { name: 'PHP',           icon: SiPhp,         category: 'backend',  color: '#777bb4' },
  { name: 'PostgreSQL',    icon: SiPostgresql,  category: 'database', color: '#4169e1' },
  { name: 'MongoDB',       icon: SiMongodb,     category: 'database', color: '#47a248' },
  { name: 'Vite',          icon: SiVite,        category: 'tools',    color: '#646cff' },
  { name: 'Docker',        icon: SiDocker,      category: 'tools',    color: '#2496ed' },
  { name: 'Git',           icon: SiGit,         category: 'tools',    color: '#f05032' },
  { name: 'IntelliJ IDEA', icon: SiIntellijidea, category: 'tools',   color: '#fe2857' },
  { name: 'Postman',       icon: SiPostman,     category: 'tools',    color: '#ff6c37' },
  { name: 'Linux',         icon: SiLinux,       category: 'tools',    color: '#fcc624' },
  { name: 'macOS',         icon: SiApple,       category: 'tools',    color: '#ffffff', colorLight: '#000000' },
];
