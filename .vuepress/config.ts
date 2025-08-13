import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '�ҵĸ��˲���',
    description: '�����ҵļ�������',

    theme: defaultTheme({
        // ����������
        navbar: [
            { text: '��ҳ', link: '/' },
            {
                text: '����',
                link: '/articles/'
            },
            { text: '����', link: '/about' }
        ],

        // ���������
        sidebar: {
            // ������ /articles/ ·��ʱ��ʾ�˲����
            '/articles/': [
                {
                    text: '�ҵ�����',
                    collapsible: true,
                    children: [
                        '/articles/1.md', // ָ����ĵ�һƪ����
                        // ����������Ӹ�������
                    ]
                }
            ]
        }
    })
})