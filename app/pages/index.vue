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

async function loadAndFilter() {
    try {
        const selectedOption = languageOptions.find(
            (o) => o.value === selectedLanguage.value
        )
        const filePath = selectedOption?.path ?? null
        if (!filePath) return

        const res = await fetch(filePath)
        const text = await res.text()

        const filteredText = filterWords(text)

        rawResults.value = filteredText
            .split(/\r?\n/)
            .filter((w) => w)
            .map((word, index) => {
                const hexBody = word
                    .split('')
                    .map((char) => mapping[char])
                    .join('')
                return { id: index, hex: `#${hexBody}`, word }
            })

        // Initialize Fuse
        fuse = new Fuse(rawResults.value, {
            keys: ['word'],
            includeScore: true,
            threshold: 0.5,
        })

        searchText.value = ''
    } catch (err) {
        console.error('Error loading or parsing file:', err)
    }
}
</script>
<template>
    <main class="w-full max-w-[1200px] min-w-[700px] mx-auto p-4">
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
            </aside>
            <section
                class="w-full lg:w-2/3 overflow-auto max-h-[75vh]"
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
