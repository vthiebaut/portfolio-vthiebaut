// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo'
  ],


  // Configuration SEO - Portfolio avec référence dépannage informatique Dax - update test
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://portfolio.vthiebaut.fr',
    name: 'Valentin Thiebaut - Développeur Full-Stack',
    description: 'Portfolio de Valentin Thiebaut, développeur full-stack. Développement web, mobile et services de dépannage informatique à Dax et dans les Landes.',
    defaultLocale: 'fr',
  },

  // Configuration des meta tags par défaut
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'keywords', 
          content: 'développeur web Dax, développeur full-stack, Vue.js, Symfony, React Native, portfolio développeur, dépannage informatique Dax, réparation PC Dax, développement web Dax, Landes' 
        },
        { 
          name: 'author', 
          content: 'Valentin Thiebaut' 
        },
        { 
          name: 'geo.region', 
          content: 'FR-40' 
        },
        { 
          name: 'geo.placename', 
          content: 'Dax' 
        },
        { 
          name: 'geo.position', 
          content: '43.7079;1.0536' 
        },
        { 
          name: 'ICBM', 
          content: '43.7079, 1.0536' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/terminal.png' },
        { rel: 'apple-touch-icon', href: '/terminal.png' }
      ]
    }
  },

  // Runtime config pour les variables d'environnement
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://portfolio.vthiebaut.fr/api',
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_anroc2d',
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_rk9b4ei',
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'zNbMtvBNYdn8k3b1l',
    }
  },

  // CSS global
  css: ['~/assets/css/main.css'],

  // TypeScript
  typescript: {
    strict: true
  },

  // Sitemap automatique (via @nuxtjs/seo)
  // En mode statique, on n'utilise pas l'API
  sitemap: {
    // sources: [] // Désactivé pour le mode statique, le sitemap sera généré automatiquement
    // S'assurer que le sitemap utilise la bonne URL de base
    hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://portfolio.vthiebaut.fr',
  },

  // Optimisations SEO
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/depannage-informatique-dax'],
      // Exclure les pages qui nécessitent l'API (backoffice)
      ignore: ['/backoffice', '/backoffice-login', '/backoffice/**'],
      // Ne pas suivre les liens vers backoffice
      failOnError: false
    }
  },

  // Configuration du serveur de développement
  devServer: {
    port: 5175,
    host: '0.0.0.0'
  },

  // Forcer la détection des composants
  components: true
})
