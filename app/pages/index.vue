<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { type Result, WordList } from '@types'

useSeoMeta({
    title: 'C01012 (COLOR)',
})

const selectedList = useLocalStorage<WordList>(
    'selected-language',
    WordList.english
)
const results = ref<Result[]>([])

const mapping: Record<string, string> = {
    // Junk
    ' ': '',
    '.': '',
    '-': '',
    // 0
    o: '0',
    O: '0',
    о: '0',
    О: '0',
    // 1
    l: '1',
    L: '1',
    I: '1',
    // 2
    z: '2',
    Z: '2',
    // 3
    з: '3',
    З: '3',
    // 4
    h: '4',
    ч: '4',
    Ч: '4',
    // 5
    s: '5',
    S: '5',
    // 6
    G: '6',
    б: '6',
    Б: '6',
    // 7
    t: '7',
    T: '7',
    // 8
    X: '8',
    // 9
    g: '9',
    q: '9',
    д: '9',
    Д: '9',
    // a
    a: 'a',
    A: 'A',
    а: 'a',
    А: 'А',
    // b
    b: 'b',
    B: 'B',
    в: 'B',
    В: 'B',
    // c
    c: 'c',
    C: 'C',
    с: 'c',
    С: 'C',
    // d
    d: 'd',
    D: 'D',
    // e
    e: 'e',
    E: 'E',
    е: 'e',
    Е: 'e',
    // f
    f: 'f',
    F: 'F',
    // 10
    ю: '10',
    Ю: '10',
    // 11
    N: '11',
    // 12
    R: '12',
}

const allowedLengths = [3, 4, 6, 8]

onMounted(() => {
    loadAndFilter()
})

async function loadAndFilter() {
    try {
        const fileName =
            selectedList.value === 'russian'
                ? '/russianUTF-8.txt'
                : '/englishUTF-8.txt'
        const res = await fetch(fileName)
        const text = await res.text()
        const words = text
            .split(/\r?\n/)
            .map((w) => w.trim())
            .filter((w) => w)

        const filtered: Result[] = []
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

            filtered.push({ hex: `#${hexBody}`, word })
        }

        results.value = filtered
    } catch (err) {
        console.error('Error loading or parsing file:', err)
    }
}

function normalizeHex(rawHex: string): string {
    let hex = rawHex.replace(/^#/, '').toLowerCase()
    if (!allowedLengths.includes(hex.length)) {
        throw new Error(`Invalid hex length: ${hex.length}`)
    }

    // expand 3 → 6, 4 → 8
    if (hex.length === 3 || hex.length === 4) {
        hex = hex
            .split('')
            .map((ch: string) => ch + ch) // e.g. 'f' → 'ff'
            .join('')
    }

    return `#${hex}`
}

function copyHex(rawHex: string): void {
    let normHex
    try {
        normHex = normalizeHex(rawHex)
    } catch (e) {
        normHex = rawHex.toLowerCase()
    }

    navigator.clipboard.writeText(normHex)
}
</script>
<template>
    <div class="p-6">
        <div class="mb-4">
            <label for="list-select" class="mr-2 font-medium"
                >Select List:</label
            >
            <select
                id="list-select"
                v-model="selectedList"
                class="px-2 py-1 border rounded">
                <option value="russian">Russian</option>
                <option value="english">English</option>
            </select>
        </div>

        <table
            v-if="results.length"
            class="mt-6 w-full table-auto border-collapse">
            <thead>
                <tr>
                    <th class="border px-4 py-2">Hex Code</th>
                    <th class="border px-4 py-2">Original Word</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in results" :key="index">
                    <td class="border px-4 py-2">
                        <div class="flex items-center">
                            <!-- Hex text -->
                            <span>{{ item.hex }}</span>

                            <!-- color swatch + copy btn -->
                            <div
                                class="flex items-center flex-1 ml-4 h-6 rounded-lg overflow-hidden whitespace-nowrap"
                                :style="{ backgroundColor: item.hex }">
                                <!-- spacer to fill until icon -->
                                <span class="flex-1"></span>

                                <!-- copy button -->
                                <button
                                    @click="copyHex(item.hex)"
                                    class="px-2 py-1 hover:bg-white/30 transition"
                                    :title="`Copy ${item.hex}`">
                                    <Icon
                                        name="material-symbols:content-copy"
                                        size="16"
                                        class="text-white" />
                                </button>
                            </div>
                        </div>
                    </td>
                    <td class="border px-4 py-2">{{ item.word }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
