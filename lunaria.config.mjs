import { defineConfig } from '@lunariajs/core/config';

export default defineConfig({
  repository: { name: 'YoshuGH/AgentKit-Docs' },
  sourceLocale: { label: 'English', lang: 'en' },
  locales: [{ label: 'Español', lang: 'es' }],
  files: [
    {
      type: 'universal',
      include: ['src/content/docs/**/*.{md,mdx}'],
      exclude: ['src/content/docs/es/**'],
      pattern: {
        source: 'src/content/docs/@path',
        locales: 'src/content/docs/@lang/@path',
      },
    },
  ],
  outDir: '.lunaria',
});
