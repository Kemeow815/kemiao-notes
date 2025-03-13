import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar, algolia } from './configs'

const APP_BASE_PATH = basename(process.env.APP_BASE_PATH || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: '克喵の博客站',
  description: '克喵的博客，致力于分享资源和生活，欢迎访问~',
  head,

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: 'localhostLinks',

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: 'https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/logo.webp',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Kemeow815' }],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2025-present 克喵爱吃卤面',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    /* Algolia DocSearch 配置 */
    algolia,

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'kemiao.notes',
    },

    comment: {
      repo: 'maomao1996/mm-notes',
      repoId: 'MDEwOlJlcG9zaXRvcnkxNTc0ODc5Mjg=',
      category: 'Announcements',
      categoryId: 'DIC_kwDOCWMTOM4CZ2rf',
    },
  },

  /* 生成站点地图 */
  sitemap: {
    hostname: 'https://notes.kemeow.top',
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
