
import { getThemeConfig } from '@sugarat/theme/node'
import type { Theme } from '@sugarat/theme'
const baseUrl = 'https://www.lottecoffee.cn/'
const RSS: Theme.RSSOptions = {
  title: '白日梦想家Coder',
  baseUrl,
  copyright: 'Copyright (c) 2025-present, 白日梦想家Coder',
}
const blogTheme = getThemeConfig({
  RSS,
  mermaid: true,
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
    copyright: 'MIT License | 瀚海',
    icpRecord: {
      name: '蜀ICP备2024112904号',
      link: 'https://beian.miit.gov.cn/'
    }
  },
  themeColor: 'vp-green',
  author: '白日梦想家Coder',
  buttonAfterArticle: {
    openTitle: '赞赏',
    closeTitle: '下次一定',
    content: '<img src="https://pic1.imgdb.cn/item/67850dc4d0e0a243d4f3f43c.jpg">',
    icon: 'aliPay'
  },
  popover: {
    title: '公告',
    body: [
      { type: 'text', content: '👇 微信 👇' },
      {
        type: 'image',
        src: 'https://img520.com/FlKCPV.jpg'
      },
      {
        type: 'text',
        content: '欢迎大家私信交流'
      },
    ],
    duration: 0
  },
 oml2d: {
    mobileDisplay: true,
    models: [
      {
        path: 'https://model.hacxy.cn/HK416-1-normal/model.json',
        position: [0, 60],
        scale: 0.055,
        stageStyle: {
          height: 450
        }
      }
    ]
  }

})

export { blogTheme }
