import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'VuePress',
  description: 'My first VuePress Site',
  base: "/health_doc",
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: ['/health_doc', '/get-started'],
  }),

  bundler: viteBundler(),
})
