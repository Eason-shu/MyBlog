
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
    copyright: 'MIT License | 红豆稀饭中',
    icpRecord: {
      name: '蜀ICP备2024112904号',
      link: 'https://beian.miit.gov.cn/'
    }
  },
  themeColor: 'vp-default',
  author: '红豆稀饭中',
  buttonAfterArticle: {
    openTitle: '赞赏',
    closeTitle: '下次一定',
    content: '<img src="https://pic1.imgdb.cn/item/67850dc4d0e0a243d4f3f43c.jpg">',
    icon: 'aliPay'
  }
})

export { blogTheme }
