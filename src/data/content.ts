/**
 * All UI copy lives here. Edit text in PT/EN side-by-side.
 * Keys are referenced in components via the useLanguage hook.
 */

export type Language = 'pt' | 'en';

export const links = {
  github: 'https://github.com/Victormoroo',
  linkedin: 'https://www.linkedin.com/in/victormoroo/',
  email: 'victormoro.dev@gmail.com',
  cv: '#',                                      // TODO: replace with /cv.pdf or external link
  contactForm: 'https://formspree.io/f/mojrzovl',
};

export const nav = {
  pt: [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Projetos' },
    { id: 'experience', label: 'Experiência' },
    { id: 'contact', label: 'Contato' },
  ],
  en: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
} as const;

export const content = {
  loading: {
    pt: 'Construindo experiências digitais',
    en: 'Building digital experiences',
  },

  hero: {
    badge: {
      pt: 'Desenvolvedor Full-Stack',
      en: 'Full-Stack Developer',
    },
    role: {
      pt: 'Full Stack Developer',
      en: 'Full Stack Developer',
    },
    name: 'Victor Moro',
    headline: {
      pt: 'Construo aplicações web modernas — do front-end refinado ao back-end estruturado.',
      en: 'I build modern web applications — from refined front-end to structured back-end.',
    },
    sub: {
      pt: 'Foco em interfaces bem construídas, código limpo e experiências consistentes em produto.',
      en: 'Focused on well-crafted interfaces, clean code and consistent product experiences.',
    },
    cta: {
      projects: { pt: 'Ver projetos', en: 'View projects' },
      contact: { pt: 'Entrar em contato', en: 'Get in touch' },
      cv: { pt: 'Baixar CV', en: 'Download CV' },
    },
    location: {
      pt: 'Brasil — disponível remoto',
      en: 'Brazil — open to remote',
    },
  },

  about: {
    label: { pt: 'Sobre', en: 'About' },
    title: {
      pt: 'Desenvolvedor focado em qualidade,\nprodutividade e detalhe.',
      en: 'A developer focused on quality,\nproductivity and detail.',
    },
    paragraphs: {
      pt: [
        'Sou desenvolvedor full stack com paixão por construir produtos digitais bem acabados. Trabalho com React, Next.js e TypeScript no front-end e Node.js, Java e Spring Boot no back-end — sempre buscando o equilíbrio entre arquitetura sólida e experiência refinada para o usuário final.',
        'Acredito que software bem feito é o resultado de decisões pequenas e consistentes: escolher a abstração certa, escrever um teste a mais, refinar uma transição até parecer natural. É essa atenção que tento levar para cada entrega.',
      ],
      en: [
        "I'm a full stack developer with a passion for building well-crafted digital products. I work with React, Next.js and TypeScript on the front-end, and Node.js, Java and Spring Boot on the back-end — always looking for the balance between solid architecture and a refined end-user experience.",
        'I believe great software is the result of small, consistent decisions: choosing the right abstraction, writing one more test, refining a transition until it feels natural. That care is what I bring to every delivery.',
      ],
    },
    pillars: {
      pt: [
        {
          title: 'Front-end com atenção a UI/UX',
          body: 'Interfaces responsivas, acessíveis e com microinterações pensadas para o usuário.',
        },
        {
          title: 'Back-end estruturado e escalável',
          body: 'APIs limpas, modelagem coerente e código preparado para crescer com o produto.',
        },
        {
          title: 'Mentalidade de produto',
          body: 'Decisões guiadas por impacto, melhoria contínua e clareza técnica.',
        },
      ],
      en: [
        {
          title: 'Front-end with UI/UX care',
          body: 'Responsive, accessible interfaces with microinteractions designed for the user.',
        },
        {
          title: 'Structured, scalable back-end',
          body: 'Clean APIs, coherent modeling and code ready to grow with the product.',
        },
        {
          title: 'Product mindset',
          body: 'Decisions driven by impact, continuous improvement and technical clarity.',
        },
      ],
    },
  },

  stack: {
    label: { pt: 'Stack', en: 'Stack' },
    title: {
      pt: 'Ferramentas que uso para entregar.',
      en: 'Tools I use to ship.',
    },
    sub: {
      pt: 'Selecionadas pela ergonomia, performance e maturidade — não pela hype.',
      en: 'Picked for ergonomics, performance and maturity — not hype.',
    },
    categories: {
      frontend: { pt: 'Front-end', en: 'Front-end' },
      backend: { pt: 'Back-end', en: 'Back-end' },
      database: { pt: 'Database', en: 'Database' },
      tools: { pt: 'Tools', en: 'Tools' },
    },
  },

  projects: {
    label: { pt: 'Projetos', en: 'Projects' },
    title: {
      pt: 'Trabalhos selecionados.',
      en: 'Selected work.',
    },
    sub: {
      pt: 'Uma amostra do tipo de produto que gosto de construir.',
      en: 'A sample of the kind of product I enjoy building.',
    },
    actions: {
      demo: { pt: 'Demo', en: 'Demo' },
      code: { pt: 'Código', en: 'Code' },
    },
  },

  experience: {
    label: { pt: 'Jornada', en: 'Journey' },
    title: {
      pt: 'Trajetória profissional.',
      en: 'Professional path.',
    },
    sub: {
      pt: 'Uma linha do tempo dos focos técnicos que moldaram meu trabalho até aqui.',
      en: 'A timeline of the technical focuses that have shaped my work so far.',
    },
    highlightLabel: { pt: 'Projeto destaque', en: 'Featured project' },
    items: {
      pt: [
        {
          chapter: 'Out 2025 — atual',
          company: 'HRT Incorporadora · Ib System',
          title: 'Analista de TI',
          bullets: [
            'Operação e suporte da infraestrutura de TI, atendendo +150 usuários em 3 unidades.',
            'Gestão de ativos, redes (LAN/Wi-Fi), servidores, backups e políticas de segurança.',
            'Automações internas e integração de sistemas com scripts e RouterBoard (Mikrotik), incluindo rotinas de backup automatizadas.',
            'Desenvolvimento de sistemas internos para substituir processos manuais em planilhas e dar mais consistência à operação.',
            'Atuação próxima a Engenharia, Obras, Administrativo, Comercial e Desenvolvimento — traduzindo demandas operacionais em soluções técnicas.',
            'Resultados: rotina de backup eliminou 12h de retrabalho/mês; redução de 15% no custo com internet.',
          ],
          highlight: {
            name: 'Omnos',
            description:
              'Software interno para controle de patrimônio e estoque da empresa. ReactJS + Vite no web, React Native no mobile e backend em Java + Spring sobre PostgreSQL.',
          },
          stack: ['React Native', 'ReactJS', 'TypeScript', 'Vite', 'Java', 'Spring', 'PostgreSQL', 'PowerShell', 'Mikrotik', 'RouterOS'],
        },
        {
          chapter: 'Mai 2023 — Out 2023',
          company: 'Compass UOL',
          title: 'Desenvolvedor Back-End · Java / Spring Boot',
          bullets: [
            'APIs REST em Java 17 + Spring Boot, com arquitetura em camadas, injeção de dependência e Clean Code.',
            'Testes automatizados com JUnit e Mockito cobrindo as regras de negócio.',
            'Serviços AWS (EC2, S3, RDS) e integração contínua via Git/GitHub.',
            'Squad ágil em Scrum: dailies, plannings e code reviews.',
          ],
          highlight: {
            name: 'Backend de e-commerce',
            description:
              'API REST com autenticação (Spring Security + JWT), catálogo, carrinho e pedidos. Modelagem em PostgreSQL, Swagger, tratamento global de exceções e deploy em nuvem.',
          },
          stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'AWS', 'Git', 'Postman', 'Swagger'],
        },
      ],
      en: [
        {
          chapter: 'Oct 2025 — present',
          company: 'HRT Incorporadora · Ib System',
          title: 'IT Analyst',
          bullets: [
            'IT infrastructure operations and support, serving 150+ users across 3 sites.',
            'Asset management, LAN/Wi-Fi networking, servers, backups and security policies.',
            'Internal automations and system integrations with scripts and RouterBoard (Mikrotik), including automated backup routines.',
            'Built internal systems to replace manual spreadsheet processes and improve operational consistency.',
            'Close partnership with Engineering, Construction, Admin, Sales and Development teams — translating operational needs into technical solutions.',
            'Outcomes: backup routine cut 12h of rework/month; 15% reduction in internet costs.',
          ],
          highlight: {
            name: 'Omnos',
            description:
              'Internal software for company asset and inventory control. ReactJS + Vite on the web, React Native on mobile, Java + Spring on the backend over PostgreSQL.',
          },
          stack: ['React Native', 'ReactJS', 'TypeScript', 'Vite', 'Java', 'Spring', 'PostgreSQL', 'PowerShell', 'Mikrotik', 'RouterOS'],
        },
        {
          chapter: 'May 2023 — Oct 2023',
          company: 'Compass UOL',
          title: 'Back-End Developer · Java / Spring Boot',
          bullets: [
            'REST APIs in Java 17 + Spring Boot with layered architecture, dependency injection and Clean Code.',
            'Automated tests with JUnit and Mockito covering business rules.',
            'AWS services (EC2, S3, RDS) and continuous integration via Git/GitHub.',
            'Agile squad in Scrum: dailies, plannings and code reviews.',
          ],
          highlight: {
            name: 'E-commerce backend',
            description:
              'REST API with authentication (Spring Security + JWT), catalog, cart and orders. PostgreSQL modeling, Swagger, global exception handling and cloud deploy.',
          },
          stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'AWS', 'Git', 'Postman', 'Swagger'],
        },
      ],
    },
  },

  contact: {
    label: { pt: 'Contato', en: 'Contact' },
    title: {
      pt: 'Vamos construir algo juntos?',
      en: "Let's build something together?",
    },
    sub: {
      pt: 'Aberto a oportunidades, projetos sob medida e conversas honestas sobre engenharia e produto.',
      en: 'Open to opportunities, tailored projects and honest conversations about engineering and product.',
    },
    cta: {
      email: { pt: 'Enviar e-mail', en: 'Send email' },
      linkedin: { pt: 'LinkedIn', en: 'LinkedIn' },
      github: { pt: 'GitHub', en: 'GitHub' },
    },
    modal: {
      title: { pt: 'Enviar mensagem', en: 'Send a message' },
      intro: {
        pt: 'Preencha os campos abaixo — a mensagem cai direto no meu e-mail.',
        en: 'Fill in the fields below — your message lands straight in my inbox.',
      },
      fields: {
        name: { pt: 'Nome', en: 'Name' },
        email: { pt: 'Seu e-mail', en: 'Your email' },
        subject: { pt: 'Assunto', en: 'Subject' },
        message: { pt: 'Mensagem', en: 'Message' },
      },
      placeholders: {
        name: { pt: 'Como você se chama', en: 'What should I call you' },
        email: { pt: 'voce@exemplo.com', en: 'you@example.com' },
        subject: { pt: 'Sobre o que quer falar (opcional)', en: 'What is this about (optional)' },
        message: { pt: 'Conta um pouco do que você tem em mente.', en: 'Tell me a bit about what you have in mind.' },
      },
      defaultSubject: {
        pt: 'Contato pelo portfólio',
        en: 'Contact from the portfolio',
      },
      cancel: { pt: 'Cancelar', en: 'Cancel' },
      send: { pt: 'Enviar', en: 'Send' },
      sending: { pt: 'Enviando…', en: 'Sending…' },
      done: { pt: 'Fechar', en: 'Close' },
      hint: {
        pt: 'Costumo responder em até 48 horas.',
        en: 'I usually reply within 48 hours.',
      },
      success: {
        title: { pt: 'Mensagem enviada', en: 'Message sent' },
        body: {
          pt: 'Obrigado por entrar em contato. Te respondo em breve.',
          en: 'Thanks for reaching out — I will get back to you soon.',
        },
      },
      sendError: {
        pt: 'Não consegui enviar agora. Tente novamente em alguns instantes.',
        en: 'Could not send right now. Please try again in a moment.',
      },
      counter: {
        pt: 'caracteres',
        en: 'characters',
      },
      errors: {
        name: {
          required: { pt: 'Informe seu nome.', en: 'Please tell me your name.' },
          tooShort: { pt: 'Mínimo de 2 caracteres.', en: 'At least 2 characters.' },
          tooLong: { pt: 'Máximo de 80 caracteres.', en: 'Up to 80 characters.' },
          invalid: {
            pt: 'Use apenas letras, espaços, hífens ou apóstrofos.',
            en: 'Only letters, spaces, hyphens or apostrophes.',
          },
        },
        email: {
          required: { pt: 'Informe seu e-mail.', en: 'Please share your email.' },
          invalid: {
            pt: 'E-mail em formato inválido.',
            en: 'Please enter a valid email address.',
          },
        },
        subject: {
          tooLong: { pt: 'Máximo de 120 caracteres.', en: 'Up to 120 characters.' },
        },
        message: {
          required: { pt: 'Escreva uma mensagem.', en: 'Please write a message.' },
          tooShort: {
            pt: 'A mensagem precisa ter pelo menos 10 caracteres.',
            en: 'Message needs at least 10 characters.',
          },
          tooLong: { pt: 'Máximo de 2000 caracteres.', en: 'Up to 2000 characters.' },
        },
      },
    },
  },

  footer: {
    role: { pt: 'Full Stack Developer', en: 'Full Stack Developer' },
    rights: {
      pt: 'Todos os direitos reservados.',
      en: 'All rights reserved.',
    },
  },
} as const;
