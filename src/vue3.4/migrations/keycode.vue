<template>
  <!-- $listeners is part of $attrs, and $attrs will automatically attached to the first element in the template if we don't set inheritAttrs to false -->
  <input v-on:keyup.enter="submit" />
</template>

<script setup>
defineOptions({
  name: 'Keycode'
})

function submit() {
  console.log('keyup event')
}
</script>
