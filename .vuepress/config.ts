import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '我的个人博客',
    description: '这是我的技术博客',

    theme: defaultTheme({
        // 导航栏配置
        navbar: [
            { text: '首页', link: '/' },
            {
                text: '文章',
                link: '/articles/'
            },
            { text: '关于', link: '/about' }
        ],

        // 侧边栏配置
        sidebar: {
            // 当访问 /articles/ 路径时显示此侧边栏
            '/articles/': [
                {
                    text: '我的文章',
                    collapsible: true,
                    children: [
                        '/articles/1.md', // 指向你的第一篇博文
                        // 后续可以添加更多文章
                    ]
                }
            ]
        }
    })
})