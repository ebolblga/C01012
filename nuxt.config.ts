// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/icon',
        '@nuxt/fonts',
        '@vueuse/nuxt',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        resolve(__dirname, 'modules/get-word-lists.ts'),
    ],
    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
        configPath: 'tailwind.config',
        exposeConfig: {
            level: 2,
        },
        config: {},
        viewer: true,
    },
    alias: {
        '@types': resolve(__dirname, './types/types.ts'),
        '@constants': resolve(__dirname, './app/constants/colorMapping.ts'),
    },
    // SEO Configuration
    site: {
        url: 'https://c01012.vercel.app',
        name: 'C01012 (COLOR)',
        description:
            'Web application to search for spellable words in hexadecimal (HEX) color codes. Find words that can be represented as valid HEX color codes.',
        defaultLocale: 'en',
    },
    // sitemap: {
    //     hostname: 'https://c01012.vercel.app',
    //     urls: [
    //         {
    //             loc: '/',
    //             lastmod: new Date().toISOString(),
    //             changefreq: 'weekly',
    //             priority: 1.0,
    //         },
    //         {
    //             loc: '/about',
    //             lastmod: new Date().toISOString(),
    //             changefreq: 'monthly',
    //             priority: 0.8,
    //         },
    //     ],
    // },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'theme-color', content: '#C01012' },
                { name: 'msapplication-TileColor', content: '#C01012' },
                { name: 'apple-mobile-web-app-capable', content: 'yes' },
                {
                    name: 'apple-mobile-web-app-status-bar-style',
                    content: 'default',
                },
                {
                    name: 'apple-mobile-web-app-title',
                    content: 'C01012 (COLOR)',
                },
                { name: 'application-name', content: 'C01012 (COLOR)' },
                { name: 'msapplication-TileImage', content: '/favicon.ico' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/favicon.ico',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon.ico',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon.ico',
                },
                { rel: 'manifest', href: '/site.webmanifest' },
            ],
        },
    },
})
