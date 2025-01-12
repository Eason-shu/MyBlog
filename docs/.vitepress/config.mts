import { defineConfig } from 'vitepress'


import { blogTheme } from './blog-theme'
export default defineConfig({
  extends: blogTheme,
  lang: 'zh-cn',
  title: '学习随笔',
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
      { text: 'Python', 
        items: [
          { text: '基础', link: '/Python/Base/'},
          { text: '爬虫',  link: '/Python/Spider/'},
          { text: '机器学习',  link: '/Python/MachineLearning/'},
          { text: '深度学习',  link: '/Python/DeepLearning/'},
          { text: '数据结构与算法',  link: '/Python/DataStructureAndAlgorithm/'},
        ]
      },
    
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ATQQ/sugar-blog/tree/master/packages/theme'
      }
    ]
  }
})
