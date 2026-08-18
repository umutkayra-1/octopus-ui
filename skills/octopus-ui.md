# Octopus UI Templates — AI Agent Skill

Use this skill to scaffold production-ready UI templates from [Octopus UI](https://octopuslab.tr/ui).
All templates are MIT-licensed, open-source, and built by [octopuslab.tr](https://octopuslab.tr).

## Available Templates

### support-center

**Bilingual FAQ & Help Center Template**

A customizable, bilingual (TR/EN) support center with full-text search,
collection-based navigation, article feedback, and responsive design.
Built with React 19 + Vite + React Router.

**Install:**

```bash
npx degit umutkayra-1/support-center-template my-support
cd my-support
npm install
npm run dev
```

**Customization files:**

- `src/config.js` — Brand name, logo URL, accent colors, nav links, footer columns, CTA text/href, hero text, basePath
- `src/content.js` — Collections (categories) and articles in bilingual format (tr/en)

**Config structure (src/config.js):**

```js
export const config = {
  brandName: 'YourBrand',
  logo: null,                    // URL or import path; null = text-only
  basePath: '/support',          // URL prefix for all support routes
  defaultLang: 'tr',             // 'tr' or 'en'
  accentColor: '#D97757',        // Primary accent
  accentSoft: '#FDF1EE',         // Accent background
  accentDark: '#B4573A',         // Accent for ordered list numbers
  navLinks: [
    { label: { tr: 'Ana Sayfa', en: 'Home' }, href: '/' },
  ],
  ctaTitle: { tr: '...', en: '...' },
  ctaDesc: { tr: '...', en: '...' },
  ctaButtonLabel: { tr: '...', en: '...' },
  ctaButtonHref: 'mailto:support@example.com',
  heroLine1: { tr: '...', en: '...' },
  heroLine2: { tr: '...', en: '...' },
  footerColumns: [
    { title: { tr: '...', en: '...' }, links: [{ label: { tr: '...', en: '...' }, href: '/' }] }
  ],
  footerTagline: { tr: '...', en: '...' },
  copyright: '...',
}
```

**Article block types (used in content.js):**

| Type | Example |
|------|---------|
| Paragraph | `{ t: 'p', x: 'Text here' }` |
| Heading | `{ t: 'h', x: 'Section Title' }` |
| Bullet list | `{ t: 'ul', x: ['Item 1', 'Item 2'] }` |
| Numbered list | `{ t: 'ol', x: ['Step 1', 'Step 2'] }` |
| Note callout | `{ t: 'note', x: 'Important info' }` |
| Code block | `{ t: 'code', x: 'npm install' }` |
| Link | `{ t: 'link', x: 'Click here', href: '/path' }` |

**Collection structure:**

```js
{
  id: 'unique-slug',
  icon: 'rocket',  // rocket|edit|paw|search|settings|box|shield|heart|wrench|briefcase
  tint: '#FDF1EE', // Icon background color
  title: { tr: 'Turkish', en: 'English' },
  desc: { tr: '...', en: '...' },
  articles: [
    {
      id: 'article-slug',
      title: { tr: '...', en: '...' },
      summary: { tr: '...', en: '...' },
      blocks: {
        tr: [/* block objects */],
        en: [/* block objects */]
      }
    }
  ]
}
```

**Popular articles (shown on home page):**

```js
export const popularArticles = [
  ['collection-id', 'article-id'],
]
```

**When to use this template:**
- User asks for a support page, FAQ section, help center, knowledge base
- User needs bilingual (Turkish/English) documentation
- User wants a self-contained static support site (no backend needed)

**Output:** A complete, buildable Vite project. Run `npm run build` to get static files in `dist/`.

---

*All templates by [octopuslab.tr](https://octopuslab.tr) — open source, MIT licensed.*
