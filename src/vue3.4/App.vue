<script setup lang="ts">
import { ref } from 'vue'
import Listener from './migrations/$listeners.vue'
import Emit from './migrations/emits.vue'
import Keycode from './migrations/keycode.vue'
import FilterComputed from './migrations/filter-computed.vue'
import ModelValueComp from './migrations/v-model.vue'
import Todos from './components/Todos.vue'

const msg = ref('Hello World')
const title = ref()

function logListener() {
  console.log('forward event in vue 3')
}
function acceptedEmit(str) {
  console.log('emited function vue 3' + str)
}
</script>

<template>
  <div>
    <div>
      <h1>I'm Vue 3.4!</h1>
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

    <a href="https://v3-migration.vuejs.org/breaking-changes/filters.html"><s>filter</s>/computed</a> 

    <FilterComputed :account-balance="1000"/>

    <hr />
    
    <a href="https://v3-migration.vuejs.org/breaking-changes/v-model.html">v-model two way binding</a>

    <ModelValueComp v-model="msg" v-model:title="title" />

    <hr />

    <h4>Todo</h4>

    <Todos />
  </div>
</template>
