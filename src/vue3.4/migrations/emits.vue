<template>
  <div>
    <!-- 1. prop usage -->
    <p>{{ text }}</p>
    <!-- 2. $props is accessible inside template without even defining it -->
    <!-- <p>{{ $props.text }}</p> -->
    <!-- 3. with local props variable -->
    <!-- <p>{{ props.text }}</p> -->

    <!-- <button @click="emit('accepted')">OK</button> -->
    <!-- or -->
    <button @click="$emit('accepted', 'return something')">OK</button>
  </div>
</template>

<script setup>
// const props = defineProps(['text'])
// const emits = defineEmits(['accepted'])

defineProps(['text'])
defineEmits(['accepted'])
</script>
