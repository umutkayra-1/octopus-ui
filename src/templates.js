export const templates = [
  {
    id: 'support-center',
    name: 'Support Center',
    tagline: 'Bilingual FAQ & help center template',
    description: 'A beautiful, customizable, bilingual (TR/EN) support center and FAQ page template. Includes full-text search, collection-based navigation, article feedback, and responsive design.',
    category: 'Support',
    tags: ['React', 'Vite', 'i18n', 'FAQ', 'Help Center'],
    github: 'https://github.com/umutkayra-1/support-center-template',
    previewImg: null,
    features: [
      'Bilingual support (TR/EN)',
      'Full-text search with Cmd+K',
      'Collection-based article organization',
      'Emoji feedback on articles',
      'Responsive sidebar navigation',
      'Customizable via config.js'
    ],
    install: 'npx degit umutkayra-1/support-center-template my-support\ncd my-support\nnpm install\nnpm run dev',
    aiSkill: true,
    version: '1.0.0',
    updatedAt: '2026-08-18'
  },
  // Future templates will be added here
]

export const categories = ['All', ...new Set(templates.map(t => t.category))]
