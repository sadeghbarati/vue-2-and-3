<template>
  <div>
    {{ value }}

    <br />
    
    {{ title }}

    <button @click="emitValue">
      update modelValue prop inside the component
    </button>

    <button @click="emitTitle">
      update title prop inside the component
    </button>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'title',
    event: 'change'
  },
  props: {
    // this allows using the `value` prop for a different purpose
    value: {
      type: String,
      required: false
    },
    // use `title` as the prop which take the place of `value`
    title: {
      type: String,
      default: 'dummy title',
      required: true
    }
  },
  methods: {
    emitValue() {
      console.log(this.$emit)
      // this.$emit('update:value', Math.random().toFixed(2))
    },
    emitTitle() {
      this.$emits('update:title', Math.random().toFixed(2))
    }
  }
}
</script>
