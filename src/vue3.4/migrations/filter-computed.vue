<template>
  <h5>Bank Account Balance | <s>filter</s> computed </h5>
  <p>{{ accountInUSD }}</p>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  accountBalance: number
}>()

const accountInUSD = computed(() => '$' + props.accountBalance)
</script>
