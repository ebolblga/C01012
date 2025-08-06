<script setup lang="ts">
import type { ResultItem } from '@types'
const props = defineProps<{ results: ResultItem[] }>()
</script>
<template>
    <table class="w-full table-auto border-collapse">
        <thead>
            <tr>
                <th class="border px-4 py-2">Hex Code</th>
                <th class="border px-4 py-2">Original Word</th>
            </tr>
        </thead>
        <tbody v-if="results.length">
            <TheResultRow v-for="(item, i) in results" :key="i" :item="item" />
        </tbody>
        <tbody v-else>
            <tr class="italic">
                <td class="border px-4 py-2">#******</td>
                <td class="border px-4 py-2">No matching words found</td>
            </tr>
        </tbody>
    </table>
</template>
