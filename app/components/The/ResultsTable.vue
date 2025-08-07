<script setup lang="ts">
// import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
// // @ts-ignore
// import { RecycleScroller } from 'vue-virtual-scroller'
import type { ResultItem } from '@types'

const props = defineProps<{ results: ResultItem[] }>()
</script>
<template>
    <table class="w-full table-auto border-separate border-spacing-0">
        <thead class="sticky top-0 z-10">
            <tr>
                <th class="px-4 py-2 border border-secondary bg-background">
                    Hex Code
                </th>
                <th class="px-4 py-2 border border-secondary bg-background">
                    Original Word
                </th>
            </tr>
        </thead>
        <!-- <tbody v-if="results.length">
            <RecycleScroller
                class="scroller"
                :items="results"
                :item-size="41"
                key-field="id"
                v-slot="{ item }">
                <TheResultRow :item="item" :key="item.id" />
            </RecycleScroller>
        </tbody> -->
        <tbody v-if="results.length">
            <TheResultRow
                v-for="(item, i) in results"
                :key="item.id"
                :item="item" />
        </tbody>
        <tbody v-else>
            <tr class="italic">
                <td class="border px-4 py-2">#******</td>
                <td class="border px-4 py-2">No matching words found</td>
            </tr>
        </tbody>
    </table>
</template>
