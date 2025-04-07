import BlogTheme from '@sugarat/theme'
import confetti from "./components/confetti.vue"
import DataPanel from "./components/DataPanel.vue"

import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

// 自定义样式重载
import './style.scss'

// 自定义主题色
// import './user-theme.css'

export default {
    extends: BlogTheme,
    enhanceApp({app, router}) { 
        app.component('confetti' , confetti)
        app.component('DataPanel' , DataPanel)
        if (inBrowser) {
          router.onAfterRouteChanged = () => {
            busuanzi.fetch()
          }
        }
      }
}

