<script setup lang="ts">
import { Languages, languageOptions } from '@types'
const props = defineProps<{ modelValue: Languages }>()
const emit = defineEmits<{ (e: 'update:modelValue', val: Languages): void }>()

function onChange(e: Event) {
    const val = (e.target as HTMLSelectElement).value as Languages
    emit('update:modelValue', val)
}
</script>

<template>
    <div class="mb-4 text-text bg-background p-2 rounded">
        <label for="lang-select" class="mr-2 font-medium"
            >Language for search:</label
        >
        <select
            id="lang-select"
            v-model="props.modelValue"
            @change="onChange"
            class="px-2 py-1 border border-primary bg-background2 text-text rounded">
            <option
                v-for="opt in languageOptions"
                :key="opt.value"
                :value="opt.value">
                {{ opt.label }}
            </option>
        </select>
    </div>
</template>
