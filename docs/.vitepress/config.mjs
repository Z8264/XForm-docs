import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'XForm',
  description: '表单解决方案',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/Guide/01-what' },
      { text: 'API', link: '/API/01-XForm' },
    ],

    sidebar: {
      '/Guide/': [
        {
          text: '开始',
          items: [
            { text: '什么是 XForm?', link: '/Guide/01-what' },
            { text: '快速开始', link: '/Guide/02-started' },
          ],
        },
        {
          text: '配置表单',
          items: [
            { text: '校验', link: '/Guide/' },
            { text: '联动', link: '/Guide/' },
            { text: 'Debug', link: '/Guide/' },
          ],
        },
      ],
      '/API/': [
        {
          text: '表单',
          items: [
            { text: 'XForm', link: '/API/01-XForm' },
            { text: 'schema', link: '/API/02-schema' },
          ],
        },
        {
          text: '组件',
          items: [
            { text: 'XTextField', link: '/API/' },
            { text: 'XSelect', link: '/API/' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
