import { defineConfig } from 'vitepress'


import { blogTheme } from './blog-theme'
export default defineConfig({
  extends: blogTheme,
  lang: 'zh-cn',
  title: 'CoffeeCoder',
  description: '一个喜欢写笔记的coder',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '目录'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '​⛰️​​ Java', 
        items: [
          { text: '基础', link: '/Java/Base/'},
        ]
      },
      { text: '​🏯​​ Python', 
        items: [
          { text: '基础', link: '/Python/Base/'},
        ]
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Eason-shu/MyBlog'
      }
    ]
  }
})
