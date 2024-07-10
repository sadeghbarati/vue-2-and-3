<template>
  <div>
    {{ modelValue }}

    <br />
    
    {{ title }}


    <button @click="emits('update:modelValue', Math.random().toFixed(2))">
      update modelValue prop inside the component
    </button>

    <button @click="emits('update:title', Math.random().toFixed(2))">
      update title prop inside the component
    </button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: string
  title: string
}>(), {
  title: 'dummy title'
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update:title', anyArg: string): void
}>()

// or named tuple syntax
// const emits = defineEmits<{
//   'update:modelValue': [value: string] 
//   'update:title': [anyArg: string]
// }>()
</script>
