<script setup lang="ts">
import { Languages, languageOptions } from '@types'
const props = defineProps<{ modelValue: Languages }>()
const emit = defineEmits<{
    (e: 'update:modelValue', val: Languages): void
}>()

function onChange(e: Event) {
    const val = (e.target as HTMLSelectElement).value as Languages
    emit('update:modelValue', val)
}
</script>

<template>
    <div class="mb-4 rounded">
        <label for="lang-select" class="mr-2 font-medium"
            >Language for search:</label
        >
        <select
            id="lang-select"
            v-model="props.modelValue"
            @change="onChange"
            class="mt-3 px-3 py-1 w-full bg-secondary rounded outline-none">
            <option
                v-for="opt in languageOptions"
                :key="opt.value"
                :value="opt.value">
                {{ opt.label }}
            </option>
        </select>
    </div>
</template>
