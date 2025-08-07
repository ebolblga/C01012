<script setup lang="ts">
// @ts-ignore
import markdownIt from 'markdown-it'
import readmeRaw from '../README.md?raw'

useSeoMeta({
    title: 'About C01012 (COLOR) - HEX Color Code Word Finder',
    description:
        'Learn about C01012 (COLOR), a web application that finds words spellable in hexadecimal color codes. Discover the HEX number to Latin/Cyrillic symbol mapping and word sources.',
    keywords:
        'about C01012, hex color codes, hexadecimal colors, color mapping, word sources, CSS colors, web design tools',
    author: 'ebolblga',
    robots: 'index, follow',
    // Open Graph
    ogTitle: 'About C01012 (COLOR) - HEX Color Code Word Finder',
    ogDescription:
        'Learn about C01012 (COLOR), a web application that finds words spellable in hexadecimal color codes.',
    ogType: 'website',
    ogUrl: 'https://c01012.vercel.app/about',
    ogSiteName: 'C01012 (COLOR)',
    ogImage: 'https://c01012.vercel.app/og-image.png',
    ogLocale: 'en_US',
    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterSite: '@ebolblga',
    twitterCreator: '@ebolblga',
    twitterTitle: 'About C01012 (COLOR) - HEX Color Code Word Finder',
    twitterDescription:
        'Learn about C01012 (COLOR), a web application that finds words spellable in hexadecimal color codes.',
    twitterImage: 'https://c01012.vercel.app/og-image.png',
})

useHead({
    link: [{ rel: 'canonical', href: 'https://c01012.vercel.app/about' }],
})

const md = markdownIt({
    html: true,
})

const html = md.render(readmeRaw)
</script>
<template>
    <main class="w-full max-w-[900px] min-w-[700px] mx-auto">
        <nav class="mt-3">
            <NuxtLink to="/">{{ '<- Back to main page' }}</NuxtLink>
        </nav>
        <article class="markdown-body p-4 pt-10" v-html="html"></article>
    </main>
</template>
<style>
@import 'github-markdown-css/github-markdown.css';

.markdown-body {
    background-color: transparent;
}

.markdown-body img {
    display: none;
}
</style>
