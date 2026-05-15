export type Lang = 'pt' | 'en' | 'fr'

export type Experience = {
  company: string
  role: string
  period: string
  description: string
  tags: string[]
  icon: string
}

export type Service = {
  title: string
  description: string
  icon: string
}

export type Project = {
  title: string
  description: string
  tags: string[]
  icon: string
  link?: string
  repo?: string
}

export type Stat = {
  value: string
  label: string
}

export type SkillCategory = {
  title: string
  icon: string
  items: string[]
}

export type Dict = {
  htmlLang: string
  meta: { description: string }
  nav: {
    about: string
    experience: string
    projects: string
    contact: string
    brandAria: string
  }
  hero: {
    available: string
    greetingPrefix: string
    greetingName: string
    role: string
    tagline: { before: string; strong: string; after: string }
    location: string
    ctaExperience: string
    ctaContact: string
  }
  stats: { items: Stat[] }
  about: {
    titlePrefix: string
    titleAccent: string
    badge: string
    p1: { before: string; strong: string; after: string }
    p2: string
    skillsTitle: string
    skillCategories: SkillCategory[]
    educationTitle: string
    education: string
    languagesTitle: string
    languages: string
    exploringTitle: string
    exploring: string
  }
  services: {
    titlePrefix: string
    titleAccent: string
    subtitle: string
    items: Service[]
  }
  experience: {
    titlePrefix: string
    titleAccent: string
    subtitle: string
    items: Experience[]
  }
  projects: {
    titlePrefix: string
    titleAccent: string
    subtitle: string
    seeProject: string
    seeCode: string
    items: Project[]
  }
  contact: {
    titlePrefix: string
    titleAccent: string
    subtitle: string
    cta: string
    labels: { email: string; linkedin: string; github: string; phone: string }
  }
  footer: { made: string; by: string }
  langSwitcher: { label: string }
}

const COMPANY_ICONS = {
  sttartpay: '💳',
  bitybank: '🏦',
  rsm: '🏢',
  squair: '📊',
}

export const translations: Record<Lang, Dict> = {
  pt: {
    htmlLang: 'pt-BR',
    meta: { description: 'Portfólio de Julie Moura — Desenvolvedora Front-End | React, Next.js, TypeScript' },
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
      brandAria: 'Ir para o topo',
    },
    hero: {
      available: 'Disponível para projetos',
      greetingPrefix: 'Olá, sou ',
      greetingName: 'Julie',
      role: 'Front-End Developer · React · Next.js · TypeScript',
      tagline: {
        before: 'Construo ',
        strong: 'landing pages performáticas, dashboards e aplicações escaláveis',
        after: ', sempre com olhar para SEO, acessibilidade e fidelidade ao design — do Figma à produção.',
      },
      location: 'Rio de Janeiro, Brasil',
      ctaExperience: 'Ver experiência',
      ctaContact: 'Entrar em contato',
    },
    stats: {
      items: [
        { value: '6', label: 'anos como dev front-end' },
        { value: '4', label: 'empresas, do start-up ao enterprise' },
        { value: '3', label: 'idiomas (PT · EN · FR)' },
      ],
    },
    about: {
      titlePrefix: 'Sobre ',
      titleAccent: 'mim',
      badge: 'Front-End Dev',
      p1: {
        before: 'Sou Desenvolvedora Front-End / Full Stack com forte foco em ',
        strong: 'React, Next.js e TypeScript',
        after: '. Atuo lado a lado com times de Marketing e UI/UX, transformando protótipos do Figma em interfaces fiéis, rápidas e acessíveis.',
      },
      p2: 'Curto cuidar de cada camada: design system, componentes reutilizáveis, Core Web Vitals, Lighthouse, integração com APIs REST e Strapi (CMS headless). Também navego no back-end quando precisa — mantendo sistemas de pagamento em PHP e criando endpoints.',
      skillsTitle: 'Stack & ferramentas',
      skillCategories: [
        { title: 'Frameworks', icon: '🧱', items: ['React', 'Next.js', 'React Native', 'Vite'] },
        { title: 'Linguagens', icon: '💎', items: ['TypeScript', 'JavaScript', 'PHP', 'HTML5', 'CSS3'] },
        { title: 'Estilização', icon: '🎨', items: ['Tailwind CSS', 'Styled Components', 'SASS', 'CSS Modules', 'LESS'] },
        { title: 'Design & Criativo', icon: '✨', items: ['Figma', 'Adobe XD', 'Storybook', 'Design System'] },
        { title: 'Plataforma & dev', icon: '🧰', items: ['Strapi', 'REST APIs', 'Axios', 'Git', 'NPM'] },
        { title: 'Performance & Qualidade', icon: '🚀', items: ['SEO', 'Core Web Vitals', 'Lighthouse', 'A11y', 'Clean Code'] },
      ],
      educationTitle: 'Formação',
      education: 'Bacharelado em Ciência da Computação · CEFET/RJ (2018 – Jul 2026)',
      languagesTitle: 'Idiomas',
      languages: 'Português (nativo) · Inglês (B2) · Francês (A2.1)',
      exploringTitle: 'Atualmente explorando',
      exploring: 'Swift',
    },
    services: {
      titlePrefix: 'O que ',
      titleAccent: 'eu faço',
      subtitle: 'Como posso ajudar seu time ou produto',
      items: [
        {
          icon: '🚀',
          title: 'Landing pages performáticas',
          description: 'Páginas otimizadas para SEO, Core Web Vitals e conversão. Lighthouse 95+, design fiel ao Figma e monitoramento contínuo.',
        },
        {
          icon: '📊',
          title: 'Dashboards & aplicações SaaS',
          description: 'Apps escaláveis em React/Next com dados em tempo real, integração de APIs REST e uma UX que dá orgulho de usar.',
        },
        {
          icon: '🎨',
          title: 'Design Systems',
          description: 'Bibliotecas de componentes reutilizáveis em Storybook, tokens consistentes, acessibilidade e DX limpa para o time.',
        },
        {
          icon: '🔌',
          title: 'Integrações & Headless CMS',
          description: 'APIs REST, Strapi como CMS headless e manutenção de back-ends em PHP — autonomia pro marketing e produto.',
        },
      ],
    },
    experience: {
      titlePrefix: 'Minha ',
      titleAccent: 'experiência',
      subtitle: 'Onde tenho construído produtos nos últimos anos',
      items: [
        {
          company: 'SttartPay',
          role: 'Front-End Developer Pleno',
          period: 'Mar 2026 – Atual',
          description:
            'Plataforma de pagamentos com mais de 70 clientes. Projetei e desenvolvi o dashboard do cliente do zero, com visualização em tempo real de saldos, transações e indicadores financeiros. Lidero a padronização do design system, landing pages otimizadas (SEO + Core Web Vitals) e a manutenção dos sistemas de pagamento em PHP.',
          tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Strapi', 'PHP'],
          icon: COMPANY_ICONS.sttartpay,
        },
        {
          company: 'BityBank',
          role: 'Front-End Developer Pleno',
          period: 'Jan 2025 – Fev 2026',
          description:
            'Landing pages focadas em SEO, performance e conversão, com monitoramento contínuo via Lighthouse e PageSpeed. Integração de APIs REST, manutenção do Strapi como CMS headless e dos sistemas de pagamento em PHP. Colaboração direta com marketing e design.',
          tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Strapi', 'PHP'],
          icon: COMPANY_ICONS.bitybank,
        },
        {
          company: 'RSM',
          role: 'Senior Full Stack Developer',
          period: 'Mai 2023 – Fev 2026',
          description:
            'Liderança técnica do time de Front-End e definição de arquitetura. Migrei sistemas legados de Angular para React, criei dashboards corporativos integrados a SAP/HCM e mantive a biblioteca de componentes da empresa publicada via NPM. Projetos com integração de IA.',
          tags: ['React', 'TypeScript', 'Storybook', 'Design System', 'SAP/HCM'],
          icon: COMPANY_ICONS.rsm,
        },
        {
          company: 'SQUAIR',
          role: 'Front-End Developer',
          period: 'Fev 2022 – Fev 2023',
          description:
            'Dashboards interativos e landing pages de alto desempenho com Next.js e React. Estilização avançada com Styled Components, foco em responsividade, acessibilidade e compatibilidade entre navegadores.',
          tags: ['Next.js', 'React', 'Styled Components'],
          icon: COMPANY_ICONS.squair,
        },
      ],
    },
    projects: {
      titlePrefix: 'Meus ',
      titleAccent: 'projetos',
      subtitle: 'Projetos que mostram como construo produtos de ponta a ponta',
      seeProject: 'Ver projeto →',
      seeCode: 'Código ↗',
      items: [
        {
          title: 'PixFlow',
          icon: '💸',
          description:
            'Painel de conciliação de pagamentos Pix com transações em tempo real, status de webhooks, matching automático e detecção de anomalias. Inspirado no que faço na SttartPay.',
          tags: ['Next.js', 'TypeScript', 'WebSocket', 'Recharts'],
          repo: 'https://github.com/juliemoura/pixflow',
        },
        {
          title: 'Forge UI',
          icon: '🧩',
          description:
            'Design system corporativo open source com componentes acessíveis, tokens em JSON, sincronização com Figma e documentação completa no Storybook.',
          tags: ['React', 'Storybook', 'TypeScript', 'Radix UI'],
          link: '#',
          repo: '#',
        },
        {
          title: 'Blossom Dashboard',
          icon: '📊',
          description:
            'Dashboard de métricas com gráficos animados, filtros em tempo real e tema dark/light. Componentes acessíveis e reutilizáveis, prontos pra escalar.',
          tags: ['Next.js', 'TypeScript', 'Recharts'],
          link: '#',
          repo: '#',
        },
        {
          title: 'Switchboard',
          icon: '🎚️',
          description:
            'Console de feature flags e experimentos A/B com targeting por usuário/segmento, rollout gradual, kill-switch e auditoria completa de mudanças.',
          tags: ['Next.js', 'TypeScript', 'REST APIs', 'Tailwind'],
          link: '#',
          repo: '#',
        },
        {
          title: 'Vault Console',
          icon: '🔐',
          description:
            'Gerenciador de secrets e credenciais para times de engenharia, com rotação automática, RBAC, criptografia client-side e trilha de auditoria.',
          tags: ['Next.js', 'TypeScript', 'WebCrypto API'],
          link: '#',
          repo: '#',
        },
        {
          title: 'Cherry Shop',
          icon: '🛍️',
          description:
            'E-commerce com carrinho, checkout via Stripe e painel administrativo. Foco em micro-interações, dark mode e performance — Lighthouse 95+ no mobile.',
          tags: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
          repo: 'https://github.com/juliemoura/cherry-shop',
        },
      ],
    },
    contact: {
      titlePrefix: 'Vamos ',
      titleAccent: 'conversar?',
      subtitle: 'Tem um projeto em mente ou só quer trocar uma ideia sobre código e design? Me chama 🍒',
      cta: 'Enviar uma mensagem →',
      labels: { email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub', phone: 'Telefone' },
    },
    footer: { made: 'Feito com 🍒 e muito código por ', by: 'Julie Moura' },
    langSwitcher: { label: 'Idioma' },
  },
  en: {
    htmlLang: 'en',
    meta: { description: "Julie Moura's portfolio — Front-End Developer | React, Next.js, TypeScript" },
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      brandAria: 'Back to top',
    },
    hero: {
      available: 'Available for projects',
      greetingPrefix: "Hi, I'm ",
      greetingName: 'Julie',
      role: 'Front-End Developer · React · Next.js · TypeScript',
      tagline: {
        before: 'I build ',
        strong: 'high-performance landing pages, dashboards and scalable apps',
        after: ' with a sharp eye for SEO, accessibility, and design fidelity — from Figma to production.',
      },
      location: 'Rio de Janeiro, Brazil',
      ctaExperience: 'See experience',
      ctaContact: 'Get in touch',
    },
    stats: {
      items: [
        { value: '6', label: 'years as a front-end dev' },
        { value: '4', label: 'companies, from start-up to enterprise' },
        { value: '3', label: 'languages (PT · EN · FR)' },
      ],
    },
    about: {
      titlePrefix: 'About ',
      titleAccent: 'me',
      badge: 'Front-End Dev',
      p1: {
        before: "I'm a Front-End / Full Stack developer with a strong focus on ",
        strong: 'React, Next.js and TypeScript',
        after: '. I work side by side with Marketing and UI/UX teams, turning Figma prototypes into fast, accessible and pixel-faithful interfaces.',
      },
      p2: 'I love caring for every layer: design systems, reusable components, Core Web Vitals, Lighthouse, REST API integrations and Strapi (headless CMS). I also dive into the back-end when needed — maintaining PHP payment systems and crafting endpoints.',
      skillsTitle: 'Stack & tools',
      skillCategories: [
        { title: 'Frameworks', icon: '🧱', items: ['React', 'Next.js', 'React Native', 'Vite'] },
        { title: 'Languages', icon: '💎', items: ['TypeScript', 'JavaScript', 'PHP', 'HTML5', 'CSS3'] },
        { title: 'Styling', icon: '🎨', items: ['Tailwind CSS', 'Styled Components', 'SASS', 'CSS Modules', 'LESS'] },
        { title: 'Design & Creative', icon: '✨', items: ['Figma', 'Adobe XD', 'Storybook', 'Design System'] },
        { title: 'Platform & dev', icon: '🧰', items: ['Strapi', 'REST APIs', 'Axios', 'Git', 'NPM'] },
        { title: 'Performance & Quality', icon: '🚀', items: ['SEO', 'Core Web Vitals', 'Lighthouse', 'A11y', 'Clean Code'] },
      ],
      educationTitle: 'Education',
      education: 'B.Sc. in Computer Science · CEFET/RJ (2018 – Jul 2026)',
      languagesTitle: 'Languages',
      languages: 'Portuguese (native) · English (B2) · French (A2.1)',
      exploringTitle: 'Currently exploring',
      exploring: 'Swift',
    },
    services: {
      titlePrefix: 'What I ',
      titleAccent: 'do',
      subtitle: 'How I can help your team or product',
      items: [
        {
          icon: '🚀',
          title: 'High-performance landing pages',
          description: 'Pages tuned for SEO, Core Web Vitals and conversion. Lighthouse 95+, Figma-faithful design and continuous monitoring.',
        },
        {
          icon: '📊',
          title: 'Dashboards & SaaS apps',
          description: 'Scalable React/Next apps with real-time data, REST API integration and a UX you’ll be proud to ship.',
        },
        {
          icon: '🎨',
          title: 'Design Systems',
          description: 'Reusable component libraries in Storybook, consistent tokens, accessibility and clean DX for your team.',
        },
        {
          icon: '🔌',
          title: 'Integrations & Headless CMS',
          description: 'REST APIs, Strapi as headless CMS and PHP back-end maintenance — autonomy for marketing and product.',
        },
      ],
    },
    experience: {
      titlePrefix: 'My ',
      titleAccent: 'experience',
      subtitle: "Where I've been building products over the last few years",
      items: [
        {
          company: 'SttartPay',
          role: 'Mid-Level Front-End Developer',
          period: 'Mar 2026 – Present',
          description:
            'Payments platform serving 70+ clients. I designed and built the customer dashboard from scratch, with real-time visibility of balances, transactions and financial KPIs. I lead the design-system standardization, SEO-optimized landing pages (Core Web Vitals) and PHP payment-system maintenance.',
          tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Strapi', 'PHP'],
          icon: COMPANY_ICONS.sttartpay,
        },
        {
          company: 'BityBank',
          role: 'Mid-Level Front-End Developer',
          period: 'Jan 2025 – Feb 2026',
          description:
            'Landing pages tuned for SEO, performance and conversion, continuously monitored with Lighthouse and PageSpeed. REST API integrations, Strapi (headless CMS) maintenance and PHP payment systems. Close collaboration with marketing and design teams.',
          tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Strapi', 'PHP'],
          icon: COMPANY_ICONS.bitybank,
        },
        {
          company: 'RSM',
          role: 'Senior Full Stack Developer',
          period: 'May 2023 – Feb 2026',
          description:
            'Front-End tech lead and architecture contributor. Migrated legacy Angular systems to React, built enterprise dashboards integrated with SAP/HCM, and maintained the company-wide component library published on NPM. Projects with AI integrations.',
          tags: ['React', 'TypeScript', 'Storybook', 'Design System', 'SAP/HCM'],
          icon: COMPANY_ICONS.rsm,
        },
        {
          company: 'SQUAIR',
          role: 'Front-End Developer',
          period: 'Feb 2022 – Feb 2023',
          description:
            'Interactive dashboards and high-performance landing pages with Next.js and React. Advanced styling with Styled Components, focused on responsiveness, accessibility and cross-browser compatibility.',
          tags: ['Next.js', 'React', 'Styled Components'],
          icon: COMPANY_ICONS.squair,
        },
      ],
    },
    projects: {
      titlePrefix: 'My ',
      titleAccent: 'projects',
      subtitle: 'Projects showing how I build products end-to-end',
      seeProject: 'View project →',
      seeCode: 'Code ↗',
      items: [
        {
          title: 'PixFlow',
          icon: '💸',
          description:
            'Pix payment reconciliation dashboard with real-time transactions, webhook status, auto-matching and anomaly detection. Inspired by my work at SttartPay.',
          tags: ['Next.js', 'TypeScript', 'WebSocket', 'Recharts'],
          repo: 'https://github.com/juliemoura/pixflow',
        },
        {
          title: 'Forge UI',
          icon: '🧩',
          description:
            'Open-source enterprise design system with accessible components, JSON design tokens, Figma sync and full Storybook documentation.',
          tags: ['React', 'Storybook', 'TypeScript', 'Radix UI'],
          link: '#',
          repo: '#',
        },
        {
          title: 'Blossom Dashboard',
          icon: '📊',
          description:
            'Metrics dashboard with animated charts, real-time filters and dark/light themes. Accessible, reusable components ready to scale.',
          tags: ['Next.js', 'TypeScript', 'Recharts'],
          link: '#',
          repo: '#',
        },
        {
          title: 'Switchboard',
          icon: '🎚️',
          description:
            'Feature flags & A/B testing console with user/segment targeting, gradual rollouts, kill-switches and full change auditing.',
          tags: ['Next.js', 'TypeScript', 'REST APIs', 'Tailwind'],
          link: '#',
          repo: '#',
        },
        {
          title: 'Vault Console',
          icon: '🔐',
          description:
            'Secrets and credentials manager for engineering teams: auto-rotation, RBAC, client-side encryption and full audit trail.',
          tags: ['Next.js', 'TypeScript', 'WebCrypto API'],
          link: '#',
          repo: '#',
        },
        {
          title: 'Cherry Shop',
          icon: '🛍️',
          description:
            'E-commerce with cart, Stripe checkout and admin panel. Focused on micro-interactions, dark mode and performance — Lighthouse 95+ on mobile.',
          tags: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
          repo: 'https://github.com/juliemoura/cherry-shop',
        },
      ],
    },
    contact: {
      titlePrefix: "Let's ",
      titleAccent: 'talk?',
      subtitle: 'Got a project in mind, or just want to chat about code and design? Hit me up 🍒',
      cta: 'Send a message →',
      labels: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', phone: 'Phone' },
    },
    footer: { made: 'Made with 🍒 and lots of code by ', by: 'Julie Moura' },
    langSwitcher: { label: 'Language' },
  },
  fr: {
    htmlLang: 'fr',
    meta: { description: 'Portfolio de Julie Moura — Développeuse Front-End | React, Next.js, TypeScript' },
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      contact: 'Contact',
      brandAria: 'Retour en haut',
    },
    hero: {
      available: 'Disponible pour des projets',
      greetingPrefix: 'Bonjour, je suis ',
      greetingName: 'Julie',
      role: 'Développeuse Front-End · React · Next.js · TypeScript',
      tagline: {
        before: 'Je construis des ',
        strong: 'landing pages performantes, des dashboards et des applications scalables',
        after: ', avec un vrai souci du SEO, de l’accessibilité et de la fidélité au design — de Figma jusqu’en production.',
      },
      location: 'Rio de Janeiro, Brésil',
      ctaExperience: "Voir l'expérience",
      ctaContact: 'Me contacter',
    },
    stats: {
      items: [
        { value: '6', label: 'ans comme dev front-end' },
        { value: '4', label: 'entreprises, du start-up à l’enterprise' },
        { value: '3', label: 'langues (PT · EN · FR)' },
      ],
    },
    about: {
      titlePrefix: 'À propos de ',
      titleAccent: 'moi',
      badge: 'Dév. Front-End',
      p1: {
        before: 'Développeuse Front-End / Full Stack passionnée par ',
        strong: 'React, Next.js et TypeScript',
        after: '. Je travaille main dans la main avec les équipes Marketing et UI/UX pour transformer les maquettes Figma en interfaces rapides, accessibles et fidèles au pixel.',
      },
      p2: 'J’aime soigner chaque couche : design system, composants réutilisables, Core Web Vitals, Lighthouse, intégration d’API REST et Strapi (CMS headless). Je m’aventure aussi côté back-end quand il faut — maintenance de systèmes de paiement en PHP et création d’endpoints.',
      skillsTitle: 'Stack & outils',
      skillCategories: [
        { title: 'Frameworks', icon: '🧱', items: ['React', 'Next.js', 'React Native', 'Vite'] },
        { title: 'Langages', icon: '💎', items: ['TypeScript', 'JavaScript', 'PHP', 'HTML5', 'CSS3'] },
        { title: 'Stylisation', icon: '🎨', items: ['Tailwind CSS', 'Styled Components', 'SASS', 'CSS Modules', 'LESS'] },
        { title: 'Design & Créatif', icon: '✨', items: ['Figma', 'Adobe XD', 'Storybook', 'Design System'] },
        { title: 'Plateforme & dev', icon: '🧰', items: ['Strapi', 'API REST', 'Axios', 'Git', 'NPM'] },
        { title: 'Performance & Qualité', icon: '🚀', items: ['SEO', 'Core Web Vitals', 'Lighthouse', 'A11y', 'Clean Code'] },
      ],
      educationTitle: 'Formation',
      education: 'Licence en Informatique · CEFET/RJ (2018 – Juil. 2026)',
      languagesTitle: 'Langues',
      languages: 'Portugais (natif) · Anglais (B2) · Français (A2.1)',
      exploringTitle: "J'explore en ce moment",
      exploring: 'Swift',
    },
    services: {
      titlePrefix: 'Ce que ',
      titleAccent: 'je fais',
      subtitle: 'Comment je peux aider votre équipe ou produit',
      items: [
        {
          icon: '🚀',
          title: 'Landing pages performantes',
          description: 'Pages optimisées SEO, Core Web Vitals et conversion. Lighthouse 95+, design fidèle à Figma et suivi continu.',
        },
        {
          icon: '📊',
          title: 'Dashboards & apps SaaS',
          description: 'Apps scalables en React/Next avec données temps réel, intégration d’API REST et une UX dont on est fier.',
        },
        {
          icon: '🎨',
          title: 'Design Systems',
          description: 'Bibliothèques de composants en Storybook, tokens cohérents, accessibilité et DX propre pour ton équipe.',
        },
        {
          icon: '🔌',
          title: 'Intégrations & CMS Headless',
          description: 'API REST, Strapi en CMS headless et maintenance back-end en PHP — autonomie pour le marketing et le produit.',
        },
      ],
    },
    experience: {
      titlePrefix: 'Mon ',
      titleAccent: 'expérience',
      subtitle: 'Où je construis des produits ces dernières années',
      items: [
        {
          company: 'SttartPay',
          role: 'Développeuse Front-End Confirmée',
          period: 'Mars 2026 – Aujourd’hui',
          description:
            'Plateforme de paiement servant plus de 70 clients. J’ai conçu et développé le dashboard client à partir de zéro : visualisation en temps réel des soldes, transactions et indicateurs financiers. Je pilote la standardisation du design system, les landing pages optimisées (SEO + Core Web Vitals) et la maintenance des systèmes de paiement en PHP.',
          tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Strapi', 'PHP'],
          icon: COMPANY_ICONS.sttartpay,
        },
        {
          company: 'BityBank',
          role: 'Développeuse Front-End Confirmée',
          period: 'Jan. 2025 – Fév. 2026',
          description:
            'Landing pages optimisées SEO, performance et conversion, avec un suivi continu via Lighthouse et PageSpeed. Intégration d’API REST, maintenance de Strapi (CMS headless) et des systèmes de paiement en PHP. Collaboration étroite avec le marketing et le design.',
          tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Strapi', 'PHP'],
          icon: COMPANY_ICONS.bitybank,
        },
        {
          company: 'RSM',
          role: 'Développeuse Full Stack Senior',
          period: 'Mai 2023 – Fév. 2026',
          description:
            'Lead technique Front-End et contribution à l’architecture. Migration de systèmes legacy d’Angular vers React, dashboards d’entreprise intégrés à SAP/HCM et maintenance de la bibliothèque de composants publiée via NPM. Projets avec intégration d’IA.',
          tags: ['React', 'TypeScript', 'Storybook', 'Design System', 'SAP/HCM'],
          icon: COMPANY_ICONS.rsm,
        },
        {
          company: 'SQUAIR',
          role: 'Développeuse Front-End',
          period: 'Fév. 2022 – Fév. 2023',
          description:
            'Dashboards interactifs et landing pages performantes avec Next.js et React. Stylisation avancée en Styled Components, avec un focus sur la responsivité, l’accessibilité et la compatibilité entre navigateurs.',
          tags: ['Next.js', 'React', 'Styled Components'],
          icon: COMPANY_ICONS.squair,
        },
      ],
    },
    projects: {
      titlePrefix: 'Mes ',
      titleAccent: 'projets',
      subtitle: 'Des projets qui montrent comment je construis des produits de bout en bout',
      seeProject: 'Voir le projet →',
      seeCode: 'Code ↗',
      items: [
        {
          title: 'PixFlow',
          icon: '💸',
          description:
            'Tableau de bord de réconciliation des paiements Pix avec transactions en temps réel, statut des webhooks, matching automatique et détection d’anomalies. Inspiré de mon travail chez SttartPay.',
          tags: ['Next.js', 'TypeScript', 'WebSocket', 'Recharts'],
          repo: 'https://github.com/juliemoura/pixflow',
        },
        {
          title: 'Forge UI',
          icon: '🧩',
          description:
            'Design system d’entreprise open source : composants accessibles, tokens en JSON, sync Figma et documentation complète dans Storybook.',
          tags: ['React', 'Storybook', 'TypeScript', 'Radix UI'],
          link: '#',
          repo: '#',
        },
        {
          title: 'Blossom Dashboard',
          icon: '📊',
          description:
            'Tableau de bord avec graphiques animés, filtres en temps réel et thèmes clair/sombre. Composants accessibles et réutilisables, prêts à scaler.',
          tags: ['Next.js', 'TypeScript', 'Recharts'],
          link: '#',
          repo: '#',
        },
        {
          title: 'Switchboard',
          icon: '🎚️',
          description:
            'Console de feature flags et tests A/B avec ciblage par utilisateur/segment, rollouts progressifs, kill-switch et audit complet des changements.',
          tags: ['Next.js', 'TypeScript', 'API REST', 'Tailwind'],
          link: '#',
          repo: '#',
        },
        {
          title: 'Vault Console',
          icon: '🔐',
          description:
            'Gestionnaire de secrets et credentials pour les équipes engineering : rotation automatique, RBAC, chiffrement côté client et journal d’audit.',
          tags: ['Next.js', 'TypeScript', 'WebCrypto API'],
          link: '#',
          repo: '#',
        },
        {
          title: 'Cherry Shop',
          icon: '🛍️',
          description:
            'E-commerce avec panier, checkout Stripe et back-office. Focus sur les micro-interactions, le dark mode et la perf — Lighthouse 95+ sur mobile.',
          tags: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
          repo: 'https://github.com/juliemoura/cherry-shop',
        },
      ],
    },
    contact: {
      titlePrefix: 'On ',
      titleAccent: 'discute ?',
      subtitle: 'Un projet en tête, ou juste envie d’échanger sur le code et le design ? Écris-moi 🍒',
      cta: 'Envoyer un message →',
      labels: { email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub', phone: 'Téléphone' },
    },
    footer: { made: 'Fait avec 🍒 et beaucoup de code par ', by: 'Julie Moura' },
    langSwitcher: { label: 'Langue' },
  },
}

export const SUPPORTED_LANGS: Lang[] = ['pt', 'en', 'fr']

export function detectBrowserLang(): Lang {
  if (typeof navigator === 'undefined') return 'pt'
  const candidates = [navigator.language, ...(navigator.languages ?? [])]
  for (const raw of candidates) {
    if (!raw) continue
    const code = raw.toLowerCase().split('-')[0]
    if (code === 'pt' || code === 'en' || code === 'fr') return code
  }
  return 'pt'
}
