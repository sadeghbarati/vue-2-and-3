<template>
  <!-- $listeners is only needed if we want to forward events when we use the Keycode component -->
  <input v-on:keyup.13="submit" v-on="$listeners" />
</template>

<script>
export default {
  name: 'Keycode',
  methods: {
    submit() {
      console.log('submit on keyup enter')
    }
  }
}
</script>
