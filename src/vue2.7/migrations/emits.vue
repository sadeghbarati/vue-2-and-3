<template>
  <div>
    <p>{{ text }}</p>
    {{ $props.text }}
    
    <button v-on:click="$emit('accepted', 'return something')">OK</button>
  </div>
</template>
<script>
  export default {
    props: ['text']
  }
</script>
