<script setup lang="ts">
// @ts-ignore
import markdownIt from 'markdown-it'
import readmeRaw from '../README.md?raw'

useSeoMeta({
    title: 'C01012 | About',
})

const md = markdownIt({
    html: true,
})

const html = md.render(readmeRaw)
</script>
<template>
    <NuxtLink to="/">{{ '<- Back to main page' }}</NuxtLink>
    <div class="markdown-body p-4 pt-6" v-html="html"></div>
</template>
<style>
@import 'github-markdown-css/github-markdown.css';

.markdown-body {
    background-color: transparent;
}
</style>
