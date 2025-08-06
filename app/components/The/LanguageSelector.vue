<script setup lang="ts">
import type { Languages } from '@types'

const props = defineProps<{
    modelValue: Languages
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', val: Languages): void
}>()

function onChange(e: Event) {
    const val = (e.target as HTMLSelectElement).value as Languages
    emit('update:modelValue', val)
}
</script>

<template>
    <div class="mb-4">
        <label for="list-select" class="mr-2 font-medium">Select List:</label>
        <select
            id="list-select"
            :value="modelValue"
            @change="onChange"
            class="px-2 py-1 border rounded">
            <option value="russian">Russian</option>
            <option value="english">English</option>
        </select>
    </div>
</template>
