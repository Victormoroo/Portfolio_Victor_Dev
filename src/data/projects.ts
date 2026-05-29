/**
 * Placeholder projects - replace with real work as it ships.
 * Each project drives a generated abstract mockup; no images required.
 */

export type ProjectKind = 'saas' | 'erp' | 'fullstack';

export interface ProjectImage {
  /** Single asset, or per-language variants ({ pt, en }) when the screenshot
   *  itself differs by locale. */
  src: string | { pt: string; en: string };
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
    slug: 'javacom-api',
    kind: 'fullstack',
    name: 'JavaCom API',
    type: { pt: 'API REST · E-commerce', en: 'REST API · E-commerce' },
    description: {
      pt: 'API REST de e-commerce com carrinho de compras, gestão de produtos, autenticação JWT e controle de estoque transacional. Documentada com OpenAPI 3 e perfis de acesso ADMIN/USER.',
      en: 'E-commerce REST API featuring shopping cart, product management, JWT authentication and transactional stock control. Documented with OpenAPI 3 and ADMIN/USER access roles.',
    },
    bullets: {
      pt: [
        'Catálogo público de produtos e gestão administrativa com soft delete preservando integridade dos pedidos.',
        'Carrinho persistente por usuário e checkout transacional com validação e baixa de estoque em uma única operação.',
        'Autenticação stateless com JWT (HS256), perfis ADMIN/USER e autorização declarativa por método.',
        'Documentação Swagger/OpenAPI 3 com schemas, exemplos, códigos HTTP e autorização persistida na UI.',
      ],
      en: [
        'Public product catalog and admin management with soft delete that preserves order integrity.',
        'Per-user persistent cart and transactional checkout with single-step stock validation and decrement.',
        'Stateless JWT authentication (HS256), ADMIN/USER roles and declarative method-level authorization.',
        'Swagger/OpenAPI 3 docs with schemas, examples, HTTP status codes and persisted authorization in the UI.',
      ],
    },
    stack: ['Java 21', 'Spring Boot 4', 'Spring Security', 'JPA / Hibernate', 'H2 Database', 'PostgreSQL', 'OpenAPI / Swagger'],
    images: [
      {
        src: '/projects/JavaCom_API/swagger.png',
        alt: {
          pt: 'JavaCom API - documentação interativa Swagger / OpenAPI',
          en: 'JavaCom API - interactive Swagger / OpenAPI documentation',
        },
      },
      {
        src: '/projects/JavaCom_API/terminal.mp4',
        alt: {
          pt: 'JavaCom API - demonstração da CLI interativa no terminal',
          en: 'JavaCom API - interactive CLI demo in the terminal',
        },
      },
      {
        src: '/projects/JavaCom_API/h2-database.png',
        alt: {
          pt: 'JavaCom API - console do banco H2 com as tabelas do sistema',
          en: 'JavaCom API - H2 database console showing the system tables',
        },
      },
    ],
    links: {
      code: 'https://github.com/Victormoroo/JavaCom_API',
    },
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
    images: [
      {
        src: {
          pt: '/projects/Navaro/navaro-pt.png',
          en: '/projects/Navaro/navaro-eng.png',
        },
        alt: {
          pt: 'Navaro - prévia do painel em português',
          en: 'Navaro - dashboard preview in English',
        },
      },
    ],
    links: {},
  },
];
