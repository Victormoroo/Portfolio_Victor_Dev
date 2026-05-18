/**
 * Placeholder projects - replace with real work as it ships.
 * Each project drives a generated abstract mockup; no images required.
 */

export type ProjectKind = 'saas' | 'erp' | 'fullstack';

export interface ProjectImage {
  src: string;
  alt: { pt: string; en: string };
}

export interface Project {
  slug: string;
  kind: ProjectKind;
  name: string;
  type: { pt: string; en: string };
  description: { pt: string; en: string };
  bullets: { pt: string[]; en: string[] };
  stack: string[];
  /** When provided, the mockup slot renders a carousel of real images
   *  instead of the abstract generated mockup. */
  images?: readonly ProjectImage[];
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
    slug: 'neto-cell',
    kind: 'fullstack',
    name: 'Neto Cell Assistência Técnica',
    type: { pt: 'Site · Negócio Local', en: 'Site · Local Business' },
    description: {
      pt: 'Site institucional de uma assistência técnica de celulares em Franca-SP, com integração WhatsApp, mapa embutido e SEO local.',
      en: 'Institutional site for a phone repair shop in Franca-SP, with WhatsApp integration, embedded map and local SEO.',
    },
    bullets: {
      pt: [
        'Landing institucional com seções de serviços, depoimentos, contato e horários.',
        'Integração com WhatsApp por links pré-formatados a partir de número e mensagem padrão.',
        'Mapa do Google embutido e bloco de contato com endereço, formas de pagamento e redes sociais.',
        'SEO local com metadata por página e dados estruturados JSON-LD (LocalBusiness).',
      ],
      en: [
        'Institutional landing with services, testimonials, contact and business hours sections.',
        'WhatsApp integration through pre-formatted URLs built from a base number and default message.',
        'Embedded Google Maps and a contact block with address, payment methods and social links.',
        'Local SEO with per-page metadata and JSON-LD structured data (LocalBusiness).',
      ],
    },
    stack: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS'],
    images: [
      {
        src: '/projects/NetoCell/01.png',
        alt: {
          pt: 'Neto Cell - página inicial do site institucional',
          en: 'Neto Cell - institutional site landing',
        },
      },
      {
        src: '/projects/NetoCell/02.png',
        alt: {
          pt: 'Neto Cell - seção de serviços e contato',
          en: 'Neto Cell - services and contact section',
        },
      },
      {
        src: '/projects/NetoCell/03.png',
        alt: {
          pt: 'Neto Cell - mockup do projeto desktop e mobile',
          en: 'Neto Cell - desktop and mobile project mockup',
        },
      },
    ],
    links: {
      demo: 'https://netocellassistencia.netlify.app/',
      code: 'https://github.com/Victormoroo/Neto_Cell_Assistencia_Tecnica',
    },
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
