import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://yoshugh.github.io',
  base: '/AgentKit-Docs',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'AgentKit',
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        es: { label: 'Español', lang: 'es' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/YoshuGH/AgentKit-Docs' },
      ],
      components: { Footer: './src/components/Footer.astro' },
      sidebar: [
        {
          label: 'Getting started',
          translations: { es: 'Primeros pasos' },
          items: [
            'getting-started/introduction',
            'getting-started/requirements',
            'getting-started/installation',
            'getting-started/connect-mcp',
            'getting-started/quick-start',
          ],
        },
        {
          label: 'Guides',
          translations: { es: 'Guías' },
          items: [
            'guides/widgets',
            'guides/blueprints',
            'guides/animations',
            'guides/mvvm',
            'guides/captures',
            'guides/asset-validation',
          ],
        },
        {
          label: 'Reference',
          translations: { es: 'Referencia' },
          items: ['reference/toolsets', 'reference/limits'],
        },
        {
          label: 'Support',
          translations: { es: 'Soporte' },
          items: ['support', 'changelog'],
        },
      ],
    }),
  ],
});
