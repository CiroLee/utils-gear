import { defineConfig } from 'vitepress';
export default defineConfig({
  title: 'utils-gear',
  base: '/utils-gear/',
  description: 'Like a gear, tiny and useful frontend function utils written in typescript',
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/CiroLee/utils-gear' }],
    sidebar: [
      {
        text: 'API',
        items: [
          {
            text: 'common',
            link: '/api/common.md',
          },
          {
            text: 'string',
            link: '/api/string.md',
          },
          {
            text: 'number',
            link: '/api/number.md',
          },
          {
            text: 'object',
            link: '/api/object.md',
          },
          {
            text: 'array',
            link: '/api/array.md',
          },
          {
            text: 'math',
            link: '/api/math.md',
          },
          {
            text: 'cookie',
            link: '/api/cookie.md',
          },
          {
            text: 'storage',
            link: '/api/storage.md',
          },
          {
            text: 'color',
            link: '/api/color.md',
          },
          {
            text: 'validator',
            link: '/api/validator.md',
          },
          {
            text: 'browser',
            link: '/api/browser.md',
          },
        ],
      },
    ],
  },
});
