<div align="center">

# Victor Moro · Portfolio

**Portfólio pessoal de um desenvolvedor full stack.**
Interface refinada, bilíngue, com tema claro/escuro, animações sutis e SEO bem cuidado.

[![React](https://img.shields.io/badge/React-18-087EA4?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF5C8A?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-22D3EE.svg)](./LICENSE)

</div>

---

## ✨ Destaques

- **Bilíngue (PT / EN)** — alternância de idioma em tempo real, persistida em `localStorage`, com `title`/`meta`/`og:locale` sincronizados.
- **Tema claro & escuro** — preferência do sistema por padrão, escolha manual persistida, sem flash ao carregar (FOUC prevenido antes do paint).
- **Hero com editor de código vivo** — animação de digitação caractere a caractere com syntax highlighting e cursor piscante.
- **Carrossel de projetos** — imagens e vídeo, auto-avanço que só inicia quando entra na viewport, transição *burn-in* e screenshots localizados por idioma.
- **Stack interativa** — cards de tecnologia que revelam a cor da marca no hover; no mobile, grade colapsável via switch.
- **SEO de primeira** — meta tags completas, Open Graph, Twitter Card, JSON-LD (`Person`, `WebSite`, `ProfilePage`), `sitemap.xml`, `robots.txt` e Web App Manifest.
- **Acessível e responsivo** — hierarquia semântica de headings, navegação por teclado, `prefers-reduced-motion`, tipografia fluida com `clamp()`.

## 🧱 Stack

| Camada | Tecnologias |
| --- | --- |
| **Core** | React 18, TypeScript, Vite |
| **Estilo** | Tailwind CSS, fontes variáveis Geist / Geist Mono |
| **Animação** | Framer Motion |
| **Ícones** | lucide-react, react-icons |
| **Contato** | Formspree (envio do formulário) |

## 🚀 Começando

> Requer **Node.js 18+** e **npm**.

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento (http://localhost:5173)
npm run dev

# build de produção
npm run build

# pré-visualizar o build
npm run preview

# checagem de tipos
npm run lint
```

## 📁 Estrutura

```
src/
├── components/
│   ├── layout/      → Navbar, Footer
│   ├── sections/    → Hero, About, Stack, Projects, Experience, Contact
│   └── ui/          → Button, Carousel, Modal, TechCard, Reveal, toggles…
├── data/            → content.ts (textos PT/EN), projects.ts, technologies.ts
├── hooks/           → useTheme, useLanguage
├── lib/             → cn (utilitário de classes)
├── styles/          → globals.css (tokens de tema, camadas Tailwind)
└── main.tsx         → entrypoint (providers de tema e idioma)
```

## ✏️ Personalização

Quase todo o conteúdo é orientado por dados — sem caçar texto dentro dos componentes:

- **Textos e traduções** → `src/data/content.ts` (cada chave em PT e EN, lado a lado).
- **Projetos** → `src/data/projects.ts` (nome, descrição, bullets, stack, imagens/vídeo, links, status).
- **Tecnologias da seção Stack** → `src/data/technologies.ts` (ícone, categoria, cor da marca).
- **Paleta e tema** → variáveis CSS em `src/styles/globals.css`.

## 🔎 SEO

A camada estática vive em `index.html` e em `public/` (`robots.txt`, `sitemap.xml`, `site.webmanifest`, `og-image.png`). O idioma ativo atualiza dinamicamente o `title` e as descrições em tempo de execução. Ao publicar, ajuste o domínio canônico nas tags e reenvie o `sitemap.xml` no Google Search Console.

## 📄 Licença

[MIT](./LICENSE) © Victor Hugo Moro

<div align="center">
<sub>Construído com cuidado nos detalhes — do código limpo à transição certa.</sub>
</div>
