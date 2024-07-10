<script>
import Listener from './migrations/$listeners.vue'
import Emit from './migrations/emits.vue'
import Keycode from './migrations/keycode.vue'
import FilterComp from './migrations/filter.vue'
import ModelValueComp from './migrations/v-model.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    Listener,
    Emit,
    Keycode,
    FilterComp,
    ModelValueComp,
    Todos
  },
  data () {
    return {
      msg: 'Hello World',
      title: undefined
    }
  },
  methods: {
    logListener: function() {
      console.log('forward event in vue 2.7')
    },
    acceptedEmit(str) {
      console.log('emited function vue 2.7'+ str)
    }
  }
}
</script>

<template>
  <div>
    <div>
      <h1>I'm Vue 2.7!</h1>
      <p>{{ msg }}</p>
      <input type="text" v-model="msg" />
    </div>

    <hr />
    
    <a href="https://v3-migration.vuejs.org/breaking-changes/listeners-removed.html">$listeners/useListener</a>

    <Listener @click="logListener">
      $listener
    </Listener>

    <hr />

    <a href="https://v3-migration.vuejs.org/breaking-changes/emits-option.html">emits</a> 

    <Emit text="prop text" @accepted="acceptedEmit" />

    <hr />

    <a href="https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html">keycode</a> 

    <Keycode />

    <hr />

    <a href="https://v3-migration.vuejs.org/breaking-changes/filters.html">filter</a> 

    <FilterComp v-bind:account-balance="1000" />

    <hr />

    <a href="https://v3-migration.vuejs.org/breaking-changes/v-model.html">v-model two way binding (forgot about vue2 xd this section has err)</a>
    
    <ModelValueComp value.sync="msg" title.sync="title" />

    <hr />

    <h4>Todo</h4>

    <Todos />
  </div>
</template>
