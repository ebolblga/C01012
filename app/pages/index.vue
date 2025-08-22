<script setup lang="ts">
import { mapping } from '@constants'
import { type ResultItem, Languages, languageOptions } from '@types'
import { useLocalStorage } from '@vueuse/core'
import Fuse from 'fuse.js'

useSeoMeta({
    title: 'C01012 (COLOR) - Find Spellable Words in HEX Color Codes',
    description:
        'Search for words that can be represented as valid hexadecimal (HEX) color codes.',
    keywords:
        'hex color codes, hexadecimal colors, color finder, web design, CSS colors, color tools, word to hex, spellable colors, color search',
    author: 'ebolblga',
    robots: 'index, follow',
    // Open Graph
    ogTitle: 'C01012 (COLOR) - Find Spellable Words in HEX Color Codes',
    ogDescription:
        'Search for words that can be represented as valid hexadecimal (HEX) color codes.',
    ogType: 'website',
    ogUrl: 'https://c01012.vercel.app',
    ogSiteName: 'C01012 (COLOR)',
    ogImage: 'https://c01012.vercel.app/og-image.png',
    ogLocale: 'en_US',
    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterSite: '@ebolblga',
    twitterCreator: '@ebolblga',
    twitterTitle: 'C01012 (COLOR) - Find Spellable Words in HEX Color Codes',
    twitterDescription:
        'Search for words that can be represented as valid hexadecimal (HEX) color codes.',
})

useHead({
    link: [{ rel: 'canonical', href: 'https://c01012.vercel.app' }],
})

const selectedLanguage = useLocalStorage<Languages>(
    'selected-language',
    Languages.english
)
const rawResults = ref<ResultItem[]>([])
const results = ref<ResultItem[]>([])
const searchText = ref('')

let fuse: Fuse<ResultItem> | null = null

watch([searchText, rawResults], () => {
    if (!fuse || !searchText.value) {
        results.value = rawResults.value
        return
    }
    const searchResults = fuse.search(searchText.value)
    results.value = searchResults
        .sort((a, b) => (a.score ?? 1) - (b.score ?? 1))
        .map((r) => r.item)
})

onMounted(() => {
    loadAndFilter()
})

function processText(text: string) {
    const filtered = filterWords(text)
    rawResults.value = filtered
        .split(/\r?\n/)
        .filter((w) => w)
        .map((word, index) => {
            const hexBody = word
                .split('')
                .map((char) => mapping[char])
                .join('')
            return { id: index, hex: `#${hexBody}`, word }
        })

    fuse = new Fuse(rawResults.value, {
        keys: ['word'],
        includeScore: true,
        threshold: 0.5,
    })
    searchText.value = ''
}

async function loadAndFilter() {
    if (selectedLanguage.value === Languages.custom) {
        return
    }

    try {
        const opt = languageOptions.find(
            (o) => o.value === selectedLanguage.value
        )
        if (!opt?.path) return
        const res = await fetch(opt.path)
        const txt = await res.text()
        processText(txt)
    } catch (err) {
        console.error('Error loading file:', err)
    }
}

async function handleFileUpload(e: Event) {
    const files = (e.target as HTMLInputElement).files
    if (!files || files.length === 0) return

    const file = files[0]
    try {
        if (!file) return
        const txt = await file.text()
        processText(txt)
    } catch (err) {
        console.error('Failed to read file:', err)
    }
}

function exportJson() {
    const data = results.value
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'results.json'
    a.click()
    URL.revokeObjectURL(url)
}
</script>
<template>
    <main class="w-full max-w-[1200px] mx-auto p-4">
        <BaseGitIcon />
        <div class="flex flex-col lg:flex-row gap-4">
            <aside class="w-full lg:w-1/3">
                <header>
                    <div class="flex items-center text-2xl font-medium italic">
                        <h1 class="bg-primary pr-24 w-full">#C01012</h1>
                        <span class="ml-2">(COLOR)</span>
                    </div>
                    <p class="mt-3 mb-3 italic">
                        Web application to search for spellable words in
                        hexadecimal (HEX) color codes
                    </p>
                    <nav>
                        <NuxtLink to="/about" class="text-accent">{{
                            '<- Visit about page to learn more'
                        }}</NuxtLink>
                    </nav>
                </header>
                <section class="mt-6">
                    <TheLanguageSelector
                        v-model="selectedLanguage"
                        @change="loadAndFilter" />
                </section>
                <section
                    class="mt-4"
                    v-if="selectedLanguage === Languages.custom">
                    <label for="txt-upload" class="block mb-1 font-medium"
                        >Upload your .txt</label
                    >
                    <input
                        id="txt-upload"
                        type="file"
                        accept=".txt"
                        @change="handleFileUpload"
                        class="w-full p-2 bg-secondary text-text rounded-sm" />
                </section>
                <section class="mt-6">
                    <label for="search-input" class="sr-only"
                        >Search for words</label
                    >
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search for word..."
                        v-model="searchText"
                        class="w-full p-2 bg-secondary text-text rounded-sm h-[29px]" />
                </section>
                <section>
                    <button
                        @click="exportJson"
                        class="w-full mt-6 py-1 bg-accent text-white rounded-sm hover:bg-accent-dark">
                        Export JSON
                    </button>
                </section>
            </aside>
            <section
                class="w-full lg:w-2/3 overflow-auto lg:h-[90vh] h-[55vh]"
                aria-label="Search results">
                <TheResultsTable :results="results" />
            </section>
        </div>
    </main>
</template>
<style scoped>
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
</style>
