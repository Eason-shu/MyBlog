import {defineConfig} from 'vitepress'

import {blogTheme} from './blog-theme'

export default defineConfig({
    extends: blogTheme,
    lang: 'zh-cn',
    title: '白日梦想家Coder',
    description: '一个喜欢写笔记的coder',
    lastUpdated: true,
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['meta', {name: 'msvalidate.01', content: '6DBA84142A7BE264C5E713EC0074CA33'}]
    ],
    sitemap: {
        hostname: 'https://www.lottecoffee.cn'
    },
    themeConfig: {
        outline: {
            level: [3, 4],
            label: '目录'
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '相关文章',
        lastUpdatedText: '上次更新于',
        logo: '/logo.png',
        nav: [
            {text: '首页', link: '/'},
            {
                text: '​⛰️​​ Java',
                items: [
                    {text: '基础', link: '/Java/Base/'},
                    {text: '分布式课程', link: '/Java/Service/'},
                    {text: '源码阅读笔记', link: '/Java/Source/'},
                ]
            },
            {
                text: '​💻​​ Web',
                items: [
                    {text: 'Vue', link: '/Web/Vue/'},
                ]
            },
            {
                text: '​🏯​​ Android',
                items: [
                    {text: 'Jetpack', link: '/Android/Jetpack/'},
                ]
            },
            {
                text: '​🏯​​ Python',
                items: [
                    {text: '基础知识', link: '/Python/Base/'},
                    {text: '数据分析', link: '/Python/DataAnalysis/'},
                    {text: '量化交易', link: '/Python/Quantization/'},
                ]
            },
            {
                text: '​⚒️​​​ Tools',
                items: [
                    {text: '编程工具', link: '/Tools/Code/'},
                    {text: 'OAuth 2.0', link: '/Design/OAuth/'},
                    {text: '摄影教程', link: '/Tools/Photo/'},
                ]
            },
            {
                text: '​📚​​​ Life',
                items: [
                    {text: '微信读书', link: '/Book/WeiXin/'},
                    {text: '汽车检测业务', link: '/Design/Car/'},
                ]
            },
        ],
        socialLinks: [
            {
                icon: 'github',
                link: ''
            }
        ]
    },
})
