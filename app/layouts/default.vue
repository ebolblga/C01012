<script setup lang="ts">
useHead({
    htmlAttrs: {
        lang: 'en',
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#C01012' },
        { name: 'msapplication-TileColor', content: '#C01012' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'C01012 (COLOR)' },
        { name: 'application-name', content: 'C01012 (COLOR)' },
        { name: 'msapplication-TileImage', content: '/favicon.ico' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'C01012 (COLOR)' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ebolblga' },
        { name: 'twitter:creator', content: '@ebolblga' },
        // Additional SEO
        { name: 'author', content: 'ebolblga' },
        {
            name: 'keywords',
            content:
                'hex color codes, hexadecimal colors, color finder, web design, CSS colors, color tools, word to hex, spellable colors',
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
    ],
    link: [
        {
            rel: 'prefetch',
            href: '/FiraCode-VariableFont_wght.ttf',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
        },
        {
            rel: 'icon',
            href: '/favicon.ico',
            crossorigin: 'anonymous',
        },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.ico' },
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
        { rel: 'canonical', href: 'https://c01012.vercel.app' },
    ],
})
</script>
<template>
    <div class="m-0 p-3 bg-background text-text">
        <slot />
    </div>
</template>
<style>
body {
    font-size: 14px;
    font-family: Fara Code;
    background-color: #161212;
}

@font-face {
    font-family: 'Fara Code';
    src: url('/FiraCode-VariableFont_wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    box-shadow: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 4px;
}

::-webkit-scrollbar-corner {
    background: transparent;
}
</style>
