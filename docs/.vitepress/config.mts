import {defineConfig} from 'vitepress'

import {blogTheme} from './blog-theme'
import {withSidebar} from 'vitepress-sidebar';

/**
 * 基础配置
 */
const vitePressOptions = {
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
            level: [1, 2],
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
                    {text: 'Java基础', link: '/Java/Base/'},
                    {text: 'Mybatis', link: '/Java/Mybatis/'},
                    {text: '分布式课程', link: '/Java/Service/'},
                    {text: 'Netty', link: '/Java/Netty/'},
                ]
            },
            {
                text: '🤖 大模型开发',
                items: [
                    {text: 'LLM基础', link: '/Llm/Base/'},
                    {text: 'RAG技术', link: '/Llm/Rag/'},
                    {text: 'Agent开发', link: '/Llm/Agent/'},
                ]
            },
           
            
        ],
        socialLinks: [
            {
                icon: 'github',
                link: ''
            }
        ],
    },
};

/**
 * 侧边栏
 */
const vitePressSidebarOptions = {
    documentRootPath: '/docs',
    collapsed: true,
};
export default defineConfig(vitePressOptions);
