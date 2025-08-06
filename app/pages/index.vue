<script setup lang="ts">
import { mapping, allowedLengths } from '@constants'
import { type ResultItem, Languages, languageOptions } from '@types'
import { useLocalStorage } from '@vueuse/core'

useSeoMeta({
    title: 'C01012 (COLOR)',
})

const selectedLanguage = useLocalStorage<Languages>(
    'selected-language',
    Languages.english
)
const results = ref<ResultItem[]>([])

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
        const words = text
            .split(/\r?\n/)
            .map((w) => w.trim())
            .filter((w) => w)

        const filtered: ResultItem[] = []
        let index = 0
        for (const word of words) {
            const tokens: string[] = []
            let valid = true

            for (const char of word) {
                const symbol = mapping[char]
                if (!symbol) {
                    valid = false
                    break
                }
                tokens.push(symbol)
            }

            // console.log(word, tokens)

            if (!valid) continue
            const hexBody = tokens.join('')
            if (!allowedLengths.includes(hexBody.length)) continue

            filtered.push({ id: index, hex: `#${hexBody}`, word })
            index++
        }

        results.value = filtered
    } catch (err) {
        console.error('Error loading or parsing file:', err)
    }
}
</script>
<template>
    <div class="min-w-[800px] w-3/4 mx-auto">
        <TheLanguageSelector
            v-model="selectedLanguage"
            @change="loadAndFilter" />
        <TheResultsTable :results="results" />
    </div>
</template>
