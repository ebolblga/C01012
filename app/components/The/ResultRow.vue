<script setup lang="ts">
import type { ResultItem } from '@types'
const props = defineProps<{ item: ResultItem }>()
const emits = defineEmits<{}>()
</script>
<template>
    <tr>
        <td class="border px-4 py-2">
            <div class="flex items-center">
                <span>{{ item.hex }}</span>
                <button
                    class="flex items-center flex-1 ml-4 h-6 rounded-lg overflow-hidden hover:scale-[99%] active:opacity-80 transition justify-end px-1"
                    :style="{ backgroundColor: item.hex }"
                    @click="copyHex(item.hex)"
                    :title="`Copy ${formatHex(item.hex)}`">
                    <Icon
                        name="material-symbols:content-copy"
                        size="16"
                        class="text-white" />
                </button>
            </div>
        </td>
        <td class="border px-4 py-2">{{ item.word }}</td>
    </tr>
</template>
