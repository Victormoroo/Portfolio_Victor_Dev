/**
 * All UI copy lives here. Edit text in PT/EN side-by-side.
 * Keys are referenced in components via the useLanguage hook.
 */

export type Language = 'pt' | 'en';

export const links = {
  github: 'https://github.com/Victormoroo',
  linkedin: 'https://www.linkedin.com/in/victormoroo/',
  email: 'your.email@example.com',              // TODO: replace
  cv: '#',                                      // TODO: replace with /cv.pdf or external link
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
      pt: 'Disponível para oportunidades selecionadas',
      en: 'Available for selected opportunities',
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
    items: {
      pt: [
        {
          chapter: 'Capítulo atual',
          title: 'Projetos full stack end-to-end',
          body: 'Aplicações completas com autenticação, dashboards, integrações e deploy. Foco em arquitetura limpa e qualidade de produto.',
        },
        {
          chapter: 'Antes',
          title: 'Engenharia de back-end',
          body: 'APIs em Node.js e Java/Spring Boot, modelagem em PostgreSQL, contêineres com Docker e cuidado com escalabilidade.',
        },
        {
          chapter: 'Antes',
          title: 'Front-end e interface',
          body: 'React, Next.js, TypeScript e Tailwind. Sistemas de design reutilizáveis, componentes acessíveis e animações sutis.',
        },
        {
          chapter: 'Sempre',
          title: 'Estudo contínuo',
          body: 'Arquitetura de software, performance, padrões de produto, acessibilidade e fundamentos de design.',
        },
      ],
      en: [
        {
          chapter: 'Current chapter',
          title: 'End-to-end full stack projects',
          body: 'Complete applications with auth, dashboards, integrations and deploy. Focus on clean architecture and product quality.',
        },
        {
          chapter: 'Before',
          title: 'Back-end engineering',
          body: 'APIs in Node.js and Java/Spring Boot, PostgreSQL modeling, Docker-based environments and care for scalability.',
        },
        {
          chapter: 'Before',
          title: 'Front-end and interface',
          body: 'React, Next.js, TypeScript and Tailwind. Reusable design systems, accessible components and subtle animations.',
        },
        {
          chapter: 'Always',
          title: 'Continuous learning',
          body: 'Software architecture, performance, product patterns, accessibility and design fundamentals.',
        },
      ],
    },
  },

  process: {
    label: { pt: 'Como trabalho', en: 'How I work' },
    title: {
      pt: 'Princípios que guiam cada entrega.',
      en: 'Principles guiding every delivery.',
    },
    items: {
      pt: [
        { title: 'Código limpo e componentizado', body: 'Arquitetura previsível, fácil de ler e fácil de evoluir.' },
        { title: 'Interfaces responsivas e acessíveis', body: 'Funciona bem do mobile ao desktop, com foco em A11y.' },
        { title: 'APIs bem estruturadas', body: 'Contratos claros, validação na fronteira e erros previsíveis.' },
        { title: 'Performance e boas práticas', body: 'Bundle enxuto, métricas reais e zero shift de layout.' },
        { title: 'Atenção à experiência do usuário', body: 'Microinterações, estados vazios e feedback contextual.' },
      ],
      en: [
        { title: 'Clean, componentized code', body: 'Predictable architecture, easy to read and easy to evolve.' },
        { title: 'Responsive, accessible interfaces', body: 'Works well from mobile to desktop, with A11y in focus.' },
        { title: 'Well-structured APIs', body: 'Clear contracts, boundary validation and predictable errors.' },
        { title: 'Performance and best practices', body: 'Lean bundle, real metrics and zero layout shift.' },
        { title: 'Attention to user experience', body: 'Microinteractions, empty states and contextual feedback.' },
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
        pt: 'Preencha os campos e seu cliente de e-mail abrirá com tudo pronto pra revisar e enviar.',
        en: 'Fill in the fields and your email client will open with everything ready to review and send.',
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
      hint: {
        pt: 'Abre no seu cliente de e-mail padrão',
        en: 'Opens in your default email client',
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
