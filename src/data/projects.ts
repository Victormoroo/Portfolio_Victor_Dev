/**
 * Placeholder projects - replace with real work as it ships.
 * Each project drives a generated abstract mockup; no images required.
 */

export type ProjectKind = 'saas' | 'erp' | 'fullstack';

export interface Project {
  slug: string;
  kind: ProjectKind;
  name: string;
  type: { pt: string; en: string };
  description: { pt: string; en: string };
  bullets: { pt: string[]; en: string[] };
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
    type: { pt: 'SaaS · Dashboard', en: 'SaaS · Dashboard' },
    description: {
      pt: 'Dashboard analítico para times de produto, focado em leitura rápida e decisões guiadas por dados.',
      en: 'Analytics dashboard for product teams, focused on quick reads and data-driven decisions.',
    },
    bullets: {
      pt: [
        'Visualizações em tempo real com filtros segmentados por período, plano e cohort.',
        'Relatórios exportáveis em PDF e CSV com agendamento de envio por e-mail.',
        'Painel de alertas customizáveis para queda de MRR, churn anormal e picos de tráfego.',
        'Multi-tenant com permissões granulares por workspace e auditoria de acessos.',
      ],
      en: [
        'Real-time charts with filters by date range, plan tier and cohort.',
        'Exportable reports in PDF and CSV with scheduled email delivery.',
        'Custom alert panel for MRR drops, abnormal churn and traffic spikes.',
        'Multi-tenant with granular workspace permissions and access auditing.',
      ],
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
    links: { demo: '#', code: '#' },
  },
  {
    slug: 'aurora-erp',
    kind: 'erp',
    name: 'Aurora ERP',
    type: { pt: 'Sistema · Gestão', en: 'Business · Management' },
    description: {
      pt: 'Sistema de gestão empresarial modular, com fluxos de aprovação, controle financeiro e integrações fiscais.',
      en: 'Modular business management system with approval flows, financial control and tax integrations.',
    },
    bullets: {
      pt: [
        'Fluxo de aprovações multi-nível com trilha de auditoria completa por documento.',
        'Controle financeiro com conciliação bancária automática e DRE consolidada.',
        'Integração com gateways de pagamento e emissão de notas fiscais eletrônicas.',
        'Módulos plugáveis: estoque, RH, fiscal e BI - ativados por workspace.',
      ],
      en: [
        'Multi-level approval flows with full per-document audit trail.',
        'Financial control with automated bank reconciliation and consolidated income statements.',
        'Integration with payment gateways and electronic tax invoice issuing.',
        'Pluggable modules: inventory, HR, tax and BI - enabled per workspace.',
      ],
    },
    stack: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    links: { demo: '#', code: '#' },
  },
  {
    slug: 'orbita-platform',
    kind: 'fullstack',
    name: 'Órbita',
    type: { pt: 'Aplicação · Full Stack', en: 'App · Full Stack' },
    description: {
      pt: 'Plataforma full stack com autenticação corporativa, RBAC e dashboards personalizáveis por usuário.',
      en: 'Full stack platform with enterprise authentication, RBAC and per-user customizable dashboards.',
    },
    bullets: {
      pt: [
        'Autenticação por e-mail/senha, OAuth e SSO empresarial via SAML.',
        'RBAC com papéis customizáveis e permissões herdáveis em árvore organizacional.',
        'API REST documentada via OpenAPI com SDK gerado em TypeScript.',
        'Dashboards personalizáveis por usuário, com layouts e filtros persistentes.',
      ],
      en: [
        'Authentication via email/password, OAuth and enterprise SSO over SAML.',
        'RBAC with custom roles and tree-inheritable permissions across the org.',
        'REST API documented through OpenAPI with a generated TypeScript SDK.',
        'User-customizable dashboards with persisted layouts and filters.',
      ],
    },
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    links: { demo: '#', code: '#' },
  },
];
