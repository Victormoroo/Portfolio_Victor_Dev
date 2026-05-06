/**
 * Placeholder projects — replace with real work as it ships.
 * Each project drives a generated abstract mockup; no images required.
 */

export type ProjectKind = 'saas' | 'erp' | 'fullstack' | 'landing';

export interface Project {
  slug: string;
  kind: ProjectKind;
  name: string;
  type: { pt: string; en: string };
  description: { pt: string; en: string };
  stack: string[];
  links: {
    demo?: string;
    code?: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'metrica-dashboard',
    kind: 'saas',
    name: 'Métrica',
    type: { pt: 'SaaS Dashboard', en: 'SaaS Dashboard' },
    description: {
      pt: 'Dashboard analítico para times de produto, com visualizações em tempo real, filtros segmentados e relatórios exportáveis.',
      en: 'Analytics dashboard for product teams, with real-time charts, segmented filters and exportable reports.',
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
    links: { demo: '#', code: '#' },
  },
  {
    slug: 'aurora-erp',
    kind: 'erp',
    name: 'Aurora ERP',
    type: { pt: 'Sistema de Gestão', en: 'Business Management' },
    description: {
      pt: 'Sistema de gestão empresarial modular, com fluxo de aprovações, controle financeiro e integração com gateways.',
      en: 'Modular business management system with approval flows, financial control and gateway integrations.',
    },
    stack: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    links: { demo: '#', code: '#' },
  },
  {
    slug: 'orbita-platform',
    kind: 'fullstack',
    name: 'Órbita',
    type: { pt: 'Aplicação Full Stack', en: 'Full Stack App' },
    description: {
      pt: 'Plataforma full stack com autenticação, RBAC, painéis personalizados e API REST documentada.',
      en: 'Full stack platform with authentication, RBAC, custom dashboards and a documented REST API.',
    },
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    links: { demo: '#', code: '#' },
  },
  {
    slug: 'lume-landing',
    kind: 'landing',
    name: 'Lume',
    type: { pt: 'Landing Page Premium', en: 'Premium Landing Page' },
    description: {
      pt: 'Landing page de produto digital com tipografia editorial, animações sutis e foco em conversão.',
      en: 'Digital product landing page with editorial typography, subtle animations and conversion focus.',
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    links: { demo: '#', code: '#' },
  },
];
