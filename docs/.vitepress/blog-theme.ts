
import { getThemeConfig } from '@sugarat/theme/node'
const blogTheme = getThemeConfig({
  hotArticle: {
    title: '🔥 精选文章',
    nextText: '换一组',
    pageSize: 10,
    empty: '暂无精选内容'
  },
  recommend: {
    title: '🔍 相关文章',
    nextText: '换一组',
    pageSize: 10,
    empty: '暂无相关文章',
    style: 'sidebar',
    sort: 'date',
    showDate: true,
    showNum: true
  },
  footer: {
    version: false,
    copyright: 'MIT License | 红豆稀饭中',
    icpRecord: {
      name: '蜀ICP备2024112904号',
      link: 'https://beian.miit.gov.cn/'
    }
  },
  themeColor: 'vp-default',
  author: '红豆稀饭中',
})

export { blogTheme }
