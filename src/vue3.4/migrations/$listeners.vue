<template>
  <div>
    <!-- listeners are  part of $attrs in vue3 -->
    <button v-bind="$attrs">
      <slot />
    </button>
  </div>
</template>

<!-- <script>
export default {
  inheritAttrs: false
}
</script> -->

<!-- or defineOptions in script setup -->

<script setup>
defineOptions({
  inheritAttrs: false,
})
</script>
