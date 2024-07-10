<template>
  <div>
    <!-- without v-on="$listeners" events like @click will not work -->
    <button v-bind="$attrs" v-on="$listeners"><slot /></button>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false
  }
</script>
