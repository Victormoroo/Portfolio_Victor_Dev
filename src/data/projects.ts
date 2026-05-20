/**
 * Placeholder projects - replace with real work as it ships.
 * Each project drives a generated abstract mockup; no images required.
 */

export type ProjectKind = 'saas' | 'erp' | 'fullstack';

export interface ProjectImage {
  src: string;
  alt: { pt: string; en: string };
}

export type ProjectStatus = 'in-progress';

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
  /** Optional development status. When set, a badge is rendered in the card. */
  status?: ProjectStatus;
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
    slug: 'navaro',
    kind: 'saas',
    name: 'Navaro',
    type: { pt: 'SaaS · Barbearia', en: 'SaaS · Barbershop' },
    status: 'in-progress',
    description: {
      pt: 'SaaS de gestão para barbearias - agenda online, cadastro de clientes e visão financeira em um único painel. Identidade visual personalizada para que cada estabelecimento opere com a própria cara.',
      en: 'Management SaaS for barbershops - online booking, customer base and financial overview in a single dashboard. Per-shop visual identity so every establishment runs on a system that wears its own brand.',
    },
    bullets: {
      pt: [
        'Agenda online com confirmação e lembretes automáticos por WhatsApp.',
        'Cadastro de clientes com histórico de serviços, ticket médio e programa de fidelidade.',
        'Catálogo de serviços e produtos com cobrança integrada e múltiplas formas de pagamento.',
        'Personalização visual por barbearia: cada sistema fica com a cara do estabelecimento: cores, logotipo e identidade próprios.',
      ],
      en: [
        'Online booking with automatic WhatsApp confirmations and reminders.',
        'Customer profiles with service history, average ticket and loyalty program.',
        'Service and product catalog with integrated checkout and multiple payment methods.',
        'Per-shop visual customization: each instance carries the shop\'s own brand: colors, logo and identity.',
      ],
    },
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    links: {},
  },
];
