// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/fonts', '@vueuse/nuxt', resolve(__dirname, 'modules/get-word-lists.ts')],
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
})
