<script setup lang="ts">
import type { Result } from '@types'

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

async function loadAndFilter() {
    try {
        const res = await fetch('/russianUTF-8.txt')
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
</script>
<template>
    <div class="p-6">
        <button
            @click="loadAndFilter"
            class="px-4 py-2 text-text rounded transition">
            Load & Filter
        </button>

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
                <tr
                    v-for="(item, index) in results"
                    :key="index"
                    :style="{ backgroundColor: item.hex }">
                    <td class="border px-4 py-2">{{ item.hex }}</td>
                    <td class="border px-4 py-2">{{ item.word }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
