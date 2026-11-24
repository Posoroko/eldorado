import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'fr-FR',
  title: 'Bistrot d’El Dorado',
  description: 'Proposition de projet pour le nouveau site du Bistrot d’El Dorado',

  themeConfig: {
    outline: {
      level: 'deep',
      label: 'Sur cette page'
    },
    nav: [
      { text: 'Accueil', link: '/' }
    ],
    sidebar: [
      {
        text: 'Proposition',
        items: [
          { text: 'Présentation du document', link: '/presentation' },
          { text: 'Le projet', link: '/projet' },
          { text: 'Objectifs', link: '/objectifs' },
          { text: 'Choix techniques', link: '/choix-techniques' },
          { text: 'Stratégie SEO', link: '/strat-seo' },
          { text: 'Nom de domaine', link: '/nom-de-domaine' },
          { text: 'Plan du site', link: '/plan-du-site' },
          { text: 'Textes', link: '/textes' },
          { text: 'Lexique', link: '/lexique' }
        ]
      }
    ],
    docFooter: {
      prev: 'Précédent',
      next: 'Suivant'
    },
    socialLinks: []
  }
})
